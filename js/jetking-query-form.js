
  $(document).ready(function () {
    $("#modal-button").click(function () {
     $('#popupOne').modal('show');
   });

    $("#footer-f-btn").click(function () {
     $('#popupOne').modal('show');
   });

    $("#popup1_state").change(function()
    {

     var id=$(this).val();
     $.ajax
     ({
      type: "POST",
      url: "http://www.jetking.com/landing.php",
      data : {'id':id,'action':'get_city'},
      cache: false,
      success: function(data)
      { 
       $("#popup1_city").html(data);

     } 
   });
   });

    $("#popup_state").change(function()
    {

     var id=$(this).val();
     $.ajax
     ({
      type: "POST",
      url: "http://www.jetking.com/landing.php",
      data : {'id':id,'action':'get_city'},
      cache: false,
      success: function(data)
      { 
       $("#popup_city").html(data);

     } 
   });
   });


    $("#download_state").change(function()
    {

     var id=$(this).val();
     $.ajax
     ({
      type: "POST",
      url: "http://www.jetking.com/landing.php",
      data : {'id':id,'action':'get_city'},
      cache: false,
      success: function(data)
      { 
       $("#download_city").html(data);

     } 
   });
   });
    
    $("#enqmainform_state").change(function()
    {

     var id=$(this).val();
     $.ajax
     ({
      type: "POST",
      url: "http://www.jetking.com/landing.php",
      data : {'id':id,'action':'get_city'},
      cache: false,
      success: function(data)
      { 
       $("#enqmainform_city").html(data);

     } 
   });
   });		

    $("#popup1_city").change( function (){
     var id = $(this).val();
     $.ajax({
      type: "GET",
      url: "http://www.jetking.com/landing.php?action=get_center",
      data : {'id':id},
      cache: false,
      success: function(html)
      {

       $("#popup1_center").html();
       $("#popup1_center").html(html);
     } 
   });
   }); 

    $("#download_city").change( function (){
     var id = $(this).val();
     $.ajax({
      type: "GET",
      url: "http://www.jetking.com/landing.php?action=get_center",
      data : {'id':id},
      cache: false,
      success: function(html)
      {

       $("#download_center").html();
       $("#download_center").html(html);
     } 
   });
   }); 


    $("#popup_city").change( function (){
     var id = $(this).val();
     $.ajax({
      type: "GET",
      url: "http://www.jetking.com/landing.php?action=get_center",
      data : {'id':id},
      cache: false,
      success: function(html)
      {

       $("#popup_center").html();
       $("#popup_center").html(html);
     } 
   });
   }); 
    
    $("#enqmainform_city").change( function (){
     var id = $(this).val();
     $.ajax({
      type: "GET",
      url: "http://www.jetking.com/landing.php?action=get_center",
      data : {'id':id},
      cache: false,
      success: function(html)
      {

       $("#enqmainform_center").html();
       $("#enqmainform_center").html(html);
     } 
   });
   }); 

  });
  
  
  
  function save_landing_pageinfo(elm){


   if (elm == 'popup1') {
     var first_name = $('#popup1_first_name').val();
     var mobileno = $('#popup1_mobileno').val();
     var emailid = $('#popup1_emailid').val();
     var state = $('#popup1_state').val();
     var city  = $('#popup1_city').val(); 
     var center = $('#popup1_center').val();
     var captcha = $('#popup1_captcha').val();
   } else if (elm == 'enqmainform') {
    var first_name = $('#enqmainform_first_name').val();
    var mobileno = $('#enqmainform_mobileno').val();
    var emailid = $('#enqmainform_emailid').val();
    var state = $('#enqmainform_state').val();
    var city  = $('#enqmainform_city').val(); 
    var center = $('#enqmainform_center').val();
    var captcha = $('#enqmainform_captcha').val();
  } else if (elm == 'download') {
    var first_name = $('#download_first_name').val();
    var mobileno = $('#download_mobileno').val();
    var emailid = $('#download_emailid').val();
    var state = $('#download_state').val();
    var city  = $('#download_city').val(); 
    var center = $('#download_center').val();
    var captcha = $('#download_captcha').val(); 
  } else {
    var first_name = $('#popup_first_name').val();
    var mobileno = $('#popup_mobileno').val();
    var emailid = $('#popup_emailid').val();
    var state = $('#popup_state').val();
    var city  = $('#popup_city').val(); 
    var center = $('#popup_center').val();
    var option = $('#popup_option').val();
    var captcha = $('#popup_captcha').val();
  }

  // var captcha = ((elm == 'popup1') ? getCookie("key") : (elm == 'enqmainform') ? getCookie("key") : (elm == 'popup') ? getCookie("key") : (elm == 'download') ? getCookie("key") : $('#captcha').val());




  if(first_name==''){

   alert('Please enter first name.');
   $('#first_name').focus();
   return false;

 }
        		/*if(last_name==''){

        			alert('Please enter last name.');
        			$('#last_name').focus();
        			return false;

        		}*/
        		if(emailid==''){

        			alert('Please enter emailid.');
        			$('#emailid').focus();
        			return false;

        		}
        		

        		var e  = validateEmail(emailid);

        		if(!e){

        			alert('Please enter valid emailid.');
        			$('#emailid').focus();
        			return false;

        		}
        		if(mobileno.length!='10'){

        			alert('Please enter 10 digit number.');
        			$('#mobileno').focus();
        			return false;

        		}
        		if(isNaN(mobileno)){

        			alert('Please enter 10 digit number.');
        			$('#mobileno').val('');
        			$('#mobileno').focus();
        			return false;

        		}
        		if(state==''){

        			alert('Please enter state field.');
        			$('#state').focus();
        			return false;

        		}
        		if(city==''){

        			alert('Please enter city field.');
        			$('#city').focus();
        			return false;

        		}
        		if(center==''){

        			alert('Please enter center field.');
        			$('#center').focus();
        			return false;

        		}
        		if(option==''){
              alert('Please select an option');
              $('#popup_option').focus();
              return false;
            }
            var key = getCookie("key");
            if(captcha != ''){
             if(key != captcha){
              document.getElementById("captcha").focus();
              alert('Please enter correct text');
              return false;
            } else {


              if(first_name!="" && emailid!="" && mobileno!="")
              {
               var selectedcenter=$("#center option:selected").text();
               var current_url=$('#current_url').val();

               var locname =  "";

               var tags = ['general'];    
               webToLeadData = {
                'firstname': first_name,
                'email': emailid,
                'mobile': mobileno,
                'tags': tags,
                'cstm_jetking_center':selectedcenter,
                'cstm_current_url':current_url,
                'cstm_locality': locname,
              }

              if (elm == 'download') {

                MTI.webToLead(webToLeadData, 
                  function() { 
                     window.open("http://www.jetking.com/landing-assets/pdf/Jetking_Prospectus_2016_lowresoforweb.pdf", '_blank');
                     submitForm(elm); 
                   }, 
                   function() { 
                     window.open("http://www.jetking.com/landing-assets/pdf/Jetking_Prospectus_2016_lowresoforweb.pdf", '_blank');
                     submitForm(elm); 
                     console.log("There was an error saving the lead to the marketing automation system. "); 
                   }
                );
              }
              else{
                 MTI.webToLead(webToLeadData, 
                  function() { 
                     submitForm(elm); 
                   }, 
                   function() { 
                     submitForm(elm); 
                     console.log("There was an error saving the lead to the marketing automation system. "); 
                   }
                );
              }

            }

            return false;

          }

        }else{
         document.getElementById("captcha").focus();
         alert('Please enter the text');
         return false;
       }

       return false;

     }

function submitForm(elm) { // submits form
	document.getElementById(elm).submit();
}


function validateEmail(email) {

	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	return re.test(email);

}
function isAlfa(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122) && (charCode < 37 || charCode > 40)) {
		return false;
	}
	return true;
}

function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 37 || charCode > 40)) {
		return false;
	}
	return true;
}
function getCookie(name)
{
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}





