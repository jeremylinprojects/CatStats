module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/lib/feeding.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFood",
    ()=>getFood
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+kv@3.0.0/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript)");
;
async function getFood(deviceID) {
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
    }));
    const START = 0;
    const END = 24;
    const MEALS = 3;
    const TOTAL_G = 40;
    const start = new Date(local);
    start.setHours(START, 0, 0, 0);
    const end = new Date(local);
    end.setHours(END, 0, 0, 0);
    if (local < start || local > end) {
        return {
            command: "IDLE"
        };
    }
    const interval = (end.getTime() - start.getTime()) / MEALS;
    const elapsed = local.getTime() - start.getTime();
    let slot = Math.floor(elapsed / interval);
    if (slot >= MEALS) {
        slot = MEALS - 1;
    }
    const date = local.toISOString().split("T")[0];
    const feed_id = `${date}:${slot}`;
    const last = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].get(`${deviceID}:last_feed_id`);
    if (last === feed_id) {
        return {
            command: "IDLE"
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(`${deviceID}:last_feed_id`, feed_id);
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(`${deviceID}:last_feed_grams`, Math.floor(TOTAL_G / MEALS));
    return {
        command: "FEED",
        target_g: TOTAL_G / MEALS
    };
}
}),
"[project]/lib/refill.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWater",
    ()=>getWater
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+kv@3.0.0/node_modules/@vercel/kv/dist/index.js [app-route] (ecmascript)");
;
async function getWater(deviceID, waterGrams) {
    const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].get(`${deviceID}:last_water_grams`);
    let command;
    if (raw == null) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(`${deviceID}:last_water_grams`, waterGrams);
        return {
            command: "IDLE"
        };
    }
    const lastWaterGrams = Number(raw);
    if (waterGrams >= lastWaterGrams) {
        command = {
            command: "IDLE"
        };
    } else {
        command = {
            command: "REFILL",
            target_g: lastWaterGrams - waterGrams
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$kv$40$3$2e$0$2e$0$2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["kv"].set(`${deviceID}:last_water_grams`, waterGrams);
    return command;
}
}),
"[project]/app/api/device/[id]/command/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feeding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/feeding.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$refill$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/refill.ts [app-route] (ecmascript)");
;
;
;
async function GET(req, context) {
    const { id: deviceID } = await context.params;
    let command;
    if (deviceID == "FOOD") {
        command = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feeding$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFood"])(deviceID);
    } else {
        command = {
            command: "ERROR",
            reason: "UNKNOWN_DEVICE_ID"
        };
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(command);
}
async function POST(req, context) {
    const { id: deviceID } = await context.params;
    const body = await req.json();
    let command;
    if (deviceID == "WATER") {
        let waterLevel = Number(body.waterLevel);
        command = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$refill$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWater"])(deviceID, waterLevel);
    } else {
        command = {
            command: "ERROR",
            reason: "UNKNOWN_DEVICE_ID"
        };
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(command);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0nwses1._.js.map