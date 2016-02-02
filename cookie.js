var hours = ['10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm '];
var siteNameEl = document.getElementById('mainSection');


function Store(name, min, max, averageCookies) {
  this.store = name;
  this.min = min;
  this.max = max;
  this.averageSales = averageCookies;
  this.totalSales = 0;
  this.cookiesPerHour = [];
  this.randomCookies = function() {
    return Math.floor((Math.random() * (this.max - this.min) + this.min) * this.averageSales);
  };
  this.generateHourlyCookies = function() {
    for (var i = 0; i < hours.length; i += 1) {
      var rand = this.randomCookies();
      this.cookiesPerHour.push(rand);
      this.totalSales += rand;
    };
  };

  this.render = function() {
    this.generateHourlyCookies();
    var ulEl = document.createElement('tr');
    ulEl.textContent = this.store;
    var totes = document.createElement('td');
    totes.innerHTML = 'Total: ' + this.totalSales;

    for(i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('td');
      liEl.textContent = this.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      siteNameEl.appendChild(ulEl);
     };
     ulEl.appendChild(totes);
   };
};

headerGen = function () {
  var tHeader = document.createElement('tr');
  tHeader.innerHTML = 'Stores';
    for (i = 0; i < hours.length; i += 1) {
    var tHours = document.createElement('td');
    tHours.innerHTML = hours[i];
    tHeader.appendChild(tHours)
    siteNameEl.appendChild(tHeader);
  };
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

headerGen();
pikePlace.render();
seaTac.render();
southCenter.render();
bellevueSquare.render();
alki.render();

var btnEl = document.getElementById('submit');
var nameInput = document.getElementById('storeName');
var minInput = document.getElementById('storeMin');
var maxInput = document.getElementById('storeMax');
var averageInput = document.getElementById('averageCookies');

btnEl.addEventListener('click', function(event) {
  event.preventDefault();
  var getName = nameInput.value;
  var getMin = parseInt(minInput.value);
  var getMax = parseInt(maxInput.value);
  var getAverage = parseInt(averageInput.value);
  var userStore = new Store (getName, getMin, getMax, getAverage);
  userStore.render();
});
