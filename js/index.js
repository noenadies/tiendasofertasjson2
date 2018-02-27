 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});






 
var Productos;
var Tiendas;
function myFunction() {
    // body...
 Productos= document.getElementById("Productos").value;
 Tiendas= document.getElementById("Tiendas").value;
    //alert(Productostos);

 
  //if(Tiendas!=""&& Productos!=""){  ajaxProductostienda();}
 if(Productos!=""&&Tiendas==""){  ajazProductos();}

 if(Tiendas!="" &&Productos==""){  ajaxTiendas();}


    

}

function ajaxProductostotienda(){


  $.ajax({
               
                url:   'mi.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/

                      
                        var as=Object.keys(data.Productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                   if (data.productos[i].Productostos==Tiendas){
  
  if (data.productos[i].Productostos==Productostos){

window.location =data.productos[i].Web;

                    }
                    }

                  

                   }




                       
                }
        });



}

function ajazProductos(){
  $.ajax({
               
                url:   'miproductos.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/

                      
                        var as=Object.keys(data.productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.productos[i].Productos==Productos){

window.location =data.productos[i].Web;
                    }
                    

                  

                   }




                       
                }
        });
}







function ajaxTiendas(){
  $.ajax({
               
                url:   'mitiendas.json',
                 dataType:  'json',
                type:  'get',
                cache:false,
                success:  function (data) {
                     /*   $(data.inicio).each(function(index,vales){
                           console.log(data.inicio[0]);

data.inicio[i].Tiendasword
                        }) ;
                      //  j=data.inicio.uno;*/

                      
                        var as=Object.keys(data.tiendas);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.tiendas[i].Tiendas==Tiendas){

window.location =data.tiendas[i].Web;
                    }
                    

                  

                   }




                       
                }
        });
}






