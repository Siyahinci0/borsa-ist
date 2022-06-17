function alisEmiriEkle(){


    let alisEmri= {};

    const sirketAdiTextBox = document.getElementById("sirketAdi");
    const sirketAdi = sirketAdiTextBox.value;
    alisEmri.sirketAdi = sirketAdi;

    const emirVerenTextBox = document.getElementById("emirVeren");
    const emirVeren = emirVerenTextBox.value;
    alisEmri.emirVeren = emirVeren;

    const lotTextBox = document.getElementById("lot");
    const lot = lotTextBox.value;
    alisEmri.lot = lot;

    const fiyatTextBox = document.getElementById("fiyat");
    const fiyat = fiyatTextBox.value;
    alisEmri.fiyat = fiyat;

    const alisEmriJson = JSON.stringify(alisEmri);

    console.dir("send alisEmri: " + alisEmriJson);


    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/alislar-ekle", true);

    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");

    xhttp.send(alisEmriJson);
}

function satisEmriEkle(){


    let satisEmri= {};

    const sirketAdiTextBox = document.getElementById("sirketAdi1");
    const sirketAdi = sirketAdiTextBox.value;
    satisEmri.sirketAdi = sirketAdi;

    const emirVerenTextBox = document.getElementById("emirVeren1");
    const emirVeren = emirVerenTextBox.value;
    satisEmri.emirVeren = emirVeren;

    const lotTextBox = document.getElementById("lot1");
    const lot = lotTextBox.value;
    satisEmri.lot = lot;

    const fiyatTextBox = document.getElementById("fiyat1");
    const fiyat = fiyatTextBox.value;
    satisEmri.fiyat = fiyat;

    const satisEmriJson = JSON.stringify(satisEmri);

    console.dir("send satisEmriEkle: " + satisEmriJson);


    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/satislar-ekle", true);

    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");

    xhttp.send(satisEmriJson);
}

