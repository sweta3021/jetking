 $('#contactForm').on('submit',function(e){
          e.preventDefault();
          var dataresult = $(this).serialize();
          var $this = $(this);
          $.ajax({
            method : 'post',
            url:'contact.php?'+dataresult,
            data: {name:$('#name').val()},
            datatype:'json',
            success:function(data){
            
            if( data.response=='error' ){
                $this.before( '<div class="alert alert-danger">'+data.message+'</div>' );
            }

            if( data.response=='success' ){

              $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
              $this.find('input, textarea').val('');
            }

            }
          });
          
        });