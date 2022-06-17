function getData() {

    let table = "<table>"
            + "<tr>"
            
            + "<th>Sirket Adi</th>"
            
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/alislar", false);
    xhttp.send();

    const alislar = JSON.parse(xhttp.responseText);


    for(let x=0; x< alislar.length; x++){
                                        
        let emiri = emirler[x];

        console.log("sirket ismi: " + sirket.sirketAdi);
        console.log("sirket ismi: " + borsa.id);

        const link = "borsa.html?id=" + borsa.id;

        table += "<tr>"

        + "<td><a href=" + link + ">" + gezegen.gezegenAdi +"</a></td>"
        
        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
}