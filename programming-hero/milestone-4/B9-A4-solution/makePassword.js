function password(obj) {
  let stringBirth = obj.birthYear.toString();
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    stringBirth.length !== 4
  ) {
    return "Invalid";
  }
  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;

  return passwordString;
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2000, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 2001, siteName: "Facebook" }));
console.log(password({ birthYear: 200, siteName: "Facebook" }));
