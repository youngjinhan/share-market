
const url = location.href;
console.log(url);
const name = url.slice(url.indexOf("name=") + 5);
console.log(name);