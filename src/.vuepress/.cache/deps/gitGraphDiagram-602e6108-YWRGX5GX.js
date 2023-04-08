import {
  ws
} from "./chunk-DZVDESUM.js";
import "./chunk-75JSLJ6C.js";
import {
  fs,
  jo,
  rr,
  ye
} from "./chunk-BHKXDXK7.js";
import "./chunk-SEV54HLU.js";
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

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/gitGraphDiagram-602e6108.js
var me = function() {
  var r2 = function(B, l2, u2, b) {
    for (u2 = u2 || {}, b = B.length; b--; u2[B[b]] = l2)
      ;
    return u2;
  }, n = [1, 4], o = [1, 7], h = [1, 5], a2 = [1, 9], c = [1, 6], f = [2, 6], p = [1, 16], w = [6, 8, 14, 20, 22, 24, 25, 27, 29, 32, 37, 40, 50, 55], y = [8, 14, 20, 22, 24, 25, 27, 29, 32, 37, 40], m = [8, 13, 14, 20, 22, 24, 25, 27, 29, 32, 37, 40], d = [1, 26], _ = [6, 8, 14, 50, 55], s2 = [8, 14, 55], C = [1, 53], v = [1, 52], N = [8, 14, 30, 33, 35, 38, 55], x = [1, 67], g2 = [1, 68], k = [1, 69], P = [8, 14, 33, 35, 42, 55], ne = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, directive: 5, GG: 6, document: 7, EOF: 8, ":": 9, DIR: 10, options: 11, body: 12, OPT: 13, NL: 14, line: 15, statement: 16, commitStatement: 17, mergeStatement: 18, cherryPickStatement: 19, acc_title: 20, acc_title_value: 21, acc_descr: 22, acc_descr_value: 23, acc_descr_multiline_value: 24, section: 25, branchStatement: 26, CHECKOUT: 27, ref: 28, BRANCH: 29, ORDER: 30, NUM: 31, CHERRY_PICK: 32, COMMIT_ID: 33, STR: 34, COMMIT_TAG: 35, EMPTYSTR: 36, MERGE: 37, COMMIT_TYPE: 38, commitType: 39, COMMIT: 40, commit_arg: 41, COMMIT_MSG: 42, NORMAL: 43, REVERSE: 44, HIGHLIGHT: 45, openDirective: 46, typeDirective: 47, closeDirective: 48, argDirective: 49, open_directive: 50, type_directive: 51, arg_directive: 52, close_directive: 53, ID: 54, ";": 55, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "GG", 8: "EOF", 9: ":", 10: "DIR", 13: "OPT", 14: "NL", 20: "acc_title", 21: "acc_title_value", 22: "acc_descr", 23: "acc_descr_value", 24: "acc_descr_multiline_value", 25: "section", 27: "CHECKOUT", 29: "BRANCH", 30: "ORDER", 31: "NUM", 32: "CHERRY_PICK", 33: "COMMIT_ID", 34: "STR", 35: "COMMIT_TAG", 36: "EMPTYSTR", 37: "MERGE", 38: "COMMIT_TYPE", 40: "COMMIT", 42: "COMMIT_MSG", 43: "NORMAL", 44: "REVERSE", 45: "HIGHLIGHT", 50: "open_directive", 51: "type_directive", 52: "arg_directive", 53: "close_directive", 54: "ID", 55: ";" },
    productions_: [0, [3, 2], [3, 2], [3, 3], [3, 4], [3, 5], [7, 0], [7, 2], [11, 2], [11, 1], [12, 0], [12, 2], [15, 2], [15, 1], [16, 1], [16, 1], [16, 1], [16, 2], [16, 2], [16, 1], [16, 1], [16, 1], [16, 2], [26, 2], [26, 4], [19, 3], [19, 5], [19, 5], [19, 5], [19, 5], [18, 2], [18, 4], [18, 4], [18, 4], [18, 6], [18, 6], [18, 6], [18, 6], [18, 6], [18, 6], [18, 8], [18, 8], [18, 8], [18, 8], [18, 8], [18, 8], [17, 2], [17, 3], [17, 3], [17, 5], [17, 5], [17, 3], [17, 5], [17, 5], [17, 5], [17, 5], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 3], [17, 5], [17, 5], [17, 5], [17, 5], [17, 5], [17, 5], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 7], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [17, 9], [41, 0], [41, 1], [39, 1], [39, 1], [39, 1], [5, 3], [5, 5], [46, 1], [47, 1], [49, 1], [48, 1], [28, 1], [28, 1], [4, 1], [4, 1], [4, 1]],
    performAction: function(l2, u2, b, i2, E, e, W) {
      var t = e.length - 1;
      switch (E) {
        case 3:
          return e[t];
        case 4:
          return e[t - 1];
        case 5:
          return i2.setDirection(e[t - 3]), e[t - 1];
        case 7:
          i2.setOptions(e[t - 1]), this.$ = e[t];
          break;
        case 8:
          e[t - 1] += e[t], this.$ = e[t - 1];
          break;
        case 10:
          this.$ = [];
          break;
        case 11:
          e[t - 1].push(e[t]), this.$ = e[t - 1];
          break;
        case 12:
          this.$ = e[t - 1];
          break;
        case 17:
          this.$ = e[t].trim(), i2.setAccTitle(this.$);
          break;
        case 18:
        case 19:
          this.$ = e[t].trim(), i2.setAccDescription(this.$);
          break;
        case 20:
          i2.addSection(e[t].substr(8)), this.$ = e[t].substr(8);
          break;
        case 22:
          i2.checkout(e[t]);
          break;
        case 23:
          i2.branch(e[t]);
          break;
        case 24:
          i2.branch(e[t - 2], e[t]);
          break;
        case 25:
          i2.cherryPick(e[t], "", void 0);
          break;
        case 26:
          i2.cherryPick(e[t - 2], "", e[t]);
          break;
        case 27:
        case 29:
          i2.cherryPick(e[t - 2], "", "");
          break;
        case 28:
          i2.cherryPick(e[t], "", e[t - 2]);
          break;
        case 30:
          i2.merge(e[t], "", "", "");
          break;
        case 31:
          i2.merge(e[t - 2], e[t], "", "");
          break;
        case 32:
          i2.merge(e[t - 2], "", e[t], "");
          break;
        case 33:
          i2.merge(e[t - 2], "", "", e[t]);
          break;
        case 34:
          i2.merge(e[t - 4], e[t], "", e[t - 2]);
          break;
        case 35:
          i2.merge(e[t - 4], "", e[t], e[t - 2]);
          break;
        case 36:
          i2.merge(e[t - 4], "", e[t - 2], e[t]);
          break;
        case 37:
          i2.merge(e[t - 4], e[t - 2], e[t], "");
          break;
        case 38:
          i2.merge(e[t - 4], e[t - 2], "", e[t]);
          break;
        case 39:
          i2.merge(e[t - 4], e[t], e[t - 2], "");
          break;
        case 40:
          i2.merge(e[t - 6], e[t - 4], e[t - 2], e[t]);
          break;
        case 41:
          i2.merge(e[t - 6], e[t], e[t - 4], e[t - 2]);
          break;
        case 42:
          i2.merge(e[t - 6], e[t - 4], e[t], e[t - 2]);
          break;
        case 43:
          i2.merge(e[t - 6], e[t - 2], e[t - 4], e[t]);
          break;
        case 44:
          i2.merge(e[t - 6], e[t], e[t - 2], e[t - 4]);
          break;
        case 45:
          i2.merge(e[t - 6], e[t - 2], e[t], e[t - 4]);
          break;
        case 46:
          i2.commit(e[t]);
          break;
        case 47:
          i2.commit("", "", i2.commitType.NORMAL, e[t]);
          break;
        case 48:
          i2.commit("", "", e[t], "");
          break;
        case 49:
          i2.commit("", "", e[t], e[t - 2]);
          break;
        case 50:
          i2.commit("", "", e[t - 2], e[t]);
          break;
        case 51:
          i2.commit("", e[t], i2.commitType.NORMAL, "");
          break;
        case 52:
          i2.commit("", e[t - 2], i2.commitType.NORMAL, e[t]);
          break;
        case 53:
          i2.commit("", e[t], i2.commitType.NORMAL, e[t - 2]);
          break;
        case 54:
          i2.commit("", e[t - 2], e[t], "");
          break;
        case 55:
          i2.commit("", e[t], e[t - 2], "");
          break;
        case 56:
          i2.commit("", e[t - 4], e[t - 2], e[t]);
          break;
        case 57:
          i2.commit("", e[t - 4], e[t], e[t - 2]);
          break;
        case 58:
          i2.commit("", e[t - 2], e[t - 4], e[t]);
          break;
        case 59:
          i2.commit("", e[t], e[t - 4], e[t - 2]);
          break;
        case 60:
          i2.commit("", e[t], e[t - 2], e[t - 4]);
          break;
        case 61:
          i2.commit("", e[t - 2], e[t], e[t - 4]);
          break;
        case 62:
          i2.commit(e[t], "", i2.commitType.NORMAL, "");
          break;
        case 63:
          i2.commit(e[t], "", i2.commitType.NORMAL, e[t - 2]);
          break;
        case 64:
          i2.commit(e[t - 2], "", i2.commitType.NORMAL, e[t]);
          break;
        case 65:
          i2.commit(e[t - 2], "", e[t], "");
          break;
        case 66:
          i2.commit(e[t], "", e[t - 2], "");
          break;
        case 67:
          i2.commit(e[t], e[t - 2], i2.commitType.NORMAL, "");
          break;
        case 68:
          i2.commit(e[t - 2], e[t], i2.commitType.NORMAL, "");
          break;
        case 69:
          i2.commit(e[t - 4], "", e[t - 2], e[t]);
          break;
        case 70:
          i2.commit(e[t - 4], "", e[t], e[t - 2]);
          break;
        case 71:
          i2.commit(e[t - 2], "", e[t - 4], e[t]);
          break;
        case 72:
          i2.commit(e[t], "", e[t - 4], e[t - 2]);
          break;
        case 73:
          i2.commit(e[t], "", e[t - 2], e[t - 4]);
          break;
        case 74:
          i2.commit(e[t - 2], "", e[t], e[t - 4]);
          break;
        case 75:
          i2.commit(e[t - 4], e[t], e[t - 2], "");
          break;
        case 76:
          i2.commit(e[t - 4], e[t - 2], e[t], "");
          break;
        case 77:
          i2.commit(e[t - 2], e[t], e[t - 4], "");
          break;
        case 78:
          i2.commit(e[t], e[t - 2], e[t - 4], "");
          break;
        case 79:
          i2.commit(e[t], e[t - 4], e[t - 2], "");
          break;
        case 80:
          i2.commit(e[t - 2], e[t - 4], e[t], "");
          break;
        case 81:
          i2.commit(e[t - 4], e[t], i2.commitType.NORMAL, e[t - 2]);
          break;
        case 82:
          i2.commit(e[t - 4], e[t - 2], i2.commitType.NORMAL, e[t]);
          break;
        case 83:
          i2.commit(e[t - 2], e[t], i2.commitType.NORMAL, e[t - 4]);
          break;
        case 84:
          i2.commit(e[t], e[t - 2], i2.commitType.NORMAL, e[t - 4]);
          break;
        case 85:
          i2.commit(e[t], e[t - 4], i2.commitType.NORMAL, e[t - 2]);
          break;
        case 86:
          i2.commit(e[t - 2], e[t - 4], i2.commitType.NORMAL, e[t]);
          break;
        case 87:
          i2.commit(e[t - 6], e[t - 4], e[t - 2], e[t]);
          break;
        case 88:
          i2.commit(e[t - 6], e[t - 4], e[t], e[t - 2]);
          break;
        case 89:
          i2.commit(e[t - 6], e[t - 2], e[t - 4], e[t]);
          break;
        case 90:
          i2.commit(e[t - 6], e[t], e[t - 4], e[t - 2]);
          break;
        case 91:
          i2.commit(e[t - 6], e[t - 2], e[t], e[t - 4]);
          break;
        case 92:
          i2.commit(e[t - 6], e[t], e[t - 2], e[t - 4]);
          break;
        case 93:
          i2.commit(e[t - 4], e[t - 6], e[t - 2], e[t]);
          break;
        case 94:
          i2.commit(e[t - 4], e[t - 6], e[t], e[t - 2]);
          break;
        case 95:
          i2.commit(e[t - 2], e[t - 6], e[t - 4], e[t]);
          break;
        case 96:
          i2.commit(e[t], e[t - 6], e[t - 4], e[t - 2]);
          break;
        case 97:
          i2.commit(e[t - 2], e[t - 6], e[t], e[t - 4]);
          break;
        case 98:
          i2.commit(e[t], e[t - 6], e[t - 2], e[t - 4]);
          break;
        case 99:
          i2.commit(e[t], e[t - 4], e[t - 2], e[t - 6]);
          break;
        case 100:
          i2.commit(e[t - 2], e[t - 4], e[t], e[t - 6]);
          break;
        case 101:
          i2.commit(e[t], e[t - 2], e[t - 4], e[t - 6]);
          break;
        case 102:
          i2.commit(e[t - 2], e[t], e[t - 4], e[t - 6]);
          break;
        case 103:
          i2.commit(e[t - 4], e[t - 2], e[t], e[t - 6]);
          break;
        case 104:
          i2.commit(e[t - 4], e[t], e[t - 2], e[t - 6]);
          break;
        case 105:
          i2.commit(e[t - 2], e[t - 4], e[t - 6], e[t]);
          break;
        case 106:
          i2.commit(e[t], e[t - 4], e[t - 6], e[t - 2]);
          break;
        case 107:
          i2.commit(e[t - 2], e[t], e[t - 6], e[t - 4]);
          break;
        case 108:
          i2.commit(e[t], e[t - 2], e[t - 6], e[t - 4]);
          break;
        case 109:
          i2.commit(e[t - 4], e[t - 2], e[t - 6], e[t]);
          break;
        case 110:
          i2.commit(e[t - 4], e[t], e[t - 6], e[t - 2]);
          break;
        case 111:
          this.$ = "";
          break;
        case 112:
          this.$ = e[t];
          break;
        case 113:
          this.$ = i2.commitType.NORMAL;
          break;
        case 114:
          this.$ = i2.commitType.REVERSE;
          break;
        case 115:
          this.$ = i2.commitType.HIGHLIGHT;
          break;
        case 118:
          i2.parseDirective("%%{", "open_directive");
          break;
        case 119:
          i2.parseDirective(e[t], "type_directive");
          break;
        case 120:
          e[t] = e[t].trim().replace(/'/g, '"'), i2.parseDirective(e[t], "arg_directive");
          break;
        case 121:
          i2.parseDirective("}%%", "close_directive", "gitGraph");
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: n, 8: o, 14: h, 46: 8, 50: a2, 55: c }, { 1: [3] }, { 3: 10, 4: 2, 5: 3, 6: n, 8: o, 14: h, 46: 8, 50: a2, 55: c }, { 3: 11, 4: 2, 5: 3, 6: n, 8: o, 14: h, 46: 8, 50: a2, 55: c }, { 7: 12, 8: f, 9: [1, 13], 10: [1, 14], 11: 15, 14: p }, r2(w, [2, 124]), r2(w, [2, 125]), r2(w, [2, 126]), { 47: 17, 51: [1, 18] }, { 51: [2, 118] }, { 1: [2, 1] }, { 1: [2, 2] }, { 8: [1, 19] }, { 7: 20, 8: f, 11: 15, 14: p }, { 9: [1, 21] }, r2(y, [2, 10], { 12: 22, 13: [1, 23] }), r2(m, [2, 9]), { 9: [1, 25], 48: 24, 53: d }, r2([9, 53], [2, 119]), { 1: [2, 3] }, { 8: [1, 27] }, { 7: 28, 8: f, 11: 15, 14: p }, { 8: [2, 7], 14: [1, 31], 15: 29, 16: 30, 17: 32, 18: 33, 19: 34, 20: [1, 35], 22: [1, 36], 24: [1, 37], 25: [1, 38], 26: 39, 27: [1, 40], 29: [1, 44], 32: [1, 43], 37: [1, 42], 40: [1, 41] }, r2(m, [2, 8]), r2(_, [2, 116]), { 49: 45, 52: [1, 46] }, r2(_, [2, 121]), { 1: [2, 4] }, { 8: [1, 47] }, r2(y, [2, 11]), { 4: 48, 8: o, 14: h, 55: c }, r2(y, [2, 13]), r2(s2, [2, 14]), r2(s2, [2, 15]), r2(s2, [2, 16]), { 21: [1, 49] }, { 23: [1, 50] }, r2(s2, [2, 19]), r2(s2, [2, 20]), r2(s2, [2, 21]), { 28: 51, 34: C, 54: v }, r2(s2, [2, 111], { 41: 54, 33: [1, 57], 34: [1, 59], 35: [1, 55], 38: [1, 56], 42: [1, 58] }), { 28: 60, 34: C, 54: v }, { 33: [1, 61], 35: [1, 62] }, { 28: 63, 34: C, 54: v }, { 48: 64, 53: d }, { 53: [2, 120] }, { 1: [2, 5] }, r2(y, [2, 12]), r2(s2, [2, 17]), r2(s2, [2, 18]), r2(s2, [2, 22]), r2(N, [2, 122]), r2(N, [2, 123]), r2(s2, [2, 46]), { 34: [1, 65] }, { 39: 66, 43: x, 44: g2, 45: k }, { 34: [1, 70] }, { 34: [1, 71] }, r2(s2, [2, 112]), r2(s2, [2, 30], { 33: [1, 72], 35: [1, 74], 38: [1, 73] }), { 34: [1, 75] }, { 34: [1, 76], 36: [1, 77] }, r2(s2, [2, 23], { 30: [1, 78] }), r2(_, [2, 117]), r2(s2, [2, 47], { 33: [1, 80], 38: [1, 79], 42: [1, 81] }), r2(s2, [2, 48], { 33: [1, 83], 35: [1, 82], 42: [1, 84] }), r2(P, [2, 113]), r2(P, [2, 114]), r2(P, [2, 115]), r2(s2, [2, 51], { 35: [1, 85], 38: [1, 86], 42: [1, 87] }), r2(s2, [2, 62], { 33: [1, 90], 35: [1, 88], 38: [1, 89] }), { 34: [1, 91] }, { 39: 92, 43: x, 44: g2, 45: k }, { 34: [1, 93] }, r2(s2, [2, 25], { 35: [1, 94] }), { 33: [1, 95] }, { 33: [1, 96] }, { 31: [1, 97] }, { 39: 98, 43: x, 44: g2, 45: k }, { 34: [1, 99] }, { 34: [1, 100] }, { 34: [1, 101] }, { 34: [1, 102] }, { 34: [1, 103] }, { 34: [1, 104] }, { 39: 105, 43: x, 44: g2, 45: k }, { 34: [1, 106] }, { 34: [1, 107] }, { 39: 108, 43: x, 44: g2, 45: k }, { 34: [1, 109] }, r2(s2, [2, 31], { 35: [1, 111], 38: [1, 110] }), r2(s2, [2, 32], { 33: [1, 113], 35: [1, 112] }), r2(s2, [2, 33], { 33: [1, 114], 38: [1, 115] }), { 34: [1, 116], 36: [1, 117] }, { 34: [1, 118] }, { 34: [1, 119] }, r2(s2, [2, 24]), r2(s2, [2, 49], { 33: [1, 120], 42: [1, 121] }), r2(s2, [2, 53], { 38: [1, 122], 42: [1, 123] }), r2(s2, [2, 63], { 33: [1, 125], 38: [1, 124] }), r2(s2, [2, 50], { 33: [1, 126], 42: [1, 127] }), r2(s2, [2, 55], { 35: [1, 128], 42: [1, 129] }), r2(s2, [2, 66], { 33: [1, 131], 35: [1, 130] }), r2(s2, [2, 52], { 38: [1, 132], 42: [1, 133] }), r2(s2, [2, 54], { 35: [1, 134], 42: [1, 135] }), r2(s2, [2, 67], { 35: [1, 137], 38: [1, 136] }), r2(s2, [2, 64], { 33: [1, 139], 38: [1, 138] }), r2(s2, [2, 65], { 33: [1, 141], 35: [1, 140] }), r2(s2, [2, 68], { 35: [1, 143], 38: [1, 142] }), { 39: 144, 43: x, 44: g2, 45: k }, { 34: [1, 145] }, { 34: [1, 146] }, { 34: [1, 147] }, { 34: [1, 148] }, { 39: 149, 43: x, 44: g2, 45: k }, r2(s2, [2, 26]), r2(s2, [2, 27]), r2(s2, [2, 28]), r2(s2, [2, 29]), { 34: [1, 150] }, { 34: [1, 151] }, { 39: 152, 43: x, 44: g2, 45: k }, { 34: [1, 153] }, { 39: 154, 43: x, 44: g2, 45: k }, { 34: [1, 155] }, { 34: [1, 156] }, { 34: [1, 157] }, { 34: [1, 158] }, { 34: [1, 159] }, { 34: [1, 160] }, { 34: [1, 161] }, { 39: 162, 43: x, 44: g2, 45: k }, { 34: [1, 163] }, { 34: [1, 164] }, { 34: [1, 165] }, { 39: 166, 43: x, 44: g2, 45: k }, { 34: [1, 167] }, { 39: 168, 43: x, 44: g2, 45: k }, { 34: [1, 169] }, { 34: [1, 170] }, { 34: [1, 171] }, { 39: 172, 43: x, 44: g2, 45: k }, { 34: [1, 173] }, r2(s2, [2, 37], { 35: [1, 174] }), r2(s2, [2, 38], { 38: [1, 175] }), r2(s2, [2, 36], { 33: [1, 176] }), r2(s2, [2, 39], { 35: [1, 177] }), r2(s2, [2, 34], { 38: [1, 178] }), r2(s2, [2, 35], { 33: [1, 179] }), r2(s2, [2, 60], { 42: [1, 180] }), r2(s2, [2, 73], { 33: [1, 181] }), r2(s2, [2, 61], { 42: [1, 182] }), r2(s2, [2, 84], { 38: [1, 183] }), r2(s2, [2, 74], { 33: [1, 184] }), r2(s2, [2, 83], { 38: [1, 185] }), r2(s2, [2, 59], { 42: [1, 186] }), r2(s2, [2, 72], { 33: [1, 187] }), r2(s2, [2, 58], { 42: [1, 188] }), r2(s2, [2, 78], { 35: [1, 189] }), r2(s2, [2, 71], { 33: [1, 190] }), r2(s2, [2, 77], { 35: [1, 191] }), r2(s2, [2, 57], { 42: [1, 192] }), r2(s2, [2, 85], { 38: [1, 193] }), r2(s2, [2, 56], { 42: [1, 194] }), r2(s2, [2, 79], { 35: [1, 195] }), r2(s2, [2, 80], { 35: [1, 196] }), r2(s2, [2, 86], { 38: [1, 197] }), r2(s2, [2, 70], { 33: [1, 198] }), r2(s2, [2, 81], { 38: [1, 199] }), r2(s2, [2, 69], { 33: [1, 200] }), r2(s2, [2, 75], { 35: [1, 201] }), r2(s2, [2, 76], { 35: [1, 202] }), r2(s2, [2, 82], { 38: [1, 203] }), { 34: [1, 204] }, { 39: 205, 43: x, 44: g2, 45: k }, { 34: [1, 206] }, { 34: [1, 207] }, { 39: 208, 43: x, 44: g2, 45: k }, { 34: [1, 209] }, { 34: [1, 210] }, { 34: [1, 211] }, { 34: [1, 212] }, { 39: 213, 43: x, 44: g2, 45: k }, { 34: [1, 214] }, { 39: 215, 43: x, 44: g2, 45: k }, { 34: [1, 216] }, { 34: [1, 217] }, { 34: [1, 218] }, { 34: [1, 219] }, { 34: [1, 220] }, { 34: [1, 221] }, { 34: [1, 222] }, { 39: 223, 43: x, 44: g2, 45: k }, { 34: [1, 224] }, { 34: [1, 225] }, { 34: [1, 226] }, { 39: 227, 43: x, 44: g2, 45: k }, { 34: [1, 228] }, { 39: 229, 43: x, 44: g2, 45: k }, { 34: [1, 230] }, { 34: [1, 231] }, { 34: [1, 232] }, { 39: 233, 43: x, 44: g2, 45: k }, r2(s2, [2, 40]), r2(s2, [2, 42]), r2(s2, [2, 41]), r2(s2, [2, 43]), r2(s2, [2, 45]), r2(s2, [2, 44]), r2(s2, [2, 101]), r2(s2, [2, 102]), r2(s2, [2, 99]), r2(s2, [2, 100]), r2(s2, [2, 104]), r2(s2, [2, 103]), r2(s2, [2, 108]), r2(s2, [2, 107]), r2(s2, [2, 106]), r2(s2, [2, 105]), r2(s2, [2, 110]), r2(s2, [2, 109]), r2(s2, [2, 98]), r2(s2, [2, 97]), r2(s2, [2, 96]), r2(s2, [2, 95]), r2(s2, [2, 93]), r2(s2, [2, 94]), r2(s2, [2, 92]), r2(s2, [2, 91]), r2(s2, [2, 90]), r2(s2, [2, 89]), r2(s2, [2, 87]), r2(s2, [2, 88])],
    defaultActions: { 9: [2, 118], 10: [2, 1], 11: [2, 2], 19: [2, 3], 27: [2, 4], 46: [2, 120], 47: [2, 5] },
    parseError: function(l2, u2) {
      if (u2.recoverable)
        this.trace(l2);
      else {
        var b = new Error(l2);
        throw b.hash = u2, b;
      }
    },
    parse: function(l2) {
      var u2 = this, b = [0], i2 = [], E = [null], e = [], W = this.table, t = "", Z = 0, be = 0, Re = 2, ge = 1, Ce = e.slice.call(arguments, 1), L = Object.create(this.lexer), q = { yy: {} };
      for (var ce in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, ce) && (q.yy[ce] = this.yy[ce]);
      L.setInput(l2, q.yy), q.yy.lexer = L, q.yy.parser = this, typeof L.yylloc > "u" && (L.yylloc = {});
      var oe = L.yylloc;
      e.push(oe);
      var Le = L.options && L.options.ranges;
      typeof q.yy.parseError == "function" ? this.parseError = q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function Me() {
        var j;
        return j = i2.pop() || L.lex() || ge, typeof j != "number" && (j instanceof Array && (i2 = j, j = i2.pop()), j = u2.symbols_[j] || j), j;
      }
      for (var S, Y, D, le, U = {}, $, z, de, ee; ; ) {
        if (Y = b[b.length - 1], this.defaultActions[Y] ? D = this.defaultActions[Y] : ((S === null || typeof S > "u") && (S = Me()), D = W[Y] && W[Y][S]), typeof D > "u" || !D.length || !D[0]) {
          var he = "";
          ee = [];
          for ($ in W[Y])
            this.terminals_[$] && $ > Re && ee.push("'" + this.terminals_[$] + "'");
          L.showPosition ? he = "Parse error on line " + (Z + 1) + `:
` + L.showPosition() + `
Expecting ` + ee.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : he = "Parse error on line " + (Z + 1) + ": Unexpected " + (S == ge ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(he, {
            text: L.match,
            token: this.terminals_[S] || S,
            line: L.yylineno,
            loc: oe,
            expected: ee
          });
        }
        if (D[0] instanceof Array && D.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Y + ", token: " + S);
        switch (D[0]) {
          case 1:
            b.push(S), E.push(L.yytext), e.push(L.yylloc), b.push(D[1]), S = null, be = L.yyleng, t = L.yytext, Z = L.yylineno, oe = L.yylloc;
            break;
          case 2:
            if (z = this.productions_[D[1]][1], U.$ = E[E.length - z], U._$ = {
              first_line: e[e.length - (z || 1)].first_line,
              last_line: e[e.length - 1].last_line,
              first_column: e[e.length - (z || 1)].first_column,
              last_column: e[e.length - 1].last_column
            }, Le && (U._$.range = [
              e[e.length - (z || 1)].range[0],
              e[e.length - 1].range[1]
            ]), le = this.performAction.apply(U, [
              t,
              be,
              Z,
              q.yy,
              D[1],
              E,
              e
            ].concat(Ce)), typeof le < "u")
              return le;
            z && (b = b.slice(0, -1 * z * 2), E = E.slice(0, -1 * z), e = e.slice(0, -1 * z)), b.push(this.productions_[D[1]][0]), E.push(U.$), e.push(U._$), de = W[b[b.length - 2]][b[b.length - 1]], b.push(de);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, Te = function() {
    var B = {
      EOF: 1,
      parseError: function(u2, b) {
        if (this.yy.parser)
          this.yy.parser.parseError(u2, b);
        else
          throw new Error(u2);
      },
      // resets the lexer, sets new input
      setInput: function(l2, u2) {
        return this.yy = u2 || this.yy || {}, this._input = l2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var l2 = this._input[0];
        this.yytext += l2, this.yyleng++, this.offset++, this.match += l2, this.matched += l2;
        var u2 = l2.match(/(?:\r\n?|\n).*/g);
        return u2 ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), l2;
      },
      // unshifts one char (or a string) into the input
      unput: function(l2) {
        var u2 = l2.length, b = l2.split(/(?:\r\n?|\n)/g);
        this._input = l2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u2), this.offset -= u2;
        var i2 = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: b ? (b.length === i2.length ? this.yylloc.first_column : 0) + i2[i2.length - b.length].length - b[0].length : this.yylloc.first_column - u2
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - u2]), this.yyleng = this.yytext.length, this;
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
      less: function(l2) {
        this.unput(this.match.slice(l2));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var l2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (l2.length > 20 ? "..." : "") + l2.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var l2 = this.match;
        return l2.length < 20 && (l2 += this._input.substr(0, 20 - l2.length)), (l2.substr(0, 20) + (l2.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var l2 = this.pastInput(), u2 = new Array(l2.length + 1).join("-");
        return l2 + this.upcomingInput() + `
` + u2 + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(l2, u2) {
        var b, i2, E;
        if (this.options.backtrack_lexer && (E = {
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
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), i2 = l2[0].match(/(?:\r\n?|\n).*/g), i2 && (this.yylineno += i2.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i2 ? i2[i2.length - 1].length - i2[i2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + l2[0].length
        }, this.yytext += l2[0], this.match += l2[0], this.matches = l2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(l2[0].length), this.matched += l2[0], b = this.performAction.call(this, this.yy, this, u2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), b)
          return b;
        if (this._backtrack) {
          for (var e in E)
            this[e] = E[e];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var l2, u2, b, i2;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), e = 0; e < E.length; e++)
          if (b = this._input.match(this.rules[E[e]]), b && (!u2 || b[0].length > u2[0].length)) {
            if (u2 = b, i2 = e, this.options.backtrack_lexer) {
              if (l2 = this.test_match(b, E[e]), l2 !== false)
                return l2;
              if (this._backtrack) {
                u2 = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return u2 ? (l2 = this.test_match(u2, E[i2]), l2 !== false ? l2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var u2 = this.next();
        return u2 || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(u2) {
        this.conditionStack.push(u2);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var u2 = this.conditionStack.length - 1;
        return u2 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(u2) {
        return u2 = this.conditionStack.length - 1 - Math.abs(u2 || 0), u2 >= 0 ? this.conditionStack[u2] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(u2) {
        this.begin(u2);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(u2, b, i2, E) {
        switch (i2) {
          case 0:
            return this.begin("open_directive"), 50;
          case 1:
            return this.begin("type_directive"), 51;
          case 2:
            return this.popState(), this.begin("arg_directive"), 9;
          case 3:
            return this.popState(), this.popState(), 53;
          case 4:
            return 52;
          case 5:
            return this.begin("acc_title"), 20;
          case 6:
            return this.popState(), "acc_title_value";
          case 7:
            return this.begin("acc_descr"), 22;
          case 8:
            return this.popState(), "acc_descr_value";
          case 9:
            this.begin("acc_descr_multiline");
            break;
          case 10:
            this.popState();
            break;
          case 11:
            return "acc_descr_multiline_value";
          case 12:
            return 14;
          case 13:
            break;
          case 14:
            break;
          case 15:
            return 6;
          case 16:
            return 40;
          case 17:
            return 33;
          case 18:
            return 38;
          case 19:
            return 42;
          case 20:
            return 43;
          case 21:
            return 44;
          case 22:
            return 45;
          case 23:
            return 35;
          case 24:
            return 29;
          case 25:
            return 30;
          case 26:
            return 37;
          case 27:
            return 32;
          case 28:
            return 27;
          case 29:
            return 10;
          case 30:
            return 10;
          case 31:
            return 9;
          case 32:
            return "CARET";
          case 33:
            this.begin("options");
            break;
          case 34:
            this.popState();
            break;
          case 35:
            return 13;
          case 36:
            return 36;
          case 37:
            this.begin("string");
            break;
          case 38:
            this.popState();
            break;
          case 39:
            return 34;
          case 40:
            return 31;
          case 41:
            return 54;
          case 42:
            return 8;
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:((?:(?!\}%%)[^:.])*))/i, /^(?::)/i, /^(?:\}%%)/i, /^(?:((?:(?!\}%%).|\n)*))/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:(\r?\n)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:gitGraph\b)/i, /^(?:commit(?=\s|$))/i, /^(?:id:)/i, /^(?:type:)/i, /^(?:msg:)/i, /^(?:NORMAL\b)/i, /^(?:REVERSE\b)/i, /^(?:HIGHLIGHT\b)/i, /^(?:tag:)/i, /^(?:branch(?=\s|$))/i, /^(?:order:)/i, /^(?:merge(?=\s|$))/i, /^(?:cherry-pick(?=\s|$))/i, /^(?:checkout(?=\s|$))/i, /^(?:LR\b)/i, /^(?:BT\b)/i, /^(?::)/i, /^(?:\^)/i, /^(?:options\r?\n)/i, /^(?:[ \r\n\t]+end\b)/i, /^(?:[\s\S]+(?=[ \r\n\t]+end))/i, /^(?:["]["])/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[0-9]+(?=\s|$))/i, /^(?:\w([-\./\w]*[-\w])?)/i, /^(?:$)/i, /^(?:\s+)/i],
      conditions: { acc_descr_multiline: { rules: [10, 11], inclusive: false }, acc_descr: { rules: [8], inclusive: false }, acc_title: { rules: [6], inclusive: false }, close_directive: { rules: [], inclusive: false }, arg_directive: { rules: [3, 4], inclusive: false }, type_directive: { rules: [2, 3], inclusive: false }, open_directive: { rules: [1], inclusive: false }, options: { rules: [34, 35], inclusive: false }, string: { rules: [38, 39], inclusive: false }, INITIAL: { rules: [0, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37, 40, 41, 42, 43], inclusive: true } }
    };
    return B;
  }();
  ne.lexer = Te;
  function ae() {
    this.yy = {};
  }
  return ae.prototype = ne, ne.Parser = ae, new ae();
}();
me.parser = me;
var Be = me;
var te = th().gitGraph.mainBranchName;
var qe = th().gitGraph.mainBranchOrder;
var R = {};
var O = null;
var Q = {};
Q[te] = { name: te, order: qe };
var T = {};
T[te] = O;
var M = te;
var xe = "LR";
var K = 0;
function fe() {
  return jo({ length: 7 });
}
var Ye = function(r2, n, o) {
  ws.parseDirective(this, r2, n, o);
};
function Fe(r2, n) {
  const o = /* @__PURE__ */ Object.create(null);
  return r2.reduce((h, a2) => {
    const c = n(a2);
    return o[c] || (o[c] = true, h.push(a2)), h;
  }, []);
}
var Ke = function(r2) {
  xe = r2;
};
var ye2 = {};
var Ue = function(r2) {
  et.debug("options str", r2), r2 = r2 && r2.trim(), r2 = r2 || "{}";
  try {
    ye2 = JSON.parse(r2);
  } catch (n) {
    et.error("error while parsing gitGraph options", n.message);
  }
};
var We = function() {
  return ye2;
};
var Je = function(r2, n, o, h) {
  et.debug("Entering commit:", r2, n, o, h), n = ah.sanitizeText(n, th()), r2 = ah.sanitizeText(r2, th()), h = ah.sanitizeText(h, th());
  const a2 = {
    id: n || K + "-" + fe(),
    message: r2,
    seq: K++,
    type: o || X.NORMAL,
    tag: h || "",
    parents: O == null ? [] : [O.id],
    branch: M
  };
  O = a2, R[a2.id] = a2, T[M] = a2.id, et.debug("in pushCommit " + a2.id);
};
var Qe = function(r2, n) {
  if (r2 = ah.sanitizeText(r2, th()), T[r2] === void 0)
    T[r2] = O != null ? O.id : null, Q[r2] = { name: r2, order: n ? parseInt(n, 10) : null }, Ee(r2), et.debug("in createBranch");
  else {
    let o = new Error(
      'Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ' + r2 + '")'
    );
    throw o.hash = {
      text: "branch " + r2,
      token: "branch " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + r2 + '"']
    }, o;
  }
};
var Xe = function(r2, n, o, h) {
  r2 = ah.sanitizeText(r2, th()), n = ah.sanitizeText(n, th());
  const a2 = R[T[M]], c = R[T[r2]];
  if (M === r2) {
    let p = new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
    throw p.hash = {
      text: "merge " + r2,
      token: "merge " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    }, p;
  } else if (a2 === void 0 || !a2) {
    let p = new Error(
      'Incorrect usage of "merge". Current branch (' + M + ")has no commits"
    );
    throw p.hash = {
      text: "merge " + r2,
      token: "merge " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["commit"]
    }, p;
  } else if (T[r2] === void 0) {
    let p = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r2 + ") does not exist"
    );
    throw p.hash = {
      text: "merge " + r2,
      token: "merge " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch " + r2]
    }, p;
  } else if (c === void 0 || !c) {
    let p = new Error(
      'Incorrect usage of "merge". Branch to be merged (' + r2 + ") has no commits"
    );
    throw p.hash = {
      text: "merge " + r2,
      token: "merge " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"commit"']
    }, p;
  } else if (a2 === c) {
    let p = new Error('Incorrect usage of "merge". Both branches have same head');
    throw p.hash = {
      text: "merge " + r2,
      token: "merge " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["branch abc"]
    }, p;
  } else if (n && R[n] !== void 0) {
    let p = new Error(
      'Incorrect usage of "merge". Commit with id:' + n + " already exists, use different custom Id"
    );
    throw p.hash = {
      text: "merge " + r2 + n + o + h,
      token: "merge " + r2 + n + o + h,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: [
        "merge " + r2 + " " + n + "_UNIQUE " + o + " " + h
      ]
    }, p;
  }
  const f = {
    id: n || K + "-" + fe(),
    message: "merged branch " + r2 + " into " + M,
    seq: K++,
    parents: [O == null ? null : O.id, T[r2]],
    branch: M,
    type: X.MERGE,
    customType: o,
    customId: !!n,
    tag: h || ""
  };
  O = f, R[f.id] = f, T[M] = f.id, et.debug(T), et.debug("in mergeBranch");
};
var Ze = function(r2, n, o) {
  if (et.debug("Entering cherryPick:", r2, n, o), r2 = ah.sanitizeText(r2, th()), n = ah.sanitizeText(n, th()), o = ah.sanitizeText(o, th()), !r2 || R[r2] === void 0) {
    let c = new Error(
      'Incorrect usage of "cherryPick". Source commit id should exist and provided'
    );
    throw c.hash = {
      text: "cherryPick " + r2 + " " + n,
      token: "cherryPick " + r2 + " " + n,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["cherry-pick abc"]
    }, c;
  }
  let h = R[r2], a2 = h.branch;
  if (h.type === X.MERGE) {
    let c = new Error(
      'Incorrect usage of "cherryPick". Source commit should not be a merge commit'
    );
    throw c.hash = {
      text: "cherryPick " + r2 + " " + n,
      token: "cherryPick " + r2 + " " + n,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ["cherry-pick abc"]
    }, c;
  }
  if (!n || R[n] === void 0) {
    if (a2 === M) {
      let p = new Error(
        'Incorrect usage of "cherryPick". Source commit is already on current branch'
      );
      throw p.hash = {
        text: "cherryPick " + r2 + " " + n,
        token: "cherryPick " + r2 + " " + n,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      }, p;
    }
    const c = R[T[M]];
    if (c === void 0 || !c) {
      let p = new Error(
        'Incorrect usage of "cherry-pick". Current branch (' + M + ")has no commits"
      );
      throw p.hash = {
        text: "cherryPick " + r2 + " " + n,
        token: "cherryPick " + r2 + " " + n,
        line: "1",
        loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
        expected: ["cherry-pick abc"]
      }, p;
    }
    const f = {
      id: K + "-" + fe(),
      message: "cherry-picked " + h + " into " + M,
      seq: K++,
      parents: [O == null ? null : O.id, h.id],
      branch: M,
      type: X.CHERRY_PICK,
      tag: o ?? "cherry-pick:" + h.id
    };
    O = f, R[f.id] = f, T[M] = f.id, et.debug(T), et.debug("in cherryPick");
  }
};
var Ee = function(r2) {
  if (r2 = ah.sanitizeText(r2, th()), T[r2] === void 0) {
    let n = new Error(
      'Trying to checkout branch which is not yet created. (Help try using "branch ' + r2 + '")'
    );
    throw n.hash = {
      text: "checkout " + r2,
      token: "checkout " + r2,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"branch ' + r2 + '"']
    }, n;
  } else {
    M = r2;
    const n = T[M];
    O = R[n];
  }
};
function ke(r2, n, o) {
  const h = r2.indexOf(n);
  h === -1 ? r2.push(o) : r2.splice(h, 1, o);
}
function we(r2) {
  const n = r2.reduce((a2, c) => a2.seq > c.seq ? a2 : c, r2[0]);
  let o = "";
  r2.forEach(function(a2) {
    a2 === n ? o += "	*" : o += "	|";
  });
  const h = [o, n.id, n.seq];
  for (let a2 in T)
    T[a2] === n.id && h.push(a2);
  if (et.debug(h.join(" ")), n.parents && n.parents.length == 2) {
    const a2 = R[n.parents[0]];
    ke(r2, n, a2), r2.push(R[n.parents[1]]);
  } else {
    if (n.parents.length == 0)
      return;
    {
      const a2 = R[n.parents];
      ke(r2, n, a2);
    }
  }
  r2 = Fe(r2, (a2) => a2.id), we(r2);
}
var $e = function() {
  et.debug(R);
  const r2 = ve()[0];
  we([r2]);
};
var et2 = function() {
  R = {}, O = null;
  let r2 = th().gitGraph.mainBranchName, n = th().gitGraph.mainBranchOrder;
  T = {}, T[r2] = null, Q = {}, Q[r2] = { name: r2, order: n }, M = r2, K = 0, s();
};
var tt = function() {
  return Object.values(Q).map((n, o) => n.order !== null ? n : {
    ...n,
    order: parseFloat(`0.${o}`, 10)
  }).sort((n, o) => n.order - o.order).map(({ name: n }) => ({ name: n }));
};
var rt = function() {
  return T;
};
var it = function() {
  return R;
};
var ve = function() {
  const r2 = Object.keys(R).map(function(n) {
    return R[n];
  });
  return r2.forEach(function(n) {
    et.debug(n.id);
  }), r2.sort((n, o) => n.seq - o.seq), r2;
};
var st = function() {
  return M;
};
var nt = function() {
  return xe;
};
var at = function() {
  return O;
};
var X = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
var ct = {
  parseDirective: Ye,
  getConfig: () => th().gitGraph,
  setDirection: Ke,
  setOptions: Ue,
  getOptions: We,
  commit: Je,
  branch: Qe,
  merge: Xe,
  cherryPick: Ze,
  checkout: Ee,
  //reset,
  prettyPrint: $e,
  clear: et2,
  getBranchesAsObjArray: tt,
  getBranches: rt,
  getCommits: it,
  getCommitsArray: ve,
  getCurrentBranch: st,
  getDirection: nt,
  getHead: at,
  setAccTitle: i,
  getAccTitle: a,
  getAccDescription: l,
  setAccDescription: r,
  setDiagramTitle: g,
  getDiagramTitle: u,
  commitType: X
};
var J = {};
var H = {
  NORMAL: 0,
  REVERSE: 1,
  HIGHLIGHT: 2,
  MERGE: 3,
  CHERRY_PICK: 4
};
var F = 8;
var I = {};
var re = {};
var ie = [];
var se = 0;
var ot = () => {
  I = {}, re = {}, J = {}, se = 0, ie = [];
};
var lt = (r2) => {
  const n = document.createElementNS("http://www.w3.org/2000/svg", "text");
  let o = [];
  typeof r2 == "string" ? o = r2.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(r2) ? o = r2 : o = [];
  for (const h of o) {
    const a2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    a2.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), a2.setAttribute("dy", "1em"), a2.setAttribute("x", "0"), a2.setAttribute("class", "row"), a2.textContent = h.trim(), n.appendChild(a2);
  }
  return n;
};
var _e = (r2, n, o) => {
  const h = ye().gitGraph, a2 = r2.append("g").attr("class", "commit-bullets"), c = r2.append("g").attr("class", "commit-labels");
  let f = 0;
  Object.keys(n).sort((y, m) => n[y].seq - n[m].seq).forEach((y) => {
    const m = n[y], d = I[m.branch].pos, _ = f + 10;
    if (o) {
      let s2, C = m.customType !== void 0 && m.customType !== "" ? m.customType : m.type;
      switch (C) {
        case H.NORMAL:
          s2 = "commit-normal";
          break;
        case H.REVERSE:
          s2 = "commit-reverse";
          break;
        case H.HIGHLIGHT:
          s2 = "commit-highlight";
          break;
        case H.MERGE:
          s2 = "commit-merge";
          break;
        case H.CHERRY_PICK:
          s2 = "commit-cherry-pick";
          break;
        default:
          s2 = "commit-normal";
      }
      if (C === H.HIGHLIGHT) {
        const v = a2.append("rect");
        v.attr("x", _ - 10), v.attr("y", d - 10), v.attr("height", 20), v.attr("width", 20), v.attr(
          "class",
          `commit ${m.id} commit-highlight${I[m.branch].index % F} ${s2}-outer`
        ), a2.append("rect").attr("x", _ - 6).attr("y", d - 6).attr("height", 12).attr("width", 12).attr(
          "class",
          `commit ${m.id} commit${I[m.branch].index % F} ${s2}-inner`
        );
      } else if (C === H.CHERRY_PICK)
        a2.append("circle").attr("cx", _).attr("cy", d).attr("r", 10).attr("class", `commit ${m.id} ${s2}`), a2.append("circle").attr("cx", _ - 3).attr("cy", d + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${m.id} ${s2}`), a2.append("circle").attr("cx", _ + 3).attr("cy", d + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${m.id} ${s2}`), a2.append("line").attr("x1", _ + 3).attr("y1", d + 1).attr("x2", _).attr("y2", d - 5).attr("stroke", "#fff").attr("class", `commit ${m.id} ${s2}`), a2.append("line").attr("x1", _ - 3).attr("y1", d + 1).attr("x2", _).attr("y2", d - 5).attr("stroke", "#fff").attr("class", `commit ${m.id} ${s2}`);
      else {
        const v = a2.append("circle");
        if (v.attr("cx", _), v.attr("cy", d), v.attr("r", m.type === H.MERGE ? 9 : 10), v.attr(
          "class",
          `commit ${m.id} commit${I[m.branch].index % F}`
        ), C === H.MERGE) {
          const N = a2.append("circle");
          N.attr("cx", _), N.attr("cy", d), N.attr("r", 6), N.attr(
            "class",
            `commit ${s2} ${m.id} commit${I[m.branch].index % F}`
          );
        }
        C === H.REVERSE && a2.append("path").attr("d", `M ${_ - 5},${d - 5}L${_ + 5},${d + 5}M${_ - 5},${d + 5}L${_ + 5},${d - 5}`).attr(
          "class",
          `commit ${s2} ${m.id} commit${I[m.branch].index % F}`
        );
      }
    }
    if (re[m.id] = { x: f + 10, y: d }, o) {
      if (m.type !== H.CHERRY_PICK && (m.customId && m.type === H.MERGE || m.type !== H.MERGE) && h.showCommitLabel) {
        const v = c.append("g"), N = v.insert("rect").attr("class", "commit-label-bkg"), x = v.append("text").attr("x", f).attr("y", d + 25).attr("class", "commit-label").text(m.id);
        let g2 = x.node().getBBox();
        if (N.attr("x", f + 10 - g2.width / 2 - 2).attr("y", d + 13.5).attr("width", g2.width + 2 * 2).attr("height", g2.height + 2 * 2), x.attr("x", f + 10 - g2.width / 2), h.rotateCommitLabel) {
          let k = -7.5 - (g2.width + 10) / 25 * 9.5, P = 10 + g2.width / 25 * 8.5;
          v.attr(
            "transform",
            "translate(" + k + ", " + P + ") rotate(" + -45 + ", " + f + ", " + d + ")"
          );
        }
      }
      if (m.tag) {
        const v = c.insert("polygon"), N = c.append("circle"), x = c.append("text").attr("y", d - 16).attr("class", "tag-label").text(m.tag);
        let g2 = x.node().getBBox();
        x.attr("x", f + 10 - g2.width / 2);
        const k = g2.height / 2, P = d - 19.2;
        v.attr("class", "tag-label-bkg").attr(
          "points",
          `
          ${f - g2.width / 2 - 4 / 2},${P + 2}
          ${f - g2.width / 2 - 4 / 2},${P - 2}
          ${f + 10 - g2.width / 2 - 4},${P - k - 2}
          ${f + 10 + g2.width / 2 + 4},${P - k - 2}
          ${f + 10 + g2.width / 2 + 4},${P + k + 2}
          ${f + 10 - g2.width / 2 - 4},${P + k + 2}`
        ), N.attr("cx", f - g2.width / 2 + 4 / 2).attr("cy", P).attr("r", 1.5).attr("class", "tag-hole");
      }
    }
    f += 50, f > se && (se = f);
  });
};
var ht = (r2, n, o) => Object.keys(o).filter((c) => o[c].branch === n.branch && o[c].seq > r2.seq && o[c].seq < n.seq).length > 0;
var ue = (r2, n, o = 0) => {
  const h = r2 + Math.abs(r2 - n) / 2;
  if (o > 5)
    return h;
  if (ie.every((f) => Math.abs(f - h) >= 10))
    return ie.push(h), h;
  const c = Math.abs(r2 - n);
  return ue(r2, n - c / 5, o + 1);
};
var mt = (r2, n, o, h) => {
  const a2 = re[n.id], c = re[o.id], f = ht(n, o, h);
  let p = "", w = "", y = 0, m = 0, d = I[o.branch].index, _;
  if (f) {
    p = "A 10 10, 0, 0, 0,", w = "A 10 10, 0, 0, 1,", y = 10, m = 10, d = I[o.branch].index;
    const s2 = a2.y < c.y ? ue(a2.y, c.y) : ue(c.y, a2.y);
    a2.y < c.y ? _ = `M ${a2.x} ${a2.y} L ${a2.x} ${s2 - y} ${p} ${a2.x + m} ${s2} L ${c.x - y} ${s2} ${w} ${c.x} ${s2 + m} L ${c.x} ${c.y}` : _ = `M ${a2.x} ${a2.y} L ${a2.x} ${s2 + y} ${w} ${a2.x + m} ${s2} L ${c.x - y} ${s2} ${p} ${c.x} ${s2 - m} L ${c.x} ${c.y}`;
  } else
    a2.y < c.y && (p = "A 20 20, 0, 0, 0,", y = 20, m = 20, d = I[o.branch].index, _ = `M ${a2.x} ${a2.y} L ${a2.x} ${c.y - y} ${p} ${a2.x + m} ${c.y} L ${c.x} ${c.y}`), a2.y > c.y && (p = "A 20 20, 0, 0, 0,", y = 20, m = 20, d = I[n.branch].index, _ = `M ${a2.x} ${a2.y} L ${c.x - y} ${a2.y} ${p} ${c.x} ${a2.y - m} L ${c.x} ${c.y}`), a2.y === c.y && (d = I[n.branch].index, _ = `M ${a2.x} ${a2.y} L ${a2.x} ${c.y - y} ${p} ${a2.x + m} ${c.y} L ${c.x} ${c.y}`);
  r2.append("path").attr("d", _).attr("class", "arrow arrow" + d % F);
};
var ut = (r2, n) => {
  const o = r2.append("g").attr("class", "commit-arrows");
  Object.keys(n).forEach((h) => {
    const a2 = n[h];
    a2.parents && a2.parents.length > 0 && a2.parents.forEach((c) => {
      mt(o, n[c], a2, n);
    });
  });
};
var pt = (r2, n) => {
  const o = ye().gitGraph, h = r2.append("g");
  n.forEach((a2, c) => {
    const f = c % F, p = I[a2.name].pos, w = h.append("line");
    w.attr("x1", 0), w.attr("y1", p), w.attr("x2", se), w.attr("y2", p), w.attr("class", "branch branch" + f), ie.push(p);
    let y = a2.name;
    const m = lt(y), d = h.insert("rect"), s2 = h.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + f);
    s2.node().appendChild(m);
    let C = m.getBBox();
    d.attr("class", "branchLabelBkg label" + f).attr("rx", 4).attr("ry", 4).attr("x", -C.width - 4 - (o.rotateCommitLabel === true ? 30 : 0)).attr("y", -C.height / 2 + 8).attr("width", C.width + 18).attr("height", C.height + 4), s2.attr(
      "transform",
      "translate(" + (-C.width - 14 - (o.rotateCommitLabel === true ? 30 : 0)) + ", " + (p - C.height / 2 - 1) + ")"
    ), d.attr("transform", "translate(" + -19 + ", " + (p - C.height / 2) + ")");
  });
};
var ft = function(r2, n, o, h) {
  ot();
  const a2 = ye(), c = a2.gitGraph;
  et.debug("in gitgraph renderer", r2 + `
`, "id:", n, o), J = h.db.getCommits();
  const f = h.db.getBranchesAsObjArray();
  let p = 0;
  f.forEach((y, m) => {
    I[y.name] = { pos: p, index: m }, p += 50 + (c.rotateCommitLabel ? 40 : 0);
  });
  const w = nh(`[id="${n}"]`);
  _e(w, J, false), c.showBranches && pt(w, f), ut(w, J), _e(w, J, true), fs.insertTitle(
    w,
    "gitTitleText",
    c.titleTopMargin,
    h.db.getDiagramTitle()
  ), rr(
    void 0,
    w,
    c.diagramPadding,
    c.useMaxWidth ?? a2.useMaxWidth
  );
};
var bt = {
  draw: ft
};
var gt = (r2) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(
  (n) => `
        .branch-label${n} { fill: ${r2["gitBranchLabel" + n]}; }
        .commit${n} { stroke: ${r2["git" + n]}; fill: ${r2["git" + n]}; }
        .commit-highlight${n} { stroke: ${r2["gitInv" + n]}; fill: ${r2["gitInv" + n]}; }
        .label${n}  { fill: ${r2["git" + n]}; }
        .arrow${n} { stroke: ${r2["git" + n]}; }
        `
).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r2.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r2.commitLabelFontSize}; fill: ${r2.commitLabelColor};}
  .commit-label-bkg { font-size: ${r2.commitLabelFontSize}; fill: ${r2.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r2.tagLabelFontSize}; fill: ${r2.tagLabelColor};}
  .tag-label-bkg { fill: ${r2.tagLabelBackground}; stroke: ${r2.tagLabelBorder}; }
  .tag-hole { fill: ${r2.textColor}; }

  .commit-merge {
    stroke: ${r2.primaryColor};
    fill: ${r2.primaryColor};
  }
  .commit-reverse {
    stroke: ${r2.primaryColor};
    fill: ${r2.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r2.primaryColor};
    fill: ${r2.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r2.textColor};
  }
  }
`;
var dt = gt;
var vt = {
  parser: Be,
  db: ct,
  renderer: bt,
  styles: dt
};
export {
  vt as diagram
};
//# sourceMappingURL=gitGraphDiagram-602e6108-YWRGX5GX.js.map
