"use strict";

$(function () {
  // Get the form.
  var form = $('#contact-form'); // Get the messages div.

  var formMessages = $('.ajax-response'); // Set up an event listener for the contact form.

  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault(); // Serialize the form data.

    var formData = $(form).serialize(); // Submit the form using AJAX.

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    }).done(function (response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success'); // Set the message text.

      $(formMessages).text(response); // Clear the form.

      $('#contact-form input,#contact-form textarea').val('');
    }).fail(function (data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error'); // Set the message text.

      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(void 0, function (t, e, n) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function r() {
    return (r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  e = e && e.hasOwnProperty("default") ? e["default"] : e, n = n && n.hasOwnProperty("default") ? n["default"] : n;

  var o,
      a,
      l,
      h,
      c,
      u,
      f,
      d,
      _,
      g,
      p,
      m,
      v,
      E,
      T,
      y,
      C,
      I,
      A,
      b,
      D,
      S,
      w,
      N,
      O,
      k,
      P = function (t) {
    var e = !1;

    function n(e) {
      var n = this,
          s = !1;
      return t(this).one(i.TRANSITION_END, function () {
        s = !0;
      }), setTimeout(function () {
        s || i.triggerTransitionEnd(n);
      }, e), this;
    }

    var i = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(e) {
        var n,
            i = e.getAttribute("data-target");
        i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));

        try {
          return t(document).find(i).length > 0 ? i : null;
        } catch (t) {
          return null;
        }
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var s in n) {
          if (Object.prototype.hasOwnProperty.call(n, s)) {
            var r = n[s],
                o = e[s],
                a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
            if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
          }
        }

        var l;
      }
    };
    return e = ("undefined" == typeof window || !window.QUnit) && {
      end: "transitionend"
    }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
      bindType: e.end,
      delegateType: e.end,
      handle: function handle(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }), i;
  }(e),
      L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
    CLOSE: "close" + h,
    CLOSED: "closed" + h,
    CLICK_DATA_API: "click" + h + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.close = function (t) {
      t = t || this._element;

      var e = this._getRootElement(t);

      this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, e.dispose = function () {
      o.removeData(this._element, l), this._element = null;
    }, e._getRootElement = function (t) {
      var e = P.getSelectorFromElement(t),
          n = !1;
      return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
    }, e._triggerCloseEvent = function (t) {
      var e = o.Event(u.CLOSE);
      return o(t).trigger(e), e;
    }, e._removeElement = function (t) {
      var e = this;
      o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
        return e._destroyElement(t, n);
      }).emulateTransitionEnd(150) : this._destroyElement(t);
    }, e._destroyElement = function (t) {
      o(t).detach().trigger(u.CLOSED).remove();
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = o(this),
            i = n.data(l);
        i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
      });
    }, t._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
    return o.fn[a] = c, g._jQueryInterface;
  }, g),
      R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + T,
    FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
  }, k = function () {
    function t(t) {
      this._element = t;
    }

    var e = t.prototype;
    return e.toggle = function () {
      var t = !0,
          e = !0,
          n = p(this._element).closest(D)[0];

      if (n) {
        var i = p(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1;else {
            var s = p(n).find(w)[0];
            s && p(s).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !p(this._element).hasClass(C), p(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
    }, e.dispose = function () {
      p.removeData(this._element, v), this._element = null;
    }, t._jQueryInterface = function (e) {
      return this.each(function () {
        var n = p(this).data(v);
        n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]();
      });
    }, s(t, null, [{
      key: "VERSION",
      get: function get() {
        return "4.0.0";
      }
    }]), t;
  }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
    t.preventDefault();
    var e = t.target;
    p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
    var e = p(t.target).closest(N)[0];
    p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
    return p.fn[m] = y, k._jQueryInterface;
  }, k),
      j = function (t) {
    var e = "carousel",
        n = "bs.carousel",
        i = "." + n,
        o = t.fn[e],
        a = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    },
        l = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    },
        h = "next",
        c = "prev",
        u = "left",
        f = "right",
        d = {
      SLIDE: "slide" + i,
      SLID: "slid" + i,
      KEYDOWN: "keydown" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i,
      TOUCHEND: "touchend" + i,
      LOAD_DATA_API: "load" + i + ".data-api",
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        _ = "carousel",
        g = "active",
        p = "slide",
        m = "carousel-item-right",
        v = "carousel-item-left",
        E = "carousel-item-next",
        T = "carousel-item-prev",
        y = {
      ACTIVE: ".active",
      ACTIVE_ITEM: ".active.carousel-item",
      ITEM: ".carousel-item",
      NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
      INDICATORS: ".carousel-indicators",
      DATA_SLIDE: "[data-slide], [data-slide-to]",
      DATA_RIDE: '[data-ride="carousel"]'
    },
        C = function () {
      function o(e, n) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners();
      }

      var C = o.prototype;
      return C.next = function () {
        this._isSliding || this._slide(h);
      }, C.nextWhenVisible = function () {
        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
      }, C.prev = function () {
        this._isSliding || this._slide(c);
      }, C.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, C.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, C.to = function (e) {
        var n = this;
        this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];

        var i = this._getItemIndex(this._activeElement);

        if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
          return n.to(e);
        });else {
          if (i === e) return this.pause(), void this.cycle();
          var s = e > i ? h : c;

          this._slide(s, this._items[e]);
        }
      }, C.dispose = function () {
        t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, C._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, C._addEventListeners = function () {
        var e = this;
        this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(d.MOUSELEAVE, function (t) {
          return e.cycle(t);
        }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval);
        }));
      }, C._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;

          case 39:
            t.preventDefault(), this.next();
        }
      }, C._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e);
      }, C._getItemByDirection = function (t, e) {
        var n = t === h,
            i = t === c,
            s = this._getItemIndex(e),
            r = this._items.length - 1;

        if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
        var o = (s + (t === c ? -1 : 1)) % this._items.length;
        return -1 === o ? this._items[this._items.length - 1] : this._items[o];
      }, C._triggerSlideEvent = function (e, n) {
        var i = this._getItemIndex(e),
            s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
            r = t.Event(d.SLIDE, {
          relatedTarget: e,
          direction: n,
          from: s,
          to: i
        });

        return t(this._element).trigger(r), r;
      }, C._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);

          var n = this._indicatorsElement.children[this._getItemIndex(e)];

          n && t(n).addClass(g);
        }
      }, C._slide = function (e, n) {
        var i,
            s,
            r,
            o = this,
            a = t(this._element).find(y.ACTIVE_ITEM)[0],
            l = this._getItemIndex(a),
            c = n || a && this._getItemByDirection(e, a),
            _ = this._getItemIndex(c),
            C = Boolean(this._interval);

        if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
          this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
          var I = t.Event(d.SLID, {
            relatedTarget: c,
            direction: r,
            from: l,
            to: _
          });
          P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
            t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
              return t(o._element).trigger(I);
            }, 0);
          }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle();
        }
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = r({}, a, t(this).data());
          "object" == _typeof(e) && (s = r({}, s, e));
          var l = "string" == typeof e ? e : s.slide;
          if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
            if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');
            i[l]();
          } else s.interval && (i.pause(), i.cycle());
        });
      }, o._dataApiClickHandler = function (e) {
        var i = P.getSelectorFromElement(this);

        if (i) {
          var s = t(i)[0];

          if (s && t(s).hasClass(_)) {
            var a = r({}, t(s).data(), t(this).data()),
                l = this.getAttribute("data-slide-to");
            l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
          }
        }
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
      t(y.DATA_RIDE).each(function () {
        var e = t(this);

        C._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
      return t.fn[e] = o, C._jQueryInterface;
    }, C;
  }(e),
      H = function (t) {
    var e = "collapse",
        n = "bs.collapse",
        i = "." + n,
        o = t.fn[e],
        a = {
      toggle: !0,
      parent: ""
    },
        l = {
      toggle: "boolean",
      parent: "(string|element)"
    },
        h = {
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "show",
        u = "collapse",
        f = "collapsing",
        d = "collapsed",
        _ = "width",
        g = "height",
        p = {
      ACTIVES: ".show, .collapsing",
      DATA_TOGGLE: '[data-toggle="collapse"]'
    },
        m = function () {
      function i(e, n) {
        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));

        for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
          var r = i[s],
              o = P.getSelectorFromElement(r);
          null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r));
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var o = i.prototype;
      return o.toggle = function () {
        t(this._element).hasClass(c) ? this.hide() : this.show();
      }, o.show = function () {
        var e,
            s,
            r = this;

        if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
          var o = t.Event(h.SHOW);

          if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
            e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));

            var a = this._getDimension();

            t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);

            var l = function l() {
              t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
            };

            if (P.supportsTransitionEnd()) {
              var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));

              t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px";
            } else l();
          }
        }
      }, o.hide = function () {
        var e = this;

        if (!this._isTransitioning && t(this._element).hasClass(c)) {
          var n = t.Event(h.HIDE);

          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension();

            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) {
              var r = this._triggerArray[s],
                  o = P.getSelectorFromElement(r);
              if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
            }
            this.setTransitioning(!0);

            var a = function a() {
              e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
            };

            this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
          }
        }
      }, o.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, o.dispose = function () {
        t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, o._getConfig = function (t) {
        return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t;
      }, o._getDimension = function () {
        return t(this._element).hasClass(_) ? _ : g;
      }, o._getParent = function () {
        var e = this,
            n = null;
        P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
        var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
        return t(n).find(s).each(function (t, n) {
          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
        }), n;
      }, o._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(c);
          n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
        }
      }, i._getTargetFromElement = function (e) {
        var n = P.getSelectorFromElement(e);
        return n ? t(n)[0] : null;
      }, i._jQueryInterface = function (e) {
        return this.each(function () {
          var s = t(this),
              o = s.data(n),
              l = r({}, a, s.data(), "object" == _typeof(e) && e);

          if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
            if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');
            o[e]();
          }
        });
      }, s(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), i;
    }();

    return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var i = t(this),
          s = P.getSelectorFromElement(this);
      t(s).each(function () {
        var e = t(this),
            s = e.data(n) ? "toggle" : i.data();

        m._jQueryInterface.call(e, s);
      });
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = o, m._jQueryInterface;
    }, m;
  }(e),
      W = function (t) {
    var e = "dropdown",
        i = "bs.dropdown",
        o = "." + i,
        a = ".data-api",
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      CLICK: "click" + o,
      CLICK_DATA_API: "click" + o + a,
      KEYDOWN_DATA_API: "keydown" + o + a,
      KEYUP_DATA_API: "keyup" + o + a
    },
        u = "disabled",
        f = "show",
        d = "dropup",
        _ = "dropright",
        g = "dropleft",
        p = "dropdown-menu-right",
        m = "dropdown-menu-left",
        v = "position-static",
        E = '[data-toggle="dropdown"]',
        T = ".dropdown form",
        y = ".dropdown-menu",
        C = ".navbar-nav",
        I = ".dropdown-menu .dropdown-item:not(.disabled)",
        A = "top-start",
        b = "top-end",
        D = "bottom-start",
        S = "bottom-end",
        w = "right-start",
        N = "left-start",
        O = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent"
    },
        k = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)"
    },
        L = function () {
      function a(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var l = a.prototype;
      return l.toggle = function () {
        if (!this._element.disabled && !t(this._element).hasClass(u)) {
          var e = a._getParentFromElement(this._element),
              i = t(this._menu).hasClass(f);

          if (a._clearMenus(), !i) {
            var s = {
              relatedTarget: this._element
            },
                r = t.Event(c.SHOW, s);

            if (t(e).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                var o = this._element;
                t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig());
              }

              "ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
            }
          }
        }
      }, l.dispose = function () {
        t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, l.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, l._addEventListeners = function () {
        var e = this;
        t(this._element).on(c.CLICK, function (t) {
          t.preventDefault(), t.stopPropagation(), e.toggle();
        });
      }, l._getConfig = function (n) {
        return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, l._getMenuElement = function () {
        if (!this._menu) {
          var e = a._getParentFromElement(this._element);

          this._menu = t(e).find(y)[0];
        }

        return this._menu;
      }, l._getPlacement = function () {
        var e = t(this._element).parent(),
            n = D;
        return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n;
      }, l._detectNavbar = function () {
        return t(this._element).closest(".navbar").length > 0;
      }, l._getPopperConfig = function () {
        var t = this,
            e = {};
        return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
        } : e.offset = this._config.offset, {
          placement: this._getPlacement(),
          modifiers: {
            offset: e,
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i);

          if (n || (n = new a(this, "object" == _typeof(e) ? e : null), t(this).data(i, n)), "string" == typeof e) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, a._clearMenus = function (e) {
        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
          var r = a._getParentFromElement(n[s]),
              o = t(n[s]).data(i),
              l = {
            relatedTarget: n[s]
          };

          if (o) {
            var h = o._menu;

            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
              var u = t.Event(c.HIDE, l);
              t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
            }
          }
        }
      }, a._getParentFromElement = function (e) {
        var n,
            i = P.getSelectorFromElement(e);
        return i && (n = t(i)[0]), n || e.parentNode;
      }, a._dataApiKeydownHandler = function (e) {
        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
          var n = a._getParentFromElement(this),
              i = t(n).hasClass(f);

          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
            var s = t(n).find(I).get();

            if (0 !== s.length) {
              var r = s.indexOf(e.target);
              38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
            }
          } else {
            if (27 === e.which) {
              var o = t(n).find(E)[0];
              t(o).trigger("focus");
            }

            t(this).trigger("click");
          }
        }
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return O;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return k;
        }
      }]), a;
    }();

    return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
      e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
    }).on(c.CLICK_DATA_API, T, function (t) {
      t.stopPropagation();
    }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
      return t.fn[e] = l, L._jQueryInterface;
    }, L;
  }(e),
      M = function (t) {
    var e = "modal",
        n = "bs.modal",
        i = "." + n,
        o = t.fn.modal,
        a = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        l = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        h = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      FOCUSIN: "focusin" + i,
      RESIZE: "resize" + i,
      CLICK_DISMISS: "click.dismiss" + i,
      KEYDOWN_DISMISS: "keydown.dismiss" + i,
      MOUSEUP_DISMISS: "mouseup.dismiss" + i,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
      CLICK_DATA_API: "click" + i + ".data-api"
    },
        c = "modal-scrollbar-measure",
        u = "modal-backdrop",
        f = "modal-open",
        d = "fade",
        _ = "show",
        g = {
      DIALOG: ".modal-dialog",
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      STICKY_CONTENT: ".sticky-top",
      NAVBAR_TOGGLER: ".navbar-toggler"
    },
        p = function () {
      function o(e, n) {
        this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }

      var p = o.prototype;
      return p.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, p.show = function (e) {
        var n = this;

        if (!this._isTransitioning && !this._isShown) {
          P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
          var i = t.Event(h.SHOW, {
            relatedTarget: e
          });
          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
            return n.hide(t);
          }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
            t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
              t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return n._showElement(e);
          }));
        }
      }, p.hide = function (e) {
        var n = this;

        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
          var i = t.Event(h.HIDE);

          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
            this._isShown = !1;
            var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
            s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
              return n._hideModal(t);
            }).emulateTransitionEnd(300) : this._hideModal();
          }
        }
      }, p.dispose = function () {
        t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
      }, p.handleUpdate = function () {
        this._adjustDialog();
      }, p._getConfig = function (t) {
        return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
      }, p._showElement = function (e) {
        var n = this,
            i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();

        var s = t.Event(h.SHOWN, {
          relatedTarget: e
        }),
            r = function r() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
        };

        i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
      }, p._enforceFocus = function () {
        var e = this;
        t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
        });
      }, p._setEscapeEvent = function () {
        var e = this;
        this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
          27 === t.which && (t.preventDefault(), e.hide());
        }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
      }, p._setResizeEvent = function () {
        var e = this;
        this._isShown ? t(window).on(h.RESIZE, function (t) {
          return e.handleUpdate(t);
        }) : t(window).off(h.RESIZE);
      }, p._hideModal = function () {
        var e = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
        });
      }, p._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, p._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(d) ? d : "";

        if (this._isShown && this._config.backdrop) {
          var s = P.supportsTransitionEnd() && i;
          if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
          }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;
          if (!s) return void e();
          t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(_);

          var r = function r() {
            n._removeBackdrop(), e && e();
          };

          P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
        } else e && e();
      }, p._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, p._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, p._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, p._setScrollbar = function () {
        var e = this;

        if (this._isBodyOverflowing) {
          t(g.FIXED_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.paddingRight,
                r = t(i).css("padding-right");
            t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
          }), t(g.STICKY_CONTENT).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
          }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
            var s = t(i)[0].style.marginRight,
                r = t(i).css("margin-right");
            t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
          });
          var n = document.body.style.paddingRight,
              i = t("body").css("padding-right");
          t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }
      }, p._resetScrollbar = function () {
        t(g.FIXED_CONTENT).each(function (e, n) {
          var i = t(n).data("padding-right");
          "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
        }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
          var i = t(n).data("margin-right");
          "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
        });
        var e = t("body").data("padding-right");
        "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
      }, p._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = c, document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, o._jQueryInterface = function (e, i) {
        return this.each(function () {
          var s = t(this).data(n),
              a = r({}, o.Default, t(this).data(), "object" == _typeof(e) && e);

          if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
            if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');
            s[e](i);
          } else a.show && s.show(i);
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
      var i,
          s = this,
          o = P.getSelectorFromElement(this);
      o && (i = t(o)[0]);
      var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var l = t(i).one(h.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
          t(s).is(":visible") && s.focus();
        });
      });

      p._jQueryInterface.call(t(i), a, this);
    }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
      return t.fn.modal = o, p._jQueryInterface;
    }, p;
  }(e),
      U = function (t) {
    var e = "tooltip",
        i = "bs.tooltip",
        o = "." + i,
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    },
        c = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
        u = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    },
        f = "show",
        d = "out",
        _ = {
      HIDE: "hide" + o,
      HIDDEN: "hidden" + o,
      SHOW: "show" + o,
      SHOWN: "shown" + o,
      INSERTED: "inserted" + o,
      CLICK: "click" + o,
      FOCUSIN: "focusin" + o,
      FOCUSOUT: "focusout" + o,
      MOUSEENTER: "mouseenter" + o,
      MOUSELEAVE: "mouseleave" + o
    },
        g = "fade",
        p = "show",
        m = ".tooltip-inner",
        v = ".arrow",
        E = "hover",
        T = "focus",
        y = "click",
        C = "manual",
        I = function () {
      function a(t, e) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      var I = a.prototype;
      return I.enable = function () {
        this._isEnabled = !0;
      }, I.disable = function () {
        this._isEnabled = !1;
      }, I.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, I.toggle = function (e) {
        if (this._isEnabled) if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);
          i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, I.dispose = function () {
        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, I.show = function () {
        var e = this;
        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
        var i = t.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          t(this.element).trigger(i);
          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
          if (i.isDefaultPrevented() || !s) return;
          var r = this.getTipElement(),
              o = P.getUID(this.constructor.NAME);
          r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);

          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
              h = this._getAttachment(l);

          this.addAttachmentClass(h);
          var c = !1 === this.config.container ? document.body : t(this.config.container);
          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
            placement: h,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: v
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function onCreate(t) {
              t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
            },
            onUpdate: function onUpdate(t) {
              e._handlePopperPlacementChange(t);
            }
          }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);

          var u = function u() {
            e.config.animation && e._fixTransition();
            var n = e._hoverState;
            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
          };

          P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
        }
      }, I.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            s = t.Event(this.constructor.Event.HIDE),
            r = function r() {
          n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
        };

        t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
      }, I.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, I.isWithContent = function () {
        return Boolean(this.getTitle());
      }, I.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-tooltip-" + e);
      }, I.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, I.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
      }, I.setElementContent = function (e, n) {
        var i = this.config.html;
        "object" == _typeof(n) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
      }, I.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, I._getAttachment = function (t) {
        return c[t.toUpperCase()];
      }, I._setListeners = function () {
        var e = this;
        this.config.trigger.split(" ").forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== C) {
            var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
            t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(s, e.config.selector, function (t) {
              return e._leave(t);
            });
          }
          t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = r({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, I._fixTitle = function () {
        var t = _typeof(this.element.getAttribute("data-original-title"));

        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, I._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
          n._hoverState === f && n.show();
        }, n.config.delay.show) : n.show());
      }, I._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;
        (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
          n._hoverState === d && n.hide();
        }, n.config.delay.hide) : n.hide());
      }, I._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, I._getConfig = function (n) {
        return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
          show: n.delay,
          hide: n.delay
        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, I._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, I._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(l);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, I._handlePopperPlacementChange = function (t) {
        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, I._fixTransition = function () {
        var e = this.getTipElement(),
            n = this.config.animation;
        null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
      }, a._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(i),
              s = "object" == _typeof(e) && e;

          if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
            n[e]();
          }
        });
      }, s(a, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return u;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return o;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), a;
    }();

    return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = a, I._jQueryInterface;
    }, I;
  }(e),
      x = function (t) {
    var e = "popover",
        n = "bs.popover",
        i = "." + n,
        o = t.fn[e],
        a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        l = r({}, U.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        h = r({}, U.DefaultType, {
      content: "(string|element|function)"
    }),
        c = "fade",
        u = "show",
        f = ".popover-header",
        d = ".popover-body",
        _ = {
      HIDE: "hide" + i,
      HIDDEN: "hidden" + i,
      SHOW: "show" + i,
      SHOWN: "shown" + i,
      INSERTED: "inserted" + i,
      CLICK: "click" + i,
      FOCUSIN: "focusin" + i,
      FOCUSOUT: "focusout" + i,
      MOUSEENTER: "mouseenter" + i,
      MOUSELEAVE: "mouseleave" + i
    },
        g = function (r) {
      var o, g;

      function p() {
        return r.apply(this, arguments) || this;
      }

      g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
      var m = p.prototype;
      return m.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, m.addAttachmentClass = function (e) {
        t(this.getTipElement()).addClass("bs-popover-" + e);
      }, m.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0], this.tip;
      }, m.setContent = function () {
        var e = t(this.getTipElement());
        this.setElementContent(e.find(f), this.getTitle());

        var n = this._getContent();

        "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
      }, m._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, m._cleanTipClass = function () {
        var e = t(this.getTipElement()),
            n = e.attr("class").match(a);
        null !== n && n.length > 0 && e.removeClass(n.join(""));
      }, p._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n),
              s = "object" == _typeof(e) ? e : null;

          if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(p, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return l;
        }
      }, {
        key: "NAME",
        get: function get() {
          return e;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return n;
        }
      }, {
        key: "Event",
        get: function get() {
          return _;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return i;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return h;
        }
      }]), p;
    }(U);

    return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      K = function (t) {
    var e = "scrollspy",
        n = "bs.scrollspy",
        i = "." + n,
        o = t.fn[e],
        a = {
      offset: 10,
      method: "auto",
      target: ""
    },
        l = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        h = {
      ACTIVATE: "activate" + i,
      SCROLL: "scroll" + i,
      LOAD_DATA_API: "load" + i + ".data-api"
    },
        c = "dropdown-item",
        u = "active",
        f = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: ".active",
      NAV_LIST_GROUP: ".nav, .list-group",
      NAV_LINKS: ".nav-link",
      NAV_ITEMS: ".nav-item",
      LIST_ITEMS: ".list-group-item",
      DROPDOWN: ".dropdown",
      DROPDOWN_ITEMS: ".dropdown-item",
      DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
        d = "offset",
        _ = "position",
        g = function () {
      function o(e, n) {
        var i = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
          return i._process(t);
        }), this.refresh(), this._process();
      }

      var g = o.prototype;
      return g.refresh = function () {
        var e = this,
            n = this._scrollElement === this._scrollElement.window ? d : _,
            i = "auto" === this._config.method ? n : this._config.method,
            s = i === _ ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
          var n,
              r = P.getSelectorFromElement(e);

          if (r && (n = t(r)[0]), n) {
            var o = n.getBoundingClientRect();
            if (o.width || o.height) return [t(n)[i]().top + s, r];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, g.dispose = function () {
        t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, g._getConfig = function (n) {
        if ("string" != typeof (n = r({}, a, n)).target) {
          var i = t(n.target).attr("id");
          i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }

        return P.typeCheckConfig(e, n, l), n;
      }, g._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, g._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, g._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, g._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var s = this._offsets.length; s--;) {
            this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
          }
        }
      }, g._activate = function (e) {
        this._activeTarget = e, this._clear();

        var n = this._selector.split(",");

        n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
        });
        var i = t(n.join(","));
        i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {
          relatedTarget: e
        });
      }, g._clear = function () {
        t(this._selector).filter(f.ACTIVE).removeClass(u);
      }, o._jQueryInterface = function (e) {
        return this.each(function () {
          var i = t(this).data(n);

          if (i || (i = new o(this, "object" == _typeof(e) && e), t(this).data(n, i)), "string" == typeof e) {
            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
            i[e]();
          }
        });
      }, s(o, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }, {
        key: "Default",
        get: function get() {
          return a;
        }
      }]), o;
    }();

    return t(window).on(h.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);

        g._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = o, g._jQueryInterface;
    }, g;
  }(e),
      V = function (t) {
    var e = "bs.tab",
        n = "." + e,
        i = t.fn.tab,
        r = {
      HIDE: "hide" + n,
      HIDDEN: "hidden" + n,
      SHOW: "show" + n,
      SHOWN: "shown" + n,
      CLICK_DATA_API: "click.bs.tab.data-api"
    },
        o = "dropdown-menu",
        a = "active",
        l = "disabled",
        h = "fade",
        c = "show",
        u = ".dropdown",
        f = ".nav, .list-group",
        d = ".active",
        _ = "> li > .active",
        g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        p = ".dropdown-toggle",
        m = "> .dropdown-menu .active",
        v = function () {
      function n(t) {
        this._element = t;
      }

      var i = n.prototype;
      return i.show = function () {
        var e = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
          var n,
              i,
              s = t(this._element).closest(f)[0],
              o = P.getSelectorFromElement(this._element);

          if (s) {
            var h = "UL" === s.nodeName ? _ : d;
            i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
          }

          var c = t.Event(r.HIDE, {
            relatedTarget: this._element
          }),
              u = t.Event(r.SHOW, {
            relatedTarget: i
          });

          if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
            o && (n = t(o)[0]), this._activate(this._element, s);

            var g = function g() {
              var n = t.Event(r.HIDDEN, {
                relatedTarget: e._element
              }),
                  s = t.Event(r.SHOWN, {
                relatedTarget: i
              });
              t(i).trigger(n), t(e._element).trigger(s);
            };

            n ? this._activate(n, n.parentNode, g) : g();
          }
        }
      }, i.dispose = function () {
        t.removeData(this._element, e), this._element = null;
      }, i._activate = function (e, n, i) {
        var s = this,
            r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
            o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
            a = function a() {
          return s._transitionComplete(e, r, i);
        };

        r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
      }, i._transitionComplete = function (e, n, i) {
        if (n) {
          t(n).removeClass(c + " " + a);
          var s = t(n.parentNode).find(m)[0];
          s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
        }

        if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
          var r = t(e).closest(u)[0];
          r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
        }

        i && i();
      }, n._jQueryInterface = function (i) {
        return this.each(function () {
          var s = t(this),
              r = s.data(e);

          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
            if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
            r[i]();
          }
        });
      }, s(n, null, [{
        key: "VERSION",
        get: function get() {
          return "4.0.0";
        }
      }]), n;
    }();

    return t(document).on(r.CLICK_DATA_API, g, function (e) {
      e.preventDefault(), v._jQueryInterface.call(t(this), "show");
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
      return t.fn.tab = i, v._jQueryInterface;
    }, v;
  }(e);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var gj = {};
