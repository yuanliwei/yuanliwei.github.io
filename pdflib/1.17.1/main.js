var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), s = (o, s, c) => (c = o == null ? {} : e(i(o)), ((e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c, l = r(i), u = 0, d = l.length; u < d; u++) c = l[u], a.call(e, c) || c === o || t(e, c, {
		get: ((e) => i[e]).bind(null, c),
		enumerable: !(s = n(i, c)) || s.enumerable
	});
	return e;
})(!s && o && o.__esModule && a.call(o, "default") ? c : t(c, "default", {
	value: o,
	enumerable: !0
}), o)), c = function(e, t) {
	return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
	}, c(e, t);
};
function l(e, t) {
	function n() {
		this.constructor = e;
	}
	c(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var u = function() {
	return u = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, u.apply(this, arguments);
};
function d(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function f(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = {
		next: s(0),
		throw: s(1),
		return: s(2)
	};
	return typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(o) {
		return function(s) {
			return function(o) {
				if (n) throw TypeError("Generator is already executing.");
				for (; a;) try {
					if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
					switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
						case 0:
						case 1:
							i = o;
							break;
						case 4: return a.label++, {
							value: o[1],
							done: !1
						};
						case 5:
							a.label++, r = o[1], o = [0];
							continue;
						case 7:
							o = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) {
								a = 0;
								continue;
							}
							if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
								a.label = o[1];
								break;
							}
							if (o[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = o;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(o);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					o = t.call(e, a);
				} catch (e) {
					o = [6, e], r = 0;
				} finally {
					n = i = 0;
				}
				if (5 & o[0]) throw o[1];
				return {
					value: o[0] ? o[1] : void 0,
					done: !0
				};
			}([o, s]);
		};
	}
}
function p() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
for (var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = /* @__PURE__ */ new Uint8Array(256), g = 0; g < 64; g++) h[m.charCodeAt(g)] = g;
var _, v = function(e) {
	var t, n, r, i, a, o = .75 * e.length, s = e.length, c = 0;
	e[e.length - 1] === "=" && (o--, e[e.length - 2] === "=" && o--);
	var l = new Uint8Array(o);
	for (t = 0; t < s; t += 4) n = h[e.charCodeAt(t)], r = h[e.charCodeAt(t + 1)], i = h[e.charCodeAt(t + 2)], a = h[e.charCodeAt(t + 3)], l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | i >> 2, l[c++] = (3 & i) << 6 | 63 & a;
	return l;
}, y = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i, b = function(e) {
	return e.charCodeAt(0);
}, x = function(e) {
	return e.codePointAt(0);
}, S = function(e, t) {
	return T(e.toString(16), t, "0").toUpperCase();
}, C = function(e) {
	return S(e, 2);
}, w = function(e) {
	return String.fromCharCode(e);
}, T = function(e, t, n) {
	for (var r = "", i = 0, a = t - e.length; i < a; i++) r += n;
	return r + e;
}, E = function(e, t, n) {
	for (var r = e.length, i = 0; i < r; i++) t[n++] = e.charCodeAt(i);
	return r;
}, D = function(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}, O = function(e) {
	return e.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
}, k = [
	"\\n",
	"\\f",
	"\\r",
	"\\u000B"
], A = function(e) {
	return /^[\n\f\r\u000B]$/.test(e);
}, j = function(e) {
	return e.split(/[\n\f\r\u000B]/);
}, M = function(e) {
	return e.replace(/[\n\f\r\u000B]/g, " ");
}, N = function(e, t) {
	var n, r = e.charCodeAt(t), i = t + 1, a = 1;
	return r >= 55296 && r <= 56319 && e.length > i && (n = e.charCodeAt(i)) >= 56320 && n <= 57343 && (a = 2), [e.slice(t, t + a), a];
}, ee = function(e, t, n, r) {
	for (var i = function(e) {
		for (var t = k.join("|"), n = ["$"], r = 0, i = e.length; r < i; r++) {
			var a = e[r];
			if (A(a)) throw TypeError("`wordBreak` must not include " + t);
			n.push(a === "" ? "." : D(a));
		}
		var o = n.join("|");
		return RegExp("(" + t + ")|((.*?)(" + o + "))", "gm");
	}(t), a = O(e).match(i), o = "", s = 0, c = [], l = function() {
		o !== "" && c.push(o), o = "", s = 0;
	}, u = 0, d = a.length; u < d; u++) {
		var f = a[u];
		if (A(f)) l();
		else {
			var p = r(f);
			s + p > n && l(), o += f, s += p;
		}
	}
	return l(), c;
}, te = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/, ne = function(e) {
	var t = e.match(te);
	if (t) {
		var n = t[1], r = t[2], i = r === void 0 ? "01" : r, a = t[3], o = a === void 0 ? "01" : a, s = t[4], c = s === void 0 ? "00" : s, l = t[5], u = l === void 0 ? "00" : l, d = t[6], f = d === void 0 ? "00" : d, p = t[7], m = p === void 0 ? "Z" : p, h = t[8], g = h === void 0 ? "00" : h, _ = t[9];
		return /* @__PURE__ */ new Date(n + "-" + i + "-" + o + "T" + c + ":" + u + ":" + f + (m === "Z" ? "Z" : "" + m + g + ":" + (_ === void 0 ? "00" : _)));
	}
}, P = function(e, t) {
	for (var n, r = 0; r < e.length;) {
		var i = e.substring(r).match(t);
		if (!i) return {
			match: n,
			pos: r
		};
		n = i, r += (i.index ?? 0) + i[0].length;
	}
	return {
		match: n,
		pos: r
	};
}, re = function(e) {
	return e[e.length - 1];
}, ie = function(e) {
	if (e instanceof Uint8Array) return e;
	for (var t = e.length, n = new Uint8Array(t), r = 0; r < t; r++) n[r] = e.charCodeAt(r);
	return n;
}, ae = function() {
	for (var e = [...arguments], t = e.length, n = [], r = 0; r < t; r++) {
		var i = e[r];
		n[r] = i instanceof Uint8Array ? i : ie(i);
	}
	var a = 0;
	for (r = 0; r < t; r++) a += e[r].length;
	for (var o = new Uint8Array(a), s = 0, c = 0; c < t; c++) for (var l = n[c], u = 0, d = l.length; u < d; u++) o[s++] = l[u];
	return o;
}, oe = function(e) {
	for (var t = "", n = 0, r = e.length; n < r; n++) t += w(e[n]);
	return t;
}, se = function(e, t) {
	return e.id - t.id;
}, ce = function(e) {
	for (var t = e.length, n = 0, r = Math.floor(t / 2); n < r; n++) {
		var i = n, a = t - n - 1, o = e[n];
		e[i] = e[a], e[a] = o;
	}
	return e;
}, le = function(e) {
	if (typeof e == "string") return function(e) {
		var t = e.trim(), n = t.substring(0, 100).match(y);
		if (!n) return v(t);
		var r = n[0];
		return v(t.substring(r.length));
	}(e);
	if (e instanceof ArrayBuffer) return new Uint8Array(e);
	if (e instanceof Uint8Array) return e;
	throw TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`");
}, ue = function() {
	return new Promise(function(e) {
		setTimeout(function() {
			return e();
		}, 0);
	});
}, de = function(e) {
	return Math.floor((e - 65536) / 1024) + 55296;
}, fe = function(e) {
	return (e - 65536) % 1024 + 56320;
};
(function(e) {
	e.BigEndian = "BigEndian", e.LittleEndian = "LittleEndian";
})(_ ||= {});
for (var pe = "�".codePointAt(0), me = function(e, t) {
	if (t === void 0 && (t = !0), e.length <= 1) return String.fromCodePoint(pe);
	for (var n = t ? ve(e) : _.BigEndian, r = t ? 2 : 0, i = []; e.length - r >= 2;) {
		var a = _e(e[r++], e[r++], n);
		if (he(a)) {
			if (e.length - r < 2) i.push(pe);
			else {
				var o = _e(e[r++], e[r++], n);
				ge(o) ? i.push(a, o) : i.push(pe);
			}
		} else ge(a) ? (r += 2, i.push(pe)) : i.push(a);
	}
	return r < e.length && i.push(pe), String.fromCodePoint.apply(String, i);
}, he = function(e) {
	return e >= 55296 && e <= 56319;
}, ge = function(e) {
	return e >= 56320 && e <= 57343;
}, _e = function(e, t, n) {
	if (n === _.LittleEndian) return t << 8 | e;
	if (n === _.BigEndian) return e << 8 | t;
	throw Error("Invalid byteOrder: " + n);
}, ve = function(e) {
	return ye(e) ? _.BigEndian : be(e) ? _.LittleEndian : _.BigEndian;
}, ye = function(e) {
	return e[0] === 254 && e[1] === 255;
}, be = function(e) {
	return e[0] === 255 && e[1] === 254;
}, xe = function(e) {
	return ye(e) || be(e);
}, Se = function(e) {
	return Math.ceil(e.toString(2).length / 8);
}, Ce = function(e) {
	for (var t = new Uint8Array(Se(e)), n = 1; n <= t.length; n++) t[n - 1] = e >> 8 * (t.length - n);
	return t;
}, we = function(e) {
	throw Error(e);
}, Te = o((e) => {
	var t = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
	function n(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	e.assign = function(e) {
		for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
			var r = t.shift();
			if (r) {
				if (typeof r != "object") throw TypeError(r + "must be non-object");
				for (var i in r) n(r, i) && (e[i] = r[i]);
			}
		}
		return e;
	}, e.shrinkBuf = function(e, t) {
		return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
	};
	var r = {
		arraySet: function(e, t, n, r, i) {
			if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
			else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
		},
		flattenChunks: function(e) {
			var t, n, r, i, a, o = 0;
			for (t = 0, n = e.length; t < n; t++) o += e[t].length;
			for (a = new Uint8Array(o), r = 0, t = 0, n = e.length; t < n; t++) i = e[t], a.set(i, r), r += i.length;
			return a;
		}
	}, i = {
		arraySet: function(e, t, n, r, i) {
			for (var a = 0; a < r; a++) e[i + a] = t[n + a];
		},
		flattenChunks: function(e) {
			return [].concat.apply([], e);
		}
	};
	e.setTyped = function(t) {
		t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, r)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, i));
	}, e.setTyped(t);
}), Ee = o((e) => {
	var t = Te();
	function n(e) {
		for (var t = e.length; --t >= 0;) e[t] = 0;
	}
	var r = 256, i = 286, a = 30, o = 15, s = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		5,
		5,
		5,
		5,
		0
	], c = [
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		5,
		6,
		6,
		7,
		7,
		8,
		8,
		9,
		9,
		10,
		10,
		11,
		11,
		12,
		12,
		13,
		13
	], l = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		2,
		3,
		7
	], u = [
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	], d = Array(576);
	n(d);
	var f = Array(60);
	n(f);
	var p = Array(512);
	n(p);
	var m = Array(256);
	n(m);
	var h = Array(29);
	n(h);
	var g, _, v, y = Array(a);
	function b(e, t, n, r, i) {
		this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
	}
	function x(e, t) {
		this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
	}
	function S(e) {
		return e < 256 ? p[e] : p[256 + (e >>> 7)];
	}
	function C(e, t) {
		e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
	}
	function w(e, t, n) {
		e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535, C(e, e.bi_buf), e.bi_buf = t >> 16 - e.bi_valid, e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
	}
	function T(e, t, n) {
		w(e, n[2 * t], n[2 * t + 1]);
	}
	function E(e, t) {
		var n = 0;
		do
			n |= 1 & e, e >>>= 1, n <<= 1;
		while (--t > 0);
		return n >>> 1;
	}
	function D(e, t, n) {
		var r, i, a = Array(16), s = 0;
		for (r = 1; r <= o; r++) a[r] = s = s + n[r - 1] << 1;
		for (i = 0; i <= t; i++) {
			var c = e[2 * i + 1];
			c !== 0 && (e[2 * i] = E(a[c]++, c));
		}
	}
	function O(e) {
		for (var t = 0; t < i; t++) e.dyn_ltree[2 * t] = 0;
		for (t = 0; t < a; t++) e.dyn_dtree[2 * t] = 0;
		for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
		e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
	}
	function k(e) {
		e.bi_valid > 8 ? C(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
	}
	function A(e, t, n, r) {
		var i = 2 * t, a = 2 * n;
		return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
	}
	function j(e, t, n) {
		for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && A(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !A(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
		e.heap[n] = r;
	}
	function M(e, t, n) {
		var i, a, o, l, u = 0;
		if (e.last_lit !== 0) do
			i = e.pending_buf[e.d_buf + 2 * u] << 8 | e.pending_buf[e.d_buf + 2 * u + 1], a = e.pending_buf[e.l_buf + u], u++, i === 0 ? T(e, a, t) : (T(e, (o = m[a]) + r + 1, t), (l = s[o]) !== 0 && w(e, a -= h[o], l), T(e, o = S(--i), n), (l = c[o]) !== 0 && w(e, i -= y[o], l));
		while (u < e.last_lit);
		T(e, 256, t);
	}
	function N(e, t) {
		var n, r, i, a = t.dyn_tree, s = t.stat_desc.static_tree, c = t.stat_desc.has_stree, l = t.stat_desc.elems, u = -1;
		for (e.heap_len = 0, e.heap_max = 573, n = 0; n < l; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = u = n, e.depth[n] = 0);
		for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[i] = 0, e.opt_len--, c && (e.static_len -= s[2 * i + 1]);
		for (t.max_code = u, n = e.heap_len >> 1; n >= 1; n--) j(e, a, n);
		i = l;
		do
			n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], j(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, j(e, a, 1);
		while (e.heap_len >= 2);
		e.heap[--e.heap_max] = e.heap[1], function(e, t) {
			var n, r, i, a, s, c, l = t.dyn_tree, u = t.max_code, d = t.stat_desc.static_tree, f = t.stat_desc.has_stree, p = t.stat_desc.extra_bits, m = t.stat_desc.extra_base, h = t.stat_desc.max_length, g = 0;
			for (a = 0; a <= o; a++) e.bl_count[a] = 0;
			for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < 573; n++) (a = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > h && (a = h, g++), l[2 * r + 1] = a, r > u || (e.bl_count[a]++, s = 0, r >= m && (s = p[r - m]), c = l[2 * r], e.opt_len += c * (a + s), f && (e.static_len += c * (d[2 * r + 1] + s)));
			if (g !== 0) {
				do {
					for (a = h - 1; e.bl_count[a] === 0;) a--;
					e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[h]--, g -= 2;
				} while (g > 0);
				for (a = h; a !== 0; a--) for (r = e.bl_count[a]; r !== 0;) (i = e.heap[--n]) > u || (l[2 * i + 1] !== a && (e.opt_len += (a - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = a), r--);
			}
		}(e, t), D(a, u, e.bl_count);
	}
	function ee(e, t, n) {
		var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
		for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[32]++), s = 0, a = i, o === 0 ? (c = 138, l = 3) : i === o ? (c = 6, l = 3) : (c = 7, l = 4));
	}
	function te(e, t, n) {
		var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
		for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
			if (s < l) do
				T(e, i, e.bl_tree);
			while (--s !== 0);
			else i === 0 ? s <= 10 ? (T(e, 17, e.bl_tree), w(e, s - 3, 3)) : (T(e, 18, e.bl_tree), w(e, s - 11, 7)) : (i !== a && (T(e, i, e.bl_tree), s--), T(e, 16, e.bl_tree), w(e, s - 3, 2));
			s = 0, a = i, o === 0 ? (c = 138, l = 3) : i === o ? (c = 6, l = 3) : (c = 7, l = 4);
		}
	}
	n(y);
	var ne = !1;
	function P(e, n, r, i) {
		w(e, 0 + +!!i, 3), function(e, n, r, i) {
			k(e), C(e, r), C(e, ~r), t.arraySet(e.pending_buf, e.window, n, r, e.pending), e.pending += r;
		}(e, n, r, !0);
	}
	e._tr_init = function(e) {
		ne ||= (function() {
			var e, t, n, r, u, x = Array(16);
			for (n = 0, r = 0; r < 28; r++) for (h[r] = n, e = 0; e < 1 << s[r]; e++) m[n++] = r;
			for (m[n - 1] = r, u = 0, r = 0; r < 16; r++) for (y[r] = u, e = 0; e < 1 << c[r]; e++) p[u++] = r;
			for (u >>= 7; r < a; r++) for (y[r] = u << 7, e = 0; e < 1 << c[r] - 7; e++) p[256 + u++] = r;
			for (t = 0; t <= o; t++) x[t] = 0;
			for (e = 0; e <= 143;) d[2 * e + 1] = 8, e++, x[8]++;
			for (; e <= 255;) d[2 * e + 1] = 9, e++, x[9]++;
			for (; e <= 279;) d[2 * e + 1] = 7, e++, x[7]++;
			for (; e <= 287;) d[2 * e + 1] = 8, e++, x[8]++;
			for (D(d, 287, x), e = 0; e < a; e++) f[2 * e + 1] = 5, f[2 * e] = E(e, 5);
			g = new b(d, s, 257, i, o), _ = new b(f, c, 0, a, o), v = new b([], l, 0, 19, 7);
		}(), !0), e.l_desc = new x(e.dyn_ltree, g), e.d_desc = new x(e.dyn_dtree, _), e.bl_desc = new x(e.bl_tree, v), e.bi_buf = 0, e.bi_valid = 0, O(e);
	}, e._tr_stored_block = P, e._tr_flush_block = function(e, t, n, i) {
		var a, o, s = 0;
		e.level > 0 ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
			for (var t = 4093624447, n = 0; n <= 31; n++, t >>>= 1) if (1 & t && e.dyn_ltree[2 * n] !== 0) return 0;
			if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return 1;
			for (n = 32; n < r; n++) if (e.dyn_ltree[2 * n] !== 0) return 1;
			return 0;
		}(e)), N(e, e.l_desc), N(e, e.d_desc), s = function(e) {
			var t;
			for (ee(e, e.dyn_ltree, e.l_desc.max_code), ee(e, e.dyn_dtree, e.d_desc.max_code), N(e, e.bl_desc), t = 18; t >= 3 && e.bl_tree[2 * u[t] + 1] === 0; t--);
			return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
		}(e), a = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = n + 5, n + 4 <= a && t !== -1 ? P(e, t, n, i) : e.strategy === 4 || o === a ? (w(e, 2 + +!!i, 3), M(e, d, f)) : (w(e, 4 + +!!i, 3), function(e, t, n, r) {
			var i;
			for (w(e, t - 257, 5), w(e, n - 1, 5), w(e, r - 4, 4), i = 0; i < r; i++) w(e, e.bl_tree[2 * u[i] + 1], 3);
			te(e, e.dyn_ltree, t - 1), te(e, e.dyn_dtree, n - 1);
		}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), M(e, e.dyn_ltree, e.dyn_dtree)), O(e), i && k(e);
	}, e._tr_tally = function(e, t, n) {
		return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, t === 0 ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (m[n] + r + 1)]++, e.dyn_dtree[2 * S(t)]++), e.last_lit === e.lit_bufsize - 1;
	}, e._tr_align = function(e) {
		w(e, 2, 3), T(e, 256, d), function(e) {
			e.bi_valid === 16 ? (C(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
		}(e);
	};
}), De = o((e, t) => {
	t.exports = function(e, t, n, r) {
		for (var i = 65535 & e, a = e >>> 16 & 65535, o = 0; n !== 0;) {
			n -= o = n > 2e3 ? 2e3 : n;
			do
				a = a + (i = i + t[r++] | 0) | 0;
			while (--o);
			i %= 65521, a %= 65521;
		}
		return i | a << 16;
	};
}), Oe = o((e, t) => {
	var n = function() {
		for (var e, t = [], n = 0; n < 256; n++) {
			e = n;
			for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
			t[n] = e;
		}
		return t;
	}();
	t.exports = function(e, t, r, i) {
		var a = n, o = i + r;
		e ^= -1;
		for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
		return -1 ^ e;
	};
}), ke = o((e, t) => {
	t.exports = {
		2: "need dictionary",
		1: "stream end",
		0: "",
		"-1": "file error",
		"-2": "stream error",
		"-3": "data error",
		"-4": "insufficient memory",
		"-5": "buffer error",
		"-6": "incompatible version"
	};
}), Ae = o((e) => {
	var t = Te(), n = Ee(), r = De(), i = Oe(), a = ke(), o = -2, s = 258, c = 262, l = 103, u = 113, d = 666;
	function f(e, t) {
		return e.msg = a[t], t;
	}
	function p(e) {
		return (e << 1) - (e > 4 ? 9 : 0);
	}
	function m(e) {
		for (var t = e.length; --t >= 0;) e[t] = 0;
	}
	function h(e) {
		var n = e.state, r = n.pending;
		r > e.avail_out && (r = e.avail_out), r !== 0 && (t.arraySet(e.output, n.pending_buf, n.pending_out, r, e.next_out), e.next_out += r, n.pending_out += r, e.total_out += r, e.avail_out -= r, n.pending -= r, n.pending === 0 && (n.pending_out = 0));
	}
	function g(e, t) {
		n._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, h(e.strm);
	}
	function _(e, t) {
		e.pending_buf[e.pending++] = t;
	}
	function v(e, t) {
		e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
	}
	function y(e, n, a, o) {
		var s = e.avail_in;
		return s > o && (s = o), s === 0 ? 0 : (e.avail_in -= s, t.arraySet(n, e.input, e.next_in, s, a), e.state.wrap === 1 ? e.adler = r(e.adler, n, s, a) : e.state.wrap === 2 && (e.adler = i(e.adler, n, s, a)), e.next_in += s, e.total_in += s, s);
	}
	function b(e, t) {
		var n, r, i = e.max_chain_length, a = e.strstart, o = e.prev_length, l = e.nice_match, u = e.strstart > e.w_size - c ? e.strstart - (e.w_size - c) : 0, d = e.window, f = e.w_mask, p = e.prev, m = e.strstart + s, h = d[a + o - 1], g = d[a + o];
		e.prev_length >= e.good_match && (i >>= 2), l > e.lookahead && (l = e.lookahead);
		do
			if (d[(n = t) + o] === g && d[n + o - 1] === h && d[n] === d[a] && d[++n] === d[a + 1]) {
				a += 2, n++;
				do;
				while (d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && d[++a] === d[++n] && a < m);
				if (r = s - (m - a), a = m - s, r > o) {
					if (e.match_start = t, o = r, r >= l) break;
					h = d[a + o - 1], g = d[a + o];
				}
			}
		while ((t = p[t & f]) > u && --i !== 0);
		return o <= e.lookahead ? o : e.lookahead;
	}
	function x(e) {
		var n, r, i, a, o, s = e.w_size;
		do {
			if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= s + (s - c)) {
				t.arraySet(e.window, e.window, s, s, 0), e.match_start -= s, e.strstart -= s, e.block_start -= s, n = r = e.hash_size;
				do
					i = e.head[--n], e.head[n] = i >= s ? i - s : 0;
				while (--r);
				n = r = s;
				do
					i = e.prev[--n], e.prev[n] = i >= s ? i - s : 0;
				while (--r);
				a += s;
			}
			if (e.strm.avail_in === 0) break;
			if (r = y(e.strm, e.window, e.strstart + e.lookahead, a), e.lookahead += r, e.lookahead + e.insert >= 3) for (o = e.strstart - e.insert, e.ins_h = e.window[o], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 3 - 1]) & e.hash_mask, e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < 3)););
		} while (e.lookahead < c && e.strm.avail_in !== 0);
	}
	function S(e, t) {
		for (var r, i;;) {
			if (e.lookahead < c) {
				if (x(e), e.lookahead < c && t === 0) return 1;
				if (e.lookahead === 0) break;
			}
			if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), r !== 0 && e.strstart - r <= e.w_size - c && (e.match_length = b(e, r)), e.match_length >= 3) {
				if (i = n._tr_tally(e, e.strstart - e.match_start, e.match_length - 3), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
					e.match_length--;
					do
						e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
					while (--e.match_length !== 0);
					e.strstart++;
				} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
			} else i = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
			if (i && (g(e, !1), e.strm.avail_out === 0)) return 1;
		}
		return e.insert = e.strstart < 2 ? e.strstart : 2, t === 4 ? (g(e, !0), e.strm.avail_out === 0 ? 3 : 4) : e.last_lit && (g(e, !1), e.strm.avail_out === 0) ? 1 : 2;
	}
	function C(e, t) {
		for (var r, i, a;;) {
			if (e.lookahead < c) {
				if (x(e), e.lookahead < c && t === 0) return 1;
				if (e.lookahead === 0) break;
			}
			if (r = 0, e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = 2, r !== 0 && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - c && (e.match_length = b(e, r), e.match_length <= 5 && (e.strategy === 1 || e.match_length === 3 && e.strstart - e.match_start > 4096) && (e.match_length = 2)), e.prev_length >= 3 && e.match_length <= e.prev_length) {
				a = e.strstart + e.lookahead - 3, i = n._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
				do
					++e.strstart <= a && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask, r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
				while (--e.prev_length !== 0);
				if (e.match_available = 0, e.match_length = 2, e.strstart++, i && (g(e, !1), e.strm.avail_out === 0)) return 1;
			} else if (e.match_available) {
				if ((i = n._tr_tally(e, 0, e.window[e.strstart - 1])) && g(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return 1;
			} else e.match_available = 1, e.strstart++, e.lookahead--;
		}
		return e.match_available &&= (i = n._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < 2 ? e.strstart : 2, t === 4 ? (g(e, !0), e.strm.avail_out === 0 ? 3 : 4) : e.last_lit && (g(e, !1), e.strm.avail_out === 0) ? 1 : 2;
	}
	function w(e, t, n, r, i) {
		this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
	}
	var T = [
		new w(0, 0, 0, 0, function(e, t) {
			var n = 65535;
			for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
				if (e.lookahead <= 1) {
					if (x(e), e.lookahead === 0 && t === 0) return 1;
					if (e.lookahead === 0) break;
				}
				e.strstart += e.lookahead, e.lookahead = 0;
				var r = e.block_start + n;
				if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, g(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - c && (g(e, !1), e.strm.avail_out === 0)) return 1;
			}
			return e.insert = 0, t === 4 ? (g(e, !0), e.strm.avail_out === 0 ? 3 : 4) : (e.strstart > e.block_start && (g(e, !1), e.strm.avail_out), 1);
		}),
		new w(4, 4, 8, 4, S),
		new w(4, 5, 16, 8, S),
		new w(4, 6, 32, 32, S),
		new w(4, 4, 16, 16, C),
		new w(8, 16, 32, 32, C),
		new w(8, 16, 128, 128, C),
		new w(8, 32, 128, 256, C),
		new w(32, 128, 258, 1024, C),
		new w(32, 258, 258, 4096, C)
	];
	function E() {
		this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new t.Buf16(1146), this.dyn_dtree = new t.Buf16(122), this.bl_tree = new t.Buf16(78), m(this.dyn_ltree), m(this.dyn_dtree), m(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new t.Buf16(16), this.heap = new t.Buf16(573), m(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new t.Buf16(573), m(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
	}
	function D(e) {
		var t;
		return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = 2, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? 42 : u, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = 0, n._tr_init(t), 0) : f(e, o);
	}
	function O(e) {
		var t, n = D(e);
		return n === 0 && ((t = e.state).window_size = 2 * t.w_size, m(t.head), t.max_lazy_match = T[t.level].max_lazy, t.good_match = T[t.level].good_length, t.nice_match = T[t.level].nice_length, t.max_chain_length = T[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = 2, t.match_available = 0, t.ins_h = 0), n;
	}
	function k(e, n, r, i, a, s) {
		if (!e) return o;
		var c = 1;
		if (n === -1 && (n = 6), i < 0 ? (c = 0, i = -i) : i > 15 && (c = 2, i -= 16), a < 1 || a > 9 || r !== 8 || i < 8 || i > 15 || n < 0 || n > 9 || s < 0 || s > 4) return f(e, o);
		i === 8 && (i = 9);
		var l = new E();
		return e.state = l, l.strm = e, l.wrap = c, l.gzhead = null, l.w_bits = i, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = a + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3), l.window = new t.Buf8(2 * l.w_size), l.head = new t.Buf16(l.hash_size), l.prev = new t.Buf16(l.w_size), l.lit_bufsize = 1 << a + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new t.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = n, l.strategy = s, l.method = r, O(e);
	}
	e.deflateInit = function(e, t) {
		return k(e, t, 8, 15, 8, 0);
	}, e.deflateInit2 = k, e.deflateReset = O, e.deflateResetKeep = D, e.deflateSetHeader = function(e, t) {
		return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = t, 0) : o;
	}, e.deflate = function(e, t) {
		var r, a, c, y;
		if (!e || !e.state || t > 5 || t < 0) return e ? f(e, o) : o;
		if (a = e.state, !e.output || !e.input && e.avail_in !== 0 || a.status === d && t !== 4) return f(e, e.avail_out === 0 ? -5 : o);
		if (a.strm = e, r = a.last_flush, a.last_flush = t, a.status === 42) {
			if (a.wrap === 2) e.adler = 0, _(a, 31), _(a, 139), _(a, 8), a.gzhead ? (_(a, +!!a.gzhead.text + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), _(a, 255 & a.gzhead.time), _(a, a.gzhead.time >> 8 & 255), _(a, a.gzhead.time >> 16 & 255), _(a, a.gzhead.time >> 24 & 255), _(a, a.level === 9 ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0), _(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (_(a, 255 & a.gzhead.extra.length), _(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = i(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69) : (_(a, 0), _(a, 0), _(a, 0), _(a, 0), _(a, 0), _(a, a.level === 9 ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0), _(a, 3), a.status = u);
			else {
				var b = 8 + (a.w_bits - 8 << 4) << 8;
				b |= (a.strategy >= 2 || a.level < 2 ? 0 : a.level < 6 ? 1 : a.level === 6 ? 2 : 3) << 6, a.strstart !== 0 && (b |= 32), b += 31 - b % 31, a.status = u, v(a, b), a.strstart !== 0 && (v(a, e.adler >>> 16), v(a, 65535 & e.adler)), e.adler = 1;
			}
		}
		if (a.status === 69) {
			if (a.gzhead.extra) {
				for (c = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), h(e), c = a.pending, a.pending !== a.pending_buf_size));) _(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
				a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = 73);
			} else a.status = 73;
		}
		if (a.status === 73) {
			if (a.gzhead.name) {
				c = a.pending;
				do {
					if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), h(e), c = a.pending, a.pending === a.pending_buf_size)) {
						y = 1;
						break;
					}
					y = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, _(a, y);
				} while (y !== 0);
				a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), y === 0 && (a.gzindex = 0, a.status = 91);
			} else a.status = 91;
		}
		if (a.status === 91) {
			if (a.gzhead.comment) {
				c = a.pending;
				do {
					if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), h(e), c = a.pending, a.pending === a.pending_buf_size)) {
						y = 1;
						break;
					}
					y = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, _(a, y);
				} while (y !== 0);
				a.gzhead.hcrc && a.pending > c && (e.adler = i(e.adler, a.pending_buf, a.pending - c, c)), y === 0 && (a.status = l);
			} else a.status = l;
		}
		if (a.status === l && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && h(e), a.pending + 2 <= a.pending_buf_size && (_(a, 255 & e.adler), _(a, e.adler >> 8 & 255), e.adler = 0, a.status = u)) : a.status = u), a.pending !== 0) {
			if (h(e), e.avail_out === 0) return a.last_flush = -1, 0;
		} else if (e.avail_in === 0 && p(t) <= p(r) && t !== 4) return f(e, -5);
		if (a.status === d && e.avail_in !== 0) return f(e, -5);
		if (e.avail_in !== 0 || a.lookahead !== 0 || t !== 0 && a.status !== d) {
			var S = a.strategy === 2 ? function(e, t) {
				for (var r;;) {
					if (e.lookahead === 0 && (x(e), e.lookahead === 0)) {
						if (t === 0) return 1;
						break;
					}
					if (e.match_length = 0, r = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, r && (g(e, !1), e.strm.avail_out === 0)) return 1;
				}
				return e.insert = 0, t === 4 ? (g(e, !0), e.strm.avail_out === 0 ? 3 : 4) : e.last_lit && (g(e, !1), e.strm.avail_out === 0) ? 1 : 2;
			}(a, t) : a.strategy === 3 ? function(e, t) {
				for (var r, i, a, o, c = e.window;;) {
					if (e.lookahead <= s) {
						if (x(e), e.lookahead <= s && t === 0) return 1;
						if (e.lookahead === 0) break;
					}
					if (e.match_length = 0, e.lookahead >= 3 && e.strstart > 0 && (i = c[a = e.strstart - 1]) === c[++a] && i === c[++a] && i === c[++a]) {
						o = e.strstart + s;
						do;
						while (i === c[++a] && i === c[++a] && i === c[++a] && i === c[++a] && i === c[++a] && i === c[++a] && i === c[++a] && i === c[++a] && a < o);
						e.match_length = s - (o - a), e.match_length > e.lookahead && (e.match_length = e.lookahead);
					}
					if (e.match_length >= 3 ? (r = n._tr_tally(e, 1, e.match_length - 3), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (r = n._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), r && (g(e, !1), e.strm.avail_out === 0)) return 1;
				}
				return e.insert = 0, t === 4 ? (g(e, !0), e.strm.avail_out === 0 ? 3 : 4) : e.last_lit && (g(e, !1), e.strm.avail_out === 0) ? 1 : 2;
			}(a, t) : T[a.level].func(a, t);
			if (S !== 3 && S !== 4 || (a.status = d), S === 1 || S === 3) return e.avail_out === 0 && (a.last_flush = -1), 0;
			if (S === 2 && (t === 1 ? n._tr_align(a) : t !== 5 && (n._tr_stored_block(a, 0, 0, !1), t === 3 && (m(a.head), a.lookahead === 0 && (a.strstart = 0, a.block_start = 0, a.insert = 0))), h(e), e.avail_out === 0)) return a.last_flush = -1, 0;
		}
		return t === 4 ? a.wrap <= 0 ? 1 : (a.wrap === 2 ? (_(a, 255 & e.adler), _(a, e.adler >> 8 & 255), _(a, e.adler >> 16 & 255), _(a, e.adler >> 24 & 255), _(a, 255 & e.total_in), _(a, e.total_in >> 8 & 255), _(a, e.total_in >> 16 & 255), _(a, e.total_in >> 24 & 255)) : (v(a, e.adler >>> 16), v(a, 65535 & e.adler)), h(e), a.wrap > 0 && (a.wrap = -a.wrap), +(a.pending === 0)) : 0;
	}, e.deflateEnd = function(e) {
		var t;
		return e && e.state ? (t = e.state.status) !== 42 && t !== 69 && t !== 73 && t !== 91 && t !== l && t !== u && t !== d ? f(e, o) : (e.state = null, t === u ? f(e, -3) : 0) : o;
	}, e.deflateSetDictionary = function(e, n) {
		var i, a, s, c, l, u, d, f, p = n.length;
		if (!e || !e.state || (c = (i = e.state).wrap) === 2 || c === 1 && i.status !== 42 || i.lookahead) return o;
		for (c === 1 && (e.adler = r(e.adler, n, p, 0)), i.wrap = 0, p >= i.w_size && (c === 0 && (m(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0), f = new t.Buf8(i.w_size), t.arraySet(f, n, p - i.w_size, i.w_size, 0), n = f, p = i.w_size), l = e.avail_in, u = e.next_in, d = e.input, e.avail_in = p, e.next_in = 0, e.input = n, x(i); i.lookahead >= 3;) {
			a = i.strstart, s = i.lookahead - 2;
			do
				i.ins_h = (i.ins_h << i.hash_shift ^ i.window[a + 3 - 1]) & i.hash_mask, i.prev[a & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = a, a++;
			while (--s);
			i.strstart = a, i.lookahead = 2, x(i);
		}
		return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, e.next_in = u, e.input = d, e.avail_in = l, i.wrap = c, 0;
	}, e.deflateInfo = "pako deflate (from Nodeca project)";
}), je = o((e) => {
	var t = Te(), n = !0, r = !0;
	try {
		String.fromCharCode.apply(null, [0]);
	} catch {
		n = !1;
	}
	try {
		String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
	} catch {
		r = !1;
	}
	for (var i = new t.Buf8(256), a = 0; a < 256; a++) i[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
	function o(e, i) {
		if (i < 65534 && (e.subarray && r || !e.subarray && n)) return String.fromCharCode.apply(null, t.shrinkBuf(e, i));
		for (var a = "", o = 0; o < i; o++) a += String.fromCharCode(e[o]);
		return a;
	}
	i[254] = i[254] = 1, e.string2buf = function(e) {
		var n, r, i, a, o, s = e.length, c = 0;
		for (a = 0; a < s; a++) (64512 & (r = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (i - 56320), a++), c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
		for (n = new t.Buf8(c), o = 0, a = 0; o < c; a++) (64512 & (r = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (r = 65536 + (r - 55296 << 10) + (i - 56320), a++), r < 128 ? n[o++] = r : r < 2048 ? (n[o++] = 192 | r >>> 6, n[o++] = 128 | 63 & r) : r < 65536 ? (n[o++] = 224 | r >>> 12, n[o++] = 128 | r >>> 6 & 63, n[o++] = 128 | 63 & r) : (n[o++] = 240 | r >>> 18, n[o++] = 128 | r >>> 12 & 63, n[o++] = 128 | r >>> 6 & 63, n[o++] = 128 | 63 & r);
		return n;
	}, e.buf2binstring = function(e) {
		return o(e, e.length);
	}, e.binstring2buf = function(e) {
		for (var n = new t.Buf8(e.length), r = 0, i = n.length; r < i; r++) n[r] = e.charCodeAt(r);
		return n;
	}, e.buf2string = function(e, t) {
		var n, r, a, s, c = t || e.length, l = Array(2 * c);
		for (r = 0, n = 0; n < c;) if ((a = e[n++]) < 128) l[r++] = a;
		else if ((s = i[a]) > 4) l[r++] = 65533, n += s - 1;
		else {
			for (a &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && n < c;) a = a << 6 | 63 & e[n++], s--;
			s > 1 ? l[r++] = 65533 : a < 65536 ? l[r++] = a : (a -= 65536, l[r++] = 55296 | a >> 10 & 1023, l[r++] = 56320 | 1023 & a);
		}
		return o(l, r);
	}, e.utf8border = function(e, t) {
		var n;
		for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && (192 & e[n]) == 128;) n--;
		return n < 0 || n === 0 ? t : n + i[e[n]] > t ? n : t;
	};
}), Me = o((e, t) => {
	t.exports = function() {
		this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
	};
}), Ne = o((e) => {
	var t = Ae(), n = Te(), r = je(), i = ke(), a = Me(), o = Object.prototype.toString;
	function s(e) {
		if (!(this instanceof s)) return new s(e);
		this.options = n.assign({
			level: -1,
			method: 8,
			chunkSize: 16384,
			windowBits: 15,
			memLevel: 8,
			strategy: 0,
			to: ""
		}, e || {});
		var c = this.options;
		c.raw && c.windowBits > 0 ? c.windowBits = -c.windowBits : c.gzip && c.windowBits > 0 && c.windowBits < 16 && (c.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new a(), this.strm.avail_out = 0;
		var l = t.deflateInit2(this.strm, c.level, c.method, c.windowBits, c.memLevel, c.strategy);
		if (l !== 0) throw Error(i[l]);
		if (c.header && t.deflateSetHeader(this.strm, c.header), c.dictionary) {
			var u = typeof c.dictionary == "string" ? r.string2buf(c.dictionary) : o.call(c.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(c.dictionary) : c.dictionary;
			if ((l = t.deflateSetDictionary(this.strm, u)) !== 0) throw Error(i[l]);
			this._dict_set = !0;
		}
	}
	function c(e, t) {
		var n = new s(t);
		if (n.push(e, !0), n.err) throw n.msg || i[n.err];
		return n.result;
	}
	s.prototype.push = function(e, i) {
		var a, s, c = this.strm, l = this.options.chunkSize;
		if (this.ended) return !1;
		s = i === ~~i ? i : !0 === i ? 4 : 0, c.input = typeof e == "string" ? r.string2buf(e) : o.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, c.next_in = 0, c.avail_in = c.input.length;
		do {
			if (c.avail_out === 0 && (c.output = new n.Buf8(l), c.next_out = 0, c.avail_out = l), (a = t.deflate(c, s)) !== 1 && a !== 0) return this.onEnd(a), this.ended = !0, !1;
			c.avail_out !== 0 && (c.avail_in !== 0 || s !== 4 && s !== 2) || (this.options.to === "string" ? this.onData(r.buf2binstring(n.shrinkBuf(c.output, c.next_out))) : this.onData(n.shrinkBuf(c.output, c.next_out)));
		} while ((c.avail_in > 0 || c.avail_out === 0) && a !== 1);
		return s === 4 ? (a = t.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === 0) : s !== 2 || (this.onEnd(0), c.avail_out = 0, !0);
	}, s.prototype.onData = function(e) {
		this.chunks.push(e);
	}, s.prototype.onEnd = function(e) {
		e === 0 && (this.result = this.options.to === "string" ? this.chunks.join("") : n.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}, e.Deflate = s, e.deflate = c, e.deflateRaw = function(e, t) {
		return (t ||= {}).raw = !0, c(e, t);
	}, e.gzip = function(e, t) {
		return (t ||= {}).gzip = !0, c(e, t);
	};
}), Pe = o((e, t) => {
	t.exports = function(e, t) {
		var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
		i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
		t: do {
			m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
			e: for (;;) {
				if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
				else {
					if (!(16 & b)) {
						if (64 & b) {
							if (32 & b) {
								n.mode = 12;
								break t;
							}
							e.msg = "invalid literal/length code", n.mode = 30;
							break t;
						}
						y = h[(65535 & y) + (p & (1 << b) - 1)];
						continue e;
					}
					for (x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];;) {
						if (p >>>= b = y >>> 24, m -= b, 16 & (b = y >>> 16 & 255)) {
							if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), (S += p & (1 << b) - 1) > c) {
								e.msg = "invalid distance too far back", n.mode = 30;
								break t;
							}
							if (p >>>= b, m -= b, S > (b = a - o)) {
								if ((b = S - b) > u && n.sane) {
									e.msg = "invalid distance too far back", n.mode = 30;
									break t;
								}
								if (C = 0, w = f, d === 0) {
									if (C += l - b, b < x) {
										x -= b;
										do
											E[a++] = f[C++];
										while (--b);
										C = a - S, w = E;
									}
								} else if (d < b) {
									if (C += l + d - b, (b -= d) < x) {
										x -= b;
										do
											E[a++] = f[C++];
										while (--b);
										if (C = 0, d < x) {
											x -= b = d;
											do
												E[a++] = f[C++];
											while (--b);
											C = a - S, w = E;
										}
									}
								} else if (C += d - b, b < x) {
									x -= b;
									do
										E[a++] = f[C++];
									while (--b);
									C = a - S, w = E;
								}
								for (; x > 2;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
								x && (E[a++] = w[C++], x > 1 && (E[a++] = w[C++]));
							} else {
								C = a - S;
								do
									E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], x -= 3;
								while (x > 2);
								x && (E[a++] = E[C++], x > 1 && (E[a++] = E[C++]));
							}
							break;
						}
						if (64 & b) {
							e.msg = "invalid distance code", n.mode = 30;
							break t;
						}
						y = g[(65535 & y) + (p & (1 << b) - 1)];
					}
				}
				break;
			}
		} while (r < i && a < s);
		r -= x = m >> 3, p &= (1 << (m -= x << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = p, n.bits = m;
	};
}), Fe = o((e, t) => {
	var n = Te(), r = 15, i = [
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		13,
		15,
		17,
		19,
		23,
		27,
		31,
		35,
		43,
		51,
		59,
		67,
		83,
		99,
		115,
		131,
		163,
		195,
		227,
		258,
		0,
		0
	], a = [
		16,
		16,
		16,
		16,
		16,
		16,
		16,
		16,
		17,
		17,
		17,
		17,
		18,
		18,
		18,
		18,
		19,
		19,
		19,
		19,
		20,
		20,
		20,
		20,
		21,
		21,
		21,
		21,
		16,
		72,
		78
	], o = [
		1,
		2,
		3,
		4,
		5,
		7,
		9,
		13,
		17,
		25,
		33,
		49,
		65,
		97,
		129,
		193,
		257,
		385,
		513,
		769,
		1025,
		1537,
		2049,
		3073,
		4097,
		6145,
		8193,
		12289,
		16385,
		24577,
		0,
		0
	], s = [
		16,
		16,
		16,
		16,
		17,
		17,
		18,
		18,
		19,
		19,
		20,
		20,
		21,
		21,
		22,
		22,
		23,
		23,
		24,
		24,
		25,
		25,
		26,
		26,
		27,
		27,
		28,
		28,
		29,
		29,
		64,
		64
	];
	t.exports = function(e, t, c, l, u, d, f, p) {
		var m, h, g, _, v, y, b, x, S, C = p.bits, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = 0, ee = null, te = 0, ne = new n.Buf16(16), P = new n.Buf16(16), re = null, ie = 0;
		for (w = 0; w <= r; w++) ne[w] = 0;
		for (T = 0; T < l; T++) ne[t[c + T]]++;
		for (O = C, D = r; D >= 1 && ne[D] === 0; D--);
		if (O > D && (O = D), D === 0) return u[d++] = 20971520, u[d++] = 20971520, p.bits = 1, 0;
		for (E = 1; E < D && ne[E] === 0; E++);
		for (O < E && (O = E), j = 1, w = 1; w <= r; w++) if (j <<= 1, (j -= ne[w]) < 0) return -1;
		if (j > 0 && (e === 0 || D !== 1)) return -1;
		for (P[1] = 0, w = 1; w < r; w++) P[w + 1] = P[w] + ne[w];
		for (T = 0; T < l; T++) t[c + T] !== 0 && (f[P[t[c + T]]++] = T);
		if (e === 0 ? (ee = re = f, y = 19) : e === 1 ? (ee = i, te -= 257, re = a, ie -= 257, y = 256) : (ee = o, re = s, y = -1), N = 0, T = 0, w = E, v = d, k = O, A = 0, g = -1, _ = (M = 1 << O) - 1, e === 1 && M > 852 || e === 2 && M > 592) return 1;
		for (;;) {
			b = w - A, f[T] < y ? (x = 0, S = f[T]) : f[T] > y ? (x = re[ie + f[T]], S = ee[te + f[T]]) : (x = 96, S = 0), m = 1 << w - A, E = h = 1 << k;
			do
				u[v + (N >> A) + (h -= m)] = b << 24 | x << 16 | S;
			while (h !== 0);
			for (m = 1 << w - 1; N & m;) m >>= 1;
			if (m === 0 ? N = 0 : (N &= m - 1, N += m), T++, --ne[w] === 0) {
				if (w === D) break;
				w = t[c + f[T]];
			}
			if (w > O && (N & _) !== g) {
				for (A === 0 && (A = O), v += E, j = 1 << (k = w - A); k + A < D && !((j -= ne[k + A]) <= 0);) k++, j <<= 1;
				if (M += 1 << k, e === 1 && M > 852 || e === 2 && M > 592) return 1;
				u[g = N & _] = O << 24 | k << 16 | v - d;
			}
		}
		return N !== 0 && (u[v + N] = w - A << 24 | 4194304), p.bits = O, 0;
	};
}), Ie = o((e) => {
	var t = Te(), n = De(), r = Oe(), i = Pe(), a = Fe(), o = -2, s = 12, c = 30;
	function l(e) {
		return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
	}
	function u() {
		this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new t.Buf16(320), this.work = new t.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
	}
	function d(e) {
		var n;
		return e && e.state ? (n = e.state, e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = 1 & n.wrap), n.mode = 1, n.last = 0, n.havedict = 0, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new t.Buf32(852), n.distcode = n.distdyn = new t.Buf32(592), n.sane = 1, n.back = -1, 0) : o;
	}
	function f(e) {
		var t;
		return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, d(e)) : o;
	}
	function p(e, t) {
		var n, r;
		return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? o : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, f(e))) : o;
	}
	function m(e, t) {
		var n, r;
		return e ? (r = new u(), e.state = r, r.window = null, (n = p(e, t)) !== 0 && (e.state = null), n) : o;
	}
	var h, g, _ = !0;
	function v(e) {
		if (_) {
			var n;
			for (h = new t.Buf32(512), g = new t.Buf32(32), n = 0; n < 144;) e.lens[n++] = 8;
			for (; n < 256;) e.lens[n++] = 9;
			for (; n < 280;) e.lens[n++] = 7;
			for (; n < 288;) e.lens[n++] = 8;
			for (a(1, e.lens, 0, 288, h, 0, e.work, { bits: 9 }), n = 0; n < 32;) e.lens[n++] = 5;
			a(2, e.lens, 0, 32, g, 0, e.work, { bits: 5 }), _ = !1;
		}
		e.lencode = h, e.lenbits = 9, e.distcode = g, e.distbits = 5;
	}
	function y(e, n, r, i) {
		var a, o = e.state;
		return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new t.Buf8(o.wsize)), i >= o.wsize ? (t.arraySet(o.window, n, r - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : ((a = o.wsize - o.wnext) > i && (a = i), t.arraySet(o.window, n, r - i, a, o.wnext), (i -= a) ? (t.arraySet(o.window, n, r - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
	}
	e.inflateReset = f, e.inflateReset2 = p, e.inflateResetKeep = d, e.inflateInit = function(e) {
		return m(e, 15);
	}, e.inflateInit2 = m, e.inflate = function(e, u) {
		var d, f, p, m, h, g, _, b, x, S, C, w, T, E, D, O, k, A, j, M, N, ee, te, ne, P = 0, re = new t.Buf8(4), ie = [
			16,
			17,
			18,
			0,
			8,
			7,
			9,
			6,
			10,
			5,
			11,
			4,
			12,
			3,
			13,
			2,
			14,
			1,
			15
		];
		if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return o;
		(d = e.state).mode === s && (d.mode = 13), h = e.next_out, p = e.output, _ = e.avail_out, m = e.next_in, f = e.input, g = e.avail_in, b = d.hold, x = d.bits, S = g, C = _, ee = 0;
		t: for (;;) switch (d.mode) {
			case 1:
				if (d.wrap === 0) {
					d.mode = 13;
					break;
				}
				for (; x < 16;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if (2 & d.wrap && b === 35615) {
					d.check = 0, re[0] = 255 & b, re[1] = b >>> 8 & 255, d.check = r(d.check, re, 2, 0), b = 0, x = 0, d.mode = 2;
					break;
				}
				if (d.flags = 0, d.head && (d.head.done = !1), !(1 & d.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
					e.msg = "incorrect header check", d.mode = c;
					break;
				}
				if ((15 & b) != 8) {
					e.msg = "unknown compression method", d.mode = c;
					break;
				}
				if (x -= 4, N = 8 + (15 & (b >>>= 4)), d.wbits === 0) d.wbits = N;
				else if (N > d.wbits) {
					e.msg = "invalid window size", d.mode = c;
					break;
				}
				d.dmax = 1 << N, e.adler = d.check = 1, d.mode = 512 & b ? 10 : s, b = 0, x = 0;
				break;
			case 2:
				for (; x < 16;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if (d.flags = b, (255 & d.flags) != 8) {
					e.msg = "unknown compression method", d.mode = c;
					break;
				}
				if (57344 & d.flags) {
					e.msg = "unknown header flags set", d.mode = c;
					break;
				}
				d.head && (d.head.text = b >> 8 & 1), 512 & d.flags && (re[0] = 255 & b, re[1] = b >>> 8 & 255, d.check = r(d.check, re, 2, 0)), b = 0, x = 0, d.mode = 3;
			case 3:
				for (; x < 32;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				d.head && (d.head.time = b), 512 & d.flags && (re[0] = 255 & b, re[1] = b >>> 8 & 255, re[2] = b >>> 16 & 255, re[3] = b >>> 24 & 255, d.check = r(d.check, re, 4, 0)), b = 0, x = 0, d.mode = 4;
			case 4:
				for (; x < 16;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				d.head && (d.head.xflags = 255 & b, d.head.os = b >> 8), 512 & d.flags && (re[0] = 255 & b, re[1] = b >>> 8 & 255, d.check = r(d.check, re, 2, 0)), b = 0, x = 0, d.mode = 5;
			case 5:
				if (1024 & d.flags) {
					for (; x < 16;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					d.length = b, d.head && (d.head.extra_len = b), 512 & d.flags && (re[0] = 255 & b, re[1] = b >>> 8 & 255, d.check = r(d.check, re, 2, 0)), b = 0, x = 0;
				} else d.head && (d.head.extra = null);
				d.mode = 6;
			case 6:
				if (1024 & d.flags && ((w = d.length) > g && (w = g), w && (d.head && (N = d.head.extra_len - d.length, d.head.extra || (d.head.extra = Array(d.head.extra_len)), t.arraySet(d.head.extra, f, m, w, N)), 512 & d.flags && (d.check = r(d.check, f, w, m)), g -= w, m += w, d.length -= w), d.length)) break t;
				d.length = 0, d.mode = 7;
			case 7:
				if (2048 & d.flags) {
					if (g === 0) break t;
					w = 0;
					do
						N = f[m + w++], d.head && N && d.length < 65536 && (d.head.name += String.fromCharCode(N));
					while (N && w < g);
					if (512 & d.flags && (d.check = r(d.check, f, w, m)), g -= w, m += w, N) break t;
				} else d.head && (d.head.name = null);
				d.length = 0, d.mode = 8;
			case 8:
				if (4096 & d.flags) {
					if (g === 0) break t;
					w = 0;
					do
						N = f[m + w++], d.head && N && d.length < 65536 && (d.head.comment += String.fromCharCode(N));
					while (N && w < g);
					if (512 & d.flags && (d.check = r(d.check, f, w, m)), g -= w, m += w, N) break t;
				} else d.head && (d.head.comment = null);
				d.mode = 9;
			case 9:
				if (512 & d.flags) {
					for (; x < 16;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					if (b !== (65535 & d.check)) {
						e.msg = "header crc mismatch", d.mode = c;
						break;
					}
					b = 0, x = 0;
				}
				d.head && (d.head.hcrc = d.flags >> 9 & 1, d.head.done = !0), e.adler = d.check = 0, d.mode = s;
				break;
			case 10:
				for (; x < 32;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				e.adler = d.check = l(b), b = 0, x = 0, d.mode = 11;
			case 11:
				if (d.havedict === 0) return e.next_out = h, e.avail_out = _, e.next_in = m, e.avail_in = g, d.hold = b, d.bits = x, 2;
				e.adler = d.check = 1, d.mode = s;
			case s: if (u === 5 || u === 6) break t;
			case 13:
				if (d.last) {
					b >>>= 7 & x, x -= 7 & x, d.mode = 27;
					break;
				}
				for (; x < 3;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				switch (d.last = 1 & b, --x, 3 & (b >>>= 1)) {
					case 0:
						d.mode = 14;
						break;
					case 1:
						if (v(d), d.mode = 20, u === 6) {
							b >>>= 2, x -= 2;
							break t;
						}
						break;
					case 2:
						d.mode = 17;
						break;
					case 3: e.msg = "invalid block type", d.mode = c;
				}
				b >>>= 2, x -= 2;
				break;
			case 14:
				for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if ((65535 & b) != (b >>> 16 ^ 65535)) {
					e.msg = "invalid stored block lengths", d.mode = c;
					break;
				}
				if (d.length = 65535 & b, b = 0, x = 0, d.mode = 15, u === 6) break t;
			case 15: d.mode = 16;
			case 16:
				if (w = d.length) {
					if (w > g && (w = g), w > _ && (w = _), w === 0) break t;
					t.arraySet(p, f, m, w, h), g -= w, m += w, _ -= w, h += w, d.length -= w;
					break;
				}
				d.mode = s;
				break;
			case 17:
				for (; x < 14;) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if (d.nlen = 257 + (31 & b), b >>>= 5, x -= 5, d.ndist = 1 + (31 & b), b >>>= 5, x -= 5, d.ncode = 4 + (15 & b), b >>>= 4, x -= 4, d.nlen > 286 || d.ndist > 30) {
					e.msg = "too many length or distance symbols", d.mode = c;
					break;
				}
				d.have = 0, d.mode = 18;
			case 18:
				for (; d.have < d.ncode;) {
					for (; x < 3;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					d.lens[ie[d.have++]] = 7 & b, b >>>= 3, x -= 3;
				}
				for (; d.have < 19;) d.lens[ie[d.have++]] = 0;
				if (d.lencode = d.lendyn, d.lenbits = 7, te = { bits: d.lenbits }, ee = a(0, d.lens, 0, 19, d.lencode, 0, d.work, te), d.lenbits = te.bits, ee) {
					e.msg = "invalid code lengths set", d.mode = c;
					break;
				}
				d.have = 0, d.mode = 19;
			case 19:
				for (; d.have < d.nlen + d.ndist;) {
					for (; O = (P = d.lencode[b & (1 << d.lenbits) - 1]) >>> 16 & 255, k = 65535 & P, !((D = P >>> 24) <= x);) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					if (k < 16) b >>>= D, x -= D, d.lens[d.have++] = k;
					else {
						if (k === 16) {
							for (ne = D + 2; x < ne;) {
								if (g === 0) break t;
								g--, b += f[m++] << x, x += 8;
							}
							if (b >>>= D, x -= D, d.have === 0) {
								e.msg = "invalid bit length repeat", d.mode = c;
								break;
							}
							N = d.lens[d.have - 1], w = 3 + (3 & b), b >>>= 2, x -= 2;
						} else if (k === 17) {
							for (ne = D + 3; x < ne;) {
								if (g === 0) break t;
								g--, b += f[m++] << x, x += 8;
							}
							x -= D, N = 0, w = 3 + (7 & (b >>>= D)), b >>>= 3, x -= 3;
						} else {
							for (ne = D + 7; x < ne;) {
								if (g === 0) break t;
								g--, b += f[m++] << x, x += 8;
							}
							x -= D, N = 0, w = 11 + (127 & (b >>>= D)), b >>>= 7, x -= 7;
						}
						if (d.have + w > d.nlen + d.ndist) {
							e.msg = "invalid bit length repeat", d.mode = c;
							break;
						}
						for (; w--;) d.lens[d.have++] = N;
					}
				}
				if (d.mode === c) break;
				if (d.lens[256] === 0) {
					e.msg = "invalid code -- missing end-of-block", d.mode = c;
					break;
				}
				if (d.lenbits = 9, te = { bits: d.lenbits }, ee = a(1, d.lens, 0, d.nlen, d.lencode, 0, d.work, te), d.lenbits = te.bits, ee) {
					e.msg = "invalid literal/lengths set", d.mode = c;
					break;
				}
				if (d.distbits = 6, d.distcode = d.distdyn, te = { bits: d.distbits }, ee = a(2, d.lens, d.nlen, d.ndist, d.distcode, 0, d.work, te), d.distbits = te.bits, ee) {
					e.msg = "invalid distances set", d.mode = c;
					break;
				}
				if (d.mode = 20, u === 6) break t;
			case 20: d.mode = 21;
			case 21:
				if (g >= 6 && _ >= 258) {
					e.next_out = h, e.avail_out = _, e.next_in = m, e.avail_in = g, d.hold = b, d.bits = x, i(e, C), h = e.next_out, p = e.output, _ = e.avail_out, m = e.next_in, f = e.input, g = e.avail_in, b = d.hold, x = d.bits, d.mode === s && (d.back = -1);
					break;
				}
				for (d.back = 0; O = (P = d.lencode[b & (1 << d.lenbits) - 1]) >>> 16 & 255, k = 65535 & P, !((D = P >>> 24) <= x);) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if (O && !(240 & O)) {
					for (A = D, j = O, M = k; O = (P = d.lencode[M + ((b & (1 << A + j) - 1) >> A)]) >>> 16 & 255, k = 65535 & P, !(A + (D = P >>> 24) <= x);) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					b >>>= A, x -= A, d.back += A;
				}
				if (b >>>= D, x -= D, d.back += D, d.length = k, O === 0) {
					d.mode = 26;
					break;
				}
				if (32 & O) {
					d.back = -1, d.mode = s;
					break;
				}
				if (64 & O) {
					e.msg = "invalid literal/length code", d.mode = c;
					break;
				}
				d.extra = 15 & O, d.mode = 22;
			case 22:
				if (d.extra) {
					for (ne = d.extra; x < ne;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					d.length += b & (1 << d.extra) - 1, b >>>= d.extra, x -= d.extra, d.back += d.extra;
				}
				d.was = d.length, d.mode = 23;
			case 23:
				for (; O = (P = d.distcode[b & (1 << d.distbits) - 1]) >>> 16 & 255, k = 65535 & P, !((D = P >>> 24) <= x);) {
					if (g === 0) break t;
					g--, b += f[m++] << x, x += 8;
				}
				if (!(240 & O)) {
					for (A = D, j = O, M = k; O = (P = d.distcode[M + ((b & (1 << A + j) - 1) >> A)]) >>> 16 & 255, k = 65535 & P, !(A + (D = P >>> 24) <= x);) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					b >>>= A, x -= A, d.back += A;
				}
				if (b >>>= D, x -= D, d.back += D, 64 & O) {
					e.msg = "invalid distance code", d.mode = c;
					break;
				}
				d.offset = k, d.extra = 15 & O, d.mode = 24;
			case 24:
				if (d.extra) {
					for (ne = d.extra; x < ne;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					d.offset += b & (1 << d.extra) - 1, b >>>= d.extra, x -= d.extra, d.back += d.extra;
				}
				if (d.offset > d.dmax) {
					e.msg = "invalid distance too far back", d.mode = c;
					break;
				}
				d.mode = 25;
			case 25:
				if (_ === 0) break t;
				if (w = C - _, d.offset > w) {
					if ((w = d.offset - w) > d.whave && d.sane) {
						e.msg = "invalid distance too far back", d.mode = c;
						break;
					}
					w > d.wnext ? (w -= d.wnext, T = d.wsize - w) : T = d.wnext - w, w > d.length && (w = d.length), E = d.window;
				} else E = p, T = h - d.offset, w = d.length;
				w > _ && (w = _), _ -= w, d.length -= w;
				do
					p[h++] = E[T++];
				while (--w);
				d.length === 0 && (d.mode = 21);
				break;
			case 26:
				if (_ === 0) break t;
				p[h++] = d.length, _--, d.mode = 21;
				break;
			case 27:
				if (d.wrap) {
					for (; x < 32;) {
						if (g === 0) break t;
						g--, b |= f[m++] << x, x += 8;
					}
					if (C -= _, e.total_out += C, d.total += C, C && (e.adler = d.check = d.flags ? r(d.check, p, C, h - C) : n(d.check, p, C, h - C)), C = _, (d.flags ? b : l(b)) !== d.check) {
						e.msg = "incorrect data check", d.mode = c;
						break;
					}
					b = 0, x = 0;
				}
				d.mode = 28;
			case 28:
				if (d.wrap && d.flags) {
					for (; x < 32;) {
						if (g === 0) break t;
						g--, b += f[m++] << x, x += 8;
					}
					if (b !== (0 | d.total)) {
						e.msg = "incorrect length check", d.mode = c;
						break;
					}
					b = 0, x = 0;
				}
				d.mode = 29;
			case 29:
				ee = 1;
				break t;
			case c:
				ee = -3;
				break t;
			case 31: return -4;
			default: return o;
		}
		return e.next_out = h, e.avail_out = _, e.next_in = m, e.avail_in = g, d.hold = b, d.bits = x, (d.wsize || C !== e.avail_out && d.mode < c && (d.mode < 27 || u !== 4)) && y(e, e.output, e.next_out, C - e.avail_out) ? (d.mode = 31, -4) : (S -= e.avail_in, C -= e.avail_out, e.total_in += S, e.total_out += C, d.total += C, d.wrap && C && (e.adler = d.check = d.flags ? r(d.check, p, C, e.next_out - C) : n(d.check, p, C, e.next_out - C)), e.data_type = d.bits + (d.last ? 64 : 0) + (d.mode === s ? 128 : 0) + (d.mode === 20 || d.mode === 15 ? 256 : 0), (S === 0 && C === 0 || u === 4) && ee === 0 && (ee = -5), ee);
	}, e.inflateEnd = function(e) {
		if (!e || !e.state) return o;
		var t = e.state;
		return t.window &&= null, e.state = null, 0;
	}, e.inflateGetHeader = function(e, t) {
		var n;
		return e && e.state && 2 & (n = e.state).wrap ? (n.head = t, t.done = !1, 0) : o;
	}, e.inflateSetDictionary = function(e, t) {
		var r, i = t.length;
		return e && e.state ? (r = e.state).wrap !== 0 && r.mode !== 11 ? o : r.mode === 11 && n(1, t, i, 0) !== r.check ? -3 : y(e, t, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : o;
	}, e.inflateInfo = "pako inflate (from Nodeca project)";
}), Le = o((e, t) => {
	t.exports = {
		Z_NO_FLUSH: 0,
		Z_PARTIAL_FLUSH: 1,
		Z_SYNC_FLUSH: 2,
		Z_FULL_FLUSH: 3,
		Z_FINISH: 4,
		Z_BLOCK: 5,
		Z_TREES: 6,
		Z_OK: 0,
		Z_STREAM_END: 1,
		Z_NEED_DICT: 2,
		Z_ERRNO: -1,
		Z_STREAM_ERROR: -2,
		Z_DATA_ERROR: -3,
		Z_BUF_ERROR: -5,
		Z_NO_COMPRESSION: 0,
		Z_BEST_SPEED: 1,
		Z_BEST_COMPRESSION: 9,
		Z_DEFAULT_COMPRESSION: -1,
		Z_FILTERED: 1,
		Z_HUFFMAN_ONLY: 2,
		Z_RLE: 3,
		Z_FIXED: 4,
		Z_DEFAULT_STRATEGY: 0,
		Z_BINARY: 0,
		Z_TEXT: 1,
		Z_UNKNOWN: 2,
		Z_DEFLATED: 8
	};
}), Re = o((e, t) => {
	t.exports = function() {
		this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
	};
}), ze = o((e) => {
	var t = Ie(), n = Te(), r = je(), i = Le(), a = ke(), o = Me(), s = Re(), c = Object.prototype.toString;
	function l(e) {
		if (!(this instanceof l)) return new l(e);
		this.options = n.assign({
			chunkSize: 16384,
			windowBits: 0,
			to: ""
		}, e || {});
		var u = this.options;
		u.raw && u.windowBits >= 0 && u.windowBits < 16 && (u.windowBits = -u.windowBits, u.windowBits === 0 && (u.windowBits = -15)), !(u.windowBits >= 0 && u.windowBits < 16) || e && e.windowBits || (u.windowBits += 32), u.windowBits > 15 && u.windowBits < 48 && (15 & u.windowBits || (u.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new o(), this.strm.avail_out = 0;
		var d = t.inflateInit2(this.strm, u.windowBits);
		if (d !== i.Z_OK || (this.header = new s(), t.inflateGetHeader(this.strm, this.header), u.dictionary && (typeof u.dictionary == "string" ? u.dictionary = r.string2buf(u.dictionary) : c.call(u.dictionary) === "[object ArrayBuffer]" && (u.dictionary = new Uint8Array(u.dictionary)), u.raw && (d = t.inflateSetDictionary(this.strm, u.dictionary)) !== i.Z_OK))) throw Error(a[d]);
	}
	function u(e, t) {
		var n = new l(t);
		if (n.push(e, !0), n.err) throw n.msg || a[n.err];
		return n.result;
	}
	l.prototype.push = function(e, a) {
		var o, s, l, u, d, f = this.strm, p = this.options.chunkSize, m = this.options.dictionary, h = !1;
		if (this.ended) return !1;
		s = a === ~~a ? a : !0 === a ? i.Z_FINISH : i.Z_NO_FLUSH, f.input = typeof e == "string" ? r.binstring2buf(e) : c.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, f.next_in = 0, f.avail_in = f.input.length;
		do {
			if (f.avail_out === 0 && (f.output = new n.Buf8(p), f.next_out = 0, f.avail_out = p), (o = t.inflate(f, i.Z_NO_FLUSH)) === i.Z_NEED_DICT && m && (o = t.inflateSetDictionary(this.strm, m)), o === i.Z_BUF_ERROR && !0 === h && (o = i.Z_OK, h = !1), o !== i.Z_STREAM_END && o !== i.Z_OK) return this.onEnd(o), this.ended = !0, !1;
			f.next_out && (f.avail_out !== 0 && o !== i.Z_STREAM_END && (f.avail_in !== 0 || s !== i.Z_FINISH && s !== i.Z_SYNC_FLUSH) || (this.options.to === "string" ? (l = r.utf8border(f.output, f.next_out), u = f.next_out - l, d = r.buf2string(f.output, l), f.next_out = u, f.avail_out = p - u, u && n.arraySet(f.output, f.output, l, u, 0), this.onData(d)) : this.onData(n.shrinkBuf(f.output, f.next_out)))), f.avail_in === 0 && f.avail_out === 0 && (h = !0);
		} while ((f.avail_in > 0 || f.avail_out === 0) && o !== i.Z_STREAM_END);
		return o === i.Z_STREAM_END && (s = i.Z_FINISH), s === i.Z_FINISH ? (o = t.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, o === i.Z_OK) : s !== i.Z_SYNC_FLUSH || (this.onEnd(i.Z_OK), f.avail_out = 0, !0);
	}, l.prototype.onData = function(e) {
		this.chunks.push(e);
	}, l.prototype.onEnd = function(e) {
		e === i.Z_OK && (this.result = this.options.to === "string" ? this.chunks.join("") : n.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}, e.Inflate = l, e.inflate = u, e.inflateRaw = function(e, t) {
		return (t ||= {}).raw = !0, u(e, t);
	}, e.ungzip = u;
}), Be = s(o((e, t) => {
	var n = {};
	(0, Te().assign)(n, Ne(), ze(), Le()), t.exports = n;
})()), Ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", He = /* @__PURE__ */ new Uint8Array(256), Ue = 0; Ue < 64; Ue++) He[Ve.charCodeAt(Ue)] = Ue;
var We, Ge = function(e) {
	return function(e) {
		for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
		return t;
	}(Be.default.inflate(function(e) {
		var t, n, r, i, a, o = .75 * e.length, s = e.length, c = 0;
		e[e.length - 1] === "=" && (o--, e[e.length - 2] === "=" && o--);
		var l = new Uint8Array(o);
		for (t = 0; t < s; t += 4) n = He[e.charCodeAt(t)], r = He[e.charCodeAt(t + 1)], i = He[e.charCodeAt(t + 2)], a = He[e.charCodeAt(t + 3)], l[c++] = n << 2 | r >> 4, l[c++] = (15 & r) << 4 | i >> 2, l[c++] = (3 & i) << 6 | 63 & a;
		return l;
	}(e)));
}, Ke = JSON.parse("\"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\""), qe = JSON.parse("\"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\""), Je = JSON.parse("\"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\""), Ye = JSON.parse("\"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\""), Xe = JSON.parse("\"eJyFnVtzG0eShf8KA0+7EfKseJXkN9nj0Vj0yNaNEHZiHkCySWEJsmmAIA1PzH/fRqMr8+TJU9CLQv2dYqMrK/NU9Q349+jH9va2uXsYfT86+8dqOb1u9o72Tw5P9o4PTk72R89Gf2vvHt5Nb5uuwafZbbP87od2frnhq/kc+V7h09vZfI1KB8fN7Prr5jOGRj8/TOezi9d31/Ou1fNue/m32R/N5W+zh4uvo+8fFqvm2ejHr9PF9OKhWXxsNn/50x8Pzd1lc/mhvZ3eDcf1ww/tH6Pv//nd/snLZ98d7L98tv/8+fNnrw6P//Vs9LlrvJjP7prf2uXsYdbejb7/rpNB+PR1dnFz1yyXo++PO37WLJZ9s9Hz5wd/6XbUfci79mF2senIj+39erHpw95/Xfz33v6rl8fPNv++6P99tfn31fP+38P+3xd7ry/b82bv43r50Nwu936+u2gX9+1i+tBc/mVv7/V8vvdhs7fl3odm2SweO7oN4my5N917WEwvm9vp4mavvdr7ZXbXPqzvm+/+3nR/9frN3vTu8n/axd6s++Pl6nw5u5xNF7Nm+ZfucH/qPuZydnf98eJr08e/P4qPD92fTBeXRe0a/ji9//swJCcvTp6NvpSto5P9Z6PXy4tNqBed+PLw2eivjW13QX7xbPTx4fLv467tUf/fs+6/+4evtgP2j+ZhMbvoIvrPf4/GX0bfH2wi+647kuX9tAvkf55t8eHh4RY3f1zMp7fGj4+Pt/z3VduF6nzuyvNhR3er2/PNSF3fZe2ync+nC+N9NvTCfbO42CR5UV6Wz5/edtKyi08+tP4Q+jHP2v100dzNm6uaFP/Mjm+63OxxeePKi3KA89XSqAXtoqvNaf6Ir+v7r81dbt51ZdZ6Tw5evBxiP58uv+aj+bNZtJm2d02GD0+i5cPXRSPaXrWrhaCzR9F2OftDwOaxEYPb6Jjeze5EXl208/Yu42VzO4uSjcB8YwSJNr+vpvOMrxdNV8qim7+vmmVvNkV5dVjG3o/9xcHBlr02dHLyYot+yK1+zOiv+Q9/crS/v0V/8z8sqfAmo797mDon69HPuWNv8x+e5oP4xfu9cYcN+kc++nd5X7/mo/8tt3qf9/UBvONkiz7m4/qU//BzRmfCOca52ZeMJvkj/zdn33k3n900D8E3rEjPOy0WKv8dmcrL/WIqF7PZxWxxsbrNw7ba+Paym3xEjfQGFw7GjSpH9dzQURnai9zqMrcSn3yVP/E67+trDtIs7+v/8h/e5D/0Gjbrv81/KFynza3uM/o9d9vNwcpqmY/+Ie9rlQ/iMWfcU24lrHSdj+tPP4hXR55fMREODp6XrFxU2lM2HjyHbHyYzS+rk/1l+yTiHKZnnwoe+qWaJ8d+Ka+rzdoQjdb7rCaPq3m7mAm+bCp7uVgtunn8Yp1TqS+b5axfuwr/365bdFldr2adcts+6KXDRu53/A2ZQl8S52ommFhBdWs5uR64nF5fqzlty3ExRiuOzdg1i8Zr//io6N0S/noxvQdTK3963p0/NKKXHt7z6XJHhHerlQWYDUDU3e67NfbsfjlbCqnr68PXdhUWi2neD8ntI7eYPop6mF6sHtTapffyq3nzR9YqlXU7vVio9c75olEffNk+TC9Cxbk060YSA2DKAuvQD7a57EKqFqmru+vpYnU7n67Ex7TX3TrzRuxuiv2AcbkNOevCa1/3HJpnLy6vuoVeWBn6EiVOsr4Cidw/4Vf4hEP/hNvO6VZz/Ajz5qkzc43LTdEvl7OszCvL85YOtOy9hbQvZd7VZ3dW3OU9jJst5tKQ+tQcM9Cn/5g3PjXJQfXdxdHz1VE6AltIX84eZ5cihJN4ZL5iFsXhh135o8+7/mhNVWiTdX/yRWUCXc279M8LpeI4h8GOnOrB/4ZGyEaC/sBPA9KH+ElD5xFwFhLPMqmjL45eFHG48CE+ilzH14UxD7yXOi7v1AF4edRyNJqqL/Vld+xcqra3aKwQzmyVniGhm8DJE335Gj/9qCyo5u2fzd21yNwPVFF2Gqc66cmxs0h2Ze7r2pAu4oHAUFNf/fwnR85O7T59bReiV7/Sp3sYKlXwMfKTF0P7y4oRfaYP8IjFyS1c4Viu+lXOQhxvTEGPYo2TrRYTvF3NH2b387U4LuqgJ3kcjpJI3XrrYTadX86uxCnWum4N7+LneMKKZPHa2JlmO2adunRRGei7mg3WMuZdpTZ/ph3h9bduxYAX4ewUaNHeNHd4ImTmuGiuZ8u49PUSpbWXT8e5LuxsZNVVdTgf8WDHnPLCrBhaS5Hxuqyk1P+SaR+9KmvX/lJXvBBmcf7pQaxQfqwa4FxOqvvDaD5UTKapzo414XVt+bAjKysB/rNWGvzZ5gq1EalNPbx4t3mk9sm5ju2zdy5LaMbcL+uCZv4gLvg8BJN2T3xqdzhiXuKU3d2uRE/iEXmo5DrTa4FC71ef4grnxTH6eJfAiy6RxaF9TCcxNjFX5t9Tlcd+ihEHzk8l7MaOMsX6QuNnOn80XqvxX+iwSxy6qH2dzmFqKEW+OTWhS902FsrlzZfjsslT7RsDSOsgCwLPz3beHs0UOzQMqxrVqZzrP8oFomWwPsWxayGdTaibHm1lyv+xchAryvwyEF2CzC6U0f614o2Lncvdd3F8/HAr4/Zhd17v/KzXlX2+rpp0PB2wEYj7cSMWE6cvRSrTfc0pbuQC2hZkYSXge9tZCnQIdsVm5yfN2+vNeN+14mJVWzfTVZZKBnW7qlTytTwSu8ICM7nHvJK+d2pXfv3lLi+a3fNrNf7TanM78l/PRqfN4u636WyxuYv8z9Hrze3q0bPvjo//9WzY2rpHQNvjjGgwdYRv4tbWVQLCjqHwa7d15FvlEABBcgRuQxXotv4DCs4TlCFkgW2vDgW0LRxE78PWp27rlW+VmCEKvXfh8yYWz23LBsBR6D1w6D3Q0ntA1HtQrPfAhroOrLcTJGfd1r53f7zZPDR1stl87pulU8jg6AHfd5sHtlt4TuDZdy+OCl6FQ1nlkK0qIVvJkK1yyFbVkK1EyFYiZKsUssfY06dNFtjWOnRwXboECA59oEMjLGFDVMfGqZidc0UX5Y1AVNvGZYEXFarcEJW6cVXvJuaiN4kq37guf5PZA0wgIzBOblD4+4zAFwyROThXDlFUsAlDlPjGVfabmEvAJKoD47oYTOaKMIHLwoRYGwWjpxSGxlIYuosxthgThM8UDcymIOU4RVvlQ2bvMb5rCIQLmVQZgoofmVwbguRMJugheBRRAqMqaJ2Dw5ZlPPvWYB/oW4bIt4yTbzln3yrKG4HIt4xL3yoq+JYh8i3jyrdMzL5lEvmWce1bJrNvmUC+ZZx8q/D3GYFvGSLfcq58q6jgW4aoaIyrojExF41JVDTGddGYzEVjAheNCbFoCkbfKgx9qzD0LWPsWyYI3yoa+FZByreKtsqHzL5lfNcQCN8yqTIEFd8yuTYEybdM0EPwKKIEvlXQOgeHfct49i2MDZpX5ORgUSQbI5G9LMhvapxcLYrS2kIT8LfIyeSiqJwutsh2F3XyvChq44tt2P2iShYYRfLBIL6vcHDEyMkWSVTeGJqAQUZOJRpFVaexRS7WqFPFRlGXbWzDtRtVLuCoxioOGrppENBSg4C+GgU216gKhw0NwGYDV14bGqwqXWPXjeI3h1T4b9R3DWnFiWObnUOaPDmqO4b0sRZhsOjA15XAsllHMTu2E/RrpOTWKJFXB4mdGsQ3mpJLoyQ9GhqAQyMlf0ZJuTPq2ZtRJWdGSfsytmBXRo08GSVyZJDeSwpujJS8OEjKiaEB+DBSKlmUVMGinssVVSpWlHSpYgsuVNS4TFGLRQoKui5g9FzA6LiI2W9RE24LMngtUOW0IK9kV9hlUfrGkAmHRbU+ZBV3xRY7hiw5K2rVIXvUkQRPBbqWAWQ/RSm76dB9tFJD5KPGyUSds4MW5Y1A5J3GpXEWFVzTEFmmceWXJmazNImc0ri2SZPZI00ggzRO7lj4+4zAFw2RKTpXjlhUsENDVFjGVVWZmEvKJKon47qYTOZKMoHLyIRYQwWj5xWGhlcYup0xtjoThM8VDUyuIOVwRVvlQ2ZvM75rCISrmVQZgoqfmVwbguRkJugheBRRAgMraJ2Dw9ZlPPtWOVg0LmfkXC6QdYHA3mXSG8XIvVyQ9mUy+JczMjAXlIO5mi3MNfIwF7SJuc4u5grZmAvkYya8FwyczBlZGQjKy0wGM3NGpeSCqiVXczG5RtXkgi4n17meXOGCciVWlHF0NYNoawbR1xyysbkinM1EsDZjyttMXIlDZ3dzYeeQCH9zrTYkFYdzvTokyeNcqQzJo4oY2JyxtQgUG50L2enKkaHTOSOnc4GcDgR2OpPeKEZO54J0OpPB6ZyR07mgnM7V7HSukdO5oJ3OdXY6V8jpXCCnM+G9YOB0zsjpQFBOZzI4nTMqKxdUWbmay8o1KisXdFm5zmXlCpeVK7GsjKPTGUSnM4hO55CdzhXhdCaC0xlTTmfiShw6O50LO4dEOJ1rtSGpOJ3r1SFJTudKZUgeVcTA6YxtnO6QAmVOlwTo9qAthi9bcTsphFyuYPI4w+xwg/AmE3K3gqW3DSI4WyHkawUrVyta9rSikKMVrP2sqOxmhZOXFUxONuD3iYCLFUIeZlg52CCCfxVCpVKwKpSi5TIpChVJwbpEisoFUjiXR+GxOAaKbjUg9KoBoVMVxD5VuHCpQQKPGohyqEFapUNldyp4R8iFMxVFh7ziSkWthDw5UuEy5I85MuBFA1mngPCKq+C83hpqA23IEPmQcTIi5+xERXkjEHmRcWlGRQU3MkR2ZFz5kYnZkEwiRzKuLclk9iQTyJSMkysV/j4j8CVDZEzOlTMVFazJEBWKcVUpJuZSMYlqxbguFpO5WkzgcjEh1kvB6FGFoUkVhi5ljG3KBOFTRQOjKkg5VdFW+ZDZq4zvGgLhViZVhqDiVybXhiA5lgl6CB5FlMC0Clrn4LBtGU++9UNHX2/WUs9ty5ZejorHAAoxBY7rM6clkoAsSsAsQMCG2AApBe/ocx8p2/L0MxQOF3hISKPlcAHRmINiHQFmHQE2dGRL/lrifmxbFndHFndHMe7OMe5OLe6OPO7OPO7OStydWNwNbUziyPozDluTuGWziyOcO4wO367XecEWDf6MwTJEETNOYTOuYmdiDqBJFEXjHEoTOJ4mxKAapsgWDuEtaJzRRCCKtvEc8iKluPfveMa4F8RxL5zjXriMexFF3IvEcS88xb0IKe5FoLgXzHEfOMZ9QOOMJgJx3AsXcR8kivvfhpC/8q2yT0Al0IBCjIHDJwMtkQVkQQVm8QQ2hBJIiaKjqc3l/VbpAaDSA0ChB8ChB0BLDwBZD4BZD4ANPQBSeuBo+52gXZ8OCol6k/vUlKUkIt2nRvYJXk4OOHe1EV1tRFfbuJWPua0cYCsPsM1H0tK8CIo4xras4QHl2FtJ7G/nyrdhjfI2r1He5jXK28oa5a1co7zNa5S3Yo3yVqxR3qY1ytu8Rnk71MT+sW3ZGsVR6QGguGxxjssWp7ZsceSLE2e+OHFWFidOSg8c0VbugVUAIt2DRvYgVADg3LFGdKwRHWvjVj7mtnKArTzANh8JVwAo4hitAgDlSNOksEGr0GCVO7KqdGQlO7LKHeHTGlBER1Yi2KuQRaej7XWGbQn0W7FseyRqtOepRnsaa7RHdNSgUPX2rIQfUCzV02D1p9nqT7PVn1as/lRa/am2+tNs9afC6k+F1Z8Gqz/NVn9asfpTafWn2epPq1Z/Kqz+NFv9abb605DVpzmrTytZfSqz+jRn9Wk1q09FVp+KrD6VWb054z7yrXjhrEfpslj4KpNQFyRQiZCqqoWa5MKhBlRDpOpyokZcWSRTkZFK9RZVSA8SKKNJpYJkVaQ+NclVwA1yxVILKhlSuUZI5pKOclsVdoZF1jw1+VbH2QlI1aZAjXb3na2CVHKNqIKBkEBeQqqyFWqSHYYakNmQqn2HGrEFkcxuRHI0piiCR5FAdkVqcq5fRsOF8wPbsmvmgOLlchPOwtY4bE3ilp3nOsKTV6Pxy4fLGsmUgoeTh1+GWBxbZywAgPAi8JaGt/YPIqL+197aj+pZRuOMJgJRYNTr7CRVQiTfbC9xwhe6KQYcMfVC9yDFbILgkUAhZFUFMrY5qwnjmjCpChRgUnOYY4NKsEUjDnmuWBlFDn+9YocGg59i+A1R4J2rkBf1LKNxRhOBKLTGc1CLVAlnkDmQRVznGHDwjKewvRttLzNsP7DfssnVkV24chQnWec4szq16dSRT4/OfD3grFy4cmJz4xaVwnwtEPXFOHXIuOqViblrJlH/jHMnTeCemhC7a5j6jDcIGFGf0w0C5qrP6gYBS9TnfIOABe4z3yBgzH0ODvC6KnD/o8pRiKqMRWwiIhIbcFyimqIT5RSjKFOkokjxKvc/XwtEMTJO0TGu4mJijohJFAvjHAUTuP8mxJ4bjn3+dejukW/FmxO/YicBxcc9nKdbGL9irwD5AxzOrC/Ahm4AsSc5DH2KW2XyQhTmLRc2U9axbY3D1pfQchI0m7EApUcEfkWjPSJEYU5Gy1wFXBktSxT6bLQs8CCw0TKm4cAVMSMamMqKmNSzHM9xRl/yH05yKx42tUgepPCmOAxg5DSKUaShjKIaz9giD2rUaWSjyMMbVR7jqMaBjhqNdvrCC8lp3Hd94YVqclYZlXGFf6nsZ1Jpz1lR/dKHQYeXXiExkFJaoERJgZJKCdRzQqBK6YASJwNqnAqoxURAhdKA3rMXlFKg/p59bnAmIz+W9Ivcw0S25WGvvHs+qOV1QRhxQzTcxmmsjauBNjGPskk0xMZ5fE3gwTUhjqxhGlZ8R5gRDWjlHWFSz3I8xxl9yX84ya14+NT7tIMUL7LhELJCI8kyDSjLaly5TR5ebkGjzDIPNus85qzHoWeVMoDkT3WF8iHJKi2o0Vl1xMZV5Ut1b5Pq33DmsJwTyF6hg9RxRknjAqWLCypRXM0p4holhwucFq5wQrgSU8E5JUF4wzYxGvjaG7Ysn4nojgX7Iv52ItrxoMq3UAetXN2B0TREg2mcxtK4GkoT80iaRANpnMfRBB5GE+IoGqZBxKt9jGgIK1f7SD3L8Rxn9CX/4SS34sFTFwAHCU/SjwjR2KWTdOZq7NRJOks0dvkknQUeOz5JZ0xjh28mMKKxq7yZQOpZjuc4oy/5Dye5FY+deop/K/02DNv2mfLfcMQAlcECFMYJeHpO/TccHUA2MMBsTIANwwGkjISj/gkt648/oeXIntByJB4s73l6sLyn8cHyHtHj4z2jx8d7Fh4f74k9N2QoPrW4IX5BqN+KF7t6ZHfOAeVLXD1PV7e2FG+MO47Xu3pEl7p6Rle5NqyNW/mY28oBtvIA23wk6a61K+IY/f60o3ixbYP4qcX3I3wvod+KGdUjkT49T+nT05g+PZLvJfQKJVbPKLF6FhLr/Sg9ffZhhM+r9FvxIZUeiSdTep4eR+lpfAalR/LBk16hp016Fh8x6VF8ruRDcNUP2VA/1Lz0wzBwvp/Pub+fK/39LPv7OfeXBw4U0d/P9NTpBxg4J735H5etje8f2tYkbsVH+D+Qqw+0XESD0TdEITGu4mJiDo5JFCHjOkwmc6xMoAQxTlmSL2o6onzZeVHT1M9535w+xnfFSiSSSZVYVVLK5FqsUnKZEDMsXLeNGTLOSTMRiLJOXaQdpHLnC1LPEIXTuAqniTmcJlE4jetwmszhNIFSzzilXuGQeoYo9Zyr1Cvq57xvTj3ju2IlUs+kSqwqqWdyLVYp9UyIqYdvRB3HDBnnpJkIRKmn3ogqUuVJTRY4tN98UpObiDDvelKT1UrIdz6pyTKn6q4nNUnFtNXP9lRUmcKhzefaZ6Z0juq3Y65SOzbYGfNamsdGu2OeUz7KlPjpoadjlaXjWvpOqgIXRPWhp22DbrjhxbR+y57tcRRfTOuReDGt5+nFtJ7GF9N6RC+m9YxeTOtZeDGtJ/HFtE9DNe+/tC1bkDuKC3LnuCB3agtyR7wgd8UX5M7sdRBHdlpnyE/p+q34TFWP7EsgHMWX3p3jybtTe9Xdkb/G7szj7qzE3Unpgf/hRTuHs/Qt2Z6qOoldanIv7VQVUcgu57KX4VQVGufON6Lzjej81/X91yYe0iwM3Syn2MxPwoy1YRdt7ntb6Sie8gK1MnJEeQmKF5izkpeArJoM2YmiF9giDOkiXgXqURlERGFKcGHZ3M5y5qzCMaxyrFaVWK1krFY5VvzsNigiViuRF6tUFE+hD/6dV/2WebGj9D1XZVpFF04PujEnP9YPurGYnTk96MacPTo/6MZCdOv0oBtx8O10GsBcObg6DWCJvLx2GsAyu3o6DWBO/l44mLwhym3jZPfGleebmC3RJDJA4+yCJnDKmxDz3jDNCIVTcTsOc0PBIhI8SxinqcK5sAYT6xFSM4dpleilOcSEWvR4Nil8lrOF5xXjPLkUoc275WnG+K4giQnHJHJS49pOTWZPNYEmIeM0ExXO01Hhi5xKPDEZp9nJuZqiiirmqSKt8mHyjGV8V9jF3GVSJeyVWczkWtjTfGaCLu6n3GuY3gzRHGdcTHTp6eYyoPrpZq3y1Lfj6WbdREyD+ulmraYpsfJ0s5ZpetRPN0sVp0p9wUKrctqsXrDQDXgK3XnBQjdK06m+YKFVnlqDihNsFLggo8qTbVTllBubiGklNuAJJKppGolyqtYoU81GkafloLKjkRin6Pgya+0D03QdVZ60SVX2GJt8K9JyGo8tdo5FntKjvHss0vQe1Fktb9NUH9U04Qe5rX1cmvyj+u1gq4VAbMDzUlQrs1NslOaoKPMCIaq8TAhqWiwEdVFL7bRwiCovH0iVi4jQRi0lQoNVrUNpWRHVbw+oWmLEBjsHtLbciI12D2heekR5l5k91SKGi5Eo8JIkqmlh8nlYjZw8t62yB0BlugAUYg8cPgFoiTIgixowCxWwIT5ASg04Ks59bMRKYUD4cssJIepwermFueq6ermFJQpCfrmFBQ4Hv9zCmAJTOEWnYA5ReofkRHEKln6HRIoqbNV3SKROAay8QyJVDqV8h0RqFNQgUmSDxuGl9zBOMqXQqvcwhKTCWnkPQ6gUUvkehtA4nOI9DKFQKEGiQILCYcQ3G04IUQDTmw3MVejUmw0sUdDymw0scLj4zQbGFKjCKUoFc4jECwQnWqGA1V4gqMgqfDteIKi0oGBWXyCo6BzaygsEFZUCTTLFm1QOe3js/oQZhTo/dp8EFV752H3SKKTisfukcBjTY/eJU+hMoKAZ53DZz19AuJxRuFygcLmgwuVqDpdrFC4XOFyucLhcieFyTuEygcLlv8NC4Rq+pR+CVQiFqmAKVMEqTEXLQSoKhahgDlDhHJ7CY3AKpdAMmAJTfvohhuVsCMn+9ob+GcYDmT3kDCxeHAIBLwkBtgtBwPzKDkA/ewVYnkgFZFd2nG1+DOHQema/gwAonm+54L9+0G/ZywWOxG8e9Dx9O1JP4y8d9Ej+yEGv0O8b9Cz+tEGP4q8abJBfv+q34ulej+ySpyNx2tfzdK7X03iC1yM6YesZnaX1LJya9SSefp+N/IoSkm3i7h+8Kqgf5ec2Vv41o8DKaXZg8UlqF8Kj1IDxq0aB+zPWzuBRaofwLLVBu8SzPRPdoM11ncMXtmXnnI7iY0vO8QTUqT2g5MgfOHLmTxkZa+OxtiKybS2KrY5iK6KVvhAVJBVI/0pUYP5ugzF/wN5rAi+XeFat4lauFHU1pOeyLFa5LPTFjl4RBcOXNXoWCmZcvHn7yP04eDMw82ZgcchAwCEDbEMGzMcFoCc4wOLNgGysnPU3IXwrvvgwTg4LPL34MEaHBSRffBgHhwXmOWYovj4zHhz25Ni2bLHgyBYKjuIiwTkuEJza4sCRLwyc+aLAWVkQOLHFgKFSC8dA8JWg8WCw/hdN7qXZKyLdy0b2Mngr4Nz5RnS+EZ03X9262XiE18vHo3SRfDzKV8bHgwW+sL2aAwKKb6Q5xzfSnNobaY4oL0Hxd9WclbwEZC+mGfJr1TaIaHw+2P6jOGM0PkDip3DGZHxA4w/gjIXxgUI/ezMOxgcs/NjNhmwu0J74Vlyj9ygttifFL/d90zIAmPklsOg8IKD1ADbvAeYWA9DzDWDxS0BmPM76p8yPbSs+mztJfgk8Pag7Qb8ExI8uu0I/pzFBvwQUfyxjMvjlS98qRw2oxB9Q6Ahw6AjQ0hFAdrjALPTAhsgDKT1wFNcOk+SXk8Ev9/f3bdPzzJktSJHFPHMBrQQorkehtVmMIzcSZ5B8BumG42SEq9HJKK1GJ6O8cJwMrgm7bUUE2lpvw8IRsFeVM57SQYKCc2iTOjAvLmNkn5ORWjdORrhunIzSunGS7BN4WjdORmndOBH2CQqtGyejvG6cjHjdOLH7GeAn6WZNEtgW9e2apAqDTDdskpCsMt+ySQqZZrppwwLYZ35BkbgyUvmCIklkqdUXFElmc80vKBInmy0cvNYQGa5xcl3jynpNzP5rEpmwcXZiE9iOTYiebJiM2W/GhQrle3SEseqNsVWZwI7tgjIyU7N3uyQM3ERyceNs5SYkPy8Km3rh4OyGyN6Ns8cXoRWfl9zehJ2RUr5vGpu/CZUZwPQ0DZjCc4EJPCGkW7oURzE1FGklEE0SxtVMYWKeLkyiOcO4njhM5tnDBJ5CTIjzCN1xLQarbrkqjSeU6k1X1UBMK+q2q9LS5CJvvCqRphh161VoMNEgpbkGJTXdoJ5nHFRp0kFJzzvYgqce1Gj2QYkmIJBgDkJK0xBKNBOhpCYj1PN8hCpNSSjxrIQaT0yoxbkJFZqewr34YBTiLn1W0IwQs8+ixrNV0JQNY4M8ZwVVTFuo08yFEk9eqKX5C0SewkCCWQwpTWQo8VwGWqs/Ps1oqH0rmmpeQ5mnNtQqsxs2SRMcijzHocbTnHosJIdbTHagrjSlKQ8lNeuhnic+VGnuQ0lPf9iCZ0DUeBJELcyDXcX2P7u8/a2Z4myIBkdDFB5lAg6fArQ8iQLI7vsDs5vbwOC37AeCPxW9Refd1vmoXNU+x+E/MrQZ2APfKgMKSHzD0jkNIND4DUvnYsBAoW9YOg8DBCx8zfn50Mntb90M5pp+K+Ioq0XaXiTtwtA/KLrdzeXF8COsjprwOQ0mwIDKiyuIOAEGTglQqBsuYsyLAYW8GFjIiy27gunGSfcx82a5nNlMfjXY64FttXHL0sCR+P2oKzJBoPGXoq6E5YFCvwl1hQYHKP760xXms/eV8mB7afmKUmCbAdd5D9elpplXnhjfquX3RmDL5hVHOFv0dFaGrj/GWUiwLcrZtOWcTVsa0maLYtpsWUybnt2UtYhvxft0N2HlASjfuruhdQbScJ/dcLyjdxOWE8DoC8tuyqx+bFsx6Dd5DneeBuMmzNiO5G933cT52Vn8Sc+bMBsbWsetfNQ5VW7yWzVDFCpv1WiVRnDXWzW6SR7XHW/V6BY02rW3arTMOZDfcJHx4szY9YaLbvKtEeHU2f2Gi27ECVV5w0WrlGb5vQct7AxMzsNiJdv1wx1a1oBwTiwo7BQEXLJsURtsqS3z8XYrG6QhaFXxzMihvfRSpNA2O6whaEUPvD5WFfgbYdTOoF350tzHjKAVBpaQtyqTWFo6bWfHKEet/MW8uSqPSm/3yUK0I1bjd6iyKuyImyQ74gbRbFgls2GZzIbl8GWZLMYnSnpVB2tHpHaE6Vsx2h2gHdHZFZpdcakH5dsRgf9/d3Jo6pByI//60YiHFbvSQsqKXS70ny3i2U/UytwptfB0qWjhD+5FHC9mRK18oNS6mXg+n9bU+LCraHE/vegv5Bwl6dE60AVpdLEZsJe2FZ+s6ZEtKQDZwQEM18AWZQ1jepN33eRd0xLFOeY5UFyMOI6vpi/issMZPTO0YZ7a/VYszB7F0LtATy1tkM/0/VaciXtkAQAU9+9CnP8XZTVkh97mALeVaLYymm0OW1rWuCIC2sYX9hdh1WLoPoTNT7SeG/s9tPcprlQvJq0h6r1xyjHnnMP6jqNhsW9O6Xy/kbkYDnW3MUk5zdPNRuY8PuJmYxSuc5w5/43LIkg3LYdKKBwS3RDVhHEqDOeqOkylEgl3OmNnuVgq9zlJrA8R1071JifJtVHiUsp3OCO/z8OQKqsIv+c/hxqz72XyVoYoaMYp351zjfGXPg01hl/6RC25xtKXPiUuBlB96VOSco2lL31izqOXv/SJhOscZ64x47LG0rdHDTVWONSMIaox41RjzlWNmUo1hl85RZ3lGtNfOcVifYi4xmpfOcVybZS4xtJXThG/z8OQaqwIv+c/xxqLX68CbaPAAYwqVwCpqfbkd7qUCsxXn9RfpWqsXH3Sqhr2+tUn3UBUaeXqk1RTLtSuPin5ujaCqYajqitZf11MqeegYpVGgWs7qlzhpMo6j2242vPVOBWoVPm7rsbJJt9KhOQFu6/GyUa7cyG5Q+VqnFLva8Oc/SLIv9d26N4xnNj1Fxm2l2qMlKATtq+0iji+HBA1fEEgKvaSQMT+OkDk/kpA5OW1gEjtG6oC/jQqr3MasRNnwuIV0CJuvk37KOx3nNpM0mdPdEwnKUDdAMFPCvVb8XpPj6JN9Ehc3+l5uq7T03g9p0d0HadndP2mZ+G6TU/i9ZpHmBS8T1Fvcp/ojsNjNnrnsk/ihsJj8HFHoqt8v+Cx2JJv5WPmFx+NywNs85Hktx5NEcfYxvfRHoN9GDJreNGjpzQcT6FrT7lrT5WuPcmuPeWuPVW79iS69pS79pS79pS7tk5dW4dMW+dMW+dMW1cybS0zba0zbZ0zbS0ybS0ybT3Ce+prHA5A4p76moYDaLynvhbDAQrdU1/jcACK99TXYjj4wscwJuHCR2zJo5MvfDAX4yQvfLCURyxf+CDOYycufEQBRjFdHmCuxlNdHmCJRrZ2eYBlHuN0eYA5jXa6FjAMuXh2cRh1fnYxteexl08uCklkQOW5RaXmPFCPLQqJs0E/tpg0yAn1MKGQVGZUHiUUKuXHjgcJRQvOEvUYoZAoV9RDhF26/Os//w8s8zdF\""), Ze = JSON.parse("\"eJyFnV9TG0myxb8K0U/3RjC7NgZj5o0ZZnYGz5pZGyH3bsyDEA3oImhWfxCajf3ut1Xqyjx5Mkt+cbh/p9RdlZV1qrrVJf5T/dg+PjZPi+r76urvy/nortk7PPpwfLh39P7DyUm1X/3cPi0+jR6brsDl5LGZf/dDO735dTGaTsYbdTmdorq3UfdUHj1Opmss0MFhM7m731xwU7Y73pY+fbqbdqW+e3vUkfnPk9fm5vfJYnxffb+YLZv96sf70Ww0XjSzL83msz+9Lpqnm+bmc/s4euqr+cMP7Wv1/b++O3jzZv+7g7cf9k9O3u+fHLz9Y78adGVn08lT83s7nywm7dPmSl0xFS7vJ+OHp2Y+r74/6vhVM5unYtWbNwd/efPmTXeNT+1iMt605Mf2eT3bNGLvf8b/u/f25MPR/ubf4/Tvyebfkzfp33fp3+O905v2utn7sp4vmsf53q9P43b23M5Gi+bmL3t7p9Pp3ufN2eZ7n5t5M3vp6DaYk/neaG8xG900j6PZw157u/fb5KldrJ+b735puk+d/m1v9HTz13a2N+k+PF9ezyc3k9Fs0sz/0lX3p+4yN5Onuy/j+yZ1QKrFl0X3kdHsJqtdwR9Hz7/0ffL+/cl+9TUfHb4/2K9O5+NNpGed+OHdfnXWyHEX4+P96svi5pdhV/Yg/feq++/bg7fb/vp7s5hNxl1E//Wfavi1+v5gE9lPXU3mz6MukP/d3+J3XcwSbl7H09Gj8KOjoy3/97LtQnU9VeVNf6Kn5eP1pqfunrx2006no5nwD+/ebflzMxtvMj4Lx8cftsLosZPmXXi0ZvkzqQapy732PJo1T9PmtiTZj0n1RvPNGecPqhz3yvN0ORcqMRt3A3XkL3G/fr5vnnzxrimTVltykBs5n47m9742fzaz1tP2qfFwsQpKLu5nTVD2tl3OAjp5CcrOJ68BbF6aoG+bOKZPE6iwhGjcTtsnj+fN48RK0gPTjQ842vx7OZp6fDdrupEcNPPfy2aevEZT8KDve637+/fHW3bq0Q8e/ahpe9Cf7MyX+smjn/0H/+aHwC9+UP7qG3buT/9R0du3W/Sbtjuf6+++Ep88uvDn+t2X+oevxGewjvdb9MWf69Kfa+DPdeVrP/SlvvrT1x790yffdTeZPTQLYxsyRq87zY5T/hx5yrF4yngyGU9m4+Wj77XlxrXn3dQTDJHkb6Yy6lMeXQs6PDzsx1jgv75UcOVb/8E73433PkgTj/7Pn+vBl9IhLGn/6K8YmE5ge8/BqPdDaObR3Ndr4Sux9CF88Um48pV49R9c+0r8qejwg+aXTYSDg9zrMJna8ruycTGZ3hSn+pt2FcTZzM46EyzSQk2T421u/+1mYYg+K59ZR3PH7bSdTQI+bwpnGS9n3TQ+XvsuS8NmPklL18D+t6uWeFjdLSed8tgu4pXDRk4n/oZMoc+JczsJWLB+6lZy4XLgZnR3F01pW45LMVpwbPqumTU3/qPdWmh0Nxs9g6nlj153dxFN0EoN7/VoviPCu9XC+ks6wOrdXUGOzXQ6eZ5P5oHUtXVx3y7NWtFN+ya5tedmo5fABkfj5SJauiQvv502r16jkZXx42g8i5Y717MmuvBNuxiNzYhTadL1JAZAlBmOQ61sc9OFNFqjLp/uRrPl43S0DC7T3nXLzIfgdCNsB/TLo8nZk2xwp7rqOXjf53w7u7ntlnlmXagLFDvH6vrDcrnAhV7gncwJs5vHzueWU7yCnGmkTDzjZjPk5/Ng+poW1uZtoZ5tkPTd6OxuiLush16TlZzrUJ2Ybf7p5G+zRiemsEv1dLbvdG3kaiCTxc3kZXITdFJta6bL5WBoaLXth3SdF3xIJ0gagzJVpzsvGiTQVH9KvZ4ZKIp9GKTmNBr0M9RD0hP0Ab0HcBfRO4bOIeAWxN5iUkOPD4+z2D/0CC5FnqOrQpsH2so4Lp+iCujwKOWotVRd50dn0xup0tmsrUI4vVFqhphmAidH1MWrvfrhSR+waftn83QXXP6zvYTew0WN1OTYOUgCUYcXTyOylrUVga6mturdj4+c9tF9OwtadUFX1zAURsEXcok32WwLYRvQBTRidmozjzfmy7TGmQX1pRSUKJY42Wo2wcfldDF5nq6DelEDNcltd+RE6lZbi8loejO5vfV9tS5bwyd7HU3YXcny08402zHrlKVxoaOfSjZIHQqeEo/NX+lE+PCtWzDgEzi5AZq1D80T3gaJOc6au8ncLnx1iNLKS6djPy7kXmTZjWpzN6LBphWkDMyCobU8lmRcFlLqn2Tahyd55Zqec9mnYNLKnxb3vq4/Fg1wGvnWu7xsWxRMpinOjqVZ8LS0fNiRlYUA/1kaGqVKXZR6pDT1lDx3XrpyeRxf7FyW8IyZ1wXNdBE87lkYk1ZPXLU7HDFY6b3PJhe0xNZIQxWuM3UsUOj1PtWucI6P0Me7BJ51iQxVk2nE3cJ8OMj5OgonpI/hIkPuMGzH6T2MfKkTmWJ5ofFrITV/LY3x32j+y3HoonY/msKztzzIN7cm9Jxb+iJyefFlu2zSVPtGB9I6SILA87Pc31gzxQb13Rr16iic67+E613J4PgWRzKss4noG4+2MOX/WKjEkjL/UOz8ZjKOjPasMKHNdrbmk+0frW5huft5d17vXFqfFs55WjTp+HbgovDs8M9g4tSlSGG6LznFQ9iUN9mrzEpAz7ZzKNgq6PPdnVeatneb/n5qg0dVrTdTSR8v5QzqTlUYyXfhTYM8X4GZXGNeSN+ncB6H7w/dFKGeXxrjPy0330X+sV99bGZPv48ms803yP+qTjdfVVf7370/+mO/P9q6h0HbelrUmzrCv22O3sjR1lUMwoahcNEdHelRrgIgSA7DpasM3Y5/g4zzGKUPmWHbp0MGbQcOon9sjqT1l/YoxwyRab0KA3PWgW/9oND6Qdj6gW/9oNj6QdD6vPAzLNkJkqvu6ETaMOyOuqk4H9bd4bEe5SYBgqorhVcCOnyY8bI7eieFlvlsgEyAgMNVgOYAAaIAgSIBAiYBAtYHSMmLacPKHK3tkcRHEcZnS/tCOF4F0aAVTiNXOQ/frMAYFkQDWXg4mrMKQ1oQZbbwKL1F9DkuEiW68DjbReaUF4FGvXAa+pnD+M/oMkDkBMojO8jqwF+OjUH4rvAFFiFSIXwFsxC5FD5nGyJY78gYDCQjdJHMwEoEkZ8I96aSpchZsgb2Iog8RnhkNCJ6txGJLEd47Dsis/mIwA4kgrWhjF98q1cerQNE1iTc+1NvE+hPgsifhJM/KWd/ygr4kyDyJ+GhP2UV/EkQDTDh0QAT0Q8wkWiACY8HmMg8wEQgfxJO/pQ5+FNGlwEif1Ie+VNWB/5y7E/Cd4Uv8CeRCuEr+JPIpfA5fxLB+lPG4E8ZoT9lBv4kiPxJuPenLEX+lDXwJ0HkT8IjfxLR+5NI5E/CY38Smf1JBPYnEaw/ZfziW73yaB0g8ifh3p8wNGhSlpNTWZHsikT2LCODcVlO7mXF0MJMEfAxy2k0WjEakraEH5dWp8FpxXiE2jI8TK1KVmdF8jsjgukZflniZH8kRh5oigwK9WA3tOI34x/4otV3xb/gkLbMzvg7r7SqNUyjgWsajtZpBPBPy8lEreid1OiRnZoC4KmWk7FaMXJXW8JbrNXJZ60Ym60tw45rVbZdq1rvNdpLIU6rAl+XOPmxFb0pK0FLRkqGjBLZsZHYjEEEK0ZKRoxSaMNQAEwYKVkASpEBoO6HP6o0+FGKhz6W4IGPGtkuSmS6IIHlAr2MKdmtkSKzhQKD8OpstCh9I8qByaJajnLBYLHEjig7c0XNWisoYKxA0VYBg6kiJUtFyRsqqJGdggxmipSsFKXISFH3NooqmShKsYViCTZQ1Ng+UbPmCcpLGJNVSNcxJdNEyVtm33r0S0FklsLJKZWzTWYFPFIQGaTw0B2zCtYoiEas8Gi4iujHqkg0UIXHo1RkHqIikAsKJwvMHPwvo8sAkfMpj2wvqwN/OTY84bvCF1idSIXwFUxO5FL4nL2JYL0tYzC2jNDVMgNLE0R+JtybWZYiJ8sa2Jgg8jDhkYGJ6N1LJLIu4bFvicymJQI7lgjWrjJ+8a1eebQOEFmUcO9Pua5oUMrIoVQgiwKBPUokMCll5FIqhDYlMviUMhppKkRDTVU/1lSjwaZCPNpU5+GmCtmVCuRXIoBhCbuMGFkWCJFniTwIrsmupcLOWAa+pVoplgXnUr0YS+ddqljzEg7uJQztSyD4lzIyMBW8g4kWWZiI4GHKyMRUiFxMVW9jqpGPqRAbmersZKqwlalivUz4S9D+VcDWESM/U8EbWq4YGpoyMjQVyNBAYEMTCQxNGRmaCqGhiQyGpowGoQrRIFTVD0LVaBCqEA9C1XkQqkKGpgIZmghgaMIuI0aGBkJkaCIPgmuyoamwM5aBoalWimXB0FQvxtIZmirW0ISDoQlDQxMIhqaMDE0Fb2iiRYYmIhiaMjI0FSJDU9UbmmpkaCrEhqY6G5oqbGiqWEMT/hK0fxWwjaG9YyYxYQFbvdVm/W+UqANlQmaWMVmZYDayXgAby4RMLOPQwnoRDCwTGnIZRwMua364ZYUGW8bxUMsqD7TMybIyJsPqMdhVTy49IasSHBlVLw7cldikMt4RscCgshJHrGBOWS1EzBlT5taWegqm1BO0pB6BIWVCdpSxN6Neiayol8CIMiEbyjgyoax5C8oKGVDGsf1klc0nc7aezK3x9PTFtXXlyNoTWkFl7NdP/SBAvxFEhiOcHEc5W05WwHMEkekID10nq2A7gmgUCY+GkYh+HIlEA0l4PJJE5qEkArmPcLKfzMF/MroMEDmQ8siCsjrwl2MTEr4rfIENiVQIX8GIRC6Fz1mRCNaLMgYzygjdKDOwI0HkR8K9IWUpcqSsgSUJIk8SHpmSiN6VRCJbEh77kshsTCKwM4lgrSnjF9/qlUfrAJE9CXf+9ENHT7ujgyM5yp8FlL0EkAkpcLgC0BxIQBIkYBIfYH1ogOSBrWiQMlCOcgsAmeoCh+oCzdUFRF0OijQEmDQEWN+QLTkzcT/zcT/zcT8rxP0sjPuZj/tZEPezIO5nLu5nPu5nvRkcSXs2PnAoR7XRamuDZzTue9qbLkZGEIVHOMVIeBQoEX20RKKQCee4icDBE8FGUDCFMfMrHwYIaEa1L8WhFR7EN21itPHNiOObOcc38zC+WQzimyWOb+Yuvllw8c0CxTdjjm/Pr3wYML49qn0pF9/MXXx/7kPbT4Y/Y1iR5ZAiI4NSwTiUYrUoZeBECsGKFIoXKcphAzaSuT4d5aYAyi0BZBoCHNoBNDcDkLQCmDQCWN8GILkJira/cdk16uAkI2pjE3RQkxd/hhU6qIk7CHbdWh50XBN1XBN13EQyNh3lugMy1QQOtQSaKwNI6gJMqqKsldVaOrJru4RMTYC75V6iuSaAaMoFReoILN8GAMr5oKj/EVOTEDMzfmd2tCck9wKA7G1AEs6Ns557Uz33fnpesNLz0EXPvYGeB955HtjmuXPMc2+W5/2gP5T2jGyKneOgBxRk3TkNeqA2687NoAdGWXcOgx5IboEiGfRCrN74NsmIRxS3qQnbZIY7YN/UJmhqEzS1tUe+zm2hgm1YwdbXhAcYKEEdZYAB8rHXASZoaQosfUOWhYYsw4YsfUP4fgyUoCHLINhLk1cfq+2TkHd6ZO8sEwpuKhN395OJ2lvJhMK7yKTQDWRiOfyAcvgV6VD+iIkOKCc6Im8/HynRkUKiA7au9NEkOjBypY99osORr3NbqGAbVrD1NeFEByWooyQ6IGuTH/usPpC4S1YDsrVWjrVWKrVWxLVWRWutTCOrLPu9kLU98rVe+9qZqQ7HBQk0REiNRgsV8QOHCtAYIjUeTlSIRxbJNMhIpfFmVUgPEiijSaUByWqQ+lTEjwIu4EcslaAhQyqPEZJ5SFu5LQo7wxKOeSryrYazE5AamwIV2t12tgpSyTWsuiyNMPYSUiNboSLfGsNsNqTGvkOF2IJIZjci2RqTFddFYWdgvHP9Vm0f7b/9IEdyYwfIrORV2DwveHecj4bmqLZH4nyK0MuEmsfZ268OfusbrIXW/mxrfzbcc9/X2e25dzxqKW5Ip3MPPaoDRPWN9qOTFMUBt2FTcY5ItA27l2xKQHBIoBCxGgXKlrkqXXNYEuqiQM0j9VuNjILpB1T4UQ5seUD1BXq7w8AKopAqj4KZ1St/7qFHdYCo6sLLlY4ClbW1L87BEe6u8Kna3vdvlwXpyK6FEsp3zYCCNVHibiGUqF39JESrmcToO6bEzNdLidilzKc8pE4DRG0RTg0SHrVKRN80kah9wrmRInBLRbDNFUxtxi8bGFGb3ZcNzKM2R182sERt9l82sMBt5i8bGHObzQg/LQrcfqtyFKwaxsIWCSJiC3BcrOqiY2UXIytTpKxI8cpfnJ4GiGIknKIjPIqLiD4iIlEshHMUROD2i2BbLti2+aJv7qEe2Uc2F9hIQMFTnAtqGlD7FOfCNAgYPau5gGYAsc+hLvoZCo7s470LPy+poN8TXfSzkR59NSVro9HXRBdV9A3RBRrtISEKszNa5lHAI6NliULvjZYF7gQ2WsbUHbhWZUQdU1irknrl4zn06Kv/YO1LcbdFy9deMtu5oQMtp160InWlFaP+tCV8p1qdetaK3L1W5T62qu1oq1Fvux+eCDn1+64fnoiKXBV6ZVjgXwvnqQvlOSuKv7/Q67BpFRIDKaUFSpQUKEUpgbpPCFQpHVDiZECNUwE1mwioUBrQZviAUgqUN8P7Aldh5Ich/RqeoQ7LcrcX9oj3at4GCD0uiLpbOPW18KijRfS9LBJ1sXDuXxG4c0WwPSuYuhX3+DKiDi3s8SX1ysdz6NFX/8Hal+Lui7bE9pJ9xoVdyAr1JMvUoSxH/cplfPdyCepllrmzWec+Z912PauUASRflhXKBydHaUGFroo9NiwqX4tnq4uf4cxh2SeQ7JmD1FFGSaMCpYsKUaKo6lNENUoOFTgtVOGEUMWmgnJKArNz1jHq+NLOWZavgugOA/Y1+GwdlONODTeY9lp+ugO9KYg6Uzj1pfCoK0X0PSkSdaRw7kcRuBtFsL0omDoRn+Yxoi4sPM0j9crHc+jRV//B2pfizose8PUS3qQfEqK+czfpzKO+i27SWaK+8zfpLHDf8U06Y+o73LrAiPqusHWB1Csfz6FHX/0Ha1+K+y56038r/d5324cjOcqfBZQ7C5DpJ+BwBaC5dwBJxwCTPgHWdweQ3BOK9JWpdGRzLiGbbgkFmZa4S7JEbX4lRKmVGGVVYiahErG5tEH0nuQGNaaTGtulCdnX4rbIb2pJPOx488U0YLvDJSHavZIYbVzZsM2XzUfSLfINMyBbQeVYQaVSE0W8zUYVraMy2ZukSLYlCeKXEv9R4Y6GdGR3NCQU7GhI3O1oSNTuaEgo3NGQFNrRkBjtaEjM7Gj4XG1fDjnUIzsQEgqyPnGX9YnarE8ofNUrKTQeErPvrCVkk/9z76Hv9CinNSLjnCoMzHkGvr2DQnsHYXsHvr3cS6AE7R3Q+P8MvaRkY/Xb7+E+9y6vR7U9krxThPm1pfmRGfS+IAqJ8CguIvrgiEQREh6HSWSOlQiUIMIpS/AR5jtClC+FR5ikDvy5OX2E74pVkEgiFWJVSCmRS7FyySWCzTB8SksZMvSoDhBlXfRItpfy91yQeoIonMKjcIrowykShVN4HE6ROZwiUOoJp9TLHFJPEKWe8ij1sjrw5+bUE74rVkHqiVSIVSH1RC7FyqWeCDb1cC8VZcjQozpAlHrRXqosudcicyXi1yJjNQxw8bXIuAAHe+drkXEhF/j4tchY5YR17+C8CwVO3l3v4IRlBqVrunS26rdjHqW2LbAz5qU0t4V2x9ynvJUp8d3LSWGWDktCXRR4QBRfTtoW6Lo73dBtV7fpyK7CE8q3Q4CChXnibmGeqF2YJ0TL78T0FkFZ3tauxK7IL/vRrO25sDG4dOMWeBgQGaGAePWtiq6+leUBCEj26wlK2/UO5CjXGpBs11Nkt+spx+16SmW7niLdrqdMt+spy9v1lMh2PUHjdrrd1nWoZHtjqmXsJxrfSrkvRRS30tyXAoX7UigsSadIk05Z0Pj79fN9Y6u02cm3fX0sHdmXzRLS1ziEbe5vTyRL5f4WULD7MnG3+zJRu/syIcpLUGhfZmI5LwHZTZgbJPe32vqZadbMt1723CGyU4II8+Zx4jNnacos/SXoVyGUuxf8EpXXcBTxjgNV9N0cZUF/yu8+CFmZo7U98m3wLyPmaRVd2L3Wxpz8OH6tjUXvzO61Nubs0f61NhasW7vX2oiDb7vbAOaRg0e3ASyRl5duA1hmV3e3AczJ3zMHMxREHiic7F545IYieuMXidxfOE8BIrAVimAnA8E0I2ROg1uxmRsyDk7As4RwmiqU74hQMGmo5GcO0Wj6EM5ziAil6PFskjlMKYLIMoSzGWUBZhhBNM0Ij+YaEf2EIxLNOsLjqUdknn9EoElIOM1EmfN0lPnMR4MnJuE0OymPpqisBvNUlpa+NM9YwqNpS8TyfMATmPB4FhOZpzIRSilEk1rGK4/WASq0Opro3LvMeTaI32WOVZ76drzLHBcJpsH4XeZYdVNi4V3mWKbpMX6XOVRxqowfWMRqOG0WH1jEBXgK3fnAIi7kptP4gUWs8tRqVJxRrMCTiFV5srVqOKHYIsHEawvw9GtVNwlb2U0mVqYJ2Yo8LRuVHY1EO0XbnaNFYWek3aRN6jcjHU3gVCCYxm0Jnsyt6qZ0K+/uCze9GxUneSuwc1rVubXdqgrTpBV48rdquASwRYKFgC3AywGrFhYFtpBbGliZFwhW5WWCUd1iwaizUjzdwsGqvHwgNVxEmDLRUsIUWJY+6ZYVVg0XF7bIt2Zit9CwamG5YQu5RYeVdyczL0CMuCoJ66KwM2J+YTLoVyOHR3Ikz6MVyRshiuxzaeX4MFqpPIFWpE+UleljZGX52bESeYS/RWaXCiFqi9+lQjxqVbhLhSRqX7BLhQRuqdulQpja7Hd3RJxaX9jdEYlRHMq7OyKdIlLa3RGpHJt4d0ekUZR4o4OnFKFwo4OXouiUNjp4lSITb3TwGkcl2ujgFYqI2QVAiGLhdwEQj6IQ7gIgidof7AIggVvudgEQpjZHb8/HCkWg+PZ8LEfx2PX2fFyColN+ez7WOValt+djlSJnXxtnRtEKXhtnIYpQ/No4axSV6LVxVjgS/rVx5tR6+bsMpxGj1qtArVchar2qvvWqUetV4Narwq1XxbZeObW+/5H4U0+o5RlTuzOOWp013+asUIsz5vZmzq3N3LY1U9vSq76VH/TIvtV7ha0DFLzVe0WtAmrf6r0yrQFGb/VeQSuA2Ld6N2jzo/rbVxvTkf5oqyC7UFdBfyMrHdmN4gkFe8ETd9vAE7U7wBMKf+wqKbQtPDH7s1YJ2U3fG5Te/337Vg7lORAwCQIw+0QIBHwOBFie/gDTxzkA9ZVTgPmdU0DyOEeZvTfaEvOG8wbRZ5qgwfpLsMgKDcbnCsdA8YdgobT84qki/V1TZVEU5BHBsfTe5rnAkeTuxD70TIgeJW5Ya0/bBhFoS61t4+5tg+7lm3iUop6XG3ZkQS/zi9Mb5u+MN3Rpmr300VkGT3oTd493E7XPdBMKXwxPCj3iTSzojKV5mDvsPXTbhiF6KKA8HgHZn91VjsmpVJJQkSahMqkusL66QOT3dgWlp8zSHn20rMiml3LMLqWSXIo4t1TR1FImmaVIEkvQSOaBIRohIDt3DZ0NAndz1xBNEBDNXUNjgcDM3DVEA1SUR8ARkK3/ad+kZ15v5Ege9CmSB62AzAM/5W6Dx5CtDwrbDR5D43zA9DGpMDE+LaYPRIeVewo6rPyjz2FvfB/kFOJ7gGx3KsfuVCrdqYjyEhTtaGU5LwFJrwoSv9NORLvTzl7aI2t3w4LdDUO7G3q7GxbtbhjY3TCwu2Fod2t75Gu9drWrjUvW3iVr75J1wSXr0CVr75J14JJ14JK1c8nau2Tdu+SBtEdcElDwa5g1uSRQ+7uXdeCSoNAvXNbokoDsb1nWFX5RVlfu27G6cl+J1c4lgbsvv+rKfeNVV/5rrrry323VFX+hVVfuW6waXBIJfl9VV2aRWFd+kVhXfpFYO6M8Vu7WiDUbJZ7FrhHryq8R6ypYI9aV+xqprnCNWFdujVhXfo1YV2aNWFd+jVg7s0TBrxHryq8R68AvUeI1Yl35NWJd+TVi7T2zJs/U4CztkU/nZSF3l2HuLn3usmeCEmT1Msjqpc1qfEzfN889pmdOXhg/pmfRu6J7TM+c/dE/pmfBOqV7TE8cPNNtNmMeuWe02Ywl8tHSZjOW2VHdZjPm5K2Zj3xPs8sKJ6sVHuWsiD5xRaLsFc6JKgJnqwhxyrIbZ07jUrHx5YxxrAtjgxKBbVqFwKtF9IatUuDaIpJ1C2f/FsGZeFbYyTMHOxdEni6cjT0LbXA9Z/EihD4vamD2orHji1CwfdGd94vCE4AIPAtkgaeCzIP5IEvLABWGYDg9iFgeajxRCI9nC5FLI9HNGyLYkUjf5PUxib7JCySaRYrf5AW6n0uib/ICiWeU8Ju8QLPzSvRNnpdgdkFKEwxK0RyDup9mUKWZBqV4ssESPN+gRlMOSjTrgDQKs4TnHpRo+kEpGhao+5GBKg0OlHgAoMZjALXiMOA5CSSyB6OYmQkUtCDE7K6o8RRltGCWQt1PVEYN5irUabpCiWcs1NykBSLPWyDB1IWUZi+UeAIDrY0v76Yx1MKZDAsEkxnKPJ+hVpjSsIib1VDkiQ01nttA4+kNpGCGA3UZ0/JwD6c61HeOaZ7wUIrnPCyxY9S7mQ81M+qvO3Jd5a/srjF4h4L0D3RcYzgABX+K45qaD9T+0Y3roLmg0J/XuDbNA2b+kMZ4M+ikWZujB3sUfWE5lmWmRw8BCs8hW1M8eghQfI78183NWQQ+hDA809aStz/4f3M9zb/5v33B06hWakxaZKNGlFuACF+XAg7Jh1RtGHF+0QaQvEQBTF4tUHZb8R+825DuMtNmPk/PxgU2pgj84UtB9m9WCqbf/tmw2yq/Pn+bHVi01p+Z/Fa5/V2i28g+VRFjVKR/tTQj+gt0t9TV2+njoQ/HNjgPGA5A9hcKHtwkDNx9cf/A8QRsv89/MHMsMPod9wcT6Acf6IdCoB94PlNqw/9QDP+DnbSU2S558F1iRygGvfDOf6xSV+x65z8u4jtoxzv/cQnqttI7/7HMnenfvw/jxV286/37uIjv+ML797Eap0Pp/ftYpiQpvH+/VTeO9yLz8FP2YEDZgxGZM4KQf3lQUdsfbb/t3Rxt3gg/kCMN5OZobY9sZyTkwttilfurZASXyujVf3AdILqycH95Mx9BHQyHihj+WjjPusSpXlb0lYNJEaoGFCoG9DU8wzqmVCWUfIXyxAu1yQiqktGr/+A6QFQD4f7y9LYo1IIUqAwpr8WzrcsK1ZBlX1FZjUAVhUHlhL0Gn11HjKqigq9E/g1YqENGUIWMXv0H1wGi60d/5qmX0Ez6y2cEl8/o1X9wHSC6vHB3+byuKSxrrWy1hKbN7SLL2//3N4r4gepG2mbxePtH7yPNXDA45Sz+mGyRijR5DhJpdsnvS8zjeszt80yr5QuGWr7diFVTnajE82hcuKxugLI42gFmSmgKdtGV9f97IbII7hF/j0KYi/MvLBB2xcM9n6FIH+1js/37SseG2Bd5BMtfV7I42LcmGi79rGJ3qgmm3WfC6UUi4Wa/mVB5w9bgzW9zbd/azGToSO2J5K7F+MwvKS/QAdsLv/Sr7m26vOBSG5AdcC9uUQ3cvZn3wstnwPaFvRezUAamd5jCWnvk69wWKtiGFWx9TdzaVpWgjq19dfDFLF0FSX5vg9/NC5Xemacja/gJ2VfLEwoW9om7aSFRu4RPiJbkidF9fGLmN3wTsevxlUuoVYWPElaVe5SwMgkFKG5TE7YpeBaxMgmlKGgqP7JYmYRa+YRaFRJqFSbUyifUqphQqyChVj6hVj6hVj6hXk3wX33wX33wXwvBfw2D/xoH/9UH/zUI/msQ/LVLobVv2JqnKMJcPPgKxiv4oT/++/9jjgIE\""), Qe = JSON.parse("\"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\""), $e = {
	Courier: "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",
	"Courier-Bold": "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",
	"Courier-Oblique": "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",
	"Courier-BoldOblique": "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",
	Helvetica: Ye,
	"Helvetica-Bold": Ke,
	"Helvetica-Oblique": Je,
	"Helvetica-BoldOblique": qe,
	"Times-Roman": JSON.parse("\"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\""),
	"Times-Bold": Xe,
	"Times-Italic": Qe,
	"Times-BoldItalic": Ze,
	Symbol: "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",
	ZapfDingbats: "eJxtmNtu20YQhl+F4FULyMGeD7pz3AY1ChtG7NpFA18w1NomIlECSRcxgrx7SVk7+wOdG8H5OJydf2Z2d5gf9cV+t0v9VK/r+6vXsXlOlbHe28paq229qj/t++m62aXZ4J/m8PRb1z9/baZxefK63Z6eXN5dVMvTCh83u277xr/6kLrnl2XNq7TpXnczuZyabdee98/b2VzM/x4/dd/T5qab2pd6PQ2vaVVfvDRD005puE3Lu7eH1HbN9hTjx4/77/X6y5lcnUmjVzHIVVDicVX/1W/SsO36dLMfu6nb9/X6TAoBD+5euvZbn8axXtuZ36dhPJrVQqgPQoh5hev91LWLkIv94W1Ygq9+aX+tZAx2tfz64284/sblN/rqfLP/mqrbt3FKu7G67Nv9cNgPzZQ2H6rz7bb6vLgZq89pTMO/M/xfEqturJpqSM/d7GJIm2oamk3aNcO3av80O5xh3yyKmm1193ZIT02bqovTKjP+MAf++7zsZvZ3276kYyWWXB0z99S18/PbafPHQ71W4fjn/fxnFO+ZvkrT0LVzTr78qB/+nk38bHM9exgP8zr1z9U7jt6840YW5uSJKcZOCaBBnKgm5mU8MVNYyMwWFvO7Ukagkmgg6sDWQ5yFFqjzUrLEaQ3BEmiwNsMSaZS0vgWfOkPHWQowNeTUc0kumnxZvsgPxlGai6VTGUqAVCTQ6QkWnc77DKEiLktSUBJKqHIQZ86d8gCpHYoiEzMsb1ubYy8vW50DChB5ZhGqrijD0EqUIeiaEHIfCg5Kpuu0ApiToaGPSY0uaQsyr65L2oKi1yFt1PLaQ3lzfXTgXodGoJYzglndSLDMPg1sTPJpQJHJigw0QrGERqD9YhyTOgONQDUyuF1zaxuokc/BW2ztXCMrGZ9WMW1oQZHIXWNBkSCfRZEL5BMUiZw6CzVSFCfUSGZFNjIldoKDkonTKQiJIGzWmFd3BizJJ9SINoLDriOfUCOZS+zg+KGD1qGiLNMLxtJD1/ns00ON6EzyUCM6vbxhoBKaqbG3DFQCNiL1iHccBPV0DHhQH/JW8EW90dkyFKGywCJU0WkVSvSGeiSUODWFFD0HYdPQVoiRgfPMA+/nnRgiAyNYSjpWNQcNSMrtFCUH4ZIRpSCWocFCSuhCEY6hoUClc0WC52BJlCYYLQdhN+hygRRRlo5BKRRLS6oihSqh+ZzzRGG1Mo4Iz1LoP0qsxDGFzk0JE42ji0jCPejomJKCuwil4m5CiRMEUMVSzVLDUstSx1Juc0oVWMpqY295qVltmtWmWW2a1aZZbZrVplltmtWmWW2G1WZYbYbVZlhthtVmWG2G1WZYbYbVZlhtltVmWW2W1WZZbZbVZlltltVmWW2W1QYjQCh7E2aAQHeGhCFgPoNoy8KNb2wxBhmGKBxoUZXlLGsLI6AsftEDHV0wIURVbANLcTKlGGBIKPOAxCmhePCKUwFzAmpDFRQvjA9R06Hq8TONvshgKDCuRAZTXigUxjxNFfKRo3CLhnIJBMFRvMZpqpNBMlQJzGT5WFQMVQI/AikPMIhEU1aDjqJvQwmjSHB05cC9jbYwc5UtAHNLhDw41ha+lEqF4JaH3gmB61SYcqInxTDmQK8v08vjqv4zDf1N0w3Lf4A8/vwPpfK11w=="
};
(function(e) {
	e.Courier = "Courier", e.CourierBold = "Courier-Bold", e.CourierOblique = "Courier-Oblique", e.CourierBoldOblique = "Courier-BoldOblique", e.Helvetica = "Helvetica", e.HelveticaBold = "Helvetica-Bold", e.HelveticaOblique = "Helvetica-Oblique", e.HelveticaBoldOblique = "Helvetica-BoldOblique", e.TimesRoman = "Times-Roman", e.TimesRomanBold = "Times-Bold", e.TimesRomanItalic = "Times-Italic", e.TimesRomanBoldItalic = "Times-BoldItalic", e.Symbol = "Symbol", e.ZapfDingbats = "ZapfDingbats";
})(We ||= {});
for (var et = {}, tt = function() {
	function e() {
		var e = this;
		this.getWidthOfGlyph = function(t) {
			return e.CharWidths[t];
		}, this.getXAxisKerningForPair = function(t, n) {
			return (e.KernPairXAmounts[t] || {})[n];
		};
	}
	return e.load = function(t) {
		var n = et[t];
		if (n) return n;
		var r = Ge($e[t]), i = Object.assign(new e(), JSON.parse(r));
		return i.CharWidths = i.CharMetrics.reduce(function(e, t) {
			return e[t.N] = t.WX, e;
		}, {}), i.KernPairXAmounts = i.KernPairs.reduce(function(e, t) {
			var n = t[0], r = t[1], i = t[2];
			return e[n] || (e[n] = {}), e[n][r] = i, e;
		}, {}), et[t] = i, i;
	}, e;
}(), nt = Ge("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"), rt = JSON.parse(nt), it = function(e, t) {
	var n = this;
	this.canEncodeUnicodeCodePoint = function(e) {
		return e in n.unicodeMappings;
	}, this.encodeUnicodeCodePoint = function(e) {
		var t = n.unicodeMappings[e];
		if (!t) {
			var r = String.fromCharCode(e), i = "0x" + function(e, t, n) {
				for (var r = "", i = 0, a = t - e.length; i < a; i++) r += n;
				return r + e;
			}(e.toString(16), 4, "0"), a = n.name + " cannot encode \"" + r + "\" (" + i + ")";
			throw Error(a);
		}
		return {
			code: t[0],
			name: t[1]
		};
	}, this.name = e, this.supportedCodePoints = Object.keys(t).map(Number).sort(function(e, t) {
		return e - t;
	}), this.unicodeMappings = t;
}, at = {
	Symbol: new it("Symbol", rt.symbol),
	ZapfDingbats: new it("ZapfDingbats", rt.zapfdingbats),
	WinAnsi: new it("WinAnsi", rt.win1252)
}, ot = function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, st = ot(We), ct = function(e) {
	return st.includes(e);
}, lt = function(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}, ut = function(e) {
	return "`" + e + "`";
}, dt = function(e) {
	var t = typeof e;
	return t === "string" ? "'" + e + "'" : t === "undefined" ? ut(e) : e;
}, ft = function(e, t, n) {
	Array.isArray(n) || (n = ot(n));
	for (var r = 0, i = n.length; r < i; r++) if (e === n[r]) return;
	throw TypeError(function(e, t, n) {
		for (var r = Array(n.length), i = 0, a = n.length; i < a; i++) {
			var o = n[i];
			r[i] = dt(o);
		}
		var s = r.join(" or ");
		return ut(t) + " must be one of " + s + ", but was actually " + dt(e);
	}(e, t, n));
}, pt = function(e, t, n) {
	Array.isArray(n) || (n = ot(n)), ft(e, t, n.concat(void 0));
}, mt = function(e, t, n) {
	Array.isArray(n) || (n = ot(n));
	for (var r = 0, i = e.length; r < i; r++) ft(e[r], t, n);
}, ht = function(e, t) {
	return t === "null" ? e === null : t === "undefined" ? e === void 0 : t === "string" ? typeof e == "string" : t === "number" ? typeof e == "number" && !isNaN(e) : t === "boolean" ? typeof e == "boolean" : t === "symbol" ? typeof e == "symbol" : t === "bigint" ? typeof e == "bigint" : t === Date ? e instanceof Date : t === Array ? e instanceof Array : t === Uint8Array ? e instanceof Uint8Array : t === ArrayBuffer ? e instanceof ArrayBuffer : t === Function ? e instanceof Function : e instanceof t[0];
}, gt = function(e, t, n) {
	for (var r = Array(n.length), i = 0, a = n.length; i < a; i++) {
		var o = n[i];
		o === "null" && (r[i] = ut("null")), o === "undefined" && (r[i] = ut("undefined")), o === "string" ? r[i] = ut("string") : o === "number" ? r[i] = ut("number") : o === "boolean" ? r[i] = ut("boolean") : o === "symbol" ? r[i] = ut("symbol") : o === "bigint" ? r[i] = ut("bigint") : o === Array ? r[i] = ut("Array") : o === Uint8Array ? r[i] = ut("Uint8Array") : o === ArrayBuffer ? r[i] = ut("ArrayBuffer") : r[i] = ut(o[1]);
	}
	var s, c = r.join(" or ");
	return ut(t) + " must be of type " + c + ", but was actually of type " + ut((s = e) === null ? "null" : s === void 0 ? "undefined" : typeof s == "string" ? "string" : isNaN(s) ? "NaN" : typeof s == "number" ? "number" : typeof s == "boolean" ? "boolean" : typeof s == "symbol" ? "symbol" : typeof s == "bigint" ? "bigint" : s.constructor && s.constructor.name ? s.constructor.name : s.name ? s.name : s.constructor ? String(s.constructor) : String(s));
}, F = function(e, t, n) {
	for (var r = 0, i = n.length; r < i; r++) if (ht(e, n[r])) return;
	throw TypeError(gt(e, t, n));
}, I = function(e, t, n) {
	F(e, t, n.concat("undefined"));
}, _t = function(e, t, n) {
	for (var r = 0, i = e.length; r < i; r++) F(e[r], t, n);
}, vt = function(e, t, n, r) {
	if (F(e, t, ["number"]), F(n, "min", ["number"]), F(r, "max", ["number"]), r = Math.max(n, r), e < n || e > r) throw Error(ut(t) + " must be at least " + n + " and at most " + r + ", but was actually " + e);
}, yt = function(e, t, n, r) {
	F(e, t, ["number", "undefined"]), typeof e == "number" && vt(e, t, n, r);
}, bt = function(e, t, n) {
	if (F(e, t, ["number"]), e % n !== 0) throw Error(ut(t) + " must be a multiple of " + n + ", but was actually " + e);
}, xt = function(e, t) {
	if (![1, 0].includes(Math.sign(e))) throw Error(ut(t) + " must be a positive number or 0, but was actually " + e);
}, L = /* @__PURE__ */ new Uint16Array(256), St = 0; St < 256; St++) L[St] = St;
L[22] = b(""), L[24] = b("˘"), L[25] = b("ˇ"), L[26] = b("ˆ"), L[27] = b("˙"), L[28] = b("˝"), L[29] = b("˛"), L[30] = b("˚"), L[31] = b("˜"), L[127] = b("�"), L[128] = b("•"), L[129] = b("†"), L[130] = b("‡"), L[131] = b("…"), L[132] = b("—"), L[133] = b("–"), L[134] = b("ƒ"), L[135] = b("⁄"), L[136] = b("‹"), L[137] = b("›"), L[138] = b("−"), L[139] = b("‰"), L[140] = b("„"), L[141] = b("“"), L[142] = b("”"), L[143] = b("‘"), L[144] = b("’"), L[145] = b("‚"), L[146] = b("™"), L[147] = b("ﬁ"), L[148] = b("ﬂ"), L[149] = b("Ł"), L[150] = b("Œ"), L[151] = b("Š"), L[152] = b("Ÿ"), L[153] = b("Ž"), L[154] = b("ı"), L[155] = b("ł"), L[156] = b("œ"), L[157] = b("š"), L[158] = b("ž"), L[159] = b("�"), L[160] = b("€"), L[173] = b("�");
var Ct, wt = function(e) {
	for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = L[e[n]];
	return String.fromCodePoint.apply(String, t);
}, Tt = function() {
	function e(e) {
		this.populate = e, this.value = void 0;
	}
	return e.prototype.getValue = function() {
		return this.value;
	}, e.prototype.access = function() {
		return this.value ||= this.populate(), this.value;
	}, e.prototype.invalidate = function() {
		this.value = void 0;
	}, e.populatedBy = function(t) {
		return new e(t);
	}, e;
}(), Et = function(e) {
	function t(t, n) {
		var r = "Method " + t + "." + n + "() not implemented";
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), Dt = function(e) {
	function t(t) {
		var n = "Cannot construct " + t + " - it has a private constructor";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Ot = function(e) {
	function t(t, n) {
		var r = function(e) {
			return e?.name ?? e?.constructor?.name;
		}, i = "Expected instance of " + (Array.isArray(t) ? t.map(r) : [r(t)]).join(" or ") + ", but got instance of " + (n && r(n));
		return e.call(this, i) || this;
	}
	return l(t, e), t;
}(Error), kt = function(e) {
	function t(t) {
		var n = t + " stream encoding not supported";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), At = function(e) {
	function t(t, n) {
		var r = "Cannot call " + t + "." + n + "() more than once";
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), jt = (function(e) {
	function t(t) {
		var n = "Missing catalog (ref=" + t + ")";
		return e.call(this, n) || this;
	}
	l(t, e);
}(Error), function(e) {
	function t() {
		return e.call(this, "Can't embed page with missing Contents") || this;
	}
	return l(t, e), t;
}(Error)), Mt = function(e) {
	function t(t) {
		var n = "Unrecognized stream type: " + (t?.contructor?.name ?? t?.name ?? t);
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Nt = function(e) {
	function t() {
		return e.call(this, "Found mismatched contexts while embedding pages. All pages in the array passed to `PDFDocument.embedPages()` must be from the same document.") || this;
	}
	return l(t, e), t;
}(Error), Pt = function(e) {
	function t(t) {
		var n = "Attempted to convert PDFArray with " + t + " elements to rectangle, but must have exactly 4 elements.";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Ft = function(e) {
	function t(t) {
		var n = "Attempted to convert \"" + t + "\" to a date, but it does not match the PDF date string format.";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), It = function(e) {
	function t(t, n) {
		var r = "Invalid targetIndex specified: targetIndex=" + t + " must be less than Count=" + n;
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), Lt = function(e) {
	function t(t, n) {
		var r = "Failed to " + n + " at targetIndex=" + t + " due to corrupt page tree: It is likely that one or more 'Count' entries are invalid";
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), Rt = function(e) {
	function t(t, n, r) {
		var i = "index should be at least " + n + " and at most " + r + ", but was actually " + t;
		return e.call(this, i) || this;
	}
	return l(t, e), t;
}(Error), zt = function(e) {
	function t() {
		return e.call(this, "Attempted to set invalid field value") || this;
	}
	return l(t, e), t;
}(Error), Bt = function(e) {
	function t() {
		return e.call(this, "Attempted to select multiple values for single-select field") || this;
	}
	return l(t, e), t;
}(Error), Vt = function(e) {
	function t(t) {
		var n = "No /DA (default appearance) entry found for field: " + t;
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Ht = function(e) {
	function t(t) {
		var n = "No Tf operator found for DA of field: " + t;
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Ut = function(e) {
	function t(t, n) {
		var r = "Failed to parse number (line:" + t.line + " col:" + t.column + " offset=" + t.offset + "): \"" + n + "\"";
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), Wt = function(e) {
	function t(t, n) {
		var r = "Failed to parse PDF document (line:" + t.line + " col:" + t.column + " offset=" + t.offset + "): " + n;
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), Gt = function(e) {
	function t(t, n, r) {
		var i = "Expected next byte to be " + n + " but it was actually " + r;
		return e.call(this, t, i) || this;
	}
	return l(t, e), t;
}(Wt), Kt = function(e) {
	function t(t, n) {
		var r = "Failed to parse PDF object starting with the following byte: " + n;
		return e.call(this, t, r) || this;
	}
	return l(t, e), t;
}(Wt), qt = function(e) {
	function t(t) {
		return e.call(this, t, "Failed to parse invalid PDF object") || this;
	}
	return l(t, e), t;
}(Wt), Jt = function(e) {
	function t(t) {
		return e.call(this, t, "Failed to parse PDF stream") || this;
	}
	return l(t, e), t;
}(Wt), Yt = function(e) {
	function t(t) {
		return e.call(this, t, "Failed to parse PDF literal string due to unbalanced parenthesis") || this;
	}
	return l(t, e), t;
}(Wt), Xt = function(e) {
	function t(t) {
		return e.call(this, t, "Parser stalled") || this;
	}
	return l(t, e), t;
}(Wt), Zt = function(e) {
	function t(t) {
		return e.call(this, t, "No PDF header found") || this;
	}
	return l(t, e), t;
}(Wt), Qt = function(e) {
	function t(t, n) {
		var r = "Did not find expected keyword '" + oe(n) + "'";
		return e.call(this, t, r) || this;
	}
	return l(t, e), t;
}(Wt);
(function(e) {
	e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Newline = 10] = "Newline", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationPoint = 33] = "ExclamationPoint", e[e.Hash = 35] = "Hash", e[e.Percent = 37] = "Percent", e[e.LeftParen = 40] = "LeftParen", e[e.RightParen = 41] = "RightParen", e[e.Plus = 43] = "Plus", e[e.Minus = 45] = "Minus", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.ForwardSlash = 47] = "ForwardSlash", e[e.Zero = 48] = "Zero", e[e.One = 49] = "One", e[e.Two = 50] = "Two", e[e.Three = 51] = "Three", e[e.Four = 52] = "Four", e[e.Five = 53] = "Five", e[e.Six = 54] = "Six", e[e.Seven = 55] = "Seven", e[e.Eight = 56] = "Eight", e[e.Nine = 57] = "Nine", e[e.LessThan = 60] = "LessThan", e[e.GreaterThan = 62] = "GreaterThan", e[e.A = 65] = "A", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.R = 82] = "R", e[e.LeftSquareBracket = 91] = "LeftSquareBracket", e[e.BackSlash = 92] = "BackSlash", e[e.RightSquareBracket = 93] = "RightSquareBracket", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.x = 120] = "x", e[e.LeftCurly = 123] = "LeftCurly", e[e.RightCurly = 125] = "RightCurly", e[e.Tilde = 126] = "Tilde";
})(Ct ||= {});
var R = Ct, $t = function() {
	function e(e, t) {
		this.major = String(e), this.minor = String(t);
	}
	return e.prototype.toString = function() {
		var e = w(129);
		return "%PDF-" + this.major + "." + this.minor + "\n%" + e + e + e + e;
	}, e.prototype.sizeInBytes = function() {
		return 12 + this.major.length + this.minor.length;
	}, e.prototype.copyBytesInto = function(e, t) {
		var n = t;
		return e[t++] = R.Percent, e[t++] = R.P, e[t++] = R.D, e[t++] = R.F, e[t++] = R.Dash, t += E(this.major, e, t), e[t++] = R.Period, t += E(this.minor, e, t), e[t++] = R.Newline, e[t++] = R.Percent, e[t++] = 129, e[t++] = 129, e[t++] = 129, e[t++] = 129, t - n;
	}, e.forVersion = function(t, n) {
		return new e(t, n);
	}, e;
}(), en = function() {
	function e() {}
	return e.prototype.clone = function(e) {
		throw new Et(this.constructor.name, "clone");
	}, e.prototype.toString = function() {
		throw new Et(this.constructor.name, "toString");
	}, e.prototype.sizeInBytes = function() {
		throw new Et(this.constructor.name, "sizeInBytes");
	}, e.prototype.copyBytesInto = function(e, t) {
		throw new Et(this.constructor.name, "copyBytesInto");
	}, e;
}(), z = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.numberValue = t, n.stringValue = function(e) {
			var t, n = String(e);
			if (Math.abs(e) < 1) {
				if (t = parseInt(e.toString().split("e-")[1])) {
					var r = e < 0;
					r && (e *= -1), e *= 10 ** (t - 1), n = "0." + Array(t).join("0") + e.toString().substring(2), r && (n = "-" + n);
				}
			} else (t = parseInt(e.toString().split("+")[1])) > 20 && (t -= 20, n = (e /= 10 ** t).toString() + Array(t + 1).join("0"));
			return n;
		}(t), n;
	}
	return l(t, e), t.prototype.asNumber = function() {
		return this.numberValue;
	}, t.prototype.value = function() {
		return this.numberValue;
	}, t.prototype.clone = function() {
		return t.of(this.numberValue);
	}, t.prototype.toString = function() {
		return this.stringValue;
	}, t.prototype.sizeInBytes = function() {
		return this.stringValue.length;
	}, t.prototype.copyBytesInto = function(e, t) {
		return t += E(this.stringValue, e, t), this.stringValue.length;
	}, t.of = function(e) {
		return new t(e);
	}, t;
}(en), B = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.array = [], n.context = t, n;
	}
	return l(t, e), t.prototype.size = function() {
		return this.array.length;
	}, t.prototype.push = function(e) {
		this.array.push(e);
	}, t.prototype.insert = function(e, t) {
		this.array.splice(e, 0, t);
	}, t.prototype.indexOf = function(e) {
		var t = this.array.indexOf(e);
		return t === -1 ? void 0 : t;
	}, t.prototype.remove = function(e) {
		this.array.splice(e, 1);
	}, t.prototype.set = function(e, t) {
		this.array[e] = t;
	}, t.prototype.get = function(e) {
		return this.array[e];
	}, t.prototype.lookupMaybe = function(e) {
		var t, n = [...arguments].slice(1);
		return (t = this.context).lookupMaybe.apply(t, p([this.get(e)], n));
	}, t.prototype.lookup = function(e) {
		var t, n = [...arguments].slice(1);
		return (t = this.context).lookup.apply(t, p([this.get(e)], n));
	}, t.prototype.asRectangle = function() {
		if (this.size() !== 4) throw new Pt(this.size());
		var e = this.lookup(0, z).asNumber(), t = this.lookup(1, z).asNumber();
		return {
			x: e,
			y: t,
			width: this.lookup(2, z).asNumber() - e,
			height: this.lookup(3, z).asNumber() - t
		};
	}, t.prototype.asArray = function() {
		return this.array.slice();
	}, t.prototype.clone = function(e) {
		for (var n = t.withContext(e || this.context), r = 0, i = this.size(); r < i; r++) n.push(this.array[r]);
		return n;
	}, t.prototype.toString = function() {
		for (var e = "[ ", t = 0, n = this.size(); t < n; t++) e += this.get(t).toString(), e += " ";
		return e += "]";
	}, t.prototype.sizeInBytes = function() {
		for (var e = 3, t = 0, n = this.size(); t < n; t++) e += this.get(t).sizeInBytes() + 1;
		return e;
	}, t.prototype.copyBytesInto = function(e, t) {
		var n = t;
		e[t++] = R.LeftSquareBracket, e[t++] = R.Space;
		for (var r = 0, i = this.size(); r < i; r++) t += this.get(r).copyBytesInto(e, t), e[t++] = R.Space;
		return e[t++] = R.RightSquareBracket, t - n;
	}, t.prototype.scalePDFNumbers = function(e, t) {
		for (var n = 0, r = this.size(); n < r; n++) {
			var i = this.lookup(n);
			if (i instanceof z) {
				var a = n % 2 == 0 ? e : t;
				this.set(n, z.of(i.asNumber() * a));
			}
		}
	}, t.withContext = function(e) {
		return new t(e);
	}, t;
}(en), tn = {}, nn = function(e) {
	function t(t, n) {
		var r = this;
		if (t !== tn) throw new Dt("PDFBool");
		return (r = e.call(this) || this).value = n, r;
	}
	return l(t, e), t.prototype.asBoolean = function() {
		return this.value;
	}, t.prototype.clone = function() {
		return this;
	}, t.prototype.toString = function() {
		return String(this.value);
	}, t.prototype.sizeInBytes = function() {
		return this.value ? 4 : 5;
	}, t.prototype.copyBytesInto = function(e, t) {
		return this.value ? (e[t++] = R.t, e[t++] = R.r, e[t++] = R.u, e[t++] = R.e, 4) : (e[t++] = R.f, e[t++] = R.a, e[t++] = R.l, e[t++] = R.s, e[t++] = R.e, 5);
	}, t.True = new t(tn, !0), t.False = new t(tn, !1), t;
}(en), rn = /* @__PURE__ */ new Uint8Array(256);
rn[R.LeftParen] = 1, rn[R.RightParen] = 1, rn[R.LessThan] = 1, rn[R.GreaterThan] = 1, rn[R.LeftSquareBracket] = 1, rn[R.RightSquareBracket] = 1, rn[R.LeftCurly] = 1, rn[R.RightCurly] = 1, rn[R.ForwardSlash] = 1, rn[R.Percent] = 1;
var an = /* @__PURE__ */ new Uint8Array(256);
an[R.Null] = 1, an[R.Tab] = 1, an[R.Newline] = 1, an[R.FormFeed] = 1, an[R.CarriageReturn] = 1, an[R.Space] = 1;
for (var on = /* @__PURE__ */ new Uint8Array(256), sn = 0; sn < 256; sn++) on[sn] = an[sn] || rn[sn] ? 1 : 0;
on[R.Hash] = 1;
var cn, ln = function(e) {
	return e.replace(/#([\dABCDEF]{2})/g, function(e, t) {
		return function(e) {
			return w(parseInt(e, 16));
		}(t);
	});
}, un = function(e) {
	return e >= R.ExclamationPoint && e <= R.Tilde && !on[e];
}, dn = {}, fn = /* @__PURE__ */ new Map(), V = function(e) {
	function t(t, n) {
		var r = this;
		if (t !== dn) throw new Dt("PDFName");
		r = e.call(this) || this;
		for (var i = "/", a = 0, o = n.length; a < o; a++) {
			var s = n[a], c = b(s);
			i += un(c) ? s : "#" + C(c);
		}
		return r.encodedName = i, r;
	}
	return l(t, e), t.prototype.asBytes = function() {
		for (var e = [], t = "", n = !1, r = function(t) {
			t !== void 0 && e.push(t), n = !1;
		}, i = 1, a = this.encodedName.length; i < a; i++) {
			var o = this.encodedName[i], s = b(o), c = this.encodedName[i + 1];
			n ? s >= R.Zero && s <= R.Nine || s >= R.a && s <= R.f || s >= R.A && s <= R.F ? (t += o).length !== 2 && (c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F") || (r(parseInt(t, 16)), t = "") : r(s) : s === R.Hash ? n = !0 : r(s);
		}
		return new Uint8Array(e);
	}, t.prototype.decodeText = function() {
		var e = this.asBytes();
		return String.fromCharCode.apply(String, Array.from(e));
	}, t.prototype.asString = function() {
		return this.encodedName;
	}, t.prototype.value = function() {
		return this.encodedName;
	}, t.prototype.clone = function() {
		return this;
	}, t.prototype.toString = function() {
		return this.encodedName;
	}, t.prototype.sizeInBytes = function() {
		return this.encodedName.length;
	}, t.prototype.copyBytesInto = function(e, t) {
		return t += E(this.encodedName, e, t), this.encodedName.length;
	}, t.of = function(e) {
		var n = ln(e), r = fn.get(n);
		return r || (r = new t(dn, n), fn.set(n, r)), r;
	}, t.Length = t.of("Length"), t.FlateDecode = t.of("FlateDecode"), t.Resources = t.of("Resources"), t.Font = t.of("Font"), t.XObject = t.of("XObject"), t.ExtGState = t.of("ExtGState"), t.Contents = t.of("Contents"), t.Type = t.of("Type"), t.Parent = t.of("Parent"), t.MediaBox = t.of("MediaBox"), t.Page = t.of("Page"), t.Annots = t.of("Annots"), t.TrimBox = t.of("TrimBox"), t.ArtBox = t.of("ArtBox"), t.BleedBox = t.of("BleedBox"), t.CropBox = t.of("CropBox"), t.Rotate = t.of("Rotate"), t.Title = t.of("Title"), t.Author = t.of("Author"), t.Subject = t.of("Subject"), t.Creator = t.of("Creator"), t.Keywords = t.of("Keywords"), t.Producer = t.of("Producer"), t.CreationDate = t.of("CreationDate"), t.ModDate = t.of("ModDate"), t;
}(en), pn = new (function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.asNull = function() {
		return null;
	}, t.prototype.clone = function() {
		return this;
	}, t.prototype.toString = function() {
		return "null";
	}, t.prototype.sizeInBytes = function() {
		return 4;
	}, t.prototype.copyBytesInto = function(e, t) {
		return e[t++] = R.n, e[t++] = R.u, e[t++] = R.l, e[t++] = R.l, 4;
	}, t;
}(en))(), H = function(e) {
	function t(t, n) {
		var r = e.call(this) || this;
		return r.dict = t, r.context = n, r;
	}
	return l(t, e), t.prototype.keys = function() {
		return Array.from(this.dict.keys());
	}, t.prototype.values = function() {
		return Array.from(this.dict.values());
	}, t.prototype.entries = function() {
		return Array.from(this.dict.entries());
	}, t.prototype.set = function(e, t) {
		this.dict.set(e, t);
	}, t.prototype.get = function(e, t) {
		t === void 0 && (t = !1);
		var n = this.dict.get(e);
		if (n !== pn || t) return n;
	}, t.prototype.has = function(e) {
		var t = this.dict.get(e);
		return t !== void 0 && t !== pn;
	}, t.prototype.lookupMaybe = function(e) {
		var t, n = [...arguments].slice(1), r = n.includes(pn), i = (t = this.context).lookupMaybe.apply(t, p([this.get(e, r)], n));
		if (i !== pn || r) return i;
	}, t.prototype.lookup = function(e) {
		var t, n = [...arguments].slice(1), r = n.includes(pn), i = (t = this.context).lookup.apply(t, p([this.get(e, r)], n));
		if (i !== pn || r) return i;
	}, t.prototype.delete = function(e) {
		return this.dict.delete(e);
	}, t.prototype.asMap = function() {
		return new Map(this.dict);
	}, t.prototype.uniqueKey = function(e) {
		e === void 0 && (e = "");
		for (var t = this.keys(), n = V.of(this.context.addRandomSuffix(e, 10)); t.includes(n);) n = V.of(this.context.addRandomSuffix(e, 10));
		return n;
	}, t.prototype.clone = function(e) {
		for (var n = t.withContext(e || this.context), r = this.entries(), i = 0, a = r.length; i < a; i++) {
			var o = r[i], s = o[0], c = o[1];
			n.set(s, c);
		}
		return n;
	}, t.prototype.toString = function() {
		for (var e = "<<\n", t = this.entries(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i[0], o = i[1];
			e += a.toString() + " " + o.toString() + "\n";
		}
		return e += ">>";
	}, t.prototype.sizeInBytes = function() {
		for (var e = 5, t = this.entries(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i[0], o = i[1];
			e += a.sizeInBytes() + o.sizeInBytes() + 2;
		}
		return e;
	}, t.prototype.copyBytesInto = function(e, t) {
		var n = t;
		e[t++] = R.LessThan, e[t++] = R.LessThan, e[t++] = R.Newline;
		for (var r = this.entries(), i = 0, a = r.length; i < a; i++) {
			var o = r[i], s = o[0], c = o[1];
			t += s.copyBytesInto(e, t), e[t++] = R.Space, t += c.copyBytesInto(e, t), e[t++] = R.Newline;
		}
		return e[t++] = R.GreaterThan, e[t++] = R.GreaterThan, t - n;
	}, t.withContext = function(e) {
		return new t(/* @__PURE__ */ new Map(), e);
	}, t.fromMapWithContext = function(e, n) {
		return new t(e, n);
	}, t;
}(en), mn = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.dict = t, n;
	}
	return l(t, e), t.prototype.clone = function(e) {
		throw new Et(this.constructor.name, "clone");
	}, t.prototype.getContentsString = function() {
		throw new Et(this.constructor.name, "getContentsString");
	}, t.prototype.getContents = function() {
		throw new Et(this.constructor.name, "getContents");
	}, t.prototype.getContentsSize = function() {
		throw new Et(this.constructor.name, "getContentsSize");
	}, t.prototype.updateDict = function() {
		var e = this.getContentsSize();
		this.dict.set(V.Length, z.of(e));
	}, t.prototype.sizeInBytes = function() {
		return this.updateDict(), this.dict.sizeInBytes() + this.getContentsSize() + 18;
	}, t.prototype.toString = function() {
		this.updateDict();
		var e = this.dict.toString();
		return e += "\nstream\n", e += this.getContentsString(), e += "\nendstream";
	}, t.prototype.copyBytesInto = function(e, t) {
		this.updateDict();
		var n = t;
		t += this.dict.copyBytesInto(e, t), e[t++] = R.Newline, e[t++] = R.s, e[t++] = R.t, e[t++] = R.r, e[t++] = R.e, e[t++] = R.a, e[t++] = R.m, e[t++] = R.Newline;
		for (var r = this.getContents(), i = 0, a = r.length; i < a; i++) e[t++] = r[i];
		return e[t++] = R.Newline, e[t++] = R.e, e[t++] = R.n, e[t++] = R.d, e[t++] = R.s, e[t++] = R.t, e[t++] = R.r, e[t++] = R.e, e[t++] = R.a, e[t++] = R.m, t - n;
	}, t;
}(en), hn = function(e) {
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r.contents = n, r;
	}
	return l(t, e), t.prototype.asUint8Array = function() {
		return this.contents.slice();
	}, t.prototype.clone = function(e) {
		return t.of(this.dict.clone(e), this.contents.slice());
	}, t.prototype.getContentsString = function() {
		return oe(this.contents);
	}, t.prototype.getContents = function() {
		return this.contents;
	}, t.prototype.getContentsSize = function() {
		return this.contents.length;
	}, t.of = function(e, n) {
		return new t(e, n);
	}, t;
}(mn), gn = {}, _n = /* @__PURE__ */ new Map(), vn = function(e) {
	function t(t, n, r) {
		var i = this;
		if (t !== gn) throw new Dt("PDFRef");
		return (i = e.call(this) || this).objectNumber = n, i.generationNumber = r, i.tag = n + " " + r + " R", i;
	}
	return l(t, e), t.prototype.clone = function() {
		return this;
	}, t.prototype.toString = function() {
		return this.tag;
	}, t.prototype.sizeInBytes = function() {
		return this.tag.length;
	}, t.prototype.copyBytesInto = function(e, t) {
		return t += E(this.tag, e, t), this.tag.length;
	}, t.of = function(e, n) {
		n === void 0 && (n = 0);
		var r = e + " " + n + " R", i = _n.get(r);
		return i || (i = new t(gn, e, n), _n.set(r, i)), i;
	}, t;
}(en), U = function() {
	function e(e, t) {
		this.name = e, this.args = t || [];
	}
	return e.prototype.clone = function(t) {
		for (var n = Array(this.args.length), r = 0, i = n.length; r < i; r++) {
			var a = this.args[r];
			n[r] = a instanceof en ? a.clone(t) : a;
		}
		return e.of(this.name, n);
	}, e.prototype.toString = function() {
		for (var e = "", t = 0, n = this.args.length; t < n; t++) e += String(this.args[t]) + " ";
		return e += this.name;
	}, e.prototype.sizeInBytes = function() {
		for (var e = 0, t = 0, n = this.args.length; t < n; t++) {
			var r = this.args[t];
			e += (r instanceof en ? r.sizeInBytes() : r.length) + 1;
		}
		return e += this.name.length;
	}, e.prototype.copyBytesInto = function(e, t) {
		for (var n = t, r = 0, i = this.args.length; r < i; r++) {
			var a = this.args[r];
			t += a instanceof en ? a.copyBytesInto(e, t) : E(a, e, t), e[t++] = R.Space;
		}
		return (t += E(this.name, e, t)) - n;
	}, e.of = function(t, n) {
		return new e(t, n);
	}, e;
}();
(function(e) {
	e.NonStrokingColor = "sc", e.NonStrokingColorN = "scn", e.NonStrokingColorRgb = "rg", e.NonStrokingColorGray = "g", e.NonStrokingColorCmyk = "k", e.NonStrokingColorspace = "cs", e.StrokingColor = "SC", e.StrokingColorN = "SCN", e.StrokingColorRgb = "RG", e.StrokingColorGray = "G", e.StrokingColorCmyk = "K", e.StrokingColorspace = "CS", e.BeginMarkedContentSequence = "BDC", e.BeginMarkedContent = "BMC", e.EndMarkedContent = "EMC", e.MarkedContentPointWithProps = "DP", e.MarkedContentPoint = "MP", e.DrawObject = "Do", e.ConcatTransformationMatrix = "cm", e.PopGraphicsState = "Q", e.PushGraphicsState = "q", e.SetFlatness = "i", e.SetGraphicsStateParams = "gs", e.SetLineCapStyle = "J", e.SetLineDashPattern = "d", e.SetLineJoinStyle = "j", e.SetLineMiterLimit = "M", e.SetLineWidth = "w", e.SetTextMatrix = "Tm", e.SetRenderingIntent = "ri", e.AppendRectangle = "re", e.BeginInlineImage = "BI", e.BeginInlineImageData = "ID", e.EndInlineImage = "EI", e.ClipEvenOdd = "W*", e.ClipNonZero = "W", e.CloseAndStroke = "s", e.CloseFillEvenOddAndStroke = "b*", e.CloseFillNonZeroAndStroke = "b", e.ClosePath = "h", e.AppendBezierCurve = "c", e.CurveToReplicateFinalPoint = "y", e.CurveToReplicateInitialPoint = "v", e.EndPath = "n", e.FillEvenOddAndStroke = "B*", e.FillEvenOdd = "f*", e.FillNonZeroAndStroke = "B", e.FillNonZero = "f", e.LegacyFillNonZero = "F", e.LineTo = "l", e.MoveTo = "m", e.ShadingFill = "sh", e.StrokePath = "S", e.BeginText = "BT", e.EndText = "ET", e.MoveText = "Td", e.MoveTextSetLeading = "TD", e.NextLine = "T*", e.SetCharacterSpacing = "Tc", e.SetFontAndSize = "Tf", e.SetTextHorizontalScaling = "Tz", e.SetTextLineHeight = "TL", e.SetTextRenderingMode = "Tr", e.SetTextRise = "Ts", e.SetWordSpacing = "Tw", e.ShowText = "Tj", e.ShowTextAdjusted = "TJ", e.ShowTextLine = "'", e.ShowTextLineAndSpace = "\"", e.Type3D0 = "d0", e.Type3D1 = "d1", e.BeginCompatibilitySection = "BX", e.EndCompatibilitySection = "EX";
})(cn ||= {});
var yn, W = cn, bn = function(e) {
	function t(t, n) {
		var r = e.call(this, t) || this;
		return r.computeContents = function() {
			var e = r.getUnencodedContents();
			return r.encode ? Be.default.deflate(e) : e;
		}, r.encode = n, n && t.set(V.of("Filter"), V.of("FlateDecode")), r.contentsCache = Tt.populatedBy(r.computeContents), r;
	}
	return l(t, e), t.prototype.getContents = function() {
		return this.contentsCache.access();
	}, t.prototype.getContentsSize = function() {
		return this.contentsCache.access().length;
	}, t.prototype.getUnencodedContents = function() {
		throw new Et(this.constructor.name, "getUnencodedContents");
	}, t;
}(mn), xn = function(e) {
	function t(t, n, r) {
		r === void 0 && (r = !0);
		var i = e.call(this, t, r) || this;
		return i.operators = n, i;
	}
	return l(t, e), t.prototype.push = function() {
		var e, t = [...arguments];
		(e = this.operators).push.apply(e, t);
	}, t.prototype.clone = function(e) {
		for (var n = Array(this.operators.length), r = 0, i = this.operators.length; r < i; r++) n[r] = this.operators[r].clone(e);
		var a = this.dict, o = this.encode;
		return t.of(a.clone(e), n, o);
	}, t.prototype.getContentsString = function() {
		for (var e = "", t = 0, n = this.operators.length; t < n; t++) e += this.operators[t] + "\n";
		return e;
	}, t.prototype.getUnencodedContents = function() {
		for (var e = new Uint8Array(this.getUnencodedContentsSize()), t = 0, n = 0, r = this.operators.length; n < r; n++) t += this.operators[n].copyBytesInto(e, t), e[t++] = R.Newline;
		return e;
	}, t.prototype.getUnencodedContentsSize = function() {
		for (var e = 0, t = 0, n = this.operators.length; t < n; t++) e += this.operators[t].sizeInBytes() + 1;
		return e;
	}, t.of = function(e, n, r) {
		return r === void 0 && (r = !0), new t(e, n, r);
	}, t;
}(bn), Sn = function() {
	function e(e) {
		this.seed = e;
	}
	return e.prototype.nextInt = function() {
		var e = 1e4 * Math.sin(this.seed++);
		return e - Math.floor(e);
	}, e.withSeed = function(t) {
		return new e(t);
	}, e;
}(), Cn = function(e, t) {
	var n = e[0], r = t[0];
	return n.objectNumber - r.objectNumber;
}, wn = function() {
	function e() {
		this.largestObjectNumber = 0, this.header = $t.forVersion(1, 7), this.trailerInfo = {}, this.indirectObjects = /* @__PURE__ */ new Map(), this.rng = Sn.withSeed(1);
	}
	return e.prototype.assign = function(e, t) {
		this.indirectObjects.set(e, t), e.objectNumber > this.largestObjectNumber && (this.largestObjectNumber = e.objectNumber);
	}, e.prototype.nextRef = function() {
		return this.largestObjectNumber += 1, vn.of(this.largestObjectNumber);
	}, e.prototype.register = function(e) {
		var t = this.nextRef();
		return this.assign(t, e), t;
	}, e.prototype.delete = function(e) {
		return this.indirectObjects.delete(e);
	}, e.prototype.lookupMaybe = function(e) {
		var t = [...arguments].slice(1), n = t.includes(pn), r = e instanceof vn ? this.indirectObjects.get(e) : e;
		if (r && (r !== pn || n)) {
			for (var i = 0, a = t.length; i < a; i++) {
				var o = t[i];
				if (o === pn) {
					if (r === pn) return r;
				} else if (r instanceof o) return r;
			}
			throw new Ot(t, r);
		}
	}, e.prototype.lookup = function(e) {
		var t = [...arguments].slice(1), n = e instanceof vn ? this.indirectObjects.get(e) : e;
		if (t.length === 0) return n;
		for (var r = 0, i = t.length; r < i; r++) {
			var a = t[r];
			if (a === pn) {
				if (n === pn) return n;
			} else if (n instanceof a) return n;
		}
		throw new Ot(t, n);
	}, e.prototype.getObjectRef = function(e) {
		for (var t = Array.from(this.indirectObjects.entries()), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i[0];
			if (i[1] === e) return a;
		}
	}, e.prototype.enumerateIndirectObjects = function() {
		return Array.from(this.indirectObjects.entries()).sort(Cn);
	}, e.prototype.obj = function(e) {
		if (e instanceof en) return e;
		if (e == null) return pn;
		if (typeof e == "string") return V.of(e);
		if (typeof e == "number") return z.of(e);
		if (typeof e == "boolean") return e ? nn.True : nn.False;
		if (Array.isArray(e)) {
			for (var t = B.withContext(this), n = 0, r = e.length; n < r; n++) t.push(this.obj(e[n]));
			return t;
		}
		var i = H.withContext(this), a = Object.keys(e);
		for (n = 0, r = a.length; n < r; n++) {
			var o = a[n], s = e[o];
			s !== void 0 && i.set(V.of(o), this.obj(s));
		}
		return i;
	}, e.prototype.stream = function(e, t) {
		return t === void 0 && (t = {}), hn.of(this.obj(t), ie(e));
	}, e.prototype.flateStream = function(e, t) {
		return t === void 0 && (t = {}), this.stream(Be.default.deflate(ie(e)), u(u({}, t), { Filter: "FlateDecode" }));
	}, e.prototype.contentStream = function(e, t) {
		return t === void 0 && (t = {}), xn.of(this.obj(t), e);
	}, e.prototype.formXObject = function(e, t) {
		return t === void 0 && (t = {}), this.contentStream(e, u(u({
			BBox: this.obj([
				0,
				0,
				0,
				0
			]),
			Matrix: this.obj([
				1,
				0,
				0,
				1,
				0,
				0
			])
		}, t), {
			Type: "XObject",
			Subtype: "Form"
		}));
	}, e.prototype.getPushGraphicsStateContentStream = function() {
		if (this.pushGraphicsStateContentStreamRef) return this.pushGraphicsStateContentStreamRef;
		var e = this.obj({}), t = U.of(W.PushGraphicsState), n = xn.of(e, [t]);
		return this.pushGraphicsStateContentStreamRef = this.register(n), this.pushGraphicsStateContentStreamRef;
	}, e.prototype.getPopGraphicsStateContentStream = function() {
		if (this.popGraphicsStateContentStreamRef) return this.popGraphicsStateContentStreamRef;
		var e = this.obj({}), t = U.of(W.PopGraphicsState), n = xn.of(e, [t]);
		return this.popGraphicsStateContentStreamRef = this.register(n), this.popGraphicsStateContentStreamRef;
	}, e.prototype.addRandomSuffix = function(e, t) {
		return t === void 0 && (t = 4), e + "-" + Math.floor(this.rng.nextInt() * 10 ** t);
	}, e.create = function() {
		return new e();
	}, e;
}(), Tn = function(e) {
	function t(t, n, r) {
		r === void 0 && (r = !0);
		var i = e.call(this, t, n) || this;
		return i.normalized = !1, i.autoNormalizeCTM = r, i;
	}
	return l(t, e), t.prototype.clone = function(e) {
		for (var n = t.fromMapWithContext(/* @__PURE__ */ new Map(), e || this.context, this.autoNormalizeCTM), r = this.entries(), i = 0, a = r.length; i < a; i++) {
			var o = r[i], s = o[0], c = o[1];
			n.set(s, c);
		}
		return n;
	}, t.prototype.Parent = function() {
		return this.lookupMaybe(V.Parent, H);
	}, t.prototype.Contents = function() {
		return this.lookup(V.of("Contents"));
	}, t.prototype.Annots = function() {
		return this.lookupMaybe(V.Annots, B);
	}, t.prototype.BleedBox = function() {
		return this.lookupMaybe(V.BleedBox, B);
	}, t.prototype.TrimBox = function() {
		return this.lookupMaybe(V.TrimBox, B);
	}, t.prototype.ArtBox = function() {
		return this.lookupMaybe(V.ArtBox, B);
	}, t.prototype.Resources = function() {
		var e = this.getInheritableAttribute(V.Resources);
		return this.context.lookupMaybe(e, H);
	}, t.prototype.MediaBox = function() {
		var e = this.getInheritableAttribute(V.MediaBox);
		return this.context.lookup(e, B);
	}, t.prototype.CropBox = function() {
		var e = this.getInheritableAttribute(V.CropBox);
		return this.context.lookupMaybe(e, B);
	}, t.prototype.Rotate = function() {
		var e = this.getInheritableAttribute(V.Rotate);
		return this.context.lookupMaybe(e, z);
	}, t.prototype.getInheritableAttribute = function(e) {
		var t;
		return this.ascend(function(n) {
			t ||= n.get(e);
		}), t;
	}, t.prototype.setParent = function(e) {
		this.set(V.Parent, e);
	}, t.prototype.addContentStream = function(e) {
		var t = this.normalizedEntries().Contents || this.context.obj([]);
		this.set(V.Contents, t), t.push(e);
	}, t.prototype.wrapContentStreams = function(e, t) {
		var n = this.Contents();
		return n instanceof B && (n.insert(0, e), n.push(t), !0);
	}, t.prototype.addAnnot = function(e) {
		this.normalizedEntries().Annots.push(e);
	}, t.prototype.removeAnnot = function(e) {
		var t = this.normalizedEntries().Annots, n = t.indexOf(e);
		n !== void 0 && t.remove(n);
	}, t.prototype.setFontDictionary = function(e, t) {
		this.normalizedEntries().Font.set(e, t);
	}, t.prototype.newFontDictionaryKey = function(e) {
		return this.normalizedEntries().Font.uniqueKey(e);
	}, t.prototype.newFontDictionary = function(e, t) {
		var n = this.newFontDictionaryKey(e);
		return this.setFontDictionary(n, t), n;
	}, t.prototype.setXObject = function(e, t) {
		this.normalizedEntries().XObject.set(e, t);
	}, t.prototype.newXObjectKey = function(e) {
		return this.normalizedEntries().XObject.uniqueKey(e);
	}, t.prototype.newXObject = function(e, t) {
		var n = this.newXObjectKey(e);
		return this.setXObject(n, t), n;
	}, t.prototype.setExtGState = function(e, t) {
		this.normalizedEntries().ExtGState.set(e, t);
	}, t.prototype.newExtGStateKey = function(e) {
		return this.normalizedEntries().ExtGState.uniqueKey(e);
	}, t.prototype.newExtGState = function(e, t) {
		var n = this.newExtGStateKey(e);
		return this.setExtGState(n, t), n;
	}, t.prototype.ascend = function(e) {
		e(this);
		var t = this.Parent();
		t && t.ascend(e);
	}, t.prototype.normalize = function() {
		if (!this.normalized) {
			var e = this.context, t = this.get(V.Contents);
			this.context.lookup(t) instanceof mn && this.set(V.Contents, e.obj([t])), this.autoNormalizeCTM && this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
			var n = this.getInheritableAttribute(V.Resources), r = e.lookupMaybe(n, H) || e.obj({});
			this.set(V.Resources, r);
			var i = r.lookupMaybe(V.Font, H) || e.obj({});
			r.set(V.Font, i);
			var a = r.lookupMaybe(V.XObject, H) || e.obj({});
			r.set(V.XObject, a);
			var o = r.lookupMaybe(V.ExtGState, H) || e.obj({});
			r.set(V.ExtGState, o);
			var s = this.Annots() || e.obj([]);
			this.set(V.Annots, s), this.normalized = !0;
		}
	}, t.prototype.normalizedEntries = function() {
		this.normalize();
		var e = this.Annots(), t = this.Resources();
		return {
			Annots: e,
			Resources: t,
			Contents: this.Contents(),
			Font: t.lookup(V.Font, H),
			XObject: t.lookup(V.XObject, H),
			ExtGState: t.lookup(V.ExtGState, H)
		};
	}, t.InheritableEntries = [
		"Resources",
		"MediaBox",
		"CropBox",
		"Rotate"
	], t.withContextAndParent = function(e, n) {
		var r = /* @__PURE__ */ new Map();
		return r.set(V.Type, V.Page), r.set(V.Parent, n), r.set(V.Resources, e.obj({})), r.set(V.MediaBox, e.obj([
			0,
			0,
			612,
			792
		])), new t(r, e, !1);
	}, t.fromMapWithContext = function(e, n, r) {
		return r === void 0 && (r = !0), new t(e, n, r);
	}, t;
}(H), En = function() {
	function e(e, t) {
		var n = this;
		this.traversedObjects = /* @__PURE__ */ new Map(), this.copy = function(e) {
			return e instanceof Tn ? n.copyPDFPage(e) : e instanceof H ? n.copyPDFDict(e) : e instanceof B ? n.copyPDFArray(e) : e instanceof mn ? n.copyPDFStream(e) : e instanceof vn ? n.copyPDFIndirectObject(e) : e.clone();
		}, this.copyPDFPage = function(e) {
			for (var t = e.clone(), r = Tn.InheritableEntries, i = 0, a = r.length; i < a; i++) {
				var o = V.of(r[i]), s = t.getInheritableAttribute(o);
				!t.get(o) && s && t.set(o, s);
			}
			return t.delete(V.of("Parent")), n.copyPDFDict(t);
		}, this.copyPDFDict = function(e) {
			if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
			var t = e.clone(n.dest);
			n.traversedObjects.set(e, t);
			for (var r = e.entries(), i = 0, a = r.length; i < a; i++) {
				var o = r[i], s = o[0], c = o[1];
				t.set(s, n.copy(c));
			}
			return t;
		}, this.copyPDFArray = function(e) {
			if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
			var t = e.clone(n.dest);
			n.traversedObjects.set(e, t);
			for (var r = 0, i = e.size(); r < i; r++) {
				var a = e.get(r);
				t.set(r, n.copy(a));
			}
			return t;
		}, this.copyPDFStream = function(e) {
			if (n.traversedObjects.has(e)) return n.traversedObjects.get(e);
			var t = e.clone(n.dest);
			n.traversedObjects.set(e, t);
			for (var r = e.dict.entries(), i = 0, a = r.length; i < a; i++) {
				var o = r[i], s = o[0], c = o[1];
				t.dict.set(s, n.copy(c));
			}
			return t;
		}, this.copyPDFIndirectObject = function(e) {
			if (!n.traversedObjects.has(e)) {
				var t = n.dest.nextRef();
				n.traversedObjects.set(e, t);
				var r = n.src.lookup(e);
				if (r) {
					var i = n.copy(r);
					n.dest.assign(t, i);
				}
			}
			return n.traversedObjects.get(e);
		}, this.src = e, this.dest = t;
	}
	return e.for = function(t, n) {
		return new e(t, n);
	}, e;
}(), Dn = function() {
	function e(e) {
		this.subsections = e ? [[e]] : [], this.chunkIdx = 0, this.chunkLength = +!!e;
	}
	return e.prototype.addEntry = function(e, t) {
		this.append({
			ref: e,
			offset: t,
			deleted: !1
		});
	}, e.prototype.addDeletedEntry = function(e, t) {
		this.append({
			ref: e,
			offset: t,
			deleted: !0
		});
	}, e.prototype.toString = function() {
		for (var e = "xref\n", t = 0, n = this.subsections.length; t < n; t++) {
			var r = this.subsections[t];
			e += r[0].ref.objectNumber + " " + r.length + "\n";
			for (var i = 0, a = r.length; i < a; i++) {
				var o = r[i];
				e += T(String(o.offset), 10, "0"), e += " ", e += T(String(o.ref.generationNumber), 5, "0"), e += " ", e += o.deleted ? "f" : "n", e += " \n";
			}
		}
		return e;
	}, e.prototype.sizeInBytes = function() {
		for (var e = 5, t = 0, n = this.subsections.length; t < n; t++) {
			var r = this.subsections[t], i = r.length, a = r[0];
			e += 2, e += String(a.ref.objectNumber).length, e += String(i).length, e += 20 * i;
		}
		return e;
	}, e.prototype.copyBytesInto = function(e, t) {
		var n = t;
		return e[t++] = R.x, e[t++] = R.r, e[t++] = R.e, e[t++] = R.f, e[t++] = R.Newline, (t += this.copySubsectionsIntoBuffer(this.subsections, e, t)) - n;
	}, e.prototype.copySubsectionsIntoBuffer = function(e, t, n) {
		for (var r = n, i = e.length, a = 0; a < i; a++) {
			var o = this.subsections[a], s = String(o[0].ref.objectNumber);
			n += E(s, t, n), t[n++] = R.Space;
			var c = String(o.length);
			n += E(c, t, n), t[n++] = R.Newline, n += this.copyEntriesIntoBuffer(o, t, n);
		}
		return n - r;
	}, e.prototype.copyEntriesIntoBuffer = function(e, t, n) {
		for (var r = e.length, i = 0; i < r; i++) {
			var a = e[i], o = T(String(a.offset), 10, "0");
			n += E(o, t, n), t[n++] = R.Space;
			var s = T(String(a.ref.generationNumber), 5, "0");
			n += E(s, t, n), t[n++] = R.Space, t[n++] = a.deleted ? R.f : R.n, t[n++] = R.Space, t[n++] = R.Newline;
		}
		return 20 * r;
	}, e.prototype.append = function(e) {
		if (this.chunkLength === 0) return this.subsections.push([e]), this.chunkIdx = 0, void (this.chunkLength = 1);
		var t = this.subsections[this.chunkIdx], n = t[this.chunkLength - 1];
		e.ref.objectNumber - n.ref.objectNumber > 1 ? (this.subsections.push([e]), this.chunkIdx += 1, this.chunkLength = 1) : (t.push(e), this.chunkLength += 1);
	}, e.create = function() {
		return new e({
			ref: vn.of(0, 65535),
			offset: 0,
			deleted: !0
		});
	}, e.createEmpty = function() {
		return new e();
	}, e;
}(), On = function() {
	function e(e) {
		this.lastXRefOffset = String(e);
	}
	return e.prototype.toString = function() {
		return "startxref\n" + this.lastXRefOffset + "\n%%EOF";
	}, e.prototype.sizeInBytes = function() {
		return 16 + this.lastXRefOffset.length;
	}, e.prototype.copyBytesInto = function(e, t) {
		var n = t;
		return e[t++] = R.s, e[t++] = R.t, e[t++] = R.a, e[t++] = R.r, e[t++] = R.t, e[t++] = R.x, e[t++] = R.r, e[t++] = R.e, e[t++] = R.f, e[t++] = R.Newline, t += E(this.lastXRefOffset, e, t), e[t++] = R.Newline, e[t++] = R.Percent, e[t++] = R.Percent, e[t++] = R.E, e[t++] = R.O, e[t++] = R.F, t - n;
	}, e.forLastCrossRefSectionOffset = function(t) {
		return new e(t);
	}, e;
}(), kn = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.toString = function() {
		return "trailer\n" + this.dict.toString();
	}, e.prototype.sizeInBytes = function() {
		return 8 + this.dict.sizeInBytes();
	}, e.prototype.copyBytesInto = function(e, t) {
		var n = t;
		return e[t++] = R.t, e[t++] = R.r, e[t++] = R.a, e[t++] = R.i, e[t++] = R.l, e[t++] = R.e, e[t++] = R.r, e[t++] = R.Newline, (t += this.dict.copyBytesInto(e, t)) - n;
	}, e.of = function(t) {
		return new e(t);
	}, e;
}(), An = function(e) {
	function t(t, n, r) {
		r === void 0 && (r = !0);
		var i = e.call(this, t.obj({}), r) || this;
		return i.objects = n, i.offsets = i.computeObjectOffsets(), i.offsetsString = i.computeOffsetsString(), i.dict.set(V.of("Type"), V.of("ObjStm")), i.dict.set(V.of("N"), z.of(i.objects.length)), i.dict.set(V.of("First"), z.of(i.offsetsString.length)), i;
	}
	return l(t, e), t.prototype.getObjectsCount = function() {
		return this.objects.length;
	}, t.prototype.clone = function(e) {
		return t.withContextAndObjects(e || this.dict.context, this.objects.slice(), this.encode);
	}, t.prototype.getContentsString = function() {
		for (var e = this.offsetsString, t = 0, n = this.objects.length; t < n; t++) e += this.objects[t][1] + "\n";
		return e;
	}, t.prototype.getUnencodedContents = function() {
		for (var e = new Uint8Array(this.getUnencodedContentsSize()), t = E(this.offsetsString, e, 0), n = 0, r = this.objects.length; n < r; n++) t += this.objects[n][1].copyBytesInto(e, t), e[t++] = R.Newline;
		return e;
	}, t.prototype.getUnencodedContentsSize = function() {
		return this.offsetsString.length + re(this.offsets)[1] + re(this.objects)[1].sizeInBytes() + 1;
	}, t.prototype.computeOffsetsString = function() {
		for (var e = "", t = 0, n = this.offsets.length; t < n; t++) {
			var r = this.offsets[t];
			e += r[0] + " " + r[1] + " ";
		}
		return e;
	}, t.prototype.computeObjectOffsets = function() {
		for (var e = 0, t = Array(this.objects.length), n = 0, r = this.objects.length; n < r; n++) {
			var i = this.objects[n], a = i[0], o = i[1];
			t[n] = [a.objectNumber, e], e += o.sizeInBytes() + 1;
		}
		return t;
	}, t.withContextAndObjects = function(e, n, r) {
		return r === void 0 && (r = !0), new t(e, n, r);
	}, t;
}(bn), jn = function() {
	function e(e, t) {
		var n = this;
		this.parsedObjects = 0, this.shouldWaitForTick = function(e) {
			return n.parsedObjects += e, n.parsedObjects % n.objectsPerTick === 0;
		}, this.context = e, this.objectsPerTick = t;
	}
	return e.prototype.serializeToBuffer = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s, c, l, u, d, p, m, h, g, _;
			return f(this, function(f) {
				switch (f.label) {
					case 0: return [4, this.computeBufferSize()];
					case 1: e = f.sent(), t = e.size, n = e.header, r = e.indirectObjects, i = e.xref, a = e.trailerDict, o = e.trailer, s = 0, c = new Uint8Array(t), s += n.copyBytesInto(c, s), c[s++] = R.Newline, c[s++] = R.Newline, l = 0, u = r.length, f.label = 2;
					case 2: return l < u ? (d = r[l], p = d[0], m = d[1], h = String(p.objectNumber), s += E(h, c, s), c[s++] = R.Space, g = String(p.generationNumber), s += E(g, c, s), c[s++] = R.Space, c[s++] = R.o, c[s++] = R.b, c[s++] = R.j, c[s++] = R.Newline, s += m.copyBytesInto(c, s), c[s++] = R.Newline, c[s++] = R.e, c[s++] = R.n, c[s++] = R.d, c[s++] = R.o, c[s++] = R.b, c[s++] = R.j, c[s++] = R.Newline, c[s++] = R.Newline, _ = m instanceof An ? m.getObjectsCount() : 1, this.shouldWaitForTick(_) ? [4, ue()] : [3, 4]) : [3, 5];
					case 3: f.sent(), f.label = 4;
					case 4: return l++, [3, 2];
					case 5: return i && (s += i.copyBytesInto(c, s), c[s++] = R.Newline), a && (s += a.copyBytesInto(c, s), c[s++] = R.Newline, c[s++] = R.Newline), s += o.copyBytesInto(c, s), [2, c];
				}
			});
		});
	}, e.prototype.computeIndirectObjectSize = function(e) {
		var t = e[0], n = e[1];
		return t.sizeInBytes() + 3 + (n.sizeInBytes() + 9);
	}, e.prototype.createTrailerDict = function() {
		return this.context.obj({
			Size: this.context.largestObjectNumber + 1,
			Root: this.context.trailerInfo.Root,
			Encrypt: this.context.trailerInfo.Encrypt,
			Info: this.context.trailerInfo.Info,
			ID: this.context.trailerInfo.ID
		});
	}, e.prototype.computeBufferSize = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s, c, l, u;
			return f(this, function(d) {
				switch (d.label) {
					case 0: e = $t.forVersion(1, 7), t = e.sizeInBytes() + 2, n = Dn.create(), r = this.context.enumerateIndirectObjects(), i = 0, a = r.length, d.label = 1;
					case 1: return i < a ? (o = r[i], s = o[0], n.addEntry(s, t), t += this.computeIndirectObjectSize(o), this.shouldWaitForTick(1) ? [4, ue()] : [3, 3]) : [3, 4];
					case 2: d.sent(), d.label = 3;
					case 3: return i++, [3, 1];
					case 4: return c = t, t += n.sizeInBytes() + 1, l = kn.of(this.createTrailerDict()), t += l.sizeInBytes() + 2, u = On.forLastCrossRefSectionOffset(c), [2, {
						size: t += u.sizeInBytes(),
						header: e,
						indirectObjects: r,
						xref: n,
						trailerDict: l,
						trailer: u
					}];
				}
			});
		});
	}, e.forContext = function(t, n) {
		return new e(t, n);
	}, e;
}(), Mn = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.data = t, n;
	}
	return l(t, e), t.prototype.clone = function() {
		return t.of(this.data.slice());
	}, t.prototype.toString = function() {
		return "PDFInvalidObject(" + this.data.length + " bytes)";
	}, t.prototype.sizeInBytes = function() {
		return this.data.length;
	}, t.prototype.copyBytesInto = function(e, t) {
		for (var n = this.data.length, r = 0; r < n; r++) e[t++] = this.data[r];
		return n;
	}, t.of = function(e) {
		return new t(e);
	}, t;
}(en);
(function(e) {
	e[e.Deleted = 0] = "Deleted", e[e.Uncompressed = 1] = "Uncompressed", e[e.Compressed = 2] = "Compressed";
})(yn ||= {});
var Nn, Pn = function(e) {
	function t(t, n, r) {
		r === void 0 && (r = !0);
		var i = e.call(this, t, r) || this;
		return i.computeIndex = function() {
			for (var e = [], t = 0, n = 0, r = i.entries.length; n < r; n++) {
				var a = i.entries[n], o = i.entries[n - 1];
				n === 0 ? e.push(a.ref.objectNumber) : a.ref.objectNumber - o.ref.objectNumber > 1 && (e.push(t), e.push(a.ref.objectNumber), t = 0), t += 1;
			}
			return e.push(t), e;
		}, i.computeEntryTuples = function() {
			for (var e = Array(i.entries.length), t = 0, n = i.entries.length; t < n; t++) {
				var r = i.entries[t];
				if (r.type === yn.Deleted) {
					var a = r.type, o = r.nextFreeObjectNumber, s = r.ref;
					e[t] = [
						a,
						o,
						s.generationNumber
					];
				}
				if (r.type === yn.Uncompressed) {
					a = r.type;
					var c = r.offset;
					s = r.ref, e[t] = [
						a,
						c,
						s.generationNumber
					];
				}
				if (r.type === yn.Compressed) {
					a = r.type;
					var l = r.objectStreamRef, u = r.index;
					e[t] = [
						a,
						l.objectNumber,
						u
					];
				}
			}
			return e;
		}, i.computeMaxEntryByteWidths = function() {
			for (var e = i.entryTuplesCache.access(), t = [
				0,
				0,
				0
			], n = 0, r = e.length; n < r; n++) {
				var a = e[n], o = a[0], s = a[1], c = a[2], l = Se(o), u = Se(s), d = Se(c);
				l > t[0] && (t[0] = l), u > t[1] && (t[1] = u), d > t[2] && (t[2] = d);
			}
			return t;
		}, i.entries = n || [], i.entryTuplesCache = Tt.populatedBy(i.computeEntryTuples), i.maxByteWidthsCache = Tt.populatedBy(i.computeMaxEntryByteWidths), i.indexCache = Tt.populatedBy(i.computeIndex), t.set(V.of("Type"), V.of("XRef")), i;
	}
	return l(t, e), t.prototype.addDeletedEntry = function(e, t) {
		var n = yn.Deleted;
		this.entries.push({
			type: n,
			ref: e,
			nextFreeObjectNumber: t
		}), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
	}, t.prototype.addUncompressedEntry = function(e, t) {
		var n = yn.Uncompressed;
		this.entries.push({
			type: n,
			ref: e,
			offset: t
		}), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
	}, t.prototype.addCompressedEntry = function(e, t, n) {
		var r = yn.Compressed;
		this.entries.push({
			type: r,
			ref: e,
			objectStreamRef: t,
			index: n
		}), this.entryTuplesCache.invalidate(), this.maxByteWidthsCache.invalidate(), this.indexCache.invalidate(), this.contentsCache.invalidate();
	}, t.prototype.clone = function(e) {
		var n = this, r = n.dict, i = n.entries, a = n.encode;
		return t.of(r.clone(e), i.slice(), a);
	}, t.prototype.getContentsString = function() {
		for (var e = this.entryTuplesCache.access(), t = this.maxByteWidthsCache.access(), n = "", r = 0, i = e.length; r < i; r++) {
			for (var a = e[r], o = a[0], s = a[1], c = a[2], l = ce(Ce(o)), u = ce(Ce(s)), d = ce(Ce(c)), f = t[0] - 1; f >= 0; f--) n += (l[f] || 0).toString(2);
			for (f = t[1] - 1; f >= 0; f--) n += (u[f] || 0).toString(2);
			for (f = t[2] - 1; f >= 0; f--) n += (d[f] || 0).toString(2);
		}
		return n;
	}, t.prototype.getUnencodedContents = function() {
		for (var e = this.entryTuplesCache.access(), t = this.maxByteWidthsCache.access(), n = new Uint8Array(this.getUnencodedContentsSize()), r = 0, i = 0, a = e.length; i < a; i++) {
			for (var o = e[i], s = o[0], c = o[1], l = o[2], u = ce(Ce(s)), d = ce(Ce(c)), f = ce(Ce(l)), p = t[0] - 1; p >= 0; p--) n[r++] = u[p] || 0;
			for (p = t[1] - 1; p >= 0; p--) n[r++] = d[p] || 0;
			for (p = t[2] - 1; p >= 0; p--) n[r++] = f[p] || 0;
		}
		return n;
	}, t.prototype.getUnencodedContentsSize = function() {
		return function(e) {
			for (var t = 0, n = 0, r = e.length; n < r; n++) t += e[n];
			return t;
		}(this.maxByteWidthsCache.access()) * this.entries.length;
	}, t.prototype.updateDict = function() {
		e.prototype.updateDict.call(this);
		var t = this.maxByteWidthsCache.access(), n = this.indexCache.access(), r = this.dict.context;
		this.dict.set(V.of("W"), r.obj(t)), this.dict.set(V.of("Index"), r.obj(n));
	}, t.create = function(e, n) {
		n === void 0 && (n = !0);
		var r = new t(e, [], n);
		return r.addDeletedEntry(vn.of(0, 65535), 0), r;
	}, t.of = function(e, n, r) {
		return r === void 0 && (r = !0), new t(e, n, r);
	}, t;
}(bn), Fn = function(e) {
	function t(t, n, r, i) {
		var a = e.call(this, t, n) || this;
		return a.encodeStreams = r, a.objectsPerStream = i, a;
	}
	return l(t, e), t.prototype.computeBufferSize = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s, c, l, u, d, p, m, h, g, _, v, y;
			return f(this, function(f) {
				switch (f.label) {
					case 0: e = this.context.largestObjectNumber + 1, t = $t.forVersion(1, 7), n = t.sizeInBytes() + 2, r = Pn.create(this.createTrailerDict(), this.encodeStreams), i = [], a = [], o = [], s = this.context.enumerateIndirectObjects(), d = 0, p = s.length, f.label = 1;
					case 1: return d < p ? (c = s[d], h = c[0], l = c[1], h === this.context.trailerInfo.Encrypt || l instanceof mn || l instanceof Mn || h.generationNumber !== 0 ? (i.push(c), r.addUncompressedEntry(h, n), n += this.computeIndirectObjectSize(c), this.shouldWaitForTick(1) ? [4, ue()] : [3, 3]) : [3, 4]) : [3, 6];
					case 2: f.sent(), f.label = 3;
					case 3: return [3, 5];
					case 4: m = re(a), u = re(o), m && m.length % this.objectsPerStream !== 0 || (m = [], a.push(m), u = vn.of(e++), o.push(u)), r.addCompressedEntry(h, u, m.length), m.push(c), f.label = 5;
					case 5: return d++, [3, 1];
					case 6: d = 0, p = a.length, f.label = 7;
					case 7: return d < p ? (m = a[d], h = o[d], g = An.withContextAndObjects(this.context, m, this.encodeStreams), r.addUncompressedEntry(h, n), n += this.computeIndirectObjectSize([h, g]), i.push([h, g]), this.shouldWaitForTick(m.length) ? [4, ue()] : [3, 9]) : [3, 10];
					case 8: f.sent(), f.label = 9;
					case 9: return d++, [3, 7];
					case 10: return _ = vn.of(e++), r.dict.set(V.of("Size"), z.of(e)), r.addUncompressedEntry(_, n), v = n, n += this.computeIndirectObjectSize([_, r]), i.push([_, r]), y = On.forLastCrossRefSectionOffset(v), [2, {
						size: n += y.sizeInBytes(),
						header: t,
						indirectObjects: i,
						trailer: y
					}];
				}
			});
		});
	}, t.forContext = function(e, n, r, i) {
		return r === void 0 && (r = !0), i === void 0 && (i = 50), new t(e, n, r, i);
	}, t;
}(jn), G = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.value = t, n;
	}
	return l(t, e), t.prototype.asBytes = function() {
		for (var e = this.value + (this.value.length % 2 == 1 ? "0" : ""), t = e.length, n = new Uint8Array(e.length / 2), r = 0, i = 0; r < t;) {
			var a = parseInt(e.substring(r, r + 2), 16);
			n[i] = a, r += 2, i += 1;
		}
		return n;
	}, t.prototype.decodeText = function() {
		var e = this.asBytes();
		return xe(e) ? me(e) : wt(e);
	}, t.prototype.decodeDate = function() {
		var e = this.decodeText(), t = ne(e);
		if (!t) throw new Ft(e);
		return t;
	}, t.prototype.asString = function() {
		return this.value;
	}, t.prototype.clone = function() {
		return t.of(this.value);
	}, t.prototype.toString = function() {
		return "<" + this.value + ">";
	}, t.prototype.sizeInBytes = function() {
		return this.value.length + 2;
	}, t.prototype.copyBytesInto = function(e, t) {
		return e[t++] = R.LessThan, t += E(this.value, e, t), e[t++] = R.GreaterThan, this.value.length + 2;
	}, t.of = function(e) {
		return new t(e);
	}, t.fromText = function(e) {
		for (var n = function(e, t) {
			t === void 0 && (t = !0);
			var n = [];
			t && n.push(65279);
			for (var r = 0, i = e.length; r < i;) {
				var a = e.codePointAt(r);
				if (a < 65536) n.push(a), r += 1;
				else {
					if (!(a < 1114112)) throw Error("Invalid code point: 0x" + C(a));
					n.push(de(a), fe(a)), r += 2;
				}
			}
			return new Uint16Array(n);
		}(e), r = "", i = 0, a = n.length; i < a; i++) r += S(n[i], 4);
		return new t(r);
	}, t;
}(en), In = function() {
	function e(e, t) {
		this.encoding = e === We.ZapfDingbats ? at.ZapfDingbats : e === We.Symbol ? at.Symbol : at.WinAnsi, this.font = tt.load(e), this.fontName = this.font.FontName, this.customName = t;
	}
	return e.prototype.encodeText = function(e) {
		for (var t = this.encodeTextAsGlyphs(e), n = Array(t.length), r = 0, i = t.length; r < i; r++) n[r] = C(t[r].code);
		return G.of(n.join(""));
	}, e.prototype.widthOfTextAtSize = function(e, t) {
		for (var n = this.encodeTextAsGlyphs(e), r = 0, i = 0, a = n.length; i < a; i++) {
			var o = n[i].name, s = (n[i + 1] || {}).name, c = this.font.getXAxisKerningForPair(o, s) || 0;
			r += this.widthOfGlyph(o) + c;
		}
		return t / 1e3 * r;
	}, e.prototype.heightOfFontAtSize = function(e, t) {
		t === void 0 && (t = {});
		var n = t.descender, r = n === void 0 || n, i = this.font, a = i.Ascender, o = i.Descender, s = i.FontBBox, c = (a || s[3]) - (o || s[1]);
		return r || (c += o || 0), c / 1e3 * e;
	}, e.prototype.sizeOfFontAtHeight = function(e) {
		var t = this.font, n = t.Ascender, r = t.Descender, i = t.FontBBox;
		return 1e3 * e / ((n || i[3]) - (r || i[1]));
	}, e.prototype.embedIntoContext = function(e, t) {
		var n = e.obj({
			Type: "Font",
			Subtype: "Type1",
			BaseFont: this.customName || this.fontName,
			Encoding: this.encoding === at.WinAnsi ? "WinAnsiEncoding" : void 0
		});
		return t ? (e.assign(t, n), t) : e.register(n);
	}, e.prototype.widthOfGlyph = function(e) {
		return this.font.getWidthOfGlyph(e) || 250;
	}, e.prototype.encodeTextAsGlyphs = function(e) {
		for (var t = Array.from(e), n = Array(t.length), r = 0, i = t.length; r < i; r++) {
			var a = x(t[r]);
			n[r] = this.encoding.encodeUnicodeCodePoint(a);
		}
		return n;
	}, e.for = function(t, n) {
		return new e(t, n);
	}, e;
}(), Ln = function(e) {
	return "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange\n" + e.length + " beginbfchar\n" + e.map(function(e) {
		return e[0] + " " + e[1];
	}).join("\n") + "\nendbfchar\nendcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
}, Rn = function() {
	return "<" + [...arguments].join("") + ">";
}, zn = function(e) {
	return S(e, 4);
}, Bn = function(e) {
	if (function(e) {
		return e >= 0 && e <= 65535;
	}(e)) return zn(e);
	if (function(e) {
		return e >= 65536 && e <= 1114111;
	}(e)) {
		var t = de(e), n = fe(e);
		return "" + zn(t) + zn(n);
	}
	var r = "0x" + C(e) + " is not a valid UTF-8 or UTF-16 codepoint.";
	throw Error(r);
}, Vn = function(e) {
	function t(t) {
		var n = e.call(this) || this;
		return n.value = t, n;
	}
	return l(t, e), t.prototype.asBytes = function() {
		for (var e = [], t = "", n = !1, r = function(t) {
			t !== void 0 && e.push(t), n = !1;
		}, i = 0, a = this.value.length; i < a; i++) {
			var o = this.value[i], s = b(o), c = this.value[i + 1];
			n ? s === R.Newline || s === R.CarriageReturn ? r() : s === R.n ? r(R.Newline) : s === R.r ? r(R.CarriageReturn) : s === R.t ? r(R.Tab) : s === R.b ? r(R.Backspace) : s === R.f ? r(R.FormFeed) : s === R.LeftParen ? r(R.LeftParen) : s === R.RightParen ? r(R.RightParen) : s === R.Backspace ? r(R.BackSlash) : s >= R.Zero && s <= R.Seven ? (t += o).length !== 3 && c >= "0" && c <= "7" || (r(parseInt(t, 8)), t = "") : r(s) : s === R.BackSlash ? n = !0 : r(s);
		}
		return new Uint8Array(e);
	}, t.prototype.decodeText = function() {
		var e = this.asBytes();
		return xe(e) ? me(e) : wt(e);
	}, t.prototype.decodeDate = function() {
		var e = this.decodeText(), t = ne(e);
		if (!t) throw new Ft(e);
		return t;
	}, t.prototype.asString = function() {
		return this.value;
	}, t.prototype.clone = function() {
		return t.of(this.value);
	}, t.prototype.toString = function() {
		return "(" + this.value + ")";
	}, t.prototype.sizeInBytes = function() {
		return this.value.length + 2;
	}, t.prototype.copyBytesInto = function(e, t) {
		return e[t++] = R.LeftParen, t += E(this.value, e, t), e[t++] = R.RightParen, this.value.length + 2;
	}, t.of = function(e) {
		return new t(e);
	}, t.fromDate = function(e) {
		return new t("D:" + T(String(e.getUTCFullYear()), 4, "0") + T(String(e.getUTCMonth() + 1), 2, "0") + T(String(e.getUTCDate()), 2, "0") + T(String(e.getUTCHours()), 2, "0") + T(String(e.getUTCMinutes()), 2, "0") + T(String(e.getUTCSeconds()), 2, "0") + "Z");
	}, t;
}(en), Hn = function() {
	function e(e, t, n, r) {
		var i = this;
		this.allGlyphsInFontSortedById = function() {
			for (var e = Array(i.font.characterSet.length), t = 0, n = e.length; t < n; t++) {
				var r = i.font.characterSet[t];
				e[t] = i.font.glyphForCodePoint(r);
			}
			return function(e, t) {
				for (var n = [], r = 0, i = e.length; r < i; r++) {
					var a = e[r], o = e[r - 1];
					r !== 0 && t(a) === t(o) || n.push(a);
				}
				return n;
			}(e.sort(se), function(e) {
				return e.id;
			});
		}, this.font = e, this.scale = 1e3 / this.font.unitsPerEm, this.fontData = t, this.fontName = this.font.postscriptName || "Font", this.customName = n, this.fontFeatures = r, this.baseFontName = "", this.glyphCache = Tt.populatedBy(this.allGlyphsInFontSortedById);
	}
	return e.for = function(t, n, r, i) {
		return d(this, void 0, void 0, function() {
			return f(this, function(a) {
				switch (a.label) {
					case 0: return [4, t.create(n)];
					case 1: return [2, new e(a.sent(), n, r, i)];
				}
			});
		});
	}, e.prototype.encodeText = function(e) {
		for (var t = this.font.layout(e, this.fontFeatures).glyphs, n = Array(t.length), r = 0, i = t.length; r < i; r++) n[r] = S(t[r].id, 4);
		return G.of(n.join(""));
	}, e.prototype.widthOfTextAtSize = function(e, t) {
		for (var n = this.font.layout(e, this.fontFeatures).glyphs, r = 0, i = 0, a = n.length; i < a; i++) r += n[i].advanceWidth * this.scale;
		return t / 1e3 * r;
	}, e.prototype.heightOfFontAtSize = function(e, t) {
		t === void 0 && (t = {});
		var n = t.descender, r = n === void 0 || n, i = this.font, a = i.ascent, o = i.descent, s = i.bbox, c = (a || s.maxY) * this.scale - (o || s.minY) * this.scale;
		return r || (c -= Math.abs(o) || 0), c / 1e3 * e;
	}, e.prototype.sizeOfFontAtHeight = function(e) {
		var t = this.font, n = t.ascent, r = t.descent, i = t.bbox;
		return 1e3 * e / ((n || i.maxY) * this.scale - (r || i.minY) * this.scale);
	}, e.prototype.embedIntoContext = function(e, t) {
		return this.baseFontName = this.customName || e.addRandomSuffix(this.fontName), this.embedFontDict(e, t);
	}, e.prototype.embedFontDict = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n, r, i;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return [4, this.embedCIDFontDict(e)];
					case 1: return n = a.sent(), r = this.embedUnicodeCmap(e), i = e.obj({
						Type: "Font",
						Subtype: "Type0",
						BaseFont: this.baseFontName,
						Encoding: "Identity-H",
						DescendantFonts: [n],
						ToUnicode: r
					}), t ? (e.assign(t, i), [2, t]) : [2, e.register(i)];
				}
			});
		});
	}, e.prototype.isCFF = function() {
		return this.font.cff;
	}, e.prototype.embedCIDFontDict = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n;
			return f(this, function(r) {
				switch (r.label) {
					case 0: return [4, this.embedFontDescriptor(e)];
					case 1: return t = r.sent(), n = e.obj({
						Type: "Font",
						Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
						CIDToGIDMap: "Identity",
						BaseFont: this.baseFontName,
						CIDSystemInfo: {
							Registry: Vn.of("Adobe"),
							Ordering: Vn.of("Identity"),
							Supplement: 0
						},
						FontDescriptor: t,
						W: this.computeWidths()
					}), [2, e.register(n)];
				}
			});
		});
	}, e.prototype.embedFontDescriptor = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n, r, i, a, o, s, c, l, u, d, p, m, h, g;
			return f(this, function(f) {
				switch (f.label) {
					case 0: return [4, this.embedFontStream(e)];
					case 1: return t = f.sent(), n = this.scale, r = this.font, i = r.italicAngle, a = r.ascent, o = r.descent, s = r.capHeight, c = r.xHeight, l = this.font.bbox, u = l.minX, d = l.minY, p = l.maxX, m = l.maxY, h = e.obj(((g = {
						Type: "FontDescriptor",
						FontName: this.baseFontName,
						Flags: (_ = this.font, x = _["OS/2"] ? _["OS/2"].sFamilyClass : 0, v = {
							fixedPitch: _.post.isFixedPitch,
							serif: 1 <= x && x <= 7,
							symbolic: !0,
							script: x === 10,
							italic: _.head.macStyle.italic
						}, y = 0, b = function(e) {
							y |= 1 << e - 1;
						}, v.fixedPitch && b(1), v.serif && b(2), v.symbolic && b(3), v.script && b(4), v.nonsymbolic && b(6), v.italic && b(7), v.allCap && b(17), v.smallCap && b(18), v.forceBold && b(19), y),
						FontBBox: [
							u * n,
							d * n,
							p * n,
							m * n
						],
						ItalicAngle: i,
						Ascent: a * n,
						Descent: o * n,
						CapHeight: (s || a) * n,
						XHeight: (c || 0) * n,
						StemV: 0
					})[this.isCFF() ? "FontFile3" : "FontFile2"] = t, g)), [2, e.register(h)];
				}
				var _, v, y, b, x;
			});
		});
	}, e.prototype.serializeFont = function() {
		return d(this, void 0, void 0, function() {
			return f(this, function(e) {
				return [2, this.fontData];
			});
		});
	}, e.prototype.embedFontStream = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n, r;
			return f(this, function(i) {
				switch (i.label) {
					case 0: return r = (n = e).flateStream, [4, this.serializeFont()];
					case 1: return t = r.apply(n, [i.sent(), { Subtype: this.isCFF() ? "CIDFontType0C" : void 0 }]), [2, e.register(t)];
				}
			});
		});
	}, e.prototype.embedUnicodeCmap = function(e) {
		var t = function(e, t) {
			for (var n = Array(e.length), r = 0, i = e.length; r < i; r++) {
				var a = e[r], o = Rn(zn(t(a))), s = Rn.apply(void 0, a.codePoints.map(Bn));
				n[r] = [o, s];
			}
			return Ln(n);
		}(this.glyphCache.access(), this.glyphId.bind(this)), n = e.flateStream(t);
		return e.register(n);
	}, e.prototype.glyphId = function(e) {
		return e ? e.id : -1;
	}, e.prototype.computeWidths = function() {
		for (var e = this.glyphCache.access(), t = [], n = [], r = 0, i = e.length; r < i; r++) {
			var a = e[r], o = e[r - 1], s = this.glyphId(a), c = this.glyphId(o);
			r === 0 ? t.push(s) : s - c !== 1 && (t.push(n), t.push(s), n = []), n.push(a.advanceWidth * this.scale);
		}
		return t.push(n), t;
	}, e;
}(), Un = function(e) {
	function t(t, n, r, i) {
		var a = e.call(this, t, n, r, i) || this;
		return a.subset = a.font.createSubset(), a.glyphs = [], a.glyphCache = Tt.populatedBy(function() {
			return a.glyphs;
		}), a.glyphIdMap = /* @__PURE__ */ new Map(), a;
	}
	return l(t, e), t.for = function(e, n, r, i) {
		return d(this, void 0, void 0, function() {
			return f(this, function(a) {
				switch (a.label) {
					case 0: return [4, e.create(n)];
					case 1: return [2, new t(a.sent(), n, r, i)];
				}
			});
		});
	}, t.prototype.encodeText = function(e) {
		for (var t = this.font.layout(e, this.fontFeatures).glyphs, n = Array(t.length), r = 0, i = t.length; r < i; r++) {
			var a = t[r], o = this.subset.includeGlyph(a);
			this.glyphs[o - 1] = a, this.glyphIdMap.set(a.id, o), n[r] = S(o, 4);
		}
		return this.glyphCache.invalidate(), G.of(n.join(""));
	}, t.prototype.isCFF = function() {
		return this.subset.cff;
	}, t.prototype.glyphId = function(e) {
		return e ? this.glyphIdMap.get(e.id) : -1;
	}, t.prototype.serializeFont = function() {
		var e = this;
		return new Promise(function(t, n) {
			var r = [];
			e.subset.encodeStream().on("data", function(e) {
				return r.push(e);
			}).on("end", function() {
				return t(function(e) {
					for (var t = 0, n = 0, r = e.length; n < r; n++) t += e[n].length;
					var i = new Uint8Array(t), a = 0;
					for (n = 0, r = e.length; n < r; n++) {
						var o = e[n];
						i.set(o, a), a += o.length;
					}
					return i;
				}(r));
			}).on("error", function(e) {
				return n(e);
			});
		});
	}, t;
}(Hn);
(function(e) {
	e.Source = "Source", e.Data = "Data", e.Alternative = "Alternative", e.Supplement = "Supplement", e.EncryptedPayload = "EncryptedPayload", e.FormData = "EncryptedPayload", e.Schema = "Schema", e.Unspecified = "Unspecified";
})(Nn ||= {});
var Wn, Gn = function() {
	function e(e, t, n) {
		n === void 0 && (n = {}), this.fileData = e, this.fileName = t, this.options = n;
	}
	return e.for = function(t, n, r) {
		return r === void 0 && (r = {}), new e(t, n, r);
	}, e.prototype.embedIntoContext = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n, r, i, a, o, s, c, l, u;
			return f(this, function(d) {
				return n = this.options, r = n.mimeType, i = n.description, a = n.creationDate, o = n.modificationDate, s = n.afRelationship, c = e.flateStream(this.fileData, {
					Type: "EmbeddedFile",
					Subtype: r ?? void 0,
					Params: {
						Size: this.fileData.length,
						CreationDate: a ? Vn.fromDate(a) : void 0,
						ModDate: o ? Vn.fromDate(o) : void 0
					}
				}), l = e.register(c), u = e.obj({
					Type: "Filespec",
					F: Vn.of(this.fileName),
					UF: G.fromText(this.fileName),
					EF: { F: l },
					Desc: i ? G.fromText(i) : void 0,
					AFRelationship: s ?? void 0
				}), t ? (e.assign(t, u), [2, t]) : [2, e.register(u)];
			});
		});
	}, e;
}(), Kn = [
	65472,
	65473,
	65474,
	65475,
	65477,
	65478,
	65479,
	65480,
	65481,
	65482,
	65483,
	65484,
	65485,
	65486,
	65487
];
(function(e) {
	e.DeviceGray = "DeviceGray", e.DeviceRGB = "DeviceRGB", e.DeviceCMYK = "DeviceCMYK";
})(Wn ||= {});
var qn, Jn, Yn, Xn = {
	1: Wn.DeviceGray,
	3: Wn.DeviceRGB,
	4: Wn.DeviceCMYK
}, Zn = function() {
	function e(e, t, n, r, i) {
		this.imageData = e, this.bitsPerComponent = t, this.width = n, this.height = r, this.colorSpace = i;
	}
	return e.for = function(t) {
		return d(this, void 0, void 0, function() {
			var n, r, i, a, o, s, c, l;
			return f(this, function(u) {
				if (n = new DataView(t.buffer), n.getUint16(0) !== 65496) throw Error("SOI not found in JPEG");
				for (r = 2; r < n.byteLength && (i = n.getUint16(r), r += 2, !Kn.includes(i));) r += n.getUint16(r);
				if (!Kn.includes(i)) throw Error("Invalid JPEG");
				if (r += 2, a = n.getUint8(r++), o = n.getUint16(r), r += 2, s = n.getUint16(r), r += 2, c = n.getUint8(r++), !(l = Xn[c])) throw Error("Unknown JPEG channel.");
				return [2, new e(t, a, s, o, l)];
			});
		});
	}, e.prototype.embedIntoContext = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n;
			return f(this, function(r) {
				return n = e.stream(this.imageData, {
					Type: "XObject",
					Subtype: "Image",
					BitsPerComponent: this.bitsPerComponent,
					Width: this.width,
					Height: this.height,
					ColorSpace: this.colorSpace,
					Filter: "DCTDecode",
					Decode: this.colorSpace === Wn.DeviceCMYK ? [
						1,
						0,
						1,
						0,
						1,
						0,
						1,
						0
					] : void 0
				}), t ? (e.assign(t, n), [2, t]) : [2, e.register(n)];
			});
		});
	}, e;
}(), K = {};
K.toRGBA8 = function(e) {
	var t = e.width, n = e.height;
	if (e.tabs.acTL == null) return [K.toRGBA8.decodeImage(e.data, t, n, e).buffer];
	var r = [];
	e.frames[0].data ?? (e.frames[0].data = e.data);
	for (var i = t * n * 4, a = new Uint8Array(i), o = new Uint8Array(i), s = new Uint8Array(i), c = 0; c < e.frames.length; c++) {
		var l = e.frames[c], u = l.rect.x, d = l.rect.y, f = l.rect.width, p = l.rect.height, m = K.toRGBA8.decodeImage(l.data, f, p, e);
		if (c != 0) for (var h = 0; h < i; h++) s[h] = a[h];
		if (l.blend == 0 ? K._copyTile(m, f, p, a, t, n, u, d, 0) : l.blend == 1 && K._copyTile(m, f, p, a, t, n, u, d, 1), r.push(a.buffer.slice(0)), l.dispose != 0) {
			if (l.dispose == 1) K._copyTile(o, f, p, a, t, n, u, d, 0);
			else if (l.dispose == 2) for (h = 0; h < i; h++) a[h] = s[h];
		}
	}
	return r;
}, K.toRGBA8.decodeImage = function(e, t, n, r) {
	var i = t * n, a = K.decode._getBPP(r), o = Math.ceil(t * a / 8), s = new Uint8Array(4 * i), c = new Uint32Array(s.buffer), l = r.ctype, u = r.depth, d = K._bin.readUshort;
	if (l == 6) {
		var f = i << 2;
		if (u == 8) for (var p = 0; p < f; p += 4) s[p] = e[p], s[p + 1] = e[p + 1], s[p + 2] = e[p + 2], s[p + 3] = e[p + 3];
		if (u == 16) for (p = 0; p < f; p++) s[p] = e[p << 1];
	} else if (l == 2) {
		var m = r.tabs.tRNS;
		if (m == null) {
			if (u == 8) for (p = 0; p < i; p++) {
				var h = 3 * p;
				c[p] = 255 << 24 | e[h + 2] << 16 | e[h + 1] << 8 | e[h];
			}
			if (u == 16) for (p = 0; p < i; p++) h = 6 * p, c[p] = 255 << 24 | e[h + 4] << 16 | e[h + 2] << 8 | e[h];
		} else {
			var g = m[0], _ = m[1], v = m[2];
			if (u == 8) for (p = 0; p < i; p++) {
				var y = p << 2;
				h = 3 * p, c[p] = 255 << 24 | e[h + 2] << 16 | e[h + 1] << 8 | e[h], e[h] == g && e[h + 1] == _ && e[h + 2] == v && (s[y + 3] = 0);
			}
			if (u == 16) for (p = 0; p < i; p++) y = p << 2, h = 6 * p, c[p] = 255 << 24 | e[h + 4] << 16 | e[h + 2] << 8 | e[h], d(e, h) == g && d(e, h + 2) == _ && d(e, h + 4) == v && (s[y + 3] = 0);
		}
	} else if (l == 3) {
		var b = r.tabs.PLTE, x = r.tabs.tRNS, S = x ? x.length : 0;
		if (u == 1) for (var C = 0; C < n; C++) {
			var w = C * o, T = C * t;
			for (p = 0; p < t; p++) {
				y = T + p << 2;
				var E = 3 * (D = e[w + (p >> 3)] >> 7 - (7 & p) & 1);
				s[y] = b[E], s[y + 1] = b[E + 1], s[y + 2] = b[E + 2], s[y + 3] = D < S ? x[D] : 255;
			}
		}
		if (u == 2) for (C = 0; C < n; C++) for (w = C * o, T = C * t, p = 0; p < t; p++) y = T + p << 2, E = 3 * (D = e[w + (p >> 2)] >> 6 - ((3 & p) << 1) & 3), s[y] = b[E], s[y + 1] = b[E + 1], s[y + 2] = b[E + 2], s[y + 3] = D < S ? x[D] : 255;
		if (u == 4) for (C = 0; C < n; C++) for (w = C * o, T = C * t, p = 0; p < t; p++) y = T + p << 2, E = 3 * (D = e[w + (p >> 1)] >> 4 - ((1 & p) << 2) & 15), s[y] = b[E], s[y + 1] = b[E + 1], s[y + 2] = b[E + 2], s[y + 3] = D < S ? x[D] : 255;
		if (u == 8) for (p = 0; p < i; p++) {
			var D;
			y = p << 2, E = 3 * (D = e[p]), s[y] = b[E], s[y + 1] = b[E + 1], s[y + 2] = b[E + 2], s[y + 3] = D < S ? x[D] : 255;
		}
	} else if (l == 4) {
		if (u == 8) for (p = 0; p < i; p++) {
			y = p << 2;
			var O = e[k = p << 1];
			s[y] = O, s[y + 1] = O, s[y + 2] = O, s[y + 3] = e[k + 1];
		}
		if (u == 16) for (p = 0; p < i; p++) {
			var k;
			y = p << 2, O = e[k = p << 2], s[y] = O, s[y + 1] = O, s[y + 2] = O, s[y + 3] = e[k + 2];
		}
	} else if (l == 0) for (g = r.tabs.tRNS ? r.tabs.tRNS : -1, C = 0; C < n; C++) {
		var A = C * o, j = C * t;
		if (u == 1) for (var M = 0; M < t; M++) {
			var N = (O = 255 * (e[A + (M >>> 3)] >>> 7 - (7 & M) & 1)) == 255 * g ? 0 : 255;
			c[j + M] = N << 24 | O << 16 | O << 8 | O;
		}
		else if (u == 2) for (M = 0; M < t; M++) N = (O = 85 * (e[A + (M >>> 2)] >>> 6 - ((3 & M) << 1) & 3)) == 85 * g ? 0 : 255, c[j + M] = N << 24 | O << 16 | O << 8 | O;
		else if (u == 4) for (M = 0; M < t; M++) N = (O = 17 * (e[A + (M >>> 1)] >>> 4 - ((1 & M) << 2) & 15)) == 17 * g ? 0 : 255, c[j + M] = N << 24 | O << 16 | O << 8 | O;
		else if (u == 8) for (M = 0; M < t; M++) N = (O = e[A + M]) == g ? 0 : 255, c[j + M] = N << 24 | O << 16 | O << 8 | O;
		else if (u == 16) for (M = 0; M < t; M++) O = e[A + (M << 1)], N = d(e, A + (M << p)) == g ? 0 : 255, c[j + M] = N << 24 | O << 16 | O << 8 | O;
	}
	return s;
}, K.decode = function(e) {
	for (var t, n = new Uint8Array(e), r = 8, i = K._bin, a = i.readUshort, o = i.readUint, s = {
		tabs: {},
		frames: []
	}, c = new Uint8Array(n.length), l = 0, u = 0, d = [
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	], f = 0; f < 8; f++) if (n[f] != d[f]) throw "The input is not a PNG file!";
	for (; r < n.length;) {
		var p = i.readUint(n, r);
		r += 4;
		var m = i.readASCII(n, r, 4);
		if (r += 4, m == "IHDR") K.decode._IHDR(n, r, s);
		else if (m == "IDAT") {
			for (f = 0; f < p; f++) c[l + f] = n[r + f];
			l += p;
		} else if (m == "acTL") s.tabs[m] = {
			num_frames: o(n, r),
			num_plays: o(n, r + 4)
		}, t = new Uint8Array(n.length);
		else if (m == "fcTL") {
			var h;
			u != 0 && ((h = s.frames[s.frames.length - 1]).data = K.decode._decompress(s, t.slice(0, u), h.rect.width, h.rect.height), u = 0);
			var g = {
				x: o(n, r + 12),
				y: o(n, r + 16),
				width: o(n, r + 4),
				height: o(n, r + 8)
			}, _ = a(n, r + 22);
			_ = a(n, r + 20) / (_ == 0 ? 100 : _);
			var v = {
				rect: g,
				delay: Math.round(1e3 * _),
				dispose: n[r + 24],
				blend: n[r + 25]
			};
			s.frames.push(v);
		} else if (m == "fdAT") {
			for (f = 0; f < p - 4; f++) t[u + f] = n[r + f + 4];
			u += p - 4;
		} else if (m == "pHYs") s.tabs[m] = [
			i.readUint(n, r),
			i.readUint(n, r + 4),
			n[r + 8]
		];
		else if (m == "cHRM") for (s.tabs[m] = [], f = 0; f < 8; f++) s.tabs[m].push(i.readUint(n, r + 4 * f));
		else if (m == "tEXt") {
			s.tabs[m] ?? (s.tabs[m] = {});
			var y = i.nextZero(n, r), b = i.readASCII(n, r, y - r), x = i.readASCII(n, y + 1, r + p - y - 1);
			s.tabs[m][b] = x;
		} else if (m == "iTXt") {
			s.tabs[m] ?? (s.tabs[m] = {}), y = 0;
			var S = r;
			y = i.nextZero(n, S), b = i.readASCII(n, S, y - S), n[S = y + 1], n[S + 1], S += 2, y = i.nextZero(n, S), i.readASCII(n, S, y - S), S = y + 1, y = i.nextZero(n, S), i.readUTF8(n, S, y - S), S = y + 1, x = i.readUTF8(n, S, p - (S - r)), s.tabs[m][b] = x;
		} else if (m == "PLTE") s.tabs[m] = i.readBytes(n, r, p);
		else if (m == "hIST") {
			var C = s.tabs.PLTE.length / 3;
			for (s.tabs[m] = [], f = 0; f < C; f++) s.tabs[m].push(a(n, r + 2 * f));
		} else if (m == "tRNS") s.ctype == 3 ? s.tabs[m] = i.readBytes(n, r, p) : s.ctype == 0 ? s.tabs[m] = a(n, r) : s.ctype == 2 && (s.tabs[m] = [
			a(n, r),
			a(n, r + 2),
			a(n, r + 4)
		]);
		else if (m == "gAMA") s.tabs[m] = i.readUint(n, r) / 1e5;
		else if (m == "sRGB") s.tabs[m] = n[r];
		else if (m == "bKGD") s.ctype == 0 || s.ctype == 4 ? s.tabs[m] = [a(n, r)] : s.ctype == 2 || s.ctype == 6 ? s.tabs[m] = [
			a(n, r),
			a(n, r + 2),
			a(n, r + 4)
		] : s.ctype == 3 && (s.tabs[m] = n[r]);
		else if (m == "IEND") break;
		r += p, i.readUint(n, r), r += 4;
	}
	return u != 0 && ((h = s.frames[s.frames.length - 1]).data = K.decode._decompress(s, t.slice(0, u), h.rect.width, h.rect.height), u = 0), s.data = K.decode._decompress(s, c, s.width, s.height), delete s.compress, delete s.interlace, delete s.filter, s;
}, K.decode._decompress = function(e, t, n, r) {
	var i = K.decode._getBPP(e), a = Math.ceil(n * i / 8), o = new Uint8Array((a + 1 + e.interlace) * r);
	return t = K.decode._inflate(t, o), e.interlace == 0 ? t = K.decode._filterZero(t, e, 0, n, r) : e.interlace == 1 && (t = K.decode._readInterlace(t, e)), t;
}, K.decode._inflate = function(e, t) {
	return K.inflateRaw(new Uint8Array(e.buffer, 2, e.length - 6), t);
}, K.inflateRaw = ((Yn = {}).H = {}, Yn.H.N = function(e, t) {
	var n, r, i = Uint8Array, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0;
	if (e[0] == 3 && e[1] == 0) return t || new i(0);
	var m = Yn.H, h = m.b, g = m.e, _ = m.R, v = m.n, y = m.A, b = m.Z, x = m.m, S = t == null;
	for (S && (t = new i(e.length >>> 2 << 3)); a == 0;) if (a = h(e, p, 1), o = h(e, p + 1, 2), p += 3, o != 0) {
		if (S && (t = Yn.H.W(t, f + (1 << 17))), o == 1 && (n = x.J, r = x.h, u = 511, d = 31), o == 2) {
			s = g(e, p, 5) + 257, c = g(e, p + 5, 5) + 1, l = g(e, p + 10, 4) + 4, p += 14;
			for (var C = 1, w = 0; w < 38; w += 2) x.Q[w] = 0, x.Q[w + 1] = 0;
			for (w = 0; w < l; w++) {
				var T = g(e, p + 3 * w, 3);
				x.Q[1 + (x.X[w] << 1)] = T, T > C && (C = T);
			}
			p += 3 * l, v(x.Q, C), y(x.Q, C, x.u), n = x.w, r = x.d, p = _(x.u, (1 << C) - 1, s + c, e, p, x.v);
			var E = m.V(x.v, 0, s, x.C);
			u = (1 << E) - 1;
			var D = m.V(x.v, s, c, x.D);
			d = (1 << D) - 1, v(x.C, E), y(x.C, E, n), v(x.D, D), y(x.D, D, r);
		}
		for (;;) {
			var O = n[b(e, p) & u];
			p += 15 & O;
			var k = O >>> 4;
			if (!(k >>> 8)) t[f++] = k;
			else {
				if (k == 256) break;
				var A = f + k - 254;
				if (k > 264) {
					var j = x.q[k - 257];
					A = f + (j >>> 3) + g(e, p, 7 & j), p += 7 & j;
				}
				var M = r[b(e, p) & d];
				p += 15 & M;
				var N = M >>> 4, ee = x.c[N], te = (ee >>> 4) + h(e, p, 15 & ee);
				for (p += 15 & ee; f < A;) t[f] = t[f++ - te], t[f] = t[f++ - te], t[f] = t[f++ - te], t[f] = t[f++ - te];
				f = A;
			}
		}
	} else {
		7 & p && (p += 8 - (7 & p));
		var ne = (p >>> 3) + 4, P = e[ne - 4] | e[ne - 3] << 8;
		S && (t = Yn.H.W(t, f + P)), t.set(new i(e.buffer, e.byteOffset + ne, P), f), p = ne + P << 3, f += P;
	}
	return t.length == f ? t : t.slice(0, f);
}, Yn.H.W = function(e, t) {
	var n = e.length;
	if (t <= n) return e;
	var r = new Uint8Array(n << 1);
	return r.set(e, 0), r;
}, Yn.H.R = function(e, t, n, r, i, a) {
	for (var o = Yn.H.e, s = Yn.H.Z, c = 0; c < n;) {
		var l = e[s(r, i) & t];
		i += 15 & l;
		var u = l >>> 4;
		if (u <= 15) a[c] = u, c++;
		else {
			var d = 0, f = 0;
			u == 16 ? (f = 3 + o(r, i, 2), i += 2, d = a[c - 1]) : u == 17 ? (f = 3 + o(r, i, 3), i += 3) : u == 18 && (f = 11 + o(r, i, 7), i += 7);
			for (var p = c + f; c < p;) a[c] = d, c++;
		}
	}
	return i;
}, Yn.H.V = function(e, t, n, r) {
	for (var i = 0, a = 0, o = r.length >>> 1; a < n;) {
		var s = e[a + t];
		r[a << 1] = 0, r[1 + (a << 1)] = s, s > i && (i = s), a++;
	}
	for (; a < o;) r[a << 1] = 0, r[1 + (a << 1)] = 0, a++;
	return i;
}, Yn.H.n = function(e, t) {
	for (var n, r, i, a, o = Yn.H.m, s = e.length, c = o.j, l = 0; l <= t; l++) c[l] = 0;
	for (l = 1; l < s; l += 2) c[e[l]]++;
	var u = o.K;
	for (n = 0, c[0] = 0, r = 1; r <= t; r++) n = n + c[r - 1] << 1, u[r] = n;
	for (i = 0; i < s; i += 2) (a = e[i + 1]) != 0 && (e[i] = u[a], u[a]++);
}, Yn.H.A = function(e, t, n) {
	for (var r = e.length, i = Yn.H.m.r, a = 0; a < r; a += 2) if (e[a + 1] != 0) for (var o = a >> 1, s = e[a + 1], c = o << 4 | s, l = t - s, u = e[a] << l, d = u + (1 << l); u != d;) n[i[u] >>> 15 - t] = c, u++;
}, Yn.H.l = function(e, t) {
	for (var n = Yn.H.m.r, r = 15 - t, i = 0; i < e.length; i += 2) {
		var a = e[i] << t - e[i + 1];
		e[i] = n[a] >>> r;
	}
}, Yn.H.M = function(e, t, n) {
	n <<= 7 & t;
	var r = t >>> 3;
	e[r] |= n, e[r + 1] |= n >>> 8;
}, Yn.H.I = function(e, t, n) {
	n <<= 7 & t;
	var r = t >>> 3;
	e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16;
}, Yn.H.e = function(e, t, n) {
	return (e[t >>> 3] | e[(t >>> 3) + 1] << 8) >>> (7 & t) & (1 << n) - 1;
}, Yn.H.b = function(e, t, n) {
	return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (7 & t) & (1 << n) - 1;
}, Yn.H.Z = function(e, t) {
	return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (7 & t);
}, Yn.H.i = function(e, t) {
	return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16 | e[(t >>> 3) + 3] << 24) >>> (7 & t);
}, Yn.H.m = (qn = Uint16Array, Jn = Uint32Array, {
	K: new qn(16),
	j: new qn(16),
	X: [
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	],
	S: [
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		13,
		15,
		17,
		19,
		23,
		27,
		31,
		35,
		43,
		51,
		59,
		67,
		83,
		99,
		115,
		131,
		163,
		195,
		227,
		258,
		999,
		999,
		999
	],
	T: [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		5,
		5,
		5,
		5,
		0,
		0,
		0,
		0
	],
	q: new qn(32),
	p: [
		1,
		2,
		3,
		4,
		5,
		7,
		9,
		13,
		17,
		25,
		33,
		49,
		65,
		97,
		129,
		193,
		257,
		385,
		513,
		769,
		1025,
		1537,
		2049,
		3073,
		4097,
		6145,
		8193,
		12289,
		16385,
		24577,
		65535,
		65535
	],
	z: [
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		5,
		6,
		6,
		7,
		7,
		8,
		8,
		9,
		9,
		10,
		10,
		11,
		11,
		12,
		12,
		13,
		13,
		0,
		0
	],
	c: new Jn(32),
	J: new qn(512),
	_: [],
	h: new qn(32),
	$: [],
	w: new qn(32768),
	C: [],
	v: [],
	d: new qn(32768),
	D: [],
	u: new qn(512),
	Q: [],
	r: new qn(32768),
	s: new Jn(286),
	Y: new Jn(30),
	a: new Jn(19),
	t: new Jn(15e3),
	k: new qn(65536),
	g: new qn(32768)
}), function() {
	for (var e = Yn.H.m, t = 0; t < 32768; t++) {
		var n = t;
		n = (4278255360 & (n = (4042322160 & (n = (3435973836 & (n = (2863311530 & n) >>> 1 | (1431655765 & n) << 1)) >>> 2 | (858993459 & n) << 2)) >>> 4 | (252645135 & n) << 4)) >>> 8 | (16711935 & n) << 8, e.r[t] = (n >>> 16 | n << 16) >>> 17;
	}
	function r(e, t, n) {
		for (; t-- != 0;) e.push(0, n);
	}
	for (t = 0; t < 32; t++) e.q[t] = e.S[t] << 3 | e.T[t], e.c[t] = e.p[t] << 4 | e.z[t];
	r(e._, 144, 8), r(e._, 112, 9), r(e._, 24, 7), r(e._, 8, 8), Yn.H.n(e._, 9), Yn.H.A(e._, 9, e.J), Yn.H.l(e._, 9), r(e.$, 32, 5), Yn.H.n(e.$, 5), Yn.H.A(e.$, 5, e.h), Yn.H.l(e.$, 5), r(e.Q, 19, 0), r(e.C, 286, 0), r(e.D, 30, 0), r(e.v, 320, 0);
}(), Yn.H.N), K.decode._readInterlace = function(e, t) {
	for (var n = t.width, r = t.height, i = K.decode._getBPP(t), a = i >> 3, o = Math.ceil(n * i / 8), s = new Uint8Array(r * o), c = 0, l = [
		0,
		0,
		4,
		0,
		2,
		0,
		1
	], u = [
		0,
		4,
		0,
		2,
		0,
		1,
		0
	], d = [
		8,
		8,
		8,
		4,
		4,
		2,
		2
	], f = [
		8,
		8,
		4,
		4,
		2,
		2,
		1
	], p = 0; p < 7;) {
		for (var m = d[p], h = f[p], g = 0, _ = 0, v = l[p]; v < r;) v += m, _++;
		for (var y = u[p]; y < n;) y += h, g++;
		var b = Math.ceil(g * i / 8);
		K.decode._filterZero(e, t, c, g, _);
		for (var x = 0, S = l[p]; S < r;) {
			for (var C = u[p], w = c + x * b << 3; C < n;) {
				var T;
				if (i == 1 && (T = (T = e[w >> 3]) >> 7 - (7 & w) & 1, s[S * o + (C >> 3)] |= T << 7 - (7 & C)), i == 2 && (T = (T = e[w >> 3]) >> 6 - (7 & w) & 3, s[S * o + (C >> 2)] |= T << 6 - ((3 & C) << 1)), i == 4 && (T = (T = e[w >> 3]) >> 4 - (7 & w) & 15, s[S * o + (C >> 1)] |= T << 4 - ((1 & C) << 2)), i >= 8) for (var E = S * o + C * a, D = 0; D < a; D++) s[E + D] = e[(w >> 3) + D];
				w += i, C += h;
			}
			x++, S += m;
		}
		g * _ != 0 && (c += _ * (1 + b)), p += 1;
	}
	return s;
}, K.decode._getBPP = function(e) {
	return [
		1,
		null,
		3,
		1,
		2,
		null,
		4
	][e.ctype] * e.depth;
}, K.decode._filterZero = function(e, t, n, r, i) {
	var a = K.decode._getBPP(t), o = Math.ceil(r * a / 8), s = K.decode._paeth;
	a = Math.ceil(a / 8);
	var c = 0, l = 1, u = e[n], d = 0;
	if (u > 1 && (e[n] = [
		0,
		0,
		1
	][u - 2]), u == 3) for (d = a; d < o; d++) e[d + 1] = e[d + 1] + (e[d + 1 - a] >>> 1) & 255;
	for (var f = 0; f < i; f++) if (d = 0, (u = e[(l = (c = n + f * o) + f + 1) - 1]) == 0) for (; d < o; d++) e[c + d] = e[l + d];
	else if (u == 1) {
		for (; d < a; d++) e[c + d] = e[l + d];
		for (; d < o; d++) e[c + d] = e[l + d] + e[c + d - a];
	} else if (u == 2) for (; d < o; d++) e[c + d] = e[l + d] + e[c + d - o];
	else if (u == 3) {
		for (; d < a; d++) e[c + d] = e[l + d] + (e[c + d - o] >>> 1);
		for (; d < o; d++) e[c + d] = e[l + d] + (e[c + d - o] + e[c + d - a] >>> 1);
	} else {
		for (; d < a; d++) e[c + d] = e[l + d] + s(0, e[c + d - o], 0);
		for (; d < o; d++) e[c + d] = e[l + d] + s(e[c + d - a], e[c + d - o], e[c + d - a - o]);
	}
	return e;
}, K.decode._paeth = function(e, t, n) {
	var r = e + t - n, i = r - e, a = r - t, o = r - n;
	return i * i <= a * a && i * i <= o * o ? e : a * a <= o * o ? t : n;
}, K.decode._IHDR = function(e, t, n) {
	var r = K._bin;
	n.width = r.readUint(e, t), t += 4, n.height = r.readUint(e, t), t += 4, n.depth = e[t], t++, n.ctype = e[t], t++, n.compress = e[t], t++, n.filter = e[t], t++, n.interlace = e[t], t++;
}, K._bin = {
	nextZero: function(e, t) {
		for (; e[t] != 0;) t++;
		return t;
	},
	readUshort: function(e, t) {
		return e[t] << 8 | e[t + 1];
	},
	writeUshort: function(e, t, n) {
		e[t] = n >> 8 & 255, e[t + 1] = 255 & n;
	},
	readUint: function(e, t) {
		return 16777216 * e[t] + (e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]);
	},
	writeUint: function(e, t, n) {
		e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = 255 & n;
	},
	readASCII: function(e, t, n) {
		for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
		return r;
	},
	writeASCII: function(e, t, n) {
		for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r);
	},
	readBytes: function(e, t, n) {
		for (var r = [], i = 0; i < n; i++) r.push(e[t + i]);
		return r;
	},
	pad: function(e) {
		return e.length < 2 ? "0" + e : e;
	},
	readUTF8: function(e, t, n) {
		for (var r, i = "", a = 0; a < n; a++) i += "%" + K._bin.pad(e[t + a].toString(16));
		try {
			r = decodeURIComponent(i);
		} catch {
			return K._bin.readASCII(e, t, n);
		}
		return r;
	}
}, K._copyTile = function(e, t, n, r, i, a, o, s, c) {
	for (var l = Math.min(t, i), u = Math.min(n, a), d = 0, f = 0, p = 0; p < u; p++) for (var m = 0; m < l; m++) if (o >= 0 && s >= 0 ? (d = p * t + m << 2, f = (s + p) * i + o + m << 2) : (d = (-s + p) * t - o + m << 2, f = p * i + m << 2), c == 0) r[f] = e[d], r[f + 1] = e[d + 1], r[f + 2] = e[d + 2], r[f + 3] = e[d + 3];
	else if (c == 1) {
		var h = e[d + 3] * (1 / 255), g = e[d] * h, _ = e[d + 1] * h, v = e[d + 2] * h, y = r[f + 3] * (1 / 255), b = r[f] * y, x = r[f + 1] * y, S = r[f + 2] * y, C = 1 - h, w = h + y * C, T = w == 0 ? 0 : 1 / w;
		r[f + 3] = 255 * w, r[f + 0] = (g + b * C) * T, r[f + 1] = (_ + x * C) * T, r[f + 2] = (v + S * C) * T;
	} else if (c == 2) h = e[d + 3], g = e[d], _ = e[d + 1], v = e[d + 2], y = r[f + 3], b = r[f], x = r[f + 1], S = r[f + 2], h == y && g == b && _ == x && v == S ? (r[f] = 0, r[f + 1] = 0, r[f + 2] = 0, r[f + 3] = 0) : (r[f] = g, r[f + 1] = _, r[f + 2] = v, r[f + 3] = h);
	else if (c == 3) {
		if (h = e[d + 3], g = e[d], _ = e[d + 1], v = e[d + 2], y = r[f + 3], b = r[f], x = r[f + 1], S = r[f + 2], h == y && g == b && _ == x && v == S) continue;
		if (h < 220 && y > 20) return !1;
	}
	return !0;
}, K.encode = function(e, t, n, r, i, a, o) {
	r ??= 0, o ??= !1;
	var s = K.encode.compress(e, t, n, r, [
		!1,
		!1,
		!1,
		0,
		o
	]);
	return K.encode.compressPNG(s, -1), K.encode._main(s, t, n, i, a);
}, K.encodeLL = function(e, t, n, r, i, a, o, s) {
	for (var c = {
		ctype: 0 + (r == 1 ? 0 : 2) + (i == 0 ? 0 : 4),
		depth: a,
		frames: []
	}, l = (r + i) * a, u = l * t, d = 0; d < e.length; d++) c.frames.push({
		rect: {
			x: 0,
			y: 0,
			width: t,
			height: n
		},
		img: new Uint8Array(e[d]),
		blend: 0,
		dispose: 1,
		bpp: Math.ceil(l / 8),
		bpl: Math.ceil(u / 8)
	});
	return K.encode.compressPNG(c, 0, !0), K.encode._main(c, t, n, o, s);
}, K.encode._main = function(e, t, n, r, i) {
	i ??= {};
	var a = K.crc.crc, o = K._bin.writeUint, s = K._bin.writeUshort, c = K._bin.writeASCII, l = 8, u = e.frames.length > 1, d = !1, f = 33 + (u ? 20 : 0);
	if (i.sRGB != null && (f += 13), i.pHYs != null && (f += 21), e.ctype == 3) {
		for (var p = e.plte.length, m = 0; m < p; m++) e.plte[m] >>> 24 != 255 && (d = !0);
		f += 8 + 3 * p + 4 + (d ? 8 + 1 * p + 4 : 0);
	}
	for (var h = 0; h < e.frames.length; h++) u && (f += 38), f += (w = e.frames[h]).cimg.length + 12, h != 0 && (f += 4);
	f += 12;
	var g = new Uint8Array(f), _ = [
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	];
	for (m = 0; m < 8; m++) g[m] = _[m];
	if (o(g, l, 13), c(g, l += 4, "IHDR"), o(g, l += 4, t), o(g, l += 4, n), g[l += 4] = e.depth, g[++l] = e.ctype, g[++l] = 0, g[++l] = 0, g[++l] = 0, o(g, ++l, a(g, l - 17, 17)), l += 4, i.sRGB != null && (o(g, l, 1), c(g, l += 4, "sRGB"), g[l += 4] = i.sRGB, o(g, ++l, a(g, l - 5, 5)), l += 4), i.pHYs != null && (o(g, l, 9), c(g, l += 4, "pHYs"), o(g, l += 4, i.pHYs[0]), o(g, l += 4, i.pHYs[1]), g[l += 4] = i.pHYs[2], o(g, ++l, a(g, l - 13, 13)), l += 4), u && (o(g, l, 8), c(g, l += 4, "acTL"), o(g, l += 4, e.frames.length), o(g, l += 4, i.loop == null ? 0 : i.loop), o(g, l += 4, a(g, l - 12, 12)), l += 4), e.ctype == 3) {
		for (o(g, l, 3 * (p = e.plte.length)), c(g, l += 4, "PLTE"), l += 4, m = 0; m < p; m++) {
			var v = 3 * m, y = e.plte[m], b = 255 & y, x = y >>> 8 & 255, S = y >>> 16 & 255;
			g[l + v + 0] = b, g[l + v + 1] = x, g[l + v + 2] = S;
		}
		if (o(g, l += 3 * p, a(g, l - 3 * p - 4, 3 * p + 4)), l += 4, d) {
			for (o(g, l, p), c(g, l += 4, "tRNS"), l += 4, m = 0; m < p; m++) g[l + m] = e.plte[m] >>> 24 & 255;
			o(g, l += p, a(g, l - p - 4, p + 4)), l += 4;
		}
	}
	var C = 0;
	for (h = 0; h < e.frames.length; h++) {
		var w = e.frames[h];
		u && (o(g, l, 26), c(g, l += 4, "fcTL"), o(g, l += 4, C++), o(g, l += 4, w.rect.width), o(g, l += 4, w.rect.height), o(g, l += 4, w.rect.x), o(g, l += 4, w.rect.y), s(g, l += 4, r[h]), s(g, l += 2, 1e3), g[l += 2] = w.dispose, g[++l] = w.blend, o(g, ++l, a(g, l - 30, 30)), l += 4);
		var T = w.cimg;
		o(g, l, (p = T.length) + (h == 0 ? 0 : 4));
		var E = l += 4;
		c(g, l, h == 0 ? "IDAT" : "fdAT"), l += 4, h != 0 && (o(g, l, C++), l += 4), g.set(T, l), o(g, l += p, a(g, E, l - E)), l += 4;
	}
	return o(g, l, 0), c(g, l += 4, "IEND"), o(g, l += 4, a(g, l - 4, 4)), l += 4, g.buffer;
}, K.encode.compressPNG = function(e, t, n) {
	for (var r = 0; r < e.frames.length; r++) {
		var i = e.frames[r];
		i.rect.width;
		var a = i.rect.height, o = new Uint8Array(a * i.bpl + a);
		i.cimg = K.encode._filterZero(i.img, a, i.bpp, i.bpl, o, t, n);
	}
}, K.encode.compress = function(e, t, n, r, i) {
	for (var a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = 6, d = 8, f = 255, p = 0; p < e.length; p++) for (var m = new Uint8Array(e[p]), h = m.length, g = 0; g < h; g += 4) f &= m[g + 3];
	var _ = f != 255, v = K.encode.framize(e, t, n, a, o, s), y = {}, b = [], x = [];
	if (r != 0) {
		var S = [];
		for (g = 0; g < v.length; g++) S.push(v[g].img.buffer);
		var C = K.encode.concatRGBA(S), w = K.quantize(C, r), T = 0, E = new Uint8Array(w.abuf);
		for (g = 0; g < v.length; g++) {
			var D = (ue = v[g].img).length;
			for (x.push(new Uint8Array(w.inds.buffer, T >> 2, D >> 2)), p = 0; p < D; p += 4) ue[p] = E[T + p], ue[p + 1] = E[T + p + 1], ue[p + 2] = E[T + p + 2], ue[p + 3] = E[T + p + 3];
			T += D;
		}
		for (g = 0; g < w.plte.length; g++) b.push(w.plte[g].est.rgba);
	} else for (p = 0; p < v.length; p++) {
		var O = v[p], k = new Uint32Array(O.img.buffer), A = O.rect.width, j = (h = k.length, new Uint8Array(h));
		for (x.push(j), g = 0; g < h; g++) {
			var M = k[g];
			if (g != 0 && M == k[g - 1]) j[g] = j[g - 1];
			else if (g > A && M == k[g - A]) j[g] = j[g - A];
			else {
				var N = y[M];
				if (N == null && (y[M] = N = b.length, b.push(M), b.length >= 300)) break;
				j[g] = N;
			}
		}
	}
	var ee = b.length;
	for (ee <= 256 && l == 0 && (d = ee <= 2 ? 1 : ee <= 4 ? 2 : ee <= 16 ? 4 : 8, d = Math.max(d, c)), p = 0; p < v.length; p++) {
		(O = v[p]).rect.x, O.rect.y, A = O.rect.width;
		var te = O.rect.height, ne = O.img;
		new Uint32Array(ne.buffer);
		var P = 4 * A, re = 4;
		if (ee <= 256 && l == 0) {
			P = Math.ceil(d * A / 8);
			for (var ie = new Uint8Array(P * te), ae = x[p], oe = 0; oe < te; oe++) {
				g = oe * P;
				var se = oe * A;
				if (d == 8) for (var ce = 0; ce < A; ce++) ie[g + ce] = ae[se + ce];
				else if (d == 4) for (ce = 0; ce < A; ce++) ie[g + (ce >> 1)] |= ae[se + ce] << 4 - 4 * (1 & ce);
				else if (d == 2) for (ce = 0; ce < A; ce++) ie[g + (ce >> 2)] |= ae[se + ce] << 6 - 2 * (3 & ce);
				else if (d == 1) for (ce = 0; ce < A; ce++) ie[g + (ce >> 3)] |= ae[se + ce] << 7 - 1 * (7 & ce);
			}
			ne = ie, u = 3, re = 1;
		} else if (_ == 0 && v.length == 1) {
			ie = new Uint8Array(A * te * 3);
			var le = A * te;
			for (g = 0; g < le; g++) {
				var ue, de = 4 * g;
				ie[ue = 3 * g] = ne[de], ie[ue + 1] = ne[de + 1], ie[ue + 2] = ne[de + 2];
			}
			ne = ie, u = 2, re = 3, P = 3 * A;
		}
		O.img = ne, O.bpl = P, O.bpp = re;
	}
	return {
		ctype: u,
		depth: d,
		plte: b,
		frames: v
	};
}, K.encode.framize = function(e, t, n, r, i, a) {
	for (var o = [], s = 0; s < e.length; s++) {
		var c, l = new Uint8Array(e[s]), u = new Uint32Array(l.buffer), d = 0, f = 0, p = t, m = n, h = +!!r;
		if (s != 0) {
			for (var g = a || r || s == 1 || o[s - 2].dispose != 0 ? 1 : 2, _ = 0, v = 1e9, y = 0; y < g; y++) {
				for (var b = new Uint8Array(e[s - 1 - y]), x = new Uint32Array(e[s - 1 - y]), S = t, C = n, w = -1, T = -1, E = 0; E < n; E++) for (var D = 0; D < t; D++) u[ee = E * t + D] != x[ee] && (D < S && (S = D), D > w && (w = D), E < C && (C = E), E > T && (T = E));
				w == -1 && (S = C = w = T = 0), i && (1 & ~S || S--, 1 & ~C || C--);
				var O = (w - S + 1) * (T - C + 1);
				O < v && (v = O, _ = y, d = S, f = C, p = w - S + 1, m = T - C + 1);
			}
			b = new Uint8Array(e[s - 1 - _]), _ == 1 && (o[s - 1].dispose = 2), c = new Uint8Array(p * m * 4), K._copyTile(b, t, n, c, p, m, -d, -f, 0), (h = +!!K._copyTile(l, t, n, c, p, m, -d, -f, 3)) == 1 ? K.encode._prepareDiff(l, t, n, c, {
				x: d,
				y: f,
				width: p,
				height: m
			}) : K._copyTile(l, t, n, c, p, m, -d, -f, 0);
		} else c = l.slice(0);
		o.push({
			rect: {
				x: d,
				y: f,
				width: p,
				height: m
			},
			img: c,
			blend: h,
			dispose: 0
		});
	}
	if (r) {
		for (s = 0; s < o.length; s++) if ((te = o[s]).blend != 1) {
			var k = te.rect, A = o[s - 1].rect, j = Math.min(k.x, A.x), M = Math.min(k.y, A.y), N = {
				x: j,
				y: M,
				width: Math.max(k.x + k.width, A.x + A.width) - j,
				height: Math.max(k.y + k.height, A.y + A.height) - M
			};
			o[s - 1].dispose = 1, s - 1 != 0 && K.encode._updateFrame(e, t, n, o, s - 1, N, i), K.encode._updateFrame(e, t, n, o, s, N, i);
		}
	}
	if (e.length != 1) for (var ee = 0; ee < o.length; ee++) {
		var te;
		(te = o[ee]).rect.width * te.rect.height;
	}
	return o;
}, K.encode._updateFrame = function(e, t, n, r, i, a, o) {
	for (var s = Uint8Array, c = Uint32Array, l = new s(e[i - 1]), u = new c(e[i - 1]), d = i + 1 < e.length ? new s(e[i + 1]) : null, f = new s(e[i]), p = new c(f.buffer), m = t, h = n, g = -1, _ = -1, v = 0; v < a.height; v++) for (var y = 0; y < a.width; y++) {
		var b = a.x + y, x = a.y + v, S = x * t + b, C = p[S];
		C == 0 || r[i - 1].dispose == 0 && u[S] == C && (d == null || d[4 * S + 3] != 0) || (b < m && (m = b), b > g && (g = b), x < h && (h = x), x > _ && (_ = x));
	}
	g == -1 && (m = h = g = _ = 0), o && (1 & ~m || m--, 1 & ~h || h--), a = {
		x: m,
		y: h,
		width: g - m + 1,
		height: _ - h + 1
	};
	var w = r[i];
	w.rect = a, w.blend = 1, w.img = new Uint8Array(a.width * a.height * 4), r[i - 1].dispose == 0 ? (K._copyTile(l, t, n, w.img, a.width, a.height, -a.x, -a.y, 0), K.encode._prepareDiff(f, t, n, w.img, a)) : K._copyTile(f, t, n, w.img, a.width, a.height, -a.x, -a.y, 0);
}, K.encode._prepareDiff = function(e, t, n, r, i) {
	K._copyTile(e, t, n, r, i.width, i.height, -i.x, -i.y, 2);
}, K.encode._filterZero = function(e, t, n, r, i, a, o) {
	var s, c = [], l = [
		0,
		1,
		2,
		3,
		4
	];
	a == -1 ? (t * r > 5e5 || n == 1) && (l = [0]) : l = [a], o && (s = { level: 0 });
	for (var u = o && UZIP != null ? UZIP : Be.default, d = 0; d < l.length; d++) {
		for (var f = 0; f < t; f++) K.encode._filterLine(i, e, f, r, n, l[d]);
		c.push(u.deflate(i, s));
	}
	var p, m = 1e9;
	for (d = 0; d < c.length; d++) c[d].length < m && (p = d, m = c[d].length);
	return c[p];
}, K.encode._filterLine = function(e, t, n, r, i, a) {
	var o = n * r, s = o + n, c = K.decode._paeth;
	if (e[s] = a, s++, a == 0) {
		if (r < 500) for (var l = 0; l < r; l++) e[s + l] = t[o + l];
		else e.set(new Uint8Array(t.buffer, o, r), s);
	} else if (a == 1) {
		for (l = 0; l < i; l++) e[s + l] = t[o + l];
		for (l = i; l < r; l++) e[s + l] = t[o + l] - t[o + l - i] + 256 & 255;
	} else if (n == 0) {
		for (l = 0; l < i; l++) e[s + l] = t[o + l];
		if (a == 2) for (l = i; l < r; l++) e[s + l] = t[o + l];
		if (a == 3) for (l = i; l < r; l++) e[s + l] = t[o + l] - (t[o + l - i] >> 1) + 256 & 255;
		if (a == 4) for (l = i; l < r; l++) e[s + l] = t[o + l] - c(t[o + l - i], 0, 0) + 256 & 255;
	} else {
		if (a == 2) for (l = 0; l < r; l++) e[s + l] = t[o + l] + 256 - t[o + l - r] & 255;
		if (a == 3) {
			for (l = 0; l < i; l++) e[s + l] = t[o + l] + 256 - (t[o + l - r] >> 1) & 255;
			for (l = i; l < r; l++) e[s + l] = t[o + l] + 256 - (t[o + l - r] + t[o + l - i] >> 1) & 255;
		}
		if (a == 4) {
			for (l = 0; l < i; l++) e[s + l] = t[o + l] + 256 - c(0, t[o + l - r], 0) & 255;
			for (l = i; l < r; l++) e[s + l] = t[o + l] + 256 - c(t[o + l - i], t[o + l - r], t[o + l - i - r]) & 255;
		}
	}
}, K.crc = {
	table: function() {
		for (var e = /* @__PURE__ */ new Uint32Array(256), t = 0; t < 256; t++) {
			for (var n = t, r = 0; r < 8; r++) 1 & n ? n = 3988292384 ^ n >>> 1 : n >>>= 1;
			e[t] = n;
		}
		return e;
	}(),
	update: function(e, t, n, r) {
		for (var i = 0; i < r; i++) e = K.crc.table[255 & (e ^ t[n + i])] ^ e >>> 8;
		return e;
	},
	crc: function(e, t, n) {
		return 4294967295 ^ K.crc.update(4294967295, e, t, n);
	}
}, K.quantize = function(e, t) {
	var n = new Uint8Array(e), r = n.slice(0), i = new Uint32Array(r.buffer), a = K.quantize.getKDtree(r, t), o = a[0], s = a[1];
	K.quantize.planeDst;
	for (var c = n, l = i, u = c.length, d = new Uint8Array(n.length >> 2), f = 0; f < u; f += 4) {
		var p = c[f] * (1 / 255), m = c[f + 1] * (1 / 255), h = c[f + 2] * (1 / 255), g = c[f + 3] * (1 / 255), _ = K.quantize.getNearest(o, p, m, h, g);
		d[f >> 2] = _.ind, l[f >> 2] = _.est.rgba;
	}
	return {
		abuf: r.buffer,
		inds: d,
		plte: s
	};
}, K.quantize.getKDtree = function(e, t, n) {
	n ??= 1e-4;
	var r = new Uint32Array(e.buffer), i = {
		i0: 0,
		i1: e.length,
		bst: null,
		est: null,
		tdst: 0,
		left: null,
		right: null
	};
	i.bst = K.quantize.stats(e, i.i0, i.i1), i.est = K.quantize.estats(i.bst);
	for (var a = [i]; a.length < t;) {
		for (var o = 0, s = 0, c = 0; c < a.length; c++) a[c].est.L > o && (o = a[c].est.L, s = c);
		if (o < n) break;
		var l = a[s], u = K.quantize.splitPixels(e, r, l.i0, l.i1, l.est.e, l.est.eMq255);
		if (l.i0 >= u || l.i1 <= u) l.est.L = 0;
		else {
			var d = {
				i0: l.i0,
				i1: u,
				bst: null,
				est: null,
				tdst: 0,
				left: null,
				right: null
			};
			d.bst = K.quantize.stats(e, d.i0, d.i1), d.est = K.quantize.estats(d.bst);
			var f = {
				i0: u,
				i1: l.i1,
				bst: null,
				est: null,
				tdst: 0,
				left: null,
				right: null
			};
			for (f.bst = {
				R: [],
				m: [],
				N: l.bst.N - d.bst.N
			}, c = 0; c < 16; c++) f.bst.R[c] = l.bst.R[c] - d.bst.R[c];
			for (c = 0; c < 4; c++) f.bst.m[c] = l.bst.m[c] - d.bst.m[c];
			f.est = K.quantize.estats(f.bst), l.left = d, l.right = f, a[s] = d, a.push(f);
		}
	}
	for (a.sort(function(e, t) {
		return t.bst.N - e.bst.N;
	}), c = 0; c < a.length; c++) a[c].ind = c;
	return [i, a];
}, K.quantize.getNearest = function(e, t, n, r, i) {
	if (e.left == null) return e.tdst = K.quantize.dist(e.est.q, t, n, r, i), e;
	var a = K.quantize.planeDst(e.est, t, n, r, i), o = e.left, s = e.right;
	a > 0 && (o = e.right, s = e.left);
	var c = K.quantize.getNearest(o, t, n, r, i);
	if (c.tdst <= a * a) return c;
	var l = K.quantize.getNearest(s, t, n, r, i);
	return l.tdst < c.tdst ? l : c;
}, K.quantize.planeDst = function(e, t, n, r, i) {
	var a = e.e;
	return a[0] * t + a[1] * n + a[2] * r + a[3] * i - e.eMq;
}, K.quantize.dist = function(e, t, n, r, i) {
	var a = t - e[0], o = n - e[1], s = r - e[2], c = i - e[3];
	return a * a + o * o + s * s + c * c;
}, K.quantize.splitPixels = function(e, t, n, r, i, a) {
	var o = K.quantize.vecDot;
	for (r -= 4; n < r;) {
		for (; o(e, n, i) <= a;) n += 4;
		for (; o(e, r, i) > a;) r -= 4;
		if (n >= r) break;
		var s = t[n >> 2];
		t[n >> 2] = t[r >> 2], t[r >> 2] = s, n += 4, r -= 4;
	}
	for (; o(e, n, i) > a;) n -= 4;
	return n + 4;
}, K.quantize.vecDot = function(e, t, n) {
	return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3];
}, K.quantize.stats = function(e, t, n) {
	for (var r = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	], i = [
		0,
		0,
		0,
		0
	], a = n - t >> 2, o = t; o < n; o += 4) {
		var s = e[o] * (1 / 255), c = e[o + 1] * (1 / 255), l = e[o + 2] * (1 / 255), u = e[o + 3] * (1 / 255);
		i[0] += s, i[1] += c, i[2] += l, i[3] += u, r[0] += s * s, r[1] += s * c, r[2] += s * l, r[3] += s * u, r[5] += c * c, r[6] += c * l, r[7] += c * u, r[10] += l * l, r[11] += l * u, r[15] += u * u;
	}
	return r[4] = r[1], r[8] = r[2], r[9] = r[6], r[12] = r[3], r[13] = r[7], r[14] = r[11], {
		R: r,
		m: i,
		N: a
	};
}, K.quantize.estats = function(e) {
	var t = e.R, n = e.m, r = e.N, i = n[0], a = n[1], o = n[2], s = n[3], c = r == 0 ? 0 : 1 / r, l = [
		t[0] - i * i * c,
		t[1] - i * a * c,
		t[2] - i * o * c,
		t[3] - i * s * c,
		t[4] - a * i * c,
		t[5] - a * a * c,
		t[6] - a * o * c,
		t[7] - a * s * c,
		t[8] - o * i * c,
		t[9] - o * a * c,
		t[10] - o * o * c,
		t[11] - o * s * c,
		t[12] - s * i * c,
		t[13] - s * a * c,
		t[14] - s * o * c,
		t[15] - s * s * c
	], u = l, d = K.M4, f = [
		.5,
		.5,
		.5,
		.5
	], p = 0, m = 0;
	if (r != 0) for (var h = 0; h < 10 && (f = d.multVec(u, f), m = Math.sqrt(d.dot(f, f)), f = d.sml(1 / m, f), !(Math.abs(m - p) < 1e-9)); h++) p = m;
	var g = [
		i * c,
		a * c,
		o * c,
		s * c
	];
	return {
		Cov: l,
		q: g,
		e: f,
		L: p,
		eMq255: d.dot(d.sml(255, g), f),
		eMq: d.dot(f, g),
		rgba: (Math.round(255 * g[3]) << 24 | Math.round(255 * g[2]) << 16 | Math.round(255 * g[1]) << 8 | Math.round(255 * g[0])) >>> 0
	};
}, K.M4 = {
	multVec: function(e, t) {
		return [
			e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3],
			e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3],
			e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3],
			e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3]
		];
	},
	dot: function(e, t) {
		return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
	},
	sml: function(e, t) {
		return [
			e * t[0],
			e * t[1],
			e * t[2],
			e * t[3]
		];
	}
}, K.encode.concatRGBA = function(e) {
	for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
	var r = new Uint8Array(t), i = 0;
	for (n = 0; n < e.length; n++) {
		for (var a = new Uint8Array(e[n]), o = a.length, s = 0; s < o; s += 4) {
			var c = a[s], l = a[s + 1], u = a[s + 2], d = a[s + 3];
			d == 0 && (c = l = u = 0), r[i + s] = c, r[i + s + 1] = l, r[i + s + 2] = u, r[i + s + 3] = d;
		}
		i += o;
	}
	return r.buffer;
};
var Qn;
(function(e) {
	e.Greyscale = "Greyscale", e.Truecolour = "Truecolour", e.IndexedColour = "IndexedColour", e.GreyscaleWithAlpha = "GreyscaleWithAlpha", e.TruecolourWithAlpha = "TruecolourWithAlpha";
})(Qn ||= {});
var $n, er, tr, nr, rr = function() {
	function e(e) {
		var t = K.decode(e), n = K.toRGBA8(t);
		if (n.length > 1) throw Error("Animated PNGs are not supported");
		var r = function(e) {
			for (var t = Math.floor(e.length / 4), n = new Uint8Array(3 * t), r = new Uint8Array(1 * t), i = 0, a = 0, o = 0; i < e.length;) n[a++] = e[i++], n[a++] = e[i++], n[a++] = e[i++], r[o++] = e[i++];
			return {
				rgbChannel: n,
				alphaChannel: r
			};
		}(new Uint8Array(n[0])), i = r.rgbChannel, a = r.alphaChannel;
		this.rgbChannel = i, a.some(function(e) {
			return e < 255;
		}) && (this.alphaChannel = a), this.type = function(e) {
			if (e === 0) return Qn.Greyscale;
			if (e === 2) return Qn.Truecolour;
			if (e === 3) return Qn.IndexedColour;
			if (e === 4) return Qn.GreyscaleWithAlpha;
			if (e === 6) return Qn.TruecolourWithAlpha;
			throw Error("Unknown color type: " + e);
		}(t.ctype), this.width = t.width, this.height = t.height, this.bitsPerComponent = 8;
	}
	return e.load = function(t) {
		return new e(t);
	}, e;
}(), ir = function() {
	function e(e) {
		this.image = e, this.bitsPerComponent = e.bitsPerComponent, this.width = e.width, this.height = e.height, this.colorSpace = "DeviceRGB";
	}
	return e.for = function(t) {
		return d(this, void 0, void 0, function() {
			return f(this, function(n) {
				return [2, new e(rr.load(t))];
			});
		});
	}, e.prototype.embedIntoContext = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n, r;
			return f(this, function(i) {
				return n = this.embedAlphaChannel(e), r = e.flateStream(this.image.rgbChannel, {
					Type: "XObject",
					Subtype: "Image",
					BitsPerComponent: this.image.bitsPerComponent,
					Width: this.image.width,
					Height: this.image.height,
					ColorSpace: this.colorSpace,
					SMask: n
				}), t ? (e.assign(t, r), [2, t]) : [2, e.register(r)];
			});
		});
	}, e.prototype.embedAlphaChannel = function(e) {
		if (this.image.alphaChannel) {
			var t = e.flateStream(this.image.alphaChannel, {
				Type: "XObject",
				Subtype: "Image",
				Height: this.image.height,
				Width: this.image.width,
				BitsPerComponent: this.image.bitsPerComponent,
				ColorSpace: "DeviceGray",
				Decode: [0, 1]
			});
			return e.register(t);
		}
	}, e;
}(), ar = function() {
	function e(e, t, n) {
		this.bytes = e, this.start = t || 0, this.pos = this.start, this.end = t && n ? t + n : this.bytes.length;
	}
	return Object.defineProperty(e.prototype, "length", {
		get: function() {
			return this.end - this.start;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "isEmpty", {
		get: function() {
			return this.length === 0;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.getByte = function() {
		return this.pos >= this.end ? -1 : this.bytes[this.pos++];
	}, e.prototype.getUint16 = function() {
		var e = this.getByte(), t = this.getByte();
		return e === -1 || t === -1 ? -1 : (e << 8) + t;
	}, e.prototype.getInt32 = function() {
		return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
	}, e.prototype.getBytes = function(e, t) {
		t === void 0 && (t = !1);
		var n = this.bytes, r = this.pos, i = this.end;
		if (e) {
			var a = r + e;
			return a > i && (a = i), this.pos = a, o = n.subarray(r, a), t ? new Uint8ClampedArray(o) : o;
		}
		var o = n.subarray(r, i);
		return t ? new Uint8ClampedArray(o) : o;
	}, e.prototype.peekByte = function() {
		var e = this.getByte();
		return this.pos--, e;
	}, e.prototype.peekBytes = function(e, t) {
		t === void 0 && (t = !1);
		var n = this.getBytes(e, t);
		return this.pos -= n.length, n;
	}, e.prototype.skip = function(e) {
		e ||= 1, this.pos += e;
	}, e.prototype.reset = function() {
		this.pos = this.start;
	}, e.prototype.moveStart = function() {
		this.start = this.pos;
	}, e.prototype.makeSubStream = function(t, n) {
		return new e(this.bytes, t, n);
	}, e.prototype.decode = function() {
		return this.bytes;
	}, e;
}(), or = /* @__PURE__ */ new Uint8Array(), sr = function() {
	function e(e) {
		if (this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = or, this.minBufferLength = 512, e) for (; this.minBufferLength < e;) this.minBufferLength *= 2;
	}
	return Object.defineProperty(e.prototype, "isEmpty", {
		get: function() {
			for (; !this.eof && this.bufferLength === 0;) this.readBlock();
			return this.bufferLength === 0;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.getByte = function() {
		for (var e = this.pos; this.bufferLength <= e;) {
			if (this.eof) return -1;
			this.readBlock();
		}
		return this.buffer[this.pos++];
	}, e.prototype.getUint16 = function() {
		var e = this.getByte(), t = this.getByte();
		return e === -1 || t === -1 ? -1 : (e << 8) + t;
	}, e.prototype.getInt32 = function() {
		return (this.getByte() << 24) + (this.getByte() << 16) + (this.getByte() << 8) + this.getByte();
	}, e.prototype.getBytes = function(e, t) {
		var n;
		t === void 0 && (t = !1);
		var r = this.pos;
		if (e) {
			for (this.ensureBuffer(r + e), n = r + e; !this.eof && this.bufferLength < n;) this.readBlock();
			var i = this.bufferLength;
			n > i && (n = i);
		} else {
			for (; !this.eof;) this.readBlock();
			n = this.bufferLength;
		}
		this.pos = n;
		var a = this.buffer.subarray(r, n);
		return !t || a instanceof Uint8ClampedArray ? a : new Uint8ClampedArray(a);
	}, e.prototype.peekByte = function() {
		var e = this.getByte();
		return this.pos--, e;
	}, e.prototype.peekBytes = function(e, t) {
		t === void 0 && (t = !1);
		var n = this.getBytes(e, t);
		return this.pos -= n.length, n;
	}, e.prototype.skip = function(e) {
		e ||= 1, this.pos += e;
	}, e.prototype.reset = function() {
		this.pos = 0;
	}, e.prototype.makeSubStream = function(e, t) {
		for (var n = e + t; this.bufferLength <= n && !this.eof;) this.readBlock();
		return new ar(this.buffer, e, t);
	}, e.prototype.decode = function() {
		for (; !this.eof;) this.readBlock();
		return this.buffer.subarray(0, this.bufferLength);
	}, e.prototype.readBlock = function() {
		throw new Et(this.constructor.name, "readBlock");
	}, e.prototype.ensureBuffer = function(e) {
		var t = this.buffer;
		if (e <= t.byteLength) return t;
		for (var n = this.minBufferLength; n < e;) n *= 2;
		var r = new Uint8Array(n);
		return r.set(t), this.buffer = r;
	}, e;
}(), cr = function(e) {
	return e === 32 || e === 9 || e === 13 || e === 10;
}, lr = function(e) {
	function t(t, n) {
		var r = e.call(this, n) || this;
		return r.stream = t, r.input = /* @__PURE__ */ new Uint8Array(5), n && (n *= .8), r;
	}
	return l(t, e), t.prototype.readBlock = function() {
		for (var e = this.stream, t = e.getByte(); cr(t);) t = e.getByte();
		if (t !== -1 && t !== 126) {
			var n, r, i = this.bufferLength;
			if (t === 122) {
				for (n = this.ensureBuffer(i + 4), r = 0; r < 4; ++r) n[i + r] = 0;
				this.bufferLength += 4;
			} else {
				var a = this.input;
				for (a[0] = t, r = 1; r < 5; ++r) {
					for (t = e.getByte(); cr(t);) t = e.getByte();
					if (a[r] = t, t === -1 || t === 126) break;
				}
				if (n = this.ensureBuffer(i + r - 1), this.bufferLength += r - 1, r < 5) {
					for (; r < 5; ++r) a[r] = 117;
					this.eof = !0;
				}
				var o = 0;
				for (r = 0; r < 5; ++r) o = 85 * o + (a[r] - 33);
				for (r = 3; r >= 0; --r) n[i + r] = 255 & o, o >>= 8;
			}
		} else this.eof = !0;
	}, t;
}(sr), ur = function(e) {
	function t(t, n) {
		var r = e.call(this, n) || this;
		return r.stream = t, r.firstDigit = -1, n && (n *= .5), r;
	}
	return l(t, e), t.prototype.readBlock = function() {
		var e = this.stream.getBytes(8e3);
		if (e.length) {
			for (var t = e.length + 1 >> 1, n = this.ensureBuffer(this.bufferLength + t), r = this.bufferLength, i = this.firstDigit, a = 0, o = e.length; a < o; a++) {
				var s = e[a], c = void 0;
				if (s >= 48 && s <= 57) c = 15 & s;
				else {
					if (!(s >= 65 && s <= 70 || s >= 97 && s <= 102)) {
						if (s === 62) {
							this.eof = !0;
							break;
						}
						continue;
					}
					c = 9 + (15 & s);
				}
				i < 0 ? i = c : (n[r++] = i << 4 | c, i = -1);
			}
			i >= 0 && this.eof && (n[r++] = i << 4, i = -1), this.firstDigit = i, this.bufferLength = r;
		} else this.eof = !0;
	}, t;
}(sr), dr = new Int32Array([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), fr = new Int32Array([
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	65547,
	65549,
	65551,
	65553,
	131091,
	131095,
	131099,
	131103,
	196643,
	196651,
	196659,
	196667,
	262211,
	262227,
	262243,
	262259,
	327811,
	327843,
	327875,
	327907,
	258,
	258,
	258
]), pr = new Int32Array([
	1,
	2,
	3,
	4,
	65541,
	65543,
	131081,
	131085,
	196625,
	196633,
	262177,
	262193,
	327745,
	327777,
	393345,
	393409,
	459009,
	459137,
	524801,
	525057,
	590849,
	591361,
	657409,
	658433,
	724993,
	727041,
	794625,
	798721,
	868353,
	876545
]), mr = [new Int32Array([
	459008,
	524368,
	524304,
	524568,
	459024,
	524400,
	524336,
	590016,
	459016,
	524384,
	524320,
	589984,
	524288,
	524416,
	524352,
	590048,
	459012,
	524376,
	524312,
	589968,
	459028,
	524408,
	524344,
	590032,
	459020,
	524392,
	524328,
	59e4,
	524296,
	524424,
	524360,
	590064,
	459010,
	524372,
	524308,
	524572,
	459026,
	524404,
	524340,
	590024,
	459018,
	524388,
	524324,
	589992,
	524292,
	524420,
	524356,
	590056,
	459014,
	524380,
	524316,
	589976,
	459030,
	524412,
	524348,
	590040,
	459022,
	524396,
	524332,
	590008,
	524300,
	524428,
	524364,
	590072,
	459009,
	524370,
	524306,
	524570,
	459025,
	524402,
	524338,
	590020,
	459017,
	524386,
	524322,
	589988,
	524290,
	524418,
	524354,
	590052,
	459013,
	524378,
	524314,
	589972,
	459029,
	524410,
	524346,
	590036,
	459021,
	524394,
	524330,
	590004,
	524298,
	524426,
	524362,
	590068,
	459011,
	524374,
	524310,
	524574,
	459027,
	524406,
	524342,
	590028,
	459019,
	524390,
	524326,
	589996,
	524294,
	524422,
	524358,
	590060,
	459015,
	524382,
	524318,
	589980,
	459031,
	524414,
	524350,
	590044,
	459023,
	524398,
	524334,
	590012,
	524302,
	524430,
	524366,
	590076,
	459008,
	524369,
	524305,
	524569,
	459024,
	524401,
	524337,
	590018,
	459016,
	524385,
	524321,
	589986,
	524289,
	524417,
	524353,
	590050,
	459012,
	524377,
	524313,
	589970,
	459028,
	524409,
	524345,
	590034,
	459020,
	524393,
	524329,
	590002,
	524297,
	524425,
	524361,
	590066,
	459010,
	524373,
	524309,
	524573,
	459026,
	524405,
	524341,
	590026,
	459018,
	524389,
	524325,
	589994,
	524293,
	524421,
	524357,
	590058,
	459014,
	524381,
	524317,
	589978,
	459030,
	524413,
	524349,
	590042,
	459022,
	524397,
	524333,
	590010,
	524301,
	524429,
	524365,
	590074,
	459009,
	524371,
	524307,
	524571,
	459025,
	524403,
	524339,
	590022,
	459017,
	524387,
	524323,
	589990,
	524291,
	524419,
	524355,
	590054,
	459013,
	524379,
	524315,
	589974,
	459029,
	524411,
	524347,
	590038,
	459021,
	524395,
	524331,
	590006,
	524299,
	524427,
	524363,
	590070,
	459011,
	524375,
	524311,
	524575,
	459027,
	524407,
	524343,
	590030,
	459019,
	524391,
	524327,
	589998,
	524295,
	524423,
	524359,
	590062,
	459015,
	524383,
	524319,
	589982,
	459031,
	524415,
	524351,
	590046,
	459023,
	524399,
	524335,
	590014,
	524303,
	524431,
	524367,
	590078,
	459008,
	524368,
	524304,
	524568,
	459024,
	524400,
	524336,
	590017,
	459016,
	524384,
	524320,
	589985,
	524288,
	524416,
	524352,
	590049,
	459012,
	524376,
	524312,
	589969,
	459028,
	524408,
	524344,
	590033,
	459020,
	524392,
	524328,
	590001,
	524296,
	524424,
	524360,
	590065,
	459010,
	524372,
	524308,
	524572,
	459026,
	524404,
	524340,
	590025,
	459018,
	524388,
	524324,
	589993,
	524292,
	524420,
	524356,
	590057,
	459014,
	524380,
	524316,
	589977,
	459030,
	524412,
	524348,
	590041,
	459022,
	524396,
	524332,
	590009,
	524300,
	524428,
	524364,
	590073,
	459009,
	524370,
	524306,
	524570,
	459025,
	524402,
	524338,
	590021,
	459017,
	524386,
	524322,
	589989,
	524290,
	524418,
	524354,
	590053,
	459013,
	524378,
	524314,
	589973,
	459029,
	524410,
	524346,
	590037,
	459021,
	524394,
	524330,
	590005,
	524298,
	524426,
	524362,
	590069,
	459011,
	524374,
	524310,
	524574,
	459027,
	524406,
	524342,
	590029,
	459019,
	524390,
	524326,
	589997,
	524294,
	524422,
	524358,
	590061,
	459015,
	524382,
	524318,
	589981,
	459031,
	524414,
	524350,
	590045,
	459023,
	524398,
	524334,
	590013,
	524302,
	524430,
	524366,
	590077,
	459008,
	524369,
	524305,
	524569,
	459024,
	524401,
	524337,
	590019,
	459016,
	524385,
	524321,
	589987,
	524289,
	524417,
	524353,
	590051,
	459012,
	524377,
	524313,
	589971,
	459028,
	524409,
	524345,
	590035,
	459020,
	524393,
	524329,
	590003,
	524297,
	524425,
	524361,
	590067,
	459010,
	524373,
	524309,
	524573,
	459026,
	524405,
	524341,
	590027,
	459018,
	524389,
	524325,
	589995,
	524293,
	524421,
	524357,
	590059,
	459014,
	524381,
	524317,
	589979,
	459030,
	524413,
	524349,
	590043,
	459022,
	524397,
	524333,
	590011,
	524301,
	524429,
	524365,
	590075,
	459009,
	524371,
	524307,
	524571,
	459025,
	524403,
	524339,
	590023,
	459017,
	524387,
	524323,
	589991,
	524291,
	524419,
	524355,
	590055,
	459013,
	524379,
	524315,
	589975,
	459029,
	524411,
	524347,
	590039,
	459021,
	524395,
	524331,
	590007,
	524299,
	524427,
	524363,
	590071,
	459011,
	524375,
	524311,
	524575,
	459027,
	524407,
	524343,
	590031,
	459019,
	524391,
	524327,
	589999,
	524295,
	524423,
	524359,
	590063,
	459015,
	524383,
	524319,
	589983,
	459031,
	524415,
	524351,
	590047,
	459023,
	524399,
	524335,
	590015,
	524303,
	524431,
	524367,
	590079
]), 9], hr = [new Int32Array([
	327680,
	327696,
	327688,
	327704,
	327684,
	327700,
	327692,
	327708,
	327682,
	327698,
	327690,
	327706,
	327686,
	327702,
	327694,
	0,
	327681,
	327697,
	327689,
	327705,
	327685,
	327701,
	327693,
	327709,
	327683,
	327699,
	327691,
	327707,
	327687,
	327703,
	327695,
	0
]), 5], gr = function(e) {
	function t(t, n) {
		var r = e.call(this, n) || this;
		r.stream = t;
		var i = t.getByte(), a = t.getByte();
		if (i === -1 || a === -1) throw Error("Invalid header in flate stream: " + i + ", " + a);
		if ((15 & i) != 8) throw Error("Unknown compression method in flate stream: " + i + ", " + a);
		if (((i << 8) + a) % 31 != 0) throw Error("Bad FCHECK in flate stream: " + i + ", " + a);
		if (32 & a) throw Error("FDICT bit set in flate stream: " + i + ", " + a);
		return r.codeSize = 0, r.codeBuf = 0, r;
	}
	return l(t, e), t.prototype.readBlock = function() {
		var e, t, n = this.stream, r = this.getBits(3);
		if (1 & r && (this.eof = !0), (r >>= 1) != 0) {
			var i, a;
			if (r === 1) i = mr, a = hr;
			else {
				if (r !== 2) throw Error("Unknown block type in flate stream");
				var o = this.getBits(5) + 257, s = this.getBits(5) + 1, c = this.getBits(4) + 4, l = new Uint8Array(dr.length), u = void 0;
				for (u = 0; u < c; ++u) l[dr[u]] = this.getBits(3);
				var d = this.generateHuffmanTable(l);
				t = 0, u = 0;
				for (var f = o + s, p = new Uint8Array(f), m = void 0, h = void 0, g = void 0; u < f;) {
					var _ = this.getCode(d);
					if (_ === 16) m = 2, h = 3, g = t;
					else if (_ === 17) m = 3, h = 3, g = t = 0;
					else {
						if (_ !== 18) {
							p[u++] = t = _;
							continue;
						}
						m = 7, h = 11, g = t = 0;
					}
					for (var v = this.getBits(m) + h; v-- > 0;) p[u++] = g;
				}
				i = this.generateHuffmanTable(p.subarray(0, o)), a = this.generateHuffmanTable(p.subarray(o, f));
			}
			for (var y = (e = this.buffer) ? e.length : 0, b = this.bufferLength;;) {
				var x = this.getCode(i);
				if (x < 256) b + 1 >= y && (y = (e = this.ensureBuffer(b + 1)).length), e[b++] = x;
				else {
					if (x === 256) return void (this.bufferLength = b);
					var S = (x = fr[x -= 257]) >> 16;
					S > 0 && (S = this.getBits(S)), t = (65535 & x) + S, x = this.getCode(a), (S = (x = pr[x]) >> 16) > 0 && (S = this.getBits(S));
					var C = (65535 & x) + S;
					b + t >= y && (y = (e = this.ensureBuffer(b + t)).length);
					for (var w = 0; w < t; ++w, ++b) e[b] = e[b - C];
				}
			}
		} else {
			var T = void 0;
			if ((T = n.getByte()) === -1) throw Error("Bad block header in flate stream");
			var E = T;
			if ((T = n.getByte()) === -1 || (E |= T << 8, (T = n.getByte()) === -1)) throw Error("Bad block header in flate stream");
			var D = T;
			if ((T = n.getByte()) === -1) throw Error("Bad block header in flate stream");
			if ((D |= T << 8) != (65535 & ~E) && (E !== 0 || D !== 0)) throw Error("Bad uncompressed block length in flate stream");
			this.codeBuf = 0, this.codeSize = 0;
			var O = this.bufferLength;
			e = this.ensureBuffer(O + E);
			var k = O + E;
			if (this.bufferLength = k, E === 0) n.peekByte() === -1 && (this.eof = !0);
			else for (var A = O; A < k; ++A) {
				if ((T = n.getByte()) === -1) {
					this.eof = !0;
					break;
				}
				e[A] = T;
			}
		}
	}, t.prototype.getBits = function(e) {
		for (var t, n = this.stream, r = this.codeSize, i = this.codeBuf; r < e;) {
			if ((t = n.getByte()) === -1) throw Error("Bad encoding in flate stream");
			i |= t << r, r += 8;
		}
		return t = i & (1 << e) - 1, this.codeBuf = i >> e, this.codeSize = r -= e, t;
	}, t.prototype.getCode = function(e) {
		for (var t, n = this.stream, r = e[0], i = e[1], a = this.codeSize, o = this.codeBuf; a < i && (t = n.getByte()) !== -1;) o |= t << a, a += 8;
		var s = r[o & (1 << i) - 1];
		typeof r == "number" && console.log("FLATE:", s);
		var c = s >> 16, l = 65535 & s;
		if (c < 1 || a < c) throw Error("Bad encoding in flate stream");
		return this.codeBuf = o >> c, this.codeSize = a - c, l;
	}, t.prototype.generateHuffmanTable = function(e) {
		for (var t = e.length, n = 0, r = 0; r < t; ++r) e[r] > n && (n = e[r]);
		for (var i = 1 << n, a = new Int32Array(i), o = 1, s = 0, c = 2; o <= n; ++o, s <<= 1, c <<= 1) for (var l = 0; l < t; ++l) if (e[l] === o) {
			var u = 0, d = s;
			for (r = 0; r < o; ++r) u = u << 1 | 1 & d, d >>= 1;
			for (r = u; r < i; r += c) a[r] = o << 16 | l;
			++s;
		}
		return [a, n];
	}, t;
}(sr), _r = function(e) {
	function t(t, n, r) {
		var i = e.call(this, n) || this;
		i.stream = t, i.cachedData = 0, i.bitsCached = 0;
		for (var a = 4096, o = {
			earlyChange: r,
			codeLength: 9,
			nextCode: 258,
			dictionaryValues: new Uint8Array(a),
			dictionaryLengths: new Uint16Array(a),
			dictionaryPrevCodes: new Uint16Array(a),
			currentSequence: new Uint8Array(a),
			currentSequenceLength: 0
		}, s = 0; s < 256; ++s) o.dictionaryValues[s] = s, o.dictionaryLengths[s] = 1;
		return i.lzwState = o, i;
	}
	return l(t, e), t.prototype.readBlock = function() {
		var e, t, n, r = 1024, i = this.lzwState;
		if (i) {
			var a = i.earlyChange, o = i.nextCode, s = i.dictionaryValues, c = i.dictionaryLengths, l = i.dictionaryPrevCodes, u = i.codeLength, d = i.prevCode, f = i.currentSequence, p = i.currentSequenceLength, m = 0, h = this.bufferLength, g = this.ensureBuffer(this.bufferLength + r);
			for (e = 0; e < 512; e++) {
				var _ = this.readBits(u), v = p > 0;
				if (!_ || _ < 256) f[0] = _, p = 1;
				else {
					if (!(_ >= 258)) {
						if (_ === 256) {
							u = 9, o = 258, p = 0;
							continue;
						}
						this.eof = !0, delete this.lzwState;
						break;
					}
					if (_ < o) for (t = (p = c[_]) - 1, n = _; t >= 0; t--) f[t] = s[n], n = l[n];
					else f[p++] = f[0];
				}
				if (v && (l[o] = d, c[o] = c[d] + 1, s[o] = f[0], u = ++o + a & o + a - 1 ? u : 0 | Math.min(Math.log(o + a) / .6931471805599453 + 1, 12)), d = _, r < (m += p)) {
					do
						r += 512;
					while (r < m);
					g = this.ensureBuffer(this.bufferLength + r);
				}
				for (t = 0; t < p; t++) g[h++] = f[t];
			}
			i.nextCode = o, i.codeLength = u, i.prevCode = d, i.currentSequenceLength = p, this.bufferLength = h;
		}
	}, t.prototype.readBits = function(e) {
		for (var t = this.bitsCached, n = this.cachedData; t < e;) {
			var r = this.stream.getByte();
			if (r === -1) return this.eof = !0, null;
			n = n << 8 | r, t += 8;
		}
		return this.bitsCached = t -= e, this.cachedData = n, n >>> t & (1 << e) - 1;
	}, t;
}(sr), vr = function(e) {
	function t(t, n) {
		var r = e.call(this, n) || this;
		return r.stream = t, r;
	}
	return l(t, e), t.prototype.readBlock = function() {
		var e = this.stream.getBytes(2);
		if (!e || e.length < 2 || e[0] === 128) this.eof = !0;
		else {
			var t, n = this.bufferLength, r = e[0];
			if (r < 128) {
				if ((t = this.ensureBuffer(n + r + 1))[n++] = e[1], r > 0) {
					var i = this.stream.getBytes(r);
					t.set(i, n), n += r;
				}
			} else {
				r = 257 - r;
				var a = e[1];
				t = this.ensureBuffer(n + r + 1);
				for (var o = 0; o < r; o++) t[n++] = a;
			}
			this.bufferLength = n;
		}
	}, t;
}(sr), yr = function(e, t, n) {
	if (t === V.of("FlateDecode")) return new gr(e);
	if (t === V.of("LZWDecode")) {
		var r = 1;
		if (n instanceof H) {
			var i = n.lookup(V.of("EarlyChange"));
			i instanceof z && (r = i.asNumber());
		}
		return new _r(e, void 0, r);
	}
	if (t === V.of("ASCII85Decode")) return new lr(e);
	if (t === V.of("ASCIIHexDecode")) return new ur(e);
	if (t === V.of("RunLengthDecode")) return new vr(e);
	throw new kt(t.asString());
}, br = function(e) {
	var t = e.dict, n = e.contents, r = new ar(n), i = t.lookup(V.of("Filter")), a = t.lookup(V.of("DecodeParms"));
	if (i instanceof V) r = yr(r, i, a);
	else if (i instanceof B) for (var o = 0, s = i.size(); o < s; o++) r = yr(r, i.lookup(o, V), a && a.lookupMaybe(o, H));
	else if (i) throw new Ot([V, B], i);
	return r;
}, xr = function() {
	function e(e, t, n) {
		this.page = e;
		var r = t ?? function(e) {
			var t = e.MediaBox();
			return {
				left: 0,
				bottom: 0,
				right: t.lookup(2, z).asNumber() - t.lookup(0, z).asNumber(),
				top: t.lookup(3, z).asNumber() - t.lookup(1, z).asNumber()
			};
		}(e);
		this.width = r.right - r.left, this.height = r.top - r.bottom, this.boundingBox = r, this.transformationMatrix = n ?? function(e) {
			return [
				1,
				0,
				0,
				1,
				-e.left,
				-e.bottom
			];
		}(r);
	}
	return e.for = function(t, n, r) {
		return d(this, void 0, void 0, function() {
			return f(this, function(i) {
				return [2, new e(t, n, r)];
			});
		});
	}, e.prototype.embedIntoContext = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n, r, i, a, o, s, c, l, u, d;
			return f(this, function(f) {
				if (n = this.page.normalizedEntries(), r = n.Contents, i = n.Resources, !r) throw new jt();
				return a = this.decodeContents(r), o = this.boundingBox, s = o.left, c = o.bottom, l = o.right, u = o.top, d = e.flateStream(a, {
					Type: "XObject",
					Subtype: "Form",
					FormType: 1,
					BBox: [
						s,
						c,
						l,
						u
					],
					Matrix: this.transformationMatrix,
					Resources: i
				}), t ? (e.assign(t, d), [2, t]) : [2, e.register(d)];
			});
		});
	}, e.prototype.decodeContents = function(e) {
		for (var t = Uint8Array.of(R.Newline), n = [], r = 0, i = e.size(); r < i; r++) {
			var a = e.lookup(r, mn), o = void 0;
			if (a instanceof hn) o = br(a).decode();
			else {
				if (!(a instanceof xn)) throw new Mt(a);
				o = a.getUnencodedContents();
			}
			n.push(o, t);
		}
		return ae.apply(void 0, n);
	}, e;
}(), Sr = function(e, t) {
	if (e !== void 0) return t[e];
};
(function(e) {
	e.UseNone = "UseNone", e.UseOutlines = "UseOutlines", e.UseThumbs = "UseThumbs", e.UseOC = "UseOC";
})($n ||= {}), function(e) {
	e.L2R = "L2R", e.R2L = "R2L";
}(er ||= {}), function(e) {
	e.None = "None", e.AppDefault = "AppDefault";
}(tr ||= {}), function(e) {
	e.Simplex = "Simplex", e.DuplexFlipShortEdge = "DuplexFlipShortEdge", e.DuplexFlipLongEdge = "DuplexFlipLongEdge";
}(nr ||= {});
var Cr, wr, Tr, Er, Dr = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.lookupBool = function(e) {
		var t = this.dict.lookup(V.of(e));
		if (t instanceof nn) return t;
	}, e.prototype.lookupName = function(e) {
		var t = this.dict.lookup(V.of(e));
		if (t instanceof V) return t;
	}, e.prototype.HideToolbar = function() {
		return this.lookupBool("HideToolbar");
	}, e.prototype.HideMenubar = function() {
		return this.lookupBool("HideMenubar");
	}, e.prototype.HideWindowUI = function() {
		return this.lookupBool("HideWindowUI");
	}, e.prototype.FitWindow = function() {
		return this.lookupBool("FitWindow");
	}, e.prototype.CenterWindow = function() {
		return this.lookupBool("CenterWindow");
	}, e.prototype.DisplayDocTitle = function() {
		return this.lookupBool("DisplayDocTitle");
	}, e.prototype.NonFullScreenPageMode = function() {
		return this.lookupName("NonFullScreenPageMode");
	}, e.prototype.Direction = function() {
		return this.lookupName("Direction");
	}, e.prototype.PrintScaling = function() {
		return this.lookupName("PrintScaling");
	}, e.prototype.Duplex = function() {
		return this.lookupName("Duplex");
	}, e.prototype.PickTrayByPDFSize = function() {
		return this.lookupBool("PickTrayByPDFSize");
	}, e.prototype.PrintPageRange = function() {
		var e = this.dict.lookup(V.of("PrintPageRange"));
		if (e instanceof B) return e;
	}, e.prototype.NumCopies = function() {
		var e = this.dict.lookup(V.of("NumCopies"));
		if (e instanceof z) return e;
	}, e.prototype.getHideToolbar = function() {
		var e;
		return (e = this.HideToolbar()?.asBoolean()) != null && e;
	}, e.prototype.getHideMenubar = function() {
		var e;
		return (e = this.HideMenubar()?.asBoolean()) != null && e;
	}, e.prototype.getHideWindowUI = function() {
		var e;
		return (e = this.HideWindowUI()?.asBoolean()) != null && e;
	}, e.prototype.getFitWindow = function() {
		var e;
		return (e = this.FitWindow()?.asBoolean()) != null && e;
	}, e.prototype.getCenterWindow = function() {
		var e;
		return (e = this.CenterWindow()?.asBoolean()) != null && e;
	}, e.prototype.getDisplayDocTitle = function() {
		var e;
		return (e = this.DisplayDocTitle()?.asBoolean()) != null && e;
	}, e.prototype.getNonFullScreenPageMode = function() {
		return Sr(this.NonFullScreenPageMode()?.decodeText(), $n) ?? $n.UseNone;
	}, e.prototype.getReadingDirection = function() {
		return Sr(this.Direction()?.decodeText(), er) ?? er.L2R;
	}, e.prototype.getPrintScaling = function() {
		return Sr(this.PrintScaling()?.decodeText(), tr) ?? tr.AppDefault;
	}, e.prototype.getDuplex = function() {
		return Sr(this.Duplex()?.decodeText(), nr);
	}, e.prototype.getPickTrayByPDFSize = function() {
		return this.PickTrayByPDFSize()?.asBoolean();
	}, e.prototype.getPrintPageRange = function() {
		var e = this.PrintPageRange();
		if (!e) return [];
		for (var t = [], n = 0; n < e.size(); n += 2) {
			var r = e.lookup(n, z).asNumber(), i = e.lookup(n + 1, z).asNumber();
			t.push({
				start: r,
				end: i
			});
		}
		return t;
	}, e.prototype.getNumCopies = function() {
		return this.NumCopies()?.asNumber() ?? 1;
	}, e.prototype.setHideToolbar = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("HideToolbar"), t);
	}, e.prototype.setHideMenubar = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("HideMenubar"), t);
	}, e.prototype.setHideWindowUI = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("HideWindowUI"), t);
	}, e.prototype.setFitWindow = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("FitWindow"), t);
	}, e.prototype.setCenterWindow = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("CenterWindow"), t);
	}, e.prototype.setDisplayDocTitle = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("DisplayDocTitle"), t);
	}, e.prototype.setNonFullScreenPageMode = function(e) {
		ft(e, "nonFullScreenPageMode", $n);
		var t = V.of(e);
		this.dict.set(V.of("NonFullScreenPageMode"), t);
	}, e.prototype.setReadingDirection = function(e) {
		ft(e, "readingDirection", er);
		var t = V.of(e);
		this.dict.set(V.of("Direction"), t);
	}, e.prototype.setPrintScaling = function(e) {
		ft(e, "printScaling", tr);
		var t = V.of(e);
		this.dict.set(V.of("PrintScaling"), t);
	}, e.prototype.setDuplex = function(e) {
		ft(e, "duplex", nr);
		var t = V.of(e);
		this.dict.set(V.of("Duplex"), t);
	}, e.prototype.setPickTrayByPDFSize = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("PickTrayByPDFSize"), t);
	}, e.prototype.setPrintPageRange = function(e) {
		Array.isArray(e) || (e = [e]);
		for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n].start), t.push(e[n].end);
		_t(t, "printPageRange", ["number"]);
		var i = this.dict.context.obj(t);
		this.dict.set(V.of("PrintPageRange"), i);
	}, e.prototype.setNumCopies = function(e) {
		vt(e, "numCopies", 1, Number.MAX_VALUE), function(e, t) {
			if (!Number.isInteger(e)) throw Error(ut(t) + " must be an integer, but was actually " + e);
		}(e, "numCopies");
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("NumCopies"), t);
	}, e.fromDict = function(t) {
		return new e(t);
	}, e.create = function(t) {
		return new e(t.obj({}));
	}, e;
}(), Or = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/, kr = function() {
	function e(e, t) {
		this.dict = e, this.ref = t;
	}
	return e.prototype.T = function() {
		return this.dict.lookupMaybe(V.of("T"), Vn, G);
	}, e.prototype.Ff = function() {
		var e = this.getInheritableAttribute(V.of("Ff"));
		return this.dict.context.lookupMaybe(e, z);
	}, e.prototype.V = function() {
		var e = this.getInheritableAttribute(V.of("V"));
		return this.dict.context.lookup(e);
	}, e.prototype.Kids = function() {
		return this.dict.lookupMaybe(V.of("Kids"), B);
	}, e.prototype.DA = function() {
		var e = this.dict.lookup(V.of("DA"));
		if (e instanceof Vn || e instanceof G) return e;
	}, e.prototype.setKids = function(e) {
		this.dict.set(V.of("Kids"), this.dict.context.obj(e));
	}, e.prototype.getParent = function() {
		var t = this.dict.get(V.of("Parent"));
		if (t instanceof vn) return new e(this.dict.lookup(V.of("Parent"), H), t);
	}, e.prototype.setParent = function(e) {
		e ? this.dict.set(V.of("Parent"), e) : this.dict.delete(V.of("Parent"));
	}, e.prototype.getFullyQualifiedName = function() {
		var e = this.getParent();
		return e ? e.getFullyQualifiedName() + "." + this.getPartialName() : this.getPartialName();
	}, e.prototype.getPartialName = function() {
		return this.T()?.decodeText();
	}, e.prototype.setPartialName = function(e) {
		e ? this.dict.set(V.of("T"), G.fromText(e)) : this.dict.delete(V.of("T"));
	}, e.prototype.setDefaultAppearance = function(e) {
		this.dict.set(V.of("DA"), Vn.of(e));
	}, e.prototype.getDefaultAppearance = function() {
		var e = this.DA();
		return e instanceof G ? e.decodeText() : e?.asString();
	}, e.prototype.setFontSize = function(e) {
		var t = this.getFullyQualifiedName() ?? "", n = this.getDefaultAppearance();
		if (!n) throw new Vt(t);
		var r = P(n, Or);
		if (!r.match) throw new Ht(t);
		var i = n.slice(0, r.pos - r.match[0].length), a = r.pos <= n.length ? n.slice(r.pos) : "", o = i + " /" + r.match[1] + " " + e + " Tf " + a;
		this.setDefaultAppearance(o);
	}, e.prototype.getFlags = function() {
		return this.Ff()?.asNumber() ?? 0;
	}, e.prototype.setFlags = function(e) {
		this.dict.set(V.of("Ff"), z.of(e));
	}, e.prototype.hasFlag = function(e) {
		return (this.getFlags() & e) !== 0;
	}, e.prototype.setFlag = function(e) {
		var t = this.getFlags();
		this.setFlags(t | e);
	}, e.prototype.clearFlag = function(e) {
		var t = this.getFlags();
		this.setFlags(t & ~e);
	}, e.prototype.setFlagTo = function(e, t) {
		t ? this.setFlag(e) : this.clearFlag(e);
	}, e.prototype.getInheritableAttribute = function(e) {
		var t;
		return this.ascend(function(n) {
			t ||= n.dict.get(e);
		}), t;
	}, e.prototype.ascend = function(e) {
		e(this);
		var t = this.getParent();
		t && t.ascend(e);
	}, e;
}(), Ar = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.W = function() {
		var e = this.dict.lookup(V.of("W"));
		if (e instanceof z) return e;
	}, e.prototype.getWidth = function() {
		return this.W()?.asNumber() ?? 1;
	}, e.prototype.setWidth = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("W"), t);
	}, e.fromDict = function(t) {
		return new e(t);
	}, e;
}(), jr = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.Rect = function() {
		return this.dict.lookup(V.of("Rect"), B);
	}, e.prototype.AP = function() {
		return this.dict.lookupMaybe(V.of("AP"), H);
	}, e.prototype.F = function() {
		var e = this.dict.lookup(V.of("F"));
		return this.dict.context.lookupMaybe(e, z);
	}, e.prototype.getRectangle = function() {
		return this.Rect()?.asRectangle() ?? {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}, e.prototype.setRectangle = function(e) {
		var t = e.x, n = e.y, r = e.width, i = e.height, a = this.dict.context.obj([
			t,
			n,
			t + r,
			n + i
		]);
		this.dict.set(V.of("Rect"), a);
	}, e.prototype.getAppearanceState = function() {
		var e = this.dict.lookup(V.of("AS"));
		if (e instanceof V) return e;
	}, e.prototype.setAppearanceState = function(e) {
		this.dict.set(V.of("AS"), e);
	}, e.prototype.setAppearances = function(e) {
		this.dict.set(V.of("AP"), e);
	}, e.prototype.ensureAP = function() {
		var e = this.AP();
		return e || (e = this.dict.context.obj({}), this.dict.set(V.of("AP"), e)), e;
	}, e.prototype.getNormalAppearance = function() {
		var e = this.ensureAP().get(V.of("N"));
		if (e instanceof vn || e instanceof H) return e;
		throw Error("Unexpected N type: " + e?.constructor.name);
	}, e.prototype.setNormalAppearance = function(e) {
		this.ensureAP().set(V.of("N"), e);
	}, e.prototype.setRolloverAppearance = function(e) {
		this.ensureAP().set(V.of("R"), e);
	}, e.prototype.setDownAppearance = function(e) {
		this.ensureAP().set(V.of("D"), e);
	}, e.prototype.removeRolloverAppearance = function() {
		this.AP()?.delete(V.of("R"));
	}, e.prototype.removeDownAppearance = function() {
		this.AP()?.delete(V.of("D"));
	}, e.prototype.getAppearances = function() {
		var e = this.AP();
		if (e) return {
			normal: e.lookup(V.of("N"), H, mn),
			rollover: e.lookupMaybe(V.of("R"), H, mn),
			down: e.lookupMaybe(V.of("D"), H, mn)
		};
	}, e.prototype.getFlags = function() {
		return this.F()?.asNumber() ?? 0;
	}, e.prototype.setFlags = function(e) {
		this.dict.set(V.of("F"), z.of(e));
	}, e.prototype.hasFlag = function(e) {
		return (this.getFlags() & e) !== 0;
	}, e.prototype.setFlag = function(e) {
		var t = this.getFlags();
		this.setFlags(t | e);
	}, e.prototype.clearFlag = function(e) {
		var t = this.getFlags();
		this.setFlags(t & ~e);
	}, e.prototype.setFlagTo = function(e, t) {
		t ? this.setFlag(e) : this.clearFlag(e);
	}, e.fromDict = function(t) {
		return new e(t);
	}, e;
}(), Mr = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.R = function() {
		var e = this.dict.lookup(V.of("R"));
		if (e instanceof z) return e;
	}, e.prototype.BC = function() {
		var e = this.dict.lookup(V.of("BC"));
		if (e instanceof B) return e;
	}, e.prototype.BG = function() {
		var e = this.dict.lookup(V.of("BG"));
		if (e instanceof B) return e;
	}, e.prototype.CA = function() {
		var e = this.dict.lookup(V.of("CA"));
		if (e instanceof G || e instanceof Vn) return e;
	}, e.prototype.RC = function() {
		var e = this.dict.lookup(V.of("RC"));
		if (e instanceof G || e instanceof Vn) return e;
	}, e.prototype.AC = function() {
		var e = this.dict.lookup(V.of("AC"));
		if (e instanceof G || e instanceof Vn) return e;
	}, e.prototype.getRotation = function() {
		return this.R()?.asNumber();
	}, e.prototype.getBorderColor = function() {
		var e = this.BC();
		if (e) {
			for (var t = [], n = 0, r = e?.size(); n < r; n++) {
				var i = e.get(n);
				i instanceof z && t.push(i.asNumber());
			}
			return t;
		}
	}, e.prototype.getBackgroundColor = function() {
		var e = this.BG();
		if (e) {
			for (var t = [], n = 0, r = e?.size(); n < r; n++) {
				var i = e.get(n);
				i instanceof z && t.push(i.asNumber());
			}
			return t;
		}
	}, e.prototype.getCaptions = function() {
		var e = this.CA(), t = this.RC(), n = this.AC();
		return {
			normal: e?.decodeText(),
			rollover: t?.decodeText(),
			down: n?.decodeText()
		};
	}, e.prototype.setRotation = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("R"), t);
	}, e.prototype.setBorderColor = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("BC"), t);
	}, e.prototype.setBackgroundColor = function(e) {
		var t = this.dict.context.obj(e);
		this.dict.set(V.of("BG"), t);
	}, e.prototype.setCaptions = function(e) {
		var t = G.fromText(e.normal);
		if (this.dict.set(V.of("CA"), t), e.rollover) {
			var n = G.fromText(e.rollover);
			this.dict.set(V.of("RC"), n);
		} else this.dict.delete(V.of("RC"));
		if (e.down) {
			var r = G.fromText(e.down);
			this.dict.set(V.of("AC"), r);
		} else this.dict.delete(V.of("AC"));
	}, e.fromDict = function(t) {
		return new e(t);
	}, e;
}(), Nr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.MK = function() {
		var e = this.dict.lookup(V.of("MK"));
		if (e instanceof H) return e;
	}, t.prototype.BS = function() {
		var e = this.dict.lookup(V.of("BS"));
		if (e instanceof H) return e;
	}, t.prototype.DA = function() {
		var e = this.dict.lookup(V.of("DA"));
		if (e instanceof Vn || e instanceof G) return e;
	}, t.prototype.P = function() {
		var e = this.dict.get(V.of("P"));
		if (e instanceof vn) return e;
	}, t.prototype.setP = function(e) {
		this.dict.set(V.of("P"), e);
	}, t.prototype.setDefaultAppearance = function(e) {
		this.dict.set(V.of("DA"), Vn.of(e));
	}, t.prototype.getDefaultAppearance = function() {
		var e = this.DA();
		return e instanceof G ? e.decodeText() : e?.asString();
	}, t.prototype.getAppearanceCharacteristics = function() {
		var e = this.MK();
		if (e) return Mr.fromDict(e);
	}, t.prototype.getOrCreateAppearanceCharacteristics = function() {
		var e = this.MK();
		if (e) return Mr.fromDict(e);
		var t = Mr.fromDict(this.dict.context.obj({}));
		return this.dict.set(V.of("MK"), t.dict), t;
	}, t.prototype.getBorderStyle = function() {
		var e = this.BS();
		if (e) return Ar.fromDict(e);
	}, t.prototype.getOrCreateBorderStyle = function() {
		var e = this.BS();
		if (e) return Ar.fromDict(e);
		var t = Ar.fromDict(this.dict.context.obj({}));
		return this.dict.set(V.of("BS"), t.dict), t;
	}, t.prototype.getOnValue = function() {
		var e = this.getAppearances()?.normal;
		if (e instanceof H) for (var t = e.keys(), n = 0, r = t.length; n < r; n++) {
			var i = t[n];
			if (i !== V.of("Off")) return i;
		}
	}, t.fromDict = function(e) {
		return new t(e);
	}, t.create = function(e, n) {
		return new t(e.obj({
			Type: "Annot",
			Subtype: "Widget",
			Rect: [
				0,
				0,
				0,
				0
			],
			Parent: n
		}));
	}, t;
}(jr), Pr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.FT = function() {
		var e = this.getInheritableAttribute(V.of("FT"));
		return this.dict.context.lookup(e, V);
	}, t.prototype.getWidgets = function() {
		var e = this.Kids();
		if (!e) return [Nr.fromDict(this.dict)];
		for (var t = Array(e.size()), n = 0, r = e.size(); n < r; n++) {
			var i = e.lookup(n, H);
			t[n] = Nr.fromDict(i);
		}
		return t;
	}, t.prototype.addWidget = function(e) {
		this.normalizedEntries().Kids.push(e);
	}, t.prototype.removeWidget = function(e) {
		var t = this.Kids();
		if (t) {
			if (e < 0 || e > t.size()) throw new Rt(e, 0, t.size());
			t.remove(e);
		} else {
			if (e !== 0) throw new Rt(e, 0, 0);
			this.setKids([]);
		}
	}, t.prototype.normalizedEntries = function() {
		var e = this.Kids();
		return e || (e = this.dict.context.obj([this.ref]), this.dict.set(V.of("Kids"), e)), { Kids: e };
	}, t.fromDict = function(e, n) {
		return new t(e, n);
	}, t;
}(kr), Fr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.Opt = function() {
		return this.dict.lookupMaybe(V.of("Opt"), Vn, G, B);
	}, t.prototype.setOpt = function(e) {
		this.dict.set(V.of("Opt"), this.dict.context.obj(e));
	}, t.prototype.getExportValues = function() {
		var e = this.Opt();
		if (e) {
			if (e instanceof Vn || e instanceof G) return [e];
			for (var t = [], n = 0, r = e.size(); n < r; n++) {
				var i = e.lookup(n);
				(i instanceof Vn || i instanceof G) && t.push(i);
			}
			return t;
		}
	}, t.prototype.removeExportValue = function(e) {
		var t = this.Opt();
		if (t) {
			if (t instanceof Vn || t instanceof G) {
				if (e !== 0) throw new Rt(e, 0, 0);
				this.setOpt([]);
			} else {
				if (e < 0 || e > t.size()) throw new Rt(e, 0, t.size());
				t.remove(e);
			}
		}
	}, t.prototype.normalizeExportValues = function() {
		for (var e = this.getExportValues() ?? [], t = [], n = this.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r], o = e[r] ?? G.fromText(a.getOnValue()?.decodeText() ?? "");
			t.push(o);
		}
		this.setOpt(t);
	}, t.prototype.addOpt = function(e, t) {
		this.normalizeExportValues();
		var n, r = e.decodeText();
		if (t) for (var i = this.getExportValues() ?? [], a = 0, o = i.length; a < o; a++) i[a].decodeText() === r && (n = a);
		var s = this.Opt();
		return s.push(e), n ?? s.size() - 1;
	}, t.prototype.addWidgetWithOpt = function(e, t, n) {
		var r = this.addOpt(t, n), i = V.of(String(r));
		return this.addWidget(e), i;
	}, t;
}(Pr), Ir = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.setValue = function(e) {
		if (e !== (this.getOnValue() ?? V.of("Yes")) && e !== V.of("Off")) throw new zt();
		this.dict.set(V.of("V"), e);
		for (var t = this.getWidgets(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i.getOnValue() === e ? e : V.of("Off");
			i.setAppearanceState(a);
		}
	}, t.prototype.getValue = function() {
		var e = this.V();
		return e instanceof V ? e : V.of("Off");
	}, t.prototype.getOnValue = function() {
		return this.getWidgets()[0]?.getOnValue();
	}, t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Btn",
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Fr), Lr = function(e) {
	return 1 << e;
};
(function(e) {
	e[e.ReadOnly = Lr(0)] = "ReadOnly", e[e.Required = Lr(1)] = "Required", e[e.NoExport = Lr(2)] = "NoExport";
})(Cr ||= {}), function(e) {
	e[e.NoToggleToOff = Lr(14)] = "NoToggleToOff", e[e.Radio = Lr(15)] = "Radio", e[e.PushButton = Lr(16)] = "PushButton", e[e.RadiosInUnison = Lr(25)] = "RadiosInUnison";
}(wr ||= {}), function(e) {
	e[e.Multiline = Lr(12)] = "Multiline", e[e.Password = Lr(13)] = "Password", e[e.FileSelect = Lr(20)] = "FileSelect", e[e.DoNotSpellCheck = Lr(22)] = "DoNotSpellCheck", e[e.DoNotScroll = Lr(23)] = "DoNotScroll", e[e.Comb = Lr(24)] = "Comb", e[e.RichText = Lr(25)] = "RichText";
}(Tr ||= {}), function(e) {
	e[e.Combo = Lr(17)] = "Combo", e[e.Edit = Lr(18)] = "Edit", e[e.Sort = Lr(19)] = "Sort", e[e.MultiSelect = Lr(21)] = "MultiSelect", e[e.DoNotSpellCheck = Lr(22)] = "DoNotSpellCheck", e[e.CommitOnSelChange = Lr(26)] = "CommitOnSelChange";
}(Er ||= {});
var Rr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.setValues = function(e) {
		if (this.hasFlag(Er.Combo) && !this.hasFlag(Er.Edit) && !this.valuesAreValid(e)) throw new zt();
		if (e.length === 0 && this.dict.delete(V.of("V")), e.length === 1 && this.dict.set(V.of("V"), e[0]), e.length > 1) {
			if (!this.hasFlag(Er.MultiSelect)) throw new Bt();
			this.dict.set(V.of("V"), this.dict.context.obj(e));
		}
		this.updateSelectedIndices(e);
	}, t.prototype.valuesAreValid = function(e) {
		for (var t = this.getOptions(), n = function(n, r) {
			var i = e[n].decodeText();
			if (!t.find(function(e) {
				return i === (e.display || e.value).decodeText();
			})) return { value: !1 };
		}, r = 0, i = e.length; r < i; r++) {
			var a = n(r);
			if (typeof a == "object") return a.value;
		}
		return !0;
	}, t.prototype.updateSelectedIndices = function(e) {
		if (e.length > 1) {
			for (var t = Array(e.length), n = this.getOptions(), r = function(r, i) {
				var a = e[r].decodeText();
				t[r] = n.findIndex(function(e) {
					return a === (e.display || e.value).decodeText();
				});
			}, i = 0, a = e.length; i < a; i++) r(i);
			this.dict.set(V.of("I"), this.dict.context.obj(t.sort()));
		} else this.dict.delete(V.of("I"));
	}, t.prototype.getValues = function() {
		var e = this.V();
		if (e instanceof Vn || e instanceof G) return [e];
		if (e instanceof B) {
			for (var t = [], n = 0, r = e.size(); n < r; n++) {
				var i = e.lookup(n);
				(i instanceof Vn || i instanceof G) && t.push(i);
			}
			return t;
		}
		return [];
	}, t.prototype.Opt = function() {
		return this.dict.lookupMaybe(V.of("Opt"), Vn, G, B);
	}, t.prototype.setOptions = function(e) {
		for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) {
			var i = e[n], a = i.value, o = i.display;
			t[n] = this.dict.context.obj([a, o || a]);
		}
		this.dict.set(V.of("Opt"), this.dict.context.obj(t));
	}, t.prototype.getOptions = function() {
		var e = this.Opt();
		if (e instanceof Vn || e instanceof G) return [{
			value: e,
			display: e
		}];
		if (e instanceof B) {
			for (var t = [], n = 0, r = e.size(); n < r; n++) {
				var i = e.lookup(n);
				if ((i instanceof Vn || i instanceof G) && t.push({
					value: i,
					display: i
				}), i instanceof B && i.size() > 0) {
					var a = i.lookup(0, Vn, G), o = i.lookupMaybe(1, Vn, G);
					t.push({
						value: a,
						display: o || a
					});
				}
			}
			return t;
		}
		return [];
	}, t;
}(Pr), zr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Ch",
			Ff: Er.Combo,
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Rr), Br = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.addField = function(e) {
		this.normalizedEntries().Kids?.push(e);
	}, t.prototype.normalizedEntries = function() {
		var e = this.Kids();
		return e || (e = this.dict.context.obj([]), this.dict.set(V.of("Kids"), e)), { Kids: e };
	}, t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({});
		return new t(n, e.register(n));
	}, t;
}(kr), Vr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.fromDict = function(e, n) {
		return new t(e, n);
	}, t;
}(Pr), Hr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.MaxLen = function() {
		var e = this.dict.lookup(V.of("MaxLen"));
		if (e instanceof z) return e;
	}, t.prototype.Q = function() {
		var e = this.dict.lookup(V.of("Q"));
		if (e instanceof z) return e;
	}, t.prototype.setMaxLength = function(e) {
		this.dict.set(V.of("MaxLen"), z.of(e));
	}, t.prototype.removeMaxLength = function() {
		this.dict.delete(V.of("MaxLen"));
	}, t.prototype.getMaxLength = function() {
		return this.MaxLen()?.asNumber();
	}, t.prototype.setQuadding = function(e) {
		this.dict.set(V.of("Q"), z.of(e));
	}, t.prototype.getQuadding = function() {
		return this.Q()?.asNumber();
	}, t.prototype.setValue = function(e) {
		this.dict.set(V.of("V"), e);
	}, t.prototype.removeValue = function() {
		this.dict.delete(V.of("V"));
	}, t.prototype.getValue = function() {
		var e = this.V();
		if (e instanceof Vn || e instanceof G) return e;
	}, t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Tx",
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Pr), Ur = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Btn",
			Ff: wr.PushButton,
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Fr), Wr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.setValue = function(e) {
		if (!this.getOnValues().includes(e) && e !== V.of("Off")) throw new zt();
		this.dict.set(V.of("V"), e);
		for (var t = this.getWidgets(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i.getOnValue() === e ? e : V.of("Off");
			i.setAppearanceState(a);
		}
	}, t.prototype.getValue = function() {
		var e = this.V();
		return e instanceof V ? e : V.of("Off");
	}, t.prototype.getOnValues = function() {
		for (var e = this.getWidgets(), t = [], n = 0, r = e.length; n < r; n++) {
			var i = e[n].getOnValue();
			i && t.push(i);
		}
		return t;
	}, t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Btn",
			Ff: wr.Radio,
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Fr), Gr = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.fromDict = function(e, n) {
		return new t(e, n);
	}, t.create = function(e) {
		var n = e.obj({
			FT: "Ch",
			Kids: []
		});
		return new t(n, e.register(n));
	}, t;
}(Rr), Kr = function(e) {
	if (!e) return [];
	for (var t = [], n = 0, r = e.size(); n < r; n++) {
		var i = e.get(n), a = e.lookup(n);
		i instanceof vn && a instanceof H && t.push([qr(a, i), i]);
	}
	return t;
}, qr = function(e, t) {
	return Jr(e) ? Br.fromDict(e, t) : Yr(e, t);
}, Jr = function(e) {
	var t = e.lookup(V.of("Kids"));
	if (t instanceof B) for (var n = 0, r = t.size(); n < r; n++) {
		var i = t.lookup(n);
		if (i instanceof H && i.has(V.of("T"))) return !0;
	}
	return !1;
}, Yr = function(e, t) {
	var n = $r(e, V.of("FT")), r = e.context.lookup(n, V);
	return r === V.of("Btn") ? Xr(e, t) : r === V.of("Ch") ? Zr(e, t) : r === V.of("Tx") ? Hr.fromDict(e, t) : r === V.of("Sig") ? Vr.fromDict(e, t) : Pr.fromDict(e, t);
}, Xr = function(e, t) {
	var n = $r(e, V.of("Ff")), r = e.context.lookupMaybe(n, z)?.asNumber() ?? 0;
	return Qr(r, wr.PushButton) ? Ur.fromDict(e, t) : Qr(r, wr.Radio) ? Wr.fromDict(e, t) : Ir.fromDict(e, t);
}, Zr = function(e, t) {
	var n = $r(e, V.of("Ff"));
	return Qr(e.context.lookupMaybe(n, z)?.asNumber() ?? 0, Er.Combo) ? zr.fromDict(e, t) : Gr.fromDict(e, t);
}, Qr = function(e, t) {
	return (e & t) !== 0;
}, $r = function(e, t) {
	var n;
	return ei(e, function(e) {
		n ||= e.get(t);
	}), n;
}, ei = function(e, t) {
	t(e);
	var n = e.lookupMaybe(V.of("Parent"), H);
	n && ei(n, t);
}, ti = function() {
	function e(e) {
		this.dict = e;
	}
	return e.prototype.Fields = function() {
		var e = this.dict.lookup(V.of("Fields"));
		if (e instanceof B) return e;
	}, e.prototype.getFields = function() {
		for (var e = this.normalizedEntries().Fields, t = Array(e.size()), n = 0, r = e.size(); n < r; n++) {
			var i = e.get(n), a = e.lookup(n, H);
			t[n] = [qr(a, i), i];
		}
		return t;
	}, e.prototype.getAllFields = function() {
		var e = [], t = function(n) {
			if (n) for (var r = 0, i = n.length; r < i; r++) {
				var a = n[r];
				e.push(a);
				var o = a[0];
				o instanceof Br && t(Kr(o.Kids()));
			}
		};
		return t(this.getFields()), e;
	}, e.prototype.addField = function(e) {
		this.normalizedEntries().Fields?.push(e);
	}, e.prototype.removeField = function(e) {
		var t = e.getParent(), n = t === void 0 ? this.normalizedEntries().Fields : t.Kids(), r = n?.indexOf(e.ref);
		if (n === void 0 || r === void 0) throw Error("Tried to remove inexistent field " + e.getFullyQualifiedName());
		n.remove(r), t !== void 0 && n.size() === 0 && this.removeField(t);
	}, e.prototype.normalizedEntries = function() {
		var e = this.Fields();
		return e || (e = this.dict.context.obj([]), this.dict.set(V.of("Fields"), e)), { Fields: e };
	}, e.fromDict = function(t) {
		return new e(t);
	}, e.create = function(t) {
		return new e(t.obj({ Fields: [] }));
	}, e;
}(), ni = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.Pages = function() {
		return this.lookup(V.of("Pages"), H);
	}, t.prototype.AcroForm = function() {
		return this.lookupMaybe(V.of("AcroForm"), H);
	}, t.prototype.getAcroForm = function() {
		var e = this.AcroForm();
		if (e) return ti.fromDict(e);
	}, t.prototype.getOrCreateAcroForm = function() {
		var e = this.getAcroForm();
		if (!e) {
			e = ti.create(this.context);
			var t = this.context.register(e.dict);
			this.set(V.of("AcroForm"), t);
		}
		return e;
	}, t.prototype.ViewerPreferences = function() {
		return this.lookupMaybe(V.of("ViewerPreferences"), H);
	}, t.prototype.getViewerPreferences = function() {
		var e = this.ViewerPreferences();
		if (e) return Dr.fromDict(e);
	}, t.prototype.getOrCreateViewerPreferences = function() {
		var e = this.getViewerPreferences();
		if (!e) {
			e = Dr.create(this.context);
			var t = this.context.register(e.dict);
			this.set(V.of("ViewerPreferences"), t);
		}
		return e;
	}, t.prototype.insertLeafNode = function(e, t) {
		var n = this.get(V.of("Pages"));
		return this.Pages().insertLeafNode(e, t) || n;
	}, t.prototype.removeLeafNode = function(e) {
		this.Pages().removeLeafNode(e);
	}, t.withContextAndPages = function(e, n) {
		var r = /* @__PURE__ */ new Map();
		return r.set(V.of("Type"), V.of("Catalog")), r.set(V.of("Pages"), n), new t(r, e);
	}, t.fromMapWithContext = function(e, n) {
		return new t(e, n);
	}, t;
}(H), ri = function(e) {
	function t() {
		return e !== null && e.apply(this, arguments) || this;
	}
	return l(t, e), t.prototype.Parent = function() {
		return this.lookup(V.of("Parent"));
	}, t.prototype.Kids = function() {
		return this.lookup(V.of("Kids"), B);
	}, t.prototype.Count = function() {
		return this.lookup(V.of("Count"), z);
	}, t.prototype.pushTreeNode = function(e) {
		this.Kids().push(e);
	}, t.prototype.pushLeafNode = function(e) {
		var t = this.Kids();
		this.insertLeafKid(t.size(), e);
	}, t.prototype.insertLeafNode = function(e, n) {
		var r = this.Kids(), i = this.Count().asNumber();
		if (n > i) throw new It(n, i);
		for (var a = n, o = 0, s = r.size(); o < s; o++) {
			if (a === 0) return void this.insertLeafKid(o, e);
			var c = r.get(o), l = this.context.lookup(c);
			if (l instanceof t) {
				if (l.Count().asNumber() > a) return l.insertLeafNode(e, a) || c;
				a -= l.Count().asNumber();
			}
			l instanceof Tn && --a;
		}
		if (a !== 0) throw new Lt(n, "insertLeafNode");
		this.insertLeafKid(r.size(), e);
	}, t.prototype.removeLeafNode = function(e, n) {
		n === void 0 && (n = !0);
		var r = this.Kids(), i = this.Count().asNumber();
		if (e >= i) throw new It(e, i);
		for (var a = e, o = 0, s = r.size(); o < s; o++) {
			var c = r.get(o), l = this.context.lookup(c);
			if (l instanceof t) {
				if (l.Count().asNumber() > a) return l.removeLeafNode(a, n), void (n && l.Kids().size() === 0 && r.remove(o));
				a -= l.Count().asNumber();
			}
			if (l instanceof Tn) {
				if (a === 0) return void this.removeKid(o);
				--a;
			}
		}
		throw new Lt(e, "removeLeafNode");
	}, t.prototype.ascend = function(e) {
		e(this);
		var t = this.Parent();
		t && t.ascend(e);
	}, t.prototype.traverse = function(e) {
		for (var n = this.Kids(), r = 0, i = n.size(); r < i; r++) {
			var a = n.get(r), o = this.context.lookup(a);
			o instanceof t && o.traverse(e), e(o, a);
		}
	}, t.prototype.insertLeafKid = function(e, t) {
		var n = this.Kids();
		this.ascend(function(e) {
			var t = e.Count().asNumber() + 1;
			e.set(V.of("Count"), z.of(t));
		}), n.insert(e, t);
	}, t.prototype.removeKid = function(e) {
		var t = this.Kids();
		t.lookup(e) instanceof Tn && this.ascend(function(e) {
			var t = e.Count().asNumber() - 1;
			e.set(V.of("Count"), z.of(t));
		}), t.remove(e);
	}, t.withContext = function(e, n) {
		var r = /* @__PURE__ */ new Map();
		return r.set(V.of("Type"), V.of("Pages")), r.set(V.of("Kids"), e.obj([])), r.set(V.of("Count"), e.obj(0)), n && r.set(V.of("Parent"), n), new t(r, e);
	}, t.fromMapWithContext = function(e, n) {
		return new t(e, n);
	}, t;
}(H), ii = /* @__PURE__ */ new Uint8Array(256);
ii[R.Zero] = 1, ii[R.One] = 1, ii[R.Two] = 1, ii[R.Three] = 1, ii[R.Four] = 1, ii[R.Five] = 1, ii[R.Six] = 1, ii[R.Seven] = 1, ii[R.Eight] = 1, ii[R.Nine] = 1;
var ai = /* @__PURE__ */ new Uint8Array(256);
ai[R.Period] = 1, ai[R.Plus] = 1, ai[R.Minus] = 1;
for (var oi = /* @__PURE__ */ new Uint8Array(256), si = 0; si < 256; si++) oi[si] = ii[si] || ai[si] ? 1 : 0;
var ci, li = R.Newline, ui = R.CarriageReturn, di = function() {
	function e(e, t) {
		t === void 0 && (t = !1), this.bytes = e, this.capNumbers = t;
	}
	return e.prototype.parseRawInt = function() {
		for (var e = ""; !this.bytes.done() && ii[this.bytes.peek()];) e += w(this.bytes.next());
		var t = Number(e);
		if (!e || !isFinite(t)) throw new Ut(this.bytes.position(), e);
		return t;
	}, e.prototype.parseRawNumber = function() {
		for (var e = ""; !this.bytes.done();) {
			var t = this.bytes.peek();
			if (!oi[t] || (e += w(this.bytes.next()), t === R.Period)) break;
		}
		for (; !this.bytes.done() && (t = this.bytes.peek(), ii[t]);) e += w(this.bytes.next());
		var n = Number(e);
		if (!e || !isFinite(n)) throw new Ut(this.bytes.position(), e);
		if (n > 2 ** 53 - 1) {
			if (this.capNumbers) {
				var r = "Parsed number that is too large for some PDF readers: " + e + ", using Number.MAX_SAFE_INTEGER instead.";
				return console.warn(r), 2 ** 53 - 1;
			}
			r = "Parsed number that is too large for some PDF readers: " + e + ", not capping.", console.warn(r);
		}
		return n;
	}, e.prototype.skipWhitespace = function() {
		for (; !this.bytes.done() && an[this.bytes.peek()];) this.bytes.next();
	}, e.prototype.skipLine = function() {
		for (; !this.bytes.done();) {
			var e = this.bytes.peek();
			if (e === li || e === ui) return;
			this.bytes.next();
		}
	}, e.prototype.skipComment = function() {
		if (this.bytes.peek() !== R.Percent) return !1;
		for (; !this.bytes.done();) {
			var e = this.bytes.peek();
			if (e === li || e === ui) return !0;
			this.bytes.next();
		}
		return !0;
	}, e.prototype.skipWhitespaceAndComments = function() {
		for (this.skipWhitespace(); this.skipComment();) this.skipWhitespace();
	}, e.prototype.matchKeyword = function(e) {
		for (var t = this.bytes.offset(), n = 0, r = e.length; n < r; n++) if (this.bytes.done() || this.bytes.next() !== e[n]) return this.bytes.moveTo(t), !1;
		return !0;
	}, e;
}(), fi = function() {
	function e(e) {
		this.idx = 0, this.line = 0, this.column = 0, this.bytes = e, this.length = this.bytes.length;
	}
	return e.prototype.moveTo = function(e) {
		this.idx = e;
	}, e.prototype.next = function() {
		var e = this.bytes[this.idx++];
		return e === R.Newline ? (this.line += 1, this.column = 0) : this.column += 1, e;
	}, e.prototype.assertNext = function(e) {
		if (this.peek() !== e) throw new Gt(this.position(), e, this.peek());
		return this.next();
	}, e.prototype.peek = function() {
		return this.bytes[this.idx];
	}, e.prototype.peekAhead = function(e) {
		return this.bytes[this.idx + e];
	}, e.prototype.peekAt = function(e) {
		return this.bytes[e];
	}, e.prototype.done = function() {
		return this.idx >= this.length;
	}, e.prototype.offset = function() {
		return this.idx;
	}, e.prototype.slice = function(e, t) {
		return this.bytes.slice(e, t);
	}, e.prototype.position = function() {
		return {
			line: this.line,
			column: this.column,
			offset: this.idx
		};
	}, e.of = function(t) {
		return new e(t);
	}, e.fromPDFRawStream = function(t) {
		return e.of(br(t).decode());
	}, e;
}(), pi = R.Space, mi = R.CarriageReturn, hi = R.Newline, gi = [
	R.s,
	R.t,
	R.r,
	R.e,
	R.a,
	R.m
], _i = [
	R.e,
	R.n,
	R.d,
	R.s,
	R.t,
	R.r,
	R.e,
	R.a,
	R.m
], vi = {
	header: [
		R.Percent,
		R.P,
		R.D,
		R.F,
		R.Dash
	],
	eof: [
		R.Percent,
		R.Percent,
		R.E,
		R.O,
		R.F
	],
	obj: [
		R.o,
		R.b,
		R.j
	],
	endobj: [
		R.e,
		R.n,
		R.d,
		R.o,
		R.b,
		R.j
	],
	xref: [
		R.x,
		R.r,
		R.e,
		R.f
	],
	trailer: [
		R.t,
		R.r,
		R.a,
		R.i,
		R.l,
		R.e,
		R.r
	],
	startxref: [
		R.s,
		R.t,
		R.a,
		R.r,
		R.t,
		R.x,
		R.r,
		R.e,
		R.f
	],
	true: [
		R.t,
		R.r,
		R.u,
		R.e
	],
	false: [
		R.f,
		R.a,
		R.l,
		R.s,
		R.e
	],
	null: [
		R.n,
		R.u,
		R.l,
		R.l
	],
	stream: gi,
	streamEOF1: p(gi, [
		pi,
		mi,
		hi
	]),
	streamEOF2: p(gi, [mi, hi]),
	streamEOF3: p(gi, [mi]),
	streamEOF4: p(gi, [hi]),
	endstream: _i,
	EOF1endstream: p([mi, hi], _i),
	EOF2endstream: p([mi], _i),
	EOF3endstream: p([hi], _i)
}, yi = function(e) {
	function t(t, n, r) {
		r === void 0 && (r = !1);
		var i = e.call(this, t, r) || this;
		return i.context = n, i;
	}
	return l(t, e), t.prototype.parseObject = function() {
		if (this.skipWhitespaceAndComments(), this.matchKeyword(vi.true)) return nn.True;
		if (this.matchKeyword(vi.false)) return nn.False;
		if (this.matchKeyword(vi.null)) return pn;
		var e = this.bytes.peek();
		if (e === R.LessThan && this.bytes.peekAhead(1) === R.LessThan) return this.parseDictOrStream();
		if (e === R.LessThan) return this.parseHexString();
		if (e === R.LeftParen) return this.parseString();
		if (e === R.ForwardSlash) return this.parseName();
		if (e === R.LeftSquareBracket) return this.parseArray();
		if (oi[e]) return this.parseNumberOrRef();
		throw new Kt(this.bytes.position(), e);
	}, t.prototype.parseNumberOrRef = function() {
		var e = this.parseRawNumber();
		this.skipWhitespaceAndComments();
		var t = this.bytes.offset();
		if (ii[this.bytes.peek()]) {
			var n = this.parseRawNumber();
			if (this.skipWhitespaceAndComments(), this.bytes.peek() === R.R) return this.bytes.assertNext(R.R), vn.of(e, n);
		}
		return this.bytes.moveTo(t), z.of(e);
	}, t.prototype.parseHexString = function() {
		var e = "";
		for (this.bytes.assertNext(R.LessThan); !this.bytes.done() && this.bytes.peek() !== R.GreaterThan;) e += w(this.bytes.next());
		return this.bytes.assertNext(R.GreaterThan), G.of(e);
	}, t.prototype.parseString = function() {
		for (var e = 0, t = !1, n = ""; !this.bytes.done();) {
			var r = this.bytes.next();
			if (n += w(r), t || (r === R.LeftParen && (e += 1), r === R.RightParen && --e), r === R.BackSlash ? t = !t : t &&= !1, e === 0) return Vn.of(n.substring(1, n.length - 1));
		}
		throw new Yt(this.bytes.position());
	}, t.prototype.parseName = function() {
		this.bytes.assertNext(R.ForwardSlash);
		for (var e = ""; !this.bytes.done();) {
			var t = this.bytes.peek();
			if (an[t] || rn[t]) break;
			e += w(t), this.bytes.next();
		}
		return V.of(e);
	}, t.prototype.parseArray = function() {
		this.bytes.assertNext(R.LeftSquareBracket), this.skipWhitespaceAndComments();
		for (var e = B.withContext(this.context); this.bytes.peek() !== R.RightSquareBracket;) {
			var t = this.parseObject();
			e.push(t), this.skipWhitespaceAndComments();
		}
		return this.bytes.assertNext(R.RightSquareBracket), e;
	}, t.prototype.parseDict = function() {
		this.bytes.assertNext(R.LessThan), this.bytes.assertNext(R.LessThan), this.skipWhitespaceAndComments();
		for (var e = /* @__PURE__ */ new Map(); !this.bytes.done() && this.bytes.peek() !== R.GreaterThan && this.bytes.peekAhead(1) !== R.GreaterThan;) {
			var t = this.parseName(), n = this.parseObject();
			e.set(t, n), this.skipWhitespaceAndComments();
		}
		this.skipWhitespaceAndComments(), this.bytes.assertNext(R.GreaterThan), this.bytes.assertNext(R.GreaterThan);
		var r = e.get(V.of("Type"));
		return r === V.of("Catalog") ? ni.fromMapWithContext(e, this.context) : r === V.of("Pages") ? ri.fromMapWithContext(e, this.context) : r === V.of("Page") ? Tn.fromMapWithContext(e, this.context) : H.fromMapWithContext(e, this.context);
	}, t.prototype.parseDictOrStream = function() {
		var e = this.bytes.position(), t = this.parseDict();
		if (this.skipWhitespaceAndComments(), !(this.matchKeyword(vi.streamEOF1) || this.matchKeyword(vi.streamEOF2) || this.matchKeyword(vi.streamEOF3) || this.matchKeyword(vi.streamEOF4) || this.matchKeyword(vi.stream))) return t;
		var n, r = this.bytes.offset(), i = t.get(V.of("Length"));
		i instanceof z ? (n = r + i.asNumber(), this.bytes.moveTo(n), this.skipWhitespaceAndComments(), this.matchKeyword(vi.endstream) || (this.bytes.moveTo(r), n = this.findEndOfStreamFallback(e))) : n = this.findEndOfStreamFallback(e);
		var a = this.bytes.slice(r, n);
		return hn.of(t, a);
	}, t.prototype.findEndOfStreamFallback = function(e) {
		for (var t = 1, n = this.bytes.offset(); !this.bytes.done() && (n = this.bytes.offset(), this.matchKeyword(vi.stream) ? t += 1 : this.matchKeyword(vi.EOF1endstream) || this.matchKeyword(vi.EOF2endstream) || this.matchKeyword(vi.EOF3endstream) || this.matchKeyword(vi.endstream) ? --t : this.bytes.next(), t !== 0););
		if (t !== 0) throw new Jt(e);
		return n;
	}, t.forBytes = function(e, n, r) {
		return new t(fi.of(e), n, r);
	}, t.forByteStream = function(e, n, r) {
		return r === void 0 && (r = !1), new t(e, n, r);
	}, t;
}(di), bi = function(e) {
	function t(t, n) {
		var r = e.call(this, fi.fromPDFRawStream(t), t.dict.context) || this, i = t.dict;
		return r.alreadyParsed = !1, r.shouldWaitForTick = n || function() {
			return !1;
		}, r.firstOffset = i.lookup(V.of("First"), z).asNumber(), r.objectCount = i.lookup(V.of("N"), z).asNumber(), r;
	}
	return l(t, e), t.prototype.parseIntoContext = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o, s;
			return f(this, function(c) {
				switch (c.label) {
					case 0:
						if (this.alreadyParsed) throw new At("PDFObjectStreamParser", "parseIntoContext");
						this.alreadyParsed = !0, e = this.parseOffsetsAndObjectNumbers(), t = 0, n = e.length, c.label = 1;
					case 1: return t < n ? (r = e[t], i = r.objectNumber, a = r.offset, this.bytes.moveTo(this.firstOffset + a), o = this.parseObject(), s = vn.of(i, 0), this.context.assign(s, o), this.shouldWaitForTick() ? [4, ue()] : [3, 3]) : [3, 4];
					case 2: c.sent(), c.label = 3;
					case 3: return t++, [3, 1];
					case 4: return [2];
				}
			});
		});
	}, t.prototype.parseOffsetsAndObjectNumbers = function() {
		for (var e = [], t = 0, n = this.objectCount; t < n; t++) {
			this.skipWhitespaceAndComments();
			var r = this.parseRawInt();
			this.skipWhitespaceAndComments();
			var i = this.parseRawInt();
			e.push({
				objectNumber: r,
				offset: i
			});
		}
		return e;
	}, t.forStream = function(e, n) {
		return new t(e, n);
	}, t;
}(yi), xi = function() {
	function e(e) {
		this.alreadyParsed = !1, this.dict = e.dict, this.bytes = fi.fromPDFRawStream(e), this.context = this.dict.context;
		var t = this.dict.lookup(V.of("Size"), z), n = this.dict.lookup(V.of("Index"));
		if (n instanceof B) {
			this.subsections = [];
			for (var r = 0, i = n.size(); r < i; r += 2) {
				var a = n.lookup(r + 0, z).asNumber(), o = n.lookup(r + 1, z).asNumber();
				this.subsections.push({
					firstObjectNumber: a,
					length: o
				});
			}
		} else this.subsections = [{
			firstObjectNumber: 0,
			length: t.asNumber()
		}];
		var s = this.dict.lookup(V.of("W"), B);
		for (this.byteWidths = [
			-1,
			-1,
			-1
		], r = 0, i = s.size(); r < i; r++) this.byteWidths[r] = s.lookup(r, z).asNumber();
	}
	return e.prototype.parseIntoContext = function() {
		if (this.alreadyParsed) throw new At("PDFXRefStreamParser", "parseIntoContext");
		return this.alreadyParsed = !0, this.context.trailerInfo = {
			Root: this.dict.get(V.of("Root")),
			Encrypt: this.dict.get(V.of("Encrypt")),
			Info: this.dict.get(V.of("Info")),
			ID: this.dict.get(V.of("ID"))
		}, this.parseEntries();
	}, e.prototype.parseEntries = function() {
		for (var e = [], t = this.byteWidths, n = t[0], r = t[1], i = t[2], a = 0, o = this.subsections.length; a < o; a++) for (var s = this.subsections[a], c = s.firstObjectNumber, l = s.length, u = 0; u < l; u++) {
			for (var d = 0, f = 0, p = n; f < p; f++) d = d << 8 | this.bytes.next();
			var m = 0;
			for (f = 0, p = r; f < p; f++) m = m << 8 | this.bytes.next();
			var h = 0;
			for (f = 0, p = i; f < p; f++) h = h << 8 | this.bytes.next();
			n === 0 && (d = 1);
			var g = c + u, _ = {
				ref: vn.of(g, h),
				offset: m,
				deleted: d === 0,
				inObjectStream: d === 2
			};
			e.push(_);
		}
		return e;
	}, e.forStream = function(t) {
		return new e(t);
	}, e;
}(), Si = function(e) {
	function t(t, n, r, i) {
		n === void 0 && (n = 1 / 0), r === void 0 && (r = !1), i === void 0 && (i = !1);
		var a = e.call(this, fi.of(t), wn.create(), i) || this;
		return a.alreadyParsed = !1, a.parsedObjects = 0, a.shouldWaitForTick = function() {
			return a.parsedObjects += 1, a.parsedObjects % a.objectsPerTick === 0;
		}, a.objectsPerTick = n, a.throwOnInvalidObject = r, a;
	}
	return l(t, e), t.prototype.parseDocument = function() {
		return d(this, void 0, void 0, function() {
			var e, t;
			return f(this, function(n) {
				switch (n.label) {
					case 0:
						if (this.alreadyParsed) throw new At("PDFParser", "parseDocument");
						this.alreadyParsed = !0, this.context.header = this.parseHeader(), n.label = 1;
					case 1: return this.bytes.done() ? [3, 3] : [4, this.parseDocumentSection()];
					case 2:
						if (n.sent(), (t = this.bytes.offset()) === e) throw new Xt(this.bytes.position());
						return e = t, [3, 1];
					case 3: return this.maybeRecoverRoot(), this.context.lookup(vn.of(0)) && (console.warn("Removing parsed object: 0 0 R"), this.context.delete(vn.of(0))), [2, this.context];
				}
			});
		});
	}, t.prototype.maybeRecoverRoot = function() {
		var e = function(e) {
			return e instanceof H && e.lookup(V.of("Type")) === V.of("Catalog");
		};
		if (!e(this.context.lookup(this.context.trailerInfo.Root))) for (var t = this.context.enumerateIndirectObjects(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i[0];
			e(i[1]) && (this.context.trailerInfo.Root = a);
		}
	}, t.prototype.parseHeader = function() {
		for (; !this.bytes.done();) {
			if (this.matchKeyword(vi.header)) {
				var e = this.parseRawInt();
				this.bytes.assertNext(R.Period);
				var t = this.parseRawInt(), n = $t.forVersion(e, t);
				return this.skipBinaryHeaderComment(), n;
			}
			this.bytes.next();
		}
		throw new Zt(this.bytes.position());
	}, t.prototype.parseIndirectObjectHeader = function() {
		this.skipWhitespaceAndComments();
		var e = this.parseRawInt();
		this.skipWhitespaceAndComments();
		var t = this.parseRawInt();
		if (this.skipWhitespaceAndComments(), !this.matchKeyword(vi.obj)) throw new Qt(this.bytes.position(), vi.obj);
		return vn.of(e, t);
	}, t.prototype.matchIndirectObjectHeader = function() {
		var e = this.bytes.offset();
		try {
			return this.parseIndirectObjectHeader(), !0;
		} catch {
			return this.bytes.moveTo(e), !1;
		}
	}, t.prototype.parseIndirectObject = function() {
		return d(this, void 0, void 0, function() {
			var e, t;
			return f(this, function(n) {
				switch (n.label) {
					case 0: return e = this.parseIndirectObjectHeader(), this.skipWhitespaceAndComments(), t = this.parseObject(), this.skipWhitespaceAndComments(), this.matchKeyword(vi.endobj), t instanceof hn && t.dict.lookup(V.of("Type")) === V.of("ObjStm") ? [4, bi.forStream(t, this.shouldWaitForTick).parseIntoContext()] : [3, 2];
					case 1: return n.sent(), [3, 3];
					case 2: t instanceof hn && t.dict.lookup(V.of("Type")) === V.of("XRef") ? xi.forStream(t).parseIntoContext() : this.context.assign(e, t), n.label = 3;
					case 3: return [2, e];
				}
			});
		});
	}, t.prototype.tryToParseInvalidIndirectObject = function() {
		var e = this.bytes.position(), t = "Trying to parse invalid object: " + JSON.stringify(e) + ")";
		if (this.throwOnInvalidObject) throw Error(t);
		console.warn(t);
		var n = this.parseIndirectObjectHeader();
		console.warn("Invalid object ref: " + n), this.skipWhitespaceAndComments();
		for (var r = this.bytes.offset(), i = !0; !this.bytes.done() && (this.matchKeyword(vi.endobj) && (i = !1), i);) this.bytes.next();
		if (i) throw new qt(e);
		var a = this.bytes.offset() - vi.endobj.length, o = Mn.of(this.bytes.slice(r, a));
		return this.context.assign(n, o), n;
	}, t.prototype.parseIndirectObjects = function() {
		return d(this, void 0, void 0, function() {
			var e;
			return f(this, function(t) {
				switch (t.label) {
					case 0: this.skipWhitespaceAndComments(), t.label = 1;
					case 1:
						if (this.bytes.done() || !ii[this.bytes.peek()]) return [3, 8];
						e = this.bytes.offset(), t.label = 2;
					case 2: return t.trys.push([
						2,
						4,
						,
						5
					]), [4, this.parseIndirectObject()];
					case 3: return t.sent(), [3, 5];
					case 4: return t.sent(), this.bytes.moveTo(e), this.tryToParseInvalidIndirectObject(), [3, 5];
					case 5: return this.skipWhitespaceAndComments(), this.skipJibberish(), this.shouldWaitForTick() ? [4, ue()] : [3, 7];
					case 6: t.sent(), t.label = 7;
					case 7: return [3, 1];
					case 8: return [2];
				}
			});
		});
	}, t.prototype.maybeParseCrossRefSection = function() {
		if (this.skipWhitespaceAndComments(), this.matchKeyword(vi.xref)) {
			this.skipWhitespaceAndComments();
			for (var e = -1, t = Dn.createEmpty(); !this.bytes.done() && ii[this.bytes.peek()];) {
				var n = this.parseRawInt();
				this.skipWhitespaceAndComments();
				var r = this.parseRawInt();
				this.skipWhitespaceAndComments();
				var i = this.bytes.peek();
				if (i === R.n || i === R.f) {
					var a = vn.of(e, r);
					this.bytes.next() === R.n ? t.addEntry(a, n) : t.addDeletedEntry(a, n), e += 1;
				} else e = n;
				this.skipWhitespaceAndComments();
			}
			return t;
		}
	}, t.prototype.maybeParseTrailerDict = function() {
		if (this.skipWhitespaceAndComments(), this.matchKeyword(vi.trailer)) {
			this.skipWhitespaceAndComments();
			var e = this.parseDict(), t = this.context;
			t.trailerInfo = {
				Root: e.get(V.of("Root")) || t.trailerInfo.Root,
				Encrypt: e.get(V.of("Encrypt")) || t.trailerInfo.Encrypt,
				Info: e.get(V.of("Info")) || t.trailerInfo.Info,
				ID: e.get(V.of("ID")) || t.trailerInfo.ID
			};
		}
	}, t.prototype.maybeParseTrailer = function() {
		if (this.skipWhitespaceAndComments(), this.matchKeyword(vi.startxref)) {
			this.skipWhitespaceAndComments();
			var e = this.parseRawInt();
			return this.skipWhitespace(), this.matchKeyword(vi.eof), this.skipWhitespaceAndComments(), this.matchKeyword(vi.eof), this.skipWhitespaceAndComments(), On.forLastCrossRefSectionOffset(e);
		}
	}, t.prototype.parseDocumentSection = function() {
		return d(this, void 0, void 0, function() {
			return f(this, function(e) {
				switch (e.label) {
					case 0: return [4, this.parseIndirectObjects()];
					case 1: return e.sent(), this.maybeParseCrossRefSection(), this.maybeParseTrailerDict(), this.maybeParseTrailer(), this.skipJibberish(), [2];
				}
			});
		});
	}, t.prototype.skipJibberish = function() {
		for (this.skipWhitespaceAndComments(); !this.bytes.done();) {
			var e = this.bytes.offset(), t = this.bytes.peek();
			if (t >= R.Space && t <= R.Tilde && (this.matchKeyword(vi.xref) || this.matchKeyword(vi.trailer) || this.matchKeyword(vi.startxref) || this.matchIndirectObjectHeader())) {
				this.bytes.moveTo(e);
				break;
			}
			this.bytes.next();
		}
	}, t.prototype.skipBinaryHeaderComment = function() {
		this.skipWhitespaceAndComments();
		try {
			var e = this.bytes.offset();
			this.parseIndirectObjectHeader(), this.bytes.moveTo(e);
		} catch {
			this.bytes.next(), this.skipWhitespaceAndComments();
		}
	}, t.forBytesWithOptions = function(e, n, r, i) {
		return new t(e, n, r, i);
	}, t;
}(yi), Ci = function(e) {
	return 1 << e;
};
(function(e) {
	e[e.Invisible = Ci(0)] = "Invisible", e[e.Hidden = Ci(1)] = "Hidden", e[e.Print = Ci(2)] = "Print", e[e.NoZoom = Ci(3)] = "NoZoom", e[e.NoRotate = Ci(4)] = "NoRotate", e[e.NoView = Ci(5)] = "NoView", e[e.ReadOnly = Ci(6)] = "ReadOnly", e[e.Locked = Ci(7)] = "Locked", e[e.ToggleNoView = Ci(8)] = "ToggleNoView", e[e.LockedContents = Ci(9)] = "LockedContents";
})(ci ||= {});
var wi, Ti = function(e) {
	return e instanceof V ? e : V.of(e);
}, q = function(e) {
	return e instanceof z ? e : z.of(e);
}, J = function(e) {
	return e instanceof z ? e.asNumber() : e;
};
(function(e) {
	e.Degrees = "degrees", e.Radians = "radians";
})(wi ||= {});
var Ei, Y = function(e) {
	return F(e, "degreeAngle", ["number"]), {
		type: wi.Degrees,
		angle: e
	};
}, Di = wi.Radians, Oi = wi.Degrees, ki = function(e) {
	return e * Math.PI / 180;
}, Ai = function(e) {
	return e.type === Di ? e.angle : e.type === Oi ? ki(e.angle) : we("Invalid rotation: " + JSON.stringify(e));
}, ji = function(e) {
	return e.type === Di ? 180 * e.angle / Math.PI : e.type === Oi ? e.angle : we("Invalid rotation: " + JSON.stringify(e));
}, Mi = function(e) {
	e === void 0 && (e = 0);
	var t = e / 90 % 4;
	return t === 0 ? 0 : t === 1 ? 90 : t === 2 ? 180 : t === 3 ? 270 : 0;
}, Ni = function(e, t) {
	t === void 0 && (t = 0);
	var n = Mi(t);
	return n === 90 || n === 270 ? {
		width: e.height,
		height: e.width
	} : {
		width: e.width,
		height: e.height
	};
}, Pi = function() {
	return U.of(W.ClipNonZero);
}, Fi = Math.cos, Ii = Math.sin, Li = Math.tan, Ri = function(e, t, n, r, i, a) {
	return U.of(W.ConcatTransformationMatrix, [
		q(e),
		q(t),
		q(n),
		q(r),
		q(i),
		q(a)
	]);
}, zi = function(e, t) {
	return Ri(1, 0, 0, 1, e, t);
}, Bi = function(e, t) {
	return Ri(e, 0, 0, t, 0, 0);
}, Vi = function(e) {
	return Ri(Fi(J(e)), Ii(J(e)), -Ii(J(e)), Fi(J(e)), 0, 0);
}, Hi = function(e) {
	return Vi(ki(J(e)));
}, Ui = function(e, t) {
	return Ri(1, Li(J(e)), Li(J(t)), 1, 0, 0);
}, Wi = function(e, t) {
	return U.of(W.SetLineDashPattern, ["[" + e.map(q).join(" ") + "]", q(t)]);
};
(function(e) {
	e[e.Butt = 0] = "Butt", e[e.Round = 1] = "Round", e[e.Projecting = 2] = "Projecting";
})(Ei ||= {});
var Gi, Ki = function(e) {
	return U.of(W.SetLineCapStyle, [q(e)]);
};
(function(e) {
	e[e.Miter = 0] = "Miter", e[e.Round = 1] = "Round", e[e.Bevel = 2] = "Bevel";
})(Gi ||= {});
var qi, Ji = function(e) {
	return U.of(W.SetGraphicsStateParams, [Ti(e)]);
}, Yi = function() {
	return U.of(W.PushGraphicsState);
}, Xi = function() {
	return U.of(W.PopGraphicsState);
}, Zi = function(e) {
	return U.of(W.SetLineWidth, [q(e)]);
}, Qi = function(e, t, n, r, i, a) {
	return U.of(W.AppendBezierCurve, [
		q(e),
		q(t),
		q(n),
		q(r),
		q(i),
		q(a)
	]);
}, $i = function(e, t, n, r) {
	return U.of(W.CurveToReplicateInitialPoint, [
		q(e),
		q(t),
		q(n),
		q(r)
	]);
}, ea = function() {
	return U.of(W.ClosePath);
}, ta = function(e, t) {
	return U.of(W.MoveTo, [q(e), q(t)]);
}, na = function(e, t) {
	return U.of(W.LineTo, [q(e), q(t)]);
}, ra = function() {
	return U.of(W.StrokePath);
}, ia = function() {
	return U.of(W.FillNonZero);
}, aa = function() {
	return U.of(W.FillNonZeroAndStroke);
}, oa = function() {
	return U.of(W.EndPath);
}, sa = function() {
	return U.of(W.NextLine);
}, ca = function(e) {
	return U.of(W.ShowText, [e]);
}, la = function() {
	return U.of(W.BeginText);
}, ua = function() {
	return U.of(W.EndText);
}, da = function(e, t) {
	return U.of(W.SetFontAndSize, [Ti(e), q(t)]);
};
(function(e) {
	e[e.Fill = 0] = "Fill", e[e.Outline = 1] = "Outline", e[e.FillAndOutline = 2] = "FillAndOutline", e[e.Invisible = 3] = "Invisible", e[e.FillAndClip = 4] = "FillAndClip", e[e.OutlineAndClip = 5] = "OutlineAndClip", e[e.FillAndOutlineAndClip = 6] = "FillAndOutlineAndClip", e[e.Clip = 7] = "Clip";
})(qi ||= {});
var fa, pa = function(e, t, n, r, i) {
	return a = Fi(J(e)), o = Ii(J(e)) + Li(J(t)), s = -Ii(J(e)) + Li(J(n)), c = Fi(J(e)), l = r, u = i, U.of(W.SetTextMatrix, [
		q(a),
		q(o),
		q(s),
		q(c),
		q(l),
		q(u)
	]);
	var a, o, s, c, l, u;
}, ma = function(e) {
	return U.of(W.DrawObject, [Ti(e)]);
}, ha = function(e) {
	return U.of(W.BeginMarkedContent, [Ti(e)]);
}, ga = function() {
	return U.of(W.EndMarkedContent);
};
(function(e) {
	e.Grayscale = "Grayscale", e.RGB = "RGB", e.CMYK = "CMYK";
})(fa ||= {});
var _a, va = function(e) {
	return vt(e, "gray", 0, 1), {
		type: fa.Grayscale,
		gray: e
	};
}, ya = function(e, t, n) {
	return vt(e, "red", 0, 1), vt(t, "green", 0, 1), vt(n, "blue", 0, 1), {
		type: fa.RGB,
		red: e,
		green: t,
		blue: n
	};
}, ba = function(e, t, n, r) {
	return vt(e, "cyan", 0, 1), vt(t, "magenta", 0, 1), vt(n, "yellow", 0, 1), vt(r, "key", 0, 1), {
		type: fa.CMYK,
		cyan: e,
		magenta: t,
		yellow: n,
		key: r
	};
}, xa = fa.Grayscale, Sa = fa.RGB, Ca = fa.CMYK, wa = function(e) {
	return e.type === xa ? (c = e.gray, U.of(W.NonStrokingColorGray, [q(c)])) : e.type === Sa ? (a = e.red, o = e.green, s = e.blue, U.of(W.NonStrokingColorRgb, [
		q(a),
		q(o),
		q(s)
	])) : e.type === Ca ? (t = e.cyan, n = e.magenta, r = e.yellow, i = e.key, U.of(W.NonStrokingColorCmyk, [
		q(t),
		q(n),
		q(r),
		q(i)
	])) : we("Invalid color: " + JSON.stringify(e));
	var t, n, r, i, a, o, s, c;
}, Ta = function(e) {
	return e.type === xa ? (c = e.gray, U.of(W.StrokingColorGray, [q(c)])) : e.type === Sa ? (a = e.red, o = e.green, s = e.blue, U.of(W.StrokingColorRgb, [
		q(a),
		q(o),
		q(s)
	])) : e.type === Ca ? (t = e.cyan, n = e.magenta, r = e.yellow, i = e.key, U.of(W.StrokingColorCmyk, [
		q(t),
		q(n),
		q(r),
		q(i)
	])) : we("Invalid color: " + JSON.stringify(e));
	var t, n, r, i, a, o, s, c;
}, Ea = function(e, t) {
	return t === void 0 && (t = 1), e?.length === 1 ? va(e[0] * t) : e?.length === 3 ? ya(e[0] * t, e[1] * t, e[2] * t) : e?.length === 4 ? ba(e[0] * t, e[1] * t, e[2] * t, e[3] * t) : void 0;
}, Da = function(e) {
	return e.type === xa ? [e.gray] : e.type === Sa ? [
		e.red,
		e.green,
		e.blue
	] : e.type === Ca ? [
		e.cyan,
		e.magenta,
		e.yellow,
		e.key
	] : we("Invalid color: " + JSON.stringify(e));
}, X = 0, Z = 0, Q = 0, $ = 0, Oa = 0, ka = 0, Aa = /* @__PURE__ */ new Map([
	["A", 7],
	["a", 7],
	["C", 6],
	["c", 6],
	["H", 1],
	["h", 1],
	["L", 2],
	["l", 2],
	["M", 2],
	["m", 2],
	["Q", 4],
	["q", 4],
	["S", 4],
	["s", 4],
	["T", 2],
	["t", 2],
	["V", 1],
	["v", 1],
	["Z", 0],
	["z", 0]
]), ja = {
	M: function(e) {
		return X = e[0], Z = e[1], Q = $ = null, Oa = X, ka = Z, ta(X, Z);
	},
	m: function(e) {
		return X += e[0], Z += e[1], Q = $ = null, Oa = X, ka = Z, ta(X, Z);
	},
	C: function(e) {
		return X = e[4], Z = e[5], Q = e[2], $ = e[3], Qi(e[0], e[1], e[2], e[3], e[4], e[5]);
	},
	c: function(e) {
		var t = Qi(e[0] + X, e[1] + Z, e[2] + X, e[3] + Z, e[4] + X, e[5] + Z);
		return Q = X + e[2], $ = Z + e[3], X += e[4], Z += e[5], t;
	},
	S: function(e) {
		Q !== null && $ !== null || (Q = X, $ = Z);
		var t = Qi(X - (Q - X), Z - ($ - Z), e[0], e[1], e[2], e[3]);
		return Q = e[0], $ = e[1], X = e[2], Z = e[3], t;
	},
	s: function(e) {
		Q !== null && $ !== null || (Q = X, $ = Z);
		var t = Qi(X - (Q - X), Z - ($ - Z), X + e[0], Z + e[1], X + e[2], Z + e[3]);
		return Q = X + e[0], $ = Z + e[1], X += e[2], Z += e[3], t;
	},
	Q: function(e) {
		return Q = e[0], $ = e[1], X = e[2], Z = e[3], $i(e[0], e[1], X, Z);
	},
	q: function(e) {
		var t = $i(e[0] + X, e[1] + Z, e[2] + X, e[3] + Z);
		return Q = X + e[0], $ = Z + e[1], X += e[2], Z += e[3], t;
	},
	T: function(e) {
		Q === null || $ === null ? (Q = X, $ = Z) : (Q = X - (Q - X), $ = Z - ($ - Z));
		var t = $i(Q, $, e[0], e[1]);
		return Q = X - (Q - X), $ = Z - ($ - Z), X = e[0], Z = e[1], t;
	},
	t: function(e) {
		Q === null || $ === null ? (Q = X, $ = Z) : (Q = X - (Q - X), $ = Z - ($ - Z));
		var t = $i(Q, $, X + e[0], Z + e[1]);
		return X += e[0], Z += e[1], t;
	},
	A: function(e) {
		var t = Ma(X, Z, e);
		return X = e[5], Z = e[6], t;
	},
	a: function(e) {
		e[5] += X, e[6] += Z;
		var t = Ma(X, Z, e);
		return X = e[5], Z = e[6], t;
	},
	L: function(e) {
		return X = e[0], Z = e[1], Q = $ = null, na(X, Z);
	},
	l: function(e) {
		return X += e[0], Z += e[1], Q = $ = null, na(X, Z);
	},
	H: function(e) {
		return X = e[0], Q = $ = null, na(X, Z);
	},
	h: function(e) {
		return X += e[0], Q = $ = null, na(X, Z);
	},
	V: function(e) {
		return Z = e[0], Q = $ = null, na(X, Z);
	},
	v: function(e) {
		return Z += e[0], Q = $ = null, na(X, Z);
	},
	Z: function() {
		var e = ea();
		return X = Oa, Z = ka, e;
	},
	z: function() {
		var e = ea();
		return X = Oa, Z = ka, e;
	}
}, Ma = function(e, t, n) {
	for (var r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = [], d = 0, f = Na(c, l, r, i, o, s, a, e, t); d < f.length; d++) {
		var p = f[d], m = Pa.apply(void 0, p);
		u.push(Qi.apply(void 0, m));
	}
	return u;
}, Na = function(e, t, n, r, i, a, o, s, c) {
	var l = Math.PI / 180 * o, u = Math.sin(l), d = Math.cos(l);
	n = Math.abs(n), r = Math.abs(r);
	var f = (Q = d * (s - e) * .5 + u * (c - t) * .5) * Q / (n * n) + ($ = d * (c - t) * .5 - u * (s - e) * .5) * $ / (r * r);
	f > 1 && (n *= f = Math.sqrt(f), r *= f);
	var p = d / n, m = u / n, h = -u / r, g = d / r, _ = p * s + m * c, v = h * s + g * c, y = p * e + m * t, b = h * e + g * t, x = 1 / ((y - _) * (y - _) + (b - v) * (b - v)) - .25;
	x < 0 && (x = 0);
	var S = Math.sqrt(x);
	a === i && (S = -S);
	var C = .5 * (_ + y) - S * (b - v), w = .5 * (v + b) + S * (y - _), T = Math.atan2(v - w, _ - C), E = Math.atan2(b - w, y - C) - T;
	E < 0 && a === 1 ? E += 2 * Math.PI : E > 0 && a === 0 && (E -= 2 * Math.PI);
	for (var D = Math.ceil(Math.abs(E / (.5 * Math.PI + .001))), O = [], k = 0; k < D; k++) {
		var A = T + k * E / D, j = T + (k + 1) * E / D;
		O[k] = [
			C,
			w,
			A,
			j,
			n,
			r,
			u,
			d
		];
	}
	return O;
}, Pa = function(e, t, n, r, i, a, o, s) {
	var c = s * i, l = -o * a, u = o * i, d = s * a, f = .5 * (r - n), p = 8 / 3 * Math.sin(.5 * f) * Math.sin(.5 * f) / Math.sin(f), m = e + Math.cos(n) - p * Math.sin(n), h = t + Math.sin(n) + p * Math.cos(n), g = e + Math.cos(r), _ = t + Math.sin(r), v = g + p * Math.sin(r), y = _ - p * Math.cos(r);
	return [
		c * m + l * h,
		u * m + d * h,
		c * v + l * y,
		u * v + d * y,
		c * g + l * _,
		u * g + d * _
	];
}, Fa = function(e) {
	return function(e) {
		X = Z = Q = $ = Oa = ka = 0;
		for (var t = [], n = 0; n < e.length; n++) {
			var r = e[n];
			if (r.cmd && typeof ja[r.cmd] == "function") {
				var i = ja[r.cmd](r.args);
				Array.isArray(i) ? t = t.concat(i) : t.push(i);
			}
		}
		return t;
	}(function(e) {
		for (var t, n = [], r = [], i = "", a = !1, o = 0, s = 0, c = e; s < c.length; s++) {
			var l = c[s];
			if (Aa.has(l)) o = Aa.get(l), t && (i.length > 0 && (r[r.length] = +i), n[n.length] = {
				cmd: t,
				args: r
			}, r = [], i = "", a = !1), t = l;
			else if ([" ", ","].includes(l) || l === "-" && i.length > 0 && i[i.length - 1] !== "e" || l === "." && a) {
				if (i.length === 0) continue;
				r.length === o ? (n[n.length] = {
					cmd: t,
					args: r
				}, r = [+i], t === "M" && (t = "L"), t === "m" && (t = "l")) : r[r.length] = +i, a = l === ".", i = ["-", "."].includes(l) ? l : "";
			} else i += l, l === "." && (a = !0);
		}
		return i.length > 0 && (r.length === o ? (n[n.length] = {
			cmd: t,
			args: r
		}, r = [+i], t === "M" && (t = "L"), t === "m" && (t = "l")) : r[r.length] = +i), n[n.length] = {
			cmd: t,
			args: r
		}, n;
	}(e));
}, Ia = function(e, t) {
	return [
		Yi(),
		t.graphicsState && Ji(t.graphicsState),
		zi(t.x, t.y),
		Vi(Ai(t.rotate)),
		Bi(t.width, t.height),
		Ui(Ai(t.xSkew), Ai(t.ySkew)),
		ma(e),
		Xi()
	].filter(Boolean);
}, La = function(e) {
	return [
		Yi(),
		e.graphicsState && Ji(e.graphicsState),
		e.color && wa(e.color),
		e.borderColor && Ta(e.borderColor),
		Zi(e.borderWidth),
		e.borderLineCap && Ki(e.borderLineCap),
		Wi(e.borderDashArray ?? [], e.borderDashPhase ?? 0),
		zi(e.x, e.y),
		Vi(Ai(e.rotate)),
		Ui(Ai(e.xSkew), Ai(e.ySkew)),
		ta(0, 0),
		na(0, e.height),
		na(e.width, e.height),
		na(e.width, 0),
		ea(),
		e.color && e.borderWidth ? aa() : e.color ? ia() : e.borderColor ? ra() : ea(),
		Xi()
	].filter(Boolean);
}, Ra = (Math.sqrt(2) - 1) / 3 * 4, za = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d;
	return p([
		Yi(),
		e.graphicsState && Ji(e.graphicsState),
		e.color && wa(e.color),
		e.borderColor && Ta(e.borderColor),
		Zi(e.borderWidth),
		e.borderLineCap && Ki(e.borderLineCap),
		Wi(e.borderDashArray ?? [], e.borderDashPhase ?? 0)
	], e.rotate === void 0 ? (t = {
		x: e.x,
		y: e.y,
		xScale: e.xScale,
		yScale: e.yScale
	}, n = J(t.x), r = J(t.y), i = J(t.xScale), a = J(t.yScale), o = i * Ra, s = a * Ra, c = (n -= i) + 2 * i, l = (r -= a) + 2 * a, u = n + i, d = r + a, [
		Yi(),
		ta(n, d),
		Qi(n, d - s, u - o, r, u, r),
		Qi(u + o, r, c, d - s, c, d),
		Qi(c, d + s, u + o, l, u, l),
		Qi(u - o, l, n, d + s, n, d),
		Xi()
	]) : function(e) {
		var t = J(e.x), n = J(e.y), r = J(e.xScale), i = J(e.yScale), a = -r, o = -i, s = r * Ra, c = i * Ra, l = a + 2 * r, u = o + 2 * i, d = a + r, f = o + i;
		return [
			zi(t, n),
			Vi(Ai(e.rotate)),
			ta(a, f),
			Qi(a, f - c, d - s, o, d, o),
			Qi(d + s, o, l, f - c, l, f),
			Qi(l, f + c, d + s, u, d, u),
			Qi(d - s, u, a, f + c, a, f)
		];
	}({
		x: e.x,
		y: e.y,
		xScale: e.xScale,
		yScale: e.yScale,
		rotate: e.rotate ?? Y(0)
	}), [e.color && e.borderWidth ? aa() : e.color ? ia() : e.borderColor ? ra() : ea(), Xi()]).filter(Boolean);
}, Ba = function(e) {
	return e.rotation === 0 ? [zi(0, 0), Hi(0)] : e.rotation === 90 ? [zi(e.width, 0), Hi(90)] : e.rotation === 180 ? [zi(e.width, e.height), Hi(180)] : e.rotation === 270 ? [zi(0, e.height), Hi(270)] : [];
}, Va = function(e) {
	var t = La({
		x: e.x,
		y: e.y,
		width: e.width,
		height: e.height,
		borderWidth: e.borderWidth,
		color: e.color,
		borderColor: e.borderColor,
		rotate: Y(0),
		xSkew: Y(0),
		ySkew: Y(0)
	});
	if (!e.filled) return t;
	var n = J(e.width), r = J(e.height), i = function(e) {
		var t = J(e.size), n = -.25, r = -.49, i = -.675, a = .3995 / .965 + r;
		return [
			Yi(),
			e.color && Ta(e.color),
			Zi(e.thickness),
			zi(e.x, e.y),
			ta(i * t, a * t),
			na(n * t, r * t),
			na(.69 * t, .475 * t),
			ra(),
			Xi()
		].filter(Boolean);
	}({
		x: n / 2,
		y: r / 2,
		size: Math.min(n, r) / 2,
		thickness: e.thickness,
		color: e.markColor
	});
	return p([Yi()], t, i, [Xi()]);
}, Ha = function(e) {
	var t = J(e.width), n = J(e.height), r = Math.min(t, n) / 2, i = za({
		x: e.x,
		y: e.y,
		xScale: r,
		yScale: r,
		color: e.color,
		borderColor: e.borderColor,
		borderWidth: e.borderWidth
	});
	if (!e.filled) return i;
	var a = za({
		x: e.x,
		y: e.y,
		xScale: .45 * r,
		yScale: .45 * r,
		color: e.dotColor,
		borderColor: void 0,
		borderWidth: 0
	});
	return p([Yi()], i, a, [Xi()]);
}, Ua = function(e) {
	var t = La({
		x: J(e.x),
		y: J(e.y),
		width: J(e.width),
		height: J(e.height),
		borderWidth: e.borderWidth,
		color: e.color,
		borderColor: e.borderColor,
		rotate: Y(0),
		xSkew: Y(0),
		ySkew: Y(0)
	}), n = Wa(e.textLines, {
		color: e.textColor,
		font: e.font,
		size: e.fontSize,
		rotate: Y(0),
		xSkew: Y(0),
		ySkew: Y(0)
	});
	return p([Yi()], t, n, [Xi()]);
}, Wa = function(e, t) {
	for (var n = [
		la(),
		wa(t.color),
		da(t.font, t.size)
	], r = 0, i = e.length; r < i; r++) {
		var a = e[r], o = a.encoded, s = a.x, c = a.y;
		n.push(pa(Ai(t.rotate), Ai(t.xSkew), Ai(t.ySkew), s, c), ca(o));
	}
	return n.push(ua()), n;
}, Ga = function(e) {
	var t = J(e.x), n = J(e.y), r = J(e.width), i = J(e.height), a = J(e.borderWidth), o = J(e.padding), s = t + a / 2 + o, c = n + a / 2 + o, l = r - 2 * (a / 2 + o), u = i - 2 * (a / 2 + o), d = [
		ta(s, c),
		na(s, c + u),
		na(s + l, c + u),
		na(s + l, c),
		ea(),
		Pi(),
		oa()
	], f = La({
		x: t,
		y: n,
		width: r,
		height: i,
		borderWidth: e.borderWidth,
		color: e.color,
		borderColor: e.borderColor,
		rotate: Y(0),
		xSkew: Y(0),
		ySkew: Y(0)
	}), m = Wa(e.textLines, {
		color: e.textColor,
		font: e.font,
		size: e.fontSize,
		rotate: Y(0),
		xSkew: Y(0),
		ySkew: Y(0)
	}), h = p([ha("Tx"), Yi()], m, [Xi(), ga()]);
	return p([Yi()], f, d, h, [Xi()]);
}, Ka = function(e) {
	function t() {
		return e.call(this, "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.") || this;
	}
	return l(t, e), t;
}(Error), qa = function(e) {
	function t() {
		return e.call(this, "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.") || this;
	}
	return l(t, e), t;
}(Error), Ja = function(e) {
	function t() {
		return e.call(this, "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.") || this;
	}
	return l(t, e), t;
}(Error), Ya = function(e) {
	function t() {
		return e.call(this, "PDFDocument has no pages so `PDFDocument.removePage` cannot be called") || this;
	}
	return l(t, e), t;
}(Error), Xa = function(e) {
	function t(t) {
		var n = "PDFDocument has no form field with the name \"" + t + "\"";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), Za = function(e) {
	function t(t, n, r) {
		var i = "Expected field \"" + t + "\" to be of type " + n?.name + ", but it is actually of type " + (r?.constructor?.name ?? r);
		return e.call(this, i) || this;
	}
	return l(t, e), t;
}(Error), Qa = (function(e) {
	function t(t) {
		var n = "Failed to select check box due to missing onValue: \"" + t + "\"";
		return e.call(this, n) || this;
	}
	l(t, e);
}(Error), function(e) {
	function t(t) {
		var n = "A field already exists with the specified name: \"" + t + "\"";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error)), $a = function(e) {
	function t(t) {
		var n = "Field name contains invalid component: \"" + t + "\"";
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error), eo = (function(e) {
	function t(t) {
		var n = "A non-terminal field already exists with the specified name: \"" + t + "\"";
		return e.call(this, n) || this;
	}
	l(t, e);
}(Error), function(e) {
	function t(t) {
		var n = "Reading rich text fields is not supported: Attempted to read rich text field: " + t;
		return e.call(this, n) || this;
	}
	return l(t, e), t;
}(Error)), to = function(e) {
	function t(t, n) {
		var r = "Failed to layout combed text as lineLength=" + t + " is greater than cellCount=" + n;
		return e.call(this, r) || this;
	}
	return l(t, e), t;
}(Error), no = function(e) {
	function t(t, n, r) {
		var i = "Attempted to set text with length=" + t + " for TextField with maxLength=" + n + " and name=" + r;
		return e.call(this, i) || this;
	}
	return l(t, e), t;
}(Error), ro = function(e) {
	function t(t, n, r) {
		var i = "Attempted to set maxLength=" + n + ", which is less than " + t + ", the length of this field's current value (name=" + r + ")";
		return e.call(this, i) || this;
	}
	return l(t, e), t;
}(Error);
(function(e) {
	e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right";
})(_a ||= {});
var io, ao = function(e, t, n, r) {
	r === void 0 && (r = !1);
	for (var i = 4; i < 500;) {
		for (var a = 0, o = 0, s = e.length; o < s; o++) {
			a += 1;
			for (var c = e[o].split(" "), l = n.width, u = 0, d = c.length; u < d; u++) {
				var f = u === d - 1 ? c[u] : c[u] + " ", p = t.widthOfTextAtSize(f, i);
				(l -= p) <= 0 && (a += 1, l = n.width - p);
			}
		}
		if (!r && a > e.length) return i - 1;
		var m = t.heightAtSize(i);
		if ((m + .2 * m) * a > Math.abs(n.height)) return i - 1;
		i += 1;
	}
	return i;
}, oo = function(e, t, n, r) {
	for (var i = n.width / r, a = n.height, o = 4, s = function(e) {
		for (var t = [], n = 0, r = e.length; n < r;) {
			var i = N(e, n), a = i[0], o = i[1];
			t.push(a), n += o;
		}
		return t;
	}(e); o < 500;) {
		for (var c = 0, l = s.length; c < l; c++) {
			var u = s[c];
			if (t.widthOfTextAtSize(u, o) > .75 * i) return o - 1;
		}
		if (t.heightAtSize(o, { descender: !1 }) > a) return o - 1;
		o += 1;
	}
	return o;
}, so = function(e) {
	for (var t = e.length; t > 0; t--) if (/\s/.test(e[t])) return t;
}, co = function(e, t, n, r) {
	for (var i = e.length; i > 0;) {
		var a = e.substring(0, i), o = n.encodeText(a), s = n.widthOfTextAtSize(a, r);
		if (s < t) return {
			line: a,
			encoded: o,
			width: s,
			remainder: e.substring(i) || void 0
		};
		i = so(a) ?? 0;
	}
	return {
		line: e,
		encoded: n.encodeText(e),
		width: n.widthOfTextAtSize(e, r),
		remainder: void 0
	};
}, lo = function(e, t) {
	var n = t.alignment, r = t.fontSize, i = t.font, a = t.bounds, o = j(O(e));
	r !== void 0 && r !== 0 || (r = ao(o, i, a, !0));
	for (var s = i.heightAtSize(r), c = s + .2 * s, l = [], u = a.x, d = a.y, f = a.x + a.width, p = a.y + a.height, m = a.y + a.height, h = 0, g = o.length; h < g; h++) for (var _ = o[h]; _ !== void 0;) {
		var v = co(_, a.width, i, r), y = v.line, b = v.encoded, x = v.width, S = v.remainder, C = n === _a.Left ? a.x : n === _a.Center ? a.x + a.width / 2 - x / 2 : n === _a.Right ? a.x + a.width - x : a.x;
		C < u && (u = C), (m -= c) < d && (d = m), C + x > f && (f = C + x), m + s > p && (p = m + s), l.push({
			text: y,
			encoded: b,
			width: x,
			height: s,
			x: C,
			y: m
		}), _ = S?.trim();
	}
	return {
		fontSize: r,
		lineHeight: c,
		lines: l,
		bounds: {
			x: u,
			y: d,
			width: f - u,
			height: p - d
		}
	};
}, uo = function(e, t) {
	var n = t.alignment, r = t.fontSize, i = t.font, a = t.bounds, o = M(O(e));
	r !== void 0 && r !== 0 || (r = ao([o], i, a));
	var s = i.encodeText(o), c = i.widthOfTextAtSize(o, r), l = i.heightAtSize(r, { descender: !1 }), u = n === _a.Left ? a.x : n === _a.Center ? a.x + a.width / 2 - c / 2 : n === _a.Right ? a.x + a.width - c : a.x, d = a.y + (a.height / 2 - l / 2);
	return {
		fontSize: r,
		line: {
			text: o,
			encoded: s,
			width: c,
			height: l,
			x: u,
			y: d
		},
		bounds: {
			x: u,
			y: d,
			width: c,
			height: l
		}
	};
}, fo = function(e) {
	return "normal" in e ? e : { normal: e };
}, po = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/, mo = function(e) {
	var t = P(e.getDefaultAppearance() ?? "", po).match ?? [], n = Number(t[2]);
	return isFinite(n) ? n : void 0;
}, ho = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/, go = function(e) {
	var t = P(e.getDefaultAppearance() ?? "", ho).match ?? [], n = t[1], r = t[2], i = t[3], a = t[4], o = t[5];
	return o === "g" && n ? va(Number(n)) : o === "rg" && n && r && i ? ya(Number(n), Number(r), Number(i)) : o === "k" && n && r && i && a ? ba(Number(n), Number(r), Number(i), Number(a)) : void 0;
}, _o = function(e, t, n, r) {
	r === void 0 && (r = 0);
	var i = [wa(t).toString(), da(n?.name ?? "dummy__noop", r).toString()].join("\n");
	e.setDefaultAppearance(i);
}, vo = function(e, t) {
	var n = go(t), r = go(e.acroField), i = t.getRectangle(), a = t.getAppearanceCharacteristics(), o = t.getBorderStyle()?.getWidth() ?? 0, s = Mi(a?.getRotation()), c = Ni(i, s), l = c.width, d = c.height, f = Ba(u(u({}, i), { rotation: s })), m = ya(0, 0, 0), h = Ea(a?.getBorderColor()) ?? m, g = Ea(a?.getBackgroundColor()), _ = Ea(a?.getBackgroundColor(), .8), v = n ?? r ?? m;
	_o(n ? t : e.acroField, v);
	var y = {
		x: 0 + o / 2,
		y: 0 + o / 2,
		width: l - o,
		height: d - o,
		thickness: 1.5,
		borderWidth: o,
		borderColor: h,
		markColor: v
	};
	return {
		normal: {
			on: p(f, Va(u(u({}, y), {
				color: g,
				filled: !0
			}))),
			off: p(f, Va(u(u({}, y), {
				color: g,
				filled: !1
			})))
		},
		down: {
			on: p(f, Va(u(u({}, y), {
				color: _,
				filled: !0
			}))),
			off: p(f, Va(u(u({}, y), {
				color: _,
				filled: !1
			})))
		}
	};
}, yo = function(e, t) {
	var n = go(t), r = go(e.acroField), i = t.getRectangle(), a = t.getAppearanceCharacteristics(), o = t.getBorderStyle()?.getWidth() ?? 0, s = Mi(a?.getRotation()), c = Ni(i, s), l = c.width, d = c.height, f = Ba(u(u({}, i), { rotation: s })), m = ya(0, 0, 0), h = Ea(a?.getBorderColor()) ?? m, g = Ea(a?.getBackgroundColor()), _ = Ea(a?.getBackgroundColor(), .8), v = n ?? r ?? m;
	_o(n ? t : e.acroField, v);
	var y = {
		x: l / 2,
		y: d / 2,
		width: l - o,
		height: d - o,
		borderWidth: o,
		borderColor: h,
		dotColor: v
	};
	return {
		normal: {
			on: p(f, Ha(u(u({}, y), {
				color: g,
				filled: !0
			}))),
			off: p(f, Ha(u(u({}, y), {
				color: g,
				filled: !1
			})))
		},
		down: {
			on: p(f, Ha(u(u({}, y), {
				color: _,
				filled: !0
			}))),
			off: p(f, Ha(u(u({}, y), {
				color: _,
				filled: !1
			})))
		}
	};
}, bo = function(e, t, n) {
	var r = go(t), i = go(e.acroField), a = mo(t), o = mo(e.acroField), s = t.getRectangle(), c = t.getAppearanceCharacteristics(), l = t.getBorderStyle(), d = c?.getCaptions(), f = d?.normal ?? "", m = d?.down ?? f ?? "", h = l?.getWidth() ?? 0, g = Mi(c?.getRotation()), _ = Ni(s, g), v = _.width, y = _.height, b = Ba(u(u({}, s), { rotation: g })), x = ya(0, 0, 0), S = Ea(c?.getBorderColor()), C = Ea(c?.getBackgroundColor()), w = Ea(c?.getBackgroundColor(), .8), T = {
		x: h,
		y: h,
		width: v - 2 * h,
		height: y - 2 * h
	}, E = uo(f, {
		alignment: _a.Center,
		fontSize: a ?? o,
		font: n,
		bounds: T
	}), D = uo(m, {
		alignment: _a.Center,
		fontSize: a ?? o,
		font: n,
		bounds: T
	}), O = Math.min(E.fontSize, D.fontSize), k = r ?? i ?? x;
	_o(r || a !== void 0 ? t : e.acroField, k, n, O);
	var A = {
		x: 0 + h / 2,
		y: 0 + h / 2,
		width: v - h,
		height: y - h,
		borderWidth: h,
		borderColor: S,
		textColor: k,
		font: n.name,
		fontSize: O
	};
	return {
		normal: p(b, Ua(u(u({}, A), {
			color: C,
			textLines: [E.line]
		}))),
		down: p(b, Ua(u(u({}, A), {
			color: w,
			textLines: [D.line]
		})))
	};
}, xo = function(e, t, n) {
	var r, i, a = go(t), o = go(e.acroField), s = mo(t), c = mo(e.acroField), l = t.getRectangle(), d = t.getAppearanceCharacteristics(), f = t.getBorderStyle(), m = e.getText() ?? "", h = f?.getWidth() ?? 0, g = Mi(d?.getRotation()), _ = Ni(l, g), v = _.width, y = _.height, b = Ba(u(u({}, l), { rotation: g })), x = ya(0, 0, 0), S = Ea(d?.getBorderColor()), C = Ea(d?.getBackgroundColor()), w = +!e.isCombed(), T = {
		x: h + w,
		y: h + w,
		width: v - 2 * (h + w),
		height: y - 2 * (h + w)
	};
	if (e.isMultiline()) r = (E = lo(m, {
		alignment: e.getAlignment(),
		fontSize: s ?? c,
		font: n,
		bounds: T
	})).lines, i = E.fontSize;
	else if (e.isCombed()) {
		var E = function(e, t) {
			var n = t.fontSize, r = t.font, i = t.bounds, a = t.cellCount, o = M(O(e));
			if (o.length > a) throw new to(o.length, a);
			n !== void 0 && n !== 0 || (n = oo(o, r, i, a));
			for (var s = i.width / a, c = r.heightAtSize(n, { descender: !1 }), l = i.y + (i.height / 2 - c / 2), u = [], d = i.x, f = i.y, p = i.x + i.width, m = i.y + i.height, h = 0, g = 0; h < a;) {
				var _ = N(o, g), v = _[0], y = _[1], b = r.encodeText(v), x = r.widthOfTextAtSize(v, n), S = i.x + (s * h + s / 2) - x / 2;
				S < d && (d = S), l < f && (f = l), S + x > p && (p = S + x), l + c > m && (m = l + c), u.push({
					text: o,
					encoded: b,
					width: x,
					height: c,
					x: S,
					y: l
				}), h += 1, g += y;
			}
			return {
				fontSize: n,
				cells: u,
				bounds: {
					x: d,
					y: f,
					width: p - d,
					height: m - f
				}
			};
		}(m, {
			fontSize: s ?? c,
			font: n,
			bounds: T,
			cellCount: e.getMaxLength() ?? 0
		});
		r = E.cells, i = E.fontSize;
	} else r = [(E = uo(m, {
		alignment: e.getAlignment(),
		fontSize: s ?? c,
		font: n,
		bounds: T
	})).line], i = E.fontSize;
	var D = a ?? o ?? x;
	return _o(a || s !== void 0 ? t : e.acroField, D, n, i), p(b, Ga({
		x: 0 + h / 2,
		y: 0 + h / 2,
		width: v - h,
		height: y - h,
		borderWidth: h ?? 0,
		borderColor: S,
		textColor: D,
		font: n.name,
		fontSize: i,
		color: C,
		textLines: r,
		padding: w
	}));
}, So = function(e, t, n) {
	var r = go(t), i = go(e.acroField), a = mo(t), o = mo(e.acroField), s = t.getRectangle(), c = t.getAppearanceCharacteristics(), l = t.getBorderStyle(), d = e.getSelected()[0] ?? "", f = l?.getWidth() ?? 0, m = Mi(c?.getRotation()), h = Ni(s, m), g = h.width, _ = h.height, v = Ba(u(u({}, s), { rotation: m })), y = ya(0, 0, 0), b = Ea(c?.getBorderColor()), x = Ea(c?.getBackgroundColor()), S = {
		x: f + 1,
		y: f + 1,
		width: g - 2 * (f + 1),
		height: _ - 2 * (f + 1)
	}, C = uo(d, {
		alignment: _a.Left,
		fontSize: a ?? o,
		font: n,
		bounds: S
	}), w = C.line, T = C.fontSize, E = r ?? i ?? y;
	return _o(r || a !== void 0 ? t : e.acroField, E, n, T), p(v, Ga({
		x: 0 + f / 2,
		y: 0 + f / 2,
		width: g - f,
		height: _ - f,
		borderWidth: f ?? 0,
		borderColor: b,
		textColor: E,
		font: n.name,
		fontSize: T,
		color: x,
		textLines: [w],
		padding: 1
	}));
}, Co = function(e, t, n) {
	var r = go(t), i = go(e.acroField), a = mo(t), o = mo(e.acroField), s = t.getRectangle(), c = t.getAppearanceCharacteristics(), l = t.getBorderStyle()?.getWidth() ?? 0, d = Mi(c?.getRotation()), f = Ni(s, d), m = f.width, h = f.height, g = Ba(u(u({}, s), { rotation: d })), _ = ya(0, 0, 0), v = Ea(c?.getBorderColor()), y = Ea(c?.getBackgroundColor()), b = e.getOptions(), x = e.getSelected();
	e.isSorted() && b.sort();
	for (var S = "", C = 0, w = b.length; C < w; C++) S += b[C], C < w - 1 && (S += "\n");
	var T = {
		x: l + 1,
		y: l + 1,
		width: m - 2 * (l + 1),
		height: h - 2 * (l + 1)
	}, E = lo(S, {
		alignment: _a.Left,
		fontSize: a ?? o,
		font: n,
		bounds: T
	}), D = E.lines, O = E.fontSize, k = E.lineHeight, A = [];
	for (C = 0, w = D.length; C < w; C++) {
		var j = D[C];
		x.includes(j.text) && A.push(C);
	}
	var M = ya(.6, 193 / 255, 218 / 255), N = r ?? i ?? _;
	return _o(r || a !== void 0 ? t : e.acroField, N, n, O), p(g, function(e) {
		for (var t = J(e.x), n = J(e.y), r = J(e.width), i = J(e.height), a = J(e.lineHeight), o = J(e.borderWidth), s = J(e.padding), c = t + o / 2 + s, l = n + o / 2 + s, u = r - 2 * (o / 2 + s), d = i - 2 * (o / 2 + s), f = [
			ta(c, l),
			na(c, l + d),
			na(c + u, l + d),
			na(c + u, l),
			ea(),
			Pi(),
			oa()
		], m = La({
			x: t,
			y: n,
			width: r,
			height: i,
			borderWidth: e.borderWidth,
			color: e.color,
			borderColor: e.borderColor,
			rotate: Y(0),
			xSkew: Y(0),
			ySkew: Y(0)
		}), h = [], g = 0, _ = e.selectedLines.length; g < _; g++) {
			var v = e.textLines[e.selectedLines[g]];
			h.push.apply(h, La({
				x: v.x - s,
				y: v.y - (a - v.height) / 2,
				width: r - o,
				height: v.height + (a - v.height) / 2,
				borderWidth: 0,
				color: e.selectedColor,
				borderColor: void 0,
				rotate: Y(0),
				xSkew: Y(0),
				ySkew: Y(0)
			}));
		}
		var y = Wa(e.textLines, {
			color: e.textColor,
			font: e.font,
			size: e.fontSize,
			rotate: Y(0),
			xSkew: Y(0),
			ySkew: Y(0)
		}), b = p([ha("Tx"), Yi()], y, [Xi(), ga()]);
		return p([Yi()], m, h, f, b, [Xi()]);
	}({
		x: 0 + l / 2,
		y: 0 + l / 2,
		width: m - l,
		height: h - l,
		borderWidth: l ?? 0,
		borderColor: v,
		textColor: N,
		font: n.name,
		fontSize: O,
		color: y,
		textLines: D,
		lineHeight: k,
		selectedColor: M,
		selectedLines: A,
		padding: 1
	}));
}, wo = function() {
	function e(e, t, n) {
		this.alreadyEmbedded = !1, F(e, "ref", [[vn, "PDFRef"]]), F(t, "doc", [[Ko, "PDFDocument"]]), F(n, "embedder", [[xr, "PDFPageEmbedder"]]), this.ref = e, this.doc = t, this.width = n.width, this.height = n.height, this.embedder = n;
	}
	return e.prototype.scale = function(e) {
		return F(e, "factor", ["number"]), {
			width: this.width * e,
			height: this.height * e
		};
	}, e.prototype.size = function() {
		return this.scale(1);
	}, e.prototype.embed = function() {
		return d(this, void 0, void 0, function() {
			return f(this, function(e) {
				switch (e.label) {
					case 0: return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
					case 1: e.sent(), this.alreadyEmbedded = !0, e.label = 2;
					case 2: return [2];
				}
			});
		});
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e;
}(), To = function() {
	function e(e, t, n) {
		this.modified = !0, F(e, "ref", [[vn, "PDFRef"]]), F(t, "doc", [[Ko, "PDFDocument"]]), F(n, "embedder", [[Hn, "CustomFontEmbedder"], [In, "StandardFontEmbedder"]]), this.ref = e, this.doc = t, this.name = n.fontName, this.embedder = n;
	}
	return e.prototype.encodeText = function(e) {
		return F(e, "text", ["string"]), this.modified = !0, this.embedder.encodeText(e);
	}, e.prototype.widthOfTextAtSize = function(e, t) {
		return F(e, "text", ["string"]), F(t, "size", ["number"]), this.embedder.widthOfTextAtSize(e, t);
	}, e.prototype.heightAtSize = function(e, t) {
		var n;
		return F(e, "size", ["number"]), I(t?.descender, "options.descender", ["boolean"]), this.embedder.heightOfFontAtSize(e, { descender: (n = t?.descender) == null || n });
	}, e.prototype.sizeAtHeight = function(e) {
		return F(e, "height", ["number"]), this.embedder.sizeOfFontAtHeight(e);
	}, e.prototype.getCharacterSet = function() {
		return this.embedder instanceof In ? this.embedder.encoding.supportedCodePoints : this.embedder.font.characterSet;
	}, e.prototype.embed = function() {
		return d(this, void 0, void 0, function() {
			return f(this, function(e) {
				switch (e.label) {
					case 0: return this.modified ? [4, this.embedder.embedIntoContext(this.doc.context, this.ref)] : [3, 2];
					case 1: e.sent(), this.modified = !1, e.label = 2;
					case 2: return [2];
				}
			});
		});
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e;
}(), Eo = function() {
	function e(e, t, n) {
		F(e, "ref", [[vn, "PDFRef"]]), F(t, "doc", [[Ko, "PDFDocument"]]), F(n, "embedder", [[Zn, "JpegEmbedder"], [ir, "PngEmbedder"]]), this.ref = e, this.doc = t, this.width = n.width, this.height = n.height, this.embedder = n;
	}
	return e.prototype.scale = function(e) {
		return F(e, "factor", ["number"]), {
			width: this.width * e,
			height: this.height * e
		};
	}, e.prototype.scaleToFit = function(e, t) {
		F(e, "width", ["number"]), F(t, "height", ["number"]);
		var n = e / this.width, r = t / this.height, i = Math.min(n, r);
		return this.scale(i);
	}, e.prototype.size = function() {
		return this.scale(1);
	}, e.prototype.embed = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n;
			return f(this, function(r) {
				switch (r.label) {
					case 0: return this.embedder ? (this.embedTask ||= (t = (e = this).doc, n = e.ref, this.embedder.embedIntoContext(t.context, n)), [4, this.embedTask]) : [2];
					case 1: return r.sent(), this.embedder = void 0, [2];
				}
			});
		});
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e;
}();
(function(e) {
	e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right";
})(io ||= {});
var Do, Oo = function(e) {
	I(e?.x, "options.x", ["number"]), I(e?.y, "options.y", ["number"]), I(e?.width, "options.width", ["number"]), I(e?.height, "options.height", ["number"]), I(e?.textColor, "options.textColor", [[Object, "Color"]]), I(e?.backgroundColor, "options.backgroundColor", [[Object, "Color"]]), I(e?.borderColor, "options.borderColor", [[Object, "Color"]]), I(e?.borderWidth, "options.borderWidth", ["number"]), I(e?.rotate, "options.rotate", [[Object, "Rotation"]]);
}, ko = function() {
	function e(e, t, n) {
		F(e, "acroField", [[Pr, "PDFAcroTerminal"]]), F(t, "ref", [[vn, "PDFRef"]]), F(n, "doc", [[Ko, "PDFDocument"]]), this.acroField = e, this.ref = t, this.doc = n;
	}
	return e.prototype.getName = function() {
		return this.acroField.getFullyQualifiedName() ?? "";
	}, e.prototype.isReadOnly = function() {
		return this.acroField.hasFlag(Cr.ReadOnly);
	}, e.prototype.enableReadOnly = function() {
		this.acroField.setFlagTo(Cr.ReadOnly, !0);
	}, e.prototype.disableReadOnly = function() {
		this.acroField.setFlagTo(Cr.ReadOnly, !1);
	}, e.prototype.isRequired = function() {
		return this.acroField.hasFlag(Cr.Required);
	}, e.prototype.enableRequired = function() {
		this.acroField.setFlagTo(Cr.Required, !0);
	}, e.prototype.disableRequired = function() {
		this.acroField.setFlagTo(Cr.Required, !1);
	}, e.prototype.isExported = function() {
		return !this.acroField.hasFlag(Cr.NoExport);
	}, e.prototype.enableExporting = function() {
		this.acroField.setFlagTo(Cr.NoExport, !1);
	}, e.prototype.disableExporting = function() {
		this.acroField.setFlagTo(Cr.NoExport, !0);
	}, e.prototype.needsAppearancesUpdate = function() {
		throw new Et(this.constructor.name, "needsAppearancesUpdate");
	}, e.prototype.defaultUpdateAppearances = function(e) {
		throw new Et(this.constructor.name, "defaultUpdateAppearances");
	}, e.prototype.markAsDirty = function() {
		this.doc.getForm().markFieldAsDirty(this.ref);
	}, e.prototype.markAsClean = function() {
		this.doc.getForm().markFieldAsClean(this.ref);
	}, e.prototype.isDirty = function() {
		return this.doc.getForm().fieldIsDirty(this.ref);
	}, e.prototype.createWidget = function(e) {
		var t = e.textColor, n = e.backgroundColor, r = e.borderColor, i = e.borderWidth, a = ji(e.rotate), o = e.caption, s = e.x, c = e.y, l = e.width + i, u = e.height + i, d = !!e.hidden, f = e.page;
		bt(a, "degreesAngle", 90);
		var p = Nr.create(this.doc.context, this.ref), m = function(e, t, n) {
			t === void 0 && (t = 0), n === void 0 && (n = 0);
			var r = e.x, i = e.y, a = e.width, o = e.height, s = Mi(n), c = t / 2;
			return s === 0 ? {
				x: r - c,
				y: i - c,
				width: a,
				height: o
			} : s === 90 ? {
				x: r - o + c,
				y: i - c,
				width: o,
				height: a
			} : s === 180 ? {
				x: r - a + c,
				y: i - o + c,
				width: a,
				height: o
			} : s === 270 ? {
				x: r - c,
				y: i - a + c,
				width: o,
				height: a
			} : {
				x: r - c,
				y: i - c,
				width: a,
				height: o
			};
		}({
			x: s,
			y: c,
			width: l,
			height: u
		}, i, a);
		p.setRectangle(m), f && p.setP(f);
		var h = p.getOrCreateAppearanceCharacteristics();
		n && h.setBackgroundColor(Da(n)), h.setRotation(a), o && h.setCaptions({ normal: o }), r && h.setBorderColor(Da(r));
		var g = p.getOrCreateBorderStyle();
		if (i !== void 0 && g.setWidth(i), p.setFlagTo(ci.Print, !0), p.setFlagTo(ci.Hidden, d), p.setFlagTo(ci.Invisible, !1), t) {
			var _ = (this.acroField.getDefaultAppearance() ?? "") + "\n" + wa(t).toString();
			this.acroField.setDefaultAppearance(_);
		}
		return p;
	}, e.prototype.updateWidgetAppearanceWithFont = function(e, t, n) {
		var r = n.normal, i = n.rollover, a = n.down;
		this.updateWidgetAppearances(e, {
			normal: this.createAppearanceStream(e, r, t),
			rollover: i && this.createAppearanceStream(e, i, t),
			down: a && this.createAppearanceStream(e, a, t)
		});
	}, e.prototype.updateOnOffWidgetAppearance = function(e, t, n) {
		var r = n.normal, i = n.rollover, a = n.down;
		this.updateWidgetAppearances(e, {
			normal: this.createAppearanceDict(e, r, t),
			rollover: i && this.createAppearanceDict(e, i, t),
			down: a && this.createAppearanceDict(e, a, t)
		});
	}, e.prototype.updateWidgetAppearances = function(e, t) {
		var n = t.normal, r = t.rollover, i = t.down;
		e.setNormalAppearance(n), r ? e.setRolloverAppearance(r) : e.removeRolloverAppearance(), i ? e.setDownAppearance(i) : e.removeDownAppearance();
	}, e.prototype.createAppearanceStream = function(e, t, n) {
		var r, i = this.acroField.dict.context, a = e.getRectangle(), o = a.width, s = a.height, c = n && { Font: (r = {}, r[n.name] = n.ref, r) }, l = i.formXObject(t, {
			Resources: c,
			BBox: i.obj([
				0,
				0,
				o,
				s
			]),
			Matrix: i.obj([
				1,
				0,
				0,
				1,
				0,
				0
			])
		});
		return i.register(l);
	}, e.prototype.createImageAppearanceStream = function(e, t, n) {
		var r, i = this.acroField.dict.context, a = e.getRectangle(), o = e.getAppearanceCharacteristics(), s = e.getBorderStyle()?.getWidth() ?? 0, c = Mi(o?.getRotation()), l = Ba(u(u({}, a), { rotation: c })), d = Ni(a, c), f = t.scaleToFit(d.width - 2 * s, d.height - 2 * s), m = {
			x: s,
			y: s,
			width: f.width,
			height: f.height,
			rotate: Y(0),
			xSkew: Y(0),
			ySkew: Y(0)
		};
		n === io.Center ? (m.x += (d.width - 2 * s) / 2 - f.width / 2, m.y += (d.height - 2 * s) / 2 - f.height / 2) : n === io.Right && (m.x = d.width - s - f.width, m.y = d.height - s - f.height);
		var h = this.doc.context.addRandomSuffix("Image", 10), g = p(l, Ia(h, m)), _ = { XObject: (r = {}, r[h] = t.ref, r) }, v = i.formXObject(g, {
			Resources: _,
			BBox: i.obj([
				0,
				0,
				a.width,
				a.height
			]),
			Matrix: i.obj([
				1,
				0,
				0,
				1,
				0,
				0
			])
		});
		return i.register(v);
	}, e.prototype.createAppearanceDict = function(e, t, n) {
		var r = this.acroField.dict.context, i = this.createAppearanceStream(e, t.on), a = this.createAppearanceStream(e, t.off), o = r.obj({});
		return o.set(n, i), o.set(V.of("Off"), a), o;
	}, e;
}(), Ao = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroCheckBox", [[Ir, "PDFAcroCheckBox"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.check = function() {
		var e = this.acroField.getOnValue() ?? V.of("Yes");
		this.markAsDirty(), this.acroField.setValue(e);
	}, t.prototype.uncheck = function() {
		this.markAsDirty(), this.acroField.setValue(V.of("Off"));
	}, t.prototype.isChecked = function() {
		var e = this.acroField.getOnValue();
		return !!e && e === this.acroField.getValue();
	}, t.prototype.addToPage = function(e, t) {
		F(e, "page", [[Jo, "PDFPage"]]), Oo(t), t ||= {}, "textColor" in t || (t.textColor = ya(0, 0, 0)), "backgroundColor" in t || (t.backgroundColor = ya(1, 1, 1)), "borderColor" in t || (t.borderColor = ya(0, 0, 0)), "borderWidth" in t || (t.borderWidth = 1);
		var n = this.createWidget({
			x: t.x ?? 0,
			y: t.y ?? 0,
			width: t.width ?? 50,
			height: t.height ?? 50,
			textColor: t.textColor,
			backgroundColor: t.backgroundColor,
			borderColor: t.borderColor,
			borderWidth: t.borderWidth ?? 0,
			rotate: t.rotate ?? Y(0),
			hidden: t.hidden,
			page: e.ref
		}), r = this.doc.context.register(n.dict);
		this.acroField.addWidget(r), n.setAppearanceState(V.of("Off")), this.updateWidgetAppearance(n, V.of("Yes")), e.node.addAnnot(r);
	}, t.prototype.needsAppearancesUpdate = function() {
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) {
			var r = e[t], i = r.getAppearanceState(), a = r.getAppearances()?.normal;
			if (!(a instanceof H) || i && !a.has(i)) return !0;
		}
		return !1;
	}, t.prototype.defaultUpdateAppearances = function() {
		this.updateAppearances();
	}, t.prototype.updateAppearances = function(e) {
		I(e, "provider", [Function]);
		for (var t = this.acroField.getWidgets(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i.getOnValue() ?? V.of("Yes");
			a && this.updateWidgetAppearance(i, a, e);
		}
		this.markAsClean();
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? vo)(this, e));
		this.updateOnOffWidgetAppearance(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko), jo = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroComboBox", [[zr, "PDFAcroComboBox"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.getOptions = function() {
		for (var e = this.acroField.getOptions(), t = Array(e.length), n = 0, r = t.length; n < r; n++) {
			var i = e[n], a = i.display, o = i.value;
			t[n] = (a ?? o).decodeText();
		}
		return t;
	}, t.prototype.getSelected = function() {
		for (var e = this.acroField.getValues(), t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = e[n].decodeText();
		return t;
	}, t.prototype.setOptions = function(e) {
		F(e, "options", [Array]);
		for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = { value: G.fromText(e[n]) };
		this.acroField.setOptions(t);
	}, t.prototype.addOptions = function(e) {
		F(e, "options", ["string", Array]);
		for (var t = Array.isArray(e) ? e : [e], n = this.acroField.getOptions(), r = Array(t.length), i = 0, a = t.length; i < a; i++) r[i] = { value: G.fromText(t[i]) };
		this.acroField.setOptions(n.concat(r));
	}, t.prototype.select = function(e, t) {
		t === void 0 && (t = !1), F(e, "options", ["string", Array]), F(t, "merge", ["boolean"]);
		var n = Array.isArray(e) ? e : [e], r = this.getOptions();
		n.find(function(e) {
			return !r.includes(e);
		}) && this.enableEditing(), this.markAsDirty(), (n.length > 1 || n.length === 1 && t) && this.enableMultiselect();
		for (var i = Array(n.length), a = 0, o = n.length; a < o; a++) i[a] = G.fromText(n[a]);
		if (t) {
			var s = this.acroField.getValues();
			this.acroField.setValues(s.concat(i));
		} else this.acroField.setValues(i);
	}, t.prototype.clear = function() {
		this.markAsDirty(), this.acroField.setValues([]);
	}, t.prototype.setFontSize = function(e) {
		xt(e, "fontSize"), this.acroField.setFontSize(e), this.markAsDirty();
	}, t.prototype.isEditable = function() {
		return this.acroField.hasFlag(Er.Edit);
	}, t.prototype.enableEditing = function() {
		this.acroField.setFlagTo(Er.Edit, !0);
	}, t.prototype.disableEditing = function() {
		this.acroField.setFlagTo(Er.Edit, !1);
	}, t.prototype.isSorted = function() {
		return this.acroField.hasFlag(Er.Sort);
	}, t.prototype.enableSorting = function() {
		this.acroField.setFlagTo(Er.Sort, !0);
	}, t.prototype.disableSorting = function() {
		this.acroField.setFlagTo(Er.Sort, !1);
	}, t.prototype.isMultiselect = function() {
		return this.acroField.hasFlag(Er.MultiSelect);
	}, t.prototype.enableMultiselect = function() {
		this.acroField.setFlagTo(Er.MultiSelect, !0);
	}, t.prototype.disableMultiselect = function() {
		this.acroField.setFlagTo(Er.MultiSelect, !1);
	}, t.prototype.isSpellChecked = function() {
		return !this.acroField.hasFlag(Er.DoNotSpellCheck);
	}, t.prototype.enableSpellChecking = function() {
		this.acroField.setFlagTo(Er.DoNotSpellCheck, !1);
	}, t.prototype.disableSpellChecking = function() {
		this.acroField.setFlagTo(Er.DoNotSpellCheck, !0);
	}, t.prototype.isSelectOnClick = function() {
		return this.acroField.hasFlag(Er.CommitOnSelChange);
	}, t.prototype.enableSelectOnClick = function() {
		this.acroField.setFlagTo(Er.CommitOnSelChange, !0);
	}, t.prototype.disableSelectOnClick = function() {
		this.acroField.setFlagTo(Er.CommitOnSelChange, !1);
	}, t.prototype.addToPage = function(e, t) {
		F(e, "page", [[Jo, "PDFPage"]]), Oo(t), t ||= {}, "textColor" in t || (t.textColor = ya(0, 0, 0)), "backgroundColor" in t || (t.backgroundColor = ya(1, 1, 1)), "borderColor" in t || (t.borderColor = ya(0, 0, 0)), "borderWidth" in t || (t.borderWidth = 1);
		var n = this.createWidget({
			x: t.x ?? 0,
			y: t.y ?? 0,
			width: t.width ?? 200,
			height: t.height ?? 50,
			textColor: t.textColor,
			backgroundColor: t.backgroundColor,
			borderColor: t.borderColor,
			borderWidth: t.borderWidth ?? 0,
			rotate: t.rotate ?? Y(0),
			hidden: t.hidden,
			page: e.ref
		}), r = this.doc.context.register(n.dict);
		this.acroField.addWidget(r);
		var i = t.font ?? this.doc.getForm().getDefaultFont();
		this.updateWidgetAppearance(n, i), e.node.addAnnot(r);
	}, t.prototype.needsAppearancesUpdate = function() {
		if (this.isDirty()) return !0;
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) if (!(e[t].getAppearances()?.normal instanceof mn)) return !0;
		return !1;
	}, t.prototype.defaultUpdateAppearances = function(e) {
		F(e, "font", [[To, "PDFFont"]]), this.updateAppearances(e);
	}, t.prototype.updateAppearances = function(e, t) {
		F(e, "font", [[To, "PDFFont"]]), I(t, "provider", [Function]);
		for (var n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			this.updateWidgetAppearance(a, e, t);
		}
		this.markAsClean();
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? So)(this, e, t));
		this.updateWidgetAppearanceWithFont(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko), Mo = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroListBox", [[Gr, "PDFAcroListBox"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.getOptions = function() {
		for (var e = this.acroField.getOptions(), t = Array(e.length), n = 0, r = t.length; n < r; n++) {
			var i = e[n], a = i.display, o = i.value;
			t[n] = (a ?? o).decodeText();
		}
		return t;
	}, t.prototype.getSelected = function() {
		for (var e = this.acroField.getValues(), t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = e[n].decodeText();
		return t;
	}, t.prototype.setOptions = function(e) {
		F(e, "options", [Array]), this.markAsDirty();
		for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = { value: G.fromText(e[n]) };
		this.acroField.setOptions(t);
	}, t.prototype.addOptions = function(e) {
		F(e, "options", ["string", Array]), this.markAsDirty();
		for (var t = Array.isArray(e) ? e : [e], n = this.acroField.getOptions(), r = Array(t.length), i = 0, a = t.length; i < a; i++) r[i] = { value: G.fromText(t[i]) };
		this.acroField.setOptions(n.concat(r));
	}, t.prototype.select = function(e, t) {
		t === void 0 && (t = !1), F(e, "options", ["string", Array]), F(t, "merge", ["boolean"]);
		var n = Array.isArray(e) ? e : [e];
		mt(n, "option", this.getOptions()), this.markAsDirty(), (n.length > 1 || n.length === 1 && t) && this.enableMultiselect();
		for (var r = Array(n.length), i = 0, a = n.length; i < a; i++) r[i] = G.fromText(n[i]);
		if (t) {
			var o = this.acroField.getValues();
			this.acroField.setValues(o.concat(r));
		} else this.acroField.setValues(r);
	}, t.prototype.clear = function() {
		this.markAsDirty(), this.acroField.setValues([]);
	}, t.prototype.setFontSize = function(e) {
		xt(e, "fontSize"), this.acroField.setFontSize(e), this.markAsDirty();
	}, t.prototype.isSorted = function() {
		return this.acroField.hasFlag(Er.Sort);
	}, t.prototype.enableSorting = function() {
		this.acroField.setFlagTo(Er.Sort, !0);
	}, t.prototype.disableSorting = function() {
		this.acroField.setFlagTo(Er.Sort, !1);
	}, t.prototype.isMultiselect = function() {
		return this.acroField.hasFlag(Er.MultiSelect);
	}, t.prototype.enableMultiselect = function() {
		this.acroField.setFlagTo(Er.MultiSelect, !0);
	}, t.prototype.disableMultiselect = function() {
		this.acroField.setFlagTo(Er.MultiSelect, !1);
	}, t.prototype.isSelectOnClick = function() {
		return this.acroField.hasFlag(Er.CommitOnSelChange);
	}, t.prototype.enableSelectOnClick = function() {
		this.acroField.setFlagTo(Er.CommitOnSelChange, !0);
	}, t.prototype.disableSelectOnClick = function() {
		this.acroField.setFlagTo(Er.CommitOnSelChange, !1);
	}, t.prototype.addToPage = function(e, t) {
		F(e, "page", [[Jo, "PDFPage"]]), Oo(t), t ||= {}, "textColor" in t || (t.textColor = ya(0, 0, 0)), "backgroundColor" in t || (t.backgroundColor = ya(1, 1, 1)), "borderColor" in t || (t.borderColor = ya(0, 0, 0)), "borderWidth" in t || (t.borderWidth = 1);
		var n = this.createWidget({
			x: t.x ?? 0,
			y: t.y ?? 0,
			width: t.width ?? 200,
			height: t.height ?? 100,
			textColor: t.textColor,
			backgroundColor: t.backgroundColor,
			borderColor: t.borderColor,
			borderWidth: t.borderWidth ?? 0,
			rotate: t.rotate ?? Y(0),
			hidden: t.hidden,
			page: e.ref
		}), r = this.doc.context.register(n.dict);
		this.acroField.addWidget(r);
		var i = t.font ?? this.doc.getForm().getDefaultFont();
		this.updateWidgetAppearance(n, i), e.node.addAnnot(r);
	}, t.prototype.needsAppearancesUpdate = function() {
		if (this.isDirty()) return !0;
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) if (!(e[t].getAppearances()?.normal instanceof mn)) return !0;
		return !1;
	}, t.prototype.defaultUpdateAppearances = function(e) {
		F(e, "font", [[To, "PDFFont"]]), this.updateAppearances(e);
	}, t.prototype.updateAppearances = function(e, t) {
		F(e, "font", [[To, "PDFFont"]]), I(t, "provider", [Function]);
		for (var n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			this.updateWidgetAppearance(a, e, t);
		}
		this.markAsClean();
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? Co)(this, e, t));
		this.updateWidgetAppearanceWithFont(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko), No = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroRadioButton", [[Wr, "PDFAcroRadioButton"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.getOptions = function() {
		var e = this.acroField.getExportValues();
		if (e) {
			for (var t = Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = e[n].decodeText();
			return t;
		}
		var i = this.acroField.getOnValues(), a = Array(i.length);
		for (n = 0, r = a.length; n < r; n++) a[n] = i[n].decodeText();
		return a;
	}, t.prototype.getSelected = function() {
		var e = this.acroField.getValue();
		if (e !== V.of("Off")) {
			var t = this.acroField.getExportValues();
			if (t) {
				for (var n = this.acroField.getOnValues(), r = 0, i = n.length; r < i; r++) if (n[r] === e) return t[r].decodeText();
			}
			return e.decodeText();
		}
	}, t.prototype.select = function(e) {
		F(e, "option", ["string"]), ft(e, "option", this.getOptions()), this.markAsDirty();
		var t = this.acroField.getOnValues(), n = this.acroField.getExportValues();
		if (n) for (var r = 0, i = n.length; r < i; r++) n[r].decodeText() === e && this.acroField.setValue(t[r]);
		else for (r = 0, i = t.length; r < i; r++) {
			var a = t[r];
			a.decodeText() === e && this.acroField.setValue(a);
		}
	}, t.prototype.clear = function() {
		this.markAsDirty(), this.acroField.setValue(V.of("Off"));
	}, t.prototype.isOffToggleable = function() {
		return !this.acroField.hasFlag(wr.NoToggleToOff);
	}, t.prototype.enableOffToggling = function() {
		this.acroField.setFlagTo(wr.NoToggleToOff, !1);
	}, t.prototype.disableOffToggling = function() {
		this.acroField.setFlagTo(wr.NoToggleToOff, !0);
	}, t.prototype.isMutuallyExclusive = function() {
		return !this.acroField.hasFlag(wr.RadiosInUnison);
	}, t.prototype.enableMutualExclusion = function() {
		this.acroField.setFlagTo(wr.RadiosInUnison, !1);
	}, t.prototype.disableMutualExclusion = function() {
		this.acroField.setFlagTo(wr.RadiosInUnison, !0);
	}, t.prototype.addOptionToPage = function(e, t, n) {
		F(e, "option", ["string"]), F(t, "page", [[Jo, "PDFPage"]]), Oo(n);
		var r = this.createWidget({
			x: n?.x ?? 0,
			y: n?.y ?? 0,
			width: n?.width ?? 50,
			height: n?.height ?? 50,
			textColor: n?.textColor ?? ya(0, 0, 0),
			backgroundColor: n?.backgroundColor ?? ya(1, 1, 1),
			borderColor: n?.borderColor ?? ya(0, 0, 0),
			borderWidth: n?.borderWidth ?? 1,
			rotate: n?.rotate ?? Y(0),
			hidden: n?.hidden,
			page: t.ref
		}), i = this.doc.context.register(r.dict), a = this.acroField.addWidgetWithOpt(i, G.fromText(e), !this.isMutuallyExclusive());
		r.setAppearanceState(V.of("Off")), this.updateWidgetAppearance(r, a), t.node.addAnnot(i);
	}, t.prototype.needsAppearancesUpdate = function() {
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) {
			var r = e[t], i = r.getAppearanceState(), a = r.getAppearances()?.normal;
			if (!(a instanceof H) || i && !a.has(i)) return !0;
		}
		return !1;
	}, t.prototype.defaultUpdateAppearances = function() {
		this.updateAppearances();
	}, t.prototype.updateAppearances = function(e) {
		I(e, "provider", [Function]);
		for (var t = this.acroField.getWidgets(), n = 0, r = t.length; n < r; n++) {
			var i = t[n], a = i.getOnValue();
			a && this.updateWidgetAppearance(i, a, e);
		}
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? yo)(this, e));
		this.updateOnOffWidgetAppearance(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko), Po = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroSignature", [[Vr, "PDFAcroSignature"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.needsAppearancesUpdate = function() {
		return !1;
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko), Fo = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroText", [[Hr, "PDFAcroText"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.getText = function() {
		var e = this.acroField.getValue();
		if (!e && this.isRichFormatted()) throw new eo(this.getName());
		return e?.decodeText();
	}, t.prototype.setText = function(e) {
		I(e, "text", ["string"]);
		var t = this.getMaxLength();
		if (t !== void 0 && e && e.length > t) throw new no(e.length, t, this.getName());
		this.markAsDirty(), this.disableRichFormatting(), e ? this.acroField.setValue(G.fromText(e)) : this.acroField.removeValue();
	}, t.prototype.getAlignment = function() {
		var e = this.acroField.getQuadding();
		return e === 0 ? _a.Left : e === 1 ? _a.Center : e === 2 ? _a.Right : _a.Left;
	}, t.prototype.setAlignment = function(e) {
		ft(e, "alignment", _a), this.markAsDirty(), this.acroField.setQuadding(e);
	}, t.prototype.getMaxLength = function() {
		return this.acroField.getMaxLength();
	}, t.prototype.setMaxLength = function(e) {
		if (yt(e, "maxLength", 0, 2 ** 53 - 1), this.markAsDirty(), e === void 0) this.acroField.removeMaxLength();
		else {
			var t = this.getText();
			if (t && t.length > e) throw new ro(t.length, e, this.getName());
			this.acroField.setMaxLength(e);
		}
	}, t.prototype.removeMaxLength = function() {
		this.markAsDirty(), this.acroField.removeMaxLength();
	}, t.prototype.setImage = function(e) {
		for (var t = this.getAlignment(), n = t === _a.Center ? io.Center : t === _a.Right ? io.Right : io.Left, r = this.acroField.getWidgets(), i = 0, a = r.length; i < a; i++) {
			var o = r[i], s = this.createImageAppearanceStream(o, e, n);
			this.updateWidgetAppearances(o, { normal: s });
		}
		this.markAsClean();
	}, t.prototype.setFontSize = function(e) {
		xt(e, "fontSize"), this.acroField.setFontSize(e), this.markAsDirty();
	}, t.prototype.isMultiline = function() {
		return this.acroField.hasFlag(Tr.Multiline);
	}, t.prototype.enableMultiline = function() {
		this.markAsDirty(), this.acroField.setFlagTo(Tr.Multiline, !0);
	}, t.prototype.disableMultiline = function() {
		this.markAsDirty(), this.acroField.setFlagTo(Tr.Multiline, !1);
	}, t.prototype.isPassword = function() {
		return this.acroField.hasFlag(Tr.Password);
	}, t.prototype.enablePassword = function() {
		this.acroField.setFlagTo(Tr.Password, !0);
	}, t.prototype.disablePassword = function() {
		this.acroField.setFlagTo(Tr.Password, !1);
	}, t.prototype.isFileSelector = function() {
		return this.acroField.hasFlag(Tr.FileSelect);
	}, t.prototype.enableFileSelection = function() {
		this.acroField.setFlagTo(Tr.FileSelect, !0);
	}, t.prototype.disableFileSelection = function() {
		this.acroField.setFlagTo(Tr.FileSelect, !1);
	}, t.prototype.isSpellChecked = function() {
		return !this.acroField.hasFlag(Tr.DoNotSpellCheck);
	}, t.prototype.enableSpellChecking = function() {
		this.acroField.setFlagTo(Tr.DoNotSpellCheck, !1);
	}, t.prototype.disableSpellChecking = function() {
		this.acroField.setFlagTo(Tr.DoNotSpellCheck, !0);
	}, t.prototype.isScrollable = function() {
		return !this.acroField.hasFlag(Tr.DoNotScroll);
	}, t.prototype.enableScrolling = function() {
		this.acroField.setFlagTo(Tr.DoNotScroll, !1);
	}, t.prototype.disableScrolling = function() {
		this.acroField.setFlagTo(Tr.DoNotScroll, !0);
	}, t.prototype.isCombed = function() {
		return this.acroField.hasFlag(Tr.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== void 0;
	}, t.prototype.enableCombing = function() {
		this.getMaxLength() === void 0 && console.warn("PDFTextFields must have a max length in order to be combed"), this.markAsDirty(), this.disableMultiline(), this.disablePassword(), this.disableFileSelection(), this.acroField.setFlagTo(Tr.Comb, !0);
	}, t.prototype.disableCombing = function() {
		this.markAsDirty(), this.acroField.setFlagTo(Tr.Comb, !1);
	}, t.prototype.isRichFormatted = function() {
		return this.acroField.hasFlag(Tr.RichText);
	}, t.prototype.enableRichFormatting = function() {
		this.acroField.setFlagTo(Tr.RichText, !0);
	}, t.prototype.disableRichFormatting = function() {
		this.acroField.setFlagTo(Tr.RichText, !1);
	}, t.prototype.addToPage = function(e, t) {
		F(e, "page", [[Jo, "PDFPage"]]), Oo(t), t ||= {}, "textColor" in t || (t.textColor = ya(0, 0, 0)), "backgroundColor" in t || (t.backgroundColor = ya(1, 1, 1)), "borderColor" in t || (t.borderColor = ya(0, 0, 0)), "borderWidth" in t || (t.borderWidth = 1);
		var n = this.createWidget({
			x: t.x ?? 0,
			y: t.y ?? 0,
			width: t.width ?? 200,
			height: t.height ?? 50,
			textColor: t.textColor,
			backgroundColor: t.backgroundColor,
			borderColor: t.borderColor,
			borderWidth: t.borderWidth ?? 0,
			rotate: t.rotate ?? Y(0),
			hidden: t.hidden,
			page: e.ref
		}), r = this.doc.context.register(n.dict);
		this.acroField.addWidget(r);
		var i = t.font ?? this.doc.getForm().getDefaultFont();
		this.updateWidgetAppearance(n, i), e.node.addAnnot(r);
	}, t.prototype.needsAppearancesUpdate = function() {
		if (this.isDirty()) return !0;
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) if (!(e[t].getAppearances()?.normal instanceof mn)) return !0;
		return !1;
	}, t.prototype.defaultUpdateAppearances = function(e) {
		F(e, "font", [[To, "PDFFont"]]), this.updateAppearances(e);
	}, t.prototype.updateAppearances = function(e, t) {
		F(e, "font", [[To, "PDFFont"]]), I(t, "provider", [Function]);
		for (var n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			this.updateWidgetAppearance(a, e, t);
		}
		this.markAsClean();
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? xo)(this, e, t));
		this.updateWidgetAppearanceWithFont(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko);
(function(e) {
	e.Courier = "Courier", e.CourierBold = "Courier-Bold", e.CourierOblique = "Courier-Oblique", e.CourierBoldOblique = "Courier-BoldOblique", e.Helvetica = "Helvetica", e.HelveticaBold = "Helvetica-Bold", e.HelveticaOblique = "Helvetica-Oblique", e.HelveticaBoldOblique = "Helvetica-BoldOblique", e.TimesRoman = "Times-Roman", e.TimesRomanBold = "Times-Bold", e.TimesRomanItalic = "Times-Italic", e.TimesRomanBoldItalic = "Times-BoldItalic", e.Symbol = "Symbol", e.ZapfDingbats = "ZapfDingbats";
})(Do ||= {});
var Io, Lo = function() {
	function e(e, t) {
		var n = this;
		this.embedDefaultFont = function() {
			return n.doc.embedStandardFont(Do.Helvetica);
		}, F(e, "acroForm", [[ti, "PDFAcroForm"]]), F(t, "doc", [[Ko, "PDFDocument"]]), this.acroForm = e, this.doc = t, this.dirtyFields = /* @__PURE__ */ new Set(), this.defaultFontCache = Tt.populatedBy(this.embedDefaultFont);
	}
	return e.prototype.hasXFA = function() {
		return this.acroForm.dict.has(V.of("XFA"));
	}, e.prototype.deleteXFA = function() {
		this.acroForm.dict.delete(V.of("XFA"));
	}, e.prototype.getFields = function() {
		for (var e = this.acroForm.getAllFields(), t = [], n = 0, r = e.length; n < r; n++) {
			var i = e[n], a = i[0], o = i[1], s = Ro(a, o, this.doc);
			s && t.push(s);
		}
		return t;
	}, e.prototype.getFieldMaybe = function(e) {
		F(e, "name", ["string"]);
		for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
			var i = t[n];
			if (i.getName() === e) return i;
		}
	}, e.prototype.getField = function(e) {
		F(e, "name", ["string"]);
		var t = this.getFieldMaybe(e);
		if (t) return t;
		throw new Xa(e);
	}, e.prototype.getButton = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof Yo) return t;
		throw new Za(e, Yo, t);
	}, e.prototype.getCheckBox = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof Ao) return t;
		throw new Za(e, Ao, t);
	}, e.prototype.getDropdown = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof jo) return t;
		throw new Za(e, jo, t);
	}, e.prototype.getOptionList = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof Mo) return t;
		throw new Za(e, Mo, t);
	}, e.prototype.getRadioGroup = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof No) return t;
		throw new Za(e, No, t);
	}, e.prototype.getSignature = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof Po) return t;
		throw new Za(e, Po, t);
	}, e.prototype.getTextField = function(e) {
		F(e, "name", ["string"]);
		var t = this.getField(e);
		if (t instanceof Fo) return t;
		throw new Za(e, Fo, t);
	}, e.prototype.createButton = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = Ur.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), Yo.of(r, r.ref, this.doc);
	}, e.prototype.createCheckBox = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = Ir.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), Ao.of(r, r.ref, this.doc);
	}, e.prototype.createDropdown = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = zr.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), jo.of(r, r.ref, this.doc);
	}, e.prototype.createOptionList = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = Gr.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), Mo.of(r, r.ref, this.doc);
	}, e.prototype.createRadioGroup = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = Wr.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), No.of(r, r.ref, this.doc);
	}, e.prototype.createTextField = function(e) {
		F(e, "name", ["string"]);
		var t = zo(e), n = this.findOrCreateNonTerminals(t.nonTerminal), r = Hr.create(this.doc.context);
		return r.setPartialName(t.terminal), Bo(n, [r, r.ref], t.terminal), Fo.of(r, r.ref, this.doc);
	}, e.prototype.flatten = function(e) {
		e === void 0 && (e = { updateFieldAppearances: !0 }), e.updateFieldAppearances && this.updateFieldAppearances();
		for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
			for (var i = t[n], a = i.acroField.getWidgets(), o = 0, s = a.length; o < s; o++) {
				var c = a[o], l = this.findWidgetPage(c), d = this.findWidgetAppearanceRef(i, c), f = l.node.newXObject("FlatWidget", d), m = c.getRectangle(), h = p([Yi(), zi(m.x, m.y)], Ba(u(u({}, m), { rotation: 0 })), [ma(f), Xi()]).filter(Boolean);
				l.pushOperators.apply(l, h);
			}
			this.removeField(i);
		}
	}, e.prototype.removeField = function(e) {
		for (var t = e.acroField.getWidgets(), n = /* @__PURE__ */ new Set(), r = 0, i = t.length; r < i; r++) {
			var a = t[r], o = this.findWidgetAppearanceRef(e, a), s = this.findWidgetPage(a);
			n.add(s), s.node.removeAnnot(o);
		}
		n.forEach(function(t) {
			return t.node.removeAnnot(e.ref);
		}), this.acroForm.removeField(e.acroField);
		for (var c = e.acroField.normalizedEntries().Kids, l = c.size(), u = 0; u < l; u++) {
			var d = c.get(u);
			d instanceof vn && this.doc.context.delete(d);
		}
		this.doc.context.delete(e.ref);
	}, e.prototype.updateFieldAppearances = function(e) {
		I(e, "font", [[To, "PDFFont"]]), e ??= this.getDefaultFont();
		for (var t = this.getFields(), n = 0, r = t.length; n < r; n++) {
			var i = t[n];
			i.needsAppearancesUpdate() && i.defaultUpdateAppearances(e);
		}
	}, e.prototype.markFieldAsDirty = function(e) {
		I(e, "fieldRef", [[vn, "PDFRef"]]), this.dirtyFields.add(e);
	}, e.prototype.markFieldAsClean = function(e) {
		I(e, "fieldRef", [[vn, "PDFRef"]]), this.dirtyFields.delete(e);
	}, e.prototype.fieldIsDirty = function(e) {
		return I(e, "fieldRef", [[vn, "PDFRef"]]), this.dirtyFields.has(e);
	}, e.prototype.getDefaultFont = function() {
		return this.defaultFontCache.access();
	}, e.prototype.findWidgetPage = function(e) {
		var t = e.P(), n = this.doc.getPages().find(function(e) {
			return e.ref === t;
		});
		if (n === void 0) {
			var r = this.doc.context.getObjectRef(e.dict);
			if (r === void 0) throw Error("Could not find PDFRef for PDFObject");
			if ((n = this.doc.findPageForAnnotationRef(r)) === void 0) throw Error("Could not find page for PDFRef " + r);
		}
		return n;
	}, e.prototype.findWidgetAppearanceRef = function(e, t) {
		var n = t.getNormalAppearance();
		if (n instanceof H && (e instanceof Ao || e instanceof No)) {
			var r = e.acroField.getValue(), i = n.get(r) ?? n.get(V.of("Off"));
			i instanceof vn && (n = i);
		}
		if (!(n instanceof vn)) {
			var a = e.getName();
			throw Error("Failed to extract appearance ref for: " + a);
		}
		return n;
	}, e.prototype.findOrCreateNonTerminals = function(e) {
		for (var t = [this.acroForm], n = 0, r = e.length; n < r; n++) {
			var i = e[n];
			if (!i) throw new $a(i);
			var a = t[0], o = t[1], s = this.findNonTerminal(i, a);
			if (s) t = s;
			else {
				var c = Br.create(this.doc.context);
				c.setPartialName(i), c.setParent(o);
				var l = this.doc.context.register(c.dict);
				a.addField(l), t = [c, l];
			}
		}
		return t;
	}, e.prototype.findNonTerminal = function(e, t) {
		for (var n = t instanceof ti ? this.acroForm.getFields() : Kr(t.Kids()), r = 0, i = n.length; r < i; r++) {
			var a = n[r], o = a[0], s = a[1];
			if (o.getPartialName() === e) {
				if (o instanceof Br) return [o, s];
				throw new Qa(e);
			}
		}
	}, e.of = function(t, n) {
		return new e(t, n);
	}, e;
}(), Ro = function(e, t, n) {
	return e instanceof Ur ? Yo.of(e, t, n) : e instanceof Ir ? Ao.of(e, t, n) : e instanceof zr ? jo.of(e, t, n) : e instanceof Gr ? Mo.of(e, t, n) : e instanceof Hr ? Fo.of(e, t, n) : e instanceof Wr ? No.of(e, t, n) : e instanceof Vr ? Po.of(e, t, n) : void 0;
}, zo = function(e) {
	if (e.length === 0) throw Error("PDF field names must not be empty strings");
	for (var t = e.split("."), n = 0, r = t.length; n < r; n++) if (t[n] === "") throw Error("Periods in PDF field names must be separated by at least one character: \"" + e + "\"");
	return t.length === 1 ? {
		nonTerminal: [],
		terminal: t[0]
	} : {
		nonTerminal: t.slice(0, t.length - 1),
		terminal: t[t.length - 1]
	};
}, Bo = function(e, t, n) {
	for (var r = e[0], i = e[1], a = t[0], o = t[1], s = r.normalizedEntries(), c = Kr("Kids" in s ? s.Kids : s.Fields), l = 0, u = c.length; l < u; l++) if (c[l][0].getPartialName() === n) throw new Qa(n);
	r.addField(o), a.setParent(i);
}, Vo = {
	"4A0": [4767.87, 6740.79],
	"2A0": [3370.39, 4767.87],
	A0: [2383.94, 3370.39],
	A1: [1683.78, 2383.94],
	A2: [1190.55, 1683.78],
	A3: [841.89, 1190.55],
	A4: [595.28, 841.89],
	A5: [419.53, 595.28],
	A6: [297.64, 419.53],
	A7: [209.76, 297.64],
	A8: [147.4, 209.76],
	A9: [104.88, 147.4],
	A10: [73.7, 104.88],
	B0: [2834.65, 4008.19],
	B1: [2004.09, 2834.65],
	B2: [1417.32, 2004.09],
	B3: [1000.63, 1417.32],
	B4: [708.66, 1000.63],
	B5: [498.9, 708.66],
	B6: [354.33, 498.9],
	B7: [249.45, 354.33],
	B8: [175.75, 249.45],
	B9: [124.72, 175.75],
	B10: [87.87, 124.72],
	C0: [2599.37, 3676.54],
	C1: [1836.85, 2599.37],
	C2: [1298.27, 1836.85],
	C3: [918.43, 1298.27],
	C4: [649.13, 918.43],
	C5: [459.21, 649.13],
	C6: [323.15, 459.21],
	C7: [229.61, 323.15],
	C8: [161.57, 229.61],
	C9: [113.39, 161.57],
	C10: [79.37, 113.39],
	RA0: [2437.8, 3458.27],
	RA1: [1729.13, 2437.8],
	RA2: [1218.9, 1729.13],
	RA3: [864.57, 1218.9],
	RA4: [609.45, 864.57],
	SRA0: [2551.18, 3628.35],
	SRA1: [1814.17, 2551.18],
	SRA2: [1275.59, 1814.17],
	SRA3: [907.09, 1275.59],
	SRA4: [637.8, 907.09],
	Executive: [521.86, 756],
	Folio: [612, 936],
	Legal: [612, 1008],
	Letter: [612, 792],
	Tabloid: [792, 1224]
};
(function(e) {
	e[e.Fastest = 1 / 0] = "Fastest", e[e.Fast = 1500] = "Fast", e[e.Medium = 500] = "Medium", e[e.Slow = 100] = "Slow";
})(Io ||= {});
var Ho, Uo = function() {
	function e(e, t, n) {
		this.alreadyEmbedded = !1, this.ref = e, this.doc = t, this.embedder = n;
	}
	return e.prototype.embed = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r;
			return f(this, function(i) {
				switch (i.label) {
					case 0: return this.alreadyEmbedded ? [3, 2] : [4, this.embedder.embedIntoContext(this.doc.context, this.ref)];
					case 1: e = i.sent(), this.doc.catalog.has(V.of("Names")) || this.doc.catalog.set(V.of("Names"), this.doc.context.obj({})), (t = this.doc.catalog.lookup(V.of("Names"), H)).has(V.of("EmbeddedFiles")) || t.set(V.of("EmbeddedFiles"), this.doc.context.obj({})), (n = t.lookup(V.of("EmbeddedFiles"), H)).has(V.of("Names")) || n.set(V.of("Names"), this.doc.context.obj([])), (r = n.lookup(V.of("Names"), B)).push(G.fromText(this.embedder.fileName)), r.push(e), this.doc.catalog.has(V.of("AF")) || this.doc.catalog.set(V.of("AF"), this.doc.context.obj([])), this.doc.catalog.lookup(V.of("AF"), B).push(e), this.alreadyEmbedded = !0, i.label = 2;
					case 2: return [2];
				}
			});
		});
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e;
}(), Wo = function() {
	function e(e, t, n) {
		this.alreadyEmbedded = !1, this.ref = e, this.doc = t, this.embedder = n;
	}
	return e.prototype.embed = function() {
		return d(this, void 0, void 0, function() {
			var e, t, n, r, i, a, o;
			return f(this, function(s) {
				switch (s.label) {
					case 0: return this.alreadyEmbedded ? [3, 2] : (e = this.doc, t = e.catalog, n = e.context, [4, this.embedder.embedIntoContext(this.doc.context, this.ref)]);
					case 1: r = s.sent(), t.has(V.of("Names")) || t.set(V.of("Names"), n.obj({})), (i = t.lookup(V.of("Names"), H)).has(V.of("JavaScript")) || i.set(V.of("JavaScript"), n.obj({})), (a = i.lookup(V.of("JavaScript"), H)).has(V.of("Names")) || a.set(V.of("Names"), n.obj([])), (o = a.lookup(V.of("Names"), B)).push(G.fromText(this.embedder.scriptName)), o.push(r), this.alreadyEmbedded = !0, s.label = 2;
					case 2: return [2];
				}
			});
		});
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e;
}(), Go = function() {
	function e(e, t) {
		this.script = e, this.scriptName = t;
	}
	return e.for = function(t, n) {
		return new e(t, n);
	}, e.prototype.embedIntoContext = function(e, t) {
		return d(this, void 0, void 0, function() {
			var n;
			return f(this, function(r) {
				return n = e.obj({
					Type: "Action",
					S: "JavaScript",
					JS: G.fromText(this.script)
				}), t ? (e.assign(t, n), [2, t]) : [2, e.register(n)];
			});
		});
	}, e;
}(), Ko = function() {
	function e(e, t, n) {
		var r = this;
		if (this.defaultWordBreaks = [" "], this.computePages = function() {
			var e = [];
			return r.catalog.Pages().traverse(function(t, n) {
				if (t instanceof Tn) {
					var i = r.pageMap.get(t);
					i || (i = Jo.of(t, n, r), r.pageMap.set(t, i)), e.push(i);
				}
			}), e;
		}, this.getOrCreateForm = function() {
			var e = r.catalog.getOrCreateAcroForm();
			return Lo.of(e, r);
		}, F(e, "context", [[wn, "PDFContext"]]), F(t, "ignoreEncryption", ["boolean"]), this.context = e, this.catalog = e.lookup(e.trailerInfo.Root), this.isEncrypted = !!e.lookup(e.trailerInfo.Encrypt), this.pageCache = Tt.populatedBy(this.computePages), this.pageMap = /* @__PURE__ */ new Map(), this.formCache = Tt.populatedBy(this.getOrCreateForm), this.fonts = [], this.images = [], this.embeddedPages = [], this.embeddedFiles = [], this.javaScripts = [], !t && this.isEncrypted) throw new Ka();
		n && this.updateInfoDict();
	}
	return e.load = function(t, n) {
		return n === void 0 && (n = {}), d(this, void 0, void 0, function() {
			var r, i, a, o, s, c, l, u, d, p, m;
			return f(this, function(f) {
				switch (f.label) {
					case 0: return r = n.ignoreEncryption, i = r !== void 0 && r, a = n.parseSpeed, o = a === void 0 ? Io.Slow : a, s = n.throwOnInvalidObject, c = s !== void 0 && s, l = n.updateMetadata, u = l === void 0 || l, d = n.capNumbers, p = d !== void 0 && d, F(t, "pdf", [
						"string",
						Uint8Array,
						ArrayBuffer
					]), F(i, "ignoreEncryption", ["boolean"]), F(o, "parseSpeed", ["number"]), F(c, "throwOnInvalidObject", ["boolean"]), m = le(t), [4, Si.forBytesWithOptions(m, o, c, p).parseDocument()];
					case 1: return [2, new e(f.sent(), i, u)];
				}
			});
		});
	}, e.create = function(t) {
		return t === void 0 && (t = {}), d(this, void 0, void 0, function() {
			var n, r, i, a, o, s;
			return f(this, function(c) {
				return n = t.updateMetadata, r = n === void 0 || n, i = wn.create(), a = ri.withContext(i), o = i.register(a), s = ni.withContextAndPages(i, o), i.trailerInfo.Root = i.register(s), [2, new e(i, !1, r)];
			});
		});
	}, e.prototype.registerFontkit = function(e) {
		this.fontkit = e;
	}, e.prototype.getForm = function() {
		var e = this.formCache.access();
		return e.hasXFA() && (console.warn("Removing XFA form data as pdf-lib does not support reading or writing XFA"), e.deleteXFA()), e;
	}, e.prototype.getTitle = function() {
		var e = this.getInfoDict().lookup(V.Title);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getAuthor = function() {
		var e = this.getInfoDict().lookup(V.Author);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getSubject = function() {
		var e = this.getInfoDict().lookup(V.Subject);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getKeywords = function() {
		var e = this.getInfoDict().lookup(V.Keywords);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getCreator = function() {
		var e = this.getInfoDict().lookup(V.Creator);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getProducer = function() {
		var e = this.getInfoDict().lookup(V.Producer);
		if (e) return qo(e), e.decodeText();
	}, e.prototype.getCreationDate = function() {
		var e = this.getInfoDict().lookup(V.CreationDate);
		if (e) return qo(e), e.decodeDate();
	}, e.prototype.getModificationDate = function() {
		var e = this.getInfoDict().lookup(V.ModDate);
		if (e) return qo(e), e.decodeDate();
	}, e.prototype.setTitle = function(e, t) {
		F(e, "title", ["string"]);
		var n = V.of("Title");
		this.getInfoDict().set(n, G.fromText(e)), t?.showInWindowTitleBar && this.catalog.getOrCreateViewerPreferences().setDisplayDocTitle(!0);
	}, e.prototype.setAuthor = function(e) {
		F(e, "author", ["string"]);
		var t = V.of("Author");
		this.getInfoDict().set(t, G.fromText(e));
	}, e.prototype.setSubject = function(e) {
		F(e, "author", ["string"]);
		var t = V.of("Subject");
		this.getInfoDict().set(t, G.fromText(e));
	}, e.prototype.setKeywords = function(e) {
		F(e, "keywords", [Array]);
		var t = V.of("Keywords");
		this.getInfoDict().set(t, G.fromText(e.join(" ")));
	}, e.prototype.setCreator = function(e) {
		F(e, "creator", ["string"]);
		var t = V.of("Creator");
		this.getInfoDict().set(t, G.fromText(e));
	}, e.prototype.setProducer = function(e) {
		F(e, "creator", ["string"]);
		var t = V.of("Producer");
		this.getInfoDict().set(t, G.fromText(e));
	}, e.prototype.setLanguage = function(e) {
		F(e, "language", ["string"]);
		var t = V.of("Lang");
		this.catalog.set(t, Vn.of(e));
	}, e.prototype.setCreationDate = function(e) {
		F(e, "creationDate", [[Date, "Date"]]);
		var t = V.of("CreationDate");
		this.getInfoDict().set(t, Vn.fromDate(e));
	}, e.prototype.setModificationDate = function(e) {
		F(e, "modificationDate", [[Date, "Date"]]);
		var t = V.of("ModDate");
		this.getInfoDict().set(t, Vn.fromDate(e));
	}, e.prototype.getPageCount = function() {
		return this.pageCount === void 0 && (this.pageCount = this.getPages().length), this.pageCount;
	}, e.prototype.getPages = function() {
		return this.pageCache.access();
	}, e.prototype.getPage = function(e) {
		var t = this.getPages();
		return vt(e, "index", 0, t.length - 1), t[e];
	}, e.prototype.getPageIndices = function() {
		return function(e, t) {
			for (var n = Array(t - e), r = 0, i = n.length; r < i; r++) n[r] = e + r;
			return n;
		}(0, this.getPageCount());
	}, e.prototype.removePage = function(e) {
		var t = this.getPageCount();
		if (this.pageCount === 0) throw new Ya();
		vt(e, "index", 0, t - 1), this.catalog.removeLeafNode(e), this.pageCount = t - 1;
	}, e.prototype.addPage = function(e) {
		return F(e, "page", [
			"undefined",
			[Jo, "PDFPage"],
			Array
		]), this.insertPage(this.getPageCount(), e);
	}, e.prototype.insertPage = function(e, t) {
		var n = this.getPageCount();
		if (vt(e, "index", 0, n), F(t, "page", [
			"undefined",
			[Jo, "PDFPage"],
			Array
		]), !t || Array.isArray(t)) {
			var r = Array.isArray(t) ? t : Vo.A4;
			(t = Jo.create(this)).setSize.apply(t, r);
		} else if (t.doc !== this) throw new Ja();
		var i = this.catalog.insertLeafNode(t.ref, e);
		return t.node.setParent(i), this.pageMap.set(t.node, t), this.pageCache.invalidate(), this.pageCount = n + 1, t;
	}, e.prototype.copyPages = function(t, n) {
		return d(this, void 0, void 0, function() {
			var r, i, a, o, s, c, l, u;
			return f(this, function(d) {
				switch (d.label) {
					case 0: return F(t, "srcDoc", [[e, "PDFDocument"]]), F(n, "indices", [Array]), [4, t.flush()];
					case 1:
						for (d.sent(), r = En.for(t.context, this.context), i = t.getPages(), a = Array(n.length), o = 0, s = n.length; o < s; o++) c = i[n[o]], l = r.copy(c.node), u = this.context.register(l), a[o] = Jo.of(l, u, this);
						return [2, a];
				}
			});
		});
	}, e.prototype.copy = function() {
		return d(this, void 0, void 0, function() {
			var t, n, r, i;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return [4, e.create()];
					case 1: return [4, (t = a.sent()).copyPages(this, this.getPageIndices())];
					case 2:
						for (n = a.sent(), r = 0, i = n.length; r < i; r++) t.addPage(n[r]);
						return this.getAuthor() !== void 0 && t.setAuthor(this.getAuthor()), this.getCreationDate() !== void 0 && t.setCreationDate(this.getCreationDate()), this.getCreator() !== void 0 && t.setCreator(this.getCreator()), this.getModificationDate() !== void 0 && t.setModificationDate(this.getModificationDate()), this.getProducer() !== void 0 && t.setProducer(this.getProducer()), this.getSubject() !== void 0 && t.setSubject(this.getSubject()), this.getTitle() !== void 0 && t.setTitle(this.getTitle()), t.defaultWordBreaks = this.defaultWordBreaks, [2, t];
				}
			});
		});
	}, e.prototype.addJavaScript = function(e, t) {
		F(e, "name", ["string"]), F(t, "script", ["string"]);
		var n = Go.for(t, e), r = this.context.nextRef(), i = Wo.of(r, this, n);
		this.javaScripts.push(i);
	}, e.prototype.attach = function(e, t, n) {
		return n === void 0 && (n = {}), d(this, void 0, void 0, function() {
			var r, i, a, o;
			return f(this, function(s) {
				return F(e, "attachment", [
					"string",
					Uint8Array,
					ArrayBuffer
				]), F(t, "name", ["string"]), I(n.mimeType, "mimeType", ["string"]), I(n.description, "description", ["string"]), I(n.creationDate, "options.creationDate", [Date]), I(n.modificationDate, "options.modificationDate", [Date]), pt(n.afRelationship, "options.afRelationship", Nn), r = le(e), i = Gn.for(r, t, n), a = this.context.nextRef(), o = Uo.of(a, this, i), this.embeddedFiles.push(o), [2];
			});
		});
	}, e.prototype.embedFont = function(e, t) {
		return t === void 0 && (t = {}), d(this, void 0, void 0, function() {
			var n, r, i, a, o, s, c, l, u, d;
			return f(this, function(f) {
				switch (f.label) {
					case 0: return n = t.subset, r = n !== void 0 && n, i = t.customName, a = t.features, F(e, "font", [
						"string",
						Uint8Array,
						ArrayBuffer
					]), F(r, "subset", ["boolean"]), ct(e) ? (o = In.for(e, i), [3, 7]) : [3, 1];
					case 1: return (p = e) instanceof Uint8Array || p instanceof ArrayBuffer || typeof p == "string" ? (s = le(e), c = this.assertFontkit(), r ? [4, Un.for(c, s, i, a)] : [3, 3]) : [3, 6];
					case 2: return l = f.sent(), [3, 5];
					case 3: return [4, Hn.for(c, s, i, a)];
					case 4: l = f.sent(), f.label = 5;
					case 5: return o = l, [3, 7];
					case 6: throw TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");
					case 7: return u = this.context.nextRef(), d = To.of(u, this, o), this.fonts.push(d), [2, d];
				}
				var p;
			});
		});
	}, e.prototype.embedStandardFont = function(e, t) {
		if (F(e, "font", ["string"]), !ct(e)) throw TypeError("`font` must be one of type `StandardFonts`");
		var n = In.for(e, t), r = this.context.nextRef(), i = To.of(r, this, n);
		return this.fonts.push(i), i;
	}, e.prototype.embedJpg = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n, r, i;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return F(e, "jpg", [
						"string",
						Uint8Array,
						ArrayBuffer
					]), t = le(e), [4, Zn.for(t)];
					case 1: return n = a.sent(), r = this.context.nextRef(), i = Eo.of(r, this, n), this.images.push(i), [2, i];
				}
			});
		});
	}, e.prototype.embedPng = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n, r, i;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return F(e, "png", [
						"string",
						Uint8Array,
						ArrayBuffer
					]), t = le(e), [4, ir.for(t)];
					case 1: return n = a.sent(), r = this.context.nextRef(), i = Eo.of(r, this, n), this.images.push(i), [2, i];
				}
			});
		});
	}, e.prototype.embedPdf = function(t, n) {
		return n === void 0 && (n = [0]), d(this, void 0, void 0, function() {
			var r, i;
			return f(this, function(a) {
				switch (a.label) {
					case 0: return F(t, "pdf", [
						"string",
						Uint8Array,
						ArrayBuffer,
						[e, "PDFDocument"]
					]), F(n, "indices", [Array]), t instanceof e ? (r = t, [3, 3]) : [3, 1];
					case 1: return [4, e.load(t)];
					case 2: r = a.sent(), a.label = 3;
					case 3: return i = function(e, t) {
						for (var n = Array(t.length), r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
						return n;
					}(r.getPages(), n), [2, this.embedPages(i)];
				}
			});
		});
	}, e.prototype.embedPage = function(e, t, n) {
		return d(this, void 0, void 0, function() {
			return f(this, function(r) {
				switch (r.label) {
					case 0: return F(e, "page", [[Jo, "PDFPage"]]), [4, this.embedPages([e], [t], [n])];
					case 1: return [2, r.sent()[0]];
				}
			});
		});
	}, e.prototype.embedPages = function(e, t, n) {
		return t === void 0 && (t = []), n === void 0 && (n = []), d(this, void 0, void 0, function() {
			var r, i, a, o, s, c, l, u, d, p, m, h, g;
			return f(this, function(f) {
				switch (f.label) {
					case 0:
						if (e.length === 0) return [2, []];
						for (c = 0, l = e.length - 1; c < l; c++) if (r = e[c], i = e[c + 1], r.node.context !== i.node.context) throw new Nt();
						a = e[0].node.context, o = a === this.context ? function(e) {
							return e;
						} : En.for(a, this.context).copy, s = Array(e.length), c = 0, l = e.length, f.label = 1;
					case 1: return c < l ? (u = o(e[c].node), d = t[c], p = n[c], [4, xr.for(u, d, p)]) : [3, 4];
					case 2: m = f.sent(), h = this.context.nextRef(), s[c] = wo.of(h, this, m), f.label = 3;
					case 3: return c++, [3, 1];
					case 4: return (g = this.embeddedPages).push.apply(g, s), [2, s];
				}
			});
		});
	}, e.prototype.flush = function() {
		return d(this, void 0, void 0, function() {
			return f(this, function(e) {
				switch (e.label) {
					case 0: return [4, this.embedAll(this.fonts)];
					case 1: return e.sent(), [4, this.embedAll(this.images)];
					case 2: return e.sent(), [4, this.embedAll(this.embeddedPages)];
					case 3: return e.sent(), [4, this.embedAll(this.embeddedFiles)];
					case 4: return e.sent(), [4, this.embedAll(this.javaScripts)];
					case 5: return e.sent(), [2];
				}
			});
		});
	}, e.prototype.save = function(e) {
		return e === void 0 && (e = {}), d(this, void 0, void 0, function() {
			var t, n, r, i, a, o, s, c, l;
			return f(this, function(u) {
				switch (u.label) {
					case 0: return t = e.useObjectStreams, n = t === void 0 || t, r = e.addDefaultPage, i = r === void 0 || r, a = e.objectsPerTick, o = a === void 0 ? 50 : a, s = e.updateFieldAppearances, c = s === void 0 || s, F(n, "useObjectStreams", ["boolean"]), F(i, "addDefaultPage", ["boolean"]), F(o, "objectsPerTick", ["number"]), F(c, "updateFieldAppearances", ["boolean"]), i && this.getPageCount() === 0 && this.addPage(), c && (l = this.formCache.getValue()) && l.updateFieldAppearances(), [4, this.flush()];
					case 1: return u.sent(), [2, (n ? Fn : jn).forContext(this.context, o).serializeToBuffer()];
				}
			});
		});
	}, e.prototype.saveAsBase64 = function(e) {
		return e === void 0 && (e = {}), d(this, void 0, void 0, function() {
			var t, n, r, i, a;
			return f(this, function(o) {
				switch (o.label) {
					case 0: return t = e.dataUri, n = t !== void 0 && t, r = function(e, t) {
						var n = {};
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
						if (e != null && typeof Object.getOwnPropertySymbols == "function") {
							var i = 0;
							for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
						}
						return n;
					}(e, ["dataUri"]), F(n, "dataUri", ["boolean"]), [4, this.save(r)];
					case 1: return i = o.sent(), a = function(e) {
						for (var t = "", n = e.length, r = 0; r < n; r += 3) t += m[e[r] >> 2], t += m[(3 & e[r]) << 4 | e[r + 1] >> 4], t += m[(15 & e[r + 1]) << 2 | e[r + 2] >> 6], t += m[63 & e[r + 2]];
						return n % 3 == 2 ? t = t.substring(0, t.length - 1) + "=" : n % 3 == 1 && (t = t.substring(0, t.length - 2) + "=="), t;
					}(i), [2, n ? "data:application/pdf;base64," + a : a];
				}
			});
		});
	}, e.prototype.findPageForAnnotationRef = function(e) {
		for (var t = this.getPages(), n = 0, r = t.length; n < r; n++) {
			var i = t[n];
			if (i.node.Annots()?.indexOf(e) !== void 0) return i;
		}
	}, e.prototype.embedAll = function(e) {
		return d(this, void 0, void 0, function() {
			var t, n;
			return f(this, function(r) {
				switch (r.label) {
					case 0: t = 0, n = e.length, r.label = 1;
					case 1: return t < n ? [4, e[t].embed()] : [3, 4];
					case 2: r.sent(), r.label = 3;
					case 3: return t++, [3, 1];
					case 4: return [2];
				}
			});
		});
	}, e.prototype.updateInfoDict = function() {
		var e = "pdf-lib (https://github.com/Hopding/pdf-lib)", t = /* @__PURE__ */ new Date(), n = this.getInfoDict();
		this.setProducer(e), this.setModificationDate(t), n.get(V.of("Creator")) || this.setCreator(e), n.get(V.of("CreationDate")) || this.setCreationDate(t);
	}, e.prototype.getInfoDict = function() {
		var e = this.context.lookup(this.context.trailerInfo.Info);
		if (e instanceof H) return e;
		var t = this.context.obj({});
		return this.context.trailerInfo.Info = this.context.register(t), t;
	}, e.prototype.assertFontkit = function() {
		if (!this.fontkit) throw new qa();
		return this.fontkit;
	}, e;
}();
function qo(e) {
	if (!(e instanceof G || e instanceof Vn)) throw new Ot([G, Vn], e);
}
(function(e) {
	e.Normal = "Normal", e.Multiply = "Multiply", e.Screen = "Screen", e.Overlay = "Overlay", e.Darken = "Darken", e.Lighten = "Lighten", e.ColorDodge = "ColorDodge", e.ColorBurn = "ColorBurn", e.HardLight = "HardLight", e.SoftLight = "SoftLight", e.Difference = "Difference", e.Exclusion = "Exclusion";
})(Ho ||= {});
var Jo = function() {
	function e(e, t, n) {
		this.fontSize = 24, this.fontColor = ya(0, 0, 0), this.lineHeight = 24, this.x = 0, this.y = 0, F(e, "leafNode", [[Tn, "PDFPageLeaf"]]), F(t, "ref", [[vn, "PDFRef"]]), F(n, "doc", [[Ko, "PDFDocument"]]), this.node = e, this.ref = t, this.doc = n;
	}
	return e.prototype.setRotation = function(e) {
		var t = ji(e);
		bt(t, "degreesAngle", 90), this.node.set(V.of("Rotate"), this.doc.context.obj(t));
	}, e.prototype.getRotation = function() {
		var e = this.node.Rotate();
		return Y(e ? e.asNumber() : 0);
	}, e.prototype.setSize = function(e, t) {
		F(e, "width", ["number"]), F(t, "height", ["number"]);
		var n = this.getMediaBox();
		this.setMediaBox(n.x, n.y, e, t);
		var r = this.getCropBox(), i = this.getBleedBox(), a = this.getTrimBox(), o = this.getArtBox(), s = this.node.CropBox(), c = this.node.BleedBox(), l = this.node.TrimBox(), u = this.node.ArtBox();
		s && lt(r, n) && this.setCropBox(n.x, n.y, e, t), c && lt(i, n) && this.setBleedBox(n.x, n.y, e, t), l && lt(a, n) && this.setTrimBox(n.x, n.y, e, t), u && lt(o, n) && this.setArtBox(n.x, n.y, e, t);
	}, e.prototype.setWidth = function(e) {
		F(e, "width", ["number"]), this.setSize(e, this.getSize().height);
	}, e.prototype.setHeight = function(e) {
		F(e, "height", ["number"]), this.setSize(this.getSize().width, e);
	}, e.prototype.setMediaBox = function(e, t, n, r) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), F(n, "width", ["number"]), F(r, "height", ["number"]);
		var i = this.doc.context.obj([
			e,
			t,
			e + n,
			t + r
		]);
		this.node.set(V.MediaBox, i);
	}, e.prototype.setCropBox = function(e, t, n, r) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), F(n, "width", ["number"]), F(r, "height", ["number"]);
		var i = this.doc.context.obj([
			e,
			t,
			e + n,
			t + r
		]);
		this.node.set(V.CropBox, i);
	}, e.prototype.setBleedBox = function(e, t, n, r) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), F(n, "width", ["number"]), F(r, "height", ["number"]);
		var i = this.doc.context.obj([
			e,
			t,
			e + n,
			t + r
		]);
		this.node.set(V.BleedBox, i);
	}, e.prototype.setTrimBox = function(e, t, n, r) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), F(n, "width", ["number"]), F(r, "height", ["number"]);
		var i = this.doc.context.obj([
			e,
			t,
			e + n,
			t + r
		]);
		this.node.set(V.TrimBox, i);
	}, e.prototype.setArtBox = function(e, t, n, r) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), F(n, "width", ["number"]), F(r, "height", ["number"]);
		var i = this.doc.context.obj([
			e,
			t,
			e + n,
			t + r
		]);
		this.node.set(V.ArtBox, i);
	}, e.prototype.getSize = function() {
		var e = this.getMediaBox();
		return {
			width: e.width,
			height: e.height
		};
	}, e.prototype.getWidth = function() {
		return this.getSize().width;
	}, e.prototype.getHeight = function() {
		return this.getSize().height;
	}, e.prototype.getMediaBox = function() {
		return this.node.MediaBox().asRectangle();
	}, e.prototype.getCropBox = function() {
		return this.node.CropBox()?.asRectangle() ?? this.getMediaBox();
	}, e.prototype.getBleedBox = function() {
		return this.node.BleedBox()?.asRectangle() ?? this.getCropBox();
	}, e.prototype.getTrimBox = function() {
		return this.node.TrimBox()?.asRectangle() ?? this.getCropBox();
	}, e.prototype.getArtBox = function() {
		return this.node.ArtBox()?.asRectangle() ?? this.getCropBox();
	}, e.prototype.translateContent = function(e, t) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), this.node.normalize(), this.getContentStream();
		var n = this.createContentStream(Yi(), zi(e, t)), r = this.doc.context.register(n), i = this.createContentStream(Xi()), a = this.doc.context.register(i);
		this.node.wrapContentStreams(r, a);
	}, e.prototype.scale = function(e, t) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), this.setSize(this.getWidth() * e, this.getHeight() * t), this.scaleContent(e, t), this.scaleAnnotations(e, t);
	}, e.prototype.scaleContent = function(e, t) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), this.node.normalize(), this.getContentStream();
		var n = this.createContentStream(Yi(), Bi(e, t)), r = this.doc.context.register(n), i = this.createContentStream(Xi()), a = this.doc.context.register(i);
		this.node.wrapContentStreams(r, a);
	}, e.prototype.scaleAnnotations = function(e, t) {
		F(e, "x", ["number"]), F(t, "y", ["number"]);
		var n = this.node.Annots();
		if (n) for (var r = 0; r < n.size(); r++) {
			var i = n.lookup(r);
			i instanceof H && this.scaleAnnot(i, e, t);
		}
	}, e.prototype.resetPosition = function() {
		this.getContentStream(!1), this.x = 0, this.y = 0;
	}, e.prototype.setFont = function(e) {
		F(e, "font", [[To, "PDFFont"]]), this.font = e, this.fontKey = this.node.newFontDictionary(this.font.name, this.font.ref);
	}, e.prototype.setFontSize = function(e) {
		F(e, "fontSize", ["number"]), this.fontSize = e;
	}, e.prototype.setFontColor = function(e) {
		F(e, "fontColor", [[Object, "Color"]]), this.fontColor = e;
	}, e.prototype.setLineHeight = function(e) {
		F(e, "lineHeight", ["number"]), this.lineHeight = e;
	}, e.prototype.getPosition = function() {
		return {
			x: this.x,
			y: this.y
		};
	}, e.prototype.getX = function() {
		return this.x;
	}, e.prototype.getY = function() {
		return this.y;
	}, e.prototype.moveTo = function(e, t) {
		F(e, "x", ["number"]), F(t, "y", ["number"]), this.x = e, this.y = t;
	}, e.prototype.moveDown = function(e) {
		F(e, "yDecrease", ["number"]), this.y -= e;
	}, e.prototype.moveUp = function(e) {
		F(e, "yIncrease", ["number"]), this.y += e;
	}, e.prototype.moveLeft = function(e) {
		F(e, "xDecrease", ["number"]), this.x -= e;
	}, e.prototype.moveRight = function(e) {
		F(e, "xIncrease", ["number"]), this.x += e;
	}, e.prototype.pushOperators = function() {
		var e = [...arguments];
		_t(e, "operator", [[U, "PDFOperator"]]);
		var t = this.getContentStream();
		t.push.apply(t, e);
	}, e.prototype.drawText = function(e, t) {
		t === void 0 && (t = {}), F(e, "text", ["string"]), I(t.color, "options.color", [[Object, "Color"]]), yt(t.opacity, "opacity.opacity", 0, 1), I(t.font, "options.font", [[To, "PDFFont"]]), I(t.size, "options.size", ["number"]), I(t.rotate, "options.rotate", [[Object, "Rotation"]]), I(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), I(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), I(t.x, "options.x", ["number"]), I(t.y, "options.y", ["number"]), I(t.lineHeight, "options.lineHeight", ["number"]), I(t.maxWidth, "options.maxWidth", ["number"]), I(t.wordBreaks, "options.wordBreaks", [Array]), pt(t.blendMode, "options.blendMode", Ho);
		for (var n = this.setOrEmbedFont(t.font), r = n.oldFont, i = n.newFont, a = n.newFontKey, o = t.size || this.fontSize, s = t.wordBreaks || this.doc.defaultWordBreaks, c = t.maxWidth === void 0 ? j(O(e)) : ee(e, s, t.maxWidth, function(e) {
			return i.widthOfTextAtSize(e, o);
		}), l = Array(c.length), u = 0, d = c.length; u < d; u++) l[u] = i.encodeText(c[u]);
		var f = this.maybeEmbedGraphicsState({
			opacity: t.opacity,
			blendMode: t.blendMode
		}), p = this.getContentStream();
		p.push.apply(p, function(e, t) {
			for (var n, r = [
				Yi(),
				t.graphicsState && Ji(t.graphicsState),
				la(),
				wa(t.color),
				da(t.font, t.size),
				(n = t.lineHeight, U.of(W.SetTextLineHeight, [q(n)])),
				pa(Ai(t.rotate), Ai(t.xSkew), Ai(t.ySkew), t.x, t.y)
			].filter(Boolean), i = 0, a = e.length; i < a; i++) r.push(ca(e[i]), sa());
			return r.push(ua(), Xi()), r;
		}(l, {
			color: t.color ?? this.fontColor,
			font: a,
			size: o,
			rotate: t.rotate ?? Y(0),
			xSkew: t.xSkew ?? Y(0),
			ySkew: t.ySkew ?? Y(0),
			x: t.x ?? this.x,
			y: t.y ?? this.y,
			lineHeight: t.lineHeight ?? this.lineHeight,
			graphicsState: f
		})), t.font && (r ? this.setFont(r) : this.resetFont());
	}, e.prototype.drawImage = function(e, t) {
		t === void 0 && (t = {}), F(e, "image", [[Eo, "PDFImage"]]), I(t.x, "options.x", ["number"]), I(t.y, "options.y", ["number"]), I(t.width, "options.width", ["number"]), I(t.height, "options.height", ["number"]), I(t.rotate, "options.rotate", [[Object, "Rotation"]]), I(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), I(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), yt(t.opacity, "opacity.opacity", 0, 1), pt(t.blendMode, "options.blendMode", Ho);
		var n = this.node.newXObject("Image", e.ref), r = this.maybeEmbedGraphicsState({
			opacity: t.opacity,
			blendMode: t.blendMode
		}), i = this.getContentStream();
		i.push.apply(i, Ia(n, {
			x: t.x ?? this.x,
			y: t.y ?? this.y,
			width: t.width ?? e.size().width,
			height: t.height ?? e.size().height,
			rotate: t.rotate ?? Y(0),
			xSkew: t.xSkew ?? Y(0),
			ySkew: t.ySkew ?? Y(0),
			graphicsState: r
		}));
	}, e.prototype.drawPage = function(e, t) {
		t === void 0 && (t = {}), F(e, "embeddedPage", [[wo, "PDFEmbeddedPage"]]), I(t.x, "options.x", ["number"]), I(t.y, "options.y", ["number"]), I(t.xScale, "options.xScale", ["number"]), I(t.yScale, "options.yScale", ["number"]), I(t.width, "options.width", ["number"]), I(t.height, "options.height", ["number"]), I(t.rotate, "options.rotate", [[Object, "Rotation"]]), I(t.xSkew, "options.xSkew", [[Object, "Rotation"]]), I(t.ySkew, "options.ySkew", [[Object, "Rotation"]]), yt(t.opacity, "opacity.opacity", 0, 1), pt(t.blendMode, "options.blendMode", Ho);
		var n = this.node.newXObject("EmbeddedPdfPage", e.ref), r = this.maybeEmbedGraphicsState({
			opacity: t.opacity,
			blendMode: t.blendMode
		}), i = t.width === void 0 ? t.xScale === void 0 ? 1 : t.xScale : t.width / e.width, a = t.height === void 0 ? t.yScale === void 0 ? 1 : t.yScale : t.height / e.height, o = this.getContentStream();
		o.push.apply(o, function(e, t) {
			return [
				Yi(),
				t.graphicsState && Ji(t.graphicsState),
				zi(t.x, t.y),
				Vi(Ai(t.rotate)),
				Bi(t.xScale, t.yScale),
				Ui(Ai(t.xSkew), Ai(t.ySkew)),
				ma(e),
				Xi()
			].filter(Boolean);
		}(n, {
			x: t.x ?? this.x,
			y: t.y ?? this.y,
			xScale: i,
			yScale: a,
			rotate: t.rotate ?? Y(0),
			xSkew: t.xSkew ?? Y(0),
			ySkew: t.ySkew ?? Y(0),
			graphicsState: r
		}));
	}, e.prototype.drawSvgPath = function(e, t) {
		t === void 0 && (t = {}), F(e, "path", ["string"]), I(t.x, "options.x", ["number"]), I(t.y, "options.y", ["number"]), I(t.scale, "options.scale", ["number"]), I(t.rotate, "options.rotate", [[Object, "Rotation"]]), I(t.borderWidth, "options.borderWidth", ["number"]), I(t.color, "options.color", [[Object, "Color"]]), yt(t.opacity, "opacity.opacity", 0, 1), I(t.borderColor, "options.borderColor", [[Object, "Color"]]), I(t.borderDashArray, "options.borderDashArray", [Array]), I(t.borderDashPhase, "options.borderDashPhase", ["number"]), pt(t.borderLineCap, "options.borderLineCap", Ei), yt(t.borderOpacity, "options.borderOpacity", 0, 1), pt(t.blendMode, "options.blendMode", Ho);
		var n = this.maybeEmbedGraphicsState({
			opacity: t.opacity,
			borderOpacity: t.borderOpacity,
			blendMode: t.blendMode
		});
		"color" in t || "borderColor" in t || (t.borderColor = ya(0, 0, 0));
		var r = this.getContentStream();
		r.push.apply(r, function(e, t) {
			return p([
				Yi(),
				t.graphicsState && Ji(t.graphicsState),
				zi(t.x, t.y),
				Vi(Ai(t.rotate ?? Y(0))),
				t.scale ? Bi(t.scale, -t.scale) : Bi(1, -1),
				t.color && wa(t.color),
				t.borderColor && Ta(t.borderColor),
				t.borderWidth && Zi(t.borderWidth),
				t.borderLineCap && Ki(t.borderLineCap),
				Wi(t.borderDashArray ?? [], t.borderDashPhase ?? 0)
			], Fa(e), [t.color && t.borderWidth ? aa() : t.color ? ia() : t.borderColor ? ra() : ea(), Xi()]).filter(Boolean);
		}(e, {
			x: t.x ?? this.x,
			y: t.y ?? this.y,
			scale: t.scale,
			rotate: t.rotate ?? Y(0),
			color: t.color ?? void 0,
			borderColor: t.borderColor ?? void 0,
			borderWidth: t.borderWidth ?? 0,
			borderDashArray: t.borderDashArray ?? void 0,
			borderDashPhase: t.borderDashPhase ?? void 0,
			borderLineCap: t.borderLineCap ?? void 0,
			graphicsState: n
		}));
	}, e.prototype.drawLine = function(e) {
		F(e.start, "options.start", [[Object, "{ x: number, y: number }"]]), F(e.end, "options.end", [[Object, "{ x: number, y: number }"]]), F(e.start.x, "options.start.x", ["number"]), F(e.start.y, "options.start.y", ["number"]), F(e.end.x, "options.end.x", ["number"]), F(e.end.y, "options.end.y", ["number"]), I(e.thickness, "options.thickness", ["number"]), I(e.color, "options.color", [[Object, "Color"]]), I(e.dashArray, "options.dashArray", [Array]), I(e.dashPhase, "options.dashPhase", ["number"]), pt(e.lineCap, "options.lineCap", Ei), yt(e.opacity, "opacity.opacity", 0, 1), pt(e.blendMode, "options.blendMode", Ho);
		var t = this.maybeEmbedGraphicsState({
			borderOpacity: e.opacity,
			blendMode: e.blendMode
		});
		"color" in e || (e.color = ya(0, 0, 0));
		var n = this.getContentStream();
		n.push.apply(n, function(e) {
			return [
				Yi(),
				e.graphicsState && Ji(e.graphicsState),
				e.color && Ta(e.color),
				Zi(e.thickness),
				Wi(e.dashArray ?? [], e.dashPhase ?? 0),
				ta(e.start.x, e.start.y),
				e.lineCap && Ki(e.lineCap),
				ta(e.start.x, e.start.y),
				na(e.end.x, e.end.y),
				ra(),
				Xi()
			].filter(Boolean);
		}({
			start: e.start,
			end: e.end,
			thickness: e.thickness ?? 1,
			color: e.color ?? void 0,
			dashArray: e.dashArray ?? void 0,
			dashPhase: e.dashPhase ?? void 0,
			lineCap: e.lineCap ?? void 0,
			graphicsState: t
		}));
	}, e.prototype.drawRectangle = function(e) {
		e === void 0 && (e = {}), I(e.x, "options.x", ["number"]), I(e.y, "options.y", ["number"]), I(e.width, "options.width", ["number"]), I(e.height, "options.height", ["number"]), I(e.rotate, "options.rotate", [[Object, "Rotation"]]), I(e.xSkew, "options.xSkew", [[Object, "Rotation"]]), I(e.ySkew, "options.ySkew", [[Object, "Rotation"]]), I(e.borderWidth, "options.borderWidth", ["number"]), I(e.color, "options.color", [[Object, "Color"]]), yt(e.opacity, "opacity.opacity", 0, 1), I(e.borderColor, "options.borderColor", [[Object, "Color"]]), I(e.borderDashArray, "options.borderDashArray", [Array]), I(e.borderDashPhase, "options.borderDashPhase", ["number"]), pt(e.borderLineCap, "options.borderLineCap", Ei), yt(e.borderOpacity, "options.borderOpacity", 0, 1), pt(e.blendMode, "options.blendMode", Ho);
		var t = this.maybeEmbedGraphicsState({
			opacity: e.opacity,
			borderOpacity: e.borderOpacity,
			blendMode: e.blendMode
		});
		"color" in e || "borderColor" in e || (e.color = ya(0, 0, 0));
		var n = this.getContentStream();
		n.push.apply(n, La({
			x: e.x ?? this.x,
			y: e.y ?? this.y,
			width: e.width ?? 150,
			height: e.height ?? 100,
			rotate: e.rotate ?? Y(0),
			xSkew: e.xSkew ?? Y(0),
			ySkew: e.ySkew ?? Y(0),
			borderWidth: e.borderWidth ?? 0,
			color: e.color ?? void 0,
			borderColor: e.borderColor ?? void 0,
			borderDashArray: e.borderDashArray ?? void 0,
			borderDashPhase: e.borderDashPhase ?? void 0,
			graphicsState: t,
			borderLineCap: e.borderLineCap ?? void 0
		}));
	}, e.prototype.drawSquare = function(e) {
		e === void 0 && (e = {});
		var t = e.size;
		I(t, "size", ["number"]), this.drawRectangle(u(u({}, e), {
			width: t,
			height: t
		}));
	}, e.prototype.drawEllipse = function(e) {
		e === void 0 && (e = {}), I(e.x, "options.x", ["number"]), I(e.y, "options.y", ["number"]), I(e.xScale, "options.xScale", ["number"]), I(e.yScale, "options.yScale", ["number"]), I(e.rotate, "options.rotate", [[Object, "Rotation"]]), I(e.color, "options.color", [[Object, "Color"]]), yt(e.opacity, "opacity.opacity", 0, 1), I(e.borderColor, "options.borderColor", [[Object, "Color"]]), yt(e.borderOpacity, "options.borderOpacity", 0, 1), I(e.borderWidth, "options.borderWidth", ["number"]), I(e.borderDashArray, "options.borderDashArray", [Array]), I(e.borderDashPhase, "options.borderDashPhase", ["number"]), pt(e.borderLineCap, "options.borderLineCap", Ei), pt(e.blendMode, "options.blendMode", Ho);
		var t = this.maybeEmbedGraphicsState({
			opacity: e.opacity,
			borderOpacity: e.borderOpacity,
			blendMode: e.blendMode
		});
		"color" in e || "borderColor" in e || (e.color = ya(0, 0, 0));
		var n = this.getContentStream();
		n.push.apply(n, za({
			x: e.x ?? this.x,
			y: e.y ?? this.y,
			xScale: e.xScale ?? 100,
			yScale: e.yScale ?? 100,
			rotate: e.rotate ?? void 0,
			color: e.color ?? void 0,
			borderColor: e.borderColor ?? void 0,
			borderWidth: e.borderWidth ?? 0,
			borderDashArray: e.borderDashArray ?? void 0,
			borderDashPhase: e.borderDashPhase ?? void 0,
			borderLineCap: e.borderLineCap ?? void 0,
			graphicsState: t
		}));
	}, e.prototype.drawCircle = function(e) {
		e === void 0 && (e = {});
		var t = e.size, n = t === void 0 ? 100 : t;
		I(n, "size", ["number"]), this.drawEllipse(u(u({}, e), {
			xScale: n,
			yScale: n
		}));
	}, e.prototype.setOrEmbedFont = function(e) {
		var t = this.font, n = this.fontKey;
		return e ? this.setFont(e) : this.getFont(), {
			oldFont: t,
			oldFontKey: n,
			newFont: this.font,
			newFontKey: this.fontKey
		};
	}, e.prototype.getFont = function() {
		if (!this.font || !this.fontKey) {
			var e = this.doc.embedStandardFont(Do.Helvetica);
			this.setFont(e);
		}
		return [this.font, this.fontKey];
	}, e.prototype.resetFont = function() {
		this.font = void 0, this.fontKey = void 0;
	}, e.prototype.getContentStream = function(e) {
		return e === void 0 && (e = !0), e && this.contentStream || (this.contentStream = this.createContentStream(), this.contentStreamRef = this.doc.context.register(this.contentStream), this.node.addContentStream(this.contentStreamRef)), this.contentStream;
	}, e.prototype.createContentStream = function() {
		var e = [...arguments], t = this.doc.context.obj({});
		return xn.of(t, e);
	}, e.prototype.maybeEmbedGraphicsState = function(e) {
		var t = e.opacity, n = e.borderOpacity, r = e.blendMode;
		if (t !== void 0 || n !== void 0 || r !== void 0) {
			var i = this.doc.context.obj({
				Type: "ExtGState",
				ca: t,
				CA: n,
				BM: r
			});
			return this.node.newExtGState("GS", i);
		}
	}, e.prototype.scaleAnnot = function(e, t, n) {
		for (var r = [
			"RD",
			"CL",
			"Vertices",
			"QuadPoints",
			"L",
			"Rect"
		], i = 0, a = r.length; i < a; i++) {
			var o = e.lookup(V.of(r[i]));
			o instanceof B && o.scalePDFNumbers(t, n);
		}
		var s = e.lookup(V.of("InkList"));
		if (s instanceof B) for (i = 0, a = s.size(); i < a; i++) {
			var c = s.lookup(i);
			c instanceof B && c.scalePDFNumbers(t, n);
		}
	}, e.of = function(t, n, r) {
		return new e(t, n, r);
	}, e.create = function(t) {
		F(t, "doc", [[Ko, "PDFDocument"]]);
		var n = vn.of(-1), r = Tn.withContextAndParent(t.context, n);
		return new e(r, t.context.register(r), t);
	}, e;
}(), Yo = function(e) {
	function t(t, n, r) {
		var i = e.call(this, t, n, r) || this;
		return F(t, "acroButton", [[Ur, "PDFAcroPushButton"]]), i.acroField = t, i;
	}
	return l(t, e), t.prototype.setImage = function(e, t) {
		t === void 0 && (t = io.Center);
		for (var n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r], o = this.createImageAppearanceStream(a, e, t);
			this.updateWidgetAppearances(a, { normal: o });
		}
		this.markAsClean();
	}, t.prototype.setFontSize = function(e) {
		xt(e, "fontSize"), this.acroField.setFontSize(e), this.markAsDirty();
	}, t.prototype.addToPage = function(e, t, n) {
		I(e, "text", ["string"]), I(t, "page", [[Jo, "PDFPage"]]), Oo(n);
		var r = this.createWidget({
			x: (n?.x ?? 0) - (n?.borderWidth ?? 0) / 2,
			y: (n?.y ?? 0) - (n?.borderWidth ?? 0) / 2,
			width: n?.width ?? 100,
			height: n?.height ?? 50,
			textColor: n?.textColor ?? ya(0, 0, 0),
			backgroundColor: n?.backgroundColor ?? ya(.75, .75, .75),
			borderColor: n?.borderColor,
			borderWidth: n?.borderWidth ?? 0,
			rotate: n?.rotate ?? Y(0),
			caption: e,
			hidden: n?.hidden,
			page: t.ref
		}), i = this.doc.context.register(r.dict);
		this.acroField.addWidget(i);
		var a = n?.font ?? this.doc.getForm().getDefaultFont();
		this.updateWidgetAppearance(r, a), t.node.addAnnot(i);
	}, t.prototype.needsAppearancesUpdate = function() {
		if (this.isDirty()) return !0;
		for (var e = this.acroField.getWidgets(), t = 0, n = e.length; t < n; t++) if (!(e[t].getAppearances()?.normal instanceof mn)) return !0;
		return !1;
	}, t.prototype.defaultUpdateAppearances = function(e) {
		F(e, "font", [[To, "PDFFont"]]), this.updateAppearances(e);
	}, t.prototype.updateAppearances = function(e, t) {
		F(e, "font", [[To, "PDFFont"]]), I(t, "provider", [Function]);
		for (var n = this.acroField.getWidgets(), r = 0, i = n.length; r < i; r++) {
			var a = n[r];
			this.updateWidgetAppearance(a, e, t);
		}
	}, t.prototype.updateWidgetAppearance = function(e, t, n) {
		var r = fo((n ?? bo)(this, e, t));
		this.updateWidgetAppearanceWithFont(e, t, r);
	}, t.of = function(e, n, r) {
		return new t(e, n, r);
	}, t;
}(ko);
export { B as PDFArray, H as PDFDict, Ko as PDFDocument, V as PDFName, z as PDFNumber, en as PDFObject, Tn as PDFPageLeaf, ri as PDFPageTree, hn as PDFRawStream, vn as PDFRef, mn as PDFStream };
