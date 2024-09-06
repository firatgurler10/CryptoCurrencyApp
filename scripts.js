var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd", {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // JSON verilerini burada işleyebilirsiniz
    // Örneğin HTML elementlerine fiyatları yazdırabilirsiniz
    btc.textContent = `Bitcoin: $${data.bitcoin.usd}`;
    eth.textContent = `Ethereum: $${data.ethereum.usd}`;
    doge.textContent = `Dogecoin: $${data.dogecoin.usd}`;
})
.catch(error => {
    console.error('Error:', error);
});
