var e = "183", t = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, n = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, r = 0, i = 1, a = 2, o = 3, s = 0, c = 1, l = 2, u = 3, d = 0, f = 1, p = 2, m = 0, h = 1, g = 2, _ = 3, v = 4, y = 5, b = 6, x = 100, S = 101, C = 102, w = 103, T = 104, E = 200, D = 201, O = 202, ee = 203, k = 204, A = 205, te = 206, j = 207, M = 208, ne = 209, re = 210, ie = 211, ae = 212, oe = 213, se = 214, ce = 0, le = 1, ue = 2, de = 3, fe = 4, pe = 5, me = 6, he = 7, ge = 0, _e = 1, ve = 2, ye = 0, be = 1, xe = 2, N = 3, Se = 4, P = 5, F = 6, Ce = 7, we = "attached", Te = "detached", Ee = 300, De = 301, Oe = 302, ke = 303, Ae = 304, je = 306, Me = 1e3, Ne = 1001, Pe = 1002, Fe = 1003, Ie = 1004, Le = 1004, Re = 1005, ze = 1005, Be = 1006, Ve = 1007, I = 1007, He = 1008, Ue = 1008, We = 1009, Ge = 1010, Ke = 1011, qe = 1012, Je = 1013, Ye = 1014, Xe = 1015, Ze = 1016, Qe = 1017, $e = 1018, et = 1020, tt = 35902, nt = 35899, rt = 1021, it = 1022, at = 1023, ot = 1026, st = 1027, ct = 1028, lt = 1029, ut = 1030, dt = 1031, ft = 1032, pt = 1033, mt = 33776, ht = 33777, gt = 33778, _t = 33779, vt = 35840, yt = 35841, bt = 35842, xt = 35843, St = 36196, Ct = 37492, wt = 37496, Tt = 37488, Et = 37489, Dt = 37490, Ot = 37491, kt = 37808, At = 37809, jt = 37810, Mt = 37811, Nt = 37812, Pt = 37813, Ft = 37814, It = 37815, Lt = 37816, Rt = 37817, zt = 37818, Bt = 37819, Vt = 37820, Ht = 37821, Ut = 36492, Wt = 36494, Gt = 36495, Kt = 36283, qt = 36284, Jt = 36285, Yt = 36286, Xt = 2200, Zt = 2201, Qt = 2202, $t = 2300, en = 2301, tn = 2302, nn = 2303, rn = 2400, an = 2401, on = 2402, sn = 2500, cn = 2501, ln = 0, un = 1, dn = 2, fn = 3200, pn = 3201, mn = 3202, hn = 3203, gn = 0, _n = 1, vn = "", yn = "srgb", bn = "srgb-linear", xn = "linear", Sn = "srgb", Cn = "", wn = "rg", Tn = "ga", En = 0, Dn = 7680, On = 7681, kn = 7682, An = 7683, jn = 34055, Mn = 34056, Nn = 5386, Pn = 512, Fn = 513, In = 514, Ln = 515, Rn = 516, zn = 517, Bn = 518, Vn = 519, Hn = 512, Un = 513, Wn = 514, Gn = 515, Kn = 516, qn = 517, Jn = 518, Yn = 519, Xn = 35044, Zn = 35048, Qn = 35040, $n = 35045, er = 35049, tr = 35041, nr = 35046, rr = 35050, ir = 35042, ar = "100", or = "300 es", sr = 2e3, cr = 2001, lr = {
	COMPUTE: "compute",
	RENDER: "render"
}, ur = {
	PERSPECTIVE: "perspective",
	LINEAR: "linear",
	FLAT: "flat"
}, dr = {
	NORMAL: "normal",
	CENTROID: "centroid",
	SAMPLE: "sample",
	FIRST: "first",
	EITHER: "either"
}, fr = { TEXTURE_COMPARE: "depthTextureCompare" }, pr = {
	Int8Array,
	Uint8Array,
	Uint8ClampedArray,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array
};
function mr(e, t) {
	return new pr[e](t);
}
function hr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function gr(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function _r() {
	let e = gr("canvas");
	return e.style.display = "block", e;
}
var vr = {}, yr = null;
function br(e) {
	yr = e;
}
function xr() {
	return yr;
}
function Sr(...e) {
	let t = "THREE." + e.shift();
	yr ? yr("log", t, ...e) : console.log(t, ...e);
}
function Cr(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function L(...e) {
	let t = "THREE." + (e = Cr(e)).shift();
	if (yr) yr("warn", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function R(...e) {
	let t = "THREE." + (e = Cr(e)).shift();
	if (yr) yr("error", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function wr(...e) {
	let t = e.join(" ");
	t in vr || (vr[t] = !0, L(...e));
}
var Tr = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, Er = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, Dr = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), Or = 1234567, kr = Math.PI / 180, Ar = 180 / Math.PI;
function jr() {
	let e = 4294967295 * Math.random() | 0, t = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0;
	return (Dr[255 & e] + Dr[e >> 8 & 255] + Dr[e >> 16 & 255] + Dr[e >> 24 & 255] + "-" + Dr[255 & t] + Dr[t >> 8 & 255] + "-" + Dr[t >> 16 & 15 | 64] + Dr[t >> 24 & 255] + "-" + Dr[63 & n | 128] + Dr[n >> 8 & 255] + "-" + Dr[n >> 16 & 255] + Dr[n >> 24 & 255] + Dr[255 & r] + Dr[r >> 8 & 255] + Dr[r >> 16 & 255] + Dr[r >> 24 & 255]).toLowerCase();
}
function z(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Mr(e, t) {
	return (e % t + t) % t;
}
function Nr(e, t, n) {
	return (1 - n) * e + n * t;
}
function Pr(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("Invalid component type.");
	}
}
function B(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(4294967295 * e);
		case Uint16Array: return Math.round(65535 * e);
		case Uint8Array: return Math.round(255 * e);
		case Int32Array: return Math.round(2147483647 * e);
		case Int16Array: return Math.round(32767 * e);
		case Int8Array: return Math.round(127 * e);
		default: throw Error("Invalid component type.");
	}
}
var Fr = {
	DEG2RAD: kr,
	RAD2DEG: Ar,
	generateUUID: jr,
	clamp: z,
	euclideanModulo: Mr,
	mapLinear: function(e, t, n, r, i) {
		return r + (e - t) * (i - r) / (n - t);
	},
	inverseLerp: function(e, t, n) {
		return e === t ? 0 : (n - e) / (t - e);
	},
	lerp: Nr,
	damp: function(e, t, n, r) {
		return Nr(e, t, 1 - Math.exp(-n * r));
	},
	pingpong: function(e, t = 1) {
		return t - Math.abs(Mr(e, 2 * t) - t);
	},
	smoothstep: function(e, t, n) {
		return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
	},
	smootherstep: function(e, t, n) {
		return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
	},
	randInt: function(e, t) {
		return e + Math.floor(Math.random() * (t - e + 1));
	},
	randFloat: function(e, t) {
		return e + Math.random() * (t - e);
	},
	randFloatSpread: function(e) {
		return e * (.5 - Math.random());
	},
	seededRandom: function(e) {
		e !== void 0 && (Or = e);
		let t = Or += 1831565813;
		return t = Math.imul(t ^ t >>> 15, 1 | t), t ^= t + Math.imul(t ^ t >>> 7, 61 | t), ((t ^ t >>> 14) >>> 0) / 4294967296;
	},
	degToRad: function(e) {
		return e * kr;
	},
	radToDeg: function(e) {
		return e * Ar;
	},
	isPowerOfTwo: function(e) {
		return !(e & e - 1) && e !== 0;
	},
	ceilPowerOfTwo: function(e) {
		return 2 ** Math.ceil(Math.log(e) / Math.LN2);
	},
	floorPowerOfTwo: function(e) {
		return 2 ** Math.floor(Math.log(e) / Math.LN2);
	},
	setQuaternionFromProperEuler: function(e, t, n, r, i) {
		let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
		switch (i) {
			case "XYX":
				e.set(s * u, c * d, c * f, s * l);
				break;
			case "YZY":
				e.set(c * f, s * u, c * d, s * l);
				break;
			case "ZXZ":
				e.set(c * d, c * f, s * u, s * l);
				break;
			case "XZX":
				e.set(s * u, c * m, c * p, s * l);
				break;
			case "YXY":
				e.set(c * p, s * u, c * m, s * l);
				break;
			case "ZYZ":
				e.set(c * m, c * p, s * u, s * l);
				break;
			default: L("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
		}
	},
	normalize: B,
	denormalize: Pr
}, V = class e {
	constructor(t = 0, n = 0) {
		e.prototype.isVector2 = !0, this.x = t, this.y = n;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(z(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Ir = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, s = s * t + d * (o = Math.sin(o * n) / r), c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: L("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return !0 === t && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(z(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, H = class e {
	constructor(t = 0, n = 0, r = 0) {
		e.prototype.isVector3 = !0, this.x = t, this.y = n, this.z = r;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(Rr.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(Rr.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this.z = z(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this.z = z(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Lr.copy(this).projectOnVector(e), this.sub(Lr);
	}
	reflect(e) {
		return this.sub(Lr.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(z(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, 4 * t);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, 3 * t);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = 2 * Math.random() - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, Lr = new H(), Rr = new Ir(), U = class e {
	constructor(t, n, r, i, a, o, s, c, l) {
		e.prototype.isMatrix3 = !0, this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return this.premultiply(zr.makeScale(e, t)), this;
	}
	rotate(e) {
		return this.premultiply(zr.makeRotation(-e)), this;
	}
	translate(e, t) {
		return this.premultiply(zr.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, zr = new U(), Br = new U().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Vr = new U().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Hr() {
	let e = {
		enabled: !0,
		workingColorSpace: bn,
		spaces: {},
		convert: function(e, t, n) {
			return !1 !== this.enabled && t !== n && t && n && (this.spaces[t].transfer === "srgb" && (e.r = Wr(e.r), e.g = Wr(e.g), e.b = Wr(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = Gr(e.r), e.g = Gr(e.g), e.b = Gr(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? xn : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[bn]: {
			primaries: t,
			whitePoint: r,
			transfer: xn,
			toXYZ: Br,
			fromXYZ: Vr,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: yn },
			outputColorSpaceConfig: { drawingBufferColorSpace: yn }
		},
		[yn]: {
			primaries: t,
			whitePoint: r,
			transfer: Sn,
			toXYZ: Br,
			fromXYZ: Vr,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: yn }
		}
	}), e;
}
var Ur, W = Hr();
function Wr(e) {
	return e < .04045 ? .0773993808 * e : (.9478672986 * e + .0521327014) ** 2.4;
}
function Gr(e) {
	return e < .0031308 ? 12.92 * e : 1.055 * e ** .41666 - .055;
}
var Kr = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Ur === void 0 && (Ur = gr("canvas")), Ur.width = e.width, Ur.height = e.height;
			let t = Ur.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Ur;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = gr("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = 255 * Wr(i[e] / 255);
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * Wr(t[e] / 255)) : t[e] = Wr(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return L("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, qr = 0, Jr = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: qr++ }), this.uuid = jr(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		!0 === e && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Yr(r[t].image)) : e.push(Yr(r[t]));
			} else e = Yr(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Yr(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Kr.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (L("Texture: Unable to serialize Texture."), {});
}
var Xr = 0, Zr = new H(), Qr = class e extends Er {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = 1001, i = 1001, a = 1006, o = 1008, s = 1023, c = We, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Xr++ }), this.uuid = jr(), this.name = "", this.source = new Jr(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new V(0, 0), this.repeat = new V(1, 1), this.center = new V(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new U(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
	}
	get width() {
		return this.source.getSize(Zr).x;
	}
	get height() {
		return this.source.getSize(Zr).y;
	}
	get depth() {
		return this.source.getSize(Zr).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e = null) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				L(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? L(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case Me:
				e.x -= Math.floor(e.x);
				break;
			case Ne:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case Pe: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case Me:
				e.y -= Math.floor(e.y);
				break;
			case Ne:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case Pe: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		!0 === e && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		!0 === e && this.pmremVersion++;
	}
};
Qr.DEFAULT_IMAGE = null, Qr.DEFAULT_MAPPING = 300, Qr.DEFAULT_ANISOTROPY = 1;
var $r = class e {
	constructor(t = 0, n = 0, r = 0, i = 1) {
		e.prototype.isVector4 = !0, this.x = t, this.y = n, this.z = r, this.w = i;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = z(this.x, e.x, t.x), this.y = z(this.y, e.y, t.y), this.z = z(this.z, e.z, t.z), this.w = z(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = z(this.x, e, t), this.y = z(this.y, e, t), this.z = z(this.z, e, t), this.w = z(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(z(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, ei = class extends Er {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: Be,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new $r(0, 0, e, t), this.scissorTest = !1, this.viewport = new $r(0, 0, e, t), this.textures = [];
		let r = new Qr({
			width: e,
			height: t,
			depth: n.depth
		}), i = n.count;
		for (let e = 0; e < i; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: Be,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, !0 !== this.textures[r].isData3DTexture && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Jr(n);
		}
		return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, ti = class extends ei {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, ni = class extends Qr {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = Fe, this.minFilter = Fe, this.wrapR = Ne, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, ri = class extends ti {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		super(e, t, r), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new ni(null, e, t, n), this._setTextureOptions(r), this.texture.isRenderTargetTexture = !0;
	}
}, ii = class extends Qr {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = Fe, this.minFilter = Fe, this.wrapR = Ne, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, ai = class extends ti {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		super(e, t, r), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new ii(null, e, t, n), this._setTextureOptions(r), this.texture.isRenderTargetTexture = !0;
	}
}, G = class e {
	constructor(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		e.prototype.isMatrix4 = !0, this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinant() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinant() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / oi.setFromMatrixColumn(e, 0).length(), i = 1 / oi.setFromMatrixColumn(e, 1).length(), a = 1 / oi.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(ci, e, li);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return fi.subVectors(e, t), fi.lengthSq() === 0 && (fi.z = 1), fi.normalize(), ui.crossVectors(n, fi), ui.lengthSq() === 0 && (Math.abs(n.z) === 1 ? fi.x += 1e-4 : fi.z += 1e-4, fi.normalize(), ui.crossVectors(n, fi)), ui.normalize(), di.crossVectors(fi, ui), r[0] = ui.x, r[4] = di.x, r[8] = fi.x, r[1] = ui.y, r[5] = di.y, r[9] = fi.y, r[2] = ui.z, r[6] = di.z, r[10] = fi.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], ee = r[2], k = r[6], A = r[10], te = r[14], j = r[3], M = r[7], ne = r[11], re = r[15];
		return i[0] = a * x + o * T + s * ee + c * j, i[4] = a * S + o * E + s * k + c * M, i[8] = a * C + o * D + s * A + c * ne, i[12] = a * w + o * O + s * te + c * re, i[1] = l * x + u * T + d * ee + f * j, i[5] = l * S + u * E + d * k + f * M, i[9] = l * C + u * D + d * A + f * ne, i[13] = l * w + u * O + d * te + f * re, i[2] = p * x + m * T + h * ee + g * j, i[6] = p * S + m * E + h * k + g * M, i[10] = p * C + m * D + h * A + g * ne, i[14] = p * w + m * O + h * te + g * re, i[3] = _ * x + v * T + y * ee + b * j, i[7] = _ * S + v * E + y * k + b * M, i[11] = _ * C + v * D + y * A + b * ne, i[15] = _ * w + v * O + y * te + b * re, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, ee = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (ee === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let k = 1 / ee;
		return e[0] = (o * O - s * D + c * E) * k, e[1] = (r * D - n * O - i * E) * k, e[2] = (m * S - h * x + g * b) * k, e[3] = (d * x - u * S - f * b) * k, e[4] = (s * T - a * O - c * w) * k, e[5] = (t * O - r * T + i * w) * k, e[6] = (h * y - p * S - g * v) * k, e[7] = (l * S - d * y + f * v) * k, e[8] = (a * D - o * T + c * C) * k, e[9] = (n * T - t * D - i * C) * k, e[10] = (p * x - m * y + g * _) * k, e[11] = (u * y - l * x - f * _) * k, e[12] = (o * w - a * E - s * C) * k, e[13] = (t * E - n * w + r * C) * k, e[14] = (m * v - p * b - h * _) * k, e[15] = (l * b - u * v + d * _) * k, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinant();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = oi.set(r[0], r[1], r[2]).length(), o = oi.set(r[4], r[5], r[6]).length(), s = oi.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), si.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return si.elements[0] *= c, si.elements[1] *= c, si.elements[2] *= c, si.elements[4] *= l, si.elements[5] *= l, si.elements[6] *= l, si.elements[8] *= u, si.elements[9] *= u, si.elements[10] *= u, t.setFromRotationMatrix(si), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = 2e3, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else {
			if (o !== 2001) throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
			p = -a / (a - i), m = -a * i / (a - i);
		}
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = 2e3, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else {
			if (o !== 2001) throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
			p = -1 / (a - i), m = -i / (a - i);
		}
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, oi = new H(), si = new G(), ci = new H(0, 0, 0), li = new H(1, 1, 1), ui = new H(), di = new H(), fi = new H(), pi = new G(), mi = new Ir(), hi = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(z(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-z(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(z(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-z(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(z(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-z(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: L("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, !0 === n && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return pi.makeRotationFromQuaternion(e), this.setFromRotationMatrix(pi, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return mi.setFromEuler(this), this.setFromQuaternion(mi, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
hi.DEFAULT_ORDER = "XYZ";
var gi = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, _i = 0, vi = new H(), yi = new Ir(), bi = new G(), xi = new H(), Si = new H(), Ci = new H(), wi = new Ir(), Ti = new H(1, 0, 0), Ei = new H(0, 1, 0), Di = new H(0, 0, 1), Oi = { type: "added" }, ki = { type: "removed" }, Ai = {
	type: "childadded",
	child: null
}, ji = {
	type: "childremoved",
	child: null
}, Mi = class e extends Er {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _i++ }), this.uuid = jr(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new H(), n = new hi(), r = new Ir(), i = new H(1, 1, 1);
		n._onChange(function() {
			r.setFromEuler(n, !1);
		}), r._onChange(function() {
			n.setFromQuaternion(r, void 0, !1);
		}), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new G() },
			normalMatrix: { value: new U() }
		}), this.matrix = new G(), this.matrixWorld = new G(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new gi(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this;
	}
	rotateOnWorldAxis(e, t) {
		return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(Ti, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(Ei, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Di, e);
	}
	translateOnAxis(e, t) {
		return vi.copy(e).applyQuaternion(this.quaternion), this.position.add(vi.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(Ti, e);
	}
	translateY(e) {
		return this.translateOnAxis(Ei, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Di, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(bi.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? xi.copy(e) : xi.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Si.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? bi.lookAt(Si, xi, this.up) : bi.lookAt(xi, Si, this.up), this.quaternion.setFromRotationMatrix(bi), r && (bi.extractRotation(r.matrixWorld), yi.setFromRotationMatrix(bi), this.quaternion.premultiply(yi.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (R("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Oi), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null) : R("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ki), ji.child = e, this.dispatchEvent(ji), ji.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), bi.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), bi.multiply(e.parent.matrixWorld)), e.applyMatrix4(bi), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Oi), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Si, e, Ci), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Si, wi, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (!1 === this.visible) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (!0 === this.matrixWorldAutoUpdate && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t) {
		let n = this.parent;
		if (!0 === e && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), !0 === this.matrixWorldAutoUpdate && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), !0 === t) {
			let e = this.children;
			for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), !1 === this.frustumCulled && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), !1 !== this.static && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), e.pivot !== null && (this.pivot = e.pivot.clone()), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Mi.DEFAULT_UP = new H(0, 1, 0), Mi.DEFAULT_MATRIX_AUTO_UPDATE = !0, Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Ni = class extends Mi {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Pi = { type: "move" }, Fi = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Ni(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Ni(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new H(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new H()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Ni(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new H(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new H()), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Pi)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Ni();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, Ii = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, Li = {
	h: 0,
	s: 0,
	l: 0
}, Ri = {
	h: 0,
	s: 0,
	l: 0
};
function zi(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e;
}
var K = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = yn) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, W.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = W.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, W.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = W.workingColorSpace) {
		if (e = Mr(e, 1), t = z(t, 0, 1), n = z(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = zi(i, r, e + 1 / 3), this.g = zi(i, r, e), this.b = zi(i, r, e - 1 / 3);
		}
		return W.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = yn) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && L("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: L("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			L("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = yn) {
		let n = Ii[e.toLowerCase()];
		return n === void 0 ? L("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Wr(e.r), this.g = Wr(e.g), this.b = Wr(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = Gr(e.r), this.g = Gr(e.g), this.b = Gr(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = yn) {
		return W.workingToColorSpace(Bi.copy(this), e), 65536 * Math.round(z(255 * Bi.r, 0, 255)) + 256 * Math.round(z(255 * Bi.g, 0, 255)) + Math.round(z(255 * Bi.b, 0, 255));
	}
	getHexString(e = yn) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = W.workingColorSpace) {
		W.workingToColorSpace(Bi.copy(this), t);
		let n = Bi.r, r = Bi.g, i = Bi.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = W.workingColorSpace) {
		return W.workingToColorSpace(Bi.copy(this), t), e.r = Bi.r, e.g = Bi.g, e.b = Bi.b, e;
	}
	getStyle(e = yn) {
		W.workingToColorSpace(Bi.copy(this), e);
		let t = Bi.r, n = Bi.g, r = Bi.b;
		return e === "srgb" ? `rgb(${Math.round(255 * t)},${Math.round(255 * n)},${Math.round(255 * r)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(Li), this.setHSL(Li.h + e, Li.s + t, Li.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(Li), e.getHSL(Ri);
		let n = Nr(Li.h, Ri.h, t), r = Nr(Li.s, Ri.s, t), i = Nr(Li.l, Ri.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Bi = new K();
K.NAMES = Ii;
var Vi = class e {
	constructor(e, t = 25e-5) {
		this.isFogExp2 = !0, this.name = "", this.color = new K(e), this.density = t;
	}
	clone() {
		return new e(this.color, this.density);
	}
	toJSON() {
		return {
			type: "FogExp2",
			name: this.name,
			color: this.color.getHex(),
			density: this.density
		};
	}
}, Hi = class e {
	constructor(e, t = 1, n = 1e3) {
		this.isFog = !0, this.name = "", this.color = new K(e), this.near = t, this.far = n;
	}
	clone() {
		return new e(this.color, this.near, this.far);
	}
	toJSON() {
		return {
			type: "Fog",
			name: this.name,
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		};
	}
}, Ui = class extends Mi {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hi(), this.environmentIntensity = 1, this.environmentRotation = new hi(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Wi = new H(), Gi = new H(), Ki = new H(), qi = new H(), Ji = new H(), Yi = new H(), Xi = new H(), Zi = new H(), Qi = new H(), $i = new H(), ea = new $r(), ta = new $r(), na = new $r(), ra = class e {
	constructor(e = new H(), t = new H(), n = new H()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Wi.subVectors(e, t), r.cross(Wi);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Wi.subVectors(r, t), Gi.subVectors(n, t), Ki.subVectors(e, t);
		let a = Wi.dot(Wi), o = Wi.dot(Gi), s = Wi.dot(Ki), c = Gi.dot(Gi), l = Gi.dot(Ki), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, qi) !== null && qi.x >= 0 && qi.y >= 0 && qi.x + qi.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, qi) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, qi.x), s.addScaledVector(a, qi.y), s.addScaledVector(o, qi.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return ea.setScalar(0), ta.setScalar(0), na.setScalar(0), ea.fromBufferAttribute(e, t), ta.fromBufferAttribute(e, n), na.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(ea, i.x), a.addScaledVector(ta, i.y), a.addScaledVector(na, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Wi.subVectors(n, t), Gi.subVectors(e, t), Wi.cross(Gi).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Wi.subVectors(this.c, this.b), Gi.subVectors(this.a, this.b), .5 * Wi.cross(Gi).length();
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		Ji.subVectors(r, n), Yi.subVectors(i, n), Zi.subVectors(e, n);
		let s = Ji.dot(Zi), c = Yi.dot(Zi);
		if (s <= 0 && c <= 0) return t.copy(n);
		Qi.subVectors(e, r);
		let l = Ji.dot(Qi), u = Yi.dot(Qi);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(Ji, a);
		$i.subVectors(e, i);
		let f = Ji.dot($i), p = Yi.dot($i);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Yi, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Xi.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Xi, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(Ji, a).addScaledVector(Yi, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, ia = class {
	constructor(e = new H(1 / 0, 1 / 0, 1 / 0), t = new H(-1 / 0, -1 / 0, -1 / 0)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(oa.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(oa.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = oa.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (!0 === t && r !== void 0 && !0 !== e.isInstancedMesh) for (let t = 0, n = r.count; t < n; t++) !0 === e.isMesh ? e.getVertexPosition(t, oa) : oa.fromBufferAttribute(r, t), oa.applyMatrix4(e.matrixWorld), this.expandByPoint(oa);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), sa.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), sa.copy(e.boundingBox)), sa.applyMatrix4(e.matrixWorld), this.union(sa);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, oa), oa.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(ma), ha.subVectors(this.max, ma), ca.subVectors(e.a, ma), la.subVectors(e.b, ma), ua.subVectors(e.c, ma), da.subVectors(la, ca), fa.subVectors(ua, la), pa.subVectors(ca, ua);
		let t = [
			0,
			-da.z,
			da.y,
			0,
			-fa.z,
			fa.y,
			0,
			-pa.z,
			pa.y,
			da.z,
			0,
			-da.x,
			fa.z,
			0,
			-fa.x,
			pa.z,
			0,
			-pa.x,
			-da.y,
			da.x,
			0,
			-fa.y,
			fa.x,
			0,
			-pa.y,
			pa.x,
			0
		];
		return !!va(t, ca, la, ua, ha) && (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !!va(t, ca, la, ua, ha) && (ga.crossVectors(da, fa), t = [
			ga.x,
			ga.y,
			ga.z
		], va(t, ca, la, ua, ha)));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, oa).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = .5 * this.getSize(oa).length()), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (aa[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), aa[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), aa[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), aa[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), aa[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), aa[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), aa[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), aa[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(aa)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, aa = [
	new H(),
	new H(),
	new H(),
	new H(),
	new H(),
	new H(),
	new H(),
	new H()
], oa = new H(), sa = new ia(), ca = new H(), la = new H(), ua = new H(), da = new H(), fa = new H(), pa = new H(), ma = new H(), ha = new H(), ga = new H(), _a = new H();
function va(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		_a.fromArray(e, a);
		let o = i.x * Math.abs(_a.x) + i.y * Math.abs(_a.y) + i.z * Math.abs(_a.z), s = t.dot(_a), c = n.dot(_a), l = r.dot(_a);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var ya = ba();
function ba() {
	let e = /* @__PURE__ */ new ArrayBuffer(4), t = new Float32Array(e), n = new Uint32Array(e), r = /* @__PURE__ */ new Uint32Array(512), i = /* @__PURE__ */ new Uint32Array(512);
	for (let e = 0; e < 256; ++e) {
		let t = e - 127;
		t < -27 ? (r[e] = 0, r[256 | e] = 32768, i[e] = 24, i[256 | e] = 24) : t < -14 ? (r[e] = 1024 >> -t - 14, r[256 | e] = 1024 >> -t - 14 | 32768, i[e] = -t - 1, i[256 | e] = -t - 1) : t <= 15 ? (r[e] = t + 15 << 10, r[256 | e] = t + 15 << 10 | 32768, i[e] = 13, i[256 | e] = 13) : t < 128 ? (r[e] = 31744, r[256 | e] = 64512, i[e] = 24, i[256 | e] = 24) : (r[e] = 31744, r[256 | e] = 64512, i[e] = 13, i[256 | e] = 13);
	}
	let a = /* @__PURE__ */ new Uint32Array(2048), o = /* @__PURE__ */ new Uint32Array(64), s = /* @__PURE__ */ new Uint32Array(64);
	for (let e = 1; e < 1024; ++e) {
		let t = e << 13, n = 0;
		for (; !(8388608 & t);) t <<= 1, n -= 8388608;
		t &= -8388609, n += 947912704, a[e] = t | n;
	}
	for (let e = 1024; e < 2048; ++e) a[e] = 939524096 + (e - 1024 << 13);
	for (let e = 1; e < 31; ++e) o[e] = e << 23;
	o[31] = 1199570944, o[32] = 2147483648;
	for (let e = 33; e < 63; ++e) o[e] = 2147483648 + (e - 32 << 23);
	o[63] = 3347054592;
	for (let e = 1; e < 64; ++e) e !== 32 && (s[e] = 1024);
	return {
		floatView: t,
		uint32View: n,
		baseTable: r,
		shiftTable: i,
		mantissaTable: a,
		exponentTable: o,
		offsetTable: s
	};
}
function xa(e) {
	Math.abs(e) > 65504 && L("DataUtils.toHalfFloat(): Value out of range."), e = z(e, -65504, 65504), ya.floatView[0] = e;
	let t = ya.uint32View[0], n = t >> 23 & 511;
	return ya.baseTable[n] + ((8388607 & t) >> ya.shiftTable[n]);
}
function Sa(e) {
	let t = e >> 10;
	return ya.uint32View[0] = ya.mantissaTable[ya.offsetTable[t] + (1023 & e)] + ya.exponentTable[t], ya.floatView[0];
}
var Ca, wa = class {
	static toHalfFloat(e) {
		return xa(e);
	}
	static fromHalfFloat(e) {
		return Sa(e);
	}
}, Ta = new H(), Ea = new V(), Da = 0, Oa = class {
	constructor(e, t, n = !1) {
		if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Da++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = Xn, this.updateRanges = [], this.gpuType = Xe, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		!0 === e && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Ea.fromBufferAttribute(this, t), Ea.applyMatrix3(e), this.setXY(t, Ea.x, Ea.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Ta.fromBufferAttribute(this, t), Ta.applyMatrix3(e), this.setXYZ(t, Ta.x, Ta.y, Ta.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) Ta.fromBufferAttribute(this, t), Ta.applyMatrix4(e), this.setXYZ(t, Ta.x, Ta.y, Ta.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Ta.fromBufferAttribute(this, t), Ta.applyNormalMatrix(e), this.setXYZ(t, Ta.x, Ta.y, Ta.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Ta.fromBufferAttribute(this, t), Ta.transformDirection(e), this.setXYZ(t, Ta.x, Ta.y, Ta.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = Pr(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = B(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array), i = B(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
}, ka = class extends Oa {
	constructor(e, t, n) {
		super(new Int8Array(e), t, n);
	}
}, Aa = class extends Oa {
	constructor(e, t, n) {
		super(new Uint8Array(e), t, n);
	}
}, ja = class extends Oa {
	constructor(e, t, n) {
		super(new Uint8ClampedArray(e), t, n);
	}
}, Ma = class extends Oa {
	constructor(e, t, n) {
		super(new Int16Array(e), t, n);
	}
}, Na = class extends Oa {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Pa = class extends Oa {
	constructor(e, t, n) {
		super(new Int32Array(e), t, n);
	}
}, Fa = class extends Oa {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Ia = class extends Oa {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n), this.isFloat16BufferAttribute = !0;
	}
	getX(e) {
		let t = Sa(this.array[e * this.itemSize]);
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize] = xa(t), this;
	}
	getY(e) {
		let t = Sa(this.array[e * this.itemSize + 1]);
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 1] = xa(t), this;
	}
	getZ(e) {
		let t = Sa(this.array[e * this.itemSize + 2]);
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 2] = xa(t), this;
	}
	getW(e) {
		let t = Sa(this.array[e * this.itemSize + 3]);
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = B(t, this.array)), this.array[e * this.itemSize + 3] = xa(t), this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array)), this.array[e + 0] = xa(t), this.array[e + 1] = xa(n), this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array)), this.array[e + 0] = xa(t), this.array[e + 1] = xa(n), this.array[e + 2] = xa(r), this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array), i = B(i, this.array)), this.array[e + 0] = xa(t), this.array[e + 1] = xa(n), this.array[e + 2] = xa(r), this.array[e + 3] = xa(i), this;
	}
}, q = class extends Oa {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, La = new ia(), Ra = new H(), za = new H(), Ba = class {
	constructor(e = new H(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? La.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Ra.subVectors(e, this.center);
		let t = Ra.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = .5 * (e - this.radius);
			this.center.addScaledVector(Ra, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (!0 === this.center.equals(e.center) ? this.radius = Math.max(this.radius, e.radius) : (za.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Ra.copy(e.center).add(za)), this.expandByPoint(Ra.copy(e.center).sub(za))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, Va = 0, Ha = new G(), Ua = new Mi(), Wa = new H(), Ga = new ia(), Ka = new ia(), qa = new H(), J = class e extends Er {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Va++ }), this.uuid = jr(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {};
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (function(e) {
			for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
			return !1;
		}(e) ? Fa : Na)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new U().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	applyQuaternion(e) {
		return Ha.makeRotationFromQuaternion(e), this.applyMatrix4(Ha), this;
	}
	rotateX(e) {
		return Ha.makeRotationX(e), this.applyMatrix4(Ha), this;
	}
	rotateY(e) {
		return Ha.makeRotationY(e), this.applyMatrix4(Ha), this;
	}
	rotateZ(e) {
		return Ha.makeRotationZ(e), this.applyMatrix4(Ha), this;
	}
	translate(e, t, n) {
		return Ha.makeTranslation(e, t, n), this.applyMatrix4(Ha), this;
	}
	scale(e, t, n) {
		return Ha.makeScale(e, t, n), this.applyMatrix4(Ha), this;
	}
	lookAt(e) {
		return Ua.lookAt(e), Ua.updateMatrix(), this.applyMatrix4(Ua.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Wa).negate(), this.translate(Wa.x, Wa.y, Wa.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new q(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && L("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new ia());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) return R("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new H(-1 / 0, -1 / 0, -1 / 0), new H(1 / 0, 1 / 0, 1 / 0));
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Ga.setFromBufferAttribute(n), this.morphTargetsRelative ? (qa.addVectors(this.boundingBox.min, Ga.min), this.boundingBox.expandByPoint(qa), qa.addVectors(this.boundingBox.max, Ga.max), this.boundingBox.expandByPoint(qa)) : (this.boundingBox.expandByPoint(Ga.min), this.boundingBox.expandByPoint(Ga.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && R("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Ba());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) return R("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new H(), 1 / 0);
		if (e) {
			let n = this.boundingSphere.center;
			if (Ga.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Ka.setFromBufferAttribute(n), this.morphTargetsRelative ? (qa.addVectors(Ga.min, Ka.min), Ga.expandByPoint(qa), qa.addVectors(Ga.max, Ka.max), Ga.expandByPoint(qa)) : (Ga.expandByPoint(Ka.min), Ga.expandByPoint(Ka.max));
			}
			Ga.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) qa.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(qa));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) qa.fromBufferAttribute(a, t), o && (Wa.fromBufferAttribute(e, t), qa.add(Wa)), r = Math.max(r, n.distanceToSquared(qa));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && R("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) return void R("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
		let n = t.position, r = t.normal, i = t.uv;
		!1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Oa(new Float32Array(4 * n.count), 4));
		let a = this.getAttribute("tangent"), o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new H(), s[e] = new H();
		let c = new H(), l = new H(), u = new H(), d = new V(), f = new V(), p = new V(), m = new H(), h = new H();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start;
			for (let t = r, i = r + n.count; t < i; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new H(), y = new H(), b = new H(), x = new H();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start;
			for (let t = r, i = r + n.count; t < i; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0) n = new Oa(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new H(), i = new H(), a = new H(), o = new H(), s = new H(), c = new H(), l = new H(), u = new H();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) qa.fromBufferAttribute(e, t), qa.normalize(), e.setXYZ(t, qa.x, qa.y, qa.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new Oa(a, r, i);
		}
		if (this.index === null) return L("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = t(i[e], r);
			n.setAttribute(e, a);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = t(o[e], r);
				i.push(n);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Ja = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = Xn, this.updateRanges = [], this.version = 0, this.uuid = jr();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		!0 === e && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = jr()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
		return n.setUsage(this.usage), n;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = jr()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		};
	}
}, Ya = new H(), Xa = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) Ya.fromBufferAttribute(this, t), Ya.applyMatrix4(e), this.setXYZ(t, Ya.x, Ya.y, Ya.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Ya.fromBufferAttribute(this, t), Ya.applyNormalMatrix(e), this.setXYZ(t, Ya.x, Ya.y, Ya.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Ya.fromBufferAttribute(this, t), Ya.transformDirection(e), this.setXYZ(t, Ya.x, Ya.y, Ya.z);
		return this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.data.stride + this.offset + t];
		return this.normalized && (n = Pr(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = B(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
	}
	setX(e, t) {
		return this.normalized && (t = B(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = B(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = B(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = B(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = Pr(t, this.array)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = B(t, this.array), n = B(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = B(t, this.array), n = B(n, this.array), r = B(r, this.array), i = B(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new Oa(new this.array.constructor(e), this.itemSize, this.normalized);
		}
		return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		}
		return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
}, Za = 0, Qa = class extends Er {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Za++ }), this.uuid = jr(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new K(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Dn, this.stencilZFail = Dn, this.stencilZPass = Dn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				L(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? L(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), !0 === this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), !1 === this.depthTest && (n.depthTest = this.depthTest), !1 === this.depthWrite && (n.depthWrite = this.depthWrite), !1 === this.colorWrite && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaHash && (n.alphaHash = !0), !0 === this.alphaToCoverage && (n.alphaToCoverage = !0), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0), !0 === this.forceSinglePass && (n.forceSinglePass = !0), !1 === this.allowOverride && (n.allowOverride = !1), !0 === this.wireframe && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		!0 === e && this.version++;
	}
}, $a = class extends Qa {
	constructor(e) {
		super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new K(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, eo = new H(), to = new H(), no = new H(), ro = new V(), io = new V(), ao = new G(), oo = new H(), so = new H(), co = new H(), lo = new V(), uo = new V(), fo = new V(), po = class extends Mi {
	constructor(e = new $a()) {
		if (super(), this.isSprite = !0, this.type = "Sprite", Ca === void 0) {
			Ca = new J();
			let e = new Ja(new Float32Array([
				-.5,
				-.5,
				0,
				0,
				0,
				.5,
				-.5,
				0,
				1,
				0,
				.5,
				.5,
				0,
				1,
				1,
				-.5,
				.5,
				0,
				0,
				1
			]), 5);
			Ca.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), Ca.setAttribute("position", new Xa(e, 3, 0, !1)), Ca.setAttribute("uv", new Xa(e, 2, 3, !1));
		}
		this.geometry = Ca, this.material = e, this.center = new V(.5, .5), this.count = 1;
	}
	raycast(e, t) {
		e.camera === null && R("Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites."), to.setFromMatrixScale(this.matrixWorld), ao.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), no.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && to.multiplyScalar(-no.z);
		let n = this.material.rotation, r, i;
		n !== 0 && (i = Math.cos(n), r = Math.sin(n));
		let a = this.center;
		mo(oo.set(-.5, -.5, 0), no, a, to, r, i), mo(so.set(.5, -.5, 0), no, a, to, r, i), mo(co.set(.5, .5, 0), no, a, to, r, i), lo.set(0, 0), uo.set(1, 0), fo.set(1, 1);
		let o = e.ray.intersectTriangle(oo, so, co, !1, eo);
		if (o === null && (mo(so.set(-.5, .5, 0), no, a, to, r, i), uo.set(0, 1), o = e.ray.intersectTriangle(oo, co, so, !1, eo), o === null)) return;
		let s = e.ray.origin.distanceTo(eo);
		s < e.near || s > e.far || t.push({
			distance: s,
			point: eo.clone(),
			uv: ra.getInterpolation(eo, oo, so, co, lo, uo, fo, new V()),
			face: null,
			object: this
		});
	}
	copy(e, t) {
		return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
	}
};
function mo(e, t, n, r, i, a) {
	ro.subVectors(e, n).addScalar(.5).multiply(r), i === void 0 ? io.copy(ro) : (io.x = a * ro.x - i * ro.y, io.y = i * ro.x + a * ro.y), e.copy(t), e.x += io.x, e.y += io.y, e.applyMatrix4(ao);
}
var ho = new H(), go = new H(), _o = class extends Mi {
	constructor() {
		super(), this.isLOD = !0, this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: {
			enumerable: !0,
			value: []
		} }), this.autoUpdate = !0;
	}
	copy(e) {
		super.copy(e, !1);
		let t = e.levels;
		for (let e = 0, n = t.length; e < n; e++) {
			let n = t[e];
			this.addLevel(n.object.clone(), n.distance, n.hysteresis);
		}
		return this.autoUpdate = e.autoUpdate, this;
	}
	addLevel(e, t = 0, n = 0) {
		t = Math.abs(t);
		let r = this.levels, i = 0;
		for (; i < r.length && !(t < r[i].distance); i++);
		return r.splice(i, 0, {
			distance: t,
			hysteresis: n,
			object: e
		}), this.add(e), this;
	}
	removeLevel(e) {
		let t = this.levels;
		for (let n = 0; n < t.length; n++) if (t[n].distance === e) {
			let e = t.splice(n, 1);
			return this.remove(e[0].object), !0;
		}
		return !1;
	}
	getCurrentLevel() {
		return this._currentLevel;
	}
	getObjectForDistance(e) {
		let t = this.levels;
		if (t.length > 0) {
			let n, r;
			for (n = 1, r = t.length; n < r; n++) {
				let r = t[n].distance;
				if (t[n].object.visible && (r -= r * t[n].hysteresis), e < r) break;
			}
			return t[n - 1].object;
		}
		return null;
	}
	raycast(e, t) {
		if (this.levels.length > 0) {
			ho.setFromMatrixPosition(this.matrixWorld);
			let n = e.ray.origin.distanceTo(ho);
			this.getObjectForDistance(n).raycast(e, t);
		}
	}
	update(e) {
		let t = this.levels;
		if (t.length > 1) {
			ho.setFromMatrixPosition(e.matrixWorld), go.setFromMatrixPosition(this.matrixWorld);
			let n = ho.distanceTo(go) / e.zoom, r, i;
			for (t[0].object.visible = !0, r = 1, i = t.length; r < i; r++) {
				let e = t[r].distance;
				if (t[r].object.visible && (e -= e * t[r].hysteresis), !(n >= e)) break;
				t[r - 1].object.visible = !1, t[r].object.visible = !0;
			}
			for (this._currentLevel = r - 1; r < i; r++) t[r].object.visible = !1;
		}
	}
	toJSON(e) {
		let t = super.toJSON(e);
		!1 === this.autoUpdate && (t.object.autoUpdate = !1), t.object.levels = [];
		let n = this.levels;
		for (let e = 0, r = n.length; e < r; e++) {
			let r = n[e];
			t.object.levels.push({
				object: r.object.uuid,
				distance: r.distance,
				hysteresis: r.hysteresis
			});
		}
		return t;
	}
}, vo = new H(), yo = new H(), bo = new H(), xo = new H(), So = new H(), Co = new H(), wo = new H(), To = class {
	constructor(e = new H(), t = new H(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, vo)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = vo.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (vo.copy(this.origin).addScaledVector(this.direction, t), vo.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		yo.copy(e).add(t).multiplyScalar(.5), bo.copy(t).sub(e).normalize(), xo.copy(this.origin).sub(yo);
		let i = .5 * e.distanceTo(t), a = -this.direction.dot(bo), o = xo.dot(this.direction), s = -xo.dot(bo), c = xo.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(yo).addScaledVector(bo, d), f;
	}
	intersectSphere(e, t) {
		vo.subVectors(e.center, this.origin);
		let n = vo.dot(this.direction), r = vo.dot(vo) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return !(e.radius < 0) && this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r ? null : ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, t)));
	}
	intersectsBox(e) {
		return this.intersectBox(e, vo) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		So.subVectors(t, e), Co.subVectors(n, e), wo.crossVectors(So, Co);
		let a, o = this.direction.dot(wo);
		if (o > 0) {
			if (r) return null;
			a = 1;
		} else {
			if (!(o < 0)) return null;
			a = -1, o = -o;
		}
		xo.subVectors(this.origin, e);
		let s = a * this.direction.dot(Co.crossVectors(xo, Co));
		if (s < 0) return null;
		let c = a * this.direction.dot(So.cross(xo));
		if (c < 0 || s + c > o) return null;
		let l = -a * xo.dot(wo);
		return l < 0 ? null : this.at(l / o, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Eo = class extends Qa {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new K(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hi(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Do = new G(), Oo = new To(), ko = new Ba(), Ao = new H(), jo = new H(), Mo = new H(), No = new H(), Po = new H(), Fo = new H(), Io = new H(), Lo = new H(), Ro = class extends Mi {
	constructor(e = new J(), t = new Eo()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			Fo.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Po.fromBufferAttribute(s, e), a ? Fo.addScaledVector(Po, r) : Fo.addScaledVector(Po.sub(t), r));
			}
			t.add(Fo);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		if (r !== void 0) {
			if (n.boundingSphere === null && n.computeBoundingSphere(), ko.copy(n.boundingSphere), ko.applyMatrix4(i), Oo.copy(e.ray).recast(e.near), !1 === ko.containsPoint(Oo.origin) && (Oo.intersectSphere(ko, Ao) === null || Oo.origin.distanceToSquared(Ao) > (e.far - e.near) ** 2)) return;
			Do.copy(i).invert(), Oo.copy(e.ray).applyMatrix4(Do), n.boundingBox !== null && !1 === Oo.intersectsBox(n.boundingBox) || this._computeIntersections(e, t, Oo);
		}
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex];
				for (let i = Math.max(s.start, f.start), a = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count)); i < a; i += 3) r = zo(this, p, e, n, c, l, u, o.getX(i), o.getX(i + 1), o.getX(i + 2)), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
			else for (let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count); i < s; i += 3) r = zo(this, a, e, n, c, l, u, o.getX(i), o.getX(i + 1), o.getX(i + 2)), r && (r.faceIndex = Math.floor(i / 3), t.push(r));
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex];
				for (let i = Math.max(o.start, f.start), a = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count)); i < a; i += 3) r = zo(this, p, e, n, c, l, u, i, i + 1, i + 2), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
			}
			else for (let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count); i < o; i += 3) r = zo(this, a, e, n, c, l, u, i, i + 1, i + 2), r && (r.faceIndex = Math.floor(i / 3), t.push(r));
		}
	}
};
function zo(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, jo), e.getVertexPosition(c, Mo), e.getVertexPosition(l, No);
	let u = function(e, t, n, r, i, a, o, s) {
		let c;
		if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
		Lo.copy(s), Lo.applyMatrix4(e.matrixWorld);
		let l = n.ray.origin.distanceTo(Lo);
		return l < n.near || l > n.far ? null : {
			distance: l,
			point: Lo.clone(),
			object: e
		};
	}(e, t, n, r, jo, Mo, No, Io);
	if (u) {
		let e = new H();
		ra.getBarycoord(Io, jo, Mo, No, e), i && (u.uv = ra.getInterpolatedAttribute(i, s, c, l, e, new V())), a && (u.uv1 = ra.getInterpolatedAttribute(a, s, c, l, e, new V())), o && (u.normal = ra.getInterpolatedAttribute(o, s, c, l, e, new H()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new H(),
			materialIndex: 0
		};
		ra.getNormal(jo, Mo, No, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Bo = new H(), Vo = new $r(), Ho = new $r(), Uo = new H(), Wo = new G(), Go = new H(), Ko = new Ba(), qo = new G(), Jo = new To(), Yo = class extends Ro {
	constructor(e, t) {
		super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = we, this.bindMatrix = new G(), this.bindMatrixInverse = new G(), this.boundingBox = null, this.boundingSphere = null;
	}
	computeBoundingBox() {
		let e = this.geometry;
		this.boundingBox === null && (this.boundingBox = new ia()), this.boundingBox.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Go), this.boundingBox.expandByPoint(Go);
	}
	computeBoundingSphere() {
		let e = this.geometry;
		this.boundingSphere === null && (this.boundingSphere = new Ba()), this.boundingSphere.makeEmpty();
		let t = e.getAttribute("position");
		for (let e = 0; e < t.count; e++) this.getVertexPosition(e, Go), this.boundingSphere.expandByPoint(Go);
	}
	copy(e, t) {
		return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
	}
	raycast(e, t) {
		let n = this.material, r = this.matrixWorld;
		n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ko.copy(this.boundingSphere), Ko.applyMatrix4(r), !1 !== e.ray.intersectsSphere(Ko) && (qo.copy(r).invert(), Jo.copy(e.ray).applyMatrix4(qo), this.boundingBox !== null && !1 === Jo.intersectsBox(this.boundingBox) || this._computeIntersections(e, t, Jo)));
	}
	getVertexPosition(e, t) {
		return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
	}
	bind(e, t) {
		this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
	}
	pose() {
		this.skeleton.pose();
	}
	normalizeSkinWeights() {
		let e = new $r(), t = this.geometry.attributes.skinWeight;
		for (let n = 0, r = t.count; n < r; n++) {
			e.fromBufferAttribute(t, n);
			let r = 1 / e.manhattanLength();
			r === 1 / 0 ? e.set(1, 0, 0, 0) : e.multiplyScalar(r), t.setXYZW(n, e.x, e.y, e.z, e.w);
		}
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : L("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
	}
	applyBoneTransform(e, t) {
		let n = this.skeleton, r = this.geometry;
		Vo.fromBufferAttribute(r.attributes.skinIndex, e), Ho.fromBufferAttribute(r.attributes.skinWeight, e), Bo.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
		for (let e = 0; e < 4; e++) {
			let r = Ho.getComponent(e);
			if (r !== 0) {
				let i = Vo.getComponent(e);
				Wo.multiplyMatrices(n.bones[i].matrixWorld, n.boneInverses[i]), t.addScaledVector(Uo.copy(Bo).applyMatrix4(Wo), r);
			}
		}
		return t.applyMatrix4(this.bindMatrixInverse);
	}
}, Xo = class extends Mi {
	constructor() {
		super(), this.isBone = !0, this.type = "Bone";
	}
}, Zo = class extends Qr {
	constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = 1003, l = 1003, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Qo = new G(), $o = new G(), es = class e {
	constructor(e = [], t = []) {
		this.uuid = jr(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.previousBoneMatrices = null, this.boneTexture = null, this.init();
	}
	init() {
		let e = this.bones, t = this.boneInverses;
		if (this.boneMatrices = new Float32Array(16 * e.length), t.length === 0) this.calculateInverses();
		else if (e.length !== t.length) {
			L("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
			for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new G());
		}
	}
	calculateInverses() {
		this.boneInverses.length = 0;
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = new G();
			this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t);
		}
	}
	pose() {
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && t.matrixWorld.copy(this.boneInverses[e]).invert();
		}
		for (let e = 0, t = this.bones.length; e < t; e++) {
			let t = this.bones[e];
			t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale));
		}
	}
	update() {
		let e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture;
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r] ? e[r].matrixWorld : $o;
			Qo.multiplyMatrices(i, t[r]), Qo.toArray(n, 16 * r);
		}
		r !== null && (r.needsUpdate = !0);
	}
	clone() {
		return new e(this.bones, this.boneInverses);
	}
	computeBoneTexture() {
		let e = Math.sqrt(4 * this.bones.length);
		e = 4 * Math.ceil(e / 4), e = Math.max(e, 4);
		let t = new Float32Array(e * e * 4);
		t.set(this.boneMatrices);
		let n = new Zo(t, e, e, at, Xe);
		return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
	}
	getBoneByName(e) {
		for (let t = 0, n = this.bones.length; t < n; t++) {
			let n = this.bones[t];
			if (n.name === e) return n;
		}
	}
	dispose() {
		this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
	}
	fromJSON(e, t) {
		this.uuid = e.uuid;
		for (let n = 0, r = e.bones.length; n < r; n++) {
			let r = e.bones[n], i = t[r];
			i === void 0 && (L("Skeleton: No bone found with UUID:", r), i = new Xo()), this.bones.push(i), this.boneInverses.push(new G().fromArray(e.boneInverses[n]));
		}
		return this.init(), this;
	}
	toJSON() {
		let e = {
			metadata: {
				version: 4.7,
				type: "Skeleton",
				generator: "Skeleton.toJSON"
			},
			bones: [],
			boneInverses: []
		};
		e.uuid = this.uuid;
		let t = this.bones, n = this.boneInverses;
		for (let r = 0, i = t.length; r < i; r++) {
			let i = t[r];
			e.bones.push(i.uuid);
			let a = n[r];
			e.boneInverses.push(a.toArray());
		}
		return e;
	}
}, ts = class extends Oa {
	constructor(e, t, n, r = 1) {
		super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
	}
}, ns = new G(), rs = new G(), is = [], as = new ia(), os = new G(), ss = new Ro(), cs = new Ba(), ls = class extends Ro {
	constructor(e, t, n) {
		super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ts(new Float32Array(16 * n), 16), this.previousInstanceMatrix = null, this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
		for (let e = 0; e < n; e++) this.setMatrixAt(e, os);
	}
	computeBoundingBox() {
		let e = this.geometry, t = this.count;
		this.boundingBox === null && (this.boundingBox = new ia()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, ns), as.copy(e.boundingBox).applyMatrix4(ns), this.boundingBox.union(as);
	}
	computeBoundingSphere() {
		let e = this.geometry, t = this.count;
		this.boundingSphere === null && (this.boundingSphere = new Ba()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
		for (let n = 0; n < t; n++) this.getMatrixAt(n, ns), cs.copy(e.boundingSphere).applyMatrix4(ns), this.boundingSphere.union(cs);
	}
	copy(e, t) {
		return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.previousInstanceMatrix !== null && (this.previousInstanceMatrix = e.previousInstanceMatrix.clone()), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
	}
	getColorAt(e, t) {
		t.fromArray(this.instanceColor.array, 3 * e);
	}
	getMatrixAt(e, t) {
		t.fromArray(this.instanceMatrix.array, 16 * e);
	}
	getMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = this.morphTexture.source.data.data, i = e * (n.length + 1) + 1;
		for (let e = 0; e < n.length; e++) n[e] = r[i + e];
	}
	raycast(e, t) {
		let n = this.matrixWorld, r = this.count;
		if (ss.geometry = this.geometry, ss.material = this.material, ss.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), cs.copy(this.boundingSphere), cs.applyMatrix4(n), !1 !== e.ray.intersectsSphere(cs))) for (let i = 0; i < r; i++) {
			this.getMatrixAt(i, ns), rs.multiplyMatrices(n, ns), ss.matrixWorld = rs, ss.raycast(e, is);
			for (let e = 0, n = is.length; e < n; e++) {
				let n = is[e];
				n.instanceId = i, n.object = this, t.push(n);
			}
			is.length = 0;
		}
	}
	setColorAt(e, t) {
		this.instanceColor === null && (this.instanceColor = new ts(new Float32Array(3 * this.instanceMatrix.count).fill(1), 3)), t.toArray(this.instanceColor.array, 3 * e);
	}
	setMatrixAt(e, t) {
		t.toArray(this.instanceMatrix.array, 16 * e);
	}
	setMorphAt(e, t) {
		let n = t.morphTargetInfluences, r = n.length + 1;
		this.morphTexture === null && (this.morphTexture = new Zo(new Float32Array(r * this.count), r, this.count, ct, Xe));
		let i = this.morphTexture.source.data.data, a = 0;
		for (let e = 0; e < n.length; e++) a += n[e];
		let o = this.geometry.morphTargetsRelative ? 1 : 1 - a, s = r * e;
		i[s] = o, i.set(n, s + 1);
	}
	updateMorphTargets() {}
	dispose() {
		this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
	}
}, us = new H(), ds = new H(), fs = new U(), ps = class {
	constructor(e = new H(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = us.subVectors(n, t).cross(ds.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t) {
		let n = e.delta(us), r = this.normal.dot(n);
		if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let i = -(e.start.dot(this.normal) + this.constant) / r;
		return i < 0 || i > 1 ? null : t.copy(e.start).addScaledVector(n, i);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || fs.getNormalMatrix(e), r = this.coplanarPoint(us).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ms = new Ba(), hs = new V(.5, .5), gs = new H(), _s = class {
	constructor(e = new ps(), t = new ps(), n = new ps(), r = new ps(), i = new ps(), a = new ps()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = 2e3, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else {
			if (t !== 2001) throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
			r[5].setComponents(s, d, h, y).normalize();
		}
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(ms);
	}
	intersectsSprite(e) {
		return ms.center.set(0, 0, 0), ms.radius = .7071067811865476 + hs.distanceTo(e.center), ms.applyMatrix4(e.matrixWorld), this.intersectsSphere(ms);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (gs.x = r.normal.x > 0 ? e.max.x : e.min.x, gs.y = r.normal.y > 0 ? e.max.y : e.min.y, gs.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(gs) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, vs = new G(), ys = new _s(), bs = class e {
	constructor() {
		this.coordinateSystem = sr;
	}
	intersectsObject(e, t) {
		if (!t.isArrayCamera || t.cameras.length === 0) return !1;
		for (let n = 0; n < t.cameras.length; n++) {
			let r = t.cameras[n];
			if (vs.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), ys.setFromProjectionMatrix(vs, r.coordinateSystem, r.reversedDepth), ys.intersectsObject(e)) return !0;
		}
		return !1;
	}
	intersectsSprite(e, t) {
		if (!t || !t.cameras || t.cameras.length === 0) return !1;
		for (let n = 0; n < t.cameras.length; n++) {
			let r = t.cameras[n];
			if (vs.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), ys.setFromProjectionMatrix(vs, r.coordinateSystem, r.reversedDepth), ys.intersectsSprite(e)) return !0;
		}
		return !1;
	}
	intersectsSphere(e, t) {
		if (!t || !t.cameras || t.cameras.length === 0) return !1;
		for (let n = 0; n < t.cameras.length; n++) {
			let r = t.cameras[n];
			if (vs.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), ys.setFromProjectionMatrix(vs, r.coordinateSystem, r.reversedDepth), ys.intersectsSphere(e)) return !0;
		}
		return !1;
	}
	intersectsBox(e, t) {
		if (!t || !t.cameras || t.cameras.length === 0) return !1;
		for (let n = 0; n < t.cameras.length; n++) {
			let r = t.cameras[n];
			if (vs.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), ys.setFromProjectionMatrix(vs, r.coordinateSystem, r.reversedDepth), ys.intersectsBox(e)) return !0;
		}
		return !1;
	}
	containsPoint(e, t) {
		if (!t || !t.cameras || t.cameras.length === 0) return !1;
		for (let n = 0; n < t.cameras.length; n++) {
			let r = t.cameras[n];
			if (vs.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), ys.setFromProjectionMatrix(vs, r.coordinateSystem, r.reversedDepth), ys.containsPoint(e)) return !0;
		}
		return !1;
	}
	clone() {
		return new e();
	}
};
function xs(e, t) {
	return e - t;
}
function Ss(e, t) {
	return e.z - t.z;
}
function Cs(e, t) {
	return t.z - e.z;
}
var ws = class {
	constructor() {
		this.index = 0, this.pool = [], this.list = [];
	}
	push(e, t, n, r) {
		let i = this.pool, a = this.list;
		this.index >= i.length && i.push({
			start: -1,
			count: -1,
			z: -1,
			index: -1
		});
		let o = i[this.index];
		a.push(o), this.index++, o.start = e, o.count = t, o.z = n, o.index = r;
	}
	reset() {
		this.list.length = 0, this.index = 0;
	}
}, Ts = new G(), Es = new K(1, 1, 1), Ds = new _s(), Os = new bs(), ks = new ia(), As = new Ba(), js = new H(), Ms = new H(), Ns = new H(), Ps = new ws(), Fs = new Ro(), Is = [];
function Ls(e, t, n = 0) {
	let r = t.itemSize;
	if (e.isInterleavedBufferAttribute || e.array.constructor !== t.array.constructor) {
		let i = e.count;
		for (let a = 0; a < i; a++) for (let i = 0; i < r; i++) t.setComponent(a + n, i, e.getComponent(a, i));
	} else t.array.set(e.array, n * r);
	t.needsUpdate = !0;
}
function Rs(e, t) {
	if (e.constructor !== t.constructor) {
		let n = Math.min(e.length, t.length);
		for (let r = 0; r < n; r++) t[r] = e[r];
	} else {
		let n = Math.min(e.length, t.length);
		t.set(new e.constructor(e.buffer, 0, n));
	}
}
var zs = class extends Ro {
	constructor(e, t, n = 2 * t, r) {
		super(new J(), r), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = !0, this._geometryInitialized = !1, this._maxInstanceCount = e, this._maxVertexCount = t, this._maxIndexCount = n, this._multiDrawCounts = new Int32Array(e), this._multiDrawStarts = new Int32Array(e), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
	}
	get maxInstanceCount() {
		return this._maxInstanceCount;
	}
	get instanceCount() {
		return this._instanceInfo.length - this._availableInstanceIds.length;
	}
	get unusedVertexCount() {
		return this._maxVertexCount - this._nextVertexStart;
	}
	get unusedIndexCount() {
		return this._maxIndexCount - this._nextIndexStart;
	}
	_initMatricesTexture() {
		let e = Math.sqrt(4 * this._maxInstanceCount);
		e = 4 * Math.ceil(e / 4), e = Math.max(e, 4);
		let t = new Zo(new Float32Array(e * e * 4), e, e, at, Xe);
		this._matricesTexture = t;
	}
	_initIndirectTexture() {
		let e = Math.sqrt(this._maxInstanceCount);
		e = Math.ceil(e);
		let t = new Zo(new Uint32Array(e * e), e, e, lt, Ye);
		this._indirectTexture = t;
	}
	_initColorsTexture() {
		let e = Math.sqrt(this._maxInstanceCount);
		e = Math.ceil(e);
		let t = new Zo(new Float32Array(e * e * 4).fill(1), e, e, at, Xe);
		t.colorSpace = W.workingColorSpace, this._colorsTexture = t;
	}
	_initializeGeometry(e) {
		let t = this.geometry, n = this._maxVertexCount, r = this._maxIndexCount;
		if (!1 === this._geometryInitialized) {
			for (let r in e.attributes) {
				let { array: i, itemSize: a, normalized: o } = e.getAttribute(r), s = new Oa(new i.constructor(n * a), a, o);
				t.setAttribute(r, s);
			}
			if (e.getIndex() !== null) {
				let e = n > 65535 ? new Uint32Array(r) : new Uint16Array(r);
				t.setIndex(new Oa(e, 1));
			}
			this._geometryInitialized = !0;
		}
	}
	_validateGeometry(e) {
		let t = this.geometry;
		if (!!e.getIndex() != !!t.getIndex()) throw Error("THREE.BatchedMesh: All geometries must consistently have \"index\".");
		for (let n in t.attributes) {
			if (!e.hasAttribute(n)) throw Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
			let r = e.getAttribute(n), i = t.getAttribute(n);
			if (r.itemSize !== i.itemSize || r.normalized !== i.normalized) throw Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
		}
	}
	validateInstanceId(e) {
		let t = this._instanceInfo;
		if (e < 0 || e >= t.length || !1 === t[e].active) throw Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`);
	}
	validateGeometryId(e) {
		let t = this._geometryInfo;
		if (e < 0 || e >= t.length || !1 === t[e].active) throw Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`);
	}
	setCustomSort(e) {
		return this.customSort = e, this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new ia());
		let e = this.boundingBox, t = this._instanceInfo;
		e.makeEmpty();
		for (let n = 0, r = t.length; n < r; n++) {
			if (!1 === t[n].active) continue;
			let r = t[n].geometryIndex;
			this.getMatrixAt(n, Ts), this.getBoundingBoxAt(r, ks).applyMatrix4(Ts), e.union(ks);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Ba());
		let e = this.boundingSphere, t = this._instanceInfo;
		e.makeEmpty();
		for (let n = 0, r = t.length; n < r; n++) {
			if (!1 === t[n].active) continue;
			let r = t[n].geometryIndex;
			this.getMatrixAt(n, Ts), this.getBoundingSphereAt(r, As).applyMatrix4(Ts), e.union(As);
		}
	}
	addInstance(e) {
		if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0) throw Error("THREE.BatchedMesh: Maximum item count reached.");
		let t = {
			visible: !0,
			active: !0,
			geometryIndex: e
		}, n = null;
		this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(xs), n = this._availableInstanceIds.shift(), this._instanceInfo[n] = t) : (n = this._instanceInfo.length, this._instanceInfo.push(t));
		let r = this._matricesTexture;
		Ts.identity().toArray(r.image.data, 16 * n), r.needsUpdate = !0;
		let i = this._colorsTexture;
		return i && (Es.toArray(i.image.data, 4 * n), i.needsUpdate = !0), this._visibilityChanged = !0, n;
	}
	addGeometry(e, t = -1, n = -1) {
		this._initializeGeometry(e), this._validateGeometry(e);
		let r = {
			vertexStart: -1,
			vertexCount: -1,
			reservedVertexCount: -1,
			indexStart: -1,
			indexCount: -1,
			reservedIndexCount: -1,
			start: -1,
			count: -1,
			boundingBox: null,
			boundingSphere: null,
			active: !0
		}, i = this._geometryInfo;
		r.vertexStart = this._nextVertexStart, r.reservedVertexCount = t === -1 ? e.getAttribute("position").count : t;
		let a = e.getIndex();
		if (a !== null && (r.indexStart = this._nextIndexStart, r.reservedIndexCount = n === -1 ? a.count : n), r.indexStart !== -1 && r.indexStart + r.reservedIndexCount > this._maxIndexCount || r.vertexStart + r.reservedVertexCount > this._maxVertexCount) throw Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");
		let o;
		return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(xs), o = this._availableGeometryIds.shift(), i[o] = r) : (o = this._geometryCount, this._geometryCount++, i.push(r)), this.setGeometryAt(o, e), this._nextIndexStart = r.indexStart + r.reservedIndexCount, this._nextVertexStart = r.vertexStart + r.reservedVertexCount, o;
	}
	setGeometryAt(e, t) {
		if (e >= this._geometryCount) throw Error("THREE.BatchedMesh: Maximum geometry count reached.");
		this._validateGeometry(t);
		let n = this.geometry, r = n.getIndex() !== null, i = n.getIndex(), a = t.getIndex(), o = this._geometryInfo[e];
		if (r && a.count > o.reservedIndexCount || t.attributes.position.count > o.reservedVertexCount) throw Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");
		let s = o.vertexStart, c = o.reservedVertexCount;
		o.vertexCount = t.getAttribute("position").count;
		for (let e in n.attributes) {
			let r = t.getAttribute(e), i = n.getAttribute(e);
			Ls(r, i, s);
			let a = r.itemSize;
			for (let e = r.count, t = c; e < t; e++) {
				let t = s + e;
				for (let e = 0; e < a; e++) i.setComponent(t, e, 0);
			}
			i.needsUpdate = !0, i.addUpdateRange(s * a, c * a);
		}
		if (r) {
			let e = o.indexStart, n = o.reservedIndexCount;
			o.indexCount = t.getIndex().count;
			for (let t = 0; t < a.count; t++) i.setX(e + t, s + a.getX(t));
			for (let t = a.count, r = n; t < r; t++) i.setX(e + t, s);
			i.needsUpdate = !0, i.addUpdateRange(e, o.reservedIndexCount);
		}
		return o.start = r ? o.indexStart : o.vertexStart, o.count = r ? o.indexCount : o.vertexCount, o.boundingBox = null, t.boundingBox !== null && (o.boundingBox = t.boundingBox.clone()), o.boundingSphere = null, t.boundingSphere !== null && (o.boundingSphere = t.boundingSphere.clone()), this._visibilityChanged = !0, e;
	}
	deleteGeometry(e) {
		let t = this._geometryInfo;
		if (e >= t.length || !1 === t[e].active) return this;
		let n = this._instanceInfo;
		for (let t = 0, r = n.length; t < r; t++) n[t].active && n[t].geometryIndex === e && this.deleteInstance(t);
		return t[e].active = !1, this._availableGeometryIds.push(e), this._visibilityChanged = !0, this;
	}
	deleteInstance(e) {
		return this.validateInstanceId(e), this._instanceInfo[e].active = !1, this._availableInstanceIds.push(e), this._visibilityChanged = !0, this;
	}
	optimize() {
		let e = 0, t = 0, n = this._geometryInfo, r = n.map((e, t) => t).sort((e, t) => n[e].vertexStart - n[t].vertexStart), i = this.geometry;
		for (let a = 0, o = n.length; a < o; a++) {
			let o = n[r[a]];
			if (!1 !== o.active) {
				if (i.index !== null) {
					if (o.indexStart !== t) {
						let { indexStart: n, vertexStart: r, reservedIndexCount: a } = o, s = i.index, c = s.array, l = e - r;
						for (let e = n; e < n + a; e++) c[e] = c[e] + l;
						s.array.copyWithin(t, n, n + a), s.addUpdateRange(t, a), s.needsUpdate = !0, o.indexStart = t;
					}
					t += o.reservedIndexCount;
				}
				if (o.vertexStart !== e) {
					let { vertexStart: t, reservedVertexCount: n } = o, r = i.attributes;
					for (let i in r) {
						let a = r[i], { array: o, itemSize: s } = a;
						o.copyWithin(e * s, t * s, (t + n) * s), a.addUpdateRange(e * s, n * s), a.needsUpdate = !0;
					}
					o.vertexStart = e;
				}
				e += o.reservedVertexCount, o.start = i.index ? o.indexStart : o.vertexStart;
			}
		}
		return this._nextIndexStart = t, this._nextVertexStart = e, this._visibilityChanged = !0, this;
	}
	getBoundingBoxAt(e, t) {
		if (e >= this._geometryCount) return null;
		let n = this.geometry, r = this._geometryInfo[e];
		if (r.boundingBox === null) {
			let e = new ia(), t = n.index, i = n.attributes.position;
			for (let n = r.start, a = r.start + r.count; n < a; n++) {
				let r = n;
				t && (r = t.getX(r)), e.expandByPoint(js.fromBufferAttribute(i, r));
			}
			r.boundingBox = e;
		}
		return t.copy(r.boundingBox), t;
	}
	getBoundingSphereAt(e, t) {
		if (e >= this._geometryCount) return null;
		let n = this.geometry, r = this._geometryInfo[e];
		if (r.boundingSphere === null) {
			let t = new Ba();
			this.getBoundingBoxAt(e, ks), ks.getCenter(t.center);
			let i = n.index, a = n.attributes.position, o = 0;
			for (let e = r.start, n = r.start + r.count; e < n; e++) {
				let n = e;
				i && (n = i.getX(n)), js.fromBufferAttribute(a, n), o = Math.max(o, t.center.distanceToSquared(js));
			}
			t.radius = Math.sqrt(o), r.boundingSphere = t;
		}
		return t.copy(r.boundingSphere), t;
	}
	setMatrixAt(e, t) {
		this.validateInstanceId(e);
		let n = this._matricesTexture, r = this._matricesTexture.image.data;
		return t.toArray(r, 16 * e), n.needsUpdate = !0, this;
	}
	getMatrixAt(e, t) {
		return this.validateInstanceId(e), t.fromArray(this._matricesTexture.image.data, 16 * e);
	}
	setColorAt(e, t) {
		return this.validateInstanceId(e), this._colorsTexture === null && this._initColorsTexture(), t.toArray(this._colorsTexture.image.data, 4 * e), this._colorsTexture.needsUpdate = !0, this;
	}
	getColorAt(e, t) {
		return this.validateInstanceId(e), t.fromArray(this._colorsTexture.image.data, 4 * e);
	}
	setVisibleAt(e, t) {
		return this.validateInstanceId(e), this._instanceInfo[e].visible === t || (this._instanceInfo[e].visible = t, this._visibilityChanged = !0), this;
	}
	getVisibleAt(e) {
		return this.validateInstanceId(e), this._instanceInfo[e].visible;
	}
	setGeometryIdAt(e, t) {
		return this.validateInstanceId(e), this.validateGeometryId(t), this._instanceInfo[e].geometryIndex = t, this;
	}
	getGeometryIdAt(e) {
		return this.validateInstanceId(e), this._instanceInfo[e].geometryIndex;
	}
	getGeometryRangeAt(e, t = {}) {
		this.validateGeometryId(e);
		let n = this._geometryInfo[e];
		return t.vertexStart = n.vertexStart, t.vertexCount = n.vertexCount, t.reservedVertexCount = n.reservedVertexCount, t.indexStart = n.indexStart, t.indexCount = n.indexCount, t.reservedIndexCount = n.reservedIndexCount, t.start = n.start, t.count = n.count, t;
	}
	setInstanceCount(e) {
		let t = this._availableInstanceIds, n = this._instanceInfo;
		for (t.sort(xs); t[t.length - 1] === n.length - 1;) n.pop(), t.pop();
		if (e < n.length) throw Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);
		let r = new Int32Array(e), i = new Int32Array(e);
		Rs(this._multiDrawCounts, r), Rs(this._multiDrawStarts, i), this._multiDrawCounts = r, this._multiDrawStarts = i, this._maxInstanceCount = e;
		let a = this._indirectTexture, o = this._matricesTexture, s = this._colorsTexture;
		a.dispose(), this._initIndirectTexture(), Rs(a.image.data, this._indirectTexture.image.data), o.dispose(), this._initMatricesTexture(), Rs(o.image.data, this._matricesTexture.image.data), s && (s.dispose(), this._initColorsTexture(), Rs(s.image.data, this._colorsTexture.image.data));
	}
	setGeometrySize(e, t) {
		let n = [...this._geometryInfo].filter((e) => e.active);
		if (Math.max(...n.map((e) => e.vertexStart + e.reservedVertexCount)) > e) throw Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);
		if (this.geometry.index && Math.max(...n.map((e) => e.indexStart + e.reservedIndexCount)) > t) throw Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);
		let r = this.geometry;
		r.dispose(), this._maxVertexCount = e, this._maxIndexCount = t, this._geometryInitialized && (this._geometryInitialized = !1, this.geometry = new J(), this._initializeGeometry(r));
		let i = this.geometry;
		r.index && Rs(r.index.array, i.index.array);
		for (let e in r.attributes) Rs(r.attributes[e].array, i.attributes[e].array);
	}
	raycast(e, t) {
		let n = this._instanceInfo, r = this._geometryInfo, i = this.matrixWorld, a = this.geometry;
		Fs.material = this.material, Fs.geometry.index = a.index, Fs.geometry.attributes = a.attributes, Fs.geometry.boundingBox === null && (Fs.geometry.boundingBox = new ia()), Fs.geometry.boundingSphere === null && (Fs.geometry.boundingSphere = new Ba());
		for (let a = 0, o = n.length; a < o; a++) {
			if (!n[a].visible || !n[a].active) continue;
			let o = n[a].geometryIndex, s = r[o];
			Fs.geometry.setDrawRange(s.start, s.count), this.getMatrixAt(a, Fs.matrixWorld).premultiply(i), this.getBoundingBoxAt(o, Fs.geometry.boundingBox), this.getBoundingSphereAt(o, Fs.geometry.boundingSphere), Fs.raycast(e, Is);
			for (let e = 0, n = Is.length; e < n; e++) {
				let n = Is[e];
				n.object = this, n.batchId = a, t.push(n);
			}
			Is.length = 0;
		}
		Fs.material = null, Fs.geometry.index = null, Fs.geometry.attributes = {}, Fs.geometry.setDrawRange(0, 1 / 0);
	}
	copy(e) {
		return super.copy(e), this.geometry = e.geometry.clone(), this.perObjectFrustumCulled = e.perObjectFrustumCulled, this.sortObjects = e.sortObjects, this.boundingBox = e.boundingBox === null ? null : e.boundingBox.clone(), this.boundingSphere = e.boundingSphere === null ? null : e.boundingSphere.clone(), this._geometryInfo = e._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox === null ? null : e.boundingBox.clone(),
			boundingSphere: e.boundingSphere === null ? null : e.boundingSphere.clone()
		})), this._instanceInfo = e._instanceInfo.map((e) => ({ ...e })), this._availableInstanceIds = e._availableInstanceIds.slice(), this._availableGeometryIds = e._availableGeometryIds.slice(), this._nextIndexStart = e._nextIndexStart, this._nextVertexStart = e._nextVertexStart, this._geometryCount = e._geometryCount, this._maxInstanceCount = e._maxInstanceCount, this._maxVertexCount = e._maxVertexCount, this._maxIndexCount = e._maxIndexCount, this._geometryInitialized = e._geometryInitialized, this._multiDrawCounts = e._multiDrawCounts.slice(), this._multiDrawStarts = e._multiDrawStarts.slice(), this._indirectTexture = e._indirectTexture.clone(), this._indirectTexture.image.data = this._indirectTexture.image.data.slice(), this._matricesTexture = e._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = e._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
	}
	dispose() {
		this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null);
	}
	onBeforeRender(e, t, n, r, i) {
		if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return;
		let a = r.getIndex(), o = a === null ? 1 : a.array.BYTES_PER_ELEMENT, s = 1;
		i.wireframe && (s = 2, o = r.attributes.position.count > 65535 ? 4 : 2);
		let c = this._instanceInfo, l = this._multiDrawStarts, u = this._multiDrawCounts, d = this._geometryInfo, f = this.perObjectFrustumCulled, p = this._indirectTexture, m = p.image.data, h = n.isArrayCamera ? Os : Ds;
		f && !n.isArrayCamera && (Ts.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), Ds.setFromProjectionMatrix(Ts, n.coordinateSystem, n.reversedDepth));
		let g = 0;
		if (this.sortObjects) {
			Ts.copy(this.matrixWorld).invert(), js.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ts), Ms.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(Ts);
			for (let e = 0, t = c.length; e < t; e++) if (c[e].visible && c[e].active) {
				let t = c[e].geometryIndex;
				this.getMatrixAt(e, Ts), this.getBoundingSphereAt(t, As).applyMatrix4(Ts);
				let r = !1;
				if (f && (r = !h.intersectsSphere(As, n)), !r) {
					let n = d[t], r = Ns.subVectors(As.center, js).dot(Ms);
					Ps.push(n.start, n.count, r, e);
				}
			}
			let e = Ps.list, t = this.customSort;
			t === null ? e.sort(i.transparent ? Cs : Ss) : t.call(this, e, n);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				l[g] = n.start * o * s, u[g] = n.count * s, m[g] = n.index, g++;
			}
			Ps.reset();
		} else for (let e = 0, t = c.length; e < t; e++) if (c[e].visible && c[e].active) {
			let t = c[e].geometryIndex, r = !1;
			if (f && (this.getMatrixAt(e, Ts), this.getBoundingSphereAt(t, As).applyMatrix4(Ts), r = !h.intersectsSphere(As, n)), !r) {
				let n = d[t];
				l[g] = n.start * o * s, u[g] = n.count * s, m[g] = e, g++;
			}
		}
		p.needsUpdate = !0, this._multiDrawCount = g, this._visibilityChanged = !1;
	}
	onBeforeShadow(e, t, n, r, i, a) {
		this.onBeforeRender(e, null, r, i, a);
	}
}, Bs = class extends Qa {
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new K(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, Vs = new H(), Hs = new H(), Us = new G(), Ws = new To(), Gs = new Ba(), Ks = new H(), qs = new H(), Js = class extends Mi {
	constructor(e = new J(), t = new Bs()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) Vs.fromBufferAttribute(t, e - 1), Hs.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Vs.distanceTo(Hs);
			e.setAttribute("lineDistance", new q(n, 1));
		} else L("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Gs.copy(n.boundingSphere), Gs.applyMatrix4(r), Gs.radius += i, !1 === e.ray.intersectsSphere(Gs)) return;
		Us.copy(r).invert(), Ws.copy(e.ray).applyMatrix4(Us);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
		if (l !== null) {
			let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = l.getX(i), r = l.getX(i + 1), a = Ys(this, e, Ws, s, n, r, i);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = l.getX(r - 1), a = l.getX(n), o = Ys(this, e, Ws, s, i, a, r - 1);
				o && t.push(o);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = Ys(this, e, Ws, s, i, i + 1, i);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = Ys(this, e, Ws, s, r - 1, n, r - 1);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function Ys(e, t, n, r, i, a, o) {
	let s = e.geometry.attributes.position;
	if (Vs.fromBufferAttribute(s, i), Hs.fromBufferAttribute(s, a), n.distanceSqToSegment(Vs, Hs, Ks, qs) > r) return;
	Ks.applyMatrix4(e.matrixWorld);
	let c = t.ray.origin.distanceTo(Ks);
	return c < t.near || c > t.far ? void 0 : {
		distance: c,
		point: qs.clone().applyMatrix4(e.matrixWorld),
		index: o,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var Xs = new H(), Zs = new H(), Qs = class extends Js {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) Xs.fromBufferAttribute(t, e), Zs.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + Xs.distanceTo(Zs);
			e.setAttribute("lineDistance", new q(n, 1));
		} else L("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, $s = class extends Js {
	constructor(e, t) {
		super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
	}
}, ec = class extends Qa {
	constructor(e) {
		super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new K(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, tc = new G(), nc = new To(), rc = new Ba(), ic = new H(), ac = class extends Mi {
	constructor(e = new J(), t = new ec()) {
		super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), rc.copy(n.boundingSphere), rc.applyMatrix4(r), rc.radius += i, !1 === e.ray.intersectsSphere(rc)) return;
		tc.copy(r).invert(), nc.copy(e.ray).applyMatrix4(tc);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = n.index, l = n.attributes.position;
		if (c !== null) for (let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count); n < i; n++) {
			let i = c.getX(n);
			ic.fromBufferAttribute(l, i), oc(ic, i, s, r, e, t, this);
		}
		else for (let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count); n < i; n++) ic.fromBufferAttribute(l, n), oc(ic, n, s, r, e, t, this);
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function oc(e, t, n, r, i, a, o) {
	let s = nc.distanceSqToPoint(e);
	if (s < n) {
		let n = new H();
		nc.closestPointToPoint(e, n), n.applyMatrix4(r);
		let c = i.ray.origin.distanceTo(n);
		if (c < i.near || c > i.far) return;
		a.push({
			distance: c,
			distanceToRay: Math.sqrt(s),
			point: n,
			index: t,
			face: null,
			faceIndex: null,
			barycoord: null,
			object: o
		});
	}
}
var sc = class extends Qr {
	constructor(e, t, n, r, i = 1006, a = 1006, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isVideoTexture = !0, this.generateMipmaps = !1, this._requestVideoFrameCallbackId = 0;
		let l = this;
		"requestVideoFrameCallback" in e && (this._requestVideoFrameCallbackId = e.requestVideoFrameCallback(function t() {
			l.needsUpdate = !0, l._requestVideoFrameCallbackId = e.requestVideoFrameCallback(t);
		}));
	}
	clone() {
		return new this.constructor(this.image).copy(this);
	}
	update() {
		let e = this.image;
		"requestVideoFrameCallback" in e == 0 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
	}
	dispose() {
		this._requestVideoFrameCallbackId !== 0 && (this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId), this._requestVideoFrameCallbackId = 0), super.dispose();
	}
}, cc = class extends sc {
	constructor(e, t, n, r, i, a, o, s) {
		super({}, e, t, n, r, i, a, o, s), this.isVideoFrameTexture = !0;
	}
	update() {}
	clone() {
		return new this.constructor().copy(this);
	}
	setFrame(e) {
		this.image = e, this.needsUpdate = !0;
	}
}, lc = class extends Qr {
	constructor(e, t) {
		super({
			width: e,
			height: t
		}), this.isFramebufferTexture = !0, this.magFilter = Fe, this.minFilter = Fe, this.generateMipmaps = !1, this.needsUpdate = !0;
	}
}, uc = class extends Qr {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isCompressedTexture = !0, this.image = {
			width: t,
			height: n
		}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
	}
}, dc = class extends uc {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, i, a), this.isCompressedArrayTexture = !0, this.image.depth = r, this.wrapR = Ne, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, fc = class extends uc {
	constructor(e, t, n) {
		super(void 0, e[0].width, e[0].height, t, n, 301), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = e;
	}
}, pc = class extends Qr {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, mc = class extends Qr {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, hc = class extends Qr {
	constructor(e, t, n = 1014, r, i, a, o = 1003, s = 1003, c, l = 1026, u = 1) {
		if (l !== 1026 && l !== 1027) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: u
		}, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Jr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, gc = class extends hc {
	constructor(e, t = 1014, n = 301, r, i, a = 1003, o = 1003, s, c = 1026) {
		let l = {
			width: e,
			height: e,
			depth: 1
		}, u = [
			l,
			l,
			l,
			l,
			l,
			l
		];
		super(e, e, t, n, r, i, a, o, s, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, _c = class extends Qr {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, vc = class e extends J {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new H();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new q(c, 3)), this.setAttribute("normal", new q(l, 3)), this.setAttribute("uv", new q(u, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, yc = class e extends J {
	constructor(e = 1, t = 1, n = 4, r = 8, i = 1) {
		super(), this.type = "CapsuleGeometry", this.parameters = {
			radius: e,
			height: t,
			capSegments: n,
			radialSegments: r,
			heightSegments: i
		}, t = Math.max(0, t), n = Math.max(1, Math.floor(n)), r = Math.max(3, Math.floor(r)), i = Math.max(1, Math.floor(i));
		let a = [], o = [], s = [], c = [], l = t / 2, u = Math.PI / 2 * e, d = t, f = 2 * u + d, p = 2 * n + i, m = r + 1, h = new H(), g = new H();
		for (let _ = 0; _ <= p; _++) {
			let v = 0, y = 0, b = 0, x = 0;
			if (_ <= n) {
				let t = _ / n, r = t * Math.PI / 2;
				y = -l - e * Math.cos(r), b = e * Math.sin(r), x = -e * Math.cos(r), v = t * u;
			} else if (_ <= n + i) {
				let r = (_ - n) / i;
				y = r * t - l, b = e, x = 0, v = u + r * d;
			} else {
				let t = (_ - n - i) / n, r = t * Math.PI / 2;
				y = l + e * Math.sin(r), b = e * Math.cos(r), x = e * Math.sin(r), v = u + d + t * u;
			}
			let S = Math.max(0, Math.min(1, v / f)), C = 0;
			_ === 0 ? C = .5 / r : _ === p && (C = -.5 / r);
			for (let e = 0; e <= r; e++) {
				let t = e / r, n = t * Math.PI * 2, i = Math.sin(n), a = Math.cos(n);
				g.x = -b * a, g.y = y, g.z = b * i, o.push(g.x, g.y, g.z), h.set(-b * a, x, b * i), h.normalize(), s.push(h.x, h.y, h.z), c.push(t + C, S);
			}
			if (_ > 0) {
				let e = (_ - 1) * m;
				for (let t = 0; t < r; t++) {
					let n = e + t, r = e + t + 1, i = _ * m + t, o = _ * m + t + 1;
					a.push(n, r, i), a.push(r, o, i);
				}
			}
		}
		this.setIndex(a), this.setAttribute("position", new q(o, 3)), this.setAttribute("normal", new q(s, 3)), this.setAttribute("uv", new q(c, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.capSegments, t.radialSegments, t.heightSegments);
	}
}, bc = class e extends J {
	constructor(e = 1, t = 32, n = 0, r = 2 * Math.PI) {
		super(), this.type = "CircleGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: n,
			thetaLength: r
		}, t = Math.max(3, t);
		let i = [], a = [], o = [], s = [], c = new H(), l = new V();
		a.push(0, 0, 0), o.push(0, 0, 1), s.push(.5, .5);
		for (let i = 0, u = 3; i <= t; i++, u += 3) {
			let d = n + i / t * r;
			c.x = e * Math.cos(d), c.y = e * Math.sin(d), a.push(c.x, c.y, c.z), o.push(0, 0, 1), l.x = (a[u] / e + 1) / 2, l.y = (a[u + 1] / e + 1) / 2, s.push(l.x, l.y);
		}
		for (let e = 1; e <= t; e++) i.push(e, e + 1, 0);
		this.setIndex(i), this.setAttribute("position", new q(a, 3)), this.setAttribute("normal", new q(o, 3)), this.setAttribute("uv", new q(s, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.segments, t.thetaStart, t.thetaLength);
	}
}, xc = class e extends J {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = 2 * Math.PI) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		function _(n) {
			let i = p, a = new V(), m = new H(), _ = 0, v = !0 === n ? e : t, y = !0 === n ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = .5 * n + .5, a.y = .5 * i * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				!0 === n ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, !0 === n ? 1 : 2), g += _;
		}
		(function() {
			let a = new H(), _ = new H(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		})(), !1 === a && (e > 0 && _(!0), t > 0 && _(!1)), this.setIndex(l), this.setAttribute("position", new q(u, 3)), this.setAttribute("normal", new q(d, 3)), this.setAttribute("uv", new q(f, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Sc = class e extends xc {
	constructor(e = 1, t = 1, n = 32, r = 1, i = !1, a = 0, o = 2 * Math.PI) {
		super(0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Cc = class e extends J {
	constructor(e = [], t = [], n = 1, r = 0) {
		super(), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		};
		let i = [], a = [];
		function o(e, t, n, r) {
			let i = r + 1, a = [];
			for (let r = 0; r <= i; r++) {
				a[r] = [];
				let o = e.clone().lerp(n, r / i), s = t.clone().lerp(n, r / i), c = i - r;
				for (let e = 0; e <= c; e++) a[r][e] = e === 0 && r === i ? o : o.clone().lerp(s, e / c);
			}
			for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
				let n = Math.floor(t / 2);
				t % 2 == 0 ? (s(a[e][n + 1]), s(a[e + 1][n]), s(a[e][n])) : (s(a[e][n + 1]), s(a[e + 1][n + 1]), s(a[e + 1][n]));
			}
		}
		function s(e) {
			i.push(e.x, e.y, e.z);
		}
		function c(t, n) {
			let r = 3 * t;
			n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
		}
		function l(e, t, n, r) {
			r < 0 && e.x === 1 && (a[t] = e.x - 1), n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + .5);
		}
		function u(e) {
			return Math.atan2(e.z, -e.x);
		}
		function d(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
		}
		(function(e) {
			let n = new H(), r = new H(), i = new H();
			for (let a = 0; a < t.length; a += 3) c(t[a + 0], n), c(t[a + 1], r), c(t[a + 2], i), o(n, r, i, e);
		})(r), function(e) {
			let t = new H();
			for (let n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z;
		}(n), function() {
			let e = new H();
			for (let t = 0; t < i.length; t += 3) {
				e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
				let n = u(e) / 2 / Math.PI + .5, r = d(e) / Math.PI + .5;
				a.push(n, 1 - r);
			}
			(function() {
				let e = new H(), t = new H(), n = new H(), r = new H(), o = new V(), s = new V(), c = new V();
				for (let d = 0, f = 0; d < i.length; d += 9, f += 6) {
					e.set(i[d + 0], i[d + 1], i[d + 2]), t.set(i[d + 3], i[d + 4], i[d + 5]), n.set(i[d + 6], i[d + 7], i[d + 8]), o.set(a[f + 0], a[f + 1]), s.set(a[f + 2], a[f + 3]), c.set(a[f + 4], a[f + 5]), r.copy(e).add(t).add(n).divideScalar(3);
					let p = u(r);
					l(o, f + 0, e, p), l(s, f + 2, t, p), l(c, f + 4, n, p);
				}
			})(), function() {
				for (let e = 0; e < a.length; e += 6) {
					let t = a[e + 0], n = a[e + 2], r = a[e + 4];
					Math.max(t, n, r) > .9 && Math.min(t, n, r) < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1));
				}
			}();
		}(), this.setAttribute("position", new q(i, 3)), this.setAttribute("normal", new q(i.slice(), 3)), this.setAttribute("uv", new q(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.vertices, t.indices, t.radius, t.detail);
	}
}, wc = class e extends Cc {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2, r = 1 / n;
		super([
			-1,
			-1,
			-1,
			-1,
			-1,
			1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			1,
			-1,
			1,
			1,
			1,
			0,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			-r,
			-n,
			0,
			-r,
			n,
			0,
			r,
			-n,
			0,
			r,
			n,
			0,
			-n,
			0,
			-r,
			n,
			0,
			-r,
			-n,
			0,
			r,
			n,
			0,
			r
		], [
			3,
			11,
			7,
			3,
			7,
			15,
			3,
			15,
			13,
			7,
			19,
			17,
			7,
			17,
			6,
			7,
			6,
			15,
			17,
			4,
			8,
			17,
			8,
			10,
			17,
			10,
			6,
			8,
			0,
			16,
			8,
			16,
			2,
			8,
			2,
			10,
			0,
			12,
			1,
			0,
			1,
			18,
			0,
			18,
			16,
			6,
			10,
			2,
			6,
			2,
			13,
			6,
			13,
			15,
			2,
			16,
			18,
			2,
			18,
			3,
			2,
			3,
			13,
			18,
			1,
			9,
			18,
			9,
			11,
			18,
			11,
			3,
			4,
			14,
			12,
			4,
			12,
			0,
			4,
			0,
			8,
			11,
			9,
			5,
			11,
			5,
			19,
			11,
			19,
			7,
			19,
			5,
			14,
			19,
			14,
			4,
			19,
			4,
			17,
			1,
			12,
			14,
			1,
			14,
			5,
			1,
			5,
			9
		], e, t), this.type = "DodecahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Tc = new H(), Ec = new H(), Dc = new H(), Oc = new ra(), kc = class extends J {
	constructor(e = null, t = 1) {
		if (super(), this.type = "EdgesGeometry", this.parameters = {
			geometry: e,
			thresholdAngle: t
		}, e !== null) {
			let n = 1e4, r = Math.cos(kr * t), i = e.getIndex(), a = e.getAttribute("position"), o = i ? i.count : a.count, s = [
				0,
				0,
				0
			], c = [
				"a",
				"b",
				"c"
			], l = [
				,
				,
				,
			], u = {}, d = [];
			for (let e = 0; e < o; e += 3) {
				i ? (s[0] = i.getX(e), s[1] = i.getX(e + 1), s[2] = i.getX(e + 2)) : (s[0] = e, s[1] = e + 1, s[2] = e + 2);
				let { a: t, b: o, c: f } = Oc;
				if (t.fromBufferAttribute(a, s[0]), o.fromBufferAttribute(a, s[1]), f.fromBufferAttribute(a, s[2]), Oc.getNormal(Dc), l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`, l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`, l[0] !== l[1] && l[1] !== l[2] && l[2] !== l[0]) for (let e = 0; e < 3; e++) {
					let t = (e + 1) % 3, n = l[e], i = l[t], a = Oc[c[e]], o = Oc[c[t]], f = `${n}_${i}`, p = `${i}_${n}`;
					p in u && u[p] ? (Dc.dot(u[p].normal) <= r && (d.push(a.x, a.y, a.z), d.push(o.x, o.y, o.z)), u[p] = null) : f in u || (u[f] = {
						index0: s[e],
						index1: s[t],
						normal: Dc.clone()
					});
				}
			}
			for (let e in u) if (u[e]) {
				let { index0: t, index1: n } = u[e];
				Tc.fromBufferAttribute(a, t), Ec.fromBufferAttribute(a, n), d.push(Tc.x, Tc.y, Tc.z), d.push(Ec.x, Ec.y, Ec.z);
			}
			this.setAttribute("position", new q(d, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
}, Ac = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
	}
	getPoint() {
		L("Curve: .getPoint() not implemented.");
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t = null) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let o, s = 0, c = i - 1;
		for (; s <= c;) if (r = Math.floor(s + (c - s) / 2), o = n[r] - a, o < 0) s = r + 1;
		else {
			if (!(o > 0)) {
				c = r;
				break;
			}
			c = r - 1;
		}
		if (r = c, n[r] === a) return r / (i - 1);
		let l = n[r];
		return (r + (a - l) / (n[r + 1] - l)) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new V() : new H());
		return s.copy(o).sub(a).normalize(), s;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t = !1) {
		let n = new H(), r = [], i = [], a = [], o = new H(), s = new G();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new H());
		}
		i[0] = new H(), a[0] = new H();
		let c = Number.MAX_VALUE, l = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
		l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(r[t - 1], r[t]), o.length() > 2 ** -52) {
				o.normalize();
				let e = Math.acos(z(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(s.makeRotationAxis(o, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (!0 === t) {
			let t = Math.acos(z(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
}, jc = class extends Ac {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = 2 * Math.PI, o = !1, s = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
	}
	getPoint(e, t = new V()) {
		let n = t, r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), !0 !== this.aClockwise || a || (i === r ? i = -r : i -= r);
		let o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = s - this.aX, r = c - this.aY;
			s = n * e - r * t + this.aX, c = n * t + r * e + this.aY;
		}
		return n.set(s, c);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, Mc = class extends jc {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function Nc() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, o, s) {
		e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
			let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o, l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
			c *= o, l *= o, i(t, n, c, l);
		},
		calc: function(i) {
			let a = i * i;
			return e + t * i + n * a + a * i * r;
		}
	};
}
var Pc = new H(), Fc = new Nc(), Ic = new Nc(), Lc = new Nc(), Rc = class extends Ac {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new H()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, o, s, c = Math.floor(a), l = a - c;
		this.closed ? c += c > 0 ? 0 : (Math.floor(Math.abs(c) / i) + 1) * i : l === 0 && c === i - 1 && (c = i - 2, l = 1), this.closed || c > 0 ? o = r[(c - 1) % i] : (Pc.subVectors(r[0], r[1]).add(r[0]), o = Pc);
		let u = r[c % i], d = r[(c + 1) % i];
		if (this.closed || c + 2 < i ? s = r[(c + 2) % i] : (Pc.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), s = Pc), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = o.distanceToSquared(u) ** +e, n = u.distanceToSquared(d) ** +e, r = d.distanceToSquared(s) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), Fc.initNonuniformCatmullRom(o.x, u.x, d.x, s.x, t, n, r), Ic.initNonuniformCatmullRom(o.y, u.y, d.y, s.y, t, n, r), Lc.initNonuniformCatmullRom(o.z, u.z, d.z, s.z, t, n, r);
		} else this.curveType === "catmullrom" && (Fc.initCatmullRom(o.x, u.x, d.x, s.x, this.tension), Ic.initCatmullRom(o.y, u.y, d.y, s.y, this.tension), Lc.initCatmullRom(o.z, u.z, d.z, s.z, this.tension));
		return n.set(Fc.calc(l), Ic.calc(l), Lc.calc(l)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new H().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function zc(e, t, n, r, i) {
	let a = .5 * (r - t), o = .5 * (i - n), s = e * e;
	return (2 * n - 2 * r + a + o) * (e * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function Bc(e, t, n, r) {
	return function(e, t) {
		let n = 1 - e;
		return n * n * t;
	}(e, t) + function(e, t) {
		return 2 * (1 - e) * e * t;
	}(e, n) + function(e, t) {
		return e * e * t;
	}(e, r);
}
function Vc(e, t, n, r, i) {
	return function(e, t) {
		let n = 1 - e;
		return n * n * n * t;
	}(e, t) + function(e, t) {
		let n = 1 - e;
		return 3 * n * n * e * t;
	}(e, n) + function(e, t) {
		return 3 * (1 - e) * e * e * t;
	}(e, r) + function(e, t) {
		return e * e * e * t;
	}(e, i);
}
var Hc = class extends Ac {
	constructor(e = new V(), t = new V(), n = new V(), r = new V()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new V()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(Vc(e, r.x, i.x, a.x, o.x), Vc(e, r.y, i.y, a.y, o.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, Uc = class extends Ac {
	constructor(e = new H(), t = new H(), n = new H(), r = new H()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new H()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(Vc(e, r.x, i.x, a.x, o.x), Vc(e, r.y, i.y, a.y, o.y), Vc(e, r.z, i.z, a.z, o.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, Wc = class extends Ac {
	constructor(e = new V(), t = new V()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new V()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new V()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Gc = class extends Ac {
	constructor(e = new H(), t = new H()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new H()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new H()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Kc = class extends Ac {
	constructor(e = new V(), t = new V(), n = new V()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new V()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(Bc(e, r.x, i.x, a.x), Bc(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, qc = class extends Ac {
	constructor(e = new H(), t = new H(), n = new H()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new H()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(Bc(e, r.x, i.x, a.x), Bc(e, r.y, i.y, a.y), Bc(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Jc = class extends Ac {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new V()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(zc(o, s.x, c.x, l.x, u.x), zc(o, s.y, c.y, l.y, u.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new V().fromArray(n));
		}
		return this;
	}
}, Yc = Object.freeze({
	__proto__: null,
	ArcCurve: Mc,
	CatmullRomCurve3: Rc,
	CubicBezierCurve: Hc,
	CubicBezierCurve3: Uc,
	EllipseCurve: jc,
	LineCurve: Wc,
	LineCurve3: Gc,
	QuadraticBezierCurve: Kc,
	QuadraticBezierCurve3: qc,
	SplineCurve: Jc
}), Xc = class extends Ac {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = !0 === e.isVector2 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Yc[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], o = a.getLength(), s = o === 0 ? 0 : 1 - e / o;
				return a.getPointAt(s, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], o = a.isEllipseCurve ? 2 * e : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o);
			for (let e = 0; e < s.length; e++) {
				let r = s[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Yc[n.type]().fromJSON(n));
		}
		return this;
	}
}, Zc = class extends Xc {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new V(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new Wc(this.currentPoint.clone(), new V(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new Kc(this.currentPoint.clone(), new V(e, t), new V(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let o = new Hc(this.currentPoint.clone(), new V(e, t), new V(n, r), new V(i, a));
		return this.curves.push(o), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new Jc([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let o = this.currentPoint.x, s = this.currentPoint.y;
		return this.absarc(e + o, t + s, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, o, s) {
		let c = this.currentPoint.x, l = this.currentPoint.y;
		return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
	}
	absellipse(e, t, n, r, i, a, o, s) {
		let c = new jc(e, t, n, r, i, a, o, s);
		if (this.curves.length > 0) {
			let e = c.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(c);
		let l = c.getPoint(1);
		return this.currentPoint.copy(l), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, Qc = class extends Zc {
	constructor(e) {
		super(e), this.uuid = jr(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new Zc().fromJSON(n));
		}
		return this;
	}
};
function $c(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = el(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s, c, l;
	if (r && (a = function(e, t, n, r) {
		let i = [];
		for (let n = 0, a = t.length; n < a; n++) {
			let o = el(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
			o === o.next && (o.steiner = !0), i.push(dl(o));
		}
		i.sort(sl);
		for (let e = 0; e < i.length; e++) n = cl(i[e], n);
		return n;
	}(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return nl(a, o, n, s, c, l, 0), o;
}
function el(e, t, n, r, i) {
	let a;
	if (i === function(e, t, n, r) {
		let i = 0;
		for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
		return i;
	}(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = Sl(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = Sl(i / r | 0, e[i], e[i + 1], a);
	return a && gl(a, a.next) && (Cl(a), a = a.next), a;
}
function tl(e, t) {
	if (!e) return e;
	t ||= e;
	let n, r = e;
	do
		if (n = !1, r.steiner || !gl(r, r.next) && hl(r.prev, r, r.next) !== 0) r = r.next;
		else {
			if (Cl(r), r = t = r.prev, r === r.next) break;
			n = !0;
		}
	while (n || r !== t);
	return t;
}
function nl(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && function(e, t, n, r) {
		let i = e;
		do
			i.z === 0 && (i.z = ul(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
		while (i !== e);
		i.prevZ.nextZ = null, i.prevZ = null, function(e) {
			let t, n = 1;
			do {
				let r, i = e;
				e = null;
				let a = null;
				for (t = 0; i;) {
					t++;
					let o = i, s = 0;
					for (let e = 0; e < n && (s++, o = o.nextZ, o); e++);
					let c = n;
					for (; s > 0 || c > 0 && o;) s !== 0 && (c === 0 || !o || i.z <= o.z) ? (r = i, i = i.nextZ, s--) : (r = o, o = o.nextZ, c--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
					i = o;
				}
				a.nextZ = null, n *= 2;
			} while (t > 1);
		}(i);
	}(e, r, i, a);
	let s = e;
	for (; e.prev !== e.next;) {
		let c = e.prev, l = e.next;
		if (a ? il(e, r, i, a) : rl(e)) t.push(c.i, e.i, l.i), Cl(e), e = l.next, s = l.next;
		else if ((e = l) === s) {
			o ? o === 1 ? nl(e = al(tl(e), t), t, n, r, i, a, 2) : o === 2 && ol(e, t, n, r, i, a) : nl(tl(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function rl(e) {
	let t = e.prev, n = e, r = e.next;
	if (hl(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && pl(i, s, a, c, o, l, m.x, m.y) && hl(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function il(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (hl(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = ul(p, m, t, n, r), v = ul(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && pl(s, u, c, d, l, f, y.x, y.y) && hl(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && pl(s, u, c, d, l, f, b.x, b.y) && hl(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && pl(s, u, c, d, l, f, y.x, y.y) && hl(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && pl(s, u, c, d, l, f, b.x, b.y) && hl(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function al(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!gl(r, i) && _l(r, n, n.next, i) && bl(r, i) && bl(i, r) && (t.push(r.i, n.i, i.i), Cl(n), Cl(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return tl(n);
}
function ol(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && ml(o, e)) {
				let s = xl(o, e);
				o = tl(o, o.next), s = tl(s, s.next), nl(o, t, n, r, i, a, 0), nl(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function sl(e, t) {
	let n = e.x - t.x;
	return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function cl(e, t) {
	let n = function(e, t) {
		let n = t, r = e.x, i = e.y, a, o = -1 / 0;
		if (gl(e, n)) return n;
		do {
			if (gl(e, n.next)) return n.next;
			if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
				let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
				if (e <= r && e > o && (o = e, a = n.x < n.next.x ? n : n.next, e === r)) return a;
			}
			n = n.next;
		} while (n !== t);
		if (!a) return null;
		let s = a, c = a.x, l = a.y, u = 1 / 0;
		n = a;
		do {
			if (r >= n.x && n.x >= c && r !== n.x && fl(i < l ? r : o, i, c, l, i < l ? o : r, i, n.x, n.y)) {
				let t = Math.abs(i - n.y) / (r - n.x);
				bl(n, e) && (t < u || t === u && (n.x > a.x || n.x === a.x && ll(a, n))) && (a = n, u = t);
			}
			n = n.next;
		} while (n !== s);
		return a;
	}(e, t);
	if (!n) return t;
	let r = xl(n, e);
	return tl(r, r.next), tl(n, n.next);
}
function ll(e, t) {
	return hl(e.prev, e, t.prev) < 0 && hl(t.next, e, e.next) < 0;
}
function ul(e, t, n, r, i) {
	return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * i | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - r) * i | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function dl(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function fl(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function pl(e, t, n, r, i, a, o, s) {
	return (e !== o || t !== s) && fl(e, t, n, r, i, a, o, s);
}
function ml(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !function(e, t) {
		let n = e;
		do {
			if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && _l(n, n.next, e, t)) return !0;
			n = n.next;
		} while (n !== e);
		return !1;
	}(e, t) && (bl(e, t) && bl(t, e) && function(e, t) {
		let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
		do
			n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
		while (n !== e);
		return r;
	}(e, t) && (hl(e.prev, e, t.prev) || hl(e, t.prev, t)) || gl(e, t) && hl(e.prev, e, e.next) > 0 && hl(t.prev, t, t.next) > 0);
}
function hl(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function gl(e, t) {
	return e.x === t.x && e.y === t.y;
}
function _l(e, t, n, r) {
	let i = yl(hl(e, t, n)), a = yl(hl(e, t, r)), o = yl(hl(n, r, e)), s = yl(hl(n, r, t));
	return i !== a && o !== s || !(i !== 0 || !vl(e, n, t)) || !(a !== 0 || !vl(e, r, t)) || !(o !== 0 || !vl(n, e, r)) || !(s !== 0 || !vl(n, t, r));
}
function vl(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function yl(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function bl(e, t) {
	return hl(e.prev, e, e.next) < 0 ? hl(e, t, e.next) >= 0 && hl(e, e.prev, t) >= 0 : hl(e, t, e.prev) < 0 || hl(e, e.next, t) < 0;
}
function xl(e, t) {
	let n = wl(e.i, e.x, e.y), r = wl(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Sl(e, t, n, r) {
	let i = wl(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Cl(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function wl(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
var Tl = class {
	static triangulate(e, t, n = 2) {
		return $c(e, t, n);
	}
}, El = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return .5 * n;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		Dl(e), Ol(n, e);
		let a = e.length;
		t.forEach(Dl);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, Ol(n, t[e]);
		let o = Tl.triangulate(n, r);
		for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
		return i;
	}
};
function Dl(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Ol(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
var kl = class e extends J {
	constructor(e = new Qc([
		new V(.5, .5),
		new V(-.5, .5),
		new V(-.5, -.5),
		new V(.5, -.5)
	]), t = {}) {
		super(), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, e = Array.isArray(e) ? e : [e];
		let n = this, r = [], i = [];
		for (let t = 0, n = e.length; t < n; t++) a(e[t]);
		function a(e) {
			let a = [], o = t.curveSegments === void 0 ? 12 : t.curveSegments, s = t.steps === void 0 ? 1 : t.steps, c = t.depth === void 0 ? 1 : t.depth, l = t.bevelEnabled === void 0 || t.bevelEnabled, u = t.bevelThickness === void 0 ? .2 : t.bevelThickness, d = t.bevelSize === void 0 ? u - .1 : t.bevelSize, f = t.bevelOffset === void 0 ? 0 : t.bevelOffset, p = t.bevelSegments === void 0 ? 3 : t.bevelSegments, m = t.extrudePath, h = t.UVGenerator === void 0 ? Al : t.UVGenerator, g, _, v, y, b, x = !1;
			if (m) {
				g = m.getSpacedPoints(s), x = !0, l = !1;
				let e = !!m.isCatmullRomCurve3 && m.closed;
				_ = m.computeFrenetFrames(s, e), v = new H(), y = new H(), b = new H();
			}
			l || (p = 0, u = 0, d = 0, f = 0);
			let S = e.extractPoints(o), C = S.shape, w = S.holes;
			if (!El.isClockWise(C)) {
				C = C.reverse();
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					El.isClockWise(t) && (w[e] = t.reverse());
				}
			}
			function T(e) {
				let t = e[0];
				for (let n = 1; n <= e.length; n++) {
					let r = n % e.length, i = e[r], a = i.x - t.x, o = i.y - t.y, s = a * a + o * o, c = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(t.x), Math.abs(t.y));
					s <= 10000000000000001e-36 * c * c ? (e.splice(r, 1), n--) : t = i;
				}
			}
			T(C), w.forEach(T);
			let E = w.length, D = C;
			for (let e = 0; e < E; e++) {
				let t = w[e];
				C = C.concat(t);
			}
			function O(e, t, n) {
				return t || R("ExtrudeGeometry: vec does not exist"), e.clone().addScaledVector(t, n);
			}
			let ee = C.length;
			function k(e, t, n) {
				let r, i, a, o = e.x - t.x, s = e.y - t.y, c = n.x - e.x, l = n.y - e.y, u = o * o + s * s, d = o * l - s * c;
				if (Math.abs(d) > 2 ** -52) {
					let d = Math.sqrt(u), f = Math.sqrt(c * c + l * l), p = t.x - s / d, m = t.y + o / d, h = ((n.x - l / f - p) * l - (n.y + c / f - m) * c) / (o * l - s * c);
					r = p + o * h - e.x, i = m + s * h - e.y;
					let g = r * r + i * i;
					if (g <= 2) return new V(r, i);
					a = Math.sqrt(g / 2);
				} else {
					let e = !1;
					o > 2 ** -52 ? c > 2 ** -52 && (e = !0) : o < -(2 ** -52) ? c < -(2 ** -52) && (e = !0) : Math.sign(s) === Math.sign(l) && (e = !0), e ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2));
				}
				return new V(r / a, i / a);
			}
			let A = [];
			for (let e = 0, t = D.length, n = t - 1, r = e + 1; e < t; e++, n++, r++) n === t && (n = 0), r === t && (r = 0), A[e] = k(D[e], D[n], D[r]);
			let te = [], j, M, ne = A.concat();
			for (let e = 0, t = E; e < t; e++) {
				let t = w[e];
				j = [];
				for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++) r === n && (r = 0), i === n && (i = 0), j[e] = k(t[e], t[r], t[i]);
				te.push(j), ne = ne.concat(j);
			}
			if (p === 0) M = El.triangulateShape(D, w);
			else {
				let e = [], t = [];
				for (let n = 0; n < p; n++) {
					let r = n / p, i = u * Math.cos(r * Math.PI / 2), a = d * Math.sin(r * Math.PI / 2) + f;
					for (let t = 0, n = D.length; t < n; t++) {
						let n = O(D[t], A[t], a);
						oe(n.x, n.y, -i), r === 0 && e.push(n);
					}
					for (let e = 0, n = E; e < n; e++) {
						let n = w[e];
						j = te[e];
						let o = [];
						for (let e = 0, t = n.length; e < t; e++) {
							let t = O(n[e], j[e], a);
							oe(t.x, t.y, -i), r === 0 && o.push(t);
						}
						r === 0 && t.push(o);
					}
				}
				M = El.triangulateShape(e, t);
			}
			let re = M.length, ie = d + f;
			for (let e = 0; e < ee; e++) {
				let t = l ? O(C[e], ne[e], ie) : C[e];
				x ? (y.copy(_.normals[0]).multiplyScalar(t.x), v.copy(_.binormals[0]).multiplyScalar(t.y), b.copy(g[0]).add(y).add(v), oe(b.x, b.y, b.z)) : oe(t.x, t.y, 0);
			}
			for (let e = 1; e <= s; e++) for (let t = 0; t < ee; t++) {
				let n = l ? O(C[t], ne[t], ie) : C[t];
				x ? (y.copy(_.normals[e]).multiplyScalar(n.x), v.copy(_.binormals[e]).multiplyScalar(n.y), b.copy(g[e]).add(y).add(v), oe(b.x, b.y, b.z)) : oe(n.x, n.y, c / s * e);
			}
			for (let e = p - 1; e >= 0; e--) {
				let t = e / p, n = u * Math.cos(t * Math.PI / 2), r = d * Math.sin(t * Math.PI / 2) + f;
				for (let e = 0, t = D.length; e < t; e++) {
					let t = O(D[e], A[e], r);
					oe(t.x, t.y, c + n);
				}
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					j = te[e];
					for (let e = 0, i = t.length; e < i; e++) {
						let i = O(t[e], j[e], r);
						x ? oe(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : oe(i.x, i.y, c + n);
					}
				}
			}
			function ae(e, t) {
				let n = e.length;
				for (; --n >= 0;) {
					let r = n, i = n - 1;
					i < 0 && (i = e.length - 1);
					for (let e = 0, n = s + 2 * p; e < n; e++) {
						let n = ee * e, a = ee * (e + 1);
						ce(t + r + n, t + i + n, t + i + a, t + r + a);
					}
				}
			}
			function oe(e, t, n) {
				a.push(e), a.push(t), a.push(n);
			}
			function se(e, t, i) {
				le(e), le(t), le(i);
				let a = r.length / 3, o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
				ue(o[0]), ue(o[1]), ue(o[2]);
			}
			function ce(e, t, i, a) {
				le(e), le(t), le(a), le(t), le(i), le(a);
				let o = r.length / 3, s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
				ue(s[0]), ue(s[1]), ue(s[3]), ue(s[1]), ue(s[2]), ue(s[3]);
			}
			function le(e) {
				r.push(a[3 * e + 0]), r.push(a[3 * e + 1]), r.push(a[3 * e + 2]);
			}
			function ue(e) {
				i.push(e.x), i.push(e.y);
			}
			(function() {
				let e = r.length / 3;
				if (l) {
					let e = 0, t = ee * e;
					for (let e = 0; e < re; e++) {
						let n = M[e];
						se(n[2] + t, n[1] + t, n[0] + t);
					}
					e = s + 2 * p, t = ee * e;
					for (let e = 0; e < re; e++) {
						let n = M[e];
						se(n[0] + t, n[1] + t, n[2] + t);
					}
				} else {
					for (let e = 0; e < re; e++) {
						let t = M[e];
						se(t[2], t[1], t[0]);
					}
					for (let e = 0; e < re; e++) {
						let t = M[e];
						se(t[0] + ee * s, t[1] + ee * s, t[2] + ee * s);
					}
				}
				n.addGroup(e, r.length / 3 - e, 0);
			})(), function() {
				let e = r.length / 3, t = 0;
				ae(D, t), t += D.length;
				for (let e = 0, n = w.length; e < n; e++) {
					let n = w[e];
					ae(n, t), t += n.length;
				}
				n.addGroup(e, r.length / 3 - e, 1);
			}();
		}
		this.setAttribute("position", new q(r, 3)), this.setAttribute("uv", new q(i, 2)), this.computeVertexNormals();
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON();
		return function(e, t, n) {
			if (n.shapes = [], Array.isArray(e)) for (let t = 0, r = e.length; t < r; t++) {
				let r = e[t];
				n.shapes.push(r.uuid);
			}
			else n.shapes.push(e.uuid);
			return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
		}(this.parameters.shapes, this.parameters.options, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		let i = t.options.extrudePath;
		return i !== void 0 && (t.options.extrudePath = new Yc[i.type]().fromJSON(i)), new e(r, t.options);
	}
}, Al = {
	generateTopUV: function(e, t, n, r, i) {
		let a = t[3 * n], o = t[3 * n + 1], s = t[3 * r], c = t[3 * r + 1], l = t[3 * i], u = t[3 * i + 1];
		return [
			new V(a, o),
			new V(s, c),
			new V(l, u)
		];
	},
	generateSideWallUV: function(e, t, n, r, i, a) {
		let o = t[3 * n], s = t[3 * n + 1], c = t[3 * n + 2], l = t[3 * r], u = t[3 * r + 1], d = t[3 * r + 2], f = t[3 * i], p = t[3 * i + 1], m = t[3 * i + 2], h = t[3 * a], g = t[3 * a + 1], _ = t[3 * a + 2];
		return Math.abs(s - u) < Math.abs(o - l) ? [
			new V(o, 1 - c),
			new V(l, 1 - d),
			new V(f, 1 - m),
			new V(h, 1 - _)
		] : [
			new V(s, 1 - c),
			new V(u, 1 - d),
			new V(p, 1 - m),
			new V(g, 1 - _)
		];
	}
}, jl = class e extends Cc {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2;
		super([
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			0,
			0,
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			n,
			0,
			-1,
			n,
			0,
			1,
			-n,
			0,
			-1,
			-n,
			0,
			1
		], [
			0,
			11,
			5,
			0,
			5,
			1,
			0,
			1,
			7,
			0,
			7,
			10,
			0,
			10,
			11,
			1,
			5,
			9,
			5,
			11,
			4,
			11,
			10,
			2,
			10,
			7,
			6,
			7,
			1,
			8,
			3,
			9,
			4,
			3,
			4,
			2,
			3,
			2,
			6,
			3,
			6,
			8,
			3,
			8,
			9,
			4,
			9,
			5,
			2,
			4,
			11,
			6,
			2,
			10,
			8,
			6,
			7,
			9,
			8,
			1
		], e, t), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Ml = class e extends J {
	constructor(e = [
		new V(0, -.5),
		new V(.5, 0),
		new V(0, .5)
	], t = 12, n = 0, r = 2 * Math.PI) {
		super(), this.type = "LatheGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: n,
			phiLength: r
		}, t = Math.floor(t), r = z(r, 0, 2 * Math.PI);
		let i = [], a = [], o = [], s = [], c = [], l = 1 / t, u = new H(), d = new V(), f = new H(), p = new H(), m = new H(), h = 0, g = 0;
		for (let t = 0; t <= e.length - 1; t++) switch (t) {
			case 0:
				h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = 1 * g, f.y = -h, f.z = 0 * g, m.copy(f), f.normalize(), s.push(f.x, f.y, f.z);
				break;
			case e.length - 1:
				s.push(m.x, m.y, m.z);
				break;
			default: h = e[t + 1].x - e[t].x, g = e[t + 1].y - e[t].y, f.x = 1 * g, f.y = -h, f.z = 0 * g, p.copy(f), f.x += m.x, f.y += m.y, f.z += m.z, f.normalize(), s.push(f.x, f.y, f.z), m.copy(p);
		}
		for (let i = 0; i <= t; i++) {
			let f = n + i * l * r, p = Math.sin(f), m = Math.cos(f);
			for (let n = 0; n <= e.length - 1; n++) {
				u.x = e[n].x * p, u.y = e[n].y, u.z = e[n].x * m, a.push(u.x, u.y, u.z), d.x = i / t, d.y = n / (e.length - 1), o.push(d.x, d.y);
				let r = s[3 * n + 0] * p, l = s[3 * n + 1], f = s[3 * n + 0] * m;
				c.push(r, l, f);
			}
		}
		for (let n = 0; n < t; n++) for (let t = 0; t < e.length - 1; t++) {
			let r = t + n * e.length, a = r, o = r + e.length, s = r + e.length + 1, c = r + 1;
			i.push(a, o, c), i.push(s, c, o);
		}
		this.setIndex(i), this.setAttribute("position", new q(a, 3)), this.setAttribute("uv", new q(o, 2)), this.setAttribute("normal", new q(c, 3));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.points, t.segments, t.phiStart, t.phiLength);
	}
}, Nl = class e extends Cc {
	constructor(e = 1, t = 0) {
		super([
			1,
			0,
			0,
			-1,
			0,
			0,
			0,
			1,
			0,
			0,
			-1,
			0,
			0,
			0,
			1,
			0,
			0,
			-1
		], [
			0,
			2,
			4,
			0,
			4,
			3,
			0,
			3,
			5,
			0,
			5,
			2,
			1,
			2,
			5,
			1,
			5,
			3,
			1,
			3,
			4,
			1,
			4,
			2
		], e, t), this.type = "OctahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, Pl = class e extends J {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new q(p, 3)), this.setAttribute("normal", new q(m, 3)), this.setAttribute("uv", new q(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, Fl = class e extends J {
	constructor(e = .5, t = 1, n = 32, r = 1, i = 0, a = 2 * Math.PI) {
		super(), this.type = "RingGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}, n = Math.max(3, n);
		let o = [], s = [], c = [], l = [], u = e, d = (t - e) / (r = Math.max(1, r)), f = new H(), p = new V();
		for (let e = 0; e <= r; e++) {
			for (let e = 0; e <= n; e++) {
				let r = i + e / n * a;
				f.x = u * Math.cos(r), f.y = u * Math.sin(r), s.push(f.x, f.y, f.z), c.push(0, 0, 1), p.x = (f.x / t + 1) / 2, p.y = (f.y / t + 1) / 2, l.push(p.x, p.y);
			}
			u += d;
		}
		for (let e = 0; e < r; e++) {
			let t = e * (n + 1);
			for (let e = 0; e < n; e++) {
				let r = e + t, i = r, a = r + n + 1, s = r + n + 2, c = r + 1;
				o.push(i, a, c), o.push(a, s, c);
			}
		}
		this.setIndex(o), this.setAttribute("position", new q(s, 3)), this.setAttribute("normal", new q(c, 3)), this.setAttribute("uv", new q(l, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
	}
}, Il = class e extends J {
	constructor(e = new Qc([
		new V(0, .5),
		new V(-.5, -.5),
		new V(.5, -.5)
	]), t = 12) {
		super(), this.type = "ShapeGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		};
		let n = [], r = [], i = [], a = [], o = 0, s = 0;
		if (!1 === Array.isArray(e)) c(e);
		else for (let t = 0; t < e.length; t++) c(e[t]), this.addGroup(o, s, t), o += s, s = 0;
		function c(e) {
			let o = r.length / 3, c = e.extractPoints(t), l = c.shape, u = c.holes;
			!1 === El.isClockWise(l) && (l = l.reverse());
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				!0 === El.isClockWise(t) && (u[e] = t.reverse());
			}
			let d = El.triangulateShape(l, u);
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				l = l.concat(t);
			}
			for (let e = 0, t = l.length; e < t; e++) {
				let t = l[e];
				r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y);
			}
			for (let e = 0, t = d.length; e < t; e++) {
				let t = d[e], r = t[0] + o, i = t[1] + o, a = t[2] + o;
				n.push(r, i, a), s += 3;
			}
		}
		this.setIndex(n), this.setAttribute("position", new q(r, 3)), this.setAttribute("normal", new q(i, 3)), this.setAttribute("uv", new q(a, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON();
		return function(e, t) {
			if (t.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.shapes.push(r.uuid);
			}
			else t.shapes.push(e.uuid);
			return t;
		}(this.parameters.shapes, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		return new e(r, t.curveSegments);
	}
}, Ll = class e extends J {
	constructor(e = 1, t = 32, n = 16, r = 0, i = 2 * Math.PI, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new H(), d = new H(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = 0;
			f === 0 && a === 0 ? v = .5 / t : f === n && s === Math.PI && (v = -.5 / t);
			for (let n = 0; n <= t; n++) {
				let s = n / t;
				u.x = -e * Math.cos(r + s * i) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(r + s * i) * Math.sin(a + _ * o), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(s + v, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new q(p, 3)), this.setAttribute("normal", new q(m, 3)), this.setAttribute("uv", new q(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
}, Rl = class e extends Cc {
	constructor(e = 1, t = 0) {
		super([
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			-1,
			1,
			-1,
			-1
		], [
			2,
			1,
			0,
			0,
			3,
			2,
			1,
			3,
			0,
			2,
			3,
			1
		], e, t), this.type = "TetrahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, zl = class e extends J {
	constructor(e = 1, t = .4, n = 12, r = 48, i = 2 * Math.PI, a = 0, o = 2 * Math.PI) {
		super(), this.type = "TorusGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: n,
			tubularSegments: r,
			arc: i,
			thetaStart: a,
			thetaLength: o
		}, n = Math.floor(n), r = Math.floor(r);
		let s = [], c = [], l = [], u = [], d = new H(), f = new H(), p = new H();
		for (let s = 0; s <= n; s++) {
			let m = a + s / n * o;
			for (let a = 0; a <= r; a++) {
				let o = a / r * i;
				f.x = (e + t * Math.cos(m)) * Math.cos(o), f.y = (e + t * Math.cos(m)) * Math.sin(o), f.z = t * Math.sin(m), c.push(f.x, f.y, f.z), d.x = e * Math.cos(o), d.y = e * Math.sin(o), p.subVectors(f, d).normalize(), l.push(p.x, p.y, p.z), u.push(a / r), u.push(s / n);
			}
		}
		for (let e = 1; e <= n; e++) for (let t = 1; t <= r; t++) {
			let n = (r + 1) * e + t - 1, i = (r + 1) * (e - 1) + t - 1, a = (r + 1) * (e - 1) + t, o = (r + 1) * e + t;
			s.push(n, i, o), s.push(i, a, o);
		}
		this.setIndex(s), this.setAttribute("position", new q(c, 3)), this.setAttribute("normal", new q(l, 3)), this.setAttribute("uv", new q(u, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
	}
}, Bl = class e extends J {
	constructor(e = 1, t = .4, n = 64, r = 8, i = 2, a = 3) {
		super(), this.type = "TorusKnotGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: a
		}, n = Math.floor(n), r = Math.floor(r);
		let o = [], s = [], c = [], l = [], u = new H(), d = new H(), f = new H(), p = new H(), m = new H(), h = new H(), g = new H();
		for (let o = 0; o <= n; ++o) {
			let v = o / n * i * Math.PI * 2;
			_(v, i, a, e, f), _(v + .01, i, a, e, p), h.subVectors(p, f), g.addVectors(p, f), m.crossVectors(h, g), g.crossVectors(m, h), m.normalize(), g.normalize();
			for (let e = 0; e <= r; ++e) {
				let i = e / r * Math.PI * 2, a = -t * Math.cos(i), p = t * Math.sin(i);
				u.x = f.x + (a * g.x + p * m.x), u.y = f.y + (a * g.y + p * m.y), u.z = f.z + (a * g.z + p * m.z), s.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), c.push(d.x, d.y, d.z), l.push(o / n), l.push(e / r);
			}
		}
		for (let e = 1; e <= n; e++) for (let t = 1; t <= r; t++) {
			let n = (r + 1) * (e - 1) + (t - 1), i = (r + 1) * e + (t - 1), a = (r + 1) * e + t, s = (r + 1) * (e - 1) + t;
			o.push(n, i, s), o.push(i, a, s);
		}
		function _(e, t, n, r, i) {
			let a = Math.cos(e), o = Math.sin(e), s = n / t * e, c = Math.cos(s);
			i.x = r * (2 + c) * .5 * a, i.y = r * (2 + c) * o * .5, i.z = r * Math.sin(s) * .5;
		}
		this.setIndex(o), this.setAttribute("position", new q(s, 3)), this.setAttribute("normal", new q(c, 3)), this.setAttribute("uv", new q(l, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
	}
}, Vl = class e extends J {
	constructor(e = new qc(new H(-1, -1, 0), new H(-1, 1, 0), new H(1, 1, 0)), t = 64, n = 1, r = 8, i = !1) {
		super(), this.type = "TubeGeometry", this.parameters = {
			path: e,
			tubularSegments: t,
			radius: n,
			radialSegments: r,
			closed: i
		};
		let a = e.computeFrenetFrames(t, i);
		this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
		let o = new H(), s = new H(), c = new V(), l = new H(), u = [], d = [], f = [], p = [];
		function m(i) {
			l = e.getPointAt(i / t, l);
			let c = a.normals[i], f = a.binormals[i];
			for (let e = 0; e <= r; e++) {
				let t = e / r * Math.PI * 2, i = Math.sin(t), a = -Math.cos(t);
				s.x = a * c.x + i * f.x, s.y = a * c.y + i * f.y, s.z = a * c.z + i * f.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = l.x + n * s.x, o.y = l.y + n * s.y, o.z = l.z + n * s.z, u.push(o.x, o.y, o.z);
			}
		}
		(function() {
			for (let e = 0; e < t; e++) m(e);
			m(!1 === i ? t : 0), function() {
				for (let e = 0; e <= t; e++) for (let n = 0; n <= r; n++) c.x = e / t, c.y = n / r, f.push(c.x, c.y);
			}(), function() {
				for (let e = 1; e <= t; e++) for (let t = 1; t <= r; t++) {
					let n = (r + 1) * (e - 1) + (t - 1), i = (r + 1) * e + (t - 1), a = (r + 1) * e + t, o = (r + 1) * (e - 1) + t;
					p.push(n, i, o), p.push(i, a, o);
				}
			}();
		})(), this.setIndex(p), this.setAttribute("position", new q(u, 3)), this.setAttribute("normal", new q(d, 3)), this.setAttribute("uv", new q(f, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.path = this.parameters.path.toJSON(), e;
	}
	static fromJSON(t) {
		return new e(new Yc[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
	}
}, Hl = class extends J {
	constructor(e = null) {
		if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
			let t = [], n = /* @__PURE__ */ new Set(), r = new H(), i = new H();
			if (e.index !== null) {
				let a = e.attributes.position, o = e.index, s = e.groups;
				s.length === 0 && (s = [{
					start: 0,
					count: o.count,
					materialIndex: 0
				}]);
				for (let e = 0, c = s.length; e < c; ++e) {
					let c = s[e], l = c.start;
					for (let e = l, s = l + c.count; e < s; e += 3) for (let s = 0; s < 3; s++) {
						let c = o.getX(e + s), l = o.getX(e + (s + 1) % 3);
						r.fromBufferAttribute(a, c), i.fromBufferAttribute(a, l), !0 === Ul(r, i, n) && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
					}
				}
			} else {
				let a = e.attributes.position;
				for (let e = 0, o = a.count / 3; e < o; e++) for (let o = 0; o < 3; o++) {
					let s = 3 * e + o, c = 3 * e + (o + 1) % 3;
					r.fromBufferAttribute(a, s), i.fromBufferAttribute(a, c), !0 === Ul(r, i, n) && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
				}
			}
			this.setAttribute("position", new q(t, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
};
function Ul(e, t, n) {
	let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
	return !0 !== n.has(r) && !0 !== n.has(i) && (n.add(r), n.add(i), !0);
}
var Wl = Object.freeze({
	__proto__: null,
	BoxGeometry: vc,
	CapsuleGeometry: yc,
	CircleGeometry: bc,
	ConeGeometry: Sc,
	CylinderGeometry: xc,
	DodecahedronGeometry: wc,
	EdgesGeometry: kc,
	ExtrudeGeometry: kl,
	IcosahedronGeometry: jl,
	LatheGeometry: Ml,
	OctahedronGeometry: Nl,
	PlaneGeometry: Pl,
	PolyhedronGeometry: Cc,
	RingGeometry: Fl,
	ShapeGeometry: Il,
	SphereGeometry: Ll,
	TetrahedronGeometry: Rl,
	TorusGeometry: zl,
	TorusKnotGeometry: Bl,
	TubeGeometry: Vl,
	WireframeGeometry: Hl
}), Gl = class extends Qa {
	constructor(e) {
		super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new K(0), this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.fog = e.fog, this;
	}
};
function Kl(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (L("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
		}
	}
	return t;
}
function ql(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = Kl(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function Jl(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : !0 === t.isXRRenderTarget ? t.texture.colorSpace : W.workingColorSpace;
}
var Yl = {
	clone: Kl,
	merge: ql
}, Xl = class extends Qa {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kl(e.uniforms), this.uniformsGroups = function(e) {
			let t = [];
			for (let n = 0; n < e.length; n++) t.push(e[n].clone());
			return t;
		}(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
}, Zl = class extends Xl {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Ql = class extends Qa {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new K(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new K(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hi(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, $l = class extends Ql {
	constructor(e) {
		super(), this.isMeshPhysicalMaterial = !0, this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new V(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return z(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
			},
			set: function(e) {
				this.ior = (1 + .4 * e) / (1 - .4 * e);
			}
		}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new K(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new K(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new K(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
	}
	get anisotropy() {
		return this._anisotropy;
	}
	set anisotropy(e) {
		this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
	}
	get clearcoat() {
		return this._clearcoat;
	}
	set clearcoat(e) {
		this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
	}
	get iridescence() {
		return this._iridescence;
	}
	set iridescence(e) {
		this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
	}
	get dispersion() {
		return this._dispersion;
	}
	set dispersion(e) {
		this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
	}
	get sheen() {
		return this._sheen;
	}
	set sheen(e) {
		this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
	}
	get transmission() {
		return this._transmission;
	}
	set transmission(e) {
		this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
	}
}, eu = class extends Qa {
	constructor(e) {
		super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new K(16777215), this.specular = new K(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new K(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hi(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, tu = class extends Qa {
	constructor(e) {
		super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new K(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new K(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, nu = class extends Qa {
	constructor(e) {
		super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
	}
}, ru = class extends Qa {
	constructor(e) {
		super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new K(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new K(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hi(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, iu = class extends Qa {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, au = class extends Qa {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
}, ou = class extends Qa {
	constructor(e) {
		super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new K(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new V(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, su = class extends Bs {
	constructor(e) {
		super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
	}
};
function cu(e, t) {
	return e && e.constructor !== t ? typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e) : e;
}
function lu(e) {
	let t = e.length, n = Array(t);
	for (let e = 0; e !== t; ++e) n[e] = e;
	return n.sort(function(t, n) {
		return e[t] - e[n];
	}), n;
}
function uu(e, t, n) {
	let r = e.length, i = new e.constructor(r);
	for (let a = 0, o = 0; o !== r; ++a) {
		let r = n[a] * t;
		for (let n = 0; n !== t; ++n) i[o++] = e[r + n];
	}
	return i;
}
function du(e, t, n, r) {
	let i = 1, a = e[0];
	for (; a !== void 0 && a[r] === void 0;) a = e[i++];
	if (a === void 0) return;
	let o = a[r];
	if (o !== void 0) {
		if (Array.isArray(o)) do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(...o)), a = e[i++];
		while (a !== void 0);
		else if (o.toArray !== void 0) do
			o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
		while (a !== void 0);
		else do
			o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
		while (a !== void 0);
	}
}
var fu = class {
	static convertArray(e, t) {
		return cu(e, t);
	}
	static isTypedArray(e) {
		return hr(e);
	}
	static getKeyframeOrder(e) {
		return lu(e);
	}
	static sortedArray(e, t, n) {
		return uu(e, t, n);
	}
	static flattenJSON(e, t, n, r) {
		du(e, t, n, r);
	}
	static subclip(e, t, n, r, i = 30) {
		return function(e, t, n, r, i = 30) {
			let a = e.clone();
			a.name = t;
			let o = [];
			for (let e = 0; e < a.tracks.length; ++e) {
				let t = a.tracks[e], s = t.getValueSize(), c = [], l = [];
				for (let e = 0; e < t.times.length; ++e) {
					let a = t.times[e] * i;
					if (!(a < n || a >= r)) {
						c.push(t.times[e]);
						for (let n = 0; n < s; ++n) l.push(t.values[e * s + n]);
					}
				}
				c.length !== 0 && (t.times = cu(c, t.times.constructor), t.values = cu(l, t.values.constructor), o.push(t));
			}
			a.tracks = o;
			let s = 1 / 0;
			for (let e = 0; e < a.tracks.length; ++e) s > a.tracks[e].times[0] && (s = a.tracks[e].times[0]);
			for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * s);
			return a.resetDuration(), a;
		}(e, t, n, r, i);
	}
	static makeClipAdditive(e, t = 0, n = e, r = 30) {
		return function(e, t = 0, n = e, r = 30) {
			r <= 0 && (r = 30);
			let i = n.tracks.length, a = t / r;
			for (let t = 0; t < i; ++t) {
				let r = n.tracks[t], i = r.ValueTypeName;
				if (i === "bool" || i === "string") continue;
				let o = e.tracks.find(function(e) {
					return e.name === r.name && e.ValueTypeName === i;
				});
				if (o === void 0) continue;
				let s = 0, c = r.getValueSize();
				r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (s = c / 3);
				let l = 0, u = o.getValueSize();
				o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = u / 3);
				let d = r.times.length - 1, f;
				if (a <= r.times[0]) {
					let e = s, t = c - s;
					f = r.values.slice(e, t);
				} else if (a >= r.times[d]) {
					let e = d * c + s, t = e + c - s;
					f = r.values.slice(e, t);
				} else {
					let e = r.createInterpolant(), t = s, n = c - s;
					e.evaluate(a), f = e.resultBuffer.slice(t, n);
				}
				i === "quaternion" && new Ir().fromArray(f).normalize().conjugate().toArray(f);
				let p = o.times.length;
				for (let e = 0; e < p; ++e) {
					let t = e * u + l;
					if (i === "quaternion") Ir.multiplyQuaternionsFlat(o.values, t, f, 0, o.values, t);
					else {
						let e = u - 2 * l;
						for (let n = 0; n < e; ++n) o.values[t + n] -= f[n];
					}
				}
			}
			return e.blendMode = cn, e;
		}(e, t, n, r);
	}
}, pu = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		t: {
			e: {
				let a;
				i: {
					n: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break n;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break e;
						}
						a = t.length;
						break i;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break e;
						}
						a = n, n = 0;
						break i;
					}
					break t;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("call to abstract method");
	}
	intervalChanged_() {}
}, mu = class extends pu {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: rn,
			endingEnd: rn
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case an:
				i = e, o = 2 * t - n;
				break;
			case on:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case an:
				a = e, s = 2 * n - t;
				break;
			case on:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = .5 * (n - t), l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, hu = class extends pu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, gu = class extends pu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, _u = class extends pu {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.settings || this.DefaultSettings_, u = l.inTangents, d = l.outTangents;
		if (!u || !d) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let f = 2 * o, p = e - 1;
		for (let l = 0; l !== o; ++l) {
			let o = a[c + l], m = a[s + l], h = p * f + 2 * l, g = d[h], _ = d[h + 1], v = e * f + 2 * l, y = u[v], b = u[v + 1], x, S, C, w, T, E = (n - t) / (r - t);
			for (let e = 0; e < 8; e++) {
				x = E * E, S = x * E, C = 1 - E, w = C * C, T = w * C;
				let e = T * t + 3 * w * E * g + 3 * C * x * y + S * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * w * (g - t) + 6 * C * E * (y - g) + 3 * x * (r - y);
				if (Math.abs(i) < 1e-10) break;
				E -= e / i, E = Math.max(0, Math.min(1, E));
			}
			i[l] = T * o + 3 * w * E * _ + 3 * C * x * b + S * m;
		}
		return i;
	}
}, vu = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = cu(t, this.TimeBufferType), this.values = cu(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: cu(e.times, Array),
				values: cu(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new gu(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new hu(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new mu(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new _u(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.settings = this.settings), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case $t:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case en:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case tn:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case nn: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e === this.DefaultInterpolation) throw Error(t);
				this.setInterpolation(this.DefaultInterpolation);
			}
			return L("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return $t;
			case this.InterpolantFactoryMethodLinear: return en;
			case this.InterpolantFactoryMethodSmooth: return tn;
			case this.InterpolantFactoryMethodBezier: return nn;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (R("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (R("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				R("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				R("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && hr(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				R("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === tn, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = new this.constructor(this.name, e, t);
		return n.createInterpolant = this.createInterpolant, n;
	}
};
vu.prototype.ValueTypeName = "", vu.prototype.TimeBufferType = Float32Array, vu.prototype.ValueBufferType = Float32Array, vu.prototype.DefaultInterpolation = en;
var yu = class extends vu {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
yu.prototype.ValueTypeName = "bool", yu.prototype.ValueBufferType = Array, yu.prototype.DefaultInterpolation = $t, yu.prototype.InterpolantFactoryMethodLinear = void 0, yu.prototype.InterpolantFactoryMethodSmooth = void 0;
var bu = class extends vu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
bu.prototype.ValueTypeName = "color";
var xu = class extends vu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
xu.prototype.ValueTypeName = "number";
var Su = class extends pu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Ir.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Cu = class extends vu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Su(this.times, this.values, this.getValueSize(), e);
	}
};
Cu.prototype.ValueTypeName = "quaternion", Cu.prototype.InterpolantFactoryMethodSmooth = void 0;
var wu = class extends vu {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
wu.prototype.ValueTypeName = "string", wu.prototype.ValueBufferType = Array, wu.prototype.DefaultInterpolation = $t, wu.prototype.InterpolantFactoryMethodLinear = void 0, wu.prototype.InterpolantFactoryMethodSmooth = void 0;
var Tu = class extends vu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Tu.prototype.ValueTypeName = "vector";
var Eu = class {
	constructor(e = "", t = -1, n = [], r = 2500) {
		this.name = e, this.tracks = n, this.duration = t, this.blendMode = r, this.uuid = jr(), this.userData = {}, this.duration < 0 && this.resetDuration();
	}
	static parse(e) {
		let t = [], n = e.tracks, r = 1 / (e.fps || 1);
		for (let e = 0, i = n.length; e !== i; ++e) t.push(Du(n[e]).scale(r));
		let i = new this(e.name, e.duration, t, e.blendMode);
		return i.uuid = e.uuid, i.userData = JSON.parse(e.userData || "{}"), i;
	}
	static toJSON(e) {
		let t = [], n = e.tracks, r = {
			name: e.name,
			duration: e.duration,
			tracks: t,
			uuid: e.uuid,
			blendMode: e.blendMode,
			userData: JSON.stringify(e.userData)
		};
		for (let e = 0, r = n.length; e !== r; ++e) t.push(vu.toJSON(n[e]));
		return r;
	}
	static CreateFromMorphTargetSequence(e, t, n, r) {
		let i = t.length, a = [];
		for (let e = 0; e < i; e++) {
			let o = [], s = [];
			o.push((e + i - 1) % i, e, (e + 1) % i), s.push(0, 1, 0);
			let c = lu(o);
			o = uu(o, 1, c), s = uu(s, 1, c), r || o[0] !== 0 || (o.push(i), s.push(s[0])), a.push(new xu(".morphTargetInfluences[" + t[e].name + "]", o, s).scale(1 / n));
		}
		return new this(e, -1, a);
	}
	static findByName(e, t) {
		let n = e;
		if (!Array.isArray(e)) {
			let t = e;
			n = t.geometry && t.geometry.animations || t.animations;
		}
		for (let e = 0; e < n.length; e++) if (n[e].name === t) return n[e];
		return null;
	}
	static CreateClipsFromMorphTargetSequences(e, t, n) {
		let r = {}, i = /^([\w-]*?)([\d]+)$/;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t], a = n.name.match(i);
			if (a && a.length > 1) {
				let e = a[1], t = r[e];
				t || (r[e] = t = []), t.push(n);
			}
		}
		let a = [];
		for (let e in r) a.push(this.CreateFromMorphTargetSequence(e, r[e], t, n));
		return a;
	}
	static parseAnimation(e, t) {
		if (L("AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return R("AnimationClip: No animation in JSONLoader data."), null;
		let n = function(e, t, n, r, i) {
			if (n.length !== 0) {
				let a = [], o = [];
				du(n, a, o, r), a.length !== 0 && i.push(new e(t, a, o));
			}
		}, r = [], i = e.name || "default", a = e.fps || 30, o = e.blendMode, s = e.length || -1, c = e.hierarchy || [];
		for (let e = 0; e < c.length; e++) {
			let i = c[e].keys;
			if (i && i.length !== 0) {
				if (i[0].morphTargets) {
					let e = {}, t = 0;
					for (; t < i.length; t++) if (i[t].morphTargets) for (let n = 0; n < i[t].morphTargets.length; n++) e[i[t].morphTargets[n]] = -1;
					for (let n in e) {
						let e = [], a = [];
						for (let r = 0; r !== i[t].morphTargets.length; ++r) {
							let r = i[t];
							e.push(r.time), a.push(+(r.morphTarget === n));
						}
						r.push(new xu(".morphTargetInfluence[" + n + "]", e, a));
					}
					s = e.length * a;
				} else {
					let a = ".bones[" + t[e].name + "]";
					n(Tu, a + ".position", i, "pos", r), n(Cu, a + ".quaternion", i, "rot", r), n(Tu, a + ".scale", i, "scl", r);
				}
			}
		}
		return r.length === 0 ? null : new this(i, s, r, o);
	}
	resetDuration() {
		let e = 0;
		for (let t = 0, n = this.tracks.length; t !== n; ++t) {
			let n = this.tracks[t];
			e = Math.max(e, n.times[n.times.length - 1]);
		}
		return this.duration = e, this;
	}
	trim() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
		return this;
	}
	validate() {
		let e = !0;
		for (let t = 0; t < this.tracks.length; t++) e &&= this.tracks[t].validate();
		return e;
	}
	optimize() {
		for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
		return this;
	}
	clone() {
		let e = [];
		for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
		let t = new this.constructor(this.name, this.duration, e, this.blendMode);
		return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
	}
	toJSON() {
		return this.constructor.toJSON(this);
	}
};
function Du(e) {
	if (e.type === void 0) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
	let t = function(e) {
		switch (e.toLowerCase()) {
			case "scalar":
			case "double":
			case "float":
			case "number":
			case "integer": return xu;
			case "vector":
			case "vector2":
			case "vector3":
			case "vector4": return Tu;
			case "color": return bu;
			case "quaternion": return Cu;
			case "bool":
			case "boolean": return yu;
			case "string": return wu;
		}
		throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
	}(e.type);
	if (e.times === void 0) {
		let t = [], n = [];
		du(e.keys, t, n, "value"), e.times = t, e.values = n;
	}
	return t.parse === void 0 ? new t(e.name, e.times, e.values, e.interpolation) : t.parse(e);
}
var Ou = {
	enabled: !1,
	files: {},
	add: function(e, t) {
		!1 !== this.enabled && (ku(e) || (this.files[e] = t));
	},
	get: function(e) {
		if (!1 !== this.enabled && !ku(e)) return this.files[e];
	},
	remove: function(e) {
		delete this.files[e];
	},
	clear: function() {
		this.files = {};
	}
};
function ku(e) {
	try {
		let t = e.slice(e.indexOf(":") + 1);
		return new URL(t).protocol === "blob:";
	} catch {
		return !1;
	}
}
var Au = class {
	constructor(e, t, n) {
		let r = this, i, a = !1, o = 0, s = 0, c = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			s++, !1 === a && r.onStart !== void 0 && r.onStart(e, o, s), a = !0;
		}, this.itemEnd = function(e) {
			o++, r.onProgress !== void 0 && r.onProgress(e, o, s), o === s && (a = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return i ? i(e) : e;
		}, this.setURLModifier = function(e) {
			return i = e, this;
		}, this.addHandler = function(e, t) {
			return c.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = c.indexOf(e);
			return t !== -1 && c.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = c.length; t < n; t += 2) {
				let n = c[t], r = c[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}, ju = new Au(), Mu = class {
	constructor(e) {
		this.manager = e === void 0 ? ju : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
	abort() {
		return this;
	}
};
Mu.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Nu, Pu = {}, Fu = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
}, Iu = class extends Mu {
	constructor(e) {
		super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = Ou.get(`file:${e}`);
		if (i !== void 0) return this.manager.itemStart(e), setTimeout(() => {
			t && t(i), this.manager.itemEnd(e);
		}, 0), i;
		if (Pu[e] !== void 0) return void Pu[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		Pu[e] = [], Pu[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		let a = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin",
			signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
		}), o = this.mimeType, s = this.responseType;
		fetch(a).then((t) => {
			if (t.status === 200 || t.status === 0) {
				if (t.status === 0 && L("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
				let n = Pu[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, o = a !== 0, s = 0, c = new ReadableStream({ start(e) {
					(function t() {
						r.read().then(({ done: r, value: i }) => {
							if (r) e.close();
							else {
								s += i.byteLength;
								let r = new ProgressEvent("progress", {
									lengthComputable: o,
									loaded: s,
									total: a
								});
								for (let e = 0, t = n.length; e < t; e++) {
									let t = n[e];
									t.onProgress && t.onProgress(r);
								}
								e.enqueue(i), t();
							}
						}, (t) => {
							e.error(t);
						});
					})();
				} });
				return new Response(c);
			}
			throw new Fu(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
		}).then((e) => {
			switch (s) {
				case "arraybuffer": return e.arrayBuffer();
				case "blob": return e.blob();
				case "document": return e.text().then((e) => new DOMParser().parseFromString(e, o));
				case "json": return e.json();
				default:
					if (o === "") return e.text();
					{
						let t = /charset="?([^;"\s]*)"?/i.exec(o), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
						return e.arrayBuffer().then((e) => r.decode(e));
					}
			}
		}).then((t) => {
			Ou.add(`file:${e}`, t);
			let n = Pu[e];
			delete Pu[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onLoad && r.onLoad(t);
			}
		}).catch((t) => {
			let n = Pu[e];
			if (n === void 0) throw this.manager.itemError(e), t;
			delete Pu[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			this.manager.itemError(e);
		}).finally(() => {
			this.manager.itemEnd(e);
		}), this.manager.itemStart(e);
	}
	setResponseType(e) {
		return this.responseType = e, this;
	}
	setMimeType(e) {
		return this.mimeType = e, this;
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, Lu = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Iu(this.manager);
		a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : R(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) {
			let r = Eu.parse(e[n]);
			t.push(r);
		}
		return t;
	}
}, Ru = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = [], o = new uc(), s = new Iu(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(i.withCredentials);
		let c = 0;
		function l(l) {
			s.load(e[l], function(e) {
				let n = i.parse(e, !0);
				a[l] = {
					width: n.width,
					height: n.height,
					format: n.format,
					mipmaps: n.mipmaps
				}, c += 1, c === 6 && (n.mipmapCount === 1 && (o.minFilter = Be), o.image = a, o.format = n.format, o.needsUpdate = !0, t && t(o));
			}, n, r);
		}
		if (Array.isArray(e)) for (let t = 0, n = e.length; t < n; ++t) l(t);
		else s.load(e, function(e) {
			let n = i.parse(e, !0);
			if (n.isCubemap) {
				let e = n.mipmaps.length / n.mipmapCount;
				for (let t = 0; t < e; t++) {
					a[t] = { mipmaps: [] };
					for (let e = 0; e < n.mipmapCount; e++) a[t].mipmaps.push(n.mipmaps[t * n.mipmapCount + e]), a[t].format = n.format, a[t].width = n.width, a[t].height = n.height;
				}
				o.image = a;
			} else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
			n.mipmapCount === 1 && (o.minFilter = Be), o.format = n.format, o.needsUpdate = !0, t && t(o);
		}, n, r);
		return o;
	}
}, zu = /* @__PURE__ */ new WeakMap(), Bu = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = Ou.get(`image:${e}`);
		if (a !== void 0) {
			if (!0 === a.complete) i.manager.itemStart(e), setTimeout(function() {
				t && t(a), i.manager.itemEnd(e);
			}, 0);
			else {
				let e = zu.get(a);
				e === void 0 && (e = [], zu.set(a, e)), e.push({
					onLoad: t,
					onError: r
				});
			}
			return a;
		}
		let o = gr("img");
		function s() {
			l(), t && t(this);
			let n = zu.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.onLoad && t.onLoad(this);
			}
			zu.delete(this), i.manager.itemEnd(e);
		}
		function c(t) {
			l(), r && r(t), Ou.remove(`image:${e}`);
			let n = zu.get(this) || [];
			for (let e = 0; e < n.length; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			zu.delete(this), i.manager.itemError(e), i.manager.itemEnd(e);
		}
		function l() {
			o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1);
		}
		return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Ou.add(`image:${e}`, o), i.manager.itemStart(e), o.src = e, o;
	}
}, Vu = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = new pc();
		i.colorSpace = yn;
		let a = new Bu(this.manager);
		a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
		let o = 0;
		function s(n) {
			a.load(e[n], function(e) {
				i.images[n] = e, o++, o === 6 && (i.needsUpdate = !0, t && t(i));
			}, void 0, r);
		}
		for (let t = 0; t < e.length; ++t) s(t);
		return i;
	}
}, Hu = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Zo(), o = new Iu(this.manager);
		return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(i.withCredentials), o.load(e, function(e) {
			let n;
			try {
				n = i.parse(e);
			} catch (e) {
				if (r === void 0) return void e(e);
				r(e);
			}
			n.image === void 0 ? n.data !== void 0 && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data) : a.image = n.image, a.wrapS = n.wrapS === void 0 ? Ne : n.wrapS, a.wrapT = n.wrapT === void 0 ? Ne : n.wrapT, a.magFilter = n.magFilter === void 0 ? Be : n.magFilter, a.minFilter = n.minFilter === void 0 ? Be : n.minFilter, a.anisotropy = n.anisotropy === void 0 ? 1 : n.anisotropy, n.colorSpace !== void 0 && (a.colorSpace = n.colorSpace), n.flipY !== void 0 && (a.flipY = n.flipY), n.format !== void 0 && (a.format = n.format), n.type !== void 0 && (a.type = n.type), n.mipmaps !== void 0 && (a.mipmaps = n.mipmaps, a.minFilter = He), n.mipmapCount === 1 && (a.minFilter = Be), n.generateMipmaps !== void 0 && (a.generateMipmaps = n.generateMipmaps), a.needsUpdate = !0, t && t(a, n);
		}, n, r), a;
	}
}, Uu = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = new Qr(), a = new Bu(this.manager);
		return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
			i.image = e, i.needsUpdate = !0, t !== void 0 && t(i);
		}, n, r), i;
	}
}, Wu = class extends Mi {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new K(e), this.intensity = t;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, Gu = class extends Wu {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Mi.DEFAULT_UP), this.updateMatrix(), this.groundColor = new K(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.groundColor = this.groundColor.getHex(), t;
	}
}, Ku = new G(), qu = new H(), Ju = new H(), Yu = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new V(512, 512), this.mapType = We, this.map = null, this.mapPass = null, this.matrix = new G(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new _s(), this._frameExtents = new V(1, 1), this._viewportCount = 1, this._viewports = [new $r(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera, n = this.matrix;
		qu.setFromMatrixPosition(e.matrixWorld), t.position.copy(qu), Ju.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ju), t.updateMatrixWorld(), Ku.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ku, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Ku);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), this.mapSize.x === 512 && this.mapSize.y === 512 || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, Xu = new H(), Zu = new Ir(), Qu = new H(), $u = class extends Mi {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new G(), this.projectionMatrix = new G(), this.projectionMatrixInverse = new G(), this.coordinateSystem = sr, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(Xu, Zu, Qu), Qu.x === 1 && Qu.y === 1 && Qu.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Xu, Zu, Qu.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t) {
		super.updateWorldMatrix(e, t), this.matrixWorld.decompose(Xu, Zu, Qu), Qu.x === 1 && Qu.y === 1 && Qu.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Xu, Zu, Qu.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ed = new H(), td = new V(), nd = new V(), rd = class extends $u {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = 2 * Ar * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(.5 * kr * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return 2 * Ar * Math.atan(Math.tan(.5 * kr * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		ed.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(ed.x, ed.y).multiplyScalar(-e / ed.z), ed.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ed.x, ed.y).multiplyScalar(-e / ed.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, td, nd), t.subVectors(nd, td);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(.5 * kr * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, id = class extends Yu {
	constructor() {
		super(new rd(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
	}
	updateMatrices(e) {
		let t = this.camera, n = 2 * Ar * e.angle * this.focus, r = this.mapSize.width / this.mapSize.height * this.aspect, i = e.distance || t.far;
		n === t.fov && r === t.aspect && i === t.far || (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), super.updateMatrices(e);
	}
	copy(e) {
		return super.copy(e), this.focus = e.focus, this;
	}
}, ad = class extends Wu {
	constructor(e, t, n = 0, r = Math.PI / 3, i = 0, a = 2) {
		super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Mi.DEFAULT_UP), this.updateMatrix(), this.target = new Mi(), this.distance = n, this.angle = r, this.penumbra = i, this.decay = a, this.map = null, this.shadow = new id();
	}
	get power() {
		return this.intensity * Math.PI;
	}
	set power(e) {
		this.intensity = e / Math.PI;
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
	}
}, od = class extends Yu {
	constructor() {
		super(new rd(90, 1, .5, 500)), this.isPointLightShadow = !0;
	}
}, sd = class extends Wu {
	constructor(e, t, n = 0, r = 2) {
		super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new od();
	}
	get power() {
		return 4 * this.intensity * Math.PI;
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI);
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
	}
}, cd = class extends $u {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, ld = class extends Yu {
	constructor() {
		super(new cd(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, ud = class extends Wu {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Mi.DEFAULT_UP), this.updateMatrix(), this.target = new Mi(), this.shadow = new ld();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, dd = class extends Wu {
	constructor(e, t) {
		super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
	}
}, fd = class extends Wu {
	constructor(e, t, n = 10, r = 10) {
		super(e, t), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = r;
	}
	get power() {
		return this.intensity * this.width * this.height * Math.PI;
	}
	set power(e) {
		this.intensity = e / (this.width * this.height * Math.PI);
	}
	copy(e) {
		return super.copy(e), this.width = e.width, this.height = e.height, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.width = this.width, t.object.height = this.height, t;
	}
}, pd = class {
	constructor() {
		this.isSphericalHarmonics3 = !0, this.coefficients = [];
		for (let e = 0; e < 9; e++) this.coefficients.push(new H());
	}
	set(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
		return this;
	}
	zero() {
		for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
		return this;
	}
	getAt(e, t) {
		let n = e.x, r = e.y, i = e.z, a = this.coefficients;
		return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * r), t.addScaledVector(a[2], .488603 * i), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], n * r * 1.092548), t.addScaledVector(a[5], r * i * 1.092548), t.addScaledVector(a[6], .315392 * (3 * i * i - 1)), t.addScaledVector(a[7], n * i * 1.092548), t.addScaledVector(a[8], .546274 * (n * n - r * r)), t;
	}
	getIrradianceAt(e, t) {
		let n = e.x, r = e.y, i = e.z, a = this.coefficients;
		return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 1.023328 * r), t.addScaledVector(a[2], 1.023328 * i), t.addScaledVector(a[3], 1.023328 * n), t.addScaledVector(a[4], .858086 * n * r), t.addScaledVector(a[5], .858086 * r * i), t.addScaledVector(a[6], .743125 * i * i - .247708), t.addScaledVector(a[7], .858086 * n * i), t.addScaledVector(a[8], .429043 * (n * n - r * r)), t;
	}
	add(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
		return this;
	}
	addScaledSH(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
		return this;
	}
	scale(e) {
		for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
		return this;
	}
	lerp(e, t) {
		for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
		return this;
	}
	equals(e) {
		for (let t = 0; t < 9; t++) if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
		return !0;
	}
	copy(e) {
		return this.set(e.coefficients);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	fromArray(e, t = 0) {
		let n = this.coefficients;
		for (let r = 0; r < 9; r++) n[r].fromArray(e, t + 3 * r);
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.coefficients;
		for (let r = 0; r < 9; r++) n[r].toArray(e, t + 3 * r);
		return e;
	}
	static getBasisAt(e, t) {
		let n = e.x, r = e.y, i = e.z;
		t[0] = .282095, t[1] = .488603 * r, t[2] = .488603 * i, t[3] = .488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = .315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = .546274 * (n * n - r * r);
	}
}, md = class extends Wu {
	constructor(e = new pd(), t = 1) {
		super(void 0, t), this.isLightProbe = !0, this.sh = e;
	}
	copy(e) {
		return super.copy(e), this.sh.copy(e.sh), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.sh = this.sh.toArray(), t;
	}
}, hd = class e extends Mu {
	constructor(e) {
		super(e), this.textures = {};
	}
	load(e, t, n, r) {
		let i = this, a = new Iu(i.manager);
		a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : R(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = this.textures;
		function n(e) {
			return t[e] === void 0 && L("MaterialLoader: Undefined texture", e), t[e];
		}
		let r = this.createMaterialFromType(e.type);
		if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = e.sheen), e.sheenColor !== void 0 && (r.sheenColor = new K().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (r.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && r.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular !== void 0 && r.specular.setHex(e.specular), e.specularIntensity !== void 0 && (r.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && r.specularColor !== void 0 && r.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (r.dispersion = e.dispersion), e.iridescence !== void 0 && (r.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (r.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (r.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (r.transmission = e.transmission), e.thickness !== void 0 && (r.thickness = e.thickness), e.attenuationDistance !== void 0 && (r.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && r.attenuationColor !== void 0 && r.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (r.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (r.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.shadowSide !== void 0 && (r.shadowSide = e.shadowSide), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (r.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (r.depthFunc = e.depthFunc), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (r.blendSrc = e.blendSrc), e.blendDst !== void 0 && (r.blendDst = e.blendDst), e.blendEquation !== void 0 && (r.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (r.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (r.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (r.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && r.blendColor !== void 0 && r.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (r.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== void 0 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (r.dithering = e.dithering), e.alphaToCoverage !== void 0 && (r.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (r.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (r.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (r.allowOverride = e.allowOverride), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.vertexColors !== void 0 && (r.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.uniforms !== void 0) for (let t in e.uniforms) {
			let i = e.uniforms[t];
			switch (r.uniforms[t] = {}, i.type) {
				case "t":
					r.uniforms[t].value = n(i.value);
					break;
				case "c":
					r.uniforms[t].value = new K().setHex(i.value);
					break;
				case "v2":
					r.uniforms[t].value = new V().fromArray(i.value);
					break;
				case "v3":
					r.uniforms[t].value = new H().fromArray(i.value);
					break;
				case "v4":
					r.uniforms[t].value = new $r().fromArray(i.value);
					break;
				case "m3":
					r.uniforms[t].value = new U().fromArray(i.value);
					break;
				case "m4":
					r.uniforms[t].value = new G().fromArray(i.value);
					break;
				default: r.uniforms[t].value = i.value;
			}
		}
		if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (r.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) r.extensions[t] = e.extensions[t];
		if (e.lights !== void 0 && (r.lights = e.lights), e.clipping !== void 0 && (r.clipping = e.clipping), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			!1 === Array.isArray(t) && (t = [t, t]), r.normalScale = new V().fromArray(t);
		}
		return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.specularIntensityMap !== void 0 && (r.specularIntensityMap = n(e.specularIntensityMap)), e.specularColorMap !== void 0 && (r.specularColorMap = n(e.specularColorMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapRotation !== void 0 && r.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (r.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new V().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (r.iridescenceMap = n(e.iridescenceMap)), e.iridescenceThicknessMap !== void 0 && (r.iridescenceThicknessMap = n(e.iridescenceThicknessMap)), e.transmissionMap !== void 0 && (r.transmissionMap = n(e.transmissionMap)), e.thicknessMap !== void 0 && (r.thicknessMap = n(e.thicknessMap)), e.anisotropyMap !== void 0 && (r.anisotropyMap = n(e.anisotropyMap)), e.sheenColorMap !== void 0 && (r.sheenColorMap = n(e.sheenColorMap)), e.sheenRoughnessMap !== void 0 && (r.sheenRoughnessMap = n(e.sheenRoughnessMap)), r;
	}
	setTextures(e) {
		return this.textures = e, this;
	}
	createMaterialFromType(t) {
		return e.createMaterialFromType(t);
	}
	static createMaterialFromType(e) {
		return new {
			ShadowMaterial: Gl,
			SpriteMaterial: $a,
			RawShaderMaterial: Zl,
			ShaderMaterial: Xl,
			PointsMaterial: ec,
			MeshPhysicalMaterial: $l,
			MeshStandardMaterial: Ql,
			MeshPhongMaterial: eu,
			MeshToonMaterial: tu,
			MeshNormalMaterial: nu,
			MeshLambertMaterial: ru,
			MeshDepthMaterial: iu,
			MeshDistanceMaterial: au,
			MeshBasicMaterial: Eo,
			MeshMatcapMaterial: ou,
			LineDashedMaterial: su,
			LineBasicMaterial: Bs,
			Material: Qa
		}[e]();
	}
}, gd = class {
	static extractUrlBase(e) {
		let t = e.lastIndexOf("/");
		return t === -1 ? "./" : e.slice(0, t + 1);
	}
	static resolveURL(e, t) {
		return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
	}
}, _d = class extends J {
	constructor() {
		super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
	}
}, vd = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Iu(i.manager);
		a.setPath(i.path), a.setRequestHeader(i.requestHeader), a.setWithCredentials(i.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(JSON.parse(n)));
			} catch (t) {
				r ? r(t) : R(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		let t = {}, n = {};
		function r(e, r) {
			if (t[r] !== void 0) return t[r];
			let i = e.interleavedBuffers[r], a = function(e, t) {
				if (n[t] !== void 0) return n[t];
				let r = e.arrayBuffers[t], i = new Uint32Array(r).buffer;
				return n[t] = i, i;
			}(e, i.buffer), o = new Ja(mr(i.type, a), i.stride);
			return o.uuid = i.uuid, t[r] = o, o;
		}
		let i = e.isInstancedBufferGeometry ? new _d() : new J(), a = e.data.index;
		if (a !== void 0) {
			let e = mr(a.type, a.array);
			i.setIndex(new Oa(e, 1));
		}
		let o = e.data.attributes;
		for (let t in o) {
			let n = o[t], a;
			if (n.isInterleavedBufferAttribute) a = new Xa(r(e.data, n.data), n.itemSize, n.offset, n.normalized);
			else {
				let e = mr(n.type, n.array);
				a = new (n.isInstancedBufferAttribute ? ts : Oa)(e, n.itemSize, n.normalized);
			}
			n.name !== void 0 && (a.name = n.name), n.usage !== void 0 && a.setUsage(n.usage), i.setAttribute(t, a);
		}
		let s = e.data.morphAttributes;
		if (s) for (let t in s) {
			let n = s[t], a = [];
			for (let t = 0, i = n.length; t < i; t++) {
				let i = n[t], o;
				o = i.isInterleavedBufferAttribute ? new Xa(r(e.data, i.data), i.itemSize, i.offset, i.normalized) : new Oa(mr(i.type, i.array), i.itemSize, i.normalized), i.name !== void 0 && (o.name = i.name), a.push(o);
			}
			i.morphAttributes[t] = a;
		}
		e.data.morphTargetsRelative && (i.morphTargetsRelative = !0);
		let c = e.data.groups || e.data.drawcalls || e.data.offsets;
		if (c !== void 0) for (let e = 0, t = c.length; e !== t; ++e) {
			let t = c[e];
			i.addGroup(t.start, t.count, t.materialIndex);
		}
		let l = e.data.boundingSphere;
		return l !== void 0 && (i.boundingSphere = new Ba().fromJSON(l)), e.name && (i.name = e.name), e.userData && (i.userData = e.userData), i;
	}
}, yd = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = this.path === "" ? gd.extractUrlBase(e) : this.path;
		this.resourcePath = this.resourcePath || a;
		let o = new Iu(this.manager);
		o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(n) {
			let a = null;
			try {
				a = JSON.parse(n);
			} catch (t) {
				r !== void 0 && r(t), t("ObjectLoader: Can't parse " + e + ".", t.message);
				return;
			}
			let o = a.metadata;
			if (o === void 0 || o.type === void 0 || o.type.toLowerCase() === "geometry") return r !== void 0 && r(/* @__PURE__ */ Error("THREE.ObjectLoader: Can't load " + e)), void R("ObjectLoader: Can't load " + e);
			i.parse(a, t);
		}, n, r);
	}
	async loadAsync(e, t) {
		let n = this.path === "" ? gd.extractUrlBase(e) : this.path;
		this.resourcePath = this.resourcePath || n;
		let r = new Iu(this.manager);
		r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials);
		let i = await r.loadAsync(e, t), a;
		try {
			a = JSON.parse(i);
		} catch (t) {
			throw Error("ObjectLoader: Can't parse " + e + ". " + t.message);
		}
		let o = a.metadata;
		if (o === void 0 || o.type === void 0 || o.type.toLowerCase() === "geometry") throw Error("THREE.ObjectLoader: Can't load " + e);
		return await this.parseAsync(a);
	}
	parse(e, t) {
		let n = this.parseAnimations(e.animations), r = this.parseShapes(e.shapes), i = this.parseGeometries(e.geometries, r), a = this.parseImages(e.images, function() {
			t !== void 0 && t(c);
		}), o = this.parseTextures(e.textures, a), s = this.parseMaterials(e.materials, o), c = this.parseObject(e.object, i, s, o, n), l = this.parseSkeletons(e.skeletons, c);
		if (this.bindSkeletons(c, l), this.bindLightTargets(c), t !== void 0) {
			let e = !1;
			for (let t in a) if (a[t].data instanceof HTMLImageElement) {
				e = !0;
				break;
			}
			!1 === e && t(c);
		}
		return c;
	}
	async parseAsync(e) {
		let t = this.parseAnimations(e.animations), n = this.parseShapes(e.shapes), r = this.parseGeometries(e.geometries, n), i = await this.parseImagesAsync(e.images), a = this.parseTextures(e.textures, i), o = this.parseMaterials(e.materials, a), s = this.parseObject(e.object, r, o, a, t), c = this.parseSkeletons(e.skeletons, s);
		return this.bindSkeletons(s, c), this.bindLightTargets(s), s;
	}
	parseShapes(e) {
		let t = {};
		if (e !== void 0) for (let n = 0, r = e.length; n < r; n++) {
			let r = new Qc().fromJSON(e[n]);
			t[r.uuid] = r;
		}
		return t;
	}
	parseSkeletons(e, t) {
		let n = {}, r = {};
		if (t.traverse(function(e) {
			e.isBone && (r[e.uuid] = e);
		}), e !== void 0) for (let t = 0, i = e.length; t < i; t++) {
			let i = new es().fromJSON(e[t], r);
			n[i.uuid] = i;
		}
		return n;
	}
	parseGeometries(e, t) {
		let n = {};
		if (e !== void 0) {
			let r = new vd();
			for (let i = 0, a = e.length; i < a; i++) {
				let a, o = e[i];
				switch (o.type) {
					case "BufferGeometry":
					case "InstancedBufferGeometry":
						a = r.parse(o);
						break;
					default: o.type in Wl ? a = Wl[o.type].fromJSON(o, t) : L(`ObjectLoader: Unsupported geometry type "${o.type}"`);
				}
				a.uuid = o.uuid, o.name !== void 0 && (a.name = o.name), o.userData !== void 0 && (a.userData = o.userData), n[o.uuid] = a;
			}
		}
		return n;
	}
	parseMaterials(e, t) {
		let n = {}, r = {};
		if (e !== void 0) {
			let i = new hd();
			i.setTextures(t);
			for (let t = 0, a = e.length; t < a; t++) {
				let a = e[t];
				n[a.uuid] === void 0 && (n[a.uuid] = i.parse(a)), r[a.uuid] = n[a.uuid];
			}
		}
		return r;
	}
	parseAnimations(e) {
		let t = {};
		if (e !== void 0) for (let n = 0; n < e.length; n++) {
			let r = e[n], i = Eu.parse(r);
			t[i.uuid] = i;
		}
		return t;
	}
	parseImages(e, t) {
		let n = this, r = {}, i;
		function a(e) {
			if (typeof e == "string") {
				let t = e;
				return function(e) {
					return n.manager.itemStart(e), i.load(e, function() {
						n.manager.itemEnd(e);
					}, void 0, function() {
						n.manager.itemError(e), n.manager.itemEnd(e);
					});
				}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(t) ? t : n.resourcePath + t);
			}
			return e.data ? {
				data: mr(e.type, e.data),
				width: e.width,
				height: e.height
			} : null;
		}
		if (e !== void 0 && e.length > 0) {
			i = new Bu(new Au(t)), i.setCrossOrigin(this.crossOrigin);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t], i = n.url;
				if (Array.isArray(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) {
						let n = a(i[t]);
						n !== null && (n instanceof HTMLImageElement ? e.push(n) : e.push(new Zo(n.data, n.width, n.height)));
					}
					r[n.uuid] = new Jr(e);
				} else {
					let e = a(n.url);
					r[n.uuid] = new Jr(e);
				}
			}
		}
		return r;
	}
	async parseImagesAsync(e) {
		let t = this, n = {}, r;
		async function i(e) {
			if (typeof e == "string") {
				let n = e, i = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : t.resourcePath + n;
				return await r.loadAsync(i);
			}
			return e.data ? {
				data: mr(e.type, e.data),
				width: e.width,
				height: e.height
			} : null;
		}
		if (e !== void 0 && e.length > 0) {
			r = new Bu(this.manager), r.setCrossOrigin(this.crossOrigin);
			for (let t = 0, r = e.length; t < r; t++) {
				let r = e[t], a = r.url;
				if (Array.isArray(a)) {
					let e = [];
					for (let t = 0, n = a.length; t < n; t++) {
						let n = a[t], r = await i(n);
						r !== null && (r instanceof HTMLImageElement ? e.push(r) : e.push(new Zo(r.data, r.width, r.height)));
					}
					n[r.uuid] = new Jr(e);
				} else {
					let e = await i(r.url);
					n[r.uuid] = new Jr(e);
				}
			}
		}
		return n;
	}
	parseTextures(e, t) {
		function n(e, t) {
			return typeof e == "number" ? e : (L("ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e]);
		}
		let r = {};
		if (e !== void 0) for (let i = 0, a = e.length; i < a; i++) {
			let a = e[i];
			a.image === void 0 && L("ObjectLoader: No \"image\" specified for", a.uuid), t[a.image] === void 0 && L("ObjectLoader: Undefined image", a.image);
			let o = t[a.image], s = o.data, c;
			Array.isArray(s) ? (c = new pc(), s.length === 6 && (c.needsUpdate = !0)) : (c = s && s.data ? new Zo() : new Qr(), s && (c.needsUpdate = !0)), c.source = o, c.uuid = a.uuid, a.name !== void 0 && (c.name = a.name), a.mapping !== void 0 && (c.mapping = n(a.mapping, bd)), a.channel !== void 0 && (c.channel = a.channel), a.offset !== void 0 && c.offset.fromArray(a.offset), a.repeat !== void 0 && c.repeat.fromArray(a.repeat), a.center !== void 0 && c.center.fromArray(a.center), a.rotation !== void 0 && (c.rotation = a.rotation), a.wrap !== void 0 && (c.wrapS = n(a.wrap[0], xd), c.wrapT = n(a.wrap[1], xd)), a.format !== void 0 && (c.format = a.format), a.internalFormat !== void 0 && (c.internalFormat = a.internalFormat), a.type !== void 0 && (c.type = a.type), a.colorSpace !== void 0 && (c.colorSpace = a.colorSpace), a.minFilter !== void 0 && (c.minFilter = n(a.minFilter, Sd)), a.magFilter !== void 0 && (c.magFilter = n(a.magFilter, Sd)), a.anisotropy !== void 0 && (c.anisotropy = a.anisotropy), a.flipY !== void 0 && (c.flipY = a.flipY), a.generateMipmaps !== void 0 && (c.generateMipmaps = a.generateMipmaps), a.premultiplyAlpha !== void 0 && (c.premultiplyAlpha = a.premultiplyAlpha), a.unpackAlignment !== void 0 && (c.unpackAlignment = a.unpackAlignment), a.compareFunction !== void 0 && (c.compareFunction = a.compareFunction), a.userData !== void 0 && (c.userData = a.userData), r[a.uuid] = c;
		}
		return r;
	}
	parseObject(e, t, n, r, i) {
		let a, o, s;
		function c(e) {
			return t[e] === void 0 && L("ObjectLoader: Undefined geometry", e), t[e];
		}
		function l(e) {
			if (e !== void 0) {
				if (Array.isArray(e)) {
					let t = [];
					for (let r = 0, i = e.length; r < i; r++) {
						let i = e[r];
						n[i] === void 0 && L("ObjectLoader: Undefined material", i), t.push(n[i]);
					}
					return t;
				}
				return n[e] === void 0 && L("ObjectLoader: Undefined material", e), n[e];
			}
		}
		function u(e) {
			return r[e] === void 0 && L("ObjectLoader: Undefined texture", e), r[e];
		}
		switch (e.type) {
			case "Scene":
				a = new Ui(), e.background !== void 0 && (Number.isInteger(e.background) ? a.background = new K(e.background) : a.background = u(e.background)), e.environment !== void 0 && (a.environment = u(e.environment)), e.fog !== void 0 && (e.fog.type === "Fog" ? a.fog = new Hi(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (a.fog = new Vi(e.fog.color, e.fog.density)), e.fog.name !== "" && (a.fog.name = e.fog.name)), e.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = e.backgroundBlurriness), e.backgroundIntensity !== void 0 && (a.backgroundIntensity = e.backgroundIntensity), e.backgroundRotation !== void 0 && a.backgroundRotation.fromArray(e.backgroundRotation), e.environmentIntensity !== void 0 && (a.environmentIntensity = e.environmentIntensity), e.environmentRotation !== void 0 && a.environmentRotation.fromArray(e.environmentRotation);
				break;
			case "PerspectiveCamera":
				a = new rd(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (a.focus = e.focus), e.zoom !== void 0 && (a.zoom = e.zoom), e.filmGauge !== void 0 && (a.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (a.filmOffset = e.filmOffset), e.view !== void 0 && (a.view = Object.assign({}, e.view));
				break;
			case "OrthographicCamera":
				a = new cd(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (a.zoom = e.zoom), e.view !== void 0 && (a.view = Object.assign({}, e.view));
				break;
			case "AmbientLight":
				a = new dd(e.color, e.intensity);
				break;
			case "DirectionalLight":
				a = new ud(e.color, e.intensity), a.target = e.target || "";
				break;
			case "PointLight":
				a = new sd(e.color, e.intensity, e.distance, e.decay);
				break;
			case "RectAreaLight":
				a = new fd(e.color, e.intensity, e.width, e.height);
				break;
			case "SpotLight":
				a = new ad(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay), a.target = e.target || "";
				break;
			case "HemisphereLight":
				a = new Gu(e.color, e.groundColor, e.intensity);
				break;
			case "LightProbe":
				a = new md(new pd().fromArray(e.sh), e.intensity);
				break;
			case "SkinnedMesh":
				o = c(e.geometry), s = l(e.material), a = new Yo(o, s), e.bindMode !== void 0 && (a.bindMode = e.bindMode), e.bindMatrix !== void 0 && a.bindMatrix.fromArray(e.bindMatrix), e.skeleton !== void 0 && (a.skeleton = e.skeleton);
				break;
			case "Mesh":
				o = c(e.geometry), s = l(e.material), a = new Ro(o, s);
				break;
			case "InstancedMesh":
				o = c(e.geometry), s = l(e.material);
				let t = e.count, n = e.instanceMatrix, r = e.instanceColor;
				a = new ls(o, s, t), a.instanceMatrix = new ts(new Float32Array(n.array), 16), r !== void 0 && (a.instanceColor = new ts(new Float32Array(r.array), r.itemSize));
				break;
			case "BatchedMesh":
				o = c(e.geometry), s = l(e.material), a = new zs(e.maxInstanceCount, e.maxVertexCount, e.maxIndexCount, s), a.geometry = o, a.perObjectFrustumCulled = e.perObjectFrustumCulled, a.sortObjects = e.sortObjects, a._drawRanges = e.drawRanges, a._reservedRanges = e.reservedRanges, a._geometryInfo = e.geometryInfo.map((e) => {
					let t = null, n = null;
					return e.boundingBox !== void 0 && (t = new ia().fromJSON(e.boundingBox)), e.boundingSphere !== void 0 && (n = new Ba().fromJSON(e.boundingSphere)), {
						...e,
						boundingBox: t,
						boundingSphere: n
					};
				}), a._instanceInfo = e.instanceInfo, a._availableInstanceIds = e._availableInstanceIds, a._availableGeometryIds = e._availableGeometryIds, a._nextIndexStart = e.nextIndexStart, a._nextVertexStart = e.nextVertexStart, a._geometryCount = e.geometryCount, a._maxInstanceCount = e.maxInstanceCount, a._maxVertexCount = e.maxVertexCount, a._maxIndexCount = e.maxIndexCount, a._geometryInitialized = e.geometryInitialized, a._matricesTexture = u(e.matricesTexture.uuid), a._indirectTexture = u(e.indirectTexture.uuid), e.colorsTexture !== void 0 && (a._colorsTexture = u(e.colorsTexture.uuid)), e.boundingSphere !== void 0 && (a.boundingSphere = new Ba().fromJSON(e.boundingSphere)), e.boundingBox !== void 0 && (a.boundingBox = new ia().fromJSON(e.boundingBox));
				break;
			case "LOD":
				a = new _o();
				break;
			case "Line":
				a = new Js(c(e.geometry), l(e.material));
				break;
			case "LineLoop":
				a = new $s(c(e.geometry), l(e.material));
				break;
			case "LineSegments":
				a = new Qs(c(e.geometry), l(e.material));
				break;
			case "PointCloud":
			case "Points":
				a = new ac(c(e.geometry), l(e.material));
				break;
			case "Sprite":
				a = new po(l(e.material));
				break;
			case "Group":
				a = new Ni();
				break;
			case "Bone":
				a = new Xo();
				break;
			default: a = new Mi();
		}
		if (a.uuid = e.uuid, e.name !== void 0 && (a.name = e.name), e.matrix === void 0 ? (e.position !== void 0 && a.position.fromArray(e.position), e.rotation !== void 0 && a.rotation.fromArray(e.rotation), e.quaternion !== void 0 && a.quaternion.fromArray(e.quaternion), e.scale !== void 0 && a.scale.fromArray(e.scale)) : (a.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = e.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)), e.up !== void 0 && a.up.fromArray(e.up), e.pivot !== void 0 && (a.pivot = new H().fromArray(e.pivot)), e.morphTargetDictionary !== void 0 && (a.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), e.morphTargetInfluences !== void 0 && (a.morphTargetInfluences = e.morphTargetInfluences.slice()), e.castShadow !== void 0 && (a.castShadow = e.castShadow), e.receiveShadow !== void 0 && (a.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.intensity !== void 0 && (a.shadow.intensity = e.shadow.intensity), e.shadow.bias !== void 0 && (a.shadow.bias = e.shadow.bias), e.shadow.normalBias !== void 0 && (a.shadow.normalBias = e.shadow.normalBias), e.shadow.radius !== void 0 && (a.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (a.visible = e.visible), e.frustumCulled !== void 0 && (a.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (a.renderOrder = e.renderOrder), e.static !== void 0 && (a.static = e.static), e.userData !== void 0 && (a.userData = e.userData), e.layers !== void 0 && (a.layers.mask = e.layers), e.children !== void 0) {
			let o = e.children;
			for (let e = 0; e < o.length; e++) a.add(this.parseObject(o[e], t, n, r, i));
		}
		if (e.animations !== void 0) {
			let t = e.animations;
			for (let e = 0; e < t.length; e++) {
				let n = t[e];
				a.animations.push(i[n]);
			}
		}
		if (e.type === "LOD") {
			e.autoUpdate !== void 0 && (a.autoUpdate = e.autoUpdate);
			let t = e.levels;
			for (let e = 0; e < t.length; e++) {
				let n = t[e], r = a.getObjectByProperty("uuid", n.object);
				r !== void 0 && a.addLevel(r, n.distance, n.hysteresis);
			}
		}
		return a;
	}
	bindSkeletons(e, t) {
		Object.keys(t).length !== 0 && e.traverse(function(e) {
			if (!0 === e.isSkinnedMesh && e.skeleton !== void 0) {
				let n = t[e.skeleton];
				n === void 0 ? L("ObjectLoader: No skeleton found with UUID:", e.skeleton) : e.bind(n, e.bindMatrix);
			}
		});
	}
	bindLightTargets(e) {
		e.traverse(function(t) {
			if (t.isDirectionalLight || t.isSpotLight) {
				let n = t.target, r = e.getObjectByProperty("uuid", n);
				t.target = r === void 0 ? new Mi() : r;
			}
		});
	}
}, bd = {
	UVMapping: 300,
	CubeReflectionMapping: 301,
	CubeRefractionMapping: 302,
	EquirectangularReflectionMapping: 303,
	EquirectangularRefractionMapping: 304,
	CubeUVReflectionMapping: 306
}, xd = {
	RepeatWrapping: Me,
	ClampToEdgeWrapping: Ne,
	MirroredRepeatWrapping: Pe
}, Sd = {
	NearestFilter: Fe,
	NearestMipmapNearestFilter: Ie,
	NearestMipmapLinearFilter: Re,
	LinearFilter: Be,
	LinearMipmapNearestFilter: Ve,
	LinearMipmapLinearFilter: He
}, Cd = /* @__PURE__ */ new WeakMap(), wd = class extends Mu {
	constructor(e) {
		super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && L("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && L("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
	}
	setOptions(e) {
		return this.options = e, this;
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = this, a = Ou.get(`image-bitmap:${e}`);
		if (a !== void 0) return i.manager.itemStart(e), a.then ? void a.then((n) => {
			if (!0 !== Cd.has(a)) return t && t(n), i.manager.itemEnd(e), n;
			r && r(Cd.get(a)), i.manager.itemError(e), i.manager.itemEnd(e);
		}) : (setTimeout(function() {
			t && t(a), i.manager.itemEnd(e);
		}, 0), a);
		let o = {};
		o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, o.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
		let s = fetch(e, o).then(function(e) {
			return e.blob();
		}).then(function(e) {
			return createImageBitmap(e, Object.assign(i.options, { colorSpaceConversion: "none" }));
		}).then(function(n) {
			return Ou.add(`image-bitmap:${e}`, n), t && t(n), i.manager.itemEnd(e), n;
		}).catch(function(t) {
			r && r(t), Cd.set(s, t), Ou.remove(`image-bitmap:${e}`), i.manager.itemError(e), i.manager.itemEnd(e);
		});
		Ou.add(`image-bitmap:${e}`, s), i.manager.itemStart(e);
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, Td = class {
	static getContext() {
		return Nu === void 0 && (Nu = new (window.AudioContext || window.webkitAudioContext)()), Nu;
	}
	static setContext(e) {
		Nu = e;
	}
}, Ed = class extends Mu {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new Iu(this.manager);
		function o(t) {
			r ? r(t) : R(t), i.manager.itemError(e);
		}
		a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(e) {
			try {
				let n = e.slice(0);
				Td.getContext().decodeAudioData(n, function(e) {
					t(e);
				}).catch(o);
			} catch (e) {
				o(e);
			}
		}, n, r);
	}
}, Dd = new G(), Od = new G(), kd = new G(), Ad = class {
	constructor() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new rd(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new rd(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null
		};
	}
	update(e) {
		let t = this._cache;
		if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
			t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, kd.copy(e.projectionMatrix);
			let n = t.eyeSep / 2, r = n * t.near / t.focus, i = t.near * Math.tan(kr * t.fov * .5) / t.zoom, a, o;
			Od.elements[12] = -n, Dd.elements[12] = n, a = -i * t.aspect + r, o = i * t.aspect + r, kd.elements[0] = 2 * t.near / (o - a), kd.elements[8] = (o + a) / (o - a), this.cameraL.projectionMatrix.copy(kd), a = -i * t.aspect - r, o = i * t.aspect - r, kd.elements[0] = 2 * t.near / (o - a), kd.elements[8] = (o + a) / (o - a), this.cameraR.projectionMatrix.copy(kd);
		}
		this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Od), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Dd);
	}
}, jd = -90, Md = class extends Mi {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new rd(jd, 1, e, t);
		r.layers = this.layers, this.add(r);
		let i = new rd(jd, 1, e, t);
		i.layers = this.layers, this.add(i);
		let a = new rd(jd, 1, e, t);
		a.layers = this.layers, this.add(a);
		let o = new rd(jd, 1, e, t);
		o.layers = this.layers, this.add(o);
		let s = new rd(jd, 1, e, t);
		s.layers = this.layers, this.add(s);
		let c = new rd(jd, 1, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else {
			if (e !== 2001) throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
			n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		}
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let h = !1;
		h = !0 === e.isWebGLRenderer ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && !1 === e.autoClear && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, Nd = class extends rd {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, Pd = class {
	constructor() {
		this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
	}
	connect(e) {
		this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = Fd.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, !1));
	}
	disconnect() {
		this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
	}
	getDelta() {
		return this._delta / 1e3;
	}
	getElapsed() {
		return this._elapsed / 1e3;
	}
	getTimescale() {
		return this._timescale;
	}
	setTimescale(e) {
		return this._timescale = e, this;
	}
	reset() {
		return this._currentTime = performance.now() - this._startTime, this;
	}
	dispose() {
		this.disconnect();
	}
	update(e) {
		return this._pageVisibilityHandler !== null && !0 === this._document.hidden ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e === void 0 ? performance.now() : e) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
	}
};
function Fd() {
	!1 === this._document.hidden && this.reset();
}
var Id = new H(), Ld = new Ir(), Rd = new H(), zd = new H(), Bd = new H(), Vd = class extends Mi {
	constructor() {
		super(), this.type = "AudioListener", this.context = Td.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._timer = new Pd();
	}
	getInput() {
		return this.gain;
	}
	removeFilter() {
		return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
	}
	getFilter() {
		return this.filter;
	}
	setFilter(e) {
		return this.filter === null ? this.gain.disconnect(this.context.destination) : (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
	}
	getMasterVolume() {
		return this.gain.gain.value;
	}
	setMasterVolume(e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this;
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this._timer.update();
		let t = this.context.listener;
		if (this.timeDelta = this._timer.getDelta(), this.matrixWorld.decompose(Id, Ld, Rd), zd.set(0, 0, -1).applyQuaternion(Ld), Bd.set(0, 1, 0).applyQuaternion(Ld), t.positionX) {
			let e = this.context.currentTime + this.timeDelta;
			t.positionX.linearRampToValueAtTime(Id.x, e), t.positionY.linearRampToValueAtTime(Id.y, e), t.positionZ.linearRampToValueAtTime(Id.z, e), t.forwardX.linearRampToValueAtTime(zd.x, e), t.forwardY.linearRampToValueAtTime(zd.y, e), t.forwardZ.linearRampToValueAtTime(zd.z, e), t.upX.linearRampToValueAtTime(Bd.x, e), t.upY.linearRampToValueAtTime(Bd.y, e), t.upZ.linearRampToValueAtTime(Bd.z, e);
		} else t.setPosition(Id.x, Id.y, Id.z), t.setOrientation(zd.x, zd.y, zd.z, Bd.x, Bd.y, Bd.z);
	}
}, Hd = class extends Mi {
	constructor(e) {
		super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
	}
	getOutput() {
		return this.gain;
	}
	setNodeSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
	}
	setMediaElementSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
	}
	setMediaStreamSource(e) {
		return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
	}
	setBuffer(e) {
		return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
	}
	play(e = 0) {
		if (!0 === this.isPlaying) return void L("Audio: Audio is already playing.");
		if (!1 === this.hasPlaybackControl) return void L("Audio: this Audio has no playback control.");
		this._startedAt = this.context.currentTime + e;
		let t = this.context.createBufferSource();
		return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
	}
	pause() {
		if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress %= this.duration || this.buffer.duration), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
		L("Audio: this Audio has no playback control.");
	}
	stop(e = 0) {
		if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = !1, this;
		L("Audio: this Audio has no playback control.");
	}
	connect() {
		if (this.filters.length > 0) {
			this.source.connect(this.filters[0]);
			for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
			this.filters[this.filters.length - 1].connect(this.getOutput());
		} else this.source.connect(this.getOutput());
		return this._connected = !0, this;
	}
	disconnect() {
		if (!1 !== this._connected) {
			if (this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput());
			} else this.source.disconnect(this.getOutput());
			return this._connected = !1, this;
		}
	}
	getFilters() {
		return this.filters;
	}
	setFilters(e) {
		return e ||= [], !0 === this._connected ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
	}
	setDetune(e) {
		return this.detune = e, !0 === this.isPlaying && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
	}
	getDetune() {
		return this.detune;
	}
	getFilter() {
		return this.getFilters()[0];
	}
	setFilter(e) {
		return this.setFilters(e ? [e] : []);
	}
	setPlaybackRate(e) {
		if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
		L("Audio: this Audio has no playback control.");
	}
	getPlaybackRate() {
		return this.playbackRate;
	}
	onEnded() {
		this.isPlaying = !1, this._progress = 0;
	}
	getLoop() {
		return !1 === this.hasPlaybackControl ? (L("Audio: this Audio has no playback control."), !1) : this.loop;
	}
	setLoop(e) {
		if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
		L("Audio: this Audio has no playback control.");
	}
	setLoopStart(e) {
		return this.loopStart = e, this;
	}
	setLoopEnd(e) {
		return this.loopEnd = e, this;
	}
	getVolume() {
		return this.gain.gain.value;
	}
	setVolume(e) {
		return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this;
	}
	copy(e, t) {
		return super.copy(e, t), e.sourceType === "buffer" ? (this.autoplay = e.autoplay, this.buffer = e.buffer, this.detune = e.detune, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.offset = e.offset, this.duration = e.duration, this.playbackRate = e.playbackRate, this.hasPlaybackControl = e.hasPlaybackControl, this.sourceType = e.sourceType, this.filters = e.filters.slice(), this) : (L("Audio: Audio source type cannot be copied."), this);
	}
	clone(e) {
		return new this.constructor(this.listener).copy(this, e);
	}
}, Ud = new H(), Wd = new Ir(), Gd = new H(), Kd = new H(), qd = class extends Hd {
	constructor(e) {
		super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
	}
	connect() {
		return super.connect(), this.panner.connect(this.gain), this;
	}
	disconnect() {
		return super.disconnect(), this.panner.disconnect(this.gain), this;
	}
	getOutput() {
		return this.panner;
	}
	getRefDistance() {
		return this.panner.refDistance;
	}
	setRefDistance(e) {
		return this.panner.refDistance = e, this;
	}
	getRolloffFactor() {
		return this.panner.rolloffFactor;
	}
	setRolloffFactor(e) {
		return this.panner.rolloffFactor = e, this;
	}
	getDistanceModel() {
		return this.panner.distanceModel;
	}
	setDistanceModel(e) {
		return this.panner.distanceModel = e, this;
	}
	getMaxDistance() {
		return this.panner.maxDistance;
	}
	setMaxDistance(e) {
		return this.panner.maxDistance = e, this;
	}
	setDirectionalCone(e, t, n) {
		return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
	}
	updateMatrixWorld(e) {
		if (super.updateMatrixWorld(e), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
		this.matrixWorld.decompose(Ud, Wd, Gd), Kd.set(0, 0, 1).applyQuaternion(Wd);
		let t = this.panner;
		if (t.positionX) {
			let e = this.context.currentTime + this.listener.timeDelta;
			t.positionX.linearRampToValueAtTime(Ud.x, e), t.positionY.linearRampToValueAtTime(Ud.y, e), t.positionZ.linearRampToValueAtTime(Ud.z, e), t.orientationX.linearRampToValueAtTime(Kd.x, e), t.orientationY.linearRampToValueAtTime(Kd.y, e), t.orientationZ.linearRampToValueAtTime(Kd.z, e);
		} else t.setPosition(Ud.x, Ud.y, Ud.z), t.setOrientation(Kd.x, Kd.y, Kd.z);
	}
}, Jd = class {
	constructor(e, t = 2048) {
		this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
	}
	getFrequencyData() {
		return this.analyser.getByteFrequencyData(this.data), this.data;
	}
	getAverageFrequency() {
		let e = 0, t = this.getFrequencyData();
		for (let n = 0; n < t.length; n++) e += t[n];
		return e / t.length;
	}
}, Yd = class {
	constructor(e, t, n) {
		let r, i, a;
		switch (this.binding = e, this.valueSize = n, t) {
			case "quaternion":
				r = this._slerp, i = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
				break;
			case "string":
			case "bool":
				r = this._select, i = this._select, a = this._setAdditiveIdentityOther, this.buffer = Array(5 * n);
				break;
			default: r = this._lerp, i = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
		}
		this._mixBufferRegion = r, this._mixBufferRegionAdditive = i, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
	}
	accumulate(e, t) {
		let n = this.buffer, r = this.valueSize, i = e * r + r, a = this.cumulativeWeight;
		if (a === 0) {
			for (let e = 0; e !== r; ++e) n[i + e] = n[e];
			a = t;
		} else {
			a += t;
			let e = t / a;
			this._mixBufferRegion(n, i, 0, e, r);
		}
		this.cumulativeWeight = a;
	}
	accumulateAdditive(e) {
		let t = this.buffer, n = this.valueSize, r = n * this._addIndex;
		this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, r, 0, e, n), this.cumulativeWeightAdditive += e;
	}
	apply(e) {
		let t = this.valueSize, n = this.buffer, r = e * t + t, i = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
		if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
			let e = t * this._origIndex;
			this._mixBufferRegion(n, r, e, 1 - i, t);
		}
		a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
		for (let e = t, i = t + t; e !== i; ++e) if (n[e] !== n[e + t]) {
			o.setValue(n, r);
			break;
		}
	}
	saveOriginalState() {
		let e = this.binding, t = this.buffer, n = this.valueSize, r = n * this._origIndex;
		e.getValue(t, r);
		for (let e = n, i = r; e !== i; ++e) t[e] = t[r + e % n];
		this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
	}
	restoreOriginalState() {
		let e = 3 * this.valueSize;
		this.binding.setValue(this.buffer, e);
	}
	_setAdditiveIdentityNumeric() {
		let e = this._addIndex * this.valueSize, t = e + this.valueSize;
		for (let n = e; n < t; n++) this.buffer[n] = 0;
	}
	_setAdditiveIdentityQuaternion() {
		this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
	}
	_setAdditiveIdentityOther() {
		let e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
		for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n];
	}
	_select(e, t, n, r, i) {
		if (r >= .5) for (let r = 0; r !== i; ++r) e[t + r] = e[n + r];
	}
	_slerp(e, t, n, r) {
		Ir.slerpFlat(e, t, e, t, e, n, r);
	}
	_slerpAdditive(e, t, n, r, i) {
		let a = this._workIndex * i;
		Ir.multiplyQuaternionsFlat(e, a, e, t, e, n), Ir.slerpFlat(e, t, e, t, e, a, r);
	}
	_lerp(e, t, n, r, i) {
		let a = 1 - r;
		for (let o = 0; o !== i; ++o) {
			let i = t + o;
			e[i] = e[i] * a + e[n + o] * r;
		}
	}
	_lerpAdditive(e, t, n, r, i) {
		for (let a = 0; a !== i; ++a) {
			let i = t + a;
			e[i] = e[i] + e[n + a] * r;
		}
	}
}, Xd = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), Zd = "[^\\[\\]\\.:\\/]", Qd = RegExp("^" + "((?:WC+[\\/:])*)".replace("WC", Zd) + "([^\\[\\]:\\/]+)?" + "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Zd) + "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Zd) + "$"), $d = [
	"material",
	"materials",
	"bones",
	"map"
], ef = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(Xd, "");
	}
	static parseTrackName(e) {
		let t = Qd.exec(e);
		if (t === null) throw Error("PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			$d.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void L("PropertyBinding: No target node found for track: " + this.path + ".");
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) return void R("PropertyBinding: Can not bind to material as node does not have a material.", this);
					if (!t.material.materials) return void R("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) return void R("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) return void R("PropertyBinding: Can not bind to material as node does not have a material.", this);
					if (!t.material.map) return void R("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) return void R("PropertyBinding: Can not bind to objectName of node undefined.", this);
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) return void R("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			R("PropertyBinding: Trying to update property for track: " + n.nodeName + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, !0 === t.isMaterial ? s = this.Versioning.NeedsUpdate : !0 === t.isObject3D && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) return void R("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
				if (!t.geometry.morphAttributes) return void R("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
ef.Composite = class {
	constructor(e, t, n) {
		let r = n || ef.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, ef.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, ef.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, ef.prototype.GetterByBindingType = [
	ef.prototype._getValue_direct,
	ef.prototype._getValue_array,
	ef.prototype._getValue_arrayElement,
	ef.prototype._getValue_toArray
], ef.prototype.SetterByBindingTypeAndVersioning = [
	[
		ef.prototype._setValue_direct,
		ef.prototype._setValue_direct_setNeedsUpdate,
		ef.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		ef.prototype._setValue_array,
		ef.prototype._setValue_array_setNeedsUpdate,
		ef.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		ef.prototype._setValue_arrayElement,
		ef.prototype._setValue_arrayElement_setNeedsUpdate,
		ef.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		ef.prototype._setValue_fromArray,
		ef.prototype._setValue_fromArray_setNeedsUpdate,
		ef.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var tf = class {
	constructor() {
		this.isAnimationObjectGroup = !0, this.uuid = jr(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		let e = {};
		this._indicesByUUID = e;
		for (let t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		let t = this;
		this.stats = {
			objects: {
				get total() {
					return t._objects.length;
				},
				get inUse() {
					return this.total - t.nCachedObjects_;
				}
			},
			get bindingsPerObject() {
				return t._bindings.length;
			}
		};
	}
	add() {
		let e = this._objects, t = this._indicesByUUID, n = this._paths, r = this._parsedPaths, i = this._bindings, a = i.length, o, s = e.length, c = this.nCachedObjects_;
		for (let l = 0, u = arguments.length; l !== u; ++l) {
			let u = arguments[l], d = u.uuid, f = t[d];
			if (f === void 0) {
				f = s++, t[d] = f, e.push(u);
				for (let e = 0, t = a; e !== t; ++e) i[e].push(new ef(u, n[e], r[e]));
			} else if (f < c) {
				o = e[f];
				let s = --c, l = e[s];
				t[l.uuid] = f, e[f] = l, t[d] = s, e[s] = u;
				for (let e = 0, t = a; e !== t; ++e) {
					let t = i[e], a = t[s], o = t[f];
					t[f] = a, o === void 0 && (o = new ef(u, n[e], r[e])), t[s] = o;
				}
			} else e[f] !== o && R("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
		}
		this.nCachedObjects_ = c;
	}
	remove() {
		let e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_;
		for (let a = 0, o = arguments.length; a !== o; ++a) {
			let o = arguments[a], s = o.uuid, c = t[s];
			if (c !== void 0 && c >= i) {
				let a = i++, l = e[a];
				t[l.uuid] = c, e[c] = l, t[s] = a, e[a] = o;
				for (let e = 0, t = r; e !== t; ++e) {
					let t = n[e], r = t[a], i = t[c];
					t[c] = r, t[a] = i;
				}
			}
		}
		this.nCachedObjects_ = i;
	}
	uncache() {
		let e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = e.length;
		for (let o = 0, s = arguments.length; o !== s; ++o) {
			let s = arguments[o].uuid, c = t[s];
			if (c !== void 0) {
				if (delete t[s], c < i) {
					let o = --i, s = e[o], l = --a, u = e[l];
					t[s.uuid] = c, e[c] = s, t[u.uuid] = o, e[o] = u, e.pop();
					for (let e = 0, t = r; e !== t; ++e) {
						let t = n[e], r = t[o], i = t[l];
						t[c] = r, t[o] = i, t.pop();
					}
				} else {
					let i = --a, o = e[i];
					i > 0 && (t[o.uuid] = c), e[c] = o, e.pop();
					for (let e = 0, t = r; e !== t; ++e) {
						let t = n[e];
						t[c] = t[i], t.pop();
					}
				}
			}
		}
		this.nCachedObjects_ = i;
	}
	subscribe_(e, t) {
		let n = this._bindingsIndicesByPath, r = n[e], i = this._bindings;
		if (r !== void 0) return i[r];
		let a = this._paths, o = this._parsedPaths, s = this._objects, c = s.length, l = this.nCachedObjects_, u = Array(c);
		r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u);
		for (let n = l, r = s.length; n !== r; ++n) {
			let r = s[n];
			u[n] = new ef(r, e, t);
		}
		return u;
	}
	unsubscribe_(e) {
		let t = this._bindingsIndicesByPath, n = t[e];
		if (n !== void 0) {
			let r = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o];
			t[e[o]] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop();
		}
	}
}, nf = class {
	constructor(e, t, n = null, r = t.blendMode) {
		this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = r;
		let i = t.tracks, a = i.length, o = Array(a), s = {
			endingStart: rn,
			endingEnd: rn
		};
		for (let e = 0; e !== a; ++e) {
			let t = i[e].createInterpolant(null);
			o[e] = t, t.settings = s;
		}
		this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
	}
	play() {
		return this._mixer._activateAction(this), this;
	}
	stop() {
		return this._mixer._deactivateAction(this), this.reset();
	}
	reset() {
		return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
	}
	isRunning() {
		return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
	}
	isScheduled() {
		return this._mixer._isActiveAction(this);
	}
	startAt(e) {
		return this._startTime = e, this;
	}
	setLoop(e, t) {
		return this.loop = e, this.repetitions = t, this;
	}
	setEffectiveWeight(e) {
		return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
	}
	getEffectiveWeight() {
		return this._effectiveWeight;
	}
	fadeIn(e) {
		return this._scheduleFading(e, 0, 1);
	}
	fadeOut(e) {
		return this._scheduleFading(e, 1, 0);
	}
	crossFadeFrom(e, t, n = !1) {
		if (e.fadeOut(t), this.fadeIn(t), !0 === n) {
			let n = this._clip.duration, r = e._clip.duration, i = r / n, a = n / r;
			e.warp(1, i, t), this.warp(a, 1, t);
		}
		return this;
	}
	crossFadeTo(e, t, n = !1) {
		return e.crossFadeFrom(this, t, n);
	}
	stopFading() {
		let e = this._weightInterpolant;
		return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
	}
	setEffectiveTimeScale(e) {
		return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
	}
	getEffectiveTimeScale() {
		return this._effectiveTimeScale;
	}
	setDuration(e) {
		return this.timeScale = this._clip.duration / e, this.stopWarping();
	}
	syncWith(e) {
		return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
	}
	halt(e) {
		return this.warp(this._effectiveTimeScale, 0, e);
	}
	warp(e, t, n) {
		let r = this._mixer, i = r.time, a = this.timeScale, o = this._timeScaleInterpolant;
		o === null && (o = r._lendControlInterpolant(), this._timeScaleInterpolant = o);
		let s = o.parameterPositions, c = o.sampleValues;
		return s[0] = i, s[1] = i + n, c[0] = e / a, c[1] = t / a, this;
	}
	stopWarping() {
		let e = this._timeScaleInterpolant;
		return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
	}
	getMixer() {
		return this._mixer;
	}
	getClip() {
		return this._clip;
	}
	getRoot() {
		return this._localRoot || this._mixer._root;
	}
	_update(e, t, n, r) {
		if (!this.enabled) return void this._updateWeight(e);
		let i = this._startTime;
		if (i !== null) {
			let r = (e - i) * n;
			r < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * r);
		}
		t *= this._updateTimeScale(e);
		let a = this._updateTime(t), o = this._updateWeight(e);
		if (o > 0) {
			let e = this._interpolants, t = this._propertyBindings;
			if (this.blendMode === cn) for (let n = 0, r = e.length; n !== r; ++n) e[n].evaluate(a), t[n].accumulateAdditive(o);
			else for (let n = 0, i = e.length; n !== i; ++n) e[n].evaluate(a), t[n].accumulate(r, o);
		}
	}
	_updateWeight(e) {
		let t = 0;
		if (this.enabled) {
			t = this.weight;
			let n = this._weightInterpolant;
			if (n !== null) {
				let r = n.evaluate(e)[0];
				t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
			}
		}
		return this._effectiveWeight = t, t;
	}
	_updateTimeScale(e) {
		let t = 0;
		if (!this.paused) {
			t = this.timeScale;
			let n = this._timeScaleInterpolant;
			n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t));
		}
		return this._effectiveTimeScale = t, t;
	}
	_updateTime(e) {
		let t = this._clip.duration, n = this.loop, r = this.time + e, i = this._loopCount, a = n === 2202;
		if (e === 0) return i === -1 || !a || 1 & ~i ? r : t - r;
		if (n === 2200) {
			i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
			t: {
				if (r >= t) r = t;
				else {
					if (!(r < 0)) {
						this.time = r;
						break t;
					}
					r = 0;
				}
				this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = r, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e < 0 ? -1 : 1
				});
			}
		} else {
			if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), r >= t || r < 0) {
				let n = Math.floor(r / t);
				r -= t * n, i += Math.abs(n);
				let o = this.repetitions - i;
				if (o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, r = e > 0 ? t : 0, this.time = r, this._mixer.dispatchEvent({
					type: "finished",
					action: this,
					direction: e > 0 ? 1 : -1
				});
				else {
					if (o === 1) {
						let t = e < 0;
						this._setEndings(t, !t, a);
					} else this._setEndings(!1, !1, a);
					this._loopCount = i, this.time = r, this._mixer.dispatchEvent({
						type: "loop",
						action: this,
						loopDelta: n
					});
				}
			} else this.time = r;
			if (a && !(1 & ~i)) return t - r;
		}
		return r;
	}
	_setEndings(e, t, n) {
		let r = this._interpolantSettings;
		n ? (r.endingStart = an, r.endingEnd = an) : (r.endingStart = e ? this.zeroSlopeAtStart ? an : rn : on, r.endingEnd = t ? this.zeroSlopeAtEnd ? an : rn : on);
	}
	_scheduleFading(e, t, n) {
		let r = this._mixer, i = r.time, a = this._weightInterpolant;
		a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
		let o = a.parameterPositions, s = a.sampleValues;
		return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this;
	}
}, rf = /* @__PURE__ */ new Float32Array(1), af = class extends Er {
	constructor(e) {
		super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	_bindAction(e, t) {
		let n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, a = e._propertyBindings, o = e._interpolants, s = n.uuid, c = this._bindingsByRootAndName, l = c[s];
		l === void 0 && (l = {}, c[s] = l);
		for (let e = 0; e !== i; ++e) {
			let i = r[e], c = i.name, u = l[c];
			if (u !== void 0) ++u.referenceCount, a[e] = u;
			else {
				if (u = a[e], u !== void 0) {
					u._cacheIndex === null && (++u.referenceCount, this._addInactiveBinding(u, s, c));
					continue;
				}
				let r = t && t._propertyBindings[e].binding.parsedPath;
				u = new Yd(ef.create(n, c, r), i.ValueTypeName, i.getValueSize()), ++u.referenceCount, this._addInactiveBinding(u, s, c), a[e] = u;
			}
			o[e].resultBuffer = u.buffer;
		}
	}
	_activateAction(e) {
		if (!this._isActiveAction(e)) {
			if (e._cacheIndex === null) {
				let t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
				this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t);
			}
			let t = e._propertyBindings;
			for (let e = 0, n = t.length; e !== n; ++e) {
				let n = t[e];
				n.useCount++ === 0 && (this._lendBinding(n), n.saveOriginalState());
			}
			this._lendAction(e);
		}
	}
	_deactivateAction(e) {
		if (this._isActiveAction(e)) {
			let t = e._propertyBindings;
			for (let e = 0, n = t.length; e !== n; ++e) {
				let n = t[e];
				--n.useCount === 0 && (n.restoreOriginalState(), this._takeBackBinding(n));
			}
			this._takeBackAction(e);
		}
	}
	_initMemoryManager() {
		this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
		let e = this;
		this.stats = {
			actions: {
				get total() {
					return e._actions.length;
				},
				get inUse() {
					return e._nActiveActions;
				}
			},
			bindings: {
				get total() {
					return e._bindings.length;
				},
				get inUse() {
					return e._nActiveBindings;
				}
			},
			controlInterpolants: {
				get total() {
					return e._controlInterpolants.length;
				},
				get inUse() {
					return e._nActiveControlInterpolants;
				}
			}
		};
	}
	_isActiveAction(e) {
		let t = e._cacheIndex;
		return t !== null && t < this._nActiveActions;
	}
	_addInactiveAction(e, t, n) {
		let r = this._actions, i = this._actionsByClip, a = i[t];
		if (a === void 0) a = {
			knownActions: [e],
			actionByRoot: {}
		}, e._byClipCacheIndex = 0, i[t] = a;
		else {
			let t = a.knownActions;
			e._byClipCacheIndex = t.length, t.push(e);
		}
		e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e;
	}
	_removeInactiveAction(e) {
		let t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
		n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
		let i = e._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, c = s[s.length - 1], l = e._byClipCacheIndex;
		c._byClipCacheIndex = l, s[l] = c, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e);
	}
	_removeInactiveBindingsForAction(e) {
		let t = e._propertyBindings;
		for (let e = 0, n = t.length; e !== n; ++e) {
			let n = t[e];
			--n.referenceCount === 0 && this._removeInactiveBinding(n);
		}
	}
	_lendAction(e) {
		let t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_takeBackAction(e) {
		let t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_addInactiveBinding(e, t, n) {
		let r = this._bindingsByRootAndName, i = this._bindings, a = r[t];
		a === void 0 && (a = {}, r[t] = a), a[n] = e, e._cacheIndex = i.length, i.push(e);
	}
	_removeInactiveBinding(e) {
		let t = this._bindings, n = e.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName, o = a[r], s = t[t.length - 1], c = e._cacheIndex;
		s._cacheIndex = c, t[c] = s, t.pop(), delete o[i], Object.keys(o).length === 0 && delete a[r];
	}
	_lendBinding(e) {
		let t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_takeBackBinding(e) {
		let t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r];
		e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
	}
	_lendControlInterpolant() {
		let e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
		return n === void 0 && (n = new hu(/* @__PURE__ */ new Float32Array(2), /* @__PURE__ */ new Float32Array(2), 1, rf), n.__cacheIndex = t, e[t] = n), n;
	}
	_takeBackControlInterpolant(e) {
		let t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r];
		e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i;
	}
	clipAction(e, t, n) {
		let r = t || this._root, i = r.uuid, a = typeof e == "string" ? Eu.findByName(r, e) : e, o = a === null ? e : a.uuid, s = this._actionsByClip[o], c = null;
		if (n === void 0 && (n = a === null ? sn : a.blendMode), s !== void 0) {
			let e = s.actionByRoot[i];
			if (e !== void 0 && e.blendMode === n) return e;
			c = s.knownActions[0], a === null && (a = c._clip);
		}
		if (a === null) return null;
		let l = new nf(this, a, t, n);
		return this._bindAction(l, c), this._addInactiveAction(l, o, i), l;
	}
	existingAction(e, t) {
		let n = t || this._root, r = n.uuid, i = typeof e == "string" ? Eu.findByName(n, e) : e, a = i ? i.uuid : e, o = this._actionsByClip[a];
		return o !== void 0 && o.actionByRoot[r] || null;
	}
	stopAllAction() {
		let e = this._actions;
		for (let t = this._nActiveActions - 1; t >= 0; --t) e[t].stop();
		return this;
	}
	update(e) {
		e *= this.timeScale;
		let t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1;
		for (let o = 0; o !== n; ++o) t[o]._update(r, e, i, a);
		let o = this._bindings, s = this._nActiveBindings;
		for (let e = 0; e !== s; ++e) o[e].apply(a);
		return this;
	}
	setTime(e) {
		this.time = 0;
		for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
		return this.update(e);
	}
	getRoot() {
		return this._root;
	}
	uncacheClip(e) {
		let t = this._actions, n = e.uuid, r = this._actionsByClip, i = r[n];
		if (i !== void 0) {
			let e = i.knownActions;
			for (let n = 0, r = e.length; n !== r; ++n) {
				let r = e[n];
				this._deactivateAction(r);
				let i = r._cacheIndex, a = t[t.length - 1];
				r._cacheIndex = null, r._byClipCacheIndex = null, a._cacheIndex = i, t[i] = a, t.pop(), this._removeInactiveBindingsForAction(r);
			}
			delete r[n];
		}
	}
	uncacheRoot(e) {
		let t = e.uuid, n = this._actionsByClip;
		for (let e in n) {
			let r = n[e].actionByRoot[t];
			r !== void 0 && (this._deactivateAction(r), this._removeInactiveAction(r));
		}
		let r = this._bindingsByRootAndName[t];
		if (r !== void 0) for (let e in r) {
			let t = r[e];
			t.restoreOriginalState(), this._removeInactiveBinding(t);
		}
	}
	uncacheAction(e, t) {
		let n = this.existingAction(e, t);
		n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
	}
}, of = class extends ei {
	constructor(e = 1, t = 1, n = 1, r = {}) {
		super(e, t, r), this.isRenderTarget3D = !0, this.depth = n, this.texture = new ii(null, e, t, n), this._setTextureOptions(r), this.texture.isRenderTargetTexture = !0;
	}
}, sf = class e {
	constructor(e) {
		this.value = e;
	}
	clone() {
		return new e(this.value.clone === void 0 ? this.value : this.value.clone());
	}
}, cf = 0, lf = class extends Er {
	constructor() {
		super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: cf++ }), this.name = "", this.usage = Xn, this.uniforms = [];
	}
	add(e) {
		return this.uniforms.push(e), this;
	}
	remove(e) {
		let t = this.uniforms.indexOf(e);
		return t !== -1 && this.uniforms.splice(t, 1), this;
	}
	setName(e) {
		return this.name = e, this;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	copy(e) {
		this.name = e.name, this.usage = e.usage;
		let t = e.uniforms;
		this.uniforms.length = 0;
		for (let e = 0, n = t.length; e < n; e++) {
			let n = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0; e < n.length; e++) this.uniforms.push(n[e].clone());
		}
		return this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, uf = class extends Ja {
	constructor(e, t, n = 1) {
		super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	clone(e) {
		let t = super.clone(e);
		return t.meshPerAttribute = this.meshPerAttribute, t;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
	}
}, df = class {
	constructor(e, t, n, r, i, a = !1) {
		this.isGLBufferAttribute = !0, this.name = "", this.buffer = e, this.type = t, this.itemSize = n, this.elementSize = r, this.count = i, this.normalized = a, this.version = 0;
	}
	set needsUpdate(e) {
		!0 === e && this.version++;
	}
	setBuffer(e) {
		return this.buffer = e, this;
	}
	setType(e, t) {
		return this.type = e, this.elementSize = t, this;
	}
	setItemSize(e) {
		return this.itemSize = e, this;
	}
	setCount(e) {
		return this.count = e, this;
	}
}, ff = new G(), pf = class {
	constructor(e, t, n = 0, r = 1 / 0) {
		this.ray = new To(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new gi(), this.params = {
			Mesh: {},
			Line: { threshold: 1 },
			LOD: {},
			Points: { threshold: 1 },
			Sprite: {}
		};
	}
	set(e, t) {
		this.ray.set(e, t);
	}
	setFromCamera(e, t) {
		t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : R("Raycaster: Unsupported camera type: " + t.type);
	}
	setFromXRController(e) {
		return ff.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(ff), this;
	}
	intersectObject(e, t = !0, n = []) {
		return hf(e, this, n, t), n.sort(mf), n;
	}
	intersectObjects(e, t = !0, n = []) {
		for (let r = 0, i = e.length; r < i; r++) hf(e[r], this, n, t);
		return n.sort(mf), n;
	}
};
function mf(e, t) {
	return e.distance - t.distance;
}
function hf(e, t, n, r) {
	let i = !0;
	if (e.layers.test(t.layers) && !1 === e.raycast(t, n) && (i = !1), !0 === i && !0 === r) {
		let r = e.children;
		for (let e = 0, i = r.length; e < i; e++) hf(r[e], t, n, !0);
	}
}
var gf = class {
	constructor(e = !0) {
		this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1, L("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.");
	}
	start() {
		this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
	}
	stop() {
		this.getElapsedTime(), this.running = !1, this.autoStart = !1;
	}
	getElapsedTime() {
		return this.getDelta(), this.elapsedTime;
	}
	getDelta() {
		let e = 0;
		if (this.autoStart && !this.running) return this.start(), 0;
		if (this.running) {
			let t = performance.now();
			e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
		}
		return e;
	}
}, _f = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = z(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(z(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, vf = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.theta = t, this.y = n;
	}
	set(e, t, n) {
		return this.radius = e, this.theta = t, this.y = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, yf = class e {
	constructor(t, n, r, i) {
		e.prototype.isMatrix2 = !0, this.elements = [
			1,
			0,
			0,
			1
		], t !== void 0 && this.set(t, n, r, i);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
}, bf = new V(), xf = class {
	constructor(e = new V(1 / 0, 1 / 0), t = new V(-1 / 0, -1 / 0)) {
		this.isBox2 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = bf.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, bf).distanceTo(e);
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, Sf = new H(), Cf = new H(), wf = new H(), Tf = new H(), Ef = new H(), Df = new H(), Of = new H(), kf = class {
	constructor(e = new H(), t = new H()) {
		this.start = e, this.end = t;
	}
	set(e, t) {
		return this.start.copy(e), this.end.copy(t), this;
	}
	copy(e) {
		return this.start.copy(e.start), this.end.copy(e.end), this;
	}
	getCenter(e) {
		return e.addVectors(this.start, this.end).multiplyScalar(.5);
	}
	delta(e) {
		return e.subVectors(this.end, this.start);
	}
	distanceSq() {
		return this.start.distanceToSquared(this.end);
	}
	distance() {
		return this.start.distanceTo(this.end);
	}
	at(e, t) {
		return this.delta(t).multiplyScalar(e).add(this.start);
	}
	closestPointToPointParameter(e, t) {
		Sf.subVectors(e, this.start), Cf.subVectors(this.end, this.start);
		let n = Cf.dot(Cf), r = Cf.dot(Sf) / n;
		return t && (r = z(r, 0, 1)), r;
	}
	closestPointToPoint(e, t, n) {
		let r = this.closestPointToPointParameter(e, t);
		return this.delta(n).multiplyScalar(r).add(this.start);
	}
	distanceSqToLine3(e, t = Df, n = Of) {
		let r = 1e-8 * 1e-8, i, a, o = this.start, s = e.start, c = this.end, l = e.end;
		wf.subVectors(c, o), Tf.subVectors(l, s), Ef.subVectors(o, s);
		let u = wf.dot(wf), d = Tf.dot(Tf), f = Tf.dot(Ef);
		if (u <= r && d <= r) return t.copy(o), n.copy(s), t.sub(n), t.dot(t);
		if (u <= r) i = 0, a = f / d, a = z(a, 0, 1);
		else {
			let e = wf.dot(Ef);
			if (d <= r) a = 0, i = z(-e / u, 0, 1);
			else {
				let t = wf.dot(Tf), n = u * d - t * t;
				i = n === 0 ? 0 : z((t * f - e * d) / n, 0, 1), a = (t * i + f) / d, a < 0 ? (a = 0, i = z(-e / u, 0, 1)) : a > 1 && (a = 1, i = z((t - e) / u, 0, 1));
			}
		}
		return t.copy(o).addScaledVector(wf, i), n.copy(s).addScaledVector(Tf, a), t.distanceToSquared(n);
	}
	applyMatrix4(e) {
		return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
	}
	equals(e) {
		return e.start.equals(this.start) && e.end.equals(this.end);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Af = new H(), jf = class extends Mi {
	constructor(e, t) {
		super(), this.light = e, this.matrixAutoUpdate = !1, this.color = t, this.type = "SpotLightHelper";
		let n = new J(), r = [
			0,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			0,
			0,
			0,
			-1,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			0,
			0,
			0,
			0,
			-1,
			1
		];
		for (let e = 0, t = 1; e < 32; e++, t++) {
			let n = e / 32 * Math.PI * 2, i = t / 32 * Math.PI * 2;
			r.push(Math.cos(n), Math.sin(n), 1, Math.cos(i), Math.sin(i), 1);
		}
		n.setAttribute("position", new q(r, 3));
		let i = new Bs({
			fog: !1,
			toneMapped: !1
		});
		this.cone = new Qs(n, i), this.add(this.cone), this.update();
	}
	dispose() {
		this.cone.geometry.dispose(), this.cone.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
		let e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
		this.cone.scale.set(t, t, e), Af.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(Af), this.color === void 0 ? this.cone.material.color.copy(this.light.color) : this.cone.material.color.set(this.color);
	}
}, Mf = new H(), Nf = new G(), Pf = new G(), Ff = class extends Qs {
	constructor(e) {
		let t = If(e), n = new J(), r = [], i = [];
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			n.parent && n.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(0, 0, 0), i.push(0, 0, 0));
		}
		n.setAttribute("position", new q(r, 3)), n.setAttribute("color", new q(i, 3)), super(n, new Bs({
			vertexColors: !0,
			depthTest: !1,
			depthWrite: !1,
			toneMapped: !1,
			transparent: !0
		})), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
		let a = new K(255), o = new K(65280);
		this.setColors(a, o);
	}
	updateMatrixWorld(e) {
		let t = this.bones, n = this.geometry, r = n.getAttribute("position");
		Pf.copy(this.root.matrixWorld).invert();
		for (let e = 0, n = 0; e < t.length; e++) {
			let i = t[e];
			i.parent && i.parent.isBone && (Nf.multiplyMatrices(Pf, i.matrixWorld), Mf.setFromMatrixPosition(Nf), r.setXYZ(n, Mf.x, Mf.y, Mf.z), Nf.multiplyMatrices(Pf, i.parent.matrixWorld), Mf.setFromMatrixPosition(Nf), r.setXYZ(n + 1, Mf.x, Mf.y, Mf.z), n += 2);
		}
		n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e);
	}
	setColors(e, t) {
		let n = this.geometry.getAttribute("color");
		for (let r = 0; r < n.count; r += 2) n.setXYZ(r, e.r, e.g, e.b), n.setXYZ(r + 1, t.r, t.g, t.b);
		return n.needsUpdate = !0, this;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
};
function If(e) {
	let t = [];
	!0 === e.isBone && t.push(e);
	for (let n = 0; n < e.children.length; n++) t.push(...If(e.children[n]));
	return t;
}
var Lf = class extends Ro {
	constructor(e, t, n) {
		super(new Ll(t, 4, 2), new Eo({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		})), this.light = e, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.color === void 0 ? this.material.color.copy(this.light.color) : this.material.color.set(this.color);
	}
}, Rf = new H(), zf = new K(), Bf = new K(), Vf = class extends Mi {
	constructor(e, t, n) {
		super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
		let r = new Nl(t);
		r.rotateY(.5 * Math.PI), this.material = new Eo({
			wireframe: !0,
			fog: !1,
			toneMapped: !1
		}), this.color === void 0 && (this.material.vertexColors = !0);
		let i = r.getAttribute("position"), a = new Float32Array(3 * i.count);
		r.setAttribute("color", new Oa(a, 3)), this.add(new Ro(r, this.material)), this.update();
	}
	dispose() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose();
	}
	update() {
		let e = this.children[0];
		if (this.color !== void 0) this.material.color.set(this.color);
		else {
			let t = e.geometry.getAttribute("color");
			zf.copy(this.light.color), Bf.copy(this.light.groundColor);
			for (let e = 0, n = t.count; e < n; e++) {
				let r = e < n / 2 ? zf : Bf;
				t.setXYZ(e, r.r, r.g, r.b);
			}
			t.needsUpdate = !0;
		}
		this.light.updateWorldMatrix(!0, !1), e.lookAt(Rf.setFromMatrixPosition(this.light.matrixWorld).negate());
	}
}, Hf = class extends Qs {
	constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
		n = new K(n), r = new K(r);
		let i = t / 2, a = e / t, o = e / 2, s = [], c = [];
		for (let e = 0, l = 0, u = -o; e <= t; e++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			let t = e === i ? n : r;
			t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3;
		}
		let l = new J();
		l.setAttribute("position", new q(s, 3)), l.setAttribute("color", new q(c, 3)), super(l, new Bs({
			vertexColors: !0,
			toneMapped: !1
		})), this.type = "GridHelper";
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, Uf = class extends Qs {
	constructor(e = 10, t = 16, n = 8, r = 64, i = 4473924, a = 8947848) {
		i = new K(i), a = new K(a);
		let o = [], s = [];
		if (t > 1) for (let n = 0; n < t; n++) {
			let r = n / t * (2 * Math.PI), c = Math.sin(r) * e, l = Math.cos(r) * e;
			o.push(0, 0, 0), o.push(c, 0, l);
			let u = 1 & n ? i : a;
			s.push(u.r, u.g, u.b), s.push(u.r, u.g, u.b);
		}
		for (let t = 0; t < n; t++) {
			let c = 1 & t ? i : a, l = e - e / n * t;
			for (let e = 0; e < r; e++) {
				let t = e / r * (2 * Math.PI), n = Math.sin(t) * l, i = Math.cos(t) * l;
				o.push(n, 0, i), s.push(c.r, c.g, c.b), t = (e + 1) / r * (2 * Math.PI), n = Math.sin(t) * l, i = Math.cos(t) * l, o.push(n, 0, i), s.push(c.r, c.g, c.b);
			}
		}
		let c = new J();
		c.setAttribute("position", new q(o, 3)), c.setAttribute("color", new q(s, 3)), super(c, new Bs({
			vertexColors: !0,
			toneMapped: !1
		})), this.type = "PolarGridHelper";
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, Wf = new H(), Gf = new H(), Kf = new H(), qf = class extends Mi {
	constructor(e, t, n) {
		super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
		let r = new J();
		r.setAttribute("position", new q([
			-t,
			t,
			0,
			t,
			t,
			0,
			t,
			-t,
			0,
			-t,
			-t,
			0,
			-t,
			t,
			0
		], 3));
		let i = new Bs({
			fog: !1,
			toneMapped: !1
		});
		this.lightPlane = new Js(r, i), this.add(this.lightPlane), r = new J(), r.setAttribute("position", new q([
			0,
			0,
			0,
			0,
			0,
			1
		], 3)), this.targetLine = new Js(r, i), this.add(this.targetLine), this.update();
	}
	dispose() {
		this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
	}
	update() {
		this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), Wf.setFromMatrixPosition(this.light.matrixWorld), Gf.setFromMatrixPosition(this.light.target.matrixWorld), Kf.subVectors(Gf, Wf), this.lightPlane.lookAt(Gf), this.color === void 0 ? (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)) : (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)), this.targetLine.lookAt(Gf), this.targetLine.scale.z = Kf.length();
	}
}, Jf = new H(), Yf = new $u(), Xf = class extends Qs {
	constructor(e) {
		let t = new J(), n = new Bs({
			color: 16777215,
			vertexColors: !0,
			toneMapped: !1
		}), r = [], i = [], a = {};
		function o(e, t) {
			s(e), s(t);
		}
		function s(e) {
			r.push(0, 0, 0), i.push(0, 0, 0), a[e] === void 0 && (a[e] = []), a[e].push(r.length / 3 - 1);
		}
		o("n1", "n2"), o("n2", "n4"), o("n4", "n3"), o("n3", "n1"), o("f1", "f2"), o("f2", "f4"), o("f4", "f3"), o("f3", "f1"), o("n1", "f1"), o("n2", "f2"), o("n3", "f3"), o("n4", "f4"), o("p", "n1"), o("p", "n2"), o("p", "n3"), o("p", "n4"), o("u1", "u2"), o("u2", "u3"), o("u3", "u1"), o("c", "t"), o("p", "c"), o("cn1", "cn2"), o("cn3", "cn4"), o("cf1", "cf2"), o("cf3", "cf4"), t.setAttribute("position", new q(r, 3)), t.setAttribute("color", new q(i, 3)), super(t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
		let c = new K(16755200), l = new K(16711680), u = new K(43775), d = new K(16777215), f = new K(3355443);
		this.setColors(c, l, u, d, f);
	}
	setColors(e, t, n, r, i) {
		let a = this.geometry.getAttribute("color");
		return a.setXYZ(0, e.r, e.g, e.b), a.setXYZ(1, e.r, e.g, e.b), a.setXYZ(2, e.r, e.g, e.b), a.setXYZ(3, e.r, e.g, e.b), a.setXYZ(4, e.r, e.g, e.b), a.setXYZ(5, e.r, e.g, e.b), a.setXYZ(6, e.r, e.g, e.b), a.setXYZ(7, e.r, e.g, e.b), a.setXYZ(8, e.r, e.g, e.b), a.setXYZ(9, e.r, e.g, e.b), a.setXYZ(10, e.r, e.g, e.b), a.setXYZ(11, e.r, e.g, e.b), a.setXYZ(12, e.r, e.g, e.b), a.setXYZ(13, e.r, e.g, e.b), a.setXYZ(14, e.r, e.g, e.b), a.setXYZ(15, e.r, e.g, e.b), a.setXYZ(16, e.r, e.g, e.b), a.setXYZ(17, e.r, e.g, e.b), a.setXYZ(18, e.r, e.g, e.b), a.setXYZ(19, e.r, e.g, e.b), a.setXYZ(20, e.r, e.g, e.b), a.setXYZ(21, e.r, e.g, e.b), a.setXYZ(22, e.r, e.g, e.b), a.setXYZ(23, e.r, e.g, e.b), a.setXYZ(24, t.r, t.g, t.b), a.setXYZ(25, t.r, t.g, t.b), a.setXYZ(26, t.r, t.g, t.b), a.setXYZ(27, t.r, t.g, t.b), a.setXYZ(28, t.r, t.g, t.b), a.setXYZ(29, t.r, t.g, t.b), a.setXYZ(30, t.r, t.g, t.b), a.setXYZ(31, t.r, t.g, t.b), a.setXYZ(32, n.r, n.g, n.b), a.setXYZ(33, n.r, n.g, n.b), a.setXYZ(34, n.r, n.g, n.b), a.setXYZ(35, n.r, n.g, n.b), a.setXYZ(36, n.r, n.g, n.b), a.setXYZ(37, n.r, n.g, n.b), a.setXYZ(38, r.r, r.g, r.b), a.setXYZ(39, r.r, r.g, r.b), a.setXYZ(40, i.r, i.g, i.b), a.setXYZ(41, i.r, i.g, i.b), a.setXYZ(42, i.r, i.g, i.b), a.setXYZ(43, i.r, i.g, i.b), a.setXYZ(44, i.r, i.g, i.b), a.setXYZ(45, i.r, i.g, i.b), a.setXYZ(46, i.r, i.g, i.b), a.setXYZ(47, i.r, i.g, i.b), a.setXYZ(48, i.r, i.g, i.b), a.setXYZ(49, i.r, i.g, i.b), a.needsUpdate = !0, this;
	}
	update() {
		let e = this.geometry, t = this.pointMap, n, r;
		if (Yf.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), !0 === this.camera.reversedDepth) n = 1, r = 0;
		else if (this.camera.coordinateSystem === 2e3) n = -1, r = 1;
		else {
			if (this.camera.coordinateSystem !== 2001) throw Error("THREE.CameraHelper.update(): Invalid coordinate system: " + this.camera.coordinateSystem);
			n = 0, r = 1;
		}
		Zf("c", t, e, Yf, 0, 0, n), Zf("t", t, e, Yf, 0, 0, r), Zf("n1", t, e, Yf, -1, -1, n), Zf("n2", t, e, Yf, 1, -1, n), Zf("n3", t, e, Yf, -1, 1, n), Zf("n4", t, e, Yf, 1, 1, n), Zf("f1", t, e, Yf, -1, -1, r), Zf("f2", t, e, Yf, 1, -1, r), Zf("f3", t, e, Yf, -1, 1, r), Zf("f4", t, e, Yf, 1, 1, r), Zf("u1", t, e, Yf, .7, 1.1, n), Zf("u2", t, e, Yf, -.7, 1.1, n), Zf("u3", t, e, Yf, 0, 2, n), Zf("cf1", t, e, Yf, -1, 0, r), Zf("cf2", t, e, Yf, 1, 0, r), Zf("cf3", t, e, Yf, 0, -1, r), Zf("cf4", t, e, Yf, 0, 1, r), Zf("cn1", t, e, Yf, -1, 0, n), Zf("cn2", t, e, Yf, 1, 0, n), Zf("cn3", t, e, Yf, 0, -1, n), Zf("cn4", t, e, Yf, 0, 1, n), e.getAttribute("position").needsUpdate = !0;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
};
function Zf(e, t, n, r, i, a, o) {
	Jf.set(i, a, o).unproject(r);
	let s = t[e];
	if (s !== void 0) {
		let e = n.getAttribute("position");
		for (let t = 0, n = s.length; t < n; t++) e.setXYZ(s[t], Jf.x, Jf.y, Jf.z);
	}
}
var Qf, $f, ep = new ia(), tp = class extends Qs {
	constructor(e, t = 16776960) {
		let n = new Uint16Array([
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			0,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			4,
			0,
			4,
			1,
			5,
			2,
			6,
			3,
			7
		]), r = /* @__PURE__ */ new Float32Array(24), i = new J();
		i.setIndex(new Oa(n, 1)), i.setAttribute("position", new Oa(r, 3)), super(i, new Bs({
			color: t,
			toneMapped: !1
		})), this.object = e, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
	}
	update() {
		if (this.object !== void 0 && ep.setFromObject(this.object), ep.isEmpty()) return;
		let e = ep.min, t = ep.max, n = this.geometry.attributes.position, r = n.array;
		r[0] = t.x, r[1] = t.y, r[2] = t.z, r[3] = e.x, r[4] = t.y, r[5] = t.z, r[6] = e.x, r[7] = e.y, r[8] = t.z, r[9] = t.x, r[10] = e.y, r[11] = t.z, r[12] = t.x, r[13] = t.y, r[14] = e.z, r[15] = e.x, r[16] = t.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = t.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere();
	}
	setFromObject(e) {
		return this.object = e, this.update(), this;
	}
	copy(e, t) {
		return super.copy(e, t), this.object = e.object, this;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, np = class extends Qs {
	constructor(e, t = 16776960) {
		let n = new Uint16Array([
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			0,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			4,
			0,
			4,
			1,
			5,
			2,
			6,
			3,
			7
		]), r = new J();
		r.setIndex(new Oa(n, 1)), r.setAttribute("position", new q([
			1,
			1,
			1,
			-1,
			1,
			1,
			-1,
			-1,
			1,
			1,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			-1,
			-1,
			-1,
			1,
			-1,
			-1
		], 3)), super(r, new Bs({
			color: t,
			toneMapped: !1
		})), this.box = e, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
	}
	updateMatrixWorld(e) {
		let t = this.box;
		t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(e));
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, rp = class extends Js {
	constructor(e, t = 1, n = 16776960) {
		let r = n, i = new J();
		i.setAttribute("position", new q([
			1,
			-1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0,
			1,
			1,
			0
		], 3)), i.computeBoundingSphere(), super(i, new Bs({
			color: r,
			toneMapped: !1
		})), this.type = "PlaneHelper", this.plane = e, this.size = t;
		let a = new J();
		a.setAttribute("position", new q([
			1,
			1,
			0,
			-1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			1,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0
		], 3)), a.computeBoundingSphere(), this.add(new Ro(a, new Eo({
			color: r,
			opacity: .2,
			transparent: !0,
			depthWrite: !1,
			toneMapped: !1
		})));
	}
	updateMatrixWorld(e) {
		this.position.set(0, 0, 0), this.scale.set(.5 * this.size, .5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(e);
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
	}
}, ip = new H(), ap = class extends Mi {
	constructor(e = new H(0, 0, 1), t = new H(0, 0, 0), n = 1, r = 16776960, i = .2 * n, a = .2 * i) {
		super(), this.type = "ArrowHelper", Qf === void 0 && ((Qf = new J()).setAttribute("position", new q([
			0,
			0,
			0,
			0,
			1,
			0
		], 3)), ($f = new Sc(.5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(t), this.line = new Js(Qf, new Bs({
			color: r,
			toneMapped: !1
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ro($f, new Eo({
			color: r,
			toneMapped: !1
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a);
	}
	setDirection(e) {
		if (e.y > .99999) this.quaternion.set(0, 0, 0, 1);
		else if (e.y < -.99999) this.quaternion.set(1, 0, 0, 0);
		else {
			ip.set(e.z, 0, -e.x).normalize();
			let t = Math.acos(e.y);
			this.quaternion.setFromAxisAngle(ip, t);
		}
	}
	setLength(e, t = .2 * e, n = .2 * t) {
		this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
	}
	setColor(e) {
		this.line.material.color.set(e), this.cone.material.color.set(e);
	}
	copy(e) {
		return super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
	}
	dispose() {
		this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
	}
}, op = class extends Qs {
	constructor(e = 1) {
		let t = [
			0,
			0,
			0,
			e,
			0,
			0,
			0,
			0,
			0,
			0,
			e,
			0,
			0,
			0,
			0,
			0,
			0,
			e
		], n = new J();
		n.setAttribute("position", new q(t, 3)), n.setAttribute("color", new q([
			1,
			0,
			0,
			1,
			.6,
			0,
			0,
			1,
			0,
			.6,
			1,
			0,
			0,
			0,
			1,
			0,
			.6,
			1
		], 3)), super(n, new Bs({
			vertexColors: !0,
			toneMapped: !1
		})), this.type = "AxesHelper";
	}
	setColors(e, t, n) {
		let r = new K(), i = this.geometry.attributes.color.array;
		return r.set(e), r.toArray(i, 0), r.toArray(i, 3), r.set(t), r.toArray(i, 6), r.toArray(i, 9), r.set(n), r.toArray(i, 12), r.toArray(i, 15), this.geometry.attributes.color.needsUpdate = !0, this;
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, sp = class {
	constructor() {
		this.type = "ShapePath", this.color = new K(), this.subPaths = [], this.currentPath = null;
	}
	moveTo(e, t) {
		return this.currentPath = new Zc(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
	}
	lineTo(e, t) {
		return this.currentPath.lineTo(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		return this.currentPath.quadraticCurveTo(e, t, n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
	}
	splineThru(e) {
		return this.currentPath.splineThru(e), this;
	}
	toShapes(e) {
		function t(e, t) {
			let n = t.length, r = !1;
			for (let i = n - 1, a = 0; a < n; i = a++) {
				let n = t[i], o = t[a], s = o.x - n.x, c = o.y - n.y;
				if (Math.abs(c) > 2 ** -52) {
					if (c < 0 && (n = t[a], s = -s, o = t[i], c = -c), e.y < n.y || e.y > o.y) continue;
					if (e.y === n.y) {
						if (e.x === n.x) return !0;
					} else {
						let t = c * (e.x - n.x) - s * (e.y - n.y);
						if (t === 0) return !0;
						if (t < 0) continue;
						r = !r;
					}
				} else {
					if (e.y !== n.y) continue;
					if (o.x <= e.x && e.x <= n.x || n.x <= e.x && e.x <= o.x) return !0;
				}
			}
			return r;
		}
		let n = El.isClockWise, r = this.subPaths;
		if (r.length === 0) return [];
		let i, a, o, s = [];
		if (r.length === 1) return a = r[0], o = new Qc(), o.curves = a.curves, s.push(o), s;
		let c = !n(r[0].getPoints());
		c = e ? !c : c;
		let l = [], u = [], d, f, p = [], m = 0;
		u[m] = void 0, p[m] = [];
		for (let t = 0, o = r.length; t < o; t++) a = r[t], d = a.getPoints(), i = n(d), i = e ? !i : i, i ? (!c && u[m] && m++, u[m] = {
			s: new Qc(),
			p: d
		}, u[m].s.curves = a.curves, c && m++, p[m] = []) : p[m].push({
			h: a,
			p: d[0]
		});
		if (!u[0]) return function(e) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n], i = new Qc();
				i.curves = r.curves, t.push(i);
			}
			return t;
		}(r);
		if (u.length > 1) {
			let e = !1, n = 0;
			for (let e = 0, t = u.length; e < t; e++) l[e] = [];
			for (let r = 0, i = u.length; r < i; r++) {
				let i = p[r];
				for (let a = 0; a < i.length; a++) {
					let o = i[a], s = !0;
					for (let i = 0; i < u.length; i++) t(o.p, u[i].p) && (r !== i && n++, s ? (s = !1, l[i].push(o)) : e = !0);
					s && l[r].push(o);
				}
			}
			n > 0 && !1 === e && (p = l);
		}
		for (let e = 0, t = u.length; e < t; e++) {
			o = u[e].s, s.push(o), f = p[e];
			for (let e = 0, t = f.length; e < t; e++) o.holes.push(f[e].h);
		}
		return s;
	}
}, cp = class extends Er {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		e === void 0 ? L("Controls: connect() now requires an element.") : (this.domElement !== null && this.disconnect(), this.domElement = e);
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function lp(e, t, n, r) {
	let i = function(e) {
		switch (e) {
			case We:
			case Ge: return {
				byteLength: 1,
				components: 1
			};
			case qe:
			case Ke:
			case Ze: return {
				byteLength: 2,
				components: 1
			};
			case Qe:
			case $e: return {
				byteLength: 2,
				components: 4
			};
			case Ye:
			case Je:
			case Xe: return {
				byteLength: 4,
				components: 1
			};
			case tt:
			case nt: return {
				byteLength: 4,
				components: 3
			};
		}
		throw Error(`Unknown texture type ${e}.`);
	}(r);
	switch (n) {
		case 1021: return e * t;
		case ct:
		case lt: return e * t / i.components * i.byteLength;
		case ut:
		case dt: return e * t * 2 / i.components * i.byteLength;
		case 1022: return e * t * 3 / i.components * i.byteLength;
		case at:
		case pt: return e * t * 4 / i.components * i.byteLength;
		case 33776:
		case 33777: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case 33778:
		case 33779: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case 35841:
		case 35843: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case 35840:
		case 35842: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case 36196:
		case 37492:
		case 37488:
		case 37489: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case 37496:
		case 37490:
		case 37491:
		case 37808: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case 37809: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case 37810: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case 37811: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case 37812: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case 37813: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case 37814: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case 37815: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case 37816: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case 37817: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case 37818: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case 37819: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case 37820: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case 37821: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case 36492:
		case 36494:
		case 36495: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case 36283:
		case 36284: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case 36285:
		case 36286: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
var up = class {
	static contain(e, t) {
		return function(e, t) {
			let n = e.image && e.image.width ? e.image.width / e.image.height : 1;
			return n > t ? (e.repeat.x = 1, e.repeat.y = n / t, e.offset.x = 0, e.offset.y = (1 - e.repeat.y) / 2) : (e.repeat.x = t / n, e.repeat.y = 1, e.offset.x = (1 - e.repeat.x) / 2, e.offset.y = 0), e;
		}(e, t);
	}
	static cover(e, t) {
		return function(e, t) {
			let n = e.image && e.image.width ? e.image.width / e.image.height : 1;
			return n > t ? (e.repeat.x = t / n, e.repeat.y = 1, e.offset.x = (1 - e.repeat.x) / 2, e.offset.y = 0) : (e.repeat.x = 1, e.repeat.y = n / t, e.offset.x = 0, e.offset.y = (1 - e.repeat.y) / 2), e;
		}(e, t);
	}
	static fill(e) {
		return function(e) {
			return e.repeat.x = 1, e.repeat.y = 1, e.offset.x = 0, e.offset.y = 0, e;
		}(e);
	}
	static getByteLength(e, t, n, r) {
		return lp(e, t, n, r);
	}
};
function dp() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			!0 !== t && n !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function fp(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return {
		get: function(e) {
			return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
		},
		remove: function(n) {
			n.isInterleavedBufferAttribute && (n = n.data);
			let r = t.get(n);
			r && (e.deleteBuffer(r.buffer), t.delete(n));
		},
		update: function(n, r) {
			if (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute) {
				let e = t.get(n);
				(!e || e.version < n.version) && t.set(n, {
					buffer: n.buffer,
					type: n.type,
					bytesPerElement: n.elementSize,
					version: n.version
				});
				return;
			}
			let i = t.get(n);
			if (i === void 0) t.set(n, function(t, n) {
				let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer(), s;
				if (e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback(), r instanceof Float32Array) s = e.FLOAT;
				else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
				else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
				else if (r instanceof Int16Array) s = e.SHORT;
				else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
				else if (r instanceof Int32Array) s = e.INT;
				else if (r instanceof Int8Array) s = e.BYTE;
				else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
				else {
					if (!(r instanceof Uint8ClampedArray)) throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
					s = e.UNSIGNED_BYTE;
				}
				return {
					buffer: o,
					type: s,
					bytesPerElement: r.BYTES_PER_ELEMENT,
					version: t.version,
					size: a
				};
			}(n, r));
			else if (i.version < n.version) {
				if (i.size !== n.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
				(function(t, n, r) {
					let i = n.array, a = n.updateRanges;
					if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
					else {
						a.sort((e, t) => e.start - t.start);
						let t = 0;
						for (let e = 1; e < a.length; e++) {
							let n = a[t], r = a[e];
							r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
						}
						a.length = t + 1;
						for (let t = 0, n = a.length; t < n; t++) {
							let n = a[t];
							e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
						}
						n.clearUpdateRanges();
					}
					n.onUploadCallback();
				})(i.buffer, n, r), i.version = n.version;
			}
		}
	};
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "183" } })), typeof window < "u" && (window.__THREE__ ? L("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "183");
var Y = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return v;\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, X = {
	common: {
		diffuse: { value: new K(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: new U() },
		alphaMap: { value: null },
		alphaMapTransform: { value: new U() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: new U() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: new U() },
		flipEnvMap: { value: -1 },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: new U() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: new U() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: new U() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: new U() },
		normalScale: { value: new V(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: new U() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: new U() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: new U() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: new U() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: new K(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null }
	},
	points: {
		diffuse: { value: new K(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: new U() },
		alphaTest: { value: 0 },
		uvTransform: { value: new U() }
	},
	sprite: {
		diffuse: { value: new K(16777215) },
		opacity: { value: 1 },
		center: { value: new V(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: new U() },
		alphaMap: { value: null },
		alphaMapTransform: { value: new U() },
		alphaTest: { value: 0 }
	}
}, pp = {
	basic: {
		uniforms: ql([
			X.common,
			X.specularmap,
			X.envmap,
			X.aomap,
			X.lightmap,
			X.fog
		]),
		vertexShader: Y.meshbasic_vert,
		fragmentShader: Y.meshbasic_frag
	},
	lambert: {
		uniforms: ql([
			X.common,
			X.specularmap,
			X.envmap,
			X.aomap,
			X.lightmap,
			X.emissivemap,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			X.fog,
			X.lights,
			{
				emissive: { value: new K(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Y.meshlambert_vert,
		fragmentShader: Y.meshlambert_frag
	},
	phong: {
		uniforms: ql([
			X.common,
			X.specularmap,
			X.envmap,
			X.aomap,
			X.lightmap,
			X.emissivemap,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			X.fog,
			X.lights,
			{
				emissive: { value: new K(0) },
				specular: { value: new K(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Y.meshphong_vert,
		fragmentShader: Y.meshphong_frag
	},
	standard: {
		uniforms: ql([
			X.common,
			X.envmap,
			X.aomap,
			X.lightmap,
			X.emissivemap,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			X.roughnessmap,
			X.metalnessmap,
			X.fog,
			X.lights,
			{
				emissive: { value: new K(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: Y.meshphysical_vert,
		fragmentShader: Y.meshphysical_frag
	},
	toon: {
		uniforms: ql([
			X.common,
			X.aomap,
			X.lightmap,
			X.emissivemap,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			X.gradientmap,
			X.fog,
			X.lights,
			{ emissive: { value: new K(0) } }
		]),
		vertexShader: Y.meshtoon_vert,
		fragmentShader: Y.meshtoon_frag
	},
	matcap: {
		uniforms: ql([
			X.common,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			X.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: Y.meshmatcap_vert,
		fragmentShader: Y.meshmatcap_frag
	},
	points: {
		uniforms: ql([X.points, X.fog]),
		vertexShader: Y.points_vert,
		fragmentShader: Y.points_frag
	},
	dashed: {
		uniforms: ql([
			X.common,
			X.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: Y.linedashed_vert,
		fragmentShader: Y.linedashed_frag
	},
	depth: {
		uniforms: ql([X.common, X.displacementmap]),
		vertexShader: Y.depth_vert,
		fragmentShader: Y.depth_frag
	},
	normal: {
		uniforms: ql([
			X.common,
			X.bumpmap,
			X.normalmap,
			X.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: Y.meshnormal_vert,
		fragmentShader: Y.meshnormal_frag
	},
	sprite: {
		uniforms: ql([X.sprite, X.fog]),
		vertexShader: Y.sprite_vert,
		fragmentShader: Y.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: new U() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: Y.background_vert,
		fragmentShader: Y.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: new U() }
		},
		vertexShader: Y.backgroundCube_vert,
		fragmentShader: Y.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: Y.cube_vert,
		fragmentShader: Y.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: Y.equirect_vert,
		fragmentShader: Y.equirect_frag
	},
	distance: {
		uniforms: ql([
			X.common,
			X.displacementmap,
			{
				referencePosition: { value: new H() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: Y.distance_vert,
		fragmentShader: Y.distance_frag
	},
	shadow: {
		uniforms: ql([
			X.lights,
			X.fog,
			{
				color: { value: new K(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: Y.shadow_vert,
		fragmentShader: Y.shadow_frag
	}
};
pp.physical = {
	uniforms: ql([pp.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: new U() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: new U() },
		clearcoatNormalScale: { value: new V(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: new U() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: new U() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: new U() },
		sheen: { value: 0 },
		sheenColor: { value: new K(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: new U() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: new U() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: new U() },
		transmissionSamplerSize: { value: new V() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: new U() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: new K(0) },
		specularColor: { value: new K(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: new U() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: new U() },
		anisotropyVector: { value: new V() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: new U() }
	}]),
	vertexShader: Y.meshphysical_vert,
	fragmentShader: Y.meshphysical_frag
};
var mp = {
	r: 0,
	b: 0,
	g: 0
}, hp = new hi(), gp = new G();
function _p(e, t, n, r, i, a) {
	let o = new K(0), s, c, l = !0 === i ? 0 : 1, u = null, d = 0, f = null;
	function p(e) {
		let n = !0 === e.isScene ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t, r) {
		t.getRGB(mp, Jl(e)), n.buffers.color.setClear(mp.r, mp.g, mp.b, r, a);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), l = t, m(o, l);
		},
		getClearAlpha: function() {
			return l;
		},
		setClearAlpha: function(e) {
			l = e, m(o, l);
		},
		render: function(t) {
			let r = !1, i = p(t);
			i === null ? m(o, l) : i && i.isColor && (m(i, 1), r = !0);
			let s = e.xr.getEnvironmentBlendMode();
			s === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : s === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
		},
		addToRenderList: function(t, n) {
			let i = p(n);
			i && (i.isCubeTexture || i.mapping === 306) ? (c === void 0 && (c = new Ro(new vc(1, 1, 1), new Xl({
				name: "BackgroundCubeMaterial",
				uniforms: Kl(pp.backgroundCube.uniforms),
				vertexShader: pp.backgroundCube.vertexShader,
				fragmentShader: pp.backgroundCube.fragmentShader,
				side: 1,
				depthTest: !1,
				depthWrite: !1,
				fog: !1,
				allowOverride: !1
			})), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(e, t, n) {
				this.matrixWorld.copyPosition(n.matrixWorld);
			}, Object.defineProperty(c.material, "envMap", { get: function() {
				return this.uniforms.envMap.value;
			} }), r.update(c)), hp.copy(n.backgroundRotation), hp.x *= -1, hp.y *= -1, hp.z *= -1, i.isCubeTexture && !1 === i.isRenderTargetTexture && (hp.y *= -1, hp.z *= -1), c.material.uniforms.envMap.value = i, c.material.uniforms.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1, c.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(gp.makeRotationFromEuler(hp)), c.material.toneMapped = W.getTransfer(i.colorSpace) !== Sn, u === i && d === i.version && f === e.toneMapping || (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null)) : i && i.isTexture && (s === void 0 && (s = new Ro(new Pl(2, 2), new Xl({
				name: "BackgroundMaterial",
				uniforms: Kl(pp.background.uniforms),
				vertexShader: pp.background.vertexShader,
				fragmentShader: pp.background.fragmentShader,
				side: 0,
				depthTest: !1,
				depthWrite: !1,
				fog: !1,
				allowOverride: !1
			})), s.geometry.deleteAttribute("normal"), Object.defineProperty(s.material, "map", { get: function() {
				return this.uniforms.t2D.value;
			} }), r.update(s)), s.material.uniforms.t2D.value = i, s.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, s.material.toneMapped = W.getTransfer(i.colorSpace) !== Sn, !0 === i.matrixAutoUpdate && i.updateMatrix(), s.material.uniforms.uvTransform.value.copy(i.matrix), u === i && d === i.version && f === e.toneMapping || (s.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), s.layers.enableAll(), t.unshift(s, s.geometry, s.material, 0, 0, null));
		},
		dispose: function() {
			c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), s !== void 0 && (s.geometry.dispose(), s.material.dispose(), s = void 0);
		}
	};
}
function vp(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = l(null), a = i, o = !1;
	function s(t) {
		return e.bindVertexArray(t);
	}
	function c(t) {
		return e.deleteVertexArray(t);
	}
	function l(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function u() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function d(e) {
		f(e, 0);
	}
	function f(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function p() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function m(t, n, r, i, a, o, s) {
		!0 === s ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function h() {
		g(), o = !0, a !== i && (a = i, s(a.object));
	}
	function g() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: function(n, i, c, h, g) {
			let _ = !1, v = function(t, n, i, a) {
				let o = !0 === a.wireframe, s = r[n.id];
				s === void 0 && (s = {}, r[n.id] = s);
				let c = !0 === t.isInstancedMesh ? t.id : 0, u = s[c];
				u === void 0 && (u = {}, s[c] = u);
				let d = u[i.id];
				d === void 0 && (d = {}, u[i.id] = d);
				let f = d[o];
				return f === void 0 && (f = l(e.createVertexArray()), d[o] = f), f;
			}(n, h, c, i);
			a !== v && (a = v, s(a.object)), _ = function(e, t, n, r) {
				let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
				for (let t in c) if (c[t].location >= 0) {
					let n = i[t], r = o[t];
					if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
					s++;
				}
				return a.attributesNum !== s || a.index !== r;
			}(n, h, c, g), _ && function(e, t, n, r) {
				let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
				for (let t in c) if (c[t].location >= 0) {
					let n = o[t];
					n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
					let r = {};
					r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
				}
				a.attributes = i, a.attributesNum = s, a.index = r;
			}(n, h, c, g), g !== null && t.update(g, e.ELEMENT_ARRAY_BUFFER), (_ || o) && (o = !1, function(n, r, i, a) {
				u();
				let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
				for (let r in s) {
					let i = s[r];
					if (i.location >= 0) {
						let s = o[r];
						if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
							let r = s.normalized, o = s.itemSize, c = t.get(s);
							if (c === void 0) continue;
							let l = c.buffer, u = c.type, p = c.bytesPerElement, h = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
							if (s.isInterleavedBufferAttribute) {
								let t = s.data, c = t.stride, g = s.offset;
								if (t.isInstancedInterleavedBuffer) {
									for (let e = 0; e < i.locationSize; e++) f(i.location + e, t.meshPerAttribute);
									!0 !== n.isInstancedMesh && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
								} else for (let e = 0; e < i.locationSize; e++) d(i.location + e);
								e.bindBuffer(e.ARRAY_BUFFER, l);
								for (let e = 0; e < i.locationSize; e++) m(i.location + e, o / i.locationSize, u, r, c * p, (g + o / i.locationSize * e) * p, h);
							} else {
								if (s.isInstancedBufferAttribute) {
									for (let e = 0; e < i.locationSize; e++) f(i.location + e, s.meshPerAttribute);
									!0 !== n.isInstancedMesh && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
								} else for (let e = 0; e < i.locationSize; e++) d(i.location + e);
								e.bindBuffer(e.ARRAY_BUFFER, l);
								for (let e = 0; e < i.locationSize; e++) m(i.location + e, o / i.locationSize, u, r, o * p, o / i.locationSize * e * p, h);
							}
						} else if (c !== void 0) {
							let t = c[r];
							if (t !== void 0) switch (t.length) {
								case 2:
									e.vertexAttrib2fv(i.location, t);
									break;
								case 3:
									e.vertexAttrib3fv(i.location, t);
									break;
								case 4:
									e.vertexAttrib4fv(i.location, t);
									break;
								default: e.vertexAttrib1fv(i.location, t);
							}
						}
					}
				}
				p();
			}(n, i, c, h), g !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer));
		},
		reset: h,
		resetDefaultState: g,
		dispose: function() {
			h();
			for (let e in r) {
				let t = r[e];
				for (let e in t) {
					let n = t[e];
					for (let e in n) {
						let t = n[e];
						for (let e in t) c(t[e].object), delete t[e];
						delete n[e];
					}
				}
				delete r[e];
			}
		},
		releaseStatesOfGeometry: function(e) {
			if (r[e.id] === void 0) return;
			let t = r[e.id];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) c(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e.id];
		},
		releaseStatesOfObject: function(e) {
			for (let t in r) {
				let n = r[t], i = !0 === e.isInstancedMesh ? e.id : 0, a = n[i];
				if (a !== void 0) {
					for (let e in a) {
						let t = a[e];
						for (let e in t) c(t[e].object), delete t[e];
						delete a[e];
					}
					delete n[i], Object.keys(n).length === 0 && delete r[t];
				}
			}
		},
		releaseStatesOfProgram: function(e) {
			for (let t in r) {
				let n = r[t];
				for (let t in n) {
					let r = n[t];
					if (r[e.id] === void 0) continue;
					let i = r[e.id];
					for (let e in i) c(i[e].object), delete i[e];
					delete r[e.id];
				}
			}
		},
		initAttributes: u,
		enableAttribute: d,
		disableUnusedAttributes: p
	};
}
function yp(e, t, n) {
	let r;
	function i(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	this.setMode = function(e) {
		r = e;
	}, this.render = function(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}, this.renderInstances = i, this.renderMultiDraw = function(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}, this.renderMultiDrawInstances = function(e, a, o, s) {
		if (o === 0) return;
		let c = t.get("WEBGL_multi_draw");
		if (c === null) for (let t = 0; t < e.length; t++) i(e[t], a[t], s[t]);
		else {
			c.multiDrawArraysInstancedWEBGL(r, e, 0, a, 0, s, 0, o);
			let t = 0;
			for (let e = 0; e < o; e++) t += a[e] * s[e];
			n.update(t, r, 1);
		}
	};
}
function bp(e, t, n, r) {
	let i;
	function a(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let o = n.precision === void 0 ? "highp" : n.precision, s = a(o);
	return s !== o && (L("WebGLRenderer:", o, "not supported, using", s, "instead."), o = s), {
		isWebGL2: !0,
		getMaxAnisotropy: function() {
			if (i !== void 0) return i;
			if (!0 === t.has("EXT_texture_filter_anisotropic")) {
				let n = t.get("EXT_texture_filter_anisotropic");
				i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
			} else i = 0;
			return i;
		},
		getMaxPrecision: a,
		textureFormatReadable: function(t) {
			return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
		},
		textureTypeReadable: function(n) {
			let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
			return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
		},
		precision: o,
		logarithmicDepthBuffer: !0 === n.logarithmicDepthBuffer,
		reversedDepthBuffer: !0 === n.reversedDepthBuffer && t.has("EXT_clip_control"),
		maxTextures: e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
		maxVertexTextures: e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
		maxTextureSize: e.getParameter(e.MAX_TEXTURE_SIZE),
		maxCubemapSize: e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
		maxAttributes: e.getParameter(e.MAX_VERTEX_ATTRIBS),
		maxVertexUniforms: e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
		maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
		maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
		maxSamples: e.getParameter(e.MAX_SAMPLES),
		samples: e.getParameter(e.SAMPLES)
	};
}
function xp(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new ps(), s = new U(), c = {
		value: null,
		needsUpdate: !1
	};
	function l(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, !0 !== i || l === null) {
				let t = r + 4 * a, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, l(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = l(e, t, 0);
	}, this.setState = function(o, s, u) {
		let d = o.clippingPlanes, f = o.clipIntersection, p = o.clipShadows, m = e.get(o);
		if (!i || d === null || d.length === 0 || a && !p) a ? l(null) : function() {
			c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
		}();
		else {
			let e = a ? 0 : r, t = 4 * e, i = m.clippingState || null;
			c.value = i, i = l(d, s, t, u);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
}
var Sp = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], Cp = 20, wp = new cd(), Tp = new K(), Ep = null, Dp = 0, Op = 0, kp = !1, Ap = new H(), jp = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = Ap } = i;
		Ep = this._renderer.getRenderTarget(), Dp = this._renderer.getActiveCubeFace(), Op = this._renderer.getActiveMipmapLevel(), kp = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = Fp(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = Pp(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(Ep, Dp, Op), this._renderer.xr.enabled = kp, e.scissorTest = !1, Np(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Ep = this._renderer.getRenderTarget(), Dp = this._renderer.getActiveCubeFace(), Op = this._renderer.getActiveMipmapLevel(), kp = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: Be,
			minFilter: Be,
			generateMipmaps: !1,
			type: Ze,
			format: at,
			colorSpace: bn,
			depthBuffer: !1
		}, r = Mp(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Mp(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = function(e) {
				let t = [], n = [], r = [], i = e, a = e - 4 + 1 + Sp.length;
				for (let o = 0; o < a; o++) {
					let a = 2 ** i;
					t.push(a);
					let s = 1 / a;
					o > e - 4 ? s = Sp[o - e + 4 - 1] : o === 0 && (s = 0), n.push(s);
					let c = 1 / (a - 2), l = -c, u = 1 + c, d = [
						l,
						l,
						u,
						l,
						u,
						u,
						l,
						l,
						u,
						u,
						l,
						u
					], f = /* @__PURE__ */ new Float32Array(108), p = /* @__PURE__ */ new Float32Array(72), m = /* @__PURE__ */ new Float32Array(36);
					for (let e = 0; e < 6; e++) {
						let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
							t,
							n,
							0,
							t + 2 / 3,
							n,
							0,
							t + 2 / 3,
							n + 1,
							0,
							t,
							n,
							0,
							t + 2 / 3,
							n + 1,
							0,
							t,
							n + 1,
							0
						];
						f.set(r, 18 * e), p.set(d, 12 * e);
						let i = [
							e,
							e,
							e,
							e,
							e,
							e
						];
						m.set(i, 6 * e);
					}
					let h = new J();
					h.setAttribute("position", new Oa(f, 3)), h.setAttribute("uv", new Oa(p, 2)), h.setAttribute("faceIndex", new Oa(m, 1)), r.push(new Ro(h, null)), i > 4 && i--;
				}
				return {
					lodMeshes: r,
					sizeLods: t,
					sigmas: n
				};
			}(r)), this._blurMaterial = function(e, t, n) {
				let r = new Float32Array(Cp), i = new H(0, 1, 0);
				return new Xl({
					name: "SphericalGaussianBlur",
					defines: {
						n: Cp,
						CUBEUV_TEXEL_WIDTH: 1 / t,
						CUBEUV_TEXEL_HEIGHT: 1 / n,
						CUBEUV_MAX_MIP: `${e}.0`
					},
					uniforms: {
						envMap: { value: null },
						samples: { value: 1 },
						weights: { value: r },
						latitudinal: { value: !1 },
						dTheta: { value: 0 },
						mipInt: { value: 0 },
						poleAxis: { value: i }
					},
					vertexShader: Ip(),
					fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
					blending: 0,
					depthTest: !1,
					depthWrite: !1
				});
			}(r, e, t), this._ggxMaterial = function(e, t, n) {
				return new Xl({
					name: "PMREMGGXConvolution",
					defines: {
						GGX_SAMPLES: 256,
						CUBEUV_TEXEL_WIDTH: 1 / t,
						CUBEUV_TEXEL_HEIGHT: 1 / n,
						CUBEUV_MAX_MIP: `${e}.0`
					},
					uniforms: {
						envMap: { value: null },
						roughness: { value: 0 },
						mipInt: { value: 0 }
					},
					vertexShader: Ip(),
					fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
					blending: 0,
					depthTest: !1,
					depthWrite: !1
				});
			}(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Ro(new J(), e);
		this._renderer.compile(t, wp);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new rd(90, 1, t, n), o = [
			1,
			-1,
			1,
			1,
			1,
			1
		], s = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], c = this._renderer, l = c.autoClear, u = c.toneMapping;
		c.getClearColor(Tp), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Ro(new vc(), new Eo({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
		m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(Tp), p = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
			let l = this._cubeSize;
			Np(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
		}
		c.toneMapping = u, c.autoClear = l, e.background = m;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fp()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Pp());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i, i.uniforms.envMap.value = e;
		let o = this._cubeSize;
		Np(t, 0, 0, 3 * o, 2 * o), n.setRenderTarget(t), n.render(a, wp);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
		o.material = a;
		let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (0 + 1.25 * c), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - 4 ? n - d + 4 : 0), m = 4 * (this._cubeSize - f);
		s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, Np(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, wp), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, Np(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, wp);
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, o) {
		let s = this._renderer, c = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && R("blur direction must be either latitudinal or longitudinal!");
		let l = this._lodMeshes[r];
		l.material = c;
		let u = c.uniforms, d = this._sizeLods[n] - 1, f = isFinite(i) ? Math.PI / (2 * d) : 2 * Math.PI / 39, p = i / f, m = isFinite(i) ? 1 + Math.floor(3 * p) : Cp;
		m > Cp && L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
		let h = [], g = 0;
		for (let e = 0; e < Cp; ++e) {
			let t = e / p, n = Math.exp(-t * t / 2);
			h.push(n), e === 0 ? g += n : e < m && (g += 2 * n);
		}
		for (let e = 0; e < h.length; e++) h[e] = h[e] / g;
		u.envMap.value = e.texture, u.samples.value = m, u.weights.value = h, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
		let { _lodMax: _ } = this;
		u.dTheta.value = f, u.mipInt.value = _ - n;
		let v = this._sizeLods[r];
		Np(t, 3 * v * (r > _ - 4 ? r - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), s.setRenderTarget(t), s.render(l, wp);
	}
};
function Mp(e, t, n) {
	let r = new ti(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function Np(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function Pp() {
	return new Xl({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: Ip(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Fp() {
	return new Xl({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: Ip(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Ip() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var Lp = class extends ti {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new pc(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new vc(5, 5, 5), i = new Xl({
			name: "CubemapFromEquirect",
			uniforms: Kl(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Ro(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = Be), new Md(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function Rp(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function a(e) {
		let n = e.target;
		n.removeEventListener("dispose", a);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function o(e) {
		let t = e.target;
		t.removeEventListener("dispose", o);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	return {
		get: function(s, c = !1) {
			return s == null ? null : c ? function(t) {
				if (t && t.isTexture) {
					let i = t.mapping, a = i === 303 || i === 304, s = i === 301 || i === 302;
					if (a || s) {
						let i = n.get(t), c = i === void 0 ? 0 : i.texture.pmremVersion;
						if (t.isRenderTargetTexture && t.pmremVersion !== c) return r === null && (r = new jp(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
						if (i !== void 0) return i.texture;
						{
							let c = t.image;
							return a && c && c.height > 0 || s && c && function(e) {
								let t = 0;
								for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
								return t === 6;
							}(c) ? (r === null && (r = new jp(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", o), i.texture) : null;
						}
					}
				}
				return t;
			}(s) : function(n) {
				if (n && n.isTexture) {
					let r = n.mapping;
					if (r === 303 || r === 304) {
						if (t.has(n)) return i(t.get(n).texture, n.mapping);
						{
							let r = n.image;
							if (r && r.height > 0) {
								let o = new Lp(r.height);
								return o.fromEquirectangularTexture(e, n), t.set(n, o), n.addEventListener("dispose", a), i(o.texture, n.mapping);
							}
							return null;
						}
					}
				}
				return n;
			}(s);
		},
		dispose: function() {
			t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
		}
	};
}
function zp(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && wr("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function Bp(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? Fa : Na)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	return {
		get: function(e, t) {
			return !0 === i[t.id] || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t;
		},
		update: function(n) {
			let r = n.attributes;
			for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
		},
		getWireframeAttribute: function(e) {
			let t = a.get(e);
			if (t) {
				let n = e.index;
				n !== null && t.version < n.version && s(e);
			} else s(e);
			return a.get(e);
		}
	};
}
function Vp(e, t, n) {
	let r, i, a;
	function o(t, o, s) {
		s !== 0 && (e.drawElementsInstanced(r, o, i, t * a, s), n.update(o, r, s));
	}
	this.setMode = function(e) {
		r = e;
	}, this.setIndex = function(e) {
		i = e.type, a = e.bytesPerElement;
	}, this.render = function(t, o) {
		e.drawElements(r, o, i, t * a), n.update(o, r, 1);
	}, this.renderInstances = o, this.renderMultiDraw = function(e, a, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, a, 0, i, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += a[e];
		n.update(s, r, 1);
	}, this.renderMultiDrawInstances = function(e, s, c, l) {
		if (c === 0) return;
		let u = t.get("WEBGL_multi_draw");
		if (u === null) for (let t = 0; t < e.length; t++) o(e[t] / a, s[t], l[t]);
		else {
			u.multiDrawElementsInstancedWEBGL(r, s, 0, i, e, 0, l, 0, c);
			let t = 0;
			for (let e = 0; e < c; e++) t += s[e] * l[e];
			n.update(t, r, 1);
		}
	};
}
function Hp(e) {
	let t = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	return {
		memory: {
			geometries: 0,
			textures: 0
		},
		render: t,
		programs: null,
		autoReset: !0,
		reset: function() {
			t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
		},
		update: function(n, r, i) {
			switch (t.calls++, r) {
				case e.TRIANGLES:
					t.triangles += n / 3 * i;
					break;
				case e.LINES:
					t.lines += n / 2 * i;
					break;
				case e.LINE_STRIP:
					t.lines += i * (n - 1);
					break;
				case e.LINE_LOOP:
					t.lines += i * n;
					break;
				case e.POINTS:
					t.points += i * n;
					break;
				default: R("WebGLInfo: Unknown draw mode:", r);
			}
		}
	};
}
function Up(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new $r();
	return { update: function(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			!0 === e && (f = 1), !0 === n && (f = 2), !0 === a && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new ni(h, p, m, u);
			g.type = Xe, g.needsUpdate = !0;
			let _ = 4 * f;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					!0 === e && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), !0 === n && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), !0 === a && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			d = {
				count: u,
				texture: g,
				size: new V(p, m)
			}, r.set(o, d), o.addEventListener("dispose", v);
		}
		if (!0 === a.isInstancedMesh && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	} };
}
function Wp(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let t = e.target;
		t.removeEventListener("dispose", o), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: function(r) {
			let s = i.render.frame, c = r.geometry, l = t.get(r, c);
			if (a.get(l) !== s && (t.update(l), a.set(l, s)), r.isInstancedMesh && (!1 === r.hasEventListener("dispose", o) && r.addEventListener("dispose", o), a.get(r) !== s && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, s))), r.isSkinnedMesh) {
				let e = r.skeleton;
				a.get(e) !== s && (e.update(), a.set(e, s));
			}
			return l;
		},
		dispose: function() {
			a = /* @__PURE__ */ new WeakMap();
		}
	};
}
var Gp = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function Kp(e, t, n, r, i) {
	let a = new ti(t, n, {
		type: e,
		depthBuffer: r,
		stencilBuffer: i
	}), o = new ti(t, n, {
		type: Ze,
		depthBuffer: !1,
		stencilBuffer: !1
	}), s = new J();
	s.setAttribute("position", new q([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), s.setAttribute("uv", new q([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let c = new Zl({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), l = new Ro(s, c), u = new cd(-1, 1, 1, -1, 0, 1), d, f = null, p = null, m = !1, h = null, g = [], _ = !1;
	this.setSize = function(e, t) {
		a.setSize(e, t), o.setSize(e, t);
		for (let n = 0; n < g.length; n++) {
			let r = g[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		g = e, _ = g.length > 0 && !0 === g[0].isRenderPass;
		let t = a.width, n = a.height;
		for (let e = 0; e < g.length; e++) {
			let r = g[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (m || e.toneMapping === 0 && g.length === 0) return !1;
		if (h = t, t !== null) {
			let e = t.width, n = t.height;
			a.width === e && a.height === n || this.setSize(e, n);
		}
		return !1 === _ && e.setRenderTarget(a), d = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return _;
	}, this.end = function(e, t) {
		e.toneMapping = d, m = !0;
		let n = a, r = o;
		for (let i = 0; i < g.length; i++) {
			let a = g[i];
			if (!1 !== a.enabled && (a.render(e, r, n, t), !1 !== a.needsSwap)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (f !== e.outputColorSpace || p !== e.toneMapping) {
			f = e.outputColorSpace, p = e.toneMapping, c.defines = {}, W.getTransfer(f) === "srgb" && (c.defines.SRGB_TRANSFER = "");
			let t = Gp[p];
			t && (c.defines[t] = ""), c.needsUpdate = !0;
		}
		c.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(h), e.render(l, u), h = null, m = !1;
	}, this.isCompositing = function() {
		return m;
	}, this.dispose = function() {
		a.dispose(), o.dispose(), s.dispose(), c.dispose();
	};
}
var qp = new Qr(), Jp = new hc(1, 1), Yp = new ni(), Xp = new ii(), Zp = new pc(), Qp = [], $p = [], em = /* @__PURE__ */ new Float32Array(16), tm = /* @__PURE__ */ new Float32Array(9), nm = /* @__PURE__ */ new Float32Array(4);
function rm(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Qp[i];
	if (a === void 0 && (a = new Float32Array(i), Qp[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function im(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function am(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function om(e, t) {
	let n = $p[t];
	n === void 0 && (n = new Int32Array(t), $p[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function sm(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function cm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (im(n, t)) return;
		e.uniform2fv(this.addr, t), am(n, t);
	}
}
function lm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (im(n, t)) return;
		e.uniform3fv(this.addr, t), am(n, t);
	}
}
function um(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (im(n, t)) return;
		e.uniform4fv(this.addr, t), am(n, t);
	}
}
function dm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (im(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), am(n, t);
	} else {
		if (im(n, r)) return;
		nm.set(r), e.uniformMatrix2fv(this.addr, !1, nm), am(n, r);
	}
}
function fm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (im(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), am(n, t);
	} else {
		if (im(n, r)) return;
		tm.set(r), e.uniformMatrix3fv(this.addr, !1, tm), am(n, r);
	}
}
function pm(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (im(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), am(n, t);
	} else {
		if (im(n, r)) return;
		em.set(r), e.uniformMatrix4fv(this.addr, !1, em), am(n, r);
	}
}
function mm(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function hm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y || (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (im(n, t)) return;
		e.uniform2iv(this.addr, t), am(n, t);
	}
}
function gm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (im(n, t)) return;
		e.uniform3iv(this.addr, t), am(n, t);
	}
}
function _m(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (im(n, t)) return;
		e.uniform4iv(this.addr, t), am(n, t);
	}
}
function vm(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function ym(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y || (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (im(n, t)) return;
		e.uniform2uiv(this.addr, t), am(n, t);
	}
}
function bm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (im(n, t)) return;
		e.uniform3uiv(this.addr, t), am(n, t);
	}
}
function xm(e, t) {
	let n = this.cache;
	if (t.x !== void 0) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (im(n, t)) return;
		e.uniform4uiv(this.addr, t), am(n, t);
	}
}
function Sm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit(), a;
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), this.type === e.SAMPLER_2D_SHADOW ? (Jp.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = Jp) : a = qp, n.setTexture2D(t || a, i);
}
function Cm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Xp, i);
}
function wm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Zp, i);
}
function Tm(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Yp, i);
}
function Em(e, t) {
	e.uniform1fv(this.addr, t);
}
function Dm(e, t) {
	let n = rm(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function Om(e, t) {
	let n = rm(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function km(e, t) {
	let n = rm(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Am(e, t) {
	let n = rm(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function jm(e, t) {
	let n = rm(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function Mm(e, t) {
	let n = rm(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function Nm(e, t) {
	e.uniform1iv(this.addr, t);
}
function Pm(e, t) {
	e.uniform2iv(this.addr, t);
}
function Fm(e, t) {
	e.uniform3iv(this.addr, t);
}
function Im(e, t) {
	e.uniform4iv(this.addr, t);
}
function Lm(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Rm(e, t) {
	e.uniform2uiv(this.addr, t);
}
function zm(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Bm(e, t) {
	e.uniform4uiv(this.addr, t);
}
function Vm(e, t, n) {
	let r = this.cache, i = t.length, a = om(n, i), o;
	im(r, a) || (e.uniform1iv(this.addr, a), am(r, a)), o = this.type === e.SAMPLER_2D_SHADOW ? Jp : qp;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function Hm(e, t, n) {
	let r = this.cache, i = t.length, a = om(n, i);
	im(r, a) || (e.uniform1iv(this.addr, a), am(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Xp, a[e]);
}
function Um(e, t, n) {
	let r = this.cache, i = t.length, a = om(n, i);
	im(r, a) || (e.uniform1iv(this.addr, a), am(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Zp, a[e]);
}
function Wm(e, t, n) {
	let r = this.cache, i = t.length, a = om(n, i);
	im(r, a) || (e.uniform1iv(this.addr, a), am(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Yp, a[e]);
}
var Gm = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = function(e) {
			switch (e) {
				case 5126: return sm;
				case 35664: return cm;
				case 35665: return lm;
				case 35666: return um;
				case 35674: return dm;
				case 35675: return fm;
				case 35676: return pm;
				case 5124:
				case 35670: return mm;
				case 35667:
				case 35671: return hm;
				case 35668:
				case 35672: return gm;
				case 35669:
				case 35673: return _m;
				case 5125: return vm;
				case 36294: return ym;
				case 36295: return bm;
				case 36296: return xm;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682: return Sm;
				case 35679:
				case 36299:
				case 36307: return Cm;
				case 35680:
				case 36300:
				case 36308:
				case 36293: return wm;
				case 36289:
				case 36303:
				case 36311:
				case 36292: return Tm;
			}
		}(t.type);
	}
}, Km = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = function(e) {
			switch (e) {
				case 5126: return Em;
				case 35664: return Dm;
				case 35665: return Om;
				case 35666: return km;
				case 35674: return Am;
				case 35675: return jm;
				case 35676: return Mm;
				case 5124:
				case 35670: return Nm;
				case 35667:
				case 35671: return Pm;
				case 35668:
				case 35672: return Fm;
				case 35669:
				case 35673: return Im;
				case 5125: return Lm;
				case 36294: return Rm;
				case 36295: return zm;
				case 36296: return Bm;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682: return Vm;
				case 35679:
				case 36299:
				case 36307: return Hm;
				case 35680:
				case 36300:
				case 36308:
				case 36293: return Um;
				case 36289:
				case 36303:
				case 36311:
				case 36292: return Wm;
			}
		}(t.type);
	}
}, qm = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Jm = /(\w+)(\])?(\[|\.)?/g;
function Ym(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function Xm(e, t, n) {
	let r = e.name, i = r.length;
	for (Jm.lastIndex = 0;;) {
		let a = Jm.exec(r), o = Jm.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Ym(n, l === void 0 ? new Gm(s, e, t) : new Km(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new qm(s), Ym(n, e)), n = e;
		}
	}
}
var Zm = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			Xm(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			!1 !== o.needsUpdate && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Qm(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var $m = 0, eh = new U();
function th(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + function(e, t) {
			let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
			for (let e = i; e < a; e++) {
				let i = e + 1;
				r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
			}
			return r.join("\n");
		}(e.getShaderSource(t), r);
	}
	return i;
}
function nh(e, t) {
	let n = function(e) {
		W._getMatrix(eh, W.workingColorSpace, e);
		let t = `mat3( ${eh.elements.map((e) => e.toFixed(4))} )`;
		switch (W.getTransfer(e)) {
			case xn: return [t, "LinearTransferOETF"];
			case Sn: return [t, "sRGBTransferOETF"];
			default: return L("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
		}
	}(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var rh = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function ih(e, t) {
	let n = rh[t];
	return n === void 0 ? (L("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var ah = new H();
function oh(e) {
	return e !== "";
}
function sh(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ch(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var lh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function uh(e) {
	return e.replace(lh, fh);
}
var dh = /* @__PURE__ */ new Map();
function fh(e, t) {
	let n = Y[t];
	if (n === void 0) {
		let e = dh.get(t);
		if (e === void 0) throw Error("Can not resolve #include <" + t + ">");
		n = Y[e], L("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
	}
	return uh(n);
}
var ph = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function mh(e) {
	return e.replace(ph, hh);
}
function hh(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function gh(e) {
	let t = `precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var _h = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
}, vh = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
}, yh = { 302: "ENVMAP_MODE_REFRACTION" }, bh = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function xh(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = function(e) {
		return _h[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
	}(n), l = function(e) {
		return !1 === e.envMap ? "ENVMAP_TYPE_CUBE" : vh[e.envMapMode] || "ENVMAP_TYPE_CUBE";
	}(n), u = function(e) {
		return !1 === e.envMap ? "ENVMAP_MODE_REFLECTION" : yh[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
	}(n), d = function(e) {
		return !1 === e.envMap ? "ENVMAP_BLENDING_NONE" : bh[e.combine] || "ENVMAP_BLENDING_NONE";
	}(n), f = function(e) {
		let t = e.envMapCubeUVHeight;
		if (t === null) return null;
		let n = Math.log2(t) - 2, r = 1 / t;
		return {
			texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
			texelHeight: r,
			maxMip: n
		};
	}(n), p = function(e) {
		return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(oh).join("\n");
	}(n), m = function(e) {
		let t = [];
		for (let n in e) {
			let r = e[n];
			!1 !== r && t.push("#define " + n + " " + r);
		}
		return t.join("\n");
	}(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(oh).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(oh).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		gh(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(oh).join("\n"), _ = [
		gh(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : Y.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : ih("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		Y.colorspace_pars_fragment,
		nh("linearToOutputTexel", n.outputColorSpace),
		(W.getLuminanceCoefficients(ah), [
			"float luminance( const in vec3 rgb ) {",
			`\tconst vec3 weights = vec3( ${ah.x.toFixed(4)}, ${ah.y.toFixed(4)}, ${ah.z.toFixed(4)} );`,
			"	return dot( weights, rgb );",
			"}"
		].join("\n")),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(oh).join("\n")), o = uh(o), o = sh(o, n), o = ch(o, n), s = uh(s), s = sh(s, n), s = ch(s, n), o = mh(o), s = mh(s), !0 !== n.isRawShaderMaterial && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = Qm(i, i.VERTEX_SHADER, y), S = Qm(i, i.FRAGMENT_SHADER, b);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h) || "", r = i.getShaderInfoLog(x) || "", a = i.getShaderInfoLog(S) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (!1 === i.getProgramParameter(h, i.LINK_STATUS)) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
				else {
					let e = th(i, x, "vertex"), n = th(i, S, "fragment");
					R("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? s !== "" && c !== "" || (u = !1) : L("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: g
				},
				fragmentShader: {
					log: c,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new Zm(i, h), T = function(e, t) {
			let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
			for (let i = 0; i < r; i++) {
				let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
				r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
					type: r.type,
					location: e.getAttribLocation(t, a),
					locationSize: o
				};
			}
			return n;
		}(i, h);
	}
	let w, T;
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? !0 === n.morphTargets && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h), this.getUniforms = function() {
		return w === void 0 && C(this), w;
	}, this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = !1 === n.rendererExtensionParallelShaderCompile;
	return this.isReady = function() {
		return !1 === E && (E = i.getProgramParameter(h, 37297)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = $m++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var Sh = 0, Ch = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e) {
		let t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
		return !1 === a.has(r) && (a.add(r), r.usedTimes++), !1 === a.has(i) && (a.add(i), i.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderID(e) {
		return this._getShaderStage(e.vertexShader).id;
	}
	getFragmentShaderID(e) {
		return this._getShaderStage(e.fragmentShader).id;
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new wh(e), t.set(e, n)), n;
	}
}, wh = class {
	constructor(e) {
		this.id = Sh++, this.code = e, this.usedTimes = 0;
	}
};
function Th(e, t, n, r, i, a) {
	let o = new gi(), s = new Ch(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = r.precision, p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function m(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	return {
		getParameters: function(i, o, l, u, h) {
			let g = u.fog, _ = h.geometry, v = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, b = t.get(i.envMap || v, y), x = b && b.mapping === 306 ? b.image.height : null, S = p[i.type];
			i.precision !== null && (f = r.getMaxPrecision(i.precision), f !== i.precision && L("WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."));
			let C = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color, w = C === void 0 ? 0 : C.length, T, E, D, O, ee = 0;
			if (_.morphAttributes.position !== void 0 && (ee = 1), _.morphAttributes.normal !== void 0 && (ee = 2), _.morphAttributes.color !== void 0 && (ee = 3), S) {
				let e = pp[S];
				T = e.vertexShader, E = e.fragmentShader;
			} else T = i.vertexShader, E = i.fragmentShader, s.update(i), D = s.getVertexShaderID(i), O = s.getFragmentShaderID(i);
			let k = e.getRenderTarget(), A = e.state.buffers.depth.getReversed(), te = !0 === h.isInstancedMesh, j = !0 === h.isBatchedMesh, M = !!i.map, ne = !!i.matcap, re = !!b, ie = !!i.aoMap, ae = !!i.lightMap, oe = !!i.bumpMap, se = !!i.normalMap, ce = !!i.displacementMap, le = !!i.emissiveMap, ue = !!i.metalnessMap, de = !!i.roughnessMap, fe = i.anisotropy > 0, pe = i.clearcoat > 0, me = i.dispersion > 0, he = i.iridescence > 0, ge = i.sheen > 0, _e = i.transmission > 0, ve = fe && !!i.anisotropyMap, ye = pe && !!i.clearcoatMap, be = pe && !!i.clearcoatNormalMap, xe = pe && !!i.clearcoatRoughnessMap, N = he && !!i.iridescenceMap, Se = he && !!i.iridescenceThicknessMap, P = ge && !!i.sheenColorMap, F = ge && !!i.sheenRoughnessMap, Ce = !!i.specularMap, we = !!i.specularColorMap, Te = !!i.specularIntensityMap, Ee = _e && !!i.transmissionMap, De = _e && !!i.thicknessMap, Oe = !!i.gradientMap, ke = !!i.alphaMap, Ae = i.alphaTest > 0, je = !!i.alphaHash, Me = !!i.extensions, Ne = 0;
			i.toneMapped && (k !== null && !0 !== k.isXRRenderTarget || (Ne = e.toneMapping));
			let Pe = {
				shaderID: S,
				shaderType: i.type,
				shaderName: i.name,
				vertexShader: T,
				fragmentShader: E,
				defines: i.defines,
				customVertexShaderID: D,
				customFragmentShaderID: O,
				isRawShaderMaterial: !0 === i.isRawShaderMaterial,
				glslVersion: i.glslVersion,
				precision: f,
				batching: j,
				batchingColor: j && h._colorsTexture !== null,
				instancing: te,
				instancingColor: te && h.instanceColor !== null,
				instancingMorph: te && h.morphTexture !== null,
				outputColorSpace: k === null ? e.outputColorSpace : !0 === k.isXRRenderTarget ? k.texture.colorSpace : bn,
				alphaToCoverage: !!i.alphaToCoverage,
				map: M,
				matcap: ne,
				envMap: re,
				envMapMode: re && b.mapping,
				envMapCubeUVHeight: x,
				aoMap: ie,
				lightMap: ae,
				bumpMap: oe,
				normalMap: se,
				displacementMap: ce,
				emissiveMap: le,
				normalMapObjectSpace: se && i.normalMapType === 1,
				normalMapTangentSpace: se && i.normalMapType === 0,
				metalnessMap: ue,
				roughnessMap: de,
				anisotropy: fe,
				anisotropyMap: ve,
				clearcoat: pe,
				clearcoatMap: ye,
				clearcoatNormalMap: be,
				clearcoatRoughnessMap: xe,
				dispersion: me,
				iridescence: he,
				iridescenceMap: N,
				iridescenceThicknessMap: Se,
				sheen: ge,
				sheenColorMap: P,
				sheenRoughnessMap: F,
				specularMap: Ce,
				specularColorMap: we,
				specularIntensityMap: Te,
				transmission: _e,
				transmissionMap: Ee,
				thicknessMap: De,
				gradientMap: Oe,
				opaque: !1 === i.transparent && i.blending === 1 && !1 === i.alphaToCoverage,
				alphaMap: ke,
				alphaTest: Ae,
				alphaHash: je,
				combine: i.combine,
				mapUv: M && m(i.map.channel),
				aoMapUv: ie && m(i.aoMap.channel),
				lightMapUv: ae && m(i.lightMap.channel),
				bumpMapUv: oe && m(i.bumpMap.channel),
				normalMapUv: se && m(i.normalMap.channel),
				displacementMapUv: ce && m(i.displacementMap.channel),
				emissiveMapUv: le && m(i.emissiveMap.channel),
				metalnessMapUv: ue && m(i.metalnessMap.channel),
				roughnessMapUv: de && m(i.roughnessMap.channel),
				anisotropyMapUv: ve && m(i.anisotropyMap.channel),
				clearcoatMapUv: ye && m(i.clearcoatMap.channel),
				clearcoatNormalMapUv: be && m(i.clearcoatNormalMap.channel),
				clearcoatRoughnessMapUv: xe && m(i.clearcoatRoughnessMap.channel),
				iridescenceMapUv: N && m(i.iridescenceMap.channel),
				iridescenceThicknessMapUv: Se && m(i.iridescenceThicknessMap.channel),
				sheenColorMapUv: P && m(i.sheenColorMap.channel),
				sheenRoughnessMapUv: F && m(i.sheenRoughnessMap.channel),
				specularMapUv: Ce && m(i.specularMap.channel),
				specularColorMapUv: we && m(i.specularColorMap.channel),
				specularIntensityMapUv: Te && m(i.specularIntensityMap.channel),
				transmissionMapUv: Ee && m(i.transmissionMap.channel),
				thicknessMapUv: De && m(i.thicknessMap.channel),
				alphaMapUv: ke && m(i.alphaMap.channel),
				vertexTangents: !!_.attributes.tangent && (se || fe),
				vertexColors: i.vertexColors,
				vertexAlphas: !0 === i.vertexColors && !!_.attributes.color && _.attributes.color.itemSize === 4,
				pointsUvs: !0 === h.isPoints && !!_.attributes.uv && (M || ke),
				fog: !!g,
				useFog: !0 === i.fog,
				fogExp2: !!g && g.isFogExp2,
				flatShading: !1 === i.wireframe && (!0 === i.flatShading || _.attributes.normal === void 0 && !1 === se && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
				sizeAttenuation: !0 === i.sizeAttenuation,
				logarithmicDepthBuffer: d,
				reversedDepthBuffer: A,
				skinning: !0 === h.isSkinnedMesh,
				morphTargets: _.morphAttributes.position !== void 0,
				morphNormals: _.morphAttributes.normal !== void 0,
				morphColors: _.morphAttributes.color !== void 0,
				morphTargetsCount: w,
				morphTextureStride: ee,
				numDirLights: o.directional.length,
				numPointLights: o.point.length,
				numSpotLights: o.spot.length,
				numSpotLightMaps: o.spotLightMap.length,
				numRectAreaLights: o.rectArea.length,
				numHemiLights: o.hemi.length,
				numDirLightShadows: o.directionalShadowMap.length,
				numPointLightShadows: o.pointShadowMap.length,
				numSpotLightShadows: o.spotShadowMap.length,
				numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
				numLightProbes: o.numLightProbes,
				numClippingPlanes: a.numPlanes,
				numClipIntersection: a.numIntersection,
				dithering: i.dithering,
				shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
				shadowMapType: e.shadowMap.type,
				toneMapping: Ne,
				decodeVideoTexture: M && !0 === i.map.isVideoTexture && W.getTransfer(i.map.colorSpace) === "srgb",
				decodeVideoTextureEmissive: le && !0 === i.emissiveMap.isVideoTexture && W.getTransfer(i.emissiveMap.colorSpace) === "srgb",
				premultipliedAlpha: i.premultipliedAlpha,
				doubleSided: i.side === 2,
				flipSided: i.side === 1,
				useDepthPacking: i.depthPacking >= 0,
				depthPacking: i.depthPacking || 0,
				index0AttributeName: i.index0AttributeName,
				extensionClipCullDistance: Me && !0 === i.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
				extensionMultiDraw: (Me && !0 === i.extensions.multiDraw || j) && n.has("WEBGL_multi_draw"),
				rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
				customProgramCacheKey: i.customProgramCacheKey()
			};
			return Pe.vertexUv1s = c.has(1), Pe.vertexUv2s = c.has(2), Pe.vertexUv3s = c.has(3), c.clear(), Pe;
		},
		getProgramCacheKey: function(t) {
			let n = [];
			if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
			return !1 === t.isRawShaderMaterial && (function(e, t) {
				e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
			}(n, t), function(e, t) {
				o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), e.push(o.mask);
			}(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
		},
		getUniforms: function(e) {
			let t = p[e.type], n;
			if (t) {
				let e = pp[t];
				n = Yl.clone(e.uniforms);
			} else n = e.uniforms;
			return n;
		},
		acquireProgram: function(t, n) {
			let r = u.get(n);
			return r === void 0 ? (r = new xh(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
		},
		releaseProgram: function(e) {
			if (--e.usedTimes === 0) {
				let t = l.indexOf(e);
				l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
			}
		},
		releaseShaderCache: function(e) {
			s.remove(e);
		},
		programs: l,
		dispose: function() {
			s.dispose();
		}
	};
}
function Eh() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		has: function(t) {
			return e.has(t);
		},
		get: function(t) {
			let n = e.get(t);
			return n === void 0 && (n = {}, e.set(t, n)), n;
		},
		remove: function(t) {
			e.delete(t);
		},
		update: function(t, n, r) {
			e.get(t)[n] = r;
		},
		dispose: function() {
			e = /* @__PURE__ */ new WeakMap();
		}
	};
}
function Dh(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Oh(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function kh() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function o(n, r, i, o, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: a(n),
			groupOrder: o,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = a(n), l.groupOrder = o, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: function() {
			t = 0, n.length = 0, r.length = 0, i.length = 0;
		},
		push: function(e, t, a, s, c, l) {
			let u = o(e, t, a, s, c, l);
			a.transmission > 0 ? r.push(u) : !0 === a.transparent ? i.push(u) : n.push(u);
		},
		unshift: function(e, t, a, s, c, l) {
			let u = o(e, t, a, s, c, l);
			a.transmission > 0 ? r.unshift(u) : !0 === a.transparent ? i.unshift(u) : n.unshift(u);
		},
		finish: function() {
			for (let n = t, r = e.length; n < r; n++) {
				let t = e[n];
				if (t.id === null) break;
				t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
			}
		},
		sort: function(e, t) {
			n.length > 1 && n.sort(e || Dh), r.length > 1 && r.sort(t || Oh), i.length > 1 && i.sort(t || Oh);
		}
	};
}
function Ah() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		get: function(t, n) {
			let r = e.get(t), i;
			return r === void 0 ? (i = new kh(), e.set(t, [i])) : n >= r.length ? (i = new kh(), r.push(i)) : i = r[n], i;
		},
		dispose: function() {
			e = /* @__PURE__ */ new WeakMap();
		}
	};
}
function jh() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new H(),
					color: new K()
				};
				break;
			case "SpotLight":
				n = {
					position: new H(),
					direction: new H(),
					color: new K(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new H(),
					color: new K(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new H(),
					skyColor: new K(),
					groundColor: new K()
				};
				break;
			case "RectAreaLight": n = {
				color: new K(),
				position: new H(),
				halfWidth: new H(),
				halfHeight: new H()
			};
		}
		return e[t.id] = n, n;
	} };
}
var Mh = 0;
function Nh(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Ph(e) {
	let t = new jh(), n = function() {
		let e = {};
		return { get: function(t) {
			if (e[t.id] !== void 0) return e[t.id];
			let n;
			switch (t.type) {
				case "DirectionalLight":
				case "SpotLight":
					n = {
						shadowIntensity: 1,
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new V()
					};
					break;
				case "PointLight": n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new V(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
			}
			return e[t.id] = n, n;
		} };
	}(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new H());
	let i = new H(), a = new G(), o = new G();
	return {
		setup: function(i) {
			let a = 0, o = 0, s = 0;
			for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
			let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
			i.sort(Nh);
			for (let e = 0, y = i.length; e < y; e++) {
				let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = null;
				if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture), y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
				else if (y.isLightProbe) {
					for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
					v++;
				} else if (y.isDirectionalLight) {
					let e = t.get(y);
					if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
						let e = y.shadow, t = n.get(y);
						t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
					}
					r.directional[c] = e, c++;
				} else if (y.isSpotLight) {
					let e = t.get(y);
					e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
					let i = y.shadow;
					if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
						let e = n.get(y);
						e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
					}
					u++;
				} else if (y.isRectAreaLight) {
					let e = t.get(y);
					e.color.copy(b).multiplyScalar(x), e.halfWidth.set(.5 * y.width, 0, 0), e.halfHeight.set(0, .5 * y.height, 0), r.rectArea[d] = e, d++;
				} else if (y.isPointLight) {
					let e = t.get(y);
					if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
						let e = y.shadow, t = n.get(y);
						t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
					}
					r.point[l] = e, l++;
				} else if (y.isHemisphereLight) {
					let e = t.get(y);
					e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
				}
			}
			d > 0 && (!0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = X.LTC_FLOAT_1, r.rectAreaLTC2 = X.LTC_FLOAT_2) : (r.rectAreaLTC1 = X.LTC_HALF_1, r.rectAreaLTC2 = X.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
			let y = r.hash;
			y.directionalLength === c && y.pointLength === l && y.spotLength === u && y.rectAreaLength === d && y.hemiLength === f && y.numDirectionalShadows === p && y.numPointShadows === m && y.numSpotShadows === h && y.numSpotMaps === g && y.numLightProbes === v || (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = Mh++);
		},
		setupView: function(e, t) {
			let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
			for (let t = 0, f = e.length; t < f; t++) {
				let f = e[t];
				if (f.isDirectionalLight) {
					let e = r.directional[n];
					e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
				} else if (f.isSpotLight) {
					let e = r.spot[c];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
				} else if (f.isRectAreaLight) {
					let e = r.rectArea[l];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(.5 * f.width, 0, 0), e.halfHeight.set(0, .5 * f.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
				} else if (f.isPointLight) {
					let e = r.point[s];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
				} else if (f.isHemisphereLight) {
					let e = r.hemi[u];
					e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
				}
			}
		},
		state: r
	};
}
function Fh(e) {
	let t = new Ph(e), n = [], r = [], i = {
		lightsArray: n,
		shadowsArray: r,
		camera: null,
		lights: t,
		transmissionRenderTarget: {}
	};
	return {
		init: function(e) {
			i.camera = e, n.length = 0, r.length = 0;
		},
		state: i,
		setupLights: function() {
			t.setup(n);
		},
		setupLightsView: function(e) {
			t.setupView(n, e);
		},
		pushLight: function(e) {
			n.push(e);
		},
		pushShadow: function(e) {
			r.push(e);
		}
	};
}
function Ih(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return {
		get: function(n, r = 0) {
			let i = t.get(n), a;
			return i === void 0 ? (a = new Fh(e), t.set(n, [a])) : r >= i.length ? (a = new Fh(e), i.push(a)) : a = i[r], a;
		},
		dispose: function() {
			t = /* @__PURE__ */ new WeakMap();
		}
	};
}
var Lh = [
	new H(1, 0, 0),
	new H(-1, 0, 0),
	new H(0, 1, 0),
	new H(0, -1, 0),
	new H(0, 0, 1),
	new H(0, 0, -1)
], Rh = [
	new H(0, -1, 0),
	new H(0, -1, 0),
	new H(0, 0, 1),
	new H(0, 0, -1),
	new H(0, -1, 0),
	new H(0, -1, 0)
], zh = new G(), Bh = new H(), Vh = new H();
function Hh(e, t, n) {
	let r = new _s(), i = new V(), a = new V(), o = new $r(), s = new iu(), c = new au(), l = {}, u = n.maxTextureSize, d = {
		0: 1,
		1: 0,
		2: 2
	}, f = new Xl({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new V() },
			radius: { value: 4 }
		},
		vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
		fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}"
	}), p = f.clone();
	p.defines.HORIZONTAL_PASS = 1;
	let m = new J();
	m.setAttribute("position", new Oa(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let h = new Ro(m, f), g = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let _ = this.type;
	function v(n, r) {
		let a = t.update(h);
		f.defines.VSM_SAMPLES !== n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), n.mapPass === null && (n.mapPass = new ti(i.x, i.y, {
			format: ut,
			type: Ze
		})), f.uniforms.shadow_pass.value = n.map.depthTexture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, h, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, h, null);
	}
	function y(t, n, r, i) {
		let a = null, o = !0 === r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = !0 === r.isPointLight ? c : s, e.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || !0 === n.alphaToCoverage) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", x)), a = i;
		}
		return a.visible = n.visible, a.wireframe = n.wireframe, a.side = i === 3 ? n.shadowSide === null ? n.side : n.shadowSide : n.shadowSide === null ? d[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = !0 === n.alphaToCoverage ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, !0 === r.isPointLight && !0 === a.isMeshDistanceMaterial && (e.properties.get(a).light = r), a;
	}
	function b(n, i, a, o, s) {
		if (!1 === n.visible) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = y(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = y(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) b(c[e], i, a, o, s);
	}
	function x(e) {
		e.target.removeEventListener("dispose", x);
		for (let t in l) {
			let n = l[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
	this.render = function(t, n, s) {
		if (!1 === g.enabled || !1 === g.autoUpdate && !1 === g.needsUpdate || t.length === 0) return;
		this.type === 2 && (L("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.state;
		f.setBlending(0), !0 === f.buffers.depth.getReversed() ? f.buffers.color.setClear(0, 0, 0, 0) : f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
		let p = _ !== this.type;
		p && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], d = l.shadow;
			if (d === void 0) {
				L("WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
			i.copy(d.mapSize);
			let m = d.getFrameExtents();
			i.multiply(m), a.copy(d.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / m.x), i.x = a.x * m.x, d.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / m.y), i.y = a.y * m.y, d.mapSize.y = a.y));
			let h = e.state.buffers.depth.getReversed();
			if (d.camera._reversedDepth = h, d.map === null || !0 === p) {
				if (d.map !== null && (d.map.depthTexture !== null && (d.map.depthTexture.dispose(), d.map.depthTexture = null), d.map.dispose()), this.type === 3) {
					if (l.isPointLight) {
						L("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					d.map = new ti(i.x, i.y, {
						format: ut,
						type: Ze,
						minFilter: Be,
						magFilter: Be,
						generateMipmaps: !1
					}), d.map.texture.name = l.name + ".shadowMap", d.map.depthTexture = new hc(i.x, i.y, Xe), d.map.depthTexture.name = l.name + ".shadowMapDepth", d.map.depthTexture.format = ot, d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = Fe, d.map.depthTexture.magFilter = Fe;
				} else l.isPointLight ? (d.map = new Lp(i.x), d.map.depthTexture = new gc(i.x, Ye)) : (d.map = new ti(i.x, i.y), d.map.depthTexture = new hc(i.x, i.y, Ye)), d.map.depthTexture.name = l.name + ".shadowMap", d.map.depthTexture.format = ot, this.type === 1 ? (d.map.depthTexture.compareFunction = h ? 518 : 515, d.map.depthTexture.minFilter = Be, d.map.depthTexture.magFilter = Be) : (d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = Fe, d.map.depthTexture.magFilter = Fe);
				d.camera.updateProjectionMatrix();
			}
			let g = d.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let t = 0; t < g; t++) {
				if (d.map.isWebGLCubeRenderTarget) e.setRenderTarget(d.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(d.map), e.clear());
					let n = d.getViewport(t);
					o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), f.viewport(o);
				}
				if (l.isPointLight) {
					let e = d.camera, n = d.matrix, r = l.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Bh.setFromMatrixPosition(l.matrixWorld), e.position.copy(Bh), Vh.copy(e.position), Vh.add(Lh[t]), e.up.copy(Rh[t]), e.lookAt(Vh), e.updateMatrixWorld(), n.makeTranslation(-Bh.x, -Bh.y, -Bh.z), zh.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), d._frustum.setFromProjectionMatrix(zh, e.coordinateSystem, e.reversedDepth);
				} else d.updateMatrices(l);
				r = d.getFrustum(), b(n, s, d.camera, l, this.type);
			}
			!0 !== d.isPointLightShadow && this.type === 3 && v(d, s), d.needsUpdate = !1;
		}
		_ = this.type, g.needsUpdate = !1, e.setRenderTarget(c, l, d);
	};
}
function Uh(e, t) {
	let n = new function() {
		let t = !1, n = new $r(), r = null, i = new $r(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r === n || t || (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				!0 === s && (t *= o, r *= o, a *= o), n.set(t, r, a, o), !1 === i.equals(n) && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}(), r = new function() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? se(e.DEPTH_TEST) : ce(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i === t || n || (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = Tr[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
						default:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7: e.depthFunc(e.NOTEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}(), i = new function() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? se(e.STENCIL_TEST) : ce(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n === r || t || (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				r === t && i === n && a === o || (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				o === t && s === n && c === r || (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), s = {}, c = {}, l = /* @__PURE__ */ new WeakMap(), u = [], d = null, f = !1, p = null, m = null, h = null, g = null, _ = null, v = null, y = null, b = new K(0, 0, 0), x = 0, S = !1, C = null, w = null, T = null, E = null, D = null, O = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), ee = !1, k = 0, A = e.getParameter(e.VERSION);
	A.indexOf("WebGL") === -1 ? A.indexOf("OpenGL ES") !== -1 && (k = parseFloat(/^OpenGL ES (\d)/.exec(A)[1]), ee = k >= 2) : (k = parseFloat(/^WebGL (\d)/.exec(A)[1]), ee = k >= 1);
	let te = null, j = {}, M = e.getParameter(e.SCISSOR_BOX), ne = e.getParameter(e.VIEWPORT), re = new $r().fromArray(M), ie = new $r().fromArray(ne);
	function ae(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let oe = {};
	function se(t) {
		!0 !== s[t] && (e.enable(t), s[t] = !0);
	}
	function ce(t) {
		!1 !== s[t] && (e.disable(t), s[t] = !1);
	}
	oe[e.TEXTURE_2D] = ae(e.TEXTURE_2D, e.TEXTURE_2D, 1), oe[e.TEXTURE_CUBE_MAP] = ae(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), oe[e.TEXTURE_2D_ARRAY] = ae(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), oe[e.TEXTURE_3D] = ae(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), r.setClear(1), i.setClear(0), se(e.DEPTH_TEST), r.setFunc(3), fe(!1), pe(1), se(e.CULL_FACE), de(0);
	let le = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	le[103] = e.MIN, le[104] = e.MAX;
	let ue = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function de(t, n, r, i, a, o, s, c, l, u) {
		if (t !== 0) {
			if (!1 === f && (se(e.BLEND), f = !0), t === 5) a ||= n, o ||= r, s ||= i, n === m && a === _ || (e.blendEquationSeparate(le[n], le[a]), m = n, _ = a), r === h && i === g && o === v && s === y || (e.blendFuncSeparate(ue[r], ue[i], ue[o], ue[s]), h = r, g = i, v = o, y = s), !1 !== c.equals(b) && l === x || (e.blendColor(c.r, c.g, c.b, l), b.copy(c), x = l), p = t, S = !1;
			else if (t !== p || u !== S) {
				if (m === 100 && _ === 100 || (e.blendEquation(e.FUNC_ADD), m = 100, _ = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: R("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						R("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						R("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: R("WebGLState: Invalid blending: ", t);
				}
				h = null, g = null, v = null, y = null, b.set(0, 0, 0), x = 0, p = t, S = u;
			}
		} else !0 === f && (ce(e.BLEND), f = !1);
	}
	function fe(t) {
		C !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), C = t);
	}
	function pe(t) {
		t === 0 ? ce(e.CULL_FACE) : (se(e.CULL_FACE), t !== w && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), w = t;
	}
	function me(t, n, i) {
		t ? (se(e.POLYGON_OFFSET_FILL), E === n && D === i || (E = n, D = i, r.getReversed() && (n = -n), e.polygonOffset(n, i))) : ce(e.POLYGON_OFFSET_FILL);
	}
	return {
		buffers: {
			color: n,
			depth: r,
			stencil: i
		},
		enable: se,
		disable: ce,
		bindFramebuffer: function(t, n) {
			return c[t] !== n && (e.bindFramebuffer(t, n), c[t] = n, t === e.DRAW_FRAMEBUFFER && (c[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (c[e.DRAW_FRAMEBUFFER] = n), !0);
		},
		drawBuffers: function(t, n) {
			let r = u, i = !1;
			if (t) {
				r = l.get(n), r === void 0 && (r = [], l.set(n, r));
				let a = t.textures;
				if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
					for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
					r.length = a.length, i = !0;
				}
			} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
			i && e.drawBuffers(r);
		},
		useProgram: function(t) {
			return d !== t && (e.useProgram(t), d = t, !0);
		},
		setBlending: de,
		setMaterial: function(t, a) {
			t.side === 2 ? ce(e.CULL_FACE) : se(e.CULL_FACE);
			let o = t.side === 1;
			a && (o = !o), fe(o), t.blending === 1 && !1 === t.transparent ? de(0) : de(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), r.setFunc(t.depthFunc), r.setTest(t.depthTest), r.setMask(t.depthWrite), n.setMask(t.colorWrite);
			let s = t.stencilWrite;
			i.setTest(s), s && (i.setMask(t.stencilWriteMask), i.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), i.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), me(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? se(e.SAMPLE_ALPHA_TO_COVERAGE) : ce(e.SAMPLE_ALPHA_TO_COVERAGE);
		},
		setFlipSided: fe,
		setCullFace: pe,
		setLineWidth: function(t) {
			t !== T && (ee && e.lineWidth(t), T = t);
		},
		setPolygonOffset: me,
		setScissorTest: function(t) {
			t ? se(e.SCISSOR_TEST) : ce(e.SCISSOR_TEST);
		},
		activeTexture: function(t) {
			t === void 0 && (t = e.TEXTURE0 + O - 1), te !== t && (e.activeTexture(t), te = t);
		},
		bindTexture: function(t, n, r) {
			r === void 0 && (r = te === null ? e.TEXTURE0 + O - 1 : te);
			let i = j[r];
			i === void 0 && (i = {
				type: void 0,
				texture: void 0
			}, j[r] = i), i.type === t && i.texture === n || (te !== r && (e.activeTexture(r), te = r), e.bindTexture(t, n || oe[t]), i.type = t, i.texture = n);
		},
		unbindTexture: function() {
			let t = j[te];
			t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
		},
		compressedTexImage2D: function() {
			try {
				e.compressedTexImage2D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		compressedTexImage3D: function() {
			try {
				e.compressedTexImage3D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		texImage2D: function() {
			try {
				e.texImage2D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		texImage3D: function() {
			try {
				e.texImage3D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		updateUBOMapping: function(t, n) {
			let r = o.get(n);
			r === void 0 && (r = /* @__PURE__ */ new WeakMap(), o.set(n, r));
			let i = r.get(t);
			i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
		},
		uniformBlockBinding: function(t, n) {
			let r = o.get(n).get(t);
			a.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), a.set(n, r));
		},
		texStorage2D: function() {
			try {
				e.texStorage2D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		texStorage3D: function() {
			try {
				e.texStorage3D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		texSubImage2D: function() {
			try {
				e.texSubImage2D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		texSubImage3D: function() {
			try {
				e.texSubImage3D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		compressedTexSubImage2D: function() {
			try {
				e.compressedTexSubImage2D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		compressedTexSubImage3D: function() {
			try {
				e.compressedTexSubImage3D(...arguments);
			} catch (e) {
				R("WebGLState:", e);
			}
		},
		scissor: function(t) {
			!1 === re.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), re.copy(t));
		},
		viewport: function(t) {
			!1 === ie.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), ie.copy(t));
		},
		reset: function() {
			e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), r.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), s = {}, te = null, j = {}, c = {}, l = /* @__PURE__ */ new WeakMap(), u = [], d = null, f = !1, p = null, m = null, h = null, g = null, _ = null, v = null, y = null, b = new K(0, 0, 0), x = 0, S = !1, C = null, w = null, T = null, E = null, D = null, re.set(0, 0, e.canvas.width, e.canvas.height), ie.set(0, 0, e.canvas.width, e.canvas.height), n.reset(), r.reset(), i.reset();
		}
	};
}
function Wh(e, t, n, r, i, a, o) {
	let s = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator < "u" && /OculusBrowser/g.test(navigator.userAgent), l = new V(), u = /* @__PURE__ */ new WeakMap(), d, f = /* @__PURE__ */ new WeakMap(), p = !1;
	try {
		p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function m(e, t) {
		return p ? new OffscreenCanvas(e, t) : gr("canvas");
	}
	function h(e, t, n) {
		let r = 1, i = ue(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				d === void 0 && (d = m(n, a));
				let o = t ? m(n, a) : d;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), L("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && L("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function g(e) {
		return e.generateMipmaps;
	}
	function _(t) {
		e.generateMipmap(t);
	}
	function v(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function y(n, r, i, a, o = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			L("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let s = r;
		if (r === e.RED && (i === e.FLOAT && (s = e.R32F), i === e.HALF_FLOAT && (s = e.R16F), i === e.UNSIGNED_BYTE && (s = e.R8)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.R8UI), i === e.UNSIGNED_SHORT && (s = e.R16UI), i === e.UNSIGNED_INT && (s = e.R32UI), i === e.BYTE && (s = e.R8I), i === e.SHORT && (s = e.R16I), i === e.INT && (s = e.R32I)), r === e.RG && (i === e.FLOAT && (s = e.RG32F), i === e.HALF_FLOAT && (s = e.RG16F), i === e.UNSIGNED_BYTE && (s = e.RG8)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RG8UI), i === e.UNSIGNED_SHORT && (s = e.RG16UI), i === e.UNSIGNED_INT && (s = e.RG32UI), i === e.BYTE && (s = e.RG8I), i === e.SHORT && (s = e.RG16I), i === e.INT && (s = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGB8UI), i === e.UNSIGNED_SHORT && (s = e.RGB16UI), i === e.UNSIGNED_INT && (s = e.RGB32UI), i === e.BYTE && (s = e.RGB8I), i === e.SHORT && (s = e.RGB16I), i === e.INT && (s = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (s = e.RGBA8UI), i === e.UNSIGNED_SHORT && (s = e.RGBA16UI), i === e.UNSIGNED_INT && (s = e.RGBA32UI), i === e.BYTE && (s = e.RGBA8I), i === e.SHORT && (s = e.RGBA16I), i === e.INT && (s = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_INT_5_9_9_9_REV && (s = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (s = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = o ? xn : W.getTransfer(a);
			i === e.FLOAT && (s = e.RGBA32F), i === e.HALF_FLOAT && (s = e.RGBA16F), i === e.UNSIGNED_BYTE && (s = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT_4_4_4_4 && (s = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (s = e.RGB5_A1);
		}
		return s !== e.R16F && s !== e.R32F && s !== e.RG16F && s !== e.RG32F && s !== e.RGBA16F && s !== e.RGBA32F || t.get("EXT_color_buffer_float"), s;
	}
	function b(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, L("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function x(e, t) {
		return !0 === g(e) || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function S(e) {
		let t = e.target;
		t.removeEventListener("dispose", S), function(e) {
			let t = r.get(e);
			if (t.__webglInit === void 0) return;
			let n = e.source, i = f.get(n);
			if (i) {
				let r = i[t.__cacheKey];
				r.usedTimes--, r.usedTimes === 0 && w(e), Object.keys(i).length === 0 && f.delete(n);
			}
			r.remove(e);
		}(t), t.isVideoTexture && u.delete(t);
	}
	function C(t) {
		let n = t.target;
		n.removeEventListener("dispose", C), function(t) {
			let n = r.get(t);
			if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
				if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
				else e.deleteFramebuffer(n.__webglFramebuffer[t]);
				n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
			}
			else {
				if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
				else e.deleteFramebuffer(n.__webglFramebuffer);
				if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
				n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
			}
			let i = t.textures;
			for (let t = 0, n = i.length; t < n; t++) {
				let n = r.get(i[t]);
				n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--), r.remove(i[t]);
			}
			r.remove(t);
		}(n);
	}
	function w(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source;
		delete f.get(i)[n.__cacheKey], o.memory.textures--;
	}
	let T = 0;
	function E(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && function(e) {
			let t = o.render.frame;
			u.get(e) !== t && (u.set(e, t), e.update());
		}(t), !1 === t.isRenderTargetTexture && !0 !== t.isExternalTexture && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) L("WebGLRenderer: Texture marked for update but no image data found.");
			else {
				if (!1 !== e.complete) return void j(a, t, i);
				L("WebGLRenderer: Texture marked for update but image is incomplete");
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	let D = {
		[Me]: e.REPEAT,
		[Ne]: e.CLAMP_TO_EDGE,
		[Pe]: e.MIRRORED_REPEAT
	}, O = {
		[Fe]: e.NEAREST,
		[Ie]: e.NEAREST_MIPMAP_NEAREST,
		[Re]: e.NEAREST_MIPMAP_LINEAR,
		[Be]: e.LINEAR,
		[Ve]: e.LINEAR_MIPMAP_NEAREST,
		[He]: e.LINEAR_MIPMAP_LINEAR
	}, ee = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function k(n, a) {
		if (a.type !== 1015 || !1 !== t.has("OES_texture_float_linear") || a.magFilter !== 1006 && a.magFilter !== 1007 && a.magFilter !== 1005 && a.magFilter !== 1008 && a.minFilter !== 1006 && a.minFilter !== 1007 && a.minFilter !== 1005 && a.minFilter !== 1008 || L("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, D[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, D[a.wrapT]), n !== e.TEXTURE_3D && n !== e.TEXTURE_2D_ARRAY || e.texParameteri(n, e.TEXTURE_WRAP_R, D[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, O[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, O[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ee[a.compareFunction])), !0 === t.has("EXT_texture_filter_anisotropic")) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && !1 === t.has("OES_texture_float_linear")) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function A(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", S));
		let i = n.source, a = f.get(i);
		a === void 0 && (a = {}, f.set(i, a));
		let s = function(e) {
			let t = [];
			return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
		}(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && w(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function te(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function j(t, o, s) {
		let c = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (c = e.TEXTURE_3D);
		let l = A(t, o), u = o.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let d = r.get(u);
		if (u.version !== d.__version || !0 === l) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = W.getPrimaries(W.workingColorSpace), r = o.colorSpace === "" ? null : W.getPrimaries(o.colorSpace), f = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
			let p = h(o.image, !1, i.maxTextureSize);
			p = le(o, p);
			let m = a.convert(o.format, o.colorSpace), v = a.convert(o.type), S, C = y(o.internalFormat, m, v, o.colorSpace, o.isVideoTexture);
			k(c, o);
			let w = o.mipmaps, T = !0 !== o.isVideoTexture, E = d.__version === void 0 || !0 === l, D = u.dataReady, O = x(o, p);
			if (o.isDepthTexture) C = b(o.format === st, o.type), E && (T ? n.texStorage2D(e.TEXTURE_2D, 1, C, p.width, p.height) : n.texImage2D(e.TEXTURE_2D, 0, C, p.width, p.height, 0, m, v, null));
			else if (o.isDataTexture) {
				if (w.length > 0) {
					T && E && n.texStorage2D(e.TEXTURE_2D, O, C, w[0].width, w[0].height);
					for (let t = 0, r = w.length; t < r; t++) S = w[t], T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, m, v, S.data) : n.texImage2D(e.TEXTURE_2D, t, C, S.width, S.height, 0, m, v, S.data);
					o.generateMipmaps = !1;
				} else T ? (E && n.texStorage2D(e.TEXTURE_2D, O, C, p.width, p.height), D && function(t, r, i, a) {
					let o = t.updateRanges;
					if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
					else {
						o.sort((e, t) => e.start - t.start);
						let s = 0;
						for (let e = 1; e < o.length; e++) {
							let t = o[s], n = o[e], i = t.start + t.count, a = te(n.start, r.width, 4), c = te(t.start, r.width, 4);
							n.start <= i + 1 && a === c && te(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
						}
						o.length = s + 1;
						let c = e.getParameter(e.UNPACK_ROW_LENGTH), l = e.getParameter(e.UNPACK_SKIP_PIXELS), u = e.getParameter(e.UNPACK_SKIP_ROWS);
						e.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
						for (let t = 0, s = o.length; t < s; t++) {
							let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
							e.pixelStorei(e.UNPACK_SKIP_PIXELS, u), e.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
						}
						t.clearUpdateRanges(), e.pixelStorei(e.UNPACK_ROW_LENGTH, c), e.pixelStorei(e.UNPACK_SKIP_PIXELS, l), e.pixelStorei(e.UNPACK_SKIP_ROWS, u);
					}
				}(o, p, m, v)) : n.texImage2D(e.TEXTURE_2D, 0, C, p.width, p.height, 0, m, v, p.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					T && E && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, C, w[0].width, w[0].height, p.depth);
					for (let t = 0, r = w.length; t < r; t++) if (S = w[t], o.format !== 1023) {
						if (m !== null) {
							if (T) {
								if (D) {
									if (o.layerUpdates.size > 0) {
										let r = lp(S.width, S.height, o.format, o.type);
										for (let i of o.layerUpdates) {
											let a = S.data.subarray(i * r / S.data.BYTES_PER_ELEMENT, (i + 1) * r / S.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, i, S.width, S.height, 1, m, a);
										}
										o.clearLayerUpdates();
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, m, S.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, C, S.width, S.height, p.depth, 0, S.data, 0, 0);
						} else L("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else T ? D && n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, m, v, S.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, t, C, S.width, S.height, p.depth, 0, m, v, S.data);
				} else {
					T && E && n.texStorage2D(e.TEXTURE_2D, O, C, w[0].width, w[0].height);
					for (let t = 0, r = w.length; t < r; t++) S = w[t], o.format === 1023 ? T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, m, v, S.data) : n.texImage2D(e.TEXTURE_2D, t, C, S.width, S.height, 0, m, v, S.data) : m === null ? L("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? D && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, m, S.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, C, S.width, S.height, 0, S.data);
				}
			} else if (o.isDataArrayTexture) {
				if (T) {
					if (E && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, C, p.width, p.height, p.depth), D) {
						if (o.layerUpdates.size > 0) {
							let t = lp(p.width, p.height, o.format, o.type);
							for (let r of o.layerUpdates) {
								let i = p.data.subarray(r * t / p.data.BYTES_PER_ELEMENT, (r + 1) * t / p.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, r, p.width, p.height, 1, m, v, i);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p.width, p.height, p.depth, m, v, p.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, C, p.width, p.height, p.depth, 0, m, v, p.data);
			} else if (o.isData3DTexture) T ? (E && n.texStorage3D(e.TEXTURE_3D, O, C, p.width, p.height, p.depth), D && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, p.width, p.height, p.depth, m, v, p.data)) : n.texImage3D(e.TEXTURE_3D, 0, C, p.width, p.height, p.depth, 0, m, v, p.data);
			else if (o.isFramebufferTexture) {
				if (E) {
					if (T) n.texStorage2D(e.TEXTURE_2D, O, C, p.width, p.height);
					else {
						let t = p.width, r = p.height;
						for (let i = 0; i < O; i++) n.texImage2D(e.TEXTURE_2D, i, C, t, r, 0, m, v, null), t >>= 1, r >>= 1;
					}
				}
			} else if (w.length > 0) {
				if (T && E) {
					let t = ue(w[0]);
					n.texStorage2D(e.TEXTURE_2D, O, C, t.width, t.height);
				}
				for (let t = 0, r = w.length; t < r; t++) S = w[t], T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, m, v, S) : n.texImage2D(e.TEXTURE_2D, t, C, m, v, S);
				o.generateMipmaps = !1;
			} else if (T) {
				if (E) {
					let t = ue(p);
					n.texStorage2D(e.TEXTURE_2D, O, C, t.width, t.height);
				}
				D && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, m, v, p);
			} else n.texImage2D(e.TEXTURE_2D, 0, C, m, v, p);
			g(o) && _(c), d.__version = u.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function M(t, i, o, c, l, u) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = y(o.internalFormat, d, f, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), ce(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, se(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ne(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = b(n.stencilBuffer, a), c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			ce(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, se(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, se(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], c = a.convert(o.format, o.colorSpace), l = a.convert(o.type), u = y(o.internalFormat, c, l, o.colorSpace);
				ce(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, se(n), u, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, se(n), u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function re(t, i, o) {
		let c = !0 === i.isWebGLCubeRenderTarget;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !i.depthTexture || !i.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
		let l = r.get(i.depthTexture);
		if (l.__renderTarget = i, l.__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), c) {
			if (l.__webglInit === void 0 && (l.__webglInit = !0, i.depthTexture.addEventListener("dispose", S)), l.__webglTexture === void 0) {
				l.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture), k(e.TEXTURE_CUBE_MAP, i.depthTexture);
				let t = a.convert(i.depthTexture.format), r = a.convert(i.depthTexture.type), o;
				i.depthTexture.format === 1026 ? o = e.DEPTH_COMPONENT24 : i.depthTexture.format === 1027 && (o = e.DEPTH24_STENCIL8);
				for (let n = 0; n < 6; n++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, o, i.width, i.height, 0, t, r, null);
			}
		} else E(i.depthTexture, 0);
		let u = l.__webglTexture, d = se(i), f = c ? e.TEXTURE_CUBE_MAP_POSITIVE_X + o : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) ce(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else {
			if (i.depthTexture.format !== 1027) throw Error("Unknown depthTexture format");
			ce(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		}
	}
	function ie(t) {
		let i = r.get(t), a = !0 === t.isWebGLCubeRenderTarget;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) re(i.__webglFramebuffer[e], t, e);
			else {
				let e = t.texture.mipmaps;
				e && e.length > 0 ? re(i.__webglFramebuffer[0], t, 0) : re(i.__webglFramebuffer, t, 0);
			}
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), ne(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), ne(i.__webglDepthbuffer, t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
			}
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	let ae = [], oe = [];
	function se(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function ce(e) {
		let n = r.get(e);
		return e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
	}
	function le(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || n !== "srgb-linear" && n !== "" && (W.getTransfer(n) === "srgb" ? r === 1023 && i === 1009 || L("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : R("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function ue(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (l.width = e.naturalWidth || e.width, l.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (l.width = e.displayWidth, l.height = e.displayHeight) : (l.width = e.width, l.height = e.height), l;
	}
	this.allocateTextureUnit = function() {
		let e = T;
		return e >= i.maxTextures && L("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + i.maxTextures), T += 1, e;
	}, this.resetTextureUnits = function() {
		T = 0;
	}, this.setTexture2D = E, this.setTexture2DArray = function(t, i) {
		let a = r.get(t);
		!1 === t.isRenderTargetTexture && t.version > 0 && a.__version !== t.version ? j(a, t, i) : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
	}, this.setTexture3D = function(t, i) {
		let a = r.get(t);
		!1 === t.isRenderTargetTexture && t.version > 0 && a.__version !== t.version ? j(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}, this.setTextureCube = function(t, o) {
		let s = r.get(t);
		!0 !== t.isCubeDepthTexture && t.version > 0 && s.__version !== t.version ? function(t, o, s) {
			if (o.image.length !== 6) return;
			let c = A(t, o), l = o.source;
			n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
			let u = r.get(l);
			if (l.version !== u.__version || !0 === c) {
				n.activeTexture(e.TEXTURE0 + s);
				let t = W.getPrimaries(W.workingColorSpace), r = o.colorSpace === "" ? null : W.getPrimaries(o.colorSpace), d = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
				let f = o.isCompressedTexture || o.image[0].isCompressedTexture, p = o.image[0] && o.image[0].isDataTexture, m = [];
				for (let e = 0; e < 6; e++) m[e] = f || p ? p ? o.image[e].image : o.image[e] : h(o.image[e], !0, i.maxCubemapSize), m[e] = le(o, m[e]);
				let v = m[0], b = a.convert(o.format, o.colorSpace), S = a.convert(o.type), C = y(o.internalFormat, b, S, o.colorSpace), w = !0 !== o.isVideoTexture, T = u.__version === void 0 || !0 === c, E = l.dataReady, D, O = x(o, v);
				if (k(e.TEXTURE_CUBE_MAP, o), f) {
					w && T && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, C, v.width, v.height);
					for (let t = 0; t < 6; t++) {
						D = m[t].mipmaps;
						for (let r = 0; r < D.length; r++) {
							let i = D[r];
							o.format === 1023 ? w ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, b, S, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, C, i.width, i.height, 0, b, S, i.data) : b === null ? L("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? E && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, b, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, C, i.width, i.height, 0, i.data);
						}
					}
				} else {
					if (D = o.mipmaps, w && T) {
						D.length > 0 && O++;
						let t = ue(m[0]);
						n.texStorage2D(e.TEXTURE_CUBE_MAP, O, C, t.width, t.height);
					}
					for (let t = 0; t < 6; t++) if (p) {
						w ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, b, S, m[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, C, m[t].width, m[t].height, 0, b, S, m[t].data);
						for (let r = 0; r < D.length; r++) {
							let i = D[r].image[t].image;
							w ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, b, S, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, C, i.width, i.height, 0, b, S, i.data);
						}
					} else {
						w ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, b, S, m[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, C, b, S, m[t]);
						for (let r = 0; r < D.length; r++) {
							let i = D[r];
							w ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, b, S, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, C, b, S, i.image[t]);
						}
					}
				}
				g(o) && _(e.TEXTURE_CUBE_MAP), u.__version = l.version, o.onUpdate && o.onUpdate(o);
			}
			t.__version = o.version;
		}(s, t, o) : n.bindTexture(e.TEXTURE_CUBE_MAP, s.__webglTexture, e.TEXTURE0 + o);
	}, this.rebindTextures = function(t, n, i) {
		let a = r.get(t);
		n !== void 0 && M(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && ie(t);
	}, this.setupRenderTarget = function(t) {
		let i = t.texture, s = r.get(t), c = r.get(i);
		t.addEventListener("dispose", C);
		let l = t.textures, u = !0 === t.isWebGLCubeRenderTarget, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, o.memory.textures++), u) {
			s.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) s.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else s.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer();
			} else s.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), o.memory.textures++);
			}
			if (t.samples > 0 && !1 === ce(t)) {
				s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					s.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), o = a.convert(r.type), c = y(r.internalFormat, i, o, r.colorSpace, !0 === t.isXRRenderTarget), u = se(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), ne(s.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), k(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) M(s.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else M(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			g(i) && _(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], o = r.get(a), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, o.__webglTexture), k(c, a), M(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0), g(a) && _(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), k(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) M(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else M(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			g(i) && _(r), n.unbindTexture();
		}
		t.depthBuffer && ie(t);
	}, this.updateRenderTargetMipmap = function(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (g(a)) {
				let t = v(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), _(t), n.unbindTexture();
			}
		}
	}, this.updateMultisampleRenderTarget = function(t) {
		if (t.samples > 0) {
			if (!1 === ce(t)) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, u = r.get(t), d = i.length > 1;
				if (d) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
				let f = t.texture.mipmaps;
				f && f.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), d) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), !0 === c && (ae.length = 0, oe.length = 0, ae.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && !1 === t.resolveDepthBuffer && (ae.push(l), oe.push(l), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, oe)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, ae));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), d) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && !1 === t.resolveDepthBuffer && c) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}, this.setupDepthRenderbuffer = ie, this.setupFrameBufferTexture = M, this.useMultisampledRTT = ce, this.isReversedDepthBuffer = function() {
		return n.buffers.depth.getReversed();
	};
}
function Gh(e, t) {
	return { convert: function(n, r = "") {
		let i, a = W.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i === null) return null;
				if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
			} else {
				if (i = t.get("WEBGL_compressed_texture_s3tc"), i === null) return null;
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			}
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i === null) return null;
			if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i === null) return null;
			if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			if (n === 37488) return i.COMPRESSED_R11_EAC;
			if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
			if (n === 37490) return i.COMPRESSED_RG11_EAC;
			if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i === null) return null;
			if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i === null) return null;
			if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i === null) return null;
			if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	} };
}
var Kh = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new _c(e.texture);
			e.depthNear === t.depthNear && e.depthFar === t.depthFar || (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Xl({
				vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}",
				fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}",
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Ro(new Pl(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, qh = class extends Er {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = typeof XRWebGLBinding < "u", h = new Kh(), g = {}, _ = t.getContextAttributes(), v = null, y = null, b = [], x = [], S = new V(), C = null, w = new rd();
		w.viewport = new $r();
		let T = new rd();
		T.viewport = new $r();
		let E = [w, T], D = new Nd(), O = null, ee = null;
		function k(e) {
			let t = x.indexOf(e.inputSource);
			if (t === -1) return;
			let n = b[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function A() {
			r.removeEventListener("select", k), r.removeEventListener("selectstart", k), r.removeEventListener("selectend", k), r.removeEventListener("squeeze", k), r.removeEventListener("squeezestart", k), r.removeEventListener("squeezeend", k), r.removeEventListener("end", A), r.removeEventListener("inputsourceschange", te);
			for (let e = 0; e < b.length; e++) {
				let t = x[e];
				t !== null && (x[e] = null, b[e].disconnect(t));
			}
			O = null, ee = null, h.reset();
			for (let e in g) delete g[e];
			e.setRenderTarget(v), f = null, d = null, u = null, r = null, y = null, ie.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(S.width, S.height, !1), n.dispatchEvent({ type: "sessionend" });
		}
		function te(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = x.indexOf(n);
				r >= 0 && (x[r] = null, b[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = x.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < b.length; e++) {
						if (e >= x.length) {
							x.push(n), r = e;
							break;
						}
						if (x[e] === null) {
							x[e] = n, r = e;
							break;
						}
					}
					if (r === -1) break;
				}
				let i = b[r];
				i && i.connect(n);
			}
		}
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fi(), b[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fi(), b[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Fi(), b[e] = t), t.getHandSpace();
		}, this.setFramebufferScaleFactor = function(e) {
			i = e, !0 === n.isPresenting && L("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, !0 === n.isPresenting && L("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u === null && m && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (v = e.getRenderTarget(), r.addEventListener("select", k), r.addEventListener("selectstart", k), r.addEventListener("selectend", k), r.addEventListener("squeeze", k), r.addEventListener("squeezestart", k), r.addEventListener("squeezeend", k), r.addEventListener("end", A), r.addEventListener("inputsourceschange", te), !0 !== _.xrCompatible && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(S), m && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					_.depth && (o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = _.stencil ? st : ot, a = _.stencil ? et : Ye);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new ti(d.textureWidth, d.textureHeight, {
						format: at,
						type: We,
						depthTexture: new hc(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: _.stencil,
						colorSpace: e.outputColorSpace,
						samples: _.antialias ? 4 : 0,
						resolveDepthBuffer: !1 === d.ignoreDepthValues,
						resolveStencilBuffer: !1 === d.ignoreDepthValues
					});
				} else {
					let n = {
						antialias: _.antialias,
						alpha: !0,
						depth: _.depth,
						stencil: _.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new ti(f.framebufferWidth, f.framebufferHeight, {
						format: at,
						type: We,
						colorSpace: e.outputColorSpace,
						stencilBuffer: _.stencil,
						resolveDepthBuffer: !1 === f.ignoreDepthValues,
						resolveStencilBuffer: !1 === f.ignoreDepthValues
					});
				}
				y.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), ie.setContext(r), ie.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return h.getDepthTexture();
		};
		let j = new H(), M = new H();
		function ne(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			h.texture !== null && (h.depthNear > 0 && (t = h.depthNear), h.depthFar > 0 && (n = h.depthFar)), D.near = T.near = w.near = t, D.far = T.far = w.far = n, O === D.near && ee === D.far || (r.updateRenderState({
				depthNear: D.near,
				depthFar: D.far
			}), O = D.near, ee = D.far), D.layers.mask = 6 | e.layers.mask, w.layers.mask = -5 & D.layers.mask, T.layers.mask = -3 & D.layers.mask;
			let i = e.parent, a = D.cameras;
			ne(D, i);
			for (let e = 0; e < a.length; e++) ne(a[e], i);
			a.length === 2 ? function(e, t, n) {
				j.setFromMatrixPosition(t.matrixWorld), M.setFromMatrixPosition(n.matrixWorld);
				let r = j.distanceTo(M), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
				if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
				else {
					let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
					e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
				}
			}(D, w, T) : D.projectionMatrix.copy(w.projectionMatrix), function(e, t, n) {
				n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = 2 * Ar * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
			}(e, D, i);
		}, this.getCamera = function() {
			return D;
		}, this.getFoveation = function() {
			if (d !== null || f !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return h.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return h.getMesh(D);
		}, this.getCameraTexture = function(e) {
			return g[e];
		};
		let re = null, ie = new dp();
		ie.setAnimationLoop(function(t, i) {
			if (l = i.getViewerPose(c || a), p = i, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(y, f.framebuffer), e.setRenderTarget(y));
				let i = !1;
				t.length !== D.cameras.length && (D.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (f !== null) a = f.getViewport(r);
					else {
						let t = u.getViewSubImage(d, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(y, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(y));
					}
					let o = E[n];
					o === void 0 && (o = new rd(), o.layers.enable(n), o.viewport = new $r(), E[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (D.matrix.copy(o.matrix), D.matrix.decompose(D.position, D.quaternion, D.scale)), !0 === i && D.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && m) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && h.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && m) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = g[n];
							e || (e = new _c(), g[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < b.length; e++) {
				let t = x[e], n = b[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			re && re(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), p = null;
		}), this.setAnimationLoop = function(e) {
			re = e;
		}, this.dispose = function() {};
	}
}, Jh = new hi(), Yh = new G();
function Xh(e, t) {
	function n(e, t) {
		!0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, Jh.copy(o), Jh.x *= -1, Jh.y *= -1, Jh.z *= -1, a.isCubeTexture && !1 === a.isRenderTargetTexture && (Jh.y *= -1, Jh.z *= -1), e.envMapRotation.value.setFromMatrix4(Yh.makeRotationFromEuler(Jh)), e.flipEnvMap.value = a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1, e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	return {
		refreshFogUniforms: function(t, n) {
			n.color.getRGB(t.fogColor.value, Jl(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
		},
		refreshMaterialUniforms: function(e, i, a, o, s) {
			i.isMeshBasicMaterial ? r(e, i) : i.isMeshLambertMaterial ? (r(e, i), i.envMap && (e.envMapIntensity.value = i.envMapIntensity)) : i.isMeshToonMaterial ? (r(e, i), function(e, t) {
				t.gradientMap && (e.gradientMap.value = t.gradientMap);
			}(e, i)) : i.isMeshPhongMaterial ? (r(e, i), function(e, t) {
				e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
			}(e, i), i.envMap && (e.envMapIntensity.value = i.envMapIntensity)) : i.isMeshStandardMaterial ? (r(e, i), function(e, t) {
				e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
			}(e, i), i.isMeshPhysicalMaterial && function(e, t, r) {
				e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
			}(e, i, s)) : i.isMeshMatcapMaterial ? (r(e, i), function(e, t) {
				t.matcap && (e.matcap.value = t.matcap);
			}(e, i)) : i.isMeshDepthMaterial ? r(e, i) : i.isMeshDistanceMaterial ? (r(e, i), function(e, n) {
				let r = t.get(n).light;
				e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
			}(e, i)) : i.isMeshNormalMaterial ? r(e, i) : i.isLineBasicMaterial ? (function(e, t) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
			}(e, i), i.isLineDashedMaterial && function(e, t) {
				e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
			}(e, i)) : i.isPointsMaterial ? function(e, t, r, i) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = .5 * i, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
			}(e, i, a, o) : i.isSpriteMaterial ? function(e, t) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
			}(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color), e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
		}
	};
}
function Zh(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return r[a] = typeof i == "number" || typeof i == "boolean" ? i : i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (!1 === e.equals(i)) return e.copy(i), !0;
		}
		return !1;
	}
	function l(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? L("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : L("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function u(t) {
		let n = t.target;
		n.removeEventListener("dispose", u);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	return {
		bind: function(e, t) {
			let n = t.program;
			r.uniformBlockBinding(e, n);
		},
		update: function(n, d) {
			let f = i[n.id];
			f === void 0 && (function(e) {
				let t = e.uniforms, n = 0;
				for (let e = 0, r = t.length; e < r; e++) {
					let r = Array.isArray(t[e]) ? t[e] : [t[e]];
					for (let e = 0, t = r.length; e < t; e++) {
						let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
						for (let e = 0, r = i.length; e < r; e++) {
							let r = l(i[e]), a = n % 16, o = a % r.boundary, s = a + o;
							n += o, s !== 0 && 16 - s < r.storage && (n += 16 - s), t.__data = new Float32Array(r.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += r.storage;
						}
					}
				}
				let r = n % 16;
				r > 0 && (n += 16 - r), e.__size = n, e.__cache = {};
			}(n), f = function(t) {
				let n = function() {
					for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
					return R("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
				}();
				t.__bindingPointIndex = n;
				let r = e.createBuffer(), i = t.__size, a = t.usage;
				return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
			}(n), i[n.id] = f, n.addEventListener("dispose", u));
			let p = d.program;
			r.updateUBOMapping(n, p);
			let m = t.render.frame;
			a[n.id] !== m && (function(t) {
				let n = i[t.id], r = t.uniforms, a = t.__cache;
				e.bindBuffer(e.UNIFORM_BUFFER, n);
				for (let t = 0, n = r.length; t < n; t++) {
					let n = Array.isArray(r[t]) ? r[t] : [r[t]];
					for (let r = 0, i = n.length; r < i; r++) {
						let i = n[r];
						if (!0 === c(i, t, r, a)) {
							let t = i.__offset, n = Array.isArray(i.value) ? i.value : [i.value], r = 0;
							for (let a = 0; a < n.length; a++) {
								let o = n[a], s = l(o);
								typeof o == "number" || typeof o == "boolean" ? (i.__data[0] = o, e.bufferSubData(e.UNIFORM_BUFFER, t + r, i.__data)) : o.isMatrix3 ? (i.__data[0] = o.elements[0], i.__data[1] = o.elements[1], i.__data[2] = o.elements[2], i.__data[3] = 0, i.__data[4] = o.elements[3], i.__data[5] = o.elements[4], i.__data[6] = o.elements[5], i.__data[7] = 0, i.__data[8] = o.elements[6], i.__data[9] = o.elements[7], i.__data[10] = o.elements[8], i.__data[11] = 0) : (o.toArray(i.__data, r), r += s.storage / Float32Array.BYTES_PER_ELEMENT);
							}
							e.bufferSubData(e.UNIFORM_BUFFER, t, i.__data);
						}
					}
				}
				e.bindBuffer(e.UNIFORM_BUFFER, null);
			}(n), a[n.id] = m);
		},
		dispose: function() {
			for (let t in i) e.deleteBuffer(i[t]);
			o = [], i = {}, a = {};
		}
	};
}
var Qh = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), $h = null, eg = class {
	constructor(e = {}) {
		let { canvas: t = _r(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: f = We } = e, p;
		if (this.isWebGLRenderer = !0, n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			p = n.getContextAttributes().alpha;
		} else p = a;
		let m = f, h = /* @__PURE__ */ new Set([
			pt,
			dt,
			lt
		]), g = /* @__PURE__ */ new Set([
			We,
			Ye,
			qe,
			et,
			Qe,
			$e
		]), _ = /* @__PURE__ */ new Uint32Array(4), v = /* @__PURE__ */ new Int32Array(4), y = null, b = null, x = [], S = [], C = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let w = this, T = !1;
		this._outputColorSpace = yn;
		let E = 0, D = 0, O = null, ee = -1, k = null, A = new $r(), te = new $r(), j = null, M = new K(0), ne = 0, re = t.width, ie = t.height, ae = 1, oe = null, se = null, ce = new $r(0, 0, re, ie), le = new $r(0, 0, re, ie), ue = !1, de = new _s(), fe = !1, pe = !1, me = new G(), he = new H(), ge = new $r(), _e = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, ve = !1;
		function ye() {
			return O === null ? ae : 1;
		}
		let be, xe, N, Se, P, F, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Pe, Fe, Ie, Le, Re, ze, Ve, I = n;
		function Ue(e, n) {
			return t.getContext(e, n);
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r183"), t.addEventListener("webglcontextlost", Je, !1), t.addEventListener("webglcontextrestored", Xe, !1), t.addEventListener("webglcontextcreationerror", tt, !1), I === null) {
				let t = "webgl2";
				if (I = Ue(t, e), I === null) throw Ue(t) ? /* @__PURE__ */ Error("Error creating WebGL context with your selected attributes.") : /* @__PURE__ */ Error("Error creating WebGL context.");
			}
		} catch (e) {
			throw R("WebGLRenderer: " + e.message), e;
		}
		function Ge() {
			be = new zp(I), be.init(), Re = new Gh(I, be), xe = new bp(I, be, e, Re), N = new Uh(I, be), xe.reversedDepthBuffer && d && N.buffers.depth.setReversed(!0), Se = new Hp(I), P = new Eh(), F = new Wh(I, be, N, P, xe, Re, Se), Ce = new Rp(w), we = new fp(I), ze = new vp(I, we), Te = new Bp(I, we, Se, ze), Ee = new Wp(I, Te, we, ze, Se), Fe = new Up(I, xe, F), je = new xp(P), De = new Th(w, Ce, be, xe, ze, je), Oe = new Xh(w, P), ke = new Ah(), Ae = new Ih(be), Pe = new _p(w, Ce, N, Ee, p, s), Me = new Hh(w, Ee, xe), Ve = new Zh(I, Se, xe, N), Ie = new yp(I, be, Se), Le = new Vp(I, be, Se), Se.programs = De.programs, w.capabilities = xe, w.extensions = be, w.properties = P, w.renderLists = ke, w.shadowMap = Me, w.state = N, w.info = Se;
		}
		Ge(), m !== 1009 && (C = new Kp(m, t.width, t.height, r, i));
		let Ke = new qh(w, I);
		function Je(e) {
			e.preventDefault(), Sr("WebGLRenderer: Context Lost."), T = !0;
		}
		function Xe() {
			Sr("WebGLRenderer: Context Restored."), T = !1;
			let e = Se.autoReset, t = Me.enabled, n = Me.autoUpdate, r = Me.needsUpdate, i = Me.type;
			Ge(), Se.autoReset = e, Me.enabled = t, Me.autoUpdate = n, Me.needsUpdate = r, Me.type = i;
		}
		function tt(e) {
			R("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function nt(e) {
			let t = e.target;
			t.removeEventListener("dispose", nt), function(e) {
				(function(e) {
					let t = P.get(e).programs;
					t !== void 0 && (t.forEach(function(e) {
						De.releaseProgram(e);
					}), e.isShaderMaterial && De.releaseShaderCache(e));
				})(e), P.remove(e);
			}(t);
		}
		function rt(e, t, n) {
			!0 === e.transparent && e.side === 2 && !1 === e.forceSinglePass ? (e.side = 1, e.needsUpdate = !0, _t(e, t, n), e.side = 0, e.needsUpdate = !0, _t(e, t, n), e.side = 2) : _t(e, t, n);
		}
		this.xr = Ke, this.getContext = function() {
			return I;
		}, this.getContextAttributes = function() {
			return I.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = be.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = be.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return ae;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (ae = e, this.setSize(re, ie, !1));
		}, this.getSize = function(e) {
			return e.set(re, ie);
		}, this.setSize = function(e, n, r = !0) {
			Ke.isPresenting ? L("WebGLRenderer: Can't change size while VR device is presenting.") : (re = e, ie = n, t.width = Math.floor(e * ae), t.height = Math.floor(n * ae), !0 === r && (t.style.width = e + "px", t.style.height = n + "px"), C !== null && C.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(re * ae, ie * ae).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			re = e, ie = n, ae = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (m !== 1009) {
				if (e) {
					for (let t = 0; t < e.length; t++) if (!0 === e[t].isOutputPass) {
						console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				C.setEffects(e || []);
			} else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
		}, this.getCurrentViewport = function(e) {
			return e.copy(A);
		}, this.getViewport = function(e) {
			return e.copy(ce);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ce.set(e.x, e.y, e.z, e.w) : ce.set(e, t, n, r), N.viewport(A.copy(ce).multiplyScalar(ae).round());
		}, this.getScissor = function(e) {
			return e.copy(le);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? le.set(e.x, e.y, e.z, e.w) : le.set(e, t, n, r), N.scissor(te.copy(le).multiplyScalar(ae).round());
		}, this.getScissorTest = function() {
			return ue;
		}, this.setScissorTest = function(e) {
			N.setScissorTest(ue = e);
		}, this.setOpaqueSort = function(e) {
			oe = e;
		}, this.setTransparentSort = function(e) {
			se = e;
		}, this.getClearColor = function(e) {
			return e.copy(Pe.getClearColor());
		}, this.setClearColor = function() {
			Pe.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Pe.getClearAlpha();
		}, this.setClearAlpha = function() {
			Pe.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (O !== null) {
					let t = O.texture.format;
					e = h.has(t);
				}
				if (e) {
					let e = O.texture.type, t = g.has(e), n = Pe.getClearColor(), r = Pe.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (_[0] = i, _[1] = a, _[2] = o, _[3] = r, I.clearBufferuiv(I.COLOR, 0, _)) : (v[0] = i, v[1] = a, v[2] = o, v[3] = r, I.clearBufferiv(I.COLOR, 0, v));
				} else r |= I.COLOR_BUFFER_BIT;
			}
			t && (r |= I.DEPTH_BUFFER_BIT), n && (r |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && I.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", Je, !1), t.removeEventListener("webglcontextrestored", Xe, !1), t.removeEventListener("webglcontextcreationerror", tt, !1), Pe.dispose(), ke.dispose(), Ae.dispose(), P.dispose(), Ce.dispose(), Ee.dispose(), ze.dispose(), Ve.dispose(), De.dispose(), Ke.dispose(), Ke.removeEventListener("sessionstart", at), Ke.removeEventListener("sessionend", ot), st.stop();
		}, this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = _e);
			let o = i.isMesh && i.matrixWorld.determinant() < 0, s = function(e, t, n, r, i) {
				!0 !== t.isScene && (t = _e), F.resetTextureUnits();
				let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = O === null ? w.outputColorSpace : !0 === O.isXRRenderTarget ? O.texture.colorSpace : bn, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Ce.get(r.envMap || o, c), u = !0 === r.vertexColors && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
				r.toneMapped && (O !== null && !0 !== O.isXRRenderTarget || (h = w.toneMapping));
				let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = P.get(r), y = b.state.lights;
				if (!0 === fe && (!0 === pe || e !== k)) {
					let t = e === k && r.id === ee;
					je.setState(r, e, t);
				}
				let x = !1;
				r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version || v.outputColorSpace !== s || i.isBatchedMesh && !1 === v.batching ? x = !0 : i.isBatchedMesh || !0 !== v.batching ? i.isBatchedMesh && !0 === v.batchingColor && i.colorTexture === null || i.isBatchedMesh && !1 === v.batchingColor && i.colorTexture !== null || i.isInstancedMesh && !1 === v.instancing ? x = !0 : i.isInstancedMesh || !0 !== v.instancing ? i.isSkinnedMesh && !1 === v.skinning ? x = !0 : i.isSkinnedMesh || !0 !== v.skinning ? i.isInstancedMesh && !0 === v.instancingColor && i.instanceColor === null || i.isInstancedMesh && !1 === v.instancingColor && i.instanceColor !== null || i.isInstancedMesh && !0 === v.instancingMorph && i.morphTexture === null || i.isInstancedMesh && !1 === v.instancingMorph && i.morphTexture !== null || v.envMap !== l || !0 === r.fog && v.fog !== a ? x = !0 : v.numClippingPlanes === void 0 || v.numClippingPlanes === je.numPlanes && v.numIntersection === je.numIntersection ? (v.vertexAlphas !== u || v.vertexTangents !== d || v.morphTargets !== f || v.morphNormals !== p || v.morphColors !== m || v.toneMapping !== h || v.morphTargetsCount !== _) && (x = !0) : x = !0 : x = !0 : x = !0 : x = !0 : (x = !0, v.__version = r.version);
				let S = v.currentProgram;
				!0 === x && (S = _t(r, t, i));
				let C = !1, T = !1, E = !1, D = S.getUniforms(), A = v.uniforms;
				if (N.useProgram(S.program) && (C = !0, T = !0, E = !0), r.id !== ee && (ee = r.id, T = !0), C || k !== e) {
					N.buffers.depth.getReversed() && !0 !== e.reversedDepth && (e._reversedDepth = !0, e.updateProjectionMatrix()), D.setValue(I, "projectionMatrix", e.projectionMatrix), D.setValue(I, "viewMatrix", e.matrixWorldInverse);
					let t = D.map.cameraPosition;
					t !== void 0 && t.setValue(I, he.setFromMatrixPosition(e.matrixWorld)), xe.logarithmicDepthBuffer && D.setValue(I, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && D.setValue(I, "isOrthographic", !0 === e.isOrthographicCamera), k !== e && (k = e, T = !0, E = !0);
				}
				if (v.needsLights && (y.state.directionalShadowMap.length > 0 && D.setValue(I, "directionalShadowMap", y.state.directionalShadowMap, F), y.state.spotShadowMap.length > 0 && D.setValue(I, "spotShadowMap", y.state.spotShadowMap, F), y.state.pointShadowMap.length > 0 && D.setValue(I, "pointShadowMap", y.state.pointShadowMap, F)), i.isSkinnedMesh) {
					D.setOptional(I, i, "bindMatrix"), D.setOptional(I, i, "bindMatrixInverse");
					let e = i.skeleton;
					e && (e.boneTexture === null && e.computeBoneTexture(), D.setValue(I, "boneTexture", e.boneTexture, F));
				}
				i.isBatchedMesh && (D.setOptional(I, i, "batchingTexture"), D.setValue(I, "batchingTexture", i._matricesTexture, F), D.setOptional(I, i, "batchingIdTexture"), D.setValue(I, "batchingIdTexture", i._indirectTexture, F), D.setOptional(I, i, "batchingColorTexture"), i._colorsTexture !== null && D.setValue(I, "batchingColorTexture", i._colorsTexture, F));
				let te = n.morphAttributes;
				te.position === void 0 && te.normal === void 0 && te.color === void 0 || Fe.update(i, n, S), (T || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, D.setValue(I, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (A.envMapIntensity.value = t.environmentIntensity), A.dfgLUT !== void 0 && (A.dfgLUT.value = ($h === null && (($h = new Zo(Qh, 16, 16, ut, Ze)).name = "DFG_LUT", $h.minFilter = Be, $h.magFilter = Be, $h.wrapS = Ne, $h.wrapT = Ne, $h.generateMipmaps = !1, $h.needsUpdate = !0), $h)), T && (D.setValue(I, "toneMappingExposure", w.toneMappingExposure), v.needsLights && (M = E, (j = A).ambientLightColor.needsUpdate = M, j.lightProbe.needsUpdate = M, j.directionalLights.needsUpdate = M, j.directionalLightShadows.needsUpdate = M, j.pointLights.needsUpdate = M, j.pointLightShadows.needsUpdate = M, j.spotLights.needsUpdate = M, j.spotLightShadows.needsUpdate = M, j.rectAreaLights.needsUpdate = M, j.hemisphereLights.needsUpdate = M), a && !0 === r.fog && Oe.refreshFogUniforms(A, a), Oe.refreshMaterialUniforms(A, r, ae, ie, b.state.transmissionRenderTarget[e.id]), Zm.upload(I, vt(v), A, F));
				var j, M;
				if (r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (Zm.upload(I, vt(v), A, F), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && D.setValue(I, "center", i.center), D.setValue(I, "modelViewMatrix", i.modelViewMatrix), D.setValue(I, "normalMatrix", i.normalMatrix), D.setValue(I, "modelMatrix", i.matrixWorld), r.isShaderMaterial || r.isRawShaderMaterial) {
					let e = r.uniformsGroups;
					for (let t = 0, n = e.length; t < n; t++) {
						let n = e[t];
						Ve.update(n, S), Ve.bind(n, S);
					}
				}
				return S;
			}(e, t, n, r, i);
			N.setMaterial(r, o);
			let c = n.index, l = 1;
			if (!0 === r.wireframe) {
				if (c = Te.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === 1 / 0) return;
			let h;
			ze.setup(i, r, s, n, c);
			let g = Ie;
			if (c !== null && (h = we.get(c), g = Le, g.setIndex(h)), i.isMesh) !0 === r.wireframe ? (N.setLineWidth(r.wireframeLinewidth * ye()), g.setMode(I.LINES)) : g.setMode(I.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), N.setLineWidth(e * ye()), i.isLineSegments ? g.setMode(I.LINES) : i.isLineLoop ? g.setMode(I.LINE_LOOP) : g.setMode(I.LINE_STRIP);
			} else i.isPoints ? g.setMode(I.POINTS) : i.isSprite && g.setMode(I.TRIANGLES);
			if (i.isBatchedMesh) {
				if (i._multiDrawInstances !== null) wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), g.renderMultiDrawInstances(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount, i._multiDrawInstances);
				else if (be.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? we.get(c).bytesPerElement : 1, o = P.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(I, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? 1 / 0 : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		}, this.compile = function(e, t, n = null) {
			n === null && (n = e), b = Ae.get(n), b.init(t), S.push(b), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (b.pushLight(e), e.castShadow && b.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (b.pushLight(e), e.castShadow && b.pushShadow(e));
			}), b.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) {
					if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
						let a = t[i];
						rt(a, n, e), r.add(a);
					}
					else rt(t, n, e), r.add(t);
				}
			}), b = S.pop(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						P.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				be.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let it = null;
		function at() {
			st.stop();
		}
		function ot() {
			st.start();
		}
		let st = new dp();
		function ct(e, t, n, r) {
			if (!1 === e.visible) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
				else if (e.isLight) b.pushLight(e), e.castShadow && b.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || de.intersectsSprite(e)) {
						r && ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);
						let t = Ee.update(e), i = e.material;
						i.visible && y.push(e, t, i, n, ge.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || de.intersectsObject(e))) {
					let t = Ee.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), ge.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), ge.copy(e.boundingSphere.center)), ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && y.push(e, t, s, n, ge.z, o);
						}
					} else i.visible && y.push(e, t, i, n, ge.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) ct(i[e], t, n, r);
		}
		function ft(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			b.setupLightsView(n), !0 === fe && je.setGlobalState(w.clippingPlanes, n), r && N.viewport(A.copy(r)), i.length > 0 && ht(i, t, n), a.length > 0 && ht(a, t, n), o.length > 0 && ht(o, t, n), N.buffers.depth.setTest(!0), N.buffers.depth.setMask(!0), N.buffers.color.setMask(!0), N.setPolygonOffset(!1);
		}
		function mt(e, t, n, r) {
			if ((!0 === n.isScene ? n.overrideMaterial : null) !== null) return;
			if (b.state.transmissionRenderTarget[r.id] === void 0) {
				let e = be.has("EXT_color_buffer_half_float") || be.has("EXT_color_buffer_float");
				b.state.transmissionRenderTarget[r.id] = new ti(1, 1, {
					generateMipmaps: !0,
					type: e ? Ze : We,
					minFilter: He,
					samples: Math.max(4, xe.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					colorSpace: W.workingColorSpace
				});
			}
			let a = b.state.transmissionRenderTarget[r.id], o = r.viewport || A;
			a.setSize(o.z * w.transmissionResolutionScale, o.w * w.transmissionResolutionScale);
			let s = w.getRenderTarget(), c = w.getActiveCubeFace(), l = w.getActiveMipmapLevel();
			w.setRenderTarget(a), w.getClearColor(M), ne = w.getClearAlpha(), ne < 1 && w.setClearColor(16777215, .5), w.clear(), ve && Pe.render(n);
			let u = w.toneMapping;
			w.toneMapping = 0;
			let d = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), b.setupLightsView(r), !0 === fe && je.setGlobalState(w.clippingPlanes, r), ht(e, n, r), F.updateMultisampleRenderTarget(a), F.updateRenderTargetMipmap(a), !1 === be.has("WEBGL_multisampled_render_to_texture")) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, gt(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				!0 === e && (F.updateMultisampleRenderTarget(a), F.updateRenderTargetMipmap(a));
			}
			w.setRenderTarget(s, c, l), w.setClearColor(M, ne), d !== void 0 && (r.viewport = d), w.toneMapping = u;
		}
		function ht(e, t, n) {
			let r = !0 === t.isScene ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				!0 === l.allowOverride && r !== null && (l = r), o.layers.test(n.layers) && gt(o, t, n, s, l, c);
			}
		}
		function gt(e, t, n, r, i, a) {
			e.onBeforeRender(w, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(w, t, n, r, e, a), !0 === i.transparent && i.side === 2 && !1 === i.forceSinglePass ? (i.side = 1, i.needsUpdate = !0, w.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, w.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : w.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(w, t, n, r, i, a);
		}
		function _t(e, t, n) {
			!0 !== t.isScene && (t = _e);
			let r = P.get(e), i = b.state.lights, a = b.state.shadowsArray, o = i.state.version, s = De.getParameters(e, i.state, a, t, n), c = De.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Ce.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", nt), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return yt(e, s), d;
			} else s.uniforms = De.getUniforms(e), e.onBeforeCompile(s, w), d = De.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (f.clippingPlanes = je.uniform), yt(e, s), r.needsLights = function(e) {
				return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights;
			}(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.currentProgram = d, r.uniformsList = null, d;
		}
		function vt(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Zm.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function yt(e, t) {
			let n = P.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		st.setAnimationLoop(function(e) {
			it && it(e);
		}), typeof self < "u" && st.setContext(self), this.setAnimationLoop = function(e) {
			it = e, Ke.setAnimationLoop(e), e === null ? st.stop() : st.start();
		}, Ke.addEventListener("sessionstart", at), Ke.addEventListener("sessionend", ot), this.render = function(e, t) {
			if (t !== void 0 && !0 !== t.isCamera) return void R("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if (!0 === T) return;
			let n = !0 === Ke.enabled && !0 === Ke.isPresenting, r = C !== null && (O === null || n) && C.begin(w, O);
			if (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), t.parent === null && !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), !0 !== Ke.enabled || !0 !== Ke.isPresenting || C !== null && !1 !== C.isCompositing() || (!0 === Ke.cameraAutoUpdate && Ke.updateCamera(t), t = Ke.getCamera()), !0 === e.isScene && e.onBeforeRender(w, e, t, O), b = Ae.get(e, S.length), b.init(t), S.push(b), me.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), de.setFromProjectionMatrix(me, sr, t.reversedDepth), pe = this.localClippingEnabled, fe = je.init(this.clippingPlanes, pe), y = ke.get(e, x.length), y.init(), x.push(y), !0 === Ke.enabled && !0 === Ke.isPresenting) {
				let e = w.xr.getDepthSensingMesh();
				e !== null && ct(e, t, -1 / 0, w.sortObjects);
			}
			ct(e, t, 0, w.sortObjects), y.finish(), !0 === w.sortObjects && y.sort(oe, se), ve = !1 === Ke.enabled || !1 === Ke.isPresenting || !1 === Ke.hasDepthSensing(), ve && Pe.addToRenderList(y, e), this.info.render.frame++, !0 === fe && je.beginShadows();
			let i = b.state.shadowsArray;
			if (Me.render(i, e, t), !0 === fe && je.endShadows(), !0 === this.info.autoReset && this.info.reset(), !1 === (r && C.hasRenderPass())) {
				let n = y.opaque, r = y.transmissive;
				if (b.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) mt(n, r, e, i[t]);
					ve && Pe.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						ft(y, e, n, n.viewport);
					}
				} else r.length > 0 && mt(n, r, e, t), ve && Pe.render(e), ft(y, e, t);
			}
			O !== null && D === 0 && (F.updateMultisampleRenderTarget(O), F.updateRenderTargetMipmap(O)), r && C.end(w), !0 === e.isScene && e.onAfterRender(w, e, t), ze.resetDefaultState(), ee = -1, k = null, S.pop(), S.length > 0 ? (b = S[S.length - 1], !0 === fe && je.setGlobalState(w.clippingPlanes, b.state.camera)) : b = null, x.pop(), y = x.length > 0 ? x[x.length - 1] : null;
		}, this.getActiveCubeFace = function() {
			return E;
		}, this.getActiveMipmapLevel = function() {
			return D;
		}, this.getRenderTarget = function() {
			return O;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = P.get(e);
			r.__autoAllocateDepthBuffer = !1 === e.resolveDepthBuffer, !1 === r.__autoAllocateDepthBuffer && (r.__useRenderToTexture = !1), P.get(e.texture).__webglTexture = t, P.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = P.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		};
		let bt = I.createFramebuffer();
		this.setRenderTarget = function(e, t = 0, n = 0) {
			O = e, E = t, D = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = P.get(e);
				if (o.__useDefaultFramebuffer !== void 0) return N.bindFramebuffer(I.FRAMEBUFFER, o.__webglFramebuffer), A.copy(e.viewport), te.copy(e.scissor), j = e.scissorTest, N.viewport(A), N.scissor(te), N.setScissorTest(j), void (ee = -1);
				if (o.__webglFramebuffer === void 0) F.setupRenderTarget(e);
				else if (o.__hasExternalTextures) F.rebindTextures(e, P.get(e.texture).__webglTexture, P.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && P.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
						F.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = P.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && !1 === F.useMultisampledRTT(e) ? P.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, A.copy(e.viewport), te.copy(e.scissor), j = e.scissorTest;
			} else A.copy(ce).multiplyScalar(ae).floor(), te.copy(le).multiplyScalar(ae).floor(), j = ue;
			if (n !== 0 && (r = bt), N.bindFramebuffer(I.FRAMEBUFFER, r) && N.drawBuffers(e, r), N.viewport(A), N.scissor(te), N.setScissorTest(j), i) {
				let r = P.get(e.texture);
				I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = P.get(e.textures[t]);
					I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = P.get(e.texture);
				I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, t.__webglTexture, n);
			}
			ee = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!e || !e.isWebGLRenderTarget) return void R("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = P.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				N.bindFramebuffer(I.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					if (e.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + s), !xe.textureFormatReadable(c)) return void R("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					if (!xe.textureTypeReadable(l)) return void R("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && I.readPixels(t, n, r, i, Re.convert(c), Re.convert(l), a);
				} finally {
					let e = O === null ? null : P.get(O).__webglFramebuffer;
					N.bindFramebuffer(I.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!e || !e.isWebGLRenderTarget) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = P.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					N.bindFramebuffer(I.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					if (e.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + s), !xe.textureFormatReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (!xe.textureTypeReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let d = I.createBuffer();
					I.bindBuffer(I.PIXEL_PACK_BUFFER, d), I.bufferData(I.PIXEL_PACK_BUFFER, a.byteLength, I.STREAM_READ), I.readPixels(t, n, r, i, Re.convert(l), Re.convert(u), 0);
					let f = O === null ? null : P.get(O).__webglFramebuffer;
					N.bindFramebuffer(I.FRAMEBUFFER, f);
					let p = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return I.flush(), await function(e, t, n) {
						return new Promise(function(r, i) {
							setTimeout(function a() {
								switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
									case e.WAIT_FAILED:
										i();
										break;
									case e.TIMEOUT_EXPIRED:
										setTimeout(a, n);
										break;
									default: r();
								}
							}, n);
						});
					}(I, p, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, d), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, a), I.deleteBuffer(d), I.deleteSync(p), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			F.setTexture2D(e, 0), I.copyTexSubImage2D(I.TEXTURE_2D, n, 0, 0, o, s, i, a), N.unbindTexture();
		};
		let xt = I.createFramebuffer(), St = I.createFramebuffer();
		this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Re.convert(t.format), _ = Re.convert(t.type), v;
			t.isData3DTexture ? (F.setTexture3D(t, 0), v = I.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (F.setTexture2DArray(t, 0), v = I.TEXTURE_2D_ARRAY) : (F.setTexture2D(t, 0), v = I.TEXTURE_2D), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, t.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = I.getParameter(I.UNPACK_ROW_LENGTH), b = I.getParameter(I.UNPACK_IMAGE_HEIGHT), x = I.getParameter(I.UNPACK_SKIP_PIXELS), S = I.getParameter(I.UNPACK_SKIP_ROWS), C = I.getParameter(I.UNPACK_SKIP_IMAGES);
			I.pixelStorei(I.UNPACK_ROW_LENGTH, h.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, h.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, l), I.pixelStorei(I.UNPACK_SKIP_ROWS, u), I.pixelStorei(I.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = P.get(e), r = P.get(t), h = P.get(n.__renderTarget), g = P.get(r.__renderTarget);
				N.bindFramebuffer(I.READ_FRAMEBUFFER, h.__webglFramebuffer), N.bindFramebuffer(I.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, P.get(e).__webglTexture, i, d + n), I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, P.get(t).__webglTexture, a, m + n)), I.blitFramebuffer(l, u, o, s, f, p, o, s, I.DEPTH_BUFFER_BIT, I.NEAREST);
				N.bindFramebuffer(I.READ_FRAMEBUFFER, null), N.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || P.has(e)) {
				let n = P.get(e), r = P.get(t);
				N.bindFramebuffer(I.READ_FRAMEBUFFER, xt), N.bindFramebuffer(I.DRAW_FRAMEBUFFER, St);
				for (let e = 0; e < c; e++) w ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, n.__webglTexture, i), T ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : I.framebufferTexture2D(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? I.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : I.copyTexSubImage2D(v, a, f, p, l, u, o, s) : I.blitFramebuffer(l, u, o, s, f, p, o, s, I.COLOR_BUFFER_BIT, I.NEAREST);
				N.bindFramebuffer(I.READ_FRAMEBUFFER, null), N.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? I.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? I.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : I.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : I.texSubImage2D(I.TEXTURE_2D, a, f, p, o, s, g, _, h);
			I.pixelStorei(I.UNPACK_ROW_LENGTH, y), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, b), I.pixelStorei(I.UNPACK_SKIP_PIXELS, x), I.pixelStorei(I.UNPACK_SKIP_ROWS, S), I.pixelStorei(I.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && I.generateMipmap(v), N.unbindTexture();
		}, this.initRenderTarget = function(e) {
			P.get(e).__webglFramebuffer === void 0 && F.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? F.setTextureCube(e, 0) : e.isData3DTexture ? F.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? F.setTexture2DArray(e, 0) : F.setTexture2D(e, 0), N.unbindTexture();
		}, this.resetState = function() {
			E = 0, D = 0, O = null, N.reset(), ze.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return sr;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = W._getDrawingBufferColorSpace(e), t.unpackColorSpace = W._getUnpackColorSpace();
	}
}, tg = { type: "change" }, ng = { type: "start" }, rg = { type: "end" }, ig = new To(), ag = new ps(), og = Math.cos(70 * Fr.DEG2RAD), sg = new H(), cg = 2 * Math.PI, lg = -1, ug = 0, dg = 1, fg = 2, pg = 3, mg = 4, hg = 5, gg = 6, _g = 1e-6, vg = class extends cp {
	constructor(e, r = null) {
		super(e, r), this.state = lg, this.target = new H(), this.cursor = new H(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: t.ROTATE,
			MIDDLE: t.DOLLY,
			RIGHT: t.PAN
		}, this.touches = {
			ONE: n.ROTATE,
			TWO: n.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new H(), this._lastQuaternion = new Ir(), this._lastTargetPosition = new H(), this._quat = new Ir().setFromUnitVectors(e.up, new H(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new _f(), this._sphericalDelta = new _f(), this._scale = 1, this._panOffset = new H(), this._rotateStart = new V(), this._rotateEnd = new V(), this._rotateDelta = new V(), this._panStart = new V(), this._panEnd = new V(), this._panDelta = new V(), this._dollyStart = new V(), this._dollyEnd = new V(), this._dollyDelta = new V(), this._dollyDirection = new H(), this._mouse = new V(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = bg.bind(this), this._onPointerDown = yg.bind(this), this._onPointerUp = xg.bind(this), this._onContextMenu = Og.bind(this), this._onMouseWheel = wg.bind(this), this._onKeyDown = Tg.bind(this), this._onTouchStart = Eg.bind(this), this._onTouchMove = Dg.bind(this), this._onMouseDown = Sg.bind(this), this._onMouseMove = Cg.bind(this), this._interceptControlDown = kg.bind(this), this._interceptControlUp = Ag.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, this.domElement.style.cursor = e === "grab" ? "grab" : "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(tg), this.update(), this.state = lg;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		sg.copy(t).sub(this.target), sg.applyQuaternion(this._quat), this._spherical.setFromVector3(sg), this.autoRotate && this.state === lg && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += cg : n > Math.PI && (n -= cg), r < -Math.PI ? r += cg : r > Math.PI && (r -= cg), this._spherical.theta = n <= r ? Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), !0 === this.enableDamping ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (sg.setFromSpherical(this._spherical), sg.applyQuaternion(this._quatInverse), t.copy(this.target).add(sg), this.object.lookAt(this.target), !0 === this.enableDamping ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = sg.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new H(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new H(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = sg.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (ig.origin.copy(this.object.position), ig.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ig.direction)) < og ? this.object.lookAt(this.target) : (ag.setFromNormalAndCoplanarPoint(this.object.up, this.target), ig.intersectPlane(ag, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, !!(i || this._lastPosition.distanceToSquared(this.object.position) > _g || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _g || this._lastTargetPosition.distanceToSquared(this.target) > _g) && (this.dispatchEvent(tg), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0);
	}
	_getAutoRotationAngle(e) {
		return e === null ? cg / 60 / 60 * this.autoRotateSpeed : cg / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(.01 * e);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		sg.setFromMatrixColumn(t, 0), sg.multiplyScalar(-e), this._panOffset.add(sg);
	}
	_panUp(e, t) {
		!0 === this.screenSpacePanning ? sg.setFromMatrixColumn(t, 1) : (sg.setFromMatrixColumn(t, 0), sg.crossVectors(this.object.up, sg)), sg.multiplyScalar(e), this._panOffset.add(sg);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			sg.copy(r).sub(this.target);
			let i = sg.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -i / o * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(cg * this._rotateDelta.x / t.clientHeight), this._rotateUp(cg * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(cg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-cg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(cg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-cg * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(cg * this._rotateDelta.x / t.clientHeight), this._rotateUp(cg * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = .5 * (e.pageX + t.x), o = .5 * (e.pageY + t.y);
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return void this._pointers.splice(t, 1);
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new V(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function yg(e) {
	!1 !== this.enabled && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._isTrackingPointer(e) || (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function bg(e) {
	!1 !== this.enabled && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function xg(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(rg), this.state = lg, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function Sg(e) {
	let n;
	switch (e.button) {
		case 0:
			n = this.mouseButtons.LEFT;
			break;
		case 1:
			n = this.mouseButtons.MIDDLE;
			break;
		case 2:
			n = this.mouseButtons.RIGHT;
			break;
		default: n = -1;
	}
	switch (n) {
		case t.DOLLY:
			if (!1 === this.enableZoom) return;
			this._handleMouseDownDolly(e), this.state = dg;
			break;
		case t.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (!1 === this.enablePan) return;
				this._handleMouseDownPan(e), this.state = fg;
			} else {
				if (!1 === this.enableRotate) return;
				this._handleMouseDownRotate(e), this.state = ug;
			}
			break;
		case t.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (!1 === this.enableRotate) return;
				this._handleMouseDownRotate(e), this.state = ug;
			} else {
				if (!1 === this.enablePan) return;
				this._handleMouseDownPan(e), this.state = fg;
			}
			break;
		default: this.state = lg;
	}
	this.state !== lg && this.dispatchEvent(ng);
}
function Cg(e) {
	switch (this.state) {
		case ug:
			if (!1 === this.enableRotate) return;
			this._handleMouseMoveRotate(e);
			break;
		case dg:
			if (!1 === this.enableZoom) return;
			this._handleMouseMoveDolly(e);
			break;
		case fg:
			if (!1 === this.enablePan) return;
			this._handleMouseMovePan(e);
	}
}
function wg(e) {
	!1 !== this.enabled && !1 !== this.enableZoom && this.state === lg && (e.preventDefault(), this.dispatchEvent(ng), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(rg));
}
function Tg(e) {
	!1 !== this.enabled && this._handleKeyDown(e);
}
function Eg(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case n.ROTATE:
					if (!1 === this.enableRotate) return;
					this._handleTouchStartRotate(e), this.state = pg;
					break;
				case n.PAN:
					if (!1 === this.enablePan) return;
					this._handleTouchStartPan(e), this.state = mg;
					break;
				default: this.state = lg;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case n.DOLLY_PAN:
					if (!1 === this.enableZoom && !1 === this.enablePan) return;
					this._handleTouchStartDollyPan(e), this.state = hg;
					break;
				case n.DOLLY_ROTATE:
					if (!1 === this.enableZoom && !1 === this.enableRotate) return;
					this._handleTouchStartDollyRotate(e), this.state = gg;
					break;
				default: this.state = lg;
			}
			break;
		default: this.state = lg;
	}
	this.state !== lg && this.dispatchEvent(ng);
}
function Dg(e) {
	switch (this._trackPointer(e), this.state) {
		case pg:
			if (!1 === this.enableRotate) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case mg:
			if (!1 === this.enablePan) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case hg:
			if (!1 === this.enableZoom && !1 === this.enablePan) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case gg:
			if (!1 === this.enableZoom && !1 === this.enableRotate) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = lg;
	}
}
function Og(e) {
	!1 !== this.enabled && e.preventDefault();
}
function kg(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function Ag(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function jg(e, t) {
	if (t === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
	if (t === 2 || t === 1) {
		let n = e.getIndex();
		if (n === null) {
			let t = [], r = e.getAttribute("position");
			if (r === void 0) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
			for (let e = 0; e < r.count; e++) t.push(e);
			e.setIndex(t), n = e.getIndex();
		}
		let r = n.count - 2, i = [];
		if (t === 2) for (let e = 1; e <= r; e++) i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1));
		else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
		i.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
		let a = e.clone();
		return a.setIndex(i), a.clearGroups(), a;
	}
	return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
function Mg(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = e.clone();
	return Ng(e, r, function(e, r) {
		t.set(r, e), n.set(e, r);
	}), r.traverse(function(e) {
		if (!e.isSkinnedMesh) return;
		let r = e, i = t.get(e), a = i.skeleton.bones;
		r.skeleton = i.skeleton.clone(), r.bindMatrix.copy(i.bindMatrix), r.skeleton.bones = a.map(function(e) {
			return n.get(e);
		}), r.bind(r.skeleton, r.bindMatrix);
	}), r;
}
function Ng(e, t, n) {
	n(e, t);
	for (let r = 0; r < e.children.length; r++) Ng(e.children[r], t.children[r], n);
}
var Pg = class extends Mu {
	constructor(e) {
		super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
			return new Bg(e);
		}), this.register(function(e) {
			return new Vg(e);
		}), this.register(function(e) {
			return new Xg(e);
		}), this.register(function(e) {
			return new Zg(e);
		}), this.register(function(e) {
			return new Qg(e);
		}), this.register(function(e) {
			return new Ug(e);
		}), this.register(function(e) {
			return new Wg(e);
		}), this.register(function(e) {
			return new Gg(e);
		}), this.register(function(e) {
			return new Kg(e);
		}), this.register(function(e) {
			return new zg(e);
		}), this.register(function(e) {
			return new qg(e);
		}), this.register(function(e) {
			return new Hg(e);
		}), this.register(function(e) {
			return new Yg(e);
		}), this.register(function(e) {
			return new Jg(e);
		}), this.register(function(e) {
			return new Lg(e);
		}), this.register(function(e) {
			return new $g(e, Z.EXT_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new $g(e, Z.KHR_MESHOPT_COMPRESSION);
		}), this.register(function(e) {
			return new e_(e);
		});
	}
	load(e, t, n, r) {
		let i = this, a;
		if (this.resourcePath !== "") a = this.resourcePath;
		else if (this.path !== "") {
			let t = gd.extractUrlBase(e);
			a = gd.resolveURL(t, this.path);
		} else a = gd.extractUrlBase(e);
		this.manager.itemStart(e);
		let o = function(t) {
			r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e);
		}, s = new Iu(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
			try {
				i.parse(n, a, function(n) {
					t(n), i.manager.itemEnd(e);
				}, o);
			} catch (e) {
				o(e);
			}
		}, n, o);
	}
	setDRACOLoader(e) {
		return this.dracoLoader = e, this;
	}
	setKTX2Loader(e) {
		return this.ktx2Loader = e, this;
	}
	setMeshoptDecoder(e) {
		return this.meshoptDecoder = e, this;
	}
	register(e) {
		return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
	}
	unregister(e) {
		return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
	}
	parse(e, t, n, r) {
		let i, a = {}, o = {}, s = new TextDecoder();
		if (typeof e == "string") i = JSON.parse(e);
		else if (e instanceof ArrayBuffer) {
			if (s.decode(new Uint8Array(e, 0, 4)) === t_) {
				try {
					a[Z.KHR_BINARY_GLTF] = new i_(e);
				} catch (e) {
					r && r(e);
					return;
				}
				i = JSON.parse(a[Z.KHR_BINARY_GLTF].content);
			} else i = JSON.parse(s.decode(e));
		} else i = e;
		if (i.asset === void 0 || i.asset.version[0] < 2) return void (r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
		let c = new A_(i, {
			path: t || this.resourcePath || "",
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder
		});
		c.fileLoader.setRequestHeader(this.requestHeader);
		for (let e = 0; e < this.pluginCallbacks.length; e++) {
			let t = this.pluginCallbacks[e](c);
			t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[t.name] = t, a[t.name] = !0;
		}
		if (i.extensionsUsed) for (let e = 0; e < i.extensionsUsed.length; ++e) {
			let t = i.extensionsUsed[e], n = i.extensionsRequired || [];
			switch (t) {
				case Z.KHR_MATERIALS_UNLIT:
					a[t] = new Rg();
					break;
				case Z.KHR_DRACO_MESH_COMPRESSION:
					a[t] = new a_(i, this.dracoLoader);
					break;
				case Z.KHR_TEXTURE_TRANSFORM:
					a[t] = new o_();
					break;
				case Z.KHR_MESH_QUANTIZATION:
					a[t] = new s_();
					break;
				default: n.indexOf(t) >= 0 && o[t] === void 0 && console.warn("THREE.GLTFLoader: Unknown extension \"" + t + "\".");
			}
		}
		c.setExtensions(a), c.setPlugins(o), c.parse(n, r);
	}
	parseAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.parse(e, t, r, i);
		});
	}
};
function Fg() {
	let e = {};
	return {
		get: function(t) {
			return e[t];
		},
		add: function(t, n) {
			e[t] = n;
		},
		remove: function(t) {
			delete e[t];
		},
		removeAll: function() {
			e = {};
		}
	};
}
function Ig(e, t, n) {
	let r = e.json.materials[t];
	return r.extensions && r.extensions[n] ? r.extensions[n] : null;
}
var Z = {
	KHR_BINARY_GLTF: "KHR_binary_glTF",
	KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
	KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
	KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
	KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
	KHR_MATERIALS_IOR: "KHR_materials_ior",
	KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
	KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
	KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
	KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
	KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
	KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
	KHR_MATERIALS_VOLUME: "KHR_materials_volume",
	KHR_TEXTURE_BASISU: "KHR_texture_basisu",
	KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
	KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
	KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
	EXT_MATERIALS_BUMP: "EXT_materials_bump",
	EXT_TEXTURE_WEBP: "EXT_texture_webp",
	EXT_TEXTURE_AVIF: "EXT_texture_avif",
	EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
	EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, Lg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_LIGHTS_PUNCTUAL, this.cache = {
			refs: {},
			uses: {}
		};
	}
	_markDefs() {
		let e = this.parser, t = this.parser.json.nodes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
		}
	}
	_loadLight(e) {
		let t = this.parser, n = "light:" + e, r = t.cache.get(n);
		if (r) return r;
		let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new K(16777215);
		a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], bn);
		let c = a.range === void 0 ? 0 : a.range;
		switch (a.type) {
			case "directional":
				o = new ud(s), o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			case "point":
				o = new sd(s), o.distance = c;
				break;
			case "spot":
				o = new ad(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
		}
		return o.position.set(0, 0, 0), w_(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
	}
	getDependency(e, t) {
		if (e === "light") return this._loadLight(t);
	}
	createNodeAttachment(e) {
		let t = this, n = this.parser, r = n.json.nodes[e], i = (r.extensions && r.extensions[this.name] || {}).light;
		return i === void 0 ? null : this._loadLight(i).then(function(e) {
			return n._getNodeRef(t.cache, i, e);
		});
	}
}, Rg = class {
	constructor() {
		this.name = Z.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return Eo;
	}
	extendParams(e, t, n) {
		let r = [];
		e.color = new K(1, 1, 1), e.opacity = 1;
		let i = t.pbrMetallicRoughness;
		if (i) {
			if (Array.isArray(i.baseColorFactor)) {
				let t = i.baseColorFactor;
				e.color.setRGB(t[0], t[1], t[2], bn), e.opacity = t[3];
			}
			i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, yn));
		}
		return Promise.all(r);
	}
}, zg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
	}
}, Bg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (r.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
			let e = n.clearcoatNormalTexture.scale;
			t.clearcoatNormalScale = new V(e, e);
		}
		return Promise.all(r);
	}
}, Vg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		return n === null || (t.dispersion = n.dispersion === void 0 ? 0 : n.dispersion), Promise.resolve();
	}
}, Hg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(r);
	}
}, Ug = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		if (t.sheenColor = new K(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
			let e = n.sheenColorFactor;
			t.sheenColor.setRGB(e[0], e[1], e[2], bn);
		}
		return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, yn)), n.sheenRoughnessTexture !== void 0 && r.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(r);
	}
}, Wg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && r.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(r);
	}
}, Gg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.thickness = n.thicknessFactor === void 0 ? 0 : n.thicknessFactor, n.thicknessTexture !== void 0 && r.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || 1 / 0;
		let i = n.attenuationColor || [
			1,
			1,
			1
		];
		return t.attenuationColor = new K().setRGB(i[0], i[1], i[2], bn), Promise.all(r);
	}
}, Kg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_IOR;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		return n === null || (t.ior = n.ior === void 0 ? 1.5 : n.ior), Promise.resolve();
	}
}, qg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		t.specularIntensity = n.specularFactor === void 0 ? 1 : n.specularFactor, n.specularTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
		let i = n.specularColorFactor || [
			1,
			1,
			1
		];
		return t.specularColor = new K().setRGB(i[0], i[1], i[2], bn), n.specularColorTexture !== void 0 && r.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, yn)), Promise.all(r);
	}
}, Jg = class {
	constructor(e) {
		this.parser = e, this.name = Z.EXT_MATERIALS_BUMP;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return t.bumpScale = n.bumpFactor === void 0 ? 1 : n.bumpFactor, n.bumpTexture !== void 0 && r.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(r);
	}
}, Yg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(e) {
		return Ig(this.parser, e, this.name) === null ? null : $l;
	}
	extendMaterialParams(e, t) {
		let n = Ig(this.parser, e, this.name);
		if (n === null) return Promise.resolve();
		let r = [];
		return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && r.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(r);
	}
}, Xg = class {
	constructor(e) {
		this.parser = e, this.name = Z.KHR_TEXTURE_BASISU;
	}
	loadTexture(e) {
		let t = this.parser, n = t.json, r = n.textures[e];
		if (!r.extensions || !r.extensions[this.name]) return null;
		let i = r.extensions[this.name], a = t.options.ktx2Loader;
		if (!a) {
			if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
			return null;
		}
		return t.loadTextureImage(e, i.source, a);
	}
}, Zg = class {
	constructor(e) {
		this.parser = e, this.name = Z.EXT_TEXTURE_WEBP;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, Qg = class {
	constructor(e) {
		this.parser = e, this.name = Z.EXT_TEXTURE_AVIF;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return n.loadTextureImage(e, a.source, s);
	}
}, $g = class {
	constructor(e, t) {
		this.name = t, this.parser = e;
	}
	loadBufferView(e) {
		let t = this.parser.json, n = t.bufferViews[e];
		if (n.extensions && n.extensions[this.name]) {
			let e = n.extensions[this.name], r = this.parser.getDependency("buffer", e.buffer), i = this.parser.options.meshoptDecoder;
			if (!i || !i.supported) {
				if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
				return null;
			}
			return r.then(function(t) {
				let n = e.byteOffset || 0, r = e.byteLength || 0, a = e.count, o = e.byteStride, s = new Uint8Array(t, n, r);
				return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function(e) {
					return e.buffer;
				}) : i.ready.then(function() {
					let t = new ArrayBuffer(a * o);
					return i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t;
				});
			});
		}
		return null;
	}
}, e_ = class {
	constructor(e) {
		this.name = Z.EXT_MESH_GPU_INSTANCING, this.parser = e;
	}
	createNodeMesh(e) {
		let t = this.parser.json, n = t.nodes[e];
		if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
		let r = t.meshes[n.mesh];
		for (let e of r.primitives) if (e.mode !== d_.TRIANGLES && e.mode !== d_.TRIANGLE_STRIP && e.mode !== d_.TRIANGLE_FAN && e.mode !== void 0) return null;
		let i = n.extensions[this.name].attributes, a = [], o = {};
		for (let e in i) a.push(this.parser.getDependency("accessor", i[e]).then((t) => (o[e] = t, o[e])));
		return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((e) => {
			let t = e.pop(), n = t.isGroup ? t.children : [t], r = e[0].count, i = [];
			for (let e of n) {
				let t = new G(), n = new H(), a = new Ir(), s = new H(1, 1, 1), c = new ls(e.geometry, e.material, r);
				for (let e = 0; e < r; e++) o.TRANSLATION && n.fromBufferAttribute(o.TRANSLATION, e), o.ROTATION && a.fromBufferAttribute(o.ROTATION, e), o.SCALE && s.fromBufferAttribute(o.SCALE, e), c.setMatrixAt(e, t.compose(n, a, s));
				for (let t in o) if (t === "_COLOR_0") {
					let e = o[t];
					c.instanceColor = new ts(e.array, e.itemSize, e.normalized);
				} else t !== "TRANSLATION" && t !== "ROTATION" && t !== "SCALE" && e.geometry.setAttribute(t, o[t]);
				Mi.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), i.push(c);
			}
			return t.isGroup ? (t.clear(), t.add(...i), t) : i[0];
		}));
	}
}, t_ = "glTF", n_ = 1313821514, r_ = 5130562, i_ = class {
	constructor(e) {
		this.name = Z.KHR_BINARY_GLTF, this.content = null, this.body = null;
		let t = new DataView(e, 0, 12), n = new TextDecoder();
		if (this.header = {
			magic: n.decode(new Uint8Array(e.slice(0, 4))),
			version: t.getUint32(4, !0),
			length: t.getUint32(8, !0)
		}, this.header.magic !== t_) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
		let r = this.header.length - 12, i = new DataView(e, 12), a = 0;
		for (; a < r;) {
			let t = i.getUint32(a, !0);
			a += 4;
			let r = i.getUint32(a, !0);
			if (a += 4, r === n_) {
				let r = new Uint8Array(e, 12 + a, t);
				this.content = n.decode(r);
			} else if (r === r_) {
				let n = 12 + a;
				this.body = e.slice(n, n + t);
			}
			a += t;
		}
		if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
	}
}, a_ = class {
	constructor(e, t) {
		if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = Z.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
	}
	decodePrimitive(e, t) {
		let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
		for (let e in a) {
			let t = g_[e] || e.toLowerCase();
			o[t] = a[e];
		}
		for (let t in e.attributes) {
			let r = g_[t] || t.toLowerCase();
			if (a[t] !== void 0) {
				let i = n.accessors[e.attributes[t]];
				c[r] = f_[i.componentType].name, s[r] = !0 === i.normalized;
			}
		}
		return t.getDependency("bufferView", i).then(function(e) {
			return new Promise(function(t, n) {
				r.decodeDracoFile(e, function(e) {
					for (let t in e.attributes) {
						let n = e.attributes[t], r = s[t];
						r !== void 0 && (n.normalized = r);
					}
					t(e);
				}, o, c, bn, n);
			});
		});
	}
}, o_ = class {
	constructor() {
		this.name = Z.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(e, t) {
		return (t.texCoord !== void 0 && t.texCoord !== e.channel || t.offset !== void 0 || t.rotation !== void 0 || t.scale !== void 0) && (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
	}
}, s_ = class {
	constructor() {
		this.name = Z.KHR_MESH_QUANTIZATION;
	}
}, c_ = class extends pu {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r;
		for (let e = 0; e !== r; e++) t[e] = n[i + e];
		return t;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = 2 * o, c = 3 * o, l = r - t, u = (n - t) / l, d = u * u, f = d * u, p = e * c, m = p - c, h = -2 * f + 3 * d, g = f - d, _ = 1 - h, v = g - d + u;
		for (let e = 0; e !== o; e++) {
			let t = a[m + e + o], n = a[m + e + s] * l, r = a[p + e + o], c = a[p + e] * l;
			i[e] = _ * t + v * n + h * r + g * c;
		}
		return i;
	}
}, l_ = new Ir(), u_ = class extends c_ {
	interpolate_(e, t, n, r) {
		let i = super.interpolate_(e, t, n, r);
		return l_.fromArray(i).normalize().toArray(i), i;
	}
}, d_ = {
	FLOAT: 5126,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
}, f_ = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
}, p_ = {
	9728: Fe,
	9729: Be,
	9984: Ie,
	9985: Ve,
	9986: Re,
	9987: He
}, m_ = {
	33071: Ne,
	33648: Pe,
	10497: Me
}, h_ = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
}, g_ = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	TEXCOORD_0: "uv",
	TEXCOORD_1: "uv1",
	TEXCOORD_2: "uv2",
	TEXCOORD_3: "uv3",
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
}, __ = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
}, v_ = {
	CUBICSPLINE: void 0,
	LINEAR: en,
	STEP: $t
}, y_ = "OPAQUE", b_ = "MASK", x_ = "BLEND";
function S_(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Ql({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function C_(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function w_(e, t) {
	t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function T_(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function E_(e) {
	let t, n = e.extensions && e.extensions[Z.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + D_(n.attributes) : e.indices + ":" + D_(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + D_(e.targets[n]);
	return t;
}
function D_(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function O_(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
var k_ = new G(), A_ = class {
	constructor(e = {}, t = {}) {
		this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Fg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		let n = !1, r = -1, i = !1, a = -1;
		if (typeof navigator < "u" && navigator.userAgent !== void 0) {
			let e = navigator.userAgent;
			n = !0 === /^((?!chrome|android).)*safari/i.test(e);
			let t = e.match(/Version\/(\d+)/);
			r = n && t ? parseInt(t[1], 10) : -1, i = e.indexOf("Firefox") > -1, a = i ? e.match(/Firefox\/([0-9]+)\./)[1] : -1;
		}
		this.textureLoader = typeof createImageBitmap > "u" || n && r < 17 || i && a < 98 ? new Uu(this.options.manager) : new wd(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Iu(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
	}
	setExtensions(e) {
		this.extensions = e;
	}
	setPlugins(e) {
		this.plugins = e;
	}
	parse(e, t) {
		let n = this, r = this.json, i = this.extensions;
		this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
			return e._markDefs && e._markDefs();
		}), Promise.all(this._invokeAll(function(e) {
			return e.beforeRoot && e.beforeRoot();
		})).then(function() {
			return Promise.all([
				n.getDependencies("scene"),
				n.getDependencies("animation"),
				n.getDependencies("camera")
			]);
		}).then(function(t) {
			let a = {
				scene: t[0][r.scene || 0],
				scenes: t[0],
				animations: t[1],
				cameras: t[2],
				asset: r.asset,
				parser: n,
				userData: {}
			};
			return C_(i, a, r), w_(a, r), Promise.all(n._invokeAll(function(e) {
				return e.afterRoot && e.afterRoot(a);
			})).then(function() {
				for (let e of a.scenes) e.updateMatrixWorld();
				e(a);
			});
		}).catch(t);
	}
	_markDefs() {
		let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n].joints;
			for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
		}
		for (let t = 0, r = e.length; t < r; t++) {
			let r = e[t];
			r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
		}
	}
	_addNodeRef(e, t) {
		t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
	}
	_getNodeRef(e, t, n) {
		if (e.refs[t] <= 1) return n;
		let r = n.clone(), i = (e, t) => {
			let n = this.associations.get(e);
			n != null && this.associations.set(t, n);
			for (let [n, r] of e.children.entries()) i(r, t.children[n]);
		};
		return i(n, r), r.name += "_instance_" + e.uses[t]++, r;
	}
	_invokeOne(e) {
		let t = Object.values(this.plugins);
		t.push(this);
		for (let n = 0; n < t.length; n++) {
			let r = e(t[n]);
			if (r) return r;
		}
		return null;
	}
	_invokeAll(e) {
		let t = Object.values(this.plugins);
		t.unshift(this);
		let n = [];
		for (let r = 0; r < t.length; r++) {
			let i = e(t[r]);
			i && n.push(i);
		}
		return n;
	}
	getDependency(e, t) {
		let n = e + ":" + t, r = this.cache.get(n);
		if (!r) {
			switch (e) {
				case "scene":
					r = this.loadScene(t);
					break;
				case "node":
					r = this._invokeOne(function(e) {
						return e.loadNode && e.loadNode(t);
					});
					break;
				case "mesh":
					r = this._invokeOne(function(e) {
						return e.loadMesh && e.loadMesh(t);
					});
					break;
				case "accessor":
					r = this.loadAccessor(t);
					break;
				case "bufferView":
					r = this._invokeOne(function(e) {
						return e.loadBufferView && e.loadBufferView(t);
					});
					break;
				case "buffer":
					r = this.loadBuffer(t);
					break;
				case "material":
					r = this._invokeOne(function(e) {
						return e.loadMaterial && e.loadMaterial(t);
					});
					break;
				case "texture":
					r = this._invokeOne(function(e) {
						return e.loadTexture && e.loadTexture(t);
					});
					break;
				case "skin":
					r = this.loadSkin(t);
					break;
				case "animation":
					r = this._invokeOne(function(e) {
						return e.loadAnimation && e.loadAnimation(t);
					});
					break;
				case "camera":
					r = this.loadCamera(t);
					break;
				default: if (r = this._invokeOne(function(n) {
					return n != this && n.getDependency && n.getDependency(e, t);
				}), !r) throw Error("Unknown type: " + e);
			}
			this.cache.add(n, r);
		}
		return r;
	}
	getDependencies(e) {
		let t = this.cache.get(e);
		if (!t) {
			let n = this, r = this.json[e + (e === "mesh" ? "es" : "s")] || [];
			t = Promise.all(r.map(function(t, r) {
				return n.getDependency(e, r);
			})), this.cache.add(e, t);
		}
		return t;
	}
	loadBuffer(e) {
		let t = this.json.buffers[e], n = this.fileLoader;
		if (t.type && t.type !== "arraybuffer") throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
		if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Z.KHR_BINARY_GLTF].body);
		let r = this.options;
		return new Promise(function(e, i) {
			n.load(gd.resolveURL(t.uri, r.path), e, void 0, function() {
				i(/* @__PURE__ */ Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
			});
		});
	}
	loadBufferView(e) {
		let t = this.json.bufferViews[e];
		return this.getDependency("buffer", t.buffer).then(function(e) {
			let n = t.byteLength || 0, r = t.byteOffset || 0;
			return e.slice(r, r + n);
		});
	}
	loadAccessor(e) {
		let t = this, n = this.json, r = this.json.accessors[e];
		if (r.bufferView === void 0 && r.sparse === void 0) {
			let e = h_[r.type], t = f_[r.componentType], n = !0 === r.normalized, i = new t(r.count * e);
			return Promise.resolve(new Oa(i, e, n));
		}
		let i = [];
		return r.bufferView === void 0 ? i.push(null) : i.push(this.getDependency("bufferView", r.bufferView)), r.sparse !== void 0 && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function(e) {
			let i = e[0], a = h_[r.type], o = f_[r.componentType], s = o.BYTES_PER_ELEMENT, c = s * a, l = r.byteOffset || 0, u = r.bufferView === void 0 ? void 0 : n.bufferViews[r.bufferView].byteStride, d = !0 === r.normalized, f, p;
			if (u && u !== c) {
				let e = Math.floor(l / u), n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count, c = t.cache.get(n);
				c || (f = new o(i, e * u, r.count * u / s), c = new Ja(f, u / s), t.cache.add(n, c)), p = new Xa(c, a, l % u / s, d);
			} else f = i === null ? new o(r.count * a) : new o(i, l, r.count * a), p = new Oa(f, a, d);
			if (r.sparse !== void 0) {
				let t = h_.SCALAR, n = f_[r.sparse.indices.componentType], s = r.sparse.indices.byteOffset || 0, c = r.sparse.values.byteOffset || 0, l = new n(e[1], s, r.sparse.count * t), u = new o(e[2], c, r.sparse.count * a);
				i !== null && (p = new Oa(p.array.slice(), p.itemSize, p.normalized)), p.normalized = !1;
				for (let e = 0, t = l.length; e < t; e++) {
					let t = l[e];
					if (p.setX(t, u[e * a]), a >= 2 && p.setY(t, u[e * a + 1]), a >= 3 && p.setZ(t, u[e * a + 2]), a >= 4 && p.setW(t, u[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
				p.normalized = d;
			}
			return p;
		});
	}
	loadTexture(e) {
		let t = this.json, n = this.options, r = t.textures[e].source, i = t.images[r], a = this.textureLoader;
		if (i.uri) {
			let e = n.manager.getHandler(i.uri);
			e !== null && (a = e);
		}
		return this.loadTextureImage(e, r, a);
	}
	loadTextureImage(e, t, n) {
		let r = this, i = this.json, a = i.textures[e], o = i.images[t], s = (o.uri || o.bufferView) + ":" + a.sampler;
		if (this.textureCache[s]) return this.textureCache[s];
		let c = this.loadImageSource(t, n).then(function(t) {
			t.flipY = !1, t.name = a.name || o.name || "", t.name === "" && typeof o.uri == "string" && !1 === o.uri.startsWith("data:image/") && (t.name = o.uri);
			let n = (i.samplers || {})[a.sampler] || {};
			return t.magFilter = p_[n.magFilter] || 1006, t.minFilter = p_[n.minFilter] || 1008, t.wrapS = m_[n.wrapS] || 1e3, t.wrapT = m_[n.wrapT] || 1e3, t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== 1003 && t.minFilter !== 1006, r.associations.set(t, { textures: e }), t;
		}).catch(function() {
			return null;
		});
		return this.textureCache[s] = c, c;
	}
	loadImageSource(e, t) {
		let n = this.json, r = this.options;
		if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((e) => e.clone());
		let i = n.images[e], a = self.URL || self.webkitURL, o = i.uri || "", s = !1;
		if (i.bufferView !== void 0) o = this.getDependency("bufferView", i.bufferView).then(function(e) {
			s = !0;
			let t = new Blob([e], { type: i.mimeType });
			return o = a.createObjectURL(t), o;
		});
		else if (i.uri === void 0) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
		let c = Promise.resolve(o).then(function(e) {
			return new Promise(function(n, i) {
				let a = n;
				!0 === t.isImageBitmapLoader && (a = function(e) {
					let t = new Qr(e);
					t.needsUpdate = !0, n(t);
				}), t.load(gd.resolveURL(e, r.path), a, void 0, i);
			});
		}).then(function(e) {
			var t;
			return !0 === s && a.revokeObjectURL(o), w_(e, i), e.userData.mimeType = i.mimeType || ((t = i.uri).search(/\.jpe?g($|\?)/i) > 0 || t.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || t.search(/^data\:image\/webp/) === 0 ? "image/webp" : t.search(/\.ktx2($|\?)/i) > 0 || t.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png"), e;
		}).catch(function(e) {
			throw console.error("THREE.GLTFLoader: Couldn't load texture", o), e;
		});
		return this.sourceCache[e] = c, c;
	}
	assignTexture(e, t, n, r) {
		let i = this;
		return this.getDependency("texture", n.index).then(function(a) {
			if (!a) return null;
			if (n.texCoord !== void 0 && n.texCoord > 0 && ((a = a.clone()).channel = n.texCoord), i.extensions[Z.KHR_TEXTURE_TRANSFORM]) {
				let e = n.extensions === void 0 ? void 0 : n.extensions[Z.KHR_TEXTURE_TRANSFORM];
				if (e) {
					let t = i.associations.get(a);
					a = i.extensions[Z.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
				}
			}
			return r !== void 0 && (a.colorSpace = r), e[t] = a, a;
		});
	}
	assignFinalMaterial(e) {
		let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
		if (e.isPoints) {
			let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new ec(), Qa.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
		} else if (e.isLine) {
			let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new Bs(), Qa.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
		}
		if (r || i || a) {
			let e = "ClonedMaterial:" + n.uuid + ":";
			r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), a && (e += "flat-shading:");
			let t = this.cache.get(e);
			t || (t = n.clone(), i && (t.vertexColors = !0), a && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t;
		}
		e.material = n;
	}
	getMaterialType() {
		return Ql;
	}
	loadMaterial(e) {
		let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = [];
		if ((i.extensions || {})[Z.KHR_MATERIALS_UNLIT]) {
			let e = r[Z.KHR_MATERIALS_UNLIT];
			a = e.getMaterialType(), s.push(e.extendParams(o, i, t));
		} else {
			let n = i.pbrMetallicRoughness || {};
			if (o.color = new K(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
				let e = n.baseColorFactor;
				o.color.setRGB(e[0], e[1], e[2], bn), o.opacity = e[3];
			}
			n.baseColorTexture !== void 0 && s.push(t.assignTexture(o, "map", n.baseColorTexture, yn)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (s.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), s.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
				return t.getMaterialType && t.getMaterialType(e);
			}), s.push(Promise.all(this._invokeAll(function(t) {
				return t.extendMaterialParams && t.extendMaterialParams(e, o);
			})));
		}
		!0 === i.doubleSided && (o.side = 2);
		let c = i.alphaMode || y_;
		if (c === x_ ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, c === b_ && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== Eo && (s.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new V(1, 1), i.normalTexture.scale !== void 0)) {
			let e = i.normalTexture.scale;
			o.normalScale.set(e, e);
		}
		if (i.occlusionTexture !== void 0 && a !== Eo && (s.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== Eo) {
			let e = i.emissiveFactor;
			o.emissive = new K().setRGB(e[0], e[1], e[2], bn);
		}
		return i.emissiveTexture !== void 0 && a !== Eo && s.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, yn)), Promise.all(s).then(function() {
			let n = new a(o);
			return i.name && (n.name = i.name), w_(n, i), t.associations.set(n, { materials: e }), i.extensions && C_(r, n, i), n;
		});
	}
	createUniqueName(e) {
		let t = ef.sanitizeNodeName(e || "");
		return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
	}
	loadGeometries(e) {
		let t = this, n = this.extensions, r = this.primitiveCache;
		function i(e) {
			return n[Z.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
				return j_(n, e, t);
			});
		}
		let a = [];
		for (let n = 0, o = e.length; n < o; n++) {
			let o = e[n], s = E_(o), c = r[s];
			if (c) a.push(c.promise);
			else {
				let e;
				e = o.extensions && o.extensions[Z.KHR_DRACO_MESH_COMPRESSION] ? i(o) : j_(new J(), o, t), r[s] = {
					primitive: o,
					promise: e
				}, a.push(e);
			}
		}
		return Promise.all(a);
	}
	loadMesh(e) {
		let t = this, n = this.json, r = this.extensions, i = n.meshes[e], a = i.primitives, o = [];
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e].material === void 0 ? S_(this.cache) : this.getDependency("material", a[e].material);
			o.push(t);
		}
		return o.push(t.loadGeometries(a)), Promise.all(o).then(function(n) {
			let o = n.slice(0, n.length - 1), s = n[n.length - 1], c = [];
			for (let n = 0, l = s.length; n < l; n++) {
				let l = s[n], u = a[n], d, f = o[n];
				if (u.mode === d_.TRIANGLES || u.mode === d_.TRIANGLE_STRIP || u.mode === d_.TRIANGLE_FAN || u.mode === void 0) d = !0 === i.isSkinnedMesh ? new Yo(l, f) : new Ro(l, f), !0 === d.isSkinnedMesh && d.normalizeSkinWeights(), u.mode === d_.TRIANGLE_STRIP ? d.geometry = jg(d.geometry, 1) : u.mode === d_.TRIANGLE_FAN && (d.geometry = jg(d.geometry, 2));
				else if (u.mode === d_.LINES) d = new Qs(l, f);
				else if (u.mode === d_.LINE_STRIP) d = new Js(l, f);
				else if (u.mode === d_.LINE_LOOP) d = new $s(l, f);
				else {
					if (u.mode !== d_.POINTS) throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
					d = new ac(l, f);
				}
				Object.keys(d.geometry.morphAttributes).length > 0 && T_(d, i), d.name = t.createUniqueName(i.name || "mesh_" + e), w_(d, i), u.extensions && C_(r, d, u), t.assignFinalMaterial(d), c.push(d);
			}
			for (let n = 0, r = c.length; n < r; n++) t.associations.set(c[n], {
				meshes: e,
				primitives: n
			});
			if (c.length === 1) return i.extensions && C_(r, c[0], i), c[0];
			let l = new Ni();
			i.extensions && C_(r, l, i), t.associations.set(l, { meshes: e });
			for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
			return l;
		});
	}
	loadCamera(e) {
		let t, n = this.json.cameras[e], r = n[n.type];
		if (r) return n.type === "perspective" ? t = new rd(Fr.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new cd(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), w_(t, n), Promise.resolve(t);
		console.warn("THREE.GLTFLoader: Missing camera parameters.");
	}
	loadSkin(e) {
		let t = this.json.skins[e], n = [];
		for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
		return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
			let n = e.pop(), r = e, i = [], a = [];
			for (let e = 0, o = r.length; e < o; e++) {
				let o = r[e];
				if (o) {
					i.push(o);
					let t = new G();
					n !== null && t.fromArray(n.array, 16 * e), a.push(t);
				} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
			}
			return new es(i, a);
		});
	}
	loadAnimation(e) {
		let t = this.json, n = this, r = t.animations[e], i = r.name ? r.name : "animation_" + e, a = [], o = [], s = [], c = [], l = [];
		for (let e = 0, t = r.channels.length; e < t; e++) {
			let t = r.channels[e], n = r.samplers[t.sampler], i = t.target, u = i.node, d = r.parameters === void 0 ? n.input : r.parameters[n.input], f = r.parameters === void 0 ? n.output : r.parameters[n.output];
			i.node !== void 0 && (a.push(this.getDependency("node", u)), o.push(this.getDependency("accessor", d)), s.push(this.getDependency("accessor", f)), c.push(n), l.push(i));
		}
		return Promise.all([
			Promise.all(a),
			Promise.all(o),
			Promise.all(s),
			Promise.all(c),
			Promise.all(l)
		]).then(function(e) {
			let t = e[0], a = e[1], o = e[2], s = e[3], c = e[4], l = [];
			for (let e = 0, r = t.length; e < r; e++) {
				let r = t[e], i = a[e], u = o[e], d = s[e], f = c[e];
				if (r === void 0) continue;
				r.updateMatrix && r.updateMatrix();
				let p = n._createAnimationTracks(r, i, u, d, f);
				if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
			}
			let u = new Eu(i, void 0, l);
			return w_(u, r), u;
		});
	}
	createNodeMesh(e) {
		let t = this.json, n = this, r = t.nodes[e];
		return r.mesh === void 0 ? null : n.getDependency("mesh", r.mesh).then(function(e) {
			let t = n._getNodeRef(n.meshCache, r.mesh, e);
			return r.weights !== void 0 && t.traverse(function(e) {
				if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t];
			}), t;
		});
	}
	loadNode(e) {
		let t = this, n = this.json.nodes[e], r = t._loadNodeShallow(e), i = [], a = n.children || [];
		for (let e = 0, n = a.length; e < n; e++) i.push(t.getDependency("node", a[e]));
		let o = n.skin === void 0 ? Promise.resolve(null) : t.getDependency("skin", n.skin);
		return Promise.all([
			r,
			Promise.all(i),
			o
		]).then(function(e) {
			let t = e[0], n = e[1], r = e[2];
			r !== null && t.traverse(function(e) {
				e.isSkinnedMesh && e.bind(r, k_);
			});
			for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
			if (t.userData.pivot !== void 0 && n.length > 0) {
				let e = t.userData.pivot, r = n[0];
				t.pivot = new H().fromArray(e), t.position.x -= e[0], t.position.y -= e[1], t.position.z -= e[2], r.position.set(0, 0, 0), delete t.userData.pivot;
			}
			return t;
		});
	}
	_loadNodeShallow(e) {
		let t = this.json, n = this.extensions, r = this;
		if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
		let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", o = [], s = r._invokeOne(function(t) {
			return t.createNodeMesh && t.createNodeMesh(e);
		});
		return s && o.push(s), i.camera !== void 0 && o.push(r.getDependency("camera", i.camera).then(function(e) {
			return r._getNodeRef(r.cameraCache, i.camera, e);
		})), r._invokeAll(function(t) {
			return t.createNodeAttachment && t.createNodeAttachment(e);
		}).forEach(function(e) {
			o.push(e);
		}), this.nodeCache[e] = Promise.all(o).then(function(t) {
			let o;
			if (o = !0 === i.isBone ? new Xo() : t.length > 1 ? new Ni() : t.length === 1 ? t[0] : new Mi(), o !== t[0]) for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
			if (i.name && (o.userData.name = i.name, o.name = a), w_(o, i), i.extensions && C_(n, o, i), i.matrix !== void 0) {
				let e = new G();
				e.fromArray(i.matrix), o.applyMatrix4(e);
			} else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
			if (r.associations.has(o)) {
				if (i.mesh !== void 0 && r.meshCache.refs[i.mesh] > 1) {
					let e = r.associations.get(o);
					r.associations.set(o, { ...e });
				}
			} else r.associations.set(o, {});
			return r.associations.get(o).nodes = e, o;
		}), this.nodeCache[e];
	}
	loadScene(e) {
		let t = this.extensions, n = this.json.scenes[e], r = this, i = new Ni();
		n.name && (i.name = r.createUniqueName(n.name)), w_(i, n), n.extensions && C_(t, i, n);
		let a = n.nodes || [], o = [];
		for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
		return Promise.all(o).then(function(e) {
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				n.parent === null ? i.add(n) : i.add(Mg(n));
			}
			return r.associations = ((e) => {
				let t = /* @__PURE__ */ new Map();
				for (let [e, n] of r.associations) (e instanceof Qa || e instanceof Qr) && t.set(e, n);
				return e.traverse((e) => {
					let n = r.associations.get(e);
					n != null && t.set(e, n);
				}), t;
			})(i), i;
		});
	}
	_createAnimationTracks(e, t, n, r, i) {
		let a = [], o = e.name ? e.name : e.uuid, s = [], c;
		switch (__[i.path] === __.weights ? e.traverse(function(e) {
			e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
		}) : s.push(o), __[i.path]) {
			case __.weights:
				c = xu;
				break;
			case __.rotation:
				c = Cu;
				break;
			case __.translation:
			case __.scale:
				c = Tu;
				break;
			default: c = n.itemSize === 1 ? xu : Tu;
		}
		let l = r.interpolation === void 0 ? en : v_[r.interpolation], u = this._getArrayFromAccessor(n);
		for (let e = 0, n = s.length; e < n; e++) {
			let n = new c(s[e] + "." + __[i.path], t.array, u, l);
			r.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), a.push(n);
		}
		return a;
	}
	_getArrayFromAccessor(e) {
		let t = e.array;
		if (e.normalized) {
			let e = O_(t.constructor), n = new Float32Array(t.length);
			for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
			t = n;
		}
		return t;
	}
	_createCubicSplineTrackInterpolant(e) {
		e.createInterpolant = function(e) {
			return new (this instanceof Cu ? u_ : c_)(this.times, this.values, this.getValueSize() / 3, e);
		}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
	}
};
function j_(e, t, n) {
	let r = t.attributes, i = [];
	function a(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = g_[t] || t.toLowerCase();
		n in e.attributes || i.push(a(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		i.push(r);
	}
	return W.workingColorSpace !== "srgb-linear" && "COLOR_0" in r && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${W.workingColorSpace}" not supported.`), w_(e, t), function(e, t, n) {
		let r = t.attributes, i = new ia();
		if (r.POSITION === void 0) return;
		{
			let e = n.json.accessors[r.POSITION], t = e.min, a = e.max;
			if (t === void 0 || a === void 0) return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			if (i.set(new H(t[0], t[1], t[2]), new H(a[0], a[1], a[2])), e.normalized) {
				let t = O_(f_[e.componentType]);
				i.min.multiplyScalar(t), i.max.multiplyScalar(t);
			}
		}
		let a = t.targets;
		if (a !== void 0) {
			let e = new H(), t = new H();
			for (let r = 0, i = a.length; r < i; r++) {
				let i = a[r];
				if (i.POSITION !== void 0) {
					let r = n.json.accessors[i.POSITION], a = r.min, o = r.max;
					if (a !== void 0 && o !== void 0) {
						if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
							let e = O_(f_[r.componentType]);
							t.multiplyScalar(e);
						}
						e.max(t);
					} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
				}
			}
			i.expandByVector(e);
		}
		e.boundingBox = i;
		let o = new Ba();
		i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = o;
	}(e, t, n), Promise.all(i).then(function() {
		return t.targets === void 0 ? e : function(e, t, n) {
			let r = !1, i = !1, a = !1;
			for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				if (n.POSITION !== void 0 && (r = !0), n.NORMAL !== void 0 && (i = !0), n.COLOR_0 !== void 0 && (a = !0), r && i && a) break;
			}
			if (!r && !i && !a) return Promise.resolve(e);
			let o = [], s = [], c = [];
			for (let l = 0, u = t.length; l < u; l++) {
				let u = t[l];
				if (r) {
					let t = u.POSITION === void 0 ? e.attributes.position : n.getDependency("accessor", u.POSITION);
					o.push(t);
				}
				if (i) {
					let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency("accessor", u.NORMAL);
					s.push(t);
				}
				if (a) {
					let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency("accessor", u.COLOR_0);
					c.push(t);
				}
			}
			return Promise.all([
				Promise.all(o),
				Promise.all(s),
				Promise.all(c)
			]).then(function(t) {
				let n = t[0], o = t[1], s = t[2];
				return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = s), e.morphTargetsRelative = !0, e;
			});
		}(e, t.targets, n);
	});
}
var Q = {
	IDLE: Symbol(),
	ROTATE: Symbol(),
	PAN: Symbol(),
	SCALE: Symbol(),
	FOV: Symbol(),
	FOCUS: Symbol(),
	ZROTATE: Symbol(),
	TOUCH_MULTI: Symbol(),
	ANIMATION_FOCUS: Symbol(),
	ANIMATION_ROTATE: Symbol()
}, M_ = {
	NONE: Symbol(),
	ONE_FINGER: Symbol(),
	ONE_FINGER_SWITCHED: Symbol(),
	TWO_FINGER: Symbol(),
	MULT_FINGER: Symbol(),
	CURSOR: Symbol()
}, $ = {
	x: 0,
	y: 0
}, N_ = {
	camera: new G(),
	gizmos: new G()
}, P_ = { type: "change" }, F_ = { type: "start" }, I_ = { type: "end" }, L_ = new pf(), R_ = new H(), z_ = new G(), B_ = new G(), V_ = new H(), H_ = 1e-6, U_ = class extends cp {
	constructor(e, t = null, n = null) {
		super(e, t), this.scene = n, this.target = new H(), this._currentTarget = new H(), this.radiusFactor = .67, this.mouseActions = [], this._mouseOp = null, this._v2_1 = new V(), this._v3_1 = new H(), this._v3_2 = new H(), this._m4_1 = new G(), this._m4_2 = new G(), this._quat = new Ir(), this._translationMatrix = new G(), this._rotationMatrix = new G(), this._scaleMatrix = new G(), this._rotationAxis = new H(), this._cameraMatrixState = new G(), this._cameraProjectionState = new G(), this._fovState = 1, this._upState = new H(), this._zoomState = 1, this._nearPos = 0, this._farPos = 0, this._gizmoMatrixState = new G(), this._up0 = new H(), this._zoom0 = 1, this._fov0 = 0, this._initialNear = 0, this._nearPos0 = 0, this._initialFar = 0, this._farPos0 = 0, this._cameraMatrixState0 = new G(), this._gizmoMatrixState0 = new G(), this._target0 = new H(), this._button = -1, this._touchStart = [], this._touchCurrent = [], this._input = M_.NONE, this._switchSensibility = 32, this._startFingerDistance = 0, this._currentFingerDistance = 0, this._startFingerRotation = 0, this._currentFingerRotation = 0, this._devPxRatio = 0, this._downValid = !0, this._nclicks = 0, this._downEvents = [], this._downStart = 0, this._clickStart = 0, this._maxDownTime = 250, this._maxInterval = 300, this._posThreshold = 24, this._movementThreshold = 24, this._currentCursorPosition = new H(), this._startCursorPosition = new H(), this._grid = null, this._gridPosition = new H(), this._gizmos = new Ni(), this._curvePts = 128, this._timeStart = -1, this._animationId = -1, this.focusAnimationTime = 500, this._timePrev = 0, this._timeCurrent = 0, this._anglePrev = 0, this._angleCurrent = 0, this._cursorPosPrev = new H(), this._cursorPosCurr = new H(), this._wPrev = 0, this._wCurr = 0, this.adjustNearFar = !1, this.scaleFactor = 1.1, this.dampingFactor = 25, this.wMax = 20, this.enableAnimations = !0, this.enableGrid = !1, this.cursorZoom = !1, this.minFov = 5, this.maxFov = 90, this.rotateSpeed = 1, this.enablePan = !0, this.enableRotate = !0, this.enableZoom = !0, this.enableGizmos = !0, this.enableFocus = !0, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this._tbRadius = 1, this._state = Q.IDLE, this.setCamera(e), this.scene != null && this.scene.add(this._gizmos), this.initializeMouseActions(), this._onContextMenu = G_.bind(this), this._onWheel = X_.bind(this), this._onPointerUp = Y_.bind(this), this._onPointerMove = J_.bind(this), this._onPointerDown = q_.bind(this), this._onPointerCancel = K_.bind(this), this._onWindowResize = W_.bind(this), t !== null && this.connect(t);
	}
	connect(e) {
		super.connect(e), this.domElement.style.touchAction = "none", this._devPxRatio = window.devicePixelRatio, this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onWheel, { passive: !1 }), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerCancel), window.addEventListener("resize", this._onWindowResize);
	}
	disconnect() {
		this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointercancel", this._onPointerCancel), this.domElement.removeEventListener("wheel", this._onWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), window.removeEventListener("pointermove", this._onPointerMove), window.removeEventListener("pointerup", this._onPointerUp), window.removeEventListener("resize", this._onWindowResize);
	}
	onSinglePanStart(e, t) {
		if (this.enabled) switch (this.dispatchEvent(F_), this.setCenter(e.clientX, e.clientY), t) {
			case "PAN":
				if (!this.enablePan) return;
				this._animationId != -1 && (cancelAnimationFrame(this._animationId), this._animationId = -1, this._timeStart = -1, this.activateGizmos(!1), this.dispatchEvent(P_)), this.updateTbState(Q.PAN, !0), this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement)), this.enableGrid && (this.drawGrid(), this.dispatchEvent(P_));
				break;
			case "ROTATE":
				if (!this.enableRotate) return;
				this._animationId != -1 && (cancelAnimationFrame(this._animationId), this._animationId = -1, this._timeStart = -1), this.updateTbState(Q.ROTATE, !0), this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object, $.x, $.y, this.domElement, this._tbRadius)), this.activateGizmos(!0), this.enableAnimations && (this._timePrev = this._timeCurrent = performance.now(), this._angleCurrent = this._anglePrev = 0, this._cursorPosPrev.copy(this._startCursorPosition), this._cursorPosCurr.copy(this._cursorPosPrev), this._wCurr = 0, this._wPrev = this._wCurr), this.dispatchEvent(P_);
				break;
			case "FOV":
				if (!this.object.isPerspectiveCamera || !this.enableZoom) return;
				this._animationId != -1 && (cancelAnimationFrame(this._animationId), this._animationId = -1, this._timeStart = -1, this.activateGizmos(!1), this.dispatchEvent(P_)), this.updateTbState(Q.FOV, !0), this._startCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y), this._currentCursorPosition.copy(this._startCursorPosition);
				break;
			case "ZOOM":
				if (!this.enableZoom) return;
				this._animationId != -1 && (cancelAnimationFrame(this._animationId), this._animationId = -1, this._timeStart = -1, this.activateGizmos(!1), this.dispatchEvent(P_)), this.updateTbState(Q.SCALE, !0), this._startCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y), this._currentCursorPosition.copy(this._startCursorPosition);
		}
	}
	onSinglePanMove(e, t) {
		if (this.enabled) {
			let n = t != this._state;
			switch (this.setCenter(e.clientX, e.clientY), t) {
				case Q.PAN:
					this.enablePan && (n ? (this.dispatchEvent(I_), this.dispatchEvent(F_), this.updateTbState(t, !0), this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement)), this.enableGrid && this.drawGrid(), this.activateGizmos(!1)) : (this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement)), this.applyTransformMatrix(this.pan(this._startCursorPosition, this._currentCursorPosition))));
					break;
				case Q.ROTATE:
					if (this.enableRotate) {
						if (n) this.dispatchEvent(I_), this.dispatchEvent(F_), this.updateTbState(t, !0), this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object, $.x, $.y, this.domElement, this._tbRadius)), this.enableGrid && this.disposeGrid(), this.activateGizmos(!0);
						else {
							this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.object, $.x, $.y, this.domElement, this._tbRadius));
							let e = this._startCursorPosition.distanceTo(this._currentCursorPosition), t = this._startCursorPosition.angleTo(this._currentCursorPosition), n = Math.max(e / this._tbRadius, t) * this.rotateSpeed;
							this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition, this._currentCursorPosition), n)), this.enableAnimations && (this._timePrev = this._timeCurrent, this._timeCurrent = performance.now(), this._anglePrev = this._angleCurrent, this._angleCurrent = n, this._cursorPosPrev.copy(this._cursorPosCurr), this._cursorPosCurr.copy(this._currentCursorPosition), this._wPrev = this._wCurr, this._wCurr = this.calculateAngularSpeed(this._anglePrev, this._angleCurrent, this._timePrev, this._timeCurrent));
						}
					}
					break;
				case Q.SCALE:
					if (this.enableZoom) {
						if (n) this.dispatchEvent(I_), this.dispatchEvent(F_), this.updateTbState(t, !0), this._startCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y), this._currentCursorPosition.copy(this._startCursorPosition), this.enableGrid && this.disposeGrid(), this.activateGizmos(!1);
						else {
							this._currentCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y);
							let e = this._currentCursorPosition.y - this._startCursorPosition.y, t = 1;
							e < 0 ? t = 1 / this.scaleFactor ** (-e * 8) : e > 0 && (t = this.scaleFactor ** (e * 8)), this._v3_1.setFromMatrixPosition(this._gizmoMatrixState), this.applyTransformMatrix(this.scale(t, this._v3_1));
						}
					}
					break;
				case Q.FOV: if (this.enableZoom && this.object.isPerspectiveCamera) {
					if (n) this.dispatchEvent(I_), this.dispatchEvent(F_), this.updateTbState(t, !0), this._startCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y), this._currentCursorPosition.copy(this._startCursorPosition), this.enableGrid && this.disposeGrid(), this.activateGizmos(!1);
					else {
						this._currentCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y);
						let e = this._currentCursorPosition.y - this._startCursorPosition.y, t = 1;
						e < 0 ? t = 1 / this.scaleFactor ** (-e * 8) : e > 0 && (t = this.scaleFactor ** (e * 8)), this._v3_1.setFromMatrixPosition(this._cameraMatrixState);
						let n = this._v3_1.distanceTo(this._gizmos.position), r = n / t;
						r = Fr.clamp(r, this.minDistance, this.maxDistance);
						let i = n * Math.tan(Fr.DEG2RAD * this._fovState * .5), a = Fr.RAD2DEG * (2 * Math.atan(i / r));
						a = Fr.clamp(a, this.minFov, this.maxFov);
						let o = i / Math.tan(Fr.DEG2RAD * (a / 2));
						t = n / o, this._v3_2.setFromMatrixPosition(this._gizmoMatrixState), this.setFov(a), this.applyTransformMatrix(this.scale(t, this._v3_2, !1)), R_.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(o / n), this._m4_1.makeTranslation(R_.x, R_.y, R_.z);
					}
				}
			}
			this.dispatchEvent(P_);
		}
	}
	onSinglePanEnd() {
		if (this._state == Q.ROTATE) {
			if (!this.enableRotate) return;
			if (this.enableAnimations) {
				if (performance.now() - this._timeCurrent < 120) {
					let e = Math.abs((this._wPrev + this._wCurr) / 2), t = this;
					this._animationId = window.requestAnimationFrame(function(n) {
						t.updateTbState(Q.ANIMATION_ROTATE, !0);
						let r = t.calculateRotationAxis(t._cursorPosPrev, t._cursorPosCurr);
						t.onRotationAnim(n, r, Math.min(e, t.wMax));
					});
				} else this.updateTbState(Q.IDLE, !1), this.activateGizmos(!1), this.dispatchEvent(P_);
			} else this.updateTbState(Q.IDLE, !1), this.activateGizmos(!1), this.dispatchEvent(P_);
		} else this._state != Q.PAN && this._state != Q.IDLE || (this.updateTbState(Q.IDLE, !1), this.enableGrid && this.disposeGrid(), this.activateGizmos(!1), this.dispatchEvent(P_));
		this.dispatchEvent(I_);
	}
	onDoubleTap(e) {
		if (this.enabled && this.enablePan && this.enableFocus && this.scene != null) {
			this.dispatchEvent(F_), this.setCenter(e.clientX, e.clientY);
			let t = this.unprojectOnObj(this.getCursorNDC($.x, $.y, this.domElement), this.object);
			if (t != null && this.enableAnimations) {
				let e = this;
				this._animationId != -1 && window.cancelAnimationFrame(this._animationId), this._timeStart = -1, this._animationId = window.requestAnimationFrame(function(n) {
					e.updateTbState(Q.ANIMATION_FOCUS, !0), e.onFocusAnim(n, t, e._cameraMatrixState, e._gizmoMatrixState);
				});
			} else t == null || this.enableAnimations || (this.updateTbState(Q.FOCUS, !0), this.focus(t, this.scaleFactor), this.updateTbState(Q.IDLE, !1), this.dispatchEvent(P_));
		}
		this.dispatchEvent(I_);
	}
	onDoublePanStart() {
		this.enabled && this.enablePan && (this.dispatchEvent(F_), this.updateTbState(Q.PAN, !0), this.setCenter((this._touchCurrent[0].clientX + this._touchCurrent[1].clientX) / 2, (this._touchCurrent[0].clientY + this._touchCurrent[1].clientY) / 2), this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement, !0)), this._currentCursorPosition.copy(this._startCursorPosition), this.activateGizmos(!1));
	}
	onDoublePanMove() {
		this.enabled && this.enablePan && (this.setCenter((this._touchCurrent[0].clientX + this._touchCurrent[1].clientX) / 2, (this._touchCurrent[0].clientY + this._touchCurrent[1].clientY) / 2), this._state != Q.PAN && (this.updateTbState(Q.PAN, !0), this._startCursorPosition.copy(this._currentCursorPosition)), this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement, !0)), this.applyTransformMatrix(this.pan(this._startCursorPosition, this._currentCursorPosition, !0)), this.dispatchEvent(P_));
	}
	onDoublePanEnd() {
		this.updateTbState(Q.IDLE, !1), this.dispatchEvent(I_);
	}
	onRotateStart() {
		this.enabled && this.enableRotate && (this.dispatchEvent(F_), this.updateTbState(Q.ZROTATE, !0), this._startFingerRotation = this.getAngle(this._touchCurrent[1], this._touchCurrent[0]) + this.getAngle(this._touchStart[1], this._touchStart[0]), this._currentFingerRotation = this._startFingerRotation, this.object.getWorldDirection(this._rotationAxis), this.enablePan || this.enableZoom || this.activateGizmos(!0));
	}
	onRotateMove() {
		if (this.enabled && this.enableRotate) {
			let e;
			this.setCenter((this._touchCurrent[0].clientX + this._touchCurrent[1].clientX) / 2, (this._touchCurrent[0].clientY + this._touchCurrent[1].clientY) / 2), this._state != Q.ZROTATE && (this.updateTbState(Q.ZROTATE, !0), this._startFingerRotation = this._currentFingerRotation), this._currentFingerRotation = this.getAngle(this._touchCurrent[1], this._touchCurrent[0]) + this.getAngle(this._touchStart[1], this._touchStart[0]), this.enablePan ? (this._v3_2.setFromMatrixPosition(this._gizmoMatrixState), e = this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1 / this.object.zoom).add(this._v3_2)) : e = new H().setFromMatrixPosition(this._gizmoMatrixState);
			let t = Fr.DEG2RAD * (this._startFingerRotation - this._currentFingerRotation);
			this.applyTransformMatrix(this.zRotate(e, t)), this.dispatchEvent(P_);
		}
	}
	onRotateEnd() {
		this.updateTbState(Q.IDLE, !1), this.activateGizmos(!1), this.dispatchEvent(I_);
	}
	onPinchStart() {
		this.enabled && this.enableZoom && (this.dispatchEvent(F_), this.updateTbState(Q.SCALE, !0), this._startFingerDistance = this.calculatePointersDistance(this._touchCurrent[0], this._touchCurrent[1]), this._currentFingerDistance = this._startFingerDistance, this.activateGizmos(!1));
	}
	onPinchMove() {
		if (this.enabled && this.enableZoom) {
			this.setCenter((this._touchCurrent[0].clientX + this._touchCurrent[1].clientX) / 2, (this._touchCurrent[0].clientY + this._touchCurrent[1].clientY) / 2), this._state != Q.SCALE && (this._startFingerDistance = this._currentFingerDistance, this.updateTbState(Q.SCALE, !0)), this._currentFingerDistance = Math.max(this.calculatePointersDistance(this._touchCurrent[0], this._touchCurrent[1]), 12 * this._devPxRatio);
			let e = this._currentFingerDistance / this._startFingerDistance, t;
			this.enablePan ? this.object.isOrthographicCamera ? t = this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1 / this.object.zoom).add(this._gizmos.position) : this.object.isPerspectiveCamera && (t = this.unprojectOnTbPlane(this.object, $.x, $.y, this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)) : t = this._gizmos.position, this.applyTransformMatrix(this.scale(e, t)), this.dispatchEvent(P_);
		}
	}
	onPinchEnd() {
		this.updateTbState(Q.IDLE, !1), this.dispatchEvent(I_);
	}
	onTriplePanStart() {
		if (this.enabled && this.enableZoom) {
			this.dispatchEvent(F_), this.updateTbState(Q.SCALE, !0);
			let e = 0, t = 0, n = this._touchCurrent.length;
			for (let r = 0; r < n; r++) e += this._touchCurrent[r].clientX, t += this._touchCurrent[r].clientY;
			this.setCenter(e / n, t / n), this._startCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y), this._currentCursorPosition.copy(this._startCursorPosition);
		}
	}
	onTriplePanMove() {
		if (this.enabled && this.enableZoom) {
			let e = 0, t = 0, n = this._touchCurrent.length;
			for (let r = 0; r < n; r++) e += this._touchCurrent[r].clientX, t += this._touchCurrent[r].clientY;
			this.setCenter(e / n, t / n), this._currentCursorPosition.setY(.5 * this.getCursorNDC($.x, $.y, this.domElement).y);
			let r = this._currentCursorPosition.y - this._startCursorPosition.y, i = 1;
			r < 0 ? i = 1 / this.scaleFactor ** (-r * 8) : r > 0 && (i = this.scaleFactor ** (r * 8)), this._v3_1.setFromMatrixPosition(this._cameraMatrixState);
			let a = this._v3_1.distanceTo(this._gizmos.position), o = a / i;
			o = Fr.clamp(o, this.minDistance, this.maxDistance);
			let s = a * Math.tan(Fr.DEG2RAD * this._fovState * .5), c = Fr.RAD2DEG * (2 * Math.atan(s / o));
			c = Fr.clamp(c, this.minFov, this.maxFov);
			let l = s / Math.tan(Fr.DEG2RAD * (c / 2));
			i = a / l, this._v3_2.setFromMatrixPosition(this._gizmoMatrixState), this.setFov(c), this.applyTransformMatrix(this.scale(i, this._v3_2, !1)), R_.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(l / a), this._m4_1.makeTranslation(R_.x, R_.y, R_.z), this.dispatchEvent(P_);
		}
	}
	onTriplePanEnd() {
		this.updateTbState(Q.IDLE, !1), this.dispatchEvent(I_);
	}
	setCenter(e, t) {
		$.x = e, $.y = t;
	}
	initializeMouseActions() {
		this.setMouseAction("PAN", 0, "CTRL"), this.setMouseAction("PAN", 2), this.setMouseAction("ROTATE", 0), this.setMouseAction("ZOOM", "WHEEL"), this.setMouseAction("ZOOM", 1), this.setMouseAction("FOV", "WHEEL", "SHIFT"), this.setMouseAction("FOV", 1, "SHIFT");
	}
	compareMouseAction(e, t) {
		return e.operation == t.operation && e.mouse == t.mouse && e.key == t.key;
	}
	setMouseAction(e, t, n = null) {
		let r;
		if (![
			"PAN",
			"ROTATE",
			"ZOOM",
			"FOV"
		].includes(e) || ![
			0,
			1,
			2,
			"WHEEL"
		].includes(t) || ![
			"CTRL",
			"SHIFT",
			null
		].includes(n) || t == "WHEEL" && e != "ZOOM" && e != "FOV") return !1;
		switch (e) {
			case "PAN":
				r = Q.PAN;
				break;
			case "ROTATE":
				r = Q.ROTATE;
				break;
			case "ZOOM":
				r = Q.SCALE;
				break;
			case "FOV": r = Q.FOV;
		}
		let i = {
			operation: e,
			mouse: t,
			key: n,
			state: r
		};
		for (let e = 0; e < this.mouseActions.length; e++) if (this.mouseActions[e].mouse == i.mouse && this.mouseActions[e].key == i.key) return this.mouseActions.splice(e, 1, i), !0;
		return this.mouseActions.push(i), !0;
	}
	unsetMouseAction(e, t = null) {
		for (let n = 0; n < this.mouseActions.length; n++) if (this.mouseActions[n].mouse == e && this.mouseActions[n].key == t) return this.mouseActions.splice(n, 1), !0;
		return !1;
	}
	getOpFromAction(e, t) {
		let n;
		for (let r = 0; r < this.mouseActions.length; r++) if (n = this.mouseActions[r], n.mouse == e && n.key == t) return n.operation;
		if (t != null) {
			for (let t = 0; t < this.mouseActions.length; t++) if (n = this.mouseActions[t], n.mouse == e && n.key == null) return n.operation;
		}
		return null;
	}
	getOpStateFromAction(e, t) {
		let n;
		for (let r = 0; r < this.mouseActions.length; r++) if (n = this.mouseActions[r], n.mouse == e && n.key == t) return n.state;
		if (t != null) {
			for (let t = 0; t < this.mouseActions.length; t++) if (n = this.mouseActions[t], n.mouse == e && n.key == null) return n.state;
		}
		return null;
	}
	getAngle(e, t) {
		return 180 * Math.atan2(t.clientY - e.clientY, t.clientX - e.clientX) / Math.PI;
	}
	updateTouchEvent(e) {
		for (let t = 0; t < this._touchCurrent.length; t++) if (this._touchCurrent[t].pointerId == e.pointerId) {
			this._touchCurrent.splice(t, 1, e);
			break;
		}
	}
	applyTransformMatrix(e) {
		if (e.camera != null && (this._m4_1.copy(this._cameraMatrixState).premultiply(e.camera), this._m4_1.decompose(this.object.position, this.object.quaternion, this.object.scale), this.object.updateMatrix(), this._state != Q.ROTATE && this._state != Q.ZROTATE && this._state != Q.ANIMATION_ROTATE || this.object.up.copy(this._upState).applyQuaternion(this.object.quaternion)), e.gizmos != null && (this._m4_1.copy(this._gizmoMatrixState).premultiply(e.gizmos), this._m4_1.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this._gizmos.updateMatrix()), this._state == Q.SCALE || this._state == Q.FOCUS || this._state == Q.ANIMATION_FOCUS) {
			if (this._tbRadius = this.calculateTbRadius(this.object), this.adjustNearFar) {
				let e = this.object.position.distanceTo(this._gizmos.position), t = new ia();
				t.setFromObject(this._gizmos);
				let n = new Ba();
				t.getBoundingSphere(n);
				let r = Math.max(this._nearPos0, n.radius + n.center.length()), i = e - this._initialNear, a = Math.min(r, i);
				this.object.near = e - a;
				let o = Math.min(this._farPos0, -n.radius + n.center.length()), s = e - this._initialFar, c = Math.min(o, s);
				this.object.far = e - c, this.object.updateProjectionMatrix();
			} else {
				let e = !1;
				this.object.near != this._initialNear && (this.object.near = this._initialNear, e = !0), this.object.far != this._initialFar && (this.object.far = this._initialFar, e = !0), e && this.object.updateProjectionMatrix();
			}
		}
	}
	calculateAngularSpeed(e, t, n, r) {
		let i = (r - n) / 1e3;
		return i == 0 ? 0 : (t - e) / i;
	}
	calculatePointersDistance(e, t) {
		return Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2);
	}
	calculateRotationAxis(e, t) {
		return this._rotationMatrix.extractRotation(this._cameraMatrixState), this._quat.setFromRotationMatrix(this._rotationMatrix), this._rotationAxis.crossVectors(e, t).applyQuaternion(this._quat), this._rotationAxis.normalize().clone();
	}
	calculateTbRadius(e) {
		let t = e.position.distanceTo(this._gizmos.position);
		if (e.type == "PerspectiveCamera") {
			let n = Fr.DEG2RAD * e.fov * .5, r = Math.atan(e.aspect * Math.tan(n));
			return Math.tan(Math.min(n, r)) * t * this.radiusFactor;
		}
		if (e.type == "OrthographicCamera") return Math.min(e.top, e.right) * this.radiusFactor;
	}
	focus(e, t, n = 1) {
		R_.copy(e).sub(this._gizmos.position).multiplyScalar(n), this._translationMatrix.makeTranslation(R_.x, R_.y, R_.z), z_.copy(this._gizmoMatrixState), this._gizmoMatrixState.premultiply(this._translationMatrix), this._gizmoMatrixState.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), B_.copy(this._cameraMatrixState), this._cameraMatrixState.premultiply(this._translationMatrix), this._cameraMatrixState.decompose(this.object.position, this.object.quaternion, this.object.scale), this.enableZoom && this.applyTransformMatrix(this.scale(t, this._gizmos.position)), this._gizmoMatrixState.copy(z_), this._cameraMatrixState.copy(B_);
	}
	drawGrid() {
		if (this.scene != null) {
			let e = 8947848, t, n, r, i;
			if (this.object.isOrthographicCamera) {
				let e = this.object.right - this.object.left, a = this.object.bottom - this.object.top;
				r = Math.max(e, a), i = r / 20, t = r / this.object.zoom * 3, n = t / i * this.object.zoom;
			} else if (this.object.isPerspectiveCamera) {
				let e = this.object.position.distanceTo(this._gizmos.position), a = Fr.DEG2RAD * this.object.fov * .5, o = Math.atan(this.object.aspect * Math.tan(a));
				r = Math.tan(Math.max(a, o)) * e * 2, i = r / 20, t = r * 3, n = t / i;
			}
			this._grid ?? (this._grid = new Hf(t, n, e, e), this._grid.position.copy(this._gizmos.position), this._gridPosition.copy(this._grid.position), this._grid.quaternion.copy(this.object.quaternion), this._grid.rotateX(.5 * Math.PI), this.scene.add(this._grid));
		}
	}
	dispose() {
		this._animationId != -1 && window.cancelAnimationFrame(this._animationId), this.disconnect(), this.scene !== null && this.scene.remove(this._gizmos), this.disposeGrid();
	}
	disposeGrid() {
		this._grid != null && this.scene != null && (this.scene.remove(this._grid), this._grid = null);
	}
	easeOutCubic(e) {
		return 1 - (1 - e) ** 3;
	}
	activateGizmos(e) {
		let t = this._gizmos.children[0], n = this._gizmos.children[1], r = this._gizmos.children[2];
		e ? (t.material.setValues({ opacity: 1 }), n.material.setValues({ opacity: 1 }), r.material.setValues({ opacity: 1 })) : (t.material.setValues({ opacity: .6 }), n.material.setValues({ opacity: .6 }), r.material.setValues({ opacity: .6 }));
	}
	getCursorNDC(e, t, n) {
		let r = n.getBoundingClientRect();
		return this._v2_1.setX((e - r.left) / r.width * 2 - 1), this._v2_1.setY((r.bottom - t) / r.height * 2 - 1), this._v2_1.clone();
	}
	getCursorPosition(e, t, n) {
		return this._v2_1.copy(this.getCursorNDC(e, t, n)), this._v2_1.x *= .5 * (this.object.right - this.object.left), this._v2_1.y *= .5 * (this.object.top - this.object.bottom), this._v2_1.clone();
	}
	setCamera(e) {
		e.lookAt(this.target), e.updateMatrix(), e.type == "PerspectiveCamera" && (this._fov0 = e.fov, this._fovState = e.fov), this._cameraMatrixState0.copy(e.matrix), this._cameraMatrixState.copy(this._cameraMatrixState0), this._cameraProjectionState.copy(e.projectionMatrix), this._zoom0 = e.zoom, this._zoomState = this._zoom0, this._initialNear = e.near, this._nearPos0 = e.position.distanceTo(this.target) - e.near, this._nearPos = this._initialNear, this._initialFar = e.far, this._farPos0 = e.position.distanceTo(this.target) - e.far, this._farPos = this._initialFar, this._up0.copy(e.up), this._upState.copy(e.up), this.object = e, this.object.updateProjectionMatrix(), this._tbRadius = this.calculateTbRadius(e), this.makeGizmos(this.target, this._tbRadius);
	}
	setGizmosVisible(e) {
		this._gizmos.visible = e, this.dispatchEvent(P_);
	}
	setTbRadius(e) {
		this.radiusFactor = e, this._tbRadius = this.calculateTbRadius(this.object);
		let t = new jc(0, 0, this._tbRadius, this._tbRadius).getPoints(this._curvePts), n = new J().setFromPoints(t);
		for (let e in this._gizmos.children) this._gizmos.children[e].geometry = n;
		this.dispatchEvent(P_);
	}
	makeGizmos(e, t) {
		let n = new jc(0, 0, t, t).getPoints(this._curvePts), r = new J().setFromPoints(n), i = new Bs({
			color: 16744576,
			fog: !1,
			transparent: !0,
			opacity: .6
		}), a = new Bs({
			color: 8454016,
			fog: !1,
			transparent: !0,
			opacity: .6
		}), o = new Bs({
			color: 8421631,
			fog: !1,
			transparent: !0,
			opacity: .6
		}), s = new Js(r, i), c = new Js(r, a), l = new Js(r, o), u = .5 * Math.PI;
		if (s.rotation.x = u, c.rotation.y = u, this._gizmoMatrixState0.identity().setPosition(e), this._gizmoMatrixState.copy(this._gizmoMatrixState0), this.object.zoom !== 1) {
			let t = 1 / this.object.zoom;
			this._scaleMatrix.makeScale(t, t, t), this._translationMatrix.makeTranslation(-e.x, -e.y, -e.z), this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix), this._translationMatrix.makeTranslation(e.x, e.y, e.z), this._gizmoMatrixState.premultiply(this._translationMatrix);
		}
		this._gizmoMatrixState.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this._gizmos.traverse(function(e) {
			e.isLine && (e.geometry.dispose(), e.material.dispose());
		}), this._gizmos.clear(), this._gizmos.add(s), this._gizmos.add(c), this._gizmos.add(l);
	}
	onFocusAnim(e, t, n, r) {
		if (this._timeStart == -1 && (this._timeStart = e), this._state == Q.ANIMATION_FOCUS) {
			let i = (e - this._timeStart) / this.focusAnimationTime;
			if (this._gizmoMatrixState.copy(r), i >= 1) this._gizmoMatrixState.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this.focus(t, this.scaleFactor), this._timeStart = -1, this.updateTbState(Q.IDLE, !1), this.activateGizmos(!1), this.dispatchEvent(P_);
			else {
				let e = this.easeOutCubic(i), a = 1 - e + this.scaleFactor * e;
				this._gizmoMatrixState.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this.focus(t, a, e), this.dispatchEvent(P_);
				let o = this;
				this._animationId = window.requestAnimationFrame(function(e) {
					o.onFocusAnim(e, t, n, r.clone());
				});
			}
		} else this._animationId = -1, this._timeStart = -1;
	}
	onRotationAnim(e, t, n) {
		if (this._timeStart == -1 && (this._anglePrev = 0, this._angleCurrent = 0, this._timeStart = e), this._state == Q.ANIMATION_ROTATE) {
			let r = (e - this._timeStart) / 1e3;
			if (n + -this.dampingFactor * r > 0) {
				this._angleCurrent = .5 * -this.dampingFactor * r ** 2 + n * r + 0, this.applyTransformMatrix(this.rotate(t, this._angleCurrent)), this.dispatchEvent(P_);
				let e = this;
				this._animationId = window.requestAnimationFrame(function(r) {
					e.onRotationAnim(r, t, n);
				});
			} else this._animationId = -1, this._timeStart = -1, this.updateTbState(Q.IDLE, !1), this.activateGizmos(!1), this.dispatchEvent(P_);
		} else this._animationId = -1, this._timeStart = -1, this._state != Q.ROTATE && (this.activateGizmos(!1), this.dispatchEvent(P_));
	}
	pan(e, t, n = !1) {
		let r = e.clone().sub(t);
		if (this.object.isOrthographicCamera) r.multiplyScalar(1 / this.object.zoom);
		else if (this.object.isPerspectiveCamera && n) {
			this._v3_1.setFromMatrixPosition(this._cameraMatrixState0), this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);
			let e = this._v3_1.distanceTo(this._v3_2) / this.object.position.distanceTo(this._gizmos.position);
			r.multiplyScalar(1 / e);
		}
		return this._v3_1.set(r.x, r.y, 0).applyQuaternion(this.object.quaternion), this._m4_1.makeTranslation(this._v3_1.x, this._v3_1.y, this._v3_1.z), this.setTransformationMatrices(this._m4_1, this._m4_1), N_;
	}
	reset() {
		this.target.copy(this._target0), this.object.zoom = this._zoom0, this.object.isPerspectiveCamera && (this.object.fov = this._fov0), this.object.near = this._nearPos, this.object.far = this._farPos, this._cameraMatrixState.copy(this._cameraMatrixState0), this._cameraMatrixState.decompose(this.object.position, this.object.quaternion, this.object.scale), this.object.up.copy(this._up0), this.object.updateMatrix(), this.object.updateProjectionMatrix(), this._gizmoMatrixState.copy(this._gizmoMatrixState0), this._gizmoMatrixState0.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this._gizmos.updateMatrix(), this._tbRadius = this.calculateTbRadius(this.object), this.makeGizmos(this._gizmos.position, this._tbRadius), this.object.lookAt(this._gizmos.position), this.updateTbState(Q.IDLE, !1), this.dispatchEvent(P_);
	}
	rotate(e, t) {
		let n = this._gizmos.position;
		return this._translationMatrix.makeTranslation(-n.x, -n.y, -n.z), this._rotationMatrix.makeRotationAxis(e, -t), this._m4_1.makeTranslation(n.x, n.y, n.z), this._m4_1.multiply(this._rotationMatrix), this._m4_1.multiply(this._translationMatrix), this.setTransformationMatrices(this._m4_1), N_;
	}
	copyState() {
		let e;
		this.object.isOrthographicCamera ? e = JSON.stringify({ arcballState: {
			cameraFar: this.object.far,
			cameraMatrix: this.object.matrix,
			cameraNear: this.object.near,
			cameraUp: this.object.up,
			cameraZoom: this.object.zoom,
			gizmoMatrix: this._gizmos.matrix,
			target: this.target
		} }) : this.object.isPerspectiveCamera && (e = JSON.stringify({ arcballState: {
			cameraFar: this.object.far,
			cameraFov: this.object.fov,
			cameraMatrix: this.object.matrix,
			cameraNear: this.object.near,
			cameraUp: this.object.up,
			cameraZoom: this.object.zoom,
			gizmoMatrix: this._gizmos.matrix,
			target: this.target
		} })), navigator.clipboard.writeText(e);
	}
	pasteState() {
		let e = this;
		navigator.clipboard.readText().then(function(t) {
			e.setStateFromJSON(t);
		});
	}
	saveState() {
		this.object.updateMatrix(), this._gizmos.updateMatrix(), this._target0.copy(this.target), this._cameraMatrixState0.copy(this.object.matrix), this._gizmoMatrixState0.copy(this._gizmos.matrix), this._nearPos = this.object.near, this._farPos = this.object.far, this._zoom0 = this.object.zoom, this._up0.copy(this.object.up), this.object.isPerspectiveCamera && (this._fov0 = this.object.fov);
	}
	scale(e, t, n = !0) {
		V_.copy(t);
		let r = 1 / e;
		if (this.object.isOrthographicCamera) {
			this.object.zoom = this._zoomState, this.object.zoom *= e, this.object.zoom > this.maxZoom ? (this.object.zoom = this.maxZoom, r = this._zoomState / this.maxZoom) : this.object.zoom < this.minZoom && (this.object.zoom = this.minZoom, r = this._zoomState / this.minZoom), this.object.updateProjectionMatrix(), this._v3_1.setFromMatrixPosition(this._gizmoMatrixState), this._scaleMatrix.makeScale(r, r, r), this._translationMatrix.makeTranslation(-this._v3_1.x, -this._v3_1.y, -this._v3_1.z), this._m4_2.makeTranslation(this._v3_1.x, this._v3_1.y, this._v3_1.z).multiply(this._scaleMatrix), this._m4_2.multiply(this._translationMatrix), V_.sub(this._v3_1);
			let t = V_.clone().multiplyScalar(r);
			return V_.sub(t), this._m4_1.makeTranslation(V_.x, V_.y, V_.z), this._m4_2.premultiply(this._m4_1), this.setTransformationMatrices(this._m4_1, this._m4_2), N_;
		}
		if (this.object.isPerspectiveCamera) {
			this._v3_1.setFromMatrixPosition(this._cameraMatrixState), this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);
			let e = this._v3_1.distanceTo(V_), t = e - e * r, i = e - t;
			if (i < this.minDistance ? (r = this.minDistance / e, t = e - e * r) : i > this.maxDistance && (r = this.maxDistance / e, t = e - e * r), R_.copy(V_).sub(this._v3_1).normalize().multiplyScalar(t), this._m4_1.makeTranslation(R_.x, R_.y, R_.z), n) {
				let n = this._v3_2;
				e = n.distanceTo(V_), t = e - e * r, R_.copy(V_).sub(this._v3_2).normalize().multiplyScalar(t), this._translationMatrix.makeTranslation(n.x, n.y, n.z), this._scaleMatrix.makeScale(r, r, r), this._m4_2.makeTranslation(R_.x, R_.y, R_.z).multiply(this._translationMatrix), this._m4_2.multiply(this._scaleMatrix), this._translationMatrix.makeTranslation(-n.x, -n.y, -n.z), this._m4_2.multiply(this._translationMatrix), this.setTransformationMatrices(this._m4_1, this._m4_2);
			} else this.setTransformationMatrices(this._m4_1);
			return N_;
		}
	}
	setFov(e) {
		this.object.isPerspectiveCamera && (this.object.fov = Fr.clamp(e, this.minFov, this.maxFov), this.object.updateProjectionMatrix());
	}
	setTransformationMatrices(e = null, t = null) {
		e == null ? N_.camera = null : N_.camera == null ? N_.camera = e.clone() : N_.camera.copy(e), t == null ? N_.gizmos = null : N_.gizmos == null ? N_.gizmos = t.clone() : N_.gizmos.copy(t);
	}
	zRotate(e, t) {
		return this._rotationMatrix.makeRotationAxis(this._rotationAxis, t), this._translationMatrix.makeTranslation(-e.x, -e.y, -e.z), this._m4_1.makeTranslation(e.x, e.y, e.z), this._m4_1.multiply(this._rotationMatrix), this._m4_1.multiply(this._translationMatrix), this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(e), this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis, t), this._v3_2.sub(this._v3_1), this._m4_2.makeTranslation(this._v3_2.x, this._v3_2.y, this._v3_2.z), this.setTransformationMatrices(this._m4_1, this._m4_2), N_;
	}
	getRaycaster() {
		return L_;
	}
	unprojectOnObj(e, t) {
		let n = this.getRaycaster();
		n.near = t.near, n.far = t.far, n.setFromCamera(e, t);
		let r = n.intersectObjects(this.scene.children, !0);
		for (let e = 0; e < r.length; e++) if (r[e].object.uuid != this._gizmos.uuid && r[e].face != null) return r[e].point.clone();
		return null;
	}
	unprojectOnTbSurface(e, t, n, r, i) {
		if (e.type == "OrthographicCamera") {
			this._v2_1.copy(this.getCursorPosition(t, n, r)), this._v3_1.set(this._v2_1.x, this._v2_1.y, 0);
			let e = this._v2_1.x ** 2, i = this._v2_1.y ** 2, a = this._tbRadius ** 2;
			return e + i <= .5 * a ? this._v3_1.setZ(Math.sqrt(a - (e + i))) : this._v3_1.setZ(.5 * a / Math.sqrt(e + i)), this._v3_1;
		}
		if (e.type == "PerspectiveCamera") {
			this._v2_1.copy(this.getCursorNDC(t, n, r)), this._v3_1.set(this._v2_1.x, this._v2_1.y, -1), this._v3_1.applyMatrix4(e.projectionMatrixInverse);
			let a = this._v3_1.clone().normalize(), o = e.position.distanceTo(this._gizmos.position), s = i ** 2, c = this._v3_1.z, l = Math.sqrt(this._v3_1.x ** 2 + this._v3_1.y ** 2);
			if (l == 0) return a.set(this._v3_1.x, this._v3_1.y, i), a;
			let u = c / l, d = o, f = u ** 2 + 1, p = 2 * u * d, m = d ** 2 - s, h = p ** 2 - 4 * f * m;
			if (h >= 0 && (this._v2_1.setX((-p - Math.sqrt(h)) / (2 * f)), this._v2_1.setY(u * this._v2_1.x + d), Fr.RAD2DEG * this._v2_1.angle() >= 45)) {
				let e = Math.sqrt(this._v2_1.x ** 2 + (o - this._v2_1.y) ** 2);
				return a.multiplyScalar(e), a.z += o, a;
			}
			f = u, p = d, m = .5 * -s, h = p ** 2 - 4 * f * m, this._v2_1.setX((-p - Math.sqrt(h)) / (2 * f)), this._v2_1.setY(u * this._v2_1.x + d);
			let g = Math.sqrt(this._v2_1.x ** 2 + (o - this._v2_1.y) ** 2);
			return a.multiplyScalar(g), a.z += o, a;
		}
	}
	unprojectOnTbPlane(e, t, n, r, i = !1) {
		if (e.type == "OrthographicCamera") return this._v2_1.copy(this.getCursorPosition(t, n, r)), this._v3_1.set(this._v2_1.x, this._v2_1.y, 0), this._v3_1.clone();
		if (e.type == "PerspectiveCamera") {
			this._v2_1.copy(this.getCursorNDC(t, n, r)), this._v3_1.set(this._v2_1.x, this._v2_1.y, -1), this._v3_1.applyMatrix4(e.projectionMatrixInverse);
			let a = this._v3_1.clone().normalize(), o = this._v3_1.z, s = Math.sqrt(this._v3_1.x ** 2 + this._v3_1.y ** 2), c;
			if (c = i ? this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)) : e.position.distanceTo(this._gizmos.position), s == 0) return a.set(0, 0, 0), a;
			let l = c, u = -l / (o / s), d = Math.sqrt(l ** 2 + u ** 2);
			return a.multiplyScalar(d), a.z = 0, a;
		}
	}
	updateMatrixState() {
		this._cameraMatrixState.copy(this.object.matrix), this._gizmoMatrixState.copy(this._gizmos.matrix), this.object.isOrthographicCamera ? (this._cameraProjectionState.copy(this.object.projectionMatrix), this.object.updateProjectionMatrix(), this._zoomState = this.object.zoom) : this.object.isPerspectiveCamera && (this._fovState = this.object.fov);
	}
	updateTbState(e, t) {
		this._state = e, t && this.updateMatrixState();
	}
	update() {
		if (!1 === this.target.equals(this._currentTarget) && (this._gizmos.position.copy(this.target), this._tbRadius = this.calculateTbRadius(this.object), this.makeGizmos(this.target, this._tbRadius), this._currentTarget.copy(this.target)), this.object.isOrthographicCamera) {
			if (this.object.zoom > this.maxZoom || this.object.zoom < this.minZoom) {
				let e = Fr.clamp(this.object.zoom, this.minZoom, this.maxZoom);
				this.applyTransformMatrix(this.scale(e / this.object.zoom, this._gizmos.position, !0));
			}
		} else if (this.object.isPerspectiveCamera) {
			let e = this.object.position.distanceTo(this._gizmos.position);
			if (e > this.maxDistance + H_ || e < this.minDistance - H_) {
				let t = Fr.clamp(e, this.minDistance, this.maxDistance);
				this.applyTransformMatrix(this.scale(t / e, this._gizmos.position)), this.updateMatrixState();
			}
			(this.object.fov < this.minFov || this.object.fov > this.maxFov) && (this.object.fov = Fr.clamp(this.object.fov, this.minFov, this.maxFov), this.object.updateProjectionMatrix());
			let t = this._tbRadius;
			if (this._tbRadius = this.calculateTbRadius(this.object), t < this._tbRadius - H_ || t > this._tbRadius + H_) {
				let e = (this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z) / 3, t = this._tbRadius / e, n = new jc(0, 0, t, t).getPoints(this._curvePts), r = new J().setFromPoints(n);
				for (let e in this._gizmos.children) this._gizmos.children[e].geometry = r;
			}
		}
		this.object.lookAt(this._gizmos.position);
	}
	setStateFromJSON(e) {
		let t = JSON.parse(e);
		if (t.arcballState != null) {
			this.target.fromArray(t.arcballState.target), this._cameraMatrixState.fromArray(t.arcballState.cameraMatrix.elements), this._cameraMatrixState.decompose(this.object.position, this.object.quaternion, this.object.scale), this.object.up.copy(t.arcballState.cameraUp), this.object.near = t.arcballState.cameraNear, this.object.far = t.arcballState.cameraFar, this.object.zoom = t.arcballState.cameraZoom, this.object.isPerspectiveCamera && (this.object.fov = t.arcballState.cameraFov), this._gizmoMatrixState.fromArray(t.arcballState.gizmoMatrix.elements), this._gizmoMatrixState.decompose(this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale), this.object.updateMatrix(), this.object.updateProjectionMatrix(), this._gizmos.updateMatrix(), this._tbRadius = this.calculateTbRadius(this.object);
			let e = new G().copy(this._gizmoMatrixState0);
			this.makeGizmos(this._gizmos.position, this._tbRadius), this._gizmoMatrixState0.copy(e), this.object.lookAt(this._gizmos.position), this.updateTbState(Q.IDLE, !1), this.dispatchEvent(P_);
		}
	}
};
function W_() {
	let e = (this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z) / 3;
	this._tbRadius = this.calculateTbRadius(this.object);
	let t = this._tbRadius / e, n = new jc(0, 0, t, t).getPoints(this._curvePts), r = new J().setFromPoints(n);
	for (let e in this._gizmos.children) this._gizmos.children[e].geometry = r;
	this.dispatchEvent(P_);
}
function G_(e) {
	if (this.enabled) {
		for (let t = 0; t < this.mouseActions.length; t++) if (this.mouseActions[t].mouse == 2) {
			e.preventDefault();
			break;
		}
	}
}
function K_() {
	this._touchStart.splice(0, this._touchStart.length), this._touchCurrent.splice(0, this._touchCurrent.length), this._input = M_.NONE;
}
function q_(e) {
	if (e.button == 0 && e.isPrimary ? (this._downValid = !0, this._downEvents.push(e), this._downStart = performance.now()) : this._downValid = !1, e.pointerType == "touch" && this._input != M_.CURSOR) switch (this._touchStart.push(e), this._touchCurrent.push(e), this._input) {
		case M_.NONE:
			this._input = M_.ONE_FINGER, this.onSinglePanStart(e, "ROTATE"), window.addEventListener("pointermove", this._onPointerMove), window.addEventListener("pointerup", this._onPointerUp);
			break;
		case M_.ONE_FINGER:
		case M_.ONE_FINGER_SWITCHED:
			this._input = M_.TWO_FINGER, this.onRotateStart(), this.onPinchStart(), this.onDoublePanStart();
			break;
		case M_.TWO_FINGER: this._input = M_.MULT_FINGER, this.onTriplePanStart(e);
	}
	else if (e.pointerType != "touch" && this._input == M_.NONE) {
		let t = null;
		e.ctrlKey || e.metaKey ? t = "CTRL" : e.shiftKey && (t = "SHIFT"), this._mouseOp = this.getOpFromAction(e.button, t), this._mouseOp != null && (window.addEventListener("pointermove", this._onPointerMove), window.addEventListener("pointerup", this._onPointerUp), this._input = M_.CURSOR, this._button = e.button, this.onSinglePanStart(e, this._mouseOp));
	}
}
function J_(e) {
	if (e.pointerType == "touch" && this._input != M_.CURSOR) switch (this._input) {
		case M_.ONE_FINGER:
			this.updateTouchEvent(e), this.onSinglePanMove(e, Q.ROTATE);
			break;
		case M_.ONE_FINGER_SWITCHED:
			if (this.calculatePointersDistance(this._touchCurrent[0], e) * this._devPxRatio >= this._switchSensibility) {
				this._input = M_.ONE_FINGER, this.updateTouchEvent(e), this.onSinglePanStart(e, "ROTATE");
				break;
			}
			break;
		case M_.TWO_FINGER:
			this.updateTouchEvent(e), this.onRotateMove(), this.onPinchMove(), this.onDoublePanMove();
			break;
		case M_.MULT_FINGER: this.updateTouchEvent(e), this.onTriplePanMove(e);
	}
	else if (e.pointerType != "touch" && this._input == M_.CURSOR) {
		let t = null;
		e.ctrlKey || e.metaKey ? t = "CTRL" : e.shiftKey && (t = "SHIFT");
		let n = this.getOpStateFromAction(this._button, t);
		n != null && this.onSinglePanMove(e, n);
	}
	this._downValid && this.calculatePointersDistance(this._downEvents[this._downEvents.length - 1], e) * this._devPxRatio > this._movementThreshold && (this._downValid = !1);
}
function Y_(e) {
	if (e.pointerType == "touch" && this._input != M_.CURSOR) {
		let t = this._touchCurrent.length;
		for (let n = 0; n < t; n++) if (this._touchCurrent[n].pointerId == e.pointerId) {
			this._touchCurrent.splice(n, 1), this._touchStart.splice(n, 1);
			break;
		}
		switch (this._input) {
			case M_.ONE_FINGER:
			case M_.ONE_FINGER_SWITCHED:
				window.removeEventListener("pointermove", this._onPointerMove), window.removeEventListener("pointerup", this._onPointerUp), this._input = M_.NONE, this.onSinglePanEnd();
				break;
			case M_.TWO_FINGER:
				this.onDoublePanEnd(e), this.onPinchEnd(e), this.onRotateEnd(e), this._input = M_.ONE_FINGER_SWITCHED;
				break;
			case M_.MULT_FINGER: this._touchCurrent.length == 0 && (window.removeEventListener("pointermove", this._onPointerMove), window.removeEventListener("pointerup", this._onPointerUp), this._input = M_.NONE, this.onTriplePanEnd());
		}
	} else e.pointerType != "touch" && this._input == M_.CURSOR && (window.removeEventListener("pointermove", this._onPointerMove), window.removeEventListener("pointerup", this._onPointerUp), this._input = M_.NONE, this.onSinglePanEnd(), this._button = -1);
	if (e.isPrimary) {
		if (this._downValid) {
			if (e.timeStamp - this._downEvents[this._downEvents.length - 1].timeStamp <= this._maxDownTime) {
				if (this._nclicks == 0) this._nclicks = 1, this._clickStart = performance.now();
				else {
					let t = e.timeStamp - this._clickStart, n = this.calculatePointersDistance(this._downEvents[1], this._downEvents[0]) * this._devPxRatio;
					t <= this._maxInterval && n <= this._posThreshold ? (this._nclicks = 0, this._downEvents.splice(0, this._downEvents.length), this.onDoubleTap(e)) : (this._nclicks = 1, this._downEvents.shift(), this._clickStart = performance.now());
				}
			} else this._downValid = !1, this._nclicks = 0, this._downEvents.splice(0, this._downEvents.length);
		} else this._nclicks = 0, this._downEvents.splice(0, this._downEvents.length);
	}
}
function X_(e) {
	if (this.enabled && this.enableZoom) {
		let t = null;
		e.ctrlKey || e.metaKey ? t = "CTRL" : e.shiftKey && (t = "SHIFT");
		let n = this.getOpFromAction("WHEEL", t);
		if (n != null) {
			e.preventDefault(), this.dispatchEvent(F_);
			let t = e.deltaY / 125, r = 1;
			switch (t > 0 ? r = 1 / this.scaleFactor : t < 0 && (r = this.scaleFactor), n) {
				case "ZOOM":
					if (this.updateTbState(Q.SCALE, !0), t > 0 ? r = 1 / this.scaleFactor ** +t : t < 0 && (r = this.scaleFactor ** +-t), this.cursorZoom && this.enablePan) {
						let t;
						this.object.isOrthographicCamera ? t = this.unprojectOnTbPlane(this.object, e.clientX, e.clientY, this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1 / this.object.zoom).add(this._gizmos.position) : this.object.isPerspectiveCamera && (t = this.unprojectOnTbPlane(this.object, e.clientX, e.clientY, this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)), this.applyTransformMatrix(this.scale(r, t));
					} else this.applyTransformMatrix(this.scale(r, this._gizmos.position));
					this._grid != null && (this.disposeGrid(), this.drawGrid()), this.updateTbState(Q.IDLE, !1), this.dispatchEvent(P_), this.dispatchEvent(I_);
					break;
				case "FOV":
					if (this.object.isPerspectiveCamera) {
						this.updateTbState(Q.FOV, !0), e.deltaX != 0 && (t = e.deltaX / 125, r = 1, t > 0 ? r = 1 / this.scaleFactor ** +t : t < 0 && (r = this.scaleFactor ** +-t)), this._v3_1.setFromMatrixPosition(this._cameraMatrixState);
						let n = this._v3_1.distanceTo(this._gizmos.position), i = n / r;
						i = Fr.clamp(i, this.minDistance, this.maxDistance);
						let a = n * Math.tan(Fr.DEG2RAD * this.object.fov * .5), o = Fr.RAD2DEG * (2 * Math.atan(a / i));
						o > this.maxFov ? o = this.maxFov : o < this.minFov && (o = this.minFov), r = n / (a / Math.tan(Fr.DEG2RAD * (o / 2))), this.setFov(o), this.applyTransformMatrix(this.scale(r, this._gizmos.position, !1));
					}
					this._grid != null && (this.disposeGrid(), this.drawGrid()), this.updateTbState(Q.IDLE, !1), this.dispatchEvent(P_), this.dispatchEvent(I_);
			}
		}
	}
}
var Z_ = new H(), Q_ = new _f(), $_ = new H(), ev = new H(), tv = class extends cp {
	constructor(e, t = null) {
		super(e, t), this.movementSpeed = 1, this.lookSpeed = .005, this.lookVertical = !0, this.autoForward = !1, this.activeLook = !0, this.heightSpeed = !1, this.heightCoef = 1, this.heightMin = 0, this.heightMax = 1, this.constrainVertical = !1, this.verticalMin = 0, this.verticalMax = Math.PI, this.mouseDragOn = !1, this._autoSpeedFactor = 0, this._pointerX = 0, this._pointerY = 0, this._moveForward = !1, this._moveBackward = !1, this._moveLeft = !1, this._moveRight = !1, this._viewHalfX = 0, this._viewHalfY = 0, this._lat = 0, this._lon = 0, this._onPointerMove = iv.bind(this), this._onPointerDown = nv.bind(this), this._onPointerUp = rv.bind(this), this._onContextMenu = sv.bind(this), this._onKeyDown = av.bind(this), this._onKeyUp = ov.bind(this), t !== null && (this.connect(t), this.handleResize()), this._setOrientation();
	}
	connect(e) {
		super.connect(e), window.addEventListener("keydown", this._onKeyDown), window.addEventListener("keyup", this._onKeyUp), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointerup", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu);
	}
	disconnect() {
		window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("contextmenu", this._onContextMenu);
	}
	dispose() {
		this.disconnect();
	}
	handleResize() {
		this.domElement === document ? (this._viewHalfX = window.innerWidth / 2, this._viewHalfY = window.innerHeight / 2) : (this._viewHalfX = this.domElement.offsetWidth / 2, this._viewHalfY = this.domElement.offsetHeight / 2);
	}
	lookAt(e, t, n) {
		return e.isVector3 ? $_.copy(e) : $_.set(e, t, n), this.object.lookAt($_), this._setOrientation(), this;
	}
	update(e) {
		if (!1 === this.enabled) return;
		if (this.heightSpeed) {
			let t = Fr.clamp(this.object.position.y, this.heightMin, this.heightMax) - this.heightMin;
			this._autoSpeedFactor = e * (t * this.heightCoef);
		} else this._autoSpeedFactor = 0;
		let t = e * this.movementSpeed;
		(this._moveForward || this.autoForward && !this._moveBackward) && this.object.translateZ(-(t + this._autoSpeedFactor)), this._moveBackward && this.object.translateZ(t), this._moveLeft && this.object.translateX(-t), this._moveRight && this.object.translateX(t), this._moveUp && this.object.translateY(t), this._moveDown && this.object.translateY(-t);
		let n = e * this.lookSpeed;
		this.activeLook || (n = 0);
		let r = 1;
		this.constrainVertical && (r = Math.PI / (this.verticalMax - this.verticalMin)), this._lon -= this._pointerX * n, this.lookVertical && (this._lat -= this._pointerY * n * r), this._lat = Math.max(-85, Math.min(85, this._lat));
		let i = Fr.degToRad(90 - this._lat), a = Fr.degToRad(this._lon);
		this.constrainVertical && (i = Fr.mapLinear(i, 0, Math.PI, this.verticalMin, this.verticalMax));
		let o = this.object.position;
		ev.setFromSphericalCoords(1, i, a).add(o), this.object.lookAt(ev);
	}
	_setOrientation() {
		let e = this.object.quaternion;
		Z_.set(0, 0, -1).applyQuaternion(e), Q_.setFromVector3(Z_), this._lat = 90 - Fr.radToDeg(Q_.phi), this._lon = Fr.radToDeg(Q_.theta);
	}
};
function nv(e) {
	if (this.domElement !== document && this.domElement.focus(), this.activeLook) switch (e.button) {
		case 0:
			this._moveForward = !0;
			break;
		case 2: this._moveBackward = !0;
	}
	this.mouseDragOn = !0;
}
function rv(e) {
	if (this.activeLook) switch (e.button) {
		case 0:
			this._moveForward = !1;
			break;
		case 2: this._moveBackward = !1;
	}
	this.mouseDragOn = !1;
}
function iv(e) {
	this.domElement === document ? (this._pointerX = e.pageX - this._viewHalfX, this._pointerY = e.pageY - this._viewHalfY) : (this._pointerX = e.pageX - this.domElement.offsetLeft - this._viewHalfX, this._pointerY = e.pageY - this.domElement.offsetTop - this._viewHalfY);
}
function av(e) {
	switch (e.code) {
		case "ArrowUp":
		case "KeyW":
			this._moveForward = !0;
			break;
		case "ArrowLeft":
		case "KeyA":
			this._moveLeft = !0;
			break;
		case "ArrowDown":
		case "KeyS":
			this._moveBackward = !0;
			break;
		case "ArrowRight":
		case "KeyD":
			this._moveRight = !0;
			break;
		case "KeyR":
			this._moveUp = !0;
			break;
		case "KeyF": this._moveDown = !0;
	}
}
function ov(e) {
	switch (e.code) {
		case "ArrowUp":
		case "KeyW":
			this._moveForward = !1;
			break;
		case "ArrowLeft":
		case "KeyA":
			this._moveLeft = !1;
			break;
		case "ArrowDown":
		case "KeyS":
			this._moveBackward = !1;
			break;
		case "ArrowRight":
		case "KeyD":
			this._moveRight = !1;
			break;
		case "KeyR":
			this._moveUp = !1;
			break;
		case "KeyF": this._moveDown = !1;
	}
}
function sv(e) {
	!1 !== this.enabled && e.preventDefault();
}
export { Se as ACESFilmicToneMapping, x as AddEquation, ve as AddOperation, cn as AdditiveAnimationBlendMode, g as AdditiveBlending, F as AgXToneMapping, rt as AlphaFormat, Yn as AlwaysCompare, le as AlwaysDepth, Vn as AlwaysStencilFunc, dd as AmbientLight, nf as AnimationAction, Eu as AnimationClip, Lu as AnimationLoader, af as AnimationMixer, tf as AnimationObjectGroup, fu as AnimationUtils, Mc as ArcCurve, U_ as ArcballControls, Nd as ArrayCamera, ap as ArrowHelper, we as AttachedBindMode, Hd as Audio, Jd as AudioAnalyser, Td as AudioContext, Vd as AudioListener, Ed as AudioLoader, op as AxesHelper, f as BackSide, fn as BasicDepthPacking, s as BasicShadowMap, zs as BatchedMesh, _u as BezierInterpolant, Xo as Bone, yu as BooleanKeyframeTrack, xf as Box2, ia as Box3, np as Box3Helper, vc as BoxGeometry, tp as BoxHelper, Oa as BufferAttribute, J as BufferGeometry, vd as BufferGeometryLoader, Ge as ByteType, Ou as Cache, $u as Camera, Xf as CameraHelper, mc as CanvasTexture, yc as CapsuleGeometry, Rc as CatmullRomCurve3, N as CineonToneMapping, bc as CircleGeometry, Ne as ClampToEdgeWrapping, gf as Clock, K as Color, bu as ColorKeyframeTrack, W as ColorManagement, fr as Compatibility, dc as CompressedArrayTexture, fc as CompressedCubeTexture, uc as CompressedTexture, Ru as CompressedTextureLoader, Sc as ConeGeometry, oe as ConstantAlphaFactor, ie as ConstantColorFactor, cp as Controls, Md as CubeCamera, gc as CubeDepthTexture, De as CubeReflectionMapping, Oe as CubeRefractionMapping, pc as CubeTexture, Vu as CubeTextureLoader, je as CubeUVReflectionMapping, Hc as CubicBezierCurve, Uc as CubicBezierCurve3, mu as CubicInterpolant, i as CullFaceBack, a as CullFaceFront, o as CullFaceFrontBack, r as CullFaceNone, Ac as Curve, Xc as CurvePath, y as CustomBlending, P as CustomToneMapping, xc as CylinderGeometry, vf as Cylindrical, ii as Data3DTexture, ni as DataArrayTexture, Zo as DataTexture, Hu as DataTextureLoader, wa as DataUtils, An as DecrementStencilOp, Mn as DecrementWrapStencilOp, ju as DefaultLoadingManager, ot as DepthFormat, st as DepthStencilFormat, hc as DepthTexture, Te as DetachedBindMode, ud as DirectionalLight, qf as DirectionalLightHelper, gu as DiscreteInterpolant, wc as DodecahedronGeometry, p as DoubleSide, te as DstAlphaFactor, M as DstColorFactor, rr as DynamicCopyUsage, Zn as DynamicDrawUsage, er as DynamicReadUsage, kc as EdgesGeometry, jc as EllipseCurve, Wn as EqualCompare, fe as EqualDepth, In as EqualStencilFunc, ke as EquirectangularReflectionMapping, Ae as EquirectangularRefractionMapping, hi as Euler, Er as EventDispatcher, _c as ExternalTexture, kl as ExtrudeGeometry, Iu as FileLoader, tv as FirstPersonControls, Ia as Float16BufferAttribute, q as Float32BufferAttribute, Xe as FloatType, Hi as Fog, Vi as FogExp2, lc as FramebufferTexture, d as FrontSide, _s as Frustum, bs as FrustumArray, df as GLBufferAttribute, ar as GLSL1, or as GLSL3, Pg as GLTFLoader, Kn as GreaterCompare, me as GreaterDepth, Jn as GreaterEqualCompare, pe as GreaterEqualDepth, Bn as GreaterEqualStencilFunc, Rn as GreaterStencilFunc, Hf as GridHelper, Ni as Group, Ze as HalfFloatType, Gu as HemisphereLight, Vf as HemisphereLightHelper, jl as IcosahedronGeometry, wd as ImageBitmapLoader, Bu as ImageLoader, Kr as ImageUtils, kn as IncrementStencilOp, jn as IncrementWrapStencilOp, ts as InstancedBufferAttribute, _d as InstancedBufferGeometry, uf as InstancedInterleavedBuffer, ls as InstancedMesh, Ma as Int16BufferAttribute, Pa as Int32BufferAttribute, ka as Int8BufferAttribute, Je as IntType, Ja as InterleavedBuffer, Xa as InterleavedBufferAttribute, pu as Interpolant, nn as InterpolateBezier, $t as InterpolateDiscrete, en as InterpolateLinear, tn as InterpolateSmooth, dr as InterpolationSamplingMode, ur as InterpolationSamplingType, Nn as InvertStencilOp, Dn as KeepStencilOp, vu as KeyframeTrack, _o as LOD, Ml as LatheGeometry, gi as Layers, Un as LessCompare, ue as LessDepth, Gn as LessEqualCompare, de as LessEqualDepth, Ln as LessEqualStencilFunc, Fn as LessStencilFunc, Wu as Light, md as LightProbe, Js as Line, kf as Line3, Bs as LineBasicMaterial, Wc as LineCurve, Gc as LineCurve3, su as LineDashedMaterial, $s as LineLoop, Qs as LineSegments, Be as LinearFilter, hu as LinearInterpolant, Ue as LinearMipMapLinearFilter, I as LinearMipMapNearestFilter, He as LinearMipmapLinearFilter, Ve as LinearMipmapNearestFilter, bn as LinearSRGBColorSpace, be as LinearToneMapping, xn as LinearTransfer, Mu as Loader, gd as LoaderUtils, Au as LoadingManager, Xt as LoopOnce, Qt as LoopPingPong, Zt as LoopRepeat, t as MOUSE, Qa as Material, b as MaterialBlending, hd as MaterialLoader, Fr as MathUtils, yf as Matrix2, U as Matrix3, G as Matrix4, T as MaxEquation, Ro as Mesh, Eo as MeshBasicMaterial, iu as MeshDepthMaterial, au as MeshDistanceMaterial, ru as MeshLambertMaterial, ou as MeshMatcapMaterial, nu as MeshNormalMaterial, eu as MeshPhongMaterial, $l as MeshPhysicalMaterial, Ql as MeshStandardMaterial, tu as MeshToonMaterial, w as MinEquation, Pe as MirroredRepeatWrapping, _e as MixOperation, v as MultiplyBlending, ge as MultiplyOperation, Fe as NearestFilter, ze as NearestMipMapLinearFilter, Le as NearestMipMapNearestFilter, Re as NearestMipmapLinearFilter, Ie as NearestMipmapNearestFilter, Ce as NeutralToneMapping, Hn as NeverCompare, ce as NeverDepth, Pn as NeverStencilFunc, m as NoBlending, vn as NoColorSpace, Cn as NoNormalPacking, ye as NoToneMapping, sn as NormalAnimationBlendMode, h as NormalBlending, Tn as NormalGAPacking, wn as NormalRGPacking, qn as NotEqualCompare, he as NotEqualDepth, zn as NotEqualStencilFunc, xu as NumberKeyframeTrack, Mi as Object3D, yd as ObjectLoader, _n as ObjectSpaceNormalMap, Nl as OctahedronGeometry, D as OneFactor, se as OneMinusConstantAlphaFactor, ae as OneMinusConstantColorFactor, j as OneMinusDstAlphaFactor, ne as OneMinusDstColorFactor, A as OneMinusSrcAlphaFactor, ee as OneMinusSrcColorFactor, vg as OrbitControls, cd as OrthographicCamera, c as PCFShadowMap, l as PCFSoftShadowMap, jp as PMREMGenerator, Zc as Path, rd as PerspectiveCamera, ps as Plane, Pl as PlaneGeometry, rp as PlaneHelper, sd as PointLight, Lf as PointLightHelper, ac as Points, ec as PointsMaterial, Uf as PolarGridHelper, Cc as PolyhedronGeometry, qd as PositionalAudio, ef as PropertyBinding, Yd as PropertyMixer, Kc as QuadraticBezierCurve, qc as QuadraticBezierCurve3, Ir as Quaternion, Cu as QuaternionKeyframeTrack, Su as QuaternionLinearInterpolant, Tt as R11_EAC_Format, Jt as RED_GREEN_RGTC2_Format, Kt as RED_RGTC1_Format, e as REVISION, Dt as RG11_EAC_Format, pn as RGBADepthPacking, at as RGBAFormat, pt as RGBAIntegerFormat, Bt as RGBA_ASTC_10x10_Format, Lt as RGBA_ASTC_10x5_Format, Rt as RGBA_ASTC_10x6_Format, zt as RGBA_ASTC_10x8_Format, Vt as RGBA_ASTC_12x10_Format, Ht as RGBA_ASTC_12x12_Format, kt as RGBA_ASTC_4x4_Format, At as RGBA_ASTC_5x4_Format, jt as RGBA_ASTC_5x5_Format, Mt as RGBA_ASTC_6x5_Format, Nt as RGBA_ASTC_6x6_Format, Pt as RGBA_ASTC_8x5_Format, Ft as RGBA_ASTC_8x6_Format, It as RGBA_ASTC_8x8_Format, Ut as RGBA_BPTC_Format, wt as RGBA_ETC2_EAC_Format, xt as RGBA_PVRTC_2BPPV1_Format, bt as RGBA_PVRTC_4BPPV1_Format, ht as RGBA_S3TC_DXT1_Format, gt as RGBA_S3TC_DXT3_Format, _t as RGBA_S3TC_DXT5_Format, mn as RGBDepthPacking, it as RGBFormat, ft as RGBIntegerFormat, Wt as RGB_BPTC_SIGNED_Format, Gt as RGB_BPTC_UNSIGNED_Format, St as RGB_ETC1_Format, Ct as RGB_ETC2_Format, yt as RGB_PVRTC_2BPPV1_Format, vt as RGB_PVRTC_4BPPV1_Format, mt as RGB_S3TC_DXT1_Format, hn as RGDepthPacking, ut as RGFormat, dt as RGIntegerFormat, Zl as RawShaderMaterial, To as Ray, pf as Raycaster, fd as RectAreaLight, ct as RedFormat, lt as RedIntegerFormat, xe as ReinhardToneMapping, ei as RenderTarget, of as RenderTarget3D, Me as RepeatWrapping, On as ReplaceStencilOp, C as ReverseSubtractEquation, Fl as RingGeometry, Et as SIGNED_R11_EAC_Format, Yt as SIGNED_RED_GREEN_RGTC2_Format, qt as SIGNED_RED_RGTC1_Format, Ot as SIGNED_RG11_EAC_Format, yn as SRGBColorSpace, Sn as SRGBTransfer, Ui as Scene, Y as ShaderChunk, pp as ShaderLib, Xl as ShaderMaterial, Gl as ShadowMaterial, Qc as Shape, Il as ShapeGeometry, sp as ShapePath, El as ShapeUtils, Ke as ShortType, es as Skeleton, Ff as SkeletonHelper, Yo as SkinnedMesh, Jr as Source, Ba as Sphere, Ll as SphereGeometry, _f as Spherical, pd as SphericalHarmonics3, Jc as SplineCurve, ad as SpotLight, jf as SpotLightHelper, po as Sprite, $a as SpriteMaterial, k as SrcAlphaFactor, re as SrcAlphaSaturateFactor, O as SrcColorFactor, nr as StaticCopyUsage, Xn as StaticDrawUsage, $n as StaticReadUsage, Ad as StereoCamera, ir as StreamCopyUsage, Qn as StreamDrawUsage, tr as StreamReadUsage, wu as StringKeyframeTrack, S as SubtractEquation, _ as SubtractiveBlending, n as TOUCH, gn as TangentSpaceNormalMap, Rl as TetrahedronGeometry, Qr as Texture, Uu as TextureLoader, up as TextureUtils, Pd as Timer, lr as TimestampQuery, zl as TorusGeometry, Bl as TorusKnotGeometry, ra as Triangle, dn as TriangleFanDrawMode, un as TriangleStripDrawMode, ln as TrianglesDrawMode, Vl as TubeGeometry, Ee as UVMapping, Na as Uint16BufferAttribute, Fa as Uint32BufferAttribute, Aa as Uint8BufferAttribute, ja as Uint8ClampedBufferAttribute, sf as Uniform, lf as UniformsGroup, X as UniformsLib, Yl as UniformsUtils, We as UnsignedByteType, nt as UnsignedInt101111Type, et as UnsignedInt248Type, tt as UnsignedInt5999Type, Ye as UnsignedIntType, Qe as UnsignedShort4444Type, $e as UnsignedShort5551Type, qe as UnsignedShortType, u as VSMShadowMap, V as Vector2, H as Vector3, $r as Vector4, Tu as VectorKeyframeTrack, cc as VideoFrameTexture, sc as VideoTexture, ai as WebGL3DRenderTarget, ri as WebGLArrayRenderTarget, sr as WebGLCoordinateSystem, Lp as WebGLCubeRenderTarget, ti as WebGLRenderTarget, eg as WebGLRenderer, Gh as WebGLUtils, cr as WebGPUCoordinateSystem, Fi as WebXRController, Hl as WireframeGeometry, on as WrapAroundEnding, rn as ZeroCurvatureEnding, E as ZeroFactor, an as ZeroSlopeEnding, En as ZeroStencilOp, _r as createCanvasElement, R as error, xr as getConsoleFunction, Sr as log, br as setConsoleFunction, L as warn, wr as warnOnce };
