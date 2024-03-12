function calculate() {
  let Rings = document.getElementById("rings").value;
  let Watches = document.getElementById("watches").value;
  let Hoodies = document.getElementById("hoodies").value;
  let Wallet = document.getElementById("wallet").value;
  let Bag = document.getElementById("bag").value;
  let Payment = document.getElementById("payment").value;

  let total = [
    parseInt(Rings),
    parseInt(Watches),
    parseInt(Hoodies),
    parseInt(Wallet),
    parseInt(Bag),
  ];

  amount = 0;

  for (let i = 0; i < total.length; i++) {
    amount += total[i];
  }

  if (!isNaN(amount)) {
    document.getElementById("paymentdetails").innerHTML = `Total Amount : ${amount}/-`;
    if (amount) {
      document.getElementById("paymentdetails").innerHTML = `Total Amount for Gifts : ${amount}/-`;
    }
  }

  document.getElementById("payment").onmouseover = function () {
    this.style.backgroundColor = "darkblue";
    this.style.color = "white";
  };

  document.getElementById("payment").onmouseout = function () {
    this.style.backgroundColor = "black";
    this.style.color = "darkred";
  };
}
calculate();
