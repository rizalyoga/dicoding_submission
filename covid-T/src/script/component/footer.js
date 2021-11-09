import footerLogo from "../../images/covid-logo.svg";

class footerCovid extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <section id="footer">
    <div class="container footer-row">
      <hr />
      <div class="footer-right-col">
        <div class="footer-info">
          <div class="footer-logo">
            <img src="${footerLogo}" />
          </div>
        </div>
      </div>
    </div>
  </section>`;
  }
}

customElements.define("footer-covid", footerCovid);
