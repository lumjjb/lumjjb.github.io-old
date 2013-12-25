var pagebase = "pages/";
var main_content = 'div#main_content';
var visited_prefix = "visited_";

window.location.o
function pageClick(page)
{
	// Load page
	$(main_content).fadeOut( "fast", function() { pageUpdate(page) });

	// Set page url hash
	window.location.hash = page;

	// Track visited
	setVisited(page);
}

function setVisited(page)
{
	localStorage[visited_prefix + page] = "1";
}

function pageUpdate(page)
{
	var pagereq = { url: pagebase + page,
					data: "",
					success: updateMainContent,
					dataType: "html"
				};

	$.ajax(pagereq);		

	$(main_content).fadeIn( "fast", function() { });
		

}

function updateMainContent(content) 
{ 
	$(main_content).html(content); 
}


// Load top category of active page
function loadTopCategory()
{
	var link;
	if ((link = $('ul.nav-pills li.active a')).length >0)
		{
			link[0]['onclick']();
		}
}