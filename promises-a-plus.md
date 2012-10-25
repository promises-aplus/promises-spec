# Promises/A+

This proposal attempts to clarify the behavioral clauses of the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A), and to extend it to cover the cases where handlers may return a promise. 

This proposal intentionally omits the progress handling portion of Promises/A.  In practice it has proven to be underspecified and currently does not have an agreed-upon or *de facto* behavior within the promise implementor community.

Also intentionally omitted is a requirement for calling fulfill and broken handlers either synchronously or asynchronously [[1](#recommendations)].  Promises/A itself [does not specify](http://wiki.commonjs.org/wiki/Promises/A#Open_Issues), and both synchronous and asynchronous approaches exist in the current landscape of popular implementations.

As with Promises/A, this proposal does not deal with creation of promises, nor the mechanisms for fulfilling or breaking them.

## Credit

This specification borrows heavily from the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A) by Kris Zyp, as well as the [UncommonJS Thenable Promises](https://github.com/kriskowal/uncommonjs/blob/master/promises/specification.md) specification by Kris Kowal. All credit goes to those authors.

# Notes on terminology

1. "value" is any legal language value, including `undefined`, that is not a promise.
1. "reason" is a value. The term "reason" is used here because it is used in existing promise literature, and helps to reinforce the difference between fulfilled and broken promise states. It also conveys the intent that a reason should represent the "reason the associated promise has been broken."
1. "must not change" is intended to mean "identity is immutable" (e.g. `===`), and does not imply deep immutability.

# Requirements

## General

A promise represents a value that may not be available yet.  A promise must be one of three states: pending, fulfilled, or broken:

1. In the pending state, a promise
    1. must provide a way to arrange for a function to be called with its fulfillment value after it has transitioned to the fulfilled state, or with its reason for being broken after it has transitioned to the broken state.
    1. may transition to either the fulfilled or broken state.
1. In the fulfilled state, a promise
    1. must have a value, which must not change.
    1. must provide a way to arrange for a function to be called with that value.
    1. must not transition to any other state.
1. In the broken state, a promise
    1. must have a reason, which must not change.
    1. must provide a way to arrange for a function to be called with that reason.
    1. must not transition to any other state.

## Specific

A promise is an object or function that defines a `then` method that accepts the following two arguments:

    promise.then(fulfilled, broken)

1. Both `fulfilled` and `broken` are optional arguments.
1. If `fulfilled` is a function,
    1. it must be called after `promise` is fulfilled, with `promise`'s fulfillment value as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `broken` has already been called.
1. If `fulfilled` is not a function, it must be ignored.
1. If `broken` is a function,
    1. it must be called after `promise` is broken, with `promise`'s reason as its first argument.
    1. it must not be called more than once.
    1. it must not be called if `fulfilled` has already been called.
1. If `broken` is not a function, it must be ignored.
1. `fulfilled` and `broken` must not be called before `then` returns.
1. `then` may be called any number of times.
1. `fulfilled` and `broken` supplied in one call to `then` must never be called after those supplied to a later call to `then` on the same promise.
1. `then` must return a promise [[2](#recommendations)]

        var promise2 = promise1.then(fulfilled, broken)

    1. If `fulfilled` is not a function and `promise1` is fufilled, `promise2` must be fulfilled with the same fulfillment value.
    1. If `broken` is not a function and `promise1` is broken, `promise2` must be broken with the same reason.
    1. If either `fulfilled` or `broken` returns a value, `promise2` must be fulfilled with that value.
    1. If either `fulfilled` or `broken` throws an exception, `promise2` must be broken with the thrown exception as the reason.
    1. If either `fulfilled` or `broken` returns a promise (call it `returnedPromise`), `promise2` must be placed into the same state as `returnedPromise`:
        1. If `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same fulfillment value.
        1. If `returnedPromise` is broken, `promise2` must be broken with the same reason.
        1. If `returnedPromise` is pending, `promise2` must also be pending.  When `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same fulfillment value.  When `returnedPromise` is broken, `promise2` must be broken with the same reason.

## Recommendations

1. Each implementation should document whether it calls handlers synchronously or asynchronously.
1. Each implementation should document whether it may produce `promise2` === `promise1`, and if so, under what conditions.  It is intentionally not specified as to whether the returned promise may be the same promise, or must be a new promise, i.e. `promise2` !== `promise1` is not a requirement.  An implemention is free to allow `promise2` === `promise1`, provided it can meet the requirements in this section.
