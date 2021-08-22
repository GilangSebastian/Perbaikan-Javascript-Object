function ekstrakurikuler (data) {
    let objek = {};
    for ( let i = 0; i < data.length; i++ ) {
        let nama = data[i].name;

        for ( let j = 0; j < data[i].club.length; j++ ) {
            let eskul = data[i].club[j];
            if (!objek[eskul]) {
                objek[eskul] = {};
            }

            let kelas = data[i].class;
            if (!objek[eskul][kelas]) {
                objek[eskul][kelas] = [];
            }
            
            objek[eskul][kelas].push(nama)
        }
    }
    return objek;
}

const data = 
[
    {
        name: 'Adi',
        class: 'Mawar',
        club: ['Bola', 'Bulutangkis']
    },
    {
        name: 'Cinthya',
        class: 'Melati',
        club: ['Membaca', 'Bulutangkis']
    },
    {
        name: 'Andika',
        class: 'Mawar',
        club: ['Bulutangkis', 'Membaca']
    },
    {
        name: 'Daniel',
        class: 'Mawar',
        club: ['Bola', 'Renang']
    }
]

console.log(ekstrakurikuler(data));
// console.log(data);