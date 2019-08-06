import { SkyscannerFlightSearch } from "./public/skyscanner-flight-search/skyscanner-flight-search";

describe("simplest test", () => {
  let element, shadowRoot;
  beforeEach(() => {
    element = document.createElement("skyscanner-flight-search");
    shadowRoot = element.shadowRoot;
    document.body.append(element);
  });

  // check that the exposed API works
  describe("init", () => {
    it("should add an in the shadow root", () => {
      expect(shadowRoot.querySelector("firstdiv")).toBeTruthy();
    });
  });
});
