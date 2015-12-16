
# compose-reducers

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compose two or more reducers

## Installation

    $ npm install @f/compose-reducers

## Usage

```js
var composeReducers = require('@f/compose-reducers')

composeReducers(reducer1, reducer2)

```

## API

### composeReducers(...reducers)

- `...reducers` - List of reducers to compose together

**Returns:** The composed reducer

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/compose-reducers.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/compose-reducers
[git-image]: https://img.shields.io/github/tag/micro-js/compose-reducers.svg
[git-url]: https://github.com/micro-js/compose-reducers
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/compose-reducers.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/compose-reducers
