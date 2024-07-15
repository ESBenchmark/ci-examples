import { readdirSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { defineSuite } from "esbench";

const options = { recursive: true };

export default defineSuite({
	baseline: {
		type: "os",
		value: "ubuntu-latest"
	},
	setup(scene){
		scene.bench("sync", () => readdirSync("node_modules", options));
		scene.benchAsync("async", () => readdir("node_modules", options));
	}
});
