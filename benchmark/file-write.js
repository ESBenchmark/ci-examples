import { writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";
import { defineSuite } from "esbench";

const filename = "chunk";
const data = randomBytes(4096 + 1);

export default defineSuite({
	setup(scene) {
		scene.bench("sync", () => writeFileSync(filename, data));
		scene.benchAsync("async", () => writeFile(filename, data));
	}
});
