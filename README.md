# Honeybadger - React integration

[![Build status](https://travis-ci.org/wuz/honeybadger-react.svg?branch=master)](https://travis-ci.org/wuz/honeybadger-react)
[![NPM](https://img.shields.io/npm/v/honeybadger-react.svg)](https://npmjs.org/package/honeybadger-react)

[![NPM](https://nodei.co/npm/honeybadger-react.png?compact=true)](https://npmjs.org/package/honeybadger-react)

A [honeybadger-js](https://github.com/honeybadger-io/honeybadger-js/) implementation for [React](https://reactjs.org/).

This package provides a React [error boundary](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) from [Honeybadger.io](https://honeybadger.io). It allows for better

## Installation

You can install the package from NPM.

### npm

```sh
npm i --save honeybadger-js honeybadger-react
# or
yarn add honeybadger-js honeybadger-react
```

## Usage

The recommended usage is by using the [Honeybadger.factory](https://docs.honeybadger.io/lib/javascript/guides/working-with-multiple-clients.html) method to create a client and passing that into the `<HoneybadgerReact />` error boundary component.


```js
import Honeybadger from 'honeybadger-js'
const hbClient = Honeybadger.factory({ apiKey: 'API_KEY' });

import ReactDOM from 'react-dom'
import React from 'react'
import HoneybadgerReact from 'honeybadger-react'

// wrap your entire app tree in the ErrorBoundary provided
ReactDOM.render(
    <HoneybadgerReact client={hbClient}>
        <YourApp />
    </HoneybadgerReact>,
    document.getElementById('app')
)
```

See the [example](example) for more info.

## Support

* Check out the Honeybadger [documentation](https://docs.honeybadger.io/lib/javascript/index.html)
* [Search open and closed issues](https://github.com/wuz/honeybadger-react/issues?q=is%3Aissue) for similar problems
* [Report a bug or request a feature](https://github.com/wuz/honeybadger-react/issues/new)

## License

The honeybadger-react JS library is free software released under the MIT License. See [LICENSE](LICENSE) for details.
