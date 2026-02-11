async function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value.trim();
    const result = document.getElementById("result");
    const btn = document.getElementById("btn")
    let URL = `https://tinyurl.com/api-create.php?url=${(longUrl)}`
    //encodeURIComponent() is used to safely encode a specific part of a URL, such as a query parameter's value or a path segment(optional)

    const res = await fetch(URL);
    const shortUrl = await res.text();

    result.innerHTML = `
      Short URL:
      <a href="${shortUrl}" target="_blank">${shortUrl}</a>
      <button onclick="copyText('${shortUrl}')" id="btn">🗒️</button>
    `;
}

function copyText(text) {
    btn.innerHTML = "✅"
    navigator.clipboard.writeText(text);
    setTimeout(() => {
        btn.innerHTML = "🗒️"
    }, 2000)
}
