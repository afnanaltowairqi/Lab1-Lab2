//1
let title = document.getElementsByClassName("title")[0]
title.style.color ="blue"
title.style.background="gray"
//2
let para = document.getElementById("para")
para.style.fontWeight="bold";
para.setAttribute("class","para")
para.style.backgroundColor="yellow"

//3
let image = document.getElementsByTagName('img')[0]
image.src="space.jpg"

//4
let list = document.querySelector("ul")
let item = `<li> coffee </li>
<li> tea </li>
<li> juice </li>`
list.insertAdjacentHTML("afterbegin", item)
list.style.border ="1px soild black"
list.setAttribute("class","list")
list.style.color = "blue"

//way2
// for (i=0; i<3; i++){
//     let item = document.createElement("li")
//     item.innerText = `Item ${i}`
//     list.appendChild(item)
// }
//5
let tables = document.querySelector("table")
let items = `
<table border=1>
<tr>
<th>coffee</th>
<th>tea</th>
<th>juice</th>
</tr>
<tr>
<td>16</td>
<td>14</td>
<td>10</td>
</tr>
<tr>
<td>13</td>
<td>11</td>
<td>34</td>
</tr>
</table>
`
tables.insertAdjacentHTML("afterbegin", items)
tables.style.border ="1px soild black";

/* ---------------------Lab 2--------------------- */
let box = document.querySelector(".box");
let moveBox = setInterval(moving , 1000);
function moving() {
    let left = Math.random() *60;
    let top = Math.random() *60;
    let right = Math.random() *60;
    let bottom = Math.random() *60;

    box.style.marginLeft = left + "vw";
    box.style.marginTop = top + "vh";
    box.style.marginTop = right + "vw";
    box.style.marginTop = bottom + "vh";

    box.style.backgroundColor= "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    }
moving();

// let cube = document.getElementsByClassName("box")[0]
// setInterval(moveCube,1000);
// var x=600;
// document.onload=function() {
//     let box = document.getElementsByClassName("box");
//     setInter
//     setInterval.style.top = x;
// },10;

    // document.getElementsByClassName("box")[0]
    // Math.round(Math.random() * (3000 - 500)) + 500;
// setInterval(displayHello, 1000);

// function displayHello() {
//   document.getElementById("demo").innerHTML += "Hello";
// }