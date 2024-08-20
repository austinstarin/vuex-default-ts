# vuex-default-ts

For all examples assume `toy` on `state` is set with an API call where `toy` and all properties are expected.

## Example 1 ([Link 🔗](example-one.ts))

```js
Type '{}' is missing the following properties from type 'Toy': color, shape, texture ts(2739)
```

Just doesn't work.

## Example 2 ([Link 🔗](example-two.ts))

No error but makes all keys on `toy` optional. `year` getter satisfies TypeScript but optionally chains properties that are expected from API contract.

## Example 3 ([Link 🔗](example-three.ts))

No error but making `toy` type `Type | Record<string, unknown>`. Getters satisfy TypeScript but do not enforce safe property access on `toy`.

## Example 4 ([Link 🔗](example-four.ts))

No error and sets `toy` type to `Type | null`. `toy` no longer has a static type but enforces safe property access on `toy`.

## Example 5 ([Link 🔗](example-five.ts))

No error and sets `toy` type to `Type | Record<string, never>`. Getters enforce safe property access on `toy`.
