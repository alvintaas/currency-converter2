const dropList = document.querySelectorAll(".drop-list select");

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_code) {
    console.log(currency_code);
    // creating option tag with passing currency code as a text and value
    let optionTag = `<option value="${currency_code}">${currency_code}</option}`;
    dropList[i].insertAdjacentHTML("beforehand");
  }
}

stopped video at 12min 16s
