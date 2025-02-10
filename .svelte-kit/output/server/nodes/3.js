

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tech/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cg-cBhOi.js","_app/immutable/chunks/disclose-version.CIneF0yB.js","_app/immutable/chunks/runtime.CJiDX4uk.js","_app/immutable/chunks/legacy.U0zZMS_I.js"];
export const stylesheets = ["_app/immutable/assets/3.BFQvB3J_.css"];
export const fonts = [];
