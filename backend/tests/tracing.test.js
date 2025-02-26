const sdk = require("../tracing");

describe("Tracing Module", () => {
    test("Should initialize tracing", () => {
        expect(sdk).not.toBeUndefined();
    });
});
