
/* eslint-disable */

$(document).ready(init);

function init() {
  console.log("Aaaand we're go!");
  $('#countrySelecter').change(countrySelected);
}

function countrySelected(){
  $.ajax({
    url: `/cities/getCities`,
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      for (city of rsp) {
        $('#citySelecter').append(`<option val="1">${city.name}</option>`);
      }
      console.log("hello");
    }
  })

//  $('#citySelecter').append('<option val="1">One</option>');

//  console.log("Hi Dan!  How you doin today?");
}
