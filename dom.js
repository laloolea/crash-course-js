// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// document.title=123
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'))
//var headerTitle= document.getElementById('header-title');
//var header= document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="queonda" //just change content
//headerTitle.innerText="Goodbye"; //cares about style
//headerTitle.innerHTML="<h1>Hello</h1>" //put inside don't change it !
//header.style.borderBottom='solid 3px #000';

// //GETELEMENTSBYCLASSNAME//
// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[0].textContent="Que onda";
// items[0].style.fontWeight = "bold";
// //items[0].style.backgroundColor = "yellow";

// //items.style.backgroundColor="red";


// for(var i = 0 ; i < items.length ; i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

// //GETELEMENTSBYTagNAME//
// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[0].textContent="Que onda";
// li[0].style.fontWeight = "bold";
// //items[0].style.backgroundColor = "yellow";

// //items.style.backgroundColor="red";


// for(var i = 0 ; i < li.length ; i++){
//     li[i].style.backgroundColor='red';
// }

//QUERYSELECTOR//
// var header = document.querySelector('#main-header');

// header.style.borderBottom='solid 4px #ccc'

// var input = document.querySelector('input');
// input.value = "Hello World!";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.backgroundColor='red';

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.backgroundColor = "blue";

// var secondItem = document.querySelector
// ('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "purple";

//QUERY SELECTORALL//

// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent="Que onda";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0 ; i < odd.length ; i++ ){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';

// }


//TRAVESING THE DOM//
//var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes); // also puts the breaklines and text everything
// console.log(itemList.children);// Just the list items, just elements
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "red";


// //FirstChild
// console.log(itemList.firstChild);// gives algo text
// //firstElementChild
// console.log(itemList.firstElementChild); // gives only element this is better
// itemList.firstElementChild.textContent = "Pruebita";

//lastChild
//console.log(itemList.lastChild);// gives algo text
// //lastElement
//  console.log(itemList.lastElementChild); // gives only element this is better
//  itemList.lastElementChild.textContent = "Pruebita";

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling); //also it exists a previous sibling
 
// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="red";

//createElement

// //create a div
// var newDiv = document.createElement('Div');

// //Add id
// newDiv.id = 'hello1';

// //Add class
// newDiv.className='hello';

// //add atribute
// newDiv.setAttribute('title','Hello div');


// // Create text nod
// var newDivText = document.createTextNode("Hello World");

// //Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");


// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv,h1);

//EVENTS
// var button = document.getElementById('button').addEventListener
// ('click',buttonClick);

// function buttonClick(e){
//     // // console.log('Button clicked');
//     // // document.getElementById('header-title').textContent = 'Cambio';
//     // // document.querySelector('#main').style.backgroundColor= "#F4F4F4";
//     // //console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output =document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '<h3>';

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
    
//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

//box.addEventListener('mouseenter',runEvent); // only for the element itself (parent)
//box.addEventListener('mouseleave',runEvent); // only for the element itself (parent)

//box.addEventListener('mouseover',runEvent);// also for any inner elements
//box.addEventListener('mouseout',runEvent);// also for any inner elements

// box.addEventListener('mousemove',runEvent); 

// var output = document.getElementById('output');

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('copy',runEvent);
// itemInput.addEventListener('paste',runEvent);

//itemInput.addEventListener('input',runEvent);


// select.addEventListener('change',runEvent);
//// select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    //e.preventDefault();
    console.log('EVENT type: ' + e.type);
    //console.log(e.target.value);

    //output.innerHTML="<h1>No copies</h1>"
    // console.log(e.target.value);
    // document.getElementById("output").innerHTML='<h3>'+e.target.value+'</h3>';
    // output.innerHTML= "<h3>MouseX: " + e.offsetX + '</h3><h3>MouseY: '+ e.offsetY
    // +'</h3>';

    // box.style.backgroundColor= "rgb("+e.offsetX+","+e.offsetY+",40)";
    // document.body.style.backgroundColor= "rgb("+e.offsetX+","+e.offsetY+",40)";
}