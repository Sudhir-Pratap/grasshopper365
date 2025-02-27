!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  function g(e) {
    return null != e && e === e.window;
  }
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    m = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    b = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    k = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function x(e, t, n) {
    var r,
      i,
      o = (n = n || k).createElement('script');
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e;
  }
  var f = '3.5.1',
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function d(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return (
      !b(e) &&
      !g(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype = {
    jquery: f,
    constructor: E,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = E.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return E.each(this, e);
    },
    map: function (n) {
      return this.pushStack(
        E.map(this, function (e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        E.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        E.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice,
  }),
    (E.extend = E.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for (
        'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          'object' == typeof a || b(a) || (a = {}),
          s === u && ((a = this), s--);
        s < u;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (r = e[t]),
              '__proto__' !== t &&
                a !== r &&
                (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                  ? ((n = a[t]),
                    (o =
                      i && !Array.isArray(n)
                        ? []
                        : i || E.isPlainObject(n)
                        ? n
                        : {}),
                    (i = !1),
                    (a[t] = E.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r));
      return a;
    }),
    E.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== o.call(e) ||
          ((t = r(e)) &&
            ('function' !=
              typeof (n = v.call(t, 'constructor') && t.constructor) ||
              a.call(n) !== l))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        x(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? E.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) != a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return m(a);
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    function f(e, t) {
      var n = '0x' + e.slice(1) - 65536;
      return (
        t ||
        (n < 0
          ? String.fromCharCode(65536 + n)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
      );
    }
    function i() {
      T();
    }
    var e,
      p,
      x,
      o,
      a,
      h,
      d,
      g,
      w,
      u,
      l,
      T,
      C,
      s,
      k,
      m,
      c,
      v,
      y,
      E = 'sizzle' + +new Date(),
      b = n.document,
      S = 0,
      r = 0,
      D = ue(),
      j = ue(),
      A = ue(),
      N = ue(),
      O = function (e, t) {
        return e === t && (l = !0), 0;
      },
      q = {}.hasOwnProperty,
      t = [],
      L = t.pop,
      I = t.push,
      H = t.push,
      P = t.slice,
      B = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      M =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      R = '[\\x20\\t\\r\\n\\f]',
      W =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        R +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      F =
        '\\[' +
        R +
        '*(' +
        W +
        ')(?:' +
        R +
        '*([*^$|!~]?=)' +
        R +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        W +
        '))|)' +
        R +
        '*\\]',
      $ =
        ':(' +
        W +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        F +
        ')*)|.*)\\)|)',
      _ = new RegExp(R + '+', 'g'),
      U = new RegExp('^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$', 'g'),
      z = new RegExp('^' + R + '*,' + R + '*'),
      Q = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
      X = new RegExp(R + '|>'),
      Y = new RegExp($),
      V = new RegExp('^' + W + '$'),
      G = {
        ID: new RegExp('^#(' + W + ')'),
        CLASS: new RegExp('^\\.(' + W + ')'),
        TAG: new RegExp('^(' + W + '|[*])'),
        ATTR: new RegExp('^' + F),
        PSEUDO: new RegExp('^' + $),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            R +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            R +
            '*(?:([+-]|)' +
            R +
            '*(\\d+)|))' +
            R +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + M + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            R +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            R +
            '*((?:-\\d)?\\d*)' +
            R +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      J = /HTML$/i,
      K = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      ee = /^[^{]+\{\s*\[native \w/,
      te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ne = /[+~]/,
      re = new RegExp('\\\\[\\da-fA-F]{1,6}' + R + '?|\\\\([^\\r\\n\\f])', 'g'),
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      ae = ye(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      H.apply((t = P.call(b.childNodes)), b.childNodes),
        t[b.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              I.apply(e, P.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function se(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = t && t.ownerDocument,
        d = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (!r && (T(t), (t = t || C), k)) {
        if (11 !== d && (u = te.exec(e)))
          if ((i = u[1])) {
            if (9 === d) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              p.getElementsByClassName &&
              t.getElementsByClassName
            )
              return H.apply(n, t.getElementsByClassName(i)), n;
          }
        if (
          p.qsa &&
          !N[e + ' '] &&
          (!m || !m.test(e)) &&
          (1 !== d || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((c = e), (f = t), 1 === d && (X.test(e) || Q.test(e)))) {
            for (
              ((f = (ne.test(e) && ge(t.parentNode)) || t) === t && p.scope) ||
                ((s = t.getAttribute('id'))
                  ? (s = s.replace(ie, oe))
                  : t.setAttribute('id', (s = E))),
                o = (l = h(e)).length;
              o--;

            )
              l[o] = (s ? '#' + s : ':scope') + ' ' + ve(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (t) {
            N(e, !0);
          } finally {
            s === E && t.removeAttribute('id');
          }
        }
      }
      return g(e.replace(U, '$1'), t, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > x.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function le(e) {
      return (e[E] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) x.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function he(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((p = se.support = {}),
    (a = se.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement;
      return !J.test(t || (n && n.nodeName) || 'HTML');
    }),
    (T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : b;
      return (
        r != C &&
          9 === r.nodeType &&
          r.documentElement &&
          ((s = (C = r).documentElement),
          (k = !a(C)),
          b != C &&
            (n = C.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener('unload', i, !1)
              : n.attachEvent && n.attachEvent('onunload', i)),
          (p.scope = ce(function (e) {
            return (
              s.appendChild(e).appendChild(C.createElement('div')),
              void 0 !== e.querySelectorAll &&
                !e.querySelectorAll(':scope fieldset div').length
            );
          })),
          (p.attributes = ce(function (e) {
            return (e.className = 'i'), !e.getAttribute('className');
          })),
          (p.getElementsByTagName = ce(function (e) {
            return (
              e.appendChild(C.createComment('')),
              !e.getElementsByTagName('*').length
            );
          })),
          (p.getElementsByClassName = ee.test(C.getElementsByClassName)),
          (p.getById = ce(function (e) {
            return (
              (s.appendChild(e).id = E),
              !C.getElementsByName || !C.getElementsByName(E).length
            );
          })),
          p.getById
            ? ((x.filter.ID = function (e) {
                var t = e.replace(re, f);
                return function (e) {
                  return e.getAttribute('id') === t;
                };
              }),
              (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((x.filter.ID = function (e) {
                var n = e.replace(re, f);
                return function (e) {
                  var t =
                    void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                  return t && t.value === n;
                };
              }),
              (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && k) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode('id')) && n.value === e)
                      return [o];
                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (x.find.TAG = p.getElementsByTagName
            ? function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : p.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ('*' !== e) return o;
                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                return r;
              }),
          (x.find.CLASS =
            p.getElementsByClassName &&
            function (e, t) {
              if (void 0 !== t.getElementsByClassName && k)
                return t.getElementsByClassName(e);
            }),
          (c = []),
          (m = []),
          (p.qsa = ee.test(C.querySelectorAll)) &&
            (ce(function (e) {
              var t;
              (s.appendChild(e).innerHTML =
                "<a id='" +
                E +
                "'></a><select id='" +
                E +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  m.push('[*^$]=' + R + '*(?:\'\'|"")'),
                e.querySelectorAll('[selected]').length ||
                  m.push('\\[' + R + '*(?:value|' + M + ')'),
                e.querySelectorAll('[id~=' + E + '-]').length || m.push('~='),
                (t = C.createElement('input')).setAttribute('name', ''),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  m.push('\\[' + R + '*name' + R + '*=' + R + '*(?:\'\'|"")'),
                e.querySelectorAll(':checked').length || m.push(':checked'),
                e.querySelectorAll('a#' + E + '+*').length ||
                  m.push('.#.+[+~]'),
                e.querySelectorAll('\\\f'),
                m.push('[\\r\\n\\f]');
            }),
            ce(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = C.createElement('input');
              t.setAttribute('type', 'hidden'),
                e.appendChild(t).setAttribute('name', 'D'),
                e.querySelectorAll('[name=d]').length &&
                  m.push('name' + R + '*[*^$|!~]?='),
                2 !== e.querySelectorAll(':enabled').length &&
                  m.push(':enabled', ':disabled'),
                (s.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(':disabled').length &&
                  m.push(':enabled', ':disabled'),
                e.querySelectorAll('*,:x'),
                m.push(',.*:');
            })),
          (p.matchesSelector = ee.test(
            (v =
              s.matches ||
              s.webkitMatchesSelector ||
              s.mozMatchesSelector ||
              s.oMatchesSelector ||
              s.msMatchesSelector)
          )) &&
            ce(function (e) {
              (p.disconnectedMatch = v.call(e, '*')),
                v.call(e, "[s!='']:x"),
                c.push('!=', $);
            }),
          (m = m.length && new RegExp(m.join('|'))),
          (c = c.length && new RegExp(c.join('|'))),
          (t = ee.test(s.compareDocumentPosition)),
          (y =
            t || ee.test(s.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function (e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (O = t
            ? function (e, t) {
                if (e === t) return (l = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!p.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e == C || (e.ownerDocument == b && y(b, e))
                      ? -1
                      : t == C || (t.ownerDocument == b && y(b, t))
                      ? 1
                      : u
                      ? B(u, e) - B(u, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (l = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
                if (!i || !o)
                  return e == C
                    ? -1
                    : t == C
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : u
                    ? B(u, e) - B(u, t)
                    : 0;
                if (i === o) return de(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (; a[r] === s[r]; ) r++;
                return r ? de(a[r], s[r]) : a[r] == b ? -1 : s[r] == b ? 1 : 0;
              })),
        C
      );
    }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        p.matchesSelector &&
          k &&
          !N[t + ' '] &&
          (!c || !c.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = v.call(e, t);
          if (
            n ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = x.attrHandle[t.toLowerCase()],
        r = n && q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
      return void 0 !== r
        ? r
        : p.attributes || !k
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(ie, oe);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !p.detectDuplicates),
        (u = !p.sortStable && e.slice(0)),
        e.sort(O),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText = function (e) {
      var t,
        n = '',
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += o(t);
      return n;
    }),
    ((x = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        '>': { dir: 'parentNode', first: !0 },
        ' ': { dir: 'parentNode' },
        '+': { dir: 'previousSibling', first: !0 },
        '~': { dir: 'previousSibling' },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(re, f)),
            (e[3] = (e[3] || e[4] || e[5] || '').replace(re, f)),
            '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            'nth' === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ('even' === e[3] || 'odd' === e[3]))),
                (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
              : e[3] && se.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || '')
                : n &&
                  Y.test(n) &&
                  (t = h(n, !0)) &&
                  (t = n.indexOf(')', n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(re, f).toLowerCase();
          return '*' === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = D[e + ' '];
          return (
            t ||
            ((t = new RegExp('(^|' + R + ')' + e + '(' + R + '|$)')) &&
              D(e, function (e) {
                return t.test(
                  ('string' == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                    ''
                );
              }))
          );
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t
              ? '!=' === r
              : !r ||
                  ((t += ''),
                  '=' === r
                    ? t === i
                    : '!=' === r
                    ? t !== i
                    : '^=' === r
                    ? i && 0 === t.indexOf(i)
                    : '*=' === r
                    ? i && -1 < t.indexOf(i)
                    : '$=' === r
                    ? i && t.slice(-i.length) === i
                    : '~=' === r
                    ? -1 < (' ' + t.replace(_, ' ') + ' ').indexOf(i)
                    : '|=' === r &&
                      (t === i || t.slice(0, i.length + 1) === i + '-'));
          };
        },
        CHILD: function (h, e, t, g, m) {
          var v = 'nth' !== h.slice(0, 3),
            y = 'last' !== h.slice(-4),
            b = 'of-type' === e;
          return 1 === g && 0 === m
            ? function (e) {
                return !!e.parentNode;
              }
            : function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = v != y ? 'nextSibling' : 'previousSibling',
                  c = e.parentNode,
                  f = b && e.nodeName.toLowerCase(),
                  d = !n && !b,
                  p = !1;
                if (c) {
                  if (v) {
                    for (; l; ) {
                      for (a = e; (a = a[l]); )
                        if (
                          b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType
                        )
                          return !1;
                      u = l = 'only' === h && !u && 'nextSibling';
                    }
                    return !0;
                  }
                  if (((u = [y ? c.firstChild : c.lastChild]), y && d)) {
                    for (
                      p =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2],
                        a = s && c.childNodes[s];
                      (a = (++s && a && a[l]) || (p = s = 0) || u.pop());

                    )
                      if (1 === a.nodeType && ++p && a === e) {
                        i[h] = [S, s, p];
                        break;
                      }
                  } else if (
                    (d &&
                      (p = s =
                        (r =
                          (i =
                            (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                    !1 === p)
                  )
                    for (
                      ;
                      (a = (++s && a && a[l]) || (p = s = 0) || u.pop()) &&
                      ((b
                        ? a.nodeName.toLowerCase() !== f
                        : 1 !== a.nodeType) ||
                        !++p ||
                        (d &&
                          ((i =
                            (o = a[E] || (a[E] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] = [S, p]),
                        a !== e));

                    );
                  return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                }
              };
        },
        PSEUDO: function (e, o) {
          var t,
            a =
              x.pseudos[e] ||
              x.setFilters[e.toLowerCase()] ||
              se.error('unsupported pseudo: ' + e);
          return a[E]
            ? a(o)
            : 1 < a.length
            ? ((t = [e, e, '', o]),
              x.setFilters.hasOwnProperty(e.toLowerCase())
                ? le(function (e, t) {
                    for (var n, r = a(e, o), i = r.length; i--; )
                      e[(n = B(e, r[i]))] = !(t[n] = r[i]);
                  })
                : function (e) {
                    return a(e, 0, t);
                  })
            : a;
        },
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = d(e.replace(U, '$1'));
          return s[E]
            ? le(function (e, t, n, r) {
                for (var i, o = s(e, null, r, []), a = e.length; a--; )
                  (i = o[a]) && (e[a] = !(t[a] = i));
              })
            : function (e, t, n) {
                return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
              };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return (
            (t = t.replace(re, f)),
            function (e) {
              return -1 < (e.textContent || o(e)).indexOf(t);
            }
          );
        }),
        lang: le(function (n) {
          return (
            V.test(n || '') || se.error('unsupported lang: ' + n),
            (n = n.replace(re, f).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = k
                    ? e.lang
                    : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === s;
        },
        focus: function (e) {
          return (
            e === C.activeElement &&
            (!C.hasFocus || C.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: pe(!1),
        disabled: pe(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !x.pseudos.empty(e);
        },
        header: function (e) {
          return Z.test(e.nodeName);
        },
        input: function (e) {
          return K.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t && 'button' === e.type) || 'button' === t;
        },
        text: function (e) {
          var t;
          return (
            'input' === e.nodeName.toLowerCase() &&
            'text' === e.type &&
            (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
          );
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        }),
      },
    }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = (function (t) {
        return function (e) {
          return 'input' === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      x.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t || 'button' === t) && e.type === n;
        };
      })(e);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function ye(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        d = r++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, d];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[E] || (e[E] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === d)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function be(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function xe(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function we(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[' '],
          s = o ? 1 : 0,
          u = ye(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = ye(
            function (e) {
              return -1 < B(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) || ((i = t).nodeType ? u : l)(e, t, n);
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = x.relative[e[s].type])) c = [ye(be(c), t)];
        else {
          if ((t = x.filter[e[s].type].apply(null, e[s].matches))[E]) {
            for (n = ++s; n < r && !x.relative[e[n].type]; n++);
            return (function e(p, h, g, m, v, t) {
              return (
                m && !m[E] && (m = e(m)),
                v && !v[E] && (v = e(v, t)),
                le(function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s = [],
                    u = [],
                    l = t.length,
                    c =
                      e ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(h || '*', n.nodeType ? [n] : n, []),
                    f = !p || (!e && h) ? c : xe(c, s, p, n, r),
                    d = g ? (v || (e ? p : l || m) ? [] : t) : f;
                  if ((g && g(f, d, n, r), m))
                    for (i = xe(d, u), m(i, [], n, r), o = i.length; o--; )
                      (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                  if (e) {
                    if (v || p) {
                      if (v) {
                        for (i = [], o = d.length; o--; )
                          (a = d[o]) && i.push((f[o] = a));
                        v(null, (d = []), i, r);
                      }
                      for (o = d.length; o--; )
                        (a = d[o]) &&
                          -1 < (i = v ? B(e, a) : s[o]) &&
                          (e[i] = !(t[i] = a));
                    }
                  } else (d = xe(d === t ? d.splice(l, d.length) : d)), v ? v(null, t, d, r) : H.apply(t, d);
                })
              );
            })(
              1 < s && be(c),
              1 < s &&
                ve(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(U, '$1'),
              t,
              s < n && we(e.slice(s, n)),
              n < r && we((e = e.slice(n))),
              n < r && ve(e)
            );
          }
          c.push(t);
        }
      return be(c);
    }
    return (
      (me.prototype = x.filters = x.pseudos),
      (x.setFilters = new me()),
      (h = se.tokenize = function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = j[e + ' '];
        if (l) return t ? 0 : l.slice(0);
        for (a = e, s = [], u = x.preFilter; a; ) {
          for (o in ((n && !(r = z.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
          (n = !1),
          (r = Q.exec(a)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(U, ' ') }),
            (a = a.slice(n.length))),
          x.filter))
            !(r = G[o].exec(a)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? se.error(e) : j(e, s).slice(0);
      }),
      (d = se.compile = function (e, t) {
        var n,
          m,
          v,
          y,
          b,
          r,
          i = [],
          o = [],
          a = A[e + ' '];
        if (!a) {
          for (n = (t = t || h(e)).length; n--; )
            (a = we(t[n]))[E] ? i.push(a) : o.push(a);
          (a = A(
            e,
            ((m = o),
            (y = 0 < (v = i).length),
            (b = 0 < m.length),
            (r = function (e, t, n, r, i) {
              var o,
                a,
                s,
                u = 0,
                l = '0',
                c = e && [],
                f = [],
                d = w,
                p = e || (b && x.find.TAG('*', i)),
                h = (S += null == d ? 1 : Math.random() || 0.1),
                g = p.length;
              for (
                i && (w = t == C || t || i);
                l !== g && null != (o = p[l]);
                l++
              ) {
                if (b && o) {
                  for (
                    a = 0, t || o.ownerDocument == C || (T(o), (n = !k));
                    (s = m[a++]);

                  )
                    if (s(o, t || C, n)) {
                      r.push(o);
                      break;
                    }
                  i && (S = h);
                }
                y && ((o = !s && o) && u--, e && c.push(o));
              }
              if (((u += l), y && l !== u)) {
                for (a = 0; (s = v[a++]); ) s(c, f, t, n);
                if (e) {
                  if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = L.call(r));
                  f = xe(f);
                }
                H.apply(r, f),
                  i &&
                    !e &&
                    0 < f.length &&
                    1 < u + v.length &&
                    se.uniqueSort(r);
              }
              return i && ((S = h), (w = d)), c;
            }),
            y ? le(r) : r)
          )).selector = e;
        }
        return a;
      }),
      (g = se.select = function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = 'function' == typeof e && e,
          c = !r && h((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            'ID' === (a = o[0]).type &&
            9 === t.nodeType &&
            k &&
            x.relative[o[1].type]
          ) {
            if (!(t = (x.find.ID(a.matches[0].replace(re, f), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          for (
            i = G.needsContext.test(e) ? 0 : o.length;
            i-- && ((a = o[i]), !x.relative[(s = a.type)]);

          )
            if (
              (u = x.find[s]) &&
              (r = u(
                a.matches[0].replace(re, f),
                (ne.test(o[0].type) && ge(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && ve(o))))
                return H.apply(n, r), n;
              break;
            }
        }
        return (
          (l || d(e, c))(
            r,
            t,
            !k,
            n,
            !t || (ne.test(e) && ge(t.parentNode)) || t
          ),
          n
        );
      }),
      (p.sortStable = E.split('').sort(O).join('') === E),
      (p.detectDuplicates = !!l),
      T(),
      (p.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(M, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (E.find = p),
    (E.expr = p.selectors),
    (E.expr[':'] = E.expr.pseudos),
    (E.uniqueSort = E.unique = p.uniqueSort),
    (E.text = p.getText),
    (E.isXMLDoc = p.isXML),
    (E.contains = p.contains),
    (E.escapeSelector = p.escape);
  function h(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function T(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var S = E.expr.match.needsContext;
  function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function A(e, n, r) {
    return b(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(A(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(A(this, e || [], !0));
      },
      is: function (e) {
        return !!A(this, 'string' == typeof e && S.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var N,
    O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || N), 'string' != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : b(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(E)
        : E.makeArray(e, this);
    if (
      !(r =
        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : O.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof E ? t[0] : t),
        E.merge(
          this,
          E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : k, !0)
        ),
        j.test(r[1]) && E.isPlainObject(t))
      )
        for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = k.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = E.fn),
    (N = E(k));
  var q = /^(?:parents|prev(?:Until|All))/,
    L = { children: !0, contents: !0, next: !0, prev: !0 };
  function I(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && E(e);
      if (!S.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return I(e, 'nextSibling');
        },
        prev: function (e) {
          return I(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (D(e, 'template') && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = E.filter(t, n)),
            1 < this.length &&
              (L[r] || E.uniqueSort(n), q.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function P(e) {
    return e;
  }
  function B(e) {
    throw e;
  }
  function M(e, t, n, r) {
    var i;
    try {
      e && b((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && b((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var n;
    r =
      'string' == typeof r
        ? ((n = {}),
          E.each(r.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    function i() {
      for (a = a || r.once, t = o = !0; u.length; l = -1)
        for (e = u.shift(); ++l < s.length; )
          !1 === s[l].apply(e[0], e[1]) &&
            r.stopOnFalse &&
            ((l = s.length), (e = !1));
      r.memory || (e = !1), (o = !1), a && (s = e ? [] : '');
    }
    var o,
      e,
      t,
      a,
      s = [],
      u = [],
      l = -1,
      c = {
        add: function () {
          return (
            s &&
              (e && !o && ((l = s.length - 1), u.push(e)),
              (function n(e) {
                E.each(e, function (e, t) {
                  b(t)
                    ? (r.unique && c.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              e && !o && i()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              for (var n; -1 < (n = E.inArray(t, s, n)); )
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return (s = s && []), this;
        },
        disable: function () {
          return (a = u = []), (s = e = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), e || o || (s = e = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              o || i()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!t;
        },
      };
    return c;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              E.Callbacks('memory'),
              E.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = b(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise())
                        throw new TypeError('Thenable self-resolution');
                      (t =
                        e &&
                        ('object' == typeof e || 'function' == typeof e) &&
                        e.then),
                        b(t)
                          ? s
                            ? t.call(e, l(u, o, P, s), l(u, o, B, s))
                            : (u++,
                              t.call(
                                e,
                                l(u, o, P, s),
                                l(u, o, B, s),
                                l(u, o, P, o.notifyWith)
                              ))
                          : (a !== P && ((n = void 0), (r = [e])),
                            (s || o.resolveWith)(n, r));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== B && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, b(r) ? r : P, e.notifyWith)),
                  o[1][3].add(l(0, e, b(t) ? t : P)),
                  o[2][3].add(l(0, e, b(n) ? n : B));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (i[t] = this),
              (o[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(i, o);
          };
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = E.Deferred();
        if (
          n <= 1 &&
          (M(e, a.done(t(r)).resolve, a.reject, !n),
          'pending' === a.state() || b(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) M(o[r], t(r), a.reject);
        return a.promise();
      },
    });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      R.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var W = E.Deferred();
  function F() {
    k.removeEventListener('DOMContentLoaded', F),
      C.removeEventListener('load', F),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          W.resolveWith(k, [E]);
      },
    }),
    (E.ready.then = W.then),
    'complete' === k.readyState ||
    ('loading' !== k.readyState && !k.documentElement.doScroll)
      ? C.setTimeout(E.ready)
      : (k.addEventListener('DOMContentLoaded', F),
        C.addEventListener('load', F));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        b(r) || (a = !0),
        l &&
          (t = a
            ? (t.call(e, r), null)
            : ((l = t),
              function (e, t, n) {
                return l.call(E(e), n);
              })),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    U = /-([a-z])/g;
  function z(e, t) {
    return t.toUpperCase();
  }
  function Q(e) {
    return e.replace(_, 'ms-').replace(U, z);
  }
  function X(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function Y() {
    this.expando = E.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[Q(t)] = n;
        else for (r in t) i[Q(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][Q(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(Q)
              : (t = Q(t)) in r
              ? [t]
              : t.match(H) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !E.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var V = new Y(),
    G = new Y(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return G.hasData(e) || V.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return V.access(e, t, n);
    },
    _removeData: function (e, t) {
      V.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return 'object' == typeof n
            ? this.each(function () {
                G.set(this, n);
              })
            : $(
                this,
                function (e) {
                  var t;
                  return o && void 0 === e
                    ? void 0 !== (t = G.get(o, n)) || void 0 !== (t = Z(o, n))
                      ? t
                      : void 0
                    : void this.each(function () {
                        G.set(this, n, e);
                      });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = G.get(o)), 1 === o.nodeType && !V.get(o, 'hasDataAttrs'))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf('data-') &&
              ((r = Q(r.slice(5))), Z(o, r, i[r]));
          V.set(o, 'hasDataAttrs', !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = V.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = V.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          V.get(e, n) ||
          V.access(e, n, {
            empty: E.Callbacks('once memory').add(function () {
              V.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(a, [a]);
        }
        var r,
          i = 1,
          o = E.Deferred(),
          a = this,
          s = this.length;
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          s--;

        )
          (r = V.get(a[s], e + 'queueHooks')) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = k.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  function ae(e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === E.css(e, 'display'))
    );
  }
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return E.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (E.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (E.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(E.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        E.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), E.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
      (r = e[l]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((u[l] = V.get(r, 'display') || null),
              u[l] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (u[l] =
                ((s = o = i = void 0),
                (o = r.ownerDocument),
                (a = r.nodeName),
                (s = ue[a]) ||
                  ((i = o.body.appendChild(o.createElement(a))),
                  (s = E.css(i, 'display')),
                  i.parentNode.removeChild(i),
                  'none' === s && (s = 'block'),
                  (ue[a] = s)))))
          : 'none' !== n && ((u[l] = 'none'), V.set(r, 'display', n)));
    for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i,
    he = k.createDocumentFragment().appendChild(k.createElement('div'));
  (ce = k.createElement('input')).setAttribute('type', 'radio'),
    ce.setAttribute('checked', 'checked'),
    ce.setAttribute('name', 't'),
    he.appendChild(ce),
    (y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (he.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
    (he.innerHTML = '<option></option>'),
    (y.option = !!he.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function me(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : [];
    return void 0 === t || (t && D(e, t)) ? E.merge([e], n) : n;
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      V.set(e[n], 'globalEval', !t || V.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option = [
        1,
        "<select multiple='multiple'>",
        '</select>',
      ]);
  var ye = /<|&#?\w+;/;
  function be(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ('object' === w(o)) E.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            a = a || f.appendChild(t.createElement('div')),
              s = (de.exec(o) || ['', ''])[1].toLowerCase(),
              u = ge[s] || ge._default,
              a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          E.merge(d, a.childNodes), ((a = f.firstChild).textContent = '');
        } else d.push(t.createTextNode(o));
    for (f.textContent = '', p = 0; (o = d[p++]); )
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = me(f.appendChild(o), 'script')), l && ve(a), n)
      )
        for (c = 0; (o = a[c++]); ) pe.test(o.type || '') && n.push(o);
    return f;
  }
  var xe = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return k.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Se(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Se(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (V.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = V.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                V.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = V.get(this, i)) || t ? V.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (V.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === V.get(e, i) && E.event.add(e, i, Ce);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = V.get(t);
      if (X(t))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && E.find.matchesSelector(re, i),
            n.guid || (n.guid = E.guid++),
            (u = m.events) || (u = m.events = Object.create(null)),
            (a = m.handle) ||
              (a = m.handle = function (e) {
                return void 0 !== E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            l = (e = (e || '').match(H) || ['']).length;
          l--;

        )
          (p = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            p &&
              ((f = E.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = E.event.special[p] || {}),
              (c = E.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (d = u[p]) ||
                (((d = u[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(p, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (E.event.global[p] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = V.hasData(e) && V.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || '').match(H) || ['']).length; l--; )
          if (
            ((p = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            p)
          ) {
            for (
              f = E.event.special[p] || {},
                d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = d.length;
              o--;

            )
              (c = d[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                E.removeEvent(e, p, m.handle),
              delete u[p]);
          } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
        E.isEmptyObject(u) && V.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (V.get(this, 'events') || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        for (
          a = E.event.handlers.call(this, u, l), t = 0;
          (i = a[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && D(t, 'input') && De(t, 'click', Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && D(t, 'input') && De(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (fe.test(t.type) &&
              t.click &&
              D(t, 'input') &&
              V.get(t, 'click')) ||
            D(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && xe.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      E.event.addProp
    ),
    E.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return De(this, e, Ee), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Se(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Se(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' != typeof e)
          return (
            (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = ke),
            this.each(function () {
              E.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var je = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (D(e, 'table') &&
        D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        E(e).children('tbody')[0]) ||
      e
    );
  }
  function qe(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function Le(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Ie(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (V.hasData(e) && (s = V.get(e).events))
        for (i in (V.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      G.hasData(e) && ((o = G.access(e)), (a = E.extend({}, o)), G.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = m(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = b(p);
    if (h || (1 < f && 'string' == typeof p && !y.checkClone && Ae.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = be(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(me(e, 'script'), qe)).length; c < f; c++)
        (u = e),
          c !== d &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, me(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, Le), c = 0; c < s; c++)
          (u = a[c]),
            pe.test(u.type || '') &&
              !V.access(u, 'globalEval') &&
              E.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : x(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Pe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(me(r)),
        r.parentNode &&
          (n && ie(r) && ve(me(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++)
          (s = o[r]),
            'input' === (l = (u = a[r]).nodeName.toLowerCase()) &&
            fe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++)
            Ie(o[r], a[r]);
        else Ie(e, c);
      return (
        0 < (a = me(c, 'script')).length && ve(a, !f && me(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[V.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[V.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = Oe(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(me(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !je.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(me(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(me(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  function Be(e, t, n) {
    var r,
      i,
      o = {};
    for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
    for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
    return r;
  }
  var Me,
    Re,
    We,
    Fe,
    $e,
    _e,
    Ue,
    ze,
    Qe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Xe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ye = new RegExp(ne.join('|'), 'i');
  function Ve(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Xe(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = E.style(e, t)),
        !y.pixelBoxStyles() &&
          Qe.test(a) &&
          Ye.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Ge(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function Je() {
    var e;
    ze &&
      ((Ue.style.cssText =
        'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
      (ze.style.cssText =
        'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
      re.appendChild(Ue).appendChild(ze),
      (e = C.getComputedStyle(ze)),
      (Me = '1%' !== e.top),
      (_e = 12 === Ke(e.marginLeft)),
      (ze.style.right = '60%'),
      (Fe = 36 === Ke(e.right)),
      (Re = 36 === Ke(e.width)),
      (ze.style.position = 'absolute'),
      (We = 12 === Ke(ze.offsetWidth / 3)),
      re.removeChild(Ue),
      (ze = null));
  }
  function Ke(e) {
    return Math.round(parseFloat(e));
  }
  (Ue = k.createElement('div')),
    (ze = k.createElement('div')).style &&
      ((ze.style.backgroundClip = 'content-box'),
      (ze.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === ze.style.backgroundClip),
      E.extend(y, {
        boxSizingReliable: function () {
          return Je(), Re;
        },
        pixelBoxStyles: function () {
          return Je(), Fe;
        },
        pixelPosition: function () {
          return Je(), Me;
        },
        reliableMarginLeft: function () {
          return Je(), _e;
        },
        scrollboxSize: function () {
          return Je(), We;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == $e &&
              ((e = k.createElement('table')),
              (t = k.createElement('tr')),
              (n = k.createElement('div')),
              (e.style.cssText = 'position:absolute;left:-11111px'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              ($e = 3 < parseInt(r.height)),
              re.removeChild(e)),
            $e
          );
        },
      }));
  var Ze = ['Webkit', 'Moz', 'ms'],
    et = k.createElement('div').style,
    tt = {};
  function nt(e) {
    return (
      E.cssProps[e] ||
      tt[e] ||
      (e in et
        ? e
        : (tt[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Ze.length;
                n--;

              )
                if ((e = Ze[n] + t) in et) return e;
            })(e) || e))
    );
  }
  var rt = /^(none|table(?!-c[ea]).+)/,
    it = /^--/,
    ot = { position: 'absolute', visibility: 'hidden', display: 'block' },
    at = { letterSpacing: '0', fontWeight: '400' };
  function st(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function ut(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= E.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= E.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += E.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += E.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += E.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function lt(e, t, n) {
    var r = Xe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        'border-box' === E.css(e, 'boxSizing', !1, r),
      o = i,
      a = Ve(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Qe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && D(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === E.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === E.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        ut(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function ct(e, t, n, r, i) {
    return new ct.prototype.init(e, t, n, r, i);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ve(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = Q(t),
          u = it.test(t),
          l = e.style;
        if (
          (u || (t = nt(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' == (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = Q(t);
      return (
        it.test(t) || (t = nt(s)),
        (a = E.cssHooks[t] || E.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Ve(e, t, r)),
        'normal' === i && t in at && (i = at[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    E.each(['height', 'width'], function (e, u) {
      E.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !rt.test(E.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? lt(e, u, n)
              : Be(e, ot, function () {
                  return lt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Xe(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === E.css(e, 'boxSizing', !1, i),
            s = n ? ut(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  ut(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = E.css(e, u))),
            st(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ve(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Be(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    E.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (E.cssHooks[i + o].set = st);
    }),
    E.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Xe(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((E.Tween = ct).prototype = {
      constructor: ct,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || E.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (E.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = ct.propHooks[this.prop];
        return e && e.get ? e.get(this) : ct.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = ct.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = E.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : ct.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = ct.prototype),
    ((ct.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = E.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          E.fx.step[e.prop]
            ? E.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!E.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : E.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = ct.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (E.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (E.fx = ct.prototype.init),
    (E.fx.step = {});
  var ft,
    dt,
    pt,
    ht,
    gt = /^(?:toggle|show|hide)$/,
    mt = /queueHooks$/;
  function vt() {
    dt &&
      (!1 === k.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(vt)
        : C.setTimeout(vt, E.fx.interval),
      E.fx.tick());
  }
  function yt() {
    return (
      C.setTimeout(function () {
        ft = void 0;
      }),
      (ft = Date.now())
    );
  }
  function bt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function xt(e, t, n) {
    for (
      var r,
        i = (wt.tweeners[t] || []).concat(wt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function wt(o, e, t) {
    var n,
      a,
      r = 0,
      i = wt.prefilters.length,
      s = E.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = ft || yt(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: E.extend({}, e),
        opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: ft || yt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = E.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = Q(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = E.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = wt.prefilters[r].call(l, o, c, l.opts)))
        return (
          b(n.stop) &&
            (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      E.map(c, xt, l),
      b(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      E.fx.timer(E.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (E.Animation = E.extend(wt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, i = (e = b(e) ? ((t = e), ['*']) : e.match(H)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (wt.tweeners[n] = wt.tweeners[n] || []),
          wt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          d = this,
          p = {},
          h = e.style,
          g = e.nodeType && ae(e),
          m = V.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = E._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          d.always(function () {
            d.always(function () {
              a.unqueued--, E.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), gt.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }
            p[r] = (m && m[r]) || E.style(e, r);
          }
        if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = m && m.display) && (l = V.get(e, 'display')),
            'none' === (c = E.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = E.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === E.css(e, 'float') &&
              (u ||
                (d.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            d.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          p))
            u ||
              (m
                ? 'hidden' in m && (g = m.hidden)
                : (m = V.access(e, 'fxshow', { display: l })),
              o && (m.hidden = !g),
              g && le([e], !0),
              d.done(function () {
                for (r in (g || le([e]), V.remove(e, 'fxshow'), p))
                  E.style(e, r, p[r]);
              })),
              (u = xt(g ? m[r] : 0, r, d)),
              r in m ||
                ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? wt.prefilters.unshift(e) : wt.prefilters.push(e);
    },
  })),
    (E.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? E.extend({}, e)
          : {
              complete: n || (!n && t) || (b(e) && e),
              duration: e,
              easing: (n && t) || (t && !b(t) && t),
            };
      return (
        E.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in E.fx.speeds
              ? (r.duration = E.fx.speeds[r.duration])
              : (r.duration = E.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          b(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
        }),
        r
      );
    }),
    E.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        function i() {
          var e = wt(this, E.extend({}, t), a);
          (o || V.get(this, 'finish')) && e.stop(!0);
        }
        var o = E.isEmptyObject(t),
          a = E.speed(e, n, r);
        return (
          (i.finish = i),
          o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        );
      },
      stop: function (i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = E.timers,
              r = V.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && mt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || E.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = V.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = E.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    E.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = E.fn[r];
      E.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(bt(r, !0), e, t, n);
      };
    }),
    E.each(
      {
        slideDown: bt('show'),
        slideUp: bt('hide'),
        slideToggle: bt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        E.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var e,
        t = 0,
        n = E.timers;
      for (ft = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || E.fx.stop(), (ft = void 0);
    }),
    (E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      dt || ((dt = !0), vt());
    }),
    (E.fx.stop = function () {
      dt = null;
    }),
    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (pt = k.createElement('input')),
    (ht = k.createElement('select').appendChild(k.createElement('option'))),
    (pt.type = 'checkbox'),
    (y.checkOn = '' !== pt.value),
    (y.optSelected = ht.selected),
    ((pt = k.createElement('input')).value = 't'),
    (pt.type = 'radio'),
    (y.radioValue = 't' === pt.value);
  var Tt,
    Ct = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? Tt : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : !(i && 'get' in i && null !== (r = i.get(e, t))) &&
                  null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && D(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (Tt = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = Ct[t] || E.find.attr;
      Ct[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = Ct[o]),
            (Ct[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (Ct[o] = i)),
          r
        );
      };
    });
  var kt = /^(?:input|select|textarea|button)$/i,
    Et = /^(?:a|area)$/i;
  function St(e) {
    return (e.match(H) || []).join(' ');
  }
  function Dt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function jt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(H)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : kt.test(e.nodeName) || (Et.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    y.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, Dt(this)));
          });
        if ((e = jt(t)).length)
          for (; (n = this[u++]); )
            if (((i = Dt(n)), (r = 1 === n.nodeType && ' ' + St(i) + ' '))) {
              for (a = 0; (o = e[a++]); )
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = St(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, Dt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = jt(t)).length)
          for (; (n = this[u++]); )
            if (((i = Dt(n)), (r = 1 === n.nodeType && ' ' + St(i) + ' '))) {
              for (a = 0; (o = e[a++]); )
                for (; -1 < r.indexOf(' ' + o + ' '); )
                  r = r.replace(' ' + o + ' ', ' ');
              i !== (s = St(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' == o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : b(i)
          ? this.each(function (e) {
              E(this).toggleClass(i.call(this, e, Dt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a)
                for (t = 0, n = E(this), r = jt(i); (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && 'boolean' != o) ||
                  ((e = Dt(this)) && V.set(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      (!e && !1 !== i && V.get(this, '__className__')) || ''
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (' ' + St(Dt(t)) + ' ').indexOf(r))
            return !0;
        return !1;
      },
    });
  var At = /\r/g;
  E.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = b(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, E(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = E.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
        ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(At, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, 'value');
            return null != t ? t : St(E.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                !n.disabled &&
                (!n.parentNode.disabled || !D(n.parentNode, 'optgroup'))
              ) {
                if (((t = E(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = E.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(['radio', 'checkbox'], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        y.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (y.focusin = 'onfocusin' in C);
  function Nt(e) {
    e.stopPropagation();
  }
  var Ot = /^(?:focusinfocus|focusoutblur)$/;
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = [n || k],
        d = v.call(e, 'type') ? e.type : e,
        p = v.call(e, 'namespace') ? e.namespace.split('.') : [],
        h = (c = o = n = n || k);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !Ot.test(d + E.event.triggered) &&
        (-1 < d.indexOf('.') && ((d = (p = d.split('.')).shift()), p.sort()),
        (s = d.indexOf(':') < 0 && 'on' + d),
        ((e = e[E.expando]
          ? e
          : new E.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = p.join('.')),
        (e.rnamespace = e.namespace
          ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : E.makeArray(t, [e])),
        (l = E.event.special[d] || {}),
        r || !l.trigger || !1 !== l.trigger.apply(n, t))
      ) {
        if (!r && !l.noBubble && !g(n)) {
          for (
            a = l.delegateType || d, Ot.test(a + d) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            f.push(h), (o = h);
          o === (n.ownerDocument || k) &&
            f.push(o.defaultView || o.parentWindow || C);
        }
        for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
          (c = h),
            (e.type = 1 < i ? a : l.bindType || d),
            (u =
              (V.get(h, 'events') || Object.create(null))[e.type] &&
              V.get(h, 'handle')) && u.apply(h, t),
            (u = s && h[s]) &&
              u.apply &&
              X(h) &&
              ((e.result = u.apply(h, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(f.pop(), t)) ||
            !X(n) ||
            (s &&
              b(n[d]) &&
              !g(n) &&
              ((o = n[s]) && (n[s] = null),
              (E.event.triggered = d),
              e.isPropagationStopped() && c.addEventListener(d, Nt),
              n[d](),
              e.isPropagationStopped() && c.removeEventListener(d, Nt),
              (E.event.triggered = void 0),
              o && (n[s] = o))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      E.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        function i(e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        }
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = V.access(e, r);
            t || e.addEventListener(n, i, !0), V.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = V.access(e, r) - 1;
            t
              ? V.access(e, r, t)
              : (e.removeEventListener(n, i, !0), V.remove(e, r));
          },
        };
      });
  var qt = C.location,
    Lt = { guid: Date.now() },
    It = /\?/;
  E.parseXML = function (e) {
    var t;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName('parsererror').length) ||
        E.error('Invalid XML: ' + e),
      t
    );
  };
  var Ht = /\[\]$/,
    Pt = /\r?\n/g,
    Bt = /^(?:submit|button|image|reset|file)$/i,
    Mt = /^(?:input|select|textarea|keygen)/i;
  (E.param = function (e, t) {
    function n(e, t) {
      var n = b(t) ? t() : t;
      i[i.length] =
        encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
    }
    var r,
      i = [];
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, i, o) {
          if (Array.isArray(e))
            E.each(e, function (e, t) {
              i || Ht.test(r)
                ? o(r, t)
                : n(
                    r +
                      '[' +
                      ('object' == typeof t && null != t ? e : '') +
                      ']',
                    t,
                    i,
                    o
                  );
            });
          else if (i || 'object' !== w(e)) o(r, e);
          else for (var t in e) n(r + '[' + t + ']', e[t], i, o);
        })(r, e[r], t, n);
    return i.join('&');
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, 'elements');
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(':disabled') &&
              Mt.test(this.nodeName) &&
              !Bt.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(Pt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Pt, '\r\n') };
          })
          .get();
      },
    });
  var Rt = /%20/g,
    Wt = /#.*$/,
    Ft = /([?&])_=[^&]*/,
    $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    _t = /^(?:GET|HEAD)$/,
    Ut = /^\/\//,
    zt = {},
    Qt = {},
    Xt = '*/'.concat('*'),
    Yt = k.createElement('a');
  function Vt(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(H) || [];
      if (b(t))
        for (; (n = i[r++]); )
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Gt(t, i, o, a) {
    var s = {},
      u = t === Qt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        E.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Jt(e, t) {
    var n,
      r,
      i = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && E.extend(!0, e, r), e;
  }
  (Yt.href = qt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: qt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          qt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Xt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': E.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Jt(Jt(e, E.ajaxSettings), t) : Jt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Vt(zt),
      ajaxTransport: Vt(Qt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          d,
          n,
          p,
          r,
          h,
          g,
          i,
          o,
          m = E.ajaxSetup({}, t),
          v = m.context || m,
          y = m.context && (v.nodeType || v.jquery) ? E(v) : E.event,
          b = E.Deferred(),
          x = E.Callbacks('once memory'),
          w = m.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n)
                  for (n = {}; (t = $t.exec(d)); )
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? d : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (m.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (h) T.always(e[T.status]);
                else for (var t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (b.promise(T),
          (m.url = ((e || m.url || qt.href) + '').replace(
            Ut,
            qt.protocol + '//'
          )),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = (m.dataType || '*').toLowerCase().match(H) || ['']),
          null == m.crossDomain)
        ) {
          r = k.createElement('a');
          try {
            (r.href = m.url),
              (r.href = r.href),
              (m.crossDomain =
                Yt.protocol + '//' + Yt.host != r.protocol + '//' + r.host);
          } catch (e) {
            m.crossDomain = !0;
          }
        }
        if (
          (m.data &&
            m.processData &&
            'string' != typeof m.data &&
            (m.data = E.param(m.data, m.traditional)),
          Gt(zt, m, t, T),
          h)
        )
          return T;
        for (i in ((g = E.event && m.global) &&
          0 == E.active++ &&
          E.event.trigger('ajaxStart'),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !_t.test(m.type)),
        (f = m.url.replace(Wt, '')),
        m.hasContent
          ? m.data &&
            m.processData &&
            0 ===
              (m.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (m.data = m.data.replace(Rt, '+'))
          : ((o = m.url.slice(f.length)),
            m.data &&
              (m.processData || 'string' == typeof m.data) &&
              ((f += (It.test(f) ? '&' : '?') + m.data), delete m.data),
            !1 === m.cache &&
              ((f = f.replace(Ft, '$1')),
              (o = (It.test(f) ? '&' : '?') + '_=' + Lt.guid++ + o)),
            (m.url = f + o)),
        m.ifModified &&
          (E.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', E.lastModified[f]),
          E.etag[f] && T.setRequestHeader('If-None-Match', E.etag[f])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', m.contentType),
        T.setRequestHeader(
          'Accept',
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ('*' !== m.dataTypes[0] ? ', ' + Xt + '; q=0.01' : '')
            : m.accepts['*']
        ),
        m.headers))
          T.setRequestHeader(i, m.headers[i]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          x.add(m.complete),
          T.done(m.success),
          T.fail(m.error),
          (c = Gt(Qt, m, t, T)))
        ) {
          if (((T.readyState = 1), g && y.trigger('ajaxSend', [T, m]), h))
            return T;
          m.async &&
            0 < m.timeout &&
            (p = C.setTimeout(function () {
              T.abort('timeout');
            }, m.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            p && C.clearTimeout(p),
            (c = void 0),
            (d = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  '*' === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a = a || i;
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(m, T, n)),
            !i &&
              -1 < E.inArray('script', m.dataTypes) &&
              (m.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(m, s, T, i)),
            i
              ? (m.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (E.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (E.etag[f] = u)),
                204 === e || 'HEAD' === m.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? b.resolveWith(v, [o, l, T]) : b.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && y.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, m, i ? o : a]),
            x.fireWith(v, [T, l]),
            g &&
              (y.trigger('ajaxComplete', [T, m]),
              --E.active || E.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, 'script');
      },
    }),
    E.each(['get', 'post'], function (e, i) {
      E[i] = function (e, t, n, r) {
        return (
          b(t) && ((r = r || n), (n = t), (t = void 0)),
          E.ajax(
            E.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              E.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    E.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          E.globalEval(e, t, n);
        },
      });
    }),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (b(e) && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return b(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = b(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Kt = { 0: 200, 1223: 204 },
    Zt = E.ajaxSettings.xhr();
  (y.cors = !!Zt && 'withCredentials' in Zt),
    (y.ajax = Zt = !!Zt),
    E.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Kt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return E.globalEval(e), e;
        },
      },
    }),
    E.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    E.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = E('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              k.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var en,
    tn = [],
    nn = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = tn.pop() || E.expando + '_' + Lt.guid++;
      return (this[e] = !0), e;
    },
  }),
    E.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (nn.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              nn.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = b(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(nn, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (It.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || E.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? E(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), tn.push(r)),
              o && b(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (y.createHTMLDocument =
      (((en = k.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === en.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t = k.implementation.createHTMLDocument(
                  ''
                )).createElement('base')).href = k.location.href),
                t.head.appendChild(r))
              : (t = k)),
          (o = !n && []),
          (i = j.exec(e))
            ? [t.createElement(i[1])]
            : ((i = be([e], t, o)),
              o && o.length && E(o).remove(),
              E.merge([], i.childNodes)));
      var r, i, o;
    }),
    (E.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = St(e.slice(s))), (e = e.slice(0, s))),
        b(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          E.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? E('<div>').append(E.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (E.expr.pseudos.animated = function (t) {
      return E.grep(E.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, 'position'),
          c = E(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = E.css(e, 'top')),
          (u = E.css(e, 'left')),
          (i =
            ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
              ? ((a = (r = c.position()).top), r.left)
              : ((a = parseFloat(o) || 0), parseFloat(u) || 0)),
          b(t) && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t
            ? t.using.call(e, f)
            : ('number' == typeof f.top && (f.top += 'px'),
              'number' == typeof f.left && (f.left += 'px'),
              c.css(f));
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === E.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === E.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, 'borderTopWidth', !0)),
              (i.left += E.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - E.css(r, 'marginTop', !0),
            left: t.left - i.left - E.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === E.css(e, 'position');

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i;
        E.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              return (
                g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n
                  ? r
                    ? r[i]
                    : e[t]
                  : void (r
                      ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                      : (e[t] = n))
              );
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(['top', 'left'], function (e, n) {
      E.cssHooks[n] = Ge(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Ve(e, n)), Qe.test(t) ? E(e).position()[n] + 'px' : t;
      });
    }),
    E.each({ Height: 'height', Width: 'width' }, function (a, s) {
      E.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return $(
              this,
              function (e, t, n) {
                var r;
                return g(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        E.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || E.guid++),
        i
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = D),
    (E.isFunction = b),
    (E.isWindow = g),
    (E.camelCase = Q),
    (E.type = w),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? '' : (e + '').replace(rn, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return E;
      });
  var on = C.jQuery,
    an = C.$;
  return (
    (E.noConflict = function (e) {
      return C.$ === E && (C.$ = an), e && C.jQuery === E && (C.jQuery = on), E;
    }),
    void 0 === e && (C.jQuery = C.$ = E),
    E
  );
}),
  (function (e) {
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'object' == typeof module && 'object' == typeof module.exports
      ? (exports = e(require('jquery')))
      : e(jQuery);
  })(function (t) {
    t.easing.jswing = t.easing.swing;
    var n = Math.pow,
      r = Math.sqrt,
      i = Math.sin,
      o = Math.cos,
      a = Math.PI,
      s = 1.70158,
      u = 1.525 * s,
      l = (2 * a) / 3,
      c = (2 * a) / 4.5;
    function f(e) {
      var t = 7.5625,
        n = 2.75;
      return e < 1 / n
        ? t * e * e
        : e < 2 / n
        ? t * (e -= 1.5 / n) * e + 0.75
        : e < 2.5 / n
        ? t * (e -= 2.25 / n) * e + 0.9375
        : t * (e -= 2.625 / n) * e + 0.984375;
    }
    t.extend(t.easing, {
      def: 'easeOutQuad',
      swing: function (e) {
        return t.easing[t.easing.def](e);
      },
      easeInQuad: function (e) {
        return e * e;
      },
      easeOutQuad: function (e) {
        return 1 - (1 - e) * (1 - e);
      },
      easeInOutQuad: function (e) {
        return e < 0.5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2;
      },
      easeInCubic: function (e) {
        return e * e * e;
      },
      easeOutCubic: function (e) {
        return 1 - n(1 - e, 3);
      },
      easeInOutCubic: function (e) {
        return e < 0.5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2;
      },
      easeInQuart: function (e) {
        return e * e * e * e;
      },
      easeOutQuart: function (e) {
        return 1 - n(1 - e, 4);
      },
      easeInOutQuart: function (e) {
        return e < 0.5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2;
      },
      easeInQuint: function (e) {
        return e * e * e * e * e;
      },
      easeOutQuint: function (e) {
        return 1 - n(1 - e, 5);
      },
      easeInOutQuint: function (e) {
        return e < 0.5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2;
      },
      easeInSine: function (e) {
        return 1 - o((e * a) / 2);
      },
      easeOutSine: function (e) {
        return i((e * a) / 2);
      },
      easeInOutSine: function (e) {
        return -(o(a * e) - 1) / 2;
      },
      easeInExpo: function (e) {
        return 0 === e ? 0 : n(2, 10 * e - 10);
      },
      easeOutExpo: function (e) {
        return 1 === e ? 1 : 1 - n(2, -10 * e);
      },
      easeInOutExpo: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : e < 0.5
          ? n(2, 20 * e - 10) / 2
          : (2 - n(2, -20 * e + 10)) / 2;
      },
      easeInCirc: function (e) {
        return 1 - r(1 - n(e, 2));
      },
      easeOutCirc: function (e) {
        return r(1 - n(e - 1, 2));
      },
      easeInOutCirc: function (e) {
        return e < 0.5
          ? (1 - r(1 - n(2 * e, 2))) / 2
          : (r(1 - n(-2 * e + 2, 2)) + 1) / 2;
      },
      easeInElastic: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : -n(2, 10 * e - 10) * i((10 * e - 10.75) * l);
      },
      easeOutElastic: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : n(2, -10 * e) * i((10 * e - 0.75) * l) + 1;
      },
      easeInOutElastic: function (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : e < 0.5
          ? -(n(2, 20 * e - 10) * i((20 * e - 11.125) * c)) / 2
          : (n(2, -20 * e + 10) * i((20 * e - 11.125) * c)) / 2 + 1;
      },
      easeInBack: function (e) {
        return 2.70158 * e * e * e - s * e * e;
      },
      easeOutBack: function (e) {
        return 1 + 2.70158 * n(e - 1, 3) + s * n(e - 1, 2);
      },
      easeInOutBack: function (e) {
        return e < 0.5
          ? (n(2 * e, 2) * (7.189819 * e - u)) / 2
          : (n(2 * e - 2, 2) * ((1 + u) * (2 * e - 2) + u) + 2) / 2;
      },
      easeInBounce: function (e) {
        return 1 - f(1 - e);
      },
      easeOutBounce: f,
      easeInOutBounce: function (e) {
        return e < 0.5 ? (1 - f(1 - 2 * e)) / 2 : (1 + f(2 * e - 1)) / 2;
      },
    });
  }),
  (window.Sticksy = (function () {
    'use strict';
    var r = 'static';
    function a(e, t) {
      if (!e) throw new Error('You have to specify the target element');
      if ('string' != typeof e && !(e instanceof Element))
        throw new Error(
          'Expected a string or element, but got: ' +
            Object.prototype.toString.call(e)
        );
      var n = s.findElement(e);
      if (!n) throw new Error('Cannot find target element: ' + e);
      var r = n.parentNode;
      if (!r) throw new Error('Cannot find container of target element: ' + e);
      (t = t || {}),
        (this.t = {
          containerEl: r,
          targetEl: n,
          topSpacing: t.topSpacing || 0,
          enabled: t.enabled || !0,
          listen: t.listen || !1,
        }),
        (this.onStateChanged = null),
        (this.nodeRef = n),
        this.i();
    }
    (a.instances = []),
      (a.enabledInstances = []),
      (a.prototype.i = function () {
        var e = this;
        (this.state = r), (this.o = []), (this.h = []);
        for (var t = this.t.targetEl; t; ) {
          var n = t.cloneNode(!0);
          (n.style.visibility = 'hidden'),
            (n.style.pointerEvents = 'none'),
            (n.className += ' sticksy-dummy-node'),
            n.removeAttribute('id'),
            this.t.targetEl.parentNode.insertBefore(n, this.t.targetEl),
            this.o.push(t),
            this.h.push(n),
            (t = t.nextElementSibling);
        }
        (this.u = 0),
          (this.l = { top: 0, bottom: 0 }),
          (this.v = !1),
          (this.t.containerEl.style.position = 'relative'),
          (this.m =
            -1 ===
            getComputedStyle(this.t.containerEl).display.indexOf('flex')),
          this.t.listen &&
            ((this.p = new MutationObserver(function () {
              e.hardRefresh();
            })),
            this.g()),
          a.instances.push(this),
          this.t.enabled && a.enabledInstances.push(this),
          this.hardRefresh();
      }),
      (a.prototype.g = function () {
        this.t.listen &&
          !this.v &&
          (this.p.observe(this.t.containerEl, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          }),
          (this.v = !0));
      }),
      (a.prototype.C = function () {
        this.t.listen && this.v && (this.p.disconnect(), (this.v = !1));
      }),
      (a.prototype.M = function (e) {
        return e < this.l.top ? r : e >= this.l.bottom ? 'stuck' : 'fixed';
      }),
      (a.prototype.S = function () {
        this.u =
          s.getComputedBox(this.o[this.o.length - 1]).bottomWithMargin -
          s.getComputedBox(this.o[0]).topWithMargin;
      }),
      (a.prototype.j = function () {
        var e = this.t.containerEl,
          t = this.o,
          e = s.getComputedBox(e),
          t = s.getComputedBox(t[0]);
        this.l = {
          top: t.topWithMargin - this.t.topSpacing,
          bottom: e.bottom - e.paddingBottom - this.t.topSpacing - this.u,
        };
      }),
      (a.prototype.B = function (e) {
        e === r
          ? (this.P(this.o), this.T(this.h))
          : (this.k(this.o),
            'fixed' === e ? this.O(this.o) : this.W(this.o),
            this.D(this.h));
      }),
      (a.prototype.refresh = function () {
        var e = this.M(window.pageYOffset, this.l);
        e !== this.state &&
          ((this.state = e),
          this.C(),
          this.B(e),
          this.g(),
          'function' == typeof this.onStateChanged && this.onStateChanged(e));
      }),
      (a.prototype.hardRefresh = function () {
        this.C();
        var e = this.state;
        (this.state = r),
          this.B(this.state),
          this.k(this.o),
          this.S(),
          this.j(),
          (this.state = this.M(window.pageYOffset, this.l)),
          this.B(this.state),
          this.g(),
          'function' == typeof this.onStateChanged &&
            e !== this.state &&
            this.onStateChanged(this.state);
      }),
      (a.prototype.enable = function () {
        (this.t.enabled = !0),
          a.enabledInstances.push(this),
          this.hardRefresh();
      }),
      (a.prototype.disable = function () {
        (this.t.enabled = !1),
          (this.state = r),
          this.B(this.state),
          a.enabledInstances.splice(a.enabledInstances.indexOf(this), 1);
      }),
      (a.prototype.O = function (e) {
        for (var t = 0, n = this.t.topSpacing, r = 0; r < e.length; r++) {
          var i = e[r],
            o = s.getComputedBox(i),
            a = this.m ? Math.max(0, t - o.marginTop) : t;
          (i.style.position = 'fixed'),
            (i.style.top = n + a + 'px'),
            (i.style.bottom = ''),
            (n += o.height + o.marginTop + a),
            (t = o.marginBottom);
        }
      }),
      (a.prototype.W = function (e) {
        for (
          var t = 0,
            n = s.getComputedBox(this.t.containerEl).paddingBottom,
            r = e.length - 1;
          0 <= r;
          r--
        ) {
          var i = e[r],
            o = s.getComputedBox(i),
            a = this.m ? Math.max(0, t - o.marginBottom) : t;
          (i.style.position = 'absolute'),
            (i.style.top = 'auto'),
            (i.style.bottom = n + a + 'px'),
            (n += o.height + o.marginBottom + a),
            (t = o.marginTop);
        }
      }),
      (a.prototype.P = function (e) {
        e.forEach(function (e) {
          (e.style.position = ''),
            (e.style.top = ''),
            (e.style.bottom = ''),
            (e.style.height = ''),
            (e.style.width = '');
        });
      }),
      (a.prototype.T = function (e) {
        e.forEach(function (e) {
          e.style.display = 'none';
        });
      }),
      (a.prototype.D = function (e) {
        for (var t = 0; t < e.length; t++)
          e[t].style.display = getComputedStyle(this.o[t]).display;
      }),
      (a.prototype.k = function () {
        for (var e = 0; e < this.o.length; e++) {
          var t = this.o[e],
            n = getComputedStyle(t);
          (t.style.width = n.width), (t.style.height = n.height);
        }
      }),
      (a.refreshAll = function () {
        for (var e = 0; e < a.enabledInstances.length; e++)
          a.enabledInstances[e].refresh();
      }),
      (a.hardRefreshAll = function () {
        for (var e = 0; e < a.enabledInstances.length; e++)
          a.enabledInstances[e].hardRefresh();
      }),
      (a.enableAll = function () {
        (a.enabledInstances = a.instances.slice()), this.hardRefreshAll();
      }),
      (a.disableAll = function () {
        for (var e = a.enabledInstances.slice(), t = 0; t < e.length; t++)
          a.enabledInstances[t].disable();
        a.enabledInstances = [];
      }),
      (a.initializeAll = function (e, t, n) {
        if (void 0 === e) throw new Error("'target' parameter is undefined");
        var r = [];
        e instanceof Element
          ? (r = [e])
          : void 0 !== e.length && 0 < e.length && e[0] instanceof Element
          ? (r = 'function' == typeof e.get ? e.get() : e)
          : 'string' == typeof e && (r = document.querySelectorAll(e) || []);
        var i = [],
          o = [];
        if (
          (r.forEach(function (e) {
            -1 === i.indexOf(e.parentNode) && (i.push(e.parentNode), o.push(e));
          }),
          !n && !o.length)
        )
          throw new Error('There are no elements to initialize');
        return o.map(function (e) {
          return new a(e, t);
        });
      }),
      window.addEventListener('scroll', a.refreshAll),
      window.addEventListener('resize', a.hardRefreshAll);
    var s = {
      parseNumber: function (e) {
        return parseFloat(e) || 0;
      },
      findElement: function (e, t) {
        return (
          (t = t || document),
          'string' == typeof e
            ? t.querySelector(e)
            : e instanceof Element
            ? e
            : void 0
        );
      },
      getComputedBox: function (e) {
        var t = e.getBoundingClientRect(),
          e = getComputedStyle(e);
        return {
          height: t.height,
          width: t.width,
          top: window.pageYOffset + t.top,
          bottom: window.pageYOffset + t.bottom,
          marginTop: s.parseNumber(e.marginTop),
          marginBottom: s.parseNumber(e.marginBottom),
          paddingTop: s.parseNumber(e.paddingTop),
          paddingBottom: s.parseNumber(e.paddingBottom),
          topWithMargin:
            window.pageYOffset + t.top - s.parseNumber(e.marginTop),
          bottomWithMargin:
            window.pageYOffset + t.bottom + s.parseNumber(e.marginBottom),
        };
      },
    };
    return a;
  })());
var jQueryPlugin = window.$ || window.jQuery || window.Zepto;
jQueryPlugin &&
  (jQueryPlugin.fn.sticksy = function (e) {
    return window.Sticksy.initializeAll(this, e);
  }),
  (function (t) {
    var n,
      r,
      i = {
        init: function (e) {
          n = '#cookie-bar';
          (r = t.extend(
            {
              wrapper: 'body',
              expireDays: 365,
              msg:
                'We use cookies to provide our services and enhance your experience. By using this website, you agree with this.',
              btnText: 'OK',
            },
            e
          )),
            'accepted' !== i.getCookie('cookies-state') && i.displayBar(),
            t(document).on('click', n + ' .accept-cookies', function (e) {
              e.preventDefault(),
                i.setCookie('cookies-state', 'accepted', r.expireDays),
                i.hideBar();
            });
        },
        displayBar: function () {
          var e =
            '<div id="cookie-bar" class="cookie-bar"><span class="cookie-message">' +
            r.msg +
            '</span><button type="button" class="accept-cookies">' +
            r.btnText +
            '</button></div>';
          t(r.wrapper).append(e);
        },
        hideBar: function () {
          t(n).css('bottom', '-100%');
        },
        setCookie: function (e, t, n) {
          var r = new Date();
          r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
          var i = 'expires=' + r.toUTCString();
          document.cookie = e + '=' + t + ';' + i + ';path=/';
        },
        getCookie: function (e) {
          for (
            var t = e + '=', n = document.cookie.split(';'), r = 0;
            r < n.length;
            r++
          ) {
            for (var i = n[r]; ' ' === i.charAt(0); ) i = i.substring(1);
            if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
          }
          return '';
        },
      };
    t.cookieBar = function (e) {
      return i[e]
        ? i[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof e && e
        ? void t.error(
            'Method ' + e + ' does not exist on Cookie Bar component'
          )
        : i.init.apply(this, arguments);
    };
  })(jQuery),
  (function (s) {
    'use strict';
    function u(n, t, e) {
      s.ajax({ type: 'POST', url: t, data: e, timeout: 4e4 })
        .done(function (e) {
          'OK' == e.trim()
            ? (n.find('.loading').slideUp(),
              n.find('.sent-message').slideDown(),
              n.find('input:not(input[type=submit]), textarea').val(''))
            : (n.find('.loading').slideUp(),
              (e =
                e ||
                'Form submission failed and no error message returned from: ' +
                  t +
                  '<br>'),
              n.find('.error-message').slideDown().html(e));
        })
        .fail(function (e) {
          console.log(e);
          var t = 'Form submission failed!<br>';
          (e.statusText || e.status) &&
            ((t += 'Status:'),
            e.statusText && (t += ' ' + e.statusText),
            e.status && (t += ' ' + e.status),
            (t += '<br>')),
            e.responseText && (t += e.responseText),
            n.find('.loading').slideUp(),
            n.find('.error-message').slideDown().html(t);
        });
    }
    s('form.php-email-form').submit(function (e) {
      e.preventDefault();
      var t = s(this).find('.form-group'),
        o = !1,
        a = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
      if (
        (t.children('input').each(function () {
          var e = s(this);
          if (void 0 !== (n = e.attr('data-rule'))) {
            var t,
              n,
              r = !1,
              i = n.indexOf(':', 0);
            switch (
              (n =
                0 <= i
                  ? ((t = n.substr(i + 1, n.length)), n.substr(0, i))
                  : n.substr(i + 1, n.length))
            ) {
              case 'required':
                '' === e.val() && (o = r = !0);
                break;
              case 'minlen':
                e.val().length < parseInt(t) && (o = r = !0);
                break;
              case 'email':
                a.test(e.val()) || (o = r = !0);
                break;
              case 'checked':
                e.is(':checked') || (o = r = !0);
                break;
              case 'regexp':
                (t = new RegExp(t)).test(e.val()) || (o = r = !0);
            }
            e.next('.validate')
              .html(
                r
                  ? void 0 !== e.attr('data-msg')
                    ? e.attr('data-msg')
                    : 'wrong Input'
                  : ''
              )
              .show('blind');
          }
        }),
        t.children('textarea').each(function () {
          var e = s(this);
          if (void 0 !== (n = e.attr('data-rule'))) {
            var t,
              n,
              r = !1,
              i = n.indexOf(':', 0);
            switch (
              (n =
                0 <= i
                  ? ((t = n.substr(i + 1, n.length)), n.substr(0, i))
                  : n.substr(i + 1, n.length))
            ) {
              case 'required':
                '' === e.val() && (o = r = !0);
                break;
              case 'minlen':
                e.val().length < parseInt(t) && (o = r = !0);
            }
            e.next('.validate')
              .html(
                r
                  ? null != e.attr('data-msg')
                    ? e.attr('data-msg')
                    : 'wrong Input'
                  : ''
              )
              .show('blind');
          }
        }),
        o)
      )
        return !1;
      var n,
        r = s(this),
        i = s(this).attr('action');
      return i
        ? (r.find('.sent-message').slideUp(),
          r.find('.error-message').slideUp(),
          r.find('.loading').slideDown(),
          s(this).data('recaptcha-site-key')
            ? ((n = s(this).data('recaptcha-site-key')),
              grecaptcha.ready(function () {
                grecaptcha
                  .execute(n, { action: 'php_email_form_submit' })
                  .then(function (e) {
                    u(r, i, r.serialize() + '&recaptcha-response=' + e);
                  });
              }))
            : u(r, i, r.serialize()),
          !0)
        : (r.find('.loading').slideUp(),
          r
            .find('.error-message')
            .slideDown()
            .html('The form action property is not set!'),
          !1);
    });
  })(jQuery),
  (function (i) {
    'use strict';
    function t() {
      i('.mobile-nav-overly').remove(),
        i('body').removeClass('mobile-nav-active'),
        i('.nav-menu').hide(),
        i('.mobile-nav-show').show(),
        i('.mobile-nav-hide').hide();
    }
    function n() {
      return i('#header').outerHeight();
    }
    function e() {
      var e,
        t = i(document).height();
      (i(window).height() + i(window).scrollTop() <=
        t - (i('#footer').outerHeight() + 900)) /
        t ==
        0 &&
        i('#loadmore').length &&
        ((e = i('#loadmore').data('url')),
        i('#loadmore').remove(),
        i.ajax({ type: 'POST', url: e, timeout: 4e5 }).done(function (e) {
          i('.loadmore').append(e);
        }));
    }
    function r(e) {
      i(e).empty(),
        i(e).append('<div class="loading mb-2" style="display: block;"></div>');
    }
    function o(e, t, n) {
      var r = new Date();
      r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
      var i = 'expires=' + r.toUTCString();
      document.cookie = e + '=' + t + ';' + i + ';path=/';
    }
    i(window).scroll(function () {
      100 < i(this).scrollTop()
        ? i('.back-to-top').hasClass('back-to-top-display') ||
          i('.back-to-top').addClass('back-to-top-display')
        : i('.back-to-top').hasClass('back-to-top-display') &&
          i('.back-to-top').removeClass('back-to-top-display');
    }),
      i('.back-to-top').click(function (e) {
        return (
          e.preventDefault(),
          i('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'),
          !0
        );
      }),
      i('.search-bar-toggle').on('click', function () {
        i('.search-bar').is(':visible')
          ? i('.search-bar').slideUp()
          : i('.search-bar').slideDown();
      }),
      i(document).on('click', '.mobile-nav-show', function (e) {
        e.preventDefault(),
          i('body').append('<div class="mobile-nav-overly"></div>'),
          i('body').addClass('mobile-nav-active'),
          i('.nav-menu').show(),
          i('.mobile-nav-show').hide(),
          i('.mobile-nav-hide').show();
      }),
      i(document).on('click', '.mobile-nav-hide', function (e) {
        e.preventDefault(), t();
      }),
      i(document).on(
        'click',
        '.mobile-nav-active .nav-menu li:not(.nav-categories) a',
        function (e) {
          t();
        }
      ),
      i(document).on(
        'click',
        '.mobile-nav-active .nav-categories > a',
        function (e) {
          e.preventDefault(),
            i('.nav-menu .nav-categories ul').toggleClass('d-flex');
        }
      ),
      i('.scroll, .scroll-download').on('click', function (e) {
        e.preventDefault(),
          i('html, body').animate(
            { scrollTop: i(i(this).attr('href')).offset().top - n() + 'px' },
            1e3,
            'easeInOutExpo'
          );
      }),
      i(window).on('load', function () {
        window.location.hash &&
          i('#download-template').length &&
          i('html, body').animate(
            { scrollTop: i('#download-template').offset().top - n() + 'px' },
            1e3,
            'easeInOutExpo'
          );
      }),
      i.cookieBar({
        msg:
          'We use cookies to provide our services and enhance your experience. By using this website, you agree with our <a href="https://bootstrapmade.com/privacy/">Privacy &amp; Cookie Policy</a>',
      }),
      e(),
      i(window).on('scroll', function () {
        e();
      }),
      i('.select-template').on('change', function (e) {
        e.preventDefault();
        var t,
          n = i(this).val();
        'single' == n
          ? (void 0 !==
            (t = i('#select-single').find(':selected').attr('value'))
              ? i('#template_name').val(t)
              : i('#template_name').val(''),
            i('.license-membership').hide(),
            i('.license-single').show(),
            i('#select-single').show(),
            i('#single-selected').show())
          : 'membership' == n &&
            (i('#template_name').val('membership'),
            i('.license-membership').show(),
            i('.license-single').hide(),
            i('#select-single').hide(),
            i('#single-selected').hide());
      }),
      i('#select-single').on('change', function (e) {
        e.preventDefault();
        var t,
          n = i(this).find(':selected').attr('value');
        void 0 !== n
          ? (i('#template_name').val(n),
            (t =
              '<a href="' +
              i(this).find(':selected').data('url') +
              '" target="_blank"><img src="' +
              i(this).find(':selected').data('screenshot') +
              '" alt="' +
              n +
              '" class="img-fluid"></a>'),
            i('.single-template-name').text(n),
            i('#single-selected').html(t).show(),
            i(
              '.license-single .license-items, .license-single .license-features'
            ).show(),
            i('.select-single-template').hide())
          : (i('#template_name').val(''),
            i('#single-selected').html('').hide(),
            i(
              '.license-single .license-items, .license-single .license-features'
            ).hide(),
            i('.select-single-template').show());
      }),
      i('.license-items li').click(function (e) {
        e.preventDefault(),
          i('.license-items li').removeClass('active'),
          i(this).addClass('active'),
          i(this).find('.select-the-license').prop('checked', !0);
      }),
      i('.account-type').on('change', function (e) {
        e.preventDefault();
        var t = i(this).val();
        'create' == t
          ? (i('.account-create-form').show(), i('.account-login-form').hide())
          : 'login' == t &&
            (i('.account-create-form').hide(), i('.account-login-form').show());
      }),
      i(document).on('click', '#complete-order', function (e) {
        e.preventDefault();
        var t = i('#checkout-form'),
          n = t.serialize(),
          r = t.attr('action');
        t.find('.loading').show(),
          t.find('.order-result').hide(),
          t.find('.loading-payment-frame').hide(),
          i
            .ajax({ type: 'POST', url: r, data: n, timeout: 4e4 })
            .done(function (e) {
              (e = e.trim()),
                t.find('.loading').hide(),
                -1 !== e.indexOf('checkout.paddle.com')
                  ? (i(
                      '.select-account-type, .account-create-form, .account-login-form'
                    ).remove(),
                    i('.loading-payment-frame').show(),
                    i('body').prepend(
                      '<iframe id="payment-frame" src="' + e + '"></iframe>'
                    ),
                    i('#payment-frame').on('load', function () {
                      i(this).attr('src') &&
                        (i('#cancel-payment').show(),
                        i('.loading-payment-frame').hide());
                    }))
                  : (t.find('.order-result').show(),
                    i('.order-result').html(e));
            });
      }),
      i(document).on('click', '#cancel-payment', function (e) {
        e.preventDefault(),
          i('#cancel-payment').hide(),
          i('#payment-frame').remove();
      }),
      i(document).on('click', '.ajaxlink', function (e) {
        e.preventDefault();
        var t = i(this).data('append'),
          n = i(this).attr('href');
        i(t).is(':hidden') && i(t).fadeIn(),
          i.ajax({
            url: n,
            type: 'POST',
            dataType: 'html',
            data: 'ajax=true',
            success: function (e) {
              i(t).fadeIn(), i(t).html(e);
            },
          }),
          void 0 === i(this).data('silent') && r(t);
      }),
      i(document).on('submit', '.ajaxform', function (e) {
        e.preventDefault();
        var t = i(this).data('append'),
          n = i(this).attr('action');
        i(t).is(':hidden') && i(t).fadeIn(),
          i.ajax({
            url: n,
            type: 'POST',
            dataType: 'html',
            data: i('#' + i(this).attr('id')).serialize() + '&ajax=true',
            success: function (e) {
              i(t).fadeIn(), i(t).html(e);
            },
          }),
          void 0 === i(this).data('silent') && r(t);
      }),
      i(document).on('click', '.members-nav a', function (e) {
        i('.members-nav a').removeClass('active'), i(this).addClass('active');
      }),
      i('#confirm-newsletter').length &&
        (i('#confirm-newsletter .loading').show(),
        i
          .ajax({
            type: 'POST',
            url: i('#confirm-newsletter').data('url'),
            data:
              'key=' +
              i('#confirm-newsletter').data('key') +
              '&confirm=' +
              i('#confirm-newsletter').data('confirm'),
            timeout: 4e4,
          })
          .done(function (e) {
            i('#confirm-newsletter').html(e);
          })),
      i('.single-sidebar').length &&
        new Sticksy('.single-sidebar', { topSpacing: n() + 30, listen: !0 }),
      i(document).on('click', '.download-template-subscribe', function (e) {
        'subscribed' !=
          (function (e) {
            for (
              var t = e + '=', n = document.cookie.split(';'), r = 0;
              r < n.length;
              r++
            ) {
              for (var i = n[r]; ' ' === i.charAt(0); ) i = i.substring(1);
              if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
            }
            return '';
          })('newsletter') &&
          (e.preventDefault(),
          i('.download-subscribe').addClass('d-flex'),
          i('.just-download').attr('href', i(this).attr('href')),
          o('newsletter', 'subscribed', 7));
      }),
      i(document).on('click', '.close-subscribe-form', function (e) {
        e.preventDefault(), i('.download-subscribe').removeClass('d-flex');
      }),
      i(document).on('submit', '#download-newsletter-form', function (e) {
        e.preventDefault();
        var t = i(this);
        t.find('.loading').slideDown(),
          t.find('.sent-message').slideUp(),
          t.find('.error-message').slideUp(),
          i
            .ajax({
              type: 'POST',
              url: t.attr('action'),
              data: t.serialize(),
              timeout: 4e4,
            })
            .done(function (e) {
              'OK' == e.trim()
                ? (t.find('.loading').slideUp(),
                  t.find('.sent-message').slideDown(),
                  t.find('input:not(input[type=submit])').val(''),
                  o('newsletter', 'subscribed', 365),
                  window.setTimeout(function () {
                    window.location.href = i('.just-download').attr('href');
                  }, 2e3))
                : (t.find('.loading').slideUp(),
                  (e = e || 'Something went wrong. Please contact us!'),
                  t.find('.error-message').slideDown().html(e));
            });
      });
  })(jQuery),
  (function () {
    'use strict';
    ({
      init: function () {
        var e, t;
        return (
          this.getC('sitevisitor') ||
            ((e = new Object()),
            (t = new Date()),
            (e.referer = document.referrer),
            (e.request = location.pathname.substring(1)),
            (e.time =
              t.getFullYear() +
              '-' +
              (t.getMonth() + 1) +
              '-' +
              t.getDate() +
              ' ' +
              t.getHours() +
              ':' +
              t.getMinutes() +
              ':' +
              t.getSeconds()),
            this.setC('sitevisitor', btoa(JSON.stringify(e)), 365)),
          !0
        );
      },
      getC: function (e) {
        for (
          var t = e + '=', n = document.cookie.split(';'), r = 0;
          r < n.length;
          r++
        ) {
          for (var i = n[r]; ' ' === i.charAt(0); ) i = i.substring(1);
          if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return !1;
      },
      setC: function (e, t, n) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var i = 'expires=' + r.toUTCString();
        document.cookie = e + '=' + t + ';' + i + ';path=/';
      },
    }.init());
  })(jQuery);
