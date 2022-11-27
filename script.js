const container = document.createElement("div");
container.setAttribute("class","container");
container.setAttribute("id","container");

const countryrow = document.createElement("div");
countryrow.setAttribute("class","row");

const h1 = document.createElement("h1");
h1.setAttribute("id","title");
h1.setAttribute("class","text-center");
h1.innerHTML = "Countries With Weather"


container.append(h1);
container.append(countryrow);
document.body.append(container);

async function countryWeather(){
   
    countryrow.innerHTML = "<h4> Please Wait...</h4>";

    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        countryrow.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            console.log(data[i].name.common);
            // console.log(data.length);
            countryrow.innerHTML += `
            <div class="card-base col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-light g-5">
                <div class="card h-100 w-auto" style="width: 18rem;" id="card">
                <div class="card-header text-center" id="country-name">${data[i].name.common}</div>
                  <img src="${data[i].flags.svg}" class="card-img-top" alt="country-cards">
                  <div class="card-body">
                   <h5 class="card-title">${data[i].name.common} Details:-</h5>
                        <div class="card-text"><b>Capital : </b>${data[i].capital}</div>
                        <div class="card-text"><b>Region : </b>${data[i].region}</div>
                        <div class="card-text"><b>Country-code :</b>${data[i].cioc}</div>
                        <div class="card-text"><b>population : </b>${data[i].population}</div>
                        <div class="card-footer d-flex justify-content-center">
                        <button class="btn btn-primary" id = "btn" onclick = "getWeather('${data[i].name.common}')">Check Weather</button>
                        </div>
                     </div>
                 </div>
            </div>     
            `;
        }
        
    } catch (error) {
        console.log(error);
    }
}
countryWeather();


async function getWeather(countryName){
 
        
        const res = await fetch(`\https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=da6b0ab331cfd80764c24e895c01fbed`);
        console.log(res);
        const wData = await res.json();
        console.log(wData);
        console.log(wData.name);
        console.log(wData.coord.lat);
        console.log(wData.coord.lon);
        console.log(wData.main.temp);
        console.log(wData.main.humidity);
        console.log(wData.main.pressure);
        alert(`${wData.name} :  Lat ${wData.coord.lat} ,Lon ${wData.coord.lon}
                Temperature  : ${wData.main.temp}            
                Humidity     : ${wData.main.humidity}
                pressure     : ${wData.main.pressure}  
                                             `);
  
}

// async function getWeather(){
//     let url = await fetch(`\https://api.openweathermap.org/data/2.5/weather?q=coimbatore&appid=da6b0ab331cfd80764c24e895c01fbed`);
//     console.log(url);
//     let res = await url.json()
//     console.log(res);
  
    
// }




















