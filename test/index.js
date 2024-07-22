import { test } from "node:test";
import assert from "assert";
import { readFileSync } from "fs";
import wasm, { run_callback } from "../pkg/echo.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url)
const rustAddon = require("../index.node");
const cppAddon = require("../build/Release/napi.node");

const callback = () => "Hello World"

test("napi-cpp", () => {
	const r = cppAddon(callback);
	assert.strictEqual(r, "Hello World")
});

test("napi-rs", () => {
	const r = rustAddon.runCallback(callback);
	assert.strictEqual(r, "Hello World")
});

test("wasm-pack", async () => {
	await wasm(readFileSync("pkg/forien_bg.wasm"))
	const r = run_callback(callback);
	assert.strictEqual(r, "Hello World")
});
