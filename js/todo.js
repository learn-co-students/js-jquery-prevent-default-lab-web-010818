$(document).ready(function() {
  // call functions here
  submit()
});

// define functions here
function submit(e) {
  $('form').on('submit', function(e) {
    let addItem = $('#item').val()
    let li = document.createElement("li");
    li.innerText = addItem
    $('ol').append(li)
    e.preventDefault()
  })
}