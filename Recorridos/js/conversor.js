var texto="";
var texto2="";
var arrayprefijo= [];
var opcion1, opcion2;
var op1,op2;
var res;
var comparacion;
var post;
var compArrayPost;
var arraypost= [];
var a;
var comp;

function valor(){///COMPARACION DE SIMBOLOS SE ARROGA UN BOOLEANO PARA SABER QUE HACER
//alert("ingrese");
//alert(texto2+texto);
switch(op1){
    case "+":
        opcion1=1;
        break;
    case "-":
        opcion1=1;
        break;
     case "*":
        opcion1=2;
         break;
     case "/":
        opcion1=2;
         break;
     case "^":
         opcion1=3;
         break;
     case "(":
         opcion1=4;
         break;
     case ")":
         opcion1=4;
         break;     
}

switch(op2){
    case "+":
        opcion2=1;
        break;
    case "-":
        opcion2=1;
        break;
     case "*":
        opcion2=2;
         break;
     case "/":
        opcion2=2;
         break;
     case "^":
         opcion2=3;
         break;
     case "(":
         opcion2=4;
         break;
     case ")":
         opcion2=4;
         break; 
}

 comparacion = opcion1>= opcion2;
  return comparacion
}


var prefijo = function (){
    
    var pre = document.getElementById("expresion").value;
    //console.log(pre);
    //document.getElementById("res").innerHTML= pre; COMO SE PASA EL VALOR DE JAVASCRIPT A HTML
    
    for ( index = pre.length-1; index >= 0; index--) 
        {//RECORRIDO DEL VALOR OBTENIDO
            const element = pre.charAt(index);
        //console.log(element);
        
            if(element== "/" || element=="*" || element== "+" || element=="-"|| element== "^"|| element== "("|| element== ")")
            {
                //texto = texto + element;
                // alert("es un caracter especial");
                if(element=="(")
                {
                    //alert("entro a parentesis")
                    for(i = arrayprefijo.length-1; i>=0; i--)
                     {
                         if(arrayprefijo[i]==")"){

                            //alert(arrayprefijo[i-1]);

                            if(arrayprefijo[i-1]==")"){

                                arrayprefijo.splice(i,1);
                                i=-1;
                               // alert("se rompe")
                            }     
                            //alert("sale de los parentesis")
                         }else{
                            texto=texto + arrayprefijo[i];
                           // alert("cyanro " +texto);
                            arrayprefijo.splice(i,1);
                         }                     
                     }

                }else
                {
                    //alert("elemntooasd" + element);
                    conArray= arrayprefijo.length;
                    //alert("PILA VALE" + conArray);
                    if(conArray==0)
                    {
                    arrayprefijo.push(element);
                    //alert("se agrega a la pila " + element)
                    }else
                        {
                            final = arrayprefijo.length;
                            //alert("final vale" + final);
                            op1 = element;
                            op2 = arrayprefijo[final-1];
                            res = valor();
                            //alert(res+" aqui es mayor");
                             if(res==false)
                                {   
                                    //alert("aqui elememyo vale "+ element);
                                    if(op2==")"){
                                        arrayprefijo.push(element);
                                       // alert("cuanto vale emento " + element);
                                    }else
                                    {
                                            // alert("entra cuando no es mayor");
                                            //alert(texto);
                                            texto= texto+op2;
                                            //alert(texto);
                                            arrayprefijo.splice(final-1,1);
                                            final = arrayprefijo.length;
                                             //alert("cuando se elimina por ser mayor"+ final);
    
                                                if(final==0)
                                                     {
                                                         arrayprefijo.push(element);
                                                       // alert("se agrega a la pila al vaciar pila " + element)
                                                     }else
                                                     {
                                              for(i = arrayprefijo.length-1; i>=0; i--)
                                              {
                                                   // alert("siclo");
                                                     final = arrayprefijo.length;
                                                   // alert("pila v " + final);
                                                    op1 = element;
                                                   // alert(element);
                                                    op2 = arrayprefijo[final-1];
                                                     res = valor();
                                                 if(res==true)
                                                {
                                                    arrayprefijo.push(element);
                                                   //  alert("siclo2");
                                                 }else
                                                { if(op2==")"){
                                                    arrayprefijo.push(element);
                                                    i=-1;
                                                }else{
                                                   // alert("aqui merongas");
                                                    texto= texto+op2;
                                                     arrayprefijo.splice(final,1);
                                                     op2 = arrayprefijo[final];

                                                }

                                                     
                                                }
                                         }          
                                    }

                                    }
                                                                                                                   
                                }else
                                {
                                   // alert("se agrega a la pila qwe " + element)
                                    arrayprefijo.push(element);
                                }
                   } 
                }                      
            }else
            {   
               // alert("cuanto vale la cadena "+texto);
                texto = texto + element;
              //  alert("cuanto vale la cadena ahora "+texto);
                if(index==0)
                 {
                for(i = arrayprefijo.length-1; i>=0; i--)
                {    
                  if(arrayprefijo[i]==")")
                  {

                  } else{
                    texto=texto + arrayprefijo[i];
                    arrayprefijo.splice(i,1);}
                }
            }
            }
        //document.getElementById("resp").innerHTML= texto;      
        }

    for ( index = texto.length-1; index >= 0; index--)
    {
         element = texto.charAt(index);
         texto2 = texto2+element;
    }
        
document.getElementById("resultadoPrefijo").innerHTML= texto2; 
texto2="";
texto="";
arrayprefijo= [];
}

