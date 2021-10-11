// 1. Apa itu synchronous?
// synchronus merupakan cara mengekseksi program secara urut dari atas
// 2. Apa itu asynchronous?
// asynchronous merupakan cara mengeksekusi program bisa saja tidak sesuai urutan penulisan code tapi bergantung dengan proses mana yang lebih cepat selesai maka proses tersebut yang akan dijalankan terlebih dahulu
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// first log: 1-5
// second log : 6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// pada console log pertama adalah kode yang pertama kali dieksekusi sehingga nilai i masih bernilai 1-5 namun pada console.log kedua diekseskusi 100 milisecond setelah code dijalankan dan ni
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    // console.log("second log: ", i);
    // setTimeout(() => console.log("second log: ", i), 100);  02 - Kedua
  }
for (let a = 1; a <= 5; a++){
    console.log("second log : ", a)
}
  