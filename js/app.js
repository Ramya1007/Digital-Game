$(document).ready(function() {
	//Ans Array:
	var ans = ["segregation", "theatre", "vat", "tapeta", "taxcredits", "soldiers", "nap", "nine", "netmigration", "nil", "sim", "tablespoon"];

	//Input grids insertion:
	var input_button = "<input type=button>";
	var input_text = "<input type=text minlength=1 maxlength=1 required=required>";
	var input_text_attrs = ["<input id=row1-5 type=text minlength=1 maxlength=1 required=required placeholder=1 direction=down clues=11>",
							"<input id=row2-3 type=text minlength=1 maxlength=1 required=required placeholder=2 direction=across clues=7>",
							"<input id=row5-1 type=text minlength=1 maxlength=1 required=required placeholder=3 direction=across clues=3>",
							"<input id=row5-3 type=text minlength=1 maxlength=1 required=required placeholder=4 direction=down clues=6>",
							"<input id=row5-7 type=text minlength=1 maxlength=1 required=required placeholder=5 direction=down clues=10>",
							"<input id=row5-10 type=text minlength=1 maxlength=1 required=required placeholder=6 direction=down clues=8>",
							"<input id=row7-12a type=text minlength=1 maxlength=1 required=required placeholder=7 direction=across clues=3>",
							"<input id=row7-12d type=text minlength=1 maxlength=1 required=required direction=down clues=4>",
							"<input id=row9-1 type=text minlength=1 maxlength=1 required=required placeholder=8 direction=across clues=12>",
							"<input id=row12-6 type=text minlength=1 maxlength=1 required=required placeholder=9 direction=across clues=3>",
							"<input id=row12-10 type=text minlength=1 maxlength=1 required=required placeholder=10 direction=across clues=3>",
							"<input id=row14-2 type=text minlength=1 maxlength=1 required=required placeholder=11 direction=across clues=10>"];

	$('.cw-row-1').append(input_button, input_button, input_button, input_button, input_text_attrs[0], input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-2').append(input_button, input_button, input_text_attrs[1], input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-3').append(input_button, input_button, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-5').append(input_text_attrs[2], input_text, input_text_attrs[3], input_button, input_text, input_button, input_text_attrs[4], input_button, input_button, input_text_attrs[5], input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-6').append(input_button, input_button, input_text, input_button, input_text, input_button, input_text, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-7').append(input_button, input_button, input_text, input_button, input_text, input_button, input_text, input_button, input_button, input_text, input_button, input_text_attrs[6], input_text, input_text, input_button);
	$('.cw-row-8').append(input_button, input_button, input_text, input_button, input_text, input_button, input_text, input_button, input_button, input_text, input_button, input_text, input_button, input_button, input_button);
	$('.cw-row-9').append(input_text_attrs[8], input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button);
	$('.cw-row-10').append(input_button, input_button, input_text, input_button, input_text, input_button, input_text, input_button, input_button, input_text, input_button, input_text, input_button, input_button, input_button);
	$('.cw-row-11').append(input_button, input_button, input_button, input_button, input_text, input_button, input_text, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-12').append(input_button, input_button, input_button, input_button, input_button, input_text_attrs[9], input_text, input_text, input_button, input_text_attrs[10], input_text, input_text, input_button, input_button, input_button);
	$('.cw-row-13').append(input_button, input_button, input_button, input_button, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-14').append(input_button, input_text_attrs[11], input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button, input_button);
	$('.cw-row-15').append(input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);

	//CSS classes added to below types of input fields:
	$('input[type=text]').addClass('row-boxes');
	$('input[type=button]').addClass('row-boxes cw-grayed');

	//Across clues insertion:
	var clues_across = ["2. It is a name for cinema or activity halls",
						"3. A short form for value added tax",
						"7. Which is a palindrome for pan!",
						"8. It is the difference between the number of immigrants and the number of emigrants throughout the year!",
						"9.	A word to say if the value is zero",
						"10. It is used in GSM mobile phones to make it easier to switch between networks!",
						"11. It is a cutlery, measures 15 ml of liquid measurement!"];

	$("#clue2").append(clues_across[0]);
	$("#clue3").append(clues_across[1]);
	$("#clue7a").append(clues_across[2]);
	$("#clue8").append(clues_across[3]);
	$('#clue9').append(clues_across[4]);
	$('#clue10').append(clues_across[5]);
	$('#clue11').append(clues_across[6]);

	//Down clues insertion:
	var clues_down = ["1. Synonym for separation when we categorize things!",
					"4. This is a finest synthetic material used for the track surface of a horse racing track!",
					"5. It is a type of benifit helps to pay less tax! for ex. who responsible for kids or on low income",
					"6. They safeguard respective citizens and countries border",
					"7. Traditional planets in Solar system quantity"];

	$("#clue1").append(clues_down[0]);
	$("#clue4").append(clues_down[1]);
	$("#clue5").append(clues_down[2]);
	$("#clue6").append(clues_down[3]);
	$("#clue7d").append(clues_down[4]);

	//feedback display upon clicking event:
	$("#submit").click(function() {
		$(".feedback-panel").toggle('slow');
	});

	//To retain the toggled content open:
	/*$(".feedback-panel").toggle('slow', function() {
		$('.feedback-panel').css("display", "block");
	});*/

	//To match string:
	/*var textBoxes = $('input[type=text]');
	//var strPattern = /[a-z]{1}/i;
	var matchFound = textBoxes.match(/^[a-z]{1}/i);
	if (!(matchFound)) {
		$('textBoxes').css("border", "1px #f00 solid");
	}*/
	$('input[type=text]').keyup(function() {
		var Val = this.value;
		var matchFound = new RegExp(/^[a-z]+$/i);
		if (!(matchFound.test(Val))) {
			$('input[type=text]').addClass('wroMatch');
		} else {
			$('input[type=text]').addClass('corMatch').removeClass('wroMatch');
		}
	})

	//To tell the input boxes down or across:
	$('#auto-submit').click(function() {
		var rows = $('input[direction]');
		console.log(rows);
	});
	//console.log(ans[0][0]);

	//Adding 'id' attribute for each inpt[type=text]:
	/*$('div.cw-row-13 input[type=text]').each(function(i) {
		$(this).attr('id', 'row13' + i);
	});*/
	var row2_id_nums = 3;
	$('.cw-row-2 input[type=text]').attr('id', 'row2-' + row2_id_nums);
	++row2_id_nums;

	var row13IdNum = 7;
	$('.cw-row-13 input[type=text]').attr('id', 'row13-' + row13IdNum);
});