var postfija= function()
{
    //alert("aqui estoy");
    post = document.getElementById("expresion").value;    
        for ( index = 0; index <= post.length-1; index++)
        {
            element = post.charAt(index);
            //alert("numero de pasadas" + index +""+ element);
                if(element== "/" || element=="*" || element== "+" || element=="-"|| element== "^"|| element== "("|| element== ")")
                {


                    if(element==")")
                    {
                    //alert("entro a parentesis")
                    for(i = arraypost.length-1; i>=0; i--)
                     {
                         if(arraypost[i]=="("){

                            //alert(arrayprefijo[i-1]);

                            if(arraypost[i-1]=="("){

                                arraypost.splice(i,1);
                                i=-1;
                               // alert("se rompe")
                            }     
                            //alert("sale de los parentesis")
                         }else{
                            texto=texto + arraypost[i];
                           // alert("cyanro " +texto);
                            arraypost.splice(i,1);
                         }                     
                     }
                    }else
                    {
                                        
                   // alert(element);
                    compArrayPost= arraypost.length;
                   // alert("cuanto vake" + compArrayPost);
                    if(compArrayPost==0)
                    {
                    arraypost.push(element);
                    //alert("sea grego un elemento a pila 0")
                    }else
                    {
                    final = arraypost.length;
                    // alert("final vale" + final);
                    op1 = arraypost[final-1];
                    op2 = element;

                    res = valor();
                    if(res==true)
                    {
                        if(op1=="("){
                            arraypost.push(element);
                          // alert("cuanto vale emento " + element);
                        }else
                        {    
                           final = arraypost.length;
                           texto=texto+op1;
                           arraypost.splice(final-1,1);
                            comp = arraypost.length;
                            if(comp==0)
                            {
                                arraypost.push(element);
                            }else
                            {
                                for(i = arraypost.length-1; i>=0; i--)
                                 {
                                    op1 = element;
                                    //alert(element);
                                    op2 = arraypost[final-1];
                                    res = valor();
                                    if(op1=="("){
                                        arraypost.push(element);
                                      // alert("cuanto vale emento " + element);
                                       i=-1;
                                    }else
                                    {
                                        texto=texto+op1;
                                        arraypost.splice(final-1,1);
                                    }

                                 }
                            }                                                   
                        }
                    }else
                    {
                        arraypost.push(element);                                                    
                    }
                }
                    }
            }else
            { 
                //alert("cuanto vale"+texto);
                texto = texto + element;
               //alert("cuanto vale la cadena ahora "+texto);
            }

            if(index==post.length-1)
                 {
                     //alert("entra añ si")
                     for(i = arraypost.length-1; i>=0; i--)
                     {
                         if(arraypost[i]=="("){

                         }else{
                            texto=texto + arraypost[i];
                            arraypost.splice(i,1);
                         }          
                     }
                 }
        }
     document.getElementById("respsultadoPostfija").innerHTML= texto;
     texto="";
}