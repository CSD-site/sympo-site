

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tech/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/3.B7vyY4Ul.js","app/immutable/chunks/disclose-version.CIneF0yB.js","app/immutable/chunks/runtime.CJiDX4uk.js","app/immutable/chunks/legacy.U0zZMS_I.js"];
export const stylesheets = ["app/immutable/assets/3.BFQvB3J_.css"];
export const fonts = [];
