const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button"),

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_code) {
    // selecting DKK by default as FROM currency and AUD as TO currency
    let selected;
    if (i == 0) {
      selected = currency_code == "DKK" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "AUD" ? "selected" : "";
    }
    // creating option tag with passing currency code as a text and value
    let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option}`;
    //inserting options tag inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

getButton.addEventListener("click", e => {
  e.preventDefault(); //preventing form from submitting
  getExchangeRate();
})

function getExchangeRate() {
  const amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  // if user doesn't enter any value or enter 0, we'll put value as 1 by default in the input field
  if(amountVal == "" || amountVal == "0"){
    amount.value = "1";
    amountVal = 1;
  }
  let url = `https://v6.exchangerate-api.com/v6/4c466eef9a9f6bc3fce36c69/latest/${fromCurrency.value}`;
  fetch(url).then(response => response.json()).then(result =>  {
  console.log(result);
  })
}