export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DSSLKl29.js","app":"_app/immutable/entry/app.DSsEjKp2.js","imports":["_app/immutable/entry/start.DSSLKl29.js","_app/immutable/chunks/entry.B7aD6XEC.js","_app/immutable/chunks/runtime.CJiDX4uk.js","_app/immutable/chunks/index-client.-RnsR47q.js","_app/immutable/entry/app.DSsEjKp2.js","_app/immutable/chunks/runtime.CJiDX4uk.js","_app/immutable/chunks/render.BJWT9hI_.js","_app/immutable/chunks/disclose-version.CIneF0yB.js","_app/immutable/chunks/props.cKcIXvG9.js","_app/immutable/chunks/index-client.-RnsR47q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/tech",
				pattern: /^\/tech\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
