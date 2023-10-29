let pic=document.getElementById("pic");
  let inputFile=document.getElementById("inputFile");

  inputFile.onchange=function(){
    pic.src=URL.createObjectURL(inputFile.files[0]);
  }

let itemContainer=document.querySelector('.item-container'); 

let checkbox=document.createElement("div");
let checkboxImg=document.createElement('img');

function addTask(){
  var inputItemName=prompt("please enter item name");
  var inputItemWeight=prompt("please enter item weight");
  var inputItemPrice=prompt("please enter item Price");

let listItem=document.createElement("li");
let imgContainer=document.createElement("div");

let img=document.createElement("img");
img.src="/Assets/potato.jpeg";
imgContainer.appendChild(img);
listItem.appendChild(imgContainer);

let itemDesc=document.createElement("div");
let itemName=document.createElement("p");
let itemweight=document.createElement("p");
let itemPrice=document.createElement("p");

itemName.innerText=inputItemName;
itemweight.innerText=inputItemWeight+`kg`;
itemPrice.innerText=inputItemPrice+`Rs/kg`;

itemDesc.appendChild(itemName);
itemDesc.appendChild(itemweight);
itemDesc.appendChild(itemPrice);

listItem.appendChild(itemDesc);

let totalPrice=document.createElement("div");
let H1=document.createElement("h1");

let calculatedTotalPrice=Number(inputItemWeight)*Number(inputItemPrice);

H1.innerText=`${calculatedTotalPrice} Rs.`;

totalPrice.appendChild(H1);
listItem.appendChild(totalPrice);

let checkbox=document.createElement("div");
let checkboxImg=document.createElement('img');
checkboxImg.src="/Assets/uncheckedbox.png";
checkbox.appendChild(checkboxImg);
listItem.appendChild(checkbox);

///////////////////////////////////
// Get the checkbox element by class name
//checkbox = document.querySelector(".checkbox");

// Get the image element inside the checkbox
//checkboxImg = checkbox.querySelector("#checkbox");

// Define the two image sources
const img1Src = "/Assets/uncheckedbox.png";
const img2Src = "/Assets/checkedbox.png";

// Add a click event listener to the checkbox element
checkbox.addEventListener("click", function () {
  // Check the current image source and toggle it
  if (checkboxImg.src.includes(img1Src)) {
    checkboxImg.src = img2Src;
    
  } else {
    checkboxImg.src = img1Src;
   
  }
});

///////////////////////////////////

let deleteButton=document.createElement("div");
let trashImg=document.createElement('img');
trashImg.src="/Assets/delete.png";
deleteButton.appendChild(trashImg);
listItem.appendChild(deleteButton);

/////////////////////////////

deleteButton.addEventListener('click', function() {
  // Traverse up the DOM tree and remove each parent element
  var parent = deleteButton;
  while (parent) {
      var nextParent = parent.parentElement;
      if (nextParent) {
          nextParent.remove();
      }
      parent = nextParent;
  }
});

////////////////////////////


itemContainer.appendChild(listItem);
console.log("hi");


//adding class name for styling newly created dom objects
itemName.setAttribute("id", "item-name");
itemweight.setAttribute("id", "item-weight");
itemPrice.setAttribute("id", "item-price");
itemDesc.classList.add('item-desc');
imgContainer.classList.add('img-container');
itemContainer.classList.add('item-container');
listItem.classList.add('list-item');
totalPrice.classList.add('total-price');
checkbox.classList.add('checkbox');
deleteButton.classList.add('delete-button');






}

