$(document).ready(function () {

  var data = {
    Shirt: [{
      text: 'Red',
      value: 'Red'
    }, {
      text: 'Orange',
      value: 'Orange'
    }],
    Jeans: [{
      text: 'Blue',
      value: 'Blue'
    }, {
      text: 'Gray',
      value: 'Gray'
    }]
  };
  var product = '',
    color = '',
    emptySelect = '<option value="n/a">n/a</option>';
  product += emptySelect;
  for (i in data) {
    product += '<option value="' + i + '">' + i + '</option>';
  }

  $('#product').append(product);

  color += emptySelect;




  for (i in data) {
    color += '<option value="' + i + '">' + i + '</option>';
  }

  $('#color').append(color);
});