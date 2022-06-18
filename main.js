const colors = ["red", "yellow", "blue", "white"];
colors.forEach((colorItem) => {
  document.write(colorItem.toLocaleUpperCase()+" ");
});

colors.forEach((colorItem)=>{
return colorItem.toLocaleUpperCase()
})

let namesArray = [ "shlomo","shimon","ran"]
let arrra = []
namesArray.forEach(nameI=>{
arrra.push(nameI);
})
console.log(arrra)

function somefunc(Array) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].age > 18) {
      console.log(Array[i].name);
    } else {
      console.log(Array[i].lastname);
    }
  }
}
somefunc([
  { name: "shimon", lastname: "berry", age: 19 },
  { name: "lior", lastname: "eden", age: 16 },
]);

function someFunc(ArrayUser) {
    ArrayUser.forEach((user) => {
        if(user.age>18){
            console.log("hello")
        }
        else{
            console.log("bye");
        }

    });

}
someFunc([{name : "shlomo",age: 30},{name : "shlomo",age: 12}])

let colaction1= document.getElementsByClassName("title")

for (let itertor of colaction1){
  console.log(itertor);
}

let btn_color = document.getElementById("btn_color")
let title2 = document.getElementsByClassName("title2")
btn_color.addEventListener("click",()=>{
for (let itertor of title2){
    itertor.style.color="blue"
    itertor.innerText="hello";

}
})

let btn_text = document.getElementById("btn_text")
btn_text.addEventListener("click",()=>{
for (let itertor of title2){
    itertor.innerText="hello";
}})

let myObj = {name :'shimon',age:27,lastname:'berry'}

for (let some_key in myObj){
    console.log(`${some_key} : ${myObj[some_key]} `)
}

for (let some_key in myObj){
    console.log(myObj[some_key])
}
for (let some_key in myObj){
    console.log(some_key)
}

let input = document.createElement("input");
document.body.append(input);
let btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "sent";
let myObj2 = { name: "", lastname: "", age: "" };
let myarray = [];
let counter = 0;
btn.addEventListener("click", () => {
  myarray.push(input.value);
  input.value = "";
  if (counter == 2) {
    printObj();
  }
  counter++;
});
function printObj() {
  let i = 0;
  for (let key in myObj2) {
    myObj2[key] = myarray[i];
    i++;
  }
  console.log(myObj2);
}

