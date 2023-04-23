export default {
  getEnergySources() {
    return energySources;
  },
  getCountriesInfo() {
    return countriesInfo;
  },
  getMaleAgeData() {
    return [maleAgeData, maleAgeDataTwo];
  },
  getPopulationData() {
    return [population, populationSeriesType];
  },
  getTemperatureData() {
    return [temperatureData, temperatureDataTwo];
  },
  filterCountryCosts(name) {
    return countryCosts.filter((item) => item.parentID === name);
  },
  getProjects() {
    return projects;
  }
};

const populationSeriesType = [
  {
    valueField: "y1564",
    argumentField: "15-64 years"
  },
  {
    valueField: "y014",
    argumentField: "0-14 years"
  },
  {
    valueField: "y65",
    name: "65 years and older"
  },
];

const energySources = [
  { value: 'hydro', name: 'Hydro-electric' },
  { value: 'oil', name: 'Oil' },
  { value: 'gas', name: 'Natural gas' },
  { value: 'coal', name: 'Coal' },
  { value: 'nuclear', name: 'Nuclear' },
];

const countriesInfo = [{
  country: 'USA',
  hydro: 71.2,
  oil: 910.4,
  gas: 483.2,
  coal: 564.3,
  nuclear: 216.1,
}, {
  country: 'China',
  hydro: 72.5,
  oil: 223.6,
  gas: 36,
  coal: 956.9,
  nuclear: 11.3,
}, {
  country: 'Russia',
  hydro: 47.7,
  oil: 149.4,
  gas: 432.3,
  coal: 105,
  nuclear: 29.3,
}, {
  country: 'Japan',
  hydro: 17.9,
  oil: 283.6,
  gas: 61.8,
  coal: 120.8,
  nuclear: 52.8,
}, {
  country: 'India',
  hydro: 14.4,
  oil: 86.4,
  gas: 25.1,
  coal: 204.8,
  nuclear: 3.8,
}, {
  country: 'Germany',
  hydro: 6.6,
  oil: 101.7,
  gas: 92.7,
  coal: 85.7,
  nuclear: 30.8,
}];


const maleAgeData = [{
  state: 'Germany',
  young: 5.3,
  middle: 26,
  older: 8,
}, {
  state: 'Japan',
  young: 6.45,
  middle: 30.5,
  older: 11.22,
}, {
  state: 'Russia',
  young: 12.56,
  middle: 45.5,
  older: 6.5,
}, {
  state: 'USA',
  young: 32,
  middle: 87,
  older: 15,
}];

const population = [{
  country: 'China',
  y014: 233866959,
  y1564: 1170914102,
  y65: 171774113,
}, {
  country: 'India',
  y014: 373419115,
  y1564: 882520945,
  y65: 76063757,
}, {
  country: 'United States',
  y014: 60554755,
  y1564: 213172625,
  y65: 54835293,
}, {
  country: 'Indonesia',
  y014: 65715705,
  y1564: 177014815,
  y65: 18053690,
}, {
  country: 'Brazil',
  y014: 45278034,
  y1564: 144391494,
  y65: 17190842,
}, {
  country: 'Russia',
  y014: 24465156,
  y1564: 96123777,
  y65: 20412243,
}];

const temperatureData = [{
  arg: 'January',
  day: 6,
  night: 2,
}, {
  arg: 'February',
  day: 7,
  night: 2,
}, {
  arg: 'March',
  day: 10,
  night: 3,
}, {
  arg: 'April',
  day: 14,
  night: 5,
}, {
  arg: 'May',
  day: 18,
  night: 8,
}, {
  arg: 'June',
  day: 21,
  night: 11,
}, {
  arg: 'July',
  day: 22,
  night: 13,
}, {
  arg: 'August',
  day: 22,
  night: 13,
}, {
  arg: 'September',
  day: 19,
  night: 11,
}, {
  arg: 'October',
  day: 15,
  night: 8,
}, {
  arg: 'November',
  day: 10,
  night: 5,
}, {
  arg: 'December',
  day: 7,
  night: 3,
}];

