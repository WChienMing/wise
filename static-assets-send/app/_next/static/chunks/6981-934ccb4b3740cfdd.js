(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6981], { 52765: function(e, t, n) { "use strict";
            n.d(t, { e: function() { return h } }); var i = n(73292),
                s = n(85893);
            n(67294); var c = n(94184),
                o = n.n(c),
                r = n(61276),
                a = n(70190),
                l = n(23720),
                d = n(16035),
                u = n(86200),
                m = n.n(u);

            function h(e) { var t = e.heroContent,
                    n = e.overlaps,
                    c = void 0 !== n && n; return (0, s.jsx)(d.f6, { theme: "forest-green", children: (0, s.jsx)("div", { className: o()("section", m().hero, m().background, (0, i._)({}, m().overlaps, c)), id: "hero", children: (0, s.jsx)("div", { className: "container", children: (0, s.jsxs)("div", { className: "row row-equal-height", children: [(0, s.jsx)("div", { className: o()(m().left, m().title, "col-lg-push-0 col-lg-5"), children: t }), (0, s.jsxs)("div", { id: "calculator", className: o()(m().right, m().calculator, "col-xs-12 col-lg-push-1 col-lg-6"), children: [(0, s.jsx)("div", { className: m().calculatorContainer, children: (0, s.jsx)(l.ZP, { tapestry: "bg-tapestry-3", children: (0, s.jsx)(d.f6, { theme: "personal", screenMode: "light", children: (0, s.jsx)(r.Z, {}) }) }) }), (0, s.jsx)("div", { className: "hidden-lg hidden-xl text-xs-center m-t-3", children: (0, s.jsx)(a.Z, { trackingSrouceId: "homepage" }) })] })] }) }) }) }) } }, 2323: function(e, t, n) { "use strict";
            n.d(t, { e: function() { return r }, k: function() { return o } }); var i = n(85893),
                s = n(67294),
                c = s.createContext({ userLoggedIn: !1 });

            function o() { return s.useContext(c) } var r = function(e) { var t = e.sessionData,
                    n = e.children; return (0, i.jsx)(c.Provider, { value: t, children: n }) } }, 17282: function(e, t, n) { "use strict";
            n.d(t, { a: function() { return c } }); var i = n(67294),
                s = n(16035),
                c = function(e) { var t = e.modern,
                        n = e.legacy; return function(e) { var c = (0, s.Fg)().isModern ? t : n; return i.createElement(c, e, null) } } }, 73520: function(e, t, n) { "use strict";
            n.d(t, { Z: function() { return p } }); var i = n(93128),
                s = n(85893),
                c = n(67294),
                o = n(33318),
                r = n(61631),
                a = n(30574),
                l = n(32346),
                d = n(5359),
                u = n(1883),
                m = n(60821),
                h = n(19864);

            function p(e) { var t = e.children,
                    n = e.initialQuoteState,
                    p = e.features,
                    x = e.language,
                    f = e.marketingData,
                    S = e.metaContextValue,
                    j = e.initialCountry,
                    _ = e.initialProductAvailability,
                    v = e.trustpilotWiseOverview,
                    g = c.useMemo(function() { return (0, o.Et)(p) }, [p]); return (0, s.jsx)(u.hi, { initialValue: n, children: (0, s.jsx)(o.sN, { value: g, children: (0, s.jsx)(a.iL, { language: x, languageConfig: { showArabic: !0 }, children: (0, s.jsx)(h.VO, { marketingData: f, children: (0, s.jsx)(l.eV, { value: S, children: (0, s.jsx)(r.J8, { initialValue: j, children: (0, s.jsx)(m.Z, { trustpilotData: { wiseOverview: v }, children: (0, s.jsx)(r.ok.Consumer, { children: function(e) { var n = (0, i._)(e, 1)[0]; return (0, s.jsx)(d.nO, { country: n, initialValue: _, children: t }) } }) }) }) }) }) }) }) }) } }, 16572: function(e, t, n) { "use strict";
            n.d(t, { Z: function() { return d } }); var i = n(93128),
                s = n(85893);
            n(67294); var c = n(57698),
                o = n(68307),
                r = n(32122),
                a = n(11163),
                l = n(61631);

            function d() { var e = (0, i._)((0, l.Dj)(), 1)[0],
                    t = (0, a.useRouter)(),
                    n = e === r.SupportedCountry.PH && (t.pathname.includes("/send-money") || t.pathname.includes("/large-amounts")),
                    d = c.To.indexOf(e.toLowerCase()) > -1 && !n ? e.toLowerCase() : r.SupportedCountry.GB.toLowerCase(); return (0, s.jsx)(o.Z, { locale: d }) } }, 55536: function(e, t, n) { "use strict";
            n.d(t, { s: function() { return l } }); var i = n(85893),
                s = n(94184),
                c = n.n(s);
            n(67294); var o = n(56593),
                r = n.n(o),
                a = { white: "background--white", neutral: "background--neutral", light: "background--light", dark: "background--dark" },
                l = function(e) { var t = e.background,
                        n = e.className,
                        s = e.children,
                        o = e.as,
                        l = void 0 === o ? "div" : o; return (0, i.jsx)(l, { className: c()(r().root, a[t], n), children: s }) } }, 51686: function(e, t, n) { "use strict";
            n.d(t, { sJ: function() { return o }, y0: function() { return r } }); var i = n(85893),
                s = n(67294),
                c = (0, s.createContext)({}),
                o = function() { return (0, s.useContext)(c) },
                r = function(e) { var t = e.value,
                        n = e.children; return (0, i.jsx)(c.Provider, { value: t, children: n }) } }, 79203: function(e, t, n) { "use strict";
            n.d(t, { sJ: function() { return i.sJ }, y0: function() { return i.y0 } }); var i = n(51686) }, 34898: function(e, t, n) { "use strict";
            n.r(t), n.d(t, { Testimonials: function() { return g }, default: function() { return g } }); var i = n(93128),
                s = n(85893);
            n(67294); var c = n(89537),
                o = n(94184),
                r = n.n(o),
                a = n(55536),
                l = n(30574),
                d = n(60821),
                u = n(30381),
                m = n.n(u);

            function h(e) { var t = e.className,
                    n = e.value,
                    i = e.limit,
                    c = void 0 === i ? 5 : i,
                    o = e.id,
                    r = Array(c).fill(""),
                    a = parseFloat((void 0 === n ? 0 : n).toString()),
                    l = 16 * c + 4 * (c - 1),
                    d = (4 * (Math.ceil(a) - 1) + 16 * a) / l * 100,
                    u = "horizClip".concat(d, "-").concat(o); return (0, s.jsxs)("svg", { className: void 0 === t ? "" : t, width: l, height: "16", children: [(0, s.jsx)("defs", { children: (0, s.jsx)("clipPath", { id: u, children: (0, s.jsx)("rect", { x: "0", y: "0", width: "".concat(Math.round(d), "%"), height: 16 }) }) }), (0, s.jsx)("g", { clipPath: "url(#".concat(u, ")"), children: r.map(function(e, t) { return (0, s.jsx)("path", { transform: "translate(".concat(20 * t, ", 0), scale(0.95)"), fill: "#ffb600", fillRule: "evenodd", d: "M8.6 12.9l-5 2.6.9-5.6-4.1-4 5.7-.8L8.6 0l2.6 5.1 5.6.8-4.1 4 1 5.6z" }, t) }) })] }) } var p = /[.,/#!$%^&*;:{}=\-_`~()]/g,
                x = n(76041),
                f = n.n(x);

            function S(e) { var t = e.id,
                    n = e.stars,
                    i = e.text,
                    o = e.displayName,
                    a = e.createdAt,
                    l = e.language; return (0, s.jsxs)("a", { href: "https://www.trustpilot.com/reviews/".concat(t), className: f().item, target: "_blank", rel: "noopener noreferrer", children: [(0, s.jsx)(h, { value: n, id: t, className: r()(f().stars, "m-t-3") }), (0, s.jsx)("p", { className: f().quote, children: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 180,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " "; if (e.length < t) return e; var i = e.lastIndexOf(n, t); if (i < 0) return e; var s = e.slice(0, i).trim(); return p.test(s[s.length - 1]) && (s = s.substring(0, s.length - 1)), "".concat(s, "…") }(i, 150) }), (0, s.jsxs)("div", { className: f().cardFooter, children: [(0, s.jsx)("span", { className: f().author, children: o }), (0, s.jsx)("p", { className: r()(f().datePublished, "m-t-1 m-b-0"), children: (0, s.jsx)(c.Message, { params: { timeAgo: m()(a).locale(l).fromNow() }, children: "sendMoney.testimonial.publishedTime" }) })] })] }) } var j = n(57021),
                _ = n.n(j),
                v = function(e) { var t = e.language,
                        n = e.overview,
                        i = n.trustpilotStars,
                        o = n.trustScoreReviewCountTotal,
                        l = n.reviews,
                        d = l && l.length > 0; return i || o ? (0, s.jsx)("section", { className: "section tw-testimonials", id: "reviews", children: (0, s.jsxs)("div", { className: "container", children: [(0, s.jsx)("div", { className: "row", children: (0, s.jsxs)("div", { className: "col-xs-12 text-xs-center", children: [(0, s.jsx)("h2", { className: "mw-display-3 m-b-4", children: (0, s.jsx)(c.Message, { params: { trustpilotStars: i, trustScoreReviewCountTotal: o }, children: "sendMoney.testimonials.title" }) }), (0, s.jsx)("p", { className: "m-x-5", children: (0, s.jsx)(c.Message, { dangerouslyTranslateInnerHTML: "sendMoney.testimonials.description" }) })] }) }), d && (0, s.jsx)("div", { className: r()(_().cards, "m-t-5"), children: l.slice(0, 3).map(function(e) { return (0, s.jsx)(a.s, { className: r()(_().card, "col-xs-12 col-md-4"), background: "neutral", children: (0, s.jsx)(S, { id: e.id, stars: e.stars, text: e.text, displayName: e.consumer.displayName, createdAt: e.createdAt, language: t }) }, e.id) }) }), (0, s.jsxs)("div", { className: _().footer, children: [(0, s.jsx)("span", { children: (0, s.jsx)(c.Message, { children: "sendMoney.testimonial.footer" }) }), (0, s.jsx)("img", { src: "static-assets-send/app/_next/static/media/trustpilot.bd3e1853.png", className: _().trustpilotIcon, alt: "", loading: "lazy" })] })] }) }) : null },
                g = function() { var e = (0, d.e)().wiseOverview,
                        t = (0, i._)((0, l.ZK)(), 1)[0]; return (0, s.jsx)(v, { overview: e, language: t }) } }, 39153: function(e, t, n) { "use strict";
            n.r(t), n.d(t, { ProtectYourMoneySection: function() { return x }, default: function() { return x } }); var i = n(85893);
            n(67294); var s = n(50919),
                c = n(7945),
                o = n(55536),
                r = n(40117),
                a = n(51451),
                l = n(52031),
                d = n(79203),
                u = n(66619),
                m = n(72177),
                h = n.n(m),
                p = function(e) { var t = e.className,
                        n = e.top,
                        s = e.middle,
                        c = e.bottom,
                        r = e.background; return (0, i.jsxs)(o.s, { className: t, background: r, children: [n && (0, i.jsx)("div", { className: h().cardTop, children: n }), s && (0, i.jsx)("div", { className: h().cardMiddle, children: s }), c && (0, i.jsx)("div", { className: h().cardBottom, children: c })] }) };

            function x() { var e, t = (0, r.v)().safeTranslate,
                    n = (0, l.QK)(),
                    o = (0, d.sJ)().toPlace,
                    m = (0, u.Z)("protectYourMoneySection", "title"),
                    x = [{ icon: a.BrQ, title: t({ id: "protectYourMoneySection.safeGuard.title" }), description: t({ id: "protectYourMoneySection.safeGuard.description" }, { linkHref: function(e) { return (0, i.jsx)("a", { href: "/help/articles/2736041/is-wise-safe", target: "_blank", children: e }) } }) }, { icon: a.JrY, title: t({ id: "protectYourMoneySection.audit.title" }), description: t({ id: "protectYourMoneySection.audit.description" }) }, { icon: a.pGQ, title: t({ id: "protectYourMoneySection.secureTransactions.title" }), description: t({ id: "protectYourMoneySection.secureTransactions.description" }) }, { icon: a.WL4, title: t({ id: "protectYourMoneySection.dataProtection.title" }), description: t({ id: "protectYourMoneySection.dataProtection.description" }) }, { icon: a.WL4, title: t({ id: "protectYourMoneySection.fraudTeam.title" }), description: t({ id: "protectYourMoneySection.fraudTeam.description" }) }]; return (0, i.jsx)(c.$, { id: "protecting-your-money", trackingId: s.Vy.SendMoneyProtectYourMoneySection, padding: "lg", children: (0, i.jsxs)("div", { className: "container", children: [(0, i.jsx)("div", { className: "row", children: (0, i.jsx)("div", { className: "col-xs-12 col-sm-8 col-sm-offset-2", children: (0, i.jsx)("h2", { className: "text-center mw-display-3", children: t({ id: m }, { toDestination: null == o ? void 0 : o.toName, paymentMethod: null == n ? void 0 : null === (e = n.sentences) || void 0 === e ? void 0 : e.name }) }) }) }), (0, i.jsx)("div", { className: "row", children: (0, i.jsx)("div", { className: "col-xs-12 m-b-5", children: (0, i.jsx)("ul", { className: h().cardContainer, children: x.map(function(e) { var t = e.icon,
                                            n = e.title,
                                            s = e.description; return (0, i.jsx)(p, { className: h().card, top: (0, i.jsx)(t, { className: h().icon }), middle: (0, i.jsx)("h3", { className: "mw-display-4 m-b-0", children: n }), bottom: (0, i.jsx)("p", { className: "mw-body-2 m-b-0", children: s }), background: "neutral" }) }) }) }) }), (0, i.jsx)("div", { className: "row", children: (0, i.jsx)("div", { className: "col-xs-12 text-center", children: t({ id: "protectYourMoneySection.scam.message" }, { staySafeLink: function(e) { return (0, i.jsx)("a", { href: "/gb/blog/never-allow-access-to-your-account", onClick: function(e) { return (0, s.Ng)(s.Vy.StaySafeClicked, null, e) }, target: "_blank", children: e }) } }) }) })] }) }) } }, 66487: function(e, t, n) { "use strict";
            n.d(t, { H: function() { return eg } }); var i, s = n(85893),
                c = n(67294),
                o = n(39153),
                r = n(34898),
                a = n(76341),
                l = n(93128),
                d = n(44012),
                u = n(4918),
                m = n(36406),
                h = n(79305),
                p = n(5695),
                x = n(87365),
                f = n(94184),
                S = n.n(f),
                j = n(33668),
                _ = n(1883),
                v = n(30574),
                g = n(61080),
                N = n(21998),
                y = n(17282),
                b = n(38605),
                w = n.n(b),
                C = n(79056),
                T = n.n(C),
                k = (0, y.a)({ legacy: function(e) { var t = e.slider; return (0, s.jsxs)("div", { className: S()(w().volumeSection, "row"), children: [(0, s.jsxs)("div", { className: S()(w().description, "col-lg-5 hidden-xs hidden-sm hidden-md"), children: [(0, s.jsx)("h3", { className: "colored-dot h2 m-b-3 m-t-3", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.title" }) }), (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.subtitle" })] }), (0, s.jsx)("div", { className: S()(w().slider, "col-lg-offset-1 col-lg-6"), children: t }), (0, s.jsxs)("div", { className: S()(w().description, "hidden-lg hidden-xl"), children: [(0, s.jsx)("h3", { className: "colored-dot h2 m-b-3 m-t-2", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.title" }) }), (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.subtitle" })] })] }) }, modern: function(e) { var t = e.slider; return (0, s.jsxs)("div", { className: S()(T().volumeSection, "row"), children: [(0, s.jsxs)("div", { className: S()(T().description, "col-lg-5"), children: [(0, s.jsx)("h3", { className: "mw-heading-2 h2 m-b-3 m-t-3", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.title" }) }), (0, s.jsx)("p", { className: "mw-body-3", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.feeSlider.subtitle" }) })] }), (0, s.jsx)("div", { className: S()(T().slider, "col-lg-offset-1"), children: (0, s.jsx)("div", { className: T().sliderWrapper, children: t }) })] }) } }),
                M = n(1337),
                O = n(10233);

            function F() { var e = function(e) { return (e < 10 ? "0" : "") + e },
                    t = new Date().getTimezoneOffset(); return (t < 0 ? "+" : "-") + e((t = Math.abs(t)) / 60 | 0) + e(t % 60) } var E = function(e) { var t, n = e.http,
                    i = e.sourceCurrency,
                    s = e.targetCurrency,
                    c = e.selectedTimePeriod,
                    o = e.locale,
                    r = "/rates/history?source=".concat(i, "&target=").concat(s, "&length=").concat(Math.floor(c / 24), "&resolution=hourly"); return n ? n.get({ upstream: O.g.RATES, url: r, config: { headers: { "Content-Type": "application/json", Accept: "application/json", "X-Access-Token": "Tr4n5f3rw153", "Time-Zone": F(), "Accept-Language": o || "en-GB" } } }).then(function(e) { return null !== (t = e.data.map(function(e) { return { rate: e.value, time: e.time } })) && void 0 !== t ? t : [] }).catch(function() { return [] }) : fetch(r, { headers: { "Content-Type": "application/json", Accept: "application/json", "X-Access-Token": "Tr4n5f3rw153", "Time-Zone": F(), "Accept-Language": o || "en-GB" } }).then(function(e) { if (!e.ok) throw Error; return e.json() }).then(function(e) { return e.map(function(e) { return { rate: e.value, time: e.time } }) }).catch(function() { return [] }) };
            n(95307); var B = n(46148),
                Z = n.n(B),
                G = function() { var e = (0, l._)((0, _.Fe)(), 1)[0],
                        t = (0, M.Z)(null == e ? void 0 : e.quote) || {},
                        n = t.sourceCurrency,
                        i = void 0 === n ? g.F.GBP : n,
                        o = t.targetCurrency,
                        r = void 0 === o ? g.F.EUR : o,
                        f = t.rate,
                        y = (0, l._)((0, v.ZK)(), 1)[0],
                        b = "en" === y ? "en-GB" : y,
                        w = N.Z.useViewportTracking(N.Z.EventNames.HatPricingViewed),
                        C = (0, l._)((0, c.useState)([]), 2),
                        T = C[0],
                        O = C[1],
                        F = (0, l._)((0, c.useState)(!0), 2),
                        B = F[0],
                        G = F[1],
                        I = (0, j.x)({ fallbackToGateway: !1 }).httpClient;
                    (0, c.useEffect)(function() { G(!0), E({ http: I, sourceCurrency: i, targetCurrency: r, selectedTimePeriod: 720, locale: b }).then(function(e) { O(e), G(!1) }) }, [i, r, b]); var P = "/tools/exchange-rate-alerts/?fromCurrency=".concat(i, "&toCurrency=").concat(r),
                        A = (0, x.Md)(b),
                        R = m.Iz[A] || m.Iz.en; return (0, s.jsx)("section", { ref: w, id: "hat-pricing-section", className: "section section--pad-lg text-xs-center text-lg-left", children: (0, s.jsxs)("div", { className: "container", children: [(0, s.jsx)("h2", { className: S()(Z().title, "mw-display-2"), children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.title" }) }), (0, s.jsxs)("div", { children: [T.length >= 1 && (0, s.jsxs)("div", { className: S()(Z().rateSection, "row"), children: [(0, s.jsx)("div", { className: S()(Z().graph, "col-lg-6 p-t-2"), children: (0, s.jsx)(x.zt, { i18n: { locale: b, messages: x.Iz[b] }, children: (0, s.jsx)(p.P, { sourceCurrency: i, targetCurrency: r, historicRates: T, liveRate: f, hideTrackRateButton: !0, isLoading: B }) }) }), (0, s.jsxs)("div", { className: S()(Z().description, "col-lg-offset-1 col-lg-5"), children: [(0, s.jsx)("h3", { className: "mw-heading-2", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.rateGraph.title" }) }), (0, s.jsx)("p", { className: "mw-body-3", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.rateGraph.subtitle" }) }), (0, s.jsx)("div", { className: "m-t-1", children: (0, s.jsx)(h.Z, { href: P, onClick: function() { N.Z.track(N.Z.EventNames.HatPricingTrackRateClicked) }, target: "_blank", children: (0, s.jsx)("span", { className: "mw-body-3-bold", children: (0, s.jsx)(d.Z, { id: "hat.pricingSection.rateGraph.trackRate.button" }) }) }) })] })] }), (0, s.jsx)(k, { slider: (0, s.jsx)(u.Z, { messages: (0, a._)({}, x.Iz[A], R), locale: A, children: (0, s.jsx)(m.VH, { sourceCurrency: i, targetCurrency: r, lang: y, inverse: !1 }) }) })] })] }) }) },
                I = n(55536),
                P = n(18987),
                A = n(40117),
                R = n(89537),
                D = [{ titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item1.title" }), title: "hat.v2.stepByStepGuideSection.item1.title", content: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item1.content" }) }, { titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item2.title" }), title: "hat.v2.stepByStepGuideSection.item2.title", content: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item2.content1" }), (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item2.content2" })] }) }, { titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item3.title" }), title: "hat.v2.stepByStepGuideSection.item3.title", content: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item3.content" }) }, { titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item4.title" }), title: "hat.v2.stepByStepGuideSection.item4.title", content: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item4.content" }) }, { titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item5.title" }), title: "hat.v2.stepByStepGuideSection.item5.title", content: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item5.content1" }), (0, s.jsx)("br", {}), (0, s.jsx)("br", {}), (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item5.content2" })] }) }, { titleOld: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item6.title" }), title: "hat.v2.stepByStepGuideSection.item6.title", content: (0, s.jsx)(R.Message, { children: "hat.stepByStepGuideSection.item6.content" }) }],
                L = n(78326),
                H = n.n(L);

            function V() { var e = (0, l._)((0, v.ZK)(), 1)[0],
                    t = e === P.S.EN || e === P.S.EN_US,
                    n = N.Z.useViewportTracking(N.Z.EventNames.HatStepByStepGuideViewed),
                    i = (0, A.v)().safeTranslate; return (0, s.jsxs)("section", { ref: n, id: "step-by-step-guide-section", className: H().section, children: [(0, s.jsxs)("div", { className: "container", children: [(0, s.jsx)("h2", { className: S()(H().heading, "text-center mw-display-3"), children: i({ id: "hat.stepByStepGuideSection.title" }) }), (0, s.jsx)("ul", { className: H().cardContainer, children: D.map(function(e, t) { var n = e.title,
                                    c = e.content; return (0, s.jsxs)(I.s, { className: H().card, background: "white", as: "div", children: [(0, s.jsx)("p", { className: S()(H().cardNumber, "text-left mw-heading-1 m-b-0"), children: t + 1 }), (0, s.jsx)("h3", { className: S()(H().cardTitle, "mw-heading-4 m-b-0"), children: i({ id: n }) }), (0, s.jsx)("div", { children: c })] }) }) })] }), (0, s.jsx)("div", { className: S()(H().link, "text-center"), children: (0, s.jsx)(h.Z, { href: "/public-resources/assets/send-flow/documents/high-amount/wise_guide_to_sending_large_amounts_jan_2023_v3.pdf", onClick: function() { return N.Z.track(N.Z.EventNames.HatStepByStepGuideDownloadClicked) }, target: "_blank", children: i({ id: t ? "hat.stepByStepGuideSection.downloadGuide" : "hat.stepByStepGuideSection.downloadGuide.nonEnglish" }) }) })] }) } var Y = n(73292),
                z = n(67462),
                U = n(50919),
                W = { PROPERTY: { value: "PROPERTY", description: ["hat.documentSection.sourceOfFunds.property.docs.signatures", "hat.documentSection.sourceOfFunds.property.docs.address", "hat.documentSection.sourceOfFunds.property.docs.dates"], documents: "hat.documentSection.sourceOfFunds.property.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.property.docs.mobile" }, INHERITANCE: { value: "INHERITANCE", description: ["hat.documentSection.sourceOfFunds.inheritance.docs.name", "hat.documentSection.sourceOfFunds.inheritance.docs.relationship"], documents: "hat.documentSection.sourceOfFunds.inheritance.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.inheritance.docs.mobile" }, SALARY: { value: "SALARY", description: ["hat.documentSection.sourceOfFunds.salary.docs.salary", "hat.documentSection.sourceOfFunds.salary.docs.employer", "hat.documentSection.sourceOfFunds.salary.docs.employment", "hat.documentSection.sourceOfFunds.salary.docs.paid"], documents: "hat.documentSection.sourceOfFunds.salary.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.salary.docs.mobile" }, INVESTMENTS: { value: "INVESTMENTS", description: ["hat.documentSection.sourceOfFunds.investments.docs.amount", "hat.documentSection.sourceOfFunds.investments.docs.dates", "hat.documentSection.sourceOfFunds.investments.docs.type"], documents: "hat.documentSection.sourceOfFunds.investments.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.investments.docs.mobile" }, LOAN: { value: "LOAN", description: ["hat.documentSection.sourceOfFunds.loan.docs.purpose", "hat.documentSection.sourceOfFunds.loan.docs.amount", "hat.documentSection.sourceOfFunds.loan.docs.lender", "hat.documentSection.sourceOfFunds.loan.docs.date"], documents: "hat.documentSection.sourceOfFunds.loan.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.loan.docs.mobile" }, ELSE: { value: "ELSE", description: ["hat.documentSection.sourceOfFunds.else.docs.date", "hat.documentSection.sourceOfFunds.else.docs.amount", "hat.documentSection.sourceOfFunds.else.docs.reason"], documents: "hat.documentSection.sourceOfFunds.else.docs", mobileDocuments: "hat.documentSection.sourceOfFunds.else.docs.mobile" } },
                q = [{ value: W.PROPERTY.value, label: "hat.documentSection.sourceOfFunds.property" }, { value: W.INHERITANCE.value, label: "hat.documentSection.sourceOfFunds.inheritance" }, { value: W.SALARY.value, label: "hat.documentSection.sourceOfFunds.salary" }, { value: W.INVESTMENTS.value, label: "hat.documentSection.sourceOfFunds.investments" }, { value: W.LOAN.value, label: "hat.documentSection.sourceOfFunds.loan" }, { value: W.ELSE.value, label: "hat.documentSection.sourceOfFunds.else" }],
                Q = { h1: "mw-heading-1", h2: "mw-heading-2", h3: "mw-heading-3", h4: "mw-heading-4", h5: "mw-heading-5", div: "mw-heading-2" },
                J = function(e) { var t = e.className,
                        n = e.children,
                        i = e.as; return (0, s.jsx)(i, { className: S()(Q[i], t), children: n }) },
                X = n(51451),
                K = n(62153),
                $ = n.n(K),
                ee = function() { return (0, s.jsx)("th", { children: (0, s.jsx)("p", { className: "mw-body-2-bold", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.docsMayNeed" }) }) }) },
                et = function() { return (0, s.jsx)("th", { children: (0, s.jsx)("p", { className: "mw-body-2-bold", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.informationNeeded" }) }) }) };

            function en() { return (0, s.jsxs)("ol", { children: [(0, s.jsx)("li", { className: "mw-body-2", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.bankStatement.accountDetails" }) }), (0, s.jsx)("li", { className: "mw-body-2", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.bankStatement.requiredTransactions" }) })] }) }

            function ei() { return (0, s.jsx)(x.qE, { type: x.fC.ICON, size: x.$u.MEDIUM, className: S()($().dataIconWrapper), children: (0, s.jsx)(X.BBB, { className: S()($().dataIcon), size: "24" }) }) }

            function es(e) { var t = e.selectedSourceOfFunds; return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: S()($().mobileTable, "hidden-lg hidden-xl"), children: (0, s.jsx)("table", { children: (0, s.jsxs)("tbody", { children: [(0, s.jsx)("tr", { children: (0, s.jsx)(ee, {}) }), (0, s.jsx)("tr", { children: (0, s.jsxs)("td", { children: [(0, s.jsxs)("div", { className: S()($().docItemTitle, "mw-body-2"), children: [(0, s.jsx)(ei, {}), (0, s.jsx)("span", { className: "mw-body-2-bold", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.docsBankStatement.mobile" }) })] }), (0, s.jsx)(en, {})] }) }), (0, s.jsx)("tr", { children: (0, s.jsx)("td", { children: (0, s.jsx)(ec, { selectedSourceOfFunds: t }) }) })] }) }) }) }) }

            function ec(e) { var t = e.selectedSourceOfFunds,
                    n = (0, R.useTranslations)().translate; return (0, s.jsxs)(s.Fragment, { children: [W[t.value].mobileDocuments && (0, s.jsxs)("div", { className: S()($().docItemTitle, "mw-body-2-bold"), children: [(0, s.jsx)(ei, {}), n(W[t.value].mobileDocuments)] }), (0, s.jsx)("ol", { children: W[t.value].description.map(function(e) { return (0, s.jsx)("li", { className: "mw-body-2", children: n(e) }, e) }) })] }) }

            function eo(e) { var t = e.selectedSourceOfFunds; return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)("div", { className: S()($().table, "m-t-3 ".concat("hidden-xs hidden-sm hidden-md")), children: (0, s.jsx)("table", { children: (0, s.jsxs)("tbody", { children: [(0, s.jsxs)("tr", { children: [(0, s.jsx)(ee, {}), (0, s.jsx)(et, {})] }), (0, s.jsx)("tr", { children: (0, s.jsx)(er, {}) }), (0, s.jsx)("tr", { children: (0, s.jsx)(ea, { selectedSourceOfFunds: t }) })] }) }) }) }) }

            function er() { return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("td", { children: (0, s.jsxs)("div", { className: S()($().docItemTitle, "mw-body-2-bold"), children: [(0, s.jsx)(ei, {}), (0, s.jsx)(R.Message, { children: "hat.documentSection.docsBankStatement" })] }) }), (0, s.jsx)("td", { children: (0, s.jsx)(en, {}) })] }) }

            function ea(e) { var t = e.selectedSourceOfFunds,
                    n = (0, R.useTranslations)().translate; return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("td", { children: W[t.value].documents && (0, s.jsxs)("div", { className: S()($().docItemTitle, "mw-body-2-bold"), children: [(0, s.jsx)(ei, {}), n(W[t.value].documents)] }) }), (0, s.jsx)("td", { children: (0, s.jsx)("ol", { children: W[t.value].description.map(function(e) { return (0, s.jsx)("li", { className: "mw-body-2", children: n(e) }, e) }) }) })] }) } var el = function(e) { return (0, z._)((0, a._)({}, e), { label: (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(J, { as: "h2", className: S()($().selectedOptionTitle), children: e.label }) }) }) },
                ed = function() { var e = (0, R.useTranslations)().translate,
                        t = q.map(function(t) { return (0, z._)((0, a._)({}, t), { label: e(t.label) }) }),
                        n = t[0],
                        i = (0, l._)((0, c.useState)(el(n)), 2),
                        o = i[0],
                        r = i[1],
                        d = N.Z.useViewportTracking(N.Z.EventNames.HatDocumentSectionViewed); return (0, s.jsx)("section", { ref: d, id: "hat-document-section", className: S()($().section, "text-xs-center text-lg-left"), children: (0, s.jsxs)("div", { className: "container", children: [(0, s.jsxs)("div", { className: S()($().contentTop), children: [(0, s.jsx)(J, { as: "h2", className: S()($().title), children: (0, s.jsx)(R.Message, { dangerouslyTranslateInnerHTML: "hat.documentSection.title", params: { sourceOfFunds: (0, s.jsx)(x.Ph, { size: "md", block: !1, onChange: function(e) { r(el(e)), (0, U.j)(U.Vy.HatDocumentSectionSourceOfFundsClicked, (0, Y._)({}, U.Tg.SelectedSourceOfFunds, e.value)) }, options: t, selected: o }) } }) }), (0, s.jsx)("p", { className: S()($().description, "mw-body-2 hidden-xs hidden-sm hidden-md"), children: (0, s.jsx)(R.Message, { children: "hat.documentSection.description" }) })] }), (0, s.jsx)(eo, { selectedSourceOfFunds: o }), (0, s.jsx)(es, { selectedSourceOfFunds: o }), (0, s.jsx)("div", { className: S()($().link, "text-xs-center mw-link-2"), children: (0, s.jsx)(h.Z, { href: "/help/articles/2976418/what-documents-might-i-need-for-a-large-transfer", onClick: function() { return N.Z.track(N.Z.EventNames.HatDocumentSectionLearnMoreClicked) }, target: "_blank", children: (0, s.jsx)(R.Message, { children: "hat.documentSection.link.learnMore" }) }) })] }) }) },
                eu = n(30137),
                em = n(46587),
                eh = n(2323),
                ep = n(32346),
                ex = n(88064),
                ef = n.n(ex),
                eS = function() { var e = (0, c.useRef)(null),
                        t = (0, eh.k)().userLoggedIn,
                        n = (0, ep.jq)().isExistingUser,
                        i = (0, l._)((0, v.ZK)(), 1)[0],
                        o = i === P.S.EN || i === P.S.EN_US,
                        r = N.Z.EventNames,
                        a = r.HatSupportLoggedInChatClicked,
                        d = r.HatSupportLoggedOutChatClicked,
                        u = t ? a : d,
                        m = (0, A.v)().safeTranslate; return (0, s.jsx)("button", { onClick: function() { if (N.Z.track(u), !e.current || e.current.closed) { var i, s, c, o, r = (s = (i = { userLoggedIn: t, isExistingUser: n }).userLoggedIn, c = i.isExistingUser, o = encodeURIComponent("/help/contact/start-chat?&isHAT=true"), s ? { url: "/help/contact/chat?&selectedIssue=general-how-it-works&isHAT=true&source=hat-homepage", name: "_blank" } : c ? { url: "/web?redirectUrl=".concat(o), name: "_self" } : { url: "/register/?redirectUrl=".concat(o), name: "_self" });
                                e.current = window.open(r.url, r.name) } else e.current.focus() }, className: ef().liveChatButton, type: "button", children: (0, s.jsxs)("div", { className: ef().contentWrap, children: [(0, s.jsx)(x.qE, { type: "icon", size: "md", children: (0, s.jsx)(X.enk, { size: 24 }) }), (0, s.jsxs)("div", { className: ef().contentRight, children: [(0, s.jsxs)("div", { className: ef().textContent, children: [(0, s.jsx)("p", { className: "mw-body-2-bold", children: m(o ? { id: "hat.customerSupportSection.contact.chatToUs" } : { id: "hat.customerSupportSection.contact.chatToUs.nonEnglish" }) }), !t && (0, s.jsx)("p", { className: "mw-body-3", children: m({ id: "hat.customerSupportSection.contact.chat.log.in" }) })] }), (0, s.jsx)(X._Qn, {})] })] }) }) },
                ej = "/v1/contact/channels?language=en&ipCountry=GB&channelType=CHAT&queue=HAT&selectedProfileType=BUSINESS_AND_PERSONAL",
                e_ = (i = (0, eu._)(function(e) { var t; return (0, em.Jh)(this, function(n) { switch (n.label) {
                            case 0:
                                if (e) return [2, e.get({ upstream: O.g.COS, url: ej }).then(function(e) { return e.data })]; return [4, fetch("/gateway".concat(ej))];
                            case 1:
                                if ((t = n.sent()).ok) return [2, t.json()]; throw Error("Failed fetching HAT Chat open hours") } }) }), function(e) { return i.apply(this, arguments) }),
                ev = function() { var e = (0, l._)((0, c.useState)(!1), 2),
                        t = e[0],
                        n = e[1],
                        i = (0, A.v)().safeTranslate,
                        o = N.Z.useViewportTracking(N.Z.EventNames.HatCustomerServiceViewed),
                        r = (0, j.x)({}).httpClient; return (0, c.useEffect)(function() { var e;
                        (e = (0, eu._)(function() { var e, t; return (0, em.Jh)(this, function(i) { switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, e_(r)];
                                    case 1:
                                        return n(null === (t = i.sent()) || void 0 === t ? void 0 : null === (e = t[0]) || void 0 === e ? void 0 : e.open), [3, 3];
                                    case 2:
                                        return console.error(i.sent()), [3, 3];
                                    case 3:
                                        return [2] } }) }), function() { return e.apply(this, arguments) })() }, []), (0, s.jsx)("section", { ref: o, id: "customer-support-section", className: ef().section, children: (0, s.jsxs)("div", { className: "container", children: [(0, s.jsx)("div", { className: S()(ef().contentWrap, "col-xs-12 col-md-6 text-xs-center text-md-left"), children: (0, s.jsxs)("div", { className: ef().sectionContent, children: [(0, s.jsx)("h2", { className: S()(ef().title, "mw-heading-2"), children: i({ id: "hat.customerSupportSection.title" }) }), (0, s.jsx)("p", { className: S()(ef().description, "mw-body-2"), children: i({ id: "hat.customerSupportSection.description" }) }), (0, s.jsxs)("ul", { className: "text-xs-left", children: [(0, s.jsx)("li", { children: t ? (0, s.jsx)(eS, {}) : (0, s.jsx)(x.rU, { href: "mailto:largetransfers@wise.com", onClick: function() { return N.Z.track(N.Z.EventNames.HatSupportEmailClicked) }, target: "_blank", rel: "noopener noreferrer", className: "tw-link-with-chevron", children: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(x.qE, { className: ef().avatar, type: "icon", size: "md", children: (0, s.jsx)(X.enk, { className: ef().icon, size: 24 }) }), (0, s.jsx)("span", { className: "mw-body-2-bold", children: i({ id: "hat.customerSupportSection.contact.email" }) }), (0, s.jsx)(X._Qn, {})] }) }) }), (0, s.jsx)("li", { children: (0, s.jsxs)(x.rU, { href: "/help/11/getting-started/2961856/tips-for-getting-started-with-larger-transfers", onClick: function() { return N.Z.track(N.Z.EventNames.HatSupportHelpCentreClicked) }, target: "_blank", rel: "noopener noreferrer", className: "tw-link-with-chevron", children: [(0, s.jsx)(x.qE, { className: ef().avatar, type: "icon", size: "md", children: (0, s.jsx)(X.fy8, { className: ef().icon, size: 24 }) }), (0, s.jsx)("span", { className: "mw-body-2-bold", children: i({ id: "hat.customerSupportSection.findOutMore" }) }), (0, s.jsx)(X._Qn, {})] }) })] })] }) }), (0, s.jsx)("div", { className: "col-xs-12 col-md-6 m-t-2", children: (0, s.jsx)("img", { src: "/public-resources/assets/mca/high-amount/support_section_image.png", alt: "", loading: "lazy" }) })] }) }) },
                eg = function() { return (0, s.jsxs)("div", { className: "largeAmountsMain", children: [(0, s.jsx)(G, {}), (0, s.jsx)(o.ProtectYourMoneySection, {}), (0, s.jsx)(V, {}), (0, s.jsx)(ed, {}), (0, s.jsx)(r.Testimonials, {}), (0, s.jsx)(ev, {})] }) } }, 81970: function(e, t, n) { "use strict";
            n.d(t, { Z: function() { return r } }); var i = n(93128),
                s = n(67294),
                c = n(11752),
                o = n.n(c);

            function r(e) { var t = (0, i._)(s.useState(e), 2),
                    n = t[0],
                    c = t[1],
                    r = s.useRef(),
                    a = o()().publicRuntimeConfig; return s.useEffect(function() { var e = function() { window.location.pathname === a.MULTI_CURRENCY_account_URL ? c(null) : c(window.location.pathname.split("/")[1].toUpperCase()) }; return "function" == typeof window.onpopstate && (r.current = window.onpopstate), window.onpopstate = function(t) { e(), "function" == typeof r.current && r.current(t) },
                        function() { window.onpopstate = r.current } }, []), n } }, 86200: function(e) { e.exports = { hero: "HeroWithCalculator_hero__q_8J6", overlaps: "HeroWithCalculator_overlaps__musq_", calculatorContainer: "HeroWithCalculator_calculatorContainer___ON5l", calculator: "HeroWithCalculator_calculator__9_Yls", left: "HeroWithCalculator_left__QNSfA", right: "HeroWithCalculator_right__EFP8X" } }, 56593: function(e) { e.exports = { root: "Panel_root__j82jb" } }, 76041: function(e) { e.exports = { item: "Testimonial_item__YotQB", stars: "Testimonial_stars__rN5Rj", quote: "Testimonial_quote__SBWLg", cardFooter: "Testimonial_cardFooter__WNATD", author: "Testimonial_author__JpmmV", datePublished: "Testimonial_datePublished__MEw0x" } }, 57021: function(e) { e.exports = { cards: "Testimonials_cards__fWqb8", card: "Testimonials_card__vTQ_s", footer: "Testimonials_footer__ivUBR", trustpilotIcon: "Testimonials_trustpilotIcon__EzTiG" } }, 72177: function(e) { e.exports = { cardContainer: "ProtectYourMoneySection_cardContainer___3azY", card: "ProtectYourMoneySection_card__rVSzB", cardTop: "ProtectYourMoneySection_cardTop__jnm5L", cardMiddle: "ProtectYourMoneySection_cardMiddle__SXMUz", cardBottom: "ProtectYourMoneySection_cardBottom__SdQOl", icon: "ProtectYourMoneySection_icon__SR3ZM" } }, 38605: function(e) { e.exports = { volumeSection: "VolumeSection_volumeSection__T4u5_", description: "VolumeSection_description__VL7K_", slider: "VolumeSection_slider__rv3wZ" } }, 79056: function(e) { e.exports = { volumeSection: "VolumeSection_volumeSection___LzWU", description: "VolumeSection_description__zf6uA", slider: "VolumeSection_slider__va8D3", sliderWrapper: "VolumeSection_sliderWrapper__Ivqy1" } }, 88064: function(e) { e.exports = { section: "CustomerSupportSection_section__qAwHM", "tw-icon": "CustomerSupportSection_tw-icon__qazB_", sectionContent: "CustomerSupportSection_sectionContent__ry0eQ", contentWrap: "CustomerSupportSection_contentWrap__XfNO1", title: "CustomerSupportSection_title__WDV9x", description: "CustomerSupportSection_description__NFFBm", avatar: "CustomerSupportSection_avatar___QgXB", icon: "CustomerSupportSection_icon__mAxof", liveChatButton: "CustomerSupportSection_liveChatButton__oGPqK", contentRight: "CustomerSupportSection_contentRight__We0s0", textContent: "CustomerSupportSection_textContent__n3nd4" } }, 62153: function(e) { e.exports = { section: "DocumentSection_section__ebVtR", contentTop: "DocumentSection_contentTop__IbtVF", title: "DocumentSection_title__kBoSv", selectedOptionTitle: "DocumentSection_selectedOptionTitle__Fxawf", description: "DocumentSection_description__vhTE8", docItemTitle: "DocumentSection_docItemTitle__kDUAV", dataIconWrapper: "DocumentSection_dataIconWrapper__kyrER", dataIcon: "DocumentSection_dataIcon__UXZL3", table: "DocumentSection_table__vysgl", mobileTable: "DocumentSection_mobileTable__2nwhP", link: "DocumentSection_link___AgAD" } }, 46148: function(e) { e.exports = { title: "PricingSection_title__Fivh0", rateSection: "PricingSection_rateSection__zIa5x", graph: "PricingSection_graph__O24FG", description: "PricingSection_description__FxgHc" } }, 78326: function(e) { e.exports = { section: "StepByStepGuideSection_section__Bo9cP", heading: "StepByStepGuideSection_heading__Rn2XG", cardContainer: "StepByStepGuideSection_cardContainer__E8QaT", card: "StepByStepGuideSection_card__Xe80p", link: "StepByStepGuideSection_link__fE7T9", cardNumber: "StepByStepGuideSection_cardNumber__UdfqY", cardTitle: "StepByStepGuideSection_cardTitle__AFGKy" } } }
]);
//# sourceMappingURL=6981-934ccb4b3740cfdd.js.map