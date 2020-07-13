import { foo, bar, Baz } from './a.js'

console.log({ foo, bar: bar(), baz: new Baz().qux() })
