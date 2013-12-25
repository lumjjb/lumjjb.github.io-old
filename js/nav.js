
// JQuery to set active of links
$('ul.nav-pills li a').click(function (e) {
  navRemoveAllActive()
  $(this).parent('li').addClass('active')
})

function navRemoveAllActive()
{
  $('ul.nav-pills li.active').removeClass('active');
}

function homeclick()
{
	navRemoveAllActive();
	pageClick('main.html');
}