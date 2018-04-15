# optional-chain-proxy [![travis-ci](https://travis-ci.org/yayoc/optional-chain-proxy.svg?branch=master)](https://travis-ci.org/yayoc/optional-chain-proxy)

Optional chain access implementation in TypeScript.  
Uses [Proxy API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## Install

```shell
npm install optional-chain-proxy
```

## Usage

```typescript
import { optional } from "optional-chain-proxy";

type User {
  name?: {
    first: string
  }
}
const user: User = getUser(); // { name: null }
const optionalUser = optional(user);
optionalUser.name.first; // undefined, does not throw an exception.
```

## API

`optional-chain-proxy` exports `optional` function.
`optional` function lets a target object or an array and return the object which does not throw an exception even if accessing to null or undefined values.

### `optional`

```typescript
optional<T>(object: T) :: T
```

## License

[MIT](LICENSE)
