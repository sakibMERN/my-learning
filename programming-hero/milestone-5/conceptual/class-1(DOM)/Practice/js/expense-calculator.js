const insertAmount = document.getElementById("expense-insert-btn");
const itemInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");

const historyContainer = document.getElementById("history-container");
const totalExpanseInput = document.getElementById("total-expanse");
// console.log(typeof(totalExpanse));

//Add event listener
insertAmount.addEventListener("click", function () {
  const item = itemInput.value;
  const amount = Number(amountInput.value);
  let totalExpanse = Number(totalExpanseInput.innerText);
 

  //add element without innerHTML
  /**
   * const rowUsingJs = document.createElement("div");
  const expanseP = document.createElement("p");
  const amountP = document.createElement("p");

  expanseP.append(item);
  amountP.append(amount);
  
  rowUsingJs.appendChild(expanseP);
  rowUsingJs.appendChild(amountP);
  
  rowUsingJs.classList.add("flex", "justify-between");
  historyContainer.appendChild(rowUsingJs);
   */



//   expense history
  const addHistory = `
    <div class="flex justify-between">
        <p>${item}</p>
        <p>${amount}</p>
      </div>
    `;

  //calculate total expense
  totalExpanse += amount;

  document.getElementById("total-expanse").innerText = totalExpanse;
  historyContainer.innerHTML += addHistory;
});
