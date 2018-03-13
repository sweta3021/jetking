(function($) {

	var AllCities = []; // Holds the list of :@ i am hungry hotman !! :((
	// can we continue this after lunch ????? 15 mins 
	//seletState
    var selectStates = {
        "Andhra Pradesh": {
        	"value":"17",
        	"cities":[
        		{"Hyderabad":"0"}        		
        	]
        },
        "Karnataka": {
        	"value":"100",
        	"cities":[
        		{"Bangalore":"100000"}
        	]
        }        
    };

    // $.each(selectStates, function(key, value) {
    //             console.log('Key is:', key, 'Value is:',value);
    // });

    // Get the reference of select Tag - Select your state
    var $popup1_stateReference = $('select#popup1_state');
    // Get the erefere of select Tag - Select your city
    var $popup1_cityReference = $('select#popup1_city'); 
    // var $yourSecondSelectStateTag = $('select#your-second-select-id');
    // On clicking select tag - trigger a function
    $popup1_stateReference.change(function() {
    	selectCity = [];
    	//Check if select tag is empty - if yes, append
        $popup1_stateReference.empty().append(function() {
            var output = '';
            //$.each works for both objects as well as arrays
            $.each(selectStates, function(key, item) {
            	if(item.hasOwnProperty('cities')){
            		selectCity = item.cities;
            		console.log('Cities array updated:', selectCity);
            	}
                output += '<option value="'+item.value+'">'+ key + '</option>';                
            	return output;
        	});//end:each
        });//end:append
    });//end:change

    $popup1_stateReference.change();
    // $yourSecondSelectStateTag.change();
}(jQuery)); //iife

if(selectCenterOptionValue){
            //STEP 3: Append all the city values to the city select tag
            popup1_selectCenter.empty().append(function(){
                var option = '';
                option += '<option value="">Select your preferred Jetking center</option>';
                $.each(selectCenterOptionValue, function(key, item) {
                    
                    option += '<option value="'+item+'">'+item+'</option>';             
                }); //end:each
                return option;
            });//end:append
        }//end:if

popup1_selectCities.on('change',function(){ 
        //Retrieve the option value
        var selectedValue = $(this).val();
        selectCenterOptionValue = [];
        $.each(selectCitiesOptionValues,function(key,item){
            if(key == selectedValue){
                selectCenterOptionValue = item;
            }
        });//end:filter
        console.log('State Selected has: ', selectCenterOptionValue);
        //Fill all the cities inside that Array
        if(selectCenterOptionValue){
            //STEP 3: Append all the city values to the city select tag
            popup1_selectCenter.empty().append(function(){
                var option = '';
                option += '<option value="">Select your preferred Jetking center</option>';
                $.each(selectCenterOptionValue, function(key, item) {
                    
                    option += '<option value="'+item+'">'+item+'</option>';             
                }); //end:each
                return option;
            });//end:append
        }//end:if
    });//end:change