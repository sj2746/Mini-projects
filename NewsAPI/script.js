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





// "articles": [
//     {
//       "source": {
//         "id": null,
//         "name": "OilPrice.com"
//       },
//       "author": "Tsvetana Paraskova",
//       "title": "India Resumes Venezuelan Crude Purchases After U.S. Opens Market",
//       "description": "India’s largest private refiner, Reliance Industries, is buying Venezuelan crude again, securing the first Indian purchase of oil from the world’s top reserves holder since the U.S. took control of Venezuela’s oil sales early last month. Reliance Industries h…",
//       "url": "https://oilprice.com/Latest-Energy-News/World-News/India-Resumes-Venezuelan-Crude-Purchases-After-US-Opens-Market.html",
//       "urlToImage": "https://d32r1sh890xpii.cloudfront.net/news/718x300/2026-02-06_am6vhlfu12.jpg",
//       "publishedAt": "2026-02-06T11:32:39Z",
//       "content": "The U.S. is launching a…\r\nShares in Volvo Cars plunged…\r\nBy Tsvetana Paraskova - Feb 06, 2026, 5:32 AM CSTIndia’s largest private refiner, Reliance Industries, is buying Venezuelan crude again, secur… [+1940 chars]"
//     },