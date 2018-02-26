$(document).ready(function(){
  $('form').on('submit', function(event){
    var item = $('#item');
    // $("#hello").text("Hello, " + name);
    event.preventDefault();
    addToDo(item)
  });
});

// define functions here
function addToDo(item) {
  const ol = $('#list ol');
  const newItem = $('<li></li>');
  newItem.text(item.val());
  newItem.appendTo(ol);
  item.val("");
}


// var new_task = $('<li></li>').addClass('task');
// new_task.text($("#add_todo").val()); //this is the value of the input
// new_task.attr('id', 'new_task'); //use attr instead of setAttribute
// new_task.appendTo('ol.list');
