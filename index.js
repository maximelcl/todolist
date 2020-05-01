$(function() {
  var $list, $newItemForm;
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li><i class="far fa-check-square"></i> ' + text + '</li>');
    $('input:text').val('');
  });

  $list.on('click', 'li', function() {
    $(this).remove();
  });

});