# Differences from Promises/A

Promises/A+ is based on the concepts and `.then()` API presented in the [CommonJS Promises/A](http://wiki.commonjs.org/wiki/Promises/A) proposal.  However, it differs from Promises/A in several important ways.

## Omissions

The following parts of Promises/A have been intentionally omitted:

1. Progress handling: in practice, it has proven to be underspecified and currently does not have an agreed-upon or *de facto* behavior within the promise implementor community.
1. Interactive promise: this is deemed out of scope of the minimal API necessary for interoperable promises.

## Clarifications

1. Promise terminology: specifically, Promises/A+ standardizes on the terms "fulfilled", "rejected", "reason", and "pending".

## Additions

Promises/A+ additionally specifies:

1. the behavior in the case where `onFulfilled` or `onRejected` returns a promise;
1. the rejection reason passed to `onRejected` must be the thrown exception in the case where a handler throws;
1. `onFulfilled` and `onRejected` must be called asynchronously;
1. strict ordering of calls to `onFulfilled` and `onRejected` for subsequent calls to `then` on the same promise;
1. `promise1 !== promise2` is *not* a requirement for `var promise2 = promise1.then(onFulfilled, onRejected)`.