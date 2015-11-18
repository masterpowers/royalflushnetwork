$(document).ready(function() {

	 function pageloader(v){
      if(v == 'on'){
        $('#search_form').css({
          opacity : 0.2
        });
        $('#pageloader').show();
      }else{
        $('#search_form').css({
          opacity : 1
        });
        $('#pageloader').hide();
      }
    }

    var base_url = window.location.origin;

    function authenticated(url)
   {
      window.location = url;
   }

	$('#passwordreset_form').on('submit', function(e){

            e.preventDefault();
            var passwordReset = $('#passwordreset_form').serializeArray();
            var url = $('#passwordreset_form').attr('action');
            pageloader('on');
            
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: passwordReset,
                success:function(data)
                {
                    pageloader('off');
  
                    Materialize.toast(data.message, 4000,'',function(){console.log(data.message);});

                    authenticated(base_url);

                },
                error:function(data)
                {
                    pageloader('off');
                   
                    var errors = data.responseJSON;

                    $.each(errors.errors, function(index, error) 
                    {
                        Materialize.toast(error, 4000,'',function(){console.log(error);});
                    });
                    
                }
                });
      
    });   

    $('#pass_recovery').on('submit', function(e){

                e.preventDefault();
                var dataPass = $('#pass_recovery').serializeArray();
                var url = $('#pass_recovery').attr('action');
                pageloader('on');
                
                $.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: dataPass,
                    success:function(data)
                    {
                        pageloader('off');
      
                        Materialize.toast(data.message, 4000,'',function(){console.log(data.message);});

                        authenticated(base_url);
                    },
                    error:function(data)
                    {
                        pageloader('off');
                       
                        var errors = data.responseJSON;

                        $.each(errors.errors, function(index, error) 
                        {
                            Materialize.toast(error, 4000,'',function(){console.log(error);});
                        });
                        
                    }
                    });
          
        });  




});