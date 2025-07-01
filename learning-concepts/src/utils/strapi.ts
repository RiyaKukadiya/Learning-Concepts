const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

type FetchApiOptions = {
  endpoint: string;
  query?: Record<string, string>;
  token?: string;
};

export default async function fetchApi({ endpoint, query, token }: FetchApiOptions) {
  if (!API_URL) {
    throw new Error("API_URL is not defined. Please set NEXT_PUBLIC_STRAPI_API_URL in your .env file.");
  }
  if (!endpoint) {
    throw new Error("Endpoint is required.");
  }

  const url = new URL(`${API_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`);
  if (query) {
    Object.entries(query).forEach(([key, val]) => url.searchParams.append(key, val));
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url.toString(), { headers });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText} - ${errorBody}`);
  }

  return res.json();
}
