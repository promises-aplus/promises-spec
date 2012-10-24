# Promises/A+

This proposal attempts to clarify the behavioral clauses of the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A), and to extend it to cover the cases where handlers may return a promise. 

This proposal intentionally omits the progress handling portion of Promises/A.  In practice it has proven to be underspecified and currently does not have an agreed-upon or *defacto* behavior within the promise implementor community.

Also intentionally omitted is a requirement for calling fulfill and broken handlers either synchronously or asynchronously [[1](#recommendations)].  Promises/A itself [does not specify](http://wiki.commonjs.org/wiki/Promises/A#Open_Issues), and both synchronous and asynchronous approaches exist in the current landscape of popular implementations.

This specification borrows heavily from the [Promises/A proposal](http://wiki.commonjs.org/wiki/Promises/A) by Kris Zyp, as well as the [UncommonJS Thenable Promises](https://github.com/kriskowal/uncommonjs/blob/master/promises/specification.md) specification by Kris Kowal. All credit goes to those authors.

As with Promises/A, this proposal does not deal with creation of promises.

## Promise

A promise represents a value that may not be available yet.  A promise must be one of three states: pending, fulfilled, or broken:

* When in the pending state, a promise may transition to either the fulfilled or broken state.

* When in the fulfilled state, a promise has a value and provides a way to arrange for a function to be called with that value.  Once a promise has transitioned to the fulfilled state, it must never transition to any other state.

* When in the broken state, a promise has a *reason* (an indication of why it was broken) and provides a way to arrange for a function to be called with that reason.  Once a promise has transitioned to the broken state, it must never transition to any other state.

## Requirements

A promise is an object or function that defines a `then` method that accepts at least 2 arguments:

    promise.then(fulfilled, broken)

* Both `fulfilled` and `broken` are optional arguments
* If truthy, `fulfilled` must be a function that accepts a value as its first argument.
    * When `promise` is fulfilled, `fulfilled` will be called with `promise`'s fulfillment value.
    * `fulfilled` will never be called more than once.
    * `fulfilled` will never be called if `broken` has already been called.
* If truthy, `broken` must be a function that accepts a reason (which must be a value, not a promise) as its first argument.
    * When `promise` is broken, `broken` will be called with `promise`'s reason for being broken.
    * `broken` will never be called more than once.
    * `broken` will never be called if `fulfilled` has already been called.
* `then` may be called any number of times.
* `fulfilled` and `broken` supplied in one call to `then` must never be called after those supplied to a later call to `then` on the same promise.
* `then` must return a promise [[2](#recommendations)]

        var promise2 = promise1.then(fulfilled, broken)

    * When `promise1` is **either** fulfilled and `fulfilled` is called with the fulfillment value, **or** broken and `broken` is called with the reason:
        * If either returns a value, `promise2` must be fulfilled with that value.
        * If either throws an exception, `promise2` must be broken with the thrown exception as the reason.
        * If either returns a promise (call it `returnedPromise`), `promise2` must be placed into the same state as `returnedPromise`:
            * If `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same fulfillment value.
            * If `returnedPromise` is broken, `promise2` must be broken with the same reason.
            * If `returnedPromise` is pending, `promise2` must also be pending.  When `returnedPromise` is fulfilled, `promise2` must be fulfilled with the same fulfillment value.  When `returnedPromise` is broken, `promise2` must be broken with the same reason.

## Recommendations

1. Each implementation should document whether it calls handlers synchronously or asynchronously.
1. Each implementation should document whether it may produce `promise2` === `promise1`, and if so, under what conditions.  It is intentionally not specified as to whether the returned promise may be the same promise, or must be a new promise, i.e. `promise2` !== `promise1` is not a requirement.  An implemention is free to allow `promise2` === `promise1`, provided it can meet the requirements in this section.
