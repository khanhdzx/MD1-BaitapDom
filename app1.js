// bài 1
// let a = document.getElementById("vai");
// let btn = document.getElementById("vip")
// btn.onclick =function(){
// if(a.style.display !="none"){
//     a.style.display= "none";
// }else{
//     a.style.display ="block"
// }
// }

// bài 2

// let div = document.getElementById("vai");
// let btn = document.getElementById("vip");

// btn.onclick = function changeColor(){
//     let a = Math.floor(Math.random()*256);
//     // Math.floor làm tròn xuống
//     let b = Math.floor(Math.random()*256);
//     let c = Math.floor(Math.random()*256);
//     let color =`rgb(${a},${b},${c})`;
// div.style.backgroundColor = color;
// }


// bài 3
// let div = document.getElementById("vai");
// let btn = document.getElementById("vip");
// let btn2 = document.getElementById("vai2");
// btn.onclick=function(){
//     let a = "";
//     let b = "";
//     let style = getComputedStyle(div);
//     let style2 = getComputedStyle(btn2);

//     b = style.backgroundColor;
//     div.style.backgroundColor = style2.backgroundColor;
//     btn2.style.backgroundColor = b;
//     a=div.innerHTML
//     div.innerHTML = btn2.innerHTML;
//     btn2.innerHTML=a;
// }

// bài 4
// let div = document.getElementById("vai");
// let btn = document.getElementById("vip");
// div.style.fontSize="15px"
// btn.onclick=function(){
//     let font = Number(div.style.fontSize.replace("px",""));
//     font=font +1;
//     div.style.fontSize = font+ "px";
// }