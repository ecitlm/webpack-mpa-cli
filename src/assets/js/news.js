/* global $ */
function getName () {
  console.log('test')
  document.querySelector('.test').innerHTML = 'test'
  $('body').css('background', 'red')
}
getName()
$(document).ready(function () {
  console.log('jquery success')
  $('title').text('success')
})
