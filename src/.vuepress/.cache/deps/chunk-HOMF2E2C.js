import {
  ws
} from "./chunk-DZVDESUM.js";
import {
  $o
} from "./chunk-BHKXDXK7.js";
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
  th
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/styles-d2effb1a.js
var mt = function() {
  var t = function(D, r2, a2, i2) {
    for (a2 = a2 || {}, i2 = D.length; i2--; a2[D[i2]] = r2)
      ;
    return a2;
  }, s2 = [1, 2], n = [1, 3], h = [1, 5], u2 = [1, 7], d = [2, 5], p = [1, 15], v = [1, 17], f = [1, 21], k = [1, 22], T = [1, 23], G = [1, 24], R = [1, 37], j = [1, 25], U = [1, 26], z = [1, 27], M = [1, 28], H = [1, 29], X = [1, 32], K = [1, 33], W = [1, 34], J = [1, 35], q = [1, 36], Q = [1, 39], Z = [1, 40], tt = [1, 41], et2 = [1, 42], w = [1, 38], Ct = [1, 45], o = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], st = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], ut = [1, 4, 5, 7, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], At = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], ft = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, SPACE: 4, NL: 5, directive: 6, SD: 7, document: 8, line: 9, statement: 10, classDefStatement: 11, cssClassStatement: 12, idStatement: 13, DESCR: 14, "-->": 15, HIDE_EMPTY: 16, scale: 17, WIDTH: 18, COMPOSIT_STATE: 19, STRUCT_START: 20, STRUCT_STOP: 21, STATE_DESCR: 22, AS: 23, ID: 24, FORK: 25, JOIN: 26, CHOICE: 27, CONCURRENT: 28, note: 29, notePosition: 30, NOTE_TEXT: 31, direction: 32, acc_title: 33, acc_title_value: 34, acc_descr: 35, acc_descr_value: 36, acc_descr_multiline_value: 37, classDef: 38, CLASSDEF_ID: 39, CLASSDEF_STYLEOPTS: 40, DEFAULT: 41, class: 42, CLASSENTITY_IDS: 43, STYLECLASS: 44, openDirective: 45, typeDirective: 46, closeDirective: 47, ":": 48, argDirective: 49, direction_tb: 50, direction_bt: 51, direction_rl: 52, direction_lr: 53, eol: 54, ";": 55, EDGE_STATE: 56, STYLE_SEPARATOR: 57, left_of: 58, right_of: 59, open_directive: 60, type_directive: 61, arg_directive: 62, close_directive: 63, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACE", 5: "NL", 7: "SD", 14: "DESCR", 15: "-->", 16: "HIDE_EMPTY", 17: "scale", 18: "WIDTH", 19: "COMPOSIT_STATE", 20: "STRUCT_START", 21: "STRUCT_STOP", 22: "STATE_DESCR", 23: "AS", 24: "ID", 25: "FORK", 26: "JOIN", 27: "CHOICE", 28: "CONCURRENT", 29: "note", 31: "NOTE_TEXT", 33: "acc_title", 34: "acc_title_value", 35: "acc_descr", 36: "acc_descr_value", 37: "acc_descr_multiline_value", 38: "classDef", 39: "CLASSDEF_ID", 40: "CLASSDEF_STYLEOPTS", 41: "DEFAULT", 42: "class", 43: "CLASSENTITY_IDS", 44: "STYLECLASS", 48: ":", 50: "direction_tb", 51: "direction_bt", 52: "direction_rl", 53: "direction_lr", 55: ";", 56: "EDGE_STATE", 57: "STYLE_SEPARATOR", 58: "left_of", 59: "right_of", 60: "open_directive", 61: "type_directive", 62: "arg_directive", 63: "close_directive" },
    productions_: [0, [3, 2], [3, 2], [3, 2], [3, 2], [8, 0], [8, 2], [9, 2], [9, 1], [9, 1], [10, 1], [10, 1], [10, 1], [10, 2], [10, 3], [10, 4], [10, 1], [10, 2], [10, 1], [10, 4], [10, 3], [10, 6], [10, 1], [10, 1], [10, 1], [10, 1], [10, 4], [10, 4], [10, 1], [10, 1], [10, 2], [10, 2], [10, 1], [11, 3], [11, 3], [12, 3], [6, 3], [6, 5], [32, 1], [32, 1], [32, 1], [32, 1], [54, 1], [54, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1], [45, 1], [46, 1], [49, 1], [47, 1]],
    performAction: function(r2, a2, i2, l2, y, e, B) {
      var c = e.length - 1;
      switch (y) {
        case 4:
          return l2.setRootDoc(e[c]), e[c];
        case 5:
          this.$ = [];
          break;
        case 6:
          e[c] != "nl" && (e[c - 1].push(e[c]), this.$ = e[c - 1]);
          break;
        case 7:
        case 8:
          this.$ = e[c];
          break;
        case 9:
          this.$ = "nl";
          break;
        case 12:
          this.$ = e[c];
          break;
        case 13:
          const $ = e[c - 1];
          $.description = l2.trimColon(e[c]), this.$ = $;
          break;
        case 14:
          this.$ = { stmt: "relation", state1: e[c - 2], state2: e[c] };
          break;
        case 15:
          const pt = l2.trimColon(e[c]);
          this.$ = { stmt: "relation", state1: e[c - 3], state2: e[c - 1], description: pt };
          break;
        case 19:
          this.$ = { stmt: "state", id: e[c - 3], type: "default", description: "", doc: e[c - 1] };
          break;
        case 20:
          var C = e[c], O = e[c - 2].trim();
          if (e[c].match(":")) {
            var it = e[c].split(":");
            C = it[0], O = [O, it[1]];
          }
          this.$ = { stmt: "state", id: C, type: "default", description: O };
          break;
        case 21:
          this.$ = { stmt: "state", id: e[c - 3], type: "default", description: e[c - 5], doc: e[c - 1] };
          break;
        case 22:
          this.$ = { stmt: "state", id: e[c], type: "fork" };
          break;
        case 23:
          this.$ = { stmt: "state", id: e[c], type: "join" };
          break;
        case 24:
          this.$ = { stmt: "state", id: e[c], type: "choice" };
          break;
        case 25:
          this.$ = { stmt: "state", id: l2.getDividerId(), type: "divider" };
          break;
        case 26:
          this.$ = { stmt: "state", id: e[c - 1].trim(), note: { position: e[c - 2].trim(), text: e[c].trim() } };
          break;
        case 30:
          this.$ = e[c].trim(), l2.setAccTitle(this.$);
          break;
        case 31:
        case 32:
          this.$ = e[c].trim(), l2.setAccDescription(this.$);
          break;
        case 33:
        case 34:
          this.$ = { stmt: "classDef", id: e[c - 1].trim(), classes: e[c].trim() };
          break;
        case 35:
          this.$ = { stmt: "applyClass", id: e[c - 1].trim(), styleClass: e[c].trim() };
          break;
        case 38:
          l2.setDirection("TB"), this.$ = { stmt: "dir", value: "TB" };
          break;
        case 39:
          l2.setDirection("BT"), this.$ = { stmt: "dir", value: "BT" };
          break;
        case 40:
          l2.setDirection("RL"), this.$ = { stmt: "dir", value: "RL" };
          break;
        case 41:
          l2.setDirection("LR"), this.$ = { stmt: "dir", value: "LR" };
          break;
        case 44:
        case 45:
          this.$ = { stmt: "state", id: e[c].trim(), type: "default", description: "" };
          break;
        case 46:
          this.$ = { stmt: "state", id: e[c - 2].trim(), classes: [e[c].trim()], type: "default", description: "" };
          break;
        case 47:
          this.$ = { stmt: "state", id: e[c - 2].trim(), classes: [e[c].trim()], type: "default", description: "" };
          break;
        case 50:
          l2.parseDirective("%%{", "open_directive");
          break;
        case 51:
          l2.parseDirective(e[c], "type_directive");
          break;
        case 52:
          e[c] = e[c].trim().replace(/'/g, '"'), l2.parseDirective(e[c], "arg_directive");
          break;
        case 53:
          l2.parseDirective("}%%", "close_directive", "state");
          break;
      }
    },
    table: [{ 3: 1, 4: s2, 5: n, 6: 4, 7: h, 45: 6, 60: u2 }, { 1: [3] }, { 3: 8, 4: s2, 5: n, 6: 4, 7: h, 45: 6, 60: u2 }, { 3: 9, 4: s2, 5: n, 6: 4, 7: h, 45: 6, 60: u2 }, { 3: 10, 4: s2, 5: n, 6: 4, 7: h, 45: 6, 60: u2 }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 50, 51, 52, 53, 56, 60], d, { 8: 11 }), { 46: 12, 61: [1, 13] }, { 61: [2, 50] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3] }, { 1: [2, 4], 4: p, 5: v, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: f, 17: k, 19: T, 22: G, 24: R, 25: j, 26: U, 27: z, 28: M, 29: H, 32: 31, 33: X, 35: K, 37: W, 38: J, 42: q, 45: 6, 50: Q, 51: Z, 52: tt, 53: et2, 56: w, 60: u2 }, { 47: 43, 48: [1, 44], 63: Ct }, t([48, 63], [2, 51]), t(o, [2, 6]), { 6: 30, 10: 46, 11: 18, 12: 19, 13: 20, 16: f, 17: k, 19: T, 22: G, 24: R, 25: j, 26: U, 27: z, 28: M, 29: H, 32: 31, 33: X, 35: K, 37: W, 38: J, 42: q, 45: 6, 50: Q, 51: Z, 52: tt, 53: et2, 56: w, 60: u2 }, t(o, [2, 8]), t(o, [2, 9]), t(o, [2, 10]), t(o, [2, 11]), t(o, [2, 12], { 14: [1, 47], 15: [1, 48] }), t(o, [2, 16]), { 18: [1, 49] }, t(o, [2, 18], { 20: [1, 50] }), { 23: [1, 51] }, t(o, [2, 22]), t(o, [2, 23]), t(o, [2, 24]), t(o, [2, 25]), { 30: 52, 31: [1, 53], 58: [1, 54], 59: [1, 55] }, t(o, [2, 28]), t(o, [2, 29]), { 34: [1, 56] }, { 36: [1, 57] }, t(o, [2, 32]), { 39: [1, 58], 41: [1, 59] }, { 43: [1, 60] }, t(st, [2, 44], { 57: [1, 61] }), t(st, [2, 45], { 57: [1, 62] }), t(o, [2, 38]), t(o, [2, 39]), t(o, [2, 40]), t(o, [2, 41]), t(ut, [2, 36]), { 49: 63, 62: [1, 64] }, t(ut, [2, 53]), t(o, [2, 7]), t(o, [2, 13]), { 13: 65, 24: R, 56: w }, t(o, [2, 17]), t(At, d, { 8: 66 }), { 24: [1, 67] }, { 24: [1, 68] }, { 23: [1, 69] }, { 24: [2, 48] }, { 24: [2, 49] }, t(o, [2, 30]), t(o, [2, 31]), { 40: [1, 70] }, { 40: [1, 71] }, { 44: [1, 72] }, { 24: [1, 73] }, { 24: [1, 74] }, { 47: 75, 63: Ct }, { 63: [2, 52] }, t(o, [2, 14], { 14: [1, 76] }), { 4: p, 5: v, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: f, 17: k, 19: T, 21: [1, 77], 22: G, 24: R, 25: j, 26: U, 27: z, 28: M, 29: H, 32: 31, 33: X, 35: K, 37: W, 38: J, 42: q, 45: 6, 50: Q, 51: Z, 52: tt, 53: et2, 56: w, 60: u2 }, t(o, [2, 20], { 20: [1, 78] }), { 31: [1, 79] }, { 24: [1, 80] }, t(o, [2, 33]), t(o, [2, 34]), t(o, [2, 35]), t(st, [2, 46]), t(st, [2, 47]), t(ut, [2, 37]), t(o, [2, 15]), t(o, [2, 19]), t(At, d, { 8: 81 }), t(o, [2, 26]), t(o, [2, 27]), { 4: p, 5: v, 6: 30, 9: 14, 10: 16, 11: 18, 12: 19, 13: 20, 16: f, 17: k, 19: T, 21: [1, 82], 22: G, 24: R, 25: j, 26: U, 27: z, 28: M, 29: H, 32: 31, 33: X, 35: K, 37: W, 38: J, 42: q, 45: 6, 50: Q, 51: Z, 52: tt, 53: et2, 56: w, 60: u2 }, t(o, [2, 21])],
    defaultActions: { 7: [2, 50], 8: [2, 1], 9: [2, 2], 10: [2, 3], 54: [2, 48], 55: [2, 49], 64: [2, 52] },
    parseError: function(r2, a2) {
      if (a2.recoverable)
        this.trace(r2);
      else {
        var i2 = new Error(r2);
        throw i2.hash = a2, i2;
      }
    },
    parse: function(r2) {
      var a2 = this, i2 = [0], l2 = [], y = [null], e = [], B = this.table, c = "", C = 0, O = 0, it = 2, $ = 1, pt = e.slice.call(arguments, 1), S = Object.create(this.lexer), A = { yy: {} };
      for (var yt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, yt) && (A.yy[yt] = this.yy[yt]);
      S.setInput(r2, A.yy), A.yy.lexer = S, A.yy.parser = this, typeof S.yylloc > "u" && (S.yylloc = {});
      var St = S.yylloc;
      e.push(St);
      var zt = S.options && S.options.ranges;
      typeof A.yy.parseError == "function" ? this.parseError = A.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Mt() {
        var E;
        return E = l2.pop() || S.lex() || $, typeof E != "number" && (E instanceof Array && (l2 = E, E = l2.pop()), E = a2.symbols_[E] || E), E;
      }
      for (var _, L, m, gt, N = {}, rt, b, Lt, nt; ; ) {
        if (L = i2[i2.length - 1], this.defaultActions[L] ? m = this.defaultActions[L] : ((_ === null || typeof _ > "u") && (_ = Mt()), m = B[L] && B[L][_]), typeof m > "u" || !m.length || !m[0]) {
          var _t = "";
          nt = [];
          for (rt in B[L])
            this.terminals_[rt] && rt > it && nt.push("'" + this.terminals_[rt] + "'");
          S.showPosition ? _t = "Parse error on line " + (C + 1) + `:
` + S.showPosition() + `
Expecting ` + nt.join(", ") + ", got '" + (this.terminals_[_] || _) + "'" : _t = "Parse error on line " + (C + 1) + ": Unexpected " + (_ == $ ? "end of input" : "'" + (this.terminals_[_] || _) + "'"), this.parseError(_t, {
            text: S.match,
            token: this.terminals_[_] || _,
            line: S.yylineno,
            loc: St,
            expected: nt
          });
        }
        if (m[0] instanceof Array && m.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + L + ", token: " + _);
        switch (m[0]) {
          case 1:
            i2.push(_), y.push(S.yytext), e.push(S.yylloc), i2.push(m[1]), _ = null, O = S.yyleng, c = S.yytext, C = S.yylineno, St = S.yylloc;
            break;
          case 2:
            if (b = this.productions_[m[1]][1], N.$ = y[y.length - b], N._$ = {
              first_line: e[e.length - (b || 1)].first_line,
              last_line: e[e.length - 1].last_line,
              first_column: e[e.length - (b || 1)].first_column,
              last_column: e[e.length - 1].last_column
            }, zt && (N._$.range = [
              e[e.length - (b || 1)].range[0],
              e[e.length - 1].range[1]
            ]), gt = this.performAction.apply(N, [
              c,
              O,
              C,
              A.yy,
              m[1],
              y,
              e
            ].concat(pt)), typeof gt < "u")
              return gt;
            b && (i2 = i2.slice(0, -1 * b * 2), y = y.slice(0, -1 * b), e = e.slice(0, -1 * b)), i2.push(this.productions_[m[1]][0]), y.push(N.$), e.push(N._$), Lt = B[i2[i2.length - 2]][i2[i2.length - 1]], i2.push(Lt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, Ut = function() {
    var D = {
      EOF: 1,
      parseError: function(a2, i2) {
        if (this.yy.parser)
          this.yy.parser.parseError(a2, i2);
        else
          throw new Error(a2);
      },
      // resets the lexer, sets new input
      setInput: function(r2, a2) {
        return this.yy = a2 || this.yy || {}, this._input = r2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var r2 = this._input[0];
        this.yytext += r2, this.yyleng++, this.offset++, this.match += r2, this.matched += r2;
        var a2 = r2.match(/(?:\r\n?|\n).*/g);
        return a2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r2;
      },
      // unshifts one char (or a string) into the input
      unput: function(r2) {
        var a2 = r2.length, i2 = r2.split(/(?:\r\n?|\n)/g);
        this._input = r2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a2), this.offset -= a2;
        var l2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i2.length - 1 && (this.yylineno -= i2.length - 1);
        var y = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: i2 ? (i2.length === l2.length ? this.yylloc.first_column : 0) + l2[l2.length - i2.length].length - i2[0].length : this.yylloc.first_column - a2
        }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - a2]), this.yyleng = this.yytext.length, this;
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
      less: function(r2) {
        this.unput(this.match.slice(r2));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var r2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (r2.length > 20 ? "..." : "") + r2.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var r2 = this.match;
        return r2.length < 20 && (r2 += this._input.substr(0, 20 - r2.length)), (r2.substr(0, 20) + (r2.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var r2 = this.pastInput(), a2 = new Array(r2.length + 1).join("-");
        return r2 + this.upcomingInput() + `
` + a2 + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(r2, a2) {
        var i2, l2, y;
        if (this.options.backtrack_lexer && (y = {
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
        }, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), l2 = r2[0].match(/(?:\r\n?|\n).*/g), l2 && (this.yylineno += l2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: l2 ? l2[l2.length - 1].length - l2[l2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r2[0].length
        }, this.yytext += r2[0], this.match += r2[0], this.matches = r2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r2[0].length), this.matched += r2[0], i2 = this.performAction.call(this, this.yy, this, a2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), i2)
          return i2;
        if (this._backtrack) {
          for (var e in y)
            this[e] = y[e];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var r2, a2, i2, l2;
        this._more || (this.yytext = "", this.match = "");
        for (var y = this._currentRules(), e = 0; e < y.length; e++)
          if (i2 = this._input.match(this.rules[y[e]]), i2 && (!a2 || i2[0].length > a2[0].length)) {
            if (a2 = i2, l2 = e, this.options.backtrack_lexer) {
              if (r2 = this.test_match(i2, y[e]), r2 !== false)
                return r2;
              if (this._backtrack) {
                a2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a2 ? (r2 = this.test_match(a2, y[l2]), r2 !== false ? r2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
      performAction: function(a2, i2, l2, y) {
        switch (l2) {
          case 0:
            return 41;
          case 1:
            return 50;
          case 2:
            return 51;
          case 3:
            return 52;
          case 4:
            return 53;
          case 5:
            return this.begin("open_directive"), 60;
          case 6:
            return this.begin("type_directive"), 61;
          case 7:
            return this.popState(), this.begin("arg_directive"), 48;
          case 8:
            return this.popState(), this.popState(), 63;
          case 9:
            return 62;
          case 10:
            break;
          case 11:
            break;
          case 12:
            return 5;
          case 13:
            break;
          case 14:
            break;
          case 15:
            break;
          case 16:
            break;
          case 17:
            return this.pushState("SCALE"), 17;
          case 18:
            return 18;
          case 19:
            this.popState();
            break;
          case 20:
            return this.begin("acc_title"), 33;
          case 21:
            return this.popState(), "acc_title_value";
          case 22:
            return this.begin("acc_descr"), 35;
          case 23:
            return this.popState(), "acc_descr_value";
          case 24:
            this.begin("acc_descr_multiline");
            break;
          case 25:
            this.popState();
            break;
          case 26:
            return "acc_descr_multiline_value";
          case 27:
            return this.pushState("CLASSDEF"), 38;
          case 28:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 29:
            return this.popState(), this.pushState("CLASSDEFID"), 39;
          case 30:
            return this.popState(), 40;
          case 31:
            return this.pushState("CLASS"), 42;
          case 32:
            return this.popState(), this.pushState("CLASS_STYLE"), 43;
          case 33:
            return this.popState(), 44;
          case 34:
            return this.pushState("SCALE"), 17;
          case 35:
            return 18;
          case 36:
            this.popState();
            break;
          case 37:
            this.pushState("STATE");
            break;
          case 38:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -8).trim(), 25;
          case 39:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -8).trim(), 26;
          case 40:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -10).trim(), 27;
          case 41:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -8).trim(), 25;
          case 42:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -8).trim(), 26;
          case 43:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -10).trim(), 27;
          case 44:
            return 50;
          case 45:
            return 51;
          case 46:
            return 52;
          case 47:
            return 53;
          case 48:
            this.pushState("STATE_STRING");
            break;
          case 49:
            return this.pushState("STATE_ID"), "AS";
          case 50:
            return this.popState(), "ID";
          case 51:
            this.popState();
            break;
          case 52:
            return "STATE_DESCR";
          case 53:
            return 19;
          case 54:
            this.popState();
            break;
          case 55:
            return this.popState(), this.pushState("struct"), 20;
          case 56:
            break;
          case 57:
            return this.popState(), 21;
          case 58:
            break;
          case 59:
            return this.begin("NOTE"), 29;
          case 60:
            return this.popState(), this.pushState("NOTE_ID"), 58;
          case 61:
            return this.popState(), this.pushState("NOTE_ID"), 59;
          case 62:
            this.popState(), this.pushState("FLOATING_NOTE");
            break;
          case 63:
            return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
          case 64:
            break;
          case 65:
            return "NOTE_TEXT";
          case 66:
            return this.popState(), "ID";
          case 67:
            return this.popState(), this.pushState("NOTE_TEXT"), 24;
          case 68:
            return this.popState(), i2.yytext = i2.yytext.substr(2).trim(), 31;
          case 69:
            return this.popState(), i2.yytext = i2.yytext.slice(0, -8).trim(), 31;
          case 70:
            return 7;
          case 71:
            return 7;
          case 72:
            return 16;
          case 73:
            return 56;
          case 74:
            return 24;
          case 75:
            return i2.yytext = i2.yytext.trim(), 14;
          case 76:
            return 15;
          case 77:
            return 28;
          case 78:
            return 57;
          case 79:
            return 5;
          case 80:
            return "INVALID";
        }
      },
      rules: [/^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { LINE: { rules: [14, 15], inclusive: false }, close_directive: { rules: [14, 15], inclusive: false }, arg_directive: { rules: [8, 9, 14, 15], inclusive: false }, type_directive: { rules: [7, 8, 14, 15], inclusive: false }, open_directive: { rules: [6, 14, 15], inclusive: false }, struct: { rules: [14, 15, 27, 31, 37, 44, 45, 46, 47, 56, 57, 58, 59, 73, 74, 75, 76, 77], inclusive: false }, FLOATING_NOTE_ID: { rules: [66], inclusive: false }, FLOATING_NOTE: { rules: [63, 64, 65], inclusive: false }, NOTE_TEXT: { rules: [68, 69], inclusive: false }, NOTE_ID: { rules: [67], inclusive: false }, NOTE: { rules: [60, 61, 62], inclusive: false }, CLASS_STYLE: { rules: [33], inclusive: false }, CLASS: { rules: [32], inclusive: false }, CLASSDEFID: { rules: [30], inclusive: false }, CLASSDEF: { rules: [28, 29], inclusive: false }, acc_descr_multiline: { rules: [25, 26], inclusive: false }, acc_descr: { rules: [23], inclusive: false }, acc_title: { rules: [21], inclusive: false }, SCALE: { rules: [18, 19, 35, 36], inclusive: false }, ALIAS: { rules: [], inclusive: false }, STATE_ID: { rules: [50], inclusive: false }, STATE_STRING: { rules: [51, 52], inclusive: false }, FORK_STATE: { rules: [], inclusive: false }, STATE: { rules: [14, 15, 38, 39, 40, 41, 42, 43, 48, 49, 53, 54, 55], inclusive: false }, ID: { rules: [14, 15], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 15, 16, 17, 20, 22, 24, 27, 31, 34, 37, 55, 59, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80], inclusive: true } }
    };
    return D;
  }();
  ft.lexer = Ut;
  function dt() {
    this.yy = {};
  }
  return dt.prototype = ft, ft.Parser = dt, new dt();
}();
mt.parser = mt;
var Re = mt;
var ee = "LR";
var we = "TB";
var Tt = "state";
var Rt = "relation";
var se = "classDef";
var ie = "applyClass";
var xt = "default";
var re = "divider";
var vt = "[*]";
var wt = "start";
var Bt = vt;
var $t = "end";
var It = "color";
var Ot = "fill";
var ne = "bgFill";
var ae = ",";
function Pt() {
  return {};
}
var Vt = ee;
var lt = [];
var P = Pt();
var Ft = () => ({
  relations: [],
  states: {},
  documents: {}
});
var ot = {
  root: Ft()
};
var g2 = ot.root;
var V = 0;
var Nt = 0;
var ce = {
  LINE: 0,
  DOTTED_LINE: 1
};
var le = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
};
var at = (t) => JSON.parse(JSON.stringify(t));
var oe = function(t, s2, n) {
  ws.parseDirective(this, t, s2, n);
};
var he = (t) => {
  et.info("Setting root doc", t), lt = t;
};
var ue = () => lt;
var ct = (t, s2, n) => {
  if (s2.stmt === Rt)
    ct(t, s2.state1, true), ct(t, s2.state2, false);
  else if (s2.stmt === Tt && (s2.id === "[*]" ? (s2.id = n ? t.id + "_start" : t.id + "_end", s2.start = n) : s2.id = s2.id.trim()), s2.doc) {
    const h = [];
    let u2 = [], d;
    for (d = 0; d < s2.doc.length; d++)
      if (s2.doc[d].type === re) {
        const p = at(s2.doc[d]);
        p.doc = at(u2), h.push(p), u2 = [];
      } else
        u2.push(s2.doc[d]);
    if (h.length > 0 && u2.length > 0) {
      const p = {
        stmt: Tt,
        id: $o(),
        type: "divider",
        doc: at(u2)
      };
      h.push(at(p)), s2.doc = h;
    }
    s2.doc.forEach((p) => ct(s2, p, true));
  }
};
var fe = () => (ct({ id: "root" }, { id: "root", doc: lt }, true), { id: "root", doc: lt });
var de = (t) => {
  let s2;
  t.doc ? s2 = t.doc : s2 = t, et.info(s2), Yt(true), et.info("Extract", s2), s2.forEach((n) => {
    switch (n.stmt) {
      case Tt:
        I(
          n.id.trim(),
          n.type,
          n.doc,
          n.description,
          n.note,
          n.classes,
          n.styles,
          n.textStyles
        );
        break;
      case Rt:
        Gt(n.state1, n.state2, n.description);
        break;
      case se:
        jt(n.id.trim(), n.classes);
        break;
      case ie:
        Dt(n.id.trim(), n.styleClass);
        break;
    }
  });
};
var I = function(t, s2 = xt, n = null, h = null, u2 = null, d = null, p = null, v = null) {
  const f = t == null ? void 0 : t.trim();
  g2.states[f] === void 0 ? (et.info("Adding state ", f, h), g2.states[f] = {
    id: f,
    descriptions: [],
    type: s2,
    doc: n,
    note: u2,
    classes: [],
    styles: [],
    textStyles: []
  }) : (g2.states[f].doc || (g2.states[f].doc = n), g2.states[f].type || (g2.states[f].type = s2)), h && (et.info("Setting state description", f, h), typeof h == "string" && Et(f, h.trim()), typeof h == "object" && h.forEach((k) => Et(f, k.trim()))), u2 && (g2.states[f].note = u2, g2.states[f].note.text = ah.sanitizeText(
    g2.states[f].note.text,
    th()
  )), d && (et.info("Setting state classes", f, d), (typeof d == "string" ? [d] : d).forEach((T) => Dt(f, T.trim()))), p && (et.info("Setting state styles", f, p), (typeof p == "string" ? [p] : p).forEach((T) => Ee(f, T.trim()))), v && (et.info("Setting state styles", f, p), (typeof v == "string" ? [v] : v).forEach((T) => xe(f, T.trim())));
};
var Yt = function(t) {
  ot = {
    root: Ft()
  }, g2 = ot.root, V = 0, P = Pt(), t || s();
};
var F = function(t) {
  return g2.states[t];
};
var pe = function() {
  return g2.states;
};
var ye = function() {
  et.info("Documents = ", ot);
};
var Se = function() {
  return g2.relations;
};
function kt(t = "") {
  let s2 = t;
  return t === vt && (V++, s2 = `${wt}${V}`), s2;
}
function bt(t = "", s2 = xt) {
  return t === vt ? wt : s2;
}
function ge(t = "") {
  let s2 = t;
  return t === Bt && (V++, s2 = `${$t}${V}`), s2;
}
function _e(t = "", s2 = xt) {
  return t === Bt ? $t : s2;
}
function me(t, s2, n) {
  let h = kt(t.id.trim()), u2 = bt(t.id.trim(), t.type), d = kt(s2.id.trim()), p = bt(s2.id.trim(), s2.type);
  I(
    h,
    u2,
    t.doc,
    t.description,
    t.note,
    t.classes,
    t.styles,
    t.textStyles
  ), I(
    d,
    p,
    s2.doc,
    s2.description,
    s2.note,
    s2.classes,
    s2.styles,
    s2.textStyles
  ), g2.relations.push({
    id1: h,
    id2: d,
    relationTitle: ah.sanitizeText(n, th())
  });
}
var Gt = function(t, s2, n) {
  if (typeof t == "object")
    me(t, s2, n);
  else {
    const h = kt(t.trim()), u2 = bt(t), d = ge(s2.trim()), p = _e(s2);
    I(h, u2), I(d, p), g2.relations.push({
      id1: h,
      id2: d,
      title: ah.sanitizeText(n, th())
    });
  }
};
var Et = function(t, s2) {
  const n = g2.states[t], h = s2.startsWith(":") ? s2.replace(":", "").trim() : s2;
  n.descriptions.push(ah.sanitizeText(h, th()));
};
var Te = function(t) {
  return t.substring(0, 1) === ":" ? t.substr(2).trim() : t.trim();
};
var ke = () => (Nt++, "divider-id-" + Nt);
var jt = function(t, s2 = "") {
  P[t] === void 0 && (P[t] = { id: t, styles: [], textStyles: [] });
  const n = P[t];
  s2 != null && s2.split(ae).forEach((h) => {
    const u2 = h.replace(/([^;]*);/, "$1").trim();
    if (h.match(It)) {
      const p = u2.replace(Ot, ne).replace(It, Ot);
      n.textStyles.push(p);
    }
    n.styles.push(u2);
  });
};
var be = function() {
  return P;
};
var Dt = function(t, s2) {
  t.split(",").forEach(function(n) {
    let h = F(n);
    if (h === void 0) {
      const u2 = n.trim();
      I(u2), h = F(u2);
    }
    h.classes.push(s2);
  });
};
var Ee = function(t, s2) {
  const n = F(t);
  n !== void 0 && n.textStyles.push(s2);
};
var xe = function(t, s2) {
  const n = F(t);
  n !== void 0 && n.textStyles.push(s2);
};
var ve = () => Vt;
var De = (t) => {
  Vt = t;
};
var Ce = (t) => t && t[0] === ":" ? t.substr(1).trim() : t.trim();
var Be = {
  parseDirective: oe,
  getConfig: () => th().state,
  addState: I,
  clear: Yt,
  getState: F,
  getStates: pe,
  getRelations: Se,
  getClasses: be,
  getDirection: ve,
  addRelation: Gt,
  getDividerId: ke,
  setDirection: De,
  cleanupLabel: Te,
  lineType: ce,
  relationType: le,
  logDocuments: ye,
  getRootDoc: ue,
  setRootDoc: he,
  getRootDocV2: fe,
  extract: de,
  trimColon: Ce,
  getAccTitle: a,
  setAccTitle: i,
  getAccDescription: l,
  setAccDescription: r,
  addStyleClass: jt,
  setCssClass: Dt,
  addDescription: Et,
  setDiagramTitle: g,
  getDiagramTitle: u
};
var Ae = (t) => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`;
var $e = Ae;

export {
  Re,
  ee,
  we,
  Tt,
  Rt,
  xt,
  re,
  Be,
  $e
};
//# sourceMappingURL=chunk-HOMF2E2C.js.map
