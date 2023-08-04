export function regularFormat(str) {
  if (!str) return str
  return str
    .replace(/([A-Z])/g, ' $1') // Add space before each capital letter
    .trim() // Remove leading/trailing spaces
    .replace(/^\w/, (c) => c.toUpperCase()) // Capitalize the first letter
}

export function ageInYears(dob) {
  return Math.floor((Date.now() - dob) / (1000 * 60 * 60 * 24 * 365.25))
}
