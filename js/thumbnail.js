var title_char_limit = 100;
var text_char_limit = 150;

function spawnThumbnails(thumbnails)
{
	for (t in thumbnails)
	{
		createThumbnail_json(thumbnails[t]);
	}
}
function createThumbnail_json(json)
{

	createThumbnail(json['section'], 
							json['title'], 
							json['text'], 
							json['img'],
							json['page']);
	
}

function createThumbnail(section, title, text, img, page)
{

	// Shorten Title
	if (title.length > title_char_limit)
	{
		title = title.substring(0,title_char_limit-1) + "...";
	}

	// Shorten Text
	if (text.length > text_char_limit)
	{
		text = text.substring(0,text_char_limit-1) + "...";
	}

	// Create caption div,
	var caption_div = "";
	caption_div += '<a href="javascript:void(0)" onclick="pageClick(\'' + page + '\');">';

	// Check if visited and set appropriate class
	caption_div += '<div class="thumbnail right-caption span4' ;
	caption_div += (localStorage[visited_prefix + page]==="1") ? ' visited' : '';
	caption_div += '">';

	caption_div += '<img src="' + img + '"alt="">';
	caption_div += '<div class="caption">';
	caption_div += '<h5>' + title + '</h5>';
	caption_div += '<p>' + text + '</p>';
	caption_div += '</div>';
	caption_div += '</div>';
	caption_div += '</a>';



	$(section).append(caption_div);
}