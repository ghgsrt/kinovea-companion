"use strict";
exports.__esModule = true;
// no clue what this error is, it shouldn't exist, and it won't go away.
// but it doesn't affect anything so whatever
require("./style.css");
var App_svelte_1 = require("./App.svelte");
var app = new App_svelte_1["default"]({
    target: document.getElementById('app')
});
exports["default"] = app;
