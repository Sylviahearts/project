function alt() {
    // alert('i have been clicked')
    // let inpValue = document.getElementById('inp').value;
    //jquery code
     let inpValue = $('#inp').val();
    //  $('#name-value').html(inpValue);
     $('#inp').val('');

      //$('#food-list').append('<li> Beans </li>');
    //  $('#food-list').prepend('<li> Spaghetti</li>');
     $('#food-list').append('<li>' + inpValue + '</li>' + '<li> Beans </li>');
    // $('#food-list').append( inpValue );
}






//useful

// Create an "li" node:
// const node = document.createElement("li");

// // Create a text node:
// const textnode = document.createTextNode("Water");

// // Append the text node to the "li" node:
// node.appendChild(textnode);

// // Append the "li" node to the list:
// document.getElementById("myList").appendChild(node);




//another useful code
  // document.getElementById("todo").append("<li>" + inpValue1 + "</li>");
  // document.getElementById("todo").style.display = "block";
  // const node = document.createElement("li");
  // const textnode = document.createTextNode(inpValue1);
  // node.appendChild(textnode);
  // document.getElementById("unlist").appendChild(node);