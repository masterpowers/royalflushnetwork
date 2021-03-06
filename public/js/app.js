(function($){
  $(function(){
    $.ajaxSetup({
  headers: {
  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  });



 $('#pwd1').on('blur', function(e){
     ReactivatePassConfirm();
  }); 

  $('#pwd2').on('blur', function(e) {
     ValidatePassword();
   });

   $('#pwd2').on('keyup', function(e) {
     ValidatePassword();
   });
function ValidatePassword(){
       
        
        console.log(passwordVal == checkVal && checkVal.length > 8);
        if (passwordVal == checkVal && checkVal.length > 8) {
              pwc.attr("class", "valid");
              rsubmit.attr("disabled", false);
          }else{
              pwc.attr("class", "invalid");
              rsubmit.attr("disabled", true);
              }
      } 




      function loader(v){
      if(v == 'on'){
        $('#login_form').css({
          opacity : 0.2
        });
        $('#loginloader').show();
      }else{
        $('#login_form').css({
          opacity : 1
        });
        $('#loginloader').hide();
      }
    };

    function authenticated(url){
      window.location = url;
    };


   $('#sign_in').on('click', function(e){

            e.preventDefault();
            var login_form = $('#login_form').serializeArray();
            var url = $('#login_form').attr('action');
            loader('on');
            

            $.post(url, login_form, function(data){
              loader('off');
             
              if(data == "notregister"){                    
                    $('#loginloader').addClass('red').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("red");
                    });
                    
                    Materialize.toast('Invalid Credentials', 4000,'',function(){console.log('Invalid Credentials')});
                   
                    $( "input[name='email']" ).val('');
                    $('#login_email').removeClass("valid");
                    $('#login_email').removeClass("invalid");

                    $( "input[name='password']" ).val('');
                    $('#login_password').removeClass("valid");
                    $('#login_password').removeClass("invalid");

                   
              }else if(data == "wrongpass"){           
                    $('#loginloader').addClass('orange').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("orange");
                    });

                    Materialize.toast('Re-Type Correct Password', 4000,'',function(){console.log('Password is Incorrect')});

                    $( "input[name='email']" ).val();
                    $( "input[name='password']" ).val('');
                    $('#login_password').removeClass("valid");
                    $('#login_password').removeClass("invalid");
                  
              }else if(data == "notactive"){
                    $('#loginloader').addClass('yellow').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("yellow");  
                    });

                    Materialize.toast('Verify Your Email!', 4000,'',function(){console.log('Verify Your Email!')});

                    authenticated('profile');

              }else if(data == "banned"){
                    $('#loginloader').addClass('black').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("black");
                    });

                    Materialize.toast('Account is Banned!', 4000,'',function(){console.log('Account is Banned!')});

                    $( "input[name='email']" ).val();
      
                    $( "input[name='password']" ).val('');
                    $('#login_password').removeClass("valid");
                    $('#login_password').removeClass("invalid");

              }else if(data == "success") {
                    $('#loginloader').addClass('green').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("green");
                    });

                    Materialize.toast('Welcome Back!', 4000,'',function(){console.log('Welcome Back!')});

                    authenticated('profile');

              }else{
                    $('#loginloader').addClass('grey').fadeIn(2000, function(){
                        $(this).hide();
                        $(this).removeClass("grey");
                    });

                    Materialize.toast('OOPS! Something Went Wrong!', 4000,'',function(){console.log('OOPS! Something Went Wrong!')});
                    
                    $( "input[name='email']" ).val('');
                    $('#login_email').removeClass("valid");
                    $('#login_email').removeClass("invalid");

                    $( "input[name='password']" ).val('');
                    $('#login_password').removeClass("valid");
                    $('#login_password').removeClass("invalid");
                    

                }
              
            });
    });



    });// end of document ready

    

   
})(jQuery); // end of jQuery name space



    
