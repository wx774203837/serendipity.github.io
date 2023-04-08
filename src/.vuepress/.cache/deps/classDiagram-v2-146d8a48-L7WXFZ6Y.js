import {
  St,
  Tt,
  yt
} from "./chunk-HCAWNQRS.js";
import {
  ht
} from "./chunk-J7SWTDBV.js";
import "./chunk-T5SH2WB4.js";
import "./chunk-LXOXGOW4.js";
import {
  A
} from "./chunk-4YVXMPIA.js";
import "./chunk-ZBFL4OS2.js";
import "./chunk-MAFLJJKP.js";
import "./chunk-WC7ESL3H.js";
import "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  Be,
  Io,
  To,
  fs
} from "./chunk-BHKXDXK7.js";
import {
  w
} from "./chunk-SEV54HLU.js";
import "./chunk-VJFQ4JEA.js";
import {
  ah,
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/classDiagram-v2-146d8a48.js
var A2 = (l) => ah.sanitizeText(l, th());
var S = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var $ = function(l, o, b, a) {
  const e = Object.keys(l);
  et.info("keys:", e), et.info(l), e.forEach(function(s) {
    var y, m;
    const t = l[s];
    let i = "";
    t.cssClasses.length > 0 && (i = i + " " + t.cssClasses.join(" "));
    const n = { labelStyle: "", style: "" }, f = t.label ?? t.id, c = 0, u = "class_box", d = {
      labelStyle: n.labelStyle,
      shape: u,
      labelText: A2(f),
      classData: t,
      rx: c,
      ry: c,
      class: i,
      style: n.style,
      id: t.id,
      domId: t.domId,
      tooltip: a.db.getTooltip(t.id) || "",
      haveCallback: t.haveCallback,
      link: t.link,
      width: t.type === "group" ? 500 : void 0,
      type: t.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = th().flowchart) == null ? void 0 : y.padding) ?? ((m = th().class) == null ? void 0 : m.padding)
    };
    o.setNode(t.id, d), et.info("setNode", d);
  });
};
var q = function(l, o, b, a) {
  et.info(l), l.forEach(function(e, s) {
    var x, h;
    const t = e, i = "", n = { labelStyle: "", style: "" }, f = t.text, c = 0, u = "note", d = {
      labelStyle: n.labelStyle,
      shape: u,
      labelText: A2(f),
      noteData: t,
      rx: c,
      ry: c,
      class: i,
      style: n.style,
      id: t.id,
      domId: t.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((x = th().flowchart) == null ? void 0 : x.padding) ?? ((h = th().class) == null ? void 0 : h.padding)
    };
    if (o.setNode(t.id, d), et.info("setNode", d), !t.class || !(t.class in a))
      return;
    const y = b + s, m = {
      id: `edgeNote${y}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: To(S.curve, Be)
    };
    o.setEdge(t.id, t.class, m, y);
  });
};
var F = function(l, o) {
  const b = th().flowchart;
  let a = 0;
  l.forEach(function(e) {
    var t;
    a++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + a,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: L(e.relation.type1),
      arrowTypeEnd: L(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: To(b == null ? void 0 : b.curve, Be)
    };
    if (et.info(s, e), e.style !== void 0) {
      const i = Io(e.style);
      s.style = i.style, s.labelStyle = i.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((t = th().flowchart) == null ? void 0 : t.htmlLabels) ?? th().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(ah.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), o.setEdge(e.id1, e.id2, s, a);
  });
};
var H = function(l) {
  S = {
    ...S,
    ...l
  };
};
var P = function(l, o, b, a) {
  et.info("Drawing class - ", o);
  const e = th().flowchart ?? th().class, s = th().securityLevel;
  et.info("config:", e);
  const t = (e == null ? void 0 : e.nodeSpacing) ?? 50, i = (e == null ? void 0 : e.rankSpacing) ?? 50, n = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: a.db.getDirection(),
    nodesep: t,
    ranksep: i,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), f = a.db.getClasses(), c = a.db.getRelations(), u = a.db.getNotes();
  et.info(c), $(f, n, o, a), F(c, n), q(u, n, c.length + 1, f);
  let d;
  s === "sandbox" && (d = nh("#i" + o));
  const y = s === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    nh(d.nodes()[0].contentDocument.body)
  ) : nh("body"), m = y.select(`[id="${o}"]`), x = y.select("#" + o + " g");
  if (ht(
    x,
    n,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    o
  ), fs.insertTitle(m, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, a.db.getDiagramTitle()), w(n, m, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const h = s === "sandbox" ? d.nodes()[0].contentDocument : document, N = h.querySelectorAll('[id="' + o + '"] .edgeLabel .label');
    for (const w2 of N) {
      const T = w2.getBBox(), g = h.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", T.width), g.setAttribute("height", T.height), w2.insertBefore(g, w2.firstChild);
    }
  }
};
function L(l) {
  let o;
  switch (l) {
    case 0:
      o = "aggregation";
      break;
    case 1:
      o = "extension";
      break;
    case 2:
      o = "composition";
      break;
    case 3:
      o = "dependency";
      break;
    case 4:
      o = "lollipop";
      break;
    default:
      o = "none";
  }
  return o;
}
var V = {
  setConf: H,
  draw: P
};
var le = {
  parser: yt,
  db: Tt,
  renderer: V,
  styles: St,
  init: (l) => {
    l.class || (l.class = {}), l.class.arrowMarkerAbsolute = l.arrowMarkerAbsolute, Tt.clear();
  }
};
export {
  le as diagram
};
//# sourceMappingURL=classDiagram-v2-146d8a48-L7WXFZ6Y.js.map
