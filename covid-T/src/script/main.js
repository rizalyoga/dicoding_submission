import "./component/headerHome.js";
import "./component/homeBtn.js";
import "./component/status.js";
import "./component/infoCovid.js";
import "./component/footer.js";

const main = () => {
  const apiUrl = "https://apicovid19indonesia-v2.vercel.app/api/indonesia";

  const getData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((results) => {
        const statusCovidElement = document.querySelector("status-covid");
        statusCovidElement.covidItem = results;
      })
      .catch(() => showMessage());
  };

  const showMessage = (message = "Gagal Terkoneksi...") => {
    alert(message);
  };

  getData();
};

export default main;
