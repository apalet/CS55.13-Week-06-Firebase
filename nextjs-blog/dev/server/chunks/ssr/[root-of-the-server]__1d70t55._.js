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
"[project]/lib/posts-json.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPostIds",
    ()=>getAllPostIds,
    "getPostData",
    ()=>getPostData,
    "getSortedPostsData",
    ()=>getSortedPostsData
]);
// fs is a Node.js module that lets you read files from the file system.
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
//path is a Node.js module that lets you manipulate file paths.
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// Defines the directory where the data files are stored.
const dataDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
// Auxiliar Function that reads posts.json and converts its JSON content into a JavaScript object.
function getPostsData() {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataDir, 'posts.json'); // Creates the full path to the posts.json file.
    const jsonString = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8'); // Reads the JSON file as a text string.
    const jsonObj = JSON.parse(jsonString); // Converts the JSON string into a JavaScript array of objects.
    return jsonObj; // Returns the parsed posts data so other functions can use it.
}
function getSortedPostsData() {
    const jsonObj = getPostsData(); // Gets the posts data from the helper function.
    jsonObj.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    return jsonObj.map((item)=>{
        return {
            id: item.id.toString(),
            title: item.title,
            date: item.date // Keeps the post date.
        };
    });
}
function getAllPostIds() {
    const jsonObj = getPostsData();
    console.log(jsonObj); // Displays the posts in the console for debugging.
    return jsonObj.map((item)=>{
        return {
            params: {
                id: item.id.toString() // Converts the post ID to a string for the dynamic route.
            }
        };
    });
}
function getPostData(id) {
    const jsonObj = getPostsData();
    const objReturned = jsonObj.filter((obj)=>{
        return obj.id.toString() === id;
    });
    if (objReturned.length === 0) {
        return {
            id: id,
            title: 'Not found',
            date: '',
            contentHtml: 'Not found'
        };
    } else {
        return objReturned[0];
    }
}
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/index.js is the home page. In the Pages Router, this file maps to the "/" route.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/date.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
// Layout wraps the page with the shared header/profile. siteTitle is a named export used in the document title.
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout.js [ssr] (ecmascript)");
// CSS Modules: utilStyles.headingMd becomes a unique class name so styles stay scoped to this usage.
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/utils.module.css [ssr] (css module)");
// Changed where we are getting the data source from. From posts.js to posts-json.js
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$json$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/posts-json.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
async function getStaticProps() {
    const allPostsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$posts$2d$json$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getSortedPostsData"])();
    return {
        props: {
            allPostsData
        }
    };
}
function Home({ allPostsData }) {
    return(// Passing home tells Layout this is the homepage, so it shows the large profile photo and h1 name.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        home: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["siteTitle"]
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headingMd} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].padding1px}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Hi I'm Andree. I'm a Full-Stack Developer building modern, user-friendly web applications with JavaScript, React, Node.js, and Next.js. Find some of my projects at ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://github.com/apalet",
                                children: "Github"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 35,
                                columnNumber: 80
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "(This is a sample website - you'll be building a site like this on",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "https://nextjs.org/learn",
                                children: "our Next.js tutorial"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            ".)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headingMd} ${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].padding1px}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headingLg,
                        children: "Blog"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].list,
                        children: allPostsData.map(({ id, date, title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/posts/${id}`,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("small", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$utils$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].lightText,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$date$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            dateString: date
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 28,
        columnNumber: 5
    }, this));
}
}),
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1d70t55._.js.map