import "clsx";
import { k as rest_props, l as fallback, m as ensure_array_like, o as spread_attributes, q as clsx, t as element, u as slot, v as bind_props, f as pop, w as sanitize_props, p as push, x as spread_props, j as escape_html } from "../../chunks/index.js";
/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push();
  let name = fallback($$props["name"], void 0);
  let color = fallback($$props["color"], "currentColor");
  let size = fallback($$props["size"], 24);
  let strokeWidth = fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = fallback($$props["iconNode"], () => [], true);
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  const each_array = ensure_array_like(iconNode);
  $$payload.out += `<svg${spread_attributes(
    {
      ...defaultAttributes,
      ...$$restProps,
      width: size,
      height: size,
      stroke: color,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
    },
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [tag, attrs] = each_array[$$index];
    element($$payload, tag, () => {
      $$payload.out += `${spread_attributes({ ...attrs }, void 0, void 0, 3)}`;
    });
  }
  $$payload.out += `<!--]--><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Move_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 18L12 22L16 18" }],
    ["path", { "d": "M12 2V22" }]
  ];
  Icon($$payload, spread_props([
    { name: "move-down" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function CountdownTImer($$payload, $$props) {
  push();
  let targetDate = (/* @__PURE__ */ new Date("2025-02-25T00:00:00")).getTime();
  let timeLeft = calculateTimeLeft();
  function calculateTimeLeft() {
    let now = (/* @__PURE__ */ new Date()).getTime();
    let difference = targetDate - now;
    return {
      days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
      minutes: Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60)),
      seconds: Math.floor(difference % (1e3 * 60) / 1e3)
    };
  }
  const each_array = ensure_array_like(Object.entries(timeLeft));
  $$payload.out += `<div class="flex items-center justify-center space-x-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [label, value] = each_array[$$index];
    $$payload.out += `<div class="text-center"><div class="relative flex h-20 w-16 items-center justify-center rounded-md bg-gray-800 font-mono text-4xl text-white shadow-md">${escape_html(value)}</div> <p class="text-sm text-gray-600">${escape_html(label)}</p></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<header><img src="https://i.postimg.cc/Njm15NPW/hero-img-copy.png" alt="background_image" class="fixed inset-0 bottom-10 -z-10 w-screen object-cover"> <div style="padding-top: 75vh;"></div> <div class="flex flex-col items-center justify-between px-20 sm:flex-row">`;
  CountdownTImer($$payload);
  $$payload.out += `<!----> <button class="btn btn-ghost h-[100px] w-[100px] rounded-full border-zinc-100 bg-black/35">`;
  Move_down($$payload, { size: 100 });
  $$payload.out += `<!----></button> <button class="btn btn-primary h-[75px] text-xl">Register now !</button></div></header> <section class="bg-image"></section>`;
}
export {
  _page as default
};
