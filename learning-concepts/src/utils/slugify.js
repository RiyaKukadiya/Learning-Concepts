export function slugify(title) {
  return title
  .toString()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "") // Remove accents
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9 ]/g, "") // Remove special characters
  .replace(/\s+/g, "-")// Remove non-alphanumeric characters except hyphens
}

// title.toLowerCase() // Convert to lowercase
//     .trim() // Trim whitespace from both ends
//     .replace(/\s+/g, "-") // Replace spaces with hyphens
//     .replace(/[^a-z0-9-]/g, "");