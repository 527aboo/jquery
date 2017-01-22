// ajaxオプションを返却
function getAjax(){
	
	var defer = $.Deferred();

	var jqXHR = $.ajax({
		url : "../loading/test.html",
		type : "POST",
		dataType : "html",
		timeout : 60000
	}) ;
	
	return jqXHR;
}
var ajax = getAjax();
ajax.done(function(html){
	console.log('done : ' + html);
}).fail(function(thml) {
	alert('fail');
});

//Promiseオブジェクトを返却
function getPromise(){
	
	var defer = $.Deferred();

	var jqXHR = $.ajax({
		url : "../loading/test.html",
		type : "POST",
		dataType : "html",
		timeout : 60000
	}).done(function(xhr) {
		defer.resolve(xhr);
	});
	
	return defer.promise();
}

var def = getPromise();
def.done(function(html) {
	console.log('deferred : ' + html);
});

// 古い書き方
var oldVer = function() {
	$.ajax({
		url : "../loading/test.html",
		type : "POST",
		dataType : "html",
		timeout : 60000,
		success : function(xhr) {
			console.log('oldVer : ' + xhr);
		}
	});	
};
oldVer();
