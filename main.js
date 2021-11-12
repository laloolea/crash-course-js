var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


//Form submit event
form.addEventListener('submit',addItem);

//Delete event 

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
    
    // Get input value 
    var newItem = document.getElementById("item").value;

    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement('button');
    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);


}

//Remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){
          var li = e.target.parentElement;
          itemList.removeChild(li);
          
          console.log(e.target.parentElement);
      }
    }
    

}

//Filter Items
function filterItems(e){
    //convert to lowercase to avoid mixing
    var text = e.target.value.toLowerCase();
    //Get Li
    var items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
             item.style.display= 'block';
        }else{
            item.style.display = 'none';
        }
    })
   

}