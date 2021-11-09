import headerLogo from "../../images/covid-logo.svg";
import headerIlustration from "../../images/Covid19-pink.svg";
import cssCustom from "../../style/style.css";
import css from "bootstrap/dist/css/bootstrap.min.css";

class headerHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
        ${css}
        ${cssCustom}
    </style>
    <section id="home" >
        <div class="container" >
          <img src="${headerLogo}" class="logo" />
          <div class="row-home">
             <div class="col-left">
               <div class="home-text">
                 <h1>
                   Covid-T website tracking Covid-19 di Indonesia
                 </h1>
                <span class="square"></span>
                <p>Covid-19 adalah penyakit menular yang disebabkan oleh SARS-CoV-2, salah satu jenis koronavirus. Website Covit-T ini, bertujuan untuk membantu masayarakat mengupdate informasi tentang persebaran covid-19 di Indonesia.</p>
                <br />
                <div class="line">
                  <span class="line-1"></span><br />
                  <span class="line-2"></span><br />
                  <span class="line-3"></span>
                </div>
               </div>
            </div>
            <div class="col-right">
                <img src="${headerIlustration}" />
            </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("header-home", headerHome);
