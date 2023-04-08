import {
  hn
} from "./chunk-LP5BNPEC.js";
import {
  t as t2
} from "./chunk-QKPO76IW.js";
import {
  t
} from "./chunk-MAFLJJKP.js";
import {
  E
} from "./chunk-WC7ESL3H.js";
import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  es
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
  ah,
  et,
  nh,
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/pieDiagram-2f833a44.js
var at = class extends Map {
  constructor(s2, l2 = It) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: l2 } }), s2 != null)
      for (const [c, p] of s2)
        this.set(c, p);
  }
  get(s2) {
    return super.get(lt(this, s2));
  }
  has(s2) {
    return super.has(lt(this, s2));
  }
  set(s2, l2) {
    return super.set(Dt(this, s2), l2);
  }
  delete(s2) {
    return super.delete(Tt(this, s2));
  }
};
function lt({ _intern: t3, _key: s2 }, l2) {
  const c = s2(l2);
  return t3.has(c) ? t3.get(c) : l2;
}
function Dt({ _intern: t3, _key: s2 }, l2) {
  const c = s2(l2);
  return t3.has(c) ? t3.get(c) : (t3.set(c, l2), l2);
}
function Tt({ _intern: t3, _key: s2 }, l2) {
  const c = s2(l2);
  return t3.has(c) && (l2 = t3.get(c), t3.delete(c)), l2;
}
function It(t3) {
  return t3 !== null && typeof t3 == "object" ? t3.valueOf() : t3;
}
var ct = Symbol("implicit");
function ot() {
  var t3 = new at(), s2 = [], l2 = [], c = ct;
  function p(u2) {
    let h = t3.get(u2);
    if (h === void 0) {
      if (c !== ct)
        return c;
      t3.set(u2, h = s2.push(u2) - 1);
    }
    return l2[h % l2.length];
  }
  return p.domain = function(u2) {
    if (!arguments.length)
      return s2.slice();
    s2 = [], t3 = new at();
    for (const h of u2)
      t3.has(h) || t3.set(h, s2.push(h) - 1);
    return p;
  }, p.range = function(u2) {
    return arguments.length ? (l2 = Array.from(u2), p) : l2.slice();
  }, p.unknown = function(u2) {
    return arguments.length ? (c = u2, p) : c;
  }, p.copy = function() {
    return ot(s2, l2).unknown(c);
  }, t2.apply(p, arguments), p;
}
function $t(t3, s2) {
  return s2 < t3 ? -1 : s2 > t3 ? 1 : s2 >= t3 ? 0 : NaN;
}
function Vt(t3) {
  return t3;
}
function Pt() {
  var t3 = Vt, s2 = $t, l2 = null, c = E(0), p = E(es), u2 = E(0);
  function h(o) {
    var y, g2 = (o = t(o)).length, A, M, b = 0, T = new Array(g2), S = new Array(g2), w = +c.apply(this, arguments), I = Math.min(es, Math.max(-es, p.apply(this, arguments) - w)), $2, k = Math.min(Math.abs(I) / g2, u2.apply(this, arguments)), E2 = k * (I < 0 ? -1 : 1), D;
    for (y = 0; y < g2; ++y)
      (D = S[T[y] = y] = +t3(o[y], y, o)) > 0 && (b += D);
    for (s2 != null ? T.sort(function(V, _) {
      return s2(S[V], S[_]);
    }) : l2 != null && T.sort(function(V, _) {
      return l2(o[V], o[_]);
    }), y = 0, M = b ? (I - g2 * E2) / b : 0; y < g2; ++y, w = $2)
      A = T[y], D = S[A], $2 = w + (D > 0 ? D * M : 0) + E2, S[A] = {
        data: o[A],
        index: y,
        value: D,
        startAngle: w,
        endAngle: $2,
        padAngle: k
      };
    return S;
  }
  return h.value = function(o) {
    return arguments.length ? (t3 = typeof o == "function" ? o : E(+o), h) : t3;
  }, h.sortValues = function(o) {
    return arguments.length ? (s2 = o, l2 = null, h) : s2;
  }, h.sort = function(o) {
    return arguments.length ? (l2 = o, s2 = null, h) : l2;
  }, h.startAngle = function(o) {
    return arguments.length ? (c = typeof o == "function" ? o : E(+o), h) : c;
  }, h.endAngle = function(o) {
    return arguments.length ? (p = typeof o == "function" ? o : E(+o), h) : p;
  }, h.padAngle = function(o) {
    return arguments.length ? (u2 = typeof o == "function" ? o : E(+o), h) : u2;
  }, h;
}
var et2 = function() {
  var t3 = function(_, i2, e, n) {
    for (e = e || {}, n = _.length; n--; e[_[n]] = i2)
      ;
    return e;
  }, s2 = [1, 4], l2 = [1, 5], c = [1, 6], p = [1, 7], u2 = [1, 9], h = [1, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], o = [2, 5], y = [1, 6, 11, 13, 15, 17, 19, 20, 26, 27, 28, 29], g2 = [26, 27, 28], A = [2, 8], M = [1, 18], b = [1, 19], T = [1, 20], S = [1, 21], w = [1, 22], I = [1, 23], $2 = [1, 28], k = [6, 26, 27, 28, 29], E2 = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, directive: 5, PIE: 6, document: 7, showData: 8, line: 9, statement: 10, txt: 11, value: 12, title: 13, title_value: 14, acc_title: 15, acc_title_value: 16, acc_descr: 17, acc_descr_value: 18, acc_descr_multiline_value: 19, section: 20, openDirective: 21, typeDirective: 22, closeDirective: 23, ":": 24, argDirective: 25, NEWLINE: 26, ";": 27, EOF: 28, open_directive: 29, type_directive: 30, arg_directive: 31, close_directive: 32, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "PIE", 8: "showData", 11: "txt", 12: "value", 13: "title", 14: "title_value", 15: "acc_title", 16: "acc_title_value", 17: "acc_descr", 18: "acc_descr_value", 19: "acc_descr_multiline_value", 20: "section", 24: ":", 26: "NEWLINE", 27: ";", 28: "EOF", 29: "open_directive", 30: "type_directive", 31: "arg_directive", 32: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 3], [7, 0], [7, 2], [9, 2], [10, 0], [10, 2], [10, 2], [10, 2], [10, 2], [10, 1], [10, 1], [10, 1], [5, 3], [5, 5], [4, 1], [4, 1], [4, 1], [21, 1], [22, 1], [25, 1], [23, 1]],
    performAction: function(i2, e, n, a2, f, r2, F) {
      var m = r2.length - 1;
      switch (f) {
        case 4:
          a2.setShowData(true);
          break;
        case 7:
          this.$ = r2[m - 1];
          break;
        case 9:
          a2.addSection(r2[m - 1], a2.cleanupValue(r2[m]));
          break;
        case 10:
          this.$ = r2[m].trim(), a2.setDiagramTitle(this.$);
          break;
        case 11:
          this.$ = r2[m].trim(), a2.setAccTitle(this.$);
          break;
        case 12:
        case 13:
          this.$ = r2[m].trim(), a2.setAccDescription(this.$);
          break;
        case 14:
          a2.addSection(r2[m].substr(8)), this.$ = r2[m].substr(8);
          break;
        case 21:
          a2.parseDirective("%%{", "open_directive");
          break;
        case 22:
          a2.parseDirective(r2[m], "type_directive");
          break;
        case 23:
          r2[m] = r2[m].trim().replace(/'/g, '"'), a2.parseDirective(r2[m], "arg_directive");
          break;
        case 24:
          a2.parseDirective("}%%", "close_directive", "pie");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: s2, 21: 8, 26: l2, 27: c, 28: p, 29: u2 }, { 1: [3] }, { 3: 10, 4: 2, 5: 3, 6: s2, 21: 8, 26: l2, 27: c, 28: p, 29: u2 }, { 3: 11, 4: 2, 5: 3, 6: s2, 21: 8, 26: l2, 27: c, 28: p, 29: u2 }, t3(h, o, { 7: 12, 8: [1, 13] }), t3(y, [2, 18]), t3(y, [2, 19]), t3(y, [2, 20]), { 22: 14, 30: [1, 15] }, { 30: [2, 21] }, { 1: [2, 1] }, { 1: [2, 2] }, t3(g2, A, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 3], 11: M, 13: b, 15: T, 17: S, 19: w, 20: I, 29: u2 }), t3(h, o, { 7: 25 }), { 23: 26, 24: [1, 27], 32: $2 }, t3([24, 32], [2, 22]), t3(h, [2, 6]), { 4: 29, 26: l2, 27: c, 28: p }, { 12: [1, 30] }, { 14: [1, 31] }, { 16: [1, 32] }, { 18: [1, 33] }, t3(g2, [2, 13]), t3(g2, [2, 14]), t3(g2, [2, 15]), t3(g2, A, { 21: 8, 9: 16, 10: 17, 5: 24, 1: [2, 4], 11: M, 13: b, 15: T, 17: S, 19: w, 20: I, 29: u2 }), t3(k, [2, 16]), { 25: 34, 31: [1, 35] }, t3(k, [2, 24]), t3(h, [2, 7]), t3(g2, [2, 9]), t3(g2, [2, 10]), t3(g2, [2, 11]), t3(g2, [2, 12]), { 23: 36, 32: $2 }, { 32: [2, 23] }, t3(k, [2, 17])],
    defaultActions: { 9: [2, 21], 10: [2, 1], 11: [2, 2], 35: [2, 23] },
    parseError: function(i2, e) {
      if (e.recoverable)
        this.trace(i2);
      else {
        var n = new Error(i2);
        throw n.hash = e, n;
      }
    },
    parse: function(i2) {
      var e = this, n = [0], a2 = [], f = [null], r2 = [], F = this.table, m = "", U = 0, nt = 0, ht = 2, st = 1, ut = r2.slice.call(arguments, 1), d = Object.create(this.lexer), W = { yy: {} };
      for (var K in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, K) && (W.yy[K] = this.yy[K]);
      d.setInput(i2, W.yy), W.yy.lexer = d, W.yy.parser = this, typeof d.yylloc > "u" && (d.yylloc = {});
      var Q = d.yylloc;
      r2.push(Q);
      var ft = d.options && d.options.ranges;
      typeof W.yy.parseError == "function" ? this.parseError = W.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function pt() {
        var L;
        return L = a2.pop() || d.lex() || st, typeof L != "number" && (L instanceof Array && (a2 = L, L = a2.pop()), L = e.symbols_[L] || L), L;
      }
      for (var v, j, x, X, z = {}, q, P, rt, H; ; ) {
        if (j = n[n.length - 1], this.defaultActions[j] ? x = this.defaultActions[j] : ((v === null || typeof v > "u") && (v = pt()), x = F[j] && F[j][v]), typeof x > "u" || !x.length || !x[0]) {
          var Z = "";
          H = [];
          for (q in F[j])
            this.terminals_[q] && q > ht && H.push("'" + this.terminals_[q] + "'");
          d.showPosition ? Z = "Parse error on line " + (U + 1) + `:
` + d.showPosition() + `
Expecting ` + H.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : Z = "Parse error on line " + (U + 1) + ": Unexpected " + (v == st ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(Z, {
            text: d.match,
            token: this.terminals_[v] || v,
            line: d.yylineno,
            loc: Q,
            expected: H
          });
        }
        if (x[0] instanceof Array && x.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + v);
        switch (x[0]) {
          case 1:
            n.push(v), f.push(d.yytext), r2.push(d.yylloc), n.push(x[1]), v = null, nt = d.yyleng, m = d.yytext, U = d.yylineno, Q = d.yylloc;
            break;
          case 2:
            if (P = this.productions_[x[1]][1], z.$ = f[f.length - P], z._$ = {
              first_line: r2[r2.length - (P || 1)].first_line,
              last_line: r2[r2.length - 1].last_line,
              first_column: r2[r2.length - (P || 1)].first_column,
              last_column: r2[r2.length - 1].last_column
            }, ft && (z._$.range = [
              r2[r2.length - (P || 1)].range[0],
              r2[r2.length - 1].range[1]
            ]), X = this.performAction.apply(z, [
              m,
              nt,
              U,
              W.yy,
              x[1],
              f,
              r2
            ].concat(ut)), typeof X < "u")
              return X;
            P && (n = n.slice(0, -1 * P * 2), f = f.slice(0, -1 * P), r2 = r2.slice(0, -1 * P)), n.push(this.productions_[x[1]][0]), f.push(z.$), r2.push(z._$), rt = F[n[n.length - 2]][n[n.length - 1]], n.push(rt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, D = function() {
    var _ = {
      EOF: 1,
      parseError: function(e, n) {
        if (this.yy.parser)
          this.yy.parser.parseError(e, n);
        else
          throw new Error(e);
      },
      // resets the lexer, sets new input
      setInput: function(i2, e) {
        return this.yy = e || this.yy || {}, this._input = i2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var i2 = this._input[0];
        this.yytext += i2, this.yyleng++, this.offset++, this.match += i2, this.matched += i2;
        var e = i2.match(/(?:\r\n?|\n).*/g);
        return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i2;
      },
      // unshifts one char (or a string) into the input
      unput: function(i2) {
        var e = i2.length, n = i2.split(/(?:\r\n?|\n)/g);
        this._input = i2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
        var a2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
        var f = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: n ? (n.length === a2.length ? this.yylloc.first_column : 0) + a2[a2.length - n.length].length - n[0].length : this.yylloc.first_column - e
        }, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this;
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
      less: function(i2) {
        this.unput(this.match.slice(i2));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var i2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (i2.length > 20 ? "..." : "") + i2.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var i2 = this.match;
        return i2.length < 20 && (i2 += this._input.substr(0, 20 - i2.length)), (i2.substr(0, 20) + (i2.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var i2 = this.pastInput(), e = new Array(i2.length + 1).join("-");
        return i2 + this.upcomingInput() + `
` + e + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(i2, e) {
        var n, a2, f;
        if (this.options.backtrack_lexer && (f = {
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
        }, this.options.ranges && (f.yylloc.range = this.yylloc.range.slice(0))), a2 = i2[0].match(/(?:\r\n?|\n).*/g), a2 && (this.yylineno += a2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: a2 ? a2[a2.length - 1].length - a2[a2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i2[0].length
        }, this.yytext += i2[0], this.match += i2[0], this.matches = i2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i2[0].length), this.matched += i2[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), n)
          return n;
        if (this._backtrack) {
          for (var r2 in f)
            this[r2] = f[r2];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i2, e, n, a2;
        this._more || (this.yytext = "", this.match = "");
        for (var f = this._currentRules(), r2 = 0; r2 < f.length; r2++)
          if (n = this._input.match(this.rules[f[r2]]), n && (!e || n[0].length > e[0].length)) {
            if (e = n, a2 = r2, this.options.backtrack_lexer) {
              if (i2 = this.test_match(n, f[r2]), i2 !== false)
                return i2;
              if (this._backtrack) {
                e = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return e ? (i2 = this.test_match(e, f[a2]), i2 !== false ? i2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var e = this.next();
        return e || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(e) {
        this.conditionStack.push(e);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var e = this.conditionStack.length - 1;
        return e > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(e) {
        return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(e) {
        this.begin(e);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(e, n, a2, f) {
        switch (a2) {
          case 0:
            return this.begin("open_directive"), 29;
          case 1:
            return this.begin("type_directive"), 30;
          case 2:
            return this.popState(), this.begin("arg_directive"), 24;
          case 3:
            return this.popState(), this.popState(), 32;
          case 4:
            return 31;
          case 5:
            break;
          case 6:
            break;
          case 7:
            return 26;
          case 8:
            break;
          case 9:
            break;
          case 10:
            return this.begin("title"), 13;
          case 11:
            return this.popState(), "title_value";
          case 12:
            return this.begin("acc_title"), 15;
          case 13:
            return this.popState(), "acc_title_value";
          case 14:
            return this.begin("acc_descr"), 17;
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
            this.begin("string");
            break;
          case 20:
            this.popState();
            break;
          case 21:
            return "txt";
          case 22:
            return 6;
          case 23:
            return 8;
          case 24:
            return "value";
          case 25:
            return 28;
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[\s]+)/i, /^(?:title\b)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:pie\b)/i, /^(?:showData\b)/i, /^(?::[\s]*[\d]+(?:\.[\d]+)?)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [17, 18], inclusive: false }, acc_descr: { rules: [15], inclusive: false }, acc_title: { rules: [13], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, title: { rules: [11], inclusive: false }, string: { rules: [20, 21], inclusive: false }, INITIAL: { rules: [0, 5, 6, 7, 8, 9, 10, 12, 14, 16, 19, 22, 23, 24, 25], inclusive: true } }
    };
    return _;
  }();
  E2.lexer = D;
  function V() {
    this.yy = {};
  }
  return V.prototype = E2, E2.Parser = V, new V();
}();
et2.parser = et2;
var Lt = et2;
var J = {};
var it = false;
var Ot = function(t3, s2, l2) {
  ws.parseDirective(this, t3, s2, l2);
};
var Nt = function(t3, s2) {
  t3 = ah.sanitizeText(t3, th()), J[t3] === void 0 && (J[t3] = s2, et.debug("Added new section :", t3));
};
var Mt = () => J;
var Ft = function(t3) {
  it = t3;
};
var Wt = function() {
  return it;
};
var jt = function(t3) {
  return t3.substring(0, 1) === ":" && (t3 = t3.substring(1).trim()), Number(t3.trim());
};
var Ct = function() {
  J = {}, it = false, s();
};
var zt = {
  parseDirective: Ot,
  getConfig: () => th().pie,
  addSection: Nt,
  getSections: Mt,
  cleanupValue: jt,
  clear: Ct,
  setAccTitle: i,
  getAccTitle: a,
  setDiagramTitle: g,
  getDiagramTitle: u,
  setShowData: Ft,
  getShowData: Wt,
  getAccDescription: l,
  setAccDescription: r
};
var Rt = (t3) => `
  .pieCircle{
    stroke: ${t3.pieStrokeColor};
    stroke-width : ${t3.pieStrokeWidth};
    opacity : ${t3.pieOpacity};
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t3.pieTitleTextSize};
    fill: ${t3.pieTitleTextColor};
    font-family: ${t3.fontFamily};
  }
  .slice {
    font-family: ${t3.fontFamily};
    fill: ${t3.pieSectionTextColor};
    font-size:${t3.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t3.pieLegendTextColor};
    font-family: ${t3.fontFamily};
    font-size: ${t3.pieLegendTextSize};
  }
`;
var Yt = Rt;
var O = th();
var N;
var R = 450;
var Bt = (t3, s2, l2, c) => {
  try {
    O = th(), et.debug(`Rendering info diagram
` + t3);
    const k = th().securityLevel;
    let E2;
    k === "sandbox" && (E2 = nh("#i" + s2));
    const D = k === "sandbox" ? nh(E2.nodes()[0].contentDocument.body) : nh("body"), V = k === "sandbox" ? E2.nodes()[0].contentDocument : document;
    c.db.clear(), c.parser.parse(t3), et.debug("Parsed info diagram");
    const _ = V.getElementById(s2);
    N = _.parentElement.offsetWidth, N === void 0 && (N = 1200), O.useWidth !== void 0 && (N = O.useWidth), O.pie.useWidth !== void 0 && (N = O.pie.useWidth);
    const i2 = D.select("#" + s2);
    $(i2, R, N, O.pie.useMaxWidth), _.setAttribute("viewBox", "0 0 " + N + " " + R);
    var p = 40, u2 = 18, h = 4, o = Math.min(N, R) / 2 - p, y = i2.append("g").attr("transform", "translate(" + N / 2 + "," + R / 2 + ")"), g2 = c.db.getSections(), A = 0;
    Object.keys(g2).forEach(function(n) {
      A += g2[n];
    });
    const e = O.themeVariables;
    var M = [
      e.pie1,
      e.pie2,
      e.pie3,
      e.pie4,
      e.pie5,
      e.pie6,
      e.pie7,
      e.pie8,
      e.pie9,
      e.pie10,
      e.pie11,
      e.pie12
    ], b = ot().range(M), T = Object.entries(g2).map(function(n, a2) {
      return {
        order: a2,
        name: n[0],
        value: n[1]
      };
    }), S = Pt().value(function(n) {
      return n.value;
    }).sort(function(n, a2) {
      return n.order - a2.order;
    }), w = S(T), I = hn().innerRadius(0).outerRadius(o);
    y.selectAll("mySlices").data(w).enter().append("path").attr("d", I).attr("fill", function(n) {
      return b(n.data.name);
    }).attr("class", "pieCircle"), y.selectAll("mySlices").data(w).enter().append("text").text(function(n) {
      return (n.data.value / A * 100).toFixed(0) + "%";
    }).attr("transform", function(n) {
      return "translate(" + I.centroid(n) + ")";
    }).style("text-anchor", "middle").attr("class", "slice"), y.append("text").text(c.db.getDiagramTitle()).attr("x", 0).attr("y", -(R - 50) / 2).attr("class", "pieTitleText");
    var $2 = y.selectAll(".legend").data(b.domain()).enter().append("g").attr("class", "legend").attr("transform", function(n, a2) {
      const f = u2 + h, r2 = f * b.domain().length / 2, F = 12 * u2, m = a2 * f - r2;
      return "translate(" + F + "," + m + ")";
    });
    $2.append("rect").attr("width", u2).attr("height", u2).style("fill", b).style("stroke", b), $2.data(w).append("text").attr("x", u2 + h).attr("y", u2 - h).text(function(n) {
      return c.db.getShowData() || O.showData || O.pie.showData ? n.data.name + " [" + n.data.value + "]" : n.data.name;
    });
  } catch (k) {
    et.error("Error while rendering info diagram"), et.error(k);
  }
};
var Ut = {
  draw: Bt
};
var ie = {
  parser: Lt,
  db: zt,
  renderer: Ut,
  styles: Yt
};
export {
  ie as diagram
};
//# sourceMappingURL=pieDiagram-2f833a44-KYPZ3PML.js.map
