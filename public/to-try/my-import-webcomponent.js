class MyImportWebcomponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        //const template = document.querySelector("my-import-webcomponent-template");
        const template = document.getElementById("my-import-webcomponent-template").content;
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define("my-import-webcomponent", MyImportWebcomponent);