
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.style.backgroundColor = "red";
    
    delBtn.addEventListener("click", function(){
        deleteRow(tr, "server");
    });
    
    let cell = document.createElement("td");
    cell.append(delBtn);
    
    tr.append(cell);
}

function appendDeletePayment(tr){
    let delPayment = document.createElement("button");
    delPayment.innerText = "X";
    delPayment.style.backgroundColor = "red";
    
    delPayment.addEventListener("click", function(){
        deleteRow(tr, "payment");
    });
    
    let cell = document.createElement("td");
    cell.append(delPayment);
    
    tr.append(cell);
}

function deleteRow(tr, obj){
    //remove(tr);
    let id = tr.id;
    switch(obj){
        case "server":
            delete allServers[id];
            break;
        case "payment":
            delete allPayments[id];
            break;
            
    }
    
    tr.remove();
}