gj.widget = function () {
  var a = this;
  a.xhr = null, a.generateGUID = function () {
    function a() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
  }, a.mouseX = function (a) {
    if (a) {
      if (a.pageX) return a.pageX;
      if (a.clientX) return a.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      if (a.touches && a.touches.length) return a.touches[0].pageX;
      if (a.changedTouches && a.changedTouches.length) return a.changedTouches[0].pageX;
      if (a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length) return a.originalEvent.touches[0].pageX;
      if (a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) return a.originalEvent.touches[0].pageX;
    }

    return null;
  }, a.mouseY = function (a) {
    if (a) {
      if (a.pageY) return a.pageY;
      if (a.clientY) return a.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      if (a.touches && a.touches.length) return a.touches[0].pageY;
      if (a.changedTouches && a.changedTouches.length) return a.changedTouches[0].pageY;
      if (a.originalEvent && a.originalEvent.touches && a.originalEvent.touches.length) return a.originalEvent.touches[0].pageY;
      if (a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches.length) return a.originalEvent.touches[0].pageY;
    }

    return null;
  };
}, gj.widget.prototype.init = function (a, b) {
  var c, d, e;
  this.attr("data-type", b), d = $.extend(!0, {}, this.getHTMLConfig() || {}), $.extend(!0, d, a || {}), e = this.getConfig(d, b), this.attr("data-guid", e.guid), this.data(e);

  for (c in e) {
    gj[b].events.hasOwnProperty(c) && (this.on(c, e[c]), delete e[c]);
  }

  for (plugin in gj[b].plugins) {
    gj[b].plugins.hasOwnProperty(plugin) && gj[b].plugins[plugin].configure(this, e, d);
  }

  return this;
}, gj.widget.prototype.getConfig = function (a, b) {
  var c, d, e, f;
  c = $.extend(!0, {}, gj[b].config.base), d = a.hasOwnProperty("uiLibrary") ? a.uiLibrary : c.uiLibrary, gj[b].config[d] && $.extend(!0, c, gj[b].config[d]), e = a.hasOwnProperty("iconsLibrary") ? a.iconsLibrary : c.iconsLibrary, gj[b].config[e] && $.extend(!0, c, gj[b].config[e]);

  for (f in gj[b].plugins) {
    gj[b].plugins.hasOwnProperty(f) && ($.extend(!0, c, gj[b].plugins[f].config.base), gj[b].plugins[f].config[d] && $.extend(!0, c, gj[b].plugins[f].config[d]), gj[b].plugins[f].config[e] && $.extend(!0, c, gj[b].plugins[f].config[e]));
  }

  return $.extend(!0, c, a), c.guid || (c.guid = this.generateGUID()), c;
}, gj.widget.prototype.getHTMLConfig = function () {
  var a = this.data(),
      b = this[0].attributes;
  return b.width && (a.width = b.width.value), b.height && (a.height = b.height.value), b.value && (a.value = b.value.value), b.align && (a.align = b.align.value), a && a.source && (a.dataSource = a.source, delete a.source), a;
}, gj.widget.prototype.createDoneHandler = function () {
  var a = this;
  return function (b) {
    "string" == typeof b && JSON && (b = JSON.parse(b)), gj[a.data("type")].methods.render(a, b);
  };
}, gj.widget.prototype.createErrorHandler = function () {
  return function (a) {
    a && a.statusText && "abort" !== a.statusText && alert(a.statusText);
  };
}, gj.widget.prototype.reload = function (a) {
  var b,
      c,
      d = this.data(),
      e = this.data("type");
  return void 0 === d.dataSource && gj[e].methods.useHtmlDataSource(this, d), $.extend(d.params, a), $.isArray(d.dataSource) ? (c = gj[e].methods.filter(this), gj[e].methods.render(this, c)) : "string" == typeof d.dataSource ? (b = {
    url: d.dataSource,
    data: d.params
  }, this.xhr && this.xhr.abort(), this.xhr = $.ajax(b).done(this.createDoneHandler()).fail(this.createErrorHandler())) : "object" == _typeof(d.dataSource) && (d.dataSource.data || (d.dataSource.data = {}), $.extend(d.dataSource.data, d.params), b = $.extend(!0, {}, d.dataSource), "json" === b.dataType && "object" == _typeof(b.data) && (b.data = JSON.stringify(b.data)), b.success || (b.success = this.createDoneHandler()), b.error || (b.error = this.createErrorHandler()), this.xhr && this.xhr.abort(), this.xhr = $.ajax(b)), this;
}, gj.documentManager = {
  events: {},
  subscribeForEvent: function subscribeForEvent(a, b, c) {
    if (gj.documentManager.events[a] && 0 !== gj.documentManager.events[a].length) {
      if (gj.documentManager.events[a][b]) throw "Event " + a + ' for widget with guid="' + b + '" is already attached.';
      gj.documentManager.events[a].push({
        widgetId: b,
        callback: c
      });
    } else gj.documentManager.events[a] = [{
      widgetId: b,
      callback: c
    }], $(document).on(a, gj.documentManager.executeCallbacks);
  },
  executeCallbacks: function executeCallbacks(a) {
    var b = gj.documentManager.events[a.type];
    if (b) for (var c = 0; c < b.length; c++) {
      b[c].callback(a);
    }
  },
  unsubscribeForEvent: function unsubscribeForEvent(a, b) {
    var c = !1,
        d = gj.documentManager.events[a];
    if (d) for (var e = 0; e < d.length; e++) {
      d[e].widgetId === b && (d.splice(e, 1), c = !0, 0 === d.length && ($(document).off(a), delete gj.documentManager.events[a]));
    }
    if (!c) throw 'The "' + a + '" for widget with guid="' + b + "\" can't be removed.";
  }
}, gj.core = {
  messages: {
    "en-us": {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthShortNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekDaysMin: ["S", "M", "T", "W", "T", "F", "S"],
      weekDaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      am: "AM",
      pm: "PM",
      ok: "Ok",
      cancel: "Cancel",
      titleFormat: "mmmm yyyy"
    }
  },
  parseDate: function parseDate(a, b, c) {
    var d,
        e,
        f,
        g,
        h = 0,
        i = 0,
        j = 1,
        k = 0,
        l = 0;

    if (a && "string" == typeof a) {
      if (/^\d+$/.test(a)) g = new Date(a);else if (a.indexOf("/Date(") > -1) g = new Date(parseInt(a.substr(6), 10));else if (a) {
        for (f = b.split(/[\s,-\.\/\/\:]+/), e = a.split(/[\s]+/), e.length != f.length && (e = a.split(/[\s,-\.\/\/\:]+/)), d = 0; d < f.length; d++) {
          ["d", "dd"].indexOf(f[d]) > -1 ? j = parseInt(e[d], 10) : ["m", "mm"].indexOf(f[d]) > -1 ? i = parseInt(e[d], 10) - 1 : "mmm" === f[d] ? i = gj.core.messages[c || "en-us"].monthShortNames.indexOf(e[d]) : "mmmm" === f[d] ? i = gj.core.messages[c || "en-us"].monthNames.indexOf(e[d]) : ["yy", "yyyy"].indexOf(f[d]) > -1 ? (h = parseInt(e[d], 10), "yy" === f[d] && (h += 2e3)) : ["h", "hh", "H", "HH"].indexOf(f[d]) > -1 ? k = parseInt(e[d], 10) : ["M", "MM"].indexOf(f[d]) > -1 && (l = parseInt(e[d], 10));
        }

        g = new Date(h, i, j, k, l);
      }
    } else "number" == typeof a ? g = new Date(a) : a instanceof Date && (g = a);

    return g;
  },
  formatDate: function formatDate(a, b, c) {
    var d,
        e,
        f = "",
        g = b.split(/[\s,-\.\/\/\:]+/),
        h = b.split(/s+|M+|H+|h+|t+|T+|d+|m+|y+/);

    for (h = h.splice(1, h.length - 2), i = 0; i < g.length; i++) {
      switch (d = h[i] || "", g[i]) {
        case "s":
          f += a.getSeconds() + d;
          break;

        case "ss":
          f += gj.core.pad(a.getSeconds()) + d;
          break;

        case "M":
          f += a.getMinutes() + d;
          break;

        case "MM":
          f += gj.core.pad(a.getMinutes()) + d;
          break;

        case "H":
          f += a.getHours() + d;
          break;

        case "HH":
          f += gj.core.pad(a.getHours()) + d;
          break;

        case "h":
          e = a.getHours() > 12 ? a.getHours() % 12 : a.getHours(), f += e + d;
          break;

        case "hh":
          e = a.getHours() > 12 ? a.getHours() % 12 : a.getHours(), f += gj.core.pad(e) + d;
          break;

        case "tt":
          f += (a.getHours() >= 12 ? "pm" : "am") + d;
          break;

        case "TT":
          f += (a.getHours() >= 12 ? "PM" : "AM") + d;
          break;

        case "d":
          f += a.getDate() + d;
          break;

        case "dd":
          f += gj.core.pad(a.getDate()) + d;
          break;

        case "ddd":
          f += gj.core.messages[c || "en-us"].weekDaysShort[a.getDay()] + d;
          break;

        case "dddd":
          f += gj.core.messages[c || "en-us"].weekDays[a.getDay()] + d;
          break;

        case "m":
          f += a.getMonth() + 1 + d;
          break;

        case "mm":
          f += gj.core.pad(a.getMonth() + 1) + d;
          break;

        case "mmm":
          f += gj.core.messages[c || "en-us"].monthShortNames[a.getMonth()] + d;
          break;

        case "mmmm":
          f += gj.core.messages[c || "en-us"].monthNames[a.getMonth()] + d;
          break;

        case "yy":
          f += a.getFullYear().toString().substr(2) + d;
          break;

        case "yyyy":
          f += a.getFullYear() + d;
      }
    }

    return f;
  },
  pad: function pad(a, b) {
    for (a = String(a), b = b || 2; a.length < b;) {
      a = "0" + a;
    }

    return a;
  },
  center: function center(a) {
    var b = $(window).width() / 2 - a.width() / 2,
        c = $(window).height() / 2 - a.height() / 2;
    a.css("position", "absolute"), a.css("left", b > 0 ? b : 0), a.css("top", c > 0 ? c : 0);
  },
  isIE: function isIE() {
    return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
  },
  setChildPosition: function setChildPosition(a, b) {
    var c = a.getBoundingClientRect(),
        d = gj.core.height(a, !0),
        e = gj.core.height(b, !0),
        f = gj.core.width(a, !0),
        g = gj.core.width(b, !0),
        h = window.scrollY || window.pageYOffset || 0,
        i = window.scrollX || window.pageXOffset || 0;
    c.top + d + e > window.innerHeight && c.top > e ? b.style.top = Math.round(c.top + h - e - 3) + "px" : b.style.top = Math.round(c.top + h + d + 3) + "px", c.left + g > document.body.clientWidth ? b.style.left = Math.round(c.left + i + f - g) + "px" : b.style.left = Math.round(c.left + i) + "px";
  },
  height: function height(a, b) {
    var c,
        d = window.getComputedStyle(a);
    return "border-box" === d.boxSizing ? (c = parseInt(d.height, 10), gj.core.isIE() && (c += parseInt(d.paddingTop || 0, 10) + parseInt(d.paddingBottom || 0, 10), c += parseInt(d.borderTopWidth || 0, 10) + parseInt(d.borderBottomWidth || 0, 10))) : (c = parseInt(d.height, 10), c += parseInt(d.paddingTop || 0, 10) + parseInt(d.paddingBottom || 0, 10), c += parseInt(d.borderTopWidth || 0, 10) + parseInt(d.borderBottomWidth || 0, 10)), b && (c += parseInt(d.marginTop || 0, 10) + parseInt(d.marginBottom || 0, 10)), c;
  },
  width: function width(a, b) {
    var c,
        d = window.getComputedStyle(a);
    return "border-box" === d.boxSizing ? c = parseInt(d.width, 10) : (c = parseInt(d.width, 10), c += parseInt(d.paddingLeft || 0, 10) + parseInt(d.paddingRight || 0, 10), c += parseInt(d.borderLeftWidth || 0, 10) + parseInt(d.borderRightWidth || 0, 10)), b && (c += parseInt(d.marginLeft || 0, 10) + parseInt(d.marginRight || 0, 10)), c;
  },
  addClasses: function addClasses(a, b) {
    var c, d;
    if (b) for (d = b.split(" "), c = 0; c < d.length; c++) {
      a.classList.add(d[c]);
    }
  },
  position: function position(a) {
    for (var b, c, d = 0, e = 0, f = gj.core.height(a), g = gj.core.width(a); a;) {
      "BODY" == a.tagName ? (b = a.scrollLeft || document.documentElement.scrollLeft, c = a.scrollTop || document.documentElement.scrollTop, d += a.offsetLeft - b, e += a.offsetTop - c) : (d += a.offsetLeft - a.scrollLeft, e += a.offsetTop - a.scrollTop), a = a.offsetParent;
    }

    return {
      top: e,
      left: d,
      bottom: e + f,
      right: d + g
    };
  },
  setCaretAtEnd: function setCaretAtEnd(a) {
    var b;
    if (a) if (b = a.value.length, document.selection) {
      a.focus();
      var c = document.selection.createRange();
      c.moveStart("character", -b), c.moveStart("character", b), c.moveEnd("character", 0), c.select();
    } else (a.selectionStart || "0" == a.selectionStart) && (a.selectionStart = b, a.selectionEnd = b, a.focus());
  },
  getScrollParent: function getScrollParent(a) {
    return null == a ? null : a.scrollHeight > a.clientHeight ? a : gj.core.getScrollParent(a.parentNode);
  }
}, gj.picker = {
  messages: {
    "en-us": {}
  }
}, gj.picker.methods = {
  initialize: function initialize(a, b, c) {
    var d,
        e = c.createPicker(a, b),
        f = a.parent('div[role="wrapper"]');
    d = "bootstrap" === b.uiLibrary ? $('<span class="input-group-addon">' + b.icons.rightIcon + "</span>") : "bootstrap4" === b.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">' + b.icons.rightIcon + "</button></span>") : $(b.icons.rightIcon), d.attr("role", "right-icon"), 0 === f.length ? (f = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(f)) : f.addClass(b.style.wrapper), f = a.parent('div[role="wrapper"]'), b.width && f.css("width", b.width), a.val(b.value).addClass(b.style.input).attr("role", "input"), b.fontSize && a.css("font-size", b.fontSize), "bootstrap" === b.uiLibrary || "bootstrap4" === b.uiLibrary ? "small" === b.size ? (f.addClass("input-group-sm"), a.addClass("form-control-sm")) : "large" === b.size && (f.addClass("input-group-lg"), a.addClass("form-control-lg")) : "small" === b.size ? f.addClass("small") : "large" === b.size && f.addClass("large"), d.on("click", function (b) {
      e.is(":visible") ? a.close() : a.open();
    }), f.append(d), !0 !== b.footer && (a.on("blur", function () {
      a.timeout = setTimeout(function () {
        a.close();
      }, 500);
    }), e.mousedown(function () {
      return clearTimeout(a.timeout), a.focus(), !1;
    }), e.on("click", function () {
      clearTimeout(a.timeout), a.focus();
    }));
  }
}, gj.picker.widget = function (a, b) {
  var c = this,
      d = gj.picker.methods;
  return c.destroy = function () {
    return d.destroy(this);
  }, a;
}, gj.picker.widget.prototype = new gj.widget(), gj.picker.widget.constructor = gj.picker.widget, gj.picker.widget.prototype.init = function (a, b, c) {
  return gj.widget.prototype.init.call(this, a, b), this.attr("data-" + b, "true"), gj.picker.methods.initialize(this, this.data(), gj[b].methods), this;
}, gj.picker.widget.prototype.open = function (a) {
  var b = this.data(),
      c = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return c.show(), c.closest('div[role="modal"]').show(), b.modal ? gj.core.center(c) : (gj.core.setChildPosition(this[0], c[0]), this.focus()), clearTimeout(this.timeout), gj[a].events.open(this), this;
}, gj.picker.widget.prototype.close = function (a) {
  var b = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return b.hide(), b.closest('div[role="modal"]').hide(), gj[a].events.close(this), this;
}, gj.picker.widget.prototype.destroy = function (a) {
  var b = this.data(),
      c = this.parent(),
      d = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return b && (this.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), this.removeData(), this.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-" + a), this.removeClass(), c.children('[role="right-icon"]').remove(), this.unwrap()), this;
}, gj.dialog = {
  plugins: {},
  messages: {}
}, gj.dialog.config = {
  base: {
    autoOpen: !0,
    closeButtonInHeader: !0,
    closeOnEscape: !0,
    draggable: !0,
    height: "auto",
    locale: "en-us",
    maxHeight: void 0,
    maxWidth: void 0,
    minHeight: void 0,
    minWidth: void 0,
    modal: !1,
    resizable: !1,
    scrollable: !1,
    title: void 0,
    uiLibrary: void 0,
    width: 300,
    style: {
      modal: "gj-modal",
      content: "gj-dialog-md",
      header: "gj-dialog-md-header gj-unselectable",
      headerTitle: "gj-dialog-md-title",
      headerCloseButton: "gj-dialog-md-close",
      body: "gj-dialog-md-body",
      footer: "gj-dialog-footer gj-dialog-md-footer"
    }
  },
  bootstrap: {
    style: {
      modal: "modal",
      content: "modal-content gj-dialog-bootstrap",
      header: "modal-header",
      headerTitle: "modal-title",
      headerCloseButton: "close",
      body: "modal-body",
      footer: "gj-dialog-footer modal-footer"
    }
  },
  bootstrap4: {
    style: {
      modal: "modal",
      content: "modal-content gj-dialog-bootstrap4",
      header: "modal-header",
      headerTitle: "modal-title",
      headerCloseButton: "close",
      body: "modal-body",
      footer: "gj-dialog-footer modal-footer"
    }
  }
}, gj.dialog.events = {
  initialized: function initialized(a) {
    a.trigger("initialized");
  },
  opening: function opening(a) {
    a.trigger("opening");
  },
  opened: function opened(a) {
    a.trigger("opened");
  },
  closing: function closing(a) {
    a.trigger("closing");
  },
  closed: function closed(a) {
    a.trigger("closed");
  },
  drag: function drag(a) {
    a.trigger("drag");
  },
  dragStart: function dragStart(a) {
    a.trigger("dragStart");
  },
  dragStop: function dragStop(a) {
    a.trigger("dragStop");
  },
  resize: function resize(a) {
    a.trigger("resize");
  },
  resizeStart: function resizeStart(a) {
    a.trigger("resizeStart");
  },
  resizeStop: function resizeStop(a) {
    a.trigger("resizeStop");
  }
}, gj.dialog.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "dialog"), gj.dialog.methods.localization(this), gj.dialog.methods.initialize(this), gj.dialog.events.initialized(this), this;
  },
  localization: function localization(a) {
    var b = a.data();
    void 0 === b.title && (b.title = gj.dialog.messages[b.locale].DefaultTitle);
  },
  getHTMLConfig: function getHTMLConfig() {
    var a = gj.widget.prototype.getHTMLConfig.call(this),
        b = this[0].attributes;
    return b.title && (a.title = b.title.value), a;
  },
  initialize: function initialize(a) {
    var b,
        c,
        d,
        e = a.data();
    a.addClass(e.style.content), gj.dialog.methods.setSize(a), e.closeOnEscape && $(document).keyup(function (b) {
      27 === b.keyCode && a.close();
    }), c = a.children('div[data-role="body"]'), 0 === c.length ? (c = $('<div data-role="body"/>').addClass(e.style.body), a.wrapInner(c)) : c.addClass(e.style.body), b = gj.dialog.methods.renderHeader(a), d = a.children('div[data-role="footer"]').addClass(e.style.footer), a.find('[data-role="close"]').on("click", function () {
      a.close();
    }), gj.draggable && (e.draggable && gj.dialog.methods.draggable(a, b), e.resizable && gj.dialog.methods.resizable(a)), e.scrollable && e.height && (a.addClass("gj-dialog-scrollable"), a.on("opened", function () {
      a.children('div[data-role="body"]').css("height", e.height - b.outerHeight() - (d.length ? d.outerHeight() : 0));
    })), gj.core.center(a), e.modal && a.wrapAll('<div data-role="modal" class="' + e.style.modal + '"/>'), e.autoOpen && a.open();
  },
  setSize: function setSize(a) {
    var b = a.data();
    b.width && a.css("width", b.width), b.height && a.css("height", b.height);
  },
  renderHeader: function renderHeader(a) {
    var b,
        c,
        d,
        e = a.data();
    return b = a.children('div[data-role="header"]'), 0 === b.length && (b = $('<div data-role="header" />'), a.prepend(b)), b.addClass(e.style.header), c = b.find('[data-role="title"]'), 0 === c.length && (c = $('<h4 data-role="title">' + e.title + "</h4>"), b.append(c)), c.addClass(e.style.headerTitle), d = b.find('[data-role="close"]'), 0 === d.length && e.closeButtonInHeader ? (d = $('<button type="button" data-role="close" title="' + gj.dialog.messages[e.locale].Close + '"><span>×</span></button>'), d.addClass(e.style.headerCloseButton), b.append(d)) : d.length > 0 && !1 === e.closeButtonInHeader ? d.hide() : d.addClass(e.style.headerCloseButton), b;
  },
  draggable: function draggable(a, b) {
    a.appendTo("body"), b.addClass("gj-draggable"), a.draggable({
      handle: b,
      start: function start() {
        a.addClass("gj-unselectable"), gj.dialog.events.dragStart(a);
      },
      stop: function stop() {
        a.removeClass("gj-unselectable"), gj.dialog.events.dragStop(a);
      }
    });
  },
  resizable: function resizable(a) {
    var b = {
      drag: gj.dialog.methods.resize,
      start: function start() {
        a.addClass("gj-unselectable"), gj.dialog.events.resizeStart(a);
      },
      stop: function stop() {
        this.removeAttribute("style"), a.removeClass("gj-unselectable"), gj.dialog.events.resizeStop(a);
      }
    };
    a.append($('<div class="gj-resizable-handle gj-resizable-n"></div>').draggable($.extend(!0, {
      horizontal: !1
    }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-e"></div>').draggable($.extend(!0, {
      vertical: !1
    }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-s"></div>').draggable($.extend(!0, {
      horizontal: !1
    }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-w"></div>').draggable($.extend(!0, {
      vertical: !1
    }, b))), a.append($('<div class="gj-resizable-handle gj-resizable-ne"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-nw"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-sw"></div>').draggable($.extend(!0, {}, b))), a.append($('<div class="gj-resizable-handle gj-resizable-se"></div>').draggable($.extend(!0, {}, b)));
  },
  resize: function resize(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = !1;
    return c = $(this), d = c.parent(), e = gj.core.position(this), offset = {
      top: b.top - e.top,
      left: b.left - e.left
    }, f = d.data(), c.hasClass("gj-resizable-n") ? (g = d.height() - offset.top, i = d.offset().top + offset.top) : c.hasClass("gj-resizable-e") ? h = d.width() + offset.left : c.hasClass("gj-resizable-s") ? g = d.height() + offset.top : c.hasClass("gj-resizable-w") ? (h = d.width() - offset.left, j = d.offset().left + offset.left) : c.hasClass("gj-resizable-ne") ? (g = d.height() - offset.top, i = d.offset().top + offset.top, h = d.width() + offset.left) : c.hasClass("gj-resizable-nw") ? (g = d.height() - offset.top, i = d.offset().top + offset.top, h = d.width() - offset.left, j = d.offset().left + offset.left) : c.hasClass("gj-resizable-se") ? (g = d.height() + offset.top, h = d.width() + offset.left) : c.hasClass("gj-resizable-sw") && (g = d.height() + offset.top, h = d.width() - offset.left, j = d.offset().left + offset.left), g && (!f.minHeight || g >= f.minHeight) && (!f.maxHeight || g <= f.maxHeight) && (d.height(g), i && d.css("top", i), k = !0), h && (!f.minWidth || h >= f.minWidth) && (!f.maxWidth || h <= f.maxWidth) && (d.width(h), j && d.css("left", j), k = !0), k && gj.dialog.events.resize(d), k;
  },
  open: function open(a, b) {
    var c;
    return gj.dialog.events.opening(a), a.css("display", "block"), a.closest('div[data-role="modal"]').css("display", "block"), c = a.children('div[data-role="footer"]'), c.length && c.outerHeight() && a.children('div[data-role="body"]').css("margin-bottom", c.outerHeight()), void 0 !== b && a.find('[data-role="title"]').html(b), gj.dialog.events.opened(a), a;
  },
  close: function close(a) {
    return a.is(":visible") && (gj.dialog.events.closing(a), a.css("display", "none"), a.closest('div[data-role="modal"]').css("display", "none"), gj.dialog.events.closed(a)), a;
  },
  isOpen: function isOpen(a) {
    return a.is(":visible");
  },
  content: function content(a, b) {
    var c = a.children('div[data-role="body"]');
    return void 0 === b ? c.html() : c.html(b);
  },
  destroy: function destroy(a, b) {
    var c = a.data();
    return c && (!1 === b ? a.remove() : (a.close(), a.off(), a.removeData(), a.removeAttr("data-type"), a.removeClass(c.style.content), a.find('[data-role="header"]').removeClass(c.style.header), a.find('[data-role="title"]').removeClass(c.style.headerTitle), a.find('[data-role="close"]').remove(), a.find('[data-role="body"]').removeClass(c.style.body), a.find('[data-role="footer"]').removeClass(c.style.footer))), a;
  }
}, gj.dialog.widget = function (a, b) {
  var c = this,
      d = gj.dialog.methods;
  return c.open = function (a) {
    return d.open(this, a);
  }, c.close = function () {
    return d.close(this);
  }, c.isOpen = function () {
    return d.isOpen(this);
  }, c.content = function (a) {
    return d.content(this, a);
  }, c.destroy = function (a) {
    return d.destroy(this, a);
  }, $.extend(a, c), "dialog" !== a.attr("data-type") && d.init.call(a, b), a;
}, gj.dialog.widget.prototype = new gj.widget(), gj.dialog.widget.constructor = gj.dialog.widget, gj.dialog.widget.prototype.getHTMLConfig = gj.dialog.methods.getHTMLConfig, function (a) {
  a.fn.dialog = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.dialog.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.dialog.widget(this, a);
    }
  };
}(jQuery), gj.dialog.messages["en-us"] = {
  Close: "Close",
  DefaultTitle: "Dialog"
}, gj.draggable = {
  plugins: {}
}, gj.draggable.config = {
  base: {
    handle: void 0,
    vertical: !0,
    horizontal: !0,
    containment: void 0
  }
}, gj.draggable.methods = {
  init: function init(a) {
    var b,
        c,
        d = this;
    return gj.widget.prototype.init.call(this, a, "draggable"), c = this.data(), d.attr("data-draggable", "true"), b = gj.draggable.methods.getHandleElement(d), b.on("touchstart mousedown", function (a) {
      var e = gj.core.position(d[0]);
      d[0].style.top = e.top + "px", d[0].style.left = e.left + "px", d[0].style.position = "fixed", d.attr("draggable-dragging", !0), d.removeAttr("draggable-x").removeAttr("draggable-y"), gj.documentManager.subscribeForEvent("touchmove", d.data("guid"), gj.draggable.methods.createMoveHandler(d, b, c)), gj.documentManager.subscribeForEvent("mousemove", d.data("guid"), gj.draggable.methods.createMoveHandler(d, b, c));
    }), gj.documentManager.subscribeForEvent("mouseup", d.data("guid"), gj.draggable.methods.createUpHandler(d)), gj.documentManager.subscribeForEvent("touchend", d.data("guid"), gj.draggable.methods.createUpHandler(d)), gj.documentManager.subscribeForEvent("touchcancel", d.data("guid"), gj.draggable.methods.createUpHandler(d)), d;
  },
  getHandleElement: function getHandleElement(a) {
    var b = a.data("handle");
    return b && b.length ? b : a;
  },
  createUpHandler: function createUpHandler(a) {
    return function (b) {
      "true" === a.attr("draggable-dragging") && (a.attr("draggable-dragging", !1), gj.documentManager.unsubscribeForEvent("mousemove", a.data("guid")), gj.documentManager.unsubscribeForEvent("touchmove", a.data("guid")), gj.draggable.events.stop(a, {
        x: a.mouseX(b),
        y: a.mouseY(b)
      }));
    };
  },
  createMoveHandler: function createMoveHandler(a, b, c) {
    return function (b) {
      var d, e, f, g, h, i;
      "true" === a.attr("draggable-dragging") && (d = Math.round(a.mouseX(b)), e = Math.round(a.mouseY(b)), h = a.attr("draggable-x"), i = a.attr("draggable-y"), h && i ? (f = c.horizontal ? d - parseInt(h, 10) : 0, g = c.vertical ? e - parseInt(i, 10) : 0, gj.draggable.methods.move(a[0], c, f, g, d, e)) : gj.draggable.events.start(a, d, e), a.attr("draggable-x", d), a.attr("draggable-y", e));
    };
  },
  move: function move(a, b, c, d, e, f) {
    var g,
        h,
        i,
        j = gj.core.position(a),
        k = j.top + d,
        l = j.left + c;
    b.containment && (g = gj.core.position(b.containment), h = g.top + gj.core.height(b.containment) - gj.core.height(a), i = g.left + gj.core.width(b.containment) - gj.core.width(a), k > g.top && k < h ? (g.top >= f || g.bottom <= f) && (k = j.top) : k = k <= g.top ? g.top + 1 : h - 1, l > g.left && l < i ? (g.left >= e || g.right <= e) && (l = j.left) : l = l <= g.left ? g.left + 1 : i - 1), !1 !== gj.draggable.events.drag($(a), l, k, e, f) && (a.style.top = k + "px", a.style.left = l + "px");
  },
  destroy: function destroy(a) {
    return "true" === a.attr("data-draggable") && (gj.documentManager.unsubscribeForEvent("mouseup", a.data("guid")), a.removeData(), a.removeAttr("data-guid").removeAttr("data-type").removeAttr("data-draggable"), a.removeAttr("draggable-x").removeAttr("draggable-y").removeAttr("draggable-dragging"), a[0].style.top = "", a[0].style.left = "", a[0].style.position = "", a.off("drag").off("start").off("stop"), gj.draggable.methods.getHandleElement(a).off("mousedown")), a;
  }
}, gj.draggable.events = {
  drag: function drag(a, b, c, d, e) {
    return a.triggerHandler("drag", [{
      left: b,
      top: c
    }, {
      x: d,
      y: e
    }]);
  },
  start: function start(a, b, c) {
    a.triggerHandler("start", [{
      x: b,
      y: c
    }]);
  },
  stop: function stop(a, b) {
    a.triggerHandler("stop", [b]);
  }
}, gj.draggable.widget = function (a, b) {
  var c = this,
      d = gj.draggable.methods;
  return a.destroy || (c.destroy = function () {
    return d.destroy(this);
  }), $.extend(a, c), "true" !== a.attr("data-draggable") && d.init.call(a, b), a;
}, gj.draggable.widget.prototype = new gj.widget(), gj.draggable.widget.constructor = gj.draggable.widget, function (a) {
  a.fn.draggable = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.draggable.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.draggable.widget(this, a);
    }
  };
}(jQuery), gj.droppable = {
  plugins: {}
}, gj.droppable.config = {
  hoverClass: void 0
}, gj.droppable.methods = {
  init: function init(a) {
    var b = this;
    return gj.widget.prototype.init.call(this, a, "droppable"), b.attr("data-droppable", "true"), gj.documentManager.subscribeForEvent("mousedown", b.data("guid"), gj.droppable.methods.createMouseDownHandler(b)), gj.documentManager.subscribeForEvent("mousemove", b.data("guid"), gj.droppable.methods.createMouseMoveHandler(b)), gj.documentManager.subscribeForEvent("mouseup", b.data("guid"), gj.droppable.methods.createMouseUpHandler(b)), b;
  },
  createMouseDownHandler: function createMouseDownHandler(a) {
    return function (b) {
      a.isDragging = !0;
    };
  },
  createMouseMoveHandler: function createMouseMoveHandler(a) {
    return function (b) {
      if (a.isDragging) {
        var c = a.data("hoverClass"),
            d = {
          x: a.mouseX(b),
          y: a.mouseY(b)
        },
            e = gj.droppable.methods.isOver(a, d);
        e != a.isOver && (e ? (c && a.addClass(c), gj.droppable.events.over(a, d)) : (c && a.removeClass(c), gj.droppable.events.out(a))), a.isOver = e;
      }
    };
  },
  createMouseUpHandler: function createMouseUpHandler(a) {
    return function (b) {
      var c = {
        left: a.mouseX(b),
        top: a.mouseY(b)
      };
      a.isDragging = !1, gj.droppable.methods.isOver(a, c) && gj.droppable.events.drop(a);
    };
  },
  isOver: function isOver(a, b) {
    var c = a.offset().top,
        d = a.offset().left;
    return b.x > d && b.x < d + a.outerWidth(!0) && b.y > c && b.y < c + a.outerHeight(!0);
  },
  destroy: function destroy(a) {
    return "true" === a.attr("data-droppable") && (gj.documentManager.unsubscribeForEvent("mousedown", a.data("guid")), gj.documentManager.unsubscribeForEvent("mousemove", a.data("guid")), gj.documentManager.unsubscribeForEvent("mouseup", a.data("guid")), a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-droppable"), a.off("drop").off("over").off("out")), a;
  }
}, gj.droppable.events = {
  drop: function drop(a, b, c) {
    a.trigger("drop", [{
      top: c,
      left: b
    }]);
  },
  over: function over(a, b) {
    a.trigger("over", [b]);
  },
  out: function out(a) {
    a.trigger("out");
  }
}, gj.droppable.widget = function (a, b) {
  var c = this,
      d = gj.droppable.methods;
  return c.isOver = !1, c.isDragging = !1, c.destroy = function () {
    return d.destroy(this);
  }, c.isOver = function (a) {
    return d.isOver(this, a);
  }, $.extend(a, c), "true" !== a.attr("data-droppable") && d.init.call(a, b), a;
}, gj.droppable.widget.prototype = new gj.widget(), gj.droppable.widget.constructor = gj.droppable.widget, function (a) {
  a.fn.droppable = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.droppable.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.droppable.widget(this, a);
    }
  };
}(jQuery), gj.grid = {
  plugins: {},
  messages: {}
}, gj.grid.config = {
  base: {
    dataSource: void 0,
    columns: [],
    autoGenerateColumns: !1,
    defaultColumnSettings: {
      hidden: !1,
      width: void 0,
      sortable: !1,
      type: "text",
      title: void 0,
      field: void 0,
      align: void 0,
      cssClass: void 0,
      headerCssClass: void 0,
      tooltip: void 0,
      icon: void 0,
      events: void 0,
      format: "mm/dd/yyyy",
      decimalDigits: void 0,
      tmpl: void 0,
      stopPropagation: !1,
      renderer: void 0,
      filter: void 0
    },
    mapping: {
      dataField: "records",
      totalRecordsField: "total"
    },
    params: {},
    paramNames: {
      sortBy: "sortBy",
      direction: "direction"
    },
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    selectionType: "single",
    selectionMethod: "basic",
    autoLoad: !0,
    notFoundText: void 0,
    width: void 0,
    minWidth: void 0,
    headerRowHeight: "fixed",
    bodyRowHeight: "autogrow",
    fontSize: void 0,
    primaryKey: void 0,
    locale: "en-us",
    defaultIconColumnWidth: 70,
    defaultCheckBoxColumnWidth: 70,
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-md",
      loadingCover: "gj-grid-loading-cover",
      loadingText: "gj-grid-loading-text",
      header: {
        cell: void 0,
        sortable: "gj-cursor-pointer gj-unselectable"
      },
      content: {
        rowSelected: "gj-grid-md-select"
      }
    },
    icons: {
      asc: "▲",
      desc: "▼"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-3 table table-bordered table-hover",
      content: {
        rowSelected: "active"
      }
    },
    iconsLibrary: "glyphicons",
    defaultIconColumnWidth: 34,
    defaultCheckBoxColumnWidth: 36
  },
  bootstrap4: {
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-4 table table-bordered table-hover",
      content: {
        rowSelected: "active"
      }
    },
    defaultIconColumnWidth: 42,
    defaultCheckBoxColumnWidth: 44
  },
  materialicons: {
    icons: {
      asc: '<i class="gj-icon arrow-upward" />',
      desc: '<i class="gj-icon arrow-downward" />'
    }
  },
  fontawesome: {
    icons: {
      asc: '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>',
      desc: '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    icons: {
      asc: '<span class="glyphicon glyphicon-sort-by-alphabet" />',
      desc: '<span class="glyphicon glyphicon-sort-by-alphabet-alt" />'
    }
  }
}, gj.grid.events = {
  beforeEmptyRowInsert: function beforeEmptyRowInsert(a, b) {
    return a.triggerHandler("beforeEmptyRowInsert", [b]);
  },
  dataBinding: function dataBinding(a, b) {
    return a.triggerHandler("dataBinding", [b]);
  },
  dataBound: function dataBound(a, b, c) {
    return a.triggerHandler("dataBound", [b, c]);
  },
  rowDataBound: function rowDataBound(a, b, c, d) {
    return a.triggerHandler("rowDataBound", [b, c, d]);
  },
  cellDataBound: function cellDataBound(a, b, c, d, e) {
    return a.triggerHandler("cellDataBound", [b, c, d, e]);
  },
  rowSelect: function rowSelect(a, b, c, d) {
    return a.triggerHandler("rowSelect", [b, c, d]);
  },
  rowUnselect: function rowUnselect(a, b, c, d) {
    return a.triggerHandler("rowUnselect", [b, c, d]);
  },
  rowRemoving: function rowRemoving(a, b, c, d) {
    return a.triggerHandler("rowRemoving", [b, c, d]);
  },
  destroying: function destroying(a) {
    return a.triggerHandler("destroying");
  },
  columnHide: function columnHide(a, b) {
    return a.triggerHandler("columnHide", [b]);
  },
  columnShow: function columnShow(a, b) {
    return a.triggerHandler("columnShow", [b]);
  },
  initialized: function initialized(a) {
    return a.triggerHandler("initialized");
  },
  dataFiltered: function dataFiltered(a, b) {
    return a.triggerHandler("dataFiltered", [b]);
  }
}, gj.grid.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "grid"), gj.grid.methods.initialize(this), this.data("autoLoad") && this.reload(), this;
  },
  getConfig: function getConfig(a, b) {
    var c = gj.widget.prototype.getConfig.call(this, a, b);
    return gj.grid.methods.setDefaultColumnConfig(c.columns, c.defaultColumnSettings), c;
  },
  setDefaultColumnConfig: function setDefaultColumnConfig(a, b) {
    var c, d;
    if (a && a.length) for (d = 0; d < a.length; d++) {
      c = $.extend(!0, {}, b), $.extend(!0, c, a[d]), a[d] = c;
    }
  },
  getHTMLConfig: function getHTMLConfig() {
    var a = gj.widget.prototype.getHTMLConfig.call(this);
    return a.columns = [], this.find("thead > tr > th").each(function () {
      var b = $(this),
          c = b.text(),
          d = gj.widget.prototype.getHTMLConfig.call(b);
      d.title = c, d.field || (d.field = c), d.events && (d.events = gj.grid.methods.eventsParser(d.events)), a.columns.push(d);
    }), a;
  },
  eventsParser: function eventsParser(events) {
    var result = {},
        list,
        i,
        key,
        func,
        position;

    for (list = events.split(","), i = 0; i < list.length; i++) {
      (position = list[i].indexOf(":")) > 0 && (key = $.trim(list[i].substr(0, position)), func = $.trim(list[i].substr(position + 1, list[i].length)), result[key] = eval("window." + func));
    }

    return result;
  },
  initialize: function initialize(a) {
    var b = a.data(),
        c = a.parent('div[data-role="wrapper"]');
    gj.grid.methods.localization(b), 0 === c.length ? (c = $('<div data-role="wrapper" />').addClass(b.style.wrapper), a.wrap(c)) : c.addClass(b.style.wrapper), b.width && a.parent().css("width", b.width), b.minWidth && a.css("min-width", b.minWidth), b.fontSize && a.css("font-size", b.fontSize), "autogrow" === b.headerRowHeight && a.addClass("autogrow-header-row"), "fixed" === b.bodyRowHeight && a.addClass("fixed-body-rows"), a.addClass(b.style.table), "checkbox" === b.selectionMethod && b.columns.splice(gj.grid.methods.getColumnPositionNotInRole(a), 0, {
      title: "",
      width: b.defaultCheckBoxColumnWidth,
      align: "center",
      type: "checkbox",
      role: "selectRow",
      events: {
        click: function click(b) {
          gj.grid.methods.setSelected(a, b.data.id, $(this).closest("tr"));
        }
      },
      headerCssClass: "gj-grid-select-all",
      stopPropagation: !0
    }), 0 === a.children("tbody").length && a.append($("<tbody/>")), gj.grid.methods.renderHeader(a), gj.grid.methods.appendEmptyRow(a, "&nbsp;"), gj.grid.events.initialized(a);
  },
  localization: function localization(a) {
    a.notFoundText || (a.notFoundText = gj.grid.messages[a.locale].NoRecordsFound);
  },
  renderHeader: function renderHeader(a) {
    var b, c, d, e, f, g, h, i, j;

    for (b = a.data(), c = b.columns, d = b.style.header, e = a.children("thead"), 0 === e.length && (e = $("<thead />"), a.prepend(e)), f = $('<tr data-role="caption" />'), i = 0; i < c.length; i += 1) {
      g = $('<th data-field="' + (c[i].field || "") + '" />'), c[i].width ? g.attr("width", c[i].width) : "checkbox" === c[i].type && g.attr("width", b.defaultIconColumnWidth), g.addClass(d.cell), c[i].headerCssClass && g.addClass(c[i].headerCssClass), g.css("text-align", c[i].align || "left"), "checkbox" === b.selectionMethod && "multiple" === b.selectionType && "checkbox" === c[i].type && "selectRow" === c[i].role ? (j = g.find('input[data-role="selectAll"]'), 0 === j.length && (j = $('<input type="checkbox" data-role="selectAll" />'), g.append(j), j.checkbox({
        uiLibrary: b.uiLibrary
      })), j.off("click").on("click", function () {
        this.checked ? a.selectAll() : a.unSelectAll();
      })) : (h = $('<div data-role="title"/>').html(void 0 === c[i].title ? c[i].field : c[i].title), g.append(h), c[i].sortable && (h.addClass(d.sortable), h.on("click", gj.grid.methods.createSortHandler(a, c[i])))), c[i].hidden && g.hide(), f.append(g);
    }

    e.empty().append(f);
  },
  createSortHandler: function createSortHandler(a, b) {
    return function () {
      var c,
          d = {};
      a.count() > 0 && (c = a.data(), d[c.paramNames.sortBy] = b.field, b.direction = "asc" === b.direction ? "desc" : "asc", d[c.paramNames.direction] = b.direction, a.reload(d));
    };
  },
  updateHeader: function updateHeader(a) {
    var b,
        c,
        d = a.data(),
        e = d.params[d.paramNames.sortBy],
        f = d.params[d.paramNames.direction];
    a.find('thead tr th [data-role="sorticon"]').remove(), e && (position = gj.grid.methods.getColumnPosition(a.data("columns"), e), position > -1 && (c = a.find("thead tr th:eq(" + position + ') div[data-role="title"]'), b = $('<div data-role="sorticon" class="gj-unselectable" />').append("desc" === f ? d.icons.desc : d.icons.asc), c.after(b)));
  },
  useHtmlDataSource: function useHtmlDataSource(a, b) {
    var c,
        d,
        e,
        f,
        g = [],
        h = a.find('tbody tr[data-role != "empty"]');

    for (c = 0; c < h.length; c++) {
      for (e = $(h[c]).find("td"), f = {}, d = 0; d < e.length; d++) {
        f[b.columns[d].field] = $(e[d]).html();
      }

      g.push(f);
    }

    b.dataSource = g;
  },
  startLoading: function startLoading(a) {
    var b, c, d, e, f, g, h;
    gj.grid.methods.stopLoading(a), h = a.data(), 0 !== a.outerHeight() && (b = a.children("tbody"), e = b.outerWidth(!1), f = b.outerHeight(!1), g = Math.abs(a.parent().offset().top - b.offset().top), c = $('<div data-role="loading-cover" />').addClass(h.style.loadingCover).css({
      width: e,
      height: f,
      top: g
    }), d = $('<div data-role="loading-text">' + gj.grid.messages[h.locale].Loading + "</div>").addClass(h.style.loadingText), d.insertAfter(a), c.insertAfter(a), d.css({
      top: g + f / 2 - d.outerHeight(!1) / 2,
      left: e / 2 - d.outerWidth(!1) / 2
    }));
  },
  stopLoading: function stopLoading(a) {
    a.parent().find('div[data-role="loading-cover"]').remove(), a.parent().find('div[data-role="loading-text"]').remove();
  },
  appendEmptyRow: function appendEmptyRow(a, b) {
    var c, d, e, f;
    c = a.data(), d = $('<tr data-role="empty"/>'), e = $("<td/>").css({
      width: "100%",
      "text-align": "center"
    }), e.attr("colspan", gj.grid.methods.countVisibleColumns(a)), f = $("<div />").html(b || c.notFoundText), e.append(f), d.append(e), gj.grid.events.beforeEmptyRowInsert(a, d), a.append(d);
  },
  autoGenerateColumns: function autoGenerateColumns(a, b) {
    var c,
        d,
        e,
        f,
        g = a.data();

    if (g.columns = [], b.length > 0) {
      for (c = Object.getOwnPropertyNames(b[0]), f = 0; f < c.length; f++) {
        d = b[0][c[f]], e = "text", d && ("number" == typeof d ? e = "number" : d.indexOf("/Date(") > -1 && (e = "date")), g.columns.push({
          field: c[f],
          type: e
        });
      }

      gj.grid.methods.setDefaultColumnConfig(g.columns, g.defaultColumnSettings);
    }

    gj.grid.methods.renderHeader(a);
  },
  loadData: function loadData(a) {
    var b, c, d, e, f, g, h, i;

    for (b = a.data(), c = a.getAll(), gj.grid.events.dataBinding(a, c), e = c.length, gj.grid.methods.stopLoading(a), b.autoGenerateColumns && gj.grid.methods.autoGenerateColumns(a, c), g = a.children("tbody"), "checkbox" === b.selectionMethod && "multiple" === b.selectionType && a.find('thead input[data-role="selectAll"]').prop("checked", !1), g.children("tr").not('[data-role="row"]').remove(), 0 === e && (g.empty(), gj.grid.methods.appendEmptyRow(a)), h = g.children("tr"), f = h.length, d = 0; d < f; d++) {
      if (!(d < e)) {
        g.find('tr[data-role="row"]:gt(' + (d - 1) + ")").remove();
        break;
      }

      i = h.eq(d), gj.grid.methods.renderRow(a, i, c[d], d);
    }

    for (d = f; d < e; d++) {
      gj.grid.methods.renderRow(a, null, c[d], d);
    }

    gj.grid.events.dataBound(a, c, b.totalRecords);
  },
  getId: function getId(a, b, c) {
    return b && a[b] ? a[b] : c;
  },
  renderRow: function renderRow(a, b, c, d) {
    var e, f, g, h, i;

    for (h = a.data(), b && 0 !== b.length ? (i = "update", b.removeClass(h.style.content.rowSelected).removeAttr("data-selected").off("click")) : (i = "create", b = $('<tr data-role="row"/>'), a.children("tbody").append(b)), e = gj.grid.methods.getId(c, h.primaryKey, d + 1), b.attr("data-position", d + 1), "checkbox" !== h.selectionMethod && b.on("click", gj.grid.methods.createRowClickHandler(a, e)), g = 0; g < h.columns.length; g++) {
      "update" === i ? (f = b.find("td:eq(" + g + ")"), gj.grid.methods.renderCell(a, f, h.columns[g], c, e)) : (f = gj.grid.methods.renderCell(a, null, h.columns[g], c, e), b.append(f));
    }

    gj.grid.events.rowDataBound(a, b, e, c);
  },
  renderCell: function renderCell(a, b, c, d, e, f) {
    var g, h;
    if (b && 0 !== b.length ? (g = b.find('div[data-role="display"]'), f = "update") : (b = $("<td/>"), g = $('<div data-role="display" />'), c.align && b.css("text-align", c.align), c.cssClass && b.addClass(c.cssClass), b.append(g), f = "create"), gj.grid.methods.renderDisplayElement(a, g, c, d, e, f), "update" === f && (b.off(), g.off()), c.events) for (h in c.events) {
      c.events.hasOwnProperty(h) && b.on(h, {
        id: e,
        field: c.field,
        record: d
      }, gj.grid.methods.createCellEventHandler(c, c.events[h]));
    }
    return c.hidden && b.hide(), gj.grid.events.cellDataBound(a, g, e, c, d), b;
  },
  createCellEventHandler: function createCellEventHandler(a, b) {
    return function (c) {
      a.stopPropagation && c.stopPropagation(), b.call(this, c);
    };
  },
  renderDisplayElement: function renderDisplayElement(a, b, c, d, e, f) {
    var g, h;
    "checkbox" === c.type && gj.checkbox ? "create" === f ? (h = $('<input type="checkbox" />').val(e).prop("checked", !!d[c.field]), c.role && h.attr("data-role", c.role), b.append(h), h.checkbox({
      uiLibrary: a.data("uiLibrary")
    }), "selectRow" === c.role ? h.on("click", function () {
      return !1;
    }) : h.prop("disabled", !0)) : b.find('input[type="checkbox"]').val(e).prop("checked", !!d[c.field]) : "icon" === c.type ? "create" === f && (b.append($("<span/>").addClass(c.icon).css({
      cursor: "pointer"
    })), "bootstrap" === a.data().uiLibrary && b.children("span").addClass("glyphicon"), c.stopPropagation = !0) : c.tmpl ? (g = c.tmpl, c.tmpl.replace(/\{(.+?)\}/g, function (a, b) {
      g = g.replace(a, gj.grid.methods.formatText(d[b], c));
    }), b.html(g)) : c.renderer && "function" == typeof c.renderer ? (g = c.renderer(d[c.field], d, b.parent(), b, e, a)) && b.html(g) : (d[c.field] = gj.grid.methods.formatText(d[c.field], c), !c.tooltip && d[c.field] && b.attr("title", d[c.field]), b.html(d[c.field])), c.tooltip && "create" === f && b.attr("title", c.tooltip);
  },
  formatText: function formatText(a, b) {
    return a = a && ["date", "time", "datetime"].indexOf(b.type) > -1 ? gj.core.formatDate(gj.core.parseDate(a, b.format), b.format) : void 0 === a || null === a ? "" : a.toString(), b.decimalDigits && a && (a = parseFloat(a).toFixed(b.decimalDigits)), a;
  },
  setRecordsData: function setRecordsData(a, b) {
    var c = [],
        d = 0,
        e = a.data();
    return $.isArray(b) ? (c = b, d = b.length) : e && e.mapping && $.isArray(b[e.mapping.dataField]) && (c = b[e.mapping.dataField], (d = b[e.mapping.totalRecordsField]) && !isNaN(d) || (d = 0)), a.data("records", c), a.data("totalRecords", d), c;
  },
  createRowClickHandler: function createRowClickHandler(a, b) {
    return function () {
      gj.grid.methods.setSelected(a, b, $(this));
    };
  },
  selectRow: function selectRow(a, b, c, d) {
    var e;
    return c.addClass(b.style.content.rowSelected), c.attr("data-selected", "true"), "checkbox" === b.selectionMethod && (e = c.find('input[type="checkbox"][data-role="selectRow"]'), e.length && !e.prop("checked") && e.prop("checked", !0), "multiple" === b.selectionType && a.getSelections().length === a.count(!1) && a.find('thead input[data-role="selectAll"]').prop("checked", !0)), gj.grid.events.rowSelect(a, c, d, a.getById(d));
  },
  unselectRow: function unselectRow(a, b, c, d) {
    var e;
    if ("true" === c.attr("data-selected")) return c.removeClass(b.style.content.rowSelected), "checkbox" === b.selectionMethod && (e = c.find('td input[type="checkbox"][data-role="selectRow"]'), e.length && e.prop("checked") && e.prop("checked", !1), "multiple" === b.selectionType && a.find('thead input[data-role="selectAll"]').prop("checked", !1)), c.removeAttr("data-selected"), gj.grid.events.rowUnselect(a, c, d, a.getById(d));
  },
  setSelected: function setSelected(a, b, c) {
    var d = a.data();
    return c && c.length || (c = gj.grid.methods.getRowById(a, b)), c && ("true" === c.attr("data-selected") ? gj.grid.methods.unselectRow(a, d, c, b) : ("single" === d.selectionType && c.siblings('[data-selected="true"]').each(function () {
      var b = $(this),
          c = gj.grid.methods.getId(b, d.primaryKey, b.data("position"));
      gj.grid.methods.unselectRow(a, d, b, c);
    }), gj.grid.methods.selectRow(a, d, c, b))), a;
  },
  selectAll: function selectAll(a) {
    var b = a.data();
    return a.find('tbody tr[data-role="row"]').each(function () {
      var c = $(this),
          d = c.data("position"),
          e = a.get(d),
          f = gj.grid.methods.getId(e, b.primaryKey, d);
      gj.grid.methods.selectRow(a, b, c, f);
    }), a.find('thead input[data-role="selectAll"]').prop("checked", !0), a;
  },
  unSelectAll: function unSelectAll(a) {
    var b = a.data();
    return a.find("tbody tr").each(function () {
      var c = $(this),
          d = c.data("position"),
          e = a.get(d),
          f = gj.grid.methods.getId(e, b.primaryKey, d);
      gj.grid.methods.unselectRow(a, b, c, f), c.find('input[type="checkbox"][data-role="selectRow"]').prop("checked", !1);
    }), a.find('thead input[data-role="selectAll"]').prop("checked", !1), a;
  },
  getSelected: function getSelected(a) {
    var b,
        c,
        d,
        e = null;
    return b = a.find('tbody>tr[data-selected="true"]'), b.length > 0 && (d = $(b[0]).data("position"), c = a.get(d), e = gj.grid.methods.getId(c, a.data().primaryKey, d)), e;
  },
  getSelectedRows: function getSelectedRows(a) {
    a.data();
    return a.find('tbody>tr[data-selected="true"]');
  },
  getSelections: function getSelections(a) {
    var b,
        c,
        d = [],
        e = a.data(),
        f = gj.grid.methods.getSelectedRows(a);
    return 0 < f.length && f.each(function () {
      b = $(this).data("position"), c = a.get(b), d.push(gj.grid.methods.getId(c, e.primaryKey, b));
    }), d;
  },
  getById: function getById(a, b) {
    var c,
        d = null,
        e = a.data("primaryKey"),
        f = a.data("records");

    if (e) {
      for (c = 0; c < f.length; c++) {
        if (f[c][e] == b) {
          d = f[c];
          break;
        }
      }
    } else d = a.get(b);

    return d;
  },
  getRecVPosById: function getRecVPosById(a, b) {
    var c,
        d = b,
        e = a.data();
    if (e.primaryKey) for (c = 0; c < e.dataSource.length; c++) {
      if (e.dataSource[c][e.primaryKey] == b) {
        d = c;
        break;
      }
    }
    return d;
  },
  getRowById: function getRowById(a, b) {
    var c,
        d,
        e = a.getAll(!1),
        f = a.data("primaryKey"),
        g = void 0;

    if (f) {
      for (d = 0; d < e.length; d++) {
        if (e[d][f] == b) {
          c = d + 1;
          break;
        }
      }
    } else c = b;

    return c && (g = a.children("tbody").children('tr[data-position="' + c + '"]')), g;
  },
  getByPosition: function getByPosition(a, b) {
    return a.getAll(!1)[b - 1];
  },
  getColumnPosition: function getColumnPosition(a, b) {
    var c,
        d = -1;

    for (c = 0; c < a.length; c++) {
      if (a[c].field === b) {
        d = c;
        break;
      }
    }

    return d;
  },
  getColumnInfo: function getColumnInfo(a, b) {
    var c,
        d = {},
        e = a.data();

    for (c = 0; c < e.columns.length; c += 1) {
      if (e.columns[c].field === b) {
        d = e.columns[c];
        break;
      }
    }

    return d;
  },
  getCell: function getCell(a, b, c) {
    var d,
        e,
        f = null;
    return d = gj.grid.methods.getColumnPosition(a.data("columns"), c), d > -1 && (e = gj.grid.methods.getRowById(a, b), f = e.find("td:eq(" + d + ') div[data-role="display"]')), f;
  },
  setCellContent: function setCellContent(a, b, c, d) {
    var e,
        f = gj.grid.methods.getCell(a, b, c);
    f && (f.empty(), "object" == _typeof(d) ? f.append(d) : (e = gj.grid.methods.getColumnInfo(a, c), gj.grid.methods.renderDisplayElement(a, f, e, a.getById(b), b, "update")));
  },
  clone: function clone(a) {
    var b = [];
    return $.each(a, function () {
      b.push(this.clone());
    }), b;
  },
  getAll: function getAll(a) {
    return a.data("records");
  },
  countVisibleColumns: function countVisibleColumns(a) {
    var b, c, d;

    for (b = a.data().columns, c = 0, d = 0; d < b.length; d++) {
      !0 !== b[d].hidden && c++;
    }

    return c;
  },
  clear: function clear(a, b) {
    var c = a.data();
    return a.xhr && a.xhr.abort(), a.children("tbody").empty(), c.records = [], gj.grid.methods.stopLoading(a), gj.grid.methods.appendEmptyRow(a, b ? c.notFoundText : "&nbsp;"), gj.grid.events.dataBound(a, [], 0), a;
  },
  render: function render(a, b) {
    return b && (gj.grid.methods.setRecordsData(a, b), gj.grid.methods.updateHeader(a), gj.grid.methods.loadData(a)), a;
  },
  filter: function filter(a) {
    var b,
        c,
        d = a.data(),
        e = d.dataSource.slice();
    d.params[d.paramNames.sortBy] && (c = gj.grid.methods.getColumnInfo(a, d.params[d.paramNames.sortBy]), e.sort(c.sortable.sorter ? c.sortable.sorter(c.direction, c) : gj.grid.methods.createDefaultSorter(c.direction, c.field)));

    for (b in d.params) {
      d.params[b] && !d.paramNames[b] && (c = gj.grid.methods.getColumnInfo(a, b), e = $.grep(e, function (a) {
        var e = a[b] || "",
            f = d.params[b] || "";
        return c && "function" == typeof c.filter ? c.filter(e, f) : e.toUpperCase().indexOf(f.toUpperCase()) > -1;
      }));
    }

    return gj.grid.events.dataFiltered(a, e), e;
  },
  createDefaultSorter: function createDefaultSorter(a, b) {
    return function (c, d) {
      var e = (c[b] || "").toString(),
          f = (d[b] || "").toString();
      return "asc" === a ? e.localeCompare(f) : f.localeCompare(e);
    };
  },
  destroy: function destroy(a, b, c) {
    return a.data() && (gj.grid.events.destroying(a), gj.grid.methods.stopLoading(a), a.xhr && a.xhr.abort(), a.off(), !1 === c && a.parent('div[data-role="wrapper"]').length > 0 && a.unwrap(), a.removeData(), !1 === b ? a.remove() : a.removeClass().empty(), a.removeAttr("data-type")), a;
  },
  showColumn: function showColumn(a, b) {
    var c,
        d = a.data(),
        e = gj.grid.methods.getColumnPosition(d.columns, b);
    return e > -1 && (a.find("thead>tr").each(function () {
      $(this).children("th").eq(e).show();
    }), $.each(a.find("tbody>tr"), function () {
      $(this).children("td").eq(e).show();
    }), d.columns[e].hidden = !1, c = a.find('tbody > tr[data-role="empty"] > td'), c && c.length && c.attr("colspan", gj.grid.methods.countVisibleColumns(a)), gj.grid.events.columnShow(a, d.columns[e])), a;
  },
  hideColumn: function hideColumn(a, b) {
    var c,
        d = a.data(),
        e = gj.grid.methods.getColumnPosition(d.columns, b);
    return e > -1 && (a.find("thead>tr").each(function () {
      $(this).children("th").eq(e).hide();
    }), $.each(a.find("tbody>tr"), function () {
      $(this).children("td").eq(e).hide();
    }), d.columns[e].hidden = !0, c = a.find('tbody > tr[data-role="empty"] > td'), c && c.length && c.attr("colspan", gj.grid.methods.countVisibleColumns(a)), gj.grid.events.columnHide(a, d.columns[e])), a;
  },
  isLastRecordVisible: function isLastRecordVisible() {
    return !0;
  },
  addRow: function addRow(a, b) {
    var c = a.data();
    return c.totalRecords = a.data("totalRecords") + 1, gj.grid.events.dataBinding(a, [b]), c.records.push(b), $.isArray(c.dataSource) && c.dataSource.push(b), 1 === c.totalRecords && a.children("tbody").empty(), gj.grid.methods.isLastRecordVisible(a) && gj.grid.methods.renderRow(a, null, b, a.count() - 1), gj.grid.events.dataBound(a, [b], c.totalRecords), a;
  },
  updateRow: function updateRow(a, b, c) {
    var d,
        e = gj.grid.methods.getRowById(a, b),
        f = a.data();
    return f.records[e.data("position") - 1] = c, $.isArray(f.dataSource) && (d = gj.grid.methods.getRecVPosById(a, b), f.dataSource[d] = c), gj.grid.methods.renderRow(a, e, c, e.index()), a;
  },
  removeRow: function removeRow(a, b) {
    var c,
        d = a.data(),
        e = gj.grid.methods.getRowById(a, b);
    return gj.grid.events.rowRemoving(a, e, b, a.getById(b)), $.isArray(d.dataSource) && (c = gj.grid.methods.getRecVPosById(a, b), d.dataSource.splice(c, 1)), a.reload(), a;
  },
  count: function count(a, b) {
    return b ? a.data().totalRecords : a.getAll().length;
  },
  getColumnPositionByRole: function getColumnPositionByRole(a, b) {
    var c,
        d,
        e = a.data("columns");

    for (c = 0; c < e.length; c++) {
      if (e[c].role === b) {
        d = c;
        break;
      }
    }

    return d;
  },
  getColumnPositionNotInRole: function getColumnPositionNotInRole(a) {
    var b,
        c = 0,
        d = a.data("columns");

    for (b = 0; b < d.length; b++) {
      if (!d[b].role) {
        c = b;
        break;
      }
    }

    return c;
  }
}, gj.grid.widget = function (a, b) {
  var c = this,
      d = gj.grid.methods;
  return c.reload = function (a) {
    return d.startLoading(this), gj.widget.prototype.reload.call(this, a);
  }, c.clear = function (a) {
    return d.clear(this, a);
  }, c.count = function (a) {
    return d.count(this, a);
  }, c.render = function (b) {
    return d.render(a, b);
  }, c.destroy = function (a, b) {
    return d.destroy(this, a, b);
  }, c.setSelected = function (a) {
    return d.setSelected(this, a);
  }, c.getSelected = function () {
    return d.getSelected(this);
  }, c.getSelections = function () {
    return d.getSelections(this);
  }, c.selectAll = function () {
    return d.selectAll(this);
  }, c.unSelectAll = function () {
    return d.unSelectAll(this);
  }, c.getById = function (a) {
    return d.getById(this, a);
  }, c.get = function (a) {
    return d.getByPosition(this, a);
  }, c.getAll = function (a) {
    return d.getAll(this, a);
  }, c.showColumn = function (a) {
    return d.showColumn(this, a);
  }, c.hideColumn = function (a) {
    return d.hideColumn(this, a);
  }, c.addRow = function (a) {
    return d.addRow(this, a);
  }, c.updateRow = function (a, b) {
    return d.updateRow(this, a, b);
  }, c.setCellContent = function (a, b, c) {
    d.setCellContent(this, a, b, c);
  }, c.removeRow = function (a) {
    return d.removeRow(this, a);
  }, $.extend(a, c), "grid" !== a.attr("data-type") && d.init.call(a, b), a;
}, gj.grid.widget.prototype = new gj.widget(), gj.grid.widget.constructor = gj.grid.widget, gj.grid.widget.prototype.getConfig = gj.grid.methods.getConfig, gj.grid.widget.prototype.getHTMLConfig = gj.grid.methods.getHTMLConfig, function (a) {
  a.fn.grid = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.grid.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.grid.widget(this, a);
    }
  };
}(jQuery), gj.grid.plugins.fixedHeader = {
  config: {
    base: {
      fixedHeader: !1,
      height: 300
    }
  },
  "private": {
    init: function init(a) {
      var b = a.data(),
          c = a.children("tbody"),
          d = a.children("thead"),
          e = b.height - d.outerHeight() - (a.children("tfoot").outerHeight() || 0);
      a.addClass("gj-grid-scrollable"), c.css("width", d.outerWidth()), c.height(e);
    },
    refresh: function refresh(a) {
      var b,
          c,
          d = (a.data(), a.children("tbody")),
          e = a.children("thead"),
          f = a.find('tbody tr[data-role="row"] td'),
          g = a.find('thead tr[data-role="caption"] th');

      for (a.children("tbody").height() < gj.grid.plugins.fixedHeader["private"].getRowsHeight(a) ? d.css("width", e.outerWidth() + gj.grid.plugins.fixedHeader["private"].getScrollBarWidth() + (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? 1 : 0)) : d.css("width", e.outerWidth()), b = 0; b < g.length; b++) {
        c = $(g[b]).outerWidth(), 0 === b && gj.core.isIE() && (c -= 1), $(f[b]).attr("width", c);
      }
    },
    getRowsHeight: function getRowsHeight(a) {
      var b = 0;
      return a.find("tbody tr").each(function () {
        b += $(this).height();
      }), b;
    },
    getScrollBarWidth: function getScrollBarWidth() {
      var a = document.createElement("p");
      a.style.width = "100%", a.style.height = "200px";
      var b = document.createElement("div");
      b.style.position = "absolute", b.style.top = "0px", b.style.left = "0px", b.style.visibility = "hidden", b.style.width = "200px", b.style.height = "150px", b.style.overflow = "hidden", b.appendChild(a), document.body.appendChild(b);
      var c = a.offsetWidth;
      b.style.overflow = "scroll";
      var d = a.offsetWidth;
      return c == d && (d = b.clientWidth), document.body.removeChild(b), c - d;
    }
  },
  "public": {},
  events: {},
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.fixedHeader["public"]);
    a.data();
    c.fixedHeader && (a.on("initialized", function () {
      gj.grid.plugins.fixedHeader["private"].init(a);
    }), a.on("dataBound", function () {
      gj.grid.plugins.fixedHeader["private"].refresh(a);
    }), a.on("resize", function () {
      gj.grid.plugins.fixedHeader["private"].refresh(a);
    }));
  }
}, gj.grid.plugins.expandCollapseRows = {
  config: {
    base: {
      detailTemplate: void 0,
      keepExpandedRows: !0,
      expandedRows: [],
      icons: {
        expandRow: '<i class="gj-icon chevron-right" />',
        collapseRow: '<i class="gj-icon chevron-down" />'
      }
    },
    fontawesome: {
      icons: {
        expandRow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        collapseRow: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    glyphicons: {
      icons: {
        expandRow: '<span class="glyphicon glyphicon-chevron-right" />',
        collapseRow: '<span class="glyphicon glyphicon-chevron-down" />'
      }
    }
  },
  "private": {
    expandDetail: function expandDetail(a, b, c) {
      var d = b.closest("tr"),
          e = $('<tr data-role="details" />'),
          f = $('<td colspan="' + gj.grid.methods.countVisibleColumns(a) + '" />'),
          g = $('<div data-role="display" />'),
          h = a.data(),
          i = d.data("position"),
          j = a.get(i),
          k = gj.grid.plugins.expandCollapseRows;
      void 0 === _typeof(c) && (c = gj.grid.methods.getId(j, h.primaryKey, j)), e.append(f.append(g.append(d.data("details")))), e.insertAfter(d), b.children('div[data-role="display"]').empty().append(h.icons.collapseRow), a.updateDetails(d), k["private"].keepSelection(a, c), k.events.detailExpand(a, e.find("td>div"), c);
    },
    collapseDetail: function collapseDetail(a, b, c) {
      var d = b.closest("tr"),
          e = d.next('tr[data-role="details"]'),
          f = a.data(),
          g = gj.grid.plugins.expandCollapseRows;
      void 0 === _typeof(c) && (c = gj.grid.methods.getId(record, f.primaryKey, record)), e.remove(), b.children('div[data-role="display"]').empty().append(f.icons.expandRow), g["private"].removeSelection(a, c), g.events.detailCollapse(a, e.find("td>div"), c);
    },
    keepSelection: function keepSelection(a, b) {
      var c = a.data();
      c.keepExpandedRows && ($.isArray(c.expandedRows) ? -1 == c.expandedRows.indexOf(b) && c.expandedRows.push(b) : c.expandedRows = [b]);
    },
    removeSelection: function removeSelection(a, b) {
      var c = a.data();
      c.keepExpandedRows && $.isArray(c.expandedRows) && c.expandedRows.indexOf(b) > -1 && c.expandedRows.splice(c.expandedRows.indexOf(b), 1);
    },
    updateDetailsColSpan: function updateDetailsColSpan(a) {
      var b = a.find('tbody > tr[data-role="details"] > td');
      b && b.length && b.attr("colspan", gj.grid.methods.countVisibleColumns(a));
    }
  },
  "public": {
    collapseAll: function collapseAll() {
      var a,
          b = this,
          c = b.data();
      return void 0 !== c.detailTemplate && (a = gj.grid.methods.getColumnPositionByRole(b, "expander"), b.find('tbody tr[data-role="row"]').each(function () {
        gj.grid.plugins.expandCollapseRows["private"].collapseDetail(b, $(this).find("td:eq(" + a + ")"));
      })), void 0 !== c.grouping && b.find('tbody tr[role="group"]').each(function () {
        gj.grid.plugins.grouping["private"].collapseGroup(c, $(this).find("td:eq(0)"));
      }), b;
    },
    expandAll: function expandAll() {
      var a,
          b = this,
          c = b.data();
      return void 0 !== c.detailTemplate && (a = gj.grid.methods.getColumnPositionByRole(b, "expander"), b.find('tbody tr[data-role="row"]').each(function () {
        gj.grid.plugins.expandCollapseRows["private"].expandDetail(b, $(this).find("td:eq(" + a + ")"));
      })), void 0 !== c.grouping && b.find('tbody tr[role="group"]').each(function () {
        gj.grid.plugins.grouping["private"].expandGroup(c, $(this).find("td:eq(0)"));
      }), b;
    },
    updateDetails: function updateDetails(a) {
      var b = this,
          c = a.data("details"),
          d = c.html(),
          e = b.get(a.data("position"));
      return e && d && (c.html().replace(/\{(.+?)\}/g, function (a, c) {
        var f = gj.grid.methods.getColumnInfo(b, c);
        d = d.replace(a, gj.grid.methods.formatText(e[c], f));
      }), c.html(d)), b;
    }
  },
  events: {
    detailExpand: function detailExpand(a, b, c) {
      a.triggerHandler("detailExpand", [b, c]);
    },
    detailCollapse: function detailCollapse(a, b, c) {
      a.triggerHandler("detailCollapse", [b, c]);
    }
  },
  configure: function configure(a) {
    var b,
        c = a.data();
    $.extend(!0, a, gj.grid.plugins.expandCollapseRows["public"]), void 0 !== c.detailTemplate && (b = {
      title: "",
      width: c.defaultIconColumnWidth,
      align: "center",
      stopPropagation: !0,
      cssClass: "gj-cursor-pointer gj-unselectable",
      tmpl: c.icons.expandRow,
      role: "expander",
      events: {
        click: function click(b) {
          var c = $(this),
              d = gj.grid.plugins.expandCollapseRows["private"];
          "details" === c.closest("tr").next().attr("data-role") ? d.collapseDetail(a, c, b.data.id) : d.expandDetail(a, $(this), b.data.id);
        }
      }
    }, c.columns = [b].concat(c.columns), a.on("rowDataBound", function (a, b, d, e) {
      b.data("details", $(c.detailTemplate));
    }), a.on("columnShow", function (b, c) {
      gj.grid.plugins.expandCollapseRows["private"].updateDetailsColSpan(a);
    }), a.on("columnHide", function (b, c) {
      gj.grid.plugins.expandCollapseRows["private"].updateDetailsColSpan(a);
    }), a.on("rowRemoving", function (b, c, d, e) {
      gj.grid.plugins.expandCollapseRows["private"].collapseDetail(a, c.children("td").first(), d);
    }), a.on("dataBinding", function () {
      a.collapseAll();
    }), a.on("pageChanging", function () {
      a.collapseAll();
    }), a.on("dataBound", function () {
      var b,
          c,
          d,
          e,
          f = a.data();
      if (f.keepExpandedRows && $.isArray(f.expandedRows)) for (b = 0; b < f.expandedRows.length; b++) {
        (d = gj.grid.methods.getRowById(a, f.expandedRows[b])) && d.length && (e = gj.grid.methods.getColumnPositionByRole(a, "expander"), (c = d.children("td:eq(" + e + ")")) && c.length && gj.grid.plugins.expandCollapseRows["private"].expandDetail(a, c));
      }
    }));
  }
}, gj.grid.plugins.inlineEditing = {
  renderers: {
    editManager: function editManager(a, b, c, d, e, f) {
      var g = f.data(),
          h = $(g.inlineEditing.editButton).attr("key", e),
          i = $(g.inlineEditing.deleteButton).attr("key", e),
          j = $(g.inlineEditing.updateButton).attr("key", e).hide(),
          k = $(g.inlineEditing.cancelButton).attr("key", e).hide();
      h.on("click", function (a) {
        f.edit($(this).attr("key"));
      }), i.on("click", function (a) {
        f.removeRow($(this).attr("key"));
      }), j.on("click", function (a) {
        f.update($(this).attr("key"));
      }), k.on("click", function (a) {
        f.cancel($(this).attr("key"));
      }), d.empty().append(h).append(i).append(j).append(k);
    }
  }
}, gj.grid.plugins.inlineEditing.config = {
  base: {
    defaultColumnSettings: {
      editor: void 0,
      editField: void 0,
      mode: "readEdit"
    },
    inlineEditing: {
      mode: "click",
      managementColumn: !0,
      managementColumnConfig: {
        width: 300,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  },
  bootstrap: {
    inlineEditing: {
      managementColumnConfig: {
        width: 200,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  },
  bootstrap4: {
    inlineEditing: {
      managementColumnConfig: {
        width: 280,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  }
}, gj.grid.plugins.inlineEditing["private"] = {
  localization: function localization(a) {
    "bootstrap" === a.uiLibrary ? (a.inlineEditing.editButton = '<button role="edit" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Edit + "</button>", a.inlineEditing.deleteButton = '<button role="delete" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Delete + "</button>", a.inlineEditing.updateButton = '<button role="update" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Update + "</button>", a.inlineEditing.cancelButton = '<button role="cancel" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span> ' + gj.grid.messages[a.locale].Cancel + "</button>") : (a.inlineEditing.editButton = '<button role="edit" class="gj-button-md"><i class="gj-icon pencil" /> ' + gj.grid.messages[a.locale].Edit.toUpperCase() + "</button>", a.inlineEditing.deleteButton = '<button role="delete" class="gj-button-md"><i class="gj-icon delete" /> ' + gj.grid.messages[a.locale].Delete.toUpperCase() + "</button>", a.inlineEditing.updateButton = '<button role="update" class="gj-button-md"><i class="gj-icon check-circle" /> ' + gj.grid.messages[a.locale].Update.toUpperCase() + "</button>", a.inlineEditing.cancelButton = '<button role="cancel" class="gj-button-md"><i class="gj-icon cancel" /> ' + gj.grid.messages[a.locale].Cancel.toUpperCase() + "</button>");
  },
  editMode: function editMode(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = a.data();
    if ("edit" !== b.attr("data-mode")) if (c.editor) {
      if (gj.grid.plugins.inlineEditing["private"].updateOtherCells(a, c.mode), e = b.find('div[data-role="display"]').hide(), f = b.find('div[data-role="edit"]').show(), 0 === f.length && (f = $('<div data-role="edit" />'), b.append(f)), h = d[c.editField || c.field], g = f.find("input, select, textarea").first(), g.length) switch (c.type) {
        case "checkbox":
          g.prop("checked", h);
          break;

        case "dropdown":
          g = g.dropdown("value", h);
          break;

        default:
          g.val(h);
      } else {
        if ("function" == typeof c.editor) c.editor(f, h, d), g = f.find("input, select, textarea").first();else if (i = "object" == _typeof(c.editor) ? c.editor : {}, i.uiLibrary = j.uiLibrary, i.iconsLibrary = j.iconsLibrary, i.fontSize = a.css("font-size"), i.showOnFocus = !1, "checkbox" === c.type && gj.checkbox) g = $('<input type="checkbox" />').prop("checked", h), f.append(g), g.checkbox(i);else if ("date" === c.type && gj.datepicker || "time" === c.type && gj.timepicker || "datetime" === c.type && gj.datetimepicker) {
          switch (g = $('<input type="text" width="100%"/>'), f.append(g), c.format && (i.format = c.format), c.type) {
            case "date":
              g = g.datepicker(i);
              break;

            case "time":
              g = g.timepicker(i);
              break;

            case "datetime":
              g = g.datetimepicker(i);
          }

          g.value && g.value(e.html());
        } else "dropdown" === c.type && gj.dropdown ? (g = $('<select type="text" width="100%"/>'), f.append(g), i.dataBound = function (a) {
          var b = $(this).dropdown();
          c.editField ? b.value(d[c.editField]) : b.value(d[c.field]);
        }, g = g.dropdown(i)) : (g = $('<input type="text" value="' + h + '" class="gj-width-full"/>'), "materialdesign" === j.uiLibrary && g.addClass("gj-textbox-md").css("font-size", a.css("font-size")), f.append(g));
        "command" !== j.inlineEditing.mode && "editOnly" !== c.mode && (g = f.find("input, select, textarea").first(), g.on("keyup", function (d) {
          13 !== d.keyCode && 27 !== d.keyCode || gj.grid.plugins.inlineEditing["private"].displayMode(a, b, c);
        }));
      }
      "INPUT" === g.prop("tagName").toUpperCase() && "TEXT" === g.prop("type").toUpperCase() ? gj.core.setCaretAtEnd(g[0]) : g.focus(), b.attr("data-mode", "edit");
    } else "managementColumn" === c.role && (b.find('[role="edit"]').hide(), b.find('[role="delete"]').hide(), b.find('[role="update"]').show(), b.find('[role="cancel"]').show());
  },
  displayMode: function displayMode(a, b, c, d) {
    var e, f, g, h, i, j, k;
    "editOnly" !== c.mode && ("edit" === b.attr("data-mode") && (e = b.find('div[data-role="edit"]'), f = b.find('div[data-role="display"]'), g = e.find("input, select, textarea").first(), "SELECT" === g[0].tagName.toUpperCase() && g[0].selectedIndex > -1 ? (h = g[0].options[g[0].selectedIndex].innerHTML, i = g[0].value) : h = "INPUT" === g[0].tagName.toUpperCase() && "CHECKBOX" === g[0].type.toUpperCase() ? g[0].checked : g.val(), k = b.parent().data("position"), j = a.get(k), !0 !== d && h !== j[c.field] && (j[c.field] = "date" === c.type ? gj.core.parseDate(h, c.format) : h, c.editField && (j[c.editField] = i || h), "editOnly" !== c.mode && (gj.grid.methods.renderDisplayElement(a, f, c, j, gj.grid.methods.getId(j, a.data("primaryKey"), k), "update"), 0 === b.find("span.gj-dirty").length && b.prepend($('<span class="gj-dirty" />'))), gj.grid.plugins.inlineEditing.events.cellDataChanged(a, b, c, j, h), gj.grid.plugins.inlineEditing["private"].updateChanges(a, c, j, h)), e.hide(), f.show(), b.attr("data-mode", "display")), "managementColumn" === c.role && (b.find('[role="update"]').hide(), b.find('[role="cancel"]').hide(), b.find('[role="edit"]').show(), b.find('[role="delete"]').show()));
  },
  updateOtherCells: function updateOtherCells(a, b) {
    var c = a.data();
    "command" !== c.inlineEditing.mode && "editOnly" !== b && a.find('div[data-role="edit"]:visible').parent("td").each(function () {
      var b = $(this),
          d = c.columns[b.index()];
      gj.grid.plugins.inlineEditing["private"].displayMode(a, b, d);
    });
  },
  updateChanges: function updateChanges(a, b, c, d) {
    var e,
        f,
        g,
        h = a.data();
    h.guid || (h.guid = gj.grid.plugins.inlineEditing["private"].generateGUID()), h.primaryKey && (e = JSON.parse(sessionStorage.getItem("gj.grid." + h.guid)), e ? f = e.filter(function (a) {
      return a[h.primaryKey] === c[h.primaryKey];
    }) : e = [], f && 1 === f.length ? f[0][b.field] = d : (g = {}, g[h.primaryKey] = c[h.primaryKey], h.primaryKey !== b.field && (g[b.field] = d), e.push(g)), sessionStorage.setItem("gj.grid." + h.guid, JSON.stringify(e)));
  },
  generateGUID: function generateGUID() {
    function a() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
  }
}, gj.grid.plugins.inlineEditing["public"] = {
  getChanges: function getChanges() {
    return JSON.parse(sessionStorage.getItem("gj.grid." + this.data().guid));
  },
  edit: function edit(a) {
    var b,
        c = this.getById(a),
        d = gj.grid.methods.getRowById(this, a).children("td"),
        e = this.data("columns");

    for (b = 0; b < d.length; b++) {
      gj.grid.plugins.inlineEditing["private"].editMode(this, $(d[b]), e[b], c);
    }

    return this;
  },
  update: function update(a) {
    var b,
        c = this.getById(a),
        d = gj.grid.methods.getRowById(this, a).children("td"),
        e = this.data("columns");

    for (b = 0; b < d.length; b++) {
      gj.grid.plugins.inlineEditing["private"].displayMode(this, $(d[b]), e[b], !1);
    }

    return gj.grid.plugins.inlineEditing.events.rowDataChanged(this, a, c), this;
  },
  cancel: function cancel(a) {
    var b,
        c = (this.getById(a), gj.grid.methods.getRowById(this, a).children("td")),
        d = this.data("columns");

    for (b = 0; b < c.length; b++) {
      gj.grid.plugins.inlineEditing["private"].displayMode(this, $(c[b]), d[b], !0);
    }

    return this;
  }
}, gj.grid.plugins.inlineEditing.events = {
  cellDataChanged: function cellDataChanged(a, b, c, d, e, f) {
    a.triggerHandler("cellDataChanged", [b, c, d, e, f]);
  },
  rowDataChanged: function rowDataChanged(a, b, c) {
    a.triggerHandler("rowDataChanged", [b, c]);
  }
}, gj.grid.plugins.inlineEditing.configure = function (a, b, c) {
  var d = a.data();
  $.extend(!0, a, gj.grid.plugins.inlineEditing["public"]), c.inlineEditing && (a.on("dataBound", function () {
    a.find("span.gj-dirty").remove();
  }), a.on("rowDataBound", function (b, c, d, e) {
    a.cancel(d);
  })), "command" === d.inlineEditing.mode ? (gj.grid.plugins.inlineEditing["private"].localization(d), b.inlineEditing.managementColumn && d.columns.push(b.inlineEditing.managementColumnConfig)) : a.on("cellDataBound", function (b, c, e, f, g) {
    f.editor && ("editOnly" === f.mode ? gj.grid.plugins.inlineEditing["private"].editMode(a, c.parent(), f, g) : c.parent("td").on("dblclick" === d.inlineEditing.mode ? "dblclick" : "click", function () {
      gj.grid.plugins.inlineEditing["private"].editMode(a, c.parent(), f, g);
    }));
  });
}, gj.grid.plugins.optimisticPersistence = {
  config: {
    base: {
      optimisticPersistence: {
        localStorage: void 0,
        sessionStorage: void 0
      }
    }
  },
  "private": {
    applyParams: function applyParams(a) {
      var b,
          c = a.data(),
          d = {};
      b = JSON.parse(sessionStorage.getItem("gj.grid." + c.guid)), b && b.optimisticPersistence && $.extend(d, b.optimisticPersistence), b = JSON.parse(localStorage.getItem("gj.grid." + c.guid)), b && b.optimisticPersistence && $.extend(d, b.optimisticPersistence), $.extend(c.params, d);
    },
    saveParams: function saveParams(a) {
      var b,
          c,
          d = a.data(),
          e = {
        optimisticPersistence: {}
      };

      if (d.optimisticPersistence.sessionStorage) {
        for (b = 0; b < d.optimisticPersistence.sessionStorage.length; b++) {
          c = d.optimisticPersistence.sessionStorage[b], e.optimisticPersistence[c] = d.params[c];
        }

        e = $.extend(!0, JSON.parse(sessionStorage.getItem("gj.grid." + d.guid)), e), sessionStorage.setItem("gj.grid." + d.guid, JSON.stringify(e));
      }

      if (d.optimisticPersistence.localStorage) {
        for (e = {
          optimisticPersistence: {}
        }, b = 0; b < d.optimisticPersistence.localStorage.length; b++) {
          c = d.optimisticPersistence.localStorage[b], e.optimisticPersistence[c] = d.params[c];
        }

        e = $.extend(!0, JSON.parse(localStorage.getItem("gj.grid." + d.guid)), e), localStorage.setItem("gj.grid." + d.guid, JSON.stringify(e));
      }
    }
  },
  configure: function configure(a, b, c) {
    b.guid && (b.optimisticPersistence.localStorage || b.optimisticPersistence.sessionStorage) && (gj.grid.plugins.optimisticPersistence["private"].applyParams(a), a.on("dataBound", function (b) {
      gj.grid.plugins.optimisticPersistence["private"].saveParams(a);
    }));
  }
}, gj.grid.plugins.pagination = {
  config: {
    base: {
      style: {
        pager: {
          panel: "",
          stateDisabled: "",
          activeButton: ""
        }
      },
      paramNames: {
        page: "page",
        limit: "limit"
      },
      pager: {
        limit: 10,
        sizes: [5, 10, 20, 100],
        leftControls: void 0,
        rightControls: void 0
      }
    },
    bootstrap: {
      style: {
        pager: {
          panel: "",
          stateDisabled: ""
        }
      }
    },
    bootstrap4: {
      style: {
        pager: {
          panel: "btn-toolbar",
          stateDisabled: ""
        }
      }
    },
    glyphicons: {
      icons: {
        first: '<span class="glyphicon glyphicon-step-backward"></span>',
        previous: '<span class="glyphicon glyphicon-backward"></span>',
        next: '<span class="glyphicon glyphicon-forward"></span>',
        last: '<span class="glyphicon glyphicon-step-forward"></span>',
        refresh: '<span class="glyphicon glyphicon-refresh"></span>'
      }
    },
    materialicons: {
      icons: {
        first: '<i class="gj-icon first-page" />',
        previous: '<i class="gj-icon chevron-left" />',
        next: '<i class="gj-icon chevron-right" />',
        last: '<i class="gj-icon last-page" />',
        refresh: '<i class="gj-icon refresh" />'
      }
    },
    fontawesome: {
      icons: {
        first: '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
        previous: '<i class="fa fa-backward" aria-hidden="true"></i>',
        next: '<i class="fa fa-forward" aria-hidden="true"></i>',
        last: '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
        refresh: '<i class="fa fa-refresh" aria-hidden="true"></i>'
      }
    }
  },
  "private": {
    init: function init(a) {
      var b, c, d, e, f, g, h, i, j, k;
      if (d = a.data(), d.pager) for (d.params[d.paramNames.page] || (d.params[d.paramNames.page] = 1), d.params[d.paramNames.limit] || (d.params[d.paramNames.limit] = d.pager.limit), gj.grid.plugins.pagination["private"].localization(d), b = $('<tr data-role="pager"/>'), c = $("<th/>"), b.append(c), f = $('<div data-role="display" />').addClass(d.style.pager.panel).css({
        "float": "left"
      }), g = $('<div data-role="display" />').addClass(d.style.pager.panel).css({
        "float": "right"
      }), c.append(f).append(g), h = $("<tfoot />").append(b), a.append(h), gj.grid.plugins.pagination["private"].updatePagerColSpan(a), i = gj.grid.methods.clone(d.pager.leftControls), $.each(i, function () {
        f.append(this);
      }), j = gj.grid.methods.clone(d.pager.rightControls), $.each(j, function () {
        g.append(this);
      }), e = a.find("tfoot [data-role]"), k = 0; k < e.length; k++) {
        gj.grid.plugins.pagination["private"].initPagerControl($(e[k]), a);
      }
    },
    localization: function localization(a) {
      "bootstrap" === a.uiLibrary ? gj.grid.plugins.pagination["private"].localizationBootstrap(a) : "bootstrap4" === a.uiLibrary ? gj.grid.plugins.pagination["private"].localizationBootstrap4(a) : gj.grid.plugins.pagination["private"].localizationMaterialDesign(a);
    },
    localizationBootstrap: function localizationBootstrap(a) {
      var b = gj.grid.messages[a.locale];
      void 0 === a.pager.leftControls && (a.pager.leftControls = [$('<button type="button" class="btn btn-default btn-sm">' + (a.icons.first || b.First) + "</button>").attr("title", b.FirstPageTooltip).attr("data-role", "page-first"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + b.Page + "</div>"), $('<input data-role="page-number" class="form-control input-sm" type="text" value="0">'), $("<div>" + b.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.last || b.Last) + "</button>").attr("title", b.LastPageTooltip).attr("data-role", "page-last"), $('<button type="button" class="btn btn-default btn-sm">' + (a.icons.refresh || b.Refresh) + "</button>").attr("title", b.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === a.pager.rightControls && (a.pager.rightControls = [$("<div>" + b.DisplayingRecords + "</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="record-total">0</div>')]);
    },
    localizationBootstrap4: function localizationBootstrap4(a) {
      var b = gj.grid.messages[a.locale];
      void 0 === a.pager.leftControls && (a.pager.leftControls = [$('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.first || b.First) + "</button>").attr("title", b.FirstPageTooltip).attr("data-role", "page-first"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + b.Page + "</div>"), $('<div class="input-group"><input data-role="page-number" class="form-control form-control-sm" type="text" value="0"></div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.last || b.Last) + "</button>").attr("title", b.LastPageTooltip).attr("data-role", "page-last"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (a.icons.refresh || b.Refresh) + "</button>").attr("title", b.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === a.pager.rightControls && (a.pager.rightControls = [$("<div>" + b.DisplayingRecords + "&nbsp;</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + b.Of + "</div>"), $('<div data-role="record-total">0</div>')]);
    },
    localizationMaterialDesign: function localizationMaterialDesign(a) {
      var b = gj.grid.messages[a.locale];
      void 0 === a.pager.leftControls && (a.pager.leftControls = []), void 0 === a.pager.rightControls && (a.pager.rightControls = [$('<span class="">' + b.RowsPerPage + "</span>"), $('<select data-role="page-size" class="gj-grid-md-limit-select" width="52"></select></div>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<span data-role="record-first" class="">0</span>'), $('<span class="">-</span>'), $('<span data-role="record-last" class="">0</span>'), $('<span class="gj-grid-mdl-pager-label">' + b.Of + "</span>"), $('<span data-role="record-total" class="">0</span>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<button class="gj-button-md">' + (a.icons.previous || b.Previous) + "</button>").attr("title", b.PreviousPageTooltip).attr("data-role", "page-previous").addClass(a.icons.first ? "gj-button-md-icon" : ""), $('<span class="gj-md-spacer-24">&nbsp;</span>'), $('<button class="gj-button-md">' + (a.icons.next || b.Next) + "</button>").attr("title", b.NextPageTooltip).attr("data-role", "page-next").addClass(a.icons.first ? "gj-button-md-icon" : "")]);
    },
    initPagerControl: function initPagerControl(a, b) {
      var c = b.data();

      switch (a.data("role")) {
        case "page-size":
          c.pager.sizes && 0 < c.pager.sizes.length ? (a.show(), $.each(c.pager.sizes, function () {
            a.append($("<option/>").attr("value", this.toString()).text(this.toString()));
          }), a.change(function () {
            var a = parseInt(this.value, 10);
            c.params[c.paramNames.limit] = a, gj.grid.plugins.pagination["private"].changePage(b, 1), gj.grid.plugins.pagination.events.pageSizeChange(b, a);
          }), a.val(c.params[c.paramNames.limit]), gj.dropdown && a.dropdown({
            uiLibrary: c.uiLibrary,
            iconsLibrary: c.iconsLibrary,
            fontSize: a.css("font-size"),
            style: {
              presenter: "btn btn-default btn-sm"
            }
          })) : a.hide();
          break;

        case "page-refresh":
          a.on("click", function () {
            b.reload();
          });
      }
    },
    reloadPager: function reloadPager(a, b) {
      var c, d, e, f, g, h, i, j;

      if (h = a.data(), h.pager) {
        for (c = 0 === b ? 0 : parseInt(h.params[h.paramNames.page], 10), d = parseInt(h.params[h.paramNames.limit], 10), e = Math.ceil(b / d), f = 0 === c ? 0 : d * (c - 1) + 1, g = f + d > b ? b : f + d - 1, i = a.find("TFOOT [data-role]"), j = 0; j < i.length; j++) {
          gj.grid.plugins.pagination["private"].reloadPagerControl($(i[j]), a, c, e, f, g, b);
        }

        gj.grid.plugins.pagination["private"].updatePagerColSpan(a);
      }
    },
    reloadPagerControl: function reloadPagerControl(a, b, c, d, e, f, g) {
      var h;

      switch (a.data("role")) {
        case "page-first":
          gj.grid.plugins.pagination["private"].assignPageHandler(b, a, 1, c < 2);
          break;

        case "page-previous":
          gj.grid.plugins.pagination["private"].assignPageHandler(b, a, c - 1, c < 2);
          break;

        case "page-number":
          a.val(c).off("change").on("change", gj.grid.plugins.pagination["private"].createChangePageHandler(b, c));
          break;

        case "page-label-last":
          a.text(d);
          break;

        case "page-next":
          gj.grid.plugins.pagination["private"].assignPageHandler(b, a, c + 1, d === c);
          break;

        case "page-last":
          gj.grid.plugins.pagination["private"].assignPageHandler(b, a, d, d === c);
          break;

        case "page-button-one":
          h = 1 === c ? 1 : c == d ? c - 2 : c - 1, gj.grid.plugins.pagination["private"].assignButtonHandler(b, a, c, h, d);
          break;

        case "page-button-two":
          h = 1 === c ? 2 : c == d ? d - 1 : c, gj.grid.plugins.pagination["private"].assignButtonHandler(b, a, c, h, d);
          break;

        case "page-button-three":
          h = 1 === c ? c + 2 : c == d ? c : c + 1, gj.grid.plugins.pagination["private"].assignButtonHandler(b, a, c, h, d);
          break;

        case "record-first":
          a.text(e);
          break;

        case "record-last":
          a.text(f);
          break;

        case "record-total":
          a.text(g);
      }
    },
    assignPageHandler: function assignPageHandler(a, b, c, d) {
      var e = a.data().style.pager;
      d ? b.addClass(e.stateDisabled).prop("disabled", !0).off("click") : b.removeClass(e.stateDisabled).prop("disabled", !1).off("click").on("click", function () {
        gj.grid.plugins.pagination["private"].changePage(a, c);
      });
    },
    assignButtonHandler: function assignButtonHandler(a, b, c, d, e) {
      var f = a.data().style.pager;
      d < 1 || d > e ? b.hide() : (b.show().off("click").text(d), d === c ? b.addClass(f.activeButton) : b.removeClass(f.activeButton).on("click", function () {
        gj.grid.plugins.pagination["private"].changePage(a, d);
      }));
    },
    createChangePageHandler: function createChangePageHandler(a, b) {
      return function () {
        var b = (a.data(), parseInt(this.value, 10));
        gj.grid.plugins.pagination["private"].changePage(a, b);
      };
    },
    changePage: function changePage(a, b) {
      var c = a.data();
      !1 === gj.grid.plugins.pagination.events.pageChanging(a, b) || isNaN(b) || (a.find('TFOOT [data-role="page-number"]').val(b), c.params[c.paramNames.page] = b), a.reload();
    },
    updatePagerColSpan: function updatePagerColSpan(a) {
      var b = a.find('tfoot > tr[data-role="pager"] > th');
      b && b.length && b.attr("colspan", gj.grid.methods.countVisibleColumns(a));
    },
    isLastRecordVisible: function isLastRecordVisible(a) {
      var b = !0,
          c = a.data(),
          d = parseInt(c.params[c.paramNames.limit], 10),
          e = parseInt(c.params[c.paramNames.page], 10),
          f = a.count();
      return d && e && (b = (e - 1) * d + f === c.totalRecords), b;
    }
  },
  "public": {
    getAll: function getAll(a) {
      var b,
          c,
          d,
          e = this.data();
      return $.isArray(e.dataSource) ? a ? e.dataSource : e.params[e.paramNames.limit] && e.params[e.paramNames.page] ? (b = parseInt(e.params[e.paramNames.limit], 10), c = parseInt(e.params[e.paramNames.page], 10), d = (c - 1) * b, e.records.slice(d, d + b)) : e.records : e.records;
    }
  },
  events: {
    pageSizeChange: function pageSizeChange(a, b) {
      a.triggerHandler("pageSizeChange", [b]);
    },
    pageChanging: function pageChanging(a, b) {
      a.triggerHandler("pageChanging", [b]);
    }
  },
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.pagination["public"]);
    a.data();
    c.pager && (gj.grid.methods.isLastRecordVisible = gj.grid.plugins.pagination["private"].isLastRecordVisible, a.on("initialized", function () {
      gj.grid.plugins.pagination["private"].init(a);
    }), a.on("dataBound", function (b, c, d) {
      gj.grid.plugins.pagination["private"].reloadPager(a, d);
    }), a.on("columnShow", function () {
      gj.grid.plugins.pagination["private"].updatePagerColSpan(a);
    }), a.on("columnHide", function () {
      gj.grid.plugins.pagination["private"].updatePagerColSpan(a);
    }));
  }
}, gj.grid.plugins.responsiveDesign = {
  config: {
    base: {
      resizeCheckInterval: 500,
      responsive: !1,
      showHiddenColumnsAsDetails: !1,
      defaultColumn: {
        priority: void 0,
        minWidth: 250
      },
      style: {
        rowDetailItem: ""
      }
    },
    bootstrap: {
      style: {
        rowDetailItem: "col-lg-4"
      }
    }
  },
  "private": {
    orderColumns: function orderColumns(a) {
      var b = [];

      if (a.columns && a.columns.length) {
        for (i = 0; i < a.columns.length; i++) {
          b.push({
            position: i,
            field: a.columns[i].field,
            minWidth: a.columns[i].width || a.columns[i].minWidth || a.defaultColumn.minWidth,
            priority: a.columns[i].priority || 0
          });
        }

        b.sort(function (a, b) {
          var c = 0;
          return a.priority < b.priority ? c = -1 : a.priority > b.priority && (c = 1), c;
        });
      }

      return b;
    },
    updateDetails: function updateDetails(a) {
      var b, c, d, e, f, g, h, i, j;

      for (b = a.find('tbody > tr[data-role="row"]'), c = a.data(), d = 0; d < b.length; d++) {
        for (f = $(b[d]), g = f.data("details"), e = 0; e < c.columns.length; e++) {
          i = c.columns[e], h = g && g.find('div[data-id="' + i.field + '"]'), c.columns[e].hidden ? (j = "<b>" + (i.title || i.field) + "</b>: {" + i.field + "}", h && h.length ? h.empty().html(j) : (h = $('<div data-id="' + i.field + '"/>').html(j), h.addClass(c.style.rowDetailItem), g && g.length || (g = $('<div class="row"/>')), g.append(h))) : h && h.length && h.remove();
        }

        a.updateDetails(f);
      }
    }
  },
  "public": {
    oldWidth: void 0,
    resizeCheckIntervalId: void 0,
    makeResponsive: function makeResponsive() {
      var a,
          b,
          c = 0,
          d = this.data(),
          e = gj.grid.plugins.responsiveDesign["private"].orderColumns(d);

      for (a = 0; a < e.length; a++) {
        b = this.find("thead>tr>th:eq(" + e[a].position + ")"), b.is(":visible") && e[a].minWidth < b.width() && (c += b.width() - e[a].minWidth);
      }

      if (c) for (a = 0; a < e.length; a++) {
        b = this.find("thead>tr>th:eq(" + e[a].position + ")"), !b.is(":visible") && e[a].minWidth <= c && (this.showColumn(e[a].field), c -= b.width());
      }

      for (a = e.length - 1; a >= 0; a--) {
        b = this.find("thead>tr>th:eq(" + e[a].position + ")"), b.is(":visible") && e[a].priority && e[a].minWidth > b.outerWidth() && this.hideColumn(e[a].field);
      }

      return this;
    }
  },
  events: {
    resize: function resize(a, b, c) {
      a.triggerHandler("resize", [b, c]);
    }
  },
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.responsiveDesign["public"]), b.responsive && (a.on("initialized", function () {
      a.makeResponsive(), a.oldWidth = a.width(), a.resizeCheckIntervalId = setInterval(function () {
        var b = a.width();
        b !== a.oldWidth && gj.grid.plugins.responsiveDesign.events.resize(a, b, a.oldWidth), a.oldWidth = b;
      }, b.resizeCheckInterval);
    }), a.on("destroy", function () {
      a.resizeCheckIntervalId && clearInterval(a.resizeCheckIntervalId);
    }), a.on("resize", function () {
      a.makeResponsive();
    })), b.showHiddenColumnsAsDetails && gj.grid.plugins.expandCollapseRows && (a.on("dataBound", function () {
      gj.grid.plugins.responsiveDesign["private"].updateDetails(a);
    }), a.on("columnHide", function () {
      gj.grid.plugins.responsiveDesign["private"].updateDetails(a);
    }), a.on("columnShow", function () {
      gj.grid.plugins.responsiveDesign["private"].updateDetails(a);
    }), a.on("rowDataBound", function () {
      gj.grid.plugins.responsiveDesign["private"].updateDetails(a);
    }));
  }
}, gj.grid.plugins.toolbar = {
  config: {
    base: {
      toolbarTemplate: void 0,
      title: void 0,
      style: {
        toolbar: "gj-grid-md-toolbar"
      }
    },
    bootstrap: {
      style: {
        toolbar: "gj-grid-bootstrap-toolbar"
      }
    },
    bootstrap4: {
      style: {
        toolbar: "gj-grid-bootstrap-4-toolbar"
      }
    }
  },
  "private": {
    init: function init(a) {
      var b, c, d;
      b = a.data(), c = a.prev('div[data-role="toolbar"]'), (void 0 !== b.toolbarTemplate || void 0 !== b.title || c.length > 0) && (0 === c.length && (c = $('<div data-role="toolbar"></div>'), a.before(c)), c.addClass(b.style.toolbar), 0 === c.children().length && b.toolbarTemplate && c.append(b.toolbarTemplate), d = c.find('[data-role="title"]'), 0 === d.length && (d = $('<div data-role="title"/>'), c.prepend(d)), b.title && d.text(b.title), b.minWidth && c.css("min-width", b.minWidth));
    }
  },
  "public": {
    title: function title(a) {
      var b = this.parent().find('div[data-role="toolbar"] [data-role="title"]');
      return void 0 !== a ? (b.text(a), this) : b.text();
    }
  },
  configure: function configure(a) {
    $.extend(!0, a, gj.grid.plugins.toolbar["public"]), a.on("initialized", function () {
      gj.grid.plugins.toolbar["private"].init(a);
    }), a.on("destroying", function () {
      a.prev('[data-role="toolbar"]').remove();
    });
  }
}, gj.grid.plugins.resizableColumns = {
  config: {
    base: {
      resizableColumns: !1
    }
  },
  "private": {
    init: function init(a, b) {
      var c, d, e, f, g, h;

      if (c = a.find('thead tr[data-role="caption"] th'), c.length) {
        for (e = 0; e < c.length - 1; e++) {
          d = $(c[e]), f = $('<div class="gj-grid-column-resizer-wrapper" />'), h = parseInt(d.css("padding-right"), 10) + 3, g = $('<span class="gj-grid-column-resizer" />').css("margin-right", "-" + h + "px"), g.draggable({
            start: function start() {
              a.addClass("gj-unselectable"), a.addClass("gj-grid-resize-cursor");
            },
            stop: function stop() {
              a.removeClass("gj-unselectable"), a.removeClass("gj-grid-resize-cursor"), this.style.removeProperty("top"), this.style.removeProperty("left"), this.style.removeProperty("position");
            },
            drag: gj.grid.plugins.resizableColumns["private"].createResizeHandle(a, d, b.columns[e])
          }), d.append(f.append(g));
        }

        for (e = 0; e < c.length; e++) {
          d = $(c[e]), d.attr("width") || d.attr("width", d.outerWidth());
        }
      }
    },
    createResizeHandle: function createResizeHandle(a, b, c) {
      var d = a.data();
      return function (e, f) {
        var g,
            h,
            i,
            j,
            k,
            l,
            m = parseInt(b.attr("width"), 10),
            n = gj.core.position(this),
            o = {
          top: f.top - n.top,
          left: f.left - n.left
        };
        if (m || (m = b.outerWidth()), o.left && (k = m + o.left, c.width = k, b.attr("width", k), h = b[0].cellIndex, j = b[0].parentElement.children[h + 1], l = parseInt($(j).attr("width"), 10) - o.left, j.setAttribute("width", l), d.resizableColumns)) for (i = a[0].tBodies[0].children, g = 0; g < i.length; g++) {
          i[g].cells[h].setAttribute("width", k), j = i[g].cells[h + 1], j.setAttribute("width", l);
        }
      };
    }
  },
  "public": {},
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.resizableColumns["public"]), b.resizableColumns && gj.draggable && a.on("initialized", function () {
      gj.grid.plugins.resizableColumns["private"].init(a, b);
    });
  }
}, gj.grid.plugins.rowReorder = {
  config: {
    base: {
      rowReorder: !1,
      rowReorderColumn: void 0,
      orderNumberField: void 0,
      style: {
        targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
        targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
      }
    }
  },
  "private": {
    init: function init(a) {
      var b,
          c,
          d,
          e = a.find('tbody tr[data-role="row"]');

      for (a.data("rowReorderColumn") && (c = gj.grid.methods.getColumnPosition(a.data("columns"), a.data("rowReorderColumn"))), b = 0; b < e.length; b++) {
        d = $(e[b]), void 0 !== c ? d.find("td:eq(" + c + ")").on("mousedown", gj.grid.plugins.rowReorder["private"].createRowMouseDownHandler(a, d)) : d.on("mousedown", gj.grid.plugins.rowReorder["private"].createRowMouseDownHandler(a, d));
      }
    },
    createRowMouseDownHandler: function createRowMouseDownHandler(a, b) {
      return function (c) {
        var d,
            e,
            f = a.clone(),
            g = a.data("columns");

        for (a.addClass("gj-unselectable"), $("body").append(f), f.attr("data-role", "draggable-clone").css("cursor", "move"), f.children("thead").remove().children("tfoot").remove(), f.find('tbody tr:not([data-position="' + b.data("position") + '"])').remove(), e = f.find("tbody tr td"), d = 0; d < e.length; d++) {
          g[d].width && e[d].setAttribute("width", g[d].width);
        }

        f.draggable({
          stop: gj.grid.plugins.rowReorder["private"].createDragStopHandler(a, b)
        }), f.css({
          position: "absolute",
          top: b.offset().top,
          left: b.offset().left,
          width: b.width(),
          zIndex: 1
        }), "true" === b.attr("data-droppable") && b.droppable("destroy"), b.siblings('tr[data-role="row"]').each(function () {
          var a = $(this);
          "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable({
            over: gj.grid.plugins.rowReorder["private"].createDroppableOverHandler(b),
            out: gj.grid.plugins.rowReorder["private"].droppableOut
          });
        }), f.trigger("mousedown");
      };
    },
    createDragStopHandler: function createDragStopHandler(a, b) {
      return function (c, d) {
        $('table[data-role="draggable-clone"]').draggable("destroy").remove(), a.removeClass("gj-unselectable"), b.siblings('tr[data-role="row"]').each(function () {
          var c,
              e,
              f,
              g,
              h,
              i = $(this),
              j = i.data("position"),
              k = b.data("position"),
              l = a.data();

          if (i.droppable("isOver", d)) {
            for (j < k ? i.before(b) : i.after(b), l.records.splice(j - 1, 0, l.records.splice(k - 1, 1)[0]), c = i.parent().find('tr[data-role="row"]'), f = 0; f < c.length; f++) {
              $(c[f]).attr("data-position", f + 1);
            }

            if (l.orderNumberField) {
              for (f = 0; f < l.records.length; f++) {
                l.records[f][l.orderNumberField] = f + 1;
              }

              for (f = 0; f < c.length; f++) {
                e = $(c[f]), h = gj.grid.methods.getId(e, l.primaryKey, e.attr("data-position")), g = gj.grid.methods.getByPosition(a, e.attr("data-position")), a.setCellContent(h, l.orderNumberField, g[l.orderNumberField]);
              }
            }
          }

          i.removeClass("gj-grid-top-border"), i.removeClass("gj-grid-bottom-border"), i.droppable("destroy");
        });
      };
    },
    createDroppableOverHandler: function createDroppableOverHandler(a) {
      return function (b) {
        var c = $(this);
        c.data("position") < a.data("position") ? c.addClass("gj-grid-top-border") : c.addClass("gj-grid-bottom-border");
      };
    },
    droppableOut: function droppableOut() {
      $(this).removeClass("gj-grid-top-border"), $(this).removeClass("gj-grid-bottom-border");
    }
  },
  "public": {},
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.rowReorder["public"]), b.rowReorder && gj.draggable && gj.droppable && a.on("dataBound", function () {
      gj.grid.plugins.rowReorder["private"].init(a);
    });
  }
}, gj.grid.plugins["export"] = {
  config: {
    base: {}
  },
  "public": {
    getCSV: function getCSV(a) {
      var b,
          c,
          d = "",
          e = "",
          f = this.data().columns,
          g = this.getAll(a);

      if (g.length) {
        for (b = 0; b < f.length; b++) {
          gj.grid.plugins["export"]["public"].isColumnApplicable(f[b]) && (d += '"' + (f[b].title || f[b].field).replace(/<[^>]+>/g, " ") + '",');
        }

        for (e += d.slice(0, d.length - 1) + "\r\n", b = 0; b < g.length; b++) {
          for (d = "", c = 0; c < f.length; c++) {
            gj.grid.plugins["export"]["public"].isColumnApplicable(f[c]) && (d += '"' + g[b][f[c].field] + '",');
          }

          e += d.slice(0, d.length - 1) + "\r\n";
        }
      }

      return e;
    },
    downloadCSV: function downloadCSV(a, b) {
      var c = document.createElement("a");
      return document.body.appendChild(c), c.download = a || "griddata.csv", window.navigator.userAgent.indexOf("Edge") > -1 ? c.href = URL.createObjectURL(new Blob([this.getCSV(b)], {
        type: "text/csv;charset=utf-8;"
      })) : c.href = "data:text/csv;charset=utf-8," + escape(this.getCSV(b)), c.click(), document.body.removeChild(c), this;
    },
    isColumnApplicable: function isColumnApplicable(a) {
      return !0 !== a.hidden && !a.role;
    }
  },
  configure: function configure(a) {
    $.extend(!0, a, gj.grid.plugins["export"]["public"]);
  }
}, gj.grid.plugins.columnReorder = {
  config: {
    base: {
      columnReorder: !1,
      dragReady: !1,
      style: {
        targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
        targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
      }
    }
  },
  "private": {
    init: function init(a) {
      var b,
          c,
          d = a.find("thead tr th");

      for (b = 0; b < d.length; b++) {
        c = $(d[b]), c.on("mousedown", gj.grid.plugins.columnReorder["private"].createMouseDownHandler(a, c)), c.on("mousemove", gj.grid.plugins.columnReorder["private"].createMouseMoveHandler(a, c)), c.on("mouseup", gj.grid.plugins.columnReorder["private"].createMouseUpHandler(a, c));
      }
    },
    createMouseDownHandler: function createMouseDownHandler(a) {
      return function (b) {
        a.timeout = setTimeout(function () {
          a.data("dragReady", !0);
        }, 100);
      };
    },
    createMouseUpHandler: function createMouseUpHandler(a) {
      return function (b) {
        clearTimeout(a.timeout), a.data("dragReady", !1);
      };
    },
    createMouseMoveHandler: function createMouseMoveHandler(a, b) {
      return function (c) {
        var d, e;
        a.data("dragReady") && (a.data("dragReady", !1), d = a.clone(), e = b.index(), a.addClass("gj-unselectable"), $("body").append(d), d.attr("data-role", "draggable-clone").css("cursor", "move"), d.find("thead tr th:eq(" + e + ")").siblings().remove(), d.find('tbody tr[data-role != "row"]').remove(), d.find("tbody tr td:nth-child(" + (e + 1) + ")").siblings().remove(), d.find("tfoot").remove(), d.draggable({
          stop: gj.grid.plugins.columnReorder["private"].createDragStopHandler(a, b)
        }), d.css({
          position: "absolute",
          top: b.offset().top,
          left: b.offset().left,
          width: b.width(),
          zIndex: 1
        }), "true" === b.attr("data-droppable") && b.droppable("destroy"), b.siblings("th").each(function () {
          var c = $(this);
          "true" === c.attr("data-droppable") && c.droppable("destroy"), c.droppable({
            over: gj.grid.plugins.columnReorder["private"].createDroppableOverHandler(a, b),
            out: gj.grid.plugins.columnReorder["private"].droppableOut
          });
        }), d.trigger("mousedown"));
      };
    },
    createDragStopHandler: function createDragStopHandler(a, b) {
      return function (c, d) {
        $('table[data-role="draggable-clone"]').draggable("destroy").remove(), a.removeClass("gj-unselectable"), b.siblings("th").each(function () {
          var c = $(this),
              e = a.data(),
              f = gj.grid.methods.getColumnPosition(e.columns, c.data("field")),
              g = gj.grid.methods.getColumnPosition(e.columns, b.data("field"));
          c.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), c.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (c.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), c.droppable("isOver", d) && (f < g ? c.before(b) : c.after(b), gj.grid.plugins.columnReorder["private"].moveRowCells(a, g, f), e.columns.splice(f, 0, e.columns.splice(g, 1)[0])), c.droppable("destroy");
        });
      };
    },
    moveRowCells: function moveRowCells(a, b, c) {
      var d,
          e,
          f = a.find('tbody tr[data-role="row"]');

      for (d = 0; d < f.length; d++) {
        e = $(f[d]), c < b ? e.find("td:eq(" + c + ")").before(e.find("td:eq(" + b + ")")) : e.find("td:eq(" + c + ")").after(e.find("td:eq(" + b + ")"));
      }
    },
    createDroppableOverHandler: function createDroppableOverHandler(a, b) {
      return function (c) {
        var d = $(this),
            e = a.data();
        gj.grid.methods.getColumnPosition(e.columns, d.data("field")) < gj.grid.methods.getColumnPosition(e.columns, b.data("field")) ? (d.addClass("gj-grid-left-border"), a.find('tbody tr[data-role="row"] td:nth-child(' + (d.index() + 1) + ")").addClass("gj-grid-left-border")) : (d.addClass("gj-grid-right-border"), a.find('tbody tr[data-role="row"] td:nth-child(' + (d.index() + 1) + ")").addClass("gj-grid-right-border"));
      };
    },
    droppableOut: function droppableOut() {
      var a = $(this);
      a.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), a.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (a.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border");
    }
  },
  "public": {},
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.columnReorder["public"]), b.columnReorder && a.on("initialized", function () {
      gj.grid.plugins.columnReorder["private"].init(a);
    });
  }
}, gj.grid.plugins.headerFilter = {
  config: {
    base: {
      defaultColumnSettings: {
        filterable: !0
      },
      headerFilter: {
        type: "onenterkeypress"
      }
    }
  },
  "private": {
    init: function init(a) {
      var b,
          c,
          d,
          e = a.data(),
          f = $('<tr data-role="filter"/>');

      for (b = 0; b < e.columns.length; b++) {
        c = $("<th/>"), e.columns[b].filterable && (d = $('<input data-field="' + e.columns[b].field + '" class="gj-width-full" />'), "onchange" === e.headerFilter.type ? d.on("input propertychange", function (b) {
          gj.grid.plugins.headerFilter["private"].reload(a, $(this));
        }) : (d.on("keypress", function (b) {
          13 == b.which && gj.grid.plugins.headerFilter["private"].reload(a, $(this));
        }), d.on("blur", function (b) {
          gj.grid.plugins.headerFilter["private"].reload(a, $(this));
        })), c.append(d)), e.columns[b].hidden && c.hide(), f.append(c);
      }

      a.children("thead").append(f);
    },
    reload: function reload(a, b) {
      var c = {};
      c[b.data("field")] = b.val(), a.reload(c);
    }
  },
  "public": {},
  events: {},
  configure: function configure(a, b, c) {
    $.extend(!0, a, gj.grid.plugins.headerFilter["public"]);
    a.data();
    c.headerFilter && a.on("initialized", function () {
      gj.grid.plugins.headerFilter["private"].init(a);
    });
  }
}, gj.grid.plugins.grouping = {
  config: {
    base: {
      paramNames: {
        groupBy: "groupBy",
        groupByDirection: "groupByDirection"
      },
      grouping: {
        groupBy: void 0,
        direction: "asc"
      },
      icons: {
        expandGroup: '<i class="gj-icon plus" />',
        collapseGroup: '<i class="gj-icon minus" />'
      }
    },
    fontawesome: {
      icons: {
        expandGroup: '<i class="fa fa-plus" aria-hidden="true"></i>',
        collapseGroup: '<i class="fa fa-minus" aria-hidden="true"></i>'
      }
    },
    glyphicons: {
      icons: {
        expandGroup: '<span class="glyphicon glyphicon-plus" />',
        collapseGroup: '<span class="glyphicon glyphicon-minus" />'
      }
    }
  },
  "private": {
    init: function init(a) {
      var b,
          c = a.data();
      b = void 0, a.on("rowDataBound", function (d, e, f, g) {
        if (b !== g[c.grouping.groupBy] || 1 === e[0].rowIndex) {
          var h = gj.grid.methods.countVisibleColumns(a) - 1,
              i = $('<tr role="group" />'),
              j = $('<td class="gj-text-align-center gj-unselectable gj-cursor-pointer" />');
          j.append('<div data-role="display">' + c.icons.collapseGroup + "</div>"), j.on("click", gj.grid.plugins.grouping["private"].createExpandCollapseHandler(c)), i.append(j), i.append('<td colspan="' + h + '"><div data-role="display">' + c.grouping.groupBy + ": " + g[c.grouping.groupBy] + "</div></td>"), i.insertBefore(e), b = g[c.grouping.groupBy];
        }

        e.show();
      }), c.params[c.paramNames.groupBy] = c.grouping.groupBy, c.params[c.paramNames.groupByDirection] = c.grouping.direction;
    },
    grouping: function grouping(a, b) {
      var c = a.data();
      b.sort(gj.grid.methods.createDefaultSorter(c.grouping.direction, c.grouping.groupBy));
    },
    createExpandCollapseHandler: function createExpandCollapseHandler(a) {
      return function (b) {
        var c = $(this),
            d = gj.grid.plugins.grouping["private"];
        "row" === c.closest("tr").next(":visible").data("role") ? d.collapseGroup(a, c) : d.expandGroup(a, c);
      };
    },
    collapseGroup: function collapseGroup(a, b) {
      var c = b.children('div[data-role="display"]');
      b.closest("tr").nextUntil('[role="group"]').hide(), c.empty().append(a.icons.expandGroup);
    },
    expandGroup: function expandGroup(a, b) {
      var c = b.children('div[data-role="display"]');
      b.closest("tr").nextUntil('[role="group"]').show(), c.empty().append(a.icons.collapseGroup);
    }
  },
  "public": {},
  configure: function configure(a) {
    var b,
        c = a.data();
    $.extend(!0, a, gj.grid.plugins.grouping["public"]), c.grouping && c.grouping.groupBy && (b = {
      title: "",
      width: c.defaultIconColumnWidth,
      align: "center",
      stopPropagation: !0,
      cssClass: "gj-cursor-pointer gj-unselectable"
    }, c.columns = [b].concat(c.columns), a.on("initialized", function () {
      gj.grid.plugins.grouping["private"].init(a);
    }), a.on("dataFiltered", function (b, c) {
      gj.grid.plugins.grouping["private"].grouping(a, c);
    }));
  }
}, gj.grid.messages["en-us"] = {
  First: "First",
  Previous: "Previous",
  Next: "Next",
  Last: "Last",
  Page: "Page",
  FirstPageTooltip: "First Page",
  PreviousPageTooltip: "Previous Page",
  NextPageTooltip: "Next Page",
  LastPageTooltip: "Last Page",
  Refresh: "Refresh",
  Of: "of",
  DisplayingRecords: "Displaying records",
  RowsPerPage: "Rows per page:",
  Edit: "Edit",
  Delete: "Delete",
  Update: "Update",
  Cancel: "Cancel",
  NoRecordsFound: "No records found.",
  Loading: "Loading..."
}, gj.tree = {
  plugins: {}
}, gj.tree.config = {
  base: {
    params: {},
    autoLoad: !0,
    selectionType: "single",
    cascadeSelection: !1,
    dataSource: void 0,
    primaryKey: void 0,
    textField: "text",
    childrenField: "children",
    hasChildrenField: "hasChildren",
    imageCssClassField: "imageCssClass",
    imageUrlField: "imageUrl",
    imageHtmlField: "imageHtml",
    disabledField: "disabled",
    width: void 0,
    border: !1,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    autoGenId: 1,
    autoGenFieldName: "autoId_b5497cc5-7ef3-49f5-a7dc-4a932e1aee4a",
    indentation: 24,
    style: {
      wrapper: "gj-unselectable",
      list: "gj-list gj-list-md",
      item: void 0,
      active: "gj-list-md-active",
      leafIcon: void 0,
      border: "gj-tree-md-border"
    },
    icons: {
      expand: '<i class="gj-icon chevron-right" />',
      collapse: '<i class="gj-icon chevron-down" />'
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-unselectable gj-tree-bootstrap-3",
      list: "gj-list gj-list-bootstrap list-group",
      item: "list-group-item",
      active: "active",
      border: "gj-tree-bootstrap-border"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-unselectable gj-tree-bootstrap-4",
      list: "gj-list gj-list-bootstrap",
      item: "list-group-item",
      active: "active",
      border: "gj-tree-bootstrap-border"
    },
    icons: {
      expand: '<i class="gj-icon plus" />',
      collapse: '<i class="gj-icon minus" />'
    }
  },
  materialicons: {
    style: {
      expander: "gj-tree-material-icons-expander"
    }
  },
  fontawesome: {
    style: {
      expander: "gj-tree-font-awesome-expander"
    },
    icons: {
      expand: '<i class="fa fa-plus" aria-hidden="true"></i>',
      collapse: '<i class="fa fa-minus" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    style: {
      expander: "gj-tree-glyphicons-expander"
    },
    icons: {
      expand: '<span class="glyphicon glyphicon-plus" />',
      collapse: '<span class="glyphicon glyphicon-minus" />'
    }
  }
}, gj.tree.events = {
  initialized: function initialized(a) {
    a.triggerHandler("initialized");
  },
  dataBinding: function dataBinding(a) {
    a.triggerHandler("dataBinding");
  },
  dataBound: function dataBound(a) {
    a.triggerHandler("dataBound");
  },
  select: function select(a, b, c) {
    return a.triggerHandler("select", [b, c]);
  },
  unselect: function unselect(a, b, c) {
    return a.triggerHandler("unselect", [b, c]);
  },
  expand: function expand(a, b, c) {
    return a.triggerHandler("expand", [b, c]);
  },
  collapse: function collapse(a, b, c) {
    return a.triggerHandler("collapse", [b, c]);
  },
  enable: function enable(a, b) {
    return a.triggerHandler("enable", [b]);
  },
  disable: function disable(a, b) {
    return a.triggerHandler("disable", [b]);
  },
  destroying: function destroying(a) {
    return a.triggerHandler("destroying");
  },
  nodeDataBound: function nodeDataBound(a, b, c, d) {
    return a.triggerHandler("nodeDataBound", [b, c, d]);
  }
}, gj.tree.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "tree"), gj.tree.methods.initialize.call(this), this.data("autoLoad") && this.reload(), this;
  },
  initialize: function initialize() {
    var a = this.data(),
        b = $('<ul class="' + a.style.list + '"/>');
    this.empty().addClass(a.style.wrapper).append(b), a.width && this.width(a.width), a.border && this.addClass(a.style.border), gj.tree.events.initialized(this);
  },
  useHtmlDataSource: function useHtmlDataSource(a, b) {
    b.dataSource = [];
  },
  render: function render(a, b) {
    var c;
    return b && ("string" == typeof b && JSON && (b = JSON.parse(b)), c = a.data(), c.records = b, c.primaryKey || gj.tree.methods.genAutoId(c, c.records), gj.tree.methods.loadData(a)), a;
  },
  filter: function filter(a) {
    return a.data().dataSource;
  },
  genAutoId: function genAutoId(a, b) {
    var c;

    for (c = 0; c < b.length; c++) {
      b[c][a.autoGenFieldName] = a.autoGenId++, b[c][a.childrenField] && b[c][a.childrenField].length && gj.tree.methods.genAutoId(a, b[c][a.childrenField]);
    }
  },
  loadData: function loadData(a) {
    var b,
        c = a.data("records"),
        d = a.children("ul");

    for (gj.tree.events.dataBinding(a), d.off().empty(), b = 0; b < c.length; b++) {
      gj.tree.methods.appendNode(a, d, c[b], 1);
    }

    gj.tree.events.dataBound(a);
  },
  appendNode: function appendNode(a, b, c, d, e) {
    var f,
        g,
        h,
        i,
        j,
        k = a.data(),
        l = k.primaryKey ? c[k.primaryKey] : c[k.autoGenFieldName];

    if (g = $('<li data-id="' + l + '" data-role="node" />').addClass(k.style.item), $wrapper = $('<div data-role="wrapper" />'), $expander = $('<span data-role="expander" data-mode="close"></span>').addClass(k.style.expander), $display = $('<span data-role="display">' + c[k.textField] + "</span>"), hasChildren = void 0 !== c[k.hasChildrenField] && "true" === c[k.hasChildrenField].toString().toLowerCase(), disabled = void 0 !== c[k.disabledField] && "true" === c[k.disabledField].toString().toLowerCase(), k.indentation && $wrapper.append('<span data-role="spacer" style="width: ' + k.indentation * (d - 1) + 'px;"></span>'), disabled ? gj.tree.methods.disableNode(a, g) : ($expander.on("click", gj.tree.methods.expanderClickHandler(a)), $display.on("click", gj.tree.methods.displayClickHandler(a))), $wrapper.append($expander), $wrapper.append($display), g.append($wrapper), e ? b.find("li:eq(" + (e - 1) + ")").before(g) : b.append(g), k.imageCssClassField && c[k.imageCssClassField] ? (i = $('<span data-role="image"><span class="' + c[k.imageCssClassField] + '"></span></span>'), i.insertBefore($display)) : k.imageUrlField && c[k.imageUrlField] ? (i = $('<span data-role="image"></span>'), i.insertBefore($display), j = $('<img src="' + c[k.imageUrlField] + '"></img>'), j.attr("width", i.width()).attr("height", i.height()), i.append(j)) : k.imageHtmlField && c[k.imageHtmlField] && (i = $('<span data-role="image">' + c[k.imageHtmlField] + "</span>"), i.insertBefore($display)), c[k.childrenField] && c[k.childrenField].length || hasChildren) {
      if ($expander.empty().append(k.icons.expand), h = $("<ul />").addClass(k.style.list).addClass("gj-hidden"), g.append(h), c[k.childrenField] && c[k.childrenField].length) for (f = 0; f < c[k.childrenField].length; f++) {
        gj.tree.methods.appendNode(a, h, c[k.childrenField][f], d + 1);
      }
    } else k.style.leafIcon ? $expander.addClass(k.style.leafIcon) : $expander.html("&nbsp;");

    gj.tree.events.nodeDataBound(a, g, c.id, c);
  },
  expanderClickHandler: function expanderClickHandler(a) {
    return function (b) {
      var c = $(this),
          d = c.closest("li");
      "close" === c.attr("data-mode") ? a.expand(d) : a.collapse(d);
    };
  },
  expand: function expand(a, b, c) {
    var d,
        e,
        f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
        g = a.data(),
        h = b.attr("data-id"),
        i = b.children("ul");
    if (!1 !== gj.tree.events.expand(a, b, h) && i && i.length && (i.show(), f.attr("data-mode", "open"), f.empty().append(g.icons.collapse), c)) for (d = b.find("ul>li"), e = 0; e < d.length; e++) {
      gj.tree.methods.expand(a, $(d[e]), c);
    }
    return a;
  },
  collapse: function collapse(a, b, c) {
    var d,
        e,
        f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
        g = a.data(),
        h = b.attr("data-id"),
        i = b.children("ul");
    if (!1 !== gj.tree.events.collapse(a, b, h) && i && i.length && (i.hide(), f.attr("data-mode", "close"), f.empty().append(g.icons.expand), c)) for (d = b.find("ul>li"), e = 0; e < d.length; e++) {
      gj.tree.methods.collapse(a, $(d[e]), c);
    }
    return a;
  },
  expandAll: function expandAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.expand(a, $(c[b]), !0);
    }

    return a;
  },
  collapseAll: function collapseAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.collapse(a, $(c[b]), !0);
    }

    return a;
  },
  displayClickHandler: function displayClickHandler(a) {
    return function (b) {
      var c = $(this),
          d = c.closest("li"),
          e = a.data().cascadeSelection;
      "true" === d.attr("data-selected") ? gj.tree.methods.unselect(a, d, e) : ("single" === a.data("selectionType") && gj.tree.methods.unselectAll(a), gj.tree.methods.select(a, d, e));
    };
  },
  selectAll: function selectAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.select(a, $(c[b]), !0);
    }

    return a;
  },
  select: function select(a, b, c) {
    var d,
        e,
        f = a.data();
    if ("true" !== b.attr("data-selected") && !1 !== gj.tree.events.select(a, b, b.attr("data-id")) && (b.addClass(f.style.active).attr("data-selected", "true"), c)) for (e = b.find("ul>li"), d = 0; d < e.length; d++) {
      gj.tree.methods.select(a, $(e[d]), c);
    }
  },
  unselectAll: function unselectAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.unselect(a, $(c[b]), !0);
    }

    return a;
  },
  unselect: function unselect(a, b, c) {
    var d, e;
    a.data();
    if ("true" === b.attr("data-selected") && !1 !== gj.tree.events.unselect(a, b, b.attr("data-id")) && (b.removeClass(a.data().style.active).removeAttr("data-selected"), c)) for (e = b.find("ul>li"), d = 0; d < e.length; d++) {
      gj.tree.methods.unselect(a, $(e[d]), c);
    }
  },
  getSelections: function getSelections(a) {
    var b,
        c,
        d,
        e = [],
        f = a.children("li");
    if (f && f.length) for (b = 0; b < f.length; b++) {
      c = $(f[b]), "true" === c.attr("data-selected") ? e.push(c.attr("data-id")) : c.has("ul") && (d = gj.tree.methods.getSelections(c.children("ul")), d.length && (e = e.concat(d)));
    }
    return e;
  },
  getDataById: function getDataById(a, b, c) {
    var d,
        e = a.data(),
        f = void 0;

    for (d = 0; d < c.length; d++) {
      if (e.primaryKey && c[d][e.primaryKey] == b) {
        f = c[d];
        break;
      }

      if (c[d][e.autoGenFieldName] == b) {
        f = c[d];
        break;
      }

      if (c[d][e.childrenField] && c[d][e.childrenField].length && (f = gj.tree.methods.getDataById(a, b, c[d][e.childrenField]))) break;
    }

    return f;
  },
  getDataByText: function getDataByText(a, b, c) {
    var d,
        e = void 0,
        f = a.data();

    for (d = 0; d < c.length; d++) {
      if (b === c[d][f.textField]) {
        e = c[d];
        break;
      }

      if (c[d][f.childrenField] && c[d][f.childrenField].length && (e = gj.tree.methods.getDataByText(a, b, c[d][f.childrenField]))) break;
    }

    return e;
  },
  getNodeById: function getNodeById(a, b) {
    var c,
        d,
        e = void 0,
        f = a.children("li");
    if (f && f.length) for (c = 0; c < f.length; c++) {
      if (d = $(f[c]), b == d.attr("data-id")) {
        e = d;
        break;
      }

      if (d.has("ul") && (e = gj.tree.methods.getNodeById(d.children("ul"), b))) break;
    }
    return e;
  },
  getNodeByText: function getNodeByText(a, b) {
    var c,
        d,
        e = void 0,
        f = a.children("li");
    if (f && f.length) for (c = 0; c < f.length; c++) {
      if (d = $(f[c]), b === d.find('>[data-role="wrapper"]>[data-role="display"]').text()) {
        e = d;
        break;
      }

      if (d.has("ul") && (e = gj.tree.methods.getNodeByText(d.children("ul"), b))) break;
    }
    return e;
  },
  addNode: function addNode(a, b, c, d) {
    var e,
        f,
        g = a.data();
    return c && c.length ? ("li" === c[0].tagName.toLowerCase() && (0 === c.children("ul").length && (c.find('[data-role="expander"]').empty().append(g.icons.collapse), c.append($("<ul />").addClass(g.style.list))), c = c.children("ul")), f = a.getDataById(c.parent().data("id")), f[g.childrenField] || (f[g.childrenField] = []), f[g.childrenField].push(b)) : (c = a.children("ul"), a.data("records").push(b)), e = c.parentsUntil('[data-type="tree"]', "ul").length + 1, g.primaryKey || gj.tree.methods.genAutoId(g, [b]), gj.tree.methods.appendNode(a, c, b, e, d), a;
  },
  remove: function remove(a, b) {
    return gj.tree.methods.removeDataById(a, b.attr("data-id"), a.data("records")), b.remove(), a;
  },
  removeDataById: function removeDataById(a, b, c) {
    var d,
        e = a.data();

    for (d = 0; d < c.length; d++) {
      if (e.primaryKey && c[d][e.primaryKey] == b) {
        c.splice(d, 1);
        break;
      }

      if (c[d][e.autoGenFieldName] == b) {
        c.splice(d, 1);
        break;
      }

      c[d][e.childrenField] && c[d][e.childrenField].length && gj.tree.methods.removeDataById(a, b, c[d][e.childrenField]);
    }
  },
  update: function update(a, b, c) {
    var d = a.data(),
        e = a.getNodeById(b);
    a.getDataById(b);
    return c, e.find('>[data-role="wrapper"]>[data-role="display"]').html(c[d.textField]), gj.tree.events.nodeDataBound(a, e, b, c), a;
  },
  getChildren: function getChildren(a, b, c) {
    var d,
        e,
        f = [],
        c = void 0 === c || c;

    for (e = c ? b.find("ul li") : b.find(">ul>li"), d = 0; d < e.length; d++) {
      f.push($(e[d]).data("id"));
    }

    return f;
  },
  enableAll: function enableAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.enableNode(a, $(c[b]), !0);
    }

    return a;
  },
  enableNode: function enableNode(a, b, c) {
    var d,
        e,
        f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
        g = b.find('>[data-role="wrapper"]>[data-role="display"]'),
        c = void 0 === c || c;
    if (b.removeClass("disabled"), f.on("click", gj.tree.methods.expanderClickHandler(a)), g.on("click", gj.tree.methods.displayClickHandler(a)), gj.tree.events.enable(a, b), c) for (e = b.find("ul>li"), d = 0; d < e.length; d++) {
      gj.tree.methods.enableNode(a, $(e[d]), c);
    }
  },
  disableAll: function disableAll(a) {
    var b,
        c = a.find("ul>li");

    for (b = 0; b < c.length; b++) {
      gj.tree.methods.disableNode(a, $(c[b]), !0);
    }

    return a;
  },
  disableNode: function disableNode(a, b, c) {
    var d,
        e,
        f = b.find('>[data-role="wrapper"]>[data-role="expander"]'),
        g = b.find('>[data-role="wrapper"]>[data-role="display"]'),
        c = void 0 === c || c;
    if (b.addClass("disabled"), f.off("click"), g.off("click"), gj.tree.events.disable(a, b), c) for (e = b.find("ul>li"), d = 0; d < e.length; d++) {
      gj.tree.methods.disableNode(a, $(e[d]), c);
    }
  },
  destroy: function destroy(a) {
    return a.data() && (gj.tree.events.destroying(a), a.xhr && a.xhr.abort(), a.off(), a.removeData(), a.removeAttr("data-type"), a.removeClass().empty()), a;
  },
  pathFinder: function pathFinder(a, b, c, d) {
    var e,
        f = !1;

    for (e = 0; e < b.length; e++) {
      if (b[e].id == c) {
        f = !0;
        break;
      }

      if (gj.tree.methods.pathFinder(a, b[e][a.childrenField], c, d)) {
        d.push(b[e].data[a.textField]), f = !0;
        break;
      }
    }

    return f;
  }
}, gj.tree.widget = function (a, b) {
  var c = this,
      d = gj.tree.methods;
  return c.reload = function (a) {
    return gj.widget.prototype.reload.call(this, a);
  }, c.render = function (a) {
    return d.render(this, a);
  }, c.addNode = function (a, b, c) {
    return d.addNode(this, a, b, c);
  }, c.removeNode = function (a) {
    return d.remove(this, a);
  }, c.updateNode = function (a, b) {
    return d.update(this, a, b);
  }, c.destroy = function () {
    return d.destroy(this);
  }, c.expand = function (a, b) {
    return d.expand(this, a, b);
  }, c.collapse = function (a, b) {
    return d.collapse(this, a, b);
  }, c.expandAll = function () {
    return d.expandAll(this);
  }, c.collapseAll = function () {
    return d.collapseAll(this);
  }, c.getDataById = function (a) {
    return d.getDataById(this, a, this.data("records"));
  }, c.getDataByText = function (a) {
    return d.getDataByText(this, a, this.data("records"));
  }, c.getNodeById = function (a) {
    return d.getNodeById(this.children("ul"), a);
  }, c.getNodeByText = function (a) {
    return d.getNodeByText(this.children("ul"), a);
  }, c.getAll = function () {
    return this.data("records");
  }, c.select = function (a) {
    return d.select(this, a);
  }, c.unselect = function (a) {
    return d.unselect(this, a);
  }, c.selectAll = function () {
    return d.selectAll(this);
  }, c.unselectAll = function () {
    return d.unselectAll(this);
  }, c.getSelections = function () {
    return d.getSelections(this.children("ul"));
  }, c.getChildren = function (a, b) {
    return d.getChildren(this, a, b);
  }, c.parents = function (a) {
    var b = [],
        c = this.data();
    return d.pathFinder(c, c.records, a, b), b.reverse();
  }, c.enable = function (a, b) {
    return d.enableNode(this, a, b);
  }, c.enableAll = function () {
    return d.enableAll(this);
  }, c.disable = function (a, b) {
    return d.disableNode(this, a, b);
  }, c.disableAll = function () {
    return d.disableAll(this);
  }, $.extend(a, c), "tree" !== a.attr("data-type") && d.init.call(a, b), a;
}, gj.tree.widget.prototype = new gj.widget(), gj.tree.widget.constructor = gj.tree.widget, function (a) {
  a.fn.tree = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.tree.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.tree.widget(this, a);
    }
  };
}(jQuery), gj.tree.plugins.checkboxes = {
  config: {
    base: {
      checkboxes: void 0,
      checkedField: "checked",
      cascadeCheck: !0
    }
  },
  "private": {
    dataBound: function dataBound(a) {
      var b;
      a.data("cascadeCheck") && (b = a.find('li[data-role="node"]'), $.each(b, function () {
        var a = $(this),
            b = a.find('[data-role="checkbox"] input[type="checkbox"]').checkbox("state");
        "checked" === b && (gj.tree.plugins.checkboxes["private"].updateChildrenState(a, b), gj.tree.plugins.checkboxes["private"].updateParentState(a, b));
      }));
    },
    nodeDataBound: function nodeDataBound(a, b, c, d) {
      var e, f, g, h, i;
      0 === b.find('> [data-role="wrapper"] > [data-role="checkbox"]').length && (e = a.data(), f = b.find('> [data-role="wrapper"] > [data-role="expander"]'), g = $('<input type="checkbox"/>'), h = $('<span data-role="checkbox"></span>').append(g), i = void 0 !== d[e.disabledField] && "true" === d[e.disabledField].toString().toLowerCase(), g = g.checkbox({
        uiLibrary: e.uiLibrary,
        iconsLibrary: e.iconsLibrary,
        change: function change(c, e) {
          gj.tree.plugins.checkboxes.events.checkboxChange(a, b, d, g.state());
        }
      }), i && g.prop("disabled", !0), d[e.checkedField] && g.state("checked"), g.on("click", function (a) {
        var b = g.closest("li"),
            c = g.state();
        e.cascadeCheck && (gj.tree.plugins.checkboxes["private"].updateChildrenState(b, c), gj.tree.plugins.checkboxes["private"].updateParentState(b, c));
      }), f.after(h));
    },
    updateParentState: function updateParentState(a, b) {
      var c, d, e, f, g, h;
      c = a.parent("ul").parent("li"), 1 === c.length && (d = a.parent("ul").parent("li").find('> [data-role="wrapper"] > [data-role="checkbox"] input[type="checkbox"]'), e = a.siblings().find('> [data-role="wrapper"] > span[data-role="checkbox"] input[type="checkbox"]'), f = "checked" === b, g = "unchecked" === b, h = "indeterminate", $.each(e, function () {
        var a = $(this).checkbox("state");
        f && "checked" !== a && (f = !1), g && "unchecked" !== a && (g = !1);
      }), f && !g && (h = "checked"), !f && g && (h = "unchecked"), d.checkbox("state", h), gj.tree.plugins.checkboxes["private"].updateParentState(c, d.checkbox("state")));
    },
    updateChildrenState: function updateChildrenState(a, b) {
      var c = a.find('ul li [data-role="wrapper"] [data-role="checkbox"] input[type="checkbox"]');
      c.length > 0 && $.each(c, function () {
        $(this).checkbox("state", b);
      });
    },
    update: function update(a, b, c) {
      var d = b.find('[data-role="checkbox"] input[type="checkbox"]').first();
      $(d).checkbox("state", c), a.data().cascadeCheck && (gj.tree.plugins.checkboxes["private"].updateChildrenState(b, c), gj.tree.plugins.checkboxes["private"].updateParentState(b, c));
    }
  },
  "public": {
    getCheckedNodes: function getCheckedNodes() {
      var a = [],
          b = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(b, function () {
        var b = $(this);
        "checked" === b.checkbox("state") && a.push(b.closest("li").data("id"));
      }), a;
    },
    checkAll: function checkAll() {
      var a = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(a, function () {
        $(this).checkbox("state", "checked");
      }), this;
    },
    uncheckAll: function uncheckAll() {
      var a = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(a, function () {
        $(this).checkbox("state", "unchecked");
      }), this;
    },
    check: function check(a) {
      return gj.tree.plugins.checkboxes["private"].update(this, a, "checked"), this;
    },
    uncheck: function uncheck(a) {
      return gj.tree.plugins.checkboxes["private"].update(this, a, "unchecked"), this;
    }
  },
  events: {
    checkboxChange: function checkboxChange(a, b, c, d) {
      return a.triggerHandler("checkboxChange", [b, c, d]);
    }
  },
  configure: function configure(a) {
    a.data("checkboxes") && gj.checkbox && ($.extend(!0, a, gj.tree.plugins.checkboxes["public"]), a.on("nodeDataBound", function (b, c, d, e) {
      gj.tree.plugins.checkboxes["private"].nodeDataBound(a, c, d, e);
    }), a.on("dataBound", function () {
      gj.tree.plugins.checkboxes["private"].dataBound(a);
    }), a.on("enable", function (a, b) {
      b.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !1);
    }), a.on("disable", function (a, b) {
      b.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !0);
    }));
  }
}, gj.tree.plugins.dragAndDrop = {
  config: {
    base: {
      dragAndDrop: void 0,
      style: {
        dragEl: "gj-tree-drag-el gj-tree-md-drag-el",
        dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
        dropAbove: "gj-tree-drop-above",
        dropBelow: "gj-tree-drop-below"
      }
    },
    bootstrap: {
      style: {
        dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
        dropAsChildIcon: "glyphicon glyphicon-plus",
        dropAbove: "drop-above",
        dropBelow: "drop-below"
      }
    },
    bootstrap4: {
      style: {
        dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
        dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
        dropAbove: "drop-above",
        dropBelow: "drop-below"
      }
    }
  },
  "private": {
    nodeDataBound: function nodeDataBound(a, b) {
      var c = b.children('[data-role="wrapper"]'),
          d = b.find('>[data-role="wrapper"]>[data-role="display"]');
      c.length && d.length && (d.on("mousedown", gj.tree.plugins.dragAndDrop["private"].createNodeMouseDownHandler(a)), d.on("mousemove", gj.tree.plugins.dragAndDrop["private"].createNodeMouseMoveHandler(a, b, d)), d.on("mouseup", gj.tree.plugins.dragAndDrop["private"].createNodeMouseUpHandler(a)));
    },
    createNodeMouseDownHandler: function createNodeMouseDownHandler(a) {
      return function (b) {
        a.data("dragReady", !0);
      };
    },
    createNodeMouseUpHandler: function createNodeMouseUpHandler(a) {
      return function (b) {
        a.data("dragReady", !1);
      };
    },
    createNodeMouseMoveHandler: function createNodeMouseMoveHandler(a, b, c) {
      return function (d) {
        if (a.data("dragReady")) {
          var e,
              f,
              g,
              h,
              i = a.data();
          a.data("dragReady", !1), e = c.clone().wrap('<div data-role="wrapper"/>').closest("div").wrap('<li class="' + i.style.item + '" />').closest("li").wrap('<ul class="' + i.style.list + '" />').closest("ul"), $("body").append(e), e.attr("data-role", "draggable-clone").addClass("gj-unselectable").addClass(i.style.dragEl), e.find('[data-role="wrapper"]').prepend('<span data-role="indicator" />'), e.draggable({
            drag: gj.tree.plugins.dragAndDrop["private"].createDragHandler(a, b, c),
            stop: gj.tree.plugins.dragAndDrop["private"].createDragStopHandler(a, b, c)
          }), f = c.parent(), g = c.offset().top, g -= parseInt(f.css("border-top-width")) + parseInt(f.css("margin-top")) + parseInt(f.css("padding-top")), h = c.offset().left, h -= parseInt(f.css("border-left-width")) + parseInt(f.css("margin-left")) + parseInt(f.css("padding-left")), h -= e.find('[data-role="indicator"]').outerWidth(!0), e.css({
            position: "absolute",
            top: g,
            left: h,
            width: c.outerWidth(!0)
          }), "true" === c.attr("data-droppable") && c.droppable("destroy"), gj.tree.plugins.dragAndDrop["private"].getTargetDisplays(a, b, c).each(function () {
            var a = $(this);
            "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable();
          }), gj.tree.plugins.dragAndDrop["private"].getTargetDisplays(a, b).each(function () {
            var a = $(this);
            "true" === a.attr("data-droppable") && a.droppable("destroy"), a.droppable();
          }), e.trigger("mousedown");
        }
      };
    },
    getTargetDisplays: function getTargetDisplays(a, b, c) {
      return a.find('[data-role="display"]').not(c).not(b.find('[data-role="display"]'));
    },
    getTargetWrappers: function getTargetWrappers(a, b) {
      return a.find('[data-role="wrapper"]').not(b.find('[data-role="wrapper"]'));
    },
    createDragHandler: function createDragHandler(a, b, c) {
      var d = gj.tree.plugins.dragAndDrop["private"].getTargetDisplays(a, b, c),
          e = gj.tree.plugins.dragAndDrop["private"].getTargetWrappers(a, b),
          f = a.data();
      return function (a, b, c) {
        var g = $(this),
            h = !1;
        d.each(function () {
          var a,
              b = $(this);
          if (b.droppable("isOver", c)) return a = g.find('[data-role="indicator"]'), f.style.dropAsChildIcon ? a.addClass(f.style.dropAsChildIcon) : a.text("+"), h = !0, !1;
          g.find('[data-role="indicator"]').removeClass(f.style.dropAsChildIcon).empty();
        }), e.each(function () {
          var a,
              b = $(this);
          !h && b.droppable("isOver", c) ? (a = b.position().top + b.outerHeight() / 2, c.y < a ? b.addClass(f.style.dropAbove).removeClass(f.style.dropBelow) : b.addClass(f.style.dropBelow).removeClass(f.style.dropAbove)) : b.removeClass(f.style.dropAbove).removeClass(f.style.dropBelow);
        });
      };
    },
    createDragStopHandler: function createDragStopHandler(a, b, c) {
      var d = gj.tree.plugins.dragAndDrop["private"].getTargetDisplays(a, b, c),
          e = gj.tree.plugins.dragAndDrop["private"].getTargetWrappers(a, b),
          f = a.data();
      return function (c, g) {
        var h,
            i,
            j,
            k,
            l = !1;
        $(this).draggable("destroy").remove(), d.each(function () {
          var c,
              d = $(this);
          if (d.droppable("isOver", g)) return i = d.closest("li"), j = b.parent("ul").parent("li"), c = i.children("ul"), 0 === c.length && (c = $("<ul />").addClass(f.style.list), i.append(c)), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(a, b.data("id"), i.data("id"), c.children("li").length + 1) && (c.append(b), h = a.getDataById(b.data("id")), gj.tree.methods.removeDataById(a, b.data("id"), f.records), k = a.getDataById(c.parent().data("id")), void 0 === k[f.childrenField] && (k[f.childrenField] = []), k[f.childrenField].push(h), gj.tree.plugins.dragAndDrop["private"].refresh(a, b, i, j)), l = !0, !1;
          d.droppable("destroy");
        }), l || e.each(function () {
          var c,
              d,
              e,
              k = $(this);
          if (k.droppable("isOver", g)) return i = k.closest("li"), j = b.parent("ul").parent("li"), c = g.y < k.position().top + k.outerHeight() / 2, e = b.data("id"), d = i.prevAll('li:not([data-id="' + e + '"])').length + (c ? 1 : 2), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(a, e, i.parent("ul").parent("li").data("id"), d) && (h = a.getDataById(b.data("id")), gj.tree.methods.removeDataById(a, b.data("id"), f.records), a.getDataById(i.parent().data("id"))[f.childrenField].splice(i.index() + (c ? 0 : 1), 0, h), c ? b.insertBefore(i) : b.insertAfter(i), gj.tree.plugins.dragAndDrop["private"].refresh(a, b, i, j)), !1;
          k.droppable("destroy");
        });
      };
    },
    refresh: function refresh(a, b, c, d) {
      var e = a.data();
      gj.tree.plugins.dragAndDrop["private"].refreshNode(a, c), gj.tree.plugins.dragAndDrop["private"].refreshNode(a, d), gj.tree.plugins.dragAndDrop["private"].refreshNode(a, b), b.find('li[data-role="node"]').each(function () {
        gj.tree.plugins.dragAndDrop["private"].refreshNode(a, $(this));
      }), c.children('[data-role="wrapper"]').removeClass(e.style.dropAbove).removeClass(e.style.dropBelow);
    },
    refreshNode: function refreshNode(a, b) {
      var c = b.children('[data-role="wrapper"]'),
          d = c.children('[data-role="expander"]'),
          e = c.children('[data-role="spacer"]'),
          f = b.children("ul"),
          g = a.data(),
          h = b.parentsUntil('[data-type="tree"]', "ul").length;
      f.length && f.children().length ? f.is(":visible") ? d.empty().append(g.icons.collapse) : d.empty().append(g.icons.expand) : d.empty(), c.removeClass(g.style.dropAbove).removeClass(g.style.dropBelow), e.css("width", g.indentation * (h - 1));
    }
  },
  "public": {},
  events: {
    nodeDrop: function nodeDrop(a, b, c, d) {
      return a.triggerHandler("nodeDrop", [b, c, d]);
    }
  },
  configure: function configure(a) {
    $.extend(!0, a, gj.tree.plugins.dragAndDrop["public"]), a.data("dragAndDrop") && gj.draggable && gj.droppable && a.on("nodeDataBound", function (b, c) {
      gj.tree.plugins.dragAndDrop["private"].nodeDataBound(a, c);
    });
  }
}, gj.tree.plugins.lazyLoading = {
  config: {
    base: {
      paramNames: {
        parentId: "parentId"
      },
      lazyLoading: !1
    }
  },
  "private": {
    nodeDataBound: function nodeDataBound(a, b, c, d) {
      var e = a.data(),
          f = b.find('> [data-role="wrapper"] > [data-role="expander"]');
      d.hasChildren && f.empty().append(e.icons.expand);
    },
    createDoneHandler: function createDoneHandler(a, b) {
      return function (c) {
        var d,
            e,
            f,
            g = a.data();

        if ("string" == typeof c && JSON && (c = JSON.parse(c)), c && c.length) {
          for (f = b.children("ul"), 0 === f.length && (f = $("<ul />").addClass(g.style.list), b.append(f)), d = 0; d < c.length; d++) {
            a.addNode(c[d], f);
          }

          e = b.find('>[data-role="wrapper"]>[data-role="expander"]'), e.attr("data-mode", "open"), e.empty().append(g.icons.collapse), gj.tree.events.dataBound(a);
        }
      };
    },
    expand: function expand(a, b, c) {
      var d,
          e = a.data(),
          f = {},
          g = b.find(">ul>li");
      g && g.length || "string" == typeof e.dataSource && (f[e.paramNames.parentId] = c, d = {
        url: e.dataSource,
        data: f
      }, a.xhr && a.xhr.abort(), a.xhr = $.ajax(d).done(gj.tree.plugins.lazyLoading["private"].createDoneHandler(a, b)).fail(a.createErrorHandler()));
    }
  },
  "public": {},
  events: {},
  configure: function configure(a, b, c) {
    c.lazyLoading && (a.on("nodeDataBound", function (b, c, d, e) {
      gj.tree.plugins.lazyLoading["private"].nodeDataBound(a, c, d, e);
    }), a.on("expand", function (b, c, d) {
      gj.tree.plugins.lazyLoading["private"].expand(a, c, d);
    }));
  }
}, gj.checkbox = {
  plugins: {}
}, gj.checkbox.config = {
  base: {
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    style: {
      wrapperCssClass: "gj-checkbox-md",
      spanCssClass: void 0
    }
  },
  bootstrap: {
    style: {
      wrapperCssClass: "gj-checkbox-bootstrap"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapperCssClass: "gj-checkbox-bootstrap gj-checkbox-bootstrap-4"
    },
    iconsLibrary: "materialicons"
  },
  materialicons: {
    style: {
      iconsCssClass: "gj-checkbox-material-icons",
      spanCssClass: "gj-icon"
    }
  },
  glyphicons: {
    style: {
      iconsCssClass: "gj-checkbox-glyphicons",
      spanCssClass: ""
    }
  },
  fontawesome: {
    style: {
      iconsCssClass: "gj-checkbox-fontawesome",
      spanCssClass: "fa"
    }
  }
}, gj.checkbox.methods = {
  init: function init(a) {
    var b = this;
    return gj.widget.prototype.init.call(this, a, "checkbox"), b.attr("data-checkbox", "true"), gj.checkbox.methods.initialize(b), b;
  },
  initialize: function initialize(a) {
    var b,
        c,
        d = a.data();
    d.style.wrapperCssClass && (b = $('<label class="' + d.style.wrapperCssClass + " " + d.style.iconsCssClass + '"></label>'), a.attr("id") && b.attr("for", a.attr("id")), a.wrap(b), c = $("<span />"), d.style.spanCssClass && c.addClass(d.style.spanCssClass), a.parent().append(c));
  },
  state: function state(a, b) {
    return b ? ("checked" === b ? (a.prop("indeterminate", !1), a.prop("checked", !0)) : "unchecked" === b ? (a.prop("indeterminate", !1), a.prop("checked", !1)) : "indeterminate" === b && (a.prop("checked", !0), a.prop("indeterminate", !0)), gj.checkbox.events.change(a, b), a) : b = a.prop("indeterminate") ? "indeterminate" : a.prop("checked") ? "checked" : "unchecked";
  },
  toggle: function toggle(a) {
    return "checked" == a.state() ? a.state("unchecked") : a.state("checked"), a;
  },
  destroy: function destroy(a) {
    return "true" === a.attr("data-checkbox") && (a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-checkbox"), a.off(), a.next("span").remove(), a.unwrap()), a;
  }
}, gj.checkbox.events = {
  change: function change(a, b) {
    return a.triggerHandler("change", [b]);
  }
}, gj.checkbox.widget = function (a, b) {
  var c = this,
      d = gj.checkbox.methods;
  return c.toggle = function () {
    return d.toggle(this);
  }, c.state = function (a) {
    return d.state(this, a);
  }, c.destroy = function () {
    return d.destroy(this);
  }, $.extend(a, c), "true" !== a.attr("data-checkbox") && d.init.call(a, b), a;
}, gj.checkbox.widget.prototype = new gj.widget(), gj.checkbox.widget.constructor = gj.checkbox.widget, function (a) {
  a.fn.checkbox = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.checkbox.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.checkbox.widget(this, a);
    }
  };
}(jQuery), gj.editor = {
  plugins: {},
  messages: {}
}, gj.editor.config = {
  base: {
    height: 300,
    width: void 0,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    locale: "en-us",
    buttons: void 0,
    style: {
      wrapper: "gj-editor gj-editor-md",
      buttonsGroup: "gj-button-md-group",
      button: "gj-button-md",
      buttonActive: "active"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-editor gj-editor-bootstrap",
      buttonsGroup: "btn-group",
      button: "btn btn-default gj-cursor-pointer",
      buttonActive: "active"
    }
  },
  bootstrap4: {
    style: {
      wrapper: "gj-editor gj-editor-bootstrap",
      buttonsGroup: "btn-group",
      button: "btn btn-outline-secondary gj-cursor-pointer",
      buttonActive: "active"
    }
  },
  materialicons: {
    icons: {
      bold: '<i class="gj-icon bold" />',
      italic: '<i class="gj-icon italic" />',
      strikethrough: '<i class="gj-icon strikethrough" />',
      underline: '<i class="gj-icon underlined" />',
      listBulleted: '<i class="gj-icon list-bulleted" />',
      listNumbered: '<i class="gj-icon list-numbered" />',
      indentDecrease: '<i class="gj-icon indent-decrease" />',
      indentIncrease: '<i class="gj-icon indent-increase" />',
      alignLeft: '<i class="gj-icon align-left" />',
      alignCenter: '<i class="gj-icon align-center" />',
      alignRight: '<i class="gj-icon align-right" />',
      alignJustify: '<i class="gj-icon align-justify" />',
      undo: '<i class="gj-icon undo" />',
      redo: '<i class="gj-icon redo" />'
    }
  },
  fontawesome: {
    icons: {
      bold: '<i class="fa fa-bold" aria-hidden="true"></i>',
      italic: '<i class="fa fa-italic" aria-hidden="true"></i>',
      strikethrough: '<i class="fa fa-strikethrough" aria-hidden="true"></i>',
      underline: '<i class="fa fa-underline" aria-hidden="true"></i>',
      listBulleted: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
      listNumbered: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
      indentDecrease: '<i class="fa fa-indent" aria-hidden="true"></i>',
      indentIncrease: '<i class="fa fa-outdent" aria-hidden="true"></i>',
      alignLeft: '<i class="fa fa-align-left" aria-hidden="true"></i>',
      alignCenter: '<i class="fa fa-align-center" aria-hidden="true"></i>',
      alignRight: '<i class="fa fa-align-right" aria-hidden="true"></i>',
      alignJustify: '<i class="fa fa-align-justify" aria-hidden="true"></i>',
      undo: '<i class="fa fa-undo" aria-hidden="true"></i>',
      redo: '<i class="fa fa-repeat" aria-hidden="true"></i>'
    }
  }
}, gj.editor.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "editor"), this.attr("data-editor", "true"), gj.editor.methods.initialize(this), this;
  },
  initialize: function initialize(a) {
    var b,
        c,
        d,
        e,
        f,
        g = this,
        h = a.data();

    if (a.hide(), "wrapper" !== a[0].parentElement.attributes.role && (d = document.createElement("div"), d.setAttribute("role", "wrapper"), a[0].parentNode.insertBefore(d, a[0]), d.appendChild(a[0])), gj.editor.methods.localization(h), $(d).addClass(h.style.wrapper), h.width && $(d).width(h.width), e = $(d).children('div[role="body"]'), 0 === e.length && (e = $('<div role="body"></div>'), $(d).append(e), a[0].innerText && (e[0].innerHTML = a[0].innerText)), e.attr("contenteditable", !0), e.on("keydown", function (b) {
      var c = event.keyCode || event.charCode;
      !1 === gj.editor.events.changing(a) && 8 !== c && 46 !== c && b.preventDefault();
    }), e.on("mouseup keyup mouseout cut paste", function (b) {
      g.updateToolbar(a, f), gj.editor.events.changed(a), a.html(e.html());
    }), f = $(d).children('div[role="toolbar"]'), 0 === f.length) {
      f = $('<div role="toolbar"></div>'), e.before(f);

      for (var i in h.buttons) {
        b = $("<div />").addClass(h.style.buttonsGroup);

        for (var j in h.buttons[i]) {
          c = $(h.buttons[i][j]), c.on("click", function () {
            gj.editor.methods.executeCmd(a, e, f, $(this));
          }), b.append(c);
        }

        f.append(b);
      }
    }

    e.height(h.height - gj.core.height(f[0], !0));
  },
  localization: function localization(a) {
    var b = gj.editor.messages[a.locale];
    void 0 === a.buttons && (a.buttons = [['<button type="button" class="' + a.style.button + '" title="' + b.bold + '" role="bold">' + a.icons.bold + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.italic + '" role="italic">' + a.icons.italic + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.strikethrough + '" role="strikethrough">' + a.icons.strikethrough + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.underline + '" role="underline">' + a.icons.underline + "</button>"], ['<button type="button" class="' + a.style.button + '" title="' + b.listBulleted + '" role="insertunorderedlist">' + a.icons.listBulleted + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.listNumbered + '" role="insertorderedlist">' + a.icons.listNumbered + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.indentDecrease + '" role="outdent">' + a.icons.indentDecrease + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.indentIncrease + '" role="indent">' + a.icons.indentIncrease + "</button>"], ['<button type="button" class="' + a.style.button + '" title="' + b.alignLeft + '" role="justifyleft">' + a.icons.alignLeft + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignCenter + '" role="justifycenter">' + a.icons.alignCenter + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignRight + '" role="justifyright">' + a.icons.alignRight + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.alignJustify + '" role="justifyfull">' + a.icons.alignJustify + "</button>"], ['<button type="button" class="' + a.style.button + '" title="' + b.undo + '" role="undo">' + a.icons.undo + "</button>", '<button type="button" class="' + a.style.button + '" title="' + b.redo + '" role="redo">' + a.icons.redo + "</button>"]]);
  },
  updateToolbar: function updateToolbar(a, b) {
    var c = a.data();
    $buttons = b.find("[role]").each(function () {
      var a = $(this),
          b = a.attr("role");
      b && document.queryCommandEnabled(b) && "true" === document.queryCommandValue(b) ? a.addClass(c.style.buttonActive) : a.removeClass(c.style.buttonActive);
    });
  },
  executeCmd: function executeCmd(a, b, c, d) {
    b.focus(), document.execCommand(d.attr("role"), !1), gj.editor.methods.updateToolbar(a, c);
  },
  content: function content(a, b) {
    var c = a.parent().children('div[role="body"]');
    return void 0 === b ? c.html() : c.html(b);
  },
  destroy: function destroy(a) {
    var b;
    return "true" === a.attr("data-editor") && (b = a.parent(), b.children('div[role="body"]').remove(), b.children('div[role="toolbar"]').remove(), a.unwrap(), a.removeData(), a.removeAttr("data-guid"), a.removeAttr("data-editor"), a.off(), a.show()), a;
  }
}, gj.editor.events = {
  changing: function changing(a) {
    return a.triggerHandler("changing");
  },
  changed: function changed(a) {
    return a.triggerHandler("changed");
  }
}, gj.editor.widget = function (a, b) {
  var c = this,
      d = gj.editor.methods;
  return c.content = function (a) {
    return d.content(this, a);
  }, c.destroy = function () {
    return d.destroy(this);
  }, $.extend(a, c), "true" !== a.attr("data-editor") && d.init.call(a, b), a;
}, gj.editor.widget.prototype = new gj.widget(), gj.editor.widget.constructor = gj.editor.widget, function (a) {
  a.fn.editor = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.editor.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.editor.widget(this, a);
    }
  };
}(jQuery), gj.editor.messages["en-us"] = {
  bold: "Bold",
  italic: "Italic",
  strikethrough: "Strikethrough",
  underline: "Underline",
  listBulleted: "List Bulleted",
  listNumbered: "List Numbered",
  indentDecrease: "Indent Decrease",
  indentIncrease: "Indent Increase",
  alignLeft: "Align Left",
  alignCenter: "Align Center",
  alignRight: "Align Right",
  alignJustify: "Align Justify",
  undo: "Undo",
  redo: "Redo"
}, gj.dropdown = {
  plugins: {}
}, gj.dropdown.config = {
  base: {
    dataSource: void 0,
    textField: "text",
    valueField: "value",
    selectedField: "selected",
    width: void 0,
    maxHeight: "auto",
    placeholder: void 0,
    fontSize: void 0,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    icons: {
      dropdown: '<i class="gj-icon arrow-dropdown" />',
      dropup: '<i class="gj-icon arrow-dropup" />'
    },
    style: {
      wrapper: "gj-dropdown gj-dropdown-md gj-unselectable",
      list: "gj-list gj-list-md gj-dropdown-list-md",
      active: "gj-list-md-active"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-3 gj-unselectable",
      presenter: "btn btn-default",
      list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
      item: "list-group-item",
      active: "active"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-4 gj-unselectable",
      presenter: "btn btn-outline-secondary",
      list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
      item: "list-group-item",
      active: "active"
    }
  },
  materialicons: {
    style: {
      expander: "gj-dropdown-expander-mi"
    }
  },
  fontawesome: {
    icons: {
      dropdown: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
      dropup: '<i class="fa fa-caret-up" aria-hidden="true"></i>'
    },
    style: {
      expander: "gj-dropdown-expander-fa"
    }
  },
  glyphicons: {
    icons: {
      dropdown: '<span class="caret"></span>',
      dropup: '<span class="dropup"><span class="caret" ></span></span>'
    },
    style: {
      expander: "gj-dropdown-expander-glyphicons"
    }
  }
}, gj.dropdown.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "dropdown"), this.attr("data-dropdown", "true"), gj.dropdown.methods.initialize(this), this;
  },
  getHTMLConfig: function getHTMLConfig() {
    var a = gj.widget.prototype.getHTMLConfig.call(this),
        b = this[0].attributes;
    return b.placeholder && (a.placeholder = b.placeholder.value), a;
  },
  initialize: function initialize(a) {
    var b = a.data(),
        c = a.parent('div[role="wrapper"]'),
        d = $('<span role="display"></span>'),
        e = $('<span role="expander">' + b.icons.dropdown + "</span>").addClass(b.style.expander),
        f = $('<button role="presenter" type="button"></button>').addClass(b.style.presenter),
        g = $('<ul role="list" class="' + b.style.list + '"></ul>').attr("guid", a.attr("data-guid"));
    0 === c.length ? (c = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(c)) : c.addClass(b.style.wrapper), b.fontSize && f.css("font-size", b.fontSize), f.on("click", function (b) {
      g.is(":visible") ? gj.dropdown.methods.close(a, g) : gj.dropdown.methods.open(a, g);
    }), f.on("blur", function (b) {
      setTimeout(function () {
        gj.dropdown.methods.close(a, g);
      }, 500);
    }), f.append(d).append(e), a.hide(), a.after(f), $("body").append(g), g.hide(), a.reload();
  },
  setListPosition: function setListPosition(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.getBoundingClientRect(),
        i = window.scrollY || window.pageYOffset || 0;
    window.scrollX || window.pageXOffset;
    b.style.overflow = "", b.style.overflowX = "", b.style.height = "", gj.core.setChildPosition(a, b), d = gj.core.height(b, !0), g = b.getBoundingClientRect(), e = gj.core.height(a, !0), "auto" === c.maxHeight ? h.top < g.top ? h.top + d + e > window.innerHeight && (f = window.innerHeight - h.top - e - 3) : h.top - d - 3 > 0 ? b.style.top = Math.round(h.top + i - d - 3) + "px" : (b.style.top = i + "px", f = h.top - 3) : !isNaN(c.maxHeight) && c.maxHeight < d && (f = c.maxHeight), f && (b.style.overflow = "scroll", b.style.overflowX = "hidden", b.style.height = f + "px");
  },
  useHtmlDataSource: function useHtmlDataSource(a, b) {
    var c,
        d,
        e = [],
        f = a.find("option");

    for (c = 0; c < f.length; c++) {
      d = {}, d[b.valueField] = f[c].value, d[b.textField] = f[c].innerHTML, d[b.selectedField] = a[0].value === f[c].value, e.push(d);
    }

    b.dataSource = e;
  },
  filter: function filter(a) {
    var b,
        c,
        d = a.data();

    if (d.dataSource) {
      if ("string" == typeof d.dataSource[0]) for (b = 0; b < d.dataSource.length; b++) {
        c = {}, c[d.valueField] = d.dataSource[b], c[d.textField] = d.dataSource[b], d.dataSource[b] = c;
      }
    } else d.dataSource = [];

    return d.dataSource;
  },
  render: function render(a, b) {
    var c = [],
        d = a.data(),
        e = a.parent(),
        f = $("body").children('[role="list"][guid="' + a.attr("data-guid") + '"]'),
        g = e.children('[role="presenter"]'),
        h = (g.children('[role="expander"]'), g.children('[role="display"]'));
    if (a.data("records", b), a.empty(), f.empty(), b && b.length) if ($.each(b, function () {
      var b,
          e = this[d.valueField],
          g = this[d.textField],
          h = this[d.selectedField] && "true" === this[d.selectedField].toString().toLowerCase();
      b = $('<li value="' + e + '"><div data-role="wrapper"><span data-role="display">' + g + "</span></div></li>"), b.addClass(d.style.item), b.on("click", function (b) {
        gj.dropdown.methods.select(a, e);
      }), f.append(b), a.append('<option value="' + e + '">' + g + "</option>"), h && c.push(e);
    }), 0 === c.length) a.prepend('<option value=""></option>'), a[0].selectedIndex = 0, d.placeholder && (h[0].innerHTML = '<span class="placeholder">' + d.placeholder + "</span>");else for (i = 0; i < c.length; i++) {
      gj.dropdown.methods.select(a, c[i]);
    }
    return d.width && (e.css("width", d.width), g.css("width", d.width)), d.fontSize && f.children("li").css("font-size", d.fontSize), gj.dropdown.events.dataBound(a), a;
  },
  open: function open(a, b) {
    var c = a.data(),
        d = a.parent().find('[role="expander"]'),
        e = a.parent().find('[role="presenter"]'),
        f = gj.core.getScrollParent(a[0]);
    b.css("width", gj.core.width(e[0])), b.show(), gj.dropdown.methods.setListPosition(e[0], b[0], c), d.html(c.icons.dropup), f && (c.parentScrollHandler = function () {
      gj.dropdown.methods.setListPosition(e[0], b[0], c);
    }, gj.dropdown.methods.addParentsScrollListener(f, c.parentScrollHandler));
  },
  close: function close(a, b) {
    var c = a.data(),
        d = a.parent().find('[role="expander"]'),
        e = gj.core.getScrollParent(a[0]);
    d.html(c.icons.dropdown), e && c.parentScrollHandler && gj.dropdown.methods.removeParentsScrollListener(e, c.parentScrollHandler), b.hide();
  },
  addParentsScrollListener: function addParentsScrollListener(a, b) {
    var c = gj.core.getScrollParent(a.parentNode);
    a.addEventListener("scroll", b), c && gj.dropdown.methods.addParentsScrollListener(c, b);
  },
  removeParentsScrollListener: function removeParentsScrollListener(a, b) {
    var c = gj.core.getScrollParent(a.parentNode);
    a.removeEventListener("scroll", b), c && gj.dropdown.methods.removeParentsScrollListener(c, b);
  },
  select: function select(a, b) {
    var c = a.data(),
        d = $("body").children('[role="list"][guid="' + a.attr("data-guid") + '"]'),
        e = d.children('li[value="' + b + '"]'),
        f = a.next('[role="presenter"]').find('[role="display"]'),
        g = gj.dropdown.methods.getRecordByValue(a, b);
    return d.children("li").removeClass(c.style.active), g ? (e.addClass(c.style.active), a[0].value = b, f[0].innerHTML = g[c.textField]) : (c.placeholder && (f[0].innerHTML = '<span class="placeholder">' + c.placeholder + "</span>"), a[0].value = ""), gj.dropdown.events.change(a), gj.dropdown.methods.close(a, d), a;
  },
  getRecordByValue: function getRecordByValue(a, b) {
    var c,
        d = a.data(),
        e = void 0;

    for (c = 0; c < d.records.length; c++) {
      if (d.records[c][d.valueField] === b) {
        e = d.records[c];
        break;
      }
    }

    return e;
  },
  value: function value(a, b) {
    return void 0 === b ? a.val() : (gj.dropdown.methods.select(a, b), a);
  },
  destroy: function destroy(a) {
    var b = a.data(),
        c = a.parent('div[role="wrapper"]');
    return b && (a.xhr && a.xhr.abort(), a.off(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-dropdown"), a.removeClass(), c.length > 0 && (c.children('[role="presenter"]').remove(), c.children('[role="list"]').remove(), a.unwrap()), a.show()), a;
  }
}, gj.dropdown.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  },
  dataBound: function dataBound(a) {
    return a.triggerHandler("dataBound");
  }
}, gj.dropdown.widget = function (a, b) {
  var c = this,
      d = gj.dropdown.methods;
  return c.value = function (a) {
    return d.value(this, a);
  }, c.enable = function () {
    return d.enable(this);
  }, c.disable = function () {
    return d.disable(this);
  }, c.destroy = function () {
    return d.destroy(this);
  }, $.extend(a, c), "true" !== a.attr("data-dropdown") && d.init.call(a, b), a;
}, gj.dropdown.widget.prototype = new gj.widget(), gj.dropdown.widget.constructor = gj.dropdown.widget, gj.dropdown.widget.prototype.getHTMLConfig = gj.dropdown.methods.getHTMLConfig, function (a) {
  a.fn.dropdown = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.dropdown.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.dropdown.widget(this, a);
    }
  };
}(jQuery), gj.datepicker = {
  plugins: {}
}, gj.datepicker.config = {
  base: {
    showOtherMonths: !1,
    selectOtherMonths: !0,
    width: void 0,
    minDate: void 0,
    maxDate: void 0,
    format: "mm/dd/yyyy",
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    value: void 0,
    weekStartDay: 0,
    disableDates: void 0,
    disableDaysOfWeek: void 0,
    calendarWeeks: !1,
    keyboardNavigation: !0,
    locale: "en-us",
    icons: {
      rightIcon: '<i class="gj-icon">event</i>',
      previousMonth: '<i class="gj-icon chevron-left"></i>',
      nextMonth: '<i class="gj-icon chevron-right"></i>'
    },
    fontSize: void 0,
    size: "default",
    modal: !1,
    header: !1,
    footer: !1,
    showOnFocus: !0,
    showRightIcon: !0,
    style: {
      modal: "gj-modal",
      wrapper: "gj-datepicker gj-datepicker-md gj-unselectable",
      input: "gj-textbox-md",
      calendar: "gj-picker gj-picker-md datepicker gj-unselectable",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      calendar: "gj-picker gj-picker-bootstrap datepicker gj-unselectable",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    iconsLibrary: "glyphicons",
    showOtherMonths: !0
  },
  bootstrap4: {
    style: {
      wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      calendar: "gj-picker gj-picker-bootstrap datepicker gj-unselectable",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    showOtherMonths: !0
  },
  fontawesome: {
    icons: {
      rightIcon: '<i class="fa fa-calendar" aria-hidden="true"></i>',
      previousMonth: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      nextMonth: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    icons: {
      rightIcon: '<span class="glyphicon glyphicon-calendar"></span>',
      previousMonth: '<span class="glyphicon glyphicon-chevron-left"></span>',
      nextMonth: '<span class="glyphicon glyphicon-chevron-right"></span>'
    }
  }
}, gj.datepicker.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "datepicker"), this.attr("data-datepicker", "true"), gj.datepicker.methods.initialize(this, this.data()), this;
  },
  initialize: function initialize(a, b) {
    var c,
        d,
        e = a.parent('div[role="wrapper"]');
    0 === e.length ? (e = $('<div role="wrapper" />').addClass(b.style.wrapper), a.wrap(e)) : e.addClass(b.style.wrapper), e = a.parent('div[role="wrapper"]'), b.width && e.css("width", b.width), a.val(b.value).addClass(b.style.input).attr("role", "input"), b.fontSize && a.css("font-size", b.fontSize), "bootstrap" === b.uiLibrary || "bootstrap4" === b.uiLibrary ? "small" === b.size ? (e.addClass("input-group-sm"), a.addClass("form-control-sm")) : "large" === b.size && (e.addClass("input-group-lg"), a.addClass("form-control-lg")) : "small" === b.size ? e.addClass("small") : "large" === b.size && e.addClass("large"), b.showRightIcon && (d = "bootstrap" === b.uiLibrary ? $('<span class="input-group-addon">' + b.icons.rightIcon + "</span>") : "bootstrap4" === b.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">' + b.icons.rightIcon + "</button></span>") : $(b.icons.rightIcon), d.attr("role", "right-icon"), d.on("click", function (c) {
      $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]').is(":visible") ? gj.datepicker.methods.close(a) : gj.datepicker.methods.open(a, b);
    }), e.append(d)), b.showOnFocus && a.on("focus", function () {
      gj.datepicker.methods.open(a, b);
    }), c = gj.datepicker.methods.createCalendar(a, b), !0 !== b.footer && (a.on("blur", function () {
      a.timeout = setTimeout(function () {
        gj.datepicker.methods.close(a);
      }, 500);
    }), c.mousedown(function () {
      return clearTimeout(a.timeout), document.activeElement !== a[0] && a.focus(), !1;
    }), c.on("click", function () {
      clearTimeout(a.timeout), document.activeElement !== a[0] && a.focus();
    })), b.keyboardNavigation && $(document).on("keydown", gj.datepicker.methods.createKeyDownHandler(a, c, b));
  },
  createCalendar: function createCalendar(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = $('<div role="calendar" type="month"/>').addClass(b.style.calendar).attr("guid", a.attr("data-guid"));
    return b.fontSize && h.css("font-size", b.fontSize), c = gj.core.parseDate(b.value, b.format, b.locale), !c || isNaN(c.getTime()) ? c = new Date() : a.attr("day", c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate()), h.attr("month", c.getMonth()), h.attr("year", c.getFullYear()), gj.datepicker.methods.renderHeader(a, h, b, c), d = $('<div role="body" />'), h.append(d), b.footer && (e = $('<div role="footer" class="' + b.style.footer + '" />'), f = $('<button class="' + b.style.button + '">' + gj.core.messages[b.locale].cancel + "</button>"), f.on("click", function () {
      a.close();
    }), e.append(f), g = $('<button class="' + b.style.button + '">' + gj.core.messages[b.locale].ok + "</button>"), g.on("click", function () {
      var c,
          d,
          e = h.attr("selectedDay");
      e ? (d = e.split("-"), c = new Date(d[0], d[1], d[2], h.attr("hour") || 0, h.attr("minute") || 0), gj.datepicker.methods.change(a, h, b, c)) : a.close();
    }), e.append(g), h.append(e)), h.hide(), $("body").append(h), b.modal && (h.wrapAll('<div role="modal" class="' + b.style.modal + '"/>'), gj.core.center(h)), h;
  },
  renderHeader: function renderHeader(a, b, c, d) {
    var e, f, g;
    c.header && (e = $('<div role="header" />'), g = $('<div role="year" />').on("click", function () {
      gj.datepicker.methods.renderDecade(a, b, c), g.addClass("selected"), f.removeClass("selected");
    }), g.html(gj.core.formatDate(d, "yyyy", c.locale)), e.append(g), f = $('<div role="date" class="selected" />').on("click", function () {
      gj.datepicker.methods.renderMonth(a, b, c), f.addClass("selected"), g.removeClass("selected");
    }), f.html(gj.core.formatDate(d, "ddd, mmm dd", c.locale)), e.append(f), b.append(e));
  },
  updateHeader: function updateHeader(a, b, c) {
    a.find('[role="header"] [role="year"]').removeClass("selected").html(gj.core.formatDate(c, "yyyy", b.locale)), a.find('[role="header"] [role="date"]').addClass("selected").html(gj.core.formatDate(c, "ddd, mmm dd", b.locale)), a.find('[role="header"] [role="hour"]').removeClass("selected").html(gj.core.formatDate(c, "HH", b.locale)), a.find('[role="header"] [role="minute"]').removeClass("selected").html(gj.core.formatDate(c, "MM", b.locale));
  },
  createNavigation: function createNavigation(a, b, c, d) {
    var e,
        f,
        g = $("<thead/>");

    for (f = $('<div role="navigator" />'), f.append($("<div>" + d.icons.previousMonth + "</div>").on("click", gj.datepicker.methods.prev(a, d))), f.append($('<div role="period"></div>').on("click", gj.datepicker.methods.changePeriod(a, d))), f.append($("<div>" + d.icons.nextMonth + "</div>").on("click", gj.datepicker.methods.next(a, d))), b.append(f), e = $('<tr role="week-days" />'), d.calendarWeeks && e.append("<th><div>&nbsp;</div></th>"), i = d.weekStartDay; i < gj.core.messages[d.locale].weekDaysMin.length; i++) {
      e.append("<th><div>" + gj.core.messages[d.locale].weekDaysMin[i] + "</div></th>");
    }

    for (i = 0; i < d.weekStartDay; i++) {
      e.append("<th><div>" + gj.core.messages[d.locale].weekDaysMin[i] + "</div></th>");
    }

    g.append(e), c.append(g);
  },
  renderMonth: function renderMonth(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = b.children('[role="body"]'),
        t = $("<table/>"),
        u = $("<tbody/>"),
        v = gj.core.messages[c.locale].titleFormat;

    for (s.off().empty(), gj.datepicker.methods.createNavigation(a, s, t, c), g = parseInt(b.attr("month"), 10), h = parseInt(b.attr("year"), 10), b.attr("type", "month"), v = v.replace("mmmm", gj.core.messages[c.locale].monthNames[g]).replace("yyyy", h), b.find('div[role="period"]').text(v), i = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), h % 4 == 0 && 1900 != h && (i[1] = 29), j = i[g], k = (new Date(h, g, 1).getDay() + 7 - c.weekStartDay) % 7, d = 0, $row = $("<tr />"), n = gj.datepicker.methods.getPrevMonth(g, h), l = 1; l <= k; l++) {
      f = i[n.month] - k + l, r = new Date(n.year, n.month, f), c.calendarWeeks && 1 === l && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(r) + "</div></td>"), p = $('<td class="other-month" />'), c.showOtherMonths && (q = $("<div>" + f + "</div>"), p.append(q), c.selectOtherMonths && gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer").attr("day", f).attr("month", n.month).attr("year", n.year), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
        a.stopPropagation();
      })) : p.addClass("disabled")), $row.append(p), d++;
    }

    for (l > 1 && u.append($row), m = new Date(), l = 1; l <= j; l++) {
      r = new Date(h, g, l), 0 == d && ($row = $("<tr>"), c.calendarWeeks && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(r) + "</div></td>")), p = $('<td day="' + l + '" month="' + g + '" year="' + h + '" />'), h === m.getFullYear() && g === m.getMonth() && l === m.getDate() ? p.addClass("today") : p.addClass("current-month"), q = $("<div>" + l + "</div>"), gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer"), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
        a.stopPropagation();
      })) : p.addClass("disabled"), p.append(q), $row.append(p), 7 == ++d && (u.append($row), d = 0);
    }

    for (o = gj.datepicker.methods.getNextMonth(g, h), l = 1; 0 != d; l++) {
      r = new Date(o.year, o.month, l), p = $('<td class="other-month" />'), c.showOtherMonths && (q = $("<div>" + l + "</div>"), c.selectOtherMonths && gj.datepicker.methods.isSelectable(c, r) ? (p.addClass("gj-cursor-pointer").attr("day", l).attr("month", o.month).attr("year", o.year), q.on("click", gj.datepicker.methods.dayClickHandler(a, b, c, r)), q.on("mousedown", function (a) {
        a.stopPropagation();
      })) : p.addClass("disabled"), p.append(q)), $row.append(p), 7 == ++d && (u.append($row), d = 0);
    }

    t.append(u), s.append(t), b.attr("selectedDay") && (e = b.attr("selectedDay").split("-"), r = new Date(e[0], e[1], e[2], b.attr("hour") || 0, b.attr("minute") || 0), b.find('tbody td[day="' + e[2] + '"][month="' + e[1] + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(b, c, r));
  },
  renderYear: function renderYear(a, b, c) {
    var d,
        e,
        f,
        g,
        h = b.find('>[role="body"]>table'),
        i = h.children("tbody");

    for (h.children("thead").hide(), d = parseInt(b.attr("year"), 10), b.attr("type", "year"), b.find('div[role="period"]').text(d), i.empty(), e = 0; e < 3; e++) {
      for ($row = $("<tr />"), f = 4 * e; f <= 4 * e + 3; f++) {
        g = $("<div>" + gj.core.messages[c.locale].monthShortNames[f] + "</div>"), g.on("click", gj.datepicker.methods.selectMonth(a, b, c, f)), $cell = $("<td></td>").append(g), $row.append($cell);
      }

      i.append($row);
    }
  },
  renderDecade: function renderDecade(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i = b.find('>[role="body"]>table'),
        j = i.children("tbody");

    for (i.children("thead").hide(), d = parseInt(b.attr("year"), 10), e = d - d % 10, b.attr("type", "decade"), b.find('div[role="period"]').text(e + " - " + (e + 9)), j.empty(), f = e - 1; f <= e + 10; f += 4) {
      for ($row = $("<tr />"), g = f; g <= f + 3; g++) {
        h = $("<div>" + g + "</div>"), h.on("click", gj.datepicker.methods.selectYear(a, b, c, g)), $cell = $("<td></td>").append(h), $row.append($cell);
      }

      j.append($row);
    }
  },
  renderCentury: function renderCentury(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i = b.find('>[role="body"]>table'),
        j = i.children("tbody");

    for (i.children("thead").hide(), d = parseInt(b.attr("year"), 10), e = d - d % 100, b.attr("type", "century"), b.find('div[role="period"]').text(e + " - " + (e + 99)), j.empty(), f = e - 10; f < e + 100; f += 40) {
      for ($row = $("<tr />"), g = f; g <= f + 30; g += 10) {
        h = $("<div>" + g + "</div>"), h.on("click", gj.datepicker.methods.selectDecade(a, b, c, g)), $cell = $("<td></td>").append(h), $row.append($cell);
      }

      j.append($row);
    }
  },
  getWeekNumber: function getWeekNumber(a) {
    var b = new Date(a.valueOf());
    b.setDate(b.getDate() + 6), b = new Date(Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())), b.setUTCDate(b.getUTCDate() + 4 - (b.getUTCDay() || 7));
    var c = new Date(Date.UTC(b.getUTCFullYear(), 0, 1));
    return Math.ceil(((b - c) / 864e5 + 1) / 7);
  },
  getMinDate: function getMinDate(a) {
    var b;
    return a.minDate && ("string" == typeof a.minDate ? b = gj.core.parseDate(a.minDate, a.format, a.locale) : "function" == typeof a.minDate ? "string" == typeof (b = a.minDate()) && (b = gj.core.parseDate(b, a.format, a.locale)) : "function" == typeof a.minDate.getMonth && (b = a.minDate)), b;
  },
  getMaxDate: function getMaxDate(a) {
    var b;
    return a.maxDate && ("string" == typeof a.maxDate ? b = gj.core.parseDate(a.maxDate, a.format, a.locale) : "function" == typeof a.maxDate ? "string" == typeof (b = a.maxDate()) && (b = gj.core.parseDate(b, a.format, a.locale)) : "function" == typeof a.maxDate.getMonth && (b = a.maxDate)), b;
  },
  isSelectable: function isSelectable(a, b) {
    var c,
        d = !0,
        e = gj.datepicker.methods.getMinDate(a),
        f = gj.datepicker.methods.getMaxDate(a);

    if (e && b < e ? d = !1 : f && b > f && (d = !1), d) {
      if (a.disableDates) if ($.isArray(a.disableDates)) for (c = 0; c < a.disableDates.length; c++) {
        a.disableDates[c] instanceof Date && a.disableDates[c].getTime() === b.getTime() ? d = !1 : "string" == typeof a.disableDates[c] && gj.core.parseDate(a.disableDates[c], a.format, a.locale).getTime() === b.getTime() && (d = !1);
      } else a.disableDates instanceof Function && (d = a.disableDates(b));
      $.isArray(a.disableDaysOfWeek) && a.disableDaysOfWeek.indexOf(b.getDay()) > -1 && (d = !1);
    }

    return d;
  },
  getPrevMonth: function getPrevMonth(a, b) {
    return date = new Date(b, a, 1), date.setMonth(date.getMonth() - 1), {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  },
  getNextMonth: function getNextMonth(a, b) {
    return date = new Date(b, a, 1), date.setMonth(date.getMonth() + 1), {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  },
  prev: function prev(a, b) {
    return function () {
      var c,
          d,
          e,
          f,
          g,
          h = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');

      switch (e = parseInt(h.attr("year"), 10), h.attr("type")) {
        case "month":
          d = parseInt(h.attr("month"), 10), c = gj.datepicker.methods.getPrevMonth(d, e), h.attr("month", c.month), h.attr("year", c.year), gj.datepicker.methods.renderMonth(a, h, b);
          break;

        case "year":
          h.attr("year", e - 1), gj.datepicker.methods.renderYear(a, h, b);
          break;

        case "decade":
          f = e - e % 10, h.attr("year", f - 10), gj.datepicker.methods.renderDecade(a, h, b);
          break;

        case "century":
          g = e - e % 100, h.attr("year", g - 100), gj.datepicker.methods.renderCentury(a, h, b);
      }
    };
  },
  next: function next(a, b) {
    return function () {
      var c,
          d,
          e,
          f,
          g,
          h = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');

      switch (e = parseInt(h.attr("year"), 10), h.attr("type")) {
        case "month":
          d = parseInt(h.attr("month"), 10), c = gj.datepicker.methods.getNextMonth(d, e), h.attr("month", c.month), h.attr("year", c.year), gj.datepicker.methods.renderMonth(a, h, b);
          break;

        case "year":
          h.attr("year", e + 1), gj.datepicker.methods.renderYear(a, h, b);
          break;

        case "decade":
          f = e - e % 10, h.attr("year", f + 10), gj.datepicker.methods.renderDecade(a, h, b);
          break;

        case "century":
          g = e - e % 100, h.attr("year", g + 100), gj.datepicker.methods.renderCentury(a, h, b);
      }
    };
  },
  changePeriod: function changePeriod(a, b) {
    return function (c) {
      var d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');

      switch (d.attr("type")) {
        case "month":
          gj.datepicker.methods.renderYear(a, d, b);
          break;

        case "year":
          gj.datepicker.methods.renderDecade(a, d, b);
          break;

        case "decade":
          gj.datepicker.methods.renderCentury(a, d, b);
      }
    };
  },
  dayClickHandler: function dayClickHandler(a, b, c, d) {
    return function (e) {
      return e && e.stopPropagation(), gj.datepicker.methods.selectDay(a, b, c, d), !0 !== c.footer && !1 !== c.autoClose && gj.datepicker.methods.change(a, b, c, d), a;
    };
  },
  change: function change(a, b, c, d) {
    var e = (d.getDate(), d.getMonth()),
        f = d.getFullYear(),
        g = gj.core.formatDate(d, c.format, c.locale);
    b.attr("month", e), b.attr("year", f), a.val(g), gj.datepicker.events.change(a), "none" !== window.getComputedStyle(b[0]).display && gj.datepicker.methods.close(a);
  },
  selectDay: function selectDay(a, b, c, d) {
    var e = d.getDate(),
        f = d.getMonth(),
        g = d.getFullYear();
    b.attr("selectedDay", g + "-" + f + "-" + e), b.find("tbody td").removeClass("selected"), b.find('tbody td[day="' + e + '"][month="' + f + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(b, c, d), gj.datepicker.events.select(a, "day");
  },
  selectMonth: function selectMonth(a, b, c, d) {
    return function (e) {
      b.attr("month", d), gj.datepicker.methods.renderMonth(a, b, c), gj.datepicker.events.select(a, "month");
    };
  },
  selectYear: function selectYear(a, b, c, d) {
    return function (e) {
      b.attr("year", d), gj.datepicker.methods.renderYear(a, b, c), gj.datepicker.events.select(a, "year");
    };
  },
  selectDecade: function selectDecade(a, b, c, d) {
    return function (e) {
      b.attr("year", d), gj.datepicker.methods.renderDecade(a, b, c), gj.datepicker.events.select(a, "decade");
    };
  },
  open: function open(a, b) {
    var c,
        d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');

    switch (a.val() ? a.value(a.val()) : (c = new Date(), d.attr("month", c.getMonth()), d.attr("year", c.getFullYear())), d.attr("type")) {
      case "month":
        gj.datepicker.methods.renderMonth(a, d, b);
        break;

      case "year":
        gj.datepicker.methods.renderYear(a, d, b);
        break;

      case "decade":
        gj.datepicker.methods.renderDecade(a, d, b);
        break;

      case "century":
        gj.datepicker.methods.renderCentury(a, d, b);
    }

    d.show(), d.closest('div[role="modal"]').show(), b.modal ? gj.core.center(d) : (gj.core.setChildPosition(a[0], d[0]), document.activeElement !== a[0] && a.focus()), clearTimeout(a.timeout), gj.datepicker.events.open(a);
  },
  close: function close(a) {
    var b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
    b.hide(), b.closest('div[role="modal"]').hide(), gj.datepicker.events.close(a);
  },
  createKeyDownHandler: function createKeyDownHandler(a, b, c) {
    return function (d) {
      var e,
          f,
          g,
          h,
          i,
          j,
          d = d || window.event;
      "none" !== window.getComputedStyle(b[0]).display && (j = gj.datepicker.methods.getActiveCell(b), "38" == d.keyCode ? (h = j.index(), i = j.closest("tr").prev("tr").find("td:eq(" + h + ")"), i.is("[day]") || (gj.datepicker.methods.prev(a, c)(), i = b.find("tbody tr").last().find("td:eq(" + h + ")"), i.is(":empty") && (i = b.find("tbody tr").last().prev().find("td:eq(" + h + ")"))), i.is("[day]") && (i.addClass("focused"), j.removeClass("focused"))) : "40" == d.keyCode ? (h = j.index(), i = j.closest("tr").next("tr").find("td:eq(" + h + ")"), i.is("[day]") || (gj.datepicker.methods.next(a, c)(), i = b.find("tbody tr").first().find("td:eq(" + h + ")"), i.is("[day]") || (i = b.find("tbody tr:eq(1)").find("td:eq(" + h + ")"))), i.is("[day]") && (i.addClass("focused"), j.removeClass("focused"))) : "37" == d.keyCode ? (i = j.prev("td[day]:not(.disabled)"), 0 === i.length && (i = j.closest("tr").prev("tr").find("td[day]").last()), 0 === i.length && (gj.datepicker.methods.prev(a, c)(), i = b.find("tbody tr").last().find("td[day]").last()), i.length > 0 && (i.addClass("focused"), j.removeClass("focused"))) : "39" == d.keyCode ? (i = j.next("[day]:not(.disabled)"), 0 === i.length && (i = j.closest("tr").next("tr").find("td[day]").first()), 0 === i.length && (gj.datepicker.methods.next(a, c)(), i = b.find("tbody tr").first().find("td[day]").first()), i.length > 0 && (i.addClass("focused"), j.removeClass("focused"))) : "13" == d.keyCode ? (g = parseInt(j.attr("day"), 10), e = parseInt(j.attr("month"), 10), f = parseInt(j.attr("year"), 10), gj.datepicker.methods.dayClickHandler(a, b, c, new Date(f, e, g))()) : "27" == d.keyCode && a.close());
    };
  },
  getActiveCell: function getActiveCell(a) {
    var b = a.find("td[day].focused");
    return 0 === b.length && (b = a.find("td[day].selected"), 0 === b.length && (b = a.find("td[day].today"), 0 === b.length && (b = a.find("td[day]:not(.disabled)").first()))), b;
  },
  value: function value(a, b) {
    var c,
        d,
        e = a.data();
    return void 0 === b ? a.val() : (d = gj.core.parseDate(b, e.format, e.locale), d && d.getTime() ? (c = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(a, c, e, d)()) : a.val(""), a);
  },
  destroy: function destroy(a) {
    var b = a.data(),
        c = a.parent(),
        d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
    return b && (a.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datepicker"), a.removeClass(), c.children('[role="right-icon"]').remove(), a.unwrap()), a;
  }
}, gj.datepicker.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  },
  select: function select(a, b) {
    return a.triggerHandler("select", [b]);
  },
  open: function open(a) {
    return a.triggerHandler("open");
  },
  close: function close(a) {
    return a.triggerHandler("close");
  }
}, gj.datepicker.widget = function (a, b) {
  var c = this,
      d = gj.datepicker.methods;
  return c.value = function (a) {
    return d.value(this, a);
  }, c.destroy = function () {
    return d.destroy(this);
  }, c.open = function () {
    return d.open(this, this.data());
  }, c.close = function () {
    return d.close(this);
  }, $.extend(a, c), "true" !== a.attr("data-datepicker") && d.init.call(a, b), a;
}, gj.datepicker.widget.prototype = new gj.widget(), gj.datepicker.widget.constructor = gj.datepicker.widget, function (a) {
  a.fn.datepicker = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.datepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.datepicker.widget(this, a);
    }
  };
}(jQuery), gj.timepicker = {
  plugins: {}
}, gj.timepicker.config = {
  base: {
    width: void 0,
    modal: !0,
    header: !0,
    footer: !0,
    format: "HH:MM",
    uiLibrary: "materialdesign",
    value: void 0,
    mode: "ampm",
    locale: "en-us",
    size: "default",
    icons: {
      rightIcon: '<i class="gj-icon clock" />'
    },
    style: {
      modal: "gj-modal",
      wrapper: "gj-timepicker gj-timepicker-md gj-unselectable",
      input: "gj-textbox-md",
      clock: "gj-picker gj-picker-md timepicker",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      clock: "gj-picker gj-picker-bootstrap timepicker",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
      input: "form-control border",
      clock: "gj-picker gj-picker-bootstrap timepicker",
      footer: "modal-footer",
      button: "btn btn-default"
    }
  }
}, gj.timepicker.methods = {
  init: function init(a) {
    return gj.picker.widget.prototype.init.call(this, a, "timepicker"), this;
  },
  initialize: function initialize() {},
  initMouse: function initMouse(a, b, c, d) {
    a.off(), a.on("mousedown", gj.timepicker.methods.mouseDownHandler(b, c)), a.on("mousemove", gj.timepicker.methods.mouseMoveHandler(b, c, d)), a.on("mouseup", gj.timepicker.methods.mouseUpHandler(b, c, d));
  },
  createPicker: function createPicker(a) {
    var b,
        c = a.data(),
        d = $('<div role="picker" />').addClass(c.style.clock).attr("guid", a.attr("data-guid")),
        e = $('<div role="hour" />'),
        f = $('<div role="minute" />'),
        g = $('<div role="header" />'),
        h = $('<div role="mode" />'),
        i = $('<div role="body" />'),
        j = $('<button class="' + c.style.button + '">' + gj.core.messages[c.locale].ok + "</button>"),
        k = $('<button class="' + c.style.button + '">' + gj.core.messages[c.locale].cancel + "</button>"),
        l = $('<div role="footer" class="' + c.style.footer + '" />');
    return b = gj.core.parseDate(c.value, c.format, c.locale), !b || isNaN(b.getTime()) ? b = new Date() : a.attr("hours", b.getHours()), gj.timepicker.methods.initMouse(i, a, d, c), c.header && (e.on("click", function () {
      gj.timepicker.methods.renderHours(a, d, c);
    }), f.on("click", function () {
      gj.timepicker.methods.renderMinutes(a, d, c);
    }), g.append(e).append(":").append(f), "ampm" === c.mode && (h.append($('<span role="am">' + gj.core.messages[c.locale].am + "</span>").on("click", function () {
      var b = gj.timepicker.methods.getHour(d);
      d.attr("mode", "am"), $(this).addClass("selected"), $(this).parent().children('[role="pm"]').removeClass("selected"), b >= 12 && d.attr("hour", b - 12), c.modal || (clearTimeout(a.timeout), a.focus());
    })), h.append("<br />"), h.append($('<span role="pm">' + gj.core.messages[c.locale].pm + "</span>").on("click", function () {
      var b = gj.timepicker.methods.getHour(d);
      d.attr("mode", "pm"), $(this).addClass("selected"), $(this).parent().children('[role="am"]').removeClass("selected"), b < 12 && d.attr("hour", b + 12), c.modal || (clearTimeout(a.timeout), a.focus());
    })), g.append(h)), d.append(g)), d.append(i), c.footer && (k.on("click", function () {
      a.close();
    }), l.append(k), j.on("click", gj.timepicker.methods.setTime(a, d)), l.append(j), d.append(l)), d.hide(), $("body").append(d), c.modal && (d.wrapAll('<div role="modal" class="' + c.style.modal + '"/>'), gj.core.center(d)), d;
  },
  getHour: function getHour(a) {
    return parseInt(a.attr("hour"), 10) || 0;
  },
  getMinute: function getMinute(a) {
    return parseInt(a.attr("minute"), 10) || 0;
  },
  setTime: function setTime(a, b) {
    return function () {
      var c = gj.timepicker.methods.getHour(b),
          d = gj.timepicker.methods.getMinute(b),
          e = b.attr("mode"),
          f = new Date(0, 0, 0, 12 === c && "am" === e ? 0 : c, d),
          g = a.data(),
          h = gj.core.formatDate(f, g.format, g.locale);
      a.value(h), a.close();
    };
  },
  getPointerValue: function getPointerValue(a, b, c) {
    var d,
        e,
        f = 256,
        g = Math.atan2(f / 2 - a, f / 2 - b) / Math.PI * 180;

    switch (g < 0 && (g = 360 + g), c) {
      case "ampm":
        return d = 12 - Math.round(12 * g / 360), 0 === d ? 12 : d;

      case "24hr":
        return e = Math.sqrt(Math.pow(f / 2 - a, 2) + Math.pow(f / 2 - b, 2)), d = 12 - Math.round(12 * g / 360), 0 === d && (d = 12), e < f / 2 - 32 && (d = 12 === d ? 0 : d + 12), d;

      case "minutes":
        return d = Math.round(60 - 60 * g / 360), 60 === d ? 0 : d;
    }
  },
  updateArrow: function updateArrow(a, b, c, d) {
    var e,
        f,
        g = b.mouseX(a),
        h = b.mouseY(a),
        i = window.scrollY || window.pageYOffset || 0,
        j = window.scrollX || window.pageXOffset || 0;
    e = a.target.getBoundingClientRect(), "hours" == d.dialMode ? (f = gj.timepicker.methods.getPointerValue(g - j - e.left, h - i - e.top, d.mode), c.attr("hour", "ampm" === d.mode && "pm" === c.attr("mode") && f < 12 ? f + 12 : f)) : "minutes" == d.dialMode && (f = gj.timepicker.methods.getPointerValue(g - j - e.left, h - i - e.top, "minutes"), c.attr("minute", f)), gj.timepicker.methods.update(b, c, d);
  },
  update: function update(a, b, c) {
    var d, e, f, g, h, i;
    d = gj.timepicker.methods.getHour(b), e = gj.timepicker.methods.getMinute(b), f = b.find('[role="arrow"]'), "hours" == c.dialMode && (0 == d || d > 12) && "24hr" === c.mode ? f.css("width", "calc(50% - 52px)") : f.css("width", "calc(50% - 20px)"), "hours" == c.dialMode ? f.css("transform", "rotate(" + (30 * d - 90).toString() + "deg)") : f.css("transform", "rotate(" + (6 * e - 90).toString() + "deg)"), f.show(), g = "ampm" === c.mode && d > 12 ? d - 12 : 0 == d ? 12 : d, i = b.find('[role="body"] span'), i.removeClass("selected"), i.filter(function (a) {
      return "hours" == c.dialMode ? parseInt($(this).text(), 10) == g : parseInt($(this).text(), 10) == e;
    }).addClass("selected"), c.header && (h = b.find('[role="header"]'), h.find('[role="hour"]').text(g), h.find('[role="minute"]').text(gj.core.pad(e)), "ampm" === c.mode && (d >= 12 ? (h.find('[role="pm"]').addClass("selected"), h.find('[role="am"]').removeClass("selected")) : (h.find('[role="am"]').addClass("selected"), h.find('[role="pm"]').removeClass("selected"))));
  },
  mouseDownHandler: function mouseDownHandler(a, b) {
    return function (b) {
      a.mouseMove = !0;
    };
  },
  mouseMoveHandler: function mouseMoveHandler(a, b, c) {
    return function (d) {
      a.mouseMove && gj.timepicker.methods.updateArrow(d, a, b, c);
    };
  },
  mouseUpHandler: function mouseUpHandler(a, b, c) {
    return function (d) {
      gj.timepicker.methods.updateArrow(d, a, b, c), a.mouseMove = !1, c.modal || (clearTimeout(a.timeout), a.focus()), "hours" == c.dialMode ? setTimeout(function () {
        gj.timepicker.events.select(a, "hour"), gj.timepicker.methods.renderMinutes(a, b, c);
      }, 1e3) : "minutes" == c.dialMode && (!0 !== c.footer && !1 !== c.autoClose && gj.timepicker.methods.setTime(a, b)(), gj.timepicker.events.select(a, "minute"));
    };
  },
  renderHours: function renderHours(a, b, c) {
    var d,
        e = b.find('[role="body"]');
    clearTimeout(a.timeout), e.empty(), d = $('<div role="dial"></div>'), d.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), d.append('<span role="hour" style="transform: translate(54px, -93.5307px);">1</span>'), d.append('<span role="hour" style="transform: translate(93.5307px, -54px);">2</span>'), d.append('<span role="hour" style="transform: translate(108px, 0px);">3</span>'), d.append('<span role="hour" style="transform: translate(93.5307px, 54px);">4</span>'), d.append('<span role="hour" style="transform: translate(54px, 93.5307px);">5</span>'), d.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">6</span>'), d.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">7</span>'), d.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">8</span>'), d.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">9</span>'), d.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">10</span>'), d.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">11</span>'), d.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">12</span>'), "24hr" === c.mode && (d.append('<span role="hour" style="transform: translate(38px, -65.8179px);">13</span>'), d.append('<span role="hour" style="transform: translate(65.8179px, -38px);">14</span>'), d.append('<span role="hour" style="transform: translate(76px, 0px);">15</span>'), d.append('<span role="hour" style="transform: translate(65.8179px, 38px);">16</span>'), d.append('<span role="hour" style="transform: translate(38px, 65.8179px);">17</span>'), d.append('<span role="hour" style="transform: translate(4.65366e-15px, 76px);">18</span>'), d.append('<span role="hour" style="transform: translate(-38px, 65.8179px);">19</span>'), d.append('<span role="hour" style="transform: translate(-65.8179px, 38px);">20</span>'), d.append('<span role="hour" style="transform: translate(-76px, 9.30732e-15px);">21</span>'), d.append('<span role="hour" style="transform: translate(-65.8179px, -38px);">22</span>'), d.append('<span role="hour" style="transform: translate(-38px, -65.8179px);">23</span>'), d.append('<span role="hour" style="transform: translate(-1.3961e-14px, -76px);">00</span>')), e.append(d), b.find('[role="header"] [role="hour"]').addClass("selected"), b.find('[role="header"] [role="minute"]').removeClass("selected"), c.dialMode = "hours", gj.timepicker.methods.update(a, b, c);
  },
  renderMinutes: function renderMinutes(a, b, c) {
    var d = b.find('[role="body"]');
    clearTimeout(a.timeout), d.empty(), $dial = $('<div role="dial"></div>'), $dial.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), $dial.append('<span role="hour" style="transform: translate(54px, -93.5307px);">5</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, -54px);">10</span>'), $dial.append('<span role="hour" style="transform: translate(108px, 0px);">15</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, 54px);">20</span>'), $dial.append('<span role="hour" style="transform: translate(54px, 93.5307px);">25</span>'), $dial.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">30</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">35</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">40</span>'), $dial.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">45</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">50</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">55</span>'), $dial.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">00</span>'), d.append($dial), b.find('[role="header"] [role="hour"]').removeClass("selected"), b.find('[role="header"] [role="minute"]').addClass("selected"), c.dialMode = "minutes", gj.timepicker.methods.update(a, b, c);
  },
  open: function open(a) {
    var b,
        c,
        d = a.data(),
        e = $("body").find('[role="picker"][guid="' + a.attr("data-guid") + '"]');
    return b = a.value() ? gj.core.parseDate(a.value(), d.format, d.locale) : new Date(), c = b.getHours(), "ampm" === d.mode && e.attr("mode", c > 12 ? "pm" : "am"), e.attr("hour", c), e.attr("minute", b.getMinutes()), gj.timepicker.methods.renderHours(a, e, d), gj.picker.widget.prototype.open.call(a, "timepicker"), a;
  },
  value: function value(a, b) {
    a.data();
    return void 0 === b ? a.val() : (a.val(b), gj.timepicker.events.change(a), a);
  }
}, gj.timepicker.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  },
  select: function select(a, b) {
    return a.triggerHandler("select", [b]);
  },
  open: function open(a) {
    return a.triggerHandler("open");
  },
  close: function close(a) {
    return a.triggerHandler("close");
  }
}, gj.timepicker.widget = function (a, b) {
  var c = this,
      d = gj.timepicker.methods;
  return c.mouseMove = !1, c.value = function (a) {
    return d.value(this, a);
  }, c.destroy = function () {
    return gj.picker.widget.prototype.destroy.call(this, "timepicker");
  }, c.open = function () {
    return gj.timepicker.methods.open(this);
  }, c.close = function () {
    return gj.picker.widget.prototype.close.call(this, "timepicker");
  }, $.extend(a, c), "true" !== a.attr("data-timepicker") && d.init.call(a, b), a;
}, gj.timepicker.widget.prototype = new gj.picker.widget(), gj.timepicker.widget.constructor = gj.timepicker.widget, function (a) {
  a.fn.timepicker = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.timepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.timepicker.widget(this, a);
    }
  };
}(jQuery), gj.datetimepicker = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.datetimepicker.config = {
  base: {
    datepicker: gj.datepicker.config.base,
    timepicker: gj.timepicker.config.base,
    uiLibrary: "materialdesign",
    value: void 0,
    format: "HH:MM mm/dd/yyyy",
    width: void 0,
    modal: !1,
    footer: !1,
    size: "default",
    locale: "en-us",
    icons: {},
    style: {
      calendar: "gj-picker gj-picker-md datetimepicker gj-unselectable"
    }
  },
  bootstrap: {
    style: {
      calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
    }
  }
}, gj.datetimepicker.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "datetimepicker"), this.attr("data-datetimepicker", "true"), gj.datetimepicker.methods.initialize(this), this;
  },
  getConfig: function getConfig(a, b) {
    var c = gj.widget.prototype.getConfig.call(this, a, b);
    return uiLibrary = a.hasOwnProperty("uiLibrary") ? a.uiLibrary : c.uiLibrary, gj.datepicker.config[uiLibrary] && $.extend(!0, c.datepicker, gj.datepicker.config[uiLibrary]), gj.timepicker.config[uiLibrary] && $.extend(!0, c.timepicker, gj.timepicker.config[uiLibrary]), iconsLibrary = a.hasOwnProperty("iconsLibrary") ? a.iconsLibrary : c.iconsLibrary, gj.datepicker.config[iconsLibrary] && $.extend(!0, c.datepicker, gj.datepicker.config[iconsLibrary]), gj.timepicker.config[iconsLibrary] && $.extend(!0, c.timepicker, gj.timepicker.config[iconsLibrary]), c;
  },
  initialize: function initialize(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = a.data();
    j.datepicker.uiLibrary = j.uiLibrary, j.datepicker.iconsLibrary = j.iconsLibrary, j.datepicker.width = j.width, j.datepicker.format = j.format, j.datepicker.locale = j.locale, j.datepicker.modal = j.modal, j.datepicker.footer = j.footer, j.datepicker.style.calendar = j.style.calendar, j.datepicker.value = j.value, j.datepicker.size = j.size, j.datepicker.autoClose = !1, gj.datepicker.methods.initialize(a, j.datepicker), a.on("select", function (c, d) {
      var e, f;
      "day" === d ? gj.datetimepicker.methods.createShowHourHandler(a, b, j)() : "minute" === d && b.attr("selectedDay") && !0 !== j.footer && (selectedDay = b.attr("selectedDay").split("-"), e = new Date(selectedDay[0], selectedDay[1], selectedDay[2], b.attr("hour") || 0, b.attr("minute") || 0), f = gj.core.formatDate(e, j.format, j.locale), a.val(f), gj.datetimepicker.events.change(a), gj.datetimepicker.methods.close(a));
    }), a.on("open", function () {
      var a = b.children('[role="header"]');
      a.find('[role="calendarMode"]').addClass("selected"), a.find('[role="clockMode"]').removeClass("selected");
    }), b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), f = j.value ? gj.core.parseDate(j.value, j.format, j.locale) : new Date(), b.attr("hour", f.getHours()), b.attr("minute", f.getMinutes()), j.timepicker.uiLibrary = j.uiLibrary, j.timepicker.iconsLibrary = j.iconsLibrary, j.timepicker.format = j.format, j.timepicker.locale = j.locale, j.timepicker.header = !0, j.timepicker.footer = j.footer, j.timepicker.size = j.size, j.timepicker.mode = "24hr", j.timepicker.autoClose = !1, c = $('<div role="header" />'), d = $('<div role="date" class="selected" />'), d.on("click", gj.datetimepicker.methods.createShowDateHandler(a, b, j)), d.html(gj.core.formatDate(new Date(), "ddd, mmm dd", j.locale)), c.append(d), g = $('<div role="switch"></div>'), h = $('<i class="gj-icon selected" role="calendarMode">event</i>'), h.on("click", gj.datetimepicker.methods.createShowDateHandler(a, b, j)), g.append(h), e = $('<div role="time" />'), e.append($('<div role="hour" />').on("click", gj.datetimepicker.methods.createShowHourHandler(a, b, j)).html(gj.core.formatDate(new Date(), "HH", j.locale))), e.append(":"), e.append($('<div role="minute" />').on("click", gj.datetimepicker.methods.createShowMinuteHandler(a, b, j)).html(gj.core.formatDate(new Date(), "MM", j.locale))), g.append(e), i = $('<i class="gj-icon" role="clockMode">clock</i>'), i.on("click", gj.datetimepicker.methods.createShowHourHandler(a, b, j)), g.append(i), c.append(g), b.prepend(c);
  },
  createShowDateHandler: function createShowDateHandler(a, b, c) {
    return function (d) {
      var e = b.children('[role="header"]');
      e.find('[role="calendarMode"]').addClass("selected"), e.find('[role="date"]').addClass("selected"), e.find('[role="clockMode"]').removeClass("selected"), e.find('[role="hour"]').removeClass("selected"), e.find('[role="minute"]').removeClass("selected"), gj.datepicker.methods.renderMonth(a, b, c.datepicker);
    };
  },
  createShowHourHandler: function createShowHourHandler(a, b, c) {
    return function () {
      var d = b.children('[role="header"]');
      d.find('[role="calendarMode"]').removeClass("selected"), d.find('[role="date"]').removeClass("selected"), d.find('[role="clockMode"]').addClass("selected"), d.find('[role="hour"]').addClass("selected"), d.find('[role="minute"]').removeClass("selected"), gj.timepicker.methods.initMouse(b.children('[role="body"]'), a, b, c.timepicker), gj.timepicker.methods.renderHours(a, b, c.timepicker);
    };
  },
  createShowMinuteHandler: function createShowMinuteHandler(a, b, c) {
    return function () {
      var d = b.children('[role="header"]');
      d.find('[role="calendarMode"]').removeClass("selected"), d.find('[role="date"]').removeClass("selected"), d.find('[role="clockMode"]').addClass("selected"), d.find('[role="hour"]').removeClass("selected"), d.find('[role="minute"]').addClass("selected"), gj.timepicker.methods.initMouse(b.children('[role="body"]'), a, b, c.timepicker), gj.timepicker.methods.renderMinutes(a, b, c.timepicker);
    };
  },
  close: function close(a) {
    var b = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
    b.hide(), b.closest('div[role="modal"]').hide();
  },
  value: function value(a, b) {
    var c,
        d,
        e,
        f = a.data();
    return void 0 === b ? a.val() : (d = gj.core.parseDate(b, f.format, f.locale), d ? (c = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(a, c, f, d)(), e = d.getHours(), "ampm" === f.mode && c.attr("mode", e > 12 ? "pm" : "am"), c.attr("hour", e), c.attr("minute", d.getMinutes()), a.val(b)) : a.val(""), a);
  },
  destroy: function destroy(a) {
    var b = a.data(),
        c = a.parent(),
        d = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
    return b && (a.off(), d.parent('[role="modal"]').length > 0 && d.unwrap(), d.remove(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datetimepicker"), a.removeClass(), c.children('[role="right-icon"]').remove(), a.unwrap()), a;
  }
}, gj.datetimepicker.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  }
}, gj.datetimepicker.widget = function (a, b) {
  var c = this,
      d = gj.datetimepicker.methods;
  return c.mouseMove = !1, c.value = function (a) {
    return d.value(this, a);
  }, c.open = function () {
    gj.datepicker.methods.open(this, this.data().datepicker);
  }, c.close = function () {
    gj.datepicker.methods.close(this);
  }, c.destroy = function () {
    return d.destroy(this);
  }, $.extend(a, c), "true" !== a.attr("data-datetimepicker") && d.init.call(a, b), a;
}, gj.datetimepicker.widget.prototype = new gj.widget(), gj.datetimepicker.widget.constructor = gj.datetimepicker.widget, gj.datetimepicker.widget.prototype.getConfig = gj.datetimepicker.methods.getConfig, function (a) {
  a.fn.datetimepicker = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.datetimepicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.datetimepicker.widget(this, a);
    }
  };
}(jQuery), gj.slider = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.slider.config = {
  base: {
    min: 0,
    max: 100,
    width: void 0,
    uiLibrary: "materialdesign",
    value: void 0,
    icons: {},
    style: {
      wrapper: "gj-slider gj-slider-md",
      progress: void 0,
      track: void 0
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-3",
      progress: "progress-bar",
      track: "progress"
    }
  },
  bootstrap4: {
    style: {
      wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-4",
      progress: "progress-bar",
      track: "progress"
    }
  }
}, gj.slider.methods = {
  init: function init(a) {
    return gj.widget.prototype.init.call(this, a, "slider"), this.attr("data-slider", "true"), gj.slider.methods.initialize(this, this.data()), this;
  },
  initialize: function initialize(a, b) {
    var c, d, e, f;
    a[0].style.display = "none", "wrapper" !== a[0].parentElement.attributes.role ? (c = document.createElement("div"), c.setAttribute("role", "wrapper"), a[0].parentNode.insertBefore(c, a[0]), c.appendChild(a[0])) : c = a[0].parentElement, b.width && (c.style.width = b.width + "px"), gj.core.addClasses(c, b.style.wrapper), d = a[0].querySelector('[role="track"]'), null == d && (d = document.createElement("div"), d.setAttribute("role", "track"), c.appendChild(d)), gj.core.addClasses(d, b.style.track), e = a[0].querySelector('[role="handle"]'), null == e && (e = document.createElement("div"), e.setAttribute("role", "handle"), c.appendChild(e)), f = a[0].querySelector('[role="progress"]'), null == f && (f = document.createElement("div"), f.setAttribute("role", "progress"), c.appendChild(f)), gj.core.addClasses(f, b.style.progress), b.value || (b.value = b.min), gj.slider.methods.value(a, b, b.value), gj.documentManager.subscribeForEvent("mouseup", a.data("guid"), gj.slider.methods.createMouseUpHandler(a, e, b)), e.addEventListener("mousedown", gj.slider.methods.createMouseDownHandler(e, b)), gj.documentManager.subscribeForEvent("mousemove", a.data("guid"), gj.slider.methods.createMouseMoveHandler(a, d, e, f, b)), e.addEventListener("click", function (a) {
      a.stopPropagation();
    }), c.addEventListener("click", gj.slider.methods.createClickHandler(a, d, e, b));
  },
  createClickHandler: function createClickHandler(a, b, c, d) {
    return function (e) {
      var f, g, h, i, j;
      "true" !== c.getAttribute("drag") && (f = gj.core.position(a[0].parentElement), g = new gj.widget().mouseX(e) - f.left, h = gj.core.width(c) / 2, i = gj.core.width(b) / (d.max - d.min), j = Math.round((g - h) / i) + d.min, gj.slider.methods.value(a, d, j));
    };
  },
  createMouseUpHandler: function createMouseUpHandler(a, b, c) {
    return function (c) {
      "true" === b.getAttribute("drag") && (b.setAttribute("drag", "false"), gj.slider.events.change(a));
    };
  },
  createMouseDownHandler: function createMouseDownHandler(a, b) {
    return function (b) {
      a.setAttribute("drag", "true");
    };
  },
  createMouseMoveHandler: function createMouseMoveHandler(a, b, c, d, e) {
    return function (d) {
      var f, g, h, i, j, k, l;
      "true" === c.getAttribute("drag") && (f = gj.core.position(a[0].parentElement), g = new gj.widget().mouseX(d) - f.left, h = gj.core.width(b), i = gj.core.width(c) / 2, j = h / (e.max - e.min), k = (e.value - e.min) * j, g >= i && g <= h + i && (g > k + j / 2 || g < k - j / 2) && (l = Math.round((g - i) / j) + e.min, gj.slider.methods.value(a, e, l)));
    };
  },
  value: function value(a, b, c) {
    var d, e, f, g;
    return void 0 === c ? a[0].value : (a[0].setAttribute("value", c), b.value = c, e = a.parent().children('[role="track"]')[0], d = gj.core.width(e) / (b.max - b.min), f = a.parent().children('[role="handle"]')[0], f.style.left = (c - b.min) * d + "px", g = a.parent().children('[role="progress"]')[0], g.style.width = (c - b.min) * d + "px", gj.slider.events.slide(a, c), a);
  },
  destroy: function destroy(a) {
    var b = a.data(),
        c = a.parent();
    return b && (c.children('[role="track"]').remove(), c.children('[role="handle"]').remove(), c.children('[role="progress"]').remove(), a.unwrap(), a.off(), a.removeData(), a.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-slider"), a.removeClass(), a.show()), a;
  }
}, gj.slider.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  },
  slide: function slide(a, b) {
    return a.triggerHandler("slide", [b]);
  }
}, gj.slider.widget = function (a, b) {
  var c = this,
      d = gj.slider.methods;
  return c.value = function (a) {
    return d.value(this, this.data(), a);
  }, c.destroy = function () {
    return d.destroy(this);
  }, $.extend(a, c), "true" !== a.attr("data-slider") && d.init.call(a, b), a;
}, gj.slider.widget.prototype = new gj.widget(), gj.slider.widget.constructor = gj.slider.widget, function (a) {
  a.fn.slider = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.slider.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.slider.widget(this, a);
    }
  };
}(jQuery), gj.colorpicker = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.colorpicker.config = {
  base: {
    uiLibrary: "materialdesign",
    value: void 0,
    icons: {
      rightIcon: '<i class="gj-icon">event</i>'
    },
    style: {
      modal: "gj-modal",
      wrapper: "gj-colorpicker gj-colorpicker-md gj-unselectable",
      input: "gj-textbox-md",
      picker: "gj-picker gj-picker-md colorpicker gj-unselectable",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {}
  },
  bootstrap4: {
    style: {}
  }
}, gj.colorpicker.methods = {
  init: function init(a) {
    return gj.picker.widget.prototype.init.call(this, a, "colorpicker"), gj.colorpicker.methods.initialize(this), this;
  },
  initialize: function initialize(a) {},
  createPicker: function createPicker(a, b) {
    var c = $('<div role="picker" />').addClass(b.style.picker).attr("guid", a.attr("data-guid"));
    return c.html("test"), c.hide(), $("body").append(c), c;
  },
  open: function open(a) {
    return a.val() && a.value(a.val()), gj.picker.widget.prototype.open.call(a, "colorpicker");
  }
}, gj.colorpicker.events = {
  change: function change(a) {
    return a.triggerHandler("change");
  },
  select: function select(a) {
    return a.triggerHandler("select");
  },
  open: function open(a) {
    return a.triggerHandler("open");
  },
  close: function close(a) {
    return a.triggerHandler("close");
  }
}, gj.colorpicker.widget = function (a, b) {
  var c = this,
      d = gj.colorpicker.methods;
  return c.value = function (a) {
    return d.value(this, a);
  }, c.destroy = function () {
    return gj.picker.widget.prototype.destroy.call(this, "colorpicker");
  }, c.open = function () {
    return d.open(this);
  }, c.close = function () {
    return gj.picker.widget.prototype.close.call(this, "colorpicker");
  }, $.extend(a, c), "true" !== a.attr("data-colorpicker") && d.init.call(a, b), a;
}, gj.colorpicker.widget.prototype = new gj.picker.widget(), gj.colorpicker.widget.constructor = gj.colorpicker.widget, function (a) {
  a.fn.colorpicker = function (a) {
    var b;

    if (this && this.length) {
      if ("object" != _typeof(a) && a) {
        if (b = new gj.colorpicker.widget(this, null), b[a]) return b[a].apply(this, Array.prototype.slice.call(arguments, 1));
        throw "Method " + a + " does not exist.";
      }

      return new gj.colorpicker.widget(this, a);
    }
  };
}(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : void 0, function () {
  function e() {}

  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var i = this._events = this._events || {},
          n = i[e] = i[e] || [];
      return n.indexOf(t) == -1 && n.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var i = this._onceEvents = this._onceEvents || {},
          n = i[e] = i[e] || {};
      return n[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var i = this._events && this._events[e];

    if (i && i.length) {
      var n = i.indexOf(t);
      return n != -1 && i.splice(n, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var i = this._events && this._events[e];

    if (i && i.length) {
      i = i.slice(0), t = t || [];

      for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
        var r = i[o],
            s = n && n[r];
        s && (this.off(e, r), delete n[r]), r.apply(this, t);
      }

      return this;
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, e;
}), function (e, t) {
  "use strict";

  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return t(e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : void 0, function (e, t) {
  function i(e, t) {
    for (var i in t) {
      e[i] = t[i];
    }

    return e;
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == _typeof(e) && "number" == typeof e.length;
    return t ? d.call(e) : [e];
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e));
  }

  function r(e) {
    this.img = e;
  }

  function s(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }

  var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
  o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;

    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o);
      }

      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);

        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s);
        }
      }
    }
  };
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);
    if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
      var o = n && n[2];
      o && this.addBackground(o, e), n = i.exec(t.backgroundImage);
    }
  }, o.prototype.addImage = function (e) {
    var t = new r(e);
    this.images.push(t);
  }, o.prototype.addBackground = function (e, t) {
    var i = new s(e, t);
    this.images.push(i);
  }, o.prototype.check = function () {
    function e(e, i, n) {
      setTimeout(function () {
        t.progress(e, i, n);
      });
    }

    var t = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : void this.complete();
  }, o.prototype.progress = function (e, t, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t);
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this);
    }
  }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, r.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
  }, r.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e);
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
      var i = new o(this, e, t);
      return i.jqDeferred.promise(h(this));
    });
  }, o.makeJQueryPlugin(), o;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
