let content = document.querySelector('.content')
let timer  = document.querySelector('.time')
let time = new Date();
time_years = "現在是" + time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "號";
time_clock = time.getHours() + ":" + time.getMinutes() + "分";
timer.innerHTML = time_years + time_clock; 
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-6FC19BD7-7C83-472B-9E2A-2938D4DD7234', {method: 'get'})
.then(function(response) {
    return response.json();
})
.then((result)=>{
    
    
    let locations = result.records.location
    console.log(locations.length)
    locations.forEach(location => {
        location_name = location.locationName;
        
        Wx = location.weatherElement[0].time[0].parameter.parameterName;
        Min = location.weatherElement[2].time[0].parameter.parameterName;
        Max = location.weatherElement[4].time[0].parameter.parameterName;
        suggest = location.weatherElement[3].time[0].parameter.parameterName;
        console.log(Wx)
        let weather_icon_src;
        switch(Wx){
            case "多雲":
                weather_icon_src = "./img/cloud.png";
                break;
            case "多雲時晴":
                weather_icon_src = "./img/jotta-cloud.png";
                break;
            case "晴時多雲":
                weather_icon_src = "./img/jotta-cloud.png";
                break;
            case "陰短暫雨":
                weather_icon_src = "./img/rain.png";
                break;
            case "多雲時陰":
                weather_icon_src = "./img/雨天.jpg";
                break;
            case "陰時多雲": 
                weather_icon_src = "./img/雨天.jpg";
                break;
            case "陰天":
                weather_icon_src = "./img/晴天.jpg";
                break;  
        }
        content.innerHTML += `<div class="card">
        <img src="${weather_icon_src}" alt="">
        <h1>${location_name}</h1>
        <div class="main">
            <h2>天氣狀況:${Wx}</h2>
            <div class="temps">
                <h3>氣溫狀況:</h3>
                <div class="temp">
                    <span>最高溫:${Max}度</span>
                    <span>最低溫:${Min}度</span>
                </div>
            </div>
            <div class="suggest">建議: ${suggest}</div>
        </div>
    </div> `;        
        
    });

    // for(var i =0; i<result.records.location.length; i++){
    //     let locationName = result.records.location[i].locationName;
    //     for(var j = 0; j<result.records.location[i].weatherElement.length; j++){
    //         let MinparameterName = result.records.location[i].weatherElement[2].time[0].parameter.parameterName;
    //         let MaxparameterName = result.records.location[i].weatherElement[4].time[0].parameter.parameterName;
    //         let weather = result.records.location[i].weatherElement[0].time[0].parameter.parameterName;
    //         let suggest = result.records.location[i].weatherElement[3].time[0].parameter.parameterName;            
    //         all = [MinparameterName ,MaxparameterName ,weather, suggest]
    //         console.log(all);
    //         return all;

    //     }
        
    // }
    
    
})

.catch(function(err) {
    // Error :(
})