import { TestUtils } from "./test-utils.js";
import "../public/skyscanner-flight-search/skyscanner-flight-search.js";
import "../public/skyscanner-flight-search/skyscanner-flight-search.html";
describe("simplest test", () => {
    it("first try (using TestUtils)", async() => {
        const { shadowRoot } = await TestUtils.render("skyscanner-flight-search");
        expect(shadowRoot.querySelector("#firstdiv")).toBeTruthy();
    });
});