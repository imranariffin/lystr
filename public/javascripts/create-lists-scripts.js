$(function () {

	$(document).ready(function () {
		/* always show first input to let lystrs 
		know what to do on this create-/list*/
		$('.input-text').show();
	});


	$('#btn-additem').click(function(){

		// hide all previously created input-text
		$('.input-text').hide('slow');

		var listSize = $('#listSize').val();
		// make it a number then increment
		listSize = Number(listSize);
		listSize += 1;
		// turn back to string
		listSize = String(listSize);
		// update listSize
		$('#listSize').val(listSize);


		// create new element the jQuery way //
		createListItemWithPanel(Number(listSize)-1);

		// var itemContent = "<li class='list-group-item'";
		// itemContent += " id='" + listSize + "'>";
		// // input text
		// itemContent += "<input type='text' class='input-text' name='items'";
		// // give each input-text unique id
		// itemContent += " id='input-text" + listSize + "'>";
		// // insert empty paragraph in a panel div
		// // panel start
		// itemContent += "<div class='panel panel-default'>";
		// // panel title
		// itemContent += "<div class='panel-heading'><h3 class='panel-title'>";
  // 		itemContent	+= "Panel title " + listSize + "</h3></div>";
  // 		// panel body
  // 		itemContent += "<div class='panel-body'>" + "Panel content " + listSize;
  // 		itemContent += "<p id='item-text" + listSize + "'></p>";
  // 		itemContent += "</div>";
  // 		// panel ending
  // 		itemContent += "</div>";
		// // li ending
		// itemContent += "</li>"

		// $('.list-group').append(itemContent);
	});

	// hide/show input box
	$('.list-group').click(event, hideAllShowTarget);

	// hide/show input box
	// $('.item-content').click(function (event) {
	// 	var targetId = event.target.id;
	// 	var idNumber = targetId.slice('item-content'.length, targetId.length);
	// 	$('.input-text')
	// 		.not('#input-text' + idNumber)
	// 		.hide('slow')

	// 	$('#item-content' + idNumber).show('slow');
	// });

	// tab keypress
	$(window).keydown(event, focusNextOrPrev);

	// always update list title
	$('#list-title-input').keyup(function (event) {
		// get active input-key
		var inputTextId = event.target.id;

		// target must be input-text
		// var targetClass = event.target.className;
		// if (targetClass === "input-text") {
			
		// paragraph to update
		var activeInputText = $('#' + inputTextId);

		// is the next sibling of the active input-key
		$('#list-title').children('h2')
			// update the text on panel-title
			.text(activeInputText.val());
	});

	// always update preview of panel-title
	$('.list-group').keyup(function (event) {
		
		// get active input-key
		var inputTextId = event.target.id;

		// target must be input-text
		var targetClass = event.target.className;
		if (targetClass==="input-text" || targetClass==="form-control") {
			
			// TEST
			console.log("inside " + "$('.input-text').keypress()");
			console.log('inputTextId:');
			console.log(inputTextId);

			// paragraph to update
			var activeInputText = $('#' + inputTextId);

			// TEST
			console.log('activeInputText:');
			console.log(activeInputText);

			// is the next sibling of the active input-key
			activeInputText.next()
				// update the text on panel-title
				.text(activeInputText.val());

			// TEST
			console.log('activeInputText.next():');
			console.log(activeInputText.next());

			// TEST
			console.log('activeInputText.next().val():');
			console.log(activeInputText.next().val());
			console.log('activeInputText.val():');
			console.log(activeInputText.val());

		} else {
			// do nothing
		}
	});

	// test stackoverflow upvote button
	$('.vote').click(function () {
  		$(this).toggleClass('on');
	});	
});

///////////////////////////
//	 callback functions	 //
///////////////////////////

