# @yjenny25888/string-toolkit (Class 3 Exercise)

> A small utility library that helps you manipulate strings.  
> Version 1.1.0 includes two features: converting strings to `snake_case` and `kebab-case`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples) → `toSnakeCase("Hello World")` → `hello_world` , `toKebabCase("hello-world")` -> `Hello World`
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @jenny2588/string-toolkit
```
Install via yarn:

```bash
yarn add @jenny2588/string-toolkit
```

## Usage

Basic Usage to toSnakeCase Import:

```js
import { toSnakeCase } from '@jenny2588/string-toolkit';

```

### Examples

Convert a string to snake_case::

```js
import { toSnakeCase, toKebabCase } from '@jenny2588/string-toolkit';

const title = "Hello World";
console.log(toSnakeCase(title)); 
console.log(toKebabCase(title)); 

```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

If you discover a security vulnerability, please see our [SECURITY.md](./SECURITY.md) for instructions on responsible disclosure.

## License

This project is licensed under the [MIT License](./LICENSE.md).
