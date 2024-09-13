function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "Invalid Inputs.";
  }

  let totalEarning = 0;
  let homeExpencess = livingCost;
  for (const payment of arr) {
    if (payment >= 3000) {
      let tax = payment * 0.2;
      let netMoney = payment - tax;
      totalEarning = totalEarning + netMoney;
    } else {
      totalEarning = totalEarning + payment;
    }
  }

  const savings = totalEarning - homeExpencess;

  const result = savings >= 0 ? savings : "earn more";

  return result;
}

console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
console.log(monthlySavings({ earn: 500 }, "5400"));
