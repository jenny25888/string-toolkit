# @yjenny25888/string-toolkit (Class 3 Exercise)

> A small utility library that helps you manipulate strings.  
> Version 1.0.0 includes a single feature: converting strings to `snake_case`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
   - [Examples](#examples) → `toSnakeCase("Hello World")` → `hello_world`
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @jenny25888/string-toolkit
```
Install via yarn:

```bash
yarn add @jenny25888/string-toolkit
```

## Usage

Basic Usage to toSnakeCase Import:

```js
import { toSnakeCase } from '@jenny2588/string-toolkit';

```

### Examples

Convert a string to snake_case::

```js
import { toSnakeCase } from '@jenny2588/string-toolkit';

const title = "Hello World";
console.log(toSnakeCase(title)); // hello_world

```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

If you discover a security vulnerability, please see our [SECURITY.md](./SECURITY.md) for instructions on responsible disclosure.

## License

This project is licensed under the [MIT License](./LICENSE.md).
