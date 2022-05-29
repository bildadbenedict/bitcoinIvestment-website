

/*Calculator*/


$(function(){

	calc();

	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);

});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount<125):
					percent = 0;
					break;
				case (amount<=20000):
					percent = 114;
					break;
				default:
					percent = 114;
			}
			break;

	}

	$('#assign_per').val(percent+'%');
	var total = amount*percent/100;
	$('#total_return').val('$'+total);
	$('#net_profit').val('$'+(total-amount).toFixed(2));

}
