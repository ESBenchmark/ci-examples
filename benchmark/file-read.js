import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { defineSuite } from "esbench";

const filename = "pnpm-lock.yaml";

export default defineSuite({
	baseline: {
		type: "os",
		value: "ubuntu-latest"
	},
	setup(scene){
		scene.bench("sync", () => readFileSync(filename));
		scene.benchAsync("async", () => readFile(filename));
	}
});
