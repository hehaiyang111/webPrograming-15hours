let search = document.querySelector(".search-box button")
search.addEventListener('click', () => {
    let city = document.querySelector('.search-box input').value;
    document.querySelector('.search-box input').value = '';
    let temperature = document.querySelector(".temperature");
    let text = document.querySelector(".description");
    let img = document.querySelector(".img");
    let imgsrc = document.querySelector(".img img");
    let container = document.querySelector(".container")
    const APIkey = "SZk3zBSSn10WFqw4t";
    fetch(`https://api.seniverse.com/v3/weather/now.json?key=${APIkey}&location=${city}&language=zh-Hans&unit=c`)
        .then(response => response.json())
        .then(json => {
            if (json.status != "") {
                imgsrc.setAttribute("src", "./images/white/99@2x.png");
                temperature.innerHTML = "无该城市温度信息";
                text.innerHTML = "无该城市天气信息";
            }
            img.style.display = 'flex';
            container.style.height = '270px';
            // console.log(json.results[0].now.text);
            // console.log(imgsrc)
            temperature.innerHTML = json.results[0].now.temperature + "°";
            text.innerHTML = json.results[0].now.text;
            phenomenon = json.results[0].now.code;
            console.log(phenomenon)
            switch (phenomenon) {
                case "0":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "1":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "2":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "3":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "4":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "5":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "6":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "7":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "8":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "9":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "10":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "11":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "12":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "13":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "14":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "15":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "16":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "17":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "18":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "19":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "20":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "21":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "22":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "23":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "24":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "25":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "26":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "27":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "28":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "29":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "30":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "31":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "32":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "33":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "34":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "35":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "36":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "37":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                case "38":
                    imgsrc.setAttribute("src", `./images/white/${phenomenon}@2x.png`);
                    break;
                default:
                    imgsrc.setAttribute("src", `./images/white/99@2x.png`);
                    break;
            }
        })
})