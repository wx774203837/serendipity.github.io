import {
  t
} from "./chunk-MAFLJJKP.js";
import {
  C,
  E
} from "./chunk-WC7ESL3H.js";
import {
  he,
  ja
} from "./chunk-DZVDESUM.js";
import {
  Be,
  Tr
} from "./chunk-BHKXDXK7.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/isPlainObject-a5cb4071.js
function P(n) {
  return n[0];
}
function d(n) {
  return n[1];
}
function z(n, r) {
  var o = E(true), f = null, l = Be, u = null;
  n = typeof n == "function" ? n : n === void 0 ? P : E(n), r = typeof r == "function" ? r : r === void 0 ? d : E(r);
  function e(t2) {
    var i, g = (t2 = t(t2)).length, s, a = false, p;
    for (f == null && (u = l(p = C())), i = 0; i <= g; ++i)
      !(i < g && o(s = t2[i], i, t2)) === a && ((a = !a) ? u.lineStart() : u.lineEnd()), a && u.point(+n(s, i, t2), +r(s, i, t2));
    if (p)
      return u = null, p + "" || null;
  }
  return e.x = function(t2) {
    return arguments.length ? (n = typeof t2 == "function" ? t2 : E(+t2), e) : n;
  }, e.y = function(t2) {
    return arguments.length ? (r = typeof t2 == "function" ? t2 : E(+t2), e) : r;
  }, e.defined = function(t2) {
    return arguments.length ? (o = typeof t2 == "function" ? t2 : E(!!t2), e) : o;
  }, e.curve = function(t2) {
    return arguments.length ? (l = t2, f != null && (u = l(f)), e) : l;
  }, e.context = function(t2) {
    return arguments.length ? (t2 == null ? f = u = null : u = l(f = t2), e) : f;
  }, e;
}
var S = ja(Object.getPrototypeOf, Object);
var T = S;
var w = "[object Object]";
var C2 = Function.prototype;
var L = Object.prototype;
var b = C2.toString;
var k = L.hasOwnProperty;
var A = b.call(Object);
function B(n) {
  if (!he(n) || Tr(n) != w)
    return false;
  var r = T(n);
  if (r === null)
    return true;
  var o = k.call(r, "constructor") && r.constructor;
  return typeof o == "function" && o instanceof o && b.call(o) == A;
}

export {
  z,
  T,
  B
};
//# sourceMappingURL=chunk-ZBFL4OS2.js.map
