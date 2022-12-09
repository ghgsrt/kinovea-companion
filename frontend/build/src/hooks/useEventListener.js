"use strict";
exports.__esModule = true;
exports.useEventListener = void 0;
var svelte_1 = require("svelte");
function useEventListener(event, callback) {
    (0, svelte_1.onMount)(function () { return window.addEventListener(event, callback); });
    (0, svelte_1.onDestroy)(function () { return window.removeEventListener(event, callback); });
}
exports.useEventListener = useEventListener;
