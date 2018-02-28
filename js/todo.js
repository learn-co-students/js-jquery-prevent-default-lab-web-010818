$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){
    event.preventDefault()
    let item = document.createElement('p')
    let itemValue = $('#item').val();
    item.innerHTML = `<li> ${itemValue} </li>`
    $('ol').append(item)
    $('#item').val("");
  })
}
