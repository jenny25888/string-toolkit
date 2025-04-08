const { toSnakeCase } = require("./index.js");

test("toSnakeCase", () => {
    expect(toSnakeCase("Hello World")).toBe("hello_world");
});