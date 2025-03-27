import { sum } from "./sum";

describe("sum", () => {
	it("1 and 2 should equal 3", () => {
		expect(sum(1, 2)).toEqual(3);
	});
});
