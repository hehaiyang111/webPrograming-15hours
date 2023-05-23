let search = document.querySelector(".search-box button")
search.addEventListener('click', () => {
    let city = document.querySelector('.search-box input').value;
    document.querySelector('.search-box input').value = '';
    const APIkey = "SZk3zBSSn10WFqw4t";
    fetch(`https://api.seniverse.com/v3/weather/now.json?key=${APIkey}&location=${city}&language=zh-Hans&unit=c`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.results[0].now.text)
        let temperature = document.querySelector(".temperature")
        let text = document.querySelector(".description")
        temperature.innerHTML = json.results[0].now.temperature + "°";
        text.innerHTML = json.results[0].now.text;
    })
    
})