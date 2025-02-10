export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"app/immutable/entry/start.C0RK-nXX.js","app":"app/immutable/entry/app.DioX2kky.js","imports":["app/immutable/entry/start.C0RK-nXX.js","app/immutable/chunks/entry.DE1mMt9c.js","app/immutable/chunks/runtime.CJiDX4uk.js","app/immutable/chunks/index-client.-RnsR47q.js","app/immutable/entry/app.DioX2kky.js","app/immutable/chunks/runtime.CJiDX4uk.js","app/immutable/chunks/render.BJWT9hI_.js","app/immutable/chunks/disclose-version.CIneF0yB.js","app/immutable/chunks/props.cKcIXvG9.js","app/immutable/chunks/index-client.-RnsR47q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
