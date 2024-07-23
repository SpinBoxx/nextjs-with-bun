import { expect, test } from "bun:test";
import { addition } from "@/services/addition";

test("2 + 2", () => {
	const res = addition(2, 2);
	expect(2 + 2).toBe(res);
});
