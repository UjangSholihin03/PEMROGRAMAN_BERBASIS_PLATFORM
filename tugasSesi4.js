const pendapatanHarian = 200000; 

let uangJasa;
let persentaseKomisi;

if (pendapatanHarian <= 200000) {
    uangJasa = 10000;
    persentaseKomisi = 0.10;
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
    uangJasa = 20000;
    persentaseKomisi = 0.15;
} else {
    uangJasa = 30000;
    persentaseKomisi = 0.20;
}

const komisi = pendapatanHarian * persentaseKomisi;

console.log("Pendapatan Harian: Rp." + pendapatanHarian);
console.log("Uang Jasa: Rp." + uangJasa);
console.log("Komisi: Rp." + komisi);