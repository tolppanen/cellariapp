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
//= require foundation
//= require turbolinks
//= require twitter/typeahead
//= require_tree .

$(function(){ $(document).foundation(); });



var displayAddBottle = false;

function toggleAddBottleField() {   
	if(!displayAddBottle) {
		document.getElementById("bottleCreator").style.display="block";
		displayAddBottle = true
	}
	else {
		document.getElementById("bottleCreator").style.display="none";
		displayAddBottle = false
	}
}

function showReviewBox(wineId) {
	console.log("wineReviewBox" + wineId)
	document.getElementById("drinkWineButton" + wineId).style.display = "none";
	document.getElementById("wineReviewBox" + wineId).style.display = "block";
}



  var ready;
  ready = function() {



var wines = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: "../wines.json"

});

 wines.initialize();
console.log(wines);


// var numbers = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.obj.whitespace(' '),
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   local: [
//     { num: 'one' },
//     { num: 'two' },
//     { num: 'three' },
//     { num: 'four' },
//     { num: 'five' },
//     { num: 'six' },
//     { num: 'seven' },
//     { num: 'eight' },
//     { num: 'nine' },
//     { num: 'ten' }
//   ]
// });

// console.log(numbers);


$("#prefetch .typeahead").typeahead(null, {
  displayKey: 'name',
  name: 'wine',
  source: wines
});



setInterval(function(){ console.log($('.typeahead').typeahead('val')); }, 1000);


};

$(document).ready(ready);
$(document).on('page:load', ready)




// var wines = new Bloodhound({
//   datumTokenizer: Bloodhound.tokenizers.whitespace,
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   // url points to a json file that contains an array of country names, see
//   // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
//   prefetch: '../wines.json'
// });

// var wines = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//   'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
//   'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
//   'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
//   'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//   'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
//   'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
// ];

// $('#prefetch .typeahead').typeahead(null, {
//   name: 'wines',
//   source: wines
// });