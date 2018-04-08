/*
	JS document by Roman
*/
function loadNews(){
	changeNewsContent(2);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//		handle story changing
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function changeNewsContent(news_id){

	//news id var should be integer type

	console.log("-- yo news number "+news_id+" has been triggered");

	document.getElementById("news_title").innerHTML = getNewsTitle(news_id);
	document.getElementById("news_subtitle").innerHTML = getNewsSubtitle(news_id);
	document.getElementById("news_text").innerHTML = getNewsText(news_id);
	document.getElementById("news_image").src = getNewsImagePath(news_id);

	console.log("news number "+news_id+" has been loaded");
}

// we may use here JSON parsing
function getNewsTitle(news_id){
	return "News #"+news_id+" Title";
}

function getNewsSubtitle(news_id){
	return "News #"+news_id+" subtitle";
}

function getNewsText(news_id){
	return "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt impedit est voluptatem doloremque architecto corporis suscipit quidem ratione! Quis laborum nam optio dolorem doloremque ex nobis quibusdam ad quo dolores?";
}

function getNewsImagePath(news_id){
	return "../images/news/"+news_id+".jpg";
}


