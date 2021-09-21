function asalHesapla() {
  let num = Number(document.getElementById("sayi1").value);
  sayac = 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      sayac++;
    }
  }
  if (num == 0) {
    document.getElementById("sonuc").innerHTML ="Sayı girilmedi";
  } else if (sayac == 0) {
    document.getElementById("sonuc").innerHTML = num + " bir asal sayıdır.";
  } else {
    document.getElementById("sonuc").innerHTML =
    num + " bir asal sayı değildir. " + sayac + " tane" + " böleni vardır.";
  }
}
asalHesapla();
