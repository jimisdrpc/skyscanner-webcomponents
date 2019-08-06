// const template = document.createElement("template");
// template.innerHTML = `<div id="firstdiv"><input id="inputSessionKey"/></div>`;

(async() => {
    const res = await fetch(
        "/skyscanner-flight-search/skyscanner-flight-search.html"
    );
    const textTemplate = await res.text();

    const HTMLTemplate = new DOMParser()
        .parseFromString(textTemplate, "text/html")
        .querySelector("template");

    class skyscannerFlightSearch extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(HTMLTemplate.content.cloneNode(true));

            const inputSessionKey = this.shadowRoot.getElementById("inputSessionKey");
            //const url = "http://localhost:8080/getsessionkey";
            const url = "https://rapid-api-to-learn.herokuapp.com/getsessionkey";

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
})();