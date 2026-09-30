module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/date.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Date
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// To format the date, we’ll use the date-fns library.
// install it: npm install date-fns
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [ssr] (ecmascript) <locals>");
;
;
function Date({ dateString }) {
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["parseISO"])(dateString);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("time", {
        dateTime: dateString,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'LLLL d, yyyy')
    }, void 0, false, {
        fileName: "[project]/components/date.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/layout.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout,
    "siteTitle",
    ()=>siteTitle
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// next/head lets this shared layout add tags to the document <head> on every page that uses Layout.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
// next/image optimizes images (sizing, lazy loading). Files in /public are served from the site root, e.g. /profile.jpg.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
// layout.module.css is scoped to this component (container, header, backToHome).
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/layout.module.css [ssr] (css module)");
// utils.module.css has reusable classes like borderCircle and heading sizes.
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/utils.module.css [ssr] (css module)");
// next/link client-side navigates between pages without a full reload.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
;
;
;
const name = 'Andree Palet';
const siteTitle = 'Next.js Sample Website';
function Layout({ children, home }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container}${home ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].home}` : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/components/layout.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Learn how to build a personal website using Next.js"
                    }, void 0, false, {
                        fileName: "[project]/components/layout.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        // og:image is the preview picture when this URL is shared on social apps.
                        property: "og:image",
                        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=${encodeURIComponent('https://nextjs.org/static/nextjs-logo.svg')}`
                    }, void 0, false, {
                        fileName: "[project]/components/layout.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "og:title",
                        content: siteTitle
                    }, void 0, false, {
                        fileName: "[project]/components/layout.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }, void 0, false, {
                        fileName: "[project]/components/layout.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
                children: home ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            // priority loads this image first because it is visible at the top of the homepage.
                            priority: true,
                            src: "/profile.jpg",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].borderCircle,
                            height: 144,
                            width: 144,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/components/layout.js",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heading2Xl,
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/layout.js",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout.js",
                    lineNumber: 42,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                priority: true,
                                src: "/profile.jpg",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].borderCircle,
                                height: 108,
                                width: 108,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/components/layout.js",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout.js",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headingLg,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].colorInherit,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/layout.js",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout.js",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout.js",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: home ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].homeMain : undefined,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/layout.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            !home && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].backToHome,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: "← Back to home"
                }, void 0, false, {
                    fileName: "[project]/components/layout.js",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout.js",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backToHome": "layout-module__URsdqq__backToHome",
  "container": "layout-module__URsdqq__container",
  "header": "layout-module__URsdqq__header",
  "home": "layout-module__URsdqq__home",
  "homeMain": "layout-module__URsdqq__homeMain",
});
}),
"[project]/lib/posts.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "getAllPostIds",
    ()=>getAllPostIds,
    "getPostData",
    ()=>getPostData,
    "getSortedPostsData",
    ()=>getSortedPostsData
]);
//In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. 
// It's usually convention to use lib or utils.
// To render markdown content, we’ll use the remark library.
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$29$__ = __turbopack_context__.i("[externals]/remark [external] (remark, esm_import, [project]/node_modules/remark)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$html$29$__ = __turbopack_context__.i("[externals]/remark-html [external] (remark-html, esm_import, [project]/node_modules/remark-html)");
// fs is a Node.js module that lets you read files from the file system.
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
//path is a Node.js module that lets you manipulate file paths.
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
//matter is a library that lets you parse the metadata in each markdown file. (.md files)
var __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$gray$2d$matter$29$__ = __turbopack_context__.i("[externals]/gray-matter [external] (gray-matter, cjs, [project]/node_modules/gray-matter)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$html$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$html$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
/*
Create a utility function for parsing data from the file system. With this utility function, we’d like to:

- Parse each markdown file and get title, date, and file name (which will be used as id for the post URL).
- List the data on the index page, sorted by date.
*/ const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'posts');
function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, fileName);
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const matterResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllPostIds() {
    const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}
async function getPostData(id) {
    const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${id}.md`);
    const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$gray$2d$matter__$5b$external$5d$__$28$gray$2d$matter$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$gray$2d$matter$29$__["default"])(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$remark__$5b$external$5d$__$28$remark$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$29$__["remark"])() //Important: We added the async keyword to getPostData because we need to use await for remark. async/await allow you to fetch data asynchronously.
    .use(__TURBOPACK__imported__module__$5b$externals$5d2f$remark$2d$html__$5b$external$5d$__$28$remark$2d$html$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$remark$2d$html$29$__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/posts/[id].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>Post,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// Pages that begin with [ and end with ] are dynamic routes in Next.js.
// Adding CSS
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/utils.module.css [ssr] (css module)");
// Formatting the date
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/date.js [ssr] (ecmascript)");
// Adding title to the Post Page
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPostData"])(params.id);
    return {
        props: {
            postData
        }
    };
}
async function getStaticPaths() {
    const paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPostIds"])();
    return {
        paths,
        fallback: false
    };
}
function Post({ postData }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: postData.title
                }, void 0, false, {
                    fileName: "[project]/pages/posts/[id].js",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/posts/[id].js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headingXl,
                        children: postData.title
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[id].js",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].lightText,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            dateString: postData.date
                        }, void 0, false, {
                            fileName: "[project]/pages/posts/[id].js",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[id].js",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: postData.contentHtml
                        }
                    }, void 0, false, {
                        fileName: "[project]/pages/posts/[id].js",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/posts/[id].js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/posts/[id].js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/styles/utils.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "borderCircle": "utils-module__nwfdoa__borderCircle",
  "colorInherit": "utils-module__nwfdoa__colorInherit",
  "heading2Xl": "utils-module__nwfdoa__heading2Xl",
  "headingLg": "utils-module__nwfdoa__headingLg",
  "headingMd": "utils-module__nwfdoa__headingMd",
  "headingXl": "utils-module__nwfdoa__headingXl",
  "lightText": "utils-module__nwfdoa__lightText",
  "list": "utils-module__nwfdoa__list",
  "listItem": "utils-module__nwfdoa__listItem",
  "padding1px": "utils-module__nwfdoa__padding1px",
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1kmtxq1._.js.map