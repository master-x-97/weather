sectionWeater= document.querySelector('.sectionWeater')
todayImage = document.querySelector('.todayimage')




async function getApi(){
   let result =  await fetch("https://api.weatherapi.com/v1/current.json?key=f21be0d295e2486887a04016242308&q=cairo&aqi=yes")
   result= await result.json()
   
   return result
   
//    console.log(result.current.temp_c);
}

async function useApi(){
    let result = await getApi()
    // console.log(today);  
    console.log( result);
    
    sectionWeater.innerHTML =` <div class="today   bg2-main  w-30  ">
                <div class="d-flex justify-content-between bg-main opacity-50">
                    <div class="day">daymonth</div>
                    <div class="day">date</div>

                </div>
                <p>today</p>
                <p>${result.location.name}</p>
                <div class="degree ">
                ${result.current.temp_c+ '<sup>o</sup>C'}
                </div>
                <img class="todayimage" src="${result.current.condition.icon}" alt="">
                <p>${result.current.condition.text}</p>
                <div class="icons d-flex justify-content-around pb-2 pt-4">
                    <div><img src="https://routeweather.netlify.app/images/icon-umberella.png" alt=""> 20%</div>
                    <div class="fs-6"><img src="https://routeweather.netlify.app/images/icon-wind.png" alt="">11.2km/h</div>
                    <div class="fs-6"><img src="https://routeweather.netlify.app/images/icon-compass.png" alt=""> east</div>
                </div>
                
            </div>
            <div class="tomorow d-inline-block  bg3-main  w-30 ">
                <p>tomorow</p>
                <img class="todayimage" src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
                <div class="">
                    29.2
                    <sup>o</sup>
                    C
                </div>
                <div class="">
                    29.2
                    <sup>o</sup>
                    C
                </div>
                <p>sunny</p>
            </div>
            <div class="af-tomorow d-inline-block  bg2-main w-30" >
                <p>af-tomorow</p>
                <img class="todayimage" src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
                <div class="">
                    29.2
                    <sup>o</sup>
                    C
                </div>
                <div class="">
                    29.2
                    <sup>o</sup>
                    C
                </div>
                <p>sunny</p>
            </div>`

}

useApi()







{/* <p>today</p>
                <p>${result.location.name}</p>
                <p>${result.current.condition.text}</p>
                
                <img class="todayimage" src="${result.current.condition.icon}" alt="">
                <div class="degree ">
                ${result.current.temp_c+ '<sup>o</sup>C'} 
                <div class="fs-6">${result.current.wind_kph}km/h</div>
                <div class="fs-6">${result.current.gust_kph	}</div>
                </div> */}