function kenaRazia (date, data) {
    var lokasiRazia = ["Gajah Mada", "Hayam Wuruk", "Sisimangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];

    // helper
    function platGanjilGenap (plat) {
        if ( plat % 2 == 1 ) {
            return "Ganjil"
        } else if ( plat % 2== 0 ) {
            return "Genap"
        }
    }

    let result = [];
    for ( let i = 0; i < data.length; i++ ) {
        let nomorPlat
        for ( let j = data[i]['plat'].length - 1; j >= 0; j-- ) {
            if ( data[i]['plat'][j] === ' ' ) {
                nomorPlat = data[i]['plat'][j - 1];
                break;
            }
        }
        if ( platGanjilGenap(date) !== platGanjilGenap (nomorPlat)) {
            let jmlTilang = 0
            for ( let k = 0; k < lokasiRazia.length; k++ ) {
                for ( let l = 0; l < data[i]['rute'].length; l++ ) {
                    if ( lokasiRazia[k] === data[i]['rute'][l] ) {
                        jmlTilang++
                    }
                }
            }
            if ( jmlTilang !== 0 ) {
                let obj = {}
                obj[data[i]['name']] = jmlTilang
                result.push(obj);
            }
        }
    }
    return result

}

console.log(
    kenaRazia(27, [
        {
            name: "Doni",
            plat: "B 2791 KDS",
            type: "Mobil",
            rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
        },
        {
            name: "Toni",
            plat: "B 1212 JBB",
            type: "Mobil",
            rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"]
        },
        {
            name: "Dina",
            plat: "B 444 XSX",
            type: "Motor",
            rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
        },
        {
            name: "Anna",
            plat: "B 678 DD",
            type: "Mobil",
            rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"]
        }
    ])
);