import {
  t
} from "./chunk-QKPO76IW.js";
import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  fs,
  qi
} from "./chunk-BHKXDXK7.js";
import {
  $
} from "./chunk-SEV54HLU.js";
import {
  a,
  g,
  i,
  l,
  r,
  s,
  u
} from "./chunk-VJFQ4JEA.js";
import {
  At,
  Ce,
  Di,
  Ii,
  Pr,
  So,
  To,
  ah,
  et,
  fr,
  ge,
  ks,
  ms,
  nh,
  ot,
  qr,
  sh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/ganttDiagram-2c592def.js
function Ht(t2, e) {
  return t2 == null || e == null ? NaN : t2 < e ? -1 : t2 > e ? 1 : t2 >= e ? 0 : NaN;
}
function kr(t2, e) {
  return t2 == null || e == null ? NaN : e < t2 ? -1 : e > t2 ? 1 : e >= t2 ? 0 : NaN;
}
function Ae(t2) {
  let e, r2, n;
  t2.length !== 2 ? (e = Ht, r2 = (c, g2) => Ht(t2(c), g2), n = (c, g2) => t2(c) - g2) : (e = t2 === Ht || t2 === kr ? t2 : vr, r2 = t2, n = t2);
  function i2(c, g2, l2 = 0, b = c.length) {
    if (l2 < b) {
      if (e(g2, g2) !== 0)
        return b;
      do {
        const v = l2 + b >>> 1;
        r2(c[v], g2) < 0 ? l2 = v + 1 : b = v;
      } while (l2 < b);
    }
    return l2;
  }
  function a2(c, g2, l2 = 0, b = c.length) {
    if (l2 < b) {
      if (e(g2, g2) !== 0)
        return b;
      do {
        const v = l2 + b >>> 1;
        r2(c[v], g2) <= 0 ? l2 = v + 1 : b = v;
      } while (l2 < b);
    }
    return l2;
  }
  function s2(c, g2, l2 = 0, b = c.length) {
    const v = i2(c, g2, l2, b - 1);
    return v > l2 && n(c[v - 1], g2) > -n(c[v], g2) ? v - 1 : v;
  }
  return { left: i2, center: s2, right: a2 };
}
function vr() {
  return 0;
}
function Tr(t2) {
  return t2 === null ? NaN : +t2;
}
var xr = Ae(Ht);
var br = xr.right;
Ae(Tr).center;
var Mr = br;
var de = Math.sqrt(50);
var ge2 = Math.sqrt(10);
var ye = Math.sqrt(2);
function wr(t2, e, r2) {
  var n, i2 = -1, a2, s2, c;
  if (e = +e, t2 = +t2, r2 = +r2, t2 === e && r2 > 0)
    return [t2];
  if ((n = e < t2) && (a2 = t2, t2 = e, e = a2), (c = pn(t2, e, r2)) === 0 || !isFinite(c))
    return [];
  if (c > 0) {
    let g2 = Math.round(t2 / c), l2 = Math.round(e / c);
    for (g2 * c < t2 && ++g2, l2 * c > e && --l2, s2 = new Array(a2 = l2 - g2 + 1); ++i2 < a2; )
      s2[i2] = (g2 + i2) * c;
  } else {
    c = -c;
    let g2 = Math.round(t2 * c), l2 = Math.round(e * c);
    for (g2 / c < t2 && ++g2, l2 / c > e && --l2, s2 = new Array(a2 = l2 - g2 + 1); ++i2 < a2; )
      s2[i2] = (g2 + i2) / c;
  }
  return n && s2.reverse(), s2;
}
function pn(t2, e, r2) {
  var n = (e - t2) / Math.max(0, r2), i2 = Math.floor(Math.log(n) / Math.LN10), a2 = n / Math.pow(10, i2);
  return i2 >= 0 ? (a2 >= de ? 10 : a2 >= ge2 ? 5 : a2 >= ye ? 2 : 1) * Math.pow(10, i2) : -Math.pow(10, -i2) / (a2 >= de ? 10 : a2 >= ge2 ? 5 : a2 >= ye ? 2 : 1);
}
function pe(t2, e, r2) {
  var n = Math.abs(e - t2) / Math.max(0, r2), i2 = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), a2 = n / i2;
  return a2 >= de ? i2 *= 10 : a2 >= ge2 ? i2 *= 5 : a2 >= ye && (i2 *= 2), e < t2 ? -i2 : i2;
}
function Cr(t2, e) {
  let r2;
  if (e === void 0)
    for (const n of t2)
      n != null && (r2 < n || r2 === void 0 && n >= n) && (r2 = n);
  else {
    let n = -1;
    for (let i2 of t2)
      (i2 = e(i2, ++n, t2)) != null && (r2 < i2 || r2 === void 0 && i2 >= i2) && (r2 = i2);
  }
  return r2;
}
function Dr(t2, e) {
  let r2;
  if (e === void 0)
    for (const n of t2)
      n != null && (r2 > n || r2 === void 0 && n >= n) && (r2 = n);
  else {
    let n = -1;
    for (let i2 of t2)
      (i2 = e(i2, ++n, t2)) != null && (r2 > i2 || r2 === void 0 && i2 >= i2) && (r2 = i2);
  }
  return r2;
}
function Sr(t2) {
  return t2;
}
var Pt = 1;
var ne = 2;
var ke = 3;
var zt = 4;
var je = 1e-6;
function _r(t2) {
  return "translate(" + t2 + ",0)";
}
function Ar(t2) {
  return "translate(0," + t2 + ")";
}
function Fr(t2) {
  return (e) => +t2(e);
}
function Yr(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (r2) => +t2(r2) + e;
}
function Ur() {
  return !this.__axis;
}
function kn(t2, e) {
  var r2 = [], n = null, i2 = null, a2 = 6, s2 = 6, c = 3, g2 = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l2 = t2 === Pt || t2 === zt ? -1 : 1, b = t2 === zt || t2 === ne ? "x" : "y", v = t2 === Pt || t2 === ke ? _r : Ar;
  function y(p) {
    var I = n ?? (e.ticks ? e.ticks.apply(e, r2) : e.domain()), C = i2 ?? (e.tickFormat ? e.tickFormat.apply(e, r2) : Sr), _ = Math.max(a2, 0) + c, E = e.range(), W = +E[0] + g2, O = +E[E.length - 1] + g2, R = (e.bandwidth ? Yr : Fr)(e.copy(), g2), P = p.selection ? p.selection() : p, w = P.selectAll(".domain").data([null]), Y = P.selectAll(".tick").data(I, e).order(), B = Y.exit(), x = Y.enter().append("g").attr("class", "tick"), m = Y.select("line"), u2 = Y.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), Y = Y.merge(x), m = m.merge(x.append("line").attr("stroke", "currentColor").attr(b + "2", l2 * a2)), u2 = u2.merge(x.append("text").attr("fill", "currentColor").attr(b, l2 * _).attr("dy", t2 === Pt ? "0em" : t2 === ke ? "0.71em" : "0.32em")), p !== P && (w = w.transition(p), Y = Y.transition(p), m = m.transition(p), u2 = u2.transition(p), B = B.transition(p).attr("opacity", je).attr("transform", function(h) {
      return isFinite(h = R(h)) ? v(h + g2) : this.getAttribute("transform");
    }), x.attr("opacity", je).attr("transform", function(h) {
      var T = this.parentNode.__axis;
      return v((T && isFinite(T = T(h)) ? T : R(h)) + g2);
    })), B.remove(), w.attr("d", t2 === zt || t2 === ne ? s2 ? "M" + l2 * s2 + "," + W + "H" + g2 + "V" + O + "H" + l2 * s2 : "M" + g2 + "," + W + "V" + O : s2 ? "M" + W + "," + l2 * s2 + "V" + g2 + "H" + O + "V" + l2 * s2 : "M" + W + "," + g2 + "H" + O), Y.attr("opacity", 1).attr("transform", function(h) {
      return v(R(h) + g2);
    }), m.attr(b + "2", l2 * a2), u2.attr(b, l2 * _).text(C), P.filter(Ur).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === ne ? "start" : t2 === zt ? "end" : "middle"), P.each(function() {
      this.__axis = R;
    });
  }
  return y.scale = function(p) {
    return arguments.length ? (e = p, y) : e;
  }, y.ticks = function() {
    return r2 = Array.from(arguments), y;
  }, y.tickArguments = function(p) {
    return arguments.length ? (r2 = p == null ? [] : Array.from(p), y) : r2.slice();
  }, y.tickValues = function(p) {
    return arguments.length ? (n = p == null ? null : Array.from(p), y) : n && n.slice();
  }, y.tickFormat = function(p) {
    return arguments.length ? (i2 = p, y) : i2;
  }, y.tickSize = function(p) {
    return arguments.length ? (a2 = s2 = +p, y) : a2;
  }, y.tickSizeInner = function(p) {
    return arguments.length ? (a2 = +p, y) : a2;
  }, y.tickSizeOuter = function(p) {
    return arguments.length ? (s2 = +p, y) : s2;
  }, y.tickPadding = function(p) {
    return arguments.length ? (c = +p, y) : c;
  }, y.offset = function(p) {
    return arguments.length ? (g2 = +p, y) : g2;
  }, y;
}
function Lr(t2) {
  return kn(Pt, t2);
}
function Er(t2) {
  return kn(ke, t2);
}
var Nr = Math.PI / 180;
var Ir = 180 / Math.PI;
var Bt = 18;
var vn = 0.96422;
var Tn = 1;
var xn = 0.82521;
var bn = 4 / 29;
var Tt = 6 / 29;
var Mn = 3 * Tt * Tt;
var Wr = Tt * Tt * Tt;
function wn(t2) {
  if (t2 instanceof ot2)
    return new ot2(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof ut)
    return Cn(t2);
  t2 instanceof ot || (t2 = ms(t2));
  var e = se(t2.r), r2 = se(t2.g), n = se(t2.b), i2 = re((0.2225045 * e + 0.7168786 * r2 + 0.0606169 * n) / Tn), a2, s2;
  return e === r2 && r2 === n ? a2 = s2 = i2 : (a2 = re((0.4360747 * e + 0.3850649 * r2 + 0.1430804 * n) / vn), s2 = re((0.0139322 * e + 0.0971045 * r2 + 0.7141733 * n) / xn)), new ot2(116 * i2 - 16, 500 * (a2 - i2), 200 * (i2 - s2), t2.opacity);
}
function zr(t2, e, r2, n) {
  return arguments.length === 1 ? wn(t2) : new ot2(t2, e, r2, n ?? 1);
}
function ot2(t2, e, r2, n) {
  this.l = +t2, this.a = +e, this.b = +r2, this.opacity = +n;
}
Ii(ot2, zr, Pr(Ce, {
  brighter(t2) {
    return new ot2(this.l + Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ot2(this.l - Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, r2 = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = vn * ie(e), t2 = Tn * ie(t2), r2 = xn * ie(r2), new ot(
      ae(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * r2),
      ae(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * r2),
      ae(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * r2),
      this.opacity
    );
  }
}));
function re(t2) {
  return t2 > Wr ? Math.pow(t2, 1 / 3) : t2 / Mn + bn;
}
function ie(t2) {
  return t2 > Tt ? t2 * t2 * t2 : Mn * (t2 - bn);
}
function ae(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function se(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function Or(t2) {
  if (t2 instanceof ut)
    return new ut(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ot2 || (t2 = wn(t2)), t2.a === 0 && t2.b === 0)
    return new ut(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * Ir;
  return new ut(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function ve(t2, e, r2, n) {
  return arguments.length === 1 ? Or(t2) : new ut(t2, e, r2, n ?? 1);
}
function ut(t2, e, r2, n) {
  this.h = +t2, this.c = +e, this.l = +r2, this.opacity = +n;
}
function Cn(t2) {
  if (isNaN(t2.h))
    return new ot2(t2.l, 0, 0, t2.opacity);
  var e = t2.h * Nr;
  return new ot2(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
Ii(ut, ve, Pr(Ce, {
  brighter(t2) {
    return new ut(this.h, this.c, this.l + Bt * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new ut(this.h, this.c, this.l - Bt * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return Cn(this).rgb();
  }
}));
function Hr(t2, e) {
  e || (e = []);
  var r2 = t2 ? Math.min(e.length, t2.length) : 0, n = e.slice(), i2;
  return function(a2) {
    for (i2 = 0; i2 < r2; ++i2)
      n[i2] = t2[i2] * (1 - a2) + e[i2] * a2;
    return n;
  };
}
function Pr2(t2) {
  return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
}
function Vr(t2, e) {
  var r2 = e ? e.length : 0, n = t2 ? Math.min(r2, t2.length) : 0, i2 = new Array(n), a2 = new Array(r2), s2;
  for (s2 = 0; s2 < n; ++s2)
    i2[s2] = Fe(t2[s2], e[s2]);
  for (; s2 < r2; ++s2)
    a2[s2] = e[s2];
  return function(c) {
    for (s2 = 0; s2 < n; ++s2)
      a2[s2] = i2[s2](c);
    return a2;
  };
}
function Rr(t2, e) {
  var r2 = new Date();
  return t2 = +t2, e = +e, function(n) {
    return r2.setTime(t2 * (1 - n) + e * n), r2;
  };
}
function Br(t2, e) {
  var r2 = {}, n = {}, i2;
  (t2 === null || typeof t2 != "object") && (t2 = {}), (e === null || typeof e != "object") && (e = {});
  for (i2 in e)
    i2 in t2 ? r2[i2] = Fe(t2[i2], e[i2]) : n[i2] = e[i2];
  return function(a2) {
    for (i2 in r2)
      n[i2] = r2[i2](a2);
    return n;
  };
}
function Fe(t2, e) {
  var r2 = typeof e, n;
  return e == null || r2 === "boolean" ? Di(e) : (r2 === "number" ? At : r2 === "string" ? (n = ge(e)) ? (e = n, fr) : ks : e instanceof ge ? fr : e instanceof Date ? Rr : Pr2(e) ? Hr : Array.isArray(e) ? Vr : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Br : At)(t2, e);
}
function Zr(t2, e) {
  return t2 = +t2, e = +e, function(r2) {
    return Math.round(t2 * (1 - r2) + e * r2);
  };
}
function jr(t2) {
  return function(e, r2) {
    var n = t2((e = ve(e)).h, (r2 = ve(r2)).h), i2 = qr(e.c, r2.c), a2 = qr(e.l, r2.l), s2 = qr(e.opacity, r2.opacity);
    return function(c) {
      return e.h = n(c), e.c = i2(c), e.l = a2(c), e.opacity = s2(c), e + "";
    };
  };
}
var Xr = jr(sh);
function qr2(t2) {
  return Math.abs(t2 = Math.round(t2)) >= 1e21 ? t2.toLocaleString("en").replace(/,/g, "") : t2.toString(10);
}
function Zt(t2, e) {
  if ((r2 = (t2 = e ? t2.toExponential(e - 1) : t2.toExponential()).indexOf("e")) < 0)
    return null;
  var r2, n = t2.slice(0, r2);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +t2.slice(r2 + 1)
  ];
}
function bt(t2) {
  return t2 = Zt(Math.abs(t2)), t2 ? t2[1] : NaN;
}
function Gr(t2, e) {
  return function(r2, n) {
    for (var i2 = r2.length, a2 = [], s2 = 0, c = t2[0], g2 = 0; i2 > 0 && c > 0 && (g2 + c + 1 > n && (c = Math.max(1, n - g2)), a2.push(r2.substring(i2 -= c, i2 + c)), !((g2 += c + 1) > n)); )
      c = t2[s2 = (s2 + 1) % t2.length];
    return a2.reverse().join(e);
  };
}
function $r(t2) {
  return function(e) {
    return e.replace(/[0-9]/g, function(r2) {
      return t2[+r2];
    });
  };
}
var Qr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function jt(t2) {
  if (!(e = Qr.exec(t2)))
    throw new Error("invalid format: " + t2);
  var e;
  return new Ye({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
jt.prototype = Ye.prototype;
function Ye(t2) {
  this.fill = t2.fill === void 0 ? " " : t2.fill + "", this.align = t2.align === void 0 ? ">" : t2.align + "", this.sign = t2.sign === void 0 ? "-" : t2.sign + "", this.symbol = t2.symbol === void 0 ? "" : t2.symbol + "", this.zero = !!t2.zero, this.width = t2.width === void 0 ? void 0 : +t2.width, this.comma = !!t2.comma, this.precision = t2.precision === void 0 ? void 0 : +t2.precision, this.trim = !!t2.trim, this.type = t2.type === void 0 ? "" : t2.type + "";
}
Ye.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Jr(t2) {
  t:
    for (var e = t2.length, r2 = 1, n = -1, i2; r2 < e; ++r2)
      switch (t2[r2]) {
        case ".":
          n = i2 = r2;
          break;
        case "0":
          n === 0 && (n = r2), i2 = r2;
          break;
        default:
          if (!+t2[r2])
            break t;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? t2.slice(0, n) + t2.slice(i2 + 1) : t2;
}
var Dn;
function Kr(t2, e) {
  var r2 = Zt(t2, e);
  if (!r2)
    return t2 + "";
  var n = r2[0], i2 = r2[1], a2 = i2 - (Dn = Math.max(-8, Math.min(8, Math.floor(i2 / 3))) * 3) + 1, s2 = n.length;
  return a2 === s2 ? n : a2 > s2 ? n + new Array(a2 - s2 + 1).join("0") : a2 > 0 ? n.slice(0, a2) + "." + n.slice(a2) : "0." + new Array(1 - a2).join("0") + Zt(t2, Math.max(0, e + a2 - 1))[0];
}
function Xe(t2, e) {
  var r2 = Zt(t2, e);
  if (!r2)
    return t2 + "";
  var n = r2[0], i2 = r2[1];
  return i2 < 0 ? "0." + new Array(-i2).join("0") + n : n.length > i2 + 1 ? n.slice(0, i2 + 1) + "." + n.slice(i2 + 1) : n + new Array(i2 - n.length + 2).join("0");
}
var qe = {
  "%": (t2, e) => (t2 * 100).toFixed(e),
  b: (t2) => Math.round(t2).toString(2),
  c: (t2) => t2 + "",
  d: qr2,
  e: (t2, e) => t2.toExponential(e),
  f: (t2, e) => t2.toFixed(e),
  g: (t2, e) => t2.toPrecision(e),
  o: (t2) => Math.round(t2).toString(8),
  p: (t2, e) => Xe(t2 * 100, e),
  r: Xe,
  s: Kr,
  X: (t2) => Math.round(t2).toString(16).toUpperCase(),
  x: (t2) => Math.round(t2).toString(16)
};
function Ge(t2) {
  return t2;
}
var $e = Array.prototype.map;
var Qe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ti(t2) {
  var e = t2.grouping === void 0 || t2.thousands === void 0 ? Ge : Gr($e.call(t2.grouping, Number), t2.thousands + ""), r2 = t2.currency === void 0 ? "" : t2.currency[0] + "", n = t2.currency === void 0 ? "" : t2.currency[1] + "", i2 = t2.decimal === void 0 ? "." : t2.decimal + "", a2 = t2.numerals === void 0 ? Ge : $r($e.call(t2.numerals, String)), s2 = t2.percent === void 0 ? "%" : t2.percent + "", c = t2.minus === void 0 ? "−" : t2.minus + "", g2 = t2.nan === void 0 ? "NaN" : t2.nan + "";
  function l2(v) {
    v = jt(v);
    var y = v.fill, p = v.align, I = v.sign, C = v.symbol, _ = v.zero, E = v.width, W = v.comma, O = v.precision, R = v.trim, P = v.type;
    P === "n" ? (W = true, P = "g") : qe[P] || (O === void 0 && (O = 12), R = true, P = "g"), (_ || y === "0" && p === "=") && (_ = true, y = "0", p = "=");
    var w = C === "$" ? r2 : C === "#" && /[boxX]/.test(P) ? "0" + P.toLowerCase() : "", Y = C === "$" ? n : /[%p]/.test(P) ? s2 : "", B = qe[P], x = /[defgprs%]/.test(P);
    O = O === void 0 ? 6 : /[gprs]/.test(P) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function m(u2) {
      var h = w, T = Y, o, F, f;
      if (P === "c")
        T = B(u2) + T, u2 = "";
      else {
        u2 = +u2;
        var A = u2 < 0 || 1 / u2 < 0;
        if (u2 = isNaN(u2) ? g2 : B(Math.abs(u2), O), R && (u2 = Jr(u2)), A && +u2 == 0 && I !== "+" && (A = false), h = (A ? I === "(" ? I : c : I === "-" || I === "(" ? "" : I) + h, T = (P === "s" ? Qe[8 + Dn / 3] : "") + T + (A && I === "(" ? ")" : ""), x) {
          for (o = -1, F = u2.length; ++o < F; )
            if (f = u2.charCodeAt(o), 48 > f || f > 57) {
              T = (f === 46 ? i2 + u2.slice(o + 1) : u2.slice(o)) + T, u2 = u2.slice(0, o);
              break;
            }
        }
      }
      W && !_ && (u2 = e(u2, 1 / 0));
      var Z = h.length + u2.length + T.length, j = Z < E ? new Array(E - Z + 1).join(y) : "";
      switch (W && _ && (u2 = e(j + u2, j.length ? E - T.length : 1 / 0), j = ""), p) {
        case "<":
          u2 = h + u2 + T + j;
          break;
        case "=":
          u2 = h + j + u2 + T;
          break;
        case "^":
          u2 = j.slice(0, Z = j.length >> 1) + h + u2 + T + j.slice(Z);
          break;
        default:
          u2 = j + h + u2 + T;
          break;
      }
      return a2(u2);
    }
    return m.toString = function() {
      return v + "";
    }, m;
  }
  function b(v, y) {
    var p = l2((v = jt(v), v.type = "f", v)), I = Math.max(-8, Math.min(8, Math.floor(bt(y) / 3))) * 3, C = Math.pow(10, -I), _ = Qe[8 + I / 3];
    return function(E) {
      return p(C * E) + _;
    };
  }
  return {
    format: l2,
    formatPrefix: b
  };
}
var Ot;
var Sn;
var _n;
ei({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ei(t2) {
  return Ot = ti(t2), Sn = Ot.format, _n = Ot.formatPrefix, Ot;
}
function ni(t2) {
  return Math.max(0, -bt(Math.abs(t2)));
}
function ri(t2, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(bt(e) / 3))) * 3 - bt(Math.abs(t2)));
}
function ii(t2, e) {
  return t2 = Math.abs(t2), e = Math.abs(e) - t2, Math.max(0, bt(e) - bt(t2)) + 1;
}
function ai(t2) {
  return function() {
    return t2;
  };
}
function si(t2) {
  return +t2;
}
var Je = [0, 1];
function kt(t2) {
  return t2;
}
function Te(t2, e) {
  return (e -= t2 = +t2) ? function(r2) {
    return (r2 - t2) / e;
  } : ai(isNaN(e) ? NaN : 0.5);
}
function oi(t2, e) {
  var r2;
  return t2 > e && (r2 = t2, t2 = e, e = r2), function(n) {
    return Math.max(t2, Math.min(e, n));
  };
}
function ci(t2, e, r2) {
  var n = t2[0], i2 = t2[1], a2 = e[0], s2 = e[1];
  return i2 < n ? (n = Te(i2, n), a2 = r2(s2, a2)) : (n = Te(n, i2), a2 = r2(a2, s2)), function(c) {
    return a2(n(c));
  };
}
function ui(t2, e, r2) {
  var n = Math.min(t2.length, e.length) - 1, i2 = new Array(n), a2 = new Array(n), s2 = -1;
  for (t2[n] < t2[0] && (t2 = t2.slice().reverse(), e = e.slice().reverse()); ++s2 < n; )
    i2[s2] = Te(t2[s2], t2[s2 + 1]), a2[s2] = r2(e[s2], e[s2 + 1]);
  return function(c) {
    var g2 = Mr(t2, c, 1, n) - 1;
    return a2[g2](i2[g2](c));
  };
}
function An(t2, e) {
  return e.domain(t2.domain()).range(t2.range()).interpolate(t2.interpolate()).clamp(t2.clamp()).unknown(t2.unknown());
}
function li() {
  var t2 = Je, e = Je, r2 = Fe, n, i2, a2, s2 = kt, c, g2, l2;
  function b() {
    var y = Math.min(t2.length, e.length);
    return s2 !== kt && (s2 = oi(t2[0], t2[y - 1])), c = y > 2 ? ui : ci, g2 = l2 = null, v;
  }
  function v(y) {
    return y == null || isNaN(y = +y) ? a2 : (g2 || (g2 = c(t2.map(n), e, r2)))(n(s2(y)));
  }
  return v.invert = function(y) {
    return s2(i2((l2 || (l2 = c(e, t2.map(n), At)))(y)));
  }, v.domain = function(y) {
    return arguments.length ? (t2 = Array.from(y, si), b()) : t2.slice();
  }, v.range = function(y) {
    return arguments.length ? (e = Array.from(y), b()) : e.slice();
  }, v.rangeRound = function(y) {
    return e = Array.from(y), r2 = Zr, b();
  }, v.clamp = function(y) {
    return arguments.length ? (s2 = y ? true : kt, b()) : s2 !== kt;
  }, v.interpolate = function(y) {
    return arguments.length ? (r2 = y, b()) : r2;
  }, v.unknown = function(y) {
    return arguments.length ? (a2 = y, v) : a2;
  }, function(y, p) {
    return n = y, i2 = p, b();
  };
}
function Fn() {
  return li()(kt, kt);
}
function fi(t2, e, r2, n) {
  var i2 = pe(t2, e, r2), a2;
  switch (n = jt(n ?? ",f"), n.type) {
    case "s": {
      var s2 = Math.max(Math.abs(t2), Math.abs(e));
      return n.precision == null && !isNaN(a2 = ri(i2, s2)) && (n.precision = a2), _n(n, s2);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a2 = ii(i2, Math.max(Math.abs(t2), Math.abs(e)))) && (n.precision = a2 - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a2 = ni(i2)) && (n.precision = a2 - (n.type === "%") * 2);
      break;
    }
  }
  return Sn(n);
}
function hi(t2) {
  var e = t2.domain;
  return t2.ticks = function(r2) {
    var n = e();
    return wr(n[0], n[n.length - 1], r2 ?? 10);
  }, t2.tickFormat = function(r2, n) {
    var i2 = e();
    return fi(i2[0], i2[i2.length - 1], r2 ?? 10, n);
  }, t2.nice = function(r2) {
    r2 == null && (r2 = 10);
    var n = e(), i2 = 0, a2 = n.length - 1, s2 = n[i2], c = n[a2], g2, l2, b = 10;
    for (c < s2 && (l2 = s2, s2 = c, c = l2, l2 = i2, i2 = a2, a2 = l2); b-- > 0; ) {
      if (l2 = pn(s2, c, r2), l2 === g2)
        return n[i2] = s2, n[a2] = c, e(n);
      if (l2 > 0)
        s2 = Math.floor(s2 / l2) * l2, c = Math.ceil(c / l2) * l2;
      else if (l2 < 0)
        s2 = Math.ceil(s2 * l2) / l2, c = Math.floor(c * l2) / l2;
      else
        break;
      g2 = l2;
    }
    return t2;
  }, t2;
}
function Yn() {
  var t2 = Fn();
  return t2.copy = function() {
    return An(t2, Yn());
  }, t.apply(t2, arguments), hi(t2);
}
function mi(t2, e) {
  t2 = t2.slice();
  var r2 = 0, n = t2.length - 1, i2 = t2[r2], a2 = t2[n], s2;
  return a2 < i2 && (s2 = r2, r2 = n, n = s2, s2 = i2, i2 = a2, a2 = s2), t2[r2] = e.floor(i2), t2[n] = e.ceil(a2), t2;
}
var oe = new Date();
var ce = new Date();
function tt(t2, e, r2, n) {
  function i2(a2) {
    return t2(a2 = arguments.length === 0 ? new Date() : new Date(+a2)), a2;
  }
  return i2.floor = function(a2) {
    return t2(a2 = new Date(+a2)), a2;
  }, i2.ceil = function(a2) {
    return t2(a2 = new Date(a2 - 1)), e(a2, 1), t2(a2), a2;
  }, i2.round = function(a2) {
    var s2 = i2(a2), c = i2.ceil(a2);
    return a2 - s2 < c - a2 ? s2 : c;
  }, i2.offset = function(a2, s2) {
    return e(a2 = new Date(+a2), s2 == null ? 1 : Math.floor(s2)), a2;
  }, i2.range = function(a2, s2, c) {
    var g2 = [], l2;
    if (a2 = i2.ceil(a2), c = c == null ? 1 : Math.floor(c), !(a2 < s2) || !(c > 0))
      return g2;
    do
      g2.push(l2 = new Date(+a2)), e(a2, c), t2(a2);
    while (l2 < a2 && a2 < s2);
    return g2;
  }, i2.filter = function(a2) {
    return tt(function(s2) {
      if (s2 >= s2)
        for (; t2(s2), !a2(s2); )
          s2.setTime(s2 - 1);
    }, function(s2, c) {
      if (s2 >= s2)
        if (c < 0)
          for (; ++c <= 0; )
            for (; e(s2, -1), !a2(s2); )
              ;
        else
          for (; --c >= 0; )
            for (; e(s2, 1), !a2(s2); )
              ;
    });
  }, r2 && (i2.count = function(a2, s2) {
    return oe.setTime(+a2), ce.setTime(+s2), t2(oe), t2(ce), Math.floor(r2(oe, ce));
  }, i2.every = function(a2) {
    return a2 = Math.floor(a2), !isFinite(a2) || !(a2 > 0) ? null : a2 > 1 ? i2.filter(n ? function(s2) {
      return n(s2) % a2 === 0;
    } : function(s2) {
      return i2.count(0, s2) % a2 === 0;
    }) : i2;
  }), i2;
}
var Xt = tt(function() {
}, function(t2, e) {
  t2.setTime(+t2 + e);
}, function(t2, e) {
  return e - t2;
});
Xt.every = function(t2) {
  return t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? tt(function(e) {
    e.setTime(Math.floor(e / t2) * t2);
  }, function(e, r2) {
    e.setTime(+e + r2 * t2);
  }, function(e, r2) {
    return (r2 - e) / t2;
  }) : Xt;
};
var di = Xt;
Xt.range;
var lt = 1e3;
var it = lt * 60;
var ft = it * 60;
var mt = ft * 24;
var Ue = mt * 7;
var Ke = mt * 30;
var ue = mt * 365;
var Un = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds());
}, function(t2, e) {
  t2.setTime(+t2 + e * lt);
}, function(t2, e) {
  return (e - t2) / lt;
}, function(t2) {
  return t2.getUTCSeconds();
});
var Lt = Un;
Un.range;
var Ln = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt);
}, function(t2, e) {
  t2.setTime(+t2 + e * it);
}, function(t2, e) {
  return (e - t2) / it;
}, function(t2) {
  return t2.getMinutes();
});
var qt = Ln;
Ln.range;
var En = tt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * lt - t2.getMinutes() * it);
}, function(t2, e) {
  t2.setTime(+t2 + e * ft);
}, function(t2, e) {
  return (e - t2) / ft;
}, function(t2) {
  return t2.getHours();
});
var Gt = En;
En.range;
var Nn = tt(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * it) / mt,
  (t2) => t2.getDate() - 1
);
var Mt = Nn;
Nn.range;
function gt(t2) {
  return tt(function(e) {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, function(e, r2) {
    e.setDate(e.getDate() + r2 * 7);
  }, function(e, r2) {
    return (r2 - e - (r2.getTimezoneOffset() - e.getTimezoneOffset()) * it) / Ue;
  });
}
var wt = gt(0);
var $t = gt(1);
var gi = gt(2);
var yi = gt(3);
var Ct = gt(4);
var pi = gt(5);
var ki = gt(6);
wt.range;
$t.range;
gi.range;
yi.range;
Ct.range;
pi.range;
ki.range;
var In = tt(function(t2) {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setMonth(t2.getMonth() + e);
}, function(t2, e) {
  return e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12;
}, function(t2) {
  return t2.getMonth();
});
var Qt = In;
In.range;
var Le = tt(function(t2) {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setFullYear(t2.getFullYear() + e);
}, function(t2, e) {
  return e.getFullYear() - t2.getFullYear();
}, function(t2) {
  return t2.getFullYear();
});
Le.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : tt(function(e) {
    e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  }, function(e, r2) {
    e.setFullYear(e.getFullYear() + r2 * t2);
  });
};
var dt = Le;
Le.range;
var Wn = tt(function(t2) {
  t2.setUTCSeconds(0, 0);
}, function(t2, e) {
  t2.setTime(+t2 + e * it);
}, function(t2, e) {
  return (e - t2) / it;
}, function(t2) {
  return t2.getUTCMinutes();
});
var vi = Wn;
Wn.range;
var zn = tt(function(t2) {
  t2.setUTCMinutes(0, 0, 0);
}, function(t2, e) {
  t2.setTime(+t2 + e * ft);
}, function(t2, e) {
  return (e - t2) / ft;
}, function(t2) {
  return t2.getUTCHours();
});
var Ti = zn;
zn.range;
var On = tt(function(t2) {
  t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCDate(t2.getUTCDate() + e);
}, function(t2, e) {
  return (e - t2) / mt;
}, function(t2) {
  return t2.getUTCDate() - 1;
});
var Ee = On;
On.range;
function yt(t2) {
  return tt(function(e) {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, function(e, r2) {
    e.setUTCDate(e.getUTCDate() + r2 * 7);
  }, function(e, r2) {
    return (r2 - e) / Ue;
  });
}
var Ne = yt(0);
var Jt = yt(1);
var xi = yt(2);
var bi = yt(3);
var Dt = yt(4);
var Mi = yt(5);
var wi = yt(6);
Ne.range;
Jt.range;
xi.range;
bi.range;
Dt.range;
Mi.range;
wi.range;
var Hn = tt(function(t2) {
  t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCMonth(t2.getUTCMonth() + e);
}, function(t2, e) {
  return e.getUTCMonth() - t2.getUTCMonth() + (e.getUTCFullYear() - t2.getUTCFullYear()) * 12;
}, function(t2) {
  return t2.getUTCMonth();
});
var Ci = Hn;
Hn.range;
var Ie = tt(function(t2) {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, function(t2, e) {
  return e.getUTCFullYear() - t2.getUTCFullYear();
}, function(t2) {
  return t2.getUTCFullYear();
});
Ie.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : tt(function(e) {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  }, function(e, r2) {
    e.setUTCFullYear(e.getUTCFullYear() + r2 * t2);
  });
};
var St = Ie;
Ie.range;
function Pn(t2, e, r2, n, i2, a2) {
  const s2 = [
    [Lt, 1, lt],
    [Lt, 5, 5 * lt],
    [Lt, 15, 15 * lt],
    [Lt, 30, 30 * lt],
    [a2, 1, it],
    [a2, 5, 5 * it],
    [a2, 15, 15 * it],
    [a2, 30, 30 * it],
    [i2, 1, ft],
    [i2, 3, 3 * ft],
    [i2, 6, 6 * ft],
    [i2, 12, 12 * ft],
    [n, 1, mt],
    [n, 2, 2 * mt],
    [r2, 1, Ue],
    [e, 1, Ke],
    [e, 3, 3 * Ke],
    [t2, 1, ue]
  ];
  function c(l2, b, v) {
    const y = b < l2;
    y && ([l2, b] = [b, l2]);
    const p = v && typeof v.range == "function" ? v : g2(l2, b, v), I = p ? p.range(l2, +b + 1) : [];
    return y ? I.reverse() : I;
  }
  function g2(l2, b, v) {
    const y = Math.abs(b - l2) / v, p = Ae(([, , _]) => _).right(s2, y);
    if (p === s2.length)
      return t2.every(pe(l2 / ue, b / ue, v));
    if (p === 0)
      return di.every(Math.max(pe(l2, b, v), 1));
    const [I, C] = s2[y / s2[p - 1][2] < s2[p][2] / y ? p - 1 : p];
    return I.every(C);
  }
  return [c, g2];
}
Pn(St, Ci, Ne, Ee, Ti, vi);
var [Di2, Si] = Pn(dt, Qt, wt, Mt, Gt, qt);
function le(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function fe(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function Ft(t2, e, r2) {
  return { y: t2, m: e, d: r2, H: 0, M: 0, S: 0, L: 0 };
}
function _i(t2) {
  var e = t2.dateTime, r2 = t2.date, n = t2.time, i2 = t2.periods, a2 = t2.days, s2 = t2.shortDays, c = t2.months, g2 = t2.shortMonths, l2 = Yt(i2), b = Ut(i2), v = Yt(a2), y = Ut(a2), p = Yt(s2), I = Ut(s2), C = Yt(c), _ = Ut(c), E = Yt(g2), W = Ut(g2), O = {
    a: A,
    A: Z,
    b: j,
    B: k,
    c: null,
    d: sn,
    e: sn,
    f: Qi,
    g: oa,
    G: ua,
    H: qi2,
    I: Gi,
    j: $i,
    L: Vn,
    m: Ji,
    M: Ki,
    p: U,
    q: S,
    Q: un,
    s: ln,
    S: ta,
    u: ea,
    U: na,
    V: ra,
    w: ia,
    W: aa,
    x: null,
    X: null,
    y: sa,
    Y: ca,
    Z: la,
    "%": cn
  }, R = {
    a: V,
    A: q,
    b: z,
    B: H,
    c: null,
    d: on,
    e: on,
    f: da,
    g: wa,
    G: Da,
    H: fa,
    I: ha,
    j: ma,
    L: Bn,
    m: ga,
    M: ya,
    p: ht,
    q: $2,
    Q: un,
    s: ln,
    S: pa,
    u: ka,
    U: va,
    V: Ta,
    w: xa,
    W: ba,
    x: null,
    X: null,
    y: Ma,
    Y: Ca,
    Z: Sa,
    "%": cn
  }, P = {
    a: m,
    A: u2,
    b: h,
    B: T,
    c: o,
    d: rn,
    e: rn,
    f: Bi,
    g: nn,
    G: en,
    H: an,
    I: an,
    j: Hi,
    L: Ri,
    m: Oi,
    M: Pi,
    p: x,
    q: zi,
    Q: ji,
    s: Xi,
    S: Vi,
    u: Li,
    U: Ei,
    V: Ni,
    w: Ui,
    W: Ii2,
    x: F,
    X: f,
    y: nn,
    Y: en,
    Z: Wi,
    "%": Zi
  };
  O.x = w(r2, O), O.X = w(n, O), O.c = w(e, O), R.x = w(r2, R), R.X = w(n, R), R.c = w(e, R);
  function w(M, D) {
    return function(L) {
      var d = [], G = -1, N = 0, Q = M.length, J, at, rt;
      for (L instanceof Date || (L = new Date(+L)); ++G < Q; )
        M.charCodeAt(G) === 37 && (d.push(M.slice(N, G)), (at = tn[J = M.charAt(++G)]) != null ? J = M.charAt(++G) : at = J === "e" ? " " : "0", (rt = D[J]) && (J = rt(L, at)), d.push(J), N = G + 1);
      return d.push(M.slice(N, G)), d.join("");
    };
  }
  function Y(M, D) {
    return function(L) {
      var d = Ft(1900, void 0, 1), G = B(d, M, L += "", 0), N, Q;
      if (G != L.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (D && !("Z" in d) && (d.Z = 0), "p" in d && (d.H = d.H % 12 + d.p * 12), d.m === void 0 && (d.m = "q" in d ? d.q : 0), "V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        "w" in d || (d.w = 1), "Z" in d ? (N = fe(Ft(d.y, 0, 1)), Q = N.getUTCDay(), N = Q > 4 || Q === 0 ? Jt.ceil(N) : Jt(N), N = Ee.offset(N, (d.V - 1) * 7), d.y = N.getUTCFullYear(), d.m = N.getUTCMonth(), d.d = N.getUTCDate() + (d.w + 6) % 7) : (N = le(Ft(d.y, 0, 1)), Q = N.getDay(), N = Q > 4 || Q === 0 ? $t.ceil(N) : $t(N), N = Mt.offset(N, (d.V - 1) * 7), d.y = N.getFullYear(), d.m = N.getMonth(), d.d = N.getDate() + (d.w + 6) % 7);
      } else
        ("W" in d || "U" in d) && ("w" in d || (d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0), Q = "Z" in d ? fe(Ft(d.y, 0, 1)).getUTCDay() : le(Ft(d.y, 0, 1)).getDay(), d.m = 0, d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (Q + 5) % 7 : d.w + d.U * 7 - (Q + 6) % 7);
      return "Z" in d ? (d.H += d.Z / 100 | 0, d.M += d.Z % 100, fe(d)) : le(d);
    };
  }
  function B(M, D, L, d) {
    for (var G = 0, N = D.length, Q = L.length, J, at; G < N; ) {
      if (d >= Q)
        return -1;
      if (J = D.charCodeAt(G++), J === 37) {
        if (J = D.charAt(G++), at = P[J in tn ? D.charAt(G++) : J], !at || (d = at(M, L, d)) < 0)
          return -1;
      } else if (J != L.charCodeAt(d++))
        return -1;
    }
    return d;
  }
  function x(M, D, L) {
    var d = l2.exec(D.slice(L));
    return d ? (M.p = b.get(d[0].toLowerCase()), L + d[0].length) : -1;
  }
  function m(M, D, L) {
    var d = p.exec(D.slice(L));
    return d ? (M.w = I.get(d[0].toLowerCase()), L + d[0].length) : -1;
  }
  function u2(M, D, L) {
    var d = v.exec(D.slice(L));
    return d ? (M.w = y.get(d[0].toLowerCase()), L + d[0].length) : -1;
  }
  function h(M, D, L) {
    var d = E.exec(D.slice(L));
    return d ? (M.m = W.get(d[0].toLowerCase()), L + d[0].length) : -1;
  }
  function T(M, D, L) {
    var d = C.exec(D.slice(L));
    return d ? (M.m = _.get(d[0].toLowerCase()), L + d[0].length) : -1;
  }
  function o(M, D, L) {
    return B(M, e, D, L);
  }
  function F(M, D, L) {
    return B(M, r2, D, L);
  }
  function f(M, D, L) {
    return B(M, n, D, L);
  }
  function A(M) {
    return s2[M.getDay()];
  }
  function Z(M) {
    return a2[M.getDay()];
  }
  function j(M) {
    return g2[M.getMonth()];
  }
  function k(M) {
    return c[M.getMonth()];
  }
  function U(M) {
    return i2[+(M.getHours() >= 12)];
  }
  function S(M) {
    return 1 + ~~(M.getMonth() / 3);
  }
  function V(M) {
    return s2[M.getUTCDay()];
  }
  function q(M) {
    return a2[M.getUTCDay()];
  }
  function z(M) {
    return g2[M.getUTCMonth()];
  }
  function H(M) {
    return c[M.getUTCMonth()];
  }
  function ht(M) {
    return i2[+(M.getUTCHours() >= 12)];
  }
  function $2(M) {
    return 1 + ~~(M.getUTCMonth() / 3);
  }
  return {
    format: function(M) {
      var D = w(M += "", O);
      return D.toString = function() {
        return M;
      }, D;
    },
    parse: function(M) {
      var D = Y(M += "", false);
      return D.toString = function() {
        return M;
      }, D;
    },
    utcFormat: function(M) {
      var D = w(M += "", R);
      return D.toString = function() {
        return M;
      }, D;
    },
    utcParse: function(M) {
      var D = Y(M += "", true);
      return D.toString = function() {
        return M;
      }, D;
    }
  };
}
var tn = { "-": "", _: " ", 0: "0" };
var et2 = /^\s*\d+/;
var Ai = /^%/;
var Fi = /[\\^$*+?|[\]().{}]/g;
function X(t2, e, r2) {
  var n = t2 < 0 ? "-" : "", i2 = (n ? -t2 : t2) + "", a2 = i2.length;
  return n + (a2 < r2 ? new Array(r2 - a2 + 1).join(e) + i2 : i2);
}
function Yi(t2) {
  return t2.replace(Fi, "\\$&");
}
function Yt(t2) {
  return new RegExp("^(?:" + t2.map(Yi).join("|") + ")", "i");
}
function Ut(t2) {
  return new Map(t2.map((e, r2) => [e.toLowerCase(), r2]));
}
function Ui(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 1));
  return n ? (t2.w = +n[0], r2 + n[0].length) : -1;
}
function Li(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 1));
  return n ? (t2.u = +n[0], r2 + n[0].length) : -1;
}
function Ei(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.U = +n[0], r2 + n[0].length) : -1;
}
function Ni(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.V = +n[0], r2 + n[0].length) : -1;
}
function Ii2(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.W = +n[0], r2 + n[0].length) : -1;
}
function en(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 4));
  return n ? (t2.y = +n[0], r2 + n[0].length) : -1;
}
function nn(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r2 + n[0].length) : -1;
}
function Wi(t2, e, r2) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r2, r2 + 6));
  return n ? (t2.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r2 + n[0].length) : -1;
}
function zi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 1));
  return n ? (t2.q = n[0] * 3 - 3, r2 + n[0].length) : -1;
}
function Oi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.m = n[0] - 1, r2 + n[0].length) : -1;
}
function rn(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.d = +n[0], r2 + n[0].length) : -1;
}
function Hi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 3));
  return n ? (t2.m = 0, t2.d = +n[0], r2 + n[0].length) : -1;
}
function an(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.H = +n[0], r2 + n[0].length) : -1;
}
function Pi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.M = +n[0], r2 + n[0].length) : -1;
}
function Vi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 2));
  return n ? (t2.S = +n[0], r2 + n[0].length) : -1;
}
function Ri(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 3));
  return n ? (t2.L = +n[0], r2 + n[0].length) : -1;
}
function Bi(t2, e, r2) {
  var n = et2.exec(e.slice(r2, r2 + 6));
  return n ? (t2.L = Math.floor(n[0] / 1e3), r2 + n[0].length) : -1;
}
function Zi(t2, e, r2) {
  var n = Ai.exec(e.slice(r2, r2 + 1));
  return n ? r2 + n[0].length : -1;
}
function ji(t2, e, r2) {
  var n = et2.exec(e.slice(r2));
  return n ? (t2.Q = +n[0], r2 + n[0].length) : -1;
}
function Xi(t2, e, r2) {
  var n = et2.exec(e.slice(r2));
  return n ? (t2.s = +n[0], r2 + n[0].length) : -1;
}
function sn(t2, e) {
  return X(t2.getDate(), e, 2);
}
function qi2(t2, e) {
  return X(t2.getHours(), e, 2);
}
function Gi(t2, e) {
  return X(t2.getHours() % 12 || 12, e, 2);
}
function $i(t2, e) {
  return X(1 + Mt.count(dt(t2), t2), e, 3);
}
function Vn(t2, e) {
  return X(t2.getMilliseconds(), e, 3);
}
function Qi(t2, e) {
  return Vn(t2, e) + "000";
}
function Ji(t2, e) {
  return X(t2.getMonth() + 1, e, 2);
}
function Ki(t2, e) {
  return X(t2.getMinutes(), e, 2);
}
function ta(t2, e) {
  return X(t2.getSeconds(), e, 2);
}
function ea(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function na(t2, e) {
  return X(wt.count(dt(t2) - 1, t2), e, 2);
}
function Rn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? Ct(t2) : Ct.ceil(t2);
}
function ra(t2, e) {
  return t2 = Rn(t2), X(Ct.count(dt(t2), t2) + (dt(t2).getDay() === 4), e, 2);
}
function ia(t2) {
  return t2.getDay();
}
function aa(t2, e) {
  return X($t.count(dt(t2) - 1, t2), e, 2);
}
function sa(t2, e) {
  return X(t2.getFullYear() % 100, e, 2);
}
function oa(t2, e) {
  return t2 = Rn(t2), X(t2.getFullYear() % 100, e, 2);
}
function ca(t2, e) {
  return X(t2.getFullYear() % 1e4, e, 4);
}
function ua(t2, e) {
  var r2 = t2.getDay();
  return t2 = r2 >= 4 || r2 === 0 ? Ct(t2) : Ct.ceil(t2), X(t2.getFullYear() % 1e4, e, 4);
}
function la(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + X(e / 60 | 0, "0", 2) + X(e % 60, "0", 2);
}
function on(t2, e) {
  return X(t2.getUTCDate(), e, 2);
}
function fa(t2, e) {
  return X(t2.getUTCHours(), e, 2);
}
function ha(t2, e) {
  return X(t2.getUTCHours() % 12 || 12, e, 2);
}
function ma(t2, e) {
  return X(1 + Ee.count(St(t2), t2), e, 3);
}
function Bn(t2, e) {
  return X(t2.getUTCMilliseconds(), e, 3);
}
function da(t2, e) {
  return Bn(t2, e) + "000";
}
function ga(t2, e) {
  return X(t2.getUTCMonth() + 1, e, 2);
}
function ya(t2, e) {
  return X(t2.getUTCMinutes(), e, 2);
}
function pa(t2, e) {
  return X(t2.getUTCSeconds(), e, 2);
}
function ka(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function va(t2, e) {
  return X(Ne.count(St(t2) - 1, t2), e, 2);
}
function Zn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Dt(t2) : Dt.ceil(t2);
}
function Ta(t2, e) {
  return t2 = Zn(t2), X(Dt.count(St(t2), t2) + (St(t2).getUTCDay() === 4), e, 2);
}
function xa(t2) {
  return t2.getUTCDay();
}
function ba(t2, e) {
  return X(Jt.count(St(t2) - 1, t2), e, 2);
}
function Ma(t2, e) {
  return X(t2.getUTCFullYear() % 100, e, 2);
}
function wa(t2, e) {
  return t2 = Zn(t2), X(t2.getUTCFullYear() % 100, e, 2);
}
function Ca(t2, e) {
  return X(t2.getUTCFullYear() % 1e4, e, 4);
}
function Da(t2, e) {
  var r2 = t2.getUTCDay();
  return t2 = r2 >= 4 || r2 === 0 ? Dt(t2) : Dt.ceil(t2), X(t2.getUTCFullYear() % 1e4, e, 4);
}
function Sa() {
  return "+0000";
}
function cn() {
  return "%";
}
function un(t2) {
  return +t2;
}
function ln(t2) {
  return Math.floor(+t2 / 1e3);
}
var pt;
var Kt;
_a({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function _a(t2) {
  return pt = _i(t2), Kt = pt.format, pt.parse, pt.utcFormat, pt.utcParse, pt;
}
function Aa(t2) {
  return new Date(t2);
}
function Fa(t2) {
  return t2 instanceof Date ? +t2 : +new Date(+t2);
}
function jn(t2, e, r2, n, i2, a2, s2, c, g2, l2) {
  var b = Fn(), v = b.invert, y = b.domain, p = l2(".%L"), I = l2(":%S"), C = l2("%I:%M"), _ = l2("%I %p"), E = l2("%a %d"), W = l2("%b %d"), O = l2("%B"), R = l2("%Y");
  function P(w) {
    return (g2(w) < w ? p : c(w) < w ? I : s2(w) < w ? C : a2(w) < w ? _ : n(w) < w ? i2(w) < w ? E : W : r2(w) < w ? O : R)(w);
  }
  return b.invert = function(w) {
    return new Date(v(w));
  }, b.domain = function(w) {
    return arguments.length ? y(Array.from(w, Fa)) : y().map(Aa);
  }, b.ticks = function(w) {
    var Y = y();
    return t2(Y[0], Y[Y.length - 1], w ?? 10);
  }, b.tickFormat = function(w, Y) {
    return Y == null ? P : l2(Y);
  }, b.nice = function(w) {
    var Y = y();
    return (!w || typeof w.range != "function") && (w = e(Y[0], Y[Y.length - 1], w ?? 10)), w ? y(mi(Y, w)) : b;
  }, b.copy = function() {
    return An(b, jn(t2, e, r2, n, i2, a2, s2, c, g2, l2));
  }, b;
}
function Ya() {
  return t.apply(jn(Di2, Si, dt, Qt, wt, Mt, Gt, qt, Lt, Kt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var xe = function() {
  var t2 = function(B, x, m, u2) {
    for (m = m || {}, u2 = B.length; u2--; m[B[u2]] = x)
      ;
    return m;
  }, e = [1, 3], r2 = [1, 5], n = [7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], i2 = [1, 15], a2 = [1, 16], s2 = [1, 17], c = [1, 18], g2 = [1, 19], l2 = [1, 20], b = [1, 21], v = [1, 22], y = [1, 23], p = [1, 24], I = [1, 25], C = [1, 26], _ = [1, 27], E = [1, 29], W = [1, 31], O = [1, 34], R = [5, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 28, 35, 40], P = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, directive: 4, gantt: 5, document: 6, EOF: 7, line: 8, SPACE: 9, statement: 10, NL: 11, dateFormat: 12, inclusiveEndDates: 13, topAxis: 14, axisFormat: 15, tickInterval: 16, excludes: 17, includes: 18, todayMarker: 19, title: 20, acc_title: 21, acc_title_value: 22, acc_descr: 23, acc_descr_value: 24, acc_descr_multiline_value: 25, section: 26, clickStatement: 27, taskTxt: 28, taskData: 29, openDirective: 30, typeDirective: 31, closeDirective: 32, ":": 33, argDirective: 34, click: 35, callbackname: 36, callbackargs: 37, href: 38, clickStatementDebug: 39, open_directive: 40, type_directive: 41, arg_directive: 42, close_directive: 43, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "gantt", 7: "EOF", 9: "SPACE", 11: "NL", 12: "dateFormat", 13: "inclusiveEndDates", 14: "topAxis", 15: "axisFormat", 16: "tickInterval", 17: "excludes", 18: "includes", 19: "todayMarker", 20: "title", 21: "acc_title", 22: "acc_title_value", 23: "acc_descr", 24: "acc_descr_value", 25: "acc_descr_multiline_value", 26: "section", 28: "taskTxt", 29: "taskData", 33: ":", 35: "click", 36: "callbackname", 37: "callbackargs", 38: "href", 40: "open_directive", 41: "type_directive", 42: "arg_directive", 43: "close_directive" },
    productions_: [0, [3, 2], [3, 3], [6, 0], [6, 2], [8, 2], [8, 1], [8, 1], [8, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [10, 2], [10, 1], [4, 4], [4, 6], [27, 2], [27, 3], [27, 3], [27, 4], [27, 3], [27, 4], [27, 2], [39, 2], [39, 3], [39, 3], [39, 4], [39, 3], [39, 4], [39, 2], [30, 1], [31, 1], [34, 1], [32, 1]],
    performAction: function(x, m, u2, h, T, o, F) {
      var f = o.length - 1;
      switch (T) {
        case 2:
          return o[f - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          o[f - 1].push(o[f]), this.$ = o[f - 1];
          break;
        case 5:
        case 6:
          this.$ = o[f];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 9:
          h.setDateFormat(o[f].substr(11)), this.$ = o[f].substr(11);
          break;
        case 10:
          h.enableInclusiveEndDates(), this.$ = o[f].substr(18);
          break;
        case 11:
          h.TopAxis(), this.$ = o[f].substr(8);
          break;
        case 12:
          h.setAxisFormat(o[f].substr(11)), this.$ = o[f].substr(11);
          break;
        case 13:
          h.setTickInterval(o[f].substr(13)), this.$ = o[f].substr(13);
          break;
        case 14:
          h.setExcludes(o[f].substr(9)), this.$ = o[f].substr(9);
          break;
        case 15:
          h.setIncludes(o[f].substr(9)), this.$ = o[f].substr(9);
          break;
        case 16:
          h.setTodayMarker(o[f].substr(12)), this.$ = o[f].substr(12);
          break;
        case 17:
          h.setDiagramTitle(o[f].substr(6)), this.$ = o[f].substr(6);
          break;
        case 18:
          this.$ = o[f].trim(), h.setAccTitle(this.$);
          break;
        case 19:
        case 20:
          this.$ = o[f].trim(), h.setAccDescription(this.$);
          break;
        case 21:
          h.addSection(o[f].substr(8)), this.$ = o[f].substr(8);
          break;
        case 23:
          h.addTask(o[f - 1], o[f]), this.$ = "task";
          break;
        case 27:
          this.$ = o[f - 1], h.setClickEvent(o[f - 1], o[f], null);
          break;
        case 28:
          this.$ = o[f - 2], h.setClickEvent(o[f - 2], o[f - 1], o[f]);
          break;
        case 29:
          this.$ = o[f - 2], h.setClickEvent(o[f - 2], o[f - 1], null), h.setLink(o[f - 2], o[f]);
          break;
        case 30:
          this.$ = o[f - 3], h.setClickEvent(o[f - 3], o[f - 2], o[f - 1]), h.setLink(o[f - 3], o[f]);
          break;
        case 31:
          this.$ = o[f - 2], h.setClickEvent(o[f - 2], o[f], null), h.setLink(o[f - 2], o[f - 1]);
          break;
        case 32:
          this.$ = o[f - 3], h.setClickEvent(o[f - 3], o[f - 1], o[f]), h.setLink(o[f - 3], o[f - 2]);
          break;
        case 33:
          this.$ = o[f - 1], h.setLink(o[f - 1], o[f]);
          break;
        case 34:
        case 40:
          this.$ = o[f - 1] + " " + o[f];
          break;
        case 35:
        case 36:
        case 38:
          this.$ = o[f - 2] + " " + o[f - 1] + " " + o[f];
          break;
        case 37:
        case 39:
          this.$ = o[f - 3] + " " + o[f - 2] + " " + o[f - 1] + " " + o[f];
          break;
        case 41:
          h.parseDirective("%%{", "open_directive");
          break;
        case 42:
          h.parseDirective(o[f], "type_directive");
          break;
        case 43:
          o[f] = o[f].trim().replace(/'/g, '"'), h.parseDirective(o[f], "arg_directive");
          break;
        case 44:
          h.parseDirective("}%%", "close_directive", "gantt");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: e, 30: 4, 40: r2 }, { 1: [3] }, { 3: 6, 4: 2, 5: e, 30: 4, 40: r2 }, t2(n, [2, 3], { 6: 7 }), { 31: 8, 41: [1, 9] }, { 41: [2, 41] }, { 1: [2, 1] }, { 4: 30, 7: [1, 10], 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: i2, 13: a2, 14: s2, 15: c, 16: g2, 17: l2, 18: b, 19: v, 20: y, 21: p, 23: I, 25: C, 26: _, 27: 28, 28: E, 30: 4, 35: W, 40: r2 }, { 32: 32, 33: [1, 33], 43: O }, t2([33, 43], [2, 42]), t2(n, [2, 8], { 1: [2, 2] }), t2(n, [2, 4]), { 4: 30, 10: 35, 12: i2, 13: a2, 14: s2, 15: c, 16: g2, 17: l2, 18: b, 19: v, 20: y, 21: p, 23: I, 25: C, 26: _, 27: 28, 28: E, 30: 4, 35: W, 40: r2 }, t2(n, [2, 6]), t2(n, [2, 7]), t2(n, [2, 9]), t2(n, [2, 10]), t2(n, [2, 11]), t2(n, [2, 12]), t2(n, [2, 13]), t2(n, [2, 14]), t2(n, [2, 15]), t2(n, [2, 16]), t2(n, [2, 17]), { 22: [1, 36] }, { 24: [1, 37] }, t2(n, [2, 20]), t2(n, [2, 21]), t2(n, [2, 22]), { 29: [1, 38] }, t2(n, [2, 24]), { 36: [1, 39], 38: [1, 40] }, { 11: [1, 41] }, { 34: 42, 42: [1, 43] }, { 11: [2, 44] }, t2(n, [2, 5]), t2(n, [2, 18]), t2(n, [2, 19]), t2(n, [2, 23]), t2(n, [2, 27], { 37: [1, 44], 38: [1, 45] }), t2(n, [2, 33], { 36: [1, 46] }), t2(R, [2, 25]), { 32: 47, 43: O }, { 43: [2, 43] }, t2(n, [2, 28], { 38: [1, 48] }), t2(n, [2, 29]), t2(n, [2, 31], { 37: [1, 49] }), { 11: [1, 50] }, t2(n, [2, 30]), t2(n, [2, 32]), t2(R, [2, 26])],
    defaultActions: { 5: [2, 41], 6: [2, 1], 34: [2, 44], 43: [2, 43] },
    parseError: function(x, m) {
      if (m.recoverable)
        this.trace(x);
      else {
        var u2 = new Error(x);
        throw u2.hash = m, u2;
      }
    },
    parse: function(x) {
      var m = this, u2 = [0], h = [], T = [null], o = [], F = this.table, f = "", A = 0, Z = 0, j = 2, k = 1, U = o.slice.call(arguments, 1), S = Object.create(this.lexer), V = { yy: {} };
      for (var q in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, q) && (V.yy[q] = this.yy[q]);
      S.setInput(x, V.yy), V.yy.lexer = S, V.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
      var z = S.yylloc;
      o.push(z);
      var H = S.options && S.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ht() {
        var rt;
        return rt = h.pop() || S.lex() || k, typeof rt != "number" && (rt instanceof Array && (h = rt, rt = h.pop()), rt = m.symbols_[rt] || rt), rt;
      }
      for (var $2, M, D, L, d = {}, G, N, Q, J; ; ) {
        if (M = u2[u2.length - 1], this.defaultActions[M] ? D = this.defaultActions[M] : (($2 === null || typeof $2 > "u") && ($2 = ht()), D = F[M] && F[M][$2]), typeof D > "u" || !D.length || !D[0]) {
          var at = "";
          J = [];
          for (G in F[M])
            this.terminals_[G] && G > j && J.push("'" + this.terminals_[G] + "'");
          S.showPosition ? at = "Parse error on line " + (A + 1) + `:
` + S.showPosition() + `
Expecting ` + J.join(", ") + ", got '" + (this.terminals_[$2] || $2) + "'" : at = "Parse error on line " + (A + 1) + ": Unexpected " + ($2 == k ? "end of input" : "'" + (this.terminals_[$2] || $2) + "'"), this.parseError(at, {
            text: S.match,
            token: this.terminals_[$2] || $2,
            line: S.yylineno,
            loc: z,
            expected: J
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + M + ", token: " + $2);
        switch (D[0]) {
          case 1:
            u2.push($2), T.push(S.yytext), o.push(S.yylloc), u2.push(D[1]), $2 = null, Z = S.yyleng, f = S.yytext, A = S.yylineno, z = S.yylloc;
            break;
          case 2:
            if (N = this.productions_[D[1]][1], d.$ = T[T.length - N], d._$ = {
              first_line: o[o.length - (N || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - (N || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, H && (d._$.range = [
              o[o.length - (N || 1)].range[0],
              o[o.length - 1].range[1]
            ]), L = this.performAction.apply(d, [
              f,
              Z,
              A,
              V.yy,
              D[1],
              T,
              o
            ].concat(U)), typeof L < "u")
              return L;
            N && (u2 = u2.slice(0, -1 * N * 2), T = T.slice(0, -1 * N), o = o.slice(0, -1 * N)), u2.push(this.productions_[D[1]][0]), T.push(d.$), o.push(d._$), Q = F[u2[u2.length - 2]][u2[u2.length - 1]], u2.push(Q);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, w = function() {
    var B = {
      EOF: 1,
      parseError: function(m, u2) {
        if (this.yy.parser)
          this.yy.parser.parseError(m, u2);
        else
          throw new Error(m);
      },
      // resets the lexer, sets new input
      setInput: function(x, m) {
        return this.yy = m || this.yy || {}, this._input = x, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var x = this._input[0];
        this.yytext += x, this.yyleng++, this.offset++, this.match += x, this.matched += x;
        var m = x.match(/(?:\r\n?|\n).*/g);
        return m ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), x;
      },
      // unshifts one char (or a string) into the input
      unput: function(x) {
        var m = x.length, u2 = x.split(/(?:\r\n?|\n)/g);
        this._input = x + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m), this.offset -= m;
        var h = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u2.length - 1 && (this.yylineno -= u2.length - 1);
        var T = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u2 ? (u2.length === h.length ? this.yylloc.first_column : 0) + h[h.length - u2.length].length - u2[0].length : this.yylloc.first_column - m
        }, this.options.ranges && (this.yylloc.range = [T[0], T[0] + this.yyleng - m]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(x) {
        this.unput(this.match.slice(x));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var x = this.matched.substr(0, this.matched.length - this.match.length);
        return (x.length > 20 ? "..." : "") + x.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var x = this.match;
        return x.length < 20 && (x += this._input.substr(0, 20 - x.length)), (x.substr(0, 20) + (x.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var x = this.pastInput(), m = new Array(x.length + 1).join("-");
        return x + this.upcomingInput() + `
` + m + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(x, m) {
        var u2, h, T;
        if (this.options.backtrack_lexer && (T = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (T.yylloc.range = this.yylloc.range.slice(0))), h = x[0].match(/(?:\r\n?|\n).*/g), h && (this.yylineno += h.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: h ? h[h.length - 1].length - h[h.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + x[0].length
        }, this.yytext += x[0], this.match += x[0], this.matches = x, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(x[0].length), this.matched += x[0], u2 = this.performAction.call(this, this.yy, this, m, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u2)
          return u2;
        if (this._backtrack) {
          for (var o in T)
            this[o] = T[o];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var x, m, u2, h;
        this._more || (this.yytext = "", this.match = "");
        for (var T = this._currentRules(), o = 0; o < T.length; o++)
          if (u2 = this._input.match(this.rules[T[o]]), u2 && (!m || u2[0].length > m[0].length)) {
            if (m = u2, h = o, this.options.backtrack_lexer) {
              if (x = this.test_match(u2, T[o]), x !== false)
                return x;
              if (this._backtrack) {
                m = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return m ? (x = this.test_match(m, T[h]), x !== false ? x : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var m = this.next();
        return m || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(m) {
        this.conditionStack.push(m);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var m = this.conditionStack.length - 1;
        return m > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(m) {
        return m = this.conditionStack.length - 1 - Math.abs(m || 0), m >= 0 ? this.conditionStack[m] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(m) {
        this.begin(m);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(m, u2, h, T) {
        switch (h) {
          case 0:
            return this.begin("open_directive"), 40;
          case 1:
            return this.begin("type_directive"), 41;
          case 2:
            return this.popState(), this.begin("arg_directive"), 33;
          case 3:
            return this.popState(), this.popState(), 43;
          case 4:
            return 42;
          case 5:
            return this.begin("acc_title"), 21;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 23;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 11;
          case 16:
            break;
          case 17:
            break;
          case 18:
            break;
          case 19:
            this.begin("href");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return 38;
          case 22:
            this.begin("callbackname");
            break;
          case 23:
            this.popState();
            break;
          case 24:
            this.popState(), this.begin("callbackargs");
            break;
          case 25:
            return 36;
          case 26:
            this.popState();
            break;
          case 27:
            return 37;
          case 28:
            this.begin("click");
            break;
          case 29:
            this.popState();
            break;
          case 30:
            return 35;
          case 31:
            return 5;
          case 32:
            return 12;
          case 33:
            return 13;
          case 34:
            return 14;
          case 35:
            return 15;
          case 36:
            return 16;
          case 37:
            return 18;
          case 38:
            return 17;
          case 39:
            return 19;
          case 40:
            return "date";
          case 41:
            return 20;
          case 42:
            return "accDescription";
          case 43:
            return 26;
          case 44:
            return 28;
          case 45:
            return 29;
          case 46:
            return 33;
          case 47:
            return 7;
          case 48:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: false }, acc_descr: { rules: [8], inclusive: false }, acc_title: { rules: [6], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, callbackargs: { rules: [26, 27], inclusive: false }, callbackname: { rules: [23, 24, 25], inclusive: false }, href: { rules: [20, 21], inclusive: false }, click: { rules: [29, 30], inclusive: false }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], inclusive: true } }
    };
    return B;
  }();
  P.lexer = w;
  function Y() {
    this.yy = {};
  }
  return Y.prototype = P, P.Parser = Y, new Y();
}();
xe.parser = xe;
var Ua = xe;
var be = {};
var La = {
  get exports() {
    return be;
  },
  set exports(t2) {
    be = t2;
  }
};
(function(t2, e) {
  (function(r2, n) {
    t2.exports = n();
  })(To, function() {
    var r2 = "day";
    return function(n, i2, a2) {
      var s2 = function(l2) {
        return l2.add(4 - l2.isoWeekday(), r2);
      }, c = i2.prototype;
      c.isoWeekYear = function() {
        return s2(this).year();
      }, c.isoWeek = function(l2) {
        if (!this.$utils().u(l2))
          return this.add(7 * (l2 - this.isoWeek()), r2);
        var b, v, y, p, I = s2(this), C = (b = this.isoWeekYear(), v = this.$u, y = (v ? a2.utc : a2)().year(b).startOf("year"), p = 4 - y.isoWeekday(), y.isoWeekday() > 4 && (p += 7), y.add(p, r2));
        return I.diff(C, "week") + 1;
      }, c.isoWeekday = function(l2) {
        return this.$utils().u(l2) ? this.day() || 7 : this.day(this.day() % 7 ? l2 : l2 - 7);
      };
      var g2 = c.startOf;
      c.startOf = function(l2, b) {
        var v = this.$utils(), y = !!v.u(b) || b;
        return v.p(l2) === "isoweek" ? y ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : g2.bind(this)(l2, b);
      };
    };
  });
})(La);
var Ea = be;
var Me = {};
var Na = {
  get exports() {
    return Me;
  },
  set exports(t2) {
    Me = t2;
  }
};
(function(t2, e) {
  (function(r2, n) {
    t2.exports = n();
  })(To, function() {
    var r2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i2 = /\d\d/, a2 = /\d\d?/, s2 = /\d*[^-_:/,()\s\d]+/, c = {}, g2 = function(C) {
      return (C = +C) + (C > 68 ? 1900 : 2e3);
    }, l2 = function(C) {
      return function(_) {
        this[C] = +_;
      };
    }, b = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z")
          return 0;
        var E = _.match(/([+-]|\d\d)/g), W = 60 * E[1] + (+E[2] || 0);
        return W === 0 ? 0 : E[0] === "+" ? -W : W;
      }(C);
    }], v = function(C) {
      var _ = c[C];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, y = function(C, _) {
      var E, W = c.meridiem;
      if (W) {
        for (var O = 1; O <= 24; O += 1)
          if (C.indexOf(W(O, 0, _)) > -1) {
            E = O > 12;
            break;
          }
      } else
        E = C === (_ ? "pm" : "PM");
      return E;
    }, p = { A: [s2, function(C) {
      this.afternoon = y(C, false);
    }], a: [s2, function(C) {
      this.afternoon = y(C, true);
    }], S: [/\d/, function(C) {
      this.milliseconds = 100 * +C;
    }], SS: [i2, function(C) {
      this.milliseconds = 10 * +C;
    }], SSS: [/\d{3}/, function(C) {
      this.milliseconds = +C;
    }], s: [a2, l2("seconds")], ss: [a2, l2("seconds")], m: [a2, l2("minutes")], mm: [a2, l2("minutes")], H: [a2, l2("hours")], h: [a2, l2("hours")], HH: [a2, l2("hours")], hh: [a2, l2("hours")], D: [a2, l2("day")], DD: [i2, l2("day")], Do: [s2, function(C) {
      var _ = c.ordinal, E = C.match(/\d+/);
      if (this.day = E[0], _)
        for (var W = 1; W <= 31; W += 1)
          _(W).replace(/\[|\]/g, "") === C && (this.day = W);
    }], M: [a2, l2("month")], MM: [i2, l2("month")], MMM: [s2, function(C) {
      var _ = v("months"), E = (v("monthsShort") || _.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(C) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], MMMM: [s2, function(C) {
      var _ = v("months").indexOf(C) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, l2("year")], YY: [i2, function(C) {
      this.year = g2(C);
    }], YYYY: [/\d{4}/, l2("year")], Z: b, ZZ: b };
    function I(C) {
      var _, E;
      _ = C, E = c && c.formats;
      for (var W = (C = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, m, u2) {
        var h = u2 && u2.toUpperCase();
        return m || E[u2] || r2[u2] || E[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, o, F) {
          return o || F.slice(1);
        });
      })).match(n), O = W.length, R = 0; R < O; R += 1) {
        var P = W[R], w = p[P], Y = w && w[0], B = w && w[1];
        W[R] = B ? { regex: Y, parser: B } : P.replace(/^\[|\]$/g, "");
      }
      return function(x) {
        for (var m = {}, u2 = 0, h = 0; u2 < O; u2 += 1) {
          var T = W[u2];
          if (typeof T == "string")
            h += T.length;
          else {
            var o = T.regex, F = T.parser, f = x.slice(h), A = o.exec(f)[0];
            F.call(m, A), x = x.replace(A, "");
          }
        }
        return function(Z) {
          var j = Z.afternoon;
          if (j !== void 0) {
            var k = Z.hours;
            j ? k < 12 && (Z.hours += 12) : k === 12 && (Z.hours = 0), delete Z.afternoon;
          }
        }(m), m;
      };
    }
    return function(C, _, E) {
      E.p.customParseFormat = true, C && C.parseTwoDigitYear && (g2 = C.parseTwoDigitYear);
      var W = _.prototype, O = W.parse;
      W.parse = function(R) {
        var P = R.date, w = R.utc, Y = R.args;
        this.$u = w;
        var B = Y[1];
        if (typeof B == "string") {
          var x = Y[2] === true, m = Y[3] === true, u2 = x || m, h = Y[2];
          m && (h = Y[2]), c = this.$locale(), !x && h && (c = E.Ls[h]), this.$d = function(f, A, Z) {
            try {
              if (["x", "X"].indexOf(A) > -1)
                return new Date((A === "X" ? 1e3 : 1) * f);
              var j = I(A)(f), k = j.year, U = j.month, S = j.day, V = j.hours, q = j.minutes, z = j.seconds, H = j.milliseconds, ht = j.zone, $2 = new Date(), M = S || (k || U ? 1 : $2.getDate()), D = k || $2.getFullYear(), L = 0;
              k && !U || (L = U > 0 ? U - 1 : $2.getMonth());
              var d = V || 0, G = q || 0, N = z || 0, Q = H || 0;
              return ht ? new Date(Date.UTC(D, L, M, d, G, N, Q + 60 * ht.offset * 1e3)) : Z ? new Date(Date.UTC(D, L, M, d, G, N, Q)) : new Date(D, L, M, d, G, N, Q);
            } catch {
              return new Date("");
            }
          }(P, B, w), this.init(), h && h !== true && (this.$L = this.locale(h).$L), u2 && P != this.format(B) && (this.$d = new Date("")), c = {};
        } else if (B instanceof Array)
          for (var T = B.length, o = 1; o <= T; o += 1) {
            Y[1] = B[o - 1];
            var F = E.apply(this, Y);
            if (F.isValid()) {
              this.$d = F.$d, this.$L = F.$L, this.init();
              break;
            }
            o === T && (this.$d = new Date(""));
          }
        else
          O.call(this, R);
      };
    };
  });
})(Na);
var Ia = Me;
var we = {};
var Wa = {
  get exports() {
    return we;
  },
  set exports(t2) {
    we = t2;
  }
};
(function(t2, e) {
  (function(r2, n) {
    t2.exports = n();
  })(To, function() {
    return function(r2, n) {
      var i2 = n.prototype, a2 = i2.format;
      i2.format = function(s2) {
        var c = this, g2 = this.$locale();
        if (!this.isValid())
          return a2.bind(this)(s2);
        var l2 = this.$utils(), b = (s2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(v) {
          switch (v) {
            case "Q":
              return Math.ceil((c.$M + 1) / 3);
            case "Do":
              return g2.ordinal(c.$D);
            case "gggg":
              return c.weekYear();
            case "GGGG":
              return c.isoWeekYear();
            case "wo":
              return g2.ordinal(c.week(), "W");
            case "w":
            case "ww":
              return l2.s(c.week(), v === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return l2.s(c.isoWeek(), v === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return l2.s(String(c.$H === 0 ? 24 : c.$H), v === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(c.$d.getTime() / 1e3);
            case "x":
              return c.$d.getTime();
            case "z":
              return "[" + c.offsetName() + "]";
            case "zzz":
              return "[" + c.offsetName("long") + "]";
            default:
              return v;
          }
        });
        return a2.bind(this)(b);
      };
    };
  });
})(Wa);
var za = we;
So.extend(Ea);
So.extend(Ia);
So.extend(za);
var st = "";
var We = "";
var ze;
var Oe = "";
var Et = [];
var Nt = [];
var He = {};
var Pe = [];
var te = [];
var _t = "";
var Xn = ["active", "done", "crit", "milestone"];
var Ve = [];
var It = false;
var Re = false;
var Ce2 = 0;
var Oa = function(t2, e, r2) {
  ws.parseDirective(this, t2, e, r2);
};
var Ha = function() {
  Pe = [], te = [], _t = "", Ve = [], Vt = 0, Se = void 0, Rt = void 0, K = [], st = "", We = "", ze = void 0, Oe = "", Et = [], Nt = [], It = false, Re = false, Ce2 = 0, He = {}, s();
};
var Pa = function(t2) {
  We = t2;
};
var Va = function() {
  return We;
};
var Ra = function(t2) {
  ze = t2;
};
var Ba = function() {
  return ze;
};
var Za = function(t2) {
  Oe = t2;
};
var ja = function() {
  return Oe;
};
var Xa = function(t2) {
  st = t2;
};
var qa = function() {
  It = true;
};
var Ga = function() {
  return It;
};
var $a = function() {
  Re = true;
};
var Qa = function() {
  return Re;
};
var Ja = function() {
  return st;
};
var Ka = function(t2) {
  Et = t2.toLowerCase().split(/[\s,]+/);
};
var ts = function() {
  return Et;
};
var es = function(t2) {
  Nt = t2.toLowerCase().split(/[\s,]+/);
};
var ns = function() {
  return Nt;
};
var rs = function() {
  return He;
};
var is = function(t2) {
  _t = t2, Pe.push(t2);
};
var as = function() {
  return Pe;
};
var ss = function() {
  let t2 = fn();
  const e = 10;
  let r2 = 0;
  for (; !t2 && r2 < e; )
    t2 = fn(), r2++;
  return te = K, te;
};
var qn = function(t2, e, r2, n) {
  return n.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && r2.includes("weekends") || r2.includes(t2.format("dddd").toLowerCase()) ? true : r2.includes(t2.format(e.trim()));
};
var Gn = function(t2, e, r2, n) {
  if (!r2.length || t2.manualEndTime)
    return;
  let i2;
  t2.startTime instanceof Date ? i2 = So(t2.startTime) : i2 = So(t2.startTime, e, true), i2 = i2.add(1, "d");
  let a2;
  t2.endTime instanceof Date ? a2 = So(t2.endTime) : a2 = So(t2.endTime, e, true);
  const [s2, c] = os(
    i2,
    a2,
    e,
    r2,
    n
  );
  t2.endTime = s2.toDate(), t2.renderEndTime = c;
};
var os = function(t2, e, r2, n, i2) {
  let a2 = false, s2 = null;
  for (; t2 <= e; )
    a2 || (s2 = e.toDate()), a2 = qn(t2, r2, n, i2), a2 && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, s2];
};
var De = function(t2, e, r2) {
  r2 = r2.trim();
  const i2 = /^after\s+([\d\w- ]+)/.exec(r2.trim());
  if (i2 !== null) {
    let s2 = null;
    if (i2[1].split(" ").forEach(function(c) {
      let g2 = At2(c);
      g2 !== void 0 && (s2 ? g2.endTime > s2.endTime && (s2 = g2) : s2 = g2);
    }), s2)
      return s2.endTime;
    {
      const c = new Date();
      return c.setHours(0, 0, 0, 0), c;
    }
  }
  let a2 = So(r2, e.trim(), true);
  if (a2.isValid())
    return a2.toDate();
  {
    et.debug("Invalid date:" + r2), et.debug("With date format:" + e.trim());
    const s2 = new Date(r2);
    if (s2 === void 0 || isNaN(s2.getTime()))
      throw new Error("Invalid date:" + r2);
    return s2;
  }
};
var $n = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var Qn = function(t2, e, r2, n = false) {
  r2 = r2.trim();
  let i2 = So(r2, e.trim(), true);
  if (i2.isValid())
    return n && (i2 = i2.add(1, "d")), i2.toDate();
  let a2 = So(t2);
  const [s2, c] = $n(r2);
  if (!Number.isNaN(s2)) {
    const g2 = a2.add(s2, c);
    g2.isValid() && (a2 = g2);
  }
  return a2.toDate();
};
var Vt = 0;
var xt = function(t2) {
  return t2 === void 0 ? (Vt = Vt + 1, "task" + Vt) : t2;
};
var cs = function(t2, e) {
  let r2;
  e.substr(0, 1) === ":" ? r2 = e.substr(1, e.length) : r2 = e;
  const n = r2.split(","), i2 = {};
  er(n, i2, Xn);
  for (let s2 = 0; s2 < n.length; s2++)
    n[s2] = n[s2].trim();
  let a2 = "";
  switch (n.length) {
    case 1:
      i2.id = xt(), i2.startTime = t2.endTime, a2 = n[0];
      break;
    case 2:
      i2.id = xt(), i2.startTime = De(void 0, st, n[0]), a2 = n[1];
      break;
    case 3:
      i2.id = xt(n[0]), i2.startTime = De(void 0, st, n[1]), a2 = n[2];
      break;
  }
  return a2 && (i2.endTime = Qn(i2.startTime, st, a2, It), i2.manualEndTime = So(a2, "YYYY-MM-DD", true).isValid(), Gn(i2, st, Nt, Et)), i2;
};
var us = function(t2, e) {
  let r2;
  e.substr(0, 1) === ":" ? r2 = e.substr(1, e.length) : r2 = e;
  const n = r2.split(","), i2 = {};
  er(n, i2, Xn);
  for (let a2 = 0; a2 < n.length; a2++)
    n[a2] = n[a2].trim();
  switch (n.length) {
    case 1:
      i2.id = xt(), i2.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i2.endTime = {
        data: n[0]
      };
      break;
    case 2:
      i2.id = xt(), i2.startTime = {
        type: "getStartDate",
        startData: n[0]
      }, i2.endTime = {
        data: n[1]
      };
      break;
    case 3:
      i2.id = xt(n[0]), i2.startTime = {
        type: "getStartDate",
        startData: n[1]
      }, i2.endTime = {
        data: n[2]
      };
      break;
  }
  return i2;
};
var Se;
var Rt;
var K = [];
var Jn = {};
var ls = function(t2, e) {
  const r2 = {
    section: _t,
    type: _t,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, n = us(Rt, e);
  r2.raw.startTime = n.startTime, r2.raw.endTime = n.endTime, r2.id = n.id, r2.prevTaskId = Rt, r2.active = n.active, r2.done = n.done, r2.crit = n.crit, r2.milestone = n.milestone, r2.order = Ce2, Ce2++;
  const i2 = K.push(r2);
  Rt = r2.id, Jn[r2.id] = i2 - 1;
};
var At2 = function(t2) {
  const e = Jn[t2];
  return K[e];
};
var fs2 = function(t2, e) {
  const r2 = {
    section: _t,
    type: _t,
    description: t2,
    task: t2,
    classes: []
  }, n = cs(Se, e);
  r2.startTime = n.startTime, r2.endTime = n.endTime, r2.id = n.id, r2.active = n.active, r2.done = n.done, r2.crit = n.crit, r2.milestone = n.milestone, Se = r2, te.push(r2);
};
var fn = function() {
  const t2 = function(r2) {
    const n = K[r2];
    let i2 = "";
    switch (K[r2].raw.startTime.type) {
      case "prevTaskEnd": {
        const a2 = At2(n.prevTaskId);
        n.startTime = a2.endTime;
        break;
      }
      case "getStartDate":
        i2 = De(void 0, st, K[r2].raw.startTime.startData), i2 && (K[r2].startTime = i2);
        break;
    }
    return K[r2].startTime && (K[r2].endTime = Qn(
      K[r2].startTime,
      st,
      K[r2].raw.endTime.data,
      It
    ), K[r2].endTime && (K[r2].processed = true, K[r2].manualEndTime = So(
      K[r2].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), Gn(K[r2], st, Nt, Et))), K[r2].processed;
  };
  let e = true;
  for (const [r2, n] of K.entries())
    t2(r2), e = e && n.processed;
  return e;
};
var hs = function(t2, e) {
  let r2 = e;
  th().securityLevel !== "loose" && (r2 = qi(e)), t2.split(",").forEach(function(n) {
    At2(n) !== void 0 && (tr(n, () => {
      window.open(r2, "_self");
    }), He[n] = r2);
  }), Kn(t2, "clickable");
};
var Kn = function(t2, e) {
  t2.split(",").forEach(function(r2) {
    let n = At2(r2);
    n !== void 0 && n.classes.push(e);
  });
};
var ms2 = function(t2, e, r2) {
  if (th().securityLevel !== "loose" || e === void 0)
    return;
  let n = [];
  if (typeof r2 == "string") {
    n = r2.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a2 = 0; a2 < n.length; a2++) {
      let s2 = n[a2].trim();
      s2.charAt(0) === '"' && s2.charAt(s2.length - 1) === '"' && (s2 = s2.substr(1, s2.length - 2)), n[a2] = s2;
    }
  }
  n.length === 0 && n.push(t2), At2(t2) !== void 0 && tr(t2, () => {
    fs.runFunc(e, ...n);
  });
};
var tr = function(t2, e) {
  Ve.push(
    function() {
      const r2 = document.querySelector(`[id="${t2}"]`);
      r2 !== null && r2.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const r2 = document.querySelector(`[id="${t2}-text"]`);
      r2 !== null && r2.addEventListener("click", function() {
        e();
      });
    }
  );
};
var ds = function(t2, e, r2) {
  t2.split(",").forEach(function(n) {
    ms2(n, e, r2);
  }), Kn(t2, "clickable");
};
var gs = function(t2) {
  Ve.forEach(function(e) {
    e(t2);
  });
};
var ys = {
  parseDirective: Oa,
  getConfig: () => th().gantt,
  clear: Ha,
  setDateFormat: Xa,
  getDateFormat: Ja,
  enableInclusiveEndDates: qa,
  endDatesAreInclusive: Ga,
  enableTopAxis: $a,
  topAxisEnabled: Qa,
  setAxisFormat: Pa,
  getAxisFormat: Va,
  setTickInterval: Ra,
  getTickInterval: Ba,
  setTodayMarker: Za,
  getTodayMarker: ja,
  setAccTitle: i,
  getAccTitle: a,
  setDiagramTitle: g,
  getDiagramTitle: u,
  setAccDescription: r,
  getAccDescription: l,
  addSection: is,
  getSections: as,
  getTasks: ss,
  addTask: ls,
  findTaskById: At2,
  addTaskOrg: fs2,
  setIncludes: Ka,
  getIncludes: ts,
  setExcludes: es,
  getExcludes: ns,
  setClickEvent: ds,
  setLink: hs,
  getLinks: rs,
  bindFunctions: gs,
  parseDuration: $n,
  isInvalidDate: qn
};
function er(t2, e, r2) {
  let n = true;
  for (; n; )
    n = false, r2.forEach(function(i2) {
      const a2 = "^\\s*" + i2 + "\\s*$", s2 = new RegExp(a2);
      t2[0].match(s2) && (e[i2] = true, t2.shift(1), n = true);
    });
}
var ps = function() {
  et.debug("Something is calling, setConf, remove the call");
};
var ct;
var ks2 = function(t2, e, r2, n) {
  const i2 = th().gantt, a2 = th().securityLevel;
  let s2;
  a2 === "sandbox" && (s2 = nh("#i" + e));
  const c = a2 === "sandbox" ? nh(s2.nodes()[0].contentDocument.body) : nh("body"), g2 = a2 === "sandbox" ? s2.nodes()[0].contentDocument : document, l2 = g2.getElementById(e);
  ct = l2.parentElement.offsetWidth, ct === void 0 && (ct = 1200), i2.useWidth !== void 0 && (ct = i2.useWidth);
  const b = n.db.getTasks(), v = b.length * (i2.barHeight + i2.barGap) + 2 * i2.topPadding;
  l2.setAttribute("viewBox", "0 0 " + ct + " " + v);
  const y = c.select(`[id="${e}"]`), p = Ya().domain([
    Dr(b, function(m) {
      return m.startTime;
    }),
    Cr(b, function(m) {
      return m.endTime;
    })
  ]).rangeRound([0, ct - i2.leftPadding - i2.rightPadding]);
  let I = [];
  for (const m of b)
    I.push(m.type);
  const C = I;
  I = Y(I);
  function _(m, u2) {
    const h = m.startTime, T = u2.startTime;
    let o = 0;
    return h > T ? o = 1 : h < T && (o = -1), o;
  }
  b.sort(_), E(b, ct, v), $(y, v, ct, i2.useMaxWidth), y.append("text").text(n.db.getDiagramTitle()).attr("x", ct / 2).attr("y", i2.titleTopMargin).attr("class", "titleText");
  function E(m, u2, h) {
    const T = i2.barHeight, o = T + i2.barGap, F = i2.topPadding, f = i2.leftPadding, A = Yn().domain([0, I.length]).range(["#00B9FA", "#F95002"]).interpolate(Xr);
    O(
      o,
      F,
      f,
      u2,
      h,
      m,
      n.db.getExcludes(),
      n.db.getIncludes()
    ), R(f, F, u2, h), W(m, o, F, f, T, A, u2), P(o, F), w(f, F, u2, h);
  }
  function W(m, u2, h, T, o, F, f) {
    y.append("g").selectAll("rect").data(m).enter().append("rect").attr("x", 0).attr("y", function(k, U) {
      return U = k.order, U * u2 + h - 2;
    }).attr("width", function() {
      return f - i2.rightPadding / 2;
    }).attr("height", u2).attr("class", function(k) {
      for (const [U, S] of I.entries())
        if (k.type === S)
          return "section section" + U % i2.numberSectionStyles;
      return "section section0";
    });
    const A = y.append("g").selectAll("rect").data(m).enter(), Z = n.db.getLinks();
    if (A.append("rect").attr("id", function(k) {
      return k.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(k) {
      return k.milestone ? p(k.startTime) + T + 0.5 * (p(k.endTime) - p(k.startTime)) - 0.5 * o : p(k.startTime) + T;
    }).attr("y", function(k, U) {
      return U = k.order, U * u2 + h;
    }).attr("width", function(k) {
      return k.milestone ? o : p(k.renderEndTime || k.endTime) - p(k.startTime);
    }).attr("height", o).attr("transform-origin", function(k, U) {
      return U = k.order, (p(k.startTime) + T + 0.5 * (p(k.endTime) - p(k.startTime))).toString() + "px " + (U * u2 + h + 0.5 * o).toString() + "px";
    }).attr("class", function(k) {
      const U = "task";
      let S = "";
      k.classes.length > 0 && (S = k.classes.join(" "));
      let V = 0;
      for (const [z, H] of I.entries())
        k.type === H && (V = z % i2.numberSectionStyles);
      let q = "";
      return k.active ? k.crit ? q += " activeCrit" : q = " active" : k.done ? k.crit ? q = " doneCrit" : q = " done" : k.crit && (q += " crit"), q.length === 0 && (q = " task"), k.milestone && (q = " milestone " + q), q += V, q += " " + S, U + q;
    }), A.append("text").attr("id", function(k) {
      return k.id + "-text";
    }).text(function(k) {
      return k.task;
    }).attr("font-size", i2.fontSize).attr("x", function(k) {
      let U = p(k.startTime), S = p(k.renderEndTime || k.endTime);
      k.milestone && (U += 0.5 * (p(k.endTime) - p(k.startTime)) - 0.5 * o), k.milestone && (S = U + o);
      const V = this.getBBox().width;
      return V > S - U ? S + V + 1.5 * i2.leftPadding > f ? U + T - 5 : S + T + 5 : (S - U) / 2 + U + T;
    }).attr("y", function(k, U) {
      return U = k.order, U * u2 + i2.barHeight / 2 + (i2.fontSize / 2 - 2) + h;
    }).attr("text-height", o).attr("class", function(k) {
      const U = p(k.startTime);
      let S = p(k.endTime);
      k.milestone && (S = U + o);
      const V = this.getBBox().width;
      let q = "";
      k.classes.length > 0 && (q = k.classes.join(" "));
      let z = 0;
      for (const [ht, $2] of I.entries())
        k.type === $2 && (z = ht % i2.numberSectionStyles);
      let H = "";
      return k.active && (k.crit ? H = "activeCritText" + z : H = "activeText" + z), k.done ? k.crit ? H = H + " doneCritText" + z : H = H + " doneText" + z : k.crit && (H = H + " critText" + z), k.milestone && (H += " milestoneText"), V > S - U ? S + V + 1.5 * i2.leftPadding > f ? q + " taskTextOutsideLeft taskTextOutside" + z + " " + H : q + " taskTextOutsideRight taskTextOutside" + z + " " + H + " width-" + V : q + " taskText taskText" + z + " " + H + " width-" + V;
    }), th().securityLevel === "sandbox") {
      let k;
      k = nh("#i" + e);
      const U = k.nodes()[0].contentDocument;
      A.filter(function(S) {
        return Z[S.id] !== void 0;
      }).each(function(S) {
        var V = U.querySelector("#" + S.id), q = U.querySelector("#" + S.id + "-text");
        const z = V.parentNode;
        var H = U.createElement("a");
        H.setAttribute("xlink:href", Z[S.id]), H.setAttribute("target", "_top"), z.appendChild(H), H.appendChild(V), H.appendChild(q);
      });
    }
  }
  function O(m, u2, h, T, o, F, f, A) {
    const Z = F.reduce(
      (z, { startTime: H }) => z ? Math.min(z, H) : H,
      0
    ), j = F.reduce((z, { endTime: H }) => z ? Math.max(z, H) : H, 0), k = n.db.getDateFormat();
    if (!Z || !j)
      return;
    const U = [];
    let S = null, V = So(Z);
    for (; V.valueOf() <= j; )
      n.db.isInvalidDate(V, k, f, A) ? S ? S.end = V : S = {
        start: V,
        end: V
      } : S && (U.push(S), S = null), V = V.add(1, "d");
    y.append("g").selectAll("rect").data(U).enter().append("rect").attr("id", function(z) {
      return "exclude-" + z.start.format("YYYY-MM-DD");
    }).attr("x", function(z) {
      return p(z.start) + h;
    }).attr("y", i2.gridLineStartPadding).attr("width", function(z) {
      const H = z.end.add(1, "day");
      return p(H) - p(z.start);
    }).attr("height", o - u2 - i2.gridLineStartPadding).attr("transform-origin", function(z, H) {
      return (p(z.start) + h + 0.5 * (p(z.end) - p(z.start))).toString() + "px " + (H * m + 0.5 * o).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function R(m, u2, h, T) {
    let o = Er(p).tickSize(-T + u2 + i2.gridLineStartPadding).tickFormat(Kt(n.db.getAxisFormat() || i2.axisFormat || "%Y-%m-%d"));
    const f = /^([1-9]\d*)(minute|hour|day|week|month)$/.exec(
      n.db.getTickInterval() || i2.tickInterval
    );
    if (f !== null) {
      const A = f[1];
      switch (f[2]) {
        case "minute":
          o.ticks(qt.every(A));
          break;
        case "hour":
          o.ticks(Gt.every(A));
          break;
        case "day":
          o.ticks(Mt.every(A));
          break;
        case "week":
          o.ticks(wt.every(A));
          break;
        case "month":
          o.ticks(Qt.every(A));
          break;
      }
    }
    if (y.append("g").attr("class", "grid").attr("transform", "translate(" + m + ", " + (T - 50) + ")").call(o).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), n.db.topAxisEnabled() || i2.topAxis) {
      let A = Lr(p).tickSize(-T + u2 + i2.gridLineStartPadding).tickFormat(Kt(n.db.getAxisFormat() || i2.axisFormat || "%Y-%m-%d"));
      if (f !== null) {
        const Z = f[1];
        switch (f[2]) {
          case "minute":
            A.ticks(qt.every(Z));
            break;
          case "hour":
            A.ticks(Gt.every(Z));
            break;
          case "day":
            A.ticks(Mt.every(Z));
            break;
          case "week":
            A.ticks(wt.every(Z));
            break;
          case "month":
            A.ticks(Qt.every(Z));
            break;
        }
      }
      y.append("g").attr("class", "grid").attr("transform", "translate(" + m + ", " + u2 + ")").call(A).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function P(m, u2) {
    const h = [];
    let T = 0;
    for (const [o, F] of I.entries())
      h[o] = [F, x(F, C)];
    y.append("g").selectAll("text").data(h).enter().append(function(o) {
      const F = o[0].split(ah.lineBreakRegex), f = -(F.length - 1) / 2, A = g2.createElementNS("http://www.w3.org/2000/svg", "text");
      A.setAttribute("dy", f + "em");
      for (const [Z, j] of F.entries()) {
        const k = g2.createElementNS("http://www.w3.org/2000/svg", "tspan");
        k.setAttribute("alignment-baseline", "central"), k.setAttribute("x", "10"), Z > 0 && k.setAttribute("dy", "1em"), k.textContent = j, A.appendChild(k);
      }
      return A;
    }).attr("x", 10).attr("y", function(o, F) {
      if (F > 0)
        for (let f = 0; f < F; f++)
          return T += h[F - 1][1], o[1] * m / 2 + T * m + u2;
      else
        return o[1] * m / 2 + u2;
    }).attr("font-size", i2.sectionFontSize).attr("font-size", i2.sectionFontSize).attr("class", function(o) {
      for (const [F, f] of I.entries())
        if (o[0] === f)
          return "sectionTitle sectionTitle" + F % i2.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function w(m, u2, h, T) {
    const o = n.db.getTodayMarker();
    if (o === "off")
      return;
    const F = y.append("g").attr("class", "today"), f = new Date(), A = F.append("line");
    A.attr("x1", p(f) + m).attr("x2", p(f) + m).attr("y1", i2.titleTopMargin).attr("y2", T - i2.titleTopMargin).attr("class", "today"), o !== "" && A.attr("style", o.replace(/,/g, ";"));
  }
  function Y(m) {
    const u2 = {}, h = [];
    for (let T = 0, o = m.length; T < o; ++T)
      Object.prototype.hasOwnProperty.call(u2, m[T]) || (u2[m[T]] = true, h.push(m[T]));
    return h;
  }
  function B(m) {
    let u2 = m.length;
    const h = {};
    for (; u2; )
      h[m[--u2]] = (h[m[u2]] || 0) + 1;
    return h;
  }
  function x(m, u2) {
    return B(u2)[m] || 0;
  }
};
var vs = {
  setConf: ps,
  draw: ks2
};
var Ts = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var xs = Ts;
var As = {
  parser: Ua,
  db: ys,
  renderer: vs,
  styles: xs
};
export {
  As as diagram
};
//# sourceMappingURL=ganttDiagram-2c592def-6JZA4BMR.js.map
