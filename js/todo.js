$(document).ready(function(){
  adds();
});

function adds(){
  $('form').on('submit', function(event){
      event.preventDefault();
      let item = $('#item').val();
      console.log(item)
      let li = $("<li></li>").text(item)
      $('ol').append(li)
      $('#item').val("");

    });

}
// define functions here
