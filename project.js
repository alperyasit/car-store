const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

//  UI Objesi Açma

const ui = new UI();

//  Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addCar);
}

function addCar(e) {
  const title = titleElement.value;
  const price = priceElement.value;
  const url = urlElement.value;
  e.preventDefault();
  if (title === "" || price === "" || url === "") {
    //hata
  } else {
    // Yeni Araç
    const newCar = new Car(title, price, url);
    ui.addCarToUI(newCar);
    // Arayüze Araç Ekleme
  }
  ui.clearInputs(titleElement,urlElement,priceElement);
}
