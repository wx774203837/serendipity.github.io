import {
  ae,
  le
} from "./chunk-NI3IV5NZ.js";
import "./chunk-J7SWTDBV.js";
import {
  At,
  ct,
  dt,
  et as et2,
  ft,
  ht,
  lt,
  st
} from "./chunk-FEB3F2XA.js";
import "./chunk-T5SH2WB4.js";
import {
  a
} from "./chunk-FOSNSJOT.js";
import "./chunk-LXOXGOW4.js";
import {
  A,
  c,
  gn,
  k,
  ks,
  ne,
  so,
  w as w2
} from "./chunk-4YVXMPIA.js";
import {
  z
} from "./chunk-ZBFL4OS2.js";
import "./chunk-MAFLJJKP.js";
import "./chunk-WC7ESL3H.js";
import "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  Be,
  Io,
  To
} from "./chunk-BHKXDXK7.js";
import {
  w
} from "./chunk-SEV54HLU.js";
import "./chunk-VJFQ4JEA.js";
import {
  _l,
  ah,
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/flowDiagram-18accd5b.js
function Dt(r) {
  if (!r.ok)
    throw new Error(r.status + " " + r.statusText);
  return r.text();
}
function Pt(r, e) {
  return fetch(r, e).then(Dt);
}
function Rt(r) {
  return (e, t) => Pt(e, t).then((n) => new DOMParser().parseFromString(n, r));
}
var Gt = Rt("image/svg+xml");
var Y = {
  normal: Wt,
  vee: $t,
  undirected: zt
};
function Ut(r) {
  Y = r;
}
function Wt(r, e, t, n) {
  var a2 = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a2.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  st(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function $t(r, e, t, n) {
  var a2 = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a2.append("path").attr("d", "M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  st(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function zt(r, e, t, n) {
  var a2 = r.append("marker").attr("id", e).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto"), s = a2.append("path").attr("d", "M 0 5 L 10 5").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  st(s, t[n + "Style"]), t[n + "Class"] && s.attr("class", t[n + "Class"]);
}
function Vt(r, e) {
  var t = r;
  return t.node().appendChild(e.label), st(t, e.labelStyle), t;
}
function Yt(r, e) {
  for (var t = r.append("text"), n = Ht(e.label).split(`
`), a2 = 0; a2 < n.length; a2++)
    t.append("tspan").attr("xml:space", "preserve").attr("dy", "1em").attr("x", "1").text(n[a2]);
  return st(t, e.labelStyle), t;
}
function Ht(r) {
  for (var e = "", t = false, n, a2 = 0; a2 < r.length; ++a2)
    if (n = r[a2], t) {
      switch (n) {
        case "n":
          e += `
`;
          break;
        default:
          e += n;
      }
      t = false;
    } else
      n === "\\" ? t = true : e += n;
  return e;
}
function K(r, e, t) {
  var n = e.label, a2 = r.append("g");
  e.labelType === "svg" ? Vt(a2, e) : typeof n != "string" || e.labelType === "html" ? dt(a2, e) : Yt(a2, e);
  var s = a2.node().getBBox(), i;
  switch (t) {
    case "top":
      i = -e.height / 2;
      break;
    case "bottom":
      i = e.height / 2 - s.height;
      break;
    default:
      i = -s.height / 2;
  }
  return a2.attr("transform", "translate(" + -s.width / 2 + "," + i + ")"), a2;
}
var H = function(r, e) {
  var t = e.nodes().filter(function(s) {
    return lt(e, s);
  }), n = r.selectAll("g.cluster").data(t, function(s) {
    return s;
  });
  At(n.exit(), e).style("opacity", 0).remove();
  var a2 = n.enter().append("g").attr("class", "cluster").attr("id", function(s) {
    var i = e.node(s);
    return i.id;
  }).style("opacity", 0).each(function(s) {
    var i = e.node(s), o = nh(this);
    nh(this).append("rect");
    var c2 = o.append("g").attr("class", "label");
    K(c2, i, i.clusterLabelPos);
  });
  return n = n.merge(a2), n = At(n, e).style("opacity", 1), n.selectAll("rect").each(function(s) {
    var i = e.node(s), o = nh(this);
    st(o, i.style);
  }), n;
};
function Xt(r) {
  H = r;
}
var X = function(r, e) {
  var t = r.selectAll("g.edgeLabel").data(e.edges(), function(a2) {
    return ht(a2);
  }).classed("update", true);
  t.exit().remove(), t.enter().append("g").classed("edgeLabel", true).style("opacity", 0), t = r.selectAll("g.edgeLabel"), t.each(function(a2) {
    var s = nh(this);
    s.select(".label").remove();
    var i = e.edge(a2), o = K(s, e.edge(a2), 0).classed("label", true), c2 = o.node().getBBox();
    i.labelId && o.attr("id", i.labelId), w2(i, "width") || (i.width = c2.width), w2(i, "height") || (i.height = c2.height);
  });
  var n;
  return t.exit ? n = t.exit() : n = t.selectAll(null), At(n, e).style("opacity", 0).remove(), t;
};
function Ft(r) {
  X = r;
}
function O(r, e) {
  return r.intersect(e);
}
var F = function(r, e, t) {
  var n = r.selectAll("g.edgePath").data(e.edges(), function(i) {
    return ht(i);
  }).classed("update", true), a2 = Zt(n, e);
  Ot(n, e);
  var s = n.merge !== void 0 ? n.merge(a2) : n;
  return At(s, e).style("opacity", 1), s.each(function(i) {
    var o = nh(this), c2 = e.edge(i);
    c2.elem = this, c2.id && o.attr("id", c2.id), ft(
      o,
      c2.class,
      (o.classed("update") ? "update " : "") + "edgePath"
    );
  }), s.selectAll("path.path").each(function(i) {
    var o = e.edge(i);
    o.arrowheadId = ne("arrowhead");
    var c2 = nh(this).attr("marker-end", function() {
      return "url(" + Qt(location.href, o.arrowheadId) + ")";
    }).style("fill", "none");
    At(c2, e).attr("d", function(d) {
      return Jt(e, d);
    }), st(c2, o.style);
  }), s.selectAll("defs *").remove(), s.selectAll("defs").each(function(i) {
    var o = e.edge(i), c2 = t[o.arrowhead];
    c2(nh(this), o.arrowheadId, o, "arrowhead");
  }), s;
};
function qt(r) {
  F = r;
}
function Qt(r, e) {
  var t = r.split("#")[0];
  return t + "#" + e;
}
function Jt(r, e) {
  var t = r.edge(e), n = r.node(e.v), a2 = r.node(e.w), s = t.points.slice(1, t.points.length - 1);
  return s.unshift(O(n, s[0])), s.push(O(a2, s[s.length - 1])), ot(t, s);
}
function ot(r, e) {
  var t = (z || Gt.line)().x(function(n) {
    return n.x;
  }).y(function(n) {
    return n.y;
  });
  return (t.curve || t.interpolate)(r.curve), t(e);
}
function Kt(r) {
  var e = r.getBBox(), t = r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width / 2, e.height / 2);
  return { x: t.e, y: t.f };
}
function Zt(r, e) {
  var t = r.enter().append("g").attr("class", "edgePath").style("opacity", 0);
  return t.append("path").attr("class", "path").attr("d", function(n) {
    var a2 = e.edge(n), s = e.node(n.v).elem, i = k(a2.points.length).map(function() {
      return Kt(s);
    });
    return ot(a2, i);
  }), t.append("defs"), t;
}
function Ot(r, e) {
  var t = r.exit();
  At(t, e).style("opacity", 0).remove();
}
var q = function(r, e, t) {
  var n = e.nodes().filter(function(i) {
    return !lt(e, i);
  }), a2 = r.selectAll("g.node").data(n, function(i) {
    return i;
  }).classed("update", true);
  a2.exit().remove(), a2.enter().append("g").attr("class", "node").style("opacity", 0), a2 = r.selectAll("g.node"), a2.each(function(i) {
    var o = e.node(i), c2 = nh(this);
    ft(
      c2,
      o.class,
      (c2.classed("update") ? "update " : "") + "node"
    ), c2.select("g.label").remove();
    var d = c2.append("g").attr("class", "label"), l = K(d, o), v = t[o.shape], h = gn(l.node().getBBox(), "width", "height");
    o.elem = this, o.id && c2.attr("id", o.id), o.labelId && d.attr("id", o.labelId), w2(o, "width") && (h.width = o.width), w2(o, "height") && (h.height = o.height), h.width += o.paddingLeft + o.paddingRight, h.height += o.paddingTop + o.paddingBottom, d.attr(
      "transform",
      "translate(" + (o.paddingLeft - o.paddingRight) / 2 + "," + (o.paddingTop - o.paddingBottom) / 2 + ")"
    );
    var u = nh(this);
    u.select(".label-container").remove();
    var p = v(u, h, o).classed("label-container", true);
    st(p, o.style);
    var m = p.node().getBBox();
    o.width = m.width, o.height = m.height;
  });
  var s;
  return a2.exit ? s = a2.exit() : s = a2.selectAll(null), At(s, e).style("opacity", 0).remove(), a2;
};
function jt(r) {
  q = r;
}
function te(r, e) {
  var t = r.filter(function() {
    return !nh(this).classed("update");
  });
  function n(a2) {
    var s = e.node(a2);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), At(r, e).style("opacity", 1).attr("transform", n), At(t.selectAll("rect"), e).attr("width", function(a2) {
    return e.node(a2).width;
  }).attr("height", function(a2) {
    return e.node(a2).height;
  }).attr("x", function(a2) {
    var s = e.node(a2);
    return -s.width / 2;
  }).attr("y", function(a2) {
    var s = e.node(a2);
    return -s.height / 2;
  });
}
function ee(r, e) {
  var t = r.filter(function() {
    return !nh(this).classed("update");
  });
  function n(a2) {
    var s = e.edge(a2);
    return w2(s, "x") ? "translate(" + s.x + "," + s.y + ")" : "";
  }
  t.attr("transform", n), At(r, e).style("opacity", 1).attr("transform", n);
}
function re(r, e) {
  var t = r.filter(function() {
    return !nh(this).classed("update");
  });
  function n(a2) {
    var s = e.node(a2);
    return "translate(" + s.x + "," + s.y + ")";
  }
  t.attr("transform", n), At(r, e).style("opacity", 1).attr("transform", n);
}
function lt2(r, e, t, n) {
  var a2 = r.x, s = r.y, i = a2 - n.x, o = s - n.y, c2 = Math.sqrt(e * e * o * o + t * t * i * i), d = Math.abs(e * t * i / c2);
  n.x < a2 && (d = -d);
  var l = Math.abs(e * t * o / c2);
  return n.y < s && (l = -l), { x: a2 + d, y: s + l };
}
function ae2(r, e, t) {
  return lt2(r, e, e, t);
}
function ne2(r, e, t, n) {
  var a2, s, i, o, c2, d, l, v, h, u, p, m, f, y, k2;
  if (a2 = e.y - r.y, i = r.x - e.x, c2 = e.x * r.y - r.x * e.y, h = a2 * t.x + i * t.y + c2, u = a2 * n.x + i * n.y + c2, !(h !== 0 && u !== 0 && j(h, u)) && (s = n.y - t.y, o = t.x - n.x, d = n.x * t.y - t.x * n.y, l = s * r.x + o * r.y + d, v = s * e.x + o * e.y + d, !(l !== 0 && v !== 0 && j(l, v)) && (p = a2 * o - s * i, p !== 0)))
    return m = Math.abs(p / 2), f = i * d - o * c2, y = f < 0 ? (f - m) / p : (f + m) / p, f = s * c2 - a2 * d, k2 = f < 0 ? (f - m) / p : (f + m) / p, { x: y, y: k2 };
}
function j(r, e) {
  return r * e > 0;
}
function T(r, e, t) {
  var n = r.x, a2 = r.y, s = [], i = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
  e.forEach(function(p) {
    i = Math.min(i, p.x), o = Math.min(o, p.y);
  });
  for (var c2 = n - r.width / 2 - i, d = a2 - r.height / 2 - o, l = 0; l < e.length; l++) {
    var v = e[l], h = e[l < e.length - 1 ? l + 1 : 0], u = ne2(
      r,
      t,
      { x: c2 + v.x, y: d + v.y },
      { x: c2 + h.x, y: d + h.y }
    );
    u && s.push(u);
  }
  return s.length ? (s.length > 1 && s.sort(function(p, m) {
    var f = p.x - t.x, y = p.y - t.y, k2 = Math.sqrt(f * f + y * y), B = m.x - t.x, E = m.y - t.y, U = Math.sqrt(B * B + E * E);
    return k2 < U ? -1 : k2 === U ? 0 : 1;
  }), s[0]) : (console.log("NO INTERSECTION FOUND, RETURN NODE CENTER", r), r);
}
function Z(r, e) {
  var t = r.x, n = r.y, a2 = e.x - t, s = e.y - n, i = r.width / 2, o = r.height / 2, c2, d;
  return Math.abs(s) * i > Math.abs(a2) * o ? (s < 0 && (o = -o), c2 = s === 0 ? 0 : o * a2 / s, d = o) : (a2 < 0 && (i = -i), c2 = i, d = a2 === 0 ? 0 : i * s / a2), { x: t + c2, y: n + d };
}
var Q = {
  rect: ie,
  ellipse: oe,
  circle: le2,
  diamond: ce
};
function se(r) {
  Q = r;
}
function ie(r, e, t) {
  var n = r.insert("rect", ":first-child").attr("rx", t.rx).attr("ry", t.ry).attr("x", -e.width / 2).attr("y", -e.height / 2).attr("width", e.width).attr("height", e.height);
  return t.intersect = function(a2) {
    return Z(t, a2);
  }, n;
}
function oe(r, e, t) {
  var n = e.width / 2, a2 = e.height / 2, s = r.insert("ellipse", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("rx", n).attr("ry", a2);
  return t.intersect = function(i) {
    return lt2(t, n, a2, i);
  }, s;
}
function le2(r, e, t) {
  var n = Math.max(e.width, e.height) / 2, a2 = r.insert("circle", ":first-child").attr("x", -e.width / 2).attr("y", -e.height / 2).attr("r", n);
  return t.intersect = function(s) {
    return ae2(t, n, s);
  }, a2;
}
function ce(r, e, t) {
  var n = e.width * Math.SQRT2 / 2, a2 = e.height * Math.SQRT2 / 2, s = [
    { x: 0, y: -a2 },
    { x: -n, y: 0 },
    { x: 0, y: a2 },
    { x: n, y: 0 }
  ], i = r.insert("polygon", ":first-child").attr(
    "points",
    s.map(function(o) {
      return o.x + "," + o.y;
    }).join(" ")
  );
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function de() {
  var r = function(e, t) {
    fe(t);
    var n = P(e, "output"), a2 = P(n, "clusters"), s = P(n, "edgePaths"), i = X(P(n, "edgeLabels"), t), o = q(P(n, "nodes"), t, Q);
    ks(t), re(o, t), ee(i, t), F(s, t, Y);
    var c2 = H(a2, t);
    te(c2, t), pe(t);
  };
  return r.createNodes = function(e) {
    return arguments.length ? (jt(e), r) : q;
  }, r.createClusters = function(e) {
    return arguments.length ? (Xt(e), r) : H;
  }, r.createEdgeLabels = function(e) {
    return arguments.length ? (Ft(e), r) : X;
  }, r.createEdgePaths = function(e) {
    return arguments.length ? (qt(e), r) : F;
  }, r.shapes = function(e) {
    return arguments.length ? (se(e), r) : Q;
  }, r.arrows = function(e) {
    return arguments.length ? (Ut(e), r) : Y;
  }, r;
}
var he = {
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  rx: 0,
  ry: 0,
  shape: "rect"
};
var ue = {
  arrowhead: "normal",
  curve: Be
};
function fe(r) {
  r.nodes().forEach(function(e) {
    var t = r.node(e);
    !w2(t, "label") && !r.children(e).length && (t.label = e), w2(t, "paddingX") && so(t, {
      paddingLeft: t.paddingX,
      paddingRight: t.paddingX
    }), w2(t, "paddingY") && so(t, {
      paddingTop: t.paddingY,
      paddingBottom: t.paddingY
    }), w2(t, "padding") && so(t, {
      paddingLeft: t.padding,
      paddingRight: t.padding,
      paddingTop: t.padding,
      paddingBottom: t.padding
    }), so(t, he), c(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"], function(n) {
      t[n] = Number(t[n]);
    }), w2(t, "width") && (t._prevWidth = t.width), w2(t, "height") && (t._prevHeight = t.height);
  }), r.edges().forEach(function(e) {
    var t = r.edge(e);
    w2(t, "label") || (t.label = ""), so(t, ue);
  });
}
function pe(r) {
  c(r.nodes(), function(e) {
    var t = r.node(e);
    w2(t, "_prevWidth") ? t.width = t._prevWidth : delete t.width, w2(t, "_prevHeight") ? t.height = t._prevHeight : delete t.height, delete t._prevWidth, delete t._prevHeight;
  });
}
function P(r, e) {
  var t = r.select("g." + e);
  return t.empty() && (t = r.append("g").attr("class", e)), t;
}
function ct2(r, e, t) {
  const n = e.width, a2 = e.height, s = (n + a2) * 0.9, i = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ], o = A2(r, s, s, i);
  return t.intersect = function(c2) {
    return T(t, i, c2);
  }, o;
}
function dt2(r, e, t) {
  const a2 = e.height, s = a2 / 4, i = e.width + 2 * s, o = [
    { x: s, y: 0 },
    { x: i - s, y: 0 },
    { x: i, y: -a2 / 2 },
    { x: i - s, y: -a2 },
    { x: s, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ], c2 = A2(r, i, a2, o);
  return t.intersect = function(d) {
    return T(t, o, d);
  }, c2;
}
function ht2(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: -a2 / 2, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a2 },
    { x: -a2 / 2, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ut(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: -2 * a2 / 6, y: 0 },
    { x: n - a2 / 6, y: 0 },
    { x: n + 2 * a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function ft2(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: 2 * a2 / 6, y: 0 },
    { x: n + a2 / 6, y: 0 },
    { x: n - 2 * a2 / 6, y: -a2 },
    { x: -a2 / 6, y: -a2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function pt(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: -2 * a2 / 6, y: 0 },
    { x: n + 2 * a2 / 6, y: 0 },
    { x: n - a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function vt(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: a2 / 6, y: 0 },
    { x: n - a2 / 6, y: 0 },
    { x: n + 2 * a2 / 6, y: -a2 },
    { x: -2 * a2 / 6, y: -a2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function yt(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: 0, y: 0 },
    { x: n + a2 / 2, y: 0 },
    { x: n, y: -a2 / 2 },
    { x: n + a2 / 2, y: -a2 },
    { x: 0, y: -a2 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function gt(r, e, t) {
  const n = e.height, a2 = e.width + n / 4, s = r.insert("rect", ":first-child").attr("rx", n / 2).attr("ry", n / 2).attr("x", -a2 / 2).attr("y", -n / 2).attr("width", a2).attr("height", n);
  return t.intersect = function(i) {
    return Z(t, i);
  }, s;
}
function mt(r, e, t) {
  const n = e.width, a2 = e.height, s = [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: n, y: -a2 },
    { x: 0, y: -a2 },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: n + 8, y: 0 },
    { x: n + 8, y: -a2 },
    { x: -8, y: -a2 },
    { x: -8, y: 0 }
  ], i = A2(r, n, a2, s);
  return t.intersect = function(o) {
    return T(t, s, o);
  }, i;
}
function wt(r, e, t) {
  const n = e.width, a2 = n / 2, s = a2 / (2.5 + n / 50), i = e.height + s, o = "M 0," + s + " a " + a2 + "," + s + " 0,0,0 " + n + " 0 a " + a2 + "," + s + " 0,0,0 " + -n + " 0 l 0," + i + " a " + a2 + "," + s + " 0,0,0 " + n + " 0 l 0," + -i, c2 = r.attr("label-offset-y", s).insert("path", ":first-child").attr("d", o).attr("transform", "translate(" + -n / 2 + "," + -(i / 2 + s) + ")");
  return t.intersect = function(d) {
    const l = Z(t, d), v = l.x - t.x;
    if (a2 != 0 && (Math.abs(v) < t.width / 2 || Math.abs(v) == t.width / 2 && Math.abs(l.y - t.y) > t.height / 2 - s)) {
      let h = s * s * (1 - v * v / (a2 * a2));
      h != 0 && (h = Math.sqrt(h)), h = s - h, d.y - t.y > 0 && (h = -h), l.y += h;
    }
    return l;
  }, c2;
}
function ve(r) {
  r.shapes().question = ct2, r.shapes().hexagon = dt2, r.shapes().stadium = gt, r.shapes().subroutine = mt, r.shapes().cylinder = wt, r.shapes().rect_left_inv_arrow = ht2, r.shapes().lean_right = ut, r.shapes().lean_left = ft2, r.shapes().trapezoid = pt, r.shapes().inv_trapezoid = vt, r.shapes().rect_right_inv_arrow = yt;
}
function ye(r) {
  r({ question: ct2 }), r({ hexagon: dt2 }), r({ stadium: gt }), r({ subroutine: mt }), r({ cylinder: wt }), r({ rect_left_inv_arrow: ht2 }), r({ lean_right: ut }), r({ lean_left: ft2 }), r({ trapezoid: pt }), r({ inv_trapezoid: vt }), r({ rect_right_inv_arrow: yt });
}
function A2(r, e, t, n) {
  return r.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(a2) {
      return a2.x + "," + a2.y;
    }).join(" ")
  ).attr("transform", "translate(" + -e / 2 + "," + t / 2 + ")");
}
var ge = {
  addToRender: ve,
  addToRenderV2: ye
};
var xt = {};
var me = function(r) {
  const e = Object.keys(r);
  for (const t of e)
    xt[t] = r[t];
};
var bt = function(r, e, t, n, a2, s) {
  const i = n ? n.select(`[id="${t}"]`) : nh(`[id="${t}"]`), o = a2 || document;
  Object.keys(r).forEach(function(d) {
    const l = r[d];
    let v = "default";
    l.classes.length > 0 && (v = l.classes.join(" "));
    const h = Io(l.styles);
    let u = l.text !== void 0 ? l.text : l.id, p;
    if (_l(th().flowchart.htmlLabels)) {
      const y = {
        label: u.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (k2) => `<i class='${k2.replace(":", " ")}'></i>`
        )
      };
      p = dt(i, y).node(), p.parentNode.removeChild(p);
    } else {
      const y = o.createElementNS("http://www.w3.org/2000/svg", "text");
      y.setAttribute("style", h.labelStyle.replace("color:", "fill:"));
      const k2 = u.split(ah.lineBreakRegex);
      for (const B of k2) {
        const E = o.createElementNS("http://www.w3.org/2000/svg", "tspan");
        E.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), E.setAttribute("dy", "1em"), E.setAttribute("x", "1"), E.textContent = B, y.appendChild(E);
      }
      p = y;
    }
    let m = 0, f = "";
    switch (l.type) {
      case "round":
        m = 5, f = "rect";
        break;
      case "square":
        f = "rect";
        break;
      case "diamond":
        f = "question";
        break;
      case "hexagon":
        f = "hexagon";
        break;
      case "odd":
        f = "rect_left_inv_arrow";
        break;
      case "lean_right":
        f = "lean_right";
        break;
      case "lean_left":
        f = "lean_left";
        break;
      case "trapezoid":
        f = "trapezoid";
        break;
      case "inv_trapezoid":
        f = "inv_trapezoid";
        break;
      case "odd_right":
        f = "rect_left_inv_arrow";
        break;
      case "circle":
        f = "circle";
        break;
      case "ellipse":
        f = "ellipse";
        break;
      case "stadium":
        f = "stadium";
        break;
      case "subroutine":
        f = "subroutine";
        break;
      case "cylinder":
        f = "cylinder";
        break;
      case "group":
        f = "rect";
        break;
      default:
        f = "rect";
    }
    et.warn("Adding node", l.id, l.domId), e.setNode(s.db.lookUpDomId(l.id), {
      labelType: "svg",
      labelStyle: h.labelStyle,
      shape: f,
      label: p,
      rx: m,
      ry: m,
      class: v,
      style: h.style,
      id: s.db.lookUpDomId(l.id)
    });
  });
};
var kt = function(r, e, t) {
  let n = 0, a2, s;
  if (r.defaultStyle !== void 0) {
    const i = Io(r.defaultStyle);
    a2 = i.style, s = i.labelStyle;
  }
  r.forEach(function(i) {
    n++;
    var o = "L-" + i.start + "-" + i.end, c2 = "LS-" + i.start, d = "LE-" + i.end;
    const l = {};
    i.type === "arrow_open" ? l.arrowhead = "none" : l.arrowhead = "normal";
    let v = "", h = "";
    if (i.style !== void 0) {
      const u = Io(i.style);
      v = u.style, h = u.labelStyle;
    } else
      switch (i.stroke) {
        case "normal":
          v = "fill:none", a2 !== void 0 && (v = a2), s !== void 0 && (h = s);
          break;
        case "dotted":
          v = "fill:none;stroke-width:2px;stroke-dasharray:3;";
          break;
        case "thick":
          v = " stroke-width: 3.5px;fill:none";
          break;
      }
    l.style = v, l.labelStyle = h, i.interpolate !== void 0 ? l.curve = To(i.interpolate, Be) : r.defaultInterpolate !== void 0 ? l.curve = To(r.defaultInterpolate, Be) : l.curve = To(xt.curve, Be), i.text === void 0 ? i.style !== void 0 && (l.arrowheadStyle = "fill: #333") : (l.arrowheadStyle = "fill: #333", l.labelpos = "c", _l(th().flowchart.htmlLabels) ? (l.labelType = "html", l.label = `<span id="L-${o}" class="edgeLabel L-${c2}' L-${d}" style="${l.labelStyle}">${i.text.replace(
      /fa[blrs]?:fa-[\w-]+/g,
      (u) => `<i class='${u.replace(":", " ")}'></i>`
    )}</span>`) : (l.labelType = "text", l.label = i.text.replace(ah.lineBreakRegex, `
`), i.style === void 0 && (l.style = l.style || "stroke: #333; stroke-width: 1.5px;fill:none"), l.labelStyle = l.labelStyle.replace("color:", "fill:"))), l.id = o, l.class = c2 + " " + d, l.minlen = i.length || 1, e.setEdge(t.db.lookUpDomId(i.start), t.db.lookUpDomId(i.end), l, n);
  });
};
var we = function(r, e) {
  et.info("Extracting classes"), e.db.clear();
  try {
    return e.parse(r), e.db.getClasses();
  } catch (t) {
    return et.error(t), {};
  }
};
var xe = function(r, e, t, n) {
  et.info("Drawing flowchart"), n.db.clear();
  const { securityLevel: a2, flowchart: s } = th();
  let i;
  a2 === "sandbox" && (i = nh("#i" + e));
  const o = a2 === "sandbox" ? nh(i.nodes()[0].contentDocument.body) : nh("body"), c2 = a2 === "sandbox" ? i.nodes()[0].contentDocument : document;
  try {
    n.parser.parse(r);
  } catch {
    et.debug("Parsing failed");
  }
  let d = n.db.getDirection();
  d === void 0 && (d = "TD");
  const l = s.nodeSpacing || 50, v = s.rankSpacing || 50, h = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: d,
    nodesep: l,
    ranksep: v,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let u;
  const p = n.db.getSubGraphs();
  for (let g = p.length - 1; g >= 0; g--)
    u = p[g], n.db.addVertex(u.id, u.title, "group", void 0, u.classes);
  const m = n.db.getVertices();
  et.warn("Get vertices", m);
  const f = n.db.getEdges();
  let y = 0;
  for (y = p.length - 1; y >= 0; y--) {
    u = p[y], a("cluster").append("text");
    for (let g = 0; g < u.nodes.length; g++)
      et.warn(
        "Setting subgraph",
        u.nodes[g],
        n.db.lookUpDomId(u.nodes[g]),
        n.db.lookUpDomId(u.id)
      ), h.setParent(n.db.lookUpDomId(u.nodes[g]), n.db.lookUpDomId(u.id));
  }
  bt(m, h, e, o, c2, n), kt(f, h, n);
  const k2 = new de();
  ge.addToRender(k2), k2.arrows().none = function(b, L, w3, M) {
    const C = b.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 0 0 L 0 0 z");
    st(C, w3[M + "Style"]);
  }, k2.arrows().normal = function(b, L) {
    b.append("marker").attr("id", L).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerUnits", "strokeWidth").attr("markerWidth", 8).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowheadPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  };
  const B = o.select(`[id="${e}"]`), E = o.select("#" + e + " g");
  for (k2(E, h), E.selectAll("g.node").attr("title", function() {
    return n.db.getTooltip(this.id);
  }), n.db.indexNodes("subGraph" + y), y = 0; y < p.length; y++)
    if (u = p[y], u.title !== "undefined") {
      const g = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"] rect'
      ), b = c2.querySelectorAll(
        "#" + e + ' [id="' + n.db.lookUpDomId(u.id) + '"]'
      ), L = g[0].x.baseVal.value, w3 = g[0].y.baseVal.value, M = g[0].width.baseVal.value, C = nh(b[0]).select(".label");
      C.attr("transform", `translate(${L + M / 2}, ${w3 + 14})`), C.attr("id", e + "Text");
      for (let W = 0; W < u.classes.length; W++)
        b[0].classList.add(u.classes[W]);
    }
  if (!s.htmlLabels) {
    const g = c2.querySelectorAll('[id="' + e + '"] .edgeLabel .label');
    for (const b of g) {
      const L = b.getBBox(), w3 = c2.createElementNS("http://www.w3.org/2000/svg", "rect");
      w3.setAttribute("rx", 0), w3.setAttribute("ry", 0), w3.setAttribute("width", L.width), w3.setAttribute("height", L.height), b.insertBefore(w3, b.firstChild);
    }
  }
  w(h, B, s.diagramPadding, s.useMaxWidth), Object.keys(m).forEach(function(g) {
    const b = m[g];
    if (b.link) {
      const L = o.select("#" + e + ' [id="' + n.db.lookUpDomId(g) + '"]');
      if (L) {
        const w3 = c2.createElementNS("http://www.w3.org/2000/svg", "a");
        w3.setAttributeNS("http://www.w3.org/2000/svg", "class", b.classes.join(" ")), w3.setAttributeNS("http://www.w3.org/2000/svg", "href", b.link), w3.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), a2 === "sandbox" ? w3.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : b.linkTarget && w3.setAttributeNS("http://www.w3.org/2000/svg", "target", b.linkTarget);
        const M = L.insert(function() {
          return w3;
        }, ":first-child"), R = L.select(".label-container");
        R && M.append(function() {
          return R.node();
        });
        const C = L.select(".label");
        C && M.append(function() {
          return C.node();
        });
      }
    }
  });
};
var be = {
  setConf: me,
  addVertices: bt,
  addEdges: kt,
  getClasses: we,
  draw: xe
};
var Ue = {
  parser: ct,
  db: et2,
  renderer: le,
  styles: ae,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, be.setConf(r.flowchart), et2.clear(), et2.setGen("gen-1");
  }
};
export {
  Ue as diagram
};
//# sourceMappingURL=flowDiagram-18accd5b-UY7S7YQN.js.map