function hideAllShowTarget (event) {

	// TEST
	// console.log($(this));
	console.log('event.target.id:');
	console.log(event.target.id);
	console.log('event.type:');
	console.log(event.type);
	console.log('event.target.className:');
	console.log(event.target.className);
	// for (i in event.target) {
	// 	console.log(i);
	// }

	
	// targetId in this case is "list-group-item"
	var targetId = String(event.target.id);

	// TEST
	console.log('targetId:');
	console.log(targetId);

	var idNumber;
	// get id number
	if (targetId.indexOf('input-text-title') != -1) {
		idNumber = targetId.slice('input-text-title'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);
	} else if (targetId.indexOf('input-text') != -1){
		idNumber = targetId.slice('input-text'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);		
	} else if (targetId.indexOf('panel-title') != -1){
		idNumber = targetId.slice('panel-title'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);				
	} else if (targetId.indexOf('panel-heading') != -1){
		idNumber = targetId.slice('panel-heading'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);		
	} else if (targetId.indexOf('item-content') != -1) {
		idNumber = targetId.slice('item-content'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);				
	} else if (targetId.indexOf('panel-body') != -1) {
		idNumber = targetId.slice('panel-body'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);		
	} else if (targetId.indexOf('panel') != -1){
		idNumber = targetId.slice('panel'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);						
	} else if (targetId.indexOf('list-group-item') != -1) {
		idNumber = targetId.slice('list-group-item'.length, targetId.length);
		console.log('idNumber:');
		console.log(idNumber);		
	}

	// toggle target, hide all others
	$('.input-text')
		// exlude these from hide()
		.not($('#input-text' + idNumber))
		.not($('#input-text-title' + idNumber))
		// hide() everything other input-text
		.hide('slow');

	$('#input-text' + idNumber)
		// .children('.input-text')
		.show('slow');
	$('#input-text-title' + idNumber)
		// .children('.input-text')
		.show('slow');		
}

function focusNextOrPrev (event) {
	// tabkey keycode == 9
	var tabkeyCode = 9;
	var keypressCode = event.keyCode;
	// set condition
	var isToNext = (!event.shiftKey && keypressCode === tabkeyCode)
	var isToPrev = (event.shiftKey && keypressCode === tabkeyCode);	
	var isPanelBody = (event.target.name === "panelBody");
	var isPanelTitle = (event.target.name === "panelTitle");
	var isBtnAdditem = (event.target.id === "btn-additem");
	// TEST
	console.log("isPanelBody?");
	console.log(isPanelBody);
	console.log("isToNext?");
	console.log(isToNext);	
	console.log("isToPrev?");
	console.log(isToPrev);		
	console.log(event.keyCode);
	console.log(event.target);
	// for (key in event.target) {
	// 	console.log(key);
	// }
	console.log(event.target.name);

	// if tabkey, show and focus on next input-text, if available
	if (isToNext && isPanelBody) {
		console.log('yo, tab key pressed! :D');

		activateNeighbourItem(isToNext);

		// // show() next input-key
		// var currentInputKey = $('#' + event.target.id);
		// // get parent, then next sibling, then the children input-text
		// var currentParent = currentInputKey.parent();
		// // console.log("who's your single parent?");
		// // console.log(currentParent);
		// // console.log("who is her next neighbour?");
		// var parentNeighbour = currentParent.next();
		// // console.log(parentNeighbour);
		// // console.log("what about the neighbour's children?");
		// var neighbourChildren = parentNeighbour.children();
		// // console.log(neighbourChildren);
		// // console.log("show them to me!");
		// neighbourChildren.show();
		// // console.log("hide your self!");
		// currentInputKey.hide();
	}
	// if shift + tab, show and focus past input-text, if available
	if (isToPrev && isPanelTitle) {
		console.log("it's shift-Tab! :D :D :D");

		// // TEST
		// // var thisBro = $('list-group-item').has($('#' + event.target.id));
		// // console.log('Who has target?');
		// // console.log(thisBro);
		// var listItems = $('.list-group-item');
		// // console.log('listItems:');
		// // console.log(listItems);
		// for (var i=0; i < listItems.length; i++) {
		// 	console.log(i);
		// 	console.log(listItems[i]);
		// 	var listItem = listItems[i];

		// 	var hasTarget = $('#' + listItem.id)
		// 		.has($('#' + event.target.id))
		// 		// .print("has");

		// 	// if (listItem.has($('#' + event.target.id))) {
		// 	// 	console.log(listItem.id + " has " + event.target.id);
		// 	// }
		// }

		// isToNext is false
		activateNeighbourItem(isToNext);

	} 

	// if shit+tab on btn-additem
	if (isToPrev && isBtnAdditem) {
		console.log("it's shift+Tab AND btn-additem OMG");

		// show last panelTitle and panelBody
		// (make a function show last list-item)
		var lastItem = $('.list-group-item').last();
		var lastPanelTitle = lastItem.children()
			.children('.panel-heading')
			.children('.input-text');
		var lastPanelBody = lastItem.children()
			.children('.panel-body')
			.children('.input-text');

		// TEST
		console.log('listItems:');
		console.log($('.list-group-item'));
		console.log('lastItem:');
		console.log(lastItem);
		console.log('lastPanelTitle:');
		console.log(lastPanelTitle);
		console.log('lastPanelBody:');
		console.log(lastPanelBody);
		console.log('lastPanelTitle.show()!');
		console.log('lastPanelBody.show()!');

		// show them both
		lastPanelTitle.show();
		lastPanelBody.show();


		// get number of last list-group-item
		var idNumber = lastItem.id
			.slice(
				lastItem.id.indexOf('list-group-item'), 
				lastItem.id.length
			);

		// TEST
		console.log('idNumber:');
		console.log(idNumber);

		// toggle target, hide all others
		$('.input-text')
			// exlude these from hide()
			.not($('#input-text' + idNumber))
			.not($('#input-text-title' + idNumber))
			// hide() everything other input-text
			.hide('slow');

		$('#input-text' + idNumber)
			// .children('.input-text')
			.show('slow');
		$('#input-text-title' + idNumber)
			// .children('.input-text')
			.show('slow');		
	}

	// if going to next or prev input-text, show preview
	if (isToNext || isToPrev) {
		console.log('show preview!');
		// save current text

		// set and show <p>
	}
}

