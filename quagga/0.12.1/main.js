var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = ((o, s, c) => (c = o == null ? {} : e(i(o)), ((e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c, l = r(i), u = 0, d = l.length; u < d; u++) c = l[u], a.call(e, c) || c === o || t(e, c, {
		get: ((e) => i[e]).bind(null, c),
		enumerable: !(s = n(i, c)) || s.enumerable
	});
	return e;
})(t(c, "default", {
	value: o,
	enumerable: !0
}), o)))(((e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports))((e, t, n) => {
	var r = n, i = function(e) {
		return function(e) {
			function t(r) {
				if (n[r]) return n[r].exports;
				var i = n[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
			}
			var n = {};
			return t.m = e, t.c = n, t.i = function(e) {
				return e;
			}, t.d = function(e, n, r) {
				t.o(e, n) || Object.defineProperty(e, n, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
			}, t.n = function(e) {
				var n = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return t.d(n, "a", n), n;
			}, t.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, t.p = "/", t(t.s = 166);
		}([
			function(e, t) {
				e.exports = function(e) {
					var t = typeof e;
					return e != null && (t == "object" || t == "function");
				};
			},
			function(e, t, n) {
				function r(e, t) {
					return this._row = [], this.config = e || {}, this.supplements = t, this;
				}
				var i = n(3);
				r.prototype._nextUnset = function(e, t) {
					var n;
					for (t === void 0 && (t = 0), n = t; n < e.length; n++) if (!e[n]) return n;
					return e.length;
				}, r.prototype._matchPattern = function(e, t, n) {
					var r, i, a, o, s = 0, c = 0, l = 0, u = 0;
					for (n = n || this.SINGLE_CODE_ERROR || 1, r = 0; r < e.length; r++) l += e[r], u += t[r];
					if (l < u) return Number.MAX_VALUE;
					for (n *= i = l / u, r = 0; r < e.length; r++) {
						if (a = e[r], o = t[r] * i, (c = Math.abs(a - o) / o) > n) return Number.MAX_VALUE;
						s += c;
					}
					return s / u;
				}, r.prototype._nextSet = function(e, t) {
					for (var n = t ||= 0; n < e.length; n++) if (e[n]) return n;
					return e.length;
				}, r.prototype._correctBars = function(e, t, n) {
					for (var r = n.length, i = 0; r--;) (i = e[n[r]] * (1 - (1 - t) / 2)) > 1 && (e[n[r]] = i);
				}, r.prototype._matchTrace = function(e, t) {
					var n, r = [], i = this, a = i._nextSet(i._row), o = !i._row[a], s = 0, c = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0
					};
					if (e) {
						for (n = 0; n < e.length; n++) r.push(0);
						for (n = a; n < i._row.length; n++) if (i._row[n] ^ o) r[s]++;
						else {
							if (s === r.length - 1) return i._matchPattern(r, e) < t ? (c.start = n - a, c.end = n, c.counter = r, c) : null;
							r[++s] = 1, o = !o;
						}
					} else for (r.push(0), n = a; n < i._row.length; n++) i._row[n] ^ o ? r[s]++ : (s++, r.push(0), r[s] = 1, o = !o);
					return c.start = a, c.end = i._row.length - 1, c.counter = r, c;
				}, r.prototype.decodePattern = function(e) {
					var t, n = this;
					return n._row = e, (t = n._decode()) === null ? (n._row.reverse(), (t = n._decode()) && (t.direction = r.DIRECTION.REVERSE, t.start = n._row.length - t.start, t.end = n._row.length - t.end)) : t.direction = r.DIRECTION.FORWARD, t && (t.format = n.FORMAT), t;
				}, r.prototype._matchRange = function(e, t, n) {
					for (var r = e = e < 0 ? 0 : e; r < t; r++) if (this._row[r] !== n) return !1;
					return !0;
				}, r.prototype._fillCounters = function(e, t, n) {
					var r, i = this, a = 0, o = [];
					for (n = n === void 0 || n, e = e === void 0 ? i._nextUnset(i._row) : e, t ||= i._row.length, o[a] = 0, r = e; r < t; r++) i._row[r] ^ n ? o[a]++ : (o[++a] = 1, n = !n);
					return o;
				}, r.prototype._toCounters = function(e, t) {
					var n, r = this, a = t.length, o = r._row.length, s = !r._row[e], c = 0;
					for (i.a.init(t, 0), n = e; n < o; n++) if (r._row[n] ^ s) t[c]++;
					else {
						if (++c === a) break;
						t[c] = 1, s = !s;
					}
					return t;
				}, Object.defineProperty(r.prototype, "FORMAT", {
					value: "unknown",
					writeable: !1
				}), r.DIRECTION = {
					FORWARD: 1,
					REVERSE: -1
				}, r.Exception = {
					StartNotFoundException: "Start-Info was not found!",
					CodeNotFoundException: "Code could not be found!",
					PatternNotFoundException: "Pattern could not be found!"
				}, r.CONFIG_KEYS = {}, t.a = r;
			},
			function(e, t) {
				e.exports = Array.isArray;
			},
			function(e, t, n) {
				t.a = {
					init: function(e, t) {
						for (var n = e.length; n--;) e[n] = t;
					},
					shuffle: function(e) {
						for (var t, n, r = e.length - 1; r >= 0; r--) t = Math.floor(Math.random() * r), n = e[r], e[r] = e[t], e[t] = n;
						return e;
					},
					toPointList: function(e) {
						var t, n, r = [], i = [];
						for (t = 0; t < e.length; t++) {
							for (r = [], n = 0; n < e[t].length; n++) r[n] = e[t][n];
							i[t] = "[" + r.join(",") + "]";
						}
						return "[" + i.join(",\r\n") + "]";
					},
					threshold: function(e, t, n) {
						var r, i = [];
						for (r = 0; r < e.length; r++) n.apply(e, [e[r]]) >= t && i.push(e[r]);
						return i;
					},
					maxIndex: function(e) {
						var t, n = 0;
						for (t = 0; t < e.length; t++) e[t] > e[n] && (n = t);
						return n;
					},
					max: function(e) {
						var t, n = 0;
						for (t = 0; t < e.length; t++) e[t] > n && (n = e[t]);
						return n;
					},
					sum: function(e) {
						for (var t = e.length, n = 0; t--;) n += e[t];
						return n;
					}
				};
			},
			function(e, t, n) {
				function r(e, t) {
					e = a()(function() {
						var e = {};
						return Object.keys(r.CONFIG_KEYS).forEach(function(t) {
							e[t] = r.CONFIG_KEYS[t].default;
						}), e;
					}(), e), o.a.call(this, e, t);
				}
				var i = n(28), a = n.n(i), o = n(1), s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				};
				r.prototype = Object.create(o.a.prototype, {
					CODE_L_START: { value: 0 },
					CODE_G_START: { value: 10 },
					START_PATTERN: { value: [
						1,
						1,
						1
					] },
					STOP_PATTERN: { value: [
						1,
						1,
						1
					] },
					MIDDLE_PATTERN: { value: [
						1,
						1,
						1,
						1,
						1
					] },
					EXTENSION_START_PATTERN: { value: [
						1,
						1,
						2
					] },
					CODE_PATTERN: { value: [
						[
							3,
							2,
							1,
							1
						],
						[
							2,
							2,
							2,
							1
						],
						[
							2,
							1,
							2,
							2
						],
						[
							1,
							4,
							1,
							1
						],
						[
							1,
							1,
							3,
							2
						],
						[
							1,
							2,
							3,
							1
						],
						[
							1,
							1,
							1,
							4
						],
						[
							1,
							3,
							1,
							2
						],
						[
							1,
							2,
							1,
							3
						],
						[
							3,
							1,
							1,
							2
						],
						[
							1,
							1,
							2,
							3
						],
						[
							1,
							2,
							2,
							2
						],
						[
							2,
							2,
							1,
							2
						],
						[
							1,
							1,
							4,
							1
						],
						[
							2,
							3,
							1,
							1
						],
						[
							1,
							3,
							2,
							1
						],
						[
							4,
							1,
							1,
							1
						],
						[
							2,
							1,
							3,
							1
						],
						[
							3,
							1,
							2,
							1
						],
						[
							2,
							1,
							1,
							3
						]
					] },
					CODE_FREQUENCY: { value: [
						0,
						11,
						13,
						14,
						19,
						25,
						28,
						21,
						22,
						26
					] },
					SINGLE_CODE_ERROR: { value: .7 },
					AVG_CODE_ERROR: { value: .48 },
					FORMAT: {
						value: "ean_13",
						writeable: !1
					}
				}), r.prototype.constructor = r, r.prototype._decodeCode = function(e, t) {
					var n, r, i, a = [
						0,
						0,
						0,
						0
					], o = this, s = e, c = !o._row[s], l = 0, u = {
						error: Number.MAX_VALUE,
						code: -1,
						start: e,
						end: e
					};
					for (t ||= o.CODE_PATTERN.length, n = s; n < o._row.length; n++) if (o._row[n] ^ c) a[l]++;
					else {
						if (l === a.length - 1) {
							for (r = 0; r < t; r++) (i = o._matchPattern(a, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = i);
							return u.end = n, u.error > o.AVG_CODE_ERROR ? null : u;
						}
						a[++l] = 1, c = !c;
					}
					return null;
				}, r.prototype._findPattern = function(e, t, n, r, i) {
					var a, o, s, c, l = [], u = this, d = 0, f = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0
					};
					for (t ||= u._nextSet(u._row), n === void 0 && (n = !1), r === void 0 && (r = !0), i === void 0 && (i = u.AVG_CODE_ERROR), a = 0; a < e.length; a++) l[a] = 0;
					for (a = t; a < u._row.length; a++) if (u._row[a] ^ n) l[d]++;
					else {
						if (d === l.length - 1) {
							for (c = 0, s = 0; s < l.length; s++) c += l[s];
							if ((o = u._matchPattern(l, e)) < i) return f.error = o, f.start = a - c, f.end = a, f;
							if (!r) return null;
							for (s = 0; s < l.length - 2; s++) l[s] = l[s + 2];
							l[l.length - 2] = 0, l[l.length - 1] = 0, d--;
						} else d++;
						l[d] = 1, n = !n;
					}
					return null;
				}, r.prototype._findStart = function() {
					for (var e, t, n = this, r = n._nextSet(n._row); !t;) {
						if (!(t = n._findPattern(n.START_PATTERN, r))) return null;
						if ((e = t.start - (t.end - t.start)) >= 0 && n._matchRange(e, t.start, 0)) return t;
						r = t.end, t = null;
					}
				}, r.prototype._verifyTrailingWhitespace = function(e) {
					var t;
					return (t = e.end + (e.end - e.start)) < this._row.length && this._matchRange(e.end, t, 0) ? e : null;
				}, r.prototype._findEnd = function(e, t) {
					var n = this, r = n._findPattern(n.STOP_PATTERN, e, t, !1);
					return r === null ? null : n._verifyTrailingWhitespace(r);
				}, r.prototype._calculateFirstDigit = function(e) {
					for (var t = 0; t < this.CODE_FREQUENCY.length; t++) if (e === this.CODE_FREQUENCY[t]) return t;
					return null;
				}, r.prototype._decodePayload = function(e, t, n) {
					var r, i, a = this, o = 0;
					for (r = 0; r < 6; r++) {
						if (!(e = a._decodeCode(e.end))) return null;
						e.code >= a.CODE_G_START ? (e.code -= a.CODE_G_START, o |= 1 << 5 - r) : o |= 0 << 5 - r, t.push(e.code), n.push(e);
					}
					if ((i = a._calculateFirstDigit(o)) === null || (t.unshift(i), (e = a._findPattern(a.MIDDLE_PATTERN, e.end, !0, !1)) === null)) return null;
					for (n.push(e), r = 0; r < 6; r++) {
						if (!(e = a._decodeCode(e.end, a.CODE_G_START))) return null;
						n.push(e), t.push(e.code);
					}
					return e;
				}, r.prototype._decode = function() {
					var e, t, n = this, r = [], i = [], a = {};
					if (!(e = n._findStart()) || (t = {
						code: e.code,
						start: e.start,
						end: e.end
					}, i.push(t), !(t = n._decodePayload(t, r, i))) || !(t = n._findEnd(t.end, !1)) || (i.push(t), !n._checksum(r))) return null;
					if (this.supplements.length > 0) {
						var o = this._decodeExtensions(t.end);
						if (!o) return null;
						var c = o.decodedCodes[o.decodedCodes.length - 1], l = {
							start: c.start + ((c.end - c.start) / 2 | 0),
							end: c.end
						};
						if (!n._verifyTrailingWhitespace(l)) return null;
						a = {
							supplement: o,
							code: r.join("") + o.code
						};
					}
					return s({
						code: r.join(""),
						start: e.start,
						end: t.end,
						codeset: "",
						startInfo: e,
						decodedCodes: i
					}, a);
				}, r.prototype._decodeExtensions = function(e) {
					var t, n, r = this._nextSet(this._row, e), i = this._findPattern(this.EXTENSION_START_PATTERN, r, !1, !1);
					if (i === null) return null;
					for (t = 0; t < this.supplements.length; t++) if ((n = this.supplements[t].decode(this._row, i.end)) !== null) return {
						code: n.code,
						start: r,
						startInfo: i,
						end: n.end,
						codeset: "",
						decodedCodes: n.decodedCodes
					};
					return null;
				}, r.prototype._checksum = function(e) {
					var t, n = 0;
					for (t = e.length - 2; t >= 0; t -= 2) n += e[t];
					for (n *= 3, t = e.length - 1; t >= 0; t -= 2) n += e[t];
					return n % 10 == 0;
				}, r.CONFIG_KEYS = { supplements: {
					type: "arrayOf(string)",
					default: [],
					description: "Allowed extensions to be decoded (2 and/or 5)"
				} }, t.a = r;
			},
			function(e, t, n) {
				var r = n(38), i = typeof self == "object" && self && self.Object === Object && self;
				e.exports = r || i || Function("return this")();
			},
			function(e, t) {
				e.exports = function(e) {
					return typeof e == "object" && !!e;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = /* @__PURE__ */ new Float32Array(2);
					return t[0] = e[0], t[1] = e[1], t;
				};
			},
			function(e, t, n) {
				var r = n(11), i = n(119), a = n(146), o = "[object Null]", s = "[object Undefined]", c = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					return e == null ? e === void 0 ? s : o : c && c in Object(e) ? i(e) : a(e);
				};
			},
			function(e, t, n) {
				t.a = {
					drawRect: function(e, t, n, r) {
						n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = 1, n.beginPath(), n.strokeRect(e.x, e.y, t.x, t.y);
					},
					drawPath: function(e, t, n, r) {
						n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = r.lineWidth, n.beginPath(), n.moveTo(e[0][t.x], e[0][t.y]);
						for (var i = 1; i < e.length; i++) n.lineTo(e[i][t.x], e[i][t.y]);
						n.closePath(), n.stroke();
					},
					drawImage: function(e, t, n) {
						var r, i = n.getImageData(0, 0, t.x, t.y), a = i.data, o = e.length, s = a.length;
						if (s / o != 4) return !1;
						for (; o--;) r = e[o], a[--s] = 255, a[--s] = r, a[--s] = r, a[--s] = r;
						return n.putImageData(i, 0, 0), !0;
					}
				};
			},
			function(e, t, n) {
				function r(e) {
					var t = -1, n = e == null ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1]);
					}
				}
				var i = n(133), a = n(134), o = n(135), s = n(136), c = n(137);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r;
			},
			function(e, t, n) {
				e.exports = n(5).Symbol;
			},
			function(e, t, n) {
				var r = n(17);
				e.exports = function(e, t) {
					for (var n = e.length; n--;) if (r(e[n][0], t)) return n;
					return -1;
				};
			},
			function(e, t, n) {
				var r = n(2), i = n(130), a = n(154), o = n(165);
				e.exports = function(e, t) {
					return r(e) ? e : i(e, t) ? [e] : a(o(e));
				};
			},
			function(e, t, n) {
				var r = n(131);
				e.exports = function(e, t) {
					var n = e.__data__;
					return r(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
				};
			},
			function(e, t) {
				var n = /^(?:0|[1-9]\d*)$/;
				e.exports = function(e, t) {
					return !!(t ??= 9007199254740991) && (typeof e == "number" || n.test(e)) && e > -1 && e % 1 == 0 && e < t;
				};
			},
			function(e, t, n) {
				e.exports = n(22)(Object, "create");
			},
			function(e, t) {
				e.exports = function(e, t) {
					return e === t || e != e && t != t;
				};
			},
			function(e, t, n) {
				var r = n(96), i = n(6), a = Object.prototype, o = a.hasOwnProperty, s = a.propertyIsEnumerable;
				e.exports = r(function() {
					return arguments;
				}()) ? r : function(e) {
					return i(e) && o.call(e, "callee") && !s.call(e, "callee");
				};
			},
			function(e, t, n) {
				function r(e, t) {
					function n(e, t) {
						var n, r = 0;
						for (n = e; n <= t; n++) r += i[n];
						return r;
					}
					function r(e, t) {
						var n, r = 0;
						for (n = e; n <= t; n++) r += n * i[n];
						return r;
					}
					t ||= 8;
					var i, a = 8 - t;
					return function() {
						var a, s, c, l, u, d = [0], f = (1 << t) - 1;
						for (i = function(e, t) {
							t ||= 8;
							for (var n = e.data, r = n.length, i = 8 - t, a = new Int32Array(1 << t); r--;) a[n[r] >> i]++;
							return a;
						}(e, t), l = 1; l < f; l++) (c = (a = n(0, l)) * (s = n(l + 1, f))) === 0 && (c = 1), u = r(0, l) * s - r(l + 1, f) * a, d[l] = u * u / c;
						return o.a.maxIndex(d);
					}() << a;
				}
				function i(e) {
					var t, n = [], r = [];
					for (t = 1; t < Math.sqrt(e) + 1; t++) e % t == 0 && (r.push(t), t !== e / t && n.unshift(Math.floor(e / t)));
					return r.concat(n);
				}
				var a = n(50), o = n(3);
				t.b = function(e, t) {
					return {
						x: e,
						y: t,
						toVec2: function() {
							return s.clone([this.x, this.y]);
						},
						toVec3: function() {
							return c.clone([
								this.x,
								this.y,
								1
							]);
						},
						round: function() {
							return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this;
						}
					};
				}, t.f = function(e, t) {
					var n = r(e);
					return function(e, t, n) {
						n ||= e;
						for (var r = e.data, i = r.length, a = n.data; i--;) a[i] = +(r[i] < t);
					}(e, n, t), n;
				}, t.g = function(e, t, n) {
					function r(e) {
						var t = !1;
						for (o = 0; o < l.length; o++) (s = l[o]).fits(e) && (s.add(e), t = !0);
						return t;
					}
					var i, o, s, c, l = [];
					for (n ||= "rad", i = 0; i < e.length; i++) r(c = a.a.createPoint(e[i], i, n)) || l.push(a.a.create(c, t));
					return l;
				}, t.h = function(e, t, n) {
					var r, i, a, o, s = 0, c = 0, l = [];
					for (r = 0; r < t; r++) l[r] = {
						score: 0,
						item: null
					};
					for (r = 0; r < e.length; r++) if ((i = n.apply(this, [e[r]])) > c) for ((a = l[s]).score = i, a.item = e[r], c = Number.MAX_VALUE, o = 0; o < t; o++) l[o].score < c && (c = l[o].score, s = o);
					return l;
				}, t.c = function(e, t, n) {
					for (var r, i = 0, a = t.x, o = Math.floor(e.length / 4), s = t.x / 2, c = 0, l = t.x; a < o;) {
						for (r = 0; r < s; r++) n[c] = (.299 * e[4 * i + 0] + .587 * e[4 * i + 1] + .114 * e[4 * i + 2] + (.299 * e[4 * (i + 1) + 0] + .587 * e[4 * (i + 1) + 1] + .114 * e[4 * (i + 1) + 2]) + (.299 * e[4 * a + 0] + .587 * e[4 * a + 1] + .114 * e[4 * a + 2]) + (.299 * e[4 * (a + 1) + 0] + .587 * e[4 * (a + 1) + 1] + .114 * e[4 * (a + 1) + 2])) / 4, c++, i += 2, a += 2;
						i += l, a += l;
					}
				}, t.d = function(e, t, n) {
					var r, i = e.length / 4 | 0;
					if (n && !0 === n.singleChannel) for (r = 0; r < i; r++) t[r] = e[4 * r + 0];
					else for (r = 0; r < i; r++) t[r] = .299 * e[4 * r + 0] + .587 * e[4 * r + 1] + .114 * e[4 * r + 2];
				}, t.i = function(e, t) {
					for (var n = e.data, r = e.size.x, i = t.data, a = 0, o = r, s = n.length, c = r / 2, l = 0; o < s;) {
						for (var u = 0; u < c; u++) i[l] = Math.floor((n[a] + n[a + 1] + n[o] + n[o + 1]) / 4), l++, a += 2, o += 2;
						a += r, o += r;
					}
				}, t.a = function(e, t) {
					var n = e[0], r = e[1], i = e[2], a = i * r, o = a * (1 - Math.abs(n / 60 % 2 - 1)), s = i - a, c = 0, l = 0, u = 0;
					return n < 60 ? (c = a, l = o) : n < 120 ? (c = o, l = a) : n < 180 ? (l = a, u = o) : n < 240 ? (l = o, u = a) : n < 300 ? (c = o, u = a) : n < 360 && (c = a, u = o), (t ||= [
						0,
						0,
						0
					])[0] = 255 * (c + s) | 0, t[1] = 255 * (l + s) | 0, t[2] = 255 * (u + s) | 0, t;
				}, t.e = function(e, t) {
					function n(e) {
						for (var t = 0, n = e[Math.floor(e.length / 2)]; t < e.length - 1 && e[t] < p;) t++;
						return t > 0 && (n = Math.abs(e[t] - p) > Math.abs(e[t - 1] - p) ? e[t - 1] : e[t]), p / n < l[d + 1] / l[d] && p / n > l[d - 1] / l[d] ? {
							x: n,
							y: n
						} : null;
					}
					var r, a = i(t.x), o = i(t.y), s = Math.max(t.x, t.y), c = function(e, t) {
						for (var n = 0, r = 0, i = []; n < e.length && r < t.length;) e[n] === t[r] ? (i.push(e[n]), n++, r++) : e[n] > t[r] ? r++ : n++;
						return i;
					}(a, o), l = [
						8,
						10,
						15,
						20,
						32,
						60,
						80
					], u = {
						"x-small": 5,
						small: 4,
						medium: 3,
						large: 2,
						"x-large": 1
					}, d = u[e] || u.medium, f = l[d], p = Math.floor(s / f);
					return (r = n(c)) || (r = n(i(s))) || (r = n(i(p * f))), r;
				}, t.j = function(e, t, n) {
					var r = {
						width: e,
						height: t
					}, i = Object.keys(n).reduce(function(e, t) {
						var i = function(e) {
							return {
								value: parseFloat(e),
								unit: (e.indexOf("%"), e.length, "%")
							};
						}(n[t]);
						return e[t] = l[t](i, r), e;
					}, {});
					return {
						sx: i.left,
						sy: i.top,
						sw: i.right - i.left,
						sh: i.bottom - i.top
					};
				};
				var s = { clone: n(7) }, c = { clone: n(83) }, l = {
					top: function(e, t) {
						if (e.unit === "%") return Math.floor(t.height * (e.value / 100));
					},
					right: function(e, t) {
						if (e.unit === "%") return Math.floor(t.width - t.width * (e.value / 100));
					},
					bottom: function(e, t) {
						if (e.unit === "%") return Math.floor(t.height - t.height * (e.value / 100));
					},
					left: function(e, t) {
						if (e.unit === "%") return Math.floor(t.width * (e.value / 100));
					}
				};
			},
			function(e, t, n) {
				function r(e, t, n, r) {
					t ? this.data = t : n ? (this.data = new n(e.x * e.y), n === Array && r && o.a.init(this.data, 0)) : (this.data = new Uint8Array(e.x * e.y), Uint8Array === Array && r && o.a.init(this.data, 0)), this.size = e;
				}
				var i = n(53), a = n(19), o = n(3), s = { clone: n(7) };
				r.prototype.inImageWithBorder = function(e, t) {
					return e.x >= t && e.y >= t && e.x < this.size.x - t && e.y < this.size.y - t;
				}, r.sample = function(e, t, n) {
					var r = Math.floor(t), i = Math.floor(n), a = e.size.x, o = i * e.size.x + r, s = e.data[o + 0], c = e.data[o + 1], l = e.data[o + a], u = e.data[o + a + 1], d = s - c;
					return t -= r, n -= i, Math.floor(t * (n * (d - l + u) - d) + n * (l - s) + s);
				}, r.clearArray = function(e) {
					for (var t = e.length; t--;) e[t] = 0;
				}, r.prototype.subImage = function(e, t) {
					return new i.a(e, t, this);
				}, r.prototype.subImageAsCopy = function(e, t) {
					var n, r, i = e.size.y, a = e.size.x;
					for (n = 0; n < a; n++) for (r = 0; r < i; r++) e.data[r * a + n] = this.data[(t.y + r) * this.size.x + t.x + n];
				}, r.prototype.copyTo = function(e) {
					for (var t = this.data.length, n = this.data, r = e.data; t--;) r[t] = n[t];
				}, r.prototype.get = function(e, t) {
					return this.data[t * this.size.x + e];
				}, r.prototype.getSafe = function(e, t) {
					var n;
					if (!this.indexMapping) {
						for (this.indexMapping = {
							x: [],
							y: []
						}, n = 0; n < this.size.x; n++) this.indexMapping.x[n] = n, this.indexMapping.x[n + this.size.x] = n;
						for (n = 0; n < this.size.y; n++) this.indexMapping.y[n] = n, this.indexMapping.y[n + this.size.y] = n;
					}
					return this.data[this.indexMapping.y[t + this.size.y] * this.size.x + this.indexMapping.x[e + this.size.x]];
				}, r.prototype.set = function(e, t, n) {
					return this.data[t * this.size.x + e] = n, this;
				}, r.prototype.zeroBorder = function() {
					var e, t = this.size.x, n = this.size.y, r = this.data;
					for (e = 0; e < t; e++) r[e] = r[(n - 1) * t + e] = 0;
					for (e = 1; e < n - 1; e++) r[e * t] = r[e * t + (t - 1)] = 0;
				}, r.prototype.invert = function() {
					for (var e = this.data, t = e.length; t--;) e[t] = +!e[t];
				}, r.prototype.convolve = function(e) {
					var t, n, r, i, a = e.length / 2 | 0, o = 0;
					for (n = 0; n < this.size.y; n++) for (t = 0; t < this.size.x; t++) {
						for (o = 0, i = -a; i <= a; i++) for (r = -a; r <= a; r++) o += e[i + a][r + a] * this.getSafe(t + r, n + i);
						this.data[n * this.size.x + t] = o;
					}
				}, r.prototype.moments = function(e) {
					var t, n, r, i, a, o, c, l, u, d, f = this.data, p = this.size.y, m = this.size.x, h = [], g = [], _ = Math.PI, v = _ / 4;
					if (e <= 0) return g;
					for (a = 0; a < e; a++) h[a] = {
						m00: 0,
						m01: 0,
						m10: 0,
						m11: 0,
						m02: 0,
						m20: 0,
						theta: 0,
						rad: 0
					};
					for (n = 0; n < p; n++) for (i = n * n, t = 0; t < m; t++) (r = f[n * m + t]) > 0 && ((o = h[r - 1]).m00 += 1, o.m01 += n, o.m10 += t, o.m11 += t * n, o.m02 += i, o.m20 += t * t);
					for (a = 0; a < e; a++) o = h[a], isNaN(o.m00) || o.m00 === 0 || (l = o.m10 / o.m00, u = o.m01 / o.m00, c = o.m11 / o.m00 - l * u, d = (o.m02 / o.m00 - u * u - (o.m20 / o.m00 - l * l)) / (2 * c), d = .5 * Math.atan(d) + (c >= 0 ? v : -v) + _, o.theta = (180 * d / _ + 90) % 180 - 90, o.theta < 0 && (o.theta += 180), o.rad = d > _ ? d - _ : d, o.vec = s.clone([Math.cos(d), Math.sin(d)]), g.push(o));
					return g;
				}, r.prototype.show = function(e, t) {
					var n, r, i, a, o, s, c;
					for (t ||= 1, n = e.getContext("2d"), e.width = this.size.x, e.height = this.size.y, i = (r = n.getImageData(0, 0, e.width, e.height)).data, a = 0, c = 0; c < this.size.y; c++) for (s = 0; s < this.size.x; s++) o = c * this.size.x + s, a = this.get(s, c) * t, i[4 * o + 0] = a, i[4 * o + 1] = a, i[4 * o + 2] = a, i[4 * o + 3] = 255;
					n.putImageData(r, 0, 0);
				}, r.prototype.overlay = function(e, t, r) {
					(!t || t < 0 || t > 360) && (t = 360);
					for (var i = [
						0,
						1,
						1
					], o = [
						0,
						0,
						0
					], s = [
						255,
						255,
						255
					], c = [
						0,
						0,
						0
					], l = [], u = e.getContext("2d"), d = u.getImageData(r.x, r.y, this.size.x, this.size.y), f = d.data, p = this.data.length; p--;) i[0] = this.data[p] * t, l = i[0] <= 0 ? s : i[0] >= 360 ? c : n.i(a.a)(i, o), f[4 * p + 0] = l[0], f[4 * p + 1] = l[1], f[4 * p + 2] = l[2], f[4 * p + 3] = 255;
					u.putImageData(d, r.x, r.y);
				}, t.a = r;
			},
			function(e, t, n) {
				var r = n(37);
				e.exports = function(e, t, n) {
					t == "__proto__" && r ? r(e, t, {
						configurable: !0,
						enumerable: !0,
						value: n,
						writable: !0
					}) : e[t] = n;
				};
			},
			function(e, t, n) {
				var r = n(97), i = n(120);
				e.exports = function(e, t) {
					var n = i(e, t);
					return r(n) ? n : void 0;
				};
			},
			function(e, t, n) {
				var r = n(27), i = 1 / 0;
				e.exports = function(e) {
					if (typeof e == "string" || r(e)) return e;
					var t = e + "";
					return t == "0" && 1 / e == -i ? "-0" : t;
				};
			},
			function(e, t, n) {
				var r = n(25), i = n(26);
				e.exports = function(e) {
					return e != null && i(e.length) && !r(e);
				};
			},
			function(e, t, n) {
				var r = n(8), i = n(0), a = "[object AsyncFunction]", o = "[object Function]", s = "[object GeneratorFunction]", c = "[object Proxy]";
				e.exports = function(e) {
					if (!i(e)) return !1;
					var t = r(e);
					return t == o || t == s || t == a || t == c;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
				};
			},
			function(e, t, n) {
				var r = n(8), i = n(6), a = "[object Symbol]";
				e.exports = function(e) {
					return typeof e == "symbol" || i(e) && r(e) == a;
				};
			},
			function(e, t, n) {
				var r = n(100);
				e.exports = n(116)(function(e, t, n) {
					r(e, t, n);
				});
			},
			function(e, t) {
				e.exports = function(e) {
					return e.webpackPolyfill ||= (e.deprecate = function() {}, e.paths = [], e.children ||= [], Object.defineProperty(e, "loaded", {
						enumerable: !0,
						get: function() {
							return e.l;
						}
					}), Object.defineProperty(e, "id", {
						enumerable: !0,
						get: function() {
							return e.i;
						}
					}), 1), e;
				};
			},
			function(e, t, n) {
				t.a = {
					searchDirections: [
						[0, 1],
						[1, 1],
						[1, 0],
						[1, -1],
						[0, -1],
						[-1, -1],
						[-1, 0],
						[-1, 1]
					],
					create: function(e, t) {
						function n(e, t, n, r) {
							for (var i, u, d = 0; d < 7; d++) {
								if (i = e.cy + c[e.dir][0], u = e.cx + c[e.dir][1], o[a = i * l + u] === t && (s[a] === 0 || s[a] === n)) return s[a] = n, e.cy = i, e.cx = u, !0;
								s[a] === 0 && (s[a] = r), e.dir = (e.dir + 1) % 8;
							}
							return !1;
						}
						function r(e, t, n) {
							return {
								dir: n,
								x: e,
								y: t,
								next: null,
								prev: null
							};
						}
						function i(e, t, i, a, o) {
							var s, c, l, u = null, d = {
								cx: t,
								cy: e,
								dir: 0
							};
							if (n(d, a, i, o)) {
								s = u = r(t, e, d.dir), l = d.dir, (c = r(d.cx, d.cy, 0)).prev = s, s.next = c, c.next = null, s = c;
								do
									d.dir = (d.dir + 6) % 8, n(d, a, i, o), l === d.dir ? (s.dir = l, s.x = d.cx, s.y = d.cy) : (s.dir = d.dir, (c = r(d.cx, d.cy, 0)).prev = s, s.next = c, c.next = null, s = c), l = d.dir;
								while (d.cx !== t || d.cy !== e);
								u.prev = s.prev, s.prev.next = u;
							}
							return u;
						}
						var a, o = e.data, s = t.data, c = this.searchDirections, l = e.size.x;
						return {
							trace: function(e, t, r, i) {
								return n(e, t, r, i);
							},
							contourTracing: function(e, t, n, r, a) {
								return i(e, t, n, r, a);
							}
						};
					}
				};
			},
			function(e, t, n) {
				function r() {
					i.a.call(this);
				}
				var i = n(1), a = n(3);
				r.prototype = Object.create(i.a.prototype, {
					ALPHABETH_STRING: { value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%" },
					ALPHABET: { value: [
						48,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						65,
						66,
						67,
						68,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						76,
						77,
						78,
						79,
						80,
						81,
						82,
						83,
						84,
						85,
						86,
						87,
						88,
						89,
						90,
						45,
						46,
						32,
						42,
						36,
						47,
						43,
						37
					] },
					CHARACTER_ENCODINGS: { value: [
						52,
						289,
						97,
						352,
						49,
						304,
						112,
						37,
						292,
						100,
						265,
						73,
						328,
						25,
						280,
						88,
						13,
						268,
						76,
						28,
						259,
						67,
						322,
						19,
						274,
						82,
						7,
						262,
						70,
						22,
						385,
						193,
						448,
						145,
						400,
						208,
						133,
						388,
						196,
						148,
						168,
						162,
						138,
						42
					] },
					ASTERISK: { value: 148 },
					FORMAT: {
						value: "code_39",
						writeable: !1
					}
				}), r.prototype.constructor = r, r.prototype._decode = function() {
					var e, t, n, r, i = this, o = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					], s = [], c = i._findStart();
					if (!c) return null;
					r = i._nextSet(i._row, c.end);
					do {
						if (o = i._toCounters(r, o), (n = i._toPattern(o)) < 0 || (e = i._patternToChar(n)) < 0) return null;
						s.push(e), t = r, r += a.a.sum(o), r = i._nextSet(i._row, r);
					} while (e !== "*");
					return s.pop(), s.length && i._verifyTrailingWhitespace(t, r, o) ? {
						code: s.join(""),
						start: c.start,
						end: r,
						startInfo: c,
						decodedCodes: s
					} : null;
				}, r.prototype._verifyTrailingWhitespace = function(e, t, n) {
					var r = a.a.sum(n);
					return 3 * (t - e - r) >= r;
				}, r.prototype._patternToChar = function(e) {
					var t, n = this;
					for (t = 0; t < n.CHARACTER_ENCODINGS.length; t++) if (n.CHARACTER_ENCODINGS[t] === e) return String.fromCharCode(n.ALPHABET[t]);
					return -1;
				}, r.prototype._findNextWidth = function(e, t) {
					var n, r = Number.MAX_VALUE;
					for (n = 0; n < e.length; n++) e[n] < r && e[n] > t && (r = e[n]);
					return r;
				}, r.prototype._toPattern = function(e) {
					for (var t, n, r = e.length, i = 0, a = r, o = 0; a > 3;) {
						for (i = this._findNextWidth(e, i), a = 0, t = 0, n = 0; n < r; n++) e[n] > i && (t |= 1 << r - 1 - n, a++, o += e[n]);
						if (a === 3) {
							for (n = 0; n < r && a > 0; n++) if (e[n] > i && (a--, 2 * e[n] >= o)) return -1;
							return t;
						}
					}
					return -1;
				}, r.prototype._findStart = function() {
					var e, t, n, r = this, i = r._nextSet(r._row), a = i, o = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					], s = 0, c = !1;
					for (e = i; e < r._row.length; e++) if (r._row[e] ^ c) o[s]++;
					else {
						if (s === o.length - 1) {
							if (r._toPattern(o) === r.ASTERISK && (n = Math.floor(Math.max(0, a - (e - a) / 4)), r._matchRange(n, a, 0))) return {
								start: a,
								end: e
							};
							for (a += o[0] + o[1], t = 0; t < 7; t++) o[t] = o[t + 2];
							o[7] = 0, o[8] = 0, s--;
						} else s++;
						o[s] = 1, c = !c;
					}
					return null;
				}, t.a = r;
			},
			function(e, t) {
				e.exports = function(e, t) {
					return e[0] * t[0] + e[1] * t[1];
				};
			},
			function(e, t, n) {
				e.exports = n(22)(n(5), "Map");
			},
			function(e, t, n) {
				function r(e) {
					var t = -1, n = e == null ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1]);
					}
				}
				var i = n(138), a = n(139), o = n(140), s = n(141), c = n(142);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r;
			},
			function(e, t, n) {
				var r = n(21), i = n(17);
				e.exports = function(e, t, n) {
					(n === void 0 || i(e[t], n)) && (n !== void 0 || t in e) || r(e, t, n);
				};
			},
			function(e, t, n) {
				var r = n(21), i = n(17), a = Object.prototype.hasOwnProperty;
				e.exports = function(e, t, n) {
					var o = e[t];
					a.call(e, t) && i(o, n) && (n !== void 0 || t in e) || r(e, t, n);
				};
			},
			function(e, t, n) {
				var r = n(22);
				e.exports = function() {
					try {
						var e = r(Object, "defineProperty");
						return e({}, "", {}), e;
					} catch {}
				}();
			},
			function(e, t, n) {
				(function(t) {
					e.exports = typeof t == "object" && t && t.Object === Object && t;
				}).call(t, n(47));
			},
			function(e, t, n) {
				e.exports = n(147)(Object.getPrototypeOf, Object);
			},
			function(e, t) {
				var n = Object.prototype;
				e.exports = function(e) {
					var t = e && e.constructor;
					return e === (typeof t == "function" && t.prototype || n);
				};
			},
			function(e, t, n) {
				var r = n(87), i = Math.max;
				e.exports = function(e, t, n) {
					return t = i(t === void 0 ? e.length - 1 : t, 0), function() {
						for (var a = arguments, o = -1, s = i(a.length - t, 0), c = Array(s); ++o < s;) c[o] = a[t + o];
						o = -1;
						for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
						return l[t] = n(c), r(e, this, l);
					};
				};
			},
			function(e, t, n) {
				var r = n(106);
				e.exports = n(148)(r);
			},
			function(e, t) {
				e.exports = function(e) {
					return e;
				};
			},
			function(e, t, n) {
				(function(e) {
					var r = n(5), i = n(163), a = typeof t == "object" && t && !t.nodeType && t, o = a && typeof e == "object" && e && !e.nodeType && e, s = o && o.exports === a ? r.Buffer : void 0;
					e.exports = (s ? s.isBuffer : void 0) || i;
				}).call(t, n(29)(e));
			},
			function(e, t, n) {
				var r = n(98), i = n(109), a = n(145), o = a && a.isTypedArray;
				e.exports = o ? i(o) : r;
			},
			function(e, t, n) {
				var r = n(88), i = n(99), a = n(24);
				e.exports = function(e) {
					return a(e) ? r(e, !0) : i(e);
				};
			},
			function(e, t) {
				var n = function() {
					return this;
				}();
				try {
					n = n || Function("return this")() || (0, eval)("this");
				} catch {
					typeof window == "object" && (n = window);
				}
				e.exports = n;
			},
			function(t, n, r) {
				function i(e) {
					(function(e) {
						S = e || new k.a({
							x: y.getWidth(),
							y: y.getHeight()
						}), C = [
							B.clone([0, 0]),
							B.clone([0, S.size.y]),
							B.clone([S.size.x, S.size.y]),
							B.clone([S.size.x, 0])
						], A.a.init(S, W.locator);
					})(e), w = j.a.create(W.decoder, S);
				}
				function a(e) {
					var t;
					if (W.inputStream.type === "VideoStream") t = document.createElement("video"), y = L.a.createVideoStream(t);
					else if (W.inputStream.type === "ImageStream") y = L.a.createImageStream();
					else if (W.inputStream.type === "LiveStream") {
						var n = o();
						n && ((t = n.querySelector("video")) || (t = document.createElement("video"), n.appendChild(t))), y = L.a.createLiveStream(t), N.a.request(t, W.inputStream.constraints).then(function() {
							y.trigger("canrecord");
						}).catch(function(t) {
							return e(t);
						});
					}
					y.setAttribute("preload", "auto"), y.setInputStream(W.inputStream), y.addEventListener("canrecord", s.bind(void 0, e));
				}
				function o() {
					var e = W.inputStream.target;
					if (e && e.nodeName && e.nodeType === 1) return e;
					var t = typeof e == "string" ? e : "#interactive.viewport";
					return document.querySelector(t);
				}
				function s(e) {
					A.a.checkImageConstraints(y, W.locator), function() {
						if (typeof document < "u") {
							var e = o();
							if (V.dom.image = document.querySelector("canvas.imgBuffer"), V.dom.image || (V.dom.image = document.createElement("canvas"), V.dom.image.className = "imgBuffer", e && W.inputStream.type === "ImageStream" && e.appendChild(V.dom.image)), V.ctx.image = V.dom.image.getContext("2d"), V.dom.image.width = y.getCanvasSize().x, V.dom.image.height = y.getCanvasSize().y, V.dom.overlay = document.querySelector("canvas.drawingBuffer"), !V.dom.overlay) {
								V.dom.overlay = document.createElement("canvas"), V.dom.overlay.className = "drawingBuffer", e && e.appendChild(V.dom.overlay);
								var t = document.createElement("br");
								t.setAttribute("clear", "all"), e && e.appendChild(t);
							}
							V.ctx.overlay = V.dom.overlay.getContext("2d"), V.dom.overlay.width = y.getCanvasSize().x, V.dom.overlay.height = y.getCanvasSize().y;
						}
					}(), b = R.a.create(y, V.dom.image), v(W.numOfWorkers, function() {
						W.numOfWorkers === 0 && i(), function(e) {
							y.play(), e();
						}(e);
					});
				}
				function c(e) {
					function t(e) {
						for (var t = e.length; t--;) e[t][0] += i, e[t][1] += a;
					}
					var n, r = y.getTopRight(), i = r.x, a = r.y;
					if (i !== 0 || a !== 0) {
						if (e.barcodes) for (n = 0; n < e.barcodes.length; n++) c(e.barcodes[n]);
						if (e.line && e.line.length === 2 && function(e) {
							e[0].x += i, e[0].y += a, e[1].x += i, e[1].y += a;
						}(e.line), e.box && t(e.box), e.boxes && e.boxes.length > 0) for (n = 0; n < e.boxes.length; n++) t(e.boxes[n]);
					}
				}
				function l(e, t) {
					t && T && (e.barcodes ? e.barcodes.filter(function(e) {
						return e.codeResult;
					}).forEach(function(e) {
						return l(e, t);
					}) : e.codeResult && T.addResult(t, y.getCanvasSize(), e.codeResult));
				}
				function u(e, t) {
					var n = e;
					e && U && (c(e), l(e, t), n = e.barcodes || e), M.a.publish("processed", n), function(e) {
						return e && (e.barcodes ? e.barcodes.some(function(e) {
							return e.codeResult;
						}) : e.codeResult);
					}(e) && M.a.publish("detected", n);
				}
				function d() {
					var e, t = W.locate ? A.a.locate() : [[
						B.clone(C[0]),
						B.clone(C[1]),
						B.clone(C[2]),
						B.clone(C[3])
					]];
					t ? ((e = (e = w.decodeFromBoundingBoxes(t)) || {}).boxes = t, u(e, S.data)) : u();
				}
				function f() {
					var e;
					if (U) {
						if (H.length > 0) {
							if (!(e = H.filter(function(e) {
								return !e.busy;
							})[0])) return;
							b.attachData(e.imageData);
						} else b.attachData(S.data);
						b.grab() && (e ? (e.busy = !0, e.worker.postMessage({
							cmd: "process",
							imageData: e.imageData
						}, [e.imageData.buffer])) : d());
					} else d();
				}
				function p() {
					U && W.inputStream.type === "LiveStream" ? function() {
						var e = null, t = 1e3 / (W.frequency || 60);
						x = !1, function n(r) {
							e ||= r, x || (r >= e && (e += t, f()), window.requestAnimFrame(n));
						}(performance.now());
					}() : f();
				}
				function m(e) {
					var t, n = {
						worker: void 0,
						imageData: new Uint8Array(y.getWidth() * y.getHeight()),
						busy: !0
					};
					t = _(), n.worker = new Worker(t), n.worker.onmessage = function(r) {
						if (r.data.event === "initialized") return URL.revokeObjectURL(t), n.busy = !1, n.imageData = new Uint8Array(r.data.imageData), e(n);
						r.data.event === "processed" ? (n.imageData = new Uint8Array(r.data.imageData), n.busy = !1, u(r.data.result, n.imageData)) : r.data.event;
					}, n.worker.postMessage({
						cmd: "init",
						size: {
							x: y.getWidth(),
							y: y.getHeight()
						},
						imageData: n.imageData,
						config: h(W)
					}, [n.imageData.buffer]);
				}
				function h(e) {
					return z({}, e, { inputStream: z({}, e.inputStream, { target: null }) });
				}
				function g(e) {
					function t(e) {
						self.postMessage({
							event: "processed",
							imageData: i.data,
							result: e
						}, [i.data.buffer]);
					}
					function n() {
						self.postMessage({
							event: "initialized",
							imageData: i.data
						}, [i.data.buffer]);
					}
					if (e) {
						var r = e().default;
						if (!r) return void self.postMessage({
							event: "error",
							message: "Quagga could not be created"
						});
					}
					var i;
					self.onmessage = function(e) {
						if (e.data.cmd === "init") {
							var a = e.data.config;
							a.numOfWorkers = 0, i = new r.ImageWrapper({
								x: e.data.size.x,
								y: e.data.size.y
							}, new Uint8Array(e.data.imageData)), r.init(a, n, i), r.onProcessed(t);
						} else e.data.cmd === "process" ? (i.data = new Uint8Array(e.data.imageData), r.start()) : e.data.cmd === "setReaders" && r.setReaders(e.data.readers);
					};
				}
				function _() {
					var t, n;
					return e !== void 0 && (n = e), t = new Blob(["(" + g.toString() + ")(" + n + ");"], { type: "text/javascript" }), window.URL.createObjectURL(t);
				}
				function v(e, t) {
					var n = e - H.length;
					if (n === 0) return t && t();
					if (n < 0) return H.slice(n).forEach(function(e) {
						e.worker.terminate();
					}), H = H.slice(0, n), t && t();
					for (var r = function(n) {
						H.push(n), H.length >= e && t && t();
					}, i = 0; i < n; i++) m(r);
				}
				Object.defineProperty(n, "__esModule", { value: !0 });
				var y, b, x, S, C, w, T, E = r(28), D = r.n(E), O = r(54), k = (r.n(O), r(20)), A = r(64), j = r(57), M = r(51), N = r(59), P = r(9), F = r(49), I = r(55), L = r(63), R = r(61), z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}, B = { clone: r(7) }, V = {
					ctx: {
						image: null,
						overlay: null
					},
					dom: {
						image: null,
						overlay: null
					}
				}, H = [], U = !0, W = {};
				n.default = {
					init: function(e, t, n) {
						if (W = D()({}, I.a, e), n) return U = !1, i(n), t();
						a(t);
					},
					start: function() {
						p();
					},
					stop: function() {
						x = !0, v(0), W.inputStream.type === "LiveStream" && (N.a.release(), y.clearEventHandlers());
					},
					pause: function() {
						x = !0;
					},
					onDetected: function(e) {
						M.a.subscribe("detected", e);
					},
					offDetected: function(e) {
						M.a.unsubscribe("detected", e);
					},
					onProcessed: function(e) {
						M.a.subscribe("processed", e);
					},
					offProcessed: function(e) {
						M.a.unsubscribe("processed", e);
					},
					setReaders: function(e) {
						(function(e) {
							w ? w.setReaders(e) : U && H.length > 0 && H.forEach(function(t) {
								t.worker.postMessage({
									cmd: "setReaders",
									readers: e
								});
							});
						})(e);
					},
					registerResultCollector: function(e) {
						e && typeof e.addResult == "function" && (T = e);
					},
					canvas: V,
					decodeSingle: function(e, t) {
						var n = this;
						e = D()({
							inputStream: {
								type: "ImageStream",
								sequence: !1,
								size: 800,
								src: e.src
							},
							numOfWorkers: 1,
							locator: { halfSample: !1 }
						}, e), this.init(e, function() {
							M.a.once("processed", function(e) {
								n.stop(), t.call(null, e);
							}, !0), p();
						});
					},
					ImageWrapper: k.a,
					ImageDebug: P.a,
					ResultCollector: F.a,
					CameraAccess: N.a
				};
			},
			function(e, t, n) {
				var r = n(9);
				t.a = { create: function(e) {
					function t(t) {
						return o && t && !function(e, t) {
							return !!t && t.some(function(t) {
								return Object.keys(t).every(function(n) {
									return t[n] === e[n];
								});
							});
						}(t, e.blacklist) && function(e, t) {
							return typeof t != "function" || t(e);
						}(t, e.filter);
					}
					var n = document.createElement("canvas"), i = n.getContext("2d"), a = [], o = e.capacity || 20, s = !0 === e.capture;
					return {
						addResult: function(e, c, l) {
							var u = {};
							t(l) && (o--, u.codeResult = l, s && (n.width = c.x, n.height = c.y, r.a.drawImage(e, c, i), u.frame = n.toDataURL()), a.push(u));
						},
						getResults: function() {
							return a;
						}
					};
				} };
			},
			function(e, t, n) {
				var r = {
					clone: n(7),
					dot: n(32)
				};
				t.a = {
					create: function(e, t) {
						function n(e) {
							s[e.id] = e, a.push(e);
						}
						function i() {
							var e, t = 0;
							for (e = 0; e < a.length; e++) t += a[e].rad;
							o.rad = t / a.length, o.vec = r.clone([Math.cos(o.rad), Math.sin(o.rad)]);
						}
						var a = [], o = {
							rad: 0,
							vec: r.clone([0, 0])
						}, s = {};
						return n(e), i(), {
							add: function(e) {
								s[e.id] || (n(e), i());
							},
							fits: function(e) {
								return Math.abs(r.dot(e.point.vec, o.vec)) > t;
							},
							getPoints: function() {
								return a;
							},
							getCenter: function() {
								return o;
							}
						};
					},
					createPoint: function(e, t, n) {
						return {
							rad: e[n],
							point: e,
							id: t
						};
					}
				};
			},
			function(e, t, n) {
				t.a = function() {
					function e(e) {
						return i[e] || (i[e] = { subscribers: [] }), i[e];
					}
					function t() {
						i = {};
					}
					function n(e, t) {
						e.async ? setTimeout(function() {
							e.callback(t);
						}, 4) : e.callback(t);
					}
					function r(t, n, r) {
						var i;
						if (typeof n == "function") i = {
							callback: n,
							async: r
						};
						else if (!(i = n).callback) throw "Callback was not specified on options";
						e(t).subscribers.push(i);
					}
					var i = {};
					return {
						subscribe: function(e, t, n) {
							return r(e, t, n);
						},
						publish: function(t, r) {
							var i = e(t), a = i.subscribers;
							a.filter(function(e) {
								return !!e.once;
							}).forEach(function(e) {
								n(e, r);
							}), i.subscribers = a.filter(function(e) {
								return !e.once;
							}), i.subscribers.forEach(function(e) {
								n(e, r);
							});
						},
						once: function(e, t, n) {
							r(e, {
								callback: t,
								async: n,
								once: !0
							});
						},
						unsubscribe: function(n, r) {
							var i;
							n ? (i = e(n)).subscribers = i && r ? i.subscribers.filter(function(e) {
								return e.callback !== r;
							}) : [] : t();
						}
					};
				}();
			},
			function(e, t, n) {
				t.b = function() {
					return navigator.mediaDevices && typeof navigator.mediaDevices.enumerateDevices == "function" ? navigator.mediaDevices.enumerateDevices() : Promise.reject(/* @__PURE__ */ Error("enumerateDevices is not defined"));
				}, t.a = function(e) {
					return navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia == "function" ? navigator.mediaDevices.getUserMedia(e) : Promise.reject(/* @__PURE__ */ Error("getUserMedia is not defined"));
				};
			},
			function(e, t, n) {
				function r(e, t, n) {
					n ||= {
						data: null,
						size: t
					}, this.data = n.data, this.originalSize = n.size, this.I = n, this.from = e, this.size = t;
				}
				r.prototype.show = function(e, t) {
					var n, r, i, a, o, s, c;
					for (t ||= 1, n = e.getContext("2d"), e.width = this.size.x, e.height = this.size.y, i = (r = n.getImageData(0, 0, e.width, e.height)).data, a = 0, o = 0; o < this.size.y; o++) for (s = 0; s < this.size.x; s++) c = o * this.size.x + s, a = this.get(s, o) * t, i[4 * c + 0] = a, i[4 * c + 1] = a, i[4 * c + 2] = a, i[4 * c + 3] = 255;
					r.data = i, n.putImageData(r, 0, 0);
				}, r.prototype.get = function(e, t) {
					return this.data[(this.from.y + t) * this.originalSize.x + this.from.x + e];
				}, r.prototype.updateData = function(e) {
					this.originalSize = e.size, this.data = e.data;
				}, r.prototype.updateFrom = function(e) {
					return this.from = e, this;
				}, t.a = r;
			},
			function(e, t) {
				typeof window < "u" && (window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
					window.setTimeout(e, 1e3 / 60);
				}), Math.imul = Math.imul || function(e, t) {
					var n = 65535 & e, r = 65535 & t;
					return n * r + ((e >>> 16 & 65535) * r + n * (t >>> 16 & 65535) << 16 >>> 0) | 0;
				}, typeof Object.assign != "function" && (Object.assign = function(e) {
					if (e === null) throw TypeError("Cannot convert undefined or null to object");
					for (var t = Object(e), n = 1; n < arguments.length; n++) {
						var r = arguments[n];
						if (r !== null) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
					}
					return t;
				});
			},
			function(e, t, n) {
				t.a = n(56);
			},
			function(e, t) {
				e.exports = {
					inputStream: {
						name: "Live",
						type: "LiveStream",
						constraints: {
							width: 640,
							height: 480,
							facingMode: "environment"
						},
						area: {
							top: "0%",
							right: "0%",
							left: "0%",
							bottom: "0%"
						},
						singleChannel: !1
					},
					locate: !0,
					numOfWorkers: 4,
					decoder: { readers: ["code_128_reader"] },
					locator: {
						halfSample: !0,
						patchSize: "medium"
					}
				};
			},
			function(e, t, n) {
				var r = n(58), i = (n(9), n(69)), a = n(4), o = n(31), s = n(70), c = n(68), l = n(77), u = n(74), d = n(72), f = n(73), p = n(76), m = n(75), h = n(67), g = n(71), _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
					return typeof e;
				} : function(e) {
					return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
				}, v = {
					code_128_reader: i.a,
					ean_reader: a.a,
					ean_5_reader: f.a,
					ean_2_reader: d.a,
					ean_8_reader: u.a,
					code_39_reader: o.a,
					code_39_vin_reader: s.a,
					codabar_reader: c.a,
					upc_reader: l.a,
					upc_e_reader: p.a,
					i2of5_reader: m.a,
					"2of5_reader": h.a,
					code_93_reader: g.a
				};
				t.a = { create: function(e, t) {
					function n() {
						e.readers.forEach(function(e) {
							var t, n = {}, r = [];
							(e === void 0 ? "undefined" : _(e)) === "object" ? (t = e.format, n = e.config) : typeof e == "string" && (t = e), n.supplements && (r = n.supplements.map(function(e) {
								return new v[e]();
							})), c.push(new v[t](n, r));
						});
					}
					function i(e, n, r) {
						function i(t) {
							var r = t * Math.sin(n), i = t * Math.cos(n);
							e[0].y -= r, e[0].x -= i, e[1].y += r, e[1].x += i;
						}
						for (i(r); r > 1 && (!t.inImageWithBorder(e[0], 0) || !t.inImageWithBorder(e[1], 0));) i(-(r -= Math.ceil(r / 2)));
						return e;
					}
					function a(e) {
						var n, i = null, a = r.a.getBarcodeLine(t, e[0], e[1]);
						for (r.a.toBinaryLine(a), n = 0; n < c.length && i === null; n++) i = c[n].decodePattern(a.line);
						return i === null ? null : {
							codeResult: i,
							barcodeLine: a
						};
					}
					function o(e) {
						var t, n, r, o;
						return s.ctx.overlay, t = function(e) {
							return [{
								x: (e[1][0] - e[0][0]) / 2 + e[0][0],
								y: (e[1][1] - e[0][1]) / 2 + e[0][1]
							}, {
								x: (e[3][0] - e[2][0]) / 2 + e[2][0],
								y: (e[3][1] - e[2][1]) / 2 + e[2][1]
							}];
						}(e), o = function(e) {
							return Math.sqrt(Math.abs(e[1].y - e[0].y) ** 2 + Math.abs(e[1].x - e[0].x) ** 2);
						}(t), (t = i(t, n = Math.atan2(t[1].y - t[0].y, t[1].x - t[0].x), Math.floor(.1 * o))) === null ? null : ((r = a(t)) === null && (r = function(e, t, n) {
							var r, i, o, s = Math.sqrt((e[1][0] - e[0][0]) ** 2 + (e[1][1] - e[0][1]) ** 2), c = null, l = Math.sin(n), u = Math.cos(n);
							for (r = 1; r < 16 && c === null; r++) o = {
								y: (i = s / 16 * r * (r % 2 == 0 ? -1 : 1)) * l,
								x: i * u
							}, t[0].y += o.x, t[0].x -= o.y, t[1].y += o.x, t[1].x -= o.y, c = a(t);
							return c;
						}(e, t, n)), r === null ? null : {
							codeResult: r.codeResult,
							line: t,
							angle: n,
							pattern: r.barcodeLine.line,
							threshold: r.barcodeLine.threshold
						});
					}
					var s = {
						ctx: {
							frequency: null,
							pattern: null,
							overlay: null
						},
						dom: {
							frequency: null,
							pattern: null,
							overlay: null
						}
					}, c = [];
					return n(), {
						decodeFromBoundingBox: function(e) {
							return o(e);
						},
						decodeFromBoundingBoxes: function(t) {
							var n, r, i = [], a = e.multiple;
							for (n = 0; n < t.length; n++) {
								var s = t[n];
								if ((r = o(s) || {}).box = s, a) i.push(r);
								else if (r.codeResult) return r;
							}
							if (a) return { barcodes: i };
						},
						setReaders: function(t) {
							e.readers = t, c.length = 0, n();
						}
					};
				} };
			},
			function(e, t, n) {
				var r = (n(20), {}), i = {
					UP: 1,
					DOWN: -1
				};
				r.getBarcodeLine = function(e, t, n) {
					function r(e, t) {
						d = v[t * y + e], b = d < b ? d : b, x = d > x ? d : x, _.push(d);
					}
					var i, a, o, s, c, l, u, d, f = 0 | t.x, p = 0 | t.y, m = 0 | n.x, h = 0 | n.y, g = Math.abs(h - p) > Math.abs(m - f), _ = [], v = e.data, y = e.size.x, b = 255, x = 0;
					for (g && (l = f, f = p, p = l, l = m, m = h, h = l), f > m && (l = f, f = m, m = l, l = p, p = h, h = l), i = m - f, a = Math.abs(h - p), o = i / 2 | 0, c = p, s = p < h ? 1 : -1, u = f; u < m; u++) g ? r(c, u) : r(u, c), (o -= a) < 0 && (c += s, o += i);
					return {
						line: _,
						min: b,
						max: x
					};
				}, r.toBinaryLine = function(e) {
					var t, n, r, a, o, s, c = e.min, l = e.max, u = e.line, d = c + (l - c) / 2, f = [], p = (l - c) / 12, m = -p;
					for (r = u[0] > d ? i.UP : i.DOWN, f.push({
						pos: 0,
						val: u[0]
					}), o = 0; o < u.length - 2; o++) r !== (a = (t = u[o + 1] - u[o]) + (n = u[o + 2] - u[o + 1]) < m && u[o + 1] < 1.5 * d ? i.DOWN : t + n > p && u[o + 1] > .5 * d ? i.UP : r) && (f.push({
						pos: o,
						val: u[o]
					}), r = a);
					for (f.push({
						pos: u.length,
						val: u[u.length - 1]
					}), s = f[0].pos; s < f[1].pos; s++) u[s] = u[s] > d ? 0 : 1;
					for (o = 1; o < f.length - 1; o++) for (p = f[o + 1].val > f[o].val ? f[o].val + (f[o + 1].val - f[o].val) / 3 * 2 | 0 : f[o + 1].val + (f[o].val - f[o + 1].val) / 3 | 0, s = f[o].pos; s < f[o + 1].pos; s++) u[s] = u[s] > p ? 0 : 1;
					return {
						line: u,
						threshold: p
					};
				}, r.debug = {
					printFrequency: function(e, t) {
						var n, r = t.getContext("2d");
						for (t.width = e.length, t.height = 256, r.beginPath(), r.strokeStyle = "blue", n = 0; n < e.length; n++) r.moveTo(n, 255), r.lineTo(n, 255 - e[n]);
						r.stroke(), r.closePath();
					},
					printPattern: function(e, t) {
						var n, r = t.getContext("2d");
						for (t.width = e.length, r.fillColor = "black", n = 0; n < e.length; n++) e[n] === 1 && r.fillRect(n, 0, 1, 100);
					}
				}, t.a = r;
			},
			function(e, t, n) {
				function r(e) {
					return new Promise(function(t, n) {
						var r = 10;
						(function i() {
							r > 0 ? e.videoWidth > 10 && e.videoHeight > 10 ? t() : window.setTimeout(i, 500) : n("Unable to play video stream. Is webcam working?"), r--;
						})();
					});
				}
				function i(e, t) {
					return n.i(u.a)(t).then(function(t) {
						return new Promise(function(n) {
							s = t, e.setAttribute("autoplay", !0), e.setAttribute("muted", !0), e.setAttribute("playsinline", !0), e.srcObject = t, e.addEventListener("loadedmetadata", function() {
								e.play(), n();
							});
						});
					}).then(r.bind(null, e));
				}
				function a(e) {
					var t = l()(e, [
						"width",
						"height",
						"facingMode",
						"aspectRatio",
						"deviceId"
					]);
					return e.minAspectRatio !== void 0 && e.minAspectRatio > 0 && (t.aspectRatio = e.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), e.facing !== void 0 && (t.facingMode = e.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), t;
				}
				function o() {
					if (s) {
						var e = s.getVideoTracks();
						if (e && e.length) return e[0];
					}
				}
				var s, c = n(162), l = n.n(c), u = n(52);
				t.a = {
					request: function(e, t) {
						return function(e) {
							var t = {
								audio: !1,
								video: a(e)
							};
							return t.video.deviceId && t.video.facingMode && delete t.video.facingMode, Promise.resolve(t);
						}(t).then(i.bind(null, e));
					},
					release: function() {
						var e = s && s.getVideoTracks();
						e && e.length && e[0].stop(), s = null;
					},
					enumerateVideoDevices: function() {
						return n.i(u.b)().then(function(e) {
							return e.filter(function(e) {
								return e.kind === "videoinput";
							});
						});
					},
					getActiveStreamLabel: function() {
						var e = o();
						return e ? e.label : "";
					},
					getActiveTrack: o
				};
			},
			function(e, t, n) {
				function r(e) {
					return new Promise(function(t) {
						var n = new FileReader();
						n.onload = function(e) {
							return t(e.target.result);
						}, n.readAsArrayBuffer(e);
					});
				}
				function i(e, t, n) {
					if (function(e, t, n) {
						for (var r = "", i = t; i < t + n; i++) r += String.fromCharCode(e.getUint8(i));
						return r;
					}(e, t, 4) !== "Exif") return !1;
					var r = t + 6, i = void 0;
					if (e.getUint16(r) === 18761) i = !1;
					else {
						if (e.getUint16(r) !== 19789) return !1;
						i = !0;
					}
					if (e.getUint16(r + 2, !i) !== 42) return !1;
					var o = e.getUint32(r + 4, !i);
					return !(o < 8) && function(e, t, n, r, i) {
						for (var o = e.getUint16(n, !i), s = {}, c = 0; c < o; c++) {
							var l = n + 12 * c + 2, u = r[e.getUint16(l, !i)];
							u && (s[u] = a(e, l, 0, 0, i));
						}
						return s;
					}(e, 0, r + o, n, i);
				}
				function a(e, t, n, r, i) {
					var a = e.getUint16(t + 2, !i), o = e.getUint32(t + 4, !i);
					if (a === 3 && o === 1) return e.getUint16(t + 8, !i);
				}
				t.a = function(e) {
					var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
					return /^blob\:/i.test(e) ? function(e) {
						return new Promise(function(t, n) {
							var r = new XMLHttpRequest();
							r.open("GET", e, !0), r.responseType = "blob", r.onreadystatechange = function() {
								r.readyState !== XMLHttpRequest.DONE || r.status !== 200 && r.status !== 0 || t(this.response);
							}, r.onerror = n, r.send();
						});
					}(e).then(r).then(function(e) {
						return function(e) {
							var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, n = new DataView(e), r = e.byteLength, a = t.reduce(function(e, t) {
								var n = Object.keys(o).filter(function(e) {
									return o[e] === t;
								})[0];
								return n && (e[n] = t), e;
							}, {}), c = 2;
							if (n.getUint8(0) !== 255 || n.getUint8(1) !== 216) return !1;
							for (; c < r;) {
								if (n.getUint8(c) !== 255) return !1;
								if (n.getUint8(c + 1) === 225) return i(n, c + 4, a);
								c += 2 + n.getUint16(c + 2);
							}
						}(e, t);
					}) : Promise.resolve(null);
				};
				var o = { 274: "orientation" }, s = Object.keys(o).map(function(e) {
					return o[e];
				});
			},
			function(e, t, n) {
				var r = n(19), i = Math.PI / 180;
				t.a = { create: function(e, t) {
					var a, o = {}, s = e.getConfig(), c = (n.i(r.b)(e.getRealWidth(), e.getRealHeight()), e.getCanvasSize()), l = n.i(r.b)(e.getWidth(), e.getHeight()), u = e.getTopRight(), d = u.x, f = u.y, p = null, m = null;
					return (a = t || document.createElement("canvas")).width = c.x, a.height = c.y, p = a.getContext("2d"), m = new Uint8Array(l.x * l.y), o.attachData = function(e) {
						m = e;
					}, o.getData = function() {
						return m;
					}, o.grab = function() {
						var t, o = s.halfSample, u = e.getFrame(), h = u, g = 0;
						if (h) {
							if (function(e, t) {
								e.width !== t.x && (e.width = t.x), e.height !== t.y && (e.height = t.y);
							}(a, c), s.type === "ImageStream" && (h = u.img, u.tags && u.tags.orientation)) switch (u.tags.orientation) {
								case 6:
									g = 90 * i;
									break;
								case 8: g = -90 * i;
							}
							return g === 0 ? p.drawImage(h, 0, 0, c.x, c.y) : (p.translate(c.x / 2, c.y / 2), p.rotate(g), p.drawImage(h, -c.y / 2, -c.x / 2, c.y, c.x), p.rotate(-g), p.translate(-c.x / 2, -c.y / 2)), t = p.getImageData(d, f, l.x, l.y).data, o ? n.i(r.c)(t, l, m) : n.i(r.d)(t, m, s), !0;
						}
						return !1;
					}, o.getSize = function() {
						return l;
					}, o;
				} };
			},
			function(e, t, n) {
				function r(e, t) {
					e.onload = function() {
						t.loaded(this);
					};
				}
				var i = n(60);
				t.a = { load: function(e, t, a, o, s) {
					var c, l, u, d = Array(o), f = Array(d.length);
					if (!1 === s) d[0] = e;
					else for (c = 0; c < d.length; c++) u = a + c, d[c] = e + "image-" + ("00" + u).slice(-3) + ".jpg";
					for (f.notLoaded = [], f.addImage = function(e) {
						f.notLoaded.push(e);
					}, f.loaded = function(r) {
						for (var a = f.notLoaded, o = 0; o < a.length; o++) if (a[o] === r) {
							a.splice(o, 1);
							for (var c = 0; c < d.length; c++) {
								var l = d[c].substr(d[c].lastIndexOf("/"));
								if (r.src.lastIndexOf(l) !== -1) {
									f[c] = { img: r };
									break;
								}
							}
							break;
						}
						a.length === 0 && (!1 === s ? n.i(i.a)(e, ["orientation"]).then(function(e) {
							f[0].tags = e, t(f);
						}).catch(function(e) {
							console.log(e), t(f);
						}) : t(f));
					}, c = 0; c < d.length; c++) l = new Image(), f.addImage(l), r(l, f), l.src = d[c];
				} };
			},
			function(e, t, n) {
				var r = n(62), i = {
					createVideoStream: function(e) {
						function t() {
							var t = e.videoWidth, i = e.videoHeight;
							n = a.size ? t / i > 1 ? a.size : Math.floor(t / i * a.size) : t, r = a.size ? t / i > 1 ? Math.floor(i / t * a.size) : a.size : i, l.x = n, l.y = r;
						}
						var n, r, i = {}, a = null, o = ["canrecord", "ended"], s = {}, c = {
							x: 0,
							y: 0
						}, l = {
							x: 0,
							y: 0
						};
						return i.getRealWidth = function() {
							return e.videoWidth;
						}, i.getRealHeight = function() {
							return e.videoHeight;
						}, i.getWidth = function() {
							return n;
						}, i.getHeight = function() {
							return r;
						}, i.setWidth = function(e) {
							n = e;
						}, i.setHeight = function(e) {
							r = e;
						}, i.setInputStream = function(t) {
							a = t, e.src = t.src === void 0 ? "" : t.src;
						}, i.ended = function() {
							return e.ended;
						}, i.getConfig = function() {
							return a;
						}, i.setAttribute = function(t, n) {
							e.setAttribute(t, n);
						}, i.pause = function() {
							e.pause();
						}, i.play = function() {
							e.play();
						}, i.setCurrentTime = function(t) {
							a.type !== "LiveStream" && (e.currentTime = t);
						}, i.addEventListener = function(t, n, r) {
							o.indexOf(t) === -1 ? e.addEventListener(t, n, r) : (s[t] || (s[t] = []), s[t].push(n));
						}, i.clearEventHandlers = function() {
							o.forEach(function(t) {
								var n = s[t];
								n && n.length > 0 && n.forEach(function(n) {
									e.removeEventListener(t, n);
								});
							});
						}, i.trigger = function(e, n) {
							var r, a = s[e];
							if (e === "canrecord" && t(), a && a.length > 0) for (r = 0; r < a.length; r++) a[r].apply(i, n);
						}, i.setTopRight = function(e) {
							c.x = e.x, c.y = e.y;
						}, i.getTopRight = function() {
							return c;
						}, i.setCanvasSize = function(e) {
							l.x = e.x, l.y = e.y;
						}, i.getCanvasSize = function() {
							return l;
						}, i.getFrame = function() {
							return e;
						}, i;
					},
					createLiveStream: function(e) {
						e.setAttribute("autoplay", !0);
						var t = i.createVideoStream(e);
						return t.ended = function() {
							return !1;
						}, t;
					},
					createImageStream: function() {
						function e() {
							d = !1, r.a.load(h, function(e) {
								if (f = e, e[0].tags && e[0].tags.orientation) switch (e[0].tags.orientation) {
									case 6:
									case 8:
										s = e[0].img.height, c = e[0].img.width;
										break;
									default: s = e[0].img.width, c = e[0].img.height;
								}
								else s = e[0].img.width, c = e[0].img.height;
								n = o.size ? s / c > 1 ? o.size : Math.floor(s / c * o.size) : s, i = o.size ? s / c > 1 ? Math.floor(c / s * o.size) : o.size : c, b.x = n, b.y = i, d = !0, l = 0, setTimeout(function() {
									t("canrecord", []);
								}, 0);
							}, m, p, o.sequence);
						}
						function t(e, t) {
							var n, r = v[e];
							if (r && r.length > 0) for (n = 0; n < r.length; n++) r[n].apply(a, t);
						}
						var n, i, a = {}, o = null, s = 0, c = 0, l = 0, u = !0, d = !1, f = null, p = 0, m = 1, h = null, g = !1, _ = ["canrecord", "ended"], v = {}, y = {
							x: 0,
							y: 0
						}, b = {
							x: 0,
							y: 0
						};
						return a.trigger = t, a.getWidth = function() {
							return n;
						}, a.getHeight = function() {
							return i;
						}, a.setWidth = function(e) {
							n = e;
						}, a.setHeight = function(e) {
							i = e;
						}, a.getRealWidth = function() {
							return s;
						}, a.getRealHeight = function() {
							return c;
						}, a.setInputStream = function(t) {
							o = t, !1 === t.sequence ? (h = t.src, p = 1) : (h = t.src, p = t.length), e();
						}, a.ended = function() {
							return g;
						}, a.setAttribute = function() {}, a.getConfig = function() {
							return o;
						}, a.pause = function() {
							u = !0;
						}, a.play = function() {
							u = !1;
						}, a.setCurrentTime = function(e) {
							l = e;
						}, a.addEventListener = function(e, t) {
							_.indexOf(e) !== -1 && (v[e] || (v[e] = []), v[e].push(t));
						}, a.setTopRight = function(e) {
							y.x = e.x, y.y = e.y;
						}, a.getTopRight = function() {
							return y;
						}, a.setCanvasSize = function(e) {
							b.x = e.x, b.y = e.y;
						}, a.getCanvasSize = function() {
							return b;
						}, a.getFrame = function() {
							var e;
							return d ? (u || (e = f[l], l < p - 1 ? l++ : setTimeout(function() {
								g = !0, t("ended", []);
							}, 0)), e) : null;
						}, a;
					}
				};
				t.a = i;
			},
			function(e, t, n) {
				(function(e) {
					function r() {
						var t;
						l = c.halfSample ? new b.a({
							x: v.size.x / 2 | 0,
							y: v.size.y / 2 | 0
						}) : v, _ = n.i(x.e)(c.patchSize, l.size), k.x = l.size.x / _.x | 0, k.y = l.size.y / _.y | 0, g = new b.a(l.size, void 0, Uint8Array, !1), f = new b.a(_, void 0, Array, !0), t = /* @__PURE__ */ new ArrayBuffer(65536), d = new b.a(_, new Uint8Array(t, 0, _.x * _.y)), u = new b.a(_, new Uint8Array(t, _.x * _.y * 3, _.x * _.y), void 0, !0), y = n.i(T.a)(typeof window < "u" ? window : typeof self < "u" ? self : e, { size: _.x }, t), h = new b.a({
							x: l.size.x / d.size.x | 0,
							y: l.size.y / d.size.y | 0
						}, void 0, Array, !0), p = new b.a(h.size, void 0, void 0, !0), m = new b.a(h.size, void 0, Int32Array, !0);
					}
					function i(e) {
						var t, n, r, i, a, o, s, l = g.size.x, u = g.size.y, d = -g.size.x, f = -g.size.y;
						for (t = 0, n = 0; n < e.length; n++) t += (i = e[n]).rad;
						for ((t = (180 * (t /= e.length) / Math.PI + 90) % 180 - 90) < 0 && (t += 180), t = (180 - t) * Math.PI / 180, a = D.copy(D.create(), [
							Math.cos(t),
							Math.sin(t),
							-Math.sin(t),
							Math.cos(t)
						]), n = 0; n < e.length; n++) for (i = e[n], r = 0; r < 4; r++) E.transformMat2(i.box[r], i.box[r], a);
						for (n = 0; n < e.length; n++) for (i = e[n], r = 0; r < 4; r++) i.box[r][0] < l && (l = i.box[r][0]), i.box[r][0] > d && (d = i.box[r][0]), i.box[r][1] < u && (u = i.box[r][1]), i.box[r][1] > f && (f = i.box[r][1]);
						for (o = [
							[l, u],
							[d, u],
							[d, f],
							[l, f]
						], s = c.halfSample ? 2 : 1, a = D.invert(a, a), r = 0; r < 4; r++) E.transformMat2(o[r], o[r], a);
						for (r = 0; r < 4; r++) E.scale(o[r], o[r], s);
						return o;
					}
					function a(e) {
						var t = n.i(x.g)(e, .9), r = n.i(x.h)(t, 1, function(e) {
							return e.getPoints().length;
						}), i = [], a = [];
						if (r.length === 1) {
							i = r[0].item.getPoints();
							for (var o = 0; o < i.length; o++) a.push(i[o].point);
						}
						return a;
					}
					function o(e, t) {
						g.subImageAsCopy(d, n.i(x.b)(e, t)), y.skeletonize();
					}
					function s(e, t, n, r) {
						var i, o, s, c, l = [], u = [], f = Math.ceil(_.x / 3);
						if (e.length >= 2) {
							for (i = 0; i < e.length; i++) e[i].m00 > f && l.push(e[i]);
							if (l.length >= 2) {
								for (s = a(l), o = 0, i = 0; i < s.length; i++) o += s[i].rad;
								s.length > 1 && s.length >= l.length / 4 * 3 && s.length > e.length / 4 && (o /= s.length, c = {
									index: t[1] * k.x + t[0],
									pos: {
										x: n,
										y: r
									},
									box: [
										E.clone([n, r]),
										E.clone([n + d.size.x, r]),
										E.clone([n + d.size.x, r + d.size.y]),
										E.clone([n, r + d.size.y])
									],
									moments: s,
									rad: o,
									vec: E.clone([Math.cos(o), Math.sin(o)])
								}, u.push(c));
							}
						}
						return u;
					}
					var c, l, u, d, f, p, m, h, g, _, v, y, b = n(20), x = n(19), S = n(3), C = (n(9), n(65)), w = n(30), T = n(66), E = {
						clone: n(7),
						dot: n(32),
						scale: n(81),
						transformMat2: n(82)
					}, D = {
						copy: n(78),
						create: n(79),
						invert: n(80)
					}, O = {
						ctx: { binary: null },
						dom: { binary: null }
					}, k = {
						x: 0,
						y: 0
					};
					t.a = {
						init: function(e, t) {
							c = t, v = e, r(), c.useWorker || typeof document > "u" || (O.dom.binary = document.createElement("canvas"), O.dom.binary.className = "binaryBuffer", O.ctx.binary = O.dom.binary.getContext("2d"), O.dom.binary.width = g.size.x, O.dom.binary.height = g.size.y);
						},
						locate: function() {
							var e, t;
							if (c.halfSample && n.i(x.i)(v, l), n.i(x.f)(l, g), g.zeroBorder(), e = function() {
								var e, t, n, r, i, a, c = [];
								for (e = 0; e < k.x; e++) for (t = 0; t < k.y; t++) o(n = d.size.x * e, r = d.size.y * t), u.zeroBorder(), S.a.init(f.data, 0), a = C.a.create(u, f).rasterize(0), i = f.moments(a.count), c = c.concat(s(i, [e, t], n, r));
								return c;
							}(), e.length < k.x * k.y * .05) return null;
							var r = function(e) {
								function t() {
									for (var e = 0; e < m.data.length; e++) if (m.data[e] === 0 && p.data[e] === 1) return e;
									return m.length;
								}
								function n(e) {
									var t, r, i, s, c, l = e % m.size.x, u = e / m.size.x | 0;
									if (e < m.data.length) for (i = h.data[e], m.data[e] = a, c = 0; c < w.a.searchDirections.length; c++) r = u + w.a.searchDirections[c][0], t = l + w.a.searchDirections[c][1], s = r * m.size.x + t, p.data[s] === 0 ? m.data[s] = Number.MAX_VALUE : m.data[s] === 0 && Math.abs(E.dot(h.data[s].vec, i.vec)) > o && n(s);
								}
								var r, i, a = 0, o = .95, s = 0;
								for (S.a.init(p.data, 0), S.a.init(m.data, 0), S.a.init(h.data, null), r = 0; r < e.length; r++) i = e[r], h.data[i.index] = i, p.data[i.index] = 1;
								for (p.zeroBorder(); (s = t()) < m.data.length;) a++, n(s);
								return a;
							}(e);
							return r < 1 ? null : (t = function(e) {
								var t, n, r = [];
								for (t = 0; t < e; t++) r.push(0);
								for (n = m.data.length; n--;) m.data[n] > 0 && r[m.data[n] - 1]++;
								return r = r.map(function(e, t) {
									return {
										val: e,
										label: t + 1
									};
								}), r.sort(function(e, t) {
									return t.val - e.val;
								}), r.filter(function(e) {
									return e.val >= 5;
								});
							}(r), t.length === 0 ? null : function(e) {
								var t, n, r, a, o = [], s = [];
								for (t = 0; t < e.length; t++) {
									for (n = m.data.length, o.length = 0; n--;) m.data[n] === e[t].label && (r = h.data[n], o.push(r));
									(a = i(o)) && s.push(a);
								}
								return s;
							}(t));
						},
						checkImageConstraints: function(e, t) {
							var r, i, a, o = e.getWidth(), s = e.getHeight(), c = t.halfSample ? .5 : 1;
							if (e.getConfig().area && (a = n.i(x.j)(o, s, e.getConfig().area), e.setTopRight({
								x: a.sx,
								y: a.sy
							}), e.setCanvasSize({
								x: o,
								y: s
							}), o = a.sw, s = a.sh), i = {
								x: Math.floor(o * c),
								y: Math.floor(s * c)
							}, r = n.i(x.e)(t.patchSize, i), e.setWidth(Math.floor(Math.floor(i.x / r.x) * (1 / c) * r.x)), e.setHeight(Math.floor(Math.floor(i.y / r.y) * (1 / c) * r.y)), e.getWidth() % r.x == 0 && e.getHeight() % r.y == 0) return !0;
							throw Error("Image dimensions do not comply with the current settings: Width (" + o + " )and height (" + s + ") must a multiple of " + r.x);
						}
					};
				}).call(t, n(47));
			},
			function(e, t, n) {
				var r = n(30), i = {
					createContour2D: function() {
						return {
							dir: null,
							index: null,
							firstVertex: null,
							insideContours: null,
							nextpeer: null,
							prevpeer: null
						};
					},
					CONTOUR_DIR: {
						CW_DIR: 0,
						CCW_DIR: 1,
						UNKNOWN_DIR: 2
					},
					DIR: {
						OUTSIDE_EDGE: -32767,
						INSIDE_EDGE: -32766
					},
					create: function(e, t) {
						var n = e.data, a = t.data, o = e.size.x, s = e.size.y, c = r.a.create(e, t);
						return {
							rasterize: function(e) {
								var t, r, l, u, d, f, p, m, h, g, _, v, y = [], b = 0;
								for (v = 0; v < 400; v++) y[v] = 0;
								for (y[0] = n[0], h = null, f = 1; f < s - 1; f++) for (u = 0, r = y[0], d = 1; d < o - 1; d++) if (a[_ = f * o + d] === 0) {
									if ((t = n[_]) !== r) {
										if (u === 0) y[l = b + 1] = t, r = t, (p = c.contourTracing(f, d, l, t, i.DIR.OUTSIDE_EDGE)) !== null && (b++, u = l, (m = i.createContour2D()).dir = i.CONTOUR_DIR.CW_DIR, m.index = u, m.firstVertex = p, m.nextpeer = h, m.insideContours = null, h !== null && (h.prevpeer = m), h = m);
										else if ((p = c.contourTracing(f, d, i.DIR.INSIDE_EDGE, t, u)) !== null) {
											for ((m = i.createContour2D()).firstVertex = p, m.insideContours = null, m.dir = e === 0 ? i.CONTOUR_DIR.CCW_DIR : i.CONTOUR_DIR.CW_DIR, m.index = e, g = h; g !== null && g.index !== u;) g = g.nextpeer;
											g !== null && (m.nextpeer = g.insideContours, g.insideContours !== null && (g.insideContours.prevpeer = m), g.insideContours = m);
										}
									} else a[_] = u;
								} else a[_] === i.DIR.OUTSIDE_EDGE || a[_] === i.DIR.INSIDE_EDGE ? (u = 0, r = a[_] === i.DIR.INSIDE_EDGE ? n[_] : y[0]) : r = y[u = a[_]];
								for (g = h; g !== null;) g.index = e, g = g.nextpeer;
								return {
									cc: h,
									count: b
								};
							},
							debug: { drawContour: function(e, t) {
								var n, r, a, o = e.getContext("2d"), s = t;
								for (o.strokeStyle = "red", o.fillStyle = "red", o.lineWidth = 1, n = s === null ? null : s.insideContours; s !== null;) {
									switch (n === null ? (r = s, n = (s = s.nextpeer) === null ? null : s.insideContours) : (r = n, n = n.nextpeer), r.dir) {
										case i.CONTOUR_DIR.CW_DIR:
											o.strokeStyle = "red";
											break;
										case i.CONTOUR_DIR.CCW_DIR:
											o.strokeStyle = "blue";
											break;
										case i.CONTOUR_DIR.UNKNOWN_DIR: o.strokeStyle = "green";
									}
									a = r.firstVertex, o.beginPath(), o.moveTo(a.x, a.y);
									do
										a = a.next, o.lineTo(a.x, a.y);
									while (a !== r.firstVertex);
									o.stroke();
								}
							} }
						};
					}
				};
				t.a = i;
			},
			function(e, t, n) {
				t.a = function(e, t, n) {
					"use asm";
					var r = new e.Uint8Array(n), i = t.size | 0, a = e.Math.imul;
					function o(e, t) {
						e |= 0, t |= 0;
						var n = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0;
						for (n = 1; (n | 0) < (i - 1 | 0); n = n + 1 | 0) for (d = d + i | 0, a = 1; (a | 0) < (i - 1 | 0); a = a + 1 | 0) s = d - i | 0, c = d + i | 0, l = a - 1 | 0, u = a + 1 | 0, o = (r[e + s + l | 0] | 0) + (r[e + s + u | 0] | 0) + (r[e + d + a | 0] | 0) + (r[e + c + l | 0] | 0) + (r[e + c + u | 0] | 0) | 0, (o | 0) == 5 ? r[t + d + a | 0] = 1 : r[t + d + a | 0] = 0;
					}
					function s(e, t, n) {
						e |= 0, t |= 0, n |= 0;
						var o = 0;
						for (o = a(i, i) | 0; (o | 0) > 0;) o = o - 1 | 0, r[n + o | 0] = (r[e + o | 0] | 0) - (r[t + o | 0] | 0) | 0;
					}
					function c(e, t, n) {
						e |= 0, t |= 0, n |= 0;
						var o = 0;
						for (o = a(i, i) | 0; (o | 0) > 0;) o = o - 1 | 0, r[n + o | 0] = r[e + o | 0] | 0 | r[t + o | 0];
					}
					function l(e) {
						e |= 0;
						var t = 0, n = 0;
						for (n = a(i, i) | 0; (n | 0) > 0;) n = n - 1 | 0, t = (t | 0) + (r[e + n | 0] | 0) | 0;
						return t | 0;
					}
					function u(e, t) {
						e |= 0, t |= 0;
						var n = 0;
						for (n = a(i, i) | 0; (n | 0) > 0;) n = n - 1 | 0, r[e + n | 0] = t;
					}
					function d(e, t) {
						e |= 0, t |= 0;
						var n = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0;
						for (n = 1; (n | 0) < (i - 1 | 0); n = n + 1 | 0) for (d = d + i | 0, a = 1; (a | 0) < (i - 1 | 0); a = a + 1 | 0) s = d - i | 0, c = d + i | 0, l = a - 1 | 0, u = a + 1 | 0, o = (r[e + s + l | 0] | 0) + (r[e + s + u | 0] | 0) + (r[e + d + a | 0] | 0) + (r[e + c + l | 0] | 0) + (r[e + c + u | 0] | 0) | 0, (o | 0) > 0 ? r[t + d + a | 0] = 1 : r[t + d + a | 0] = 0;
					}
					function f(e, t) {
						e |= 0, t |= 0;
						var n = 0;
						for (n = a(i, i) | 0; (n | 0) > 0;) n = n - 1 | 0, r[t + n | 0] = r[e + n | 0] | 0;
					}
					function p(e) {
						e |= 0;
						var t = 0, n = 0;
						for (t = 0; (t | 0) < (i - 1 | 0); t = t + 1 | 0) r[e + t | 0] = 0, r[e + n | 0] = 0, n = n + i - 1 | 0, r[e + n | 0] = 0, n = n + 1 | 0;
						for (t = 0; (t | 0) < (i | 0); t = t + 1 | 0) r[e + n | 0] = 0, n = n + 1 | 0;
					}
					function m() {
						var e = 0, t = 0, n = 0, r = 0, m = 0, h = 0;
						t = a(i, i) | 0, n = t + t | 0, r = n + t | 0, u(r, 0), p(e);
						do
							o(e, t), d(t, n), s(e, n, n), c(r, n, r), f(t, e), m = l(e) | 0, h = !(m | 0) | 0;
						while (!h);
					}
					return { skeletonize: m };
				};
			},
			function(e, t, n) {
				function r(e) {
					i.a.call(this, e), this.barSpaceRatio = [1, 1];
				}
				var i = n(1), a = {
					START_PATTERN: { value: [
						3,
						1,
						3,
						1,
						1,
						1
					] },
					STOP_PATTERN: { value: [
						3,
						1,
						1,
						1,
						3
					] },
					CODE_PATTERN: { value: [
						[
							1,
							1,
							3,
							3,
							1
						],
						[
							3,
							1,
							1,
							1,
							3
						],
						[
							1,
							3,
							1,
							1,
							3
						],
						[
							3,
							3,
							1,
							1,
							1
						],
						[
							1,
							1,
							3,
							1,
							3
						],
						[
							3,
							1,
							3,
							1,
							1
						],
						[
							1,
							3,
							3,
							1,
							1
						],
						[
							1,
							1,
							1,
							3,
							3
						],
						[
							3,
							1,
							1,
							3,
							1
						],
						[
							1,
							3,
							1,
							3,
							1
						]
					] },
					SINGLE_CODE_ERROR: {
						value: .78,
						writable: !0
					},
					AVG_CODE_ERROR: {
						value: .3,
						writable: !0
					},
					FORMAT: { value: "2of5" }
				}, o = a.START_PATTERN.value.reduce(function(e, t) {
					return e + t;
				}, 0);
				r.prototype = Object.create(i.a.prototype, a), r.prototype.constructor = r, r.prototype._findPattern = function(e, t, n, r) {
					var i, a, o, s, c = [], l = this, u = 0, d = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0
					}, f = l.AVG_CODE_ERROR;
					for (n ||= !1, r ||= !1, t ||= l._nextSet(l._row), i = 0; i < e.length; i++) c[i] = 0;
					for (i = t; i < l._row.length; i++) if (l._row[i] ^ n) c[u]++;
					else {
						if (u === c.length - 1) {
							for (s = 0, o = 0; o < c.length; o++) s += c[o];
							if ((a = l._matchPattern(c, e)) < f) return d.error = a, d.start = i - s, d.end = i, d;
							if (!r) return null;
							for (o = 0; o < c.length - 2; o++) c[o] = c[o + 2];
							c[c.length - 2] = 0, c[c.length - 1] = 0, u--;
						} else u++;
						c[u] = 1, n = !n;
					}
					return null;
				}, r.prototype._findStart = function() {
					for (var e, t, n = this, r = n._nextSet(n._row), i = 1; !t;) {
						if (!(t = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
						if (i = Math.floor((t.end - t.start) / o), (e = t.start - 5 * i) >= 0 && n._matchRange(e, t.start, 0)) return t;
						r = t.end, t = null;
					}
				}, r.prototype._verifyTrailingWhitespace = function(e) {
					var t;
					return (t = e.end + (e.end - e.start) / 2) < this._row.length && this._matchRange(e.end, t, 0) ? e : null;
				}, r.prototype._findEnd = function() {
					var e, t, n, r = this;
					return r._row.reverse(), n = r._nextSet(r._row), e = r._findPattern(r.STOP_PATTERN, n, !1, !0), r._row.reverse(), e === null ? null : (t = e.start, e.start = r._row.length - e.end, e.end = r._row.length - t, e === null ? null : r._verifyTrailingWhitespace(e));
				}, r.prototype._decodeCode = function(e) {
					var t, n, r, i = this, a = i.AVG_CODE_ERROR, o = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0
					};
					for (t = 0; t < e.length; t++) e[t];
					for (r = 0; r < i.CODE_PATTERN.length; r++) (n = i._matchPattern(e, i.CODE_PATTERN[r])) < o.error && (o.code = r, o.error = n);
					if (o.error < a) return o;
				}, r.prototype._decodePayload = function(e, t, n) {
					for (var r, i, a = 0, o = e.length, s = [
						0,
						0,
						0,
						0,
						0
					]; a < o;) {
						for (r = 0; r < 5; r++) s[r] = e[a] * this.barSpaceRatio[0], a += 2;
						if (!(i = this._decodeCode(s))) return null;
						t.push(i.code + ""), n.push(i);
					}
					return i;
				}, r.prototype._verifyCounterLength = function(e) {
					return e.length % 10 == 0;
				}, r.prototype._decode = function() {
					var e, t, n, r = this, i = [], a = [];
					return (e = r._findStart()) ? (a.push(e), (t = r._findEnd()) ? (n = r._fillCounters(e.end, t.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, i, a) ? i.length < 5 ? null : (a.push(t), {
						code: i.join(""),
						start: e.start,
						end: t.end,
						startInfo: e,
						decodedCodes: a
					}) : null) : null) : null;
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					i.a.call(this), this._counters = [];
				}
				var i = n(1);
				r.prototype = Object.create(i.a.prototype, {
					ALPHABETH_STRING: { value: "0123456789-$:/.+ABCD" },
					ALPHABET: { value: [
						48,
						49,
						50,
						51,
						52,
						53,
						54,
						55,
						56,
						57,
						45,
						36,
						58,
						47,
						46,
						43,
						65,
						66,
						67,
						68
					] },
					CHARACTER_ENCODINGS: { value: [
						3,
						6,
						9,
						96,
						18,
						66,
						33,
						36,
						48,
						72,
						12,
						24,
						69,
						81,
						84,
						21,
						26,
						41,
						11,
						14
					] },
					START_END: { value: [
						26,
						41,
						11,
						14
					] },
					MIN_ENCODED_CHARS: { value: 4 },
					MAX_ACCEPTABLE: { value: 2 },
					PADDING: { value: 1.5 },
					FORMAT: {
						value: "codabar",
						writeable: !1
					}
				}), r.prototype.constructor = r, r.prototype._decode = function() {
					var e, t, n, r, i, a = this, o = [];
					if (this._counters = a._fillCounters(), !(e = a._findStart())) return null;
					r = e.startCounter;
					do {
						if ((n = a._toPattern(r)) < 0 || (t = a._patternToChar(n)) < 0) return null;
						if (o.push(t), r += 8, o.length > 1 && a._isStartEnd(n)) break;
					} while (r < a._counters.length);
					return o.length - 2 < a.MIN_ENCODED_CHARS || !a._isStartEnd(n) ? null : a._verifyWhitespace(e.startCounter, r - 8) && a._validateResult(o, e.startCounter) ? (r = r > a._counters.length ? a._counters.length : r, i = e.start + a._sumCounters(e.startCounter, r - 8), {
						code: o.join(""),
						start: e.start,
						end: i,
						startInfo: e,
						decodedCodes: o
					}) : null;
				}, r.prototype._verifyWhitespace = function(e, t) {
					return (e - 1 <= 0 || this._counters[e - 1] >= this._calculatePatternLength(e) / 2) && (t + 8 >= this._counters.length || this._counters[t + 7] >= this._calculatePatternLength(t) / 2);
				}, r.prototype._calculatePatternLength = function(e) {
					var t, n = 0;
					for (t = e; t < e + 7; t++) n += this._counters[t];
					return n;
				}, r.prototype._thresholdResultPattern = function(e, t) {
					var n, r, i, a, o, s = this, c = {
						space: {
							narrow: {
								size: 0,
								counts: 0,
								min: 0,
								max: Number.MAX_VALUE
							},
							wide: {
								size: 0,
								counts: 0,
								min: 0,
								max: Number.MAX_VALUE
							}
						},
						bar: {
							narrow: {
								size: 0,
								counts: 0,
								min: 0,
								max: Number.MAX_VALUE
							},
							wide: {
								size: 0,
								counts: 0,
								min: 0,
								max: Number.MAX_VALUE
							}
						}
					}, l = t;
					for (i = 0; i < e.length; i++) {
						for (o = s._charToPattern(e[i]), a = 6; a >= 0; a--) n = (1 & a) == 2 ? c.bar : c.space, (r = 1 & ~o ? n.narrow : n.wide).size += s._counters[l + a], r.counts++, o >>= 1;
						l += 8;
					}
					return ["space", "bar"].forEach(function(e) {
						var t = c[e];
						t.wide.min = Math.floor((t.narrow.size / t.narrow.counts + t.wide.size / t.wide.counts) / 2), t.narrow.max = Math.ceil(t.wide.min), t.wide.max = Math.ceil((t.wide.size * s.MAX_ACCEPTABLE + s.PADDING) / t.wide.counts);
					}), c;
				}, r.prototype._charToPattern = function(e) {
					var t, n = this, r = e.charCodeAt(0);
					for (t = 0; t < n.ALPHABET.length; t++) if (n.ALPHABET[t] === r) return n.CHARACTER_ENCODINGS[t];
					return 0;
				}, r.prototype._validateResult = function(e, t) {
					var n, r, i, a, o, s, c = this, l = c._thresholdResultPattern(e, t), u = t;
					for (n = 0; n < e.length; n++) {
						for (s = c._charToPattern(e[n]), r = 6; r >= 0; r--) {
							if (i = 1 & r ? l.space : l.bar, a = 1 & ~s ? i.narrow : i.wide, (o = c._counters[u + r]) < a.min || o > a.max) return !1;
							s >>= 1;
						}
						u += 8;
					}
					return !0;
				}, r.prototype._patternToChar = function(e) {
					var t, n = this;
					for (t = 0; t < n.CHARACTER_ENCODINGS.length; t++) if (n.CHARACTER_ENCODINGS[t] === e) return String.fromCharCode(n.ALPHABET[t]);
					return -1;
				}, r.prototype._computeAlternatingThreshold = function(e, t) {
					var n, r, i = Number.MAX_VALUE, a = 0;
					for (n = e; n < t; n += 2) (r = this._counters[n]) > a && (a = r), r < i && (i = r);
					return (i + a) / 2 | 0;
				}, r.prototype._toPattern = function(e) {
					var t, n, r, i, a = e + 7, o = 64, s = 0;
					if (a > this._counters.length) return -1;
					for (t = this._computeAlternatingThreshold(e, a), n = this._computeAlternatingThreshold(e + 1, a), r = 0; r < 7; r++) i = 1 & r ? n : t, this._counters[e + r] > i && (s |= o), o >>= 1;
					return s;
				}, r.prototype._isStartEnd = function(e) {
					for (var t = 0; t < this.START_END.length; t++) if (this.START_END[t] === e) return !0;
					return !1;
				}, r.prototype._sumCounters = function(e, t) {
					var n, r = 0;
					for (n = e; n < t; n++) r += this._counters[n];
					return r;
				}, r.prototype._findStart = function() {
					var e, t, n = this, r = n._nextUnset(n._row);
					for (e = 1; e < this._counters.length; e++) if ((t = n._toPattern(e)) !== -1 && n._isStartEnd(t)) return {
						start: r += n._sumCounters(0, e),
						end: r + n._sumCounters(e, e + 8),
						startCounter: e,
						endCounter: e + 8
					};
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					a.a.call(this);
				}
				function i(e, t, n) {
					for (var r = n.length, i = 0, a = 0; r--;) a += e[n[r]], i += t[n[r]];
					return a / i;
				}
				var a = n(1);
				r.prototype = Object.create(a.a.prototype, {
					CODE_SHIFT: { value: 98 },
					CODE_C: { value: 99 },
					CODE_B: { value: 100 },
					CODE_A: { value: 101 },
					START_CODE_A: { value: 103 },
					START_CODE_B: { value: 104 },
					START_CODE_C: { value: 105 },
					STOP_CODE: { value: 106 },
					CODE_PATTERN: { value: [
						[
							2,
							1,
							2,
							2,
							2,
							2
						],
						[
							2,
							2,
							2,
							1,
							2,
							2
						],
						[
							2,
							2,
							2,
							2,
							2,
							1
						],
						[
							1,
							2,
							1,
							2,
							2,
							3
						],
						[
							1,
							2,
							1,
							3,
							2,
							2
						],
						[
							1,
							3,
							1,
							2,
							2,
							2
						],
						[
							1,
							2,
							2,
							2,
							1,
							3
						],
						[
							1,
							2,
							2,
							3,
							1,
							2
						],
						[
							1,
							3,
							2,
							2,
							1,
							2
						],
						[
							2,
							2,
							1,
							2,
							1,
							3
						],
						[
							2,
							2,
							1,
							3,
							1,
							2
						],
						[
							2,
							3,
							1,
							2,
							1,
							2
						],
						[
							1,
							1,
							2,
							2,
							3,
							2
						],
						[
							1,
							2,
							2,
							1,
							3,
							2
						],
						[
							1,
							2,
							2,
							2,
							3,
							1
						],
						[
							1,
							1,
							3,
							2,
							2,
							2
						],
						[
							1,
							2,
							3,
							1,
							2,
							2
						],
						[
							1,
							2,
							3,
							2,
							2,
							1
						],
						[
							2,
							2,
							3,
							2,
							1,
							1
						],
						[
							2,
							2,
							1,
							1,
							3,
							2
						],
						[
							2,
							2,
							1,
							2,
							3,
							1
						],
						[
							2,
							1,
							3,
							2,
							1,
							2
						],
						[
							2,
							2,
							3,
							1,
							1,
							2
						],
						[
							3,
							1,
							2,
							1,
							3,
							1
						],
						[
							3,
							1,
							1,
							2,
							2,
							2
						],
						[
							3,
							2,
							1,
							1,
							2,
							2
						],
						[
							3,
							2,
							1,
							2,
							2,
							1
						],
						[
							3,
							1,
							2,
							2,
							1,
							2
						],
						[
							3,
							2,
							2,
							1,
							1,
							2
						],
						[
							3,
							2,
							2,
							2,
							1,
							1
						],
						[
							2,
							1,
							2,
							1,
							2,
							3
						],
						[
							2,
							1,
							2,
							3,
							2,
							1
						],
						[
							2,
							3,
							2,
							1,
							2,
							1
						],
						[
							1,
							1,
							1,
							3,
							2,
							3
						],
						[
							1,
							3,
							1,
							1,
							2,
							3
						],
						[
							1,
							3,
							1,
							3,
							2,
							1
						],
						[
							1,
							1,
							2,
							3,
							1,
							3
						],
						[
							1,
							3,
							2,
							1,
							1,
							3
						],
						[
							1,
							3,
							2,
							3,
							1,
							1
						],
						[
							2,
							1,
							1,
							3,
							1,
							3
						],
						[
							2,
							3,
							1,
							1,
							1,
							3
						],
						[
							2,
							3,
							1,
							3,
							1,
							1
						],
						[
							1,
							1,
							2,
							1,
							3,
							3
						],
						[
							1,
							1,
							2,
							3,
							3,
							1
						],
						[
							1,
							3,
							2,
							1,
							3,
							1
						],
						[
							1,
							1,
							3,
							1,
							2,
							3
						],
						[
							1,
							1,
							3,
							3,
							2,
							1
						],
						[
							1,
							3,
							3,
							1,
							2,
							1
						],
						[
							3,
							1,
							3,
							1,
							2,
							1
						],
						[
							2,
							1,
							1,
							3,
							3,
							1
						],
						[
							2,
							3,
							1,
							1,
							3,
							1
						],
						[
							2,
							1,
							3,
							1,
							1,
							3
						],
						[
							2,
							1,
							3,
							3,
							1,
							1
						],
						[
							2,
							1,
							3,
							1,
							3,
							1
						],
						[
							3,
							1,
							1,
							1,
							2,
							3
						],
						[
							3,
							1,
							1,
							3,
							2,
							1
						],
						[
							3,
							3,
							1,
							1,
							2,
							1
						],
						[
							3,
							1,
							2,
							1,
							1,
							3
						],
						[
							3,
							1,
							2,
							3,
							1,
							1
						],
						[
							3,
							3,
							2,
							1,
							1,
							1
						],
						[
							3,
							1,
							4,
							1,
							1,
							1
						],
						[
							2,
							2,
							1,
							4,
							1,
							1
						],
						[
							4,
							3,
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							2,
							2,
							4
						],
						[
							1,
							1,
							1,
							4,
							2,
							2
						],
						[
							1,
							2,
							1,
							1,
							2,
							4
						],
						[
							1,
							2,
							1,
							4,
							2,
							1
						],
						[
							1,
							4,
							1,
							1,
							2,
							2
						],
						[
							1,
							4,
							1,
							2,
							2,
							1
						],
						[
							1,
							1,
							2,
							2,
							1,
							4
						],
						[
							1,
							1,
							2,
							4,
							1,
							2
						],
						[
							1,
							2,
							2,
							1,
							1,
							4
						],
						[
							1,
							2,
							2,
							4,
							1,
							1
						],
						[
							1,
							4,
							2,
							1,
							1,
							2
						],
						[
							1,
							4,
							2,
							2,
							1,
							1
						],
						[
							2,
							4,
							1,
							2,
							1,
							1
						],
						[
							2,
							2,
							1,
							1,
							1,
							4
						],
						[
							4,
							1,
							3,
							1,
							1,
							1
						],
						[
							2,
							4,
							1,
							1,
							1,
							2
						],
						[
							1,
							3,
							4,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							2,
							4,
							2
						],
						[
							1,
							2,
							1,
							1,
							4,
							2
						],
						[
							1,
							2,
							1,
							2,
							4,
							1
						],
						[
							1,
							1,
							4,
							2,
							1,
							2
						],
						[
							1,
							2,
							4,
							1,
							1,
							2
						],
						[
							1,
							2,
							4,
							2,
							1,
							1
						],
						[
							4,
							1,
							1,
							2,
							1,
							2
						],
						[
							4,
							2,
							1,
							1,
							1,
							2
						],
						[
							4,
							2,
							1,
							2,
							1,
							1
						],
						[
							2,
							1,
							2,
							1,
							4,
							1
						],
						[
							2,
							1,
							4,
							1,
							2,
							1
						],
						[
							4,
							1,
							2,
							1,
							2,
							1
						],
						[
							1,
							1,
							1,
							1,
							4,
							3
						],
						[
							1,
							1,
							1,
							3,
							4,
							1
						],
						[
							1,
							3,
							1,
							1,
							4,
							1
						],
						[
							1,
							1,
							4,
							1,
							1,
							3
						],
						[
							1,
							1,
							4,
							3,
							1,
							1
						],
						[
							4,
							1,
							1,
							1,
							1,
							3
						],
						[
							4,
							1,
							1,
							3,
							1,
							1
						],
						[
							1,
							1,
							3,
							1,
							4,
							1
						],
						[
							1,
							1,
							4,
							1,
							3,
							1
						],
						[
							3,
							1,
							1,
							1,
							4,
							1
						],
						[
							4,
							1,
							1,
							1,
							3,
							1
						],
						[
							2,
							1,
							1,
							4,
							1,
							2
						],
						[
							2,
							1,
							1,
							2,
							1,
							4
						],
						[
							2,
							1,
							1,
							2,
							3,
							2
						],
						[
							2,
							3,
							3,
							1,
							1,
							1,
							2
						]
					] },
					SINGLE_CODE_ERROR: { value: .64 },
					AVG_CODE_ERROR: { value: .3 },
					FORMAT: {
						value: "code_128",
						writeable: !1
					},
					MODULE_INDICES: { value: {
						bar: [
							0,
							2,
							4
						],
						space: [
							1,
							3,
							5
						]
					} }
				}), r.prototype.constructor = r, r.prototype._decodeCode = function(e, t) {
					var n, r, a, o = [
						0,
						0,
						0,
						0,
						0,
						0
					], s = this, c = e, l = !s._row[c], u = 0, d = {
						error: Number.MAX_VALUE,
						code: -1,
						start: e,
						end: e,
						correction: {
							bar: 1,
							space: 1
						}
					};
					for (n = c; n < s._row.length; n++) if (s._row[n] ^ l) o[u]++;
					else {
						if (u === o.length - 1) {
							for (t && s._correct(o, t), r = 0; r < s.CODE_PATTERN.length; r++) (a = s._matchPattern(o, s.CODE_PATTERN[r])) < d.error && (d.code = r, d.error = a);
							return d.end = n, d.code === -1 || d.error > s.AVG_CODE_ERROR ? null : (s.CODE_PATTERN[d.code] && (d.correction.bar = i(s.CODE_PATTERN[d.code], o, this.MODULE_INDICES.bar), d.correction.space = i(s.CODE_PATTERN[d.code], o, this.MODULE_INDICES.space)), d);
						}
						o[++u] = 1, l = !l;
					}
					return null;
				}, r.prototype._correct = function(e, t) {
					this._correctBars(e, t.bar, this.MODULE_INDICES.bar), this._correctBars(e, t.space, this.MODULE_INDICES.space);
				}, r.prototype._findStart = function() {
					var e, t, n, r, a, o = [
						0,
						0,
						0,
						0,
						0,
						0
					], s = this, c = s._nextSet(s._row), l = !1, u = 0, d = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0,
						correction: {
							bar: 1,
							space: 1
						}
					};
					for (e = c; e < s._row.length; e++) if (s._row[e] ^ l) o[u]++;
					else {
						if (u === o.length - 1) {
							for (a = 0, r = 0; r < o.length; r++) a += o[r];
							for (t = s.START_CODE_A; t <= s.START_CODE_C; t++) (n = s._matchPattern(o, s.CODE_PATTERN[t])) < d.error && (d.code = t, d.error = n);
							if (d.error < s.AVG_CODE_ERROR) return d.start = e - a, d.end = e, d.correction.bar = i(s.CODE_PATTERN[d.code], o, this.MODULE_INDICES.bar), d.correction.space = i(s.CODE_PATTERN[d.code], o, this.MODULE_INDICES.space), d;
							for (r = 0; r < 4; r++) o[r] = o[r + 2];
							o[4] = 0, o[5] = 0, u--;
						} else u++;
						o[u] = 1, l = !l;
					}
					return null;
				}, r.prototype._decode = function() {
					var e, t, n = this, r = n._findStart(), i = null, a = !1, o = [], s = 0, c = 0, l = [], u = [], d = !1, f = !0;
					if (r === null) return null;
					switch (i = {
						code: r.code,
						start: r.start,
						end: r.end,
						correction: {
							bar: r.correction.bar,
							space: r.correction.space
						}
					}, u.push(i), c = i.code, i.code) {
						case n.START_CODE_A:
							e = n.CODE_A;
							break;
						case n.START_CODE_B:
							e = n.CODE_B;
							break;
						case n.START_CODE_C:
							e = n.CODE_C;
							break;
						default: return null;
					}
					for (; !a;) {
						if (t = d, d = !1, (i = n._decodeCode(i.end, i.correction)) !== null) switch (i.code !== n.STOP_CODE && (f = !0), i.code !== n.STOP_CODE && (l.push(i.code), s++, c += s * i.code), u.push(i), e) {
							case n.CODE_A:
								if (i.code < 64) o.push(String.fromCharCode(32 + i.code));
								else if (i.code < 96) o.push(String.fromCharCode(i.code - 64));
								else switch (i.code !== n.STOP_CODE && (f = !1), i.code) {
									case n.CODE_SHIFT:
										d = !0, e = n.CODE_B;
										break;
									case n.CODE_B:
										e = n.CODE_B;
										break;
									case n.CODE_C:
										e = n.CODE_C;
										break;
									case n.STOP_CODE: a = !0;
								}
								break;
							case n.CODE_B:
								if (i.code < 96) o.push(String.fromCharCode(32 + i.code));
								else switch (i.code !== n.STOP_CODE && (f = !1), i.code) {
									case n.CODE_SHIFT:
										d = !0, e = n.CODE_A;
										break;
									case n.CODE_A:
										e = n.CODE_A;
										break;
									case n.CODE_C:
										e = n.CODE_C;
										break;
									case n.STOP_CODE: a = !0;
								}
								break;
							case n.CODE_C: if (i.code < 100) o.push(i.code < 10 ? "0" + i.code : i.code);
							else switch (i.code !== n.STOP_CODE && (f = !1), i.code) {
								case n.CODE_A:
									e = n.CODE_A;
									break;
								case n.CODE_B:
									e = n.CODE_B;
									break;
								case n.STOP_CODE: a = !0;
							}
						}
						else a = !0;
						t && (e = e === n.CODE_A ? n.CODE_B : n.CODE_A);
					}
					return i === null ? null : (i.end = n._nextUnset(n._row, i.end), n._verifyTrailingWhitespace(i) && (c -= s * l[l.length - 1]) % 103 === l[l.length - 1] && o.length ? (f && o.splice(o.length - 1, 1), {
						code: o.join(""),
						start: r.start,
						end: i.end,
						codeset: e,
						startInfo: r,
						decodedCodes: u,
						endInfo: i
					}) : null);
				}, a.a.prototype._verifyTrailingWhitespace = function(e) {
					var t;
					return (t = e.end + (e.end - e.start) / 2) < this._row.length && this._matchRange(e.end, t, 0) ? e : null;
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					i.a.call(this);
				}
				var i = n(31), a = /[IOQ]/g, o = /[A-Z0-9]{17}/;
				r.prototype = Object.create(i.a.prototype), r.prototype.constructor = r, r.prototype._decode = function() {
					var e = i.a.prototype._decode.apply(this);
					if (!e) return null;
					var t = e.code;
					return t && (t = t.replace(a, "")).match(o) && this._checkChecksum(t) ? (e.code = t, e) : null;
				}, r.prototype._checkChecksum = function(e) {
					return !!e;
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					i.a.call(this);
				}
				var i = n(1), a = n(3), o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", s = {
					ALPHABETH_STRING: { value: o },
					ALPHABET: { value: o.split("").map(function(e) {
						return e.charCodeAt(0);
					}) },
					CHARACTER_ENCODINGS: { value: [
						276,
						328,
						324,
						322,
						296,
						292,
						290,
						336,
						274,
						266,
						424,
						420,
						418,
						404,
						402,
						394,
						360,
						356,
						354,
						308,
						282,
						344,
						332,
						326,
						300,
						278,
						436,
						434,
						428,
						422,
						406,
						410,
						364,
						358,
						310,
						314,
						302,
						468,
						466,
						458,
						366,
						374,
						430,
						294,
						474,
						470,
						306,
						350
					] },
					ASTERISK: { value: 350 },
					FORMAT: {
						value: "code_93",
						writeable: !1
					}
				};
				r.prototype = Object.create(i.a.prototype, s), r.prototype.constructor = r, r.prototype._decode = function() {
					var e, t, n, r, i = this, o = [
						0,
						0,
						0,
						0,
						0,
						0
					], s = [], c = i._findStart();
					if (!c) return null;
					r = i._nextSet(i._row, c.end);
					do {
						if (o = i._toCounters(r, o), (n = i._toPattern(o)) < 0 || (e = i._patternToChar(n)) < 0) return null;
						s.push(e), t = r, r += a.a.sum(o), r = i._nextSet(i._row, r);
					} while (e !== "*");
					return s.pop(), s.length && i._verifyEnd(t, r, o) && i._verifyChecksums(s) ? (s = s.slice(0, s.length - 2), (s = i._decodeExtended(s)) === null ? null : {
						code: s.join(""),
						start: c.start,
						end: r,
						startInfo: c,
						decodedCodes: s
					}) : null;
				}, r.prototype._verifyEnd = function(e, t) {
					return !(e === t || !this._row[t]);
				}, r.prototype._patternToChar = function(e) {
					var t, n = this;
					for (t = 0; t < n.CHARACTER_ENCODINGS.length; t++) if (n.CHARACTER_ENCODINGS[t] === e) return String.fromCharCode(n.ALPHABET[t]);
					return -1;
				}, r.prototype._toPattern = function(e) {
					for (var t = e.length, n = 0, r = 0, i = 0; i < t; i++) r += e[i];
					for (var a = 0; a < t; a++) {
						var o = Math.round(9 * e[a] / r);
						if (o < 1 || o > 4) return -1;
						if (1 & a) n <<= o;
						else for (var s = 0; s < o; s++) n = n << 1 | 1;
					}
					return n;
				}, r.prototype._findStart = function() {
					var e, t, n, r = this, i = r._nextSet(r._row), a = i, o = [
						0,
						0,
						0,
						0,
						0,
						0
					], s = 0, c = !1;
					for (e = i; e < r._row.length; e++) if (r._row[e] ^ c) o[s]++;
					else {
						if (s === o.length - 1) {
							if (r._toPattern(o) === r.ASTERISK && (n = Math.floor(Math.max(0, a - (e - a) / 4)), r._matchRange(n, a, 0))) return {
								start: a,
								end: e
							};
							for (a += o[0] + o[1], t = 0; t < 4; t++) o[t] = o[t + 2];
							o[4] = 0, o[5] = 0, s--;
						} else s++;
						o[s] = 1, c = !c;
					}
					return null;
				}, r.prototype._decodeExtended = function(e) {
					for (var t = e.length, n = [], r = 0; r < t; r++) {
						var i = e[r];
						if (i >= "a" && i <= "d") {
							if (r > t - 2) return null;
							var a = e[++r], o = a.charCodeAt(0), s = void 0;
							switch (i) {
								case "a":
									if (!(a >= "A" && a <= "Z")) return null;
									s = String.fromCharCode(o - 64);
									break;
								case "b":
									if (a >= "A" && a <= "E") s = String.fromCharCode(o - 38);
									else if (a >= "F" && a <= "J") s = String.fromCharCode(o - 11);
									else if (a >= "K" && a <= "O") s = String.fromCharCode(o + 16);
									else if (a >= "P" && a <= "S") s = String.fromCharCode(o + 43);
									else {
										if (!(a >= "T" && a <= "Z")) return null;
										s = "";
									}
									break;
								case "c":
									if (a >= "A" && a <= "O") s = String.fromCharCode(o - 32);
									else {
										if (a !== "Z") return null;
										s = ":";
									}
									break;
								case "d":
									if (!(a >= "A" && a <= "Z")) return null;
									s = String.fromCharCode(o + 32);
							}
							n.push(s);
						} else n.push(i);
					}
					return n;
				}, r.prototype._verifyChecksums = function(e) {
					return this._matchCheckChar(e, e.length - 2, 20) && this._matchCheckChar(e, e.length - 1, 15);
				}, r.prototype._matchCheckChar = function(e, t, n) {
					var r = this, i = e.slice(0, t), a = i.length, o = i.reduce(function(e, t, i) {
						return e + ((-1 * i + (a - 1)) % n + 1) * r.ALPHABET.indexOf(t.charCodeAt(0));
					}, 0);
					return this.ALPHABET[o % 47] === e[t].charCodeAt(0);
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					i.a.call(this);
				}
				var i = n(4);
				r.prototype = Object.create(i.a.prototype, { FORMAT: {
					value: "ean_2",
					writeable: !1
				} }), r.prototype.constructor = r, r.prototype.decode = function(e, t) {
					this._row = e;
					var n, r = 0, i = 0, a = t, o = this._row.length, s = [], c = [];
					for (i = 0; i < 2 && a < o; i++) {
						if (!(n = this._decodeCode(a))) return null;
						c.push(n), s.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 1 - i), i != 1 && (a = this._nextSet(this._row, n.end), a = this._nextUnset(this._row, a));
					}
					return s.length != 2 || parseInt(s.join("")) % 4 !== r ? null : {
						code: s.join(""),
						decodedCodes: c,
						end: n.end
					};
				}, t.a = r;
			},
			function(e, t, n) {
				function r() {
					a.a.call(this);
				}
				function i(e) {
					for (var t = 0; t < 10; t++) if (e === o[t]) return t;
					return null;
				}
				var a = n(4), o = [
					24,
					20,
					18,
					17,
					12,
					6,
					3,
					10,
					9,
					5
				];
				r.prototype = Object.create(a.a.prototype, { FORMAT: {
					value: "ean_5",
					writeable: !1
				} }), r.prototype.constructor = r, r.prototype.decode = function(e, t) {
					this._row = e;
					var n, r = 0, a = 0, o = t, s = this._row.length, c = [], l = [];
					for (a = 0; a < 5 && o < s; a++) {
						if (!(n = this._decodeCode(o))) return null;
						l.push(n), c.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 4 - a), a != 4 && (o = this._nextSet(this._row, n.end), o = this._nextUnset(this._row, o));
					}
					return c.length != 5 || function(e) {
						var t, n = e.length, r = 0;
						for (t = n - 2; t >= 0; t -= 2) r += e[t];
						for (r *= 3, t = n - 1; t >= 0; t -= 2) r += e[t];
						return (r *= 3) % 10;
					}(c) !== i(r) ? null : {
						code: c.join(""),
						decodedCodes: l,
						end: n.end
					};
				}, t.a = r;
			},
			function(e, t, n) {
				function r(e, t) {
					i.a.call(this, e, t);
				}
				var i = n(4);
				r.prototype = Object.create(i.a.prototype, { FORMAT: {
					value: "ean_8",
					writeable: !1
				} }), r.prototype.constructor = r, r.prototype._decodePayload = function(e, t, n) {
					var r, i = this;
					for (r = 0; r < 4; r++) {
						if (!(e = i._decodeCode(e.end, i.CODE_G_START))) return null;
						t.push(e.code), n.push(e);
					}
					if ((e = i._findPattern(i.MIDDLE_PATTERN, e.end, !0, !1)) === null) return null;
					for (n.push(e), r = 0; r < 4; r++) {
						if (!(e = i._decodeCode(e.end, i.CODE_G_START))) return null;
						n.push(e), t.push(e.code);
					}
					return e;
				}, t.a = r;
			},
			function(e, t, n) {
				function r(e) {
					e = a()(function() {
						var e = {};
						return Object.keys(r.CONFIG_KEYS).forEach(function(t) {
							e[t] = r.CONFIG_KEYS[t].default;
						}), e;
					}(), e), o.a.call(this, e), this.barSpaceRatio = [1, 1], e.normalizeBarSpaceWidth && (this.SINGLE_CODE_ERROR = .38, this.AVG_CODE_ERROR = .09);
				}
				var i = n(28), a = n.n(i), o = n(1);
				r.prototype = Object.create(o.a.prototype, {
					START_PATTERN: { value: [
						1,
						1,
						1,
						1
					] },
					STOP_PATTERN: { value: [
						1,
						1,
						3
					] },
					CODE_PATTERN: { value: [
						[
							1,
							1,
							3,
							3,
							1
						],
						[
							3,
							1,
							1,
							1,
							3
						],
						[
							1,
							3,
							1,
							1,
							3
						],
						[
							3,
							3,
							1,
							1,
							1
						],
						[
							1,
							1,
							3,
							1,
							3
						],
						[
							3,
							1,
							3,
							1,
							1
						],
						[
							1,
							3,
							3,
							1,
							1
						],
						[
							1,
							1,
							1,
							3,
							3
						],
						[
							3,
							1,
							1,
							3,
							1
						],
						[
							1,
							3,
							1,
							3,
							1
						]
					] },
					SINGLE_CODE_ERROR: {
						value: .78,
						writable: !0
					},
					AVG_CODE_ERROR: {
						value: .38,
						writable: !0
					},
					MAX_CORRECTION_FACTOR: { value: 5 },
					FORMAT: { value: "i2of5" }
				}), r.prototype.constructor = r, r.prototype._matchPattern = function(e, t) {
					if (this.config.normalizeBarSpaceWidth) {
						var n, r = [0, 0], i = [0, 0], a = [0, 0], s = this.MAX_CORRECTION_FACTOR, c = 1 / s;
						for (n = 0; n < e.length; n++) r[n % 2] += e[n], i[n % 2] += t[n];
						for (a[0] = i[0] / r[0], a[1] = i[1] / r[1], a[0] = Math.max(Math.min(a[0], s), c), a[1] = Math.max(Math.min(a[1], s), c), this.barSpaceRatio = a, n = 0; n < e.length; n++) e[n] *= this.barSpaceRatio[n % 2];
					}
					return o.a.prototype._matchPattern.call(this, e, t);
				}, r.prototype._findPattern = function(e, t, n, r) {
					var i, a, o, s, c = [], l = this, u = 0, d = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0
					}, f = l.AVG_CODE_ERROR;
					for (n ||= !1, r ||= !1, t ||= l._nextSet(l._row), i = 0; i < e.length; i++) c[i] = 0;
					for (i = t; i < l._row.length; i++) if (l._row[i] ^ n) c[u]++;
					else {
						if (u === c.length - 1) {
							for (s = 0, o = 0; o < c.length; o++) s += c[o];
							if ((a = l._matchPattern(c, e)) < f) return d.error = a, d.start = i - s, d.end = i, d;
							if (!r) return null;
							for (o = 0; o < c.length - 2; o++) c[o] = c[o + 2];
							c[c.length - 2] = 0, c[c.length - 1] = 0, u--;
						} else u++;
						c[u] = 1, n = !n;
					}
					return null;
				}, r.prototype._findStart = function() {
					for (var e, t, n = this, r = n._nextSet(n._row), i = 1; !t;) {
						if (!(t = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
						if (i = Math.floor((t.end - t.start) / 4), (e = t.start - 10 * i) >= 0 && n._matchRange(e, t.start, 0)) return t;
						r = t.end, t = null;
					}
				}, r.prototype._verifyTrailingWhitespace = function(e) {
					var t;
					return (t = e.end + (e.end - e.start) / 2) < this._row.length && this._matchRange(e.end, t, 0) ? e : null;
				}, r.prototype._findEnd = function() {
					var e, t, n = this;
					return n._row.reverse(), e = n._findPattern(n.STOP_PATTERN), n._row.reverse(), e === null ? null : (t = e.start, e.start = n._row.length - e.end, e.end = n._row.length - t, e === null ? null : n._verifyTrailingWhitespace(e));
				}, r.prototype._decodePair = function(e) {
					var t, n, r = [];
					for (t = 0; t < e.length; t++) {
						if (!(n = this._decodeCode(e[t]))) return null;
						r.push(n);
					}
					return r;
				}, r.prototype._decodeCode = function(e) {
					var t, n, r, i = this, a = i.AVG_CODE_ERROR, o = {
						error: Number.MAX_VALUE,
						code: -1,
						start: 0,
						end: 0
					};
					for (t = 0; t < e.length; t++) e[t];
					for (r = 0; r < i.CODE_PATTERN.length; r++) (n = i._matchPattern(e, i.CODE_PATTERN[r])) < o.error && (o.code = r, o.error = n);
					if (o.error < a) return o;
				}, r.prototype._decodePayload = function(e, t, n) {
					for (var r, i, a = 0, o = e.length, s = [[
						0,
						0,
						0,
						0,
						0
					], [
						0,
						0,
						0,
						0,
						0
					]]; a < o;) {
						for (r = 0; r < 5; r++) s[0][r] = e[a] * this.barSpaceRatio[0], s[1][r] = e[a + 1] * this.barSpaceRatio[1], a += 2;
						if (!(i = this._decodePair(s))) return null;
						for (r = 0; r < i.length; r++) t.push(i[r].code + ""), n.push(i[r]);
					}
					return i;
				}, r.prototype._verifyCounterLength = function(e) {
					return e.length % 10 == 0;
				}, r.prototype._decode = function() {
					var e, t, n, r = this, i = [], a = [];
					return (e = r._findStart()) ? (a.push(e), (t = r._findEnd()) ? (n = r._fillCounters(e.end, t.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, i, a) ? i.length % 2 != 0 || i.length < 6 ? null : (a.push(t), {
						code: i.join(""),
						start: e.start,
						end: t.end,
						startInfo: e,
						decodedCodes: a
					}) : null) : null) : null;
				}, r.CONFIG_KEYS = { normalizeBarSpaceWidth: {
					type: "boolean",
					default: !1,
					description: "If true, the reader tries to normalize thewidth-difference between bars and spaces"
				} }, t.a = r;
			},
			function(e, t, n) {
				function r(e, t) {
					i.a.call(this, e, t);
				}
				var i = n(4);
				r.prototype = Object.create(i.a.prototype, {
					CODE_FREQUENCY: { value: [[
						56,
						52,
						50,
						49,
						44,
						38,
						35,
						42,
						41,
						37
					], [
						7,
						11,
						13,
						14,
						19,
						25,
						28,
						21,
						22,
						26
					]] },
					STOP_PATTERN: { value: [
						1 / 6 * 7,
						1 / 6 * 7,
						1 / 6 * 7,
						1 / 6 * 7,
						1 / 6 * 7,
						1 / 6 * 7
					] },
					FORMAT: {
						value: "upc_e",
						writeable: !1
					}
				}), r.prototype.constructor = r, r.prototype._decodePayload = function(e, t, n) {
					var r, i = this, a = 0;
					for (r = 0; r < 6; r++) {
						if (!(e = i._decodeCode(e.end))) return null;
						e.code >= i.CODE_G_START && (e.code -= i.CODE_G_START, a |= 1 << 5 - r), t.push(e.code), n.push(e);
					}
					return i._determineParity(a, t) ? e : null;
				}, r.prototype._determineParity = function(e, t) {
					for (var n, r = 0; r < this.CODE_FREQUENCY.length; r++) for (n = 0; n < this.CODE_FREQUENCY[r].length; n++) if (e === this.CODE_FREQUENCY[r][n]) return t.unshift(r), t.push(n), !0;
					return !1;
				}, r.prototype._convertToUPCA = function(e) {
					var t = [e[0]], n = e[e.length - 2];
					return (t = n <= 2 ? t.concat(e.slice(1, 3)).concat([
						n,
						0,
						0,
						0,
						0
					]).concat(e.slice(3, 6)) : n === 3 ? t.concat(e.slice(1, 4)).concat([
						0,
						0,
						0,
						0,
						0
					]).concat(e.slice(4, 6)) : n === 4 ? t.concat(e.slice(1, 5)).concat([
						0,
						0,
						0,
						0,
						0,
						e[5]
					]) : t.concat(e.slice(1, 6)).concat([
						0,
						0,
						0,
						0,
						n
					])).push(e[e.length - 1]), t;
				}, r.prototype._checksum = function(e) {
					return i.a.prototype._checksum.call(this, this._convertToUPCA(e));
				}, r.prototype._findEnd = function(e, t) {
					return i.a.prototype._findEnd.call(this, e, !0);
				}, r.prototype._verifyTrailingWhitespace = function(e) {
					var t;
					if ((t = e.end + (e.end - e.start) / 2) < this._row.length && this._matchRange(e.end, t, 0)) return e;
				}, t.a = r;
			},
			function(e, t, n) {
				function r(e, t) {
					i.a.call(this, e, t);
				}
				var i = n(4);
				r.prototype = Object.create(i.a.prototype, { FORMAT: {
					value: "upc_a",
					writeable: !1
				} }), r.prototype.constructor = r, r.prototype._decode = function() {
					var e = i.a.prototype._decode.call(this);
					return e && e.code && e.code.length === 13 && e.code.charAt(0) === "0" ? (e.code = e.code.substring(1), e) : null;
				}, t.a = r;
			},
			function(e, t) {
				e.exports = function(e, t) {
					return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
				};
			},
			function(e, t) {
				e.exports = function() {
					var e = /* @__PURE__ */ new Float32Array(4);
					return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					var n = t[0], r = t[1], i = t[2], a = t[3], o = n * a - i * r;
					return o ? (o = 1 / o, e[0] = a * o, e[1] = -r * o, e[2] = -i * o, e[3] = n * o, e) : null;
				};
			},
			function(e, t) {
				e.exports = function(e, t, n) {
					return e[0] = t[0] * n, e[1] = t[1] * n, e;
				};
			},
			function(e, t) {
				e.exports = function(e, t, n) {
					var r = t[0], i = t[1];
					return e[0] = n[0] * r + n[2] * i, e[1] = n[1] * r + n[3] * i, e;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = /* @__PURE__ */ new Float32Array(3);
					return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
				};
			},
			function(e, t, n) {
				function r(e) {
					var t = -1, n = e == null ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1]);
					}
				}
				var i = n(122), a = n(123), o = n(124), s = n(125), c = n(126);
				r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = o, r.prototype.has = s, r.prototype.set = c, e.exports = r;
			},
			function(e, t, n) {
				function r(e) {
					var t = this.__data__ = new i(e);
					this.size = t.size;
				}
				var i = n(10), a = n(149), o = n(150), s = n(151), c = n(152), l = n(153);
				r.prototype.clear = a, r.prototype.delete = o, r.prototype.get = s, r.prototype.has = c, r.prototype.set = l, e.exports = r;
			},
			function(e, t, n) {
				e.exports = n(5).Uint8Array;
			},
			function(e, t) {
				e.exports = function(e, t, n) {
					switch (n.length) {
						case 0: return e.call(t);
						case 1: return e.call(t, n[0]);
						case 2: return e.call(t, n[0], n[1]);
						case 3: return e.call(t, n[0], n[1], n[2]);
					}
					return e.apply(t, n);
				};
			},
			function(e, t, n) {
				var r = n(107), i = n(18), a = n(2), o = n(44), s = n(15), c = n(45), l = Object.prototype.hasOwnProperty;
				e.exports = function(e, t) {
					var n = a(e), u = !n && i(e), d = !n && !u && o(e), f = !n && !u && !d && c(e), p = n || u || d || f, m = p ? r(e.length, String) : [], h = m.length;
					for (var g in e) !t && !l.call(e, g) || p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || s(g, h)) || m.push(g);
					return m;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
					return i;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
					return e;
				};
			},
			function(e, t, n) {
				var r = n(0), i = Object.create;
				e.exports = function() {
					function e() {}
					return function(t) {
						if (!r(t)) return {};
						if (i) return i(t);
						e.prototype = t;
						var n = new e();
						return e.prototype = void 0, n;
					};
				}();
			},
			function(e, t, n) {
				var r = n(90), i = n(128);
				e.exports = function e(t, n, a, o, s) {
					var c = -1, l = t.length;
					for (a ||= i, s ||= []; ++c < l;) {
						var u = t[c];
						n > 0 && a(u) ? n > 1 ? e(u, n - 1, a, o, s) : r(s, u) : o || (s[s.length] = u);
					}
					return s;
				};
			},
			function(e, t, n) {
				e.exports = n(117)();
			},
			function(e, t, n) {
				var r = n(13), i = n(23);
				e.exports = function(e, t) {
					for (var n = 0, a = (t = r(t, e)).length; e != null && n < a;) e = e[i(t[n++])];
					return n && n == a ? e : void 0;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					return e != null && t in Object(e);
				};
			},
			function(e, t, n) {
				var r = n(8), i = n(6), a = "[object Arguments]";
				e.exports = function(e) {
					return i(e) && r(e) == a;
				};
			},
			function(e, t, n) {
				var r = n(25), i = n(132), a = n(0), o = n(155), s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
				e.exports = function(e) {
					return !(!a(e) || i(e)) && (r(e) ? f : s).test(o(e));
				};
			},
			function(e, t, n) {
				var r = n(8), i = n(26), a = n(6), o = {};
				o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) {
					return a(e) && i(e.length) && !!o[r(e)];
				};
			},
			function(e, t, n) {
				var r = n(0), i = n(40), a = n(144), o = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					if (!r(e)) return a(e);
					var t = i(e), n = [];
					for (var s in e) (s != "constructor" || !t && o.call(e, s)) && n.push(s);
					return n;
				};
			},
			function(e, t, n) {
				var r = n(85), i = n(35), a = n(93), o = n(101), s = n(0), c = n(46);
				e.exports = function e(t, n, l, u, d) {
					t !== n && a(n, function(a, c) {
						if (s(a)) d ||= new r(), o(t, n, c, l, e, u, d);
						else {
							var f = u ? u(t[c], a, c + "", t, n, d) : void 0;
							f === void 0 && (f = a), i(t, c, f);
						}
					}, c);
				};
			},
			function(e, t, n) {
				var r = n(35), i = n(111), a = n(112), o = n(113), s = n(127), c = n(18), l = n(2), u = n(159), d = n(44), f = n(25), p = n(0), m = n(160), h = n(45), g = n(164);
				e.exports = function(e, t, n, _, v, y, b) {
					var x = e[n], S = t[n], C = b.get(S);
					if (C) r(e, n, C);
					else {
						var w = y ? y(x, S, n + "", e, t, b) : void 0, T = w === void 0;
						if (T) {
							var E = l(S), D = !E && d(S), O = !E && !D && h(S);
							w = S, E || D || O ? l(x) ? w = x : u(x) ? w = o(x) : D ? (T = !1, w = i(S, !0)) : O ? (T = !1, w = a(S, !0)) : w = [] : m(S) || c(S) ? (w = x, c(x) ? w = g(x) : (!p(x) || _ && f(x)) && (w = s(S))) : T = !1;
						}
						T && (b.set(S, w), v(w, S, _, y, b), b.delete(S)), r(e, n, w);
					}
				};
			},
			function(e, t, n) {
				var r = n(103), i = n(158);
				e.exports = function(e, t) {
					return r(e, t, function(t, n) {
						return i(e, n);
					});
				};
			},
			function(e, t, n) {
				var r = n(94), i = n(105), a = n(13);
				e.exports = function(e, t, n) {
					for (var o = -1, s = t.length, c = {}; ++o < s;) {
						var l = t[o], u = r(e, l);
						n(u, l) && i(c, a(l, e), u);
					}
					return c;
				};
			},
			function(e, t, n) {
				var r = n(43), i = n(41), a = n(42);
				e.exports = function(e, t) {
					return a(i(e, t, r), e + "");
				};
			},
			function(e, t, n) {
				var r = n(36), i = n(13), a = n(15), o = n(0), s = n(23);
				e.exports = function(e, t, n, c) {
					if (!o(e)) return e;
					for (var l = -1, u = (t = i(t, e)).length, d = u - 1, f = e; f != null && ++l < u;) {
						var p = s(t[l]), m = n;
						if (l != d) {
							var h = f[p];
							(m = c ? c(h, p, f) : void 0) === void 0 && (m = o(h) ? h : a(t[l + 1]) ? [] : {});
						}
						r(f, p, m), f = f[p];
					}
					return e;
				};
			},
			function(e, t, n) {
				var r = n(156), i = n(37), a = n(43);
				e.exports = i ? function(e, t) {
					return i(e, "toString", {
						configurable: !0,
						enumerable: !1,
						value: r(t),
						writable: !0
					});
				} : a;
			},
			function(e, t) {
				e.exports = function(e, t) {
					for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
					return r;
				};
			},
			function(e, t, n) {
				var r = n(11), i = n(89), a = n(2), o = n(27), s = 1 / 0, c = r ? r.prototype : void 0, l = c ? c.toString : void 0;
				e.exports = function e(t) {
					if (typeof t == "string") return t;
					if (a(t)) return i(t, e) + "";
					if (o(t)) return l ? l.call(t) : "";
					var n = t + "";
					return n == "0" && 1 / t == -s ? "-0" : n;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return function(t) {
						return e(t);
					};
				};
			},
			function(e, t, n) {
				var r = n(86);
				e.exports = function(e) {
					var t = new e.constructor(e.byteLength);
					return new r(t).set(new r(e)), t;
				};
			},
			function(e, t, n) {
				(function(e) {
					var r = n(5), i = typeof t == "object" && t && !t.nodeType && t, a = i && typeof e == "object" && e && !e.nodeType && e, o = a && a.exports === i ? r.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
					e.exports = function(e, t) {
						if (t) return e.slice();
						var n = e.length, r = s ? s(n) : new e.constructor(n);
						return e.copy(r), r;
					};
				}).call(t, n(29)(e));
			},
			function(e, t, n) {
				var r = n(110);
				e.exports = function(e, t) {
					var n = t ? r(e.buffer) : e.buffer;
					return new e.constructor(n, e.byteOffset, e.length);
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					var n = -1, r = e.length;
					for (t ||= Array(r); ++n < r;) t[n] = e[n];
					return t;
				};
			},
			function(e, t, n) {
				var r = n(36), i = n(21);
				e.exports = function(e, t, n, a) {
					var o = !n;
					n ||= {};
					for (var s = -1, c = t.length; ++s < c;) {
						var l = t[s], u = a ? a(n[l], e[l], l, n, e) : void 0;
						u === void 0 && (u = e[l]), o ? i(n, l, u) : r(n, l, u);
					}
					return n;
				};
			},
			function(e, t, n) {
				e.exports = n(5)["__core-js_shared__"];
			},
			function(e, t, n) {
				var r = n(104), i = n(129);
				e.exports = function(e) {
					return r(function(t, n) {
						var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
						for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
							var c = n[r];
							c && e(t, c, r, o);
						}
						return t;
					});
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return function(t, n, r) {
						for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
							var c = o[e ? s : ++i];
							if (!1 === n(a[c], c, a)) break;
						}
						return t;
					};
				};
			},
			function(e, t, n) {
				var r = n(157), i = n(41), a = n(42);
				e.exports = function(e) {
					return a(i(e, void 0, r), e + "");
				};
			},
			function(e, t, n) {
				var r = n(11), i = Object.prototype, a = i.hasOwnProperty, o = i.toString, s = r ? r.toStringTag : void 0;
				e.exports = function(e) {
					var t = a.call(e, s), n = e[s];
					try {
						e[s] = void 0;
						var r = !0;
					} catch {}
					var i = o.call(e);
					return r && (t ? e[s] = n : delete e[s]), i;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					return e?.[t];
				};
			},
			function(e, t, n) {
				var r = n(13), i = n(18), a = n(2), o = n(15), s = n(26), c = n(23);
				e.exports = function(e, t, n) {
					for (var l = -1, u = (t = r(t, e)).length, d = !1; ++l < u;) {
						var f = c(t[l]);
						if (!(d = e != null && n(e, f))) break;
						e = e[f];
					}
					return d || ++l != u ? d : !!(u = e == null ? 0 : e.length) && s(u) && o(f, u) && (a(e) || i(e));
				};
			},
			function(e, t, n) {
				var r = n(16);
				e.exports = function() {
					this.__data__ = r ? r(null) : {}, this.size = 0;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= +!!t, t;
				};
			},
			function(e, t, n) {
				var r = n(16), i = "__lodash_hash_undefined__", a = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					if (r) {
						var n = t[e];
						return n === i ? void 0 : n;
					}
					return a.call(t, e) ? t[e] : void 0;
				};
			},
			function(e, t, n) {
				var r = n(16), i = Object.prototype.hasOwnProperty;
				e.exports = function(e) {
					var t = this.__data__;
					return r ? t[e] !== void 0 : i.call(t, e);
				};
			},
			function(e, t, n) {
				var r = n(16), i = "__lodash_hash_undefined__";
				e.exports = function(e, t) {
					var n = this.__data__;
					return this.size += +!this.has(e), n[e] = r && t === void 0 ? i : t, this;
				};
			},
			function(e, t, n) {
				var r = n(91), i = n(39), a = n(40);
				e.exports = function(e) {
					return typeof e.constructor != "function" || a(e) ? {} : r(i(e));
				};
			},
			function(e, t, n) {
				var r = n(11), i = n(18), a = n(2), o = r ? r.isConcatSpreadable : void 0;
				e.exports = function(e) {
					return a(e) || i(e) || !!(o && e && e[o]);
				};
			},
			function(e, t, n) {
				var r = n(17), i = n(24), a = n(15), o = n(0);
				e.exports = function(e, t, n) {
					if (!o(n)) return !1;
					var s = typeof t;
					return !!(s == "number" ? i(n) && a(t, n.length) : s == "string" && t in n) && r(n[t], e);
				};
			},
			function(e, t, n) {
				var r = n(2), i = n(27), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
				e.exports = function(e, t) {
					if (r(e)) return !1;
					var n = typeof e;
					return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !i(e)) || o.test(e) || !a.test(e) || t != null && e in Object(t);
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = typeof e;
					return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
				};
			},
			function(e, t, n) {
				var r = n(115), i = function() {
					var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
					return e ? "Symbol(src)_1." + e : "";
				}();
				e.exports = function(e) {
					return !!i && i in e;
				};
			},
			function(e, t) {
				e.exports = function() {
					this.__data__ = [], this.size = 0;
				};
			},
			function(e, t, n) {
				var r = n(12), i = Array.prototype.splice;
				e.exports = function(e) {
					var t = this.__data__, n = r(t, e);
					return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0));
				};
			},
			function(e, t, n) {
				var r = n(12);
				e.exports = function(e) {
					var t = this.__data__, n = r(t, e);
					return n < 0 ? void 0 : t[n][1];
				};
			},
			function(e, t, n) {
				var r = n(12);
				e.exports = function(e) {
					return r(this.__data__, e) > -1;
				};
			},
			function(e, t, n) {
				var r = n(12);
				e.exports = function(e, t) {
					var n = this.__data__, i = r(n, e);
					return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this;
				};
			},
			function(e, t, n) {
				var r = n(84), i = n(10), a = n(33);
				e.exports = function() {
					this.size = 0, this.__data__ = {
						hash: new r(),
						map: new (a || i)(),
						string: new r()
					};
				};
			},
			function(e, t, n) {
				var r = n(14);
				e.exports = function(e) {
					var t = r(this, e).delete(e);
					return this.size -= +!!t, t;
				};
			},
			function(e, t, n) {
				var r = n(14);
				e.exports = function(e) {
					return r(this, e).get(e);
				};
			},
			function(e, t, n) {
				var r = n(14);
				e.exports = function(e) {
					return r(this, e).has(e);
				};
			},
			function(e, t, n) {
				var r = n(14);
				e.exports = function(e, t) {
					var n = r(this, e), i = n.size;
					return n.set(e, t), this.size += n.size == i ? 0 : 1, this;
				};
			},
			function(e, t, n) {
				var r = n(161), i = 500;
				e.exports = function(e) {
					var t = r(e, function(e) {
						return n.size === i && n.clear(), e;
					}), n = t.cache;
					return t;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = [];
					if (e != null) for (var n in Object(e)) t.push(n);
					return t;
				};
			},
			function(e, t, n) {
				(function(e) {
					var r = n(38), i = typeof t == "object" && t && !t.nodeType && t, a = i && typeof e == "object" && e && !e.nodeType && e, o = a && a.exports === i && r.process;
					e.exports = function() {
						try {
							return o && o.binding && o.binding("util");
						} catch {}
					}();
				}).call(t, n(29)(e));
			},
			function(e, t) {
				var n = Object.prototype.toString;
				e.exports = function(e) {
					return n.call(e);
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					return function(n) {
						return e(t(n));
					};
				};
			},
			function(e, t) {
				var n = Date.now;
				e.exports = function(e) {
					var t = 0, r = 0;
					return function() {
						var i = n(), a = 16 - (i - r);
						if (r = i, a > 0) {
							if (++t >= 800) return arguments[0];
						} else t = 0;
						return e.apply(void 0, arguments);
					};
				};
			},
			function(e, t, n) {
				var r = n(10);
				e.exports = function() {
					this.__data__ = new r(), this.size = 0;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					var t = this.__data__, n = t.delete(e);
					return this.size = t.size, n;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return this.__data__.get(e);
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return this.__data__.has(e);
				};
			},
			function(e, t, n) {
				var r = n(10), i = n(33), a = n(34), o = 200;
				e.exports = function(e, t) {
					var n = this.__data__;
					if (n instanceof r) {
						var s = n.__data__;
						if (!i || s.length < o - 1) return s.push([e, t]), this.size = ++n.size, this;
						n = this.__data__ = new a(s);
					}
					return n.set(e, t), this.size = n.size, this;
				};
			},
			function(e, t, n) {
				var r = n(143), i = /^\./, a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, o = /\\(\\)?/g;
				e.exports = r(function(e) {
					var t = [];
					return i.test(e) && t.push(""), e.replace(a, function(e, n, r, i) {
						t.push(r ? i.replace(o, "$1") : n || e);
					}), t;
				});
			},
			function(e, t) {
				var n = Function.prototype.toString;
				e.exports = function(e) {
					if (e != null) {
						try {
							return n.call(e);
						} catch {}
						try {
							return e + "";
						} catch {}
					}
					return "";
				};
			},
			function(e, t) {
				e.exports = function(e) {
					return function() {
						return e;
					};
				};
			},
			function(e, t, n) {
				var r = n(92);
				e.exports = function(e) {
					return e != null && e.length ? r(e, 1) : [];
				};
			},
			function(e, t, n) {
				var r = n(95), i = n(121);
				e.exports = function(e, t) {
					return e != null && i(e, t, r);
				};
			},
			function(e, t, n) {
				var r = n(24), i = n(6);
				e.exports = function(e) {
					return i(e) && r(e);
				};
			},
			function(e, t, n) {
				var r = n(8), i = n(39), a = n(6), o = "[object Object]", s = Function.prototype, c = Object.prototype, l = s.toString, u = c.hasOwnProperty, d = l.call(Object);
				e.exports = function(e) {
					if (!a(e) || r(e) != o) return !1;
					var t = i(e);
					if (t === null) return !0;
					var n = u.call(t, "constructor") && t.constructor;
					return typeof n == "function" && n instanceof n && l.call(n) == d;
				};
			},
			function(e, t, n) {
				function r(e, t) {
					if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(a);
					var n = function() {
						var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
						if (a.has(i)) return a.get(i);
						var o = e.apply(this, r);
						return n.cache = a.set(i, o) || a, o;
					};
					return n.cache = new (r.Cache || i)(), n;
				}
				var i = n(34), a = "Expected a function";
				r.Cache = i, e.exports = r;
			},
			function(e, t, n) {
				var r = n(102);
				e.exports = n(118)(function(e, t) {
					return e == null ? {} : r(e, t);
				});
			},
			function(e, t) {
				e.exports = function() {
					return !1;
				};
			},
			function(e, t, n) {
				var r = n(114), i = n(46);
				e.exports = function(e) {
					return r(e, i(e));
				};
			},
			function(e, t, n) {
				var r = n(108);
				e.exports = function(e) {
					return e == null ? "" : r(e);
				};
			},
			function(e, t, n) {
				e.exports = n(48);
			}
		]);
	};
	typeof e == "object" && typeof t == "object" ? t.exports = i(i.toString()).default : typeof e == "object" ? e.Quagga = i(i.toString()).default : r.Quagga = i(i.toString()).default;
})(), 1), s = o.default, c = o.default;
export { c as Quagga, s as default };
