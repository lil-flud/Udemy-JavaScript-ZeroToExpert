'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// One from the doc https://restcountries.com/v2/

// const getCountryData = function(country) {

//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     let img = document.querySelector(".country__img");
//     console.log(img);
//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
        
//         const html = `
//             <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         countriesContainer.style.opacity = 1
//     })
// }

// getCountryData("Croatia");
// getCountryData("iran");
// getCountryData("Zambia");


// #====================CALLBACK HELL LECTURE========================# //

// const getCountryAndNeighbor = function(country) {

//     // Ajax call country (1)
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         // console.log(this.responseText);
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country (1)
//         renderCountry(data);
        
//         // Get neighbor country (2)
//         // const neighbor = data.borders?.[0]; For optional chaining in the case of no borders.
//         const [neighbor] = data.borders;
        
//         if(!neighbor) return;
        
//         // Ajax call country (2)
//         const request2 = new XMLHttpRequest();
//         request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
//         request2.send();

//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, "neighbour");
//         })
//     })
// }

// getCountryAndNeighbor("USA");

// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//             console.log('3 seconds passed');
//         }, 1000)
//     }, 1000)
// }, 1000)


// #=========================PROMISES & FETCH API LECTURE===========================# //

//  #=======Old way to handle the request=======#  //
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/name/${country}`);
//     request.send();
//  #=======Old way to handle the request=======#  //

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });

// }




// const getCountryData = function(country) {
//     // Country (1)
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//         // console.log(response);

//         if(!response.ok) {
//             throw new Error(`Country not found (${response.status})`)
//         }

//         return response.json()
//     })
//     .then(data => {
//         renderCountry(data[0]);
//         // const neighbor = data[0]?.borders[0];
//         const neighbor = 'asfadf';

//         if(!neighbor) return;

//         // Country (2)
//         return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then((response2) => {
//         if(!response2.ok) {
//             throw new Error(`Neighbor not found (${response2.status})`)
//         }
//         return response2.json()
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//         console.error(`${err.message}`); // or alert(`${err} kaboom!`));
//         renderError(`Something went wrong shithead! ${err.message}. Try again`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// }



// #==================FINAL BEFORE CHALLENGE===================# //
// const renderCountry = function(data, className = '') {
//     const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         // countriesContainer.style.opacity = 1;
// }

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText("beforeend", msg);
//     // countriesContainer.style.opacity = 1;
// }

// function getJSON(url, errMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if(!response.ok) {
//             throw new Error(`${errMsg} (${response.status})`)
//         }
//         return response.json();
//     });
// }


// const getCountryData = function(country) {
//     // Country (1)
//     getJSON(`https://restcountries.com/v2/name/${country}`, "Country Not Found")
//     .then(data => {
//         renderCountry(data[0]);
//         // const neighbor = data[0]?.borders[0];
//         const neighbor = data[0]?.borders[0];

//         if(!neighbor) {
//             throw new Error("Country has no neighbors! >_<");
//         }

//         // Country (2)
//         return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`, 'Country not found')
//     })
    
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//         console.error(`${err.message}`); // or alert(`${err} kaboom!`));
//         renderError(`Something went wrong >_< ${err.message}. Try again!`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// }
// #==================FINAL BEFORE CHALLENGE===================# //

// #==================CHALLENGE===================# //

// const renderError = function(msg) {
//     countriesContainer.insertAdjacentText("beforeend", msg);
//     countriesContainer.style.opacity = 1;
// }

