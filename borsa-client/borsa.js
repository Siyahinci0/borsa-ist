function getData() {

    const urlParams = new URLSearchParams(window.location.search);
    const gezegenId = urlParams.get('id');

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/sirket/" + sirketId, false);
    xhttp.send();

    const sirketBilgisi = JSON.parse(xhttp.responseText);

    console.log("sirket adi =" + sirketBilgisi.sirketAdi);


    let table = "<table>"
    + "<tr>"
    + "<th>Sirket Id///</th>"
    + "<th>Sirket Adi///</th>"
    + "<th>Emir Veren/// </th>"
    + "<th>Lot/// </th>"
    + "<th>Fiyat/// </th>"
    + "</tr>";

    table += "<tr>"
    + "<td>" + sirketBilgisi.id + "</td>"
    + "<td>" + sirketBilgisi.sirketAdi + "</td>"
    + "<td>" + sirketBilgisi.emirVeren + "</td>"
    + "<td>" + sirketBilgisi.lot + "</td>"
    + "<td>" + sirketBilgisi.fiyat + "</td>"
    + "</tr>";

    table += "</table";

    const gezegenDetayi = document.getElementById("content");
    gezegenDetayi.innerHTML = table;


    const sirketBaslik = document.getElementById("sirket");
    sirketBaslik.innerText = "Merhaba ben " + sirketBilgisi.sirketAdi;

}