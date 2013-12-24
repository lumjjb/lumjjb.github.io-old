var pagebase = "pages/";
var main_content = 'div#main_content';


function pageClick(page)
{

	$(main_content).fadeOut( "fast", function() { pageUpdate(page) });
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
