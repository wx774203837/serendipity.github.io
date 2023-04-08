import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  fs,
  hs,
  ls,
  ss
} from "./chunk-BHKXDXK7.js";
import "./chunk-SEV54HLU.js";
import "./chunk-VJFQ4JEA.js";
import {
  et
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/mermaid.esm.min.mjs
function q(e) {
  for (var r = [], a = 1; a < arguments.length; a++)
    r[a - 1] = arguments[a];
  var t = Array.from(typeof e == "string" ? [e] : e);
  t[t.length - 1] = t[t.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var c = t.reduce(function(n, i) {
    var d = i.match(/\n([\t ]+|(?!\s).)/g);
    return d ? n.concat(d.map(function(p) {
      var f, l;
      return (l = (f = p.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && l !== void 0 ? l : 0;
    })) : n;
  }, []);
  if (c.length) {
    var g = new RegExp(`
[	 ]{` + Math.min.apply(Math, c) + "}", "g");
    t = t.map(function(n) {
      return n.replace(g, `
`);
    });
  }
  t[0] = t[0].replace(/^\r?\n/, "");
  var s = t[0];
  return r.forEach(function(n, i) {
    var d = s.match(/(?:^|\n)( *)$/), p = d ? d[1] : "", f = n;
    typeof n == "string" && n.includes(`
`) && (f = String(n).split(`
`).map(function(l, S) {
      return S === 0 ? l : "" + p + l;
    }).join(`
`)), s += f + t[i + 1];
  }), s;
}
var A = (e, r, a) => {
  et.warn(e), hs(e) ? (a && a(e.str, e.hash), r.push({ ...e, message: e.str, error: e })) : (a && a(e), e instanceof Error && r.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
};
var v = async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await M(e);
  } catch (r) {
    if (hs(r) && et.error(r.str), u.parseError && u.parseError(r), !e.suppressErrors)
      throw et.error("Use the suppressErrors option to suppress these errors"), r;
  }
};
var M = async function({ postRenderCallback: e, querySelector: r, nodes: a } = {
  querySelector: ".mermaid"
}) {
  const t = ws.getConfig();
  et.debug(`${e ? "" : "No "}Callback function found`);
  let c;
  if (a)
    c = a;
  else if (r)
    c = document.querySelectorAll(r);
  else
    throw new Error("Nodes and querySelector are both undefined");
  et.debug(`Found ${c.length} diagrams`), (t == null ? void 0 : t.startOnLoad) !== void 0 && (et.debug("Start On Load: " + (t == null ? void 0 : t.startOnLoad)), ws.updateSiteConfig({ startOnLoad: t == null ? void 0 : t.startOnLoad }));
  const g = new fs.initIdGenerator(t.deterministicIds, t.deterministicIDSeed);
  let s;
  const n = [];
  for (const i of Array.from(c)) {
    et.info("Rendering diagram: " + i.id);
    if (i.getAttribute("data-processed"))
      continue;
    i.setAttribute("data-processed", "true");
    const d = `mermaid-${g.next()}`;
    s = i.innerHTML, s = q(fs.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const p = fs.detectInit(s);
    p && et.debug("Detected early reinit: ", p);
    try {
      const { svg: f, bindFunctions: l } = await O(d, s, i);
      i.innerHTML = f, e && await e(d), l && l(i);
    } catch (f) {
      A(f, n, u.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
};
var L = function(e) {
  ws.initialize(e);
};
var C = async function(e, r, a) {
  et.warn("mermaid.init is deprecated. Please use run instead."), e && L(e);
  const t = { postRenderCallback: a, querySelector: ".mermaid" };
  typeof r == "string" ? t.querySelector = r : r && (r instanceof HTMLElement ? t.nodes = [r] : t.nodes = r), await v(t);
};
var I = async (e, {
  lazyLoad: r = true
} = {}) => {
  ss(...e), r === false && await ls();
};
var b = function() {
  if (u.startOnLoad) {
    const { startOnLoad: e } = ws.getConfig();
    e && u.run().catch((r) => et.error("Mermaid failed to initialize", r));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", b, false);
}
var T = function(e) {
  u.parseError = e;
};
var h = [];
var w = false;
var x = async () => {
  if (!w) {
    for (w = true; h.length > 0; ) {
      const e = h.shift();
      if (e)
        try {
          await e();
        } catch (r) {
          et.error("Error executing queue", r);
        }
    }
    w = false;
  }
};
var $ = async (e, r) => new Promise((a, t) => {
  const c = () => new Promise((g, s) => {
    ws.parse(e, r).then(
      (n) => {
        g(n), a(n);
      },
      (n) => {
        var i;
        et.error("Error parsing", n), (i = u.parseError) == null || i.call(u, n), s(n), t(n);
      }
    );
  });
  h.push(c), x().catch(t);
});
var O = (e, r, a) => new Promise((t, c) => {
  const g = () => new Promise((s, n) => {
    ws.render(e, r, a).then(
      (i) => {
        s(i), t(i);
      },
      (i) => {
        var d;
        et.error("Error parsing", i), (d = u.parseError) == null || d.call(u, i), n(i), c(i);
      }
    );
  });
  h.push(g), x().catch(c);
});
var u = {
  startOnLoad: true,
  mermaidAPI: ws,
  parse: $,
  render: O,
  init: C,
  run: v,
  registerExternalDiagrams: I,
  initialize: L,
  parseError: void 0,
  contentLoaded: b,
  setParseErrorHandler: T
};
export {
  u as default
};
/*! Bundled license information:

mermaid/dist/mermaid.esm.min.mjs:
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=@mermaid.js.map
