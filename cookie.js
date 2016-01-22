var hours = ['10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm:'];
// var locations = ['Pike Place', 'SeaTac', 'Southcenter', 'Bellevue Square', 'Alki'];
// var mins = [17, 6, 11, 20, 3];
// var maxs = [88, 24, 38, 48, 24];
// var averageCookies = [5.2, 1.2, 1.9, 3.3, 2.6];
// var siteName = document.getElementById('siteName');
// var sectionEl = document.getElementById('siteList');
var cookiesPurchased = []


var pikePlace = {
  min: 17,
  max: 88,
  averageSales: 5.2,
  cookiesPerHour: [],
  randomCookies: function(min, max, average) {
    return Math.floor(Math.random() * (min, max)) + min * average;
  },
  generateHourlyCookies: function() {
    for (var i = 0; i < hours.length; i += 1) {
      this.cookiesPerHour.push(this.randomCookies(this.min, this.max, this.averageSales));
    }
  },
  render: function() {
    this.generateHourlyCookies();
    var siteNameEl = document.getElementById('pikePlace')
    siteNameEl.textContent = 'Pike Place';
    var ulEl = document.createElement('ul');
    var sectionEl = document.getElementById('pikePlaceSiteList')



    for (var i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + pikePlace.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      sectionEl.appendChild(ulEl);

    };
  },
};

var seaTac = {
  min: 6,
  max: 24,
  averageSales: 1.2,
  cookiesPerHour: [],
  randomCookies: function(min, max, average) {
    return Math.floor(Math.random() * (min, max)) + min * average;
  },
  generateHourlyCookies: function() {
    for (var i = 0; i < hours.length; i += 1) {
      this.cookiesPerHour.push(this.randomCookies(this.min, this.max, this.averageSales));
    }
  },
  render: function() {
    this.generateHourlyCookies();
    var siteNameEl = document.getElementById('seaTac')
    siteNameEl.textContent = 'SeaTac';
    var ulEl = document.createElement('ul');
    var sectionEl = document.getElementById('seaTacSiteList')



    for (var i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      sectionEl.appendChild(ulEl);

    };
  },
};

var southCenter = {
  min: 11,
  max: 38,
  averageSales: 1.9,
  cookiesPerHour: [],
  randomCookies: function(min, max, average) {
    return Math.floor(Math.random() * (min, max)) + min * average;
  },
  generateHourlyCookies: function() {
    for (var i = 0; i < hours.length; i += 1) {
      this.cookiesPerHour.push(this.randomCookies(this.min, this.max, this.averageSales));
    }
  },
  render: function() {
    this.generateHourlyCookies();
    var siteNameEl = document.getElementById('southCenter')
    siteNameEl.textContent = 'Southcenter';
    var ulEl = document.createElement('ul');
    var sectionEl = document.getElementById('southCenterSiteList')



    for (var i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + seaTac.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      sectionEl.appendChild(ulEl);

    };
  },

};

var bellevueSquare = {
  min: 20,
  max: 48,
  averageSales: 3.3,
  cookiesPerHour: [],
  randomCookies: function(min, max, average) {
    return Math.floor(Math.random() * (min, max)) + min * average;
  },
  generateHourlyCookies: function() {
    for (var i = 0; i < hours.length; i += 1) {
      this.cookiesPerHour.push(this.randomCookies(this.min, this.max, this.averageSales));
    }
  },
  render: function() {
    this.generateHourlyCookies();
    var siteNameEl = document.getElementById('bellevueSquare')
    siteNameEl.textContent = 'Bellevue Square';
    var ulEl = document.createElement('ul');
    var sectionEl = document.getElementById('bellevueSquareSiteList')



    for (var i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + bellevueSquare.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      sectionEl.appendChild(ulEl);

    };
  },
};

var alki = {
  min: 3,
  max: 24,
  averageSales: 2.6,
  cookiesPerHour: [],
  randomCookies: function(min, max, average) {
    return Math.floor(Math.random() * (min, max)) + min * average;
  },
  generateHourlyCookies: function() {
    for (var i = 0; i < hours.length; i += 1) {
      this.cookiesPerHour.push(this.randomCookies(this.min, this.max, this.averageSales));
    }
  },
  render: function() {
    this.generateHourlyCookies();
    var siteNameEl = document.getElementById('alki')
    siteNameEl.textContent = 'Alki';
    var ulEl = document.createElement('ul');
    var sectionEl = document.getElementById('alkiSiteList')



    for (var i = 0; i < hours.length; i += 1) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + alki.cookiesPerHour[i];
      ulEl.appendChild(liEl);
      sectionEl.appendChild(ulEl);

    };
  },
};

pikePlace.render();
seaTac.render();
southCenter.render();
bellevueSquare.render();
alki.render();

// pikePlace.randomCustomer = function(min, max, average) {
//   return Math.random() * (min, max) + min * average;
//
// };
