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

    fetch(query,{signal: controller.signal})
    .then(
        
        Response=>{
            if (!Response.ok) 
                {throw new Error(`NASA API returned ${Response.status}`);}
            return Response.json()
        }
    ).then(data => {
        exploreBtn.innerHTML = "Explore";
        clearTimeout(timeout);
        let media;
        if (data.media_type === "image") {
            media = `<img src="${data.url}">`;
        }
        else if (data.url.includes("youtube")){
            media = `
            <iframe
                src="${data.url}"
                allowfullscreen>
            </iframe>`;
        }
        else {
            media = `<video src="${data.url}" controls></video>`;
        }
        console.log(data)
        document.querySelector("#app").innerHTML = `
        <div class = "container"><h1>${data.title}</h1>
        <h3>Date : ${data.date}</h3>
        ${media}
        <p>${data.explanation}</p></div>`;
        loading.style.display = "none";
        app.style.display = "block";
        ;
    }).catch(err => {

    clearTimeout(timeout);
    exploreBtn.innerHTML = "Explore";

    let message;

    if (err.name === "AbortError") {
        message = "The request timed out. NASA is taking too long to respond.";
    }
    else if (err instanceof TypeError) {
        message = "Unable to connect. Please check your internet connection.";
    }
    else {
        message = err.message;
    }

    document.querySelector("#app").innerHTML = `
        <div class="container">
            <h1>Something went wrong</h1>
            <p>${message}</p>
        </div>`;

    loading.style.display = "none";
    app.style.display = "block";
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