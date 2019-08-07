import { TestUtils } from "./test-utils.js";
import "../public/to-try/my-complete-webcomponent.js";
describe("just test if await webcomponent was rendered", () => {
    it("await/fetch html file", async() => {
        const { shadowRoot } = await TestUtils.render("my-await-webcomponent");
        expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
    });

});