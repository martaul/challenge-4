class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.cariButton = document.getElementById("cari-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.countResult = document.getElementById("count-result");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.cariButton.onclick = () => {
      let filterByDriver = (document.getElementById("driver").value) === 'true';
      let filterByPass = document.getElementById("passenger").value;

      this.getCarByFilter(filterByDriver, parseInt(filterByPass));
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    this.run();
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  async getCarByFilter(filterByDriver, filterByPass) {
    let data;
    if (filterByPass <=6) {
      data = await Binar.listCars((car) => car.available === filterByDriver && car.capacity === filterByPass)
      this.countResult.innerHTML = `<b>Hasil :</b> ${data.length} mobil ditemukan`;
    } else{
      data = await Binar.listCars(() =>this.clear())
      this.countResult.innerHTML = `<b>Mobil tidak ditemukan</b>`;
    }
    
    Car.init(data)

    this.clear();
    this.run();
  }
}