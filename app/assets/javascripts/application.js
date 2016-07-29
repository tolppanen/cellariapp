// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/typeahead
//= require foundation
//= require turbolinks
//= require_tree ../../../vendor/assets/javascripts
//= require_tree .




var displayAddBottle = false;

function toggleAddBottleField() {   
	if(!displayAddBottle) {
		document.getElementById("bottleCreator").style.display="block";
		document.getElementById("addWineButton").className="button alert";
		document.getElementById("addWineButton").innerHTML="x";
		displayAddBottle = true;
	}
	else {
		document.getElementById("bottleCreator").style.display="none";
		document.getElementById("addWineButton").className="button success";
		document.getElementById("addWineButton").innerHTML="+";
		displayAddBottle = false;
	}
}

function showReviewBox(wineId) {
	console.log("wineReviewBox" + wineId)
	// document.getElementById("drinkWineButton" + wineId).style.display = "none";
	document.getElementById("wineReviewBox" + wineId).style.display = "block";
}

function hideReviewBox(wineId) {
	console.log("wineReviewBox" + wineId)
	// document.getElementById("drinkWineButton" + wineId).style.display = "inline";
	document.getElementById("wineReviewBox" + wineId).style.display = "none";
}



var ready;


ready = function() {




	function refreshPrefetch() {

		localStorage.clear()

		var wines = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			prefetch: "../wines/api"

		});

		wines.initialize();
		console.log(wines);



		$("#prefetch .typeahead").typeahead(null, {
			displayKey: 'name',
			name: 'wine',
			source: wines,
			offset: true,
			hint: false,
			highlight: true
		}
	).on('keyup', function($e, datum) {  // suggestion selected
		console.log($('#prefetch .typeahead'));  
	})
}

refreshPrefetch();





};

$(document).ready(ready);
$(document).on('page:load', ready)


$(function(){ $(document).foundation(); });
