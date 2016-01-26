var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var pikePlace = new Store('Pike Place', 17, 88, 5.2, 'pikePlace', 'totalSalesPike');
var seaTac = new Store('SeaTac', 6, 24, 1.2, 'seaTac', 'totalSalesSea');
var southCenter = new Store('Southcenter', 11, 38, 1.9, 'southCenter', 'totalSalesSouth');
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, 'bellevueSquare', 'totalSalesBellevue');
var alki = new Store('Alki', 3, 24, 2.6, 'alki', 'totalSalesAlki');

function Store(name, min, max, averageCookies, hLocation, tsLocation) {
  this.store = name;
  this.min = min;
  this.max = max;
  this.averageSales = averageCookies;
  this.totalSales = 0;
  this.cookiesPerHour = [];
  this.hLocation = hLocation;
  this.tsLocation = tsLocation;
  this.randomCookies = function() {
    return Math.floor(Math.random() * (this.min, this.max) + this.min * this.averageSales);
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
    var siteNameEl = document.getElementById(this.hLocation);
    siteNameEl.textContent = this.store;
    var ulEl = document.createElement('ul');
    var totes = document.getElementById(this.tsLocation);
    totes.innerHTML = 'Total: ' + this.totalSales;

    for(i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      siteNameEl.appendChild(ulEl);
     };
   };
};
pikePlace.render();
seaTac.render();
southCenter.render();
bellevueSquare.render();
alki.render();
