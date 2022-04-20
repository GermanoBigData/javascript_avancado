

// import { format } from "../../node_modules/date-fns/format";

fetch("https://api.covid19api.com/summary")
.then((resp) => {
    return resp.json();   
})
.then(function(data){
    let totalConfirmed = data.Global.TotalConfirmed;
    let totalDeaths = data.Global.TotalDeaths;
    let totalRecover = data.Global.TotalRecovered;
    let lastUpdateDate = data.Global.Date;   
    
    
    // let lastUpdateDate = new Date (data.Global.Date);
    // lastUpdateDate.toISOString().split('T')[0];

    let update_Date = {
        day: data.Global.Date = new Date().getDate().padStart(1, '0'),
        month: data.Global.Date = new Date().getMonth(),
        year: data.Global.Date = new Date().getFullYear(),
    }

    // update_Date.day = new Date().getDate();
    // update_Date.month = new Date().getMonth();
    // update_Date.year = new Date().getFullYear();
   
    //lastUpdateDate.toLocaleDateString('pt-br');
    
    document.getElementById("confirmed").innerHTML = totalConfirmed;
    document.getElementById("death").innerHTML = totalDeaths;
    document.getElementById("recovered").innerHTML = totalRecover;
    document.getElementById("date").innerHTML = "Data de atualização: " + update_Date.day + "." + update_Date.month + "." + update_Date.year;

    // console.log(update_Date.day, update_Date.month, update_Date.year);
    console.log(update_Date.day.padStart(2, '0'));

    // let todayFormatted = format(lastUpdateDate, 'dd/MM/yyyy');
});




//import { format, addDays, formatDistance, compareAsc, compareDesc, isValid, parse } from 'date-fns';

fetch("https://api.covid19api.com/summary")
.then((resp) => {
    return resp.json();  
})
.then(function(data){
    let totalConfirmed = data.Global.TotalConfirmed;
    let totalDeaths = data.Global.TotalDeaths;
    let totalRecover = data.Global.TotalRecovered;
    let update_Date = {
        day:  new Date().getDate(),
        month:  new Date().getMonth(),
        year:  new Date().getFullYear(),
        hours:  new Date().getHours(),
        minutes:  new Date().getMinutes(),
    }

    const dateAndTime = Date.parse(data.Global.Date);

  updateTime.innerText = Intl.DateTimeFormat(lang, dateOptions)
    .format(dateAndTime)
    .replaceAll('/', '.');

    document.getElementById("confirmed").innerHTML = totalConfirmed;
    document.getElementById("death").innerHTML = totalDeaths;
    document.getElementById("recovered").innerHTML = totalRecover;
    document.getElementById("date").innerHTML = "Data de atualização: " 
        + update_Date.day.toString().padStart(2, '0') + '.' 
            + update_Date.month.toString().padStart(2, '0') + '.' 
                + update_Date.year + ' '
                    + update_Date.hours.toString().padStart(2, '0') + ':'
                        + update_Date.minutes.toString().padStart(2, '0');
})

let pizza = new Chart(document.getElementById("pizza"),{
    type: 'pie',
    data: {
        labels: ["Iphone X", "S20", "A32"],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ["#3e95cd", "#3c8523", "#42F39f"]
        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Distruibuição de celulares"
            }
        }
    }
})


new Chart(document.getElementById("pizza"), {
  type: "pie",
  data: {
    labels: ["Confirmados", "Recuperados", "Mortes"],
    datasets: [
      {
        data: [
          data.Global.NewConfirmed,
          data.Global.NewRecovered,
          data.Global.NewDeaths,
        ],
        backgroundColor: ["#3e95cd", "#3c8523", "#42F39f"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Distruibuição de novos casos",
      },
    },
  },
});
