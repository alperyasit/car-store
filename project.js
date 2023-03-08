const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.getElementById("#footer");


//  UI Objesi Açma

const ui = new UI();

const storage = new Storage();

//  Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addCar);

  document.addEventListener("DOMContentLoaded", function () {
    let cars = storage.getCarsFromStorage();

    ui.loadAllCars(cars);
  
  /*cardBody.addEventListener("click",deleteCar);*/ //Kaldırıldı

  });

}

function addCar(e) {
  const title = titleElement.value;
  const price = priceElement.value;
  const url = urlElement.value;
  e.preventDefault();
  if (title === "" || price === "" || url === "") {
    ui.displayMessages("Tüm Alanları Doldurun...", "danger", "alert-danger");
  } else {
    // Yeni Araç
    const newCar = new Car(title, price, url);
    ui.addCarToUI(newCar);
    storage.addCarToStorage(newCar);
    ui.displayMessages("Araç Başarı İle Eklendi", "success", "alert-success");
    // Arayüze Araç Ekleme
  }
  ui.clearInputs(titleElement, urlElement, priceElement);
}

function deleteCar(e) {
  if (e.target.id === "delete-car") {
    e.target.parentElement.parentElement.remove();
    alert("Araç Başarı İle Silindi :(");
  }
}

const carList = document.getElementById("cars-card");
carList.addEventListener("click", deleteCar);


function deleteCar(e){
  if(e.target.id === "delete-car"){
      ui.deleteCarFromUI(e.target);
  }  
}