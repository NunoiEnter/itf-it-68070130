function setBalance() {
  let acc = parseFloat(document.getElementById("accountBalance").value) || 0;
  let cash = parseFloat(document.getElementById("cashBalance").value) || 0;
  alert("Balances updated! Account: " + acc + " | Cash: " + cash);
}

function deposit() {
  let amt = parseFloat(document.getElementById("amount").value) || 0;
  alert("Deposited: " + amt);
}

function withdraw() {
  let amt = parseFloat(document.getElementById("amount").value) || 0;
  alert("Withdrew: " + amt);
}
