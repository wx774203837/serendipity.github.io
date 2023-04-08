import {
  Gt,
  Kt,
  Pt,
  R,
  ar,
  er,
  ir,
  rr,
  sr,
  tr,
  vt,
  w
} from "./chunk-T5SH2WB4.js";
import {
  A,
  dn,
  ks,
  x,
  y
} from "./chunk-4YVXMPIA.js";
import {
  _l,
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/index-e6caf2ad.js
var z = 4;
function K(e) {
  return dn(e, z);
}
function v(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: Q(e),
    edges: Z(e)
  };
  return x(e.graph()) || (t.value = K(e.graph())), t;
}
function Q(e) {
  return y(e.nodes(), function(t) {
    var n = e.node(t), r = e.parent(t), s = { v: t };
    return x(n) || (s.value = n), x(r) || (s.parent = r), s;
  });
}
function Z(e) {
  return y(e.edges(), function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return x(t.name) || (r.name = t.name), x(n) || (r.value = n), r;
  });
}
var d = {};
var x2 = {};
var L = {};
var I = () => {
  x2 = {}, L = {}, d = {};
};
var N = (e, t) => (et.trace("In isDecendant", t, " ", e, " = ", x2[t].includes(e)), !!x2[t].includes(e));
var tt = (e, t) => (et.info("Decendants of ", t, " is ", x2[t]), et.info("Edge is ", e), e.v === t || e.w === t ? false : x2[t] ? x2[t].includes(e.v) || N(e.v, t) || N(e.w, t) || x2[t].includes(e.w) : (et.debug("Tilt, ", t, ",not in decendants"), false));
var R2 = (e, t, n, r) => {
  et.warn(
    "Copying children of ",
    e,
    "root",
    r,
    "data",
    t.node(e),
    r
  );
  const s = t.children(e) || [];
  e !== r && s.push(e), et.warn("Copying (nodes) clusterId", e, "nodes", s), s.forEach((c) => {
    if (t.children(c).length > 0)
      R2(c, t, n, r);
    else {
      const f = t.node(c);
      et.info("cp ", c, " to ", r, " with parent ", e), n.setNode(c, f), r !== t.parent(c) && (et.warn("Setting parent", c, t.parent(c)), n.setParent(c, t.parent(c))), e !== r && c !== e ? (et.debug("Setting parent", c, e), n.setParent(c, e)) : (et.info("In copy ", e, "root", r, "data", t.node(e), r), et.debug(
        "Not Setting parent for node=",
        c,
        "cluster!==rootId",
        e !== r,
        "node!==clusterId",
        c !== e
      ));
      const l = t.edges(c);
      et.debug("Copying Edges", l), l.forEach((u) => {
        et.info("Edge", u);
        const h = t.edge(u.v, u.w, u.name);
        et.info("Edge data", h, r);
        try {
          tt(u, r) ? (et.info("Copying as ", u.v, u.w, h, u.name), n.setEdge(u.v, u.w, h, u.name), et.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : et.info(
            "Skipping copy of edge ",
            u.v,
            "-->",
            u.w,
            " rootId: ",
            r,
            " clusterId:",
            e
          );
        } catch (g) {
          et.error(g);
        }
      });
    }
    et.debug("Removing node", c), t.removeNode(c);
  });
};
var T = (e, t) => {
  const n = t.children(e);
  let r = [...n];
  for (const s of n)
    L[s] = e, r = [...r, ...T(s, t)];
  return r;
};
var b = (e, t) => {
  et.trace("Searching", e);
  const n = t.children(e);
  if (et.trace("Searching children of id ", e, n), n.length < 1)
    return et.trace("This is a valid node", e), e;
  for (const r of n) {
    const s = b(r, t);
    if (s)
      return et.trace("Found replacement for", e, " => ", s), s;
  }
};
var m = (e) => !d[e] || !d[e].externalConnections ? e : d[e] ? d[e].id : e;
var et2 = (e, t) => {
  if (!e || t > 10) {
    et.debug("Opting out, no graph ");
    return;
  } else
    et.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (et.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      b(n, e)
    ), x2[n] = T(n, e), d[n] = { id: b(n, e), clusterData: e.node(n) });
  }), e.nodes().forEach(function(n) {
    const r = e.children(n), s = e.edges();
    r.length > 0 ? (et.debug("Cluster identified", n, x2), s.forEach((c) => {
      if (c.v !== n && c.w !== n) {
        const f = N(c.v, n), l = N(c.w, n);
        f ^ l && (et.warn("Edge: ", c, " leaves cluster ", n), et.warn("Decendants of XXX ", n, ": ", x2[n]), d[n].externalConnections = true);
      }
    })) : et.debug("Not a cluster ", n, x2);
  }), e.edges().forEach(function(n) {
    const r = e.edge(n);
    et.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), et.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let s = n.v, c = n.w;
    if (et.warn(
      "Fix XXX",
      d,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      d[n.v],
      " --- ",
      d[n.w]
    ), d[n.v] && d[n.w] && d[n.v] === d[n.w]) {
      et.warn("Fixing and trixing link to self - removing XXX", n.v, n.w, n.name), et.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = m(n.v), c = m(n.w), e.removeEdge(n.v, n.w, n.name);
      const f = n.w + "---" + n.v;
      e.setNode(f, {
        domId: f,
        id: f,
        labelStyle: "",
        labelText: r.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const l = JSON.parse(JSON.stringify(r)), u = JSON.parse(JSON.stringify(r));
      l.label = "", l.arrowTypeEnd = "none", u.label = "", l.fromCluster = n.v, u.toCluster = n.v, e.setEdge(s, f, l, n.name + "-cyclic-special"), e.setEdge(f, c, u, n.name + "-cyclic-special");
    } else
      (d[n.v] || d[n.w]) && (et.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), s = m(n.v), c = m(n.w), e.removeEdge(n.v, n.w, n.name), s !== n.v && (r.fromCluster = n.v), c !== n.w && (r.toCluster = n.w), et.warn("Fix Replacing with XXX", s, c, n.name), e.setEdge(s, c, r, n.name));
  }), et.warn("Adjusted Graph", v(e)), P(e, 0), et.trace(d);
};
var P = (e, t) => {
  if (et.warn("extractor - ", t, v(e), e.children("D")), t > 10) {
    et.error("Bailing out");
    return;
  }
  let n = e.nodes(), r = false;
  for (const s of n) {
    const c = e.children(s);
    r = r || c.length > 0;
  }
  if (!r) {
    et.debug("Done, no node has children", e.nodes());
    return;
  }
  et.debug("Nodes = ", n, t);
  for (const s of n)
    if (et.debug(
      "Extracting node",
      s,
      d,
      d[s] && !d[s].externalConnections,
      !e.parent(s),
      e.node(s),
      e.children("D"),
      " Depth ",
      t
    ), !d[s])
      et.debug("Not a cluster", s, t);
    else if (!d[s].externalConnections && // !graph.parent(node) &&
    e.children(s) && e.children(s).length > 0) {
      et.warn(
        "Cluster without external connections, without a parent and with children",
        s,
        t
      );
      let f = e.graph().rankdir === "TB" ? "LR" : "TB";
      d[s] && d[s].clusterData && d[s].clusterData.dir && (f = d[s].clusterData.dir, et.warn("Fixing dir", d[s].clusterData.dir, f));
      const l = new A({
        multigraph: true,
        compound: true
      }).setGraph({
        rankdir: f,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      et.warn("Old graph before copy", v(e)), R2(s, e, l, s), e.setNode(s, {
        clusterNode: true,
        id: s,
        clusterData: d[s].clusterData,
        labelText: d[s].labelText,
        graph: l
      }), et.warn("New graph after copy node: (", s, ")", v(l)), et.debug("Old graph after copy", v(e));
    } else
      et.warn(
        "Cluster ** ",
        s,
        " **not meeting the criteria !externalConnections:",
        !d[s].externalConnections,
        " no parent: ",
        !e.parent(s),
        " children ",
        e.children(s) && e.children(s).length > 0,
        e.children("D"),
        t
      ), et.debug(d);
  n = e.nodes(), et.warn("New list of nodes", n);
  for (const s of n) {
    const c = e.node(s);
    et.warn(" Now next level", s, c), c.clusterNode && P(c.graph, t + 1);
  }
};
var p = (e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign(t);
  return t.forEach((r) => {
    const s = e.children(r), c = p(e, s);
    n = [...n, ...c];
  }), n;
};
var nt = (e) => p(e, e.children());
var it = (e, t) => {
  et.trace("Creating subgraph rect for ", t.id, t);
  const n = e.insert("g").attr("class", "cluster" + (t.class ? " " + t.class : "")).attr("id", t.id), r = n.insert("rect", ":first-child"), s = n.insert("g").attr("class", "cluster-label"), c = s.node().appendChild(R(t.labelText, t.labelStyle, void 0, true));
  let f = c.getBBox();
  if (_l(th().flowchart.htmlLabels)) {
    const a = c.children[0], o = nh(c);
    f = a.getBoundingClientRect(), o.attr("width", f.width), o.attr("height", f.height);
  }
  const l = 0 * t.padding, u = l / 2, h = t.width <= f.width + l ? f.width + l : t.width;
  t.width <= f.width + l ? t.diff = (f.width - t.width) / 2 - t.padding / 2 : t.diff = -t.padding / 2, et.trace("Data ", t, JSON.stringify(t)), r.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - h / 2).attr("y", t.y - t.height / 2 - u).attr("width", h).attr("height", t.height + l), s.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    // 'translate(' + (node.x - bbox.width / 2) + ', ' + (node.y - node.height / 2 - bbox.height) + ')'
    "translate(" + (t.x - f.width / 2) + ", " + (t.y - t.height / 2) + ")"
  );
  const g = r.node().getBBox();
  return t.width = g.width, t.height = g.height, t.intersect = function(a) {
    return vt(t, a);
  }, n;
};
var st = (e, t) => {
  const n = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, c = s / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - c).attr("y", t.y - t.height / 2 - c).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const f = r.node().getBBox();
  return t.width = f.width, t.height = f.height, t.intersect = function(l) {
    return vt(t, l);
  }, n;
};
var rt = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = n.insert("g").attr("class", "cluster-label"), c = n.append("rect"), f = s.node().appendChild(R(t.labelText, t.labelStyle, void 0, true));
  let l = f.getBBox();
  if (_l(th().flowchart.htmlLabels)) {
    const o = f.children[0], w2 = nh(f);
    l = o.getBoundingClientRect(), w2.attr("width", l.width), w2.attr("height", l.height);
  }
  l = f.getBBox();
  const u = 0 * t.padding, h = u / 2, g = t.width <= l.width + t.padding ? l.width + t.padding : t.width;
  t.width <= l.width + t.padding ? t.diff = (l.width + t.padding * 0 - t.width) / 2 : t.diff = -t.padding / 2, r.attr("class", "outer").attr("x", t.x - g / 2 - h).attr("y", t.y - t.height / 2 - h).attr("width", g + u).attr("height", t.height + u), c.attr("class", "inner").attr("x", t.x - g / 2 - h).attr("y", t.y - t.height / 2 - h + l.height - 1).attr("width", g + u).attr("height", t.height + u - l.height - 3), s.attr(
    "transform",
    "translate(" + (t.x - l.width / 2) + ", " + (t.y - t.height / 2 - t.padding / 3 + (_l(th().flowchart.htmlLabels) ? 5 : 3)) + ")"
  );
  const a = r.node().getBBox();
  return t.height = a.height, t.intersect = function(o) {
    return vt(t, o);
  }, n;
};
var ct = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), s = 0 * t.padding, c = s / 2;
  r.attr("class", "divider").attr("x", t.x - t.width / 2 - c).attr("y", t.y - t.height / 2).attr("width", t.width + s).attr("height", t.height + s);
  const f = r.node().getBBox();
  return t.width = f.width, t.height = f.height, t.diff = -t.padding / 2, t.intersect = function(l) {
    return vt(t, l);
  }, n;
};
var at = { rect: it, roundedWithTitle: rt, noteGroup: st, divider: ct };
var F = {};
var ot = (e, t) => {
  et.trace("Inserting cluster");
  const n = t.shape || "rect";
  F[t.id] = at[n](e, t);
};
var lt = () => {
  F = {};
};
var k = (e, t, n, r) => {
  et.info("Graph in recursive render: XXX", v(t), r);
  const s = t.graph().rankdir;
  et.trace("Dir in recursive render - dir:", s);
  const c = e.insert("g").attr("class", "root");
  t.nodes() ? et.info("Recursive render XXX", t.nodes()) : et.info("No nodes found for", t), t.edges().length > 0 && et.trace("Recursive edges", t.edge(t.edges()[0]));
  const f = c.insert("g").attr("class", "clusters"), l = c.insert("g").attr("class", "edgePaths"), u = c.insert("g").attr("class", "edgeLabels"), h = c.insert("g").attr("class", "nodes");
  t.nodes().forEach(function(a) {
    const o = t.node(a);
    if (r !== void 0) {
      const w2 = JSON.parse(JSON.stringify(r.clusterData));
      et.info("Setting data for cluster XXX (", a, ") ", w2, r), t.setNode(r.id, w2), t.parent(a) || (et.trace("Setting parent", a, r.id), t.setParent(a, r.id, w2));
    }
    if (et.info("(Insert) Node XXX" + a + ": " + JSON.stringify(t.node(a))), o && o.clusterNode) {
      et.info("Cluster identified", a, o.width, t.node(a));
      const w2 = k(h, o.graph, n, t.node(a)), S = w2.elem;
      w(o, S), o.diff = w2.diff || 0, et.info("Node bounds (abc123)", a, o, o.width, o.x, o.y), Pt(S, o), et.warn("Recursive render complete ", S, o);
    } else
      t.children(a).length > 0 ? (et.info("Cluster - the non recursive path XXX", a, o.id, o, t), et.info(b(o.id, t)), d[o.id] = { id: b(o.id, t), node: o }) : (et.info("Node - the non recursive path", a, o.id, o), Gt(h, t.node(a), s));
  }), t.edges().forEach(function(a) {
    const o = t.edge(a.v, a.w, a.name);
    et.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(a)), et.info("Edge " + a.v + " -> " + a.w + ": ", a, " ", JSON.stringify(t.edge(a))), et.info("Fix", d, "ids:", a.v, a.w, "Translateing: ", d[a.v], d[a.w]), er(u, o);
  }), t.edges().forEach(function(a) {
    et.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(a));
  }), et.info("#############################################"), et.info("###                Layout                 ###"), et.info("#############################################"), et.info(t), ks(t), et.info("Graph after layout:", v(t));
  let g = 0;
  return nt(t).forEach(function(a) {
    const o = t.node(a);
    et.info("Position " + a + ": " + JSON.stringify(t.node(a))), et.info(
      "Position " + a + ": (" + o.x,
      "," + o.y,
      ") width: ",
      o.width,
      " height: ",
      o.height
    ), o && o.clusterNode ? rr(o) : t.children(a).length > 0 ? (ot(f, o), d[o.id].node = o) : rr(o);
  }), t.edges().forEach(function(a) {
    const o = t.edge(a);
    et.info("Edge " + a.v + " -> " + a.w + ": " + JSON.stringify(o), o);
    const w2 = ir(l, a, o, d, n, t);
    sr(o, w2);
  }), t.nodes().forEach(function(a) {
    const o = t.node(a);
    et.info(a, o.type, o.diff), o.type === "group" && (g = o.diff);
  }), { elem: c, diff: g };
};
var ht = (e, t, n, r, s) => {
  Kt(e, n, r, s), tr(), ar(), lt(), I(), et.warn("Graph at first:", v(t)), et2(t), et.warn("Graph after:", v(t)), k(e, t, r);
};

export {
  ht
};
//# sourceMappingURL=chunk-J7SWTDBV.js.map
