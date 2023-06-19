"use strict";

console.log("This log is working!");

const container = document.getElementById("container");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

console.log(hours.length);

const seattle = {
  storeName: "seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [11, 15, 30, 52, 73, 90, 130, 110, 105, 78, 55, 18, 32, 47],
  cookiesEachHour: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
  totalDailyCookies: 875,
  render: function () {
    const article = document.createElement("article")
    container.appendChild(article);

    const h1 = document.createElement ("h1");
    h1.textContent = this.storeNanme;
    article.appendChild(h1);

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0 < hours.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
        ul.appendChild(li);
    }
  }
};

//function customersEachHour (min, max) {
//return Math.floor(Math.random() * (max + min /2);
//}
