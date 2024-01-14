const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/bulma.css","css/style.css","favicon.jpg","goatmarks-logo.jpg","images/Background BL.svg","images/Background BR.svg","images/Background TL.svg","images/Background TR.svg","images/Kebab.svg","images/Plus.svg","images/goatmarks-logo.jpg","sass/bulma.scss"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.gKURZH07.js","app":"_app/immutable/entry/app.neX3JONx.js","imports":["_app/immutable/entry/start.gKURZH07.js","_app/immutable/chunks/entry.osihWSIt.js","_app/immutable/chunks/scheduler.kdh8Y4ec.js","_app/immutable/chunks/index.Kgl4krPg.js","_app/immutable/entry/app.neX3JONx.js","_app/immutable/chunks/scheduler.kdh8Y4ec.js","_app/immutable/chunks/index.F82Lk53Y.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-OcJMsL9f.js')),
			__memo(() => import('./chunks/1-bUY6-1Up.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
