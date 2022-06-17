function alisData() {

    let table = "<table>"
            + "<tr>"
            
            + "<th>sirket adi</th>"
            + "<th>emir veren</th>"
            + "<th>lot</th>"
            + "<th>fiyat</th>"
            
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/alislar", false);
    xhttp.send();

    const alislar = JSON.parse(xhttp.responseText);


    for(let x=0; x< alislar.length; x++){
                                        
        let alis = alislar[x];

        console.log("sirket adi: " + alis.sirketAdi);
        console.log("sirket ismi: " + alis.id);

        const link = "alislar.html?id=" + alis.id;

        table += "<tr>"

        + "<td><a href=" + link + ">" + alis.sirketAdi +"</a></td>"
        + "<td><a href=" + link + ">" + alis.emirVeren +"</a></td>"
        + "<td><a href=" + link + ">" + alis.lot +"</a></td>"
        + "<td><a href=" + link + ">" + alis.fiyat +"</a></td>"



        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
}