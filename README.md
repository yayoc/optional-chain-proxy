# optional-chain-proxy

optional chain access for object or array.  
Uses [Proxy API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## Install

> `$ npm install optional-chain-proxy`

## Usage

```js
import { optional } from "optional-chain-proxy";

type User {
  name?: {
    first: string
  }
}
const user: User = getUser(); // { name: null }
const optionalUser = optional(user);
a.name.first; // undefined, does not throw an exception.
```
