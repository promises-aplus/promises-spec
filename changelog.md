# Promises/A+ Changelog

## [Version 1.1][] / 2013-09-29

### Informative Changes

These changes help clarify and improve the specification, but should not affect implementation conformance.

- Improved the introductory text to give a better idea of what promises are, and what the purpose of Promises/A+ is.
- Separated out the concept of a possibly-nonconformant "thenable" from the concept of a conformant "promise."
- Added a definition for "exception."

### Normative Changes

These changes impose new requirements on implementations, either to specify a previously-undefined behavior, or to fix something incorrect that the spec allowed in version 1.0.

- Specified that `onFulfilled` and `onRejected` must be called as functions, with no `this` value.
- Changed the way in which asynchronicity was mandated for `onFulfilled` and `onRejected`, to enforce the important invariant that the stack be clear. In particular, the new wording prevents fulfilling or rejecting a promise from ever synchronously calling the handlers.
- Prohibited implementations from calling `onFulfilled` or `onRejected` before the corresponding promise was respectively fulfilled or rejected.
- Specified the Promise Resolution Procedure, instead of leaving the mechanism for adopting a thenable's state unspecified.
  - The recursive nature of the now-specified procedure improves upon the naïve non-recursive suggestion given in version 1.0.
  - Edge cases, such as how to deal with a getter for `then`, or synchronous exceptions that could be thrown during the process, are nailed down.
  - Self-resolution now causes rejection with a `TypeError`.
  - Infinite recursion from circular thenable chains are discussed, optionally allowing this to result in a `TypeError`.

## [Version 1.0][] / 2012-12-06

- Initial release. For differences from its predecessor, the Promises/A specification, see [Differences from Promises/A](differences-from-promises-a.md).


[Version 1.0]: https://github.com/promises-aplus/promises-spec/tree/1.0.0
[Version 1.1]: https://github.com/promises-aplus/promises-spec/tree/1.1.0
