function getWeather(){
    const apikey ='e737a123ad06ba0f5a68e718146f039d'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    fetch(url)
    .then(response => response.json())
    
    //.then(data => console.log(data))
    //.catch(error => console.log(error))
    
    //.then(data => {
        // console.log(data.weather[0].main)
        // console.log(data.weather[0].description)
        // console.log(data.weather[0].icon)
    // })
}
