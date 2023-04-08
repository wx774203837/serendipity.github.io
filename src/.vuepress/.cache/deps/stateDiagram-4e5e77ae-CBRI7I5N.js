import {
  $e,
  Be,
  Re
} from "./chunk-HOMF2E2C.js";
import {
  A,
  ks
} from "./chunk-4YVXMPIA.js";
import {
  z
} from "./chunk-ZBFL4OS2.js";
import "./chunk-MAFLJJKP.js";
import "./chunk-WC7ESL3H.js";
import "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  Ue,
  fs
} from "./chunk-BHKXDXK7.js";
import {
  $
} from "./chunk-SEV54HLU.js";
import "./chunk-VJFQ4JEA.js";
import {
  ah,
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/stateDiagram-4e5e77ae.js
var T = {};
var $2 = (e, i) => {
  T[e] = i;
};
var v = (e) => T[e];
var R = () => Object.keys(T);
var I = () => R().length;
var _ = {
  get: v,
  set: $2,
  keys: R,
  size: I
};
var q = (e) => e.append("circle").attr("class", "start-state").attr("r", th().state.sizeUnit).attr("cx", th().state.padding + th().state.sizeUnit).attr("cy", th().state.padding + th().state.sizeUnit);
var Z = (e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", th().state.textHeight).attr("class", "divider").attr("x2", th().state.textHeight * 2).attr("y1", 0).attr("y2", 0);
var j = (e, i) => {
  const o = e.append("text").attr("x", 2 * th().state.padding).attr("y", th().state.textHeight + 2 * th().state.padding).attr("font-size", th().state.fontSize).attr("class", "state-title").text(i.id), d = o.node().getBBox();
  return e.insert("rect", ":first-child").attr("x", th().state.padding).attr("y", th().state.padding).attr("width", d.width + 2 * th().state.padding).attr("height", d.height + 2 * th().state.padding).attr("rx", th().state.radius), o;
};
var D = (e, i) => {
  const o = function(c, m, f) {
    const S = c.append("tspan").attr("x", 2 * th().state.padding).text(m);
    f || S.attr("dy", th().state.textHeight);
  }, s = e.append("text").attr("x", 2 * th().state.padding).attr("y", th().state.textHeight + 1.3 * th().state.padding).attr("font-size", th().state.fontSize).attr("class", "state-title").text(i.descriptions[0]).node().getBBox(), g = s.height, p = e.append("text").attr("x", th().state.padding).attr(
    "y",
    g + th().state.padding * 0.4 + th().state.dividerMargin + th().state.textHeight
  ).attr("class", "state-description");
  let a = true, r = true;
  i.descriptions.forEach(function(c) {
    a || (o(p, c, r), r = false), a = false;
  });
  const w = e.append("line").attr("x1", th().state.padding).attr("y1", th().state.padding + g + th().state.dividerMargin / 2).attr("y2", th().state.padding + g + th().state.dividerMargin / 2).attr("class", "descr-divider"), x = p.node().getBBox(), l = Math.max(x.width, s.width);
  return w.attr("x2", l + 3 * th().state.padding), e.insert("rect", ":first-child").attr("x", th().state.padding).attr("y", th().state.padding).attr("width", l + 2 * th().state.padding).attr("height", x.height + g + 2 * th().state.padding).attr("rx", th().state.radius), e;
};
var K = (e, i, o) => {
  const d = th().state.padding, s = 2 * th().state.padding, g = e.node().getBBox(), p = g.width, a = g.x, r = e.append("text").attr("x", 0).attr("y", th().state.titleShift).attr("font-size", th().state.fontSize).attr("class", "state-title").text(i.id), x = r.node().getBBox().width + s;
  let l = Math.max(x, p);
  l === p && (l = l + s);
  let c;
  const m = e.node().getBBox();
  i.doc, c = a - d, x > p && (c = (p - l) / 2 + d), Math.abs(a - m.x) < d && x > p && (c = a - (x - p) / 2);
  const f = 1 - th().state.textHeight;
  return e.insert("rect", ":first-child").attr("x", c).attr("y", f).attr("class", o ? "alt-composit" : "composit").attr("width", l).attr(
    "height",
    m.height + th().state.textHeight + th().state.titleShift + 1
  ).attr("rx", "0"), r.attr("x", c + d), x <= p && r.attr("x", a + (l - s) / 2 - x / 2 + d), e.insert("rect", ":first-child").attr("x", c).attr(
    "y",
    th().state.titleShift - th().state.textHeight - th().state.padding
  ).attr("width", l).attr("height", th().state.textHeight * 3).attr("rx", th().state.radius), e.insert("rect", ":first-child").attr("x", c).attr(
    "y",
    th().state.titleShift - th().state.textHeight - th().state.padding
  ).attr("width", l).attr("height", m.height + 3 + 2 * th().state.textHeight).attr("rx", th().state.radius), e;
};
var Q = (e) => (e.append("circle").attr("class", "end-state-outer").attr("r", th().state.sizeUnit + th().state.miniPadding).attr(
  "cx",
  th().state.padding + th().state.sizeUnit + th().state.miniPadding
).attr(
  "cy",
  th().state.padding + th().state.sizeUnit + th().state.miniPadding
), e.append("circle").attr("class", "end-state-inner").attr("r", th().state.sizeUnit).attr("cx", th().state.padding + th().state.sizeUnit + 2).attr("cy", th().state.padding + th().state.sizeUnit + 2));
var V = (e, i) => {
  let o = th().state.forkWidth, d = th().state.forkHeight;
  if (i.parentId) {
    let s = o;
    o = d, d = s;
  }
  return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", o).attr("height", d).attr("x", th().state.padding).attr("y", th().state.padding);
};
var tt = (e, i, o, d) => {
  let s = 0;
  const g = d.append("text");
  g.style("text-anchor", "start"), g.attr("class", "noteText");
  let p = e.replace(/\r\n/g, "<br/>");
  p = p.replace(/\n/g, "<br/>");
  const a = p.split(ah.lineBreakRegex);
  let r = 1.25 * th().state.noteMargin;
  for (const w of a) {
    const x = w.trim();
    if (x.length > 0) {
      const l = g.append("tspan");
      if (l.text(x), r === 0) {
        const c = l.node().getBBox();
        r += c.height;
      }
      s += r, l.attr("x", i + th().state.noteMargin), l.attr("y", o + s + 1.25 * th().state.noteMargin);
    }
  }
  return { textWidth: g.node().getBBox().width, textHeight: s };
};
var et2 = (e, i) => {
  i.attr("class", "state-note");
  const o = i.append("rect").attr("x", 0).attr("y", th().state.padding), d = i.append("g"), { textWidth: s, textHeight: g } = tt(e, 0, 0, d);
  return o.attr("height", g + 2 * th().state.noteMargin), o.attr("width", s + th().state.noteMargin * 2), o;
};
var G = function(e, i) {
  const o = i.id, d = {
    id: o,
    label: i.id,
    width: 0,
    height: 0
  }, s = e.append("g").attr("id", o).attr("class", "stateGroup");
  i.type === "start" && q(s), i.type === "end" && Q(s), (i.type === "fork" || i.type === "join") && V(s, i), i.type === "note" && et2(i.note.text, s), i.type === "divider" && Z(s), i.type === "default" && i.descriptions.length === 0 && j(s, i), i.type === "default" && i.descriptions.length > 0 && D(s, i);
  const g = s.node().getBBox();
  return d.width = g.width + 2 * th().state.padding, d.height = g.height + 2 * th().state.padding, _.set(o, d), d;
};
var A2 = 0;
var at = function(e, i, o) {
  const d = function(r) {
    switch (r) {
      case Be.relationType.AGGREGATION:
        return "aggregation";
      case Be.relationType.EXTENSION:
        return "extension";
      case Be.relationType.COMPOSITION:
        return "composition";
      case Be.relationType.DEPENDENCY:
        return "dependency";
    }
  };
  i.points = i.points.filter((r) => !Number.isNaN(r.y));
  const s = i.points, g = z().x(function(r) {
    return r.x;
  }).y(function(r) {
    return r.y;
  }).curve(Ue), p = e.append("path").attr("d", g(s)).attr("id", "edge" + A2).attr("class", "transition");
  let a = "";
  if (th().state.arrowMarkerAbsolute && (a = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, a = a.replace(/\(/g, "\\("), a = a.replace(/\)/g, "\\)")), p.attr(
    "marker-end",
    "url(" + a + "#" + d(Be.relationType.DEPENDENCY) + "End)"
  ), o.title !== void 0) {
    const r = e.append("g").attr("class", "stateLabel"), { x: w, y: x } = fs.calcLabelPosition(i.points), l = ah.getRows(o.title);
    let c = 0;
    const m = [];
    let f = 0, S = 0;
    for (let u = 0; u <= l.length; u++) {
      const h = r.append("text").attr("text-anchor", "middle").text(l[u]).attr("x", w).attr("y", x + c), y = h.node().getBBox();
      f = Math.max(f, y.width), S = Math.min(S, y.x), et.info(y.x, w, x + c), c === 0 && (c = h.node().getBBox().height, et.info("Title height", c, x)), m.push(h);
    }
    let k = c * l.length;
    if (l.length > 1) {
      const u = (l.length - 1) * c * 0.5;
      m.forEach((h, y) => h.attr("y", x + y * c - u)), k = c * l.length;
    }
    const n = r.node().getBBox();
    r.insert("rect", ":first-child").attr("class", "box").attr("x", w - f / 2 - th().state.padding / 2).attr("y", x - k / 2 - th().state.padding / 2 - 3.5).attr("width", f + th().state.padding).attr("height", k + th().state.padding), et.info(n);
  }
  A2++;
};
var B;
var z2 = {};
var it = function() {
};
var nt = function(e) {
  e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
};
var st = function(e, i, o, d) {
  B = th().state;
  const s = th().securityLevel;
  let g;
  s === "sandbox" && (g = nh("#i" + i));
  const p = s === "sandbox" ? nh(g.nodes()[0].contentDocument.body) : nh("body"), a = s === "sandbox" ? g.nodes()[0].contentDocument : document;
  et.debug("Rendering diagram " + e);
  const r = p.select(`[id='${i}']`);
  nt(r), new A({
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    rankdir: "RL"
    // ranksep: '20'
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  const x = d.db.getRootDoc();
  W(x, r, void 0, false, p, a, d);
  const l = B.padding, c = r.node().getBBox(), m = c.width + l * 2, f = c.height + l * 2, S = m * 1.75;
  $(r, f, S, B.useMaxWidth), r.attr(
    "viewBox",
    `${c.x - B.padding}  ${c.y - B.padding} ` + m + " " + f
  );
};
var rt = (e) => e ? e.length * B.fontSizeFactor : 1;
var W = (e, i, o, d, s, g, p) => {
  const a = new A({
    compound: true,
    multigraph: true
  });
  let r, w = true;
  for (r = 0; r < e.length; r++)
    if (e[r].stmt === "relation") {
      w = false;
      break;
    }
  o ? a.setGraph({
    rankdir: "LR",
    multigraph: true,
    compound: true,
    // acyclicer: 'greedy',
    ranker: "tight-tree",
    ranksep: w ? 1 : B.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    isMultiGraph: true
    // ranksep: 5,
    // nodesep: 1
  }) : a.setGraph({
    rankdir: "TB",
    multigraph: true,
    compound: true,
    // isCompound: true,
    // acyclicer: 'greedy',
    // ranker: 'longest-path'
    ranksep: w ? 1 : B.edgeLengthFactor,
    nodeSep: w ? 1 : 50,
    ranker: "tight-tree",
    // ranker: 'network-simplex'
    isMultiGraph: true
  }), a.setDefaultEdgeLabel(function() {
    return {};
  }), p.db.extract(e);
  const x = p.db.getStates(), l = p.db.getRelations(), c = Object.keys(x);
  for (const n of c) {
    const u = x[n];
    o && (u.parentId = o);
    let h;
    if (u.doc) {
      let y = i.append("g").attr("id", u.id).attr("class", "stateGroup");
      h = W(u.doc, y, u.id, !d, s, g, p);
      {
        y = K(y, u, d);
        let E = y.node().getBBox();
        h.width = E.width, h.height = E.height + B.padding / 2, z2[u.id] = { y: B.compositTitleSize };
      }
    } else
      h = G(i, u);
    if (u.note) {
      const y = {
        descriptions: [],
        id: u.id + "-note",
        note: u.note,
        type: "note"
      }, E = G(i, y);
      u.note.position === "left of" ? (a.setNode(h.id + "-note", E), a.setNode(h.id, h)) : (a.setNode(h.id, h), a.setNode(h.id + "-note", E)), a.setParent(h.id, h.id + "-group"), a.setParent(h.id + "-note", h.id + "-group");
    } else
      a.setNode(h.id, h);
  }
  et.debug("Count=", a.nodeCount(), a);
  let m = 0;
  l.forEach(function(n) {
    m++, et.debug("Setting edge", n), a.setEdge(
      n.id1,
      n.id2,
      {
        relation: n,
        width: rt(n.title),
        height: B.labelHeight * ah.getRows(n.title).length,
        labelpos: "c"
      },
      "id" + m
    );
  }), ks(a), et.debug("Graph after layout", a.nodes());
  const f = i.node();
  a.nodes().forEach(function(n) {
    n !== void 0 && a.node(n) !== void 0 ? (et.warn("Node " + n + ": " + JSON.stringify(a.node(n))), s.select("#" + f.id + " #" + n).attr(
      "transform",
      "translate(" + (a.node(n).x - a.node(n).width / 2) + "," + (a.node(n).y + (z2[n] ? z2[n].y : 0) - a.node(n).height / 2) + " )"
    ), s.select("#" + f.id + " #" + n).attr("data-x-shift", a.node(n).x - a.node(n).width / 2), g.querySelectorAll("#" + f.id + " #" + n + " .divider").forEach((h) => {
      const y = h.parentElement;
      let E = 0, M = 0;
      y && (y.parentElement && (E = y.parentElement.getBBox().width), M = parseInt(y.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), h.setAttribute("x1", 0 - M + 8), h.setAttribute("x2", E - M - 8);
    })) : et.debug("No Node " + n + ": " + JSON.stringify(a.node(n)));
  });
  let S = f.getBBox();
  a.edges().forEach(function(n) {
    n !== void 0 && a.edge(n) !== void 0 && (et.debug("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(a.edge(n))), at(i, a.edge(n), a.edge(n).relation));
  }), S = f.getBBox();
  const k = {
    id: o || "root",
    label: o || "root",
    width: 0,
    height: 0
  };
  return k.width = S.width + 2 * B.padding, k.height = S.height + 2 * B.padding, et.debug("Doc rendered", k, a), k;
};
var ot = {
  setConf: it,
  draw: st
};
var mt = {
  parser: Re,
  db: Be,
  renderer: ot,
  styles: $e,
  init: (e) => {
    e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute, Be.clear();
  }
};
export {
  mt as diagram
};
//# sourceMappingURL=stateDiagram-4e5e77ae-CBRI7I5N.js.map
