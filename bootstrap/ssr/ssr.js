import { unref, mergeProps, withCtx, openBlock, createBlock, Fragment, renderList, useSSRContext, resolveComponent, renderSlot, createTextVNode, ref, onMounted, watch, createVNode, toDisplayString, createCommentVNode, withModifiers, isRef, withDirectives, vModelCheckbox, useModel, computed, Transition, onUnmounted, withKeys, nextTick, createSSRApp, h as h$1 } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { Vue3Marquee } from "vue3-marquee";
import { useForm, Link, Head, usePage, createInertiaApp } from "@inertiajs/vue3";
import moment from "moment";
import { QuillEditor } from "@vueup/vue-quill";
import { BalloonEditor } from "@ckeditor/ckeditor5-build-balloon-block";
import { useReCaptcha, VueReCaptcha } from "vue-recaptcha-v3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$1j = {
  __name: "TechsMarquee",
  __ssrInlineRender: true,
  props: {
    technologies: Array
  },
  setup(__props) {
    const props = __props;
    console.log(props.technologies);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Vue3Marquee), mergeProps({
        clone: true,
        duration: 10,
        class: "bg-bgLight-200 p-4 overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.technologies, (technology) => {
              _push2(`<img${ssrRenderAttr("src", technology.logo)} class="w-20 mx-12"${_scopeId}>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                return openBlock(), createBlock("img", {
                  key: technology.id,
                  src: technology.logo,
                  class: "w-20 mx-12"
                }, null, 8, ["src"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/TechsMarquee.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1i = {
  __name: "FirstSection",
  __ssrInlineRender: true,
  props: {
    technologies: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownOrange-600" }, _attrs))}><div class="wrapper"><div class="flex flex-col justify-center gap-6 lg:w-1/2 lg:mr-3 py-12"><h1 class="text-7xl font-heading text-ownPurple-400"> Cześć, mam na imię Marek </h1><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Jestem <span class="font-heading text-fontLight">WebDeveloperem</span>, który z pasją tworzy strony internetowe. </h2><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Walczę na całej powierzchni programistycznego pola, wykorzystując <span class="font-heading text-fontLight">PHP</span> i <span class="font-heading text-fontLight">JavaScript</span> jako swoje oręża. </h2><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> To dzięki nim mogę realizować swoją wizję i tworzyć strony, które <span class="font-heading text-fontLight">zachwycają</span> odbiorców. </h2></div><div class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 xl:p-10 2xl:p-20"><img src="/assets/images/about/about.webp" alt="zdjęcie przedstawiające mój wizerunek" class="h-full object-cover box-shadow" loading="lazy"></div></div><div class="flex justify-center pb-12">`);
      _push(ssrRenderComponent(_sfc_main$1j, { technologies: __props.technologies }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/FirstSection.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1i
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1h = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 animate-bounce" }, _attrs))} data-v-c45eaaf4><li data-v-c45eaaf4><a href="https://www.facebook.com/marekgacekdev" target="_blank" data-v-c45eaaf4><img src="/assets/icons/facebook.svg" alt="" class="w-6 social" data-v-c45eaaf4></a></li><li data-v-c45eaaf4><a href="https://pl.linkedin.com/in/marek-gacek" target="_blank" data-v-c45eaaf4><img src="/assets/icons/linkedin.svg" alt="" class="w-6 social" data-v-c45eaaf4></a></li><li data-v-c45eaaf4><a href="https://github.com/marekgacek45" target="_blank" data-v-c45eaaf4><img src="/assets/icons/github.svg" alt="" class="w-6 social" data-v-c45eaaf4></a></li><li data-v-c45eaaf4><a href="https://www.youtube.com/@marekgacekdev" target="_blank" data-v-c45eaaf4><img src="/assets/icons/youtube.svg" alt="" class="w-8 social" data-v-c45eaaf4></a></li></ul>`);
}
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Social.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const Social = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-c45eaaf4"]]);
const _sfc_main$1g = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    isMobile: Boolean,
    isActive: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        as: "li",
        class: ["link", { "mobile": __props.isMobile, "desktop": !__props.isMobile, "active": __props.isActive }]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const _sfc_main$1f = {
  __name: "LinksDesktop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex gap-6 font-textArch text-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/o_mnie",
        isActive: _ctx.$page.component === "About/Index"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`O mnie`);
          } else {
            return [
              createTextVNode("O mnie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/uslugi",
        isActive: _ctx.$page.component === "Services/Index"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Usługi`);
          } else {
            return [
              createTextVNode("Usługi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/portfolio",
        isActive: _ctx.$page.component === "Portfolio/Index"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/kontakt",
        isActive: _ctx.$page.component === "Contact/Index"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontakt`);
          } else {
            return [
              createTextVNode("Kontakt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/blog",
        isActive: _ctx.$page.component === "Blog/Index"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul>`);
    };
  }
};
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Navigation/LinksDesktop.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = {
  __name: "HamburgerButton",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["hamburger hamburger--collapse inline-block lg:hidden", { "is-active": isActive.value }],
        type: "button"
      }, _attrs))} data-v-7006e8da><span class="hamburger-box" data-v-7006e8da><span class="hamburger-inner" data-v-7006e8da></span></span></button>`);
    };
  }
};
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Navigation/HamburgerButton.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const HamburgerButton = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-7006e8da"]]);
const _sfc_main$1d = {
  __name: "LinksMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const body = document.querySelector("body");
    const addOverflow = () => {
      body.classList.remove("overflow-y-hidden");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/o_mnie",
        isMobile: "true",
        isActive: _ctx.$page.component === "About/Index",
        onClick: addOverflow
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`O mnie`);
          } else {
            return [
              createTextVNode("O mnie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/uslugi",
        isMobile: "true",
        isActive: _ctx.$page.component === "About/Servies",
        onClick: addOverflow
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Usługi`);
          } else {
            return [
              createTextVNode("Usługi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/portfolio",
        isMobile: "true",
        isActive: _ctx.$page.component === "About/Portfolio",
        onClick: addOverflow
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfolio`);
          } else {
            return [
              createTextVNode("Portfolio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/contact",
        isMobile: "true",
        isActive: _ctx.$page.component === "About/Contact",
        onClick: addOverflow
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kontakt`);
          } else {
            return [
              createTextVNode("Kontakt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: "/blog",
        isMobile: "true",
        isActive: _ctx.$page.component === "About/Blog",
        onClick: addOverflow
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul>`);
    };
  }
};
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Navigation/LinksMobile.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const _sfc_main$1c = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  props: {
    showModal: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.showModal) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bg fixed lg:absolute top-0 bottom-0 right-0 left-0 overflow-hidden z-40" }, _attrs))} data-v-6697a573><div class="modal flex justify-center items-center flex-col gap-5" data-v-6697a573>`);
        _push(ssrRenderComponent(_sfc_main$1d, null, null, _parent));
        _push(ssrRenderComponent(Social, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Navigation/MobileMenu.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const MobileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-6697a573"]]);
const _sfc_main$1b = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const body = document.querySelector("body");
    onMounted(() => {
      watch(showModal, (newValue) => {
        if (newValue) {
          body.classList.add("overflow-y-hidden");
        } else {
          body.classList.remove("overflow-y-hidden");
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-bgLight-200 text-fon z-50 fixed top-0 left-0 right-0" }, _attrs))}><div class="flex justify-between items-center max-w-screen-2xl mx-auto py-3 px-3 xs:px-6 md:px-12 2xl:px-3"><div class="hidden 2xl:flex justify-start w-1/3">`);
      _push(ssrRenderComponent(Social, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/",
        class: "flex flex-start 2xl:justify-center items-center gap-1 w-1/3 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-heading text-4xl group-hover:text-ownTurquise-400 duration-300"${_scopeId}>Marek</span><img src="/assets/logo/logo.png" alt="moje logo" class="w-16 mx-2"${_scopeId}><span class="font-heading text-4xl group-hover:text-ownPurple-400 duration-300"${_scopeId}>Gacek</span>`);
          } else {
            return [
              createVNode("span", { class: "font-heading text-4xl group-hover:text-ownTurquise-400 duration-300" }, "Marek"),
              createVNode("img", {
                src: "/assets/logo/logo.png",
                alt: "moje logo",
                class: "w-16 mx-2"
              }),
              createVNode("span", { class: "font-heading text-4xl group-hover:text-ownPurple-400 duration-300" }, "Gacek")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden lg:flex justify-end w-1/3">`);
      _push(ssrRenderComponent(_sfc_main$1f, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(HamburgerButton, {
        onClick: ($event) => showModal.value = !showModal.value
      }, null, _parent));
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(MobileMenu, { showModal: showModal.value }, null, _parent));
      }, "body", false, _parent);
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Navigation/NavBar.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const _sfc_main$1a = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-4 border-2 border-r-0 last:border-r-2 border-white font-text text-2xl text-fontLight hover:border-dashed hover:animate-shake text-center sm:text-left" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FooterSocialItem.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const FooterSocialItem = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$19 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-bgDark-400 py-16" }, _attrs))}><div class="flex flex-col lg:flex-row justify-around 2xl:justify-between items-center gap-12 lg:gap-0 max-w-screen-xl mx-auto"><div class="flex flex-col xs:flex-row justify-center items-center gap-6 sm:gap-16 order-1 lg:order-none"><div class="flex justify-start items-center order-1 xs:order-none"><div class=""><h2 class="font-heading text-6xl text-ownYellow-400 hover:text-ownTurquise-600 transition-color">`);
      _push(ssrRenderComponent(_component_Link, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Marek<br${_scopeId}>Gacek<br${_scopeId}>`);
          } else {
            return [
              createTextVNode("Marek"),
              createVNode("br"),
              createTextVNode("Gacek"),
              createVNode("br")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><span class="flex gap-3 text-3xl font-heading text-fontLight mt-4"><img src="/assets/icons/copy.svg" alt="" class="w-7 fill-white"> ${ssrInterpolate(unref(year))}</span></div></div><div class="max-w-[220px] lg:hidden 2xl:inline-block"><a href="/assets/gifs/bolec.gif" target="_blank"><p class="text-3xl text-center xs:text-left font-heading text-ownPurple-400 hover:text-ownPink-200 transition:color"> Coco Jumbo i do przodu! <br>To moje hasło. <br>Dobre, nie? </p></a></div></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-end items-center px-4 lg:px-0">`);
      _push(ssrRenderComponent(FooterSocialItem, { class: "col-span-2 border-r-2 sm:border-r-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Link, { href: "/polityka_prywatnosci" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Polityka Prywatności`);
                } else {
                  return [
                    createTextVNode("Polityka Prywatności")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Link, { href: "/polityka_prywatnosci" }, {
                default: withCtx(() => [
                  createTextVNode("Polityka Prywatności")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(FooterSocialItem, { class: "border-r-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="mailto:kontakt@marekgacek.pl"${_scopeId}>Email</a>`);
          } else {
            return [
              createVNode("a", { href: "mailto:kontakt@marekgacek.pl" }, "Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(FooterSocialItem, { class: "border-r-2 sm:border-r-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://www.facebook.com/marekgacekdev" target="_blank"${_scopeId}>Facebook</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://www.facebook.com/marekgacekdev",
                target: "_blank"
              }, "Facebook")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(FooterSocialItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://www.linkedin.com/in/marek-gacek/" target="_blank"${_scopeId}>Linkedin</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://www.linkedin.com/in/marek-gacek/",
                target: "_blank"
              }, "Linkedin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(FooterSocialItem, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://github.com/marekgacek45" target="_blank"${_scopeId}>Github</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://github.com/marekgacek45",
                target: "_blank"
              }, "Github")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Footer.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _sfc_main$18 = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<template><div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1b, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$19, null, null, _parent));
      _push(`</div></template>`);
    };
  }
};
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section lg:h-[calc(100vh-71px)] bg-bgLight-400" }, _attrs))}><div class="wrapper"><div class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 xl:p-10 2xl:p-20 order-1 lg:order-none"><img src="/assets/images/about/about-2.webp" alt="człowiek sterujący robotem" class="h-full object-cover box-shadow" loading="lazy"></div><div class="flex flex-col justify-center gap-6 lg:w-1/2 lg:mr-3 py-12"><h1 class="text-7xl font-heading text-ownPurple-400">Coś więcej niż praca</h1><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Nie tylko tworzę strony, ale też się nimi <span class="font-heading text-ownPink-400">dzielę</span>. </h2><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Na moim `);
  _push(ssrRenderComponent(_component_Link, {
    href: "/blog",
    class: "font-heading text-ownPink-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` blogu`);
      } else {
        return [
          createTextVNode(" blogu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` znajdziesz wiele ciekawych artykułów na temat webdevelopmentu, technologii i trendów. </h2><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Zapraszam cię na mój <a href="https://www.youtube.com/@marekgacekdev" target="_blank" class="font-heading text-ownPink-400">kanał YouTube</a>, gdzie pokazuję, jak tworzę projekty od zera, jak rozwiązuję problemy i jak testuję swoje umiejętności. </h2></div></div></section>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/SecondSection.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const SecondSection = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SecondSection
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$16 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    technologies: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Dowiedz się co nieco o mnie | Marek Gacek" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Zajrzyj i poznaj programistę, który łączy kodowanie i marketing w niebanalny sposób. Wejdź i zobacz, jak moja praca wyróżnia się w świecie online"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Zajrzyj i poznaj programistę, który łączy kodowanie i marketing w niebanalny sposób. Wejdź i zobacz, jak moja praca wyróżnia się w świecie online"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1i, { technologies: __props.technologies }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SecondSection, null, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode(_sfc_main$1i, { technologies: __props.technologies }, null, 8, ["technologies"]),
                createVNode(SecondSection)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About/Index.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$16
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$15 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-3/4 mx-auto mb-7" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Field.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const Field = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$14 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "absolute text-2xl font-heading uppercase text-fontDark duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-bgLight-200 px-2 peer-focus:px-4 peer-focus:text-ownYellow-400 peer-focus:bg-ownPurple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label>`);
}
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Label.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const Label = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$13 = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "block px-2.5 pb-2.5 pt-4 w-full text-lg text-fontDark bg-transparent border-1 border-fontDark appearance-none focus:outline-none focus:ring-0 focus:border-ownPurple-400 peer box-shadow font-text duration-300",
        placeholder: " ",
        value: __props.modelValue
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Input.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _sfc_main$12 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-3 text-left text-base font-bold ml-1 text-red-600" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Error.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const Error$1 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$11 = {
  __name: "OldSchoolCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    customClass: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["box-shadow", __props.customClass]
      }, _attrs))}><div class="bg-bgDark-400 p-2"><span class="text-xl font-text font-bold text-fontLight uppercase">${ssrInterpolate(__props.title)}</span></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OldSchoolCard.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = {
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: {
    href: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "text-2xl font-text font-bold border border-transparent hover:border-ownYellow-400 hover:bg-ownYellow-400 py-3 duration-300 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Link, {
        href: __props.href,
        class: "flex justify-start items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Admin/SidebarItem.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0 top-0 bg-ownPurple-400 z-50" }, _attrs))}><div class="flex flex-col justify-center h-full px-4 py-4"><div><ul class="space-y-4">`);
      _push(ssrRenderComponent(_sfc_main$10, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/dashboard.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/dashboard.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        href: _ctx.route("admin.post.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/post.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Posty</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/post.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Posty")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, { href: "/admin/projekty" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/project.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Projekty</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/project.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Projekty")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        href: _ctx.route("admin.comment.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/comment.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Komentarze</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/comment.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Komentarze")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        href: _ctx.route("admin.category.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/category.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Kategorie</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/category.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Kategorie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, {
        href: _ctx.route("admin.technology.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/technology.svg" alt="" width="32"${_scopeId}> <span class="hidden xl:inline-block"${_scopeId}>Technologie</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/technology.svg",
                alt: "",
                width: "32"
              }),
              createTextVNode(),
              createVNode("span", { class: "hidden xl:inline-block" }, "Technologie")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$10, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/icons/admin/logout.svg" alt="" width="32"${_scopeId}><span class="hidden xl:inline-block"${_scopeId}>Wyloguj</span>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/icons/admin/logout.svg",
                alt: "",
                width: "32"
              }),
              createVNode("span", { class: "hidden xl:inline-block" }, "Wyloguj")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div><ul></ul></div></aside>`);
    };
  }
};
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/SideBar.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-ownPurple-400 fixed top-0 right-0 left-0 py-3 px-4 flex justify-between items-center z-50" }, _attrs))}><div class="flex justify-center items-center gap-6"><div>`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/",
    class: "flex items-center gap-1 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="font-heading text-4xl group-hover:text-ownTurquise-400 duration-300 hidden xl:block"${_scopeId}>Marek</span><img src="/assets/logo/logo.png" alt="moje logo" class="w-16"${_scopeId}><span class="font-heading text-4xl group-hover:text-ownPurple-400 duration-300 hidden xl:block"${_scopeId}>Gacek</span>`);
      } else {
        return [
          createVNode("span", { class: "font-heading text-4xl group-hover:text-ownTurquise-400 duration-300 hidden xl:block" }, "Marek"),
          createVNode("img", {
            src: "/assets/logo/logo.png",
            alt: "moje logo",
            class: "w-16"
          }),
          createVNode("span", { class: "font-heading text-4xl group-hover:text-ownPurple-400 duration-300 hidden xl:block" }, "Gacek")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex justify-center items-center gap-4"><button><img src="/assets/icons/admin/menu.svg" alt="" width="32"></button><button><img src="/assets/icons/admin/moon.svg" alt="" width="32"></button></div></div><div class="flex justify-center items-center gap-4"><span class="font-heading text-2xl hidden sm:inline-block">gacmen45</span><div class="border rounded-full overflow-hidden w-12 h-12"><img src="/assets/logo/logo.png" alt="moje logo" class="w-full h-full object-cover"></div></div></nav>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Admin/NavBar.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$Z = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<template><div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$$, null, null, _parent));
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`<main class="ml-[98px] xl:ml-[220px] mt-[90px] p-4 sm:p-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></template>`);
    };
  }
};
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: "button",
    class: "px-16 py-4 bg-ownPurple-400 hover:bg-ownPurple-600 text-xl sm:text-xl md:text-3xl font-text font-bold hover:animate-shake duration-300 box-shadow"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/PrimaryButton.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const PrimaryButton$1 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$X = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object
  },
  setup(__props) {
    const form = useForm({
      name: ""
    });
    const submit = () => {
      form.post(route("admin.category.store"), {
        preserveScroll: true,
        onSuccess: () => {
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Kategorię",
              class: "w-1/2 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.name), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "name",
                                name: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "name",
                                id: "name"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Nazwa")
                                ]),
                                _: 1
                              }),
                              unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Kategorię",
                class: "w-1/2 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "name",
                              name: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.name), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Categories/Create.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    category: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.category.id,
      name: props.category.name
    });
    const submit = () => {
      form.put(route("admin.category.update", props.category.id), {
        preserveScroll: true,
        onSuccess: () => {
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Projekt",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.name), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Edytuj`);
                            } else {
                              return [
                                createTextVNode("Edytuj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Edytuj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "name",
                                name: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "name",
                                id: "name"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Nazwa")
                                ]),
                                _: 1
                              }),
                              unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Edytuj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Projekt",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "name",
                              name: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.name), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Edytuj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Categories/Edit.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$W
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isModalOpen: Boolean,
    closeModal: Function,
    title: String
  },
  emits: ["update:isModalOpen"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isModalOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["fixed inset-0 flex justify-center items-center px-6 sm:px-12 2xl:px-0 pb-12 pt-32 lg:pt-0 bg-bgDark-400 bg-opacity-50", _ctx.classes]
        }, _attrs))} data-v-bb07739f><div class="bg-bgLight-200" data-v-bb07739f>`);
        _push(ssrRenderComponent(_sfc_main$11, {
          title: __props.title,
          class: "max-w-screen-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/Modal.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-bb07739f"]]);
const _sfc_main$U = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    projects: Object,
    categories: Object
  },
  setup(__props) {
    let isModalOpen = ref(false);
    const openModal = (category) => {
      isModalOpen.value = true;
      category.value = category;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      const _component_v_if = resolveComponent("v-if");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2be249d0>`);
      _push(ssrRenderComponent(_component_Head, { title: "Kategorie" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto" data-v-2be249d0${_scopeId}><table class="mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" data-v-2be249d0${_scopeId}><caption class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" data-v-2be249d0${_scopeId}> Kategorie </caption><thead class="text-sm text-fontDark uppercase" data-v-2be249d0${_scopeId}><tr data-v-2be249d0${_scopeId}><th scope="col" class="px-6 py-3 hidden sm:table-cell" data-v-2be249d0${_scopeId}> # </th><th scope="col" class="px-6 py-3" data-v-2be249d0${_scopeId}>Nazwa</th><th scope="col" class="px-6 py-3 hidden lg:table-cell" data-v-2be249d0${_scopeId}> Data dodania </th><th scope="col" class="px-6 py-3" data-v-2be249d0${_scopeId}>Akcja</th></tr></thead><tbody data-v-2be249d0${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category, index) => {
              _push2(`<tr class="bg-white dark:bg-gray-800" data-v-2be249d0${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell" data-v-2be249d0${_scopeId}>${ssrInterpolate(index + 1)}</th><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-2be249d0${_scopeId}>${ssrInterpolate(category.name)}</td><td class="px-6 py-4 hidden lg:table-cell" data-v-2be249d0${_scopeId}>${ssrInterpolate(formatDate(category.created_at))}</td><td class="px-6 py-4 flex gap-4 items-center" data-v-2be249d0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.category.edit", category.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="/assets/icons/admin/edit.svg" alt="" class="w-6 hover:animate-shake" data-v-2be249d0${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "/assets/icons/admin/edit.svg",
                        alt: "",
                        class: "w-6 hover:animate-shake"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button data-v-2be249d0${_scopeId}><img src="/assets/icons/admin/trash.svg" alt="" class="w-6 hover:animate-shake" data-v-2be249d0${_scopeId}></button>`);
              _push2(ssrRenderComponent(_component_v_if, { isModalOpen: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Modal, {
                      title: "usuń",
                      isModalOpen: unref(isModalOpen),
                      "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black p-12 flex flex-col" data-v-2be249d0${_scopeId3}><span class="text-lg" data-v-2be249d0${_scopeId3}>Czy na pewno chcesz usunąć tę kategorię?</span><div class="flex justify-center items-center gap-12 mt-12" data-v-2be249d0${_scopeId3}>`);
                          _push4(ssrRenderComponent(PrimaryButton$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Link, {
                                  onClick: closeModal,
                                  method: "DELETE",
                                  href: _ctx.route(
                                    "admin.category.delete",
                                    category.id
                                  )
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Tak `);
                                    } else {
                                      return [
                                        createTextVNode(" Tak ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.category.delete",
                                      category.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                              createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                              createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                createVNode(PrimaryButton$1, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Link, {
                                      onClick: closeModal,
                                      method: "DELETE",
                                      href: _ctx.route(
                                        "admin.category.delete",
                                        category.id
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Tak ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Modal, {
                        title: "usuń",
                        isModalOpen: unref(isModalOpen),
                        "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                            createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                            createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                              createVNode(PrimaryButton$1, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.category.delete",
                                      category.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div data-v-2be249d0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.category.create"),
              class: "absolute bottom-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/icons/admin/plus.svg" alt="" class="w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake" data-v-2be249d0${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("table", { class: "mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" }, [
                  createVNode("caption", { class: "p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" }, " Kategorie "),
                  createVNode("thead", { class: "text-sm text-fontDark uppercase" }, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden sm:table-cell"
                      }, " # "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Nazwa"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, " Data dodania "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Akcja")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                      return openBlock(), createBlock("tr", {
                        key: category.id,
                        class: "bg-white dark:bg-gray-800"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                        }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, toDisplayString(category.name), 1),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, toDisplayString(formatDate(category.created_at)), 1),
                        createVNode("td", { class: "px-6 py-4 flex gap-4 items-center" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("admin.category.edit", category.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/assets/icons/admin/edit.svg",
                                alt: "",
                                class: "w-6 hover:animate-shake"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("button", { onClick: openModal }, [
                            createVNode("img", {
                              src: "/assets/icons/admin/trash.svg",
                              alt: "",
                              class: "w-6 hover:animate-shake"
                            })
                          ]),
                          createVNode(_component_v_if, { isModalOpen: "" }, {
                            default: withCtx(() => [
                              createVNode(Modal, {
                                title: "usuń",
                                isModalOpen: unref(isModalOpen),
                                "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                                    createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                                    createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                      createVNode(PrimaryButton$1, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Link, {
                                            onClick: closeModal,
                                            method: "DELETE",
                                            href: _ctx.route(
                                              "admin.category.delete",
                                              category.id
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tak ")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_Link, {
                  href: _ctx.route("admin.category.create"),
                  class: "absolute bottom-6"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Categories/Index.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-2be249d0"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = {
  __name: "TextArea",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
        rows: "5",
        class: "block px-2.5 pb-2.5 pt-4 w-full text-lg text-fontDark bg-transparent border-1 border-fontDark appearance-none focus:outline-none focus:ring-0 focus:border-ownPurple-400 peer box-shadow font-text duration-300 max-h-[300px]",
        placeholder: " ",
        value: __props.modelValue
      }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/TextArea.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object
  },
  setup(__props) {
    const fileChange = (e2) => {
      form.logo = e2.target.files[0];
    };
    const form = useForm({
      link: "",
      logo: null,
      body: ""
    });
    const submit = () => {
      form.post(route("admin.comment.store"), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Kategorię",
              class: "w-1/2 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "link",
                          name: "link",
                          modelValue: unref(form).link,
                          "onUpdate:modelValue": ($event) => unref(form).link = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "link",
                          id: "link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link`);
                            } else {
                              return [
                                createTextVNode("Link")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.link) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.link)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.link), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "link",
                            name: "link",
                            modelValue: unref(form).link,
                            "onUpdate:modelValue": ($event) => unref(form).link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "link",
                            id: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<input type="file"${_scopeId3}>`);
                        if (unref(form).errors.logo) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.logo)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$T, {
                          id: "body",
                          name: "body",
                          modelValue: unref(form).body,
                          "onUpdate:modelValue": ($event) => unref(form).body = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "body",
                          id: "body"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Treść`);
                            } else {
                              return [
                                createTextVNode("Treść")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.body) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.body)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.body), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$T, {
                            id: "body",
                            name: "body",
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "body",
                            id: "body"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Treść")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.body), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "link",
                              name: "link",
                              modelValue: unref(form).link,
                              "onUpdate:modelValue": ($event) => unref(form).link = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "link",
                              id: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.link), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              onChange: fileChange
                            }, null, 32),
                            unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$T, {
                              id: "body",
                              name: "body",
                              modelValue: unref(form).body,
                              "onUpdate:modelValue": ($event) => unref(form).body = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "body",
                              id: "body"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Treść")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.body), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Kategorię",
                class: "w-1/2 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "link",
                            name: "link",
                            modelValue: unref(form).link,
                            "onUpdate:modelValue": ($event) => unref(form).link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "link",
                            id: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$T, {
                            id: "body",
                            name: "body",
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "body",
                            id: "body"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Treść")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.body), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Comments/Create.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    comment: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      link: props.comment.link,
      logo: props.comment.logo,
      body: props.comment.body
    });
    const fileChange = (e2) => {
      form.logo = e2.target.files[0];
    };
    const submit = () => {
      form.put(route("admin.comment.update", props.comment.id), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Kategorię",
              class: "w-1/2 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "link",
                          name: "link",
                          modelValue: unref(form).link,
                          "onUpdate:modelValue": ($event) => unref(form).link = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "link",
                          id: "link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link`);
                            } else {
                              return [
                                createTextVNode("Link")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.link) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.link)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.link), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "link",
                            name: "link",
                            modelValue: unref(form).link,
                            "onUpdate:modelValue": ($event) => unref(form).link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "link",
                            id: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<input type="file"${_scopeId3}>`);
                        if (unref(form).errors.logo) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.logo)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$T, {
                          id: "body",
                          name: "body",
                          modelValue: unref(form).body,
                          "onUpdate:modelValue": ($event) => unref(form).body = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "body",
                          id: "body"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Treść`);
                            } else {
                              return [
                                createTextVNode("Treść")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.body) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.body)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.body), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$T, {
                            id: "body",
                            name: "body",
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "body",
                            id: "body"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Treść")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.body), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "link",
                              name: "link",
                              modelValue: unref(form).link,
                              "onUpdate:modelValue": ($event) => unref(form).link = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "link",
                              id: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.link), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              onChange: fileChange
                            }, null, 32),
                            unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$T, {
                              id: "body",
                              name: "body",
                              modelValue: unref(form).body,
                              "onUpdate:modelValue": ($event) => unref(form).body = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "body",
                              id: "body"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Treść")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.body), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Kategorię",
                class: "w-1/2 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "link",
                            name: "link",
                            modelValue: unref(form).link,
                            "onUpdate:modelValue": ($event) => unref(form).link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "link",
                            id: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.link ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$T, {
                            id: "body",
                            name: "body",
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "body",
                            id: "body"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Treść")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.body ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.body), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Comments/Edit.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$R
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    projects: Object,
    comments: Object
  },
  setup(__props) {
    let isModalOpen = ref(false);
    const openModal = (comment) => {
      isModalOpen.value = true;
      comment.value = comment;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      const _component_v_if = resolveComponent("v-if");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7c9cd76c>`);
      _push(ssrRenderComponent(_component_Head, { title: "Komentarze" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto" data-v-7c9cd76c${_scopeId}><table class="mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" data-v-7c9cd76c${_scopeId}><caption class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" data-v-7c9cd76c${_scopeId}> Komentarze </caption><thead class="text-sm text-fontDark uppercase" data-v-7c9cd76c${_scopeId}><tr data-v-7c9cd76c${_scopeId}><th scope="col" class="px-6 py-3 hidden sm:table-cell" data-v-7c9cd76c${_scopeId}> # </th><th scope="col" class="px-6 py-3" data-v-7c9cd76c${_scopeId}>Nazwa</th><th scope="col" class="px-6 py-3 hidden lg:table-cell" data-v-7c9cd76c${_scopeId}> Data dodania </th><th scope="col" class="px-6 py-3" data-v-7c9cd76c${_scopeId}>Akcja</th></tr></thead><tbody data-v-7c9cd76c${_scopeId}><!--[-->`);
            ssrRenderList(__props.comments, (comment, index) => {
              _push2(`<tr class="bg-white dark:bg-gray-800" data-v-7c9cd76c${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell" data-v-7c9cd76c${_scopeId}>${ssrInterpolate(index + 1)}</th><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-7c9cd76c${_scopeId}>${ssrInterpolate(comment.link)}</td><td class="px-6 py-4 hidden lg:table-cell" data-v-7c9cd76c${_scopeId}>${ssrInterpolate(formatDate(comment.created_at))}</td><td class="px-6 py-4 flex gap-4 items-center" data-v-7c9cd76c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.comment.edit", comment.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="/assets/icons/admin/edit.svg" alt="" class="w-6 hover:animate-shake" data-v-7c9cd76c${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "/assets/icons/admin/edit.svg",
                        alt: "",
                        class: "w-6 hover:animate-shake"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button data-v-7c9cd76c${_scopeId}><img src="/assets/icons/admin/trash.svg" alt="" class="w-6 hover:animate-shake" data-v-7c9cd76c${_scopeId}></button>`);
              _push2(ssrRenderComponent(_component_v_if, { isModalOpen: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Modal, {
                      title: "usuń",
                      isModalOpen: unref(isModalOpen),
                      "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black p-12 flex flex-col" data-v-7c9cd76c${_scopeId3}><span class="text-lg" data-v-7c9cd76c${_scopeId3}>Czy na pewno chcesz usunąć tę kategorię?</span><div class="flex justify-center items-center gap-12 mt-12" data-v-7c9cd76c${_scopeId3}>`);
                          _push4(ssrRenderComponent(PrimaryButton$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Link, {
                                  onClick: closeModal,
                                  method: "DELETE",
                                  href: _ctx.route(
                                    "admin.comment.delete",
                                    comment.id
                                  )
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Tak `);
                                    } else {
                                      return [
                                        createTextVNode(" Tak ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.comment.delete",
                                      comment.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                              createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                              createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                createVNode(PrimaryButton$1, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Link, {
                                      onClick: closeModal,
                                      method: "DELETE",
                                      href: _ctx.route(
                                        "admin.comment.delete",
                                        comment.id
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Tak ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Modal, {
                        title: "usuń",
                        isModalOpen: unref(isModalOpen),
                        "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                            createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                            createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                              createVNode(PrimaryButton$1, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.comment.delete",
                                      comment.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div data-v-7c9cd76c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.comment.create"),
              class: "absolute bottom-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/icons/admin/plus.svg" alt="" class="w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake" data-v-7c9cd76c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("table", { class: "mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" }, [
                  createVNode("caption", { class: "p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" }, " Komentarze "),
                  createVNode("thead", { class: "text-sm text-fontDark uppercase" }, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden sm:table-cell"
                      }, " # "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Nazwa"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, " Data dodania "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Akcja")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.comments, (comment, index) => {
                      return openBlock(), createBlock("tr", {
                        key: comment.id,
                        class: "bg-white dark:bg-gray-800"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                        }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, toDisplayString(comment.link), 1),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, toDisplayString(formatDate(comment.created_at)), 1),
                        createVNode("td", { class: "px-6 py-4 flex gap-4 items-center" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("admin.comment.edit", comment.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/assets/icons/admin/edit.svg",
                                alt: "",
                                class: "w-6 hover:animate-shake"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("button", { onClick: openModal }, [
                            createVNode("img", {
                              src: "/assets/icons/admin/trash.svg",
                              alt: "",
                              class: "w-6 hover:animate-shake"
                            })
                          ]),
                          createVNode(_component_v_if, { isModalOpen: "" }, {
                            default: withCtx(() => [
                              createVNode(Modal, {
                                title: "usuń",
                                isModalOpen: unref(isModalOpen),
                                "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                                    createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                                    createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                      createVNode(PrimaryButton$1, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Link, {
                                            onClick: closeModal,
                                            method: "DELETE",
                                            href: _ctx.route(
                                              "admin.comment.delete",
                                              comment.id
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tak ")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_Link, {
                  href: _ctx.route("admin.comment.create"),
                  class: "absolute bottom-6"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Comments/Index.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-7c9cd76c"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Panel Admina" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object
  },
  setup(__props) {
    const form = useForm({
      title: "",
      body: ""
    });
    const submit = () => {
      form.post(route("admin.post.store"), {
        preserveScroll: true,
        onSuccess: () => {
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Post" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Post",
              class: "w-full mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "title",
                          name: "title",
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "title",
                          id: "title"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tytuł`);
                            } else {
                              return [
                                createTextVNode("Tytuł")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.title) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.title), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "title",
                            name: "title",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "title",
                            id: "title"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tytuł")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.title), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(QuillEditor), {
                    theme: "snow",
                    toolbar: "full",
                    content: unref(form).body,
                    "onUpdate:content": ($event) => unref(form).body = $event,
                    contentType: "html"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "title",
                                name: "title",
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "title",
                                id: "title"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Tytuł")
                                ]),
                                _: 1
                              }),
                              unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(form).errors.title), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(Field)
                        ]),
                        createVNode(unref(QuillEditor), {
                          theme: "snow",
                          toolbar: "full",
                          content: unref(form).body,
                          "onUpdate:content": ($event) => unref(form).body = $event,
                          contentType: "html"
                        }, null, 8, ["content", "onUpdate:content"]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Post",
                class: "w-full mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "title",
                              name: "title",
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "title",
                              id: "title"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tytuł")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.title), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field)
                      ]),
                      createVNode(unref(QuillEditor), {
                        theme: "snow",
                        toolbar: "full",
                        content: unref(form).body,
                        "onUpdate:content": ($event) => unref(form).body = $event,
                        contentType: "html"
                      }, null, 8, ["content", "onUpdate:content"]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Posts/Create.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    post: Object
  },
  setup(__props) {
    const props = __props;
    const editor = ref(BalloonEditor);
    ref("<p>Your Post Content</p>");
    const editorConfig = ref();
    const form = useForm({
      title: props.post.title,
      body: props.post.body,
      post_title: "",
      post_image: ""
    });
    const submit = () => {
      form.put(route("admin.post.update", props.post.id), {
        preserveScroll: true,
        onSuccess: () => {
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_ckeditor = resolveComponent("ckeditor");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Post" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Post",
              class: "w-full mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "title",
                          name: "title",
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "title",
                          id: "title"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tytuł`);
                            } else {
                              return [
                                createTextVNode("Tytuł")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.title) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.title), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "title",
                            name: "title",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "title",
                            id: "title"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tytuł")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.title), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_ckeditor, {
                          editor: editor.value,
                          modelValue: unref(form).body,
                          "onUpdate:modelValue": ($event) => unref(form).body = $event,
                          config: editorConfig.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_ckeditor, {
                            editor: editor.value,
                            modelValue: unref(form).body,
                            "onUpdate:modelValue": ($event) => unref(form).body = $event,
                            config: editorConfig.value
                          }, null, 8, ["editor", "modelValue", "onUpdate:modelValue", "config"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "title",
                                name: "title",
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "title",
                                id: "title"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Tytuł")
                                ]),
                                _: 1
                              }),
                              unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(form).errors.title), 1)
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_component_ckeditor, {
                                editor: editor.value,
                                modelValue: unref(form).body,
                                "onUpdate:modelValue": ($event) => unref(form).body = $event,
                                config: editorConfig.value
                              }, null, 8, ["editor", "modelValue", "onUpdate:modelValue", "config"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Post",
                class: "w-full mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "title",
                              name: "title",
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "title",
                              id: "title"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Tytuł")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.title ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.title), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_component_ckeditor, {
                              editor: editor.value,
                              modelValue: unref(form).body,
                              "onUpdate:modelValue": ($event) => unref(form).body = $event,
                              config: editorConfig.value
                            }, null, 8, ["editor", "modelValue", "onUpdate:modelValue", "config"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Posts/Edit.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$N
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: Object
  },
  setup(__props) {
    let isModalOpen = ref(false);
    const openModal = (post) => {
      isModalOpen.value = true;
      post.value = post;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      const _component_v_if = resolveComponent("v-if");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e5b7cbf5>`);
      _push(ssrRenderComponent(_component_Head, { title: "Posty" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto" data-v-e5b7cbf5${_scopeId}><table class="mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" data-v-e5b7cbf5${_scopeId}><caption class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" data-v-e5b7cbf5${_scopeId}> Posty </caption><thead class="text-sm text-fontDark uppercase" data-v-e5b7cbf5${_scopeId}><tr data-v-e5b7cbf5${_scopeId}><th scope="col" class="px-6 py-3 hidden sm:table-cell" data-v-e5b7cbf5${_scopeId}> # </th><th scope="col" class="px-6 py-3" data-v-e5b7cbf5${_scopeId}>Tytuł</th><th scope="col" class="px-6 py-3 hidden lg:table-cell" data-v-e5b7cbf5${_scopeId}> Data dodania </th><th scope="col" class="px-6 py-3" data-v-e5b7cbf5${_scopeId}>Akcja</th></tr></thead><tbody data-v-e5b7cbf5${_scopeId}><!--[-->`);
            ssrRenderList(__props.posts, (post, index) => {
              _push2(`<tr class="bg-white dark:bg-gray-800" data-v-e5b7cbf5${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell" data-v-e5b7cbf5${_scopeId}>${ssrInterpolate(index + 1)}</th><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-e5b7cbf5${_scopeId}>${ssrInterpolate(post.title)}</td><td class="px-6 py-4 hidden lg:table-cell" data-v-e5b7cbf5${_scopeId}>${ssrInterpolate(formatDate(post.created_at))}</td><td class="px-6 py-4 flex gap-4 items-center" data-v-e5b7cbf5${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.post.edit", post.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="/assets/icons/admin/edit.svg" alt="" class="w-6 hover:animate-shake" data-v-e5b7cbf5${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "/assets/icons/admin/edit.svg",
                        alt: "",
                        class: "w-6 hover:animate-shake"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button data-v-e5b7cbf5${_scopeId}><img src="/assets/icons/admin/trash.svg" alt="" class="w-6 hover:animate-shake" data-v-e5b7cbf5${_scopeId}></button>`);
              _push2(ssrRenderComponent(_component_v_if, { isModalOpen: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Modal, {
                      title: "usuń",
                      isModalOpen: unref(isModalOpen),
                      "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black p-12 flex flex-col" data-v-e5b7cbf5${_scopeId3}><span class="text-lg" data-v-e5b7cbf5${_scopeId3}>Czy na pewno chcesz usunąć tę kategorię?</span><div class="flex justify-center items-center gap-12 mt-12" data-v-e5b7cbf5${_scopeId3}>`);
                          _push4(ssrRenderComponent(PrimaryButton$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Link, {
                                  onClick: closeModal,
                                  method: "DELETE",
                                  href: _ctx.route(
                                    "admin.post.delete",
                                    post.id
                                  )
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Tak `);
                                    } else {
                                      return [
                                        createTextVNode(" Tak ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.post.delete",
                                      post.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                              createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                              createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                createVNode(PrimaryButton$1, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Link, {
                                      onClick: closeModal,
                                      method: "DELETE",
                                      href: _ctx.route(
                                        "admin.post.delete",
                                        post.id
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Tak ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Modal, {
                        title: "usuń",
                        isModalOpen: unref(isModalOpen),
                        "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                            createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                            createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                              createVNode(PrimaryButton$1, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.post.delete",
                                      post.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div data-v-e5b7cbf5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.post.create"),
              class: "absolute bottom-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/icons/admin/plus.svg" alt="" class="w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake" data-v-e5b7cbf5${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("table", { class: "mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" }, [
                  createVNode("caption", { class: "p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" }, " Posty "),
                  createVNode("thead", { class: "text-sm text-fontDark uppercase" }, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden sm:table-cell"
                      }, " # "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Tytuł"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, " Data dodania "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Akcja")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post, index) => {
                      return openBlock(), createBlock("tr", {
                        key: post.id,
                        class: "bg-white dark:bg-gray-800"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                        }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, toDisplayString(post.title), 1),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, toDisplayString(formatDate(post.created_at)), 1),
                        createVNode("td", { class: "px-6 py-4 flex gap-4 items-center" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("admin.post.edit", post.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/assets/icons/admin/edit.svg",
                                alt: "",
                                class: "w-6 hover:animate-shake"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("button", { onClick: openModal }, [
                            createVNode("img", {
                              src: "/assets/icons/admin/trash.svg",
                              alt: "",
                              class: "w-6 hover:animate-shake"
                            })
                          ]),
                          createVNode(_component_v_if, { isModalOpen: "" }, {
                            default: withCtx(() => [
                              createVNode(Modal, {
                                title: "usuń",
                                isModalOpen: unref(isModalOpen),
                                "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                                    createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                                    createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                      createVNode(PrimaryButton$1, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Link, {
                                            onClick: closeModal,
                                            method: "DELETE",
                                            href: _ctx.route(
                                              "admin.post.delete",
                                              post.id
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tak ")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_Link, {
                  href: _ctx.route("admin.post.create"),
                  class: "absolute bottom-6"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Posts/Index.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-e5b7cbf5"]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    technologies: Object,
    categories: Object,
    form: Object,
    errors: Object
  },
  setup(__props) {
    const fileChange = (e2) => {
      form.image = e2.target.files[0];
    };
    const form = useForm({
      description: "",
      title: "",
      site_link: "",
      youtube_link: "",
      image: null,
      category_id: [],
      technology_id: []
    });
    const submit = () => {
      form.post("/admin/projekty/dodaj", {
        preserveScroll: true,
        onSuccess: () => {
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Projekt",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "title",
                          name: "title",
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "title",
                          id: "title"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "title",
                            name: "title",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "title",
                            id: "title"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "site_link",
                          name: "site_link ",
                          modelValue: unref(form).site_link,
                          "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "site_link",
                          id: "site_link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link do strony`);
                            } else {
                              return [
                                createTextVNode("Link do strony")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "site_link",
                            name: "site_link ",
                            modelValue: unref(form).site_link,
                            "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "site_link",
                            id: "site_link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link do strony")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "youtube_link",
                          name: "youtube_link",
                          modelValue: unref(form).youtube_link,
                          "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "youtube_link",
                          id: "youtube_link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link do youtube`);
                            } else {
                              return [
                                createTextVNode("Link do youtube")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "youtube_link",
                            name: "youtube_link",
                            modelValue: unref(form).youtube_link,
                            "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "youtube_link",
                            id: "youtube_link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link do youtube")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kategoria`);
                            } else {
                              return [
                                createTextVNode("Kategoria")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<ul class="flex gap-6"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.categories, (category) => {
                          _push4(`<li class="mt-6"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, category.id) : unref(form).category_id) ? " checked" : ""}${ssrRenderAttr("value", category.id)}${_scopeId3}> <label for=""${_scopeId3}>${ssrInterpolate(category.name)}</label></li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kategoria")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: category.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  value: category.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).category_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Label, {
                          for: "technology",
                          id: "technology"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Technology`);
                            } else {
                              return [
                                createTextVNode("Technology")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<ul class="flex gap-6"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.technologies, (technology) => {
                          _push4(`<li class="mt-6"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).technology_id) ? ssrLooseContain(unref(form).technology_id, technology.id) : unref(form).technology_id) ? " checked" : ""}${ssrRenderAttr("value", technology.id)}${_scopeId3}> <label for=""${_scopeId3}>${ssrInterpolate(technology.name)}</label></li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode(Label, {
                            for: "technology",
                            id: "technology"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Technology")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: technology.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                  value: technology.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).technology_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<input type="file"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(QuillEditor), {
                    theme: "snow",
                    toolbar: "full",
                    content: unref(form).description,
                    "onUpdate:content": ($event) => unref(form).description = $event,
                    contentType: "html"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "title",
                                name: "title",
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "title",
                                id: "title"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Nazwa")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "site_link",
                                name: "site_link ",
                                modelValue: unref(form).site_link,
                                "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "site_link",
                                id: "site_link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link do strony")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "youtube_link",
                                name: "youtube_link",
                                modelValue: unref(form).youtube_link,
                                "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "youtube_link",
                                id: "youtube_link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link do youtube")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kategoria")
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "flex gap-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                return openBlock(), createBlock("li", {
                                  class: "mt-6",
                                  key: category.id
                                }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                    value: category.id
                                  }, null, 8, ["onUpdate:modelValue", "value"]), [
                                    [vModelCheckbox, unref(form).category_id]
                                  ]),
                                  createTextVNode(),
                                  createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(Label, {
                              for: "technology",
                              id: "technology"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Technology")
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "flex gap-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                                return openBlock(), createBlock("li", {
                                  class: "mt-6",
                                  key: technology.id
                                }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                    value: technology.id
                                  }, null, 8, ["onUpdate:modelValue", "value"]), [
                                    [vModelCheckbox, unref(form).technology_id]
                                  ]),
                                  createTextVNode(),
                                  createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("input", {
                          type: "file",
                          onChange: fileChange
                        }, null, 32),
                        createVNode(unref(QuillEditor), {
                          theme: "snow",
                          toolbar: "full",
                          content: unref(form).description,
                          "onUpdate:content": ($event) => unref(form).description = $event,
                          contentType: "html"
                        }, null, 8, ["content", "onUpdate:content"]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Projekt",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "title",
                              name: "title",
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "title",
                              id: "title"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "site_link",
                              name: "site_link ",
                              modelValue: unref(form).site_link,
                              "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "site_link",
                              id: "site_link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link do strony")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "youtube_link",
                              name: "youtube_link",
                              modelValue: unref(form).youtube_link,
                              "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "youtube_link",
                              id: "youtube_link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link do youtube")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kategoria")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: category.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  value: category.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).category_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(Label, {
                            for: "technology",
                            id: "technology"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Technology")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: technology.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                  value: technology.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).technology_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("input", {
                        type: "file",
                        onChange: fileChange
                      }, null, 32),
                      createVNode(unref(QuillEditor), {
                        theme: "snow",
                        toolbar: "full",
                        content: unref(form).description,
                        "onUpdate:content": ($event) => unref(form).description = $event,
                        contentType: "html"
                      }, null, 8, ["content", "onUpdate:content"]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/Create.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$L
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    technologies: Object,
    categories: Object,
    form: Object,
    errors: Object,
    project: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      description: props.project.description,
      title: props.project.title,
      site_link: props.project.site_link,
      youtube_link: props.project.youtube_link,
      image: props.project.image,
      category_id: props.project.categories,
      technology_id: props.project.categories
    });
    const fileChange = (e2) => {
      form.image = e2.target.files[0];
    };
    const submit = () => {
      console.log(form);
      form.put(route("admin.project.update", props.project.id), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Projekt",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}><div class="flex gap-12 mx-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "title",
                          name: "title",
                          modelValue: unref(form).title,
                          "onUpdate:modelValue": ($event) => unref(form).title = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "title",
                          id: "title"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "title",
                            name: "title",
                            modelValue: unref(form).title,
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "title",
                            id: "title"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "site_link",
                          name: "site_link ",
                          modelValue: unref(form).site_link,
                          "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "site_link",
                          id: "site_link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link do strony`);
                            } else {
                              return [
                                createTextVNode("Link do strony")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "site_link",
                            name: "site_link ",
                            modelValue: unref(form).site_link,
                            "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "site_link",
                            id: "site_link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link do strony")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "youtube_link",
                          name: "youtube_link",
                          modelValue: unref(form).youtube_link,
                          "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "youtube_link",
                          id: "youtube_link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link do youtube`);
                            } else {
                              return [
                                createTextVNode("Link do youtube")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "youtube_link",
                            name: "youtube_link",
                            modelValue: unref(form).youtube_link,
                            "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "youtube_link",
                            id: "youtube_link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link do youtube")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Kategoria`);
                            } else {
                              return [
                                createTextVNode("Kategoria")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<ul class="flex gap-6"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.categories, (category) => {
                          _push4(`<li class="mt-6"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, category.id) : unref(form).category_id) ? " checked" : ""}${ssrRenderAttr("value", category.id)}${_scopeId3}> <label for=""${_scopeId3}>${ssrInterpolate(category.name)}</label></li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kategoria")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: category.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  value: category.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).category_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Label, {
                          for: "technology",
                          id: "technology"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Technology`);
                            } else {
                              return [
                                createTextVNode("Technology")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<ul class="flex gap-6"${_scopeId3}><!--[-->`);
                        ssrRenderList(__props.technologies, (technology) => {
                          _push4(`<li class="mt-6"${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).technology_id) ? ssrLooseContain(unref(form).technology_id, technology.id) : unref(form).technology_id) ? " checked" : ""}${ssrRenderAttr("value", technology.id)}${_scopeId3}> <label for=""${_scopeId3}>${ssrInterpolate(technology.name)}</label></li>`);
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode(Label, {
                            for: "technology",
                            id: "technology"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Technology")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: technology.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                  value: technology.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).technology_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                              ]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<input type="file"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(QuillEditor), {
                    theme: "snow",
                    toolbar: "full",
                    content: unref(form).description,
                    "onUpdate:content": ($event) => unref(form).description = $event,
                    contentType: "html"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode("div", { class: "flex gap-12 mx-12" }, [
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "title",
                                name: "title",
                                modelValue: unref(form).title,
                                "onUpdate:modelValue": ($event) => unref(form).title = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "title",
                                id: "title"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Nazwa")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "site_link",
                                name: "site_link ",
                                modelValue: unref(form).site_link,
                                "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "site_link",
                                id: "site_link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link do strony")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(Field, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$13, {
                                type: "text",
                                id: "youtube_link",
                                name: "youtube_link",
                                modelValue: unref(form).youtube_link,
                                "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(Label, {
                                for: "youtube_link",
                                id: "youtube_link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Link do youtube")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kategoria")
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "flex gap-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                                return openBlock(), createBlock("li", {
                                  class: "mt-6",
                                  key: category.id
                                }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                    value: category.id
                                  }, null, 8, ["onUpdate:modelValue", "value"]), [
                                    [vModelCheckbox, unref(form).category_id]
                                  ]),
                                  createTextVNode(),
                                  createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(Label, {
                              for: "technology",
                              id: "technology"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Technology")
                              ]),
                              _: 1
                            }),
                            createVNode("ul", { class: "flex gap-6" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                                return openBlock(), createBlock("li", {
                                  class: "mt-6",
                                  key: technology.id
                                }, [
                                  withDirectives(createVNode("input", {
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                    value: technology.id
                                  }, null, 8, ["onUpdate:modelValue", "value"]), [
                                    [vModelCheckbox, unref(form).technology_id]
                                  ]),
                                  createTextVNode(),
                                  createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("input", {
                          type: "file",
                          onChange: fileChange
                        }, null, 32),
                        createVNode(unref(QuillEditor), {
                          theme: "snow",
                          toolbar: "full",
                          content: unref(form).description,
                          "onUpdate:content": ($event) => unref(form).description = $event,
                          contentType: "html"
                        }, null, 8, ["content", "onUpdate:content"]),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Projekt",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode("div", { class: "flex gap-12 mx-12" }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "title",
                              name: "title",
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "title",
                              id: "title"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "site_link",
                              name: "site_link ",
                              modelValue: unref(form).site_link,
                              "onUpdate:modelValue": ($event) => unref(form).site_link = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "site_link",
                              id: "site_link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link do strony")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "youtube_link",
                              name: "youtube_link",
                              modelValue: unref(form).youtube_link,
                              "onUpdate:modelValue": ($event) => unref(form).youtube_link = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "youtube_link",
                              id: "youtube_link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link do youtube")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Kategoria")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: category.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  value: category.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).category_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(category.name), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(Label, {
                            for: "technology",
                            id: "technology"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Technology")
                            ]),
                            _: 1
                          }),
                          createVNode("ul", { class: "flex gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology) => {
                              return openBlock(), createBlock("li", {
                                class: "mt-6",
                                key: technology.id
                              }, [
                                withDirectives(createVNode("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": ($event) => unref(form).technology_id = $event,
                                  value: technology.id
                                }, null, 8, ["onUpdate:modelValue", "value"]), [
                                  [vModelCheckbox, unref(form).technology_id]
                                ]),
                                createTextVNode(),
                                createVNode("label", { for: "" }, toDisplayString(technology.name), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("input", {
                        type: "file",
                        onChange: fileChange
                      }, null, 32),
                      createVNode(unref(QuillEditor), {
                        theme: "snow",
                        toolbar: "full",
                        content: unref(form).description,
                        "onUpdate:content": ($event) => unref(form).description = $event,
                        contentType: "html"
                      }, null, 8, ["content", "onUpdate:content"]),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/Edit.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$K
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    projects: Object,
    categories: Object
  },
  setup(__props) {
    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Panel Admina" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto"${_scopeId}><table class="w-full text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow"${_scopeId}><caption class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase"${_scopeId}> Projekty </caption><thead class="text-sm text-fontDark uppercase"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 hidden sm:table-cell"${_scopeId}>#</th><th scope="col" class="px-6 py-3"${_scopeId}>Nazwa</th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}>Kategoria</th><th scope="col" class="px-6 py-3 hidden lg:table-cell"${_scopeId}>YouTube</th><th scope="col" class="px-6 py-3 hidden lg:table-cell"${_scopeId}> Data dodania </th><th scope="col" class="px-6 py-3"${_scopeId}>Akcja</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.projects, (project, index) => {
              _push2(`<tr class="bg-white dark:bg-gray-800"${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"${_scopeId}>${ssrInterpolate(index + 1)}</th><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(project.title)}</td><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden md:table-cell"${_scopeId}><ul class="flex gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(project.categories, (category, index2) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(category.name)}`);
                if (index2 !== project.categories.length - 1) {
                  _push2(`<span${_scopeId}>,</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></td><td class="px-6 py-4 hidden lg:table-cell"${_scopeId}>`);
              if (project.youtube_link) {
                _push2(`<a${ssrRenderAttr("href", project.youtube_link)} target="_blank"${_scopeId}>link</a>`);
              } else {
                _push2(`<span${_scopeId}>-</span>`);
              }
              _push2(`</td><td class="px-6 py-4 hidden lg:table-cell"${_scopeId}>${ssrInterpolate(formatDate(project.created_at))}</td><td class="px-6 py-4 flex gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.project.edit", { id: project.id }),
                class: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edytuj `);
                  } else {
                    return [
                      createTextVNode(" Edytuj ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"${_scopeId}>Usuń</a></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("table", { class: "w-full text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" }, [
                  createVNode("caption", { class: "p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" }, " Projekty "),
                  createVNode("thead", { class: "text-sm text-fontDark uppercase" }, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden sm:table-cell"
                      }, "#"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Nazwa"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden md:table-cell"
                      }, "Kategoria"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, "YouTube"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, " Data dodania "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Akcja")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.projects, (project, index) => {
                      return openBlock(), createBlock("tr", {
                        key: project.id,
                        class: "bg-white dark:bg-gray-800"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                        }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, toDisplayString(project.title), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden md:table-cell" }, [
                          createVNode("ul", { class: "flex gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(project.categories, (category, index2) => {
                              return openBlock(), createBlock("li", {
                                key: category.id
                              }, [
                                createTextVNode(toDisplayString(category.name), 1),
                                index2 !== project.categories.length - 1 ? (openBlock(), createBlock("span", { key: 0 }, ",")) : createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, [
                          project.youtube_link ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: project.youtube_link,
                            target: "_blank"
                          }, "link", 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
                        ]),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, toDisplayString(formatDate(project.created_at)), 1),
                        createVNode("td", { class: "px-6 py-4 flex gap-4" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("admin.project.edit", { id: project.id }),
                            class: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edytuj ")
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("a", {
                            href: "#",
                            class: "font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          }, "Usuń")
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Projects/Index.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$J
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object
  },
  setup(__props) {
    const fileChange = (e2) => {
      form.logo = e2.target.files[0];
    };
    const form = useForm({
      name: "",
      logo: null
    });
    const submit = () => {
      form.post(route("admin.technology.store"), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Technologię" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Technologię",
              class: "w-1/2 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.link)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.link), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<input type="file"${_scopeId3}>`);
                        if (unref(form).errors.logo) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.logo)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "name",
                              name: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.link), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              onChange: fileChange
                            }, null, 32),
                            unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Technologię",
                class: "w-1/2 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.link), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Technologies/Create.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    technology: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.technology.name,
      logo: props.technology.logo
    });
    const fileChange = (e2) => {
      form.logo = e2.target.files[0];
    };
    const submit = () => {
      form.put(route("admin.technology.update", props.technology.id), {
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Dodaj Projekt" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Dodaj Kategorię",
              class: "w-1/2 mx-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6"${_scopeId2}><form enctype="multipart/form-data"${_scopeId2}>`);
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$13, {
                          type: "text",
                          id: "name",
                          name: "name",
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(Label, {
                          for: "name",
                          id: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Nazwa`);
                            } else {
                              return [
                                createTextVNode("Nazwa")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).errors.name) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.name), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<input type="file"${_scopeId3}>`);
                        if (unref(form).errors.logo) {
                          _push4(ssrRenderComponent(Error$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(unref(form).errors.logo)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(Field, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PrimaryButton$1, { type: "submit" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Dodaj`);
                            } else {
                              return [
                                createTextVNode("Dodaj")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        enctype: "multipart/form-data"
                      }, [
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "name",
                              name: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Nazwa")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.name), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode("input", {
                              type: "file",
                              onChange: fileChange
                            }, null, 32),
                            unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(Field, null, {
                          default: withCtx(() => [
                            createVNode(PrimaryButton$1, { type: "submit" }, {
                              default: withCtx(() => [
                                createTextVNode("Dodaj")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$11, {
                title: "Dodaj Kategorię",
                class: "w-1/2 mx-auto"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"]),
                      enctype: "multipart/form-data"
                    }, [
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Nazwa")
                            ]),
                            _: 1
                          }),
                          unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.name), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode("input", {
                            type: "file",
                            onChange: fileChange
                          }, null, 32),
                          unref(form).errors.logo ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).errors.logo), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(Field, null, {
                        default: withCtx(() => [
                          createVNode(PrimaryButton$1, { type: "submit" }, {
                            default: withCtx(() => [
                              createTextVNode("Dodaj")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 32)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Technologies/Edit.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    projects: Object,
    technologies: Object
  },
  setup(__props) {
    let isModalOpen = ref(false);
    const openModal = (technology) => {
      isModalOpen.value = true;
      technology.value = technology;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      const _component_v_if = resolveComponent("v-if");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d0a3c56e>`);
      _push(ssrRenderComponent(_component_Head, { title: "Technologie" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$Z, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto" data-v-d0a3c56e${_scopeId}><table class="mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" data-v-d0a3c56e${_scopeId}><caption class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" data-v-d0a3c56e${_scopeId}> Technologie </caption><thead class="text-sm text-fontDark uppercase" data-v-d0a3c56e${_scopeId}><tr data-v-d0a3c56e${_scopeId}><th scope="col" class="px-6 py-3 hidden sm:table-cell" data-v-d0a3c56e${_scopeId}> # </th><th scope="col" class="px-6 py-3" data-v-d0a3c56e${_scopeId}>Nazwa</th><th scope="col" class="px-6 py-3 hidden lg:table-cell" data-v-d0a3c56e${_scopeId}> Data dodania </th><th scope="col" class="px-6 py-3" data-v-d0a3c56e${_scopeId}>Akcja</th></tr></thead><tbody data-v-d0a3c56e${_scopeId}><!--[-->`);
            ssrRenderList(__props.technologies, (technology, index) => {
              _push2(`<tr class="bg-white dark:bg-gray-800" data-v-d0a3c56e${_scopeId}><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell" data-v-d0a3c56e${_scopeId}>${ssrInterpolate(index + 1)}</th><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" data-v-d0a3c56e${_scopeId}>${ssrInterpolate(technology.name)}</td><td class="px-6 py-4 hidden lg:table-cell" data-v-d0a3c56e${_scopeId}>${ssrInterpolate(formatDate(technology.created_at))}</td><td class="px-6 py-4 flex gap-4 items-center" data-v-d0a3c56e${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.technology.edit", technology.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img src="/assets/icons/admin/edit.svg" alt="" class="w-6 hover:animate-shake" data-v-d0a3c56e${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "/assets/icons/admin/edit.svg",
                        alt: "",
                        class: "w-6 hover:animate-shake"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button data-v-d0a3c56e${_scopeId}><img src="/assets/icons/admin/trash.svg" alt="" class="w-6 hover:animate-shake" data-v-d0a3c56e${_scopeId}></button>`);
              _push2(ssrRenderComponent(_component_v_if, { isModalOpen: "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(Modal, {
                      title: "usuń",
                      isModalOpen: unref(isModalOpen),
                      "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-black p-12 flex flex-col" data-v-d0a3c56e${_scopeId3}><span class="text-lg" data-v-d0a3c56e${_scopeId3}>Czy na pewno chcesz usunąć tę kategorię?</span><div class="flex justify-center items-center gap-12 mt-12" data-v-d0a3c56e${_scopeId3}>`);
                          _push4(ssrRenderComponent(PrimaryButton$1, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Link, {
                                  onClick: closeModal,
                                  method: "DELETE",
                                  href: _ctx.route(
                                    "admin.technology.delete",
                                    technology.id
                                  )
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Tak `);
                                    } else {
                                      return [
                                        createTextVNode(" Tak ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.technology.delete",
                                      technology.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                              createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                              createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                createVNode(PrimaryButton$1, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Link, {
                                      onClick: closeModal,
                                      method: "DELETE",
                                      href: _ctx.route(
                                        "admin.technology.delete",
                                        technology.id
                                      )
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Tak ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(Modal, {
                        title: "usuń",
                        isModalOpen: unref(isModalOpen),
                        "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                            createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                            createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                              createVNode(PrimaryButton$1, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Link, {
                                    onClick: closeModal,
                                    method: "DELETE",
                                    href: _ctx.route(
                                      "admin.technology.delete",
                                      technology.id
                                    )
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tak ")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div data-v-d0a3c56e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.technology.create"),
              class: "absolute bottom-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/assets/icons/admin/plus.svg" alt="" class="w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake" data-v-d0a3c56e${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("table", { class: "mx-auto w-3/4 text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow" }, [
                  createVNode("caption", { class: "p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase" }, " Technologie "),
                  createVNode("thead", { class: "text-sm text-fontDark uppercase" }, [
                    createVNode("tr", null, [
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden sm:table-cell"
                      }, " # "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Nazwa"),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3 hidden lg:table-cell"
                      }, " Data dodania "),
                      createVNode("th", {
                        scope: "col",
                        class: "px-6 py-3"
                      }, "Akcja")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.technologies, (technology, index) => {
                      return openBlock(), createBlock("tr", {
                        key: technology.id,
                        class: "bg-white dark:bg-gray-800"
                      }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                        }, toDisplayString(index + 1), 1),
                        createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, toDisplayString(technology.name), 1),
                        createVNode("td", { class: "px-6 py-4 hidden lg:table-cell" }, toDisplayString(formatDate(technology.created_at)), 1),
                        createVNode("td", { class: "px-6 py-4 flex gap-4 items-center" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("admin.technology.edit", technology.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/assets/icons/admin/edit.svg",
                                alt: "",
                                class: "w-6 hover:animate-shake"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("button", { onClick: openModal }, [
                            createVNode("img", {
                              src: "/assets/icons/admin/trash.svg",
                              alt: "",
                              class: "w-6 hover:animate-shake"
                            })
                          ]),
                          createVNode(_component_v_if, { isModalOpen: "" }, {
                            default: withCtx(() => [
                              createVNode(Modal, {
                                title: "usuń",
                                isModalOpen: unref(isModalOpen),
                                "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-black p-12 flex flex-col" }, [
                                    createVNode("span", { class: "text-lg" }, "Czy na pewno chcesz usunąć tę kategorię?"),
                                    createVNode("div", { class: "flex justify-center items-center gap-12 mt-12" }, [
                                      createVNode(PrimaryButton$1, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Link, {
                                            onClick: closeModal,
                                            method: "DELETE",
                                            href: _ctx.route(
                                              "admin.technology.delete",
                                              technology.id
                                            )
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Tak ")
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["isModalOpen", "onUpdate:isModalOpen"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_Link, {
                  href: _ctx.route("admin.technology.create"),
                  class: "absolute bottom-6"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "/assets/icons/admin/plus.svg",
                      alt: "",
                      class: "w-12 border-4 border-ownTurquise-400 bg-ownTurquise-400 rounded-full hover:animate-shake"
                    })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Technologies/Index.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-d0a3c56e"]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$E = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-ownPurple-400" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/logo/logo.png" alt="" class="w-48"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/logo/logo.png",
                alt: "",
                class: "w-48"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-ownYellow-400 shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600 dark:text-red-400">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-fontDark" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$A = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    "modelValue": {
      type: String,
      required: true
    },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const model = useModel(__props, "modelValue");
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm",
        ref_key: "input",
        ref: input
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Zaloguj się" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Hasło"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$x, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>Zapamiętaj mnie</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Przypomnij hasło `);
                  } else {
                    return [
                      createTextVNode(" Przypomnij hasło ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Zaloguj się `);
                } else {
                  return [
                    createTextVNode(" Zaloguj się ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Zaloguj się" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Hasło"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$x, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600 dark:text-gray-400" }, "Zapamiętaj mnie")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Przypomnij hasło ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Zaloguj się ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600 dark:text-green-400"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    techs: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Zanurz się w programistycznej lekturze" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Jeśli kochasz programowanie i chcesz się nauczyć czegoś nowego, zapraszam Cię na mój blog, gdzie znajdziesz moje projekty, eksperymenty i wyzwania z różnych dziedzin IT. Pokażę Ci, jak tworzyć niesamowite aplikacje, jak używać nowoczesnych narzędzi i jak być lepszym programistą. Nie zwlekaj, dołącz do mnie i baw się dobrze!"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Jeśli kochasz programowanie i chcesz się nauczyć czegoś nowego, zapraszam Cię na mój blog, gdzie znajdziesz moje projekty, eksperymenty i wyzwania z różnych dziedzin IT. Pokażę Ci, jak tworzyć niesamowite aplikacje, jak używać nowoczesnych narzędzi i jak być lepszym programistą. Nie zwlekaj, dołącz do mnie i baw się dobrze!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}><section class="bg-ownTurquise-400 section py-16 lg:py-24 mt-12"${_scopeId}><div class="max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24"${_scopeId}><h2 class="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl mb-24 uppercase font-heading"${_scopeId}> Zanurz się w lekturze i odkryj ciekawostki z programistycznego świata </h2></div><div class="flex flex-col justify-center items-center gap-12 md:gap-16 px-4 sm:px-0"${_scopeId}><img src="/assets/images/home/blog-coming-soon.webp" alt="blog nadejdzie już niedługo" class="w-[500px]"${_scopeId}><h2 class="text-2xl xs:text-3xl lg:text-4xl xl:text-4xl uppercase font-heading"${_scopeId}> Jeszcze momencik i będzie gotowe </h2></div></section></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("section", { class: "bg-ownTurquise-400 section py-16 lg:py-24 mt-12" }, [
                  createVNode("div", { class: "max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24" }, [
                    createVNode("h2", { class: "text-5xl xs:text-6xl lg:text-7xl xl:text-8xl mb-24 uppercase font-heading" }, " Zanurz się w lekturze i odkryj ciekawostki z programistycznego świata ")
                  ]),
                  createVNode("div", { class: "flex flex-col justify-center items-center gap-12 md:gap-16 px-4 sm:px-0" }, [
                    createVNode("img", {
                      src: "/assets/images/home/blog-coming-soon.webp",
                      alt: "blog nadejdzie już niedługo",
                      class: "w-[500px]"
                    }),
                    createVNode("h2", { class: "text-2xl xs:text-3xl lg:text-4xl xl:text-4xl uppercase font-heading" }, " Jeszcze momencik i będzie gotowe ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blog/Index.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    form: Object,
    errors: Object,
    recaptcha_site_key: String
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
    let sendForm = ref(false);
    let form = useForm({
      name: null,
      email: null,
      phone: null,
      message: null,
      captcha_token: null
    });
    const recaptcha = async () => {
      await recaptchaLoaded();
      form.captcha_token = await executeRecaptcha("login");
      submit();
    };
    const submit = () => {
      form.post("/kontakt", {
        preserveScroll: true,
        onSuccess: () => {
          sendForm.value = !sendForm.value;
          console.log("udało się");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_PrimaryButton = resolveComponent("PrimaryButton");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-271c9c10>`);
      _push(ssrRenderComponent(_component_Head, { title: "Skontaktuje się ze mną | Marek Gacek" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Skontaktuj się ze mną i zacznij tworzyć online bez granic. Odkryj, jak moje umiejętności w kodowaniu i marketingu mogą pomóc Twojemu biznesowi." data-v-271c9c10${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Skontaktuj się ze mną i zacznij tworzyć online bez granic. Odkryj, jak moje umiejętności w kodowaniu i marketingu mogą pomóc Twojemu biznesowi."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main data-v-271c9c10${_scopeId}><section class="section mt-[71px] bg-ownPink-200" data-v-271c9c10${_scopeId}><div class="w-full mx-auto mt-12" data-v-271c9c10${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Vue3Marquee), {
              pauseOnHover: "true",
              duration: "20",
              class: "overflow-hidden py-4 bg-bgDark-400 text-ownYellow-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-7xl font-heading ml-3" data-v-271c9c10${_scopeId2}> Potrzebujesz wyceny <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span> Masz jakieś pytanie <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span> Chcesz po prostu pogadać <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span> Potrzebujesz wyceny <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span> Masz jakieś pytanie <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span> Chcesz po prostu pogadać <span class="text-fontLight" data-v-271c9c10${_scopeId2}>??</span></h1>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-7xl font-heading ml-3" }, [
                      createTextVNode(" Potrzebujesz wyceny "),
                      createVNode("span", { class: "text-fontLight" }, "??"),
                      createTextVNode(" Masz jakieś pytanie "),
                      createVNode("span", { class: "text-fontLight" }, "??"),
                      createTextVNode(" Chcesz po prostu pogadać "),
                      createVNode("span", { class: "text-fontLight" }, "??"),
                      createTextVNode(" Potrzebujesz wyceny "),
                      createVNode("span", { class: "text-fontLight" }, "??"),
                      createTextVNode(" Masz jakieś pytanie "),
                      createVNode("span", { class: "text-fontLight" }, "??"),
                      createTextVNode(" Chcesz po prostu pogadać "),
                      createVNode("span", { class: "text-fontLight" }, "??")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="wrapper" data-v-271c9c10${_scopeId}><div class="flex flex-col justify-center gap-6 lg:w-2/5 lg:mr-3 py-12 lg:ml-6 lg:mt-0" data-v-271c9c10${_scopeId}><img src="/assets/images/contact/contact.webp" alt="" class="w-96 mx-auto" data-v-271c9c10${_scopeId}><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed" data-v-271c9c10${_scopeId}> Śmiało, napisz do mnie za pomocą formularza lub wyślij maila. </h2><a href="mailto:kontakt@marekgacekdev.pl" class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed font-bold text-ownTurquise-400" data-v-271c9c10${_scopeId}>kontakt@marekgacekdev.pl</a><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed" data-v-271c9c10${_scopeId}> Jeżeli wolisz to znajdź mnie na mediach społecznościowych </h2><div data-v-271c9c10${_scopeId}><ul class="flex items-center gap-3 animate-bounce" data-v-271c9c10${_scopeId}><li data-v-271c9c10${_scopeId}><a href="https://www.facebook.com/marekgacekdev" target="_blank" data-v-271c9c10${_scopeId}><img src="/assets/icons/facebook--purple.svg" alt="" class="w-10 md:w-12 social" data-v-271c9c10${_scopeId}></a></li><li data-v-271c9c10${_scopeId}><a href="https://pl.linkedin.com/in/marek-gacek" target="_blank" data-v-271c9c10${_scopeId}><img src="/assets/icons/linkedin--white.svg" alt="" class="w-10 md:w-12 social" data-v-271c9c10${_scopeId}></a></li><li data-v-271c9c10${_scopeId}><a href="https://github.com/marekgacek45" target="_blank" data-v-271c9c10${_scopeId}><img src="/assets/icons/github.svg" alt="" class="w-10 md:w-12 social" data-v-271c9c10${_scopeId}></a></li><li data-v-271c9c10${_scopeId}><a href="https://www.youtube.com/@marekgacekdev" target="_blank" data-v-271c9c10${_scopeId}><img src="/assets/icons/youtube--yellow.svg" alt="" class="w-14 md:w-16 social" data-v-271c9c10${_scopeId}></a></li></ul></div></div><div class="flex justify-center items-center lg:h-auto mt-6 mb-12 lg:w-3/5 lg:py-16 lg:px-4 xl:p-10 2xl:p-16" data-v-271c9c10${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$11, {
              title: "Kontakt",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-bgLight-200 py-6" data-v-271c9c10${_scopeId2}><template>`);
                  if (!unref(sendForm)) {
                    _push3(`<form data-v-271c9c10${_scopeId2}>`);
                    _push3(ssrRenderComponent(Field, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$13, {
                            type: "text",
                            id: "name",
                            name: "name",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: ""
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(Label, {
                            for: "name",
                            id: "name"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Imię i Nazwisko`);
                              } else {
                                return [
                                  createTextVNode("Imię i Nazwisko")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (unref(form).errors.name) {
                            _push4(ssrRenderComponent(Error$1, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(form).errors.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(_sfc_main$13, {
                              type: "text",
                              id: "name",
                              name: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "name",
                              id: "name"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Imię i Nazwisko")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.name), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(Field, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$13, {
                            type: "email",
                            id: "email",
                            name: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            required: ""
                          }, null, _parent4, _scopeId3));
                          if (unref(form).errors.email) {
                            _push4(ssrRenderComponent(Error$1, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(form).errors.email)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(form).errors.email), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(Label, {
                            for: "email",
                            id: "email"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`E-mail`);
                              } else {
                                return [
                                  createTextVNode("E-mail")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$13, {
                              type: "email",
                              id: "email",
                              name: "email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            unref(form).errors.email ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.email), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(Label, {
                              for: "email",
                              id: "email"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("E-mail")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(Field, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$13, {
                            type: "tel",
                            id: "phone",
                            name: "phone",
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(Label, {
                            for: "tel",
                            id: "tel"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Telefon`);
                              } else {
                                return [
                                  createTextVNode("Telefon")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (unref(form).errors.phone) {
                            _push4(ssrRenderComponent(Error$1, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(form).errors.phone)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(_sfc_main$13, {
                              type: "tel",
                              id: "phone",
                              name: "phone",
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "tel",
                              id: "tel"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Telefon")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.phone ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(Field, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$T, {
                            id: "message",
                            name: "message",
                            modelValue: unref(form).message,
                            "onUpdate:modelValue": ($event) => unref(form).message = $event,
                            required: ""
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(Label, {
                            for: "message",
                            id: "message",
                            class: "peer-placeholder-shown:top-7"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Wiadomość`);
                              } else {
                                return [
                                  createTextVNode("Wiadomość")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          if (unref(form).errors.message) {
                            _push4(ssrRenderComponent(Error$1, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(unref(form).errors.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(unref(form).errors.message), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(_sfc_main$T, {
                              id: "message",
                              name: "message",
                              modelValue: unref(form).message,
                              "onUpdate:modelValue": ($event) => unref(form).message = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(Label, {
                              for: "message",
                              id: "message",
                              class: "peer-placeholder-shown:top-7"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Wiadomość")
                              ]),
                              _: 1
                            }),
                            unref(form).errors.message ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).errors.message), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (__props.errors.captcha_token) {
                      _push3(ssrRenderComponent(Error$1, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__props.errors.captcha_token)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__props.errors.captcha_token), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(Field, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_PrimaryButton, {
                            type: "submit",
                            disabled: unref(form).processing
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Wyślij`);
                              } else {
                                return [
                                  createTextVNode("Wyślij")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_PrimaryButton, {
                              type: "submit",
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Wyślij")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form>`);
                  } else {
                    _push3(`<div class="min-h-[545px] flex flex-col justify-center items-center gap-6 text-center px-4" data-v-271c9c10${_scopeId2}><h2 class="text-7xl font-heading" data-v-271c9c10${_scopeId2}>Dzięki za wiadomość</h2><span class="text-3xl" data-v-271c9c10${_scopeId2}>Odpowiem na nią najszybciej jak to możliwe!</span></div>`);
                  }
                  _push3(`</template></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                      createVNode(Transition, {
                        name: "list",
                        mode: "out-in",
                        appear: ""
                      }, {
                        default: withCtx(() => [
                          !unref(sendForm) ? (openBlock(), createBlock("form", {
                            key: 0,
                            onSubmit: withModifiers(recaptcha, ["prevent"])
                          }, [
                            createVNode(Field, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$13, {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(Label, {
                                  for: "name",
                                  id: "name"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Imię i Nazwisko")
                                  ]),
                                  _: 1
                                }),
                                unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(Field, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$13, {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                unref(form).errors.email ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(form).errors.email), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(Label, {
                                  for: "email",
                                  id: "email"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("E-mail")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(Field, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$13, {
                                  type: "tel",
                                  id: "phone",
                                  name: "phone",
                                  modelValue: unref(form).phone,
                                  "onUpdate:modelValue": ($event) => unref(form).phone = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(Label, {
                                  for: "tel",
                                  id: "tel"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Telefon")
                                  ]),
                                  _: 1
                                }),
                                unref(form).errors.phone ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            createVNode(Field, null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$T, {
                                  id: "message",
                                  name: "message",
                                  modelValue: unref(form).message,
                                  "onUpdate:modelValue": ($event) => unref(form).message = $event,
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(Label, {
                                  for: "message",
                                  id: "message",
                                  class: "peer-placeholder-shown:top-7"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Wiadomość")
                                  ]),
                                  _: 1
                                }),
                                unref(form).errors.message ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(form).errors.message), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            __props.errors.captcha_token ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(__props.errors.captcha_token), 1)
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(Field, null, {
                              default: withCtx(() => [
                                createVNode(_component_PrimaryButton, {
                                  type: "submit",
                                  disabled: unref(form).processing
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Wyślij")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ]),
                              _: 1
                            })
                          ], 32)) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "min-h-[545px] flex flex-col justify-center items-center gap-6 text-center px-4"
                          }, [
                            createVNode("h2", { class: "text-7xl font-heading" }, "Dzięki za wiadomość"),
                            createVNode("span", { class: "text-3xl" }, "Odpowiem na nią najszybciej jak to możliwe!")
                          ]))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></section></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("section", { class: "section mt-[71px] bg-ownPink-200" }, [
                  createVNode("div", { class: "w-full mx-auto mt-12" }, [
                    createVNode(unref(Vue3Marquee), {
                      pauseOnHover: "true",
                      duration: "20",
                      class: "overflow-hidden py-4 bg-bgDark-400 text-ownYellow-400"
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "text-7xl font-heading ml-3" }, [
                          createTextVNode(" Potrzebujesz wyceny "),
                          createVNode("span", { class: "text-fontLight" }, "??"),
                          createTextVNode(" Masz jakieś pytanie "),
                          createVNode("span", { class: "text-fontLight" }, "??"),
                          createTextVNode(" Chcesz po prostu pogadać "),
                          createVNode("span", { class: "text-fontLight" }, "??"),
                          createTextVNode(" Potrzebujesz wyceny "),
                          createVNode("span", { class: "text-fontLight" }, "??"),
                          createTextVNode(" Masz jakieś pytanie "),
                          createVNode("span", { class: "text-fontLight" }, "??"),
                          createTextVNode(" Chcesz po prostu pogadać "),
                          createVNode("span", { class: "text-fontLight" }, "??")
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "wrapper" }, [
                    createVNode("div", { class: "flex flex-col justify-center gap-6 lg:w-2/5 lg:mr-3 py-12 lg:ml-6 lg:mt-0" }, [
                      createVNode("img", {
                        src: "/assets/images/contact/contact.webp",
                        alt: "",
                        class: "w-96 mx-auto"
                      }),
                      createVNode("h2", { class: "text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed" }, " Śmiało, napisz do mnie za pomocą formularza lub wyślij maila. "),
                      createVNode("a", {
                        href: "mailto:kontakt@marekgacekdev.pl",
                        class: "text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed font-bold text-ownTurquise-400"
                      }, "kontakt@marekgacekdev.pl"),
                      createVNode("h2", { class: "text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed" }, " Jeżeli wolisz to znajdź mnie na mediach społecznościowych "),
                      createVNode("div", null, [
                        createVNode("ul", { class: "flex items-center gap-3 animate-bounce" }, [
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://www.facebook.com/marekgacekdev",
                              target: "_blank"
                            }, [
                              createVNode("img", {
                                src: "/assets/icons/facebook--purple.svg",
                                alt: "",
                                class: "w-10 md:w-12 social"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://pl.linkedin.com/in/marek-gacek",
                              target: "_blank"
                            }, [
                              createVNode("img", {
                                src: "/assets/icons/linkedin--white.svg",
                                alt: "",
                                class: "w-10 md:w-12 social"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://github.com/marekgacek45",
                              target: "_blank"
                            }, [
                              createVNode("img", {
                                src: "/assets/icons/github.svg",
                                alt: "",
                                class: "w-10 md:w-12 social"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://www.youtube.com/@marekgacekdev",
                              target: "_blank"
                            }, [
                              createVNode("img", {
                                src: "/assets/icons/youtube--yellow.svg",
                                alt: "",
                                class: "w-14 md:w-16 social"
                              })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center items-center lg:h-auto mt-6 mb-12 lg:w-3/5 lg:py-16 lg:px-4 xl:p-10 2xl:p-16" }, [
                      createVNode(_sfc_main$11, {
                        title: "Kontakt",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-bgLight-200 py-6" }, [
                            createVNode(Transition, {
                              name: "list",
                              mode: "out-in",
                              appear: ""
                            }, {
                              default: withCtx(() => [
                                !unref(sendForm) ? (openBlock(), createBlock("form", {
                                  key: 0,
                                  onSubmit: withModifiers(recaptcha, ["prevent"])
                                }, [
                                  createVNode(Field, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$13, {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        modelValue: unref(form).name,
                                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(Label, {
                                        for: "name",
                                        id: "name"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Imię i Nazwisko")
                                        ]),
                                        _: 1
                                      }),
                                      unref(form).errors.name ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(form).errors.name), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(Field, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$13, {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      unref(form).errors.email ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(form).errors.email), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode(Label, {
                                        for: "email",
                                        id: "email"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("E-mail")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(Field, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$13, {
                                        type: "tel",
                                        id: "phone",
                                        name: "phone",
                                        modelValue: unref(form).phone,
                                        "onUpdate:modelValue": ($event) => unref(form).phone = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(Label, {
                                        for: "tel",
                                        id: "tel"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Telefon")
                                        ]),
                                        _: 1
                                      }),
                                      unref(form).errors.phone ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(form).errors.phone), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(Field, null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$T, {
                                        id: "message",
                                        name: "message",
                                        modelValue: unref(form).message,
                                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(Label, {
                                        for: "message",
                                        id: "message",
                                        class: "peer-placeholder-shown:top-7"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Wiadomość")
                                        ]),
                                        _: 1
                                      }),
                                      unref(form).errors.message ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(form).errors.message), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  __props.errors.captcha_token ? (openBlock(), createBlock(Error$1, { key: 0 }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.errors.captcha_token), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(Field, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_PrimaryButton, {
                                        type: "submit",
                                        disabled: unref(form).processing
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Wyślij")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled"])
                                    ]),
                                    _: 1
                                  })
                                ], 32)) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "min-h-[545px] flex flex-col justify-center items-center gap-6 text-center px-4"
                                }, [
                                  createVNode("h2", { class: "text-7xl font-heading" }, "Dzięki za wiadomość"),
                                  createVNode("span", { class: "text-3xl" }, "Odpowiem na nią najszybciej jak to możliwe!")
                                ]))
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-271c9c10"]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white dark:bg-gray-700"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100 dark:bg-gray-900"><nav class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$1g, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ms-6"><div class="ms-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$q, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$p, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$p, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$p, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$p, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"><div class="px-4"><div class="font-medium text-base text-gray-800 dark:text-gray-200">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$o, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$o, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white dark:bg-gray-800 shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>Dashboard</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, "Dashboard")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}>You&#39;re logged in!</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, "You're logged in!")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  __name: "Error",
  __ssrInlineRender: true,
  props: { status: Number },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      return {
        503: "503: ",
        500: "500: ",
        404: "404",
        403: "403: n"
      }[props.status];
    });
    const image = computed(() => {
      return {
        503: "/assets/images/header.png",
        500: "/assets/images/header.png",
        404: "/assets/images/header.png",
        403: "/assets/images/header.png"
      }[props.status];
    });
    const description = computed(() => {
      return {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Niestety nie ma takiej strony...",
        403: "Sorry, you are forbidden from accessing this page."
      }[props.status];
    });
    const back = () => {
      window.history.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_H1 = resolveComponent("H1");
      const _component_PrimaryButton = resolveComponent("PrimaryButton");
      _push(ssrRenderComponent(_sfc_main$18, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-[71px] px-4 sm:px-0 py-12 lg:py-24 lg:h-[calc(100vh-371px)] flex flex-col justify-center items-center gap-6 bg-ownPurple-400"${_scopeId}><img${ssrRenderAttr("src", image.value)} alt="" class="w-[400px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_H1, { class: "text-2xl md:text-3xl xl:text-5xl font-heading" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(title.value)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(title.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-center text-lg md:text-xl xl:text-2xl font-text"${_scopeId}>${ssrInterpolate(description.value)}</span>`);
            _push2(ssrRenderComponent(_component_PrimaryButton, {
              onClick: back,
              class: "bg-ownYellow-400 hover:bg-ownYellow-600",
              "aria-label": "powrót"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Powrót`);
                } else {
                  return [
                    createTextVNode("Powrót")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-[71px] px-4 sm:px-0 py-12 lg:py-24 lg:h-[calc(100vh-371px)] flex flex-col justify-center items-center gap-6 bg-ownPurple-400" }, [
                createVNode("img", {
                  src: image.value,
                  alt: "",
                  class: "w-[400px]"
                }, null, 8, ["src"]),
                createVNode(_component_H1, { class: "text-2xl md:text-3xl xl:text-5xl font-heading" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(title.value), 1)
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "text-center text-lg md:text-xl xl:text-2xl font-text" }, toDisplayString(description.value), 1),
                createVNode(_component_PrimaryButton, {
                  onClick: back,
                  class: "bg-ownYellow-400 hover:bg-ownYellow-600",
                  "aria-label": "powrót"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Powrót")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Error.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownYellow-400" }, _attrs))}><div class="wrapper"><div class="flex flex-col justify-center gap-6 lg:w-1/2 lg:mr-3 py-12"><h1 class="text-7xl md:text-8xl xl:text-9xl font-heading"> Stwórz stronę swoich marzeń </h1><h2 class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"> Projektuję, tworzę i rozwijam innowacyjne strony internetowe które zaprezentują Twoją markę, zachwycą Twoich klientów i dodadza wiarygodności Twojej i tak już niesamowitej organizacji </h2><div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("portfolio")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PrimaryButton$1, { "aria-label": "Portfolio" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Portfolio`);
                } else {
                  return [
                    createTextVNode("Portfolio")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(PrimaryButton$1, { "aria-label": "Portfolio" }, {
                default: withCtx(() => [
                  createTextVNode("Portfolio")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-1/2 lg:py-16 lg:px-4 2xl:p-10"><img src="/assets/images/home/header--big.webp" alt="" class="hidden md:block h-full object-cover box-shadow" loading="lazy"><img src="/assets/images/home/header--small.webp" alt="" class="md:hidden h-full object-cover box-shadow" loading="lazy"></div></div><div class="flex justify-center pb-12">`);
      _push(ssrRenderComponent(unref(Vue3Marquee), {
        pauseOnHover: "true",
        duration: "30",
        class: "bg-bgDark-400 overflow-hidden py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-6xl sm:text-7xl xl:text-8xl font-heading text-fontLight uppercase"${_scopeId}> Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google • </p>`);
          } else {
            return [
              createVNode("p", { class: "text-6xl sm:text-7xl xl:text-8xl font-heading text-fontLight uppercase" }, " Strony Internetowe • Design • Social Media • Copywriting • Fotografia • Artykuły Marketingowe • Wizytówki Google • ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Sections/Header.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  __name: "ServicesCard",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        label: "WWW",
        text: "Tworzę innowacyjne, responsywne oraz błyskawicznie działające strony internetowe dostosowane do Twoich indywidualnych potrzeb, byś mógł zachwycić swoich odbiorców. Koniec z gotowcami stawianymi od szablonu oraz technologii które pamiętają stare czasy!",
        image: "/assets/images/home/services--one.webp",
        background: "bg-ownPink-400"
      },
      {
        label: "DESIGN",
        text: "Zaprezentuję Ci wyjątkowe projekty, stworzone z myślą o Tobie! Styl moich witryn to efekt indywidualnego podejścia, dostosowanego do specyfiki Twojej branży oraz osobistych preferencji. Wyrwij się spod wpływu szablonów z poprzedniej dekady – każdy mój projekt to nowoczesny design i świeży styl.",
        image: "/assets/images/home/services--two.webp",
        background: "bg-ownYellow-400"
      },
      {
        label: "SOCIAL MEDIA",
        text: "Oferuję kompleksowe zarządzanie mediów społecznościowych! Zajmuję się nie tylko tworzeniem, ale również aktywnym prowadzeniem profili na platformach społecznościowych. Zaufaj mi, abyś mógł skupić się na rozwoju swojego biznesu, a ja zadbanym o Twój wizerunek online!",
        image: "/assets/images/home/services--three.webp",
        background: "bg-ownTurquise-400"
      },
      {
        label: "TREŚCI",
        text: "Zapewniam kompleksową obsługę treści dla Twojej strony internetowej! Specjalizuję się nie tylko w pisaniu tekstów, ale również w fotografii. Moje usługi obejmują tworzenie treści, które przyciągają uwagę i angażują czytelnika, a także dodawanie unikalnych wizualnych doświadczeń poprzez fotografie.",
        image: "/assets/images/home/services--four.webp",
        background: "bg-ownOrange-600"
      }
    ];
    const currentText = ref(items[0]["text"]);
    const currentImage = ref(items[0]["image"]);
    const currentBackground = ref(items[0]["background"]);
    const isActive = ref(0);
    const change = (text, image, background, index) => {
      currentText.value = text;
      currentImage.value = image;
      currentBackground.value = background;
      isActive.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, mergeProps({ title: "usługi" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([currentBackground.value, "border-x-2 border-black"])}"${_scopeId}><img${ssrRenderAttr("src", currentImage.value)} alt="" class="w-full h-[450px]"${_scopeId}><div class="px-6 py-10 min-h-64 md:min-h-56 lg:min-h-64 xl:min-h-56 2xl:min-h-50 border-t-2 border-fontDark"${_scopeId}><p class="text-lg font-text font-medium"${_scopeId}>${ssrInterpolate(currentText.value)}</p></div></div><div class="grid grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(items, (item, index) => {
              _push2(`<button type="button" aria-label="usługa" class="${ssrRenderClass([isActive.value === index ? item.background : "bg-bgLight-200", "p-2 border-2 border-r-0 last:border-r-2 border-fontDark font-text font-bold text-center button-hover"])}"${_scopeId}>${ssrInterpolate(item.label)}</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["border-x-2 border-black", currentBackground.value]
              }, [
                createVNode("img", {
                  src: currentImage.value,
                  alt: "",
                  class: "w-full h-[450px]"
                }, null, 8, ["src"]),
                createVNode("div", { class: "px-6 py-10 min-h-64 md:min-h-56 lg:min-h-64 xl:min-h-56 2xl:min-h-50 border-t-2 border-fontDark" }, [
                  createVNode("p", { class: "text-lg font-text font-medium" }, toDisplayString(currentText.value), 1)
                ])
              ], 2),
              createVNode("div", { class: "grid grid-cols-4" }, [
                (openBlock(), createBlock(Fragment, null, renderList(items, (item, index) => {
                  return createVNode("button", {
                    type: "button",
                    "aria-label": "usługa",
                    key: index,
                    class: ["p-2 border-2 border-r-0 last:border-r-2 border-fontDark font-text font-bold text-center button-hover", isActive.value === index ? item.background : "bg-bgLight-200"],
                    onClick: ($event) => change(item.text, item.image, item.background, index)
                  }, toDisplayString(item.label), 11, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/ServicesCard.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "TestimonialsCard",
  __ssrInlineRender: true,
  props: {
    comments: Array
  },
  setup(__props) {
    const props = __props;
    const comments = ref([]);
    const currentIndex = ref(0);
    const currentLogo = computed(() => {
      if (comments.value.length > 0) {
        return comments.value[currentIndex.value].logo;
      }
      return null;
    });
    const currentLink = computed(() => {
      if (comments.value.length > 0) {
        return comments.value[currentIndex.value].link;
      }
      return null;
    });
    const currentBody = computed(() => {
      if (comments.value.length > 0) {
        return comments.value[currentIndex.value].body;
      }
      return null;
    });
    const nextComment = () => {
      currentIndex.value = (currentIndex.value + 1) % comments.value.length;
      resetInterval();
    };
    const previousComment = () => {
      currentIndex.value = (currentIndex.value - 1 + comments.value.length) % comments.value.length;
      resetInterval();
    };
    let intervalId;
    const resetInterval = () => {
      clearInterval(intervalId);
      intervalId = setInterval(nextComment, 5e3);
    };
    onMounted(() => {
      comments.value = props.comments;
      resetInterval();
    });
    onUnmounted(() => {
      clearInterval(intervalId);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$11, mergeProps({ title: "Opinie" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-center items-center gap-6 py-6 px-6 bg-bgLight-200"${_scopeId}><div class="flex flex-col justify-center items-center gap-6 text-center"${_scopeId}><a${ssrRenderAttr("href", currentLink.value)} target="_blank"${_scopeId}><img${ssrRenderAttr("src", currentLogo.value)} alt="logo firmy od której dostałem pozytywny komentarz" class="w-30 h-20"${_scopeId}></a><p class="font-textArch text-xl min-h-[140px] md:min-h-[115px] 2xl:min-h-[90px] md:px-12 lg:px-0"${_scopeId}>${ssrInterpolate(currentBody.value)}</p></div><div class="flex gap-4"${_scopeId}><button aria-label="poprzedni" class="border-2 border-black bg-ownYellow-400 px-1"${_scopeId}><img src="/assets/icons/left.svg" alt="" class="w-10 hover:scale-90 duration-300"${_scopeId}></button><button aria-label="następny" class="border-2 border-black bg-ownYellow-400 px-1"${_scopeId}><img src="/assets/icons/right.svg" alt="" class="w-10 hover:scale-90 duration-300"${_scopeId}></button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-center items-center gap-6 py-6 px-6 bg-bgLight-200" }, [
                createVNode("div", { class: "flex flex-col justify-center items-center gap-6 text-center" }, [
                  createVNode("a", {
                    href: currentLink.value,
                    target: "_blank",
                    key: "currentLink"
                  }, [
                    createVNode("img", {
                      src: currentLogo.value,
                      alt: "logo firmy od której dostałem pozytywny komentarz",
                      class: "w-30 h-20",
                      key: "currentLogo"
                    }, null, 8, ["src"])
                  ], 8, ["href"]),
                  createVNode("p", {
                    class: "font-textArch text-xl min-h-[140px] md:min-h-[115px] 2xl:min-h-[90px] md:px-12 lg:px-0",
                    key: "currentBody"
                  }, toDisplayString(currentBody.value), 1)
                ]),
                createVNode("div", { class: "flex gap-4" }, [
                  createVNode("button", {
                    "aria-label": "poprzedni",
                    class: "border-2 border-black bg-ownYellow-400 px-1",
                    onClick: previousComment
                  }, [
                    createVNode("img", {
                      src: "/assets/icons/left.svg",
                      alt: "",
                      class: "w-10 hover:scale-90 duration-300"
                    })
                  ]),
                  createVNode("button", {
                    "aria-label": "następny",
                    class: "border-2 border-black bg-ownYellow-400 px-1",
                    onClick: nextComment
                  }, [
                    createVNode("img", {
                      src: "/assets/icons/right.svg",
                      alt: "",
                      class: "w-10 hover:scale-90 duration-300"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Home/TestimonialsCard.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    comments: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section bg-ownPurple-400" }, _attrs))}><div class="wrapper gap-12 2xl:gap-24 py-16 lg:py-24"><div class="flex justify-center items-center lg:h-auto lg:w-1/2 md:px-12 lg:px-0">`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(`</div><div class="lg:w-1/2 flex flex-col gap-20 justify-center lg:mr-3 py-6 lg:py-12"><div class="space-y-6 lg:space-y-4"><h2 class="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl uppercase font-heading text-ownYellow-400">Unikalność to klucz!</h2><h3 class="font-text text-3xl"> Odrzuć standardy - wybierz projekt stworzony specjalnie dla Ciebie. </h3><h3 class="font-heading text-4xl"> Po prostu daj znać, a ja zajmę się resztą! </h3></div><div class="md:px-12 lg:px-0">`);
      _push(ssrRenderComponent(_sfc_main$i, { comments: __props.comments }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Sections/Services.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Base/SecondaryButton.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Blog",
  __ssrInlineRender: true,
  props: {
    posts: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-bgLight-400 section py-16 lg:py-24" }, _attrs))}><div class="max-w-screen-2xl mx-auto text-center px-4 sm:px-12 md:px-24 lg:px-12 2xl:px-24"><h2 class="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl mb-24 uppercase font-heading"> Zanurz się w lekturze i odkryj ciekawostki z programistycznego świata </h2></div><div class="flex flex-col justify-center items-center gap-12 md:gap-16 px-4 sm:px-0"><img src="/assets/images/home/blog-coming-soon.webp" alt="blog nadejdzie już niedługo" class="w-[500px]"><h2 class="text-2xl xs:text-3xl lg:text-4xl xl:text-4xl uppercase font-heading text-ownTurquise-400"> Jeszcze momencik i będzie gotowe </h2></div></section>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Sections/Blog.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "YouTube",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-ownPurple-400 grid gap-24 lg:gap-0 lg:grid-cols-2 px-6 xl:px-12 py-16 lg:py-12 lg:h-[calc(100vh-71px)]" }, _attrs))}><div class="flex flex-col justify-center items-center gap-12 lg:mr-12 xl:mx-24 2xl:mx-32 text-center"><h2 class="text-5xl xs:text-6xl lg:text-7xl xl:text-8xl uppercase font-heading text-fontLight"> Zobacz mnie w akcji na YouTube! </h2><h3 class="text-xl md:text-2xl xl:text-3xl font-text leading-relaxed text-fontLight"> Zapraszam Cię na mój kanał na YouTube, gdzie możesz zobaczyć jak pracuję nad różnymi projektami, testuję nowe technologie i narzędzia, oraz jak dzielę się swoimi spostrzeżeniami i doświadczeniami. </h3><a href="https://www.youtube.com/@marekgacekdev" target="_blank">`);
      _push(ssrRenderComponent(PrimaryButton$1, {
        class: "bg-ownYellow-400 hover:bg-ownYellow-600",
        "aria-label": "youTube"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sprawdź`);
          } else {
            return [
              createTextVNode("Sprawdź")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><div>`);
      _push(ssrRenderComponent(_sfc_main$11, { title: "youtube" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<video autoplay loop muted poster="/assets/images/poster.webp" class="w-full object-cover lg:min-h-[690px] hidden md:block"${_scopeId}><source src="/assets/movies/yt.mp4" type="video/mp4"${_scopeId}> Twoja przeglądarka nie obsługuje odtwarzacza wideo. </video><video autoplay loop muted poster="/assets/images/poster.webp" class="w-full object-cover lg:min-h-[690px] md:hidden"${_scopeId}><source src="/assets/movies/yt-small.mp4" type="video/mp4"${_scopeId}> Twoja przeglądarka nie obsługuje odtwarzacza wideo. </video>`);
          } else {
            return [
              createVNode("video", {
                autoplay: "",
                loop: "",
                muted: "",
                poster: "/assets/images/poster.webp",
                class: "w-full object-cover lg:min-h-[690px] hidden md:block"
              }, [
                createVNode("source", {
                  src: "/assets/movies/yt.mp4",
                  type: "video/mp4"
                }),
                createTextVNode(" Twoja przeglądarka nie obsługuje odtwarzacza wideo. ")
              ]),
              createVNode("video", {
                autoplay: "",
                loop: "",
                muted: "",
                poster: "/assets/images/poster.webp",
                class: "w-full object-cover lg:min-h-[690px] md:hidden"
              }, [
                createVNode("source", {
                  src: "/assets/movies/yt-small.mp4",
                  type: "video/mp4"
                }),
                createTextVNode(" Twoja przeglądarka nie obsługuje odtwarzacza wideo. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Sections/YouTube.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: Array,
    comments: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Coś więcej niż strony internetowe | Marek Gacek" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Nie trać czasu na nudne i sztampowe strony internetowe. Zaufaj mi i zobacz, jak zrobię  z Twojej strony prawdziwą petardę. Oferuję nie tylko webdesign, ale też marketing internetowy na kosmicznym poziomie. Sprawdź i daj się zaskoczyć!"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Nie trać czasu na nudne i sztampowe strony internetowe. Zaufaj mi i zobacz, jak zrobię  z Twojej strony prawdziwą petardę. Oferuję nie tylko webdesign, ale też marketing internetowy na kosmicznym poziomie. Sprawdź i daj się zaskoczyć!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$k, null, null, _parent2, _scopeId));
            _push2(`<main${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$h, { comments: __props.comments }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$f, { posts: __props.posts }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode(_sfc_main$k),
              createVNode("main", null, [
                createVNode(_sfc_main$h, { comments: __props.comments }, null, 8, ["comments"]),
                createVNode(_sfc_main$f, { posts: __props.posts }, null, 8, ["posts"]),
                createVNode(_sfc_main$e)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "ModalProject",
  __ssrInlineRender: true,
  props: {
    activeProject: Object,
    isModalOpen: Boolean,
    closeModal: Function
  },
  emits: ["update:isModalOpen"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isModalOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["fixed inset-0 flex justify-center items-center px-6 sm:px-12 2xl:px-0 pb-12 pt-32 lg:pt-0 bg-bgDark-400 bg-opacity-50", _ctx.classes]
        }, _attrs))} data-v-823a79e8><div class="bg-bgLight-200" data-v-823a79e8>`);
        _push(ssrRenderComponent(_sfc_main$11, {
          title: __props.activeProject.title,
          class: "max-w-screen-xl min-w-[60vw]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col lg:flex-row p-8 gap-12 max-h-[80vh]" data-v-823a79e8${_scopeId}><div class="lg:w-1/2 h-[400px] max-h-[400px]" data-v-823a79e8${_scopeId}>`);
              if (__props.activeProject.youtube_link) {
                _push2(`<iframe width="560" height="315"${ssrRenderAttr("src", __props.activeProject.youtube_link)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="w-full h-full" data-v-823a79e8${_scopeId}></iframe>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", __props.activeProject.image)} alt="" class="w-full h-full object-cover" data-v-823a79e8${_scopeId}>`);
              }
              _push2(`</div><div class="lg:w-1/2 flex flex-col gap-6 overflow-y-auto max-h-[400px]" data-v-823a79e8${_scopeId}><a${ssrRenderAttr("href", __props.activeProject.site_link)} target="blank" class="font-heading text-4xl" data-v-823a79e8${_scopeId}>${ssrInterpolate(__props.activeProject.title)}</a><p data-v-823a79e8${_scopeId}>${__props.activeProject.description}</p><div data-v-823a79e8${_scopeId}><span class="font-heading text-2xl" data-v-823a79e8${_scopeId}>Wykorzystane technologie</span><div class="flex justify-start items-center gap-3 mt-2" data-v-823a79e8${_scopeId}><!--[-->`);
              ssrRenderList(__props.activeProject.technologies, (technology) => {
                _push2(`<img${ssrRenderAttr("src", technology.logo)}${ssrRenderAttr("alt", technology.name)} class="w-10" data-v-823a79e8${_scopeId}>`);
              });
              _push2(`<!--]--></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col lg:flex-row p-8 gap-12 max-h-[80vh]" }, [
                  createVNode("div", { class: "lg:w-1/2 h-[400px] max-h-[400px]" }, [
                    __props.activeProject.youtube_link ? (openBlock(), createBlock("iframe", {
                      key: 0,
                      width: "560",
                      height: "315",
                      src: __props.activeProject.youtube_link,
                      title: "YouTube video player",
                      frameborder: "0",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      allowfullscreen: "",
                      class: "w-full h-full"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: __props.activeProject.image,
                      alt: "",
                      class: "w-full h-full object-cover"
                    }, null, 8, ["src"]))
                  ]),
                  createVNode("div", { class: "lg:w-1/2 flex flex-col gap-6 overflow-y-auto max-h-[400px]" }, [
                    createVNode("a", {
                      href: __props.activeProject.site_link,
                      target: "blank",
                      class: "font-heading text-4xl"
                    }, toDisplayString(__props.activeProject.title), 9, ["href"]),
                    createVNode("p", {
                      innerHTML: __props.activeProject.description
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", null, [
                      createVNode("span", { class: "font-heading text-2xl" }, "Wykorzystane technologie"),
                      createVNode("div", { class: "flex justify-start items-center gap-3 mt-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.activeProject.technologies, (technology) => {
                          return openBlock(), createBlock("img", {
                            key: technology.id,
                            src: technology.logo,
                            alt: technology.name,
                            class: "w-10"
                          }, null, 8, ["src", "alt"]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ModalProject.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ModalProject = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-823a79e8"]]);
const _sfc_main$b = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: {
    projects: Array,
    categories: Array
  },
  setup(__props) {
    const props = __props;
    let projects = ref([...props.projects]);
    let selectedCategory = ref(null);
    let activeProject = ref(null);
    const filteredProjects = computed(() => {
      if (selectedCategory.value === null) {
        return projects.value;
      }
      return projects.value.filter(
        (project) => project.categories.some(
          (category) => category.name === selectedCategory.value
        )
      );
    });
    let isModalOpen = ref(false);
    const openModal = (project) => {
      activeProject.value = project;
      isModalOpen.value = true;
      console.log("open modal");
      console.log(activeProject.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_if = resolveComponent("v-if");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section lg:min-h-[calc(100vh-371px)] mt-[71px] bg-ownPurple-400" }, _attrs))} data-v-faa32b3a><div class="flex flex-col flex-start items-center h-full px-6 sm:px-12 md:px-24 lg:px-0 py-24 gap-12" data-v-faa32b3a><div class="flex flex-wrap justify-center items-center gap-8" data-v-faa32b3a><button class="${ssrRenderClass([
        unref(selectedCategory) === null ? "bg-ownTurquise-400 hover:bg-ownTurquise-600" : "bg-ownYellow-400 hover:bg-ownYellow-600",
        "btn box-shadow"
      ])}" data-v-faa32b3a> ALL </button><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<button class="${ssrRenderClass([
          unref(selectedCategory) === category.name ? "bg-ownTurquise-400 hover:bg-ownTurquise-600" : "bg-ownYellow-400 hover:bg-ownYellow-600",
          "btn box-shadow"
        ])}" data-v-faa32b3a>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs({
        name: "list",
        class: "flex w-full flex-wrap gap-8 justify-center"
      })} data-v-faa32b3a>`);
      ssrRenderList(filteredProjects.value, (project) => {
        _push(ssrRenderComponent(_sfc_main$11, {
          key: project.id,
          title: project.title,
          customClass: " w-full lg:w-1/3 2xl:w-1/4",
          class: "project hover:animate-shake cursor-pointer",
          onClick: ($event) => openModal(project)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", project.image)} alt="miniaturka projektu" class="max-h-[300px] w-full h-full object-cover" data-v-faa32b3a${_scopeId}><!--[-->`);
              ssrRenderList(project.categories, (category) => {
                _push2(`<div data-v-faa32b3a${_scopeId}></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("img", {
                  src: project.image,
                  alt: "miniaturka projektu",
                  class: "max-h-[300px] w-full h-full object-cover"
                }, null, 8, ["src"]),
                (openBlock(true), createBlock(Fragment, null, renderList(project.categories, (category) => {
                  return openBlock(), createBlock("div", {
                    key: category.id
                  });
                }), 128))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_v_if, { isModalOpen: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ModalProject, {
              activeProject: unref(activeProject),
              isModalOpen: unref(isModalOpen),
              "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ModalProject, {
                activeProject: unref(activeProject),
                isModalOpen: unref(isModalOpen),
                "onUpdate:isModalOpen": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : isModalOpen = $event
              }, null, 8, ["activeProject", "isModalOpen", "onUpdate:isModalOpen"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Portfolio/Portfolio.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-faa32b3a"]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Portfolio
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    projects: Array,
    categories: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: "Zobacz moje projekty | Portfolio | Marek Gacek" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Zajrzyj do mojego portfolio i zobacz, jak zabawa kodem i designem tworzy niepowtarzalne projekty. Odkryj, jak moja kreatywność ożywia cyfrowy świat."${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Zajrzyj do mojego portfolio i zobacz, jak zabawa kodem i designem tworzy niepowtarzalne projekty. Odkryj, jak moja kreatywność ożywia cyfrowy świat."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}>`);
            _push2(ssrRenderComponent(Portfolio, {
              projects: __props.projects,
              categories: __props.categories
            }, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode(Portfolio, {
                  projects: __props.projects,
                  categories: __props.categories
                }, null, 8, ["projects", "categories"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Portfolio/Index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$8 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Delete Account</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$A, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$A, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$7, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$C, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$A, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$C, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$A, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$C, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$A, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600 dark:text-gray-400">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$C, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$A, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$C, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$A, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$D, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm mt-2 text-gray-800 dark:text-gray-200"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600 dark:text-gray-400">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$4, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$5, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$6, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    let showParagraph = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pr-8" }, _attrs))}><h2 class="${ssrRenderClass([{ "bg-black text-white  ": unref(showParagraph) }, "text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-heading uppercase cursor-pointer transition-colors ease-in-out duration-1000 p-4 hover:text-ownYellow-400"])}">${ssrInterpolate(__props.title)}</h2>`);
      if (unref(showParagraph)) {
        _push(`<div class="w-full transition-all ease-in-out duration-500 bg-white p-6 font-text text-3xl">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServiceCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let image = ref("/assets/images/services/services-12.webp");
    const updateImage = (newImage) => {
      image.value = newImage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, { title: "Chętnie Ci pomogę | Usługi | Marek Gacek" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="description" content="Tworzę strony internetowe, które przyciągają uwagę i marketing, który działa cuda. Zajrzyj do świata, gdzie każdy klik to krok w stronę sukcesu online. Odkryj, co mogę dla Ciebie zrobić!"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "description",
                content: "Tworzę strony internetowe, które przyciągają uwagę i marketing, który działa cuda. Zajrzyj do świata, gdzie każdy klik to krok w stronę sukcesu online. Odkryj, co mogę dla Ciebie zrobić!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$18, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownTurquise-400"${_scopeId}><div class="px-12 flex flex-col lg:grid grid-cols-12 lg:h-[72vh] py-24"${_scopeId}><div class="col-span-7 lg:h-[72vh] overflow-y-auto order-1 lg:order-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-2.webp"),
              title: "strony internetowe"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tworzenie stron internetowych to moja pasja i specjalność. Nie ma miejsca na szablonowe rozwiązania – każdy projekt jest dla mnie wyjątkowy i tworzony od podstaw. Z zamiłowaniem do designu i najnowszych technologii, gwarantuję, że strony, które tworzę, są nie tylko responsywne, ale i przyciągają wzrok swoją nowoczesnością. Niezależnie od tego, czy potrzebujesz strony-wizytówki, bloga, witryny firmowej, czy dedykowanego systemu dla hotelu czy restauracji – znajdę rozwiązanie idealnie dopasowane do Twoich potrzeb. Każdy klient jest dla mnie ważny, a jego zadowolenie to moja misja.`);
                } else {
                  return [
                    createTextVNode("Tworzenie stron internetowych to moja pasja i specjalność. Nie ma miejsca na szablonowe rozwiązania – każdy projekt jest dla mnie wyjątkowy i tworzony od podstaw. Z zamiłowaniem do designu i najnowszych technologii, gwarantuję, że strony, które tworzę, są nie tylko responsywne, ale i przyciągają wzrok swoją nowoczesnością. Niezależnie od tego, czy potrzebujesz strony-wizytówki, bloga, witryny firmowej, czy dedykowanego systemu dla hotelu czy restauracji – znajdę rozwiązanie idealnie dopasowane do Twoich potrzeb. Każdy klient jest dla mnie ważny, a jego zadowolenie to moja misja.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-21.webp"),
              title: "Sklepy online"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tworzenie sklepów online to dla mnie więcej niż praca – to sztuka dopasowania technologii do ludzkich potrzeb. Wykorzystuję różnorodne platformy, aby idealnie wpasować się w budżet i oczekiwania każdego klienta. Nie tylko uruchomię Twój sklep, ale też zintegruję go z narzędziami takimi jak Baselinker, a jeśli zajdzie potrzeba – dodam produkty, stworzę przyciągające opisy i wykonam profesjonalne zdjęcia. Wszystko po to, by Twój e-biznes startował z najlepszej pozycji.`);
                } else {
                  return [
                    createTextVNode("Tworzenie sklepów online to dla mnie więcej niż praca – to sztuka dopasowania technologii do ludzkich potrzeb. Wykorzystuję różnorodne platformy, aby idealnie wpasować się w budżet i oczekiwania każdego klienta. Nie tylko uruchomię Twój sklep, ale też zintegruję go z narzędziami takimi jak Baselinker, a jeśli zajdzie potrzeba – dodam produkty, stworzę przyciągające opisy i wykonam profesjonalne zdjęcia. Wszystko po to, by Twój e-biznes startował z najlepszej pozycji.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-6.webp"),
              title: "Social Media"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Social media to nie tylko miejsce spotkań online, to potężne narzędzie, które może wypromować Twój biznes na niespotykaną skalę. Stworzę dla Ciebie profile na wybranych platformach i zajmę się ich prowadzeniem – od publikacji postów, które przyciągną uwagę, po ich promowanie, aby dotarły do jeszcze szerszej publiczności. Z moją pomocą Twoje social media zyskają nowe życie i pomogą Ci nawiązać wartościowe relacje z klientami.`);
                } else {
                  return [
                    createTextVNode("Social media to nie tylko miejsce spotkań online, to potężne narzędzie, które może wypromować Twój biznes na niespotykaną skalę. Stworzę dla Ciebie profile na wybranych platformach i zajmę się ich prowadzeniem – od publikacji postów, które przyciągną uwagę, po ich promowanie, aby dotarły do jeszcze szerszej publiczności. Z moją pomocą Twoje social media zyskają nowe życie i pomogą Ci nawiązać wartościowe relacje z klientami.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-7.webp"),
              title: "Wizytówki google"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Wizytówki Google to Twoja wizytówka w świecie internetu. Z moją pomocą nie tylko stworzę Twoją wizytówkę, ale też zadbam o jej optymalizację i bieżące prowadzenie. Dzięki temu Twoja firma będzie widoczna i atrakcyjna dla klientów szukających usług w sieci. Zajmę się wszystkim – od słów kluczowych po aktualizacje – abyś Ty mógł skupić się na tym, co robisz najlepiej.`);
                } else {
                  return [
                    createTextVNode("Wizytówki Google to Twoja wizytówka w świecie internetu. Z moją pomocą nie tylko stworzę Twoją wizytówkę, ale też zadbam o jej optymalizację i bieżące prowadzenie. Dzięki temu Twoja firma będzie widoczna i atrakcyjna dla klientów szukających usług w sieci. Zajmę się wszystkim – od słów kluczowych po aktualizacje – abyś Ty mógł skupić się na tym, co robisz najlepiej.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-33.webp"),
              title: "Fotografia"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Fotografia to nie tylko obraz, to historia, którą opowiadam za pomocą obiektywu. Wykonuję zdjęcia, które idealnie oddają charakter Twojej marki i wzbogacają treść strony internetowej oraz profile social media. Każde ujęcie to przemyślany kadr, który przyciąga uwagę i podkreśla to, co w Twoim biznesie najlepsze.`);
                } else {
                  return [
                    createTextVNode("Fotografia to nie tylko obraz, to historia, którą opowiadam za pomocą obiektywu. Wykonuję zdjęcia, które idealnie oddają charakter Twojej marki i wzbogacają treść strony internetowej oraz profile social media. Każde ujęcie to przemyślany kadr, który przyciąga uwagę i podkreśla to, co w Twoim biznesie najlepsze.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onMouseover: ($event) => updateImage("/assets/images/services/services-32.webp"),
              title: "Copywriting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Potrzebujesz przekonujących tekstów na stronę lub opisów produktów, które przyciągną klientów? Zajmuję się copywritingiem, który sprzedaje, informuje i bawi. Twoje treści będą nie tylko oryginalne, ale też skrojone na miarę Twoich potrzeb i oczekiwań rynku. `);
                } else {
                  return [
                    createTextVNode("Potrzebujesz przekonujących tekstów na stronę lub opisów produktów, które przyciągną klientów? Zajmuję się copywritingiem, który sprzedaje, informuje i bawi. Twoje treści będą nie tylko oryginalne, ale też skrojone na miarę Twoich potrzeb i oczekiwań rynku. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-5 w-full h-[400px] md:h-[600px] lg:h-[72vh] pb-12 lg:pl-6 lg:py-12 2xl:p-12 2xl:py-0"${_scopeId}><img${ssrRenderAttr("src", unref(image))} alt="" class="w-full h-full object-cover"${_scopeId}></div></div></main>`);
          } else {
            return [
              createVNode("main", { class: "section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownTurquise-400" }, [
                createVNode("div", { class: "px-12 flex flex-col lg:grid grid-cols-12 lg:h-[72vh] py-24" }, [
                  createVNode("div", { class: "col-span-7 lg:h-[72vh] overflow-y-auto order-1 lg:order-none" }, [
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-2.webp"),
                      title: "strony internetowe"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tworzenie stron internetowych to moja pasja i specjalność. Nie ma miejsca na szablonowe rozwiązania – każdy projekt jest dla mnie wyjątkowy i tworzony od podstaw. Z zamiłowaniem do designu i najnowszych technologii, gwarantuję, że strony, które tworzę, są nie tylko responsywne, ale i przyciągają wzrok swoją nowoczesnością. Niezależnie od tego, czy potrzebujesz strony-wizytówki, bloga, witryny firmowej, czy dedykowanego systemu dla hotelu czy restauracji – znajdę rozwiązanie idealnie dopasowane do Twoich potrzeb. Każdy klient jest dla mnie ważny, a jego zadowolenie to moja misja.")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"]),
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-21.webp"),
                      title: "Sklepy online"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tworzenie sklepów online to dla mnie więcej niż praca – to sztuka dopasowania technologii do ludzkich potrzeb. Wykorzystuję różnorodne platformy, aby idealnie wpasować się w budżet i oczekiwania każdego klienta. Nie tylko uruchomię Twój sklep, ale też zintegruję go z narzędziami takimi jak Baselinker, a jeśli zajdzie potrzeba – dodam produkty, stworzę przyciągające opisy i wykonam profesjonalne zdjęcia. Wszystko po to, by Twój e-biznes startował z najlepszej pozycji.")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"]),
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-6.webp"),
                      title: "Social Media"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Social media to nie tylko miejsce spotkań online, to potężne narzędzie, które może wypromować Twój biznes na niespotykaną skalę. Stworzę dla Ciebie profile na wybranych platformach i zajmę się ich prowadzeniem – od publikacji postów, które przyciągną uwagę, po ich promowanie, aby dotarły do jeszcze szerszej publiczności. Z moją pomocą Twoje social media zyskają nowe życie i pomogą Ci nawiązać wartościowe relacje z klientami.")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"]),
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-7.webp"),
                      title: "Wizytówki google"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Wizytówki Google to Twoja wizytówka w świecie internetu. Z moją pomocą nie tylko stworzę Twoją wizytówkę, ale też zadbam o jej optymalizację i bieżące prowadzenie. Dzięki temu Twoja firma będzie widoczna i atrakcyjna dla klientów szukających usług w sieci. Zajmę się wszystkim – od słów kluczowych po aktualizacje – abyś Ty mógł skupić się na tym, co robisz najlepiej.")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"]),
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-33.webp"),
                      title: "Fotografia"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Fotografia to nie tylko obraz, to historia, którą opowiadam za pomocą obiektywu. Wykonuję zdjęcia, które idealnie oddają charakter Twojej marki i wzbogacają treść strony internetowej oraz profile social media. Każde ujęcie to przemyślany kadr, który przyciąga uwagę i podkreśla to, co w Twoim biznesie najlepsze.")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"]),
                    createVNode(_sfc_main$2, {
                      onMouseover: ($event) => updateImage("/assets/images/services/services-32.webp"),
                      title: "Copywriting"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Potrzebujesz przekonujących tekstów na stronę lub opisów produktów, które przyciągną klientów? Zajmuję się copywritingiem, który sprzedaje, informuje i bawi. Twoje treści będą nie tylko oryginalne, ale też skrojone na miarę Twoich potrzeb i oczekiwań rynku. ")
                      ]),
                      _: 1
                    }, 8, ["onMouseover"])
                  ]),
                  createVNode("div", { class: "col-span-5 w-full h-[400px] md:h-[600px] lg:h-[72vh] pb-12 lg:pl-6 lg:py-12 2xl:p-12 2xl:py-0" }, [
                    createVNode("img", {
                      src: unref(image),
                      alt: "",
                      class: "w-full h-full object-cover"
                    }, null, 8, ["src"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Services/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dashboard`);
              } else {
                return [
                  createTextVNode("Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Log in`);
              } else {
                return [
                  createTextVNode("Log in")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><a href="https://laravel.com/docs" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laracasts.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laracasts</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laravel News</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Forge</a>, <a href="https://vapor.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Vapor</a>, <a href="https://nova.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Nova</a>, and <a href="https://envoyer.io" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Telescope</a>, and more. </p></div></div></div></div><div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between"><div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-start"><div class="flex items-center gap-4"><a href="https://github.com/sponsors/taylorotwell" class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="-mt-px me-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg> Sponsor </a></div></div><div class="ms-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i(t4, r2, n2) {
  return i = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t5) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, i.apply(null, arguments);
}
function u(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return u = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return i(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, u(t4);
}
var f = String.prototype.replace, a = /%20/g, c = "RFC3986", l = { default: c, formatters: { RFC1738: function(t4) {
  return f.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: c }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var T2 = Object.keys(h2);
    k2 = a2 ? T2.sort(a2) : T2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var C2 = k2[N2], D2 = "object" == typeof C2 && void 0 !== C2.value ? C2.value : h2[C2];
    if (!i2 || null !== D2) {
      var $2 = g(h2) ? "function" == typeof e2 ? e2(n2, C2) : n2 : n2 + (c2 ? "." + C2 : "[" + C2 + "]");
      w(x2, t3(D2, $2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, T = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, C = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, D = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : C(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, $ = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return T;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? T.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : T.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : T.arrayLimit, charset: void 0 === t5.charset ? T.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : T.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : T.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : T.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : T.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : T.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : T.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : T.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : T.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : T.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, T.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), T.decoder, u3, "key"), a3 = d.maybeMap(C(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, T.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = D(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, F = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(decodeURI(o2));
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: $(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(t5[e2]))
        throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + r2.name + "'.");
      if (r2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + r2.wheres[e2] + ")?" : r2.wheres[e2]) + "$").test(null != (u2 = t5[e2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + e2 + "' parameter does not match required format '" + r2.wheres[e2] + "' for route '" + r2.name + "'.");
      return encodeURI(null != (i2 = t5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    var t5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === t5 ? "/" : t5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), I = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new F(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : g(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new F(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new F(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.m = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ u(String)), P = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new I(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About/FirstSection.vue": __vite_glob_0_0, "./Pages/About/Index.vue": __vite_glob_0_1, "./Pages/About/SecondSection.vue": __vite_glob_0_2, "./Pages/About/TechsMarquee.vue": __vite_glob_0_3, "./Pages/Admin/Categories/Create.vue": __vite_glob_0_4, "./Pages/Admin/Categories/Edit.vue": __vite_glob_0_5, "./Pages/Admin/Categories/Index.vue": __vite_glob_0_6, "./Pages/Admin/Comments/Create.vue": __vite_glob_0_7, "./Pages/Admin/Comments/Edit.vue": __vite_glob_0_8, "./Pages/Admin/Comments/Index.vue": __vite_glob_0_9, "./Pages/Admin/Dashboard.vue": __vite_glob_0_10, "./Pages/Admin/Posts/Create.vue": __vite_glob_0_11, "./Pages/Admin/Posts/Edit.vue": __vite_glob_0_12, "./Pages/Admin/Posts/Index.vue": __vite_glob_0_13, "./Pages/Admin/Projects/Create.vue": __vite_glob_0_14, "./Pages/Admin/Projects/Edit.vue": __vite_glob_0_15, "./Pages/Admin/Projects/Index.vue": __vite_glob_0_16, "./Pages/Admin/Technologies/Create.vue": __vite_glob_0_17, "./Pages/Admin/Technologies/Edit.vue": __vite_glob_0_18, "./Pages/Admin/Technologies/Index.vue": __vite_glob_0_19, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_20, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_21, "./Pages/Auth/Login.vue": __vite_glob_0_22, "./Pages/Auth/Register.vue": __vite_glob_0_23, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_24, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_25, "./Pages/Blog/Index.vue": __vite_glob_0_26, "./Pages/Contact/Index.vue": __vite_glob_0_27, "./Pages/Dashboard.vue": __vite_glob_0_28, "./Pages/Error.vue": __vite_glob_0_29, "./Pages/Home/Index.vue": __vite_glob_0_30, "./Pages/Home/Sections/Blog.vue": __vite_glob_0_31, "./Pages/Home/Sections/Header.vue": __vite_glob_0_32, "./Pages/Home/Sections/Services.vue": __vite_glob_0_33, "./Pages/Home/Sections/YouTube.vue": __vite_glob_0_34, "./Pages/Portfolio/Index.vue": __vite_glob_0_35, "./Pages/Portfolio/Portfolio.vue": __vite_glob_0_36, "./Pages/Profile/Edit.vue": __vite_glob_0_37, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_38, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_39, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_40, "./Pages/Services/Index.vue": __vite_glob_0_41, "./Pages/Welcome.vue": __vite_glob_0_42 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(P).component("Link", Link).component("Head", Head).use(VueReCaptcha, { siteKey: captcheKey }).component("PrimaryButton", PrimaryButton$1);
    }
  })
);
