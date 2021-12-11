                // 94. DERS
                //
                // let value;
                // const programmer = {
                //   name: "İsmail Gök",
                //   age: 25,
                //   email: "ismayilgok16@gmail.com",
                //   langs: ["Python,Java,Javascript,C#"],
                //
                //   adress: {
                //     city: "Ankara",
                //     street: "Bahçelievler"
                //   },
                //
                //   work: function(){
                //     console.log("Programcı çalışıyor...");
                //   }
                //
                //
                // }
                //
                // value = programmer;
                // value = programmer.email;
                // value = programmer.adress.city;
                //
                // programmer.work();
                //
                //
                //
                // const programmers = [
                //   {name:"İsmail",age:25},
                //   {name:"Oğuz",age:25}
                // ];
                //
                // value = programmers[0].name;
                // console.log(value);

                // 95. DERS

                // let value;
                // const now = new Date(); // şu anki zamanı alır
                //
                // const date1 = new Date("9-19-1993 06:15:00");
                //
                // const date2 = new Date("September 19 1993");
                //
                // const date3 = new Date("9/19/1993");
                //
                // value = date1;
                //
                // value = date1.getMonth();
                // value = date1.getDate();
                // value = date1.getDay();
                //
                // value = date1.getHours();
                // value = date1.getMinutes();
                //
                // date1.setMonth(7);
                // date1.setDate(15);
                // date1.setFullYear(1994);
                // date1.setHours(0);
                // date1.setMinutes(15);
                // date1.setSeconds(30);
                // value = date1;
                // console.log(value);



                // 98. DERS
                // fonksiyon tanımlama

                // function merhaba(name ="Bilgi yok",age="Bilgi yok"){
                //   // if(typeof name === "undefined") name = " Bilgi yok ";
                //   // if(typeof age === "undefined") age = " Yaş yok";
                //   console.log(`İsim:${name}Yaş:${age}`);
                // }
                // // merhaba("İsmail\n",25);
                // merhaba();

                // function square(x){
                //   return x*x;
                // }
                // function cube(x){
                //   return x*x*x;
                // }
                // // let a = square(12);
                // // a = cube(a);
                // // yukardakinin daha düzgün hali
                // let a= cube(square(12));
                //
                // console.log(a);

                // FUNCTION EXPRESSION
                // const merhaba = function(name){
                //   console.log("Merhaba "+ name);
                // }
                // merhaba("Murat");


                // IMMEDIALETY INVOKED FUNCTION EXPRESSION(IIFE)

                // (function(name){
                //   console.log("Merhaba: " + name);
                // })("Murat");


                // ÖRNEK DATABASE

                // const database ={
                //   host: "localhost",
                //   name: function(ad){
                //     console.log(`İsim: ${ad}`)
                //   },
                //   add: function(){
                //     console.log("Eklendi");
                //   },
                //   get: function(){
                //     console.log("Elde edildi");
                //   },
                //   update: function(id){
                //     console.log(`ID: ${id} Güncellendi`);
                //   },
                //   delete: function(id){
                //     console.log(`ID: ${id} Silindi`);
                //   }
                // }
                //
                // database.name("İsmail");



                // 99. DERS

                // let langs = ["Python","Javascript","Java"];
                //
                // for(let i = 0;i<=langs.length;i++){
                //   console.log(i);
                // }
                //
                //     // FOREACH KULLANIMI
                // langs.forEach(function(item,index){
                //   console.log(item,index);
                // })
                //
                //
                // const users = [
                //   {name: "Mustafa",age: 25},
                //   {name: "Zeynep",age:40},
                //   {name: "Ali",age:12}
                // ];
                //
                // const names = users.map(function(kisi){
                //   return kisi.name;
                // });
                //
                // const ages = users.map(function(kisi){
                //   return kisi.age;
                // });
                // console.log(names);
                // console.log(ages);
                //
                //
                // const user = {
                //   name: "Mustafa",
                //   age:25
                // };
                //
                // for(let key in user){
                //   console.log(key,user[key]);
                // }




                // 100. DERS

                // const cevap = confirm("Emin misiniz?");
                //
                // console.log(cevap);
                // if(confirm("Emin misiniz?")){
                //   console.log("Silin gitsin");
                // }else{
                //   console.log("Silmeyin");
                // }

                // const cevap = prompt("2+2 = ?");
                // console.log(cevap);
                // // console.log(typeof cevap);
                // if(cevap == 4){
                //   console.log("Doğru");
                // }else{
                //   console.log("Yanlış!");
                // }

                // let value;
                //
                // value = window;
                // value = window.location;
                // value = window.location.host;
                // value = window.location.hostname;
                // value = window.location.port;
                // value = window.location.href;
                // if(confirm("Sayfa yenilensin mi?")){
                //   window.location.reload();
                // }else{
                //   console.log("Sayfa yenilenmedi");
                // }
                //
                // value = window.outerHeight;
                // value = window.outerWidth;
                //
                // value = window.innerHeight;
                // value = window.innerWidth;
                //
                // value = window.scrollX;
                // value = window.scrollY;
                // console.log(value);


                // 101. DERS

                // var value1 = 10;
                // let value2 = 20;
                // const value3 = 30;
                //
                // function func(){
                //   var value1 = 50;
                //   let value2 = 60;
                //   const value3 = 70;
                //   console.log(value1,value2,value3)
                // }
                // func();
                // console.log(value1,value2,value3);


                //104,105. DERS JS ILE DOOM MANIPULASYONU
                // let value;
                // value = document;
                // value = document.scripts;
                //
                // value= document.scripts.length;
                // value = document.scripts[0];
                //
                // value = document.Links;
                // value = document.links[document.links.length -1];
                // value = document.links[document.links.length -1].getAttribute("class");
                // value = document.links[document.links.length -1].getAttribute("href");
                // value = document.links[document.links.length -1].className;
                // value = document.links[document.links.length -1].classList;
                //
                // //Formlar
                // value = document.forms;
                // value = document.forms.length;
                // value = document.forms[0];
                // value = document.forms["form"];
                // value = document.forms[0].id;
                // value = document.forms[0].getAttribute("id");
                // value = document.forms[0].method;

                // console.log(value);


                // 106. DERS ELEMENT SEÇME
                // elementi idye göre seçme
                // let element;
                // element = document.getElementById("todo-form");
                // element = document.getElementById("tasks-title");
                //           // elementi class'a göre seçme
                // element = document.getElementsByClassName("list-group-item");
                // element = document.getElementsByClassName("card");
                //           // element tag'e göre seçme
                // element = document.getElementsByTagName("li");
                //
                //             //Query Selector - CSS Selector - Tek bir seçim yapar
                // element = document.querySelector("#todo-form");
                // element = document.querySelector("#tasks-title");
                // element = document.querySelector(".list-group-item");
                // element = document.querySelector("li");
                // element = document.querySelector("div");
                //
                //
                //           //QueryselectorALL - tüm elementleeri seç
                //
                // element = document.querySelectorAll(".list-group-item"); //Node List
                //
                // const element = document.querySelector("#clear-todos");



                // console.log(element.style);  // ÖNEMLİİİİİİİİİİİİİİİİİİ
                // STyle ve element özelliklerini değiştirme

                // element.className = "btn btn-warning";
                // element.style.color = "#000";
                // element.style.marginLeft = "50px";
                // element.href = "https://google.com";
                // element.target = "_blank";
                // console.log(element.textContent);
                // element.textContent = "Silin";
                // element.textContent = "<span>SİLİN </span>";
                // element.innerHTML = "<span style='color:green;'>SİLİN </span>";

                // const elements = document.querySelectorAll(".list-group-item");
                //
                // elements.forEach(function(el){
                //   el.style.color="red";
                // });

                // let element = document.querySelector("li:last-child");
                // let element = document.querySelector("li:nth-child(2)");
                // let element  = document.querySelectorAll("li:nth-child(odd)");
                // let element  = document.querySelectorAll("li:nth-child(even)");
                //
                // element.forEach(function(el){
                //   el.style.background = "#ccc";
                //   el.style.color = "red";
                // });
                // const newLink = document.createElement("a");
                //
                // const cardbody = document.getElementsByClassName("card-body")[1];
                //
                // newLink.id = "clear-todos";
                // newLink.className = "btn btn-danger";
                // newLink.href = "https://google.com";
                // newLink.target =  "_blank";
                // //textContent
                // newLink.textContent = "Farklı sayfaya git";
                //
                // // text Node
                // // const text = document.createTextNode("Naber");
                // // cardbody.appendChild(text);
                //
                // newLink.appendChild(document.createTextNode("Farklı Sayfaya git"));
                // cardbody.appendChild(newLink);
                // console.log(newLink);

                // const todoList = document.querySelector("ul.list-group");
                // const todos = document.querySelectorAll("li.list-group-item");
                //
                // // todos[2].remove();
                // todoList.removeChild(todos[2]); //  todoList.removeChild(todoList.lastElementChild);
                //
                // console.log(todos);
                // console.log(todoList);


                // ELEMEENT DEĞİŞTİRMEEEE!!!!!!!!!!!!!!!!
                // // REPLACE
                // const cardbody = document.querySelectorAll(".card-body")[1];
                // const newelement = document.createElement("h3");
                //
                // newelement.className = "card-title";
                // newelement.id = "tasks-title";
                // newelement.textContent = "Yeni todolar";
                //
                // // eski element
                // const old = document.querySelector("#tasks-title");
                //
                // cardbody.replaceChild(newelement, old);
                //
                // console.log(newelement);


                // ATTRIBUTE LERRR
                // const todo = document.getElementById("todo");
                // let element;
                //  element = todo;
                // // element = todo.classList;
                //
                // // todo.className = "form-control newClass"; //todo.classList.add("newClass");
                // //todo.classList.add("newClass");
                // // todo.classList.remove("form-control");
                //
                // element = todo.placeholder;
                // element = todo.getAttribute("placeholder");
                // todo.setAttribute("placeholder","Naber");
                //
                // // element = todo.hasAttribute("required");
                // todo.removeAttribute("name");
                //
                //
                // console.log(element);


                // 113. DERS

                // const filter = document.getElementById("filter");
                // const todoForm = document.getElementById("todo-form");
                //
                // todoForm.addEventListener("submit",submitForm);
                // function submitForm(e){
                //     console.log("submit eventi");
                //
                //     // e.preventDefault(); // DEFAULT ÖZELLİKLERİNİ YOK SAYIYOR;
                // };

                // card.textContent =" aasdasd";

                // 1. YÖNTEM filter.onfocus = function(){
                //   console.log("Naber");
                // }

                // ÖNEMLİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ
                // filter.addEventListener("focus",function(e) {
                //   // console.log(e);
                //   // console.log(e.type);
                //   // console.log(e.target);
                //   // console.log(e.target.placeholder)
                //   // console.log("Naber");
                // });


                // 114. DERSSS KLAVYE EVENTLERİ

                // keypress
                // document.addEventListener("keypress",run);
                // function run(e){
                //   // console.log(e.which); e.which // ASCII Tablosundaki değerini gösterir
                //   // console.log("Naber");
                //   console.log(e.key);
                // };
                //
                // // keydown
                // document.addEventListener("keydown",run);
                // function run(e){
                //   // console.log(e.which); e.which // ASCII Tablosundaki değerini gösterir
                //   // console.log("Naber");
                //   console.log(e.key);
                // };

                // keyup
                // document.addEventListener("keyup",run);
                // function run(e){
                //   // console.log(e.which); e.which // ASCII Tablosundaki değerini gösterir
                //   // console.log("Naber");
                //   console.log(e.key);
                // };

                // ÖNEMLİ DERSSSSSSSSSSSSSSSSSSSSSSSSSS DİNAMİK KLAVYE EVENTLARI
                // const card = document.querySelector(".card-header");
                // const todoInput = document.querySelector("#todo");
                //
                // todoInput.addEventListener("keyup", changeText);
                //
                // function changeText(e){
                //   card.textContent = e.target.value;
                //   // console.log(e.target.value);
                // };



                // 115. DERSSS  MOUSE EVENTLAR

                // const cardbody = document.querySelectorAll(".card-body")[1];
                // const title = document.querySelector("#tasks-title");

                // CLİCK EVENTLAR

                // title.addEventListener("click", run);
                // function run(e){
                //     console.log(e.type);
                // }

                // MOUSE DOWN
                //
                // title.addEventListener("mousedown", run);
                // function run(e){
                //     console.log(e.type);
                // }

                // MOUSE UP

                // title.addEventListener("mouseup", run);
                // function run(e){
                //     console.log(e.type);
                // }

                // MOUSE OVER

                // title.addEventListener("mouseover", run);
                // function run(e){
                //     console.log(e.type);
                // }
                // // MOUSE OUT
                //
                // title.addEventListener("mouseout", run);
                // function run(e){
                //     console.log(e.type);
                // }

                // MOUSE ENTER ve MOUSE LEAVE
                // cardbody.addEventListener("mouseenter", run);
                // cardbody.addEventListener("mouseleave", run);
                // function run(e){
                //     console.log(e.type);
                // }


                // 116. DERSS INPUT EVENTLARI
                // DOMContentLoaded EVENTTTTTTTTTTTTTTTTTTTTTTTTT

                // document.addEventListener("DOMContentLoaded", load);
                //
                // function load(e){
                //   console.log("Sayfa yüklendi");
                // }
                // const filter = document.getElementById("filter");

                // INPUT FOCUS EVENTIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("focus",run);

                // INPUT BLUR EVENTIIIIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("blur",run);

                // INPUT PASTE EVENTIIIIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("paste",run);

                // INPUT COPY EVENTIIIIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("copy",run);

                // INPUT CUT EVENTIIIIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("cut",run);

                // INPUT SELECT EVENTIIIIIIIIIIIIIIIIIIIIIIIII
                // filter.addEventListener("select",run);

                // function run(e){
                //   console.log(e.type);
                // }


                // 117. DERS EVENT BUBBLING


                //BUBBLING
                // document.querySelector(".container").addEventListener("click", function(){
                //   console.log("container");
                // });
                // document.querySelector(".card.row").addEventListener("click", function(){
                //   console.log("Card body");
                // });
                // document.querySelectorAll(".card-body")[1].addEventListener("click", function(){
                //   console.log("Card body");
                // });

                //////  ÖNEMLİİİİİİİİİİİ DERSSSSSSSSSSSSSSSSSSSSSSS
                // EVENT CAPTURING VE YA DELEGATION
                // const cardbody = document.querySelectorAll(".card-body")[1];
                //
                // cardbody.addEventListener("click",run);
                //
                // function run(e){
                //   if(e.target.className === "fa fa-remove"){
                //     console.log("Silme işlemi");
                //   }
                //   if(e.target.id === "filter"){
                //     console.log("Filtreleme işlemi");
                //   }
                //   if(e.target.id ==="clear-todos"){
                //     console.log("Tüm taskları silme işlemi");
                //   }
                // }


                // 118. DERSSSS
                // SESSION STORAGE
                // const add = document.querySelector("#add");
                // const del = document.querySelector("#delete");
                // const clear = document.querySelector("#clear");
                //
                // // inputlar
                // const addkey = document.querySelector("#addkey");
                // const addvalue = document.querySelector("#addvalue");
                // const deletekey = document.querySelector("#deletekey");
                //
                // add.addEventListener("click",addItem);
                // del.addEventListener("click",deleteItem);
                // clear.addEventListener("click",clearItems);
                //
                // function addItem(e){
                //   sessionStorage.setItem(addkey.value,addvalue.value);
                // }
                // function deleteItem(e){
                //   sessionStorage.removeItem(deletekey.value);
                // }
                // function clearItems(e){
                //   sessionStorage.clear()
                // }
                // 119. DERSSSS
                // LOCAL STORAGE

                //SetItem

                // localStorage.setItem("hareket","burpee");
                // localStorage.setItem("sayi",50);
                //
                // const value = localStorage.getItem("hareket");
                // console.log(value);
                // console.log(typeof value);

                //CLEAR LOCAL STORAGE

                // localStorage.clear();
                // localStorage.setItem("hareket","burpee");
                // localStorage.setItem("sayi",50);

                // console.log(localStorage.getItem("sport"));
                //
                // if(localStorage.getItem("sport")===null){
                //   console.log("Sorguladığınız veri bulunmuyor");
                // }else{
                //   console.log("Sorguladığınız veri bulunuyor");






                // 135. DERS

                // console.log(this); // GLOBAL SCOPE
                //
                // const emp1 = { // object literal
                //   name: "Mustafa",
                //   age:25,
                //   showInfos:function(){console.log("Bilgiler gösteriliyor");}
                //
                // }
                //
                // const emp2 = {
                //   name:"ahmet",
                //   age:25
                // }
                // emp1.salary = 25;


                // function Employee() { // yapıcı fonksiyon - constructor
                //   this.name = "Mustafa"
                //
                // }
                //
                // const emp1 = new Employee();
                //
                // console.log(emp1);


                // TEK FONKSİYON İLE İSTEDİĞİMİZ KADAR OBJE OLUŞTURABİLİYORUZ
                // function Employee(name,age,salary) {
                //   this.name = name;
                //   this.age = age;
                //   this.salary = salary;
                //
                //   this.showInfos = function(){
                //     console.log(this.name,this.age,this.salary);
                //   }
                // }
                //
                // const emp1 = new Employee("Mustafa",25,5000);
                // const emp2 = new Employee("Ahmet",25,4000);
                //
                // emp1.showInfos();
                // emp2.showInfos();



                // 136. - 137. DERS
                // PROTOTYPEEEE LAR

                // function Employee(name,age) {
                //   this.name = name;
                //   this.age = age;
                //   this.showInfos = function() {
                //     console.log("İsim: "+ this.name + "\nYaş : "+this.age)
                //   }
                // }
                //
                // const emp1 = new Employee("Mustafa",25);
                // const emp2 = new Employee("Ahmet",20)
                //
                // console.log(emp1);
                // emp1.showInfos();

                // function Employee(name,age) {
                //   this.name = name;
                //   this.age = age;
                //
                // }
                // Employee.prototype.showInfos = function() {
                //   console.log("İsim : "+this.name + " Yaş: "+this.age);
                // }
                // const emp1 = new Employee("Mustafa",25);
                // const emp2 = new Employee("Ahmet",20)
                //
                // console.log(emp1);
                // emp1.showInfos();


                // 138. DERSS
                // OBJE VE PROTOTYPELAR
                // CREATE object

                // const obj = {
                //   test1:function() {
                //     console.log("Test1")
                //   },
                //   test2:function() {
                //     console.log("Test2");
                //   }
                // }
                // const emp = Object.create(obj);
                // emp.name = "Mustafa";
                // emp.age = 25;
                // console.log(emp);




                // document.getElementById("change").addEventListener("click",change);

                // function change(){

                //       const xhr = new XMLHttpRequest();

                //       xhr.open("GET","https://api.exchangeratesapi.io/latest");



                // }


//
// async function test(data,type){
//   // promise return
//   //return data;
//   let promise1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(typeof data === "string"){
//         resolve(data)
//         console.log(typeof type);
//       }
//       else{
//         reject(new Error("Lütfen string bir değer girin"))
//       }
//     },500)
//   })
//
//
//   let response = await promise1;
//   return response
//
// }
//
//
//  //  5sn beklicek
//
//
// test("merhaba","ismail").then(data => console.log(data))
//
//



async function getData(url){

  const response = await fetch(url);
  const data = await response.json();

  data.forEach((item) => {
    console.log(item.name);
  });


}


getData("https://jsonplaceholder.typicode.com/users")







                console.log(" ");
