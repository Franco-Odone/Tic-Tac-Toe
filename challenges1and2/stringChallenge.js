function stringChallenge(str1, str2) {
  return str1
    .split("")
    .sort()
    .join("")
    .match(new RegExp(str2.split("").sort().join(".*")))
    ? "true"
    : "false";
}

console.log(stringChallenge("rkqodlw", "world")); // "true"
console.log(stringChallenge("heloooolwrdlla", "helloworld")); // "true"
