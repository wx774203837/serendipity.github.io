import {
  h
} from "./chunk-75JSLJ6C.js";
import {
  Ce,
  Fr,
  Qt,
  Ti,
  Tr,
  W,
  _o,
  ar,
  as,
  cr,
  fr,
  fs,
  jr,
  lr,
  os,
  pr,
  rs,
  ss
} from "./chunk-BHKXDXK7.js";
import {
  Ch,
  Fi,
  Zt,
  _l,
  bh,
  dh,
  et,
  gh,
  mh,
  nh,
  oh,
  ph,
  th,
  yh,
  zi
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/mermaidAPI-04b5c286.js
var Ne = "comm";
var ze = "rule";
var Xe = "decl";
var Gt = "@import";
var Nt = "@keyframes";
var zt = Math.abs;
var me = String.fromCharCode;
function He(e) {
  return e.trim();
}
function ae(e, t, r) {
  return e.replace(t, r);
}
function Xt(e, t) {
  return e.indexOf(t);
}
function W2(e, t) {
  return e.charCodeAt(t) | 0;
}
function P(e, t, r) {
  return e.slice(t, r);
}
function I(e) {
  return e.length;
}
function Ye(e) {
  return e.length;
}
function U(e, t) {
  return t.push(e), e;
}
var K = 1;
var x = 1;
var qe = 0;
var $ = 0;
var m = 0;
var O = "";
function fe(e, t, r, a, n, o, l) {
  return { value: e, root: t, parent: r, type: a, props: n, children: o, line: K, column: x, length: l, return: "" };
}
function Ht() {
  return m;
}
function Yt() {
  return m = $ > 0 ? W2(O, --$) : 0, x--, m === 10 && (x = 1, K--), m;
}
function v() {
  return m = $ < qe ? W2(O, $++) : 0, x++, m === 10 && (x = 1, K++), m;
}
function k() {
  return W2(O, $);
}
function G() {
  return $;
}
function J(e, t) {
  return P(O, e, t);
}
function ne(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function qt(e) {
  return K = x = 1, qe = I(O = e), $ = 0, [];
}
function Wt(e) {
  return O = "", e;
}
function ee(e) {
  return He(J($ - 1, se(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kt(e) {
  for (; (m = k()) && m < 33; )
    v();
  return ne(e) > 2 || ne(m) > 3 ? "" : " ";
}
function Jt(e, t) {
  for (; --t && v() && !(m < 48 || m > 102 || m > 57 && m < 65 || m > 70 && m < 97); )
    ;
  return J(e, G() + (t < 6 && k() == 32 && v() == 32));
}
function se(e) {
  for (; v(); )
    switch (m) {
      case e:
        return $;
      case 34:
      case 39:
        e !== 34 && e !== 39 && se(m);
        break;
      case 40:
        e === 41 && se(e);
        break;
      case 92:
        v();
        break;
    }
  return $;
}
function Qt2(e, t) {
  for (; v() && e + m !== 47 + 10; )
    if (e + m === 42 + 42 && k() === 47)
      break;
  return "/*" + J(t, $ - 1) + "*" + me(e === 47 ? e : v());
}
function Zt2(e) {
  for (; !ne(k()); )
    v();
  return J(e, $);
}
function er(e) {
  return Wt(N("", null, null, null, [""], e = qt(e), 0, [0], e));
}
function N(e, t, r, a, n, o, l, p, w) {
  for (var y = 0, s = 0, d = l, A = 0, E = 0, u = 0, h2 = 1, L = 1, g = 1, f = 0, T = "", F = n, S = o, b = a, i = T; L; )
    switch (u = f, f = v()) {
      case 40:
        if (u != 108 && W2(i, d - 1) == 58) {
          Xt(i += ae(ee(f), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        i += ee(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        i += Kt(u);
        break;
      case 92:
        i += Jt(G() - 1, 7);
        continue;
      case 47:
        switch (k()) {
          case 42:
          case 47:
            U(tr(Qt2(v(), G()), t, r), w);
            break;
          default:
            i += "/";
        }
        break;
      case 123 * h2:
        p[y++] = I(i) * g;
      case 125 * h2:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            L = 0;
          case 59 + s:
            E > 0 && I(i) - d && U(E > 32 ? Te(i + ";", a, r, d - 1) : Te(ae(i, " ", "") + ";", a, r, d - 2), w);
            break;
          case 59:
            i += ";";
          default:
            if (U(b = ve(i, t, r, y, s, n, p, T, F = [], S = [], d), o), f === 123)
              if (s === 0)
                N(i, t, b, b, F, o, d, p, S);
              else
                switch (A) {
                  case 100:
                  case 109:
                  case 115:
                    N(e, b, b, a && U(ve(e, b, b, 0, 0, n, p, T, n, F = [], d), S), n, S, d, p, a ? F : S);
                    break;
                  default:
                    N(i, b, b, b, [""], S, 0, p, S);
                }
        }
        y = s = E = 0, h2 = g = 1, T = i = "", d = l;
        break;
      case 58:
        d = 1 + I(i), E = u;
      default:
        if (h2 < 1) {
          if (f == 123)
            --h2;
          else if (f == 125 && h2++ == 0 && Yt() == 125)
            continue;
        }
        switch (i += me(f), f * h2) {
          case 38:
            g = s > 0 ? 1 : (i += "\f", -1);
            break;
          case 44:
            p[y++] = (I(i) - 1) * g, g = 1;
            break;
          case 64:
            k() === 45 && (i += ee(v())), A = k(), s = d = I(T = i += Zt2(G())), f++;
            break;
          case 45:
            u === 45 && I(i) == 2 && (h2 = 0);
        }
    }
  return o;
}
function ve(e, t, r, a, n, o, l, p, w, y, s) {
  for (var d = n - 1, A = n === 0 ? o : [""], E = Ye(A), u = 0, h2 = 0, L = 0; u < a; ++u)
    for (var g = 0, f = P(e, d + 1, d = zt(h2 = l[u])), T = e; g < E; ++g)
      (T = He(h2 > 0 ? A[g] + " " + f : ae(f, /&\f/g, A[g]))) && (w[L++] = T);
  return fe(e, t, r, n === 0 ? ze : p, w, y, s);
}
function tr(e, t, r) {
  return fe(e, t, r, Ne, me(Ht()), P(e, 2, -2), 0);
}
function Te(e, t, r, a) {
  return fe(e, t, r, Xe, P(e, 0, a), P(e, a + 1, -1), a);
}
function oe(e, t) {
  for (var r = "", a = Ye(e), n = 0; n < a; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function rr(e, t, r, a) {
  switch (e.type) {
    case Gt:
    case Xe:
      return e.return = e.return || e.value;
    case Ne:
      return "";
    case Nt:
      return e.return = e.value + "{" + oe(e.children, a) + "}";
    case ze:
      e.value = e.props.join(",");
  }
  return I(r = oe(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
var Se = "10.0.2";
var We = "c4";
var ar2 = (e) => e.match(/^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/) !== null;
var nr = async () => {
  const { diagram: e } = await import("./c4Diagram-a7af8508-7V4ZA7VZ.js");
  return { id: We, diagram: e };
};
var sr = {
  id: We,
  detector: ar2,
  loader: nr
};
var or = sr;
var Ke = "flowchart";
var cr2 = (e, t) => {
  var r, a;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((a = t == null ? void 0 : t.flowchart) == null ? void 0 : a.defaultRenderer) === "elk" ? false : e.match(/^\s*graph/) !== null;
};
var ir = async () => {
  const { diagram: e } = await import("./flowDiagram-18accd5b-UY7S7YQN.js");
  return { id: Ke, diagram: e };
};
var dr = {
  id: Ke,
  detector: cr2,
  loader: ir
};
var lr2 = dr;
var Je = "flowchart-v2";
var ur = (e, t) => {
  var r, a, n;
  return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" || ((a = t == null ? void 0 : t.flowchart) == null ? void 0 : a.defaultRenderer) === "elk" ? false : e.match(/^\s*graph/) !== null && ((n = t == null ? void 0 : t.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : e.match(/^\s*flowchart/) !== null;
};
var mr = async () => {
  const { diagram: e } = await import("./flowDiagram-v2-2a7e193a-NIXH26W3.js");
  return { id: Je, diagram: e };
};
var fr2 = {
  id: Je,
  detector: ur,
  loader: mr
};
var pr2 = fr2;
var Qe = "er";
var hr = (e) => e.match(/^\s*erDiagram/) !== null;
var gr = async () => {
  const { diagram: e } = await import("./erDiagram-779a1e9e-ZO5JW6L4.js");
  return { id: Qe, diagram: e };
};
var yr = {
  id: Qe,
  detector: hr,
  loader: gr
};
var br = yr;
var Ze = "gitGraph";
var wr = (e) => e.match(/^\s*gitGraph/) !== null;
var $r = async () => {
  const { diagram: e } = await import("./gitGraphDiagram-602e6108-YWRGX5GX.js");
  return { id: Ze, diagram: e };
};
var vr = {
  id: Ze,
  detector: wr,
  loader: $r
};
var Tr2 = vr;
var et2 = "gantt";
var Sr = (e) => e.match(/^\s*gantt/) !== null;
var Dr = async () => {
  const { diagram: e } = await import("./ganttDiagram-2c592def-6JZA4BMR.js");
  return { id: et2, diagram: e };
};
var Ar = {
  id: et2,
  detector: Sr,
  loader: Dr
};
var Er = Ar;
var tt = "info";
var jr2 = (e) => e.match(/^\s*info/) !== null;
var Ir = async () => {
  const { diagram: e } = await import("./infoDiagram-c28b5f56-2SDJ2TFO.js");
  return { id: tt, diagram: e };
};
var Cr = {
  id: tt,
  detector: jr2,
  loader: Ir
};
var Mr = Cr;
var rt = "pie";
var kr = (e) => e.match(/^\s*pie/) !== null;
var Lr = async () => {
  const { diagram: e } = await import("./pieDiagram-2f833a44-KYPZ3PML.js");
  return { id: rt, diagram: e };
};
var Fr2 = {
  id: rt,
  detector: kr,
  loader: Lr
};
var xr = Fr2;
var at = "requirement";
var _r = (e) => e.match(/^\s*requirement(Diagram)?/) !== null;
var Rr = async () => {
  const { diagram: e } = await import("./requirementDiagram-59bd3776-AJX4V3NW.js");
  return { id: at, diagram: e };
};
var Or = {
  id: at,
  detector: _r,
  loader: Rr
};
var Vr = Or;
var nt = "sequence";
var Pr = (e) => e.match(/^\s*sequenceDiagram/) !== null;
var Br = async () => {
  const { diagram: e } = await import("./sequenceDiagram-2cb581e5-BJQJMUUG.js");
  return { id: nt, diagram: e };
};
var Ur = {
  id: nt,
  detector: Pr,
  loader: Br
};
var Gr = Ur;
var st = "class";
var Nr = (e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : e.match(/^\s*classDiagram/) !== null;
};
var zr = async () => {
  const { diagram: e } = await import("./classDiagram-17eafd8a-QSLQLEPK.js");
  return { id: st, diagram: e };
};
var Xr = {
  id: st,
  detector: Nr,
  loader: zr
};
var Hr = Xr;
var ot = "classDiagram";
var Yr = (e, t) => {
  var r;
  return e.match(/^\s*classDiagram/) !== null && ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? true : e.match(/^\s*classDiagram-v2/) !== null;
};
var qr = async () => {
  const { diagram: e } = await import("./classDiagram-v2-146d8a48-L7WXFZ6Y.js");
  return { id: ot, diagram: e };
};
var Wr = {
  id: ot,
  detector: Yr,
  loader: qr
};
var Kr = Wr;
var ct = "state";
var Jr = (e, t) => {
  var r;
  return ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : e.match(/^\s*stateDiagram/) !== null;
};
var Qr = async () => {
  const { diagram: e } = await import("./stateDiagram-4e5e77ae-CBRI7I5N.js");
  return { id: ct, diagram: e };
};
var Zr = {
  id: ct,
  detector: Jr,
  loader: Qr
};
var ea = Zr;
var it = "stateDiagram";
var ta = (e, t) => {
  var r, a;
  return !!(e.match(/^\s*stateDiagram-v2/) !== null || e.match(/^\s*stateDiagram/) && ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || e.match(/^\s*stateDiagram/) && ((a = t == null ? void 0 : t.state) == null ? void 0 : a.defaultRenderer) === "dagre-wrapper");
};
var ra = async () => {
  const { diagram: e } = await import("./stateDiagram-v2-a936b277-XGURV5U3.js");
  return { id: it, diagram: e };
};
var aa = {
  id: it,
  detector: ta,
  loader: ra
};
var na = aa;
var dt = "journey";
var sa = (e) => e.match(/^\s*journey/) !== null;
var oa = async () => {
  const { diagram: e } = await import("./journeyDiagram-48369403-24FLXD3L.js");
  return { id: dt, diagram: e };
};
var ca = {
  id: dt,
  detector: sa,
  loader: oa
};
var ia = ca;
var lt = "error";
var da = (e) => e.toLowerCase().trim() === "error";
var la = async () => {
  const { diagram: e } = await import("./errorDiagram-bf8e6da4-3HBKV3IG.js");
  return { id: lt, diagram: e };
};
var ua = {
  id: lt,
  detector: da,
  loader: la
};
var ma = ua;
var ut = "flowchart-elk";
var fa = (e, t) => {
  var r;
  return (
    // If diagram explicitly states flowchart-elk
    !!(e.match(/^\s*flowchart-elk/) || // If a flowchart/graph diagram has their default renderer set to elk
    e.match(/^\s*flowchart|graph/) && ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk")
  );
};
var pa = async () => {
  const { diagram: e } = await import("./flowchart-elk-definition-2f51e52a-I7WV77Y4.js");
  return { id: ut, diagram: e };
};
var ha = {
  id: ut,
  detector: fa,
  loader: pa
};
var ga = ha;
var mt = "timeline";
var ya = (e) => e.match(/^\s*timeline/) !== null;
var ba = async () => {
  const { diagram: e } = await import("./timeline-definition-274a7ee6-5VLO63RI.js");
  return { id: mt, diagram: e };
};
var wa = {
  id: mt,
  detector: ya,
  loader: ba
};
var $a = wa;
var ft = "mindmap";
var va = (e) => e.match(/^\s*mindmap/) !== null;
var Ta = async () => {
  const { diagram: e } = await import("./mindmap-definition-9c087979-CLUH4K2C.js");
  return { id: ft, diagram: e };
};
var Sa = {
  id: ft,
  detector: va,
  loader: Ta
};
var Da = Sa;
var De = false;
var pe = () => {
  De || (De = true, lr(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {},
      // should never be used
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ss(
    ma,
    or,
    Kr,
    Hr,
    br,
    Er,
    Mr,
    xr,
    Vr,
    Gr,
    ga,
    pr2,
    lr2,
    Da,
    $a,
    Tr2,
    na,
    ea,
    ia
  ));
};
var pt = class {
  constructor(t) {
    var o, l;
    this.text = t, this.type = "graph", this.text += `
`;
    const r = th();
    try {
      this.type = fr(t, r);
    } catch (p) {
      this.type = "error", this.detectError = p;
    }
    const a = ar(this.type);
    et.debug("Type " + this.type), this.db = a.db, (l = (o = this.db).clear) == null || l.call(o), this.renderer = a.renderer, this.parser = a.parser;
    const n = this.parser.parse.bind(this.parser);
    this.parser.parse = (p) => n(rs(p, this.db)), this.parser.parser.yy = this.db, a.init && (a.init(r), et.info("Initialized diagram " + this.type, r)), this.parse();
  }
  parse() {
    var t, r;
    if (this.detectError)
      throw this.detectError;
    (r = (t = this.db).clear) == null || r.call(t), this.parser.parse(this.text);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var ht = async (e) => {
  const t = fr(e, th());
  try {
    ar(t);
  } catch {
    const a = as(t);
    if (!a)
      throw new cr(`Diagram ${t} not found.`);
    const { id: n, diagram: o } = await a();
    lr(n, o);
  }
  return new pt(e);
};
var ce = [];
var bs = (e) => {
  ce.push(e);
};
var Aa = () => {
  ce.forEach((e) => {
    e();
  }), ce = [];
};
var Ea = Object.prototype;
function gt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ea;
  return e === r;
}
function ja(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Ia = ja(Object.keys, Object);
var Ca = Ia;
var Ma = Object.prototype;
var ka = Ma.hasOwnProperty;
function La(e) {
  if (!gt(e))
    return Ca(e);
  var t = [];
  for (var r in Object(e))
    ka.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Fa = Ce(Ti, "DataView");
var ie = Fa;
var xa = Ce(Ti, "Promise");
var de = xa;
var _a = Ce(Ti, "Set");
var le = _a;
var Ra = Ce(Ti, "WeakMap");
var ue = Ra;
var Ae = "[object Map]";
var Oa = "[object Object]";
var Ee = "[object Promise]";
var je = "[object Set]";
var Ie = "[object WeakMap]";
var Ce2 = "[object DataView]";
var Va = jr(ie);
var Pa = jr(_o);
var Ba = jr(de);
var Ua = jr(le);
var Ga = jr(ue);
var M = Tr;
(ie && M(new ie(new ArrayBuffer(1))) != Ce2 || _o && M(new _o()) != Ae || de && M(de.resolve()) != Ee || le && M(new le()) != je || ue && M(new ue()) != Ie) && (M = function(e) {
  var t = Tr(e), r = t == Oa ? e.constructor : void 0, a = r ? jr(r) : "";
  if (a)
    switch (a) {
      case Va:
        return Ce2;
      case Pa:
        return Ae;
      case Ba:
        return Ee;
      case Ua:
        return je;
      case Ga:
        return Ie;
    }
  return t;
});
var Na = M;
function he(e) {
  return e != null && typeof e == "object";
}
var za = "[object Arguments]";
function Me(e) {
  return he(e) && Tr(e) == za;
}
var yt = Object.prototype;
var Xa = yt.hasOwnProperty;
var Ha = yt.propertyIsEnumerable;
var Ya = Me(function() {
  return arguments;
}()) ? Me : function(e) {
  return he(e) && Xa.call(e, "callee") && !Ha.call(e, "callee");
};
var qa = Ya;
var Wa = Array.isArray;
var Ka = Wa;
var Ja = 9007199254740991;
function bt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ja;
}
function Qa(e) {
  return e != null && bt(e.length) && !Fr(e);
}
function Za() {
  return false;
}
var wt = typeof exports == "object" && exports && !exports.nodeType && exports;
var ke = wt && typeof module == "object" && module && !module.nodeType && module;
var en = ke && ke.exports === wt;
var Le = en ? Ti.Buffer : void 0;
var tn = Le ? Le.isBuffer : void 0;
var rn = tn || Za;
var an = rn;
var nn = "[object Arguments]";
var sn = "[object Array]";
var on = "[object Boolean]";
var cn = "[object Date]";
var dn = "[object Error]";
var ln = "[object Function]";
var un = "[object Map]";
var mn = "[object Number]";
var fn = "[object Object]";
var pn = "[object RegExp]";
var hn = "[object Set]";
var gn = "[object String]";
var yn = "[object WeakMap]";
var bn = "[object ArrayBuffer]";
var wn = "[object DataView]";
var $n = "[object Float32Array]";
var vn = "[object Float64Array]";
var Tn = "[object Int8Array]";
var Sn = "[object Int16Array]";
var Dn = "[object Int32Array]";
var An = "[object Uint8Array]";
var En = "[object Uint8ClampedArray]";
var jn = "[object Uint16Array]";
var In = "[object Uint32Array]";
var c = {};
c[$n] = c[vn] = c[Tn] = c[Sn] = c[Dn] = c[An] = c[En] = c[jn] = c[In] = true;
c[nn] = c[sn] = c[bn] = c[on] = c[wn] = c[cn] = c[dn] = c[ln] = c[un] = c[mn] = c[fn] = c[pn] = c[hn] = c[gn] = c[yn] = false;
function Cn(e) {
  return he(e) && bt(e.length) && !!c[Tr(e)];
}
function Mn(e) {
  return function(t) {
    return e(t);
  };
}
var $t = typeof exports == "object" && exports && !exports.nodeType && exports;
var V = $t && typeof module == "object" && module && !module.nodeType && module;
var kn = V && V.exports === $t;
var te = kn && pr.process;
var Ln = function() {
  try {
    var e = V && V.require && V.require("util").types;
    return e || te && te.binding && te.binding("util");
  } catch {
  }
}();
var Fe = Ln;
var xe = Fe && Fe.isTypedArray;
var Fn = xe ? Mn(xe) : Cn;
var xn = Fn;
var _n = "[object Map]";
var Rn = "[object Set]";
var On = Object.prototype;
var Vn = On.hasOwnProperty;
function z(e) {
  if (e == null)
    return true;
  if (Qa(e) && (Ka(e) || typeof e == "string" || typeof e.splice == "function" || an(e) || xn(e) || qa(e)))
    return !e.length;
  var t = Na(e);
  if (t == _n || t == Rn)
    return !e.size;
  if (gt(e))
    return !La(e).length;
  for (var r in e)
    if (Vn.call(e, r))
      return false;
  return true;
}
var Pn = "graphics-document document";
function Bn(e, t) {
  e.attr("role", Pn), z(t) || e.attr("aria-roledescription", t);
}
function Un(e, t, r, a) {
  if (e.insert !== void 0)
    if (t || r) {
      if (r) {
        const n = "chart-desc-" + a;
        e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(r);
      }
      if (t) {
        const n = "chart-title-" + a;
        e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
      }
    } else
      return;
}
var vt = ["graph", "flowchart", "flowchart-v2", "stateDiagram", "stateDiagram-v2"];
var Gn = 5e4;
var Nn = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var zn = "sandbox";
var Xn = "loose";
var Hn = "http://www.w3.org/2000/svg";
var Yn = "http://www.w3.org/1999/xlink";
var qn = "http://www.w3.org/1999/xhtml";
var Wn = "100%";
var Kn = "100%";
var Jn = "border:0;margin:0;";
var Qn = "margin:0";
var Zn = "allow-top-navigation-by-user-activation allow-popups";
var es = 'The "iframe" tag is not supported by your browser.';
var ts = ["foreignobject"];
var rs2 = ["dominant-baseline"];
async function as2(e, t) {
  pe();
  let r;
  try {
    (await ht(e)).parse();
  } catch (a) {
    r = a;
  }
  if (t != null && t.suppressErrors)
    return r === void 0;
  if (r)
    throw r;
}
var ns = function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const a = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(a) ? "ﬂ°°" + a + "¶ß" : "ﬂ°" + a + "¶ß";
  }), t;
};
var ss2 = function(e) {
  let t = e;
  return t = t.replace(/ﬂ°°/g, "&#"), t = t.replace(/ﬂ°/g, "&"), t = t.replace(/¶ß/g, ";"), t;
};
var _e = (e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`;
var os2 = (e, t, r = {}) => {
  var n;
  let a = "";
  if (e.themeCSS !== void 0 && (a += `
${e.themeCSS}`), e.fontFamily !== void 0 && (a += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (a += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), !z(r) && vt.includes(t)) {
    const w = e.htmlLabels || ((n = e.flowchart) == null ? void 0 : n.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const y in r) {
      const s = r[y];
      z(s.styles) || w.forEach((d) => {
        a += _e(s.id, d, s.styles);
      }), z(s.textStyles) || (a += _e(s.id, "tspan", s.textStyles));
    }
  }
  return a;
};
var cs = (e, t, r, a) => {
  const n = os2(e, t, r), o = os(t, n, e.themeVariables);
  return oe(er(`${a}{${o}}`), rr);
};
var is = (e = "", t, r) => {
  let a = e;
  return !r && !t && (a = a.replace(/marker-end="url\(.*?#/g, 'marker-end="url(#')), a = ss2(a), a = a.replace(/<br>/g, "<br/>"), a;
};
var ds = (e = "", t) => {
  const r = t ? t.viewBox.baseVal.height + "px" : Kn, a = btoa('<body style="' + Qn + '">' + e + "</body>");
  return `<iframe style="width:${Wn};height:${r};${Jn}" src="data:text/html;base64,${a}" sandbox="${Zn}">
  ${es}
</iframe>`;
};
var Re = (e, t, r, a, n) => {
  const o = e.append("div");
  o.attr("id", r), a && o.attr("style", a);
  const l = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", Hn);
  return n && l.attr("xmlns:xlink", n), l.append("g"), e;
};
function Oe(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var ls = (e, t, r, a) => {
  var n, o, l;
  (n = e.getElementById(t)) == null || n.remove(), (o = e.getElementById(r)) == null || o.remove(), (l = e.getElementById(a)) == null || l.remove();
};
var us = async function(e, t, r) {
  var ge, ye, be, we;
  pe(), bh();
  const a = fs.detectInit(t);
  a && (W(a), yh(a));
  const n = th();
  et.debug(n), t.length > ((n == null ? void 0 : n.maxTextSize) ?? Gn) && (t = Nn), t = t.replace(/\r\n?/g, `
`);
  const o = "#" + e, l = "i" + e, p = "#" + l, w = "d" + e, y = "#" + w;
  let s = nh("body");
  const d = n.securityLevel === zn, A = n.securityLevel === Xn, E = n.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), d) {
      const D = Oe(nh(r), l);
      s = nh(D.nodes()[0].contentDocument.body), s.node().style.margin = 0;
    } else
      s = nh(r);
    Re(s, e, w, `font-family: ${E}`, Yn);
  } else {
    if (ls(document, e, w, l), d) {
      const D = Oe(nh("body"), l);
      s = nh(D.nodes()[0].contentDocument.body), s.node().style.margin = 0;
    } else
      s = nh("body");
    Re(s, e, w);
  }
  t = ns(t);
  let u, h2;
  try {
    u = await ht(t);
  } catch (D) {
    u = new pt("error"), h2 = D;
  }
  const L = s.select(y).node(), g = u.type, f = L.firstChild, T = f.firstChild, F = vt.includes(g) ? u.renderer.getClasses(t, u) : {}, S = cs(
    n,
    g,
    // @ts-ignore convert renderer to TS.
    F,
    o
  ), b = document.createElement("style");
  b.innerHTML = S, f.insertBefore(b, T);
  try {
    await u.renderer.draw(t, e, Se, u);
  } catch (D) {
    throw h.draw(t, e, Se), D;
  }
  const i = s.select(`${y} svg`), Tt = (ye = (ge = u.db).getAccTitle) == null ? void 0 : ye.call(ge), St = (we = (be = u.db).getAccDescription) == null ? void 0 : we.call(be);
  fs2(g, i, Tt, St), s.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", qn);
  let C = s.select(y).node().innerHTML;
  if (et.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), C = is(C, d, _l(n.arrowMarkerAbsolute)), d) {
    const D = s.select(y + " svg").node();
    C = ds(C, D);
  } else
    A || (C = Fi.sanitize(C, {
      ADD_TAGS: ts,
      ADD_ATTR: rs2
    }));
  Aa();
  const Q = nh(d ? p : y).node();
  if (Q && "remove" in Q && Q.remove(), h2)
    throw h2;
  return {
    svg: C,
    bindFunctions: u.db.bindFunctions
  };
};
function ms(e = {}) {
  var r;
  e != null && e.fontFamily && !((r = e.themeVariables) != null && r.fontFamily) && (e.themeVariables || (e.themeVariables = {}), e.themeVariables.fontFamily = e.fontFamily), gh(e), e != null && e.theme && e.theme in Zt ? e.themeVariables = Zt[e.theme].getThemeVariables(
    e.themeVariables
  ) : e && (e.themeVariables = Zt.default.getThemeVariables(e.themeVariables));
  const t = typeof e == "object" ? dh(e) : mh();
  oh(t.logLevel), pe();
}
function fs2(e, t, r, a) {
  Bn(t, e), Un(t, r, a, t.attr("id"));
}
var ws = Object.freeze({
  render: us,
  parse: as2,
  parseDirective: Qt,
  initialize: ms,
  getConfig: th,
  setConfig: Ch,
  getSiteConfig: mh,
  updateSiteConfig: ph,
  reset: () => {
    bh();
  },
  globalReset: () => {
    bh(zi);
  },
  defaultConfig: zi
});
oh(th().logLevel);
bh(th());

export {
  bs,
  gt,
  ja,
  La,
  le,
  Na,
  he,
  qa,
  Ka,
  bt,
  Qa,
  an,
  Mn,
  Fe,
  xn,
  z,
  ss2 as ss,
  ws
};
//# sourceMappingURL=chunk-DZVDESUM.js.map
