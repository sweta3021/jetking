/**
 * Author: Pramod AJ
 * Created: 8th Nov 2017
 * Raysiti Animations
 * */
function validateFormInputs(formSelector,buttonSelector){
    //Remove validation msg if exists
    $(formSelector).children('p.validationMsg').remove();
    var errorMessageString = 'Please check all the input fields';
    var count = 0;
    var invalidEmail = false;
    var invalidNumber = false;
    $inputElementList = $(formSelector).find('input');
    $dropdownList = $(formSelector).find('select');
    //Step 1: Check if there are any dropdowns in the form, Iterate through each dropdown
    if($dropdownList.length>0){
        $dropdownList.each(function(index,element){
            if(!$(this).val() || $(this).val() == ''){
                count ++;
            }
        });//end:each
    }//end:if-dropdown
    //Step 2: Iterate through each input tag
    $inputElementList.each(function(index,element){
        //STEP1: Disable the submit Button
        if($(this).attr('type')=='text' || $(this).attr('type')=='number' || $(this).attr('type')=='password' || $(this).attr('type')=='email'){
            //Check for empty string
            if(!$(this).val() || $(this).val() == ''){
                count ++;
            }else{
                //Check if email input is correct
                if($(this).attr('type')=='email'){
                    invalidEmail = isValidEmailAddress($(this).val());
                }
                //Check if phone number is valid
                if($(this).attr('type')=='number'){
                    invalidNumber = isValidPhoneNumber($(this).val());
                }
            }//end:empty
        }//end:inputfields,emailfields,phonenumberfields
        //STEP2: Insert a <p> tag on top of the form with validation message
    });//end:each
    if(count > 0 || invalidEmail || invalidNumber){
        if(count>0){errorMessageString = 'All Fields are mandatory';}
        else if(invalidEmail){errorMessageString = 'Email Field is not valid';}
        else if(invalidNumber){errorMessageString = 'Phone number is not valid';}
        $(formSelector).prepend('<p class="validationMsg" style="color:red;font-style=italic;"><small>'+errorMessageString+'</small></p>');
        return false;
    }else{
        return true;
    }
}//end:validateFormInputs

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return !pattern.test(emailAddress);
}//end:isValidEmailAddress


function isValidPhoneNumber(phoneNumber){
    return isNaN(phoneNumber);
}//end:isValidatePhoneNumber