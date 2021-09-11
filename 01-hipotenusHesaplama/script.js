// function Hesapla() {
//   let k1 = Number(document.getElementById("kenar1").value);
//   let k2 = Number(document.getElementById("kenar2").value);
//   let hipotenus = Math.sqrt(k1 * k1 + k2 * k2);
//   document.getElementById("hipotenus").innerHTML = hipotenus.value;
// }
// console.log(k1);
// console.log(k2);

// let sonuc = document.getElementById("hesapla");
// Hesapla = sonuc.onclick;

function Hesapla() {
  let k1 = Number(document.getElementById("txtKenar1").value);
  let k2 = Number(document.getElementById("txtKenar2").value);
  let hipotenus = Math.sqrt(k1 * k1 + k2 * k2);
  document.getElementById("sonuc").innerHTML = "Hipotenüs: "+ hipotenus;
}

let hesapBtn = document.getElementById("btn");
hesapBtn.onclick = Hesapla;
