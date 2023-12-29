let stockData = [];

function tambahkanStock() {
  let barCode = document.getElementById("barCode").value;
  let namaProduct = document.getElementById("namaProduct").value;
  let hargaBarang = parseFloat(document.getElementById("hargaBarang").value);

  let tableBody = document.getElementById("stockTableBody");
  let newRow = tableBody.insertRow();

  let cellbarCode = newRow.insertCell(0);
  let cellnamaProduct = newRow.insertCell(1);
  let cellHargaBarang = newRow.insertCell(2);

  cellbarCode.innerHTML = barCode;
  cellnamaProduct.innerHTML = namaProduct;
  cellHargaBarang.innerHTML = "Rp " + hargaBarang.toLocaleString("id-ID");

  stockData.push({
    kode: barCode,
    nama: namaProduct,
    harga: hargaBarang,
  });
}

function prosesPembelian() {
  //mengambil dari jemlah yang akan dibeli
  let buyBarcode = document.getElementById("buyBarcode").value;
  let toTal = parseInt(document.getElementById("toTal").value);
  let purChased = stockData.find((item) => item.kode === buyBarcode);

  if (purChased) {
    let totalBayar = toTal * purChased.harga;
    window.alert(
      `Total yang harus dibayar: Rp ${totalBayar.toLocaleString("id-ID")}`
    );
    let jumlahUang = parseFloat(
      window.prompt("Masukkan jumlah uang yang akan dibayar:", "")
    );

    if (!isNaN(jumlahUang)) {
      // kembalian
      let kembalian = jumlahUang - totalBayar;
      // Menampilkan total kembalian
      window.alert(`Total kembalian: Rp ${kembalian.toLocaleString("id-ID")}`);
    } else {
      window.alert("kureng");
    }
  } else {
    window.alert("nothing");
  }
}