///////////////////////////
//	 callback functions	 //
///////////////////////////

function createListItemWithPanel(listSize) {

	listSize = String(listSize);

	// create LIST-ITEM, insert into list
	jQuery("<li class='list-group-item'/>")
		.attr("id", "list-group-item" + listSize)
		.appendTo('.list-group');
	// create PANEL, insert into list-item
	jQuery("<div/>")
		.addClass("panel panel-default list-item")
		.attr('id', 'panel' + listSize)
		.appendTo($('.list-group-item').last());
	// create PANEL-HEADING, insert into panel
	jQuery("<div/>")
		.addClass("panel-heading")
		.attr('id', 'panel-heading' + listSize)
		// .text("Panel Title" + listSize)	
		.appendTo($('.list-item').last());
	// create INPUT-TEXT-TITLE, insert into panel-heading
	jQuery("<input type='text'/>")
		.addClass("input-text")
		.attr('id', 'input-text-title' + listSize)
		.attr('name', 'panelTitle')
		.appendTo($('.panel-heading').last());
	// create PANEL-TITLE, insert into panel-heading
	jQuery("<h3/>", {
		text : "Panel title " + listSize
	})
		.attr('id', 'panel-title' + listSize)
		.addClass("panel-title")
		.appendTo($('.panel-heading').last());		
	// create PANEL-BODY, insert into panel
	jQuery("<div/>")
		.addClass("panel-body")
		.attr('id', 'panel-body' + listSize)
		.appendTo($('.list-item').last());			
	// create INPUT-TEXT, insert into panel-body
	jQuery("<textarea/>")
		.addClass("input-text")
		.attr('id', 'input-text' + listSize)
		.attr('name', 'panelBody')
		.attr('style', 'width:100%;height:150px;')
		.appendTo($('.panel-body').last());		
	// create ITEM-CONTENT, insert into panel-body
	jQuery("<div/>")
		.addClass("item-content")
		.attr('id', 'item-content' + listSize)		
		.text("Item Body " + listSize)
		.appendTo($('.panel-body').last());		
	// create PANEL-FOOTER, insert into panel
	jQuery("<div/>")
		.addClass("panel-footer")
		.attr('id', 'panel-footer' + listSize)
		.appendTo($('.list-item').last())
		.text("add comments");

	// // create LIST-ITEM, insert into list
	// jQuery("<li class='list-group-item'/>")
	// 	.attr("id", "list-group-item" + listSize)
	// 	.appendTo('.list-group');
	// // create PANEL, insert into list-item
	// jQuery("<div/>")
	// 	.addClass("panel panel-default")
	// 	.attr('id', 'panel' + listSize)
	// 	.appendTo($('.list-group-item').last());
	// // create PANEL-HEADING, insert into panel
	// jQuery("<div/>")
	// 	.addClass("panel-heading")
	// 	.attr('id', 'panel-heading' + listSize)
	// 	// .text("Panel Title" + listSize)	
	// 	.appendTo($('.panel').last());
	// // create INPUT-TEXT-TITLE, insert into panel-heading
	// jQuery("<input type='text'/>")
	// 	.addClass("input-text")
	// 	.attr('id', 'input-text-title' + listSize)
	// 	.attr('name', 'panelTitle')
	// 	.appendTo($('.panel-heading').last());
	// // create PANEL-TITLE, insert into panel-heading
	// jQuery("<h3/>", {
	// 	text : "Panel title " + listSize
	// })
	// 	.attr('id', 'panel-title' + listSize)
	// 	.addClass("panel-title")
	// 	.appendTo($('.panel-heading').last());		
	// // create PANEL-BODY, insert into panel
	// jQuery("<div/>")
	// 	.addClass("panel-body")
	// 	.attr('id', 'panel-body' + listSize)
	// 	.appendTo($('.panel').last());			
	// // create INPUT-TEXT, insert into panel-body
	// jQuery("<textarea/>")
	// 	.addClass("input-text")
	// 	.attr('id', 'input-text' + listSize)
	// 	.attr('name', 'panelBody')
	// 	.appendTo($('.panel-body').last());		
	// // create ITEM-CONTENT, insert into panel-body
	// jQuery("<div/>")
	// 	.addClass("item-content")
	// 	.attr('id', 'item-content' + listSize)		
	// 	.text("Item Body " + listSize)
	// 	.appendTo($('.panel-body').last());		
	// // create PANEL-FOOTER, insert into panel
	// jQuery("<div/>")
	// 	.addClass("panel-footer")
	// 	.attr('id', 'panel-footer' + listSize)
	// 	.appendTo($('.panel')).last()
	// 	.text("add comments");
}

