function emoji1(vari, tim) {
  if (tim >= 4 && tim < 19) {
    if (vari == "overcast clouds") {
      document.getElementById("temp1").textContent = "⛅";
    }
    else if (vari == "Clear") {
      document.getElementById("temp1").textContent = "☀️";
    }
    else if (vari == "Clouds") {
      document.getElementById("temp1").textContent = "☁️";
    }
    else if (vari == "Rain") {
      document.getElementById("temp1").textContent = "🌧️";
    }
    else if (vari == "scattered clouds") {
      document.getElementById("temp1").textContent = "☁️";
    }
    else if (vari == "few clouds") {
      document.getElementById("temp1").textContent = "☁️";
    }
    else if (vari == "broken clouds") {
      document.getElementById("temp1").textContent = "☀️☁️";
    }
    else {
      document.getElementById("temp1").textContent = "☀️";
    }
  }
  else if (tim < 4 || tim >= 19) {
    console.log("Its night");
    if (vari == "Clear") {
      document.getElementById("temp1").textContent = "🌕";
    }
    else if (vari == "Clouds") {
      document.getElementById("temp1").textContent = "☁️";
    }
    else if (vari == "Rain") {
      document.getElementById("temp1").textContent = "🌧️";
    }
    else if (vari == "scattered clouds") {
      document.getElementById("temp1").textContent = "🌙☁️";
    }
    else if (vari == "few clouds") {
      document.getElementById("temp1").textContent = "☁️";
    }
    else if (vari == "broken clouds") {
      document.getElementById("temp1").textContent = "🌙☁️";
    }
    else {
      document.getElementById("temp1").textContent = "🌕";
    }
  }
}

