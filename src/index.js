function toSnakeCase(str) {
    return str.replace().toLowerCase().replace(/\s+/g, "_");
}

function toKebabCase(str) {
    return str.replace(/\s+/g, "-").toLowerCase();
}
  
module.exports = { toSnakeCase, toKebabCase };