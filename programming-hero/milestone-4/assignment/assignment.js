
function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }
  let remainMoney = income - expenses;
  let tax = remainMoney * 0.2;

  return tax;
}



function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const data = email.split("@");
  const userName = data[0];
  const domainName = data[1];

  const notification =
    userName + " " + "sent you an email from" + " " + domainName;
  return notification;
}



function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let element of name) {
    if (!isNaN(element)) {
      return true;
    }
  }
  return false;
}



function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) === true) {
    return "Invalid Input";
  }

  let familyScore = 0;
  if (obj.isFFamily === true) {
    familyScore = 20;
  }
  let finalScore = obj.testScore + obj.schoolGrade + familyScore;

  return finalScore >= 80 ? true : false;
}




function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let passedTime = 0;
  for (let time of waitingTimes) {
    passedTime = passedTime + time;
  }

  let completeInterview = waitingTimes.length;
  let totalCandidate = serialNumber - 1;

  let averageTime = Math.round(passedTime / completeInterview);
  let candidateLeft = totalCandidate - completeInterview;
  let mytime = candidateLeft * averageTime;
  
  return mytime;
}

