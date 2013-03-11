# Promises/A+

This proposal clarifies the behavioral clauses of the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A), extending it to cover *de facto* behaviors and omitting parts that are underspecified or problematic.

As with Promises/A, this proposal does not deal with how to create, fulfill, or reject promises.

For a full description of the differences between Promises/A+ and Promises/A, see [Differences from Promises/A](differences-from-promises-a.md).

## General

A promise represents a value that may not be available yet. The primary method for interacting with a promise is its `then` method.

## Terminology

1. "promise" is an object or function with a `then` method whose behavior conforms to this specification.
1. "thenable" is an object or function that defines a `then` method.
1. "value" is any legal JavaScript value (including `undefined` or a promise).
1. "exception" is a value that is thrown using the `throw` statement.
1. "reason" is a value that indicates why a promise was rejected.

## Requirements

### Promise States

A promise must be in one of three states: pending, fulfilled, or rejected.

1. When pending, a promise:

    1. may transition to either the fulfilled or rejected state.

1. When fulfilled, a promise:

    1. must not transition to any other state.
    1. must have a fulfillment value, which must not change.

1. When rejected, a promise:

    1. must not transition to any other state.
    1. must have a rejection reason, which must not change.

Here, "must not change" means immutable identity (i.e. `===`), but does not imply deep immutability.

### The `then` Method

A promise must provide a `then` method to access its current or eventual fulfillment value or rejection reason.

A promise's `then` method accepts two arguments:

```js
promise.then(onFulfilled, onRejected)
```

1. Both `onFulfilled` and `onRejected` are optional arguments:
    1. If `onFulfilled` is not a function, it must be ignored.
    1. If `onRejected` is not a function, it must be ignored.
1. If `onFulfilled` is a function:
    1. it must be called after `promise` is fulfilled, with `promise`'s fulfillment value as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `onRejected` has been called.
1. If `onRejected` is a function,
    1. it must be called after `promise` is rejected, with `promise`'s rejection reason as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `onFulfilled` has been called.
1. `then` must return before `onFulfilled` or `onRejected` is called [[4.1](#notes)].
1. `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). [[4.2](#notes)]
1. `then` may be called multiple times on the same promise.
    1. If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`.
    1. If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`.
1. `then` must return a promise [[4.3](#notes)].

    ```js
    promise2 = promise1.then(onFulfilled, onRejected);
    ```

    1. If either `onFulfilled` or `onRejected` returns a value that is not a thenable, `promise2` must be fulfilled with that value.
    1. If either `onFulfilled` or `onRejected` throws an exception, `promise2` must be rejected with the thrown exception as the reason.
    1. If either `onFulfilled` or `onRejected` returns a thenable (call it `returnedThenable`), run the Thenable Assimilation Procedure `Assimilate(promise2, returnedThenable)`.
    1. If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value.
    1. If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason.

### The Thenable Assimilation Procedure

The **thenable assimilation procedure** is an abstract operation taking as input a thenable and a promise, which we denote as `Assimilate(promise, thenable)`. It attempts to make `promise` adopt the state of `thenable`, under the assumption that `thenable` behaves at least somewhat like a promise.

This allows promise implementations to interoperate, as long as they expose a Promises/A+-compliant `then` method. It also allows Promises/A+ implementations to "assimilate" nonconformant implementations with reasonable `then` methods.

To run `Assimilate(promise, thenable)`, perform the following steps:

1. If `thenable` is a promise, adopt its state [[4.4](#notes)]:
   1. If `thenable` is pending, `promise` must remain pending until `thenable` is fulfilled or rejected.
   1. If/when `thenable` is fulfilled, `promise` must be fulfilled with the same value.
   1. If/when `thenable` is rejected, `promise` must be rejected with the same reason.
1. Otherwise, call `thenable.then(resolvePromise, rejectPromise)`, where:
   1. If/when `resolvePromise` is called with a value `x`,
      1. If `x` is not a thenable, `promise` must be fulfilled with `x`.
      1. If `x` is a thenable, run `Assimilate(promise, x)`.
  1. If/when `rejectPromise` is called with a reason `reason`, `promise` must be rejected with `reason`.
  1. If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precendence, and any further calls are ignored.
  1. If the call to `thenable.then` throws an exception,
     1. If `resolvePromise` or `rejectPromise` have been called, ignore it.
     1. Otherwise, `promise` must be rejected with the thrown exception as the reason.

## Notes

1. In practical terms, an implementation must use a mechanism such as `setTimeout`, `setImmediate`, or `process.nextTick` to ensure that `onFulfilled` and `onRejected` are not invoked in the same turn of the event loop as the call to `then` to which they are passed.

1. That is, in strict mode `this` will be `undefined` inside of them; in sloppy mode, it will be the global object.

1. Implementations may allow `promise2 === promise1`, provided the implementation meets all requirements. Each implementation should document whether it can produce `promise2 === promise1` and under what conditions.

1. Generally, it will only be known that `thenable` is a true promise if it comes from the current implementation. This clause allows the use of implementation-specific means to adopt the state of known-conformant promises.

---

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://github.com/promises-aplus">
    <span property="dct:title">the Promises/A+ organization</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Promises/A+ Promise Specification</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="US" about="https://github.com/promises-aplus">
  United States</span>.
</p>
