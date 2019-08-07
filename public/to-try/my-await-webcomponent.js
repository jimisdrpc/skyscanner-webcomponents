(async() => {
    const res = await fetch("/to-try/my-await-webcomponent.html");
    const textTemplate = await res.text();

    const HTMLTemplate = new DOMParser()
        .parseFromString(textTemplate, "text/html")
        .querySelector("template");

    class myAwaitWebcomponent extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(HTMLTemplate.content.cloneNode(true));
        }
    }

    window.customElements.define("my-await-webcomponent", myAwaitWebcomponent);
})();