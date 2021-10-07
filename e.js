!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r = document.querySelector(".profile"),
      o = r.querySelector(".profile__edit-button_type_avatar"),
      i = r.querySelector(".profile__edit-button_type_profile"),
      u = r.querySelector(".profile__add-button"),
      a = document.querySelector(".popup_type_edit-avatar"),
      c = document.querySelector(".popup_type_edit-profile"),
      l = document.querySelector(".popup_type_add-card"),
      s = a.querySelector(".popup__submit-button"),
      f = c.querySelector(".popup__submit-button"),
      p = l.querySelector(".popup__submit-button"),
      h = document.querySelector(".popup__input_type_name"),
      _ = document.querySelector(".popup__input_type_job"),
      d = document.querySelector(".popup__input_type_place"),
      y = document.querySelector(".popup__input_type_link"),
      m = {
        inputSelector: ".popup__input",
        submitButtonSelector: ".popup__submit-button",
        inactiveButtonClass: "popup__submit-button_inactive",
        inputErrorClass: "popup__input_type_error",
        errorClass: "popup__input-error_active",
      },
      v = function (e) {
        console.log(e);
      },
      b = function (e, t) {
        e.textContent = t ? "Сохранение..." : "Сохранить";
      };
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var S = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._url = t.url),
          (this._headers = t.headers);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "_handlePromiseRes",
            value: function (e) {
              return e.ok
                ? e.json()
                : Promise.reject("Ошибка: ".concat(e.status));
            },
          },
          {
            key: "getUserData",
            value: function () {
              var e = this;
              return fetch("".concat(this._url, "/users/me"), {
                headers: this._headers,
              }).then(function (t) {
                return e._handlePromiseRes(t);
              });
            },
          },
          {
            key: "getInitialCards",
            value: function () {
              var e = this;
              return fetch("".concat(this._url, "/cards"), {
                headers: this._headers,
              }).then(function (t) {
                return e._handlePromiseRes(t);
              });
            },
          },
          {
            key: "patchUserProfile",
            value: function (e) {
              var t = this,
                n = e.name,
                r = e.about;
              return fetch("".concat(this._url, "/users/me"), {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({ name: n, about: r }),
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
          {
            key: "patchUserAvatar",
            value: function (e) {
              var t = this,
                n = e.avatar;
              return fetch("".concat(this._url, "/users/me/avatar"), {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({ avatar: n }),
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
          {
            key: "addNewCard",
            value: function (e) {
              var t = this,
                n = e.name,
                r = e.link;
              return fetch("".concat(this._url, "/cards"), {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({ name: n, link: r }),
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
          {
            key: "deleteCard",
            value: function (e) {
              var t = this,
                n = e._id;
              return fetch("".concat(this._url, "/cards/").concat(n), {
                method: "DELETE",
                headers: this._headers,
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
          {
            key: "likeCard",
            value: function (e) {
              var t = this,
                n = e._id;
              return fetch("".concat(this._url, "/cards/likes/").concat(n), {
                method: "PUT",
                headers: this._headers,
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
          {
            key: "unlikeCard",
            value: function (e) {
              var t = this,
                n = e._id;
              return fetch("".concat(this._url, "/cards/likes/").concat(n), {
                method: "DELETE",
                headers: this._headers,
              }).then(function (e) {
                return t._handlePromiseRes(e);
              });
            },
          },
        ]) && k(t.prototype, n),
        r && k(t, r),
        e
      );
    })();
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var C = (function () {
      function e(t, n) {
        var r = t.renderer;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._renderer = r),
          (this._container = document.querySelector(n));
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "renderItems",
            value: function (e) {
              var t = this;
              e.forEach(function (e) {
                t._renderer(e);
              });
            },
          },
          {
            key: "addItem",
            value: function (e) {
              this._container.prepend(e);
            },
          },
        ]) && g(t.prototype, n),
        r && g(t, r),
        e
      );
    })();
    function w(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var E = (function () {
      function e(t, n) {
        var r = t.name,
          o = t.link,
          i = t.likes,
          u = t._id,
          a = t.owner,
          c = t.cardSelector,
          l = t.handleCardClick,
          s = t.handleLikeClick,
          f = t.handleDeleteClick;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._title = r),
          (this._image = o),
          (this._likes = i),
          (this._id = u),
          (this._owner = a),
          (this._userId = n),
          (this._cardSelector = c),
          (this._handleCardClick = l),
          (this._handleLikeClick = s),
          (this._handleDeleteClick = f);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "_getTemplate",
            value: function () {
              return document
                .querySelector(this._cardSelector)
                .content.querySelector(".element")
                .cloneNode(!0);
            },
          },
          {
            key: "generateCard",
            value: function () {
              var e = this;
              return (
                (this._element = this._getTemplate()),
                (this._elementImage =
                  this._element.querySelector(".element__image")),
                (this._elementTitle =
                  this._element.querySelector(".element__title")),
                (this._elementLikeButton = this._element.querySelector(
                  ".element__like-button"
                )),
                (this._elementTrashButton = this._element.querySelector(
                  ".element__trash-button"
                )),
                (this._elementLikesCount = this._element.querySelector(
                  ".element__likes-count"
                )),
                this._setEventListeners(),
                (this._elementImage.src = this._image),
                (this._elementImage.alt = this._title),
                (this._elementTitle.textContent = this._title),
                (this._elementLikesCount.textContent = this._likes.length),
                this._owner._id !== this._userId &&
                  this._elementTrashButton.remove(),
                this._likes.some(function (t) {
                  return t._id === e._userId;
                }) && this.likeCard(),
                this._element
              );
            },
          },
          {
            key: "_setEventListeners",
            value: function () {
              var e = this;
              this._elementImage.addEventListener("click", function () {
                e._handleCardClick();
              }),
                this._elementLikeButton.addEventListener("click", function () {
                  e._handleLikeClick();
                }),
                this._elementTrashButton.addEventListener("click", function () {
                  e._handleDeleteClick(e);
                });
            },
          },
          {
            key: "likeCard",
            value: function () {
              this._elementLikeButton.classList.toggle(
                "element__like-button_active"
              );
            },
          },
          {
            key: "isLiked",
            value: function () {
              return this._elementLikeButton.classList.contains(
                "element__like-button_active"
              );
            },
          },
          {
            key: "setLikesCount",
            value: function (e) {
              this._elementLikesCount.textContent = e;
            },
          },
          {
            key: "removeCard",
            value: function () {
              this._element.remove(), (this._element = null);
            },
          },
        ]) && w(t.prototype, n),
        r && w(t, r),
        e
      );
    })();
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var L = (function () {
      function e(t) {
        var n = t.avatarSelector,
          r = t.nameSelector,
          o = t.jobSelector;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._avatar = document.querySelector(n)),
          (this._name = document.querySelector(r)),
          (this._about = document.querySelector(o));
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "getUserInfo",
            value: function () {
              return {
                name: this._name.textContent,
                about: this._about.textContent,
              };
            },
          },
          {
            key: "setUserInfo",
            value: function (e) {
              var t = e.avatar,
                n = e.name,
                r = e.about;
              (this._avatar.src = t),
                (this._name.textContent = n),
                (this._about.textContent = r);
            },
          },
        ]) && O(t.prototype, n),
        r && O(t, r),
        e
      );
    })();
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var j = (function () {
      function e(t) {
        var n = t.popupSelector;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._popup = document.querySelector(n)),
          (this._handleEscClose = this._handleEscClose.bind(this));
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "open",
            value: function () {
              this._popup.classList.add("popup_opened"),
                document.body.addEventListener("keyup", this._handleEscClose);
            },
          },
          {
            key: "close",
            value: function () {
              this._popup.classList.remove("popup_opened"),
                document.body.removeEventListener(
                  "keyup",
                  this._handleEscClose
                );
            },
          },
          {
            key: "_handleEscClose",
            value: function (e) {
              "Escape" === e.key && this.close();
            },
          },
          {
            key: "setEventListeners",
            value: function () {
              var e = this;
              this._popup
                .querySelector(".popup__close-button")
                .addEventListener("click", function () {
                  e.close();
                }),
                this._popup.addEventListener("mousedown", function (t) {
                  t.target === t.currentTarget && e.close();
                });
            },
          },
        ]) && P(t.prototype, n),
        r && P(t, r),
        e
      );
    })();
    function q(e) {
      return (q =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function R(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function I(e, t, n) {
      return (I =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = (function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = D(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function T(e, t) {
      return (T =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function x(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = D(e);
        if (t) {
          var o = D(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return B(this, n);
      };
    }
    function B(e, t) {
      return !t || ("object" !== q(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function D(e) {
      return (D = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var U = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && T(e, t);
      })(i, e);
      var t,
        n,
        r,
        o = x(i);
      function i(e) {
        var t,
          n = e.popupSelector,
          r = e.handleConfirmClick;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
          ((t = o.call(this, { popupSelector: n }))._form =
            t._popup.querySelector(".popup__form")),
          (t._handleConfirmClick = r),
          t
        );
      }
      return (
        (t = i),
        (n = [
          {
            key: "open",
            value: function (e) {
              (this._element = e), I(D(i.prototype), "open", this).call(this);
            },
          },
          {
            key: "setEventListeners",
            value: function () {
              var e = this;
              I(D(i.prototype), "setEventListeners", this).call(this),
                this._form.addEventListener("submit", function (t) {
                  t.preventDefault(), e._handleConfirmClick(e._element);
                });
            },
          },
        ]) && R(t.prototype, n),
        r && R(t, r),
        i
      );
    })(j);
    function A(e) {
      return (A =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function V(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function F(e, t, n) {
      return (F =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = (function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = H(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function M(e, t) {
      return (M =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function N(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = H(e);
        if (t) {
          var o = H(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return J(this, n);
      };
    }
    function J(e, t) {
      return !t || ("object" !== A(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function H(e) {
      return (H = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var z = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && M(e, t);
      })(i, e);
      var t,
        n,
        r,
        o = N(i);
      function i(e) {
        var t,
          n = e.popupSelector;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
          ((t = o.call(this, { popupSelector: n }))._popupImage =
            t._popup.querySelector(".popup__image")),
          (t._popupTitle = t._popup.querySelector(".popup__subtitle")),
          t
        );
      }
      return (
        (t = i),
        (n = [
          {
            key: "open",
            value: function (e) {
              var t = e.name,
                n = e.link;
              F(H(i.prototype), "open", this).call(this),
                (this._popupImage.src = n),
                (this._popupImage.alt = t),
                (this._popupTitle.textContent = t);
            },
          },
        ]) && V(t.prototype, n),
        r && V(t, r),
        i
      );
    })(j);
    function Y(e) {
      return (Y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function G(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function K(e, t, n) {
      return (K =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var r = (function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = Z(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function Q(e, t) {
      return (Q =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function W(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = Z(e);
        if (t) {
          var o = Z(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return X(this, n);
      };
    }
    function X(e, t) {
      return !t || ("object" !== Y(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Z(e) {
      return (Z = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var $ = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Q(e, t);
      })(i, e);
      var t,
        n,
        r,
        o = W(i);
      function i(e) {
        var t,
          n = e.popupSelector,
          r = e.handleFormSubmit;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
          ((t = o.call(this, { popupSelector: n }))._form =
            t._popup.querySelector(".popup__form")),
          (t._handleFormSubmit = r),
          t
        );
      }
      return (
        (t = i),
        (n = [
          {
            key: "_getInputValues",
            value: function () {
              var e = this;
              return (
                (this._inputList =
                  this._popup.querySelectorAll(".popup__input")),
                (this._formValues = {}),
                this._inputList.forEach(function (t) {
                  e._formValues[t.name] = t.value;
                }),
                this._formValues
              );
            },
          },
          {
            key: "setEventListeners",
            value: function () {
              var e = this;
              K(Z(i.prototype), "setEventListeners", this).call(this),
                this._form.addEventListener("submit", function (t) {
                  t.preventDefault(), e._handleFormSubmit(e._getInputValues());
                });
            },
          },
          {
            key: "close",
            value: function () {
              K(Z(i.prototype), "close", this).call(this), this._form.reset();
            },
          },
        ]) && G(t.prototype, n),
        r && G(t, r),
        i
      );
    })(j);
    function ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var te = (function () {
      function e(t, n) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._form = n),
          (this._inputSelector = t.inputSelector),
          (this._submitButtonSelector = t.submitButtonSelector),
          (this._inactiveButtonClass = t.inactiveButtonClass),
          (this._inputErrorClass = t.inputErrorClass),
          (this._errorClass = t.errorClass);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "_showInputError",
            value: function (e, t) {
              (this._error = this._form.querySelector(
                "#".concat(e.name, "-error")
              )),
                e.classList.add(this._inputErrorClass),
                (this._error.textContent = t),
                this._error.classList.add(this._errorClass);
            },
          },
          {
            key: "_hideInputError",
            value: function (e) {
              (this._error = this._form.querySelector(
                "#".concat(e.name, "-error")
              )),
                e.classList.remove(this._inputErrorClass),
                this._error.classList.remove(this._errorClass),
                (this._error.textContent = "");
            },
          },
          {
            key: "_isValid",
            value: function (e) {
              e.validity.valid
                ? this._hideInputError(e)
                : this._showInputError(e, e.validationMessage);
            },
          },
          {
            key: "_hasInvalidInput",
            value: function (e) {
              return e.some(function (e) {
                return !e.validity.valid;
              });
            },
          },
          {
            key: "_toggleButtonState",
            value: function (e, t) {
              this._hasInvalidInput(e)
                ? (t.classList.add(this._inactiveButtonClass),
                  t.setAttribute("disabled", !0))
                : (t.classList.remove(this._inactiveButtonClass),
                  t.removeAttribute("disabled", !0));
            },
          },
          {
            key: "_setEventListeners",
            value: function () {
              var e = this,
                t = Array.from(
                  this._form.querySelectorAll(this._inputSelector)
                ),
                n = this._form.querySelector(this._submitButtonSelector);
              this._toggleButtonState(t, n),
                t.forEach(function (r) {
                  r.addEventListener("input", function () {
                    e._isValid(r), e._toggleButtonState(t, n);
                  });
                });
            },
          },
          {
            key: "enableValidation",
            value: function () {
              this._setEventListeners(this._form);
            },
          },
          {
            key: "cleanErrors",
            value: function () {
              var e = this,
                t = Array.from(
                  this._form.querySelectorAll(this._inputSelector)
                ),
                n = this._form.querySelector(this._submitButtonSelector);
              this._toggleButtonState(t, n),
                t.forEach(function (t) {
                  e._hideInputError(t);
                });
            },
          },
        ]) && ee(t.prototype, n),
        r && ee(t, r),
        e
      );
    })();
    document.querySelector(".footer__copyright").textContent +=
      " " + new Date().getFullYear() + " Mesto Russia";
    var ne = new L({
        avatarSelector: ".profile__avatar",
        nameSelector: ".profile__title",
        jobSelector: ".profile__subtitle",
      }),
      re = function (e, t) {
        var n = e.name,
          r = e.link,
          o = e.likes,
          i = e._id,
          u = e.owner,
          a = new E(
            {
              name: n,
              link: r,
              likes: o,
              _id: i,
              owner: u,
              cardSelector: "#element",
              handleCardClick: function () {
                ie.open({ name: n, link: r });
              },
              handleLikeClick: function () {
                a.isLiked()
                  ? _e
                      .unlikeCard({ _id: a._id })
                      .then(function (e) {
                        a.setLikesCount(e.likes.length), a.likeCard();
                      })
                      .catch(function (e) {
                        v(e);
                      })
                  : _e
                      .likeCard({ _id: a._id })
                      .then(function (e) {
                        a.setLikesCount(e.likes.length), a.likeCard();
                      })
                      .catch(function (e) {
                        v(e);
                      });
              },
              handleDeleteClick: function (e) {
                ue.open(e);
              },
            },
            t
          );
        return a.generateCard();
      },
      oe = new C(
        {
          renderer: function (e) {
            var t = e.name,
              n = e.link,
              r = e.likes,
              o = e._id,
              i = e.owner,
              u = re({ name: t, link: n, likes: r, _id: o, owner: i }, he);
            oe.addItem(u);
          },
        },
        ".elements__list"
      ),
      ie = new z({ popupSelector: ".popup_type_image" });
    ie.setEventListeners();
    var ue = new U({
      popupSelector: ".popup_type_confirm",
      handleConfirmClick: function (e) {
        _e.deleteCard({ _id: e._id })
          .then(function () {
            e.removeCard(), ue.close();
          })
          .catch(function (e) {
            v(e);
          });
      },
    });
    ue.setEventListeners();
    var ae = new $({
      popupSelector: ".popup_type_edit-avatar",
      handleFormSubmit: function (e) {
        b(s, !0),
          _e
            .patchUserAvatar({ avatar: e["avatar-input"] })
            .then(function (e) {
              var t = e.avatar,
                n = e.name,
                r = e.about;
              ne.setUserInfo({ avatar: t, name: n, about: r }), ae.close();
            })
            .catch(function (e) {
              v(e);
            })
            .finally(function () {
              b(s, !1);
            });
      },
    });
    ae.setEventListeners();
    var ce = new $({
      popupSelector: ".popup_type_edit-profile",
      handleFormSubmit: function (e) {
        b(f, !0),
          _e
            .patchUserProfile({ name: e["name-input"], about: e["job-input"] })
            .then(function (e) {
              var t = e.avatar,
                n = e.name,
                r = e.about;
              ne.setUserInfo({ avatar: t, name: n, about: r }), ce.close();
            })
            .catch(function (e) {
              v(e);
            })
            .finally(function () {
              b(f, !1);
            });
      },
    });
    ce.setEventListeners();
    var le = new $({
      popupSelector: ".popup_type_add-card",
      handleFormSubmit: function (e) {
        b(p, !0),
          _e
            .addNewCard({ name: e["place-input"], link: e["link-input"] })
            .then(function (e) {
              var t = e.name,
                n = e.link,
                r = e.likes,
                o = e._id,
                i = e.owner;
              return re({ name: t, link: n, likes: r, _id: o, owner: i }, he);
            })
            .then(function (e) {
              oe.addItem(e), le.close();
            })
            .catch(function (e) {
              v(e);
            })
            .finally(function () {
              b(p, !1);
            });
      },
    });
    le.setEventListeners();
    var se = new te(m, document.forms["edit-avatar-form"]);
    se.enableValidation();
    var fe = new te(m, document.forms["edit-profile-form"]);
    fe.enableValidation();
    var pe = new te(m, document.forms["add-card-form"]);
    pe.enableValidation();
    var he,
      _e = new S({
        url: "https://mesto.nomoreparties.co/v1/cohort-16",
        headers: {
          authorization: "9dad3ee9-138f-48bd-8014-b648376a609a",
          "Content-Type": "application/json",
        },
      });
    o.addEventListener("click", function () {
      se.cleanErrors(), ae.open();
    }),
      i.addEventListener("click", function () {
        var e = ne.getUserInfo();
        (h.value = e.name), (_.value = e.about), fe.cleanErrors(), ce.open();
      }),
      u.addEventListener("click", function () {
        (d.value = ""), (y.value = ""), pe.cleanErrors(), le.open();
      }),
      Promise.all([_e.getUserData(), _e.getInitialCards()])
        .then(function (e) {
          var t = e[0];
          he = t._id;
          var n = e[1].reverse();
          ne.setUserInfo({ avatar: t.avatar, name: t.name, about: t.about }),
            oe.renderItems(n);
        })
        .catch(function (e) {
          v(e);
        });
  },
]);
