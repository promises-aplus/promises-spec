# Promises/A+

This proposal attempts to clarify the behavioral clauses of the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A), to extend it to cover *de facto* behaviors, and to omit parts that have proven to be underspecified or problematic.

As with Promises/A, this proposal does not deal with creation of promises, nor the mechanisms for fulfilling or rejecting them.

For a full description of the differences between Promises/A+ and Promises/A, see [Differences from Promises/A](promises-spec/blob/master/differences-from-promises-a.md).

## Terminology

1. "value" is any legal language value, including `undefined`, that is not a promise.
1. "reason" is a value. The term "reason" is used here because it is used in existing promise literature, and helps to reinforce the difference between fulfilled and rejected promise states. It also conveys the intent that a reason should represent the "reason the associated promise has been rejected."
1. "must not change" means immutable identity (i.e. `===`), and does not imply deep immutability.

## Requirements

### General

A promise represents a value that may not be available yet.  A promise must be one of three states: pending, fulfilled, or rejected:

1. In the pending state, a promise
    1. must provide a way to arrange for a function to be called with its fulfillment value after it has transitioned to the fulfilled state, or with its reason for being rejected after it has transitioned to the rejected state.
    1. may transition to either the fulfilled or rejected state.
1. In the fulfilled state, a promise
    1. must have a value, which must not change.
    1. must provide a way to arrange for a function to be called with that value.
    1. must not transition to any other state.
1. In the rejected state, a promise
    1. must have a reason, which must not change.
    1. must provide a way to arrange for a function to be called with that reason.
    1. must not transition to any other state.

### Specific

A promise is an object or function that defines a `then` method that accepts the following two arguments:

    promise.then(onFulfilled, onRejected)

1. Both `onFulfilled` and `onRejected` are optional arguments:
    1. If `onFulfilled` is not a function, it must be ignored.
    1. If `onRejected` is not a function, it must be ignored.
1. If `onFulfilled` is a function,
    1. it must be called after `promise` is fulfilled, with `promise`'s value as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `onRejected` has already been called.
1. If `onRejected` is a function,
    1. it must be called after `promise` is rejected, with `promise`'s reason as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `onFulfilled` has already been called.
1. `onFulfilled` and `onRejected` must not be called before `then` returns [[1](#notes)].
1. `then` may be called any number of times.
    1. `onFulfilled` and `onRejected` supplied in one call to `then` must never be called after those supplied to a later call to `then` on the same promise.
1. `then` must return a promise [[2](#notes)]

        var promise2 = promise1.then(onFulfilled, onRejected)

    1. If `onFulfilled` is not a function and `promise1` is fufilled, `promise2` must be fulfilled with the same fulfillment value.
    1. If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason.
    1. If either `onFulfilled` or `onRejected` returns a value, `promise2` must be fulfilled with that value.
    1. If either `onFulfilled` or `onRejected` throws an exception, `promise2` must be rejected with the thrown exception as the reason.
    1. If either `onFulfilled` or `onRejected` returns a promise (call it `returnedPromise`), `promise2` must be placed into the same state as `returnedPromise`:
        1. If `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same value.
        1. If `returnedPromise` is rejected, `promise2` must be rejected with the same reason.
        1. If `returnedPromise` is pending, `promise2` must also be pending.  When `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same value.  When `returnedPromise` is rejected, `promise2` must be rejected with the same reason.

## Notes

1. In practical terms, an implementation must use a mechanism such as `setTimeout`, or a faster alternative, where available, such as `setImmediate` or `process.nextTick`, to ensure that `onFulfilled` or `onRejected` are not invoked in the same turn of the event loop as the call to `then` to which they are passed.

1. Each implementation should document whether it may produce `promise2 === promise1`, and if so, under what conditions.  It is intentionally not specified as to whether the returned promise may be the same promise, or must be a new promise, i.e. `promise2 !== promise1` is not a requirement.  An implemention is free to allow `promise2 === promise1`, provided it can meet the requirements in this section.

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
