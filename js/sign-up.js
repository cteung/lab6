//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    var stateSelect = $(".us-states");
    var option;
    usStates.forEach(function(state){
    	option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
    });

    $('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    if(addr1Value.length > 0){
		    var zipInput = signupForm.find('input[name="zip"]');
		    var zipValue = zipInput.val();
		    if(zipValue.length == 0){
		    	alert("ZIP must be entered with address")
		    	return false;
		    }
	    }
	});

	$('.cancel-signup').click(function(){
	    //code to run when user clicks "No Thanks!" button
	    //show the modal confirmation dialog
	    //and don't reset window.location until the user clicks
	    //the "Yes, Get Me Out of Here!" button
	    $('.cancel-signup-modal').modal();
	}); //cancel-signup click

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});
                    
}); //on document ready 