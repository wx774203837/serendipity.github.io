import {
  hn
} from "./chunk-LP5BNPEC.js";
import "./chunk-WC7ESL3H.js";
import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import "./chunk-BHKXDXK7.js";
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
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/journeyDiagram-48369403.js
var K = function() {
  var e = function(_, n, a2, h) {
    for (a2 = a2 || {}, h = _.length; h--; a2[_[h]] = n)
      ;
    return a2;
  }, t = [1, 2], i2 = [1, 5], r2 = [6, 9, 11, 17, 18, 20, 22, 23, 24, 26], s2 = [1, 15], o = [1, 16], l2 = [1, 17], y = [1, 18], u2 = [1, 19], x = [1, 20], g2 = [1, 24], f = [4, 6, 9, 11, 17, 18, 20, 22, 23, 24, 26], p = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, journey: 4, document: 5, EOF: 6, directive: 7, line: 8, SPACE: 9, statement: 10, NEWLINE: 11, openDirective: 12, typeDirective: 13, closeDirective: 14, ":": 15, argDirective: 16, title: 17, acc_title: 18, acc_title_value: 19, acc_descr: 20, acc_descr_value: 21, acc_descr_multiline_value: 22, section: 23, taskName: 24, taskData: 25, open_directive: 26, type_directive: 27, arg_directive: 28, close_directive: 29, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "journey", 6: "EOF", 9: "SPACE", 11: "NEWLINE", 15: ":", 17: "title", 18: "acc_title", 19: "acc_title_value", 20: "acc_descr", 21: "acc_descr_value", 22: "acc_descr_multiline_value", 23: "section", 24: "taskName", 25: "taskData", 26: "open_directive", 27: "type_directive", 28: "arg_directive", 29: "close_directive" },
    productions_: [0, [3, 3], [3, 2], [5, 0], [5, 2], [8, 2], [8, 1], [8, 1], [8, 1], [7, 4], [7, 6], [10, 1], [10, 2], [10, 2], [10, 1], [10, 1], [10, 2], [10, 1], [12, 1], [13, 1], [16, 1], [14, 1]],
    performAction: function(n, a2, h, d, m, c, R) {
      var k = c.length - 1;
      switch (m) {
        case 1:
          return c[k - 1];
        case 3:
          this.$ = [];
          break;
        case 4:
          c[k - 1].push(c[k]), this.$ = c[k - 1];
          break;
        case 5:
        case 6:
          this.$ = c[k];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 11:
          d.setDiagramTitle(c[k].substr(6)), this.$ = c[k].substr(6);
          break;
        case 12:
          this.$ = c[k].trim(), d.setAccTitle(this.$);
          break;
        case 13:
        case 14:
          this.$ = c[k].trim(), d.setAccDescription(this.$);
          break;
        case 15:
          d.addSection(c[k].substr(8)), this.$ = c[k].substr(8);
          break;
        case 16:
          d.addTask(c[k - 1], c[k]), this.$ = "task";
          break;
        case 18:
          d.parseDirective("%%{", "open_directive");
          break;
        case 19:
          d.parseDirective(c[k], "type_directive");
          break;
        case 20:
          c[k] = c[k].trim().replace(/'/g, '"'), d.parseDirective(c[k], "arg_directive");
          break;
        case 21:
          d.parseDirective("}%%", "close_directive", "journey");
          break;
      }
    },
    table: [{ 3: 1, 4: t, 7: 3, 12: 4, 26: i2 }, { 1: [3] }, e(r2, [2, 3], { 5: 6 }), { 3: 7, 4: t, 7: 3, 12: 4, 26: i2 }, { 13: 8, 27: [1, 9] }, { 27: [2, 18] }, { 6: [1, 10], 7: 21, 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: 4, 17: s2, 18: o, 20: l2, 22: y, 23: u2, 24: x, 26: i2 }, { 1: [2, 2] }, { 14: 22, 15: [1, 23], 29: g2 }, e([15, 29], [2, 19]), e(r2, [2, 8], { 1: [2, 1] }), e(r2, [2, 4]), { 7: 21, 10: 25, 12: 4, 17: s2, 18: o, 20: l2, 22: y, 23: u2, 24: x, 26: i2 }, e(r2, [2, 6]), e(r2, [2, 7]), e(r2, [2, 11]), { 19: [1, 26] }, { 21: [1, 27] }, e(r2, [2, 14]), e(r2, [2, 15]), { 25: [1, 28] }, e(r2, [2, 17]), { 11: [1, 29] }, { 16: 30, 28: [1, 31] }, { 11: [2, 21] }, e(r2, [2, 5]), e(r2, [2, 12]), e(r2, [2, 13]), e(r2, [2, 16]), e(f, [2, 9]), { 14: 32, 29: g2 }, { 29: [2, 20] }, { 11: [1, 33] }, e(f, [2, 10])],
    defaultActions: { 5: [2, 18], 7: [2, 2], 24: [2, 21], 31: [2, 20] },
    parseError: function(n, a2) {
      if (a2.recoverable)
        this.trace(n);
      else {
        var h = new Error(n);
        throw h.hash = a2, h;
      }
    },
    parse: function(n) {
      var a2 = this, h = [0], d = [], m = [null], c = [], R = this.table, k = "", z = 0, tt = 0, yt = 2, et = 1, pt = c.slice.call(arguments, 1), b = Object.create(this.lexer), I = { yy: {} };
      for (var X in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, X) && (I.yy[X] = this.yy[X]);
      b.setInput(n, I.yy), I.yy.lexer = b, I.yy.parser = this, typeof b.yylloc > "u" && (b.yylloc = {});
      var G = b.yylloc;
      c.push(G);
      var dt = b.options && b.options.ranges;
      typeof I.yy.parseError == "function" ? this.parseError = I.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ft() {
        var E;
        return E = d.pop() || b.lex() || et, typeof E != "number" && (E instanceof Array && (d = E, E = d.pop()), E = a2.symbols_[E] || E), E;
      }
      for (var w, A, M, H, F = {}, Y, $2, it, q; ; ) {
        if (A = h[h.length - 1], this.defaultActions[A] ? M = this.defaultActions[A] : ((w === null || typeof w > "u") && (w = ft()), M = R[A] && R[A][w]), typeof M > "u" || !M.length || !M[0]) {
          var U = "";
          q = [];
          for (Y in R[A])
            this.terminals_[Y] && Y > yt && q.push("'" + this.terminals_[Y] + "'");
          b.showPosition ? U = "Parse error on line " + (z + 1) + `:
` + b.showPosition() + `
Expecting ` + q.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : U = "Parse error on line " + (z + 1) + ": Unexpected " + (w == et ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(U, {
            text: b.match,
            token: this.terminals_[w] || w,
            line: b.yylineno,
            loc: G,
            expected: q
          });
        }
        if (M[0] instanceof Array && M.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + w);
        switch (M[0]) {
          case 1:
            h.push(w), m.push(b.yytext), c.push(b.yylloc), h.push(M[1]), w = null, tt = b.yyleng, k = b.yytext, z = b.yylineno, G = b.yylloc;
            break;
          case 2:
            if ($2 = this.productions_[M[1]][1], F.$ = m[m.length - $2], F._$ = {
              first_line: c[c.length - ($2 || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - ($2 || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, dt && (F._$.range = [
              c[c.length - ($2 || 1)].range[0],
              c[c.length - 1].range[1]
            ]), H = this.performAction.apply(F, [
              k,
              tt,
              z,
              I.yy,
              M[1],
              m,
              c
            ].concat(pt)), typeof H < "u")
              return H;
            $2 && (h = h.slice(0, -1 * $2 * 2), m = m.slice(0, -1 * $2), c = c.slice(0, -1 * $2)), h.push(this.productions_[M[1]][0]), m.push(F.$), c.push(F._$), it = R[h[h.length - 2]][h[h.length - 1]], h.push(it);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, T = function() {
    var _ = {
      EOF: 1,
      parseError: function(a2, h) {
        if (this.yy.parser)
          this.yy.parser.parseError(a2, h);
        else
          throw new Error(a2);
      },
      // resets the lexer, sets new input
      setInput: function(n, a2) {
        return this.yy = a2 || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var n = this._input[0];
        this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n;
        var a2 = n.match(/(?:\r\n?|\n).*/g);
        return a2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), n;
      },
      // unshifts one char (or a string) into the input
      unput: function(n) {
        var a2 = n.length, h = n.split(/(?:\r\n?|\n)/g);
        this._input = n + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a2), this.offset -= a2;
        var d = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), h.length - 1 && (this.yylineno -= h.length - 1);
        var m = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: h ? (h.length === d.length ? this.yylloc.first_column : 0) + d[d.length - h.length].length - h[0].length : this.yylloc.first_column - a2
        }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - a2]), this.yyleng = this.yytext.length, this;
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
      less: function(n) {
        this.unput(this.match.slice(n));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var n = this.matched.substr(0, this.matched.length - this.match.length);
        return (n.length > 20 ? "..." : "") + n.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var n = this.match;
        return n.length < 20 && (n += this._input.substr(0, 20 - n.length)), (n.substr(0, 20) + (n.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var n = this.pastInput(), a2 = new Array(n.length + 1).join("-");
        return n + this.upcomingInput() + `
` + a2 + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(n, a2) {
        var h, d, m;
        if (this.options.backtrack_lexer && (m = {
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
        }, this.options.ranges && (m.yylloc.range = this.yylloc.range.slice(0))), d = n[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
        }, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(n[0].length), this.matched += n[0], h = this.performAction.call(this, this.yy, this, a2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), h)
          return h;
        if (this._backtrack) {
          for (var c in m)
            this[c] = m[c];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var n, a2, h, d;
        this._more || (this.yytext = "", this.match = "");
        for (var m = this._currentRules(), c = 0; c < m.length; c++)
          if (h = this._input.match(this.rules[m[c]]), h && (!a2 || h[0].length > a2[0].length)) {
            if (a2 = h, d = c, this.options.backtrack_lexer) {
              if (n = this.test_match(h, m[c]), n !== false)
                return n;
              if (this._backtrack) {
                a2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a2 ? (n = this.test_match(a2, m[d]), n !== false ? n : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var a2 = this.next();
        return a2 || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(a2) {
        this.conditionStack.push(a2);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var a2 = this.conditionStack.length - 1;
        return a2 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(a2) {
        return a2 = this.conditionStack.length - 1 - Math.abs(a2 || 0), a2 >= 0 ? this.conditionStack[a2] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(a2) {
        this.begin(a2);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(a2, h, d, m) {
        switch (d) {
          case 0:
            return this.begin("open_directive"), 26;
          case 1:
            return this.begin("type_directive"), 27;
          case 2:
            return this.popState(), this.begin("arg_directive"), 15;
          case 3:
            return this.popState(), this.popState(), 29;
          case 4:
            return 28;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 11;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return 4;
          case 11:
            return 17;
          case 12:
            return this.begin("acc_title"), 18;
          case 13:
            return this.popState(), "acc_title_value";
          case 14:
            return this.begin("acc_descr"), 20;
          case 15:
            return this.popState(), "acc_descr_value";
          case 16:
            this.begin("acc_descr_multiline");
            break;
          case 17:
            this.popState();
            break;
          case 18:
            return "acc_descr_multiline_value";
          case 19:
            return 23;
          case 20:
            return 24;
          case 21:
            return 25;
          case 22:
            return 15;
          case 23:
            return 6;
          case 24:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:journey\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { open_directive: { rules: [1], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, acc_descr_multiline: { rules: [17, 18], inclusive: false }, acc_descr: { rules: [15], inclusive: false }, acc_title: { rules: [13], inclusive: false }, INITIAL: { rules: [0, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 19, 20, 21, 22, 23, 24], inclusive: true } }
    };
    return _;
  }();
  p.lexer = T;
  function v() {
    this.yy = {};
  }
  return v.prototype = p, p.Parser = v, new v();
}();
K.parser = K;
var Mt = K;
var L = "";
var Q = [];
var N = [];
var B = [];
var St = function(e, t, i2) {
  ws.parseDirective(this, e, t, i2);
};
var $t = function() {
  Q.length = 0, N.length = 0, L = "", B.length = 0, s();
};
var Et = function(e) {
  L = e, Q.push(e);
};
var Pt = function() {
  return Q;
};
var It = function() {
  let e = rt();
  const t = 100;
  let i2 = 0;
  for (; !e && i2 < t; )
    e = rt(), i2++;
  return N.push(...B), N;
};
var At = function() {
  const e = [];
  return N.forEach((i2) => {
    i2.people && e.push(...i2.people);
  }), [...new Set(e)].sort();
};
var Ct = function(e, t) {
  const i2 = t.substr(1).split(":");
  let r2 = 0, s2 = [];
  i2.length === 1 ? (r2 = Number(i2[0]), s2 = []) : (r2 = Number(i2[0]), s2 = i2[1].split(","));
  const o = s2.map((y) => y.trim()), l2 = {
    section: L,
    type: L,
    people: o,
    task: e,
    score: r2
  };
  B.push(l2);
};
var Vt = function(e) {
  const t = {
    section: L,
    type: L,
    description: e,
    task: e,
    classes: []
  };
  N.push(t);
};
var rt = function() {
  const e = function(i2) {
    return B[i2].processed;
  };
  let t = true;
  for (const [i2, r2] of B.entries())
    e(i2), t = t && r2.processed;
  return t;
};
var Ft = function() {
  return At();
};
var nt = {
  parseDirective: St,
  getConfig: () => th().journey,
  clear: $t,
  setDiagramTitle: g,
  getDiagramTitle: u,
  setAccTitle: i,
  getAccTitle: a,
  setAccDescription: r,
  getAccDescription: l,
  addSection: Et,
  getSections: Pt,
  getTasks: It,
  addTask: Ct,
  addTaskOrg: Vt,
  getActors: Ft
};
var Lt = (e) => `.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${e.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e.textColor}
  }

  .legend {
    fill: ${e.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e.textColor}
  }

  .face {
    ${e.faceColor ? `fill: ${e.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e.fillType0 ? `fill: ${e.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${e.fillType0 ? `fill: ${e.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${e.fillType0 ? `fill: ${e.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${e.fillType0 ? `fill: ${e.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${e.fillType0 ? `fill: ${e.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${e.fillType0 ? `fill: ${e.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${e.fillType0 ? `fill: ${e.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${e.fillType0 ? `fill: ${e.fillType7}` : ""};
  }

  .actor-0 {
    ${e.actor0 ? `fill: ${e.actor0}` : ""};
  }
  .actor-1 {
    ${e.actor1 ? `fill: ${e.actor1}` : ""};
  }
  .actor-2 {
    ${e.actor2 ? `fill: ${e.actor2}` : ""};
  }
  .actor-3 {
    ${e.actor3 ? `fill: ${e.actor3}` : ""};
  }
  .actor-4 {
    ${e.actor4 ? `fill: ${e.actor4}` : ""};
  }
  .actor-5 {
    ${e.actor5 ? `fill: ${e.actor5}` : ""};
  }
`;
var Rt = Lt;
var O = function(e, t) {
  const i2 = e.append("rect");
  return i2.attr("x", t.x), i2.attr("y", t.y), i2.attr("fill", t.fill), i2.attr("stroke", t.stroke), i2.attr("width", t.width), i2.attr("height", t.height), i2.attr("rx", t.rx), i2.attr("ry", t.ry), t.class !== void 0 && i2.attr("class", t.class), i2;
};
var Nt = function(e, t) {
  const r2 = e.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), s2 = e.append("g");
  s2.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), s2.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function o(u2) {
    const x = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    u2.append("path").attr("class", "mouth").attr("d", x).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
  }
  function l2(u2) {
    const x = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    u2.append("path").attr("class", "mouth").attr("d", x).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
  }
  function y(u2) {
    u2.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return t.score > 3 ? o(s2) : t.score < 3 ? l2(s2) : y(s2), r2;
};
var ot = function(e, t) {
  const i2 = e.append("circle");
  return i2.attr("cx", t.cx), i2.attr("cy", t.cy), i2.attr("class", "actor-" + t.pos), i2.attr("fill", t.fill), i2.attr("stroke", t.stroke), i2.attr("r", t.r), i2.class !== void 0 && i2.attr("class", i2.class), t.title !== void 0 && i2.append("title").text(t.title), i2;
};
var ht = function(e, t) {
  const i2 = t.text.replace(/<br\s*\/?>/gi, " "), r2 = e.append("text");
  r2.attr("x", t.x), r2.attr("y", t.y), r2.attr("class", "legend"), r2.style("text-anchor", t.anchor), t.class !== void 0 && r2.attr("class", t.class);
  const s2 = r2.append("tspan");
  return s2.attr("x", t.x + t.textMargin * 2), s2.text(i2), r2;
};
var Bt = function(e, t) {
  function i2(s2, o, l2, y, u2) {
    return s2 + "," + o + " " + (s2 + l2) + "," + o + " " + (s2 + l2) + "," + (o + y - u2) + " " + (s2 + l2 - u2 * 1.2) + "," + (o + y) + " " + s2 + "," + (o + y);
  }
  const r2 = e.append("polygon");
  r2.attr("points", i2(t.x, t.y, 50, 20, 7)), r2.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + 0.5 * t.labelMargin, ht(e, t);
};
var jt = function(e, t, i2) {
  const r2 = e.append("g"), s2 = D();
  s2.x = t.x, s2.y = t.y, s2.fill = t.fill, s2.width = i2.width * t.taskCount + // width of the tasks
  i2.diagramMarginX * (t.taskCount - 1), s2.height = i2.height, s2.class = "journey-section section-type-" + t.num, s2.rx = 3, s2.ry = 3, O(r2, s2), ut(i2)(
    t.text,
    r2,
    s2.x,
    s2.y,
    s2.width,
    s2.height,
    { class: "journey-section section-type-" + t.num },
    i2,
    t.colour
  );
};
var at = -1;
var zt = function(e, t, i2) {
  const r2 = t.x + i2.width / 2, s2 = e.append("g");
  at++;
  const o = 300 + 5 * 30;
  s2.append("line").attr("id", "task" + at).attr("x1", r2).attr("y1", t.y).attr("x2", r2).attr("y2", o).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(s2, {
    cx: r2,
    cy: 300 + (5 - t.score) * 30,
    score: t.score
  });
  const l2 = D();
  l2.x = t.x, l2.y = t.y, l2.fill = t.fill, l2.width = i2.width, l2.height = i2.height, l2.class = "task task-type-" + t.num, l2.rx = 3, l2.ry = 3, O(s2, l2);
  let y = t.x + 14;
  t.people.forEach((u2) => {
    const x = t.actors[u2].color, g2 = {
      cx: y,
      cy: t.y,
      r: 7,
      fill: x,
      stroke: "#000",
      title: u2,
      pos: t.actors[u2].position
    };
    ot(s2, g2), y += 10;
  }), ut(i2)(
    t.task,
    s2,
    l2.x,
    l2.y,
    l2.width,
    l2.height,
    { class: "task" },
    i2,
    t.colour
  );
};
var Yt = function(e, t) {
  O(e, {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    class: "rect"
  }).lower();
};
var qt = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    "text-anchor": "start",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0
  };
};
var D = function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
};
var ut = function() {
  function e(s2, o, l2, y, u2, x, g2, f) {
    const p = o.append("text").attr("x", l2 + u2 / 2).attr("y", y + x / 2 + 5).style("font-color", f).style("text-anchor", "middle").text(s2);
    r2(p, g2);
  }
  function t(s2, o, l2, y, u2, x, g2, f, p) {
    const { taskFontSize: T, taskFontFamily: v } = f, _ = s2.split(/<br\s*\/?>/gi);
    for (let n = 0; n < _.length; n++) {
      const a2 = n * T - T * (_.length - 1) / 2, h = o.append("text").attr("x", l2 + u2 / 2).attr("y", y).attr("fill", p).style("text-anchor", "middle").style("font-size", T).style("font-family", v);
      h.append("tspan").attr("x", l2 + u2 / 2).attr("dy", a2).text(_[n]), h.attr("y", y + x / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), r2(h, g2);
    }
  }
  function i2(s2, o, l2, y, u2, x, g2, f) {
    const p = o.append("switch"), v = p.append("foreignObject").attr("x", l2).attr("y", y).attr("width", u2).attr("height", x).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    v.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(s2), t(s2, p, l2, y, u2, x, g2, f), r2(v, g2);
  }
  function r2(s2, o) {
    for (const l2 in o)
      l2 in o && s2.attr(l2, o[l2]);
  }
  return function(s2) {
    return s2.textPlacement === "fo" ? i2 : s2.textPlacement === "old" ? e : t;
  };
}();
var Ot = function(e) {
  e.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
};
var j = {
  drawRect: O,
  drawCircle: ot,
  drawSection: jt,
  drawText: ht,
  drawLabel: Bt,
  drawTask: zt,
  drawBackgroundRect: Yt,
  getTextObj: qt,
  getNoteRect: D,
  initGraphics: Ot
};
var Wt = function(e) {
  Object.keys(e).forEach(function(i2) {
    W[i2] = e[i2];
  });
};
var P = {};
function Xt(e) {
  const t = th().journey;
  let i2 = 60;
  Object.keys(P).forEach((r2) => {
    const s2 = P[r2].color, o = {
      cx: 20,
      cy: i2,
      r: 7,
      fill: s2,
      stroke: "#000",
      pos: P[r2].position
    };
    j.drawCircle(e, o);
    const l2 = {
      x: 40,
      y: i2 + 7,
      fill: "#666",
      text: r2,
      textMargin: t.boxTextMargin | 5
    };
    j.drawText(e, l2), i2 += 20;
  });
}
var W = th().journey;
var C = W.leftMargin;
var Gt = function(e, t, i2, r2) {
  const s2 = th().journey;
  r2.db.clear(), r2.parser.parse(e + `
`);
  const o = th().securityLevel;
  let l2;
  o === "sandbox" && (l2 = nh("#i" + t));
  const y = o === "sandbox" ? nh(l2.nodes()[0].contentDocument.body) : nh("body");
  S.init();
  const u2 = y.select("#" + t);
  j.initGraphics(u2);
  const x = r2.db.getTasks(), g2 = r2.db.getDiagramTitle(), f = r2.db.getActors();
  for (const a2 in P)
    delete P[a2];
  let p = 0;
  f.forEach((a2) => {
    P[a2] = {
      color: s2.actorColours[p % s2.actorColours.length],
      position: p
    }, p++;
  }), Xt(u2), S.insert(0, 0, C, Object.keys(P).length * 50), Ht(u2, x, 0);
  const T = S.getBounds();
  g2 && u2.append("text").text(g2).attr("x", C).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 25);
  const v = T.stopy - T.starty + 2 * s2.diagramMarginY, _ = C + T.stopx + 2 * s2.diagramMarginX;
  $(u2, v, _, s2.useMaxWidth), u2.append("line").attr("x1", C).attr("y1", s2.height * 4).attr("x2", _ - C - 4).attr("y2", s2.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
  const n = g2 ? 70 : 0;
  u2.attr("viewBox", `${T.startx} -25 ${_} ${v + n}`), u2.attr("preserveAspectRatio", "xMinYMin meet"), u2.attr("height", v + n + 25);
};
var S = {
  data: {
    startx: void 0,
    stopx: void 0,
    starty: void 0,
    stopy: void 0
  },
  verticalPos: 0,
  sequenceItems: [],
  init: function() {
    this.sequenceItems = [], this.data = {
      startx: void 0,
      stopx: void 0,
      starty: void 0,
      stopy: void 0
    }, this.verticalPos = 0;
  },
  updateVal: function(e, t, i2, r2) {
    e[t] === void 0 ? e[t] = i2 : e[t] = r2(i2, e[t]);
  },
  updateBounds: function(e, t, i2, r2) {
    const s2 = th().journey, o = this;
    let l2 = 0;
    function y(u2) {
      return function(g2) {
        l2++;
        const f = o.sequenceItems.length - l2 + 1;
        o.updateVal(g2, "starty", t - f * s2.boxMargin, Math.min), o.updateVal(g2, "stopy", r2 + f * s2.boxMargin, Math.max), o.updateVal(S.data, "startx", e - f * s2.boxMargin, Math.min), o.updateVal(S.data, "stopx", i2 + f * s2.boxMargin, Math.max), u2 !== "activation" && (o.updateVal(g2, "startx", e - f * s2.boxMargin, Math.min), o.updateVal(g2, "stopx", i2 + f * s2.boxMargin, Math.max), o.updateVal(S.data, "starty", t - f * s2.boxMargin, Math.min), o.updateVal(S.data, "stopy", r2 + f * s2.boxMargin, Math.max));
      };
    }
    this.sequenceItems.forEach(y());
  },
  insert: function(e, t, i2, r2) {
    const s2 = Math.min(e, i2), o = Math.max(e, i2), l2 = Math.min(t, r2), y = Math.max(t, r2);
    this.updateVal(S.data, "startx", s2, Math.min), this.updateVal(S.data, "starty", l2, Math.min), this.updateVal(S.data, "stopx", o, Math.max), this.updateVal(S.data, "stopy", y, Math.max), this.updateBounds(s2, l2, o, y);
  },
  bumpVerticalPos: function(e) {
    this.verticalPos = this.verticalPos + e, this.data.stopy = this.verticalPos;
  },
  getVerticalPos: function() {
    return this.verticalPos;
  },
  getBounds: function() {
    return this.data;
  }
};
var J = W.sectionFills;
var lt = W.sectionColours;
var Ht = function(e, t, i2) {
  const r2 = th().journey;
  let s2 = "";
  const o = r2.height * 2 + r2.diagramMarginY, l2 = i2 + o;
  let y = 0, u2 = "#CCC", x = "black", g2 = 0;
  for (const [f, p] of t.entries()) {
    if (s2 !== p.section) {
      u2 = J[y % J.length], g2 = y % J.length, x = lt[y % lt.length];
      let v = 0;
      const _ = p.section;
      for (let a2 = f; a2 < t.length && t[a2].section == _; a2++)
        v = v + 1;
      const n = {
        x: f * r2.taskMargin + f * r2.width + C,
        y: 50,
        text: p.section,
        fill: u2,
        num: g2,
        colour: x,
        taskCount: v
      };
      j.drawSection(e, n, r2), s2 = p.section, y++;
    }
    const T = p.people.reduce((v, _) => (P[_] && (v[_] = P[_]), v), {});
    p.x = f * r2.taskMargin + f * r2.width + C, p.y = l2, p.width = r2.diagramMarginX, p.height = r2.diagramMarginY, p.colour = x, p.fill = u2, p.num = g2, p.actors = T, j.drawTask(e, p, r2), S.insert(p.x, p.y, p.x + p.width + r2.taskMargin, 300 + 5 * 30);
  }
};
var ct = {
  setConf: Wt,
  draw: Gt
};
var ie = {
  parser: Mt,
  db: nt,
  renderer: ct,
  styles: Rt,
  init: (e) => {
    ct.setConf(e.journey), nt.clear();
  }
};
export {
  ie as diagram
};
//# sourceMappingURL=journeyDiagram-48369403-24FLXD3L.js.map
