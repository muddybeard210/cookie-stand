var hours = ['10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
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




//     pikePlace.randomCookies();
// var details1 = pikePlace.store + ' Cookies ';
//     details1 += pikePlace.randomCookies();
// var elDetails1 = document.getElementById('pikePlace');
// elDetails1.textContent = details1;


// var pikePlace = {
//   min: 17,
//   max: 88,
//   averageSales: 5.2,
//   cookiesPerHour: [],
//   totalSales: 0,
//   randomCookies: function(min, max, average) {
//     return Math.floor(Math.random() * (min, max) + min * average);
//   },
//   generateHourlyCookies: function() {
//     for (var i = 0; i < hours.length; i += 1) {
//       var rand = this.randomCookies(this.min, this.max, this.averageSales)
//       this.cookiesPerHour.push(rand);
//       this.totalSales += rand;
//     }
//   },
//   render: function() {
//     this.generateHourlyCookies();
//     var siteNameEl = document.getElementById('pikePlace');
//     siteNameEl.textContent = 'Pike Place';
//     var ulEl = document.createElement('ul');
//     var sectionEl = document.getElementById('pikePlaceSiteList');
//     var totes = document.getElementById('totalSalesPike');
//     totes.innerHTML = 'Total: ' + this.totalSales;
//
//
//
//     for (var i = 0; i < hours.length; i += 1) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + pikePlace.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//       sectionEl.appendChild(ulEl);
//
//     };
//   },
// };
//
// var seaTac = {
//   min: 6,
//   max: 24,
//   averageSales: 1.2,
//   cookiesPerHour: [],
//   totalSales: 0,
//   randomCookies: function(min, max, average) {
//     return Math.floor(Math.random() * (min, max) + min * average);
//   },
//   generateHourlyCookies: function() {
//     for (var i = 0; i < hours.length; i += 1) {
//       var rand = this.randomCookies(this.min, this.max, this.averageSales)
//       this.cookiesPerHour.push(rand);
//       this.totalSales += rand;
//     }
//   },
//   render: function() {
//     this.generateHourlyCookies();
//     var siteNameEl = document.getElementById('seaTac');
//     siteNameEl.textContent = 'SeaTac';
//     var ulEl = document.createElement('ul');
//     var sectionEl = document.getElementById('seaTacSiteList');
//     var totes = document.getElementById('totalSalesSea');
//     totes.innerHTML = 'Total: ' + this.totalSales;
//
//
//
//     for (var i = 0; i < hours.length; i += 1) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//       sectionEl.appendChild(ulEl);
//
//     };
//   },
// };
//
// var southCenter = {
//   min: 11,
//   max: 38,
//   averageSales: 1.9,
//   cookiesPerHour: [],
//   totalSales: 0,
//   randomCookies: function(min, max, average) {
//     return Math.floor(Math.random() * (min, max) + min * average);
//   },
//   generateHourlyCookies: function() {
//     for (var i = 0; i < hours.length; i += 1) {
//       var rand = this.randomCookies(this.min, this.max, this.averageSales)
//       this.cookiesPerHour.push(rand);
//       this.totalSales += rand;
//     }
//   },
//   render: function() {
//     this.generateHourlyCookies();
//     var siteNameEl = document.getElementById('southCenter');
//     siteNameEl.textContent = 'Southcenter';
//     var ulEl = document.createElement('ul');
//     var sectionEl = document.getElementById('southCenterSiteList');
//     var totes = document.getElementById('totalSalesSouth');
//     totes.innerHTML = 'Total: ' + this.totalSales;
//
//
//
//     for (var i = 0; i < hours.length; i += 1) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//       sectionEl.appendChild(ulEl);
//
//     };
//   },
//
// };
//
// var bellevueSquare = {
//   min: 20,
//   max: 48,
//   averageSales: 3.3,
//   cookiesPerHour: [],
//   totalSales: 0,
//   randomCookies: function(min, max, average) {
//     return Math.floor(Math.random() * (min, max) + min * average);
//   },
//   generateHourlyCookies: function() {
//     for (var i = 0; i < hours.length; i += 1) {
//       var rand = this.randomCookies(this.min, this.max, this.averageSales)
//       this.cookiesPerHour.push(rand);
//       this.totalSales += rand;
//     }
//   },
//   render: function() {
//     this.generateHourlyCookies();
//     var siteNameEl = document.getElementById('bellevueSquare');
//     siteNameEl.textContent = 'Bellevue Square';
//     var ulEl = document.createElement('ul');
//     var sectionEl = document.getElementById('bellevueSquareSiteList');
//     var totes = document.getElementById('totalSalesBellevue');
//     totes.innerHTML = 'Total: ' + this.totalSales;
//
//
//
//     for (var i = 0; i < hours.length; i += 1) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + bellevueSquare.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//       sectionEl.appendChild(ulEl);
//
//     };
//   },
// };
//
// var alki = {
//   min: 3,
//   max: 24,
//   averageSales: 2.6,
//   cookiesPerHour: [],
//   totalSales: 0,
//   randomCookies: function(min, max, average) {
//     return Math.floor(Math.random() * (min, max) + min * average);
//   },
//   generateHourlyCookies: function() {
//     for (var i = 0; i < hours.length; i += 1) {
//       var rand = this.randomCookies(this.min, this.max, this.averageSales)
//       this.cookiesPerHour.push(rand);
//       this.totalSales += rand;
//     }
//   },
//   render: function() {
//     this.generateHourlyCookies();
//     var siteNameEl = document.getElementById('alki');
//     siteNameEl.textContent = 'Alki';
//     var ulEl = document.createElement('ul');
//     var sectionEl = document.getElementById('alkiSiteList');
//     var totes = document.getElementById('totalSalesAlki');
//     totes.innerHTML = 'Total: ' + this.totalSales;
//
//
//
//     for (var i = 0; i < hours.length; i += 1) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + alki.cookiesPerHour[i];
//       ulEl.appendChild(liEl);
//       sectionEl.appendChild(ulEl);
//
//     };
//   },
// };
//
// pikePlace.render();
// seaTac.render();
// southCenter.render();
// bellevueSquare.render();
// alki.render();
