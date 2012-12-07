---
layout: default
title: Promises/A+
---

# Promises/A+

This proposal clarifies the behavioral clauses of the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A), extending it to cover *de facto* behaviors and omitting parts that are underspecified or problematic.

As with Promises/A, this proposal does not deal with how to create, fulfill, or reject promises.

For a full description of the differences between Promises/A+ and Promises/A, see [Differences from Promises/A](differences-from-promises-a).

## General

A promise represents a value that may not be available yet. The primary method for interacting with a promise is its `then` method.

## Terminology

1. "promise" is an object or function that defines a `then` method.
1. "value" is any legal JavaScript value (including `undefined` or a promise).
1. "reason" is a value that indicates why a promise was rejected.
1. "must not change" means immutable identity (i.e. `===`), but does not imply deep immutability.

## Requirements

### Promise States

A promise must be in one of three states: pending, fulfilled, or rejected.

1. When in pending, a promise:

    1. may transition to either the fulfilled or rejected state.

1. When in fulfilled, a promise:

    1. must not transition to any other state.
    1. must have a value, which must not change.

1. When in rejected, a promise:

    1. must not transition to any other state.
    1. must have a reason, which must not change.

### The `then` Method

A promise must provide a `then` method to access its current or eventual fulfillment value or rejection reason.

A promise's `then` method accepts two arguments:

```
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
1. `then` may be called multiple times on the same promise.
    1. If/when `promise` is fulfilled, respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`.
    1. If/when `promise` is rejected, respective `onRejected` callbacks must execute in the order of their originating calls to `then`.
1. `then` must return a promise [[4.2](#notes)].

    ```
    promise2 = promise1.then(onFulfilled, onRejected);
    ```

    1. If either `onFulfilled` or `onRejected` returns a value that is not a promise, `promise2` must be fulfilled with that value.
    1. If either `onFulfilled` or `onRejected` throws an exception, `promise2` must be rejected with the thrown exception as the reason.
    1. If either `onFulfilled` or `onRejected` returns a promise (call it `returnedPromise`), `promise2` must assume the state of `returnedPromise` [[4.3](#notes)]:
        1. If `returnedPromise` is pending, `promise2` must remain pending until `returnedPromise` is fulfilled or rejected.
        1. If/when `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same value.
        1. If/when `returnedPromise` is rejected, `promise2` must be rejected with the same reason.
    1. If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value.
    1. If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason.

## Notes

1. In practical terms, an implementation must use a mechanism such as `setTimeout`, `setImmediate`, or `process.nextTick` to ensure that `onFulfilled` and `onRejected` are not invoked in the same turn of the event loop as the call to `then` to which they are passed.

1. Implementations may allow `promise2 === promise1`, provided the implementation meets all requirements. Each implementation should document whether it can produce `promise2 === promise1` and under what conditions.

1. The mechanism by which `promise2` assumes the state of `returnedPromise` is not specified.  One reasonable approach is to call `returnedPromise.then(fulfillPromise2, rejectPromise2)`, where:
    1. `fulfillPromise2` is a function which fulfills `promise2` with its first parameter.
    1. `rejectPromise2` is a function which rejects `promise2` with its first parameter.

    Given that `returnedPromise` may not be Promises/A+-compliant, but could instead be any object with a `then` method, it isn't always possible to satisfy the requirement of `promise2` assuming the same state as `returnedPromise`. Thus, the procedure here represents a best-faith effort.

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
