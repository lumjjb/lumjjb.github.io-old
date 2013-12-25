window.onload = init();

function init()
{

	// We check if it references a specific page
	var hashtag;

	// if it doesn't we load the default page: main.html
	if ((hashtag = window.location.hash) == "")
	{
		pageClick("main.html");
	}
	else //we find the page it wants and loads it as well
		// as set the active sidebar item
	{
		hashtag = hashtag.substring(1);
		
		initSideBar(hashtag);
		pageClick(hashtag);
	}
}


function initSideBar(hashtag)
{

	var tags  = ["about", "security", "dev", "mgmt"];
	for (t in tags)
	{
		if (hashtag.indexOf(tags[t])==0)
		{
			navSetActive(tags[t]);
			return;
		}

	}

}