function emoji(vari, pla, tim) {
  console.log("good values", vari, pla, tim);

  if (tim >= 4 && tim < 19) {
    console.log("its Morning");
    if (vari == "overcast clouds") {
      document.getElementById(pla).textContent = "⛅"
        ;
    }
    else if (vari == "clear sky") {
      document.getElementById(pla).textContent = "☀️";
    }
    else if (vari == "Clouds") {
      document.getElementById(pla).textContent = "☁️";
    }
    else if (vari == "Rain") {
      document.getElementById(pla).textContent = "🌧️";
    }
    else if (vari == "scattered clouds") {
      document.getElementById(pla).textContent = "☁️";

    }
    else if (vari == "few clouds") {
      document.getElementById(pla).textContent = "☁️";
    }
    else if (vari == "broken clouds") {
      document.getElementById(pla).textContent = "☀️☁️";
    }
    else {
      document.getElementById(pla).textContent = "☀️";
    }
  }
  else if (tim < 4 || tim >= 19) {
    console.log("its night");
    if (vari == "Clear") {
      document.getElementById(pla).textContent = "🌕";
    }
    else if (vari == "clouds") {
      document.getElementById(pla).textContent = "☁️";
    }
    else if (vari == "Rain") {
      document.getElementById(pla).textContent = "🌧️";
    }
    else if (vari == "scattered clouds") {
      document.getElementById(pla).textContent = "🌙☁️";
    }
    else if (vari == "broken clouds") {
      document.getElementById(pla).textContent = "🌙☁️";
    }
    else if (vari == "few clouds") {
      document.getElementById(pla).textContent = "☁️";
    }
    else {
      document.getElementById(pla).textContent = "🌕";
    }
  }

}
function play() {
  let loc = document.getElementById("place").value;
  console.log(loc);
  const key = "af48f083036844b59646cd2d78456d7b";
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(loc)}&key=${key}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const lat1 = data.results[0].geometry.lat;
      const lon1 = data.results[0].geometry.lng;

      let
        apikey = "f6b7cb620a46c4ad787d0c63e2b81e8a"; let url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat1}&lon=${lon1}&units=metric&appid=${apikey}`;
      console.log("url1", url1);

      fetch(url1)
        .then(response => response.json())
        .then(data => {

          let response1 = data.list[0].main.temp;
          let clouds = data.list[0].weather[0].description;

          console.log(response1);
          let rounding = Math.round(response1);

          let resp = data.list[0].weather;
          let wind1 = data.list[0].wind.speed;
          let humid = data.list[0].main.humidity;
          let min = Math.round(data.list[0].main.temp_min);
          let max = Math.round(data.list[0].main.temp_max);
          const z1 = new Date();
          let hour = z1.getHours();
          console.log("Z1 hr is ::", hour);
          emoji1(clouds, hour);
          console.log(emoji(clouds, hour));
          temprature.textContent = rounding + "°C";
          document.getElementById("loc2").textContent = loc;

          document.getElementById("wind_sp").textContent = wind1 + "m/s";
          document.getElementById("humidity").textContent = humid + "%";

          document.getElementById("max_temp").textContent = max + "°C";
          document.getElementById("min_temp").textContent = min + "°C";


          let hour0 = hour
          let hour1 = hour + 3;

          let hour2 = hour + 3 * 2;
          let hour3 = hour + 3 * 3;
          let hour4 = hour + 3 * 4;
          let hour5 = hour + 3 * 5;
          console.log("hour from json", hour);

          for (let b = 1; b <= 5; b++) {
            let clocid = "clo" + b;
            let hr = hour + (3 * b);
            console.log("running", clocid);
            console.log("hr in colc ", hr);
            if (hr > 24) {
              hr1 = hr - 24;
              console.log("12:00");
              if (hr >= 24) {
                let p = hr1 + ":00 hrs ";
                console.log("12:0 ", p);
                document.getElementById(clocid).textContent = p;
              }
            }
            else if (hr >= 12) {
              let p = hr + ":00 hrs";
              console.log("12:0000 ", p);
              document.getElementById(clocid).textContent = p;
            }

            else {
              let p = hr + ":00 hrs";
              console.log("12;;", p);
              document.getElementById(clocid).textContent = p;
            }
            //console.log(cloc);
            //document.getElementById(cloc).textContent = hr + p;
          }
          function look(x) {
            console.log("sample Data is ", data);
            let dates = data.list[x].weather[0].description;
            let dat1 = Math.round(data.list[x].main.temp);
            let dat = dat1 + "°C";
            degid = "deg" + x;
            deg = x + "weath";
            console.log("deg id", degid);
            document.getElementById(degid).textContent = dat;
            console.log("hr value is", hour);
            let time1 = hour + (3 * (x));

            let time = 0;
            if (time1 >= 24) {
              time = time1 - 24;
            }
            else {
              time = time1
            }
            //.value;
            console.log("before fxn call values", dates, deg, time);
            emoji(dates, deg, time);
            //console.log(emoji(dat,x,time));
          }
          for (let i = 1; i < 6; i++) {
            let hourdat = i;

            look(hourdat);

          }
          for (let s = 1; s <= 5; s++) {
            let list1 = 8 * s;
            if (list1 == 40) {
              list1 = list1 - 1;
            }
            console.log("list1", list1)
            let dates = data.list[list1].weather[0].description;
            let dat1 = Math.round(data.list[list1].main.temp);
            let dat2 = dat1 + "°C";
            degid = "daytem" + s;
            deg = (s + 5) + "th_weath";
            console.log("deg id", degid);
            console.log("dat2 value is ====", dat2)
            document.getElementById(degid).textContent = dat2 + "  ";
            console.log("hr value is", hour);
            let time = hour + (24 * s);


            //.value;
            console.log("before fxn call values::", dates, deg, time);
            time = hour0;
            emoji(dates, deg, time);
          }
          const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          //const d = new Date();
          //let day = weekday[d.getDay()];
          const d = new Date();
          let day = d.getDay();
          console.log("current day is ??", day, d);
          for (let b = 1, c = day; b < 6; b++) {
            c = c + 1;
            let dayid = "day" + b;
            //let b1 = day + c;
            if (c == 7) {
              c = 0;
              let hr = weekday[c];
              console.log("new day id and day is", hr, c);
              document.getElementById(dayid).textContent = hr;
              //day + b;
            }

            else {
              let hr = weekday[c];
              console.log("new day id and day is", hr, c);
              document.getElementById(dayid).textContent = hr;
            }
          }
          //console.log(cloc);
          //document.getElementById(cloc).textContent = hr + p;
          //}





        });
    });
}

button.onclick = play;