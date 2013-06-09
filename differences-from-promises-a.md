# Differences from Promises/A

Promises/A+ is based on the concepts and `then` API presented in the [CommonJS Promises/A](http://wiki.commonjs.org/wiki/Promises/A) proposal.  However, it differs from Promises/A in several important ways.

## Omissions

The following parts of Promises/A have been intentionally omitted:

1. Progress handling: in practice, it has proven to be underspecified and currently does not have an agreed-upon or *de facto* behavior within the promise implementor community.
1. Interactive promises: this is deemed out of scope of the minimal API necessary for interoperable promises.
1. `promise1 !== promise2` is *not* a requirement for `var promise2 = promise1.then(onFulfilled, onRejected)`.

## Clarifications

Promises/A+ uses different terminology from Promises/A, reflecting what has become the *de facto* vocabulary among promise implementations.  Specifically:

1. The promise states are given as "pending", "fulfilled", and "rejected".
1. When promises are fulfilled, they have a "value"; when they are rejected, they have a "reason".
1. It introduces the term "thenable" as distinct from "promise", so as to more precisely talk about the duck-typing tests necessary for implementation interoperation.

## Additions

Promises/A+ additionally specifies:

1. the behavior in the case where `onFulfilled` or `onRejected` returns a thenable, including the details of the resolution procedure;
1. the reason passed to `onRejected` must be the thrown exception in the case where a handler throws;
1. `onFulfilled` and `onRejected` must be called asynchronously;
1. `onFulfilled` and `onRejected` must be called as functions;
1. strict ordering of calls to `onFulfilled` and `onRejected` for subsequent calls to `then` on the same promise.
