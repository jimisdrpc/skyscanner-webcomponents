import { SkyscannerFlightSearch } from "../public/skyscanner-flight-search/skyscanner-flight-search.js";
import { TestUtils } from "./test-utils.js";
describe("simplest test", () => {
    it("first try (using TestUtils)", async() => {
        const { shadowRoot } = await TestUtils.render("skyscanner-flight-search");
        expect(shadowRoot.querySelector("#firstdiv")).toBeTruthy();
    });
});