// const renderCountry = function(data, className = '') {
//     const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML("beforeend", html);
//         // countriesContainer.style.opacity = 1;
// }

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) {
//         if(!response.ok) {
//             throw new Error(`Country Not Found! (${response.status})`)
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         renderCountry(data[0]);
//         const neighbor = data[0]?.borders[0];
//         return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response2 => response2.json())
//     .then(data2 => renderCountry(data2, "neighbour"))
//     .catch(err => renderError(err.message))
//     .finally(() => countriesContainer.style.opacity = 1)
// }


// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//         // console.log(response);
//         if(!response.ok) {
//             throw new Error(`Reloaded too fast! ${response.status}`)
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         getCountryData(data.country);
//     })
//     // .catch(err => {
//     //     console.error(err.message);
//     // })
// }


// // whereAmI("52.508", "13.381");
// // #==================CHALLENGE===================# //



// btn.addEventListener("click", () => {
//     whereAmI(52.508, 13.381);
// });
// // getCountryData('tajikistan');

// #==================EVENT LOOP IN PRACTICE===================# //

// console.log('Test Start');
// setTimeout(() => console.log('Timeout occurs'), 0); // After the given time has passed, the callback function will be placed in the Callback Queue
// Promise.resolve('Resolved promise 1').then(response => console.log(response));

// Promise.resolve('Promise 2 resolved').then(response => {
//     for (let i = 0; i < 10000; i++) 
//     console.log(response);
// });
// console.log('Test End');

// Top level code will run first by default. (Code outside of callback functions.)
// The two regular console.logs finish and reach the console first in their descending order,
// but the Promise actually reaches the console first due to the microtasks queue having priority
// over the callback queue. We created another instantly resolved promis but this time had a for
// loop that just counts to 10,000, this delays the settimeout from occurring by even more time.
// #==================EVENT LOOP IN PRACTICE===================# //


// #==================BUILDING A SIMPLE PROMISE===================# //

// const lotteryPromise = new Promise((resolve, reject) => {
//     console.log('Lottery draw has begun...');
//     setTimeout(function() {
//         if(Math.random() >= 0.5) {
//             resolve('You WIN! :D')
//         } else {
//             reject(new Error("You LOST :'("))
//         }
//     }, 2000)
// });

// lotteryPromise.then((resp) => console.log(resp)).catch((err) => console.error(err))

// Promisifying setTimeout //

// const wait = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000)
//     });
// };
// wait(1).then(() => {
//     console.log('I waited for 1 second.');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 2 seconds.');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 3 seconds.');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 4 seconds.');
//     return wait(1);
// })
// Promise.resolve('abc').then((x) => console.log(x));
// Promise.reject(new Error('Problem!')).then((x) => console.log(x))

// #==================BUILDING A SIMPLE PROMISE===================# //


const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        );
    });
};
getPosition().then((resp) => console.log(resp)).catch((err) => console.error(err));


// let h1 = document.querySelector("h1");
// let h3 = document.getElementsByTagName("h3")[0];
// let destination = document.querySelector("#destination");


// function renderPlanet(planets) {
//     // h3.innerText = planets.name;
//     let img = `<img src="${planets.image}" alt="" style="display: none">`
//     destination.insertAdjacentHTML("beforeend", `<h3 style="display: none">${planets.name}</h3>`);
//     destination.insertAdjacentHTML("beforeend", img);
// }


// function getPlanetData(count) {
//     fetch("../planets/planets.json")
//     .then(function(response) {
//         console.log(response)
//         if(!response.ok) {
//             throw new Error("Somethings wrong, first fetch!")
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         renderPlanet(data[count]);
//     })
// }


// h3.addEventListener('click', () => {
//     let img = document.getElementsByTagName('img')[0];
//     if(img) {
//         img.style.display = (img.style.display == "none" ? "block": "none");
//     }
//     let secondH3 = document.getElementsByTagName("h3")[1];
//     if(secondH3) {
//         secondH3.style.display = (secondH3.style.display == "none" ? "block": "none");
//     }
// })


// let counter = 0;
// h1.addEventListener("click", () => {
//     let img = document.getElementsByTagName('img')[0];
//     let secondH3 = document.getElementsByTagName("h3")[1];
//     if(img) {
//         destination.removeChild(img);
//         destination.removeChild(secondH3);
//     }
//     getPlanetData(counter);
//     counter += 1;
//     if(!(counter % 6)) {
//         counter = 0;
//     }
// });