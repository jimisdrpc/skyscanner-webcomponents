const template = document.createElement("template");
template.innerHTML = `<div id="firstdiv"><input id="inputSessionKey"/></div>`;

class skyscannerFlightSearch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const inputSessionKey = this.shadowRoot.getElementById("inputSessionKey");
    const url = "http://localhost:8080/getsessionkey";

    fetch(url)
      .then(function(body) {
        return body.text();
      })
      .then(function(data) {
        inputSessionKey.value = data;
        console.log(data);
      });
  }
}

window.customElements.define(
  "skyscanner-flight-search",
  skyscannerFlightSearch
);
