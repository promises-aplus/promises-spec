# Conformant Implementations

There are many conformant implementations of Promises/A+. Here are the ones we know about. Note that an implementation's conformance is determined by it passing the [test suite](https://github.com/promises-aplus/promises-tests). If you pass the tests, feel free to send a pull request to get yourself on this list!

Conformant implementations are encouraged to include [the Promises/A+ logo](https://rawgithub.com/promises-aplus/promises-spec/master/logo.svg) in their README files with a link to the specification, using code like the following:

```html
<a href="https://promisesaplus.com/">
    <img src="https://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo"
         title="Promises/A+ 1.0 compliant" align="right" />
</a>
```

Also, if your implementation is published in the npm registry, we suggest using [the "promises-aplus" keyword](https://npmjs.org/browse/keyword/promises-aplus).

## The ECMAScript Specification

The [ECMAScript specification](http://tc39.github.io/ecma262/) includes a section titled "[Promise Objects](https://tc39.github.io/ecma262/#sec-promise-objects)". This section mandates that a conformant implementation of ECMAScript have a `Promise` global. Largely due to the actions of the Promises/A+ community, the `Promise` global specified by ECMAScript and present in any conforming JavaScript engine is indeed a Promises/A+ implementation!

The "Promise Objects" section of the ECMAScript specification has many additional requirements for the processing model beyond those given in Promises/A+. In other words, people can implement promises libraries that conform to Promises/A+, without necessarily conforming to the ECMAScript specification for promise objects. In this way, ECMAScript's `Promise` global is just one of many Promises/A+ implementations.

## Standalone

<table>
    <thead>
        <tr>
            <th>Implementation</th>
            <th>Description</th>
            <th>Spec Version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/abdulapopoola/Adehun">Adehun</a></td>
            <td>Light weight Promises/A+ implementation; good for learning about the Promise/A+ spec.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/briancavalier/avow">avow</a></td>
            <td>Example Promises/A+ implementation. Simple, tiny, fast, fully async</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/cburgmer/ayepromise">ayepromise</a></td>
            <td>A teeny-tiny promise library</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/ariyankhan/belofte.js">BelofteJS</a></td>
            <td>A lightweight Promises/A+ compliant implementation of ECMAScript Promise API</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/daninnewyork/bloodhound">bloodhound</a></td>
            <td>Feature-rich promise library with performance timing and reporting baked in.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/petkaantonov/bluebird">bluebird</a></td>
            <td>Full featured Promises/A+ implementation with exceptionally good performance</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/gobwas/broody-promises">broody-promises</a></td>
            <td>Promises with `.value()` method, that brings ability to get value of the chain synchronously</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/listenlin/cheno">cheno</a></td>
            <td>Just an implementation of Promise/A+ then with ES6 syntax , just to learning Promise and ES6.</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/CodeCatalyst/promise.coffee">CodeCatalyst/promise.coffee</a></td>
            <td>Promises/A+ compliant implementation in object-oriented CoffeeScript</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/wizardwerdna/covenant">Covenant</a></td>
            <td>A tight and performant Promises/A+ compliant implementation in CoffeeScript</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/briancavalier/creed">creed</a></td>
            <td>Functionally-oriented async with coroutines, promises, ES2015 iterables, fantasy-land</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/malko/D.js">D.js</a></td>
            <td>A tiny Promises/A+ implementation for Node.js and the browser with some extras</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/kevinconway/Deferred.js">Deferred.js</a></td>
            <td>Deferreds, promises, and callback aggregators.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/msrose/denote">denote</a></td>
            <td>Minimalistic Promises/A+ compliant JavaScript promise implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/diogocampos/promise-coffee">diogocampos/promise-coffee</a></td>
            <td>Promises/A+ spec-compliant promises in less than 80 lines of readable CoffeeScript</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/msuperina/es3-promise">es3-promise</a></td>
            <td>An implementation of Promise then with ES3 syntax</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/shanewholloway/node-fate">fate</a></td>
            <td>Promises/A+ closure-based implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/gameclosure/ff">ff</a></td>
            <td>Simplifies the most common use cases for series, parallel, and promise utilities</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/bucharest-gold/fidelity">fidelity</a></td>
            <td>A fast and simple Promise/A+ implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/tests-always-included/fid-promise">FidPromise</a></td>
            <td>Promise implementation that is readable and debuggable</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/Boelroy/Future.js">Future</a></td>
            <td>Original concept of (futures and promises) and tiny implementation of Promises/A+</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/guanguer/Given">Given</a></td>
            <td>Given is a Promises/A+ spec implementation wrote for fun and learning purposes, using ES6 syntax</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/gaoxiaoliangz/gpromise">GPromise</a></td>
            <td>Another Promise/A+ Implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/hbarcelos/promise-js">hbarcelos/promise-js</a></td>
            <td>Simple Promises/A+ JavaScript implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/HQidea/promise">HQidea/promise</a></td>
            <td>A Promises/A+ implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/stopsopa/ipromise">ipromise</a></td>
            <td>Standalone, lightweight and tested implementation of Promises/A+  </td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/novemberborn/legendary">Legendary</a></td>
            <td>Combines promise subclassing with sugar inspired by when.js, Q and async.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/calvinmetcalf/lie">Lie</a></td>
            <td>Small library following the ES6 syntax</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/RonNewcomb/promise">Lifelong.Promise</a></td>
            <td>Lifelong implements the spec in a single, very strongly typed Typescript file, without extraneous identifiers.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/kaerus-component/uP">microPromise</a></td>
            <td>Written for a nodejs + browser ArangoDB driver.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/chunpu/min-promise">min-promise</a></td>
            <td>Small and clean Promises/A+ implementation in a hundred lines</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/aheckmann/mpromise">mpromise</a></td>
            <td>A Promises/A+ conformant implementation, written for mongoose</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/brianmhunt/MutexPromise">MutexPromise</a></td>
            <td>An implementation for developing & debugging with Promises</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/val1984/Naive-Promesse">Naive Promesse</a></td>
            <td>Naïve implementation of Promises/A+ specification</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/getify/native-promise-only">Native Promise Only</a></td>
            <td>Polyfill for native ES6 Promises only, no extras!</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/Octane/Promise">Octane/Promise</a></td>
            <td>Promises/A+ compliant implementation of ES6 promises for browsers and Node.js</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/ondras/promise">ondras/promise</a></td>
            <td>Straightforward client-side Promises/A+ implementation, with XHR, setTimeout etc.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/potch/promise.js">potch/promise.js</a></td>
            <td>Fully Promises/A+ compliant promises and nothing else!</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/rkatic/p">P</a></td>
            <td>A simple Promises/A+ library, implementing a subset of the the Q API</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/mudge/pacta">Pacta</a></td>
            <td>An algebraic, Promises/A+ compliant implementation of Promises in node.js.</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/kiltjs/parole">Parole</a></td>
            <td>Another ES6 promise implementation compliant with Promises/A+</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/lazd/Pinky">Pinky</a></td>
            <td>An extremely tiny Promises/A+ implementation that passes the Promises/A+ test suite</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/timjansen/PinkySwear.js">PinkySwear.js</a></td>
            <td>Promises/A+ compliant in less than 500 bytes</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/glebec/potential">Potential</a></td>
            <td>Small Promises/A+ library focusing on simple, annotated source code for educational purposes</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/satchmorun/promeso">promeso</a></td>
            <td>A little Promises/A+ implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/djfm/promesse">promesse</a></td>
            <td>A Promises/A+ implementation that tries to be concise using functional style while remaining easy to understand</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/bramstein/promis">Promis</a></td>
            <td>A small embeddable Promise polyfill</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/RubenVerborgh/promiscuous/">promiscuous</a></td>
            <td>A minimal and fast promise/deferred implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/xieranmaya/Promise3">Promise3</a></td>
            <td>A very easy-to-read source code of Promise implementation, good to learn how Promise works inside</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/yanguango/promised">Promised</a></td>
            <td>A 150 loc Promises/A+ implementation with ES6 class</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="http://promises.codeplex.com">Promises, Promises...</a></td>
            <td>A full, documented, standalone Promises/A+ 1.1 implementation for TypeScript / JavaScript / Node.js with some additional features to improve productivity</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/Ziriax/Promistix">Promistix</a></td>
            <td>A very tiny (less than 100 lines of Javascript code) implementation, written just for fun. This code unintentionally <a href="https://github.com/promises-aplus/promises-tests/issues/59">uncovered a bug in the specs in 2014</a>!</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/reflex/promix">Promix</a></td>
            <td>Mix promises with callbacks for improved control flow</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/zolmeister/promiz">Promiz</a></td>
            <td>Tiny (590 bytes), with an even smaller micro version at 228 bytes (min + gzip)</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/kriskowal/q">Q</a></td>
            <td>A tool for making and composing asynchronous promises in JavaScript</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/danthareja/robin-egg-bluebird">Robin Egg Bluebird</a></td>
            <td>A tiny Promises/A+ compliant implementation inspired by the official Crayola color.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/cuipengfei/Spikes/blob/master/js/promise/RWPromise.js">RWPromise</a></td>
            <td>88 lines of concise code, with comments annotating which clause of the spec each line conforms to</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/tildeio/rsvp.js">rsvp.js</a></td>
            <td>A lightweight library that provides tools for organizing asynchronous code</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/arieh/Shvua">Shvua</a></td>
            <td>A promise implementation that also allows you to wrap your object's API with promise-like API</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/alberto/sure-thing">sure-thing</a></td>
            <td>A simple and fast Promises/A+ implementation.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/William17/taxi">Taxi</a></td>
            <td>Simple and Annotated. A tiny example Promises/A+ implementation. Just for learning.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/nobuoka/Ten.Promise">Ten.Promise</a></td>
            <td>Promises/A+ implementation written in TypeScript</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/then/promise">then/promise</a></td>
            <td>Bare bones Promises/A+ implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/vilic/thenfail">ThenFail</a></td>
            <td>Promises/A+ implementation in TypeScript with the ability to break the chain</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/DirtyHairy/typescript-deferred">typescript-deferred</a></td>
            <td>A tiny Promises/A+ implementation written in Typescript</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/dfilatov/jspromise">vow</a></td>
            <td>Promises/A+ implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/Victory/vPromise">vPromise</a></td>
            <td>Apache 2.0 Licensed, Promises/A+ implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/elnarddogg/wee-promise">WeePromise</a></td>
            <td>An ultra light (&lt;1k minified/gzipped) Promises/A+ implementation</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/kode4food/welsh">Welsh</a></td>
            <td>A+ Promises and Deferreds à la Twisted</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/cujojs/when">when</a></td>
            <td>cujoJS's promise implementation and async toolkit</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/manvalls/y-resolver">y-resolver</a></td>
            <td>Implementation of a backwards compatible extension to the Promises/A+ spec</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/ysmood/yaku">yaku</a></td>
            <td>A fast, lightweight, error friendly and ES6 compatible implementation (~3.5KB)</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/jharding/yapa">yapa</a></td>
            <td>Yet another Promises/A+ implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/loveky/yapi.js">yapi.js</a></td>
            <td>Yet another Promises/A+ implementation which works in both browser and node</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/bluejava/zousan">Zousan</a></td>
            <td>A lightning fast, very small (&lt;1k) Promises/A+ 1.1 Implementation (MIT license)</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/iam91/zpromise">zpromise</a></td>
            <td>Simple Promises/A+ implementation, good for learning</td>
            <td>1.0</td>
        </tr>
    </tbody>
</table>

## Inside Frameworks

<table>
    <thead>
        <tr>
            <th>Implementation</th>
            <th>Description</th>
            <th>Spec Version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/sebastian-software/core/blob/master/source/class/core/event/Promise.js">Core</a></td>
            <td>A fine foundation for JavaScript projects</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/hprose/hprose-nodejs">Hprose</a></td>
            <td>Hprose is a Serialization and RPC library with Promise/A+ implementation.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/behance/nbd.js/blob/master/trait/promise.js">nbd.js</a></td>
            <td>Promises as an inheritable trait from nbd.js</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/eclipse/orion.client/blob/master/bundles/org.eclipse.orion.client.core/web/orion/Deferred.js">Orion Deferred</a></td>
            <td>From the Orion library</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/flams/emily/blob/master/src/Promise.js">promesse</a></td>
            <td>Emily's Promise/A+</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="http://yuilibrary.com/yui/docs/promise/">YUI</a></td>
            <td>YUI is a free, open source JavaScript library for building richly interactive web applications</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://api.jquery.com/category/deferred-object/">jQuery (3.0 or newer)</a></td>
            <td>jQuery is a fast, small, and feature-rich JavaScript library dealing with HTML document traversal, manipulation, event handling, animation, and Ajax.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/angular/zone.js">zone.js(0.7.7 or newer)</a></td>
            <td>A Zone is an execution context that persists across async tasks.</td>
            <td>1.1</td>
        </tr>
    </tbody>
</table>

## In Other Languages

We've been excited to discover that the popularity of Promises/A+ has led to a number of implementations in other languages besides JavaScript. Although these don't necessarily match the exact semantics of the spec due to differing language capabilities, and we can't verify them against our JavaScript test suite directly, it's still very exciting to have such a strong community and we want to showcase these efforts.

<table>
    <thead>
        <tr>
            <th>Language</th>
            <th>Implementation</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ActionScript</td>
            <td><a href="https://github.com/CodeCatalyst/promise-as3">CodeCatalyst/promise-as3</a></td>
            <td>Promises/A+ compliant implementation in ActionScript 3.0</td>
        </tr>
        <tr>
            <td>Python</td>
            <td><a href="https://github.com/syrusakbary/promise">promise</a></td>
            <td>A clean and generic implementation of the Promises/A+ specification in Python</td>
        </tr>
        <tr>
            <td>Python</td>
            <td><a href="https://github.com/xogeny/aplus">xogeny/aplus</a></td>
            <td>An implementation of the Promises/A+ specification and test suite in Python</td>
        </tr>
        <tr>
            <td>Objective-C</td>
            <td><a href="https://github.com/dizzus/PromiseKit">PromiseKit</a></td>
            <td>A very simple and lightweight Objective-C framework based on Promises/A+ specification</td>
        </tr>
        <tr>
            <td>Objective-C</td>
            <td><a href="https://github.com/couchdeveloper/RXPromise">RXPromise</a></td>
            <td>An Objective-C Class which implements the Promises/A+ specification</td>
        </tr>
        <tr>
            <td>Objective-C</td>
            <td><a href="https://github.com/MSNexploder/SHXPromise">SHXPromise</a></td>
            <td>A lightweight implementation of Promises/A+ for iOS and OS X</td>
        </tr>
        <tr>
            <td>Swift</td>
            <td><a href="https://github.com/couchdeveloper/FutureLib">FutureLib</a></td>
            <td>A pure Swift 2 library implementing futures and promises, inspired by Scala</td>
        </tr>
        <tr>
            <td>Swift</td>
            <td><a href="https://github.com/onmyway133/Then">Then</a></td>
            <td>A simple Promises/A+ implementation in Swift using associated Result enum and generics</td>
        </tr>
        <tr>
            <td>Perl</td>
            <td><a href="https://github.com/stevan/promises-perl">stevan/promises-perl</a></td>
            <td>An implementation of the Promises/A+ pattern for asynchronous programming in Perl</td>
        </tr>
        <tr>
            <td>Perl</td>
            <td><a href="https://github.com/alexbyk/perl-evo">alexbyk/perl-evo</a></td>
            <td>A framework with non-recursive implementation of the Promises/A+ Role (for any Event Loop)</td>
        </tr>
        <tr>
            <td>Perl</td>
            <td><a href="https://github.com/kraih/mojo">kraih/mojo</a></td>
            <td>A web framework whose event loop features an implementation of the Promises/A+ specification</td>
        </tr>
        <tr>
            <td>QML</td>
            <td><a href="https://github.com/benlau/quickpromise">Quick Promise</a></td>
            <td>Promises/A+ compliant implementation in QML</td>
        </tr>
        <tr>
            <td>C#</td>
            <td><a href="https://github.com/Real-Serious-Games/c-sharp-promise">Real-Serious-Games/c-sharp-promise</a></td>
            <td>An unit-tested implementation of the Promises/A+ pattern for asynchronous programming in C#</td>
        </tr>
        <tr>
            <td>PHP</td>
            <td><a href="https://github.com/guzzle/promises">Guzzle Promises</a></td>
            <td>Promises/A+ implementation in PHP that handles promise chaining and resolution iteratively, allowing for "infinite" promise chaining, while keeping the stack size constant.</td>
        </tr>
        <tr>
            <td>PHP</td>
            <td><a href="https://github.com/plvhx/promise">Promise PHP Library</a></td>
            <td>This is a Promises/A+ implementation in PHP. This handles promise chaining immutably until all context handler is all gone from execution context.</td>
        </tr>
    </tbody>
</table>
