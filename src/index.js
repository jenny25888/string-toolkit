function toSnakeCase(str) {
    return str.replace().toLowerCase().replace(/\s+/g, "_");
  }
  
  module.exports = { toSnakeCase };