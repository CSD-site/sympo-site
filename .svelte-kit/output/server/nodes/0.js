

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["app/immutable/nodes/0.aM7hIs7M.js","app/immutable/chunks/disclose-version.CIneF0yB.js","app/immutable/chunks/runtime.CJiDX4uk.js","app/immutable/chunks/legacy.U0zZMS_I.js"];
export const stylesheets = ["app/immutable/assets/0.BcfKF7C8.css"];
export const fonts = [];
