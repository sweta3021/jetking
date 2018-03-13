(function($) {   

    var popup1_selectStates = $("select#popup1_selectStates"); // You need to provide the right selector for state here
    var popup1_selectCities = $("select#popup1_selectCities"); // You need to provide the right selector for city here
    var popup1_selectCenter = $("select#popup1_selectCenter");

    var selectCitiesOptionValue = [];
    var selectStatesOptionValues = {
        "Andhra Pradesh": ["Tirupati", "Vijayawada"],
        "Bagmati": ["Kathmandu"],
        "Bihar": ["Patna"],
        "Chhattisgarh": ["Durg", "Raipur*"],
        "Delhi/NCR": ["Delhi/NCR"],
        "Dhaka": ["Mirpur"],
        "Goa": ["Panajim", "Margao"],
        "Gujarat": ["Ahmedabad", "Junagadh", "Surat"],
        "Ha Noi": ["Ha Noi"],
        "Haryana": ["Bahadurgarh", "Faridabad", "Gurgaon"],
        "Himachal Pradesh": ["Hamipur", "Shimla"],
        "Ho Chi Minh": ["Ho Chi Minh City"],
        "Jammu and Kashmir": ["Jammu"],
        "Jharkhand": ["Dhanbad"],
        "Karnatka": ["Bengaluru", "Mysore"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
        "Maharashtra": ["Nashik", "Mumbai", "Thane", "Pune", "Aurangabad", "Kolhapur", "Nagpur"],
        "Odisha": ["Balasore", "Bhubneshwear"],
        "Punjab": ["Amritsar", "Chandigarh"],
        "Telangana": ["Hyderabad"],
        "Uttar Pradesh": ["Agra", "Allahabad", "Bareilly", "Ghaziabad", "Gorakhpur", "Greater Noida", "Kanpur", "Lucknow", "Meerut", "Noida", "Varanasi"],
        "West Bengal": ["Asansol", "Kolkata", "Siliguri"]
    };//end:selectStatesOptionValues

    var selectCenterOptionValue = [];
    var selectCitiesOptionValue = {
        "Tirupati": ["Jetking Tirupati Learning Center"],
        "Vijaywada": ["Jetking Vijayawada Learning Center"],
        "Kathmandu": ["Jetking Kathmandu Learning Center"]
    };//end:selectcitiesOptionValue
      
    //STEP 1: Append all the state values to the state select tag
    popup1_selectStates.empty().append(function(){
       var option = '';
       option += '<option value="">Select Your State</option>';
       $.each(selectStatesOptionValues, function(key, item) {
         
         option += '<option value="'+key+'">'+key+'</option>';       
        }); //end:each
       return option;
    });//end:append

    //STEP 2: Once a state option is selected, trigger this event
    popup1_selectStates.on('change',function(){ 
        //Retrieve the option value
        var selectedValue = $(this).val();
        selectCitiesOptionValue = [];
        $.each(selectStatesOptionValues,function(key,item){
            if(key == selectedValue){
                selectCitiesOptionValue = item;
            }
        });//end:filter
        console.log('State Selected has: ', selectCitiesOptionValue);
        //Fill all the cities inside that Array
        if(selectCitiesOptionValue){
            //STEP 3: Append all the city values to the city select tag
            popup1_selectCities.empty().append(function(){
                var option = '';
                option += '<option value="">Select Your City</option>';
                $.each(selectCitiesOptionValue, function(key, item) {
                    
                    option += '<option value="'+item+'">'+item+'</option>';             
                }); //end:each
                return option;
            });//end:append
        }//end:if
    });//end:change


    //STEP 4: Call autoload state, thereby calling the change event- thereby autoloading cities in step 2
    popup1_selectStates.change(); //prefill all the option values
    popup1_selectCities.change();
})(jQuery); //end:jQuery IIFE