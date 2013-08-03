(function () {
    "use strict";

    var idCounter = 1;
    Array.prototype.forEach.call(document.querySelectorAll("ol li, p"), function (el) {
        el.id = "point-" + idCounter++;
    });

    Array.prototype.forEach.call(document.querySelectorAll("h2[id], h3[id], h4[id], li[id], p[id]"), function (el) {
        var a = document.createElement("a");
        a.href = "#" + el.id;
        a.className = "anchor";
        el.insertBefore(a, el.firstChild);
    });
}());
