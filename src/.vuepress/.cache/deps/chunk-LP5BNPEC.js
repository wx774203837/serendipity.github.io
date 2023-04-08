import {
  C,
  E
} from "./chunk-WC7ESL3H.js";
import {
  Jo,
  Ko,
  Ni,
  Oi,
  Qo,
  Vo,
  Xo,
  Zo,
  es,
  is,
  mi,
  ns,
  ts
} from "./chunk-BHKXDXK7.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/arc-1bd4335b.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, w, O, h, v, S, r) {
  var s = w - l, n = O - x, m = S - h, i = r - v, u = i * s - m * n;
  if (!(u * u < Ni))
    return u = (m * (x - v) - i * (l - h)) / u, [l + u * s, x + u * n];
}
function H(l, x, w, O, h, v, S) {
  var r = l - w, s = x - O, n = (S ? v : -v) / is(r * r + s * s), m = n * s, i = -n * r, u = l + m, f = x + i, c = w + m, D = O + i, o = (u + c) / 2, E2 = (f + D) / 2, p = c - u, g = D - f, R = p * p + g * g, J = h - v, P = u * D - c * f, K = (g < 0 ? -1 : 1) * is(Jo(0, J * J * R - P * P)), N = (P * g - p * K) / R, d = (-P * p - g * K) / R, A = (P * g + p * K) / R, T = (-P * p + g * K) / R, e = N - o, a = d - E2, V = A - o, W = T - E2;
  return e * e + a * a > V * V + W * W && (N = A, d = T), {
    cx: N,
    cy: d,
    x01: -m,
    y01: -i,
    x11: N * (h / J - 1),
    y11: d * (h / J - 1)
  };
}
function hn() {
  var l = fn, x = cn, w = E(0), O = null, h = yn, v = gn, S = mn, r = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), u = +x.apply(this, arguments), f = h.apply(this, arguments) - Oi, c = v.apply(this, arguments) - Oi, D = Ko(c - f), o = c > f;
    if (r || (r = n = C()), u < i && (m = u, u = i, i = m), !(u > Ni))
      r.moveTo(0, 0);
    else if (D > es - Ni)
      r.moveTo(u * Xo(f), u * Qo(f)), r.arc(0, 0, u, f, c, !o), i > Ni && (r.moveTo(i * Xo(c), i * Qo(c)), r.arc(0, 0, i, c, f, o));
    else {
      var E2 = f, p = c, g = f, R = c, J = D, P = D, K = S.apply(this, arguments) / 2, N = K > Ni && (O ? +O.apply(this, arguments) : is(i * i + u * u)), d = Zo(Ko(u - i) / 2, +w.apply(this, arguments)), A = d, T = d, e, a;
      if (N > Ni) {
        var V = ts(N / i * Qo(K)), W = ts(N / u * Qo(K));
        (J -= V * 2) > Ni ? (V *= o ? 1 : -1, g += V, R -= V) : (J = 0, g = R = (f + c) / 2), (P -= W * 2) > Ni ? (W *= o ? 1 : -1, E2 += W, p -= W) : (P = 0, E2 = p = (f + c) / 2);
      }
      var Y = u * Xo(E2), j = u * Qo(E2), B = i * Xo(R), C2 = i * Qo(R);
      if (d > Ni) {
        var F = u * Xo(p), G = u * Qo(p), L = i * Xo(g), M = i * Qo(g), q;
        if (D < mi && (q = pn(Y, j, L, M, F, G, B, C2))) {
          var U = Y - q[0], Z = j - q[1], $ = F - q[0], k = G - q[1], _ = 1 / Qo(ns((U * $ + Z * k) / (is(U * U + Z * Z) * is($ * $ + k * k))) / 2), nn = is(q[0] * q[0] + q[1] * q[1]);
          A = Zo(d, (i - nn) / (_ - 1)), T = Zo(d, (u - nn) / (_ + 1));
        }
      }
      P > Ni ? T > Ni ? (e = H(L, M, Y, j, u, T, o), a = H(F, G, B, C2, u, T, o), r.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? r.arc(e.cx, e.cy, T, Vo(e.y01, e.x01), Vo(a.y01, a.x01), !o) : (r.arc(e.cx, e.cy, T, Vo(e.y01, e.x01), Vo(e.y11, e.x11), !o), r.arc(0, 0, u, Vo(e.cy + e.y11, e.cx + e.x11), Vo(a.cy + a.y11, a.cx + a.x11), !o), r.arc(a.cx, a.cy, T, Vo(a.y11, a.x11), Vo(a.y01, a.x01), !o))) : (r.moveTo(Y, j), r.arc(0, 0, u, E2, p, !o)) : r.moveTo(Y, j), !(i > Ni) || !(J > Ni) ? r.lineTo(B, C2) : A > Ni ? (e = H(B, C2, F, G, i, -A, o), a = H(Y, j, L, M, i, -A, o), r.lineTo(e.cx + e.x01, e.cy + e.y01), A < d ? r.arc(e.cx, e.cy, A, Vo(e.y01, e.x01), Vo(a.y01, a.x01), !o) : (r.arc(e.cx, e.cy, A, Vo(e.y01, e.x01), Vo(e.y11, e.x11), !o), r.arc(0, 0, i, Vo(e.cy + e.y11, e.cx + e.x11), Vo(a.cy + a.y11, a.cx + a.x11), o), r.arc(a.cx, a.cy, A, Vo(a.y11, a.x11), Vo(a.y01, a.x01), !o))) : r.arc(0, 0, i, R, g, o);
    }
    if (r.closePath(), n)
      return r = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - mi / 2;
    return [Xo(m) * n, Qo(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (w = typeof n == "function" ? n : E(+n), s) : w;
  }, s.padRadius = function(n) {
    return arguments.length ? (O = n == null ? null : typeof n == "function" ? n : E(+n), s) : O;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (S = typeof n == "function" ? n : E(+n), s) : S;
  }, s.context = function(n) {
    return arguments.length ? (r = n ?? null, s) : r;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-LP5BNPEC.js.map
