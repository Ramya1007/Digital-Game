$(document).ready(function() {
	//Ans Array:
	var ans = ["segregation", "theatre", "vat", "tapeta", "taxcredits", "soldiers", "nap", "nine", "netmigration", "nil", "sim", "tablespoon"];

	//Input grids insertion:
	var input_button = "<input type=button>";
	var input_text = "<input type=text minlength=1 maxlength=1 required=required>";
	var input_text_attrs = ["<input type=text minlength=1 maxlength=1 required=required placeholder=1 direction=down clues=11>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=2 direction=across clues=7>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=3 direction=across clues=3>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=4 direction=down clues=6>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=5 direction=down clues=10>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=6 direction=down clues=8>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=7 direction=across clues=3>",
							"<input type=text minlength=1 maxlength=1 required=required direction=down clues=4>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=8 direction=across clues=12>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=9 direction=across clues=3>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=10 direction=across clues=3>",
							"<input type=text minlength=1 maxlength=1 required=required placeholder=11 direction=across clues=10>"];

	$('.cw-row-1').append(input_button, input_button, input_button, input_button, input_text_attrs[0], input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-2').append(input_button, input_button, input_text_attrs[1], input_text, input_text, input_text, input_text, input_text, input_text, input_button, input_button, input_button, input_button, input_button, input_button);
	$('.cw-row-3, .cw-row-4').append(input_button, input_button, input_button, input_button, input_text, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button, input_button);
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

	//feedback display upon clicking event:
	$("#submit").click(function() {
		$(".feedback-panel").toggle('slow');
	});

	$('input[type=text]').keyup(function() {
		var Val = this.value;
		var matchFound = new RegExp(/^[a-z]+$/i);
		if (!(matchFound.test(Val))) {
			$('input[type=text]').addClass('wroMatch');
		} else {
			$('input[type=text]').addClass('corMatch').removeClass('wroMatch');
		}
	})

	//Adding 'id' attribute and auto-increment for each inpt[type=text] of all rows:
	var row1_id_nums = 5;
	$('.cw-row-1 input[type=text]').attr('id', 'row1-' + row1_id_nums);

	var row2_id_nums = 3;
	$('.cw-row-2 input[type=text]').each(function() {
		$(this).attr('id', 'row2-' + row2_id_nums);
		row2_id_nums++;
	});

	var row3_id_num = 5;
	$('.cw-row-3 input[type=text]').attr('id', 'row3-' + row3_id_num);

	var row4_id_num = 5;
	$('.cw-row-4 input[type=text]').attr('id', 'row4-' + row4_id_num);

	var row5_id_nums = 1;
	$('.cw-row-5 input[type=text]').each(function() {
		$(this).attr('id', 'row5-' + row5_id_nums);
		row5_id_nums++;
	});

	var row6_id_nums = 3;
	$('.cw-row-6 input[type=text]').each(function() {
		$(this).attr('id', 'row6-' + row6_id_nums);
		row6_id_nums++;
	});

	var row7_id_nums = 3;
	$('.cw-row-7 input[type=text]').each(function() {
		$(this).attr('id', 'row7-' + row7_id_nums);
		row7_id_nums++;
	});

	var row8_id_nums = 3;
	$('.cw-row-8 input[type=text]').each(function() {
		$(this).attr('id', 'row8-' + row8_id_nums);
		row8_id_nums++;
	});

	var row9_id_nums = 1;
	$('.cw-row-9 input[type=text]').each(function() {
		$(this).attr('id', 'row9-' + row9_id_nums);
		row9_id_nums++;
	});

	var row10_id_nums = 3;
	$('.cw-row-10 input[type=text]').each(function() {
		$(this).attr('id', 'row10-' + row10_id_nums);
		row10_id_nums++;
	});

	var row11_id_nums = 5;
	$('.cw-row-11 input[type=text]').each(function() {
		$(this).attr('id', 'row11-' + row11_id_nums);
		row11_id_nums++;
	});

	var row12_id_nums = 6;
	$('.cw-row-12 input[type=text]').each(function() {
		$(this).attr('id', 'row12-' + row12_id_nums);
		row12_id_nums++;
	});

	var row13_id_num = 7;
	$('.cw-row-13 input[type=text]').attr('id', 'row13-' + row13_id_num);

	var row14_id_nums = 2;
	$('.cw-row-14 input[type=text]').each(function() {
		$(this).attr('id', 'row14-' + row14_id_nums);
		row14_id_nums++;
	});

	//To tell the input boxes down or across:
	$('#auto-submit').click(function() {
		var rows = $('input[direction]');
		console.log(rows);
		//alert("it is working");
		var ans1_down_inputs = ["#row1-5", "#row2-5", "#row3-5", "#row4-5", "#row5-4", "#row6-4", "#row7-4", "#row8-4", "#row9-5", "#row-10-4", "#row11-5"];
		var ans1_down = ans[0];
		var ans2_across = ans[1];
		var ans3_across = ans[2];
		var ans4_down = ans[3];
		var ans5_down = ans[4];
		var ans6_down = ans[5];
		var ans7_across = ans[6];
		var ans7_down = ans[7];
		var ans8_across = ans[8];
		var ans9_across = ans[9];
		var ans10_across = ans[10];
		var ans11_across = ans[11];
		//Ans1-Down:
		$('#row1-5').val(ans1_down[0]).addClass('auto-fill-style');
		$('#row2-5').val(ans1_down[1]).addClass('auto-fill-style');
		$('#row3-5').val(ans1_down[2]).addClass('auto-fill-style');
		$('#row4-5').val(ans1_down[3]).addClass('auto-fill-style');
		$('#row5-4').val(ans1_down[4]).addClass('auto-fill-style');
		$('#row6-4').val(ans1_down[5]).addClass('auto-fill-style');
		$('#row7-4').val(ans1_down[6]).addClass('auto-fill-style');
		$('#row8-4').val(ans1_down[7]).addClass('auto-fill-style');
		$('#row9-5').val(ans1_down[8]).addClass('auto-fill-style');
		$('#row10-4').val(ans1_down[9]).addClass('auto-fill-style');
		$('#row11-5').val(ans1_down[10]).addClass('auto-fill-style');
		//Ans2-Across:
		$('#row2-3').val(ans2_across[0]).addClass('auto-fill-style');
		$('#row2-4').val(ans2_across[1]).addClass('auto-fill-style');
		$('#row2-6').val(ans2_across[3]).addClass('auto-fill-style');
		$('#row2-7').val(ans2_across[4]).addClass('auto-fill-style');
		$('#row2-8').val(ans2_across[5]).addClass('auto-fill-style');
		$('#row2-9').val(ans2_across[6]).addClass('auto-fill-style');
		//Ans3-Across:
		$('#row5-1').val(ans3_across[0]).addClass('auto-fill-style');
		$('#row5-2').val(ans3_across[1]).addClass('auto-fill-style');
		$('#row5-3').val(ans3_across[2]).addClass('auto-fill-style');
		//Ans4-Down:
		$('#row6-3').val(ans4_down[1]).addClass('auto-fill-style');
		$('#row7-3').val(ans4_down[2]).addClass('auto-fill-style');
		$('#row8-3').val(ans4_down[3]).addClass('auto-fill-style');
		$('#row9-3').val(ans4_down[4]).addClass('auto-fill-style');
		$('#row10-3').val(ans4_down[5]).addClass('auto-fill-style');
		//Ans5-Down:
		$('#row5-5').val(ans5_down[0]).addClass('auto-fill-style');
		$('#row6-5').val(ans5_down[1]).addClass('auto-fill-style');
		$('#row7-5').val(ans5_down[2]).addClass('auto-fill-style');
		$('#row8-5').val(ans5_down[3]).addClass('auto-fill-style');
		$('#row9-7').val(ans5_down[4]).addClass('auto-fill-style');
		$('#row10-5').val(ans5_down[5]).addClass('auto-fill-style');
		$('#row11-6').val(ans5_down[6]).addClass('auto-fill-style');
		$('#row12-7').val(ans5_down[7]).addClass('auto-fill-style');
		$('#row13-7').val(ans5_down[8]).addClass('auto-fill-style');
		$('#row14-7').val(ans5_down[9]).addClass('auto-fill-style');
		//Ans6-Down:
		$('#row5-6').val(ans6_down[0]).addClass('auto-fill-style');
		$('#row6-6').val(ans6_down[1]).addClass('auto-fill-style');	
		$('#row7-6').val(ans6_down[2]).addClass('auto-fill-style');	
		$('#row8-6').val(ans6_down[3]).addClass('auto-fill-style');	
		$('#row9-10').val(ans6_down[4]).addClass('auto-fill-style');	
		$('#row10-6').val(ans6_down[5]).addClass('auto-fill-style');
		$('#row11-7').val(ans6_down[6]).addClass('auto-fill-style');
		$('#row12-9').val(ans6_down[7]).addClass('auto-fill-style');
		//Ans7-Across:
		$('#row7-7').val(ans7_across[0]).addClass('auto-fill-style');
		$('#row7-8').val(ans7_across[1]).addClass('auto-fill-style');
		$('#row7-9').val(ans7_across[2]).addClass('auto-fill-style');
		//Ans7-Down:
		$('#row8-7').val(ans7_down[1]).addClass('auto-fill-style');
		$('#row9-12').val(ans7_down[2]).addClass('auto-fill-style');
		$('#row10-7').val(ans7_down[3]).addClass('auto-fill-style');
		//Ans8-Across:
		$('#row9-1').val(ans8_across[0]).addClass('auto-fill-style');
		$('#row9-2').val(ans8_across[1]).addClass('auto-fill-style');
		$('#row9-4').val(ans8_across[3]).addClass('auto-fill-style');
		$('#row9-6').val(ans8_across[5]).addClass('auto-fill-style');
		$('#row9-8').val(ans8_across[7]).addClass('auto-fill-style');
		$('#row9-9').val(ans8_across[8]).addClass('auto-fill-style');
		$('#row9-11').val(ans8_across[10]).addClass('auto-fill-style');
		//Ans9-Across:
		$('#row12-6').val(ans9_across[0]).addClass('auto-fill-style');
		$('#row12-8').val(ans9_across[2]).addClass('auto-fill-style');
		//Ans10-Across:
		$('#row12-10').val(ans10_across[1]).addClass('auto-fill-style');
		$('#row12-11').val(ans10_across[2]).addClass('auto-fill-style');
		//Ans11-Across:
		$('#row14-2').val(ans11_across[0]).addClass('auto-fill-style');
		$('#row14-3').val(ans11_across[1]).addClass('auto-fill-style');
		$('#row14-4').val(ans11_across[2]).addClass('auto-fill-style');
		$('#row14-5').val(ans11_across[3]).addClass('auto-fill-style');
		$('#row14-6').val(ans11_across[4]).addClass('auto-fill-style');
		$('#row14-8').val(ans11_across[6]).addClass('auto-fill-style');
		$('#row14-9').val(ans11_across[7]).addClass('auto-fill-style');
		$('#row14-10').val(ans11_across[8]).addClass('auto-fill-style');
		$('#row14-11').val(ans11_across[9]).addClass('auto-fill-style');
	});
});