const temperatureDataTwo = [{
  arg: 'January',
  day: 12,
  night: 0,
}, {
  arg: 'February',
  day: 15,
  night: 6,
}, {
  arg: 'March',
  day: 3,
  night: 0,
}, {
  arg: 'April',
  day: 20,
  night: 5,
}, {
  arg: 'May',
  day: 25,
  night: 16,
}, {
  arg: 'June',
  day: 21,
  night: 11,
}, {
  arg: 'July',
  day: 12,
  night: 1,
}, {
  arg: 'August',
  day: 12,
  night: 12,
}, {
  arg: 'September',
  day: 19,
  night: 11,
}, {
  arg: 'October',
  day: 11,
  night: 6,
}, {
  arg: 'November',
  day: 4,
  night: 1,
}, {
  arg: 'December',
  day: 5,
  night: 3,
}];

const countryCosts = [
  {
    arg: 'Poland', val: 100,   labour: 11.45,
    material: 30.5,
    initiatives: 6.22, parentID: ''
  },
  {
    arg: 'Slovakia', val: 100,   labour: 30,
    material: 80,
    initiatives: 24, parentID: ''
  },
  {
    arg: 'Austria', val: 100, labour: 7.3,
    material: 28,
    initiatives: 4, parentID: ''
  },
  {
    arg: 'Hungary', val: 100,   labour: 11.45,
    material: 30.5,
    initiatives: 6.22, parentID: ''
  },
  {
    arg: 'Czechia', val: 100,   labour: 30,
    material: 80,
    initiatives: 24, parentID: ''
  },
  { arg: 'Project 1', val: 20, parentID: 'Poland' },
  { arg: 'Project 2', val: 20, parentID: 'Poland' },
  { arg: 'Project 3', val: 20, parentID: 'Poland' },
  { arg: 'Project 4', val: 20, parentID: 'Poland' },
  { arg: 'Project 5', val: 20, parentID: 'Poland' },
  { arg: 'Project 6', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 7', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 8', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 9', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 10', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 11', val: 16, parentID: 'Austria' },
  { arg: 'Project 12', val: 16, parentID: 'Austria' },
  { arg: 'Project 13', val: 16, parentID: 'Austria' },
  { arg: 'Project 14', val: 16, parentID: 'Austria' },
  { arg: 'Project 15', val: 16, parentID: 'Austria' },
  { arg: 'Project 16', val: 16, parentID: 'Austria' },
  { arg: 'Project 17', val: 16, parentID: 'Austria' },
  { arg: 'Project 18', val: 16, parentID: 'Austria' },
  { arg: 'Project 19', val: 20, parentID: 'Slovakia' },
  { arg: 'Project 20', val: 100, parentID: 'Hungary' },
  { arg: 'Project 21', val: 16, parentID: 'Austria' },
  { arg: 'Project 22', val: 100, parentID: 'Czechia' },
];

const maleAgeDataTwo = [{
  state: 'Germany',
  labour: 7.3,
  material: 28,
  initiatives: 4,
}, {
  state: 'Japan',
  labour: 11.45,
  material: 30.5,
  initiatives: 6.22,
}, {
  state: 'Russia',
  labour: 16.56,
  material: 40.5,
  initiatives: 7.5,
}, {
  state: 'USA',
  labour: 30,
  material: 80,
  initiatives: 24,
}];


const projects = [
  {
      "Title": "Renovation of Bratislava Castle",
      "Description": "Historical castle restoration",
      "Type": "Restoration",
      "StartDate": "2010-05-01",
      "EndDate": "2012-08-31",
      "LabourCost": 7000000,
      "MaterialCost": 5000000,
      "StrategyCost": 1000000,
      "Revenue": 20000000,
      "Country": "Slovakia"
  },
  {
      "Title": "Construction of Krakow Expo Center",
      "Description": "New convention center construction",
      "Type": "Commercial",
      "StartDate": "2011-09-01",
      "EndDate": "2013-12-31",
      "LabourCost": 12000000,
      "MaterialCost": 8000000,
      "StrategyCost": 2000000,
      "Revenue": 35000000,
      "Country": "Poland"
  },
  {
      "Title": "Expansion of Budapest Airport",
      "Description": "Upgrading airport facilities and infrastructure",
      "Type": "Infrastructure",
      "StartDate": "2012-04-01",
      "EndDate": "2014-10-31",
      "LabourCost": 15000000,
      "MaterialCost": 20000000,
      "StrategyCost": 5000000,
      "Revenue": 60000000,
      "Country": "Hungary"
  },
  {
      "Title": "New residential complex in Vienna",
      "Description": "Building a new housing complex",
      "Type": "Residential",
      "StartDate": "2012-11-01",
      "EndDate": "2014-06-30",
      "LabourCost": 8000000,
      "MaterialCost": 6000000,
      "StrategyCost": 1000000,
      "Revenue": 25000000,
      "Country": "Austria"
  },
  {
      "Title": "Modernization of Brno train station",
      "Description": "Upgrading train station facilities and infrastructure",
      "Type": "Infrastructure",
      "StartDate": "2013-02-01",
      "EndDate": "2015-04-30",
      "LabourCost": 12000000,
      "MaterialCost": 10000000,
      "StrategyCost": 2000000,
      "Revenue": 40000000,
      "Country": "Czechia"
  },
  {
      "Title": "Renovation of Kosice synagogue",
      "Description": "Historical synagogue restoration",
      "Type": "Restoration",
      "StartDate": "2013-08-01",
      "EndDate": "2015-09-30",
      "LabourCost": 6000000,
      "MaterialCost": 4000000,
      "StrategyCost": 800000,
      "Revenue": 15000000,
      "Country": "Slovakia"
  },
  {
      "Title": "Construction of Danube bridge in Budapest",
      "Description": "New bridge construction",
      "Type": "Infrastructure",
      "StartDate": "2014-01-01",
      "EndDate": "2016-06-30",
      "LabourCost": 18000000,
      "MaterialCost": 22000000,
      "StrategyCost": 4000000,
      "Revenue": 80000000,
      "Country": "Hungary"
  },
  {
    "Title": "Construction of new shopping mall in Bratislava",
    "Description": "New commercial center construction",
    "Type": "Commercial",
    "StartDate": "2014-09-01",
    "EndDate": "2016-12-31",
    "LabourCost": 9000000,
    "MaterialCost": 12000000,
    "StrategyCost": 3000000,
    "Revenue": 50000000,
    "Country": "Slovakia"
},
{
    "Title": "Renovation of historic building in Prague",
    "Description": "Historical building restoration",
    "Type": "Restoration",
    "StartDate": "2015-03-01",
    "EndDate": "2017-05-31",
    "LabourCost": 10000000,
    "MaterialCost": 7000000,
    "StrategyCost": 1500000,
    "Revenue": 25000000,
    "Country": "Czechia"
},
{
    "Title": "New housing complex in Budapest",
    "Description": "Building a new housing complex",
    "Type": "Residential",
    "StartDate": "2015-10-01",
    "EndDate": "2017-09-30",
    "LabourCost": 12000000,
    "MaterialCost": 8000000,
    "StrategyCost": 2000000,
    "Revenue": 35000000,
    "Country": "Hungary"
},
{
    "Title": "Expansion of Vienna's metro system",
    "Description": "Upgrading and expanding metro system infrastructure",
    "Type": "Infrastructure",
    "StartDate": "2016-02-01",
    "EndDate": "2018-08-31",
    "LabourCost": 20000000,
    "MaterialCost": 25000000,
    "StrategyCost": 5000000,
    "Revenue": 100000000,
    "Country": "Austria"
},
{
    "Title": "Construction of new sports arena in Brno",
    "Description": "New sports arena construction",
    "Type": "Commercial",
    "StartDate": "2016-09-01",
    "EndDate": "2018-12-31",
    "LabourCost": 11000000,
    "MaterialCost": 14000000,
    "StrategyCost": 3000000,
    "Revenue": 60000000,
    "Country": "Czechia"
},
{
    "Title": "Renovation of historic building in Budapest",
    "Description": "Historical building restoration",
    "Type": "Restoration",
    "StartDate": "2017-04-01",
    "EndDate": "2019-06-30",
    "LabourCost": 9000000,
    "MaterialCost": 6000000,
    "StrategyCost": 1500000,
    "Revenue": 20000000,
    "Country": "Hungary"
},
{
    "Title": "Construction of new office building in Warsaw",
    "Description": "New office building construction",
    "Type": "Commercial",
    "StartDate": "2017-11-01",
    "EndDate": "2019-08-31",
    "LabourCost": 15000000,
    "MaterialCost": 12000000,
    "StrategyCost": 3000000,
    "Revenue": 50000000,
    "Country": "Poland"
},
{
  "Title": "Construction of new residential complex in Vienna",
  "Description": "Building a new residential complex",
  "Type": "Residential",
  "StartDate": "2018-05-01",
  "EndDate": "2020-06-30",
  "LabourCost": 18000000,
  "MaterialCost": 13000000,
  "StrategyCost": 2500000,
  "Revenue": 40000000,
  "Country": "Austria"
},
{
  "Title": "Renovation of historic building in Krakow",
  "Description": "Historical building restoration",
  "Type": "Restoration",
  "StartDate": "2018-10-01",
  "EndDate": "2020-12-31",
  "LabourCost": 12000000,
  "MaterialCost": 8000000,
  "StrategyCost": 2000000,
  "Revenue": 25000000,
  "Country": "Poland"
},
{
  "Title": "Construction of new hotel in Budapest",
  "Description": "New hotel construction",
  "Type": "Hospitality",
  "StartDate": "2019-03-01",
  "EndDate": "2020-12-31",
  "LabourCost": 10000000,
  "MaterialCost": 12000000,
  "StrategyCost": 3000000,
  "Revenue": 50000000,
  "Country": "Hungary"
},
{
  "Title": "Construction of new industrial park in Bratislava",
  "Description": "New industrial park construction",
  "Type": "Commercial",
  "StartDate": "2019-08-01",
  "EndDate": "2021-06-30",
  "LabourCost": 15000000,
  "MaterialCost": 20000000,
  "StrategyCost": 4000000,
  "Revenue": 80000000,
  "Country": "Slovakia"
},
{
  "Title": "Expansion of Brno's airport",
  "Description": "Upgrading and expanding airport infrastructure",
  "Type": "Infrastructure",
  "StartDate": "2019-11-01",
  "EndDate": "2022-04-30",
  "LabourCost": 25000000,
  "MaterialCost": 35000000,
  "StrategyCost": 8000000,
  "Revenue": 150000000,
  "Country": "Czechia"
},
{
  "Title": "Construction of new shopping center in Warsaw",
  "Description": "New commercial center construction",
  "Type": "Commercial",
  "StartDate": "2020-04-01",
  "EndDate": "2022-05-31",
  "LabourCost": 14000000,
  "MaterialCost": 18000000,
  "StrategyCost": 4000000,
  "Revenue": 70000000,
  "Country": "Poland"
},
{
  "Title": "Renovation of historic building in Vienna",
  "Description": "Historical building restoration",
  "Type": "Restoration",
  "StartDate": "2020-09-01",
  "EndDate": "2022-11-30",
  "LabourCost": 11000000,
  "MaterialCost": 9000000,
  "StrategyCost": 2000000,
  "Revenue": 30000000,
  "Country": "Austria"
},
{
  "Title": "Construction of new apartment complex in Prague",
  "Description": "Building a new apartment complex",
  "Type": "Residential",
  "StartDate": "2021-02-01",
  "EndDate": "2023-03-31",
  "LabourCost": 20000000,
  "MaterialCost": 15000000,
  "StrategyCost": 3500000,
  "Revenue": 55000000,
  "Country": "Czechia"
},
]

/*
function generateRandomArrayWithSumAndRangeAndDistribution(n, s, min, max, avg, sigma) {
  if (min * n > s || max * n < s) {
      throw new Error("No solution");
  }
  let result = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
      let num = randn_bm(avg, sigma);
      result.push(num);
      sum += num;
  }
  let a = (s - n * min) / sum;
  let b = min;
  for (let i = 0; i < n; i++) {
      result[i] = Math.round(a * result[i] + b);
      result[i] = Math.max(result[i], min);
      result[i] = Math.min(result[i], max);
  }
  let currentSum = result.reduce((a, b) => a + b, 0);
  while (currentSum < s) {
      let i = Math.floor(Math.random() * n);
      if (result[i] < max) {
          result[i]++;
          currentSum++;
      }
  }
  while (currentSum > s) {
      let i = Math.floor(Math.random() * n);
      if (result[i] > min) {
          result[i]--;
          currentSum--;
      }
  }
  return result;
}

function randn_bm(mu, sigma) {
  let u = 0,
      v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num * sigma + mu;
  return num;
}*/

