import {
  Ei,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/commonDb-4dc3d465.js
var n = "";
var e = "";
var c = "";
var o = (t) => Ei(t, th());
var s = function() {
  n = "", c = "", e = "";
};
var i = function(t) {
  n = o(t).replace(/^\s+/g, "");
};
var a = function() {
  return n || e;
};
var r = function(t) {
  c = o(t).replace(/\n\s+/g, `
`);
};
var l = function() {
  return c;
};
var g = function(t) {
  e = o(t);
};
var u = function() {
  return e;
};
var p = {
  setAccTitle: i,
  getAccTitle: a,
  setDiagramTitle: g,
  getDiagramTitle: u,
  getAccDescription: l,
  setAccDescription: r,
  clear: s
};
var b = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: s,
  default: p,
  getAccDescription: l,
  getAccTitle: a,
  getDiagramTitle: u,
  setAccDescription: r,
  setAccTitle: i,
  setDiagramTitle: g
}, Symbol.toStringTag, { value: "Module" }));

export {
  s,
  i,
  a,
  r,
  l,
  g,
  u,
  b
};
//# sourceMappingURL=chunk-VJFQ4JEA.js.map
