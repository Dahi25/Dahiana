
document.getElementById("Registrar").onclick=function clcik2(){
    var varprimernombre=document.getElementById("Nombre").value;
    console.log(`${varprimernombre}`);

 
 var varCorreo=document.getElementById("Correo").value;
 console.log (`${varCorreo}`);
 var  varcontraseña=document.getElementById("Contraseña").value;
 console.log (`${varcontraseña}`);
 var varconfirmarcontraseña=document.getElementById("confirmar su contraseña").value;
 console.log (`${varconfirmarcontraseña}`);
 var varingresarnumero=document.getElementById("celular").value;
 console.log(`${varingresarnumero}`);
 var varSexoelegido = document.getElementsByName("sexo");
 console.log(sexo);
if (varSexoelegido[0].checked){
    console.log(varSexoelegido[0].value);
}
else if (varSexoelegido[1].checked){
    console.log(varSexoelegido[1].value);
}
else if (varSexoelegido[2].checked){
    console.log(varSexoelegido[1].value);
}
var varsegundonombre=document.getElementById("Nombre2").value;

if (varsegundonombre=Nombre2){
    console.log(varsegundonombre.value);
    alert("ha ingresado su nombre");
}
var varapellidos=document.getElementById("Apellidos").value;
console.log (`${varapellidos}`);
if(varapellidos=varapellidos){
    console.log (varapellidos.value);
    alert("ha ingresado sus apellidos");
}
var varrol= document.getElementById("rol").checked;
console.log(varrol);
    if( varrol == rol.checked) {
        console.log(rol.value);
          
        }
          else if(!varrol.length== 'rol'){
          alert("Haregistrado su rol");
          return true;
          }
        }

    
       
  


