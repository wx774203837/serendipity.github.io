import {
  $e,
  Be,
  Re,
  Rt,
  Tt,
  ee,
  re,
  we,
  xt
} from "./chunk-HOMF2E2C.js";
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

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/stateDiagram-v2-a936b277.js
var h = "rect";
var C = "rectWithTitle";
var it = "start";
var rt = "end";
var lt = "divider";
var at = "roundedWithTitle";
var dt = "note";
var Et = "noteGroup";
var p = "statediagram";
var St = "state";
var Tt2 = `${p}-${St}`;
var V = "transition";
var pt = "note";
var _t = "note-edge";
var ft = `${V} ${_t}`;
var ut = `${p}-${pt}`;
var Dt = "cluster";
var At = `${p}-${Dt}`;
var bt = "cluster-alt";
var ht2 = `${p}-${bt}`;
var m = "parent";
var Y = "note";
var yt = "state";
var N = "----";
var gt = `${N}${Y}`;
var H = `${N}${m}`;
var W = "fill:none";
var z = "fill: #333";
var q = "c";
var K = "text";
var F = "normal";
var y = {};
var E = 0;
var Rt2 = function(t) {
  const n = Object.keys(t);
  for (const o of n)
    t[o];
};
var xt2 = function(t, n) {
  et.trace("Extracting classes"), n.db.clear();
  try {
    return n.parser.parse(t), n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
  } catch (o) {
    return o;
  }
};
function Ct(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function $2(t = "", n = 0, o = "", c = N) {
  const i = o !== null && o.length > 0 ? `${c}${o}` : "";
  return `${yt}-${t}${i}-${n}`;
}
var D = (t, n, o, c, i, r) => {
  const e = o.id, _ = Ct(c[e]);
  if (e !== "root") {
    let T = h;
    o.start === true && (T = it), o.start === false && (T = rt), o.type !== xt && (T = o.type), y[e] || (y[e] = {
      id: e,
      shape: T,
      description: ah.sanitizeText(e, th()),
      classes: `${_} ${Tt2}`
    });
    const s = y[e];
    o.description && (Array.isArray(s.description) ? (s.shape = C, s.description.push(o.description)) : s.description.length > 0 ? (s.shape = C, s.description === e ? s.description = [o.description] : s.description = [s.description, o.description]) : (s.shape = h, s.description = o.description), s.description = ah.sanitizeTextOrArray(s.description, th())), s.description.length === 1 && s.shape === C && (s.shape = h), !s.type && o.doc && (et.info("Setting cluster for ", e, w(o)), s.type = "group", s.dir = w(o), s.shape = o.type === re ? lt : at, s.classes = s.classes + " " + At + " " + (r ? ht2 : ""));
    const f = {
      labelStyle: "",
      shape: s.shape,
      labelText: s.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: s.classes,
      style: "",
      //styles.style,
      id: e,
      dir: s.dir,
      domId: $2(e, E),
      type: s.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (o.note) {
      const d = {
        labelStyle: "",
        shape: dt,
        labelText: o.note.text,
        classes: ut,
        style: "",
        // styles.style,
        id: e + gt + "-" + E,
        domId: $2(e, E, Y),
        type: s.type,
        padding: 15
        //getConfig().flowchart.padding
      }, A2 = {
        labelStyle: "",
        shape: Et,
        labelText: o.note.text,
        classes: s.classes,
        style: "",
        // styles.style,
        id: e + H,
        domId: $2(e, E, m),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      E++;
      const l = e + H;
      t.setNode(l, A2), t.setNode(d.id, d), t.setNode(e, f), t.setParent(e, l), t.setParent(d.id, l);
      let b = e, S = d.id;
      o.note.position === "left of" && (b = d.id, S = e), t.setEdge(b, S, {
        arrowhead: "none",
        arrowType: "",
        style: W,
        labelStyle: "",
        classes: ft,
        arrowheadStyle: z,
        labelpos: q,
        labelType: K,
        thickness: F
      });
    } else
      t.setNode(e, f);
  }
  n && n.id !== "root" && (et.trace("Setting node ", e, " to be child of its parent ", n.id), t.setParent(e, n.id)), o.doc && (et.trace("Adding nodes children "), $t(t, o, o.doc, c, i, !r));
};
var $t = (t, n, o, c, i, r) => {
  et.trace("items", o), o.forEach((e) => {
    switch (e.stmt) {
      case Tt:
        D(t, n, e, c, i, r);
        break;
      case xt:
        D(t, n, e, c, i, r);
        break;
      case Rt:
        {
          D(t, n, e.state1, c, i, r), D(t, n, e.state2, c, i, r);
          const _ = {
            id: "edge" + E,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: W,
            labelStyle: "",
            label: ah.sanitizeText(e.description, th()),
            arrowheadStyle: z,
            labelpos: q,
            labelType: K,
            thickness: F,
            classes: V
          };
          t.setEdge(e.state1.id, e.state2.id, _, E), E++;
        }
        break;
    }
  });
};
var w = (t, n = we) => {
  let o = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (o = i.value);
    }
  return o;
};
var Gt = function(t, n, o, c) {
  et.info("Drawing state diagram (v2)", n), y = {};
  let i = c.db.getDirection();
  i === void 0 && (i = ee);
  const { securityLevel: r, state: e } = th(), _ = e.nodeSpacing || 50, T = e.rankSpacing || 50;
  et.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), et.info(c.db.getRootDocV2());
  const s = c.db.getStates(), f = new A({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: w(c.db.getRootDocV2()),
    nodesep: _,
    ranksep: T,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  D(f, void 0, c.db.getRootDocV2(), s, c.db, true);
  let d;
  r === "sandbox" && (d = nh("#i" + n));
  const A2 = r === "sandbox" ? nh(d.nodes()[0].contentDocument.body) : nh("body"), l = A2.select(`[id="${n}"]`), b = A2.select("#" + n + " g");
  ht(b, f, ["barb"], p, n);
  const S = 8;
  fs.insertTitle(l, "statediagramTitleText", e.titleTopMargin, c.db.getDiagramTitle());
  const L = l.node().getBBox(), P = L.width + S * 2, O = L.height + S * 2;
  l.attr("class", p);
  const k = l.node().getBBox();
  $(l, O, P, e.useMaxWidth);
  const M = `${k.x - S} ${k.y - S} ${P} ${O}`;
  et.debug(`viewBox ${M}`), l.attr("viewBox", M);
  const J = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const R of J) {
    const B = R.getBBox(), u = document.createElementNS("http://www.w3.org/2000/svg", h);
    u.setAttribute("rx", 0), u.setAttribute("ry", 0), u.setAttribute("width", B.width), u.setAttribute("height", B.height), R.insertBefore(u, R.firstChild);
  }
};
var wt = {
  setConf: Rt2,
  getClasses: xt2,
  draw: Gt
};
var zt = {
  parser: Re,
  db: Be,
  renderer: wt,
  styles: $e,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, Be.clear();
  }
};
export {
  zt as diagram
};
//# sourceMappingURL=stateDiagram-v2-a936b277-XGURV5U3.js.map
