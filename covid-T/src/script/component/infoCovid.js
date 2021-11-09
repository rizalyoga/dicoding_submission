import infoIlustration from "../../images/docter-covid.svg";

class infoCovid extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="covid-19">
        <div class="container covid-19-row">
          <div class="covid-19-left-col">
            <div class="covid-19-text">
              <h1>Virus Covid-19</h1>
              <span class="square"></span>
              <p>
                Covid-19 disebabkan oleh koronavirus jenis baru yang diberi nama SARS-CoV-2. Wabah Covid-19 pertama kali dideteksi di Kota Wuhan, Hubei, Tiongkok pada tanggal 31 Desember 2019, dan ditetapkan sebagai pandemi oleh Organisasi
                Kesehatan Dunia (WHO) pada tanggal 11 Maret 2020.
              </p>
              <a href="https://id.wikipedia.org/wiki/Penyakit_koronavirus_2019" target="blank"><button class="common-btn">Lebih detail</button></a>
              <div class="line">
                <span class="line-1"></span><br />
                <span class="line-2"></span><br />
                <span class="line-3"></span>
              </div>
            </div>
          </div>
          <div class="covid-19-right-col">
            <img src="${infoIlustration}" />
          </div>
        </div>
      </section>`;
  }
}

customElements.define("info-covid", infoCovid);
