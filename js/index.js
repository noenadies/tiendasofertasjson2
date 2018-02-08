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

  alert(Tiendas);
  //if(Tiendas!=""&& Productos!=""){  ajaxProductostienda();}
 if(Productos!=""&&Tiendas==""){  alert(4444444);ajazProductos();}

 if(Tiendas!="" &&Productos==""){  alert("tiendas");ajaxTiendas();}


    

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
alert("buscando");
                      
                        var as=Object.keys(data.Productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                   if (data.productos[i].Productostos==Tiendas){
  
  if (data.productos[i].Productostos==Productostos){
alert(data.productos[i].Web);
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
alert("buscando11");
                      
                        var as=Object.keys(data.productos);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.productos[i].Productos==Productos){
alert(data.productos[i].Web);
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
alert("buscando11ttt");
                      
                        var as=Object.keys(data.tiendas);
                   

  
                   for(var i=0; i<as.length;i=i+1){
                 
  
  if (data.tiendas[i].Tiendas==Tiendas){
alert(data.tiendas[i].Web);
window.location =data.tiendas[i].Web;
                    }
                    

                  

                   }




                       
                }
        });
}






