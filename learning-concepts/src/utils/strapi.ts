
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

type FetchApiOptions = {
  endpoint: string;
  query?: Record<string, string>;
};

export default async function fetchApi({ endpoint, query }: FetchApiOptions) {
  const url = new URL(`${API_URL}/${endpoint}`);
  if (query) {
    Object.entries(query).forEach(([key, val]) => url.searchParams.append(key, val));
  }

  const res = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
    // Add token if needed
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}
