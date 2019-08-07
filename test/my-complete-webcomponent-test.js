import { TestUtils } from "./test-utils.js";
import "../public/to-try/my-complete-webcomponent.js";
describe("just test if it was rendered", () => {
    it("complete webcomponent in a single file", async() => {
        const { shadowRoot } = await TestUtils.render("my-complete-webcomponent");
        expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
    });

});