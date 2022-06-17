function satisData() {

    let table = "<table>"
            + "<tr>"
            
            + "<th>sirket adi</th>"
            + "<th>emir veren</th>"
            + "<th>lot</th>"
            + "<th>fiyat</th>"
            
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/satislar", false);
    xhttp.send();

    const satislar = JSON.parse(xhttp.responseText);


    for(let x=0; x< satislar.length; x++){
                                        
        let satis = satislar[x];

        console.log("sirket adi: " + satis.sirketAdi);
        console.log("sirket ismi: " + satis.id);

        const link = "satislar.html?id=" + satis.id;

        table += "<tr>"

        + "<td><a href=" + link + ">" + satis.sirketAdi +"</a></td>"
        + "<td><a href=" + link + ">" + satis.emirVeren +"</a></td>"
        + "<td><a href=" + link + ">" + satis.lot +"</a></td>"
        + "<td><a href=" + link + ">" + satis.fiyat +"</a></td>"



        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
}