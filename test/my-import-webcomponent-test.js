import { TestUtils } from "./test-utils.js";
import "../public/to-try/my-import-webcomponent.js";
describe("just test if import way was rendered", () => {
    it("import webcomponent in a single file", async() => {
        const { shadowRoot } = await TestUtils.render("my-import-webcomponent");
        expect(shadowRoot.querySelector("#mydiv")).toBeTruthy();
    });

});