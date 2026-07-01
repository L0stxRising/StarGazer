const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const loading = document.getElementById("loading");
const app = document.getElementById("main");


// Backticks Here for Runtime String Parsing the thing inside ${} else
    // they are treated as plain text
function LoadData(date = ""){

    let query=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    if (date){
        query+=`&date=${date}`
    }
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 7000);

    fetch(query,{signal: controller.signal}).then(Response=>Response.json()).then(data => {
        exploreBtn.innerHTML = "Explore";
        clearTimeout(timeout);
        let media;
        if (data.media_type === "image") {
            media = `<img src="${data.url}">`;
        }
        else if (data.url.includes("youtube")){
            // Implement Youtube Case
        }
        else {
            media = `<video src="${data.url}" controls></video>`;
        }
        
        document.querySelector("#app").innerHTML = `
        <div class = "container"><h1>${data.title}</h1>
        ${media}
        <p>${data.explanation}</p></div>`;
        loading.style.display = "none";
        app.style.display = "block";
        ;
    }).catch(err => {
        exploreBtn.innerHTML = "Explore";
        clearTimeout(timeout);
        document.querySelector("#app").innerHTML = `
        <div class = "container"><p>Error: ${err.message}, Try Refreshing The Page</p>
        <h1>Sowwy 😔 </h1></div>`;
    });
}

const datePicker = document.getElementById("datePicker");
const today = new Date().toISOString().split("T")[0];
datePicker.value = today;
datePicker.max = today;


const exploreBtn = document.getElementById("btn");
LoadData();

exploreBtn.addEventListener("click", () => {
    const selectedDate = datePicker.value;
    exploreBtn.innerHTML="Loading..."
    LoadData(selectedDate);
});

