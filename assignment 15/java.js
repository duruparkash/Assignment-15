var orders = [];

function addOrder() {
  var menu = document.getElementById("menu");

  var foodName = menu.options[menu.selectedIndex].text;
  var foodPrice = Number(menu.value);

  var item = {
    name: foodName,
    price: foodPrice,
  };

  orders.push(item);
  showBill();
}

function showBill() {
  var list = document.getElementById("order-list");
  var totalDisplay = document.getElementById("total-bill");

  list.innerHTML = "";
  var total = 0;

  for (var i = 0; i < orders.length; i++) {
    list.innerHTML += `<li>${orders[i].name} <button onclick="removeItem(${i})">Remove</button></li>`;

    total += orders[i].price;
  }

  totalDisplay.innerHTML = "Total Bill: $" + total;
}

function removeItem(i) {
  orders.splice(i, 1);
  showBill();
}
