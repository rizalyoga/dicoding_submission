import homeButton from "../../images/home.svg";

class homeBtn extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <a href="#home"><img id="homebtn" src="${homeButton}" alt="home-button" /></a>`;
  }
}

customElements.define("home-btn", homeBtn);