///////////////////////////
//	 helper functions	 //
///////////////////////////

function activateNeighbourItem (isToNext) {
	var currentInputKey = $('#' + event.target.id);
	// get grandparent, then previous sibling, then the children input-text
	var currentParent = currentInputKey.parent().parent().parent();
	console.log("who's your single grand grand parent?");
	console.log(currentParent);
	console.log("who is her neighbour?");
	var parentNeighbour;
	var cousinInputKey;
	if (isToNext) {
		console.log("I mean who is her next neighbour?");
		parentNeighbour = currentParent.next();
	} else {
		console.log("I mean who is her previous neighbour?");
		parentNeighbour = currentParent.prev();			
	}
	console.log(parentNeighbour);
	console.log("what about the neighbour's grand grand children?");
	var neighbourChildren = parentNeighbour.children().children().children();
	console.log(neighbourChildren);
	console.log("show them to me!");
	neighbourChildren.show();
	console.log("hide your self!");

	var targetId = event.target.id;
	if (targetId.indexOf('input-text-title') != -1) {
		// target is input-text-title
		// therefore its cousin is input-text
		cousinInputKey = currentInputKey
			.parent().parent()
			.children('.panel-body').children('.input-text');
	// } else if (targetId.indexOf('btn-additem') != -1) {
	// 	// target is input-text
	// 	// therefore its cousin is input-text-title

	// 	// TEST
	// 	console.log('\n\n\n');
	// 	console.log('shiftKey:');
	// 	console.log(event.shiftKey);
	// 	console.log('targetId:');
	// 	console.log(targetId);
	// 	console.log('btn-additem on shiftKey!');
	// 	console.log('\n\n\n');

	// 	cousinInputKey = currentInputKey
	// 		.parent().parent()
	// 		.children('.panel-heading').children('.input-text');
	} else if (targetId.indexOf('input-text') != -1) {
		// target is input-text
		// therefore its cousin is input-text-title
		cousinInputKey = currentInputKey
			.parent().parent()
			.children('.panel-heading').children('.input-text');			
	} else {
		// do nothing
		return;
	}

	// hide current inputText and its cousin
	currentInputKey.hide();
	cousinInputKey.hide();
}
