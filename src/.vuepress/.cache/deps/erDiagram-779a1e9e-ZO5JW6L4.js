import {
  A,
  ks
} from "./chunk-4YVXMPIA.js";
import {
  z
} from "./chunk-ZBFL4OS2.js";
import "./chunk-MAFLJJKP.js";
import "./chunk-WC7ESL3H.js";
import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  Ue,
  fs
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
  et,
  nh,
  th,
  xl
} from "./chunk-QVXOEG34.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/erDiagram-779a1e9e.js
var ot = function() {
  var t = function(v, n, s2, d) {
    for (s2 = s2 || {}, d = v.length; d--; s2[v[d]] = n)
      ;
    return s2;
  }, r2 = [1, 2], e = [1, 5], a2 = [6, 9, 11, 23, 25, 27, 29, 30, 31, 51], c = [1, 17], p = [1, 18], f = [1, 19], l2 = [1, 20], h = [1, 21], _ = [1, 22], m = [1, 25], E = [1, 30], O = [1, 31], y = [1, 32], M = [1, 33], D = [6, 9, 11, 15, 20, 23, 25, 27, 29, 30, 31, 44, 45, 46, 47, 51], V = [1, 45], z2 = [30, 31, 48, 49], L = [4, 6, 9, 11, 23, 25, 27, 29, 30, 31, 51], R = [44, 45, 46, 47], N = [22, 37], T = [1, 65], k = [1, 64], S = [22, 37, 39, 41], C = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, ER_DIAGRAM: 4, document: 5, EOF: 6, directive: 7, line: 8, SPACE: 9, statement: 10, NEWLINE: 11, openDirective: 12, typeDirective: 13, closeDirective: 14, ":": 15, argDirective: 16, entityName: 17, relSpec: 18, role: 19, BLOCK_START: 20, attributes: 21, BLOCK_STOP: 22, title: 23, title_value: 24, acc_title: 25, acc_title_value: 26, acc_descr: 27, acc_descr_value: 28, acc_descr_multiline_value: 29, ALPHANUM: 30, ENTITY_NAME: 31, attribute: 32, attributeType: 33, attributeName: 34, attributeKeyTypeList: 35, attributeComment: 36, ATTRIBUTE_WORD: 37, attributeKeyType: 38, COMMA: 39, ATTRIBUTE_KEY: 40, COMMENT: 41, cardinality: 42, relType: 43, ZERO_OR_ONE: 44, ZERO_OR_MORE: 45, ONE_OR_MORE: 46, ONLY_ONE: 47, NON_IDENTIFYING: 48, IDENTIFYING: 49, WORD: 50, open_directive: 51, type_directive: 52, arg_directive: 53, close_directive: 54, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "ER_DIAGRAM", 6: "EOF", 9: "SPACE", 11: "NEWLINE", 15: ":", 20: "BLOCK_START", 22: "BLOCK_STOP", 23: "title", 24: "title_value", 25: "acc_title", 26: "acc_title_value", 27: "acc_descr", 28: "acc_descr_value", 29: "acc_descr_multiline_value", 30: "ALPHANUM", 31: "ENTITY_NAME", 37: "ATTRIBUTE_WORD", 39: "COMMA", 40: "ATTRIBUTE_KEY", 41: "COMMENT", 44: "ZERO_OR_ONE", 45: "ZERO_OR_MORE", 46: "ONE_OR_MORE", 47: "ONLY_ONE", 48: "NON_IDENTIFYING", 49: "IDENTIFYING", 50: "WORD", 51: "open_directive", 52: "type_directive", 53: "arg_directive", 54: "close_directive" },
    productions_: [0, [3, 3], [3, 2], [5, 0], [5, 2], [8, 2], [8, 1], [8, 1], [8, 1], [7, 4], [7, 6], [10, 1], [10, 5], [10, 4], [10, 3], [10, 1], [10, 2], [10, 2], [10, 2], [10, 1], [17, 1], [17, 1], [21, 1], [21, 2], [32, 2], [32, 3], [32, 3], [32, 4], [33, 1], [34, 1], [35, 1], [35, 3], [38, 1], [36, 1], [18, 3], [42, 1], [42, 1], [42, 1], [42, 1], [43, 1], [43, 1], [19, 1], [19, 1], [19, 1], [12, 1], [13, 1], [16, 1], [14, 1]],
    performAction: function(n, s2, d, u2, g2, i2, X) {
      var o = i2.length - 1;
      switch (g2) {
        case 1:
          break;
        case 3:
          this.$ = [];
          break;
        case 4:
          i2[o - 1].push(i2[o]), this.$ = i2[o - 1];
          break;
        case 5:
        case 6:
          this.$ = i2[o];
          break;
        case 7:
        case 8:
          this.$ = [];
          break;
        case 12:
          u2.addEntity(i2[o - 4]), u2.addEntity(i2[o - 2]), u2.addRelationship(i2[o - 4], i2[o], i2[o - 2], i2[o - 3]);
          break;
        case 13:
          u2.addEntity(i2[o - 3]), u2.addAttributes(i2[o - 3], i2[o - 1]);
          break;
        case 14:
          u2.addEntity(i2[o - 2]);
          break;
        case 15:
          u2.addEntity(i2[o]);
          break;
        case 16:
        case 17:
          this.$ = i2[o].trim(), u2.setAccTitle(this.$);
          break;
        case 18:
        case 19:
          this.$ = i2[o].trim(), u2.setAccDescription(this.$);
          break;
        case 20:
        case 43:
          this.$ = i2[o];
          break;
        case 21:
        case 41:
        case 42:
          this.$ = i2[o].replace(/"/g, "");
          break;
        case 22:
        case 30:
          this.$ = [i2[o]];
          break;
        case 23:
          i2[o].push(i2[o - 1]), this.$ = i2[o];
          break;
        case 24:
          this.$ = { attributeType: i2[o - 1], attributeName: i2[o] };
          break;
        case 25:
          this.$ = { attributeType: i2[o - 2], attributeName: i2[o - 1], attributeKeyTypeList: i2[o] };
          break;
        case 26:
          this.$ = { attributeType: i2[o - 2], attributeName: i2[o - 1], attributeComment: i2[o] };
          break;
        case 27:
          this.$ = { attributeType: i2[o - 3], attributeName: i2[o - 2], attributeKeyTypeList: i2[o - 1], attributeComment: i2[o] };
          break;
        case 28:
        case 29:
        case 32:
          this.$ = i2[o];
          break;
        case 31:
          i2[o - 2].push(i2[o]), this.$ = i2[o - 2];
          break;
        case 33:
          this.$ = i2[o].replace(/"/g, "");
          break;
        case 34:
          this.$ = { cardA: i2[o], relType: i2[o - 1], cardB: i2[o - 2] };
          break;
        case 35:
          this.$ = u2.Cardinality.ZERO_OR_ONE;
          break;
        case 36:
          this.$ = u2.Cardinality.ZERO_OR_MORE;
          break;
        case 37:
          this.$ = u2.Cardinality.ONE_OR_MORE;
          break;
        case 38:
          this.$ = u2.Cardinality.ONLY_ONE;
          break;
        case 39:
          this.$ = u2.Identification.NON_IDENTIFYING;
          break;
        case 40:
          this.$ = u2.Identification.IDENTIFYING;
          break;
        case 44:
          u2.parseDirective("%%{", "open_directive");
          break;
        case 45:
          u2.parseDirective(i2[o], "type_directive");
          break;
        case 46:
          i2[o] = i2[o].trim().replace(/'/g, '"'), u2.parseDirective(i2[o], "arg_directive");
          break;
        case 47:
          u2.parseDirective("}%%", "close_directive", "er");
          break;
      }
    },
    table: [{ 3: 1, 4: r2, 7: 3, 12: 4, 51: e }, { 1: [3] }, t(a2, [2, 3], { 5: 6 }), { 3: 7, 4: r2, 7: 3, 12: 4, 51: e }, { 13: 8, 52: [1, 9] }, { 52: [2, 44] }, { 6: [1, 10], 7: 15, 8: 11, 9: [1, 12], 10: 13, 11: [1, 14], 12: 4, 17: 16, 23: c, 25: p, 27: f, 29: l2, 30: h, 31: _, 51: e }, { 1: [2, 2] }, { 14: 23, 15: [1, 24], 54: m }, t([15, 54], [2, 45]), t(a2, [2, 8], { 1: [2, 1] }), t(a2, [2, 4]), { 7: 15, 10: 26, 12: 4, 17: 16, 23: c, 25: p, 27: f, 29: l2, 30: h, 31: _, 51: e }, t(a2, [2, 6]), t(a2, [2, 7]), t(a2, [2, 11]), t(a2, [2, 15], { 18: 27, 42: 29, 20: [1, 28], 44: E, 45: O, 46: y, 47: M }), { 24: [1, 34] }, { 26: [1, 35] }, { 28: [1, 36] }, t(a2, [2, 19]), t(D, [2, 20]), t(D, [2, 21]), { 11: [1, 37] }, { 16: 38, 53: [1, 39] }, { 11: [2, 47] }, t(a2, [2, 5]), { 17: 40, 30: h, 31: _ }, { 21: 41, 22: [1, 42], 32: 43, 33: 44, 37: V }, { 43: 46, 48: [1, 47], 49: [1, 48] }, t(z2, [2, 35]), t(z2, [2, 36]), t(z2, [2, 37]), t(z2, [2, 38]), t(a2, [2, 16]), t(a2, [2, 17]), t(a2, [2, 18]), t(L, [2, 9]), { 14: 49, 54: m }, { 54: [2, 46] }, { 15: [1, 50] }, { 22: [1, 51] }, t(a2, [2, 14]), { 21: 52, 22: [2, 22], 32: 43, 33: 44, 37: V }, { 34: 53, 37: [1, 54] }, { 37: [2, 28] }, { 42: 55, 44: E, 45: O, 46: y, 47: M }, t(R, [2, 39]), t(R, [2, 40]), { 11: [1, 56] }, { 19: 57, 30: [1, 60], 31: [1, 59], 50: [1, 58] }, t(a2, [2, 13]), { 22: [2, 23] }, t(N, [2, 24], { 35: 61, 36: 62, 38: 63, 40: T, 41: k }), t([22, 37, 40, 41], [2, 29]), t([30, 31], [2, 34]), t(L, [2, 10]), t(a2, [2, 12]), t(a2, [2, 41]), t(a2, [2, 42]), t(a2, [2, 43]), t(N, [2, 25], { 36: 66, 39: [1, 67], 41: k }), t(N, [2, 26]), t(S, [2, 30]), t(N, [2, 33]), t(S, [2, 32]), t(N, [2, 27]), { 38: 68, 40: T }, t(S, [2, 31])],
    defaultActions: { 5: [2, 44], 7: [2, 2], 25: [2, 47], 39: [2, 46], 45: [2, 28], 52: [2, 23] },
    parseError: function(n, s2) {
      if (s2.recoverable)
        this.trace(n);
      else {
        var d = new Error(n);
        throw d.hash = s2, d;
      }
    },
    parse: function(n) {
      var s2 = this, d = [0], u2 = [], g2 = [null], i2 = [], X = this.table, o = "", q = 0, lt = 0, _t = 2, ht = 1, mt = i2.slice.call(arguments, 1), b = Object.create(this.lexer), G = { yy: {} };
      for (var et2 in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, et2) && (G.yy[et2] = this.yy[et2]);
      b.setInput(n, G.yy), G.yy.lexer = b, G.yy.parser = this, typeof b.yylloc > "u" && (b.yylloc = {});
      var rt = b.yylloc;
      i2.push(rt);
      var gt = b.options && b.options.ranges;
      typeof G.yy.parseError == "function" ? this.parseError = G.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Et() {
        var F;
        return F = u2.pop() || b.lex() || ht, typeof F != "number" && (F instanceof Array && (u2 = F, F = u2.pop()), F = s2.symbols_[F] || F), F;
      }
      for (var I, K, w, it, H = {}, J, Z, dt, $2; ; ) {
        if (K = d[d.length - 1], this.defaultActions[K] ? w = this.defaultActions[K] : ((I === null || typeof I > "u") && (I = Et()), w = X[K] && X[K][I]), typeof w > "u" || !w.length || !w[0]) {
          var nt = "";
          $2 = [];
          for (J in X[K])
            this.terminals_[J] && J > _t && $2.push("'" + this.terminals_[J] + "'");
          b.showPosition ? nt = "Parse error on line " + (q + 1) + `:
` + b.showPosition() + `
Expecting ` + $2.join(", ") + ", got '" + (this.terminals_[I] || I) + "'" : nt = "Parse error on line " + (q + 1) + ": Unexpected " + (I == ht ? "end of input" : "'" + (this.terminals_[I] || I) + "'"), this.parseError(nt, {
            text: b.match,
            token: this.terminals_[I] || I,
            line: b.yylineno,
            loc: rt,
            expected: $2
          });
        }
        if (w[0] instanceof Array && w.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + K + ", token: " + I);
        switch (w[0]) {
          case 1:
            d.push(I), g2.push(b.yytext), i2.push(b.yylloc), d.push(w[1]), I = null, lt = b.yyleng, o = b.yytext, q = b.yylineno, rt = b.yylloc;
            break;
          case 2:
            if (Z = this.productions_[w[1]][1], H.$ = g2[g2.length - Z], H._$ = {
              first_line: i2[i2.length - (Z || 1)].first_line,
              last_line: i2[i2.length - 1].last_line,
              first_column: i2[i2.length - (Z || 1)].first_column,
              last_column: i2[i2.length - 1].last_column
            }, gt && (H._$.range = [
              i2[i2.length - (Z || 1)].range[0],
              i2[i2.length - 1].range[1]
            ]), it = this.performAction.apply(H, [
              o,
              lt,
              q,
              G.yy,
              w[1],
              g2,
              i2
            ].concat(mt)), typeof it < "u")
              return it;
            Z && (d = d.slice(0, -1 * Z * 2), g2 = g2.slice(0, -1 * Z), i2 = i2.slice(0, -1 * Z)), d.push(this.productions_[w[1]][0]), g2.push(H.$), i2.push(H._$), dt = X[d[d.length - 2]][d[d.length - 1]], d.push(dt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, B = function() {
    var v = {
      EOF: 1,
      parseError: function(s2, d) {
        if (this.yy.parser)
          this.yy.parser.parseError(s2, d);
        else
          throw new Error(s2);
      },
      // resets the lexer, sets new input
      setInput: function(n, s2) {
        return this.yy = s2 || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var s2 = n.match(/(?:\r\n?|\n).*/g);
        return s2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), n;
      },
      // unshifts one char (or a string) into the input
      unput: function(n) {
        var s2 = n.length, d = n.split(/(?:\r\n?|\n)/g);
        this._input = n + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - s2), this.offset -= s2;
        var u2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
        var g2 = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: d ? (d.length === u2.length ? this.yylloc.first_column : 0) + u2[u2.length - d.length].length - d[0].length : this.yylloc.first_column - s2
        }, this.options.ranges && (this.yylloc.range = [g2[0], g2[0] + this.yyleng - s2]), this.yyleng = this.yytext.length, this;
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
        var n = this.pastInput(), s2 = new Array(n.length + 1).join("-");
        return n + this.upcomingInput() + `
` + s2 + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(n, s2) {
        var d, u2, g2;
        if (this.options.backtrack_lexer && (g2 = {
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
        }, this.options.ranges && (g2.yylloc.range = this.yylloc.range.slice(0))), u2 = n[0].match(/(?:\r\n?|\n).*/g), u2 && (this.yylineno += u2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u2 ? u2[u2.length - 1].length - u2[u2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
        }, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(n[0].length), this.matched += n[0], d = this.performAction.call(this, this.yy, this, s2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), d)
          return d;
        if (this._backtrack) {
          for (var i2 in g2)
            this[i2] = g2[i2];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var n, s2, d, u2;
        this._more || (this.yytext = "", this.match = "");
        for (var g2 = this._currentRules(), i2 = 0; i2 < g2.length; i2++)
          if (d = this._input.match(this.rules[g2[i2]]), d && (!s2 || d[0].length > s2[0].length)) {
            if (s2 = d, u2 = i2, this.options.backtrack_lexer) {
              if (n = this.test_match(d, g2[i2]), n !== false)
                return n;
              if (this._backtrack) {
                s2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return s2 ? (n = this.test_match(s2, g2[u2]), n !== false ? n : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var s2 = this.next();
        return s2 || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(s2) {
        this.conditionStack.push(s2);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var s2 = this.conditionStack.length - 1;
        return s2 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(s2) {
        return s2 = this.conditionStack.length - 1 - Math.abs(s2 || 0), s2 >= 0 ? this.conditionStack[s2] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(s2) {
        this.begin(s2);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(s2, d, u2, g2) {
        switch (u2) {
          case 0:
            return this.begin("acc_title"), 25;
          case 1:
            return this.popState(), "acc_title_value";
          case 2:
            return this.begin("acc_descr"), 27;
          case 3:
            return this.popState(), "acc_descr_value";
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
          case 7:
            return this.begin("open_directive"), 51;
          case 8:
            return this.begin("type_directive"), 52;
          case 9:
            return this.popState(), this.begin("arg_directive"), 15;
          case 10:
            return this.popState(), this.popState(), 54;
          case 11:
            return 53;
          case 12:
            break;
          case 13:
            break;
          case 14:
            return 11;
          case 15:
            break;
          case 16:
            return 9;
          case 17:
            return 31;
          case 18:
            return 50;
          case 19:
            return 4;
          case 20:
            return this.begin("block"), 20;
          case 21:
            return 39;
          case 22:
            break;
          case 23:
            return 40;
          case 24:
            return 37;
          case 25:
            return 37;
          case 26:
            return 41;
          case 27:
            break;
          case 28:
            break;
          case 29:
            break;
          case 30:
            return this.popState(), 22;
          case 31:
            return d.yytext[0];
          case 32:
            return 44;
          case 33:
            return 46;
          case 34:
            return 46;
          case 35:
            return 46;
          case 36:
            return 44;
          case 37:
            return 44;
          case 38:
            return 45;
          case 39:
            return 45;
          case 40:
            return 45;
          case 41:
            return 45;
          case 42:
            return 45;
          case 43:
            return 46;
          case 44:
            return 45;
          case 45:
            return 46;
          case 46:
            return 47;
          case 47:
            return 47;
          case 48:
            return 47;
          case 49:
            return 47;
          case 50:
            return 44;
          case 51:
            return 45;
          case 52:
            return 46;
          case 53:
            return 48;
          case 54:
            return 49;
          case 55:
            return 49;
          case 56:
            return 48;
          case 57:
            return 48;
          case 58:
            return 48;
          case 59:
            return 30;
          case 60:
            return d.yytext[0];
          case 61:
            return 6;
        }
      },
      rules: [/^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:[\s]+)/i, /^(?:"[^"%\r\n\v\b\\]+")/i, /^(?:"[^"]*")/i, /^(?:erDiagram\b)/i, /^(?:\{)/i, /^(?:,)/i, /^(?:\s+)/i, /^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i, /^(?:(.*?)[~](.*?)*[~])/i, /^(?:[A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i, /^(?:"[^"]*")/i, /^(?:[\n]+)/i, /^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:\})/i, /^(?:.)/i, /^(?:one or zero\b)/i, /^(?:one or more\b)/i, /^(?:one or many\b)/i, /^(?:1\+)/i, /^(?:\|o\b)/i, /^(?:zero or one\b)/i, /^(?:zero or more\b)/i, /^(?:zero or many\b)/i, /^(?:0\+)/i, /^(?:\}o\b)/i, /^(?:many\(0\))/i, /^(?:many\(1\))/i, /^(?:many\b)/i, /^(?:\}\|)/i, /^(?:one\b)/i, /^(?:only one\b)/i, /^(?:1\b)/i, /^(?:\|\|)/i, /^(?:o\|)/i, /^(?:o\{)/i, /^(?:\|\{)/i, /^(?:\.\.)/i, /^(?:--)/i, /^(?:to\b)/i, /^(?:optionally to\b)/i, /^(?:\.-)/i, /^(?:-\.)/i, /^(?:[A-Za-z][A-Za-z0-9\-_]*)/i, /^(?:.)/i, /^(?:$)/i],
      conditions: { acc_descr_multiline: { rules: [5, 6], inclusive: false }, acc_descr: { rules: [3], inclusive: false }, acc_title: { rules: [1], inclusive: false }, open_directive: { rules: [8], inclusive: false }, type_directive: { rules: [9, 10], inclusive: false }, arg_directive: { rules: [10, 11], inclusive: false }, block: { rules: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], inclusive: false }, INITIAL: { rules: [0, 2, 4, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], inclusive: true } }
    };
    return v;
  }();
  C.lexer = B;
  function Y() {
    this.yy = {};
  }
  return Y.prototype = C, C.Parser = Y, new Y();
}();
ot.parser = ot;
var Lt = ot;
var Q = {};
var ct = [];
var Ct = {
  ZERO_OR_ONE: "ZERO_OR_ONE",
  ZERO_OR_MORE: "ZERO_OR_MORE",
  ONE_OR_MORE: "ONE_OR_MORE",
  ONLY_ONE: "ONLY_ONE"
};
var Yt = {
  NON_IDENTIFYING: "NON_IDENTIFYING",
  IDENTIFYING: "IDENTIFYING"
};
var Zt = function(t, r2, e) {
  ws.parseDirective(this, t, r2, e);
};
var yt = function(t) {
  return Q[t] === void 0 && (Q[t] = { attributes: [] }, et.info("Added new entity :", t)), Q[t];
};
var Ft = () => Q;
var Pt = function(t, r2) {
  let e = yt(t), a2;
  for (a2 = r2.length - 1; a2 >= 0; a2--)
    e.attributes.push(r2[a2]), et.debug("Added attribute ", r2[a2].attributeName);
};
var Wt = function(t, r2, e, a2) {
  let c = {
    entityA: t,
    roleA: r2,
    entityB: e,
    relSpec: a2
  };
  ct.push(c), et.debug("Added new relationship :", c);
};
var Ut = () => ct;
var Vt = function() {
  Q = {}, ct = [], s();
};
var zt = {
  Cardinality: Ct,
  Identification: Yt,
  parseDirective: Zt,
  getConfig: () => th().er,
  addEntity: yt,
  addAttributes: Pt,
  getEntities: Ft,
  addRelationship: Wt,
  getRelationships: Ut,
  clear: Vt,
  setAccTitle: i,
  getAccTitle: a,
  setAccDescription: r,
  getAccDescription: l,
  setDiagramTitle: g,
  getDiagramTitle: u
};
var P = {
  ONLY_ONE_START: "ONLY_ONE_START",
  ONLY_ONE_END: "ONLY_ONE_END",
  ZERO_OR_ONE_START: "ZERO_OR_ONE_START",
  ZERO_OR_ONE_END: "ZERO_OR_ONE_END",
  ONE_OR_MORE_START: "ONE_OR_MORE_START",
  ONE_OR_MORE_END: "ONE_OR_MORE_END",
  ZERO_OR_MORE_START: "ZERO_OR_MORE_START",
  ZERO_OR_MORE_END: "ZERO_OR_MORE_END"
};
var Gt = function(t, r2) {
  let e;
  t.append("defs").append("marker").attr("id", P.ONLY_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18 M15,0 L15,18"), t.append("defs").append("marker").attr("id", P.ONLY_ONE_END).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M3,0 L3,18 M9,0 L9,18"), e = t.append("defs").append("marker").attr("id", P.ZERO_OR_ONE_START).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto"), e.append("circle").attr("stroke", r2.stroke).attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), e.append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M9,0 L9,18"), e = t.append("defs").append("marker").attr("id", P.ZERO_OR_ONE_END).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto"), e.append("circle").attr("stroke", r2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), e.append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M21,0 L21,18"), t.append("defs").append("marker").attr("id", P.ONE_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), t.append("defs").append("marker").attr("id", P.ONE_OR_MORE_END).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"), e = t.append("defs").append("marker").attr("id", P.ZERO_OR_MORE_START).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto"), e.append("circle").attr("stroke", r2.stroke).attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), e.append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18"), e = t.append("defs").append("marker").attr("id", P.ZERO_OR_MORE_END).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto"), e.append("circle").attr("stroke", r2.stroke).attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), e.append("path").attr("stroke", r2.stroke).attr("fill", "none").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
};
var W = {
  ERMarkers: P,
  insertMarkers: Gt
};
var Kt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Ht(t) {
  return typeof t == "string" && Kt.test(t);
}
var A2 = [];
for (let t = 0; t < 256; ++t)
  A2.push((t + 256).toString(16).slice(1));
function Xt(t, r2 = 0) {
  return (A2[t[r2 + 0]] + A2[t[r2 + 1]] + A2[t[r2 + 2]] + A2[t[r2 + 3]] + "-" + A2[t[r2 + 4]] + A2[t[r2 + 5]] + "-" + A2[t[r2 + 6]] + A2[t[r2 + 7]] + "-" + A2[t[r2 + 8]] + A2[t[r2 + 9]] + "-" + A2[t[r2 + 10]] + A2[t[r2 + 11]] + A2[t[r2 + 12]] + A2[t[r2 + 13]] + A2[t[r2 + 14]] + A2[t[r2 + 15]]).toLowerCase();
}
function Qt(t) {
  if (!Ht(t))
    throw TypeError("Invalid UUID");
  let r2;
  const e = new Uint8Array(16);
  return e[0] = (r2 = parseInt(t.slice(0, 8), 16)) >>> 24, e[1] = r2 >>> 16 & 255, e[2] = r2 >>> 8 & 255, e[3] = r2 & 255, e[4] = (r2 = parseInt(t.slice(9, 13), 16)) >>> 8, e[5] = r2 & 255, e[6] = (r2 = parseInt(t.slice(14, 18), 16)) >>> 8, e[7] = r2 & 255, e[8] = (r2 = parseInt(t.slice(19, 23), 16)) >>> 8, e[9] = r2 & 255, e[10] = (r2 = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = r2 / 4294967296 & 255, e[12] = r2 >>> 24 & 255, e[13] = r2 >>> 16 & 255, e[14] = r2 >>> 8 & 255, e[15] = r2 & 255, e;
}
function jt(t) {
  t = unescape(encodeURIComponent(t));
  const r2 = [];
  for (let e = 0; e < t.length; ++e)
    r2.push(t.charCodeAt(e));
  return r2;
}
var qt = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var Jt = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function $t(t, r2, e) {
  function a2(c, p, f, l2) {
    var h;
    if (typeof c == "string" && (c = jt(c)), typeof p == "string" && (p = Qt(p)), ((h = p) === null || h === void 0 ? void 0 : h.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let _ = new Uint8Array(16 + c.length);
    if (_.set(p), _.set(c, p.length), _ = e(_), _[6] = _[6] & 15 | r2, _[8] = _[8] & 63 | 128, f) {
      l2 = l2 || 0;
      for (let m = 0; m < 16; ++m)
        f[l2 + m] = _[m];
      return f;
    }
    return Xt(_);
  }
  try {
    a2.name = t;
  } catch {
  }
  return a2.DNS = qt, a2.URL = Jt, a2;
}
function te(t, r2, e, a2) {
  switch (t) {
    case 0:
      return r2 & e ^ ~r2 & a2;
    case 1:
      return r2 ^ e ^ a2;
    case 2:
      return r2 & e ^ r2 & a2 ^ e & a2;
    case 3:
      return r2 ^ e ^ a2;
  }
}
function st(t, r2) {
  return t << r2 | t >>> 32 - r2;
}
function ee(t) {
  const r2 = [1518500249, 1859775393, 2400959708, 3395469782], e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof t == "string") {
    const f = unescape(encodeURIComponent(t));
    t = [];
    for (let l2 = 0; l2 < f.length; ++l2)
      t.push(f.charCodeAt(l2));
  } else
    Array.isArray(t) || (t = Array.prototype.slice.call(t));
  t.push(128);
  const a2 = t.length / 4 + 2, c = Math.ceil(a2 / 16), p = new Array(c);
  for (let f = 0; f < c; ++f) {
    const l2 = new Uint32Array(16);
    for (let h = 0; h < 16; ++h)
      l2[h] = t[f * 64 + h * 4] << 24 | t[f * 64 + h * 4 + 1] << 16 | t[f * 64 + h * 4 + 2] << 8 | t[f * 64 + h * 4 + 3];
    p[f] = l2;
  }
  p[c - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32), p[c - 1][14] = Math.floor(p[c - 1][14]), p[c - 1][15] = (t.length - 1) * 8 & 4294967295;
  for (let f = 0; f < c; ++f) {
    const l2 = new Uint32Array(80);
    for (let y = 0; y < 16; ++y)
      l2[y] = p[f][y];
    for (let y = 16; y < 80; ++y)
      l2[y] = st(l2[y - 3] ^ l2[y - 8] ^ l2[y - 14] ^ l2[y - 16], 1);
    let h = e[0], _ = e[1], m = e[2], E = e[3], O = e[4];
    for (let y = 0; y < 80; ++y) {
      const M = Math.floor(y / 20), D = st(h, 5) + te(M, _, m, E) + O + r2[M] + l2[y] >>> 0;
      O = E, E = m, m = st(_, 30) >>> 0, _ = h, h = D;
    }
    e[0] = e[0] + h >>> 0, e[1] = e[1] + _ >>> 0, e[2] = e[2] + m >>> 0, e[3] = e[3] + E >>> 0, e[4] = e[4] + O >>> 0;
  }
  return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255];
}
var re = $t("v5", 80, ee);
var ie = re;
var ne = /[^\dA-Za-z](\W)*/g;
var x = {};
var j = /* @__PURE__ */ new Map();
var ae = function(t) {
  const r2 = Object.keys(t);
  for (const e of r2)
    x[e] = t[e];
};
var se = (t, r2, e) => {
  const a2 = x.entityPadding / 3, c = x.entityPadding / 3, p = x.fontSize * 0.85, f = r2.node().getBBox(), l2 = [];
  let h = false, _ = false, m = 0, E = 0, O = 0, y = 0, M = f.height + a2 * 2, D = 1;
  e.forEach((R) => {
    R.attributeKeyTypeList !== void 0 && R.attributeKeyTypeList.length > 0 && (h = true), R.attributeComment !== void 0 && (_ = true);
  }), e.forEach((R) => {
    const N = `${r2.node().id}-attr-${D}`;
    let T = 0;
    const k = xl(R.attributeType), S = t.append("text").classed("er entityLabel", true).attr("id", `${N}-type`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", th().fontFamily).style("font-size", p + "px").text(k), C = t.append("text").classed("er entityLabel", true).attr("id", `${N}-name`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", th().fontFamily).style("font-size", p + "px").text(R.attributeName), B = {};
    B.tn = S, B.nn = C;
    const Y = S.node().getBBox(), v = C.node().getBBox();
    if (m = Math.max(m, Y.width), E = Math.max(E, v.width), T = Math.max(Y.height, v.height), h) {
      const n = R.attributeKeyTypeList !== void 0 ? R.attributeKeyTypeList.join(",") : "", s2 = t.append("text").classed("er entityLabel", true).attr("id", `${N}-key`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", th().fontFamily).style("font-size", p + "px").text(n);
      B.kn = s2;
      const d = s2.node().getBBox();
      O = Math.max(O, d.width), T = Math.max(T, d.height);
    }
    if (_) {
      const n = t.append("text").classed("er entityLabel", true).attr("id", `${N}-comment`).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "left").style("font-family", th().fontFamily).style("font-size", p + "px").text(R.attributeComment || "");
      B.cn = n;
      const s2 = n.node().getBBox();
      y = Math.max(y, s2.width), T = Math.max(T, s2.height);
    }
    B.height = T, l2.push(B), M += T + a2 * 2, D += 1;
  });
  let V = 4;
  h && (V += 2), _ && (V += 2);
  const z2 = m + E + O + y, L = {
    width: Math.max(
      x.minEntityWidth,
      Math.max(
        f.width + x.entityPadding * 2,
        z2 + c * V
      )
    ),
    height: e.length > 0 ? M : Math.max(x.minEntityHeight, f.height + x.entityPadding * 2)
  };
  if (e.length > 0) {
    const R = Math.max(
      0,
      (L.width - z2 - c * V) / (V / 2)
    );
    r2.attr(
      "transform",
      "translate(" + L.width / 2 + "," + (a2 + f.height / 2) + ")"
    );
    let N = f.height + a2 * 2, T = "attributeBoxOdd";
    l2.forEach((k) => {
      const S = N + a2 + k.height / 2;
      k.tn.attr("transform", "translate(" + c + "," + S + ")");
      const C = t.insert("rect", "#" + k.tn.node().id).classed(`er ${T}`, true).attr("x", 0).attr("y", N).attr("width", m + c * 2 + R).attr("height", k.height + a2 * 2), B = parseFloat(C.attr("x")) + parseFloat(C.attr("width"));
      k.nn.attr(
        "transform",
        "translate(" + (B + c) + "," + S + ")"
      );
      const Y = t.insert("rect", "#" + k.nn.node().id).classed(`er ${T}`, true).attr("x", B).attr("y", N).attr("width", E + c * 2 + R).attr("height", k.height + a2 * 2);
      let v = parseFloat(Y.attr("x")) + parseFloat(Y.attr("width"));
      if (h) {
        k.kn.attr(
          "transform",
          "translate(" + (v + c) + "," + S + ")"
        );
        const n = t.insert("rect", "#" + k.kn.node().id).classed(`er ${T}`, true).attr("x", v).attr("y", N).attr("width", O + c * 2 + R).attr("height", k.height + a2 * 2);
        v = parseFloat(n.attr("x")) + parseFloat(n.attr("width"));
      }
      _ && (k.cn.attr(
        "transform",
        "translate(" + (v + c) + "," + S + ")"
      ), t.insert("rect", "#" + k.cn.node().id).classed(`er ${T}`, "true").attr("x", v).attr("y", N).attr("width", y + c * 2 + R).attr("height", k.height + a2 * 2)), N += k.height + a2 * 2, T = T === "attributeBoxOdd" ? "attributeBoxEven" : "attributeBoxOdd";
    });
  } else
    L.height = Math.max(x.minEntityHeight, M), r2.attr("transform", "translate(" + L.width / 2 + "," + L.height / 2 + ")");
  return L;
};
var oe = function(t, r2, e) {
  const a2 = Object.keys(r2);
  let c;
  return a2.forEach(function(p) {
    const f = fe(p, "entity");
    j.set(p, f);
    const l2 = t.append("g").attr("id", f);
    c = c === void 0 ? f : c;
    const h = "text-" + f, _ = l2.append("text").classed("er entityLabel", true).attr("id", h).attr("x", 0).attr("y", 0).style("dominant-baseline", "middle").style("text-anchor", "middle").style("font-family", th().fontFamily).style("font-size", x.fontSize + "px").text(p), { width: m, height: E } = se(
      l2,
      _,
      r2[p].attributes
    ), y = l2.insert("rect", "#" + h).classed("er entityBox", true).attr("x", 0).attr("y", 0).attr("width", m).attr("height", E).node().getBBox();
    e.setNode(f, {
      width: y.width,
      height: y.height,
      shape: "rect",
      id: f
    });
  }), c;
};
var ce = function(t, r2) {
  r2.nodes().forEach(function(e) {
    e !== void 0 && r2.node(e) !== void 0 && t.select("#" + e).attr(
      "transform",
      "translate(" + (r2.node(e).x - r2.node(e).width / 2) + "," + (r2.node(e).y - r2.node(e).height / 2) + " )"
    );
  });
};
var pt = function(t) {
  return (t.entityA + t.roleA + t.entityB).replace(/\s/g, "");
};
var le = function(t, r2) {
  return t.forEach(function(e) {
    r2.setEdge(
      j.get(e.entityA),
      j.get(e.entityB),
      { relationship: e },
      pt(e)
    );
  }), t;
};
var ut = 0;
var he = function(t, r2, e, a2, c) {
  ut++;
  const p = e.edge(
    j.get(r2.entityA),
    j.get(r2.entityB),
    pt(r2)
  ), f = z().x(function(M) {
    return M.x;
  }).y(function(M) {
    return M.y;
  }).curve(Ue), l2 = t.insert("path", "#" + a2).classed("er relationshipLine", true).attr("d", f(p.points)).style("stroke", x.stroke).style("fill", "none");
  r2.relSpec.relType === c.db.Identification.NON_IDENTIFYING && l2.attr("stroke-dasharray", "8,8");
  let h = "";
  switch (x.arrowMarkerAbsolute && (h = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, h = h.replace(/\(/g, "\\("), h = h.replace(/\)/g, "\\)")), r2.relSpec.cardA) {
    case c.db.Cardinality.ZERO_OR_ONE:
      l2.attr("marker-end", "url(" + h + "#" + W.ERMarkers.ZERO_OR_ONE_END + ")");
      break;
    case c.db.Cardinality.ZERO_OR_MORE:
      l2.attr("marker-end", "url(" + h + "#" + W.ERMarkers.ZERO_OR_MORE_END + ")");
      break;
    case c.db.Cardinality.ONE_OR_MORE:
      l2.attr("marker-end", "url(" + h + "#" + W.ERMarkers.ONE_OR_MORE_END + ")");
      break;
    case c.db.Cardinality.ONLY_ONE:
      l2.attr("marker-end", "url(" + h + "#" + W.ERMarkers.ONLY_ONE_END + ")");
      break;
  }
  switch (r2.relSpec.cardB) {
    case c.db.Cardinality.ZERO_OR_ONE:
      l2.attr(
        "marker-start",
        "url(" + h + "#" + W.ERMarkers.ZERO_OR_ONE_START + ")"
      );
      break;
    case c.db.Cardinality.ZERO_OR_MORE:
      l2.attr(
        "marker-start",
        "url(" + h + "#" + W.ERMarkers.ZERO_OR_MORE_START + ")"
      );
      break;
    case c.db.Cardinality.ONE_OR_MORE:
      l2.attr(
        "marker-start",
        "url(" + h + "#" + W.ERMarkers.ONE_OR_MORE_START + ")"
      );
      break;
    case c.db.Cardinality.ONLY_ONE:
      l2.attr("marker-start", "url(" + h + "#" + W.ERMarkers.ONLY_ONE_START + ")");
      break;
  }
  const _ = l2.node().getTotalLength(), m = l2.node().getPointAtLength(_ * 0.5), E = "rel" + ut, y = t.append("text").classed("er relationshipLabel", true).attr("id", E).attr("x", m.x).attr("y", m.y).style("text-anchor", "middle").style("dominant-baseline", "middle").style("font-family", th().fontFamily).style("font-size", x.fontSize + "px").text(r2.roleA).node().getBBox();
  t.insert("rect", "#" + E).classed("er relationshipLabelBox", true).attr("x", m.x - y.width / 2).attr("y", m.y - y.height / 2).attr("width", y.width).attr("height", y.height);
};
var de = function(t, r2, e, a2) {
  x = th().er, et.info("Drawing ER diagram");
  const c = th().securityLevel;
  let p;
  c === "sandbox" && (p = nh("#i" + r2));
  const l2 = (c === "sandbox" ? nh(p.nodes()[0].contentDocument.body) : nh("body")).select(`[id='${r2}']`);
  W.insertMarkers(l2, x);
  let h;
  h = new A({
    multigraph: true,
    directed: true,
    compound: false
  }).setGraph({
    rankdir: x.layoutDirection,
    marginx: 20,
    marginy: 20,
    nodesep: 100,
    edgesep: 100,
    ranksep: 100
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  const _ = oe(l2, a2.db.getEntities(), h), m = le(a2.db.getRelationships(), h);
  ks(h), ce(l2, h), m.forEach(function(D) {
    he(l2, D, h, _, a2);
  });
  const E = x.diagramPadding;
  fs.insertTitle(l2, "entityTitleText", x.titleTopMargin, a2.db.getDiagramTitle());
  const O = l2.node().getBBox(), y = O.width + E * 2, M = O.height + E * 2;
  $(l2, M, y, x.useMaxWidth), l2.attr("viewBox", `${O.x - E} ${O.y - E} ${y} ${M}`);
};
var ue = "28e9f9db-3c8d-5aa5-9faf-44286ae5937c";
function fe(t = "", r2 = "") {
  const e = t.replace(ne, "");
  return `${ft(r2)}${ft(e)}${ie(
    t,
    ue
  )}`;
}
function ft(t = "") {
  return t.length > 0 ? `${t}-` : "";
}
var ye = {
  setConf: ae,
  draw: de
};
var pe = (t) => `
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
`;
var _e = pe;
var ve = {
  parser: Lt,
  db: zt,
  renderer: ye,
  styles: _e
};
export {
  ve as diagram
};
//# sourceMappingURL=erDiagram-779a1e9e-ZO5JW6L4.js.map
