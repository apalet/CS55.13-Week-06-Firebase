module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/hello.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// creating a simple API endpoint
__turbopack_context__.s([
    "default",
    ()=>handler
]);
function handler(req, res) {
    res.status(200).json({
        text: 'Hello'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_w_1nr._.js.map