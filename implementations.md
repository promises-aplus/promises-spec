# Conformant Implementations

There are many conformant implementations of Promises/A+. Here are the ones we know about. Note that an implementation's conformance is determined by it passing the [test suite](https://github.com/promises-aplus/promises-tests). If you pass the tests, feel free to send a pull request to get yourself on this list!

Conformant implementations are encouraged to include [the Promises/A+ logo](https://rawgithub.com/promises-aplus/promises-spec/master/logo.svg) in their README files with a link to the specification, using code like the following:

```html
<a href="http://promisesaplus.com/">
    <img src="http://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo"
         title="Promises/A+ 1.0 compliant" align="right" />
</a>
```

Also, if your implementation is published in the npm registry, we suggest using [the "promises-aplus" keyword](https://npmjs.org/browse/keyword/promises-aplus).

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
            <td><a href="https://github.com/petkaantonov/bluebird">bluebird</a></td>
            <td>Full featured Promises/A+ implementation with exceptionally good performance</td>
            <td>1.1</td>
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
            <td><a href="https://github.com/tests-always-included/fid-promise">FidPromise</a></td>
            <td>Promise implementation that is readable and debuggable</td>
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
            <td><a href="https://github.com/kaerus-component/uP">microPromise</a></td>
            <td>Written for a nodejs + browser ArangoDB driver.</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/aheckmann/mpromise">mpromise</a></td>
            <td>A Promises/A+ conformant implementation, written for mongoose</td>
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
            <td><a href="https://github.com/ondras/promise">ondras/promise</a></td>
            <td>Straightforward client-side Promises/A+ implementation, with XHR, setTimeout etc.</td>
            <td>1.0</td>
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
            <td><a href="https://github.com/satchmorun/promeso">promeso</a></td>
            <td>A little Promises/A+ implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/RubenVerborgh/promiscuous/">promiscuous</a></td>
            <td>A minimal and fast promise/deferred implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="http://promises.codeplex.com">Promises, Promises...</a></td>
            <td>A full, documented, standalone Promises/A+ 1.1 implementation for TypeScript / JavaScript / Node.js with some additional features to improve productivity</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/bramstein/promis">Promis</a></td>
            <td>A small embeddable Promise polyfill</td>
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
            <td><a href="https://github.com/dfilatov/jspromise">vow</a></td>
            <td>Promises/A+ implementation</td>
            <td>1.0</td>
        </tr>
        <tr>
            <td><a href="https://github.com/cujojs/when">when</a></td>
            <td>cujoJS's promise implementation and async toolkit</td>
            <td>1.1</td>
        </tr>
        <tr>
            <td><a href="https://github.com/jharding/yapa">yapa</a></td>
            <td>Yet another Promises/A+ implementation</td>
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
            <td><a href="https://github.com/xogeny/aplus">xogeny/aplus</a></td>
            <td>An implementation of the Promises/A+ specification and test suite in Python</td>
        </tr>
        <tr>
            <td>Objective-C</td>
            <td><a href="https://github.com/couchdeveloper/RXPromise">RXPromise</a></td>
            <td>An Objective-C Class which implements the Promises/A+ specification.</td>
        </tr>
        <tr>
            <td>Objective-C</td>
            <td><a href="https://github.com/MSNexploder/SHXPromise">SHXPromise</a></td>
            <td>A lightweight implementation of Promises/A+ for iOS and OS X.</td>
        </tr>
    </tbody>
</table>
