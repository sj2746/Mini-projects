const input = document.getElementById("input")
const newsTitle = document.getElementById("newsTitle")
const newsDescription = document.getElementById("newsDescription")
const newsBox=document.getElementById("newsBox")


let AllNews = ''
const API_KEY = "XXXX"
// To get the API KEY go to -> https://newsapi.org/ and paste inside ""
async function searchNews() {
    if(input.value==''){
        alert("Enter a topic")
        return 
    }
    topic = input.value.trim();
    input.value=''
    newsBox.innerHTML=""
    const URL = `https://newsapi.org/v2/everything?q=${topic}&from=2026-01-09&sortBy=publishedAt&apiKey=${API_KEY}`;
    response = await fetch(URL)
    data = await response.json()
    AllNews = data.articles
    AllNews.forEach((eachNews) => {
       newsBox.insertAdjacentHTML("beforeend",`
       <div id="eachNews">
            <div >
                <img id="eachImage" src="${eachNews.urlToImage}" alt="img" id="eachImage">
            </div>
            <div>
                <h2><a href="${eachNews.url}" target="_blank">${eachNews.title}</a></h2>
                <p>${eachNews.description}</p>
                <h6 id="postDate">Posted Date:<span>${eachNews.publishedAt}</span></h6>
            </div>   
        </div>
        `)
    });
    AllNews = ''
}


//NOTE: THE CODE WILL WORK AFTER PASTING API_KEY