!function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";

  function i(i, s, a) {
    function u(t, e, o) {
      var n,
          s = "$()." + i + '("' + e + '")';
      return t.each(function (t, u) {
        var h = a.data(u, i);
        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
        var d = h[e];
        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
        var l = d.apply(h, o);
        n = void 0 === n ? l : n;
      }), void 0 !== n ? n : t;
    }

    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
      });
    }

    a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = n.call(arguments, 1);
        return u(this, t, e);
      }

      return h(this, t), this;
    }, o(a));
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = i);
  }

  var n = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };
  return o(e || t.jQuery), i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : void 0, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          o = i[t] = i[t] || [];
      return o.indexOf(e) == -1 && o.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
          o = i[t] = i[t] || {};
      return o[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var o = i.indexOf(e);
      return o != -1 && i.splice(o, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      i = i.slice(0), e = e || [];

      for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
        var s = i[n],
            r = o && o[s];
        r && (this.off(t, s), delete o[s]), s.apply(this, e);
      }

      return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return e();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }

  function e() {}

  function i() {
    for (var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, e = 0; e < h; e++) {
      var i = u[e];
      t[i] = 0;
    }

    return t;
  }

  function o(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
  }

  function n() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var n = o(e);
      s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e);
    }
  }

  function s(e) {
    if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == _typeof(e) && e.nodeType) {
      var s = o(e);
      if ("none" == s.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;

      for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
        var f = u[l],
            c = s[f],
            m = parseFloat(c);
        a[f] = isNaN(m) ? 0 : m;
      }

      var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          I = a.borderTopWidth + a.borderBottomWidth,
          z = d && r,
          x = t(s.width);

      x !== !1 && (a.width = x + (z ? 0 : p + _));
      var S = t(s.height);
      return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
    }
  }

  var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      h = u.length,
      d = !1;
  return s;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";

  var t = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var o = e[i],
          n = o + "MatchesSelector";
      if (t[n]) return n;
    }
  }();

  return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};
  i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];
    if (Array.isArray(t)) e = t;else if (t && "object" == _typeof(t) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);
    return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.filterFindElements = function (t, o) {
    t = i.makeArray(t);
    var n = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!o) return void n.push(t);
        e(t, o) && n.push(t);

        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
          n.push(i[s]);
        }
      }
    }), n;
  }, i.debounceMethod = function (t, e, i) {
    var o = t.prototype[e],
        n = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[n];
      t && clearTimeout(t);
      var e = arguments,
          s = this;
      this[n] = setTimeout(function () {
        o.apply(s, e), delete s[n];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var o = t.console;
  return i.htmlInit = function (e, n) {
    i.docReady(function () {
      var s = i.toDashed(n),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          u = document.querySelectorAll(".js-" + s),
          h = i.makeArray(a).concat(i.makeArray(u)),
          d = r + "-options",
          l = t.jQuery;
      h.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(d);

        try {
          i = s && JSON.parse(s);
        } catch (a) {
          return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a));
        }

        var u = new e(t, i);
        l && l.data(t, n, u);
      });
    });
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    for (var e in t) {
      return !1;
    }

    return e = null, !0;
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create());
  }

  function n(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  }[r],
      h = {
    transform: a,
    transition: r,
    transitionDuration: r + "Duration",
    transitionProperty: r + "Property",
    transitionDelay: r + "Delay"
  },
      d = o.prototype = Object.create(t.prototype);
  d.constructor = o, d._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    });
  }, d.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, d.getSize = function () {
    this.size = e(this.element);
  }, d.css = function (t) {
    var e = this.element.style;

    for (var i in t) {
      var o = h[i] || i;
      e[o] = t[i];
    }
  }, d.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        o = t[e ? "left" : "right"],
        n = t[i ? "top" : "bottom"],
        s = this.layout.size,
        r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
        a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);

    r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a;
  }, d.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop"),
        n = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[n];

    e[s] = this.getXValue(a), e[r] = "";
    var u = o ? "paddingTop" : "paddingBottom",
        h = o ? "top" : "bottom",
        d = o ? "bottom" : "top",
        l = this.position.y + t[u];
    e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
  }, d.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, d.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");

    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, d._transitionTo = function (t, e) {
    this.getPosition();
    var i = this.position.x,
        o = this.position.y,
        n = parseInt(t, 10),
        s = parseInt(e, 10),
        r = n === this.position.x && s === this.position.y;
    if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
        u = e - o,
        h = {};
    h.transform = this.getTranslate(a, u), this.transition({
      to: h,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    });
  }, d.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        o = this.layout._getOption("originTop");

    return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, d.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, d._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);

    for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, d.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;

    for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }

    for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }

    if (t.from) {
      this.css(t.from);
      var o = this.element.offsetHeight;
      o = null;
    }

    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };
  var l = "opacity," + n(a);
  d.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;
      t = "number" == typeof t ? t + "ms" : t, this.css({
        transitionProperty: l,
        transitionDuration: t,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(u, this, !1);
    }
  }, d.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, d.onotransitionend = function (t) {
    this.ontransitionend(t);
  };
  var f = {
    "-webkit-transform": "transform"
  };
  d.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          o = f[t.propertyName] || t.propertyName;

      if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
        var n = e.onEnd[o];
        n.call(this), delete e.onEnd[o];
      }

      this.emitEvent("transitionEnd", [this]);
    }
  }, d.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
  }, d._removeStyles = function (t) {
    var e = {};

    for (var i in t) {
      e[i] = "";
    }

    this.css(e);
  };
  var c = {
    transitionProperty: "",
    transitionDuration: "",
    transitionDelay: ""
  };
  return d.removeTransitionStyles = function () {
    this.css(c);
  }, d.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, d.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this]);
  }, d.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, d.reveal = function () {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, d.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";

    for (var i in e) {
      return i;
    }
  }, d.hide = function () {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    });
  }, d.onHideTransitionEnd = function () {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"));
  }, d.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    });
  }, o;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
    return e(t, i, o, n, s);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
  "use strict";

  function s(t, e) {
    var i = o.getQueryElement(t);
    if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
    var n = ++l;
    this.element.outlayerGUID = n, f[n] = this, this._create();

    var s = this._getOption("initLayout");

    s && this.layout();
  }

  function r(t) {
    function e() {
      t.apply(this, arguments);
    }

    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }

  function a(t) {
    if ("number" == typeof t) return t;
    var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
    if (!i.length) return 0;
    i = parseFloat(i);
    var n = m[o] || 1;
    return i * n;
  }

  var u = t.console,
      h = t.jQuery,
      d = function d() {},
      l = 0,
      f = {};

  s.namespace = "outlayer", s.Item = n, s.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var c = s.prototype;
  o.extend(c, e.prototype), c.option = function (t) {
    o.extend(this.options, t);
  }, c._getOption = function (t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, c._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);

    var t = this._getOption("resize");

    t && this.bindResize();
  }, c.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, c._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
      var s = e[n],
          r = new i(s, this);
      o.push(r);
    }

    return o;
  }, c._filterFindItemElements = function (t) {
    return o.filterFindElements(t, this.options.itemSelector);
  }, c.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, c.layout = function () {
    this._resetLayout(), this._manageStamps();

    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, c._init = c.layout, c._resetLayout = function () {
    this.getSize();
  }, c.getSize = function () {
    this.size = i(this.element);
  }, c._getMeasurement = function (t, e) {
    var o,
        n = this.options[t];
    n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
  }, c.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, c._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, c._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function (t) {
        var o = this._getItemLayoutPosition(t);

        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
      }, this), this._processLayoutQueue(i);
    }
  }, c._getItemLayoutPosition = function () {
    return {
      x: 0,
      y: 0
    };
  }, c._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, c.updateStagger = function () {
    var t = this.options.stagger;
    return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, c._positionItem = function (t, e, i, o, n) {
    o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
  }, c._postLayout = function () {
    this.resizeContainer();
  }, c.resizeContainer = function () {
    var t = this._getOption("resizeContainer");

    if (t) {
      var e = this._getContainerSize();

      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, c._emitCompleteOnItems = function (t, e) {
    function i() {
      n.dispatchEvent(t + "Complete", null, [e]);
    }

    function o() {
      r++, r == s && i();
    }

    var n = this,
        s = e.length;
    if (!e || !s) return void i();
    var r = 0;
    e.forEach(function (e) {
      e.once(t, o);
    });
  }, c.dispatchEvent = function (t, e, i) {
    var o = e ? [e].concat(i) : i;
    if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
      var n = h.Event(e);
      n.type = t, this.$element.trigger(n, i);
    } else this.$element.trigger(t, i);
  }, c.ignore = function (t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0);
  }, c.unignore = function (t) {
    var e = this.getItem(t);
    e && delete e.isIgnored;
  }, c.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, c.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      o.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, c._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
  }, c._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, c._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    };
  }, c._manageStamp = d, c._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        o = this._boundingRect,
        n = i(t),
        s = {
      left: e.left - o.left - n.marginLeft,
      top: e.top - o.top - n.marginTop,
      right: o.right - e.right - n.marginRight,
      bottom: o.bottom - e.bottom - n.marginBottom
    };
    return s;
  }, c.handleEvent = o.handleEvent, c.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, c.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, c.onresize = function () {
    this.resize();
  }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, c.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth;
  }, c.addItems = function (t) {
    var e = this._itemize(t);

    return e.length && (this.items = this.items.concat(e)), e;
  }, c.appended = function (t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, c.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, c.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, c.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();
      t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, c.revealItemElements = function (t) {
    var e = this.getItems(t);
    this.reveal(e);
  }, c.hideItemElements = function (t) {
    var e = this.getItems(t);
    this.hide(e);
  }, c.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i;
    }
  }, c.getItems = function (t) {
    t = o.makeArray(t);
    var e = [];
    return t.forEach(function (t) {
      var i = this.getItem(t);
      i && e.push(i);
    }, this), e;
  }, c.remove = function (t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), o.removeFrom(this.items, t);
    }, this);
  }, c.destroy = function () {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = o.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && f[e];
  }, s.create = function (t, e) {
    var i = r(s);
    return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
  };
  var m = {
    ms: 1,
    s: 1e3
  };
  return s.Item = n, s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
  "use strict";

  function e() {
    t.Item.apply(this, arguments);
  }

  var i = e.prototype = Object.create(t.Item.prototype),
      o = i._create;
  i._create = function () {
    this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
  }, i.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var t = this.layout.options.getSortData,
          e = this.layout._sorters;

      for (var i in t) {
        var o = e[i];
        this.sortData[i] = o(this.element, this);
      }
    }
  };
  var n = i.destroy;
  return i.destroy = function () {
    n.apply(this, arguments), this.css({
      display: ""
    });
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
  "use strict";

  function i(t) {
    this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }

  var o = i.prototype,
      n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
  return n.forEach(function (t) {
    o[t] = function () {
      return e.prototype[t].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function () {
    var e = t(this.isotope.element),
        i = this.isotope.size && e;
    return i && e.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function (t, e) {
    var i = t + e,
        o = "outer" + e;

    if (this._getMeasurement(i, o), !this[i]) {
      var n = this.getFirstItemSize();
      this[i] = n && n[o] || this.isotope.size["inner" + e];
    }
  }, o.getFirstItemSize = function () {
    var e = this.isotope.filteredItems[0];
    return e && e.element && t(e.element);
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments);
    }

    return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
  var i = t.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];

    for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }

    this.maxY = 0, this.horizontalColIndex = 0;
  }, o.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }

    var o = this.columnWidth += this.gutter,
        n = this.containerWidth + this.gutter,
        s = n / o,
        r = o - n % o,
        a = r && r < 1 ? "round" : "floor";
    s = Math[a](s), this.cols = Math.max(s, 1);
  }, o.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        o = e(i);

    this.containerWidth = o && o.innerWidth;
  }, o._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
        i = e && e < 1 ? "round" : "ceil",
        o = Math[i](t.size.outerWidth / this.columnWidth);
    o = Math.min(o, this.cols);

    for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
      x: this.columnWidth * s.col,
      y: s.y
    }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
      this.colYs[h] = a;
    }

    return r;
  }, o._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        i = Math.min.apply(Math, e);

    return {
      col: e.indexOf(i),
      y: i
    };
  }, o._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;

    for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
      e[o] = this._getColGroupY(o, t);
    }

    return e;
  }, o._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];
    var i = this.colYs.slice(t, t + e);
    return Math.max.apply(Math, i);
  }, o._getHorizontalColPosition = function (t, e) {
    var i = this.horizontalColIndex % this.cols,
        o = t > 1 && i + t > this.cols;
    i = o ? 0 : i;
    var n = e.size.outerWidth && e.size.outerHeight;
    return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
      col: i,
      y: this._getColGroupY(i, t)
    };
  }, o._manageStamp = function (t) {
    var i = e(t),
        o = this._getElementOffset(t),
        n = this._getOption("originLeft"),
        s = n ? o.left : o.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);

    a = Math.max(0, a);
    var u = Math.floor(r / this.columnWidth);
    u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);

    for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
      this.colYs[l] = Math.max(d, this.colYs[l]);
    }
  }, o._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, o._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }

    return (this.cols - t) * this.columnWidth - this.gutter;
  }, o.needsResizeLayout = function () {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";

  var i = t.create("masonry"),
      o = i.prototype,
      n = {
    _getElementOffset: !0,
    layout: !0,
    _getMeasurement: !0
  };

  for (var s in e.prototype) {
    n[s] || (o[s] = e.prototype[s]);
  }

  var r = o.measureColumns;

  o.measureColumns = function () {
    this.items = this.isotope.filteredItems, r.call(this);
  };

  var a = o._getOption;
  return o._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("fitRows"),
      i = e.prototype;
  return i._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = t.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
    var o = {
      x: this.x,
      y: this.y
    };
    return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
  }, i._getContainerSize = function () {
    return {
      height: this.maxY
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";

  var e = t.create("vertical", {
    horizontalAlignment: 0
  }),
      i = e.prototype;
  return i._resetLayout = function () {
    this.y = 0;
  }, i._getItemLayoutPosition = function (t) {
    t.getSize();
    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        i = this.y;
    return this.y += t.size.outerHeight, {
      x: e,
      y: i
    };
  }, i._getContainerSize = function () {
    return {
      height: this.y
    };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
    return e(t, i, o, n, s, r, a);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
  function a(t, e) {
    return function (i, o) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];

        if (r > a || r < a) {
          var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
          return (r > a ? 1 : -1) * h;
        }
      }

      return 0;
    };
  }

  var u = t.jQuery,
      h = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      d = e.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  d.Item = s, d.LayoutMode = r;
  var l = d.prototype;
  l._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];

    for (var t in r.modes) {
      this._initLayoutMode(t);
    }
  }, l.reloadItems = function () {
    this.itemGUID = 0, e.prototype.reloadItems.call(this);
  }, l._itemize = function () {
    for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
      var o = t[i];
      o.id = this.itemGUID++;
    }

    return this._updateItemsSortData(t), t;
  }, l._initLayoutMode = function (t) {
    var e = r.modes[t],
        i = this.options[t] || {};
    this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
  }, l.layout = function () {
    return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
  }, l._layout = function () {
    var t = this._getIsInstant();

    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, l.arrange = function (t) {
    this.option(t), this._getIsInstant();

    var e = this._filter(this.items);

    this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, l._init = l.arrange, l._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, l._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;

    return this._isInstant = e, e;
  }, l._bindArrangeComplete = function () {
    function t() {
      e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
    }

    var e,
        i,
        o,
        n = this;
    this.once("layoutComplete", function () {
      e = !0, t();
    }), this.once("hideComplete", function () {
      i = !0, t();
    }), this.once("revealComplete", function () {
      o = !0, t();
    });
  }, l._filter = function (t) {
    var e = this.options.filter;
    e = e || "*";

    for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
      var a = t[r];

      if (!a.isIgnored) {
        var u = s(a);
        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
      }
    }

    return {
      matches: i,
      needReveal: o,
      needHide: n
    };
  }, l._getFilterTest = function (t) {
    return u && this.options.isJQueryFiltering ? function (e) {
      return u(e.element).is(t);
    } : "function" == typeof t ? function (e) {
      return t(e.element);
    } : function (e) {
      return o(e.element, t);
    };
  }, l.updateSortData = function (t) {
    var e;
    t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
  }, l._getSorters = function () {
    var t = this.options.getSortData;

    for (var e in t) {
      var i = t[e];
      this._sorters[e] = f(i);
    }
  }, l._updateItemsSortData = function (t) {
    for (var e = t && t.length, i = 0; e && i < e; i++) {
      var o = t[i];
      o.updateSortData();
    }
  };

  var f = function () {
    function t(t) {
      if ("string" != typeof t) return t;
      var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
      return t = a ? function (t) {
        return t && a(r(t));
      } : function (t) {
        return t && r(t);
      };
    }

    function e(t, e) {
      return t ? function (e) {
        return e.getAttribute(t);
      } : function (t) {
        var i = t.querySelector(e);
        return i && i.textContent;
      };
    }

    return t;
  }();

  d.sortDataParsers = {
    parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }),
    parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    })
  }, l._sort = function () {
    if (this.options.sortBy) {
      var t = n.makeArray(this.options.sortBy);
      this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
      var e = a(this.sortHistory, this.options.sortAscending);
      this.filteredItems.sort(e);
    }
  }, l._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }

    return !0;
  }, l._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];
    if (!e) throw new Error("No layout mode: " + t);
    return e.options = this.options[t], e;
  }, l._resetLayout = function () {
    e.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, l._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, l._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, l._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, l.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, l.appended = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i = this._filterRevealAdded(e);

      this.filteredItems = this.filteredItems.concat(i);
    }
  }, l.prepended = function (t) {
    var e = this._itemize(t);

    if (e.length) {
      this._resetLayout(), this._manageStamps();

      var i = this._filterRevealAdded(e);

      this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, l._filterRevealAdded = function (t) {
    var e = this._filter(t);

    return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, l.insert = function (t) {
    var e = this.addItems(t);

    if (e.length) {
      var i,
          o,
          n = e.length;

      for (i = 0; i < n; i++) {
        o = e[i], this.element.appendChild(o.element);
      }

      var s = this._filter(e).matches;

      for (i = 0; i < n; i++) {
        e[i].isLayoutInstant = !0;
      }

      for (this.arrange(), i = 0; i < n; i++) {
        delete e[i].isLayoutInstant;
      }

      this.reveal(s);
    }
  };
  var c = l.remove;
  return l.remove = function (t) {
    t = n.makeArray(t);
    var e = this.getItems(t);
    c.call(this, t);

    for (var i = e && e.length, o = 0; i && o < i; o++) {
      var s = e[o];
      n.removeFrom(this.filteredItems, s);
    }
  }, l.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      var e = this.items[t];
      e.sortData.random = Math.random();
    }

    this.options.sortBy = "random", this._sort(), this._layout();
  }, l._noTransition = function (t, e) {
    var i = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var o = t.apply(this, e);
    return this.options.transitionDuration = i, o;
  }, l.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, d;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;

        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);

          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});
"use strict";

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function (l, o, e) {
  "use strict";

  l.fn.scrollUp = function (o) {
    l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }, l.fn.scrollUp.init = function (r) {
    var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
        f = !1;

    switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
      id: p.scrollName,
      href: "#top"
    }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
      display: "none",
      position: "fixed",
      zIndex: p.zIndex
    }), p.activeOverlay && l("<div/>", {
      id: p.scrollName + "-active"
    }).css({
      position: "absolute",
      top: p.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + p.activeOverlay,
      zIndex: p.zIndex
    }).appendTo("body"), p.animation) {
      case "fade":
        s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
        break;

      case "slide":
        s = "slideDown", t = "slideUp", c = p.animationSpeed;
        break;

      default:
        s = "show", t = "hide", c = 0;
    }

    i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
      l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1);
    }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
      o.preventDefault(), l("html, body").animate({
        scrollTop: a
      }, p.scrollSpeed, p.easingType);
    });
  }, l.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationSpeed: 200,
    scrollTrigger: !1,
    scrollTarget: !1,
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, l.fn.scrollUp.destroy = function (r) {
    l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r);
  }, l.scrollUp = l.fn.scrollUp;
}(jQuery, window, document);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
!function (e, t, n) {
  function a(t, n) {
    this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init();
  }

  var i = {
    label: "MENU",
    duplicate: !0,
    duration: 200,
    easingOpen: "swing",
    easingClose: "swing",
    closedSymbol: "&#9658;",
    openedSymbol: "&#9660;",
    prependTo: "body",
    appendTo: "",
    parentTag: "a",
    closeOnClick: !1,
    allowParentLinks: !1,
    nestedParentLinks: !0,
    showChildren: !1,
    removeIds: !0,
    removeClasses: !1,
    removeStyles: !1,
    brand: "",
    animations: "jquery",
    init: function init() {},
    beforeOpen: function beforeOpen() {},
    beforeClose: function beforeClose() {},
    afterOpen: function afterOpen() {},
    afterClose: function afterClose() {}
  },
      s = "slicknav",
      o = "slicknav",
      l = {
    DOWN: 40,
    ENTER: 13,
    ESCAPE: 27,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
  a.prototype.init = function () {
    var n,
        a,
        i = this,
        s = e(this.element),
        r = this.settings;

    if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("id");
    })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("class");
    })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("style");
    })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
      var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
      e(a).append(c);
    }

    i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
    var p = i.mobileNav.find("li");
    e(p).each(function () {
      var t = e(this),
          n = {};

      if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
        var a = t.contents(),
            s = !1,
            l = [];
        e(a).each(function () {
          return e(this).is("ul") ? !1 : (l.push(this), void (e(this).is("a") && (s = !0)));
        });
        var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
        if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();else {
          var p = e(l).wrapAll(c).parent();
          p.addClass(o + "_row");
        }
        r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
        var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
        r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");

      t.children("a").attr("role", "menuitem").click(function (t) {
        r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click();
      }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function (t) {
        e(i.btn).click();
      }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) {
        e(i.btn).click();
      }));
    }), e(p).each(function () {
      var t = e(this).data("menu");
      r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
    }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function () {
      i._outlines(!1);
    }), e(t).keyup(function () {
      i._outlines(!0);
    }), e(i.btn).click(function (e) {
      e.preventDefault(), i._menuToggle();
    }), i.mobileNav.on("click", "." + o + "_item", function (t) {
      t.preventDefault(), i._itemClick(e(this));
    }), e(i.btn).keydown(function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
        case l.SPACE:
        case l.DOWN:
          t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", "." + o + "_item", function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
          t.preventDefault(), i._itemClick(e(t.target));
          break;

        case l.RIGHT:
          t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.DOWN:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              r = s + 1;
          a.length <= r && (r = 0);
          var c = a.eq(r);
          c.focus();
          break;

        case l.UP:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              c = a.eq(s - 1);
          c.focus();
          break;

        case l.LEFT:
          if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
            var p = e(t.target).parent().parent().prev();
            p.focus(), i._itemClick(p);
          } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());

          break;

        case l.ESCAPE:
          t.preventDefault(), i._menuToggle(), e(i.btn).focus();
      }
    }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function (e) {
      e.stopImmediatePropagation();
    });
  }, a.prototype._menuToggle = function (e) {
    var t = this,
        n = t.btn,
        a = t.mobileNav;
    n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n);
  }, a.prototype._itemClick = function (e) {
    var t = this,
        n = t.settings,
        a = e.data("menu");
    a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e));
  }, a.prototype._visibilityToggle = function (t, n, a, i, s) {
    function l(t, n) {
      e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t);
    }

    function r(n, a) {
      t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n);
    }

    var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;

    a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
      l(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
      duration: u,
      easing: p.easingOpen,
      complete: function complete() {
        l(i, n);
      }
    }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
      r(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
      duration: u,
      easing: p.easingClose,
      complete: function complete() {
        r(i, n);
      }
    }));
  }, a.prototype._setVisAttr = function (t, n) {
    var a = this,
        i = t.children("li").children("ul").not("." + o + "_hidden");
    n ? i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "true");

      var i = a._getActionItems(t);

      i.attr("tabindex", "-1"), a._setVisAttr(t, n);
    }) : i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "false");

      var i = a._getActionItems(t);

      i.attr("tabindex", "0"), a._setVisAttr(t, n);
    });
  }, a.prototype._getActionItems = function (e) {
    var t = e.data("menu");

    if (!t) {
      t = {};
      var n = e.children("li"),
          a = n.find("a");
      t.links = a.add(n.find("." + o + "_item")), e.data("menu", t);
    }

    return t.links;
  }, a.prototype._outlines = function (t) {
    t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
  }, a.prototype.toggle = function () {
    var e = this;

    e._menuToggle();
  }, a.prototype.open = function () {
    var e = this;
    e.btn.hasClass(o + "_collapsed") && e._menuToggle();
  }, a.prototype.close = function () {
    var e = this;
    e.btn.hasClass(o + "_open") && e._menuToggle();
  }, e.fn[s] = function (t) {
    var n = arguments;
    if (void 0 === t || "object" == _typeof(t)) return this.each(function () {
      e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t));
    });

    if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
      var i;
      return this.each(function () {
        var o = e.data(this, "plugin_" + s);
        o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
      }), void 0 !== i ? i : this;
    }
  };
}(jQuery, document, window);
"use strict";

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
          n = t.find("option"),
          i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
            i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }

    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
          n = e(this).next(".nice-select"),
          i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function () {
      var t = e(this),
          s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
          n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;

      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g--;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
    }
  }], e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
    }

    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {
        ;
      }

      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
          this.load(b);
        }, this); f++ < e;) {
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.$stage.children().toArray().slice(b, c),
        e = [],
        f = 0;

    a.each(d, function (b, c) {
      e.push(a(c).height());
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(a) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
    };

    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function (a, b) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
    }, this), d || this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout();
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && (this._paused = !0);
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
"use strict";

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(void 0, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    var o = e && e.offsetParent,
        i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }

  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = o ? e : t,
        n = o ? t : e,
        a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        i = e.nodeName;

    if ('BODY' === i || 'HTML' === i) {
      var n = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || n;
      return r[o];
    }

    return e[o];
  }

  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(t, 'top'),
        n = a(t, 'left'),
        r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }

  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
  }

  function m(e, t, o, i) {
    return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }

  function h() {
    var e = document.body,
        t = document.documentElement,
        o = ie() && getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    };
  }

  function c(e) {
    return se({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function g(e) {
    var o = {};
    if (ie()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
          n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        p = 'HTML' === e.nodeName ? h() : {},
        s = p.width || e.clientWidth || r.right - r.left,
        d = p.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        m = e.offsetHeight - d;

    if (l || m) {
      var g = t(e);
      l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }

    return c(r);
  }

  function u(e, o) {
    var i = ie(),
        r = 'HTML' === o.nodeName,
        p = g(e),
        s = g(o),
        d = n(e),
        a = t(o),
        f = parseFloat(a.borderTopWidth, 10),
        m = parseFloat(a.borderLeftWidth, 10),
        h = c({
      top: p.top - s.top - f,
      left: p.left - s.left - m,
      width: p.width,
      height: p.height
    });

    if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
      var u = parseFloat(a.marginTop, 10),
          b = parseFloat(a.marginLeft, 10);
      h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
    }

    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h;
  }

  function b(e) {
    var t = e.ownerDocument.documentElement,
        o = u(e, t),
        i = J(t.clientWidth, window.innerWidth || 0),
        n = J(t.clientHeight, window.innerHeight || 0),
        r = a(t),
        p = a(t, 'left'),
        s = {
      top: r - o.top + o.marginTop,
      left: p - o.left + o.marginLeft,
      width: i,
      height: n
    };
    return c(s);
  }

  function w(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }

  function y(e, t, i, r) {
    var p = {
      top: 0,
      left: 0
    },
        s = d(e, t);
    if ('viewport' === r) p = b(s);else {
      var a;
      'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;
      var l = u(a, s);

      if ('HTML' === a.nodeName && !w(s)) {
        var f = h(),
            m = f.height,
            c = f.width;
        p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left;
      } else p = l;
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }

  function E(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = y(o, i, r, n),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return se({
        key: e
      }, s[e], {
        area: E(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          i = e.height;
      return t >= o.clientWidth && i >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function O(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }

  function L(e) {
    var t = getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        n = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + o
    };
    return n;
  }

  function x(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function S(e, t, o) {
    o = o.split('-')[0];
    var i = L(e),
        n = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n;
  }

  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function D(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }

  function C(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));
    return n.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t['function'] || t.fn;
      t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
    }), o;
  }

  function N() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function k(e, t) {
    return e.some(function (e) {
      var o = e.name,
          i = e.enabled;
      return i && o === t;
    });
  }

  function W(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function P() {
    return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function B(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function H(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || H(n(p.parentNode), t, o, i), i.push(p);
  }

  function A(e, t, o, i) {
    o.updateBound = i, B(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function I() {
    this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function M(e, t) {
    return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function R() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }

  function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order;
    });

    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return n;
  }

  function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function q(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ae.indexOf(e),
        i = ae.slice(o + 1).concat(ae.slice(0, o));
    return t ? i.reverse() : i;
  }

  function V(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +n[1],
        p = n[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = i;
      }

      var d = c(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function z(e, t, o, i) {
    var n = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(T(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }

  function G(e, t) {
    var o,
        i = t.offset,
        n = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = n.split('-')[0];
    return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) {
    if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
      $ = 1;
      break;
    }
  }

  var i,
      te = Q && window.Promise,
      oe = te ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, $));
    };
  },
      ie = function ie() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
  },
      ne = function ne(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      re = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, i) {
      return o && e(t.prototype, o), i && e(t, i), t;
    };
  }(),
      pe = function pe(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      se = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var i in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
    }

    return e;
  },
      de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ae = de.slice(3),
      le = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      fe = function () {
    function t(o, i) {
      var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      ne(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return se({
          name: e
        }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return re(t, [{
      key: 'update',
      value: function value() {
        return N.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return P.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return R.call(this);
      }
    }]), t;
  }();

  return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = t.split('-')[1];

          if (i) {
            var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: pe({}, d, r[d]),
              end: pe({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = se({}, p, l[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: G,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = y(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
              p = e.offsets.popper,
              s = {
            primary: function primary(e) {
              var o = p[e];
              return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
              return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
            }
          };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = se({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split('-')[0],
              r = X,
              p = -1 !== ['top', 'bottom'].indexOf(n),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var i;
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var n = o.element;

          if ('string' == typeof n) {
            if (n = e.instance.popper.querySelector(n), !n) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              g = a ? 'bottom' : 'right',
              u = L(n)[l];
          d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;
          return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (k(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
              i = e.placement.split('-')[0],
              n = x(i),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case le.FLIP:
              p = [i, n];
              break;

            case le.CLOCKWISE:
              p = q(i);
              break;

            case le.COUNTERCLOCKWISE:
              p = q(i, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = x(i);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = X,
                m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                w = -1 !== ['top', 'bottom'].indexOf(i),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);
            (m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = {
            position: n.position
          },
              h = {
            left: X(n.left),
            top: X(n.top),
            bottom: X(n.bottom),
            right: X(n.right)
          },
              c = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === i ? 'left' : 'right',
              b = W('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == u ? -1 : 1;
            m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, i, n) {
          var r = O(n, t, e),
              p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), Y(t, {
            position: 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, fe;
});
"use strict";

/**
 * ScrollIt
 * ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 *
 * Latest version: https://github.com/cmpolis/scrollIt.js
 *
 * License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
 */
(function ($) {
  'use strict';

  var pluginName = 'ScrollIt',
      pluginVersion = '1.0.3';
  /*
   * OPTIONS
   */

  var defaults = {
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: 0
  };

  $.scrollIt = function (options) {
    /*
     * DECLARATIONS
     */
    var settings = $.extend(defaults, options),
        active = 0,
        lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');
    /*
     * METHODS
     */

    /**
     * navigate
     *
     * sets up navigation animation
     */

    var navigate = function navigate(ndx) {
      if (ndx < 0 || ndx > lastIndex) return;
      var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
      $('html,body').animate({
        scrollTop: targetTop,
        easing: settings.easing
      }, settings.scrollTime);
    };
    /**
     * doScroll
     *
     * runs navigation() when criteria are met
     */


    var doScroll = function doScroll(e) {
      var target = $(e.target).closest("[data-scroll-nav]").attr('data-scroll-nav') || $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
      navigate(parseInt(target));
    };
    /**
     * keyNavigation
     *
     * sets up keyboard navigation behavior
     */


    var keyNavigation = function keyNavigation(e) {
      var key = e.which;

      if ($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
        return false;
      }

      if (key == settings.upKey && active > 0) {
        navigate(parseInt(active) - 1);
        return false;
      } else if (key == settings.downKey && active < lastIndex) {
        navigate(parseInt(active) + 1);
        return false;
      }

      return true;
    };
    /**
     * updateActive
     *
     * sets the currently active item
     */


    var updateActive = function updateActive(ndx) {
      if (settings.onPageChange && ndx && active != ndx) settings.onPageChange(ndx);
      active = ndx;
      $('[data-scroll-nav]').removeClass(settings.activeClass);
      $('[data-scroll-nav=' + ndx + ']').addClass(settings.activeClass);
    };
    /**
     * watchActive
     *
     * watches currently active item and updates accordingly
     */


    var watchActive = function watchActive() {
      var winTop = $(window).scrollTop();
      var visible = $('[data-scroll-index]').filter(function (ndx, div) {
        return winTop >= $(div).offset().top + settings.topOffset && winTop < $(div).offset().top + settings.topOffset + $(div).outerHeight();
      });
      var newActive = visible.first().attr('data-scroll-index');
      updateActive(newActive);
    };
    /*
     * runs methods
     */


    $(window).on('scroll', watchActive).scroll();
    $(window).on('keydown', keyNavigation);
    $('body').on('click', '[data-scroll-nav], [data-scroll-goto]', function (e) {
      e.preventDefault();
      doScroll(e);
    });
  };
})(jQuery);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
"use strict";

// Generated by CoffeeScript 1.6.2

/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  },
      e = [].slice;

  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";

    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;

          if (!(e.didScroll || c)) {
            e.didScroll = true;

            t = function t() {
              e.doScroll();
              return e.didScroll = false;
            };

            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;

          if (!e.didResize) {
            e.didResize = true;

            t = function t() {
              n[m]("refresh");
              return e.didResize = false;
            };

            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }

      t.prototype.doScroll = function () {
        var t,
            e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };

        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }

        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;

            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });

          if (!o) {
            l.reverse();
          }

          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        };
      };

      t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];

            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);

              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }

            r.offset = o - e.contextOffset + e.contextScroll - i;

            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }

            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };

      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };

      return t;
    }();

    l = function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);

        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");

            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }

            return t - n(this).outerHeight();
          };
        }

        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }

        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }

        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      t.prototype.disable = function () {
        return this.enabled = false;
      };

      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true;
      };

      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);

        if (!r) {
          return [];
        }

        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };

      return t;
    }();

    d = {
      init: function init(t, e) {
        var r;

        if (e == null) {
          e = {};
        }

        if ((r = e.handler) == null) {
          e.handler = t;
        }

        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;

          if (!n.isWindow(i)) {
            i = t.closest(i);
          }

          i = n(i);
          r = a[i.data(u)];

          if (!r) {
            r = new o(i);
          }

          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function disable() {
        return d._invoke(this, "disable");
      },
      enable: function enable() {
        return d._invoke(this, "enable");
      },
      destroy: function destroy() {
        return d._invoke(this, "destroy");
      },
      prev: function prev(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function next(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function _traverse(t, e, i) {
        var o, l;

        if (t == null) {
          t = "vertical";
        }

        if (e == null) {
          e = r;
        }

        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function _invoke(t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      }
    };

    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };

    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function refresh() {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function viewportHeight() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function aggregate(t) {
        var e, r, i;
        e = s;

        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }

        if (!e) {
          return [];
        }

        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return r[t] = n.unique(r[t]);
        });
        return r;
      },
      above: function above(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function below(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function left(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function right(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function enable() {
        return h._invoke("enable");
      },
      disable: function disable() {
        return h._invoke("disable");
      },
      destroy: function destroy() {
        return h._invoke("destroy");
      },
      extendFn: function extendFn(t, e) {
        return d[t] = e;
      },
      _invoke: function _invoke(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function _filter(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];

        if (!i) {
          return [];
        }

        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      }
    };

    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };

    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(void 0);
"use strict";

/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
  var a,
      b,
      c,
      d,
      e,
      f = function f(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  },
      g = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  b = function () {
    function a() {}

    return a.prototype.extend = function (a, b) {
      var c, d;

      for (c in b) {
        d = b[c], null == a[c] && (a[c] = d);
      }

      return a;
    }, a.prototype.isMobile = function (a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
    function a() {
      this.keys = [], this.values = [];
    }

    return a.prototype.get = function (a) {
      var b, c, d, e, f;

      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {
        if (c = f[b], c === a) return this.values[b];
      }
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;

      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {
        if (d = g[c], d === a) return void (this.values[c] = b);
      }

      return this.keys.push(a), this.values.push(b);
    }, a;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }

    return a.notSupported = !0, a.prototype.observe = function () {}, a;
  }()), d = this.getComputedStyle || function (a, b) {
    return this.getPropertyValue = function (b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase();
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
    }, this;
  }, e = /(\-([a-z]){1})/g, this.WOW = function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    }, e.prototype.init = function () {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, e.prototype.start = function () {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function () {
        var a, c, d, e;

        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }

        return e;
      }.call(this), this.all = function () {
        var a, c, d, e;

        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }

        return e;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) {
        b = e[c], this.applyStyle(b, !0);
      }
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
        return function (b) {
          var c, d, e, f, g;

          for (g = [], c = 0, d = b.length; d > c; c++) {
            f = b[c], g.push(function () {
              var a, b, c, d;

              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) {
                e = c[a], d.push(this.doSync(e));
              }

              return d;
            }.call(a));
          }

          return g;
        };
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0;
    }, e.prototype.stop = function () {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, e.prototype.sync = function (b) {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;

      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) {
          b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        }

        return f;
      }
    }, e.prototype.show = function (a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a;
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, e.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    }(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;

      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
        a = d[b], e.push(a.style.visibility = "visible");
      }

      return e;
    }, e.prototype.resetAnimation = function (a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a;
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;
      d = [];

      for (c in b) {
        e = b[c], a["" + c] = e, d.push(function () {
          var b, d, g, h;

          for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) {
            f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
          }

          return h;
        }.call(this));
      }

      return d;
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;

      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) {
        i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      }

      return g;
    }, e.prototype.animationName = function (a) {
      var b;

      try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = d(a).getPropertyValue("animation-name");
      }

      return "none" === b ? "" : b;
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, e.prototype.scrollCallback = function () {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;

        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
          a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        }

        return e;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) {
        a = a.parentNode;
      }

      for (b = a.offsetTop; a = a.offsetParent;) {
        b += a.offsetTop;
      }

      return b;
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b();
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e;
  }();
}).call(void 0);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : void 0, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;

      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }

      for (b in a) {
        ;
      }

      return void 0 === b || k.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (h) return h.call(b, a, c);

        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;

      while (c > d) {
        a[e++] = b[d++];
      }

      if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
    },
    now: function now() {
      return +new Date();
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) {
              r[h] = l + " " + qa(r[h]);
            }

            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ha(a) {
      return a[u] = !0, a;
    }

    function ia(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = la(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    function pa() {}

    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
            if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }

      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }

      return g;
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }

          m.push(c);
        }
      }

      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }
            u = ua(u);
          }

          H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ha(f) : f;
    }

    return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, xa(e, d)), f.selector = a;
      }

      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));

      for (b = 0; e > b; b++) {
        n.find(a, d[b], c);
      }

      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      if (f = d.getElementById(e[2]), f && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        this.length = 1, this[0] = f;
      }

      return this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
      E = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function F(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return F(a, "nextSibling");
    },
    prev: function prev(a) {
      return F(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = !0, c || j.disable(), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }

  function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }

  n.ready.promise = function (b) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
      var c = !1;

      try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}

      c && c.doScroll && !function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }

          J(), n.ready();
        }
      }();
    }
    return I.promise(b);
  }, n.ready.promise();
  var L;

  for (L in n(l)) {
    break;
  }

  l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;
    c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");
    l.deleteExpando = !0;

    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }

    a = null;
  }();

  var M = function M(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;

  function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();

      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}

        n.data(a, b, c);
      } else c = void 0;
    }

    return c;
  }

  function Q(a) {
    var b;

    for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }

    return !0;
  }

  function R(a, b, d, e) {
    if (M(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != _typeof(b) && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
    }
  }

  function S(a, b, c) {
    if (M(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;

      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;

          while (e--) {
            delete d[b[e]];
          }

          if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }

        (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }

  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
    },
    data: function data(a, b, c) {
      return R(a, b, c);
    },
    removeData: function removeData(a, b) {
      return S(a, b);
    },
    _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }

          n._data(f, "parsedAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? P(f, a, n.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  }), function () {
    var a;

    l.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, e;
      return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();

  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function W(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function X(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var Y = function Y(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        Y(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ca(a) {
    var b = ba.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  !function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();
  var da = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

  function ea(a, b) {
    var c,
        d,
        e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    }
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }

  function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }

  var ga = /<|&#?\w+;/,
      ha = /<tbody/i;

  function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }

  function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
      if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];

        while (f--) {
          i = i.lastChild;
        }

        if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;

          while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }

        n.merge(q, i.childNodes), i.textContent = "";

        while (i.firstChild) {
          i.removeChild(i.firstChild);
        }

        i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }

    i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;

    while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
        f = 0;

        while (g = i[f++]) {
          _.test(g.type || "") && c.push(g);
        }
      }
    }

    return i = null, p;
  }

  !function () {
    var b,
        c,
        e = d.createElement("div");

    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    }

    e = null;
  }();
  var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;

  function pa() {
    return !0;
  }

  function qa() {
    return !1;
  }

  function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function sa(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        sa(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);

      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;

        while (h--) {
          f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }

        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);

      if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;

        while (j--) {
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;

            while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }

            i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }

          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }

        o = 0;

        while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        }

        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;

          try {
            e[q]();
          } catch (s) {}

          n.event.triggered = void 0, m && (e[h] = m);
        }

        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) {
        c = e[b], a[c] = g[c];
      }

      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: qa,
    isPropagationStopped: qa,
    isImmediatePropagationStopped: qa,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), l.submit || (n.event.special.submit = {
    setup: function setup() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function teardown() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
    }
  }), l.change || (n.event.special.change = {
    setup: function setup() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function teardown() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName);
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);

        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));

  function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }

  function Ea(a) {
    var b = ya.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;

      if (h) {
        delete g.handle, g.events = {};

        for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }

      g.data && (g.data = n.extend({}, g.data));
    }
  }

  function Ga(a, b) {
    var c, d, e;

    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);

        for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }

        b.removeAttribute(n.expando);
      }

      "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }

  function Ha(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });

    if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      }

      if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
        g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      }
      k = e = null;
    }

    return a;
  }

  function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ga(e, d[g]);
      }
      if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
        Fa(e, d[g]);
      } else Fa(a, f);
      return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }
          j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    }
  }), n.fn.extend({
    domManip: Ha,
    detach: function detach(a) {
      return Ia(this, a, !0);
    },
    remove: function remove(a) {
      return Ia(this, a);
    },
    text: function text(a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return Y(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;

        if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ha(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }

      return this.pushStack(e);
    };
  });
  var Ja,
      Ka = {
    HTML: "block",
    BODY: "block"
  };

  function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function Ma(a) {
    var b = d,
        c = Ka[a];
    return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }

  var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function Pa(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  },
      Qa = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");

    if (j.style) {
      var _k = function _k() {
        var k,
            l,
            m = d.documentElement;
        m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
          width: "4px"
        }).width, j.style.marginRight = "50%", c = "4px" === (l || {
          marginRight: "4px"
        }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };

      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
        reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        },
        pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        },
        reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        }
      });
    }
  }();
  var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });

  function Ua(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      $a = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;

  function bb(a) {
    if (a in ab) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;

    while (c--) {
      if (a = _a[c] + b, a in ab) return a;
    }
  }

  function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  function db(a, b, c) {
    var d = Ya.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    }

    return g;
  }

  function fb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);

    if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e = d && Ra(a);
        return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), l.opacity || (n.cssHooks.opacity = {
    get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    }
  }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, {
      display: "inline-block"
    }, Sa, [a, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Na.test(a) || (n.cssHooks[a + b].set = db);
  }), n.fn.extend({
    css: function css(a, b) {
      return Y(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return cb(this, !0);
    },
    hide: function hide() {
      return cb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }

  n.Tween = gb, gb.prototype = {
    constructor: gb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = gb.propHooks[this.prop];
      return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = gb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    }
  }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = gb.prototype.init, n.fx.step = {};
  var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;

  function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = n.now();
  }

  function mb(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;

    for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = V[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");

    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }

        o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;

        n._removeData(a, "fxshow");

        for (b in o) {
          n.style(a, b, o[b]);
        }
      });

      for (d in o) {
        g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function pb(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function qb(a, b, c) {
    var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: hb || lb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (pb(k, j.opts.specialEasing); g > f; f++) {
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }

    return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(qb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return X(c.elem, a, U.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
      }
    },
    prefilters: [ob],
    prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = qb(this, n.extend({}, a), f);
        (e || n._data(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);

        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && kb.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        !b && c || n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: mb("show"),
    slideUp: mb("hide"),
    slideToggle: mb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;

    for (hb = n.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }

    b.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();
  var rb = /\r/g,
      sb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }

          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var tb,
      ub,
      vb = n.expr.attrHandle,
      wb = /^(?:checked|selected)$/i,
      xb = l.getSetAttribute,
      yb = l.input;
  n.fn.extend({
    attr: function attr(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
      }
    }
  }), ub = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;
    yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;
      return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), yb && xb || (n.attrHooks.value = {
    set: function set(a, b, c) {
      return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
    }
  }), xb || (tb = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    }
  }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0;
    },
    set: tb.set
  }, n.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c);
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      }
    };
  })), l.style || (n.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var zb = /^(?:input|select|textarea|button|object)$/i,
      Ab = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), n.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), l.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    },
    set: function set(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Bb = /[\t\r\n\f]/g;

  function Cb(a) {
    return n.attr(a, "class") || "";
  }

  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Db = a.location,
      Eb = n.now(),
      Fb = /\?/,
      Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
        d = null,
        e = n.trim(b + "");
    return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;

    try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }

    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var Hb = /#.*$/,
      Ib = /([?&])_=[^&]*/,
      Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Lb = /^(?:GET|HEAD)$/,
      Mb = /^\/\//,
      Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ob = {},
      Pb = {},
      Qb = "*/".concat("*"),
      Rb = Db.href,
      Sb = Nb.exec(Rb.toLowerCase()) || [];

  function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Ub(a, b, c, d) {
    var e = {},
        f = a === Pb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Vb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }

    return c && n.extend(!0, a, c), a;
  }

  function Wb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }

        d || (d = g);
      }

      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Xb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Rb,
      type: "GET",
      isLocal: Kb.test(Sb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Qb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    },
    ajaxPrefilter: Tb(Ob),
    ajaxTransport: Tb(Pb),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === u) {
            if (!k) {
              k = {};

              while (b = Jb.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }

            b = k[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return u || (a = t[c] = t[c] || a, s[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > u) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || v;
          return j && j.abort(b), y(0, b), this;
        }
      };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);

      for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }

      if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
      v = "abort";

      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[e](l[e]);
      }

      if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));

        try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;
          y(-1, x);
        }
      } else y(-1, "No Transport");

      function y(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }

      return w;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  });

  function Yb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }

  function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;

    while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var $b = /%20/g,
      _b = /\[\]$/,
      ac = /\r?\n/g,
      bc = /^(?:submit|button|image|reset|file)$/i,
      cc = /^(?:input|select|textarea|keygen)/i;

  function dc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      dc(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      dc(c, a[c], b, e);
    }
    return d.join("&").replace($b, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(ac, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(ac, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;
  var ec = 0,
      fc = {},
      gc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) {
      fc[a](void 0, !0);
    }
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;

      return {
        send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++ec;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");

          for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }

          g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;
            if (_c && (d || 4 === g.readyState)) if (delete fc[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);

              try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }

              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = fc[h] = _c : _c();
        },
        abort: function abort() {
          _c && _c(void 0, !0);
        }
      };
    }
  });

  function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var jc = [],
      kc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = jc.pop() || n.expando + "_" + Eb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var lc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = {
        top: 0,
        left: 0
      },
          e = this[0],
          f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = {
          top: 0,
          left: 0
        },
            d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Qa;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);

    n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Y(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });
  var nc = a.jQuery,
      oc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function o() {
    var e, t, n, o, i, s, a;

    for (var l in C) {
      if (C.hasOwnProperty(l)) {
        if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) {
          s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"));
        }
      }
    }
  }

  function i(e) {
    var t = S.className,
        n = Modernizr._config.classPrefix || "";

    if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? S.className.baseVal = t : S.className = t);
  }

  function s(e, t) {
    if ("object" == _typeof(e)) for (var n in e) {
      P(e, n) && s(n, e[n]);
    } else {
      e = e.toLowerCase();
      var r = e.split("."),
          o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t);
    }
    return Modernizr;
  }

  function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function l() {
    var e = t.body;
    return e || (e = a(x ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, n, r, o) {
    var i,
        s,
        u,
        f,
        d = "modernizr",
        c = a("div"),
        p = l();
    if (parseInt(r, 10)) for (; r--;) {
      u = a("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
    }
    return i = a("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = S.style.overflow, S.style.overflow = "hidden", S.appendChild(p)), s = n(c, e), p.fake ? (p.parentNode.removeChild(p), S.style.overflow = f, S.offsetHeight) : c.parentNode.removeChild(c), !!s;
  }

  function f(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function c(t, n, r) {
    var o;

    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];

    return o;
  }

  function p(t, r) {
    var o = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(d(t[o]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) {
        i.push("(" + d(t[o]) + ":" + r + ")");
      }

      return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == c(e, null, "position");
      });
    }

    return n;
  }

  function m(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function h(e, t, o, i) {
    function s() {
      u && (delete N.style, delete N.modElem);
    }

    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = p(e, o);
      if (!r(l, "undefined")) return l;
    }

    for (var u, d, c, h, v, A = ["modernizr", "tspan", "samp"]; !N.style && A.length;) {
      u = !0, N.modElem = a(A.shift()), N.style = N.modElem.style;
    }

    for (c = e.length, d = 0; c > d; d++) {
      if (h = e[d], v = N.style[h], f(h, "-") && (h = m(h)), N.style[h] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? h : !0;

        try {
          N.style[h] = o;
        } catch (g) {}

        if (N.style[h] != v) return s(), "pfx" == t ? h : !0;
      }
    }

    return s(), !1;
  }

  function v(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function A(e, t, n) {
    var o;

    for (var i in e) {
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? v(o, n || t) : o);
    }

    return !1;
  }

  function g(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + O.join(s + " ") + s).split(" ");
    return r(t, "string") || r(t, "undefined") ? h(a, t, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), A(a, t, n));
  }

  function y(e, t, r) {
    return g(e, n, n, t, r);
  }

  var C = [],
      b = {
    _version: "3.5.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      C.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      C.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = b, Modernizr = new Modernizr();
  var w = [],
      S = t.documentElement,
      x = "svg" === S.nodeName.toLowerCase(),
      _ = "Moz O ms Webkit",
      T = b._config.usePrefixes ? _.toLowerCase().split(" ") : [];
  b._domPrefixes = T;
  var E = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  b._prefixes = E;
  var P;
  !function () {
    var e = {}.hasOwnProperty;
    P = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), b._l = {}, b.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, b._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e, r;

        for (e = 0; e < n.length; e++) {
          (r = n[e])(t);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    b.addTest = s;
  });

  var k = function () {
    function e(e, t) {
      var o;
      return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1;
    }

    var r = !("onblur" in t.documentElement);
    return e;
  }();

  b.hasEvent = k;

  var z = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1;
    } : function (t) {
      var n = !1;
      return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
      }), n;
    };
  }();

  b.mq = z;

  var B = function B(e, t) {
    var n = !1,
        r = a("div"),
        o = r.style;

    if (e in o) {
      var i = T.length;

      for (o[e] = t, n = o[e]; i-- && !n;) {
        o[e] = "-" + T[i] + "-" + t, n = o[e];
      }
    }

    return "" === n && (n = !1), n;
  };

  b.prefixedCSSValue = B;
  var O = b._config.usePrefixes ? _.split(" ") : [];
  b._cssomPrefixes = O;
  var L = {
    elem: a("modernizr")
  };

  Modernizr._q.push(function () {
    delete L.elem;
  });

  var N = {
    style: L.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style;
  }), b.testAllProps = g, b.testAllProps = y;
  b.testProp = function (e, t, r) {
    return h([e], n, t, r);
  }, b.testStyles = u;
  Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function () {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
  }), Modernizr.addTest("pointerevents", function () {
    var e = !1,
        t = T.length;

    for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) {
      k(T[t] + "pointerdown") && (e = !0);
    }

    return e;
  }), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("webgl", function () {
    var t = a("canvas"),
        n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
    return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e;
  });
  var R = !1;

  try {
    R = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
  } catch (j) {}

  Modernizr.addTest("websockets", R), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), function () {
    Modernizr.addTest("csscolumns", function () {
      var e = !1,
          t = y("columnCount");

      try {
        e = !!t, e && (e = new Boolean(e));
      } catch (n) {}

      return e;
    });

    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) {
      e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t);
    }
  }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addAsyncTest(function () {
    var e,
        t,
        n,
        r = a("img"),
        o = ("sizes" in r);
    !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function n() {
      s("sizes", 2 == r.width);
    }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o);
  }), Modernizr.addTest("srcset", "srcset" in a("img")), Modernizr.addTest("webworkers", "Worker" in e), o(), i(w), delete b.addTest, delete b.addAsyncTest;

  for (var M = 0; M < Modernizr._q.length; M++) {
    Modernizr._q[M]();
  }

  e.Modernizr = Modernizr;
}(window, document);
//# sourceMappingURL=all.js.map
