function upDatePrice(iteamId, price) {
  const memoryCost = document.getElementById(iteamId);
  memoryCost.innerText = price;

  const bestPrice = document.getElementById("best-price").innerText;
  const memoryPrice = document.getElementById("memory-cost").innerText;
  const storagePrice = document.getElementById("storage-cost").innerText;
  const deliveryPrice = document.getElementById("delivery-cost").innerText;

  const totalPrice =
    parseFloat(bestPrice) +
    parseFloat(memoryPrice) +
    parseFloat(storagePrice) +
    parseFloat(deliveryPrice);

  const total = (document.getElementById("total-price").innerText = totalPrice);
}

function onClick(clickId, upDateId, price) {
  document.getElementById(clickId).addEventListener("click", function () {
    upDatePrice(upDateId, price);
    document.getElementById(clickId).style.backgroundColor = 'blue'
  });
}

// Input Paremiters
onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 500);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 0);

const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function () {
  const code = document.getElementById("promo-input").value;

  if (code == fakeCode) {
    const total = document.getElementById("total-price");
    let totalPrice = parseFloat(total.innerText);
    const discount = (totalPrice * 20) / 100;
    totalPrice = totalPrice - discount;
    total.innerText = totalPrice

  } else {

  }
});

// SixtentGb Cost
// document.getElementById("sixteenGB").addEventListener("click", function () {
//   upDatePrice("memory-cost", 300);
// });

// // eightGB price
// document.getElementById("eightGB").addEventListener("click", function () {
//   upDatePrice("memory-cost", 0);
// });

// // Ssd1 PRice
// document.getElementById("ssd1").addEventListener("click", function () {
//   upDatePrice("storage-cost", 300);
// });

// // Ssd2 PRice
// document.getElementById("ssd2").addEventListener("click", function () {
//   upDatePrice("storage-cost", 500);
// });

// // Ssd3 PRice
// document.getElementById("ssd3").addEventListener("click", function () {
//   upDatePrice("storage-cost", 800);
// });

// // delivery Cost
// document.getElementById("paid-delivery").addEventListener("click", function () {
//   upDatePrice("delivery-cost", 20);
// });
