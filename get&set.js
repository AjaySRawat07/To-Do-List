//  ...get and set attributes
// const link = document.querySelector("a");
// link.setAttribute("href","https://google.com");
// console.log(link.getAttribute("href").slice(1));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));



//          ...get multiple elmt using getElements by class name
// const navItems = document.getElementsByClassName("nav-item");  // HTML collection
// console.log(navItems);
// console.log(Array.isArray(navItems));

// const navItems = document.querySelectorAll(".nav-item");  //NodeList
// console.log(navItems[0]);



//          ...loop
// let navItems = document.getElementsByTagName("a"); //  /..HTML collection
// console.log(navItems);

// for loop
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = '#ffff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "4px";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = '#ffff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "4px";
// }



// let navItems = document.querySelectorAll("a");      // ... node collection

// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = '#ffff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "4px";
// }

// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = '#ffff';
//     navItem.style.color = 'green';
//     navItem.style.fontWeight = "bold";
//     navItem.style.padding = "4px";
// }



//      ...inner html
// const headline = document.querySelector("#main-heading");

// headline.innerHTML = "<h1>To Do List</h1>";
// headline.innerHTML += '<button class =\"btn\">Click here</button>';
// console.log(headline.innerHTML);




//          ...nodeList
// const h1 = document.querySelector("h1");
// const div=h1.parentNode;
// div.style.backgroundColor = "skyBlue";
// div.style.background = "transparent";


// const headline = document.querySelector(".headline");
// console.log(headline.children);


//          ... classList
// const header = document.querySelector(".header");
// console.log(header.classList);
// // header.classList.add('bg-dark');
// // header.classList.remove("header");
// const ans = header.classList.contains("header");
// console.log(ans);
// header.classList.toggle("bg-dark");
// header.classList.toggle("bg-dark")



//    ... document.createElement()
// const newTodoItem = document.createElement("li");
//  newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem);  ..lastme add karega
// todoList.prepend(newTodoItem);  
// // newTodoItem.remove();
// console.log(newTodoItem);

//before
//after

// const newTodoItem = document.createElement("li");
//  newTodoItem.textContent = "Teach students";
//  const todoList = document.querySelector(".todo-list");
//  todoList.after(newTodoItem);



// ... static list and Live list
// querySelectorAll hmein static list degi
// getElementsBySomething hmein live list degi jo direct add ho jaaye

// const listItems = document.querySelectorAll(".todo-list li");
// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const seventhLi = document.createElement("li");
// seventhLi.textContent = "item-7";

// ul.append(seventhLi);
// console.log(listItems);
