function rupiah(angka){

    return Number(angka)
    .toLocaleString("id-ID");

}

function generateNota(){

    const barang =
    document.getElementById("barang").value ||
    "BLOODS, BLBLO-YI042, WL";

    const harga =
    parseInt(
        document.getElementById("harga").value
    ) || 119000;

    document.getElementById(
        "namaBarang"
    ).innerText = barang;

    document.getElementById(
        "hargaBarang"
    ).innerText = rupiah(harga);

    document.getElementById(
        "subtotal"
    ).innerText = rupiah(harga);

    document.getElementById(
        "total"
    ).innerText = rupiah(harga);

    document.getElementById(
        "cash"
    ).innerText = rupiah(harga);

    document.getElementById(
        "paid"
    ).innerText = rupiah(harga);

}

function setDate(){

    const now = new Date();

    const date =
    now.toLocaleDateString(
        "en-GB",
        {
            day:"2-digit",
            month:"short",
            year:"numeric"
        }
    );

    const time =
    now.toLocaleTimeString(
        "id-ID",
        {
            hour:"2-digit",
            minute:"2-digit"
        }
    );

    document.getElementById(
        "date"
    ).innerText =
    `${date} ${time}`;

}

function generateTrx(){

    const trx =
    "10SCS26E" +
    Math.floor(
        100000 +
        Math.random()*900000
    );

    document.getElementById(
        "trx"
    ).innerText = trx;

}

setDate();
generateTrx();
generateNota();