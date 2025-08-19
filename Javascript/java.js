/*let edad= 47;
let nombre= "agustin";
console.log(edad);
console.log(nombre);

alert("Bienvenidos al curso de Diseño Web");
prompt("Cómo se llama usted");*/

/* 1º EJERCICIO

let nombre="Lucas";

console.log("Hola," + nombre + ". Cómo estas?");

let usuario=prompt("Cómo te llamas?");

alert("Hola " + usuario + "! Bienvenido a mi Página")

let color1= prompt("Elija un color");
let color2= prompt("Elija otro color");

console.log("Si mezclas " + color1 + " y " + color2 
    + " No respetas la Fórmula 60 30 10");
*/

/*
2º EJERCICIO
Uso dos prompt para sumar sus valores y que se vean en el 
console.log y el parseInt para asegurarme que ingrese números enteros

let number1= parseInt(prompt("Ingrese el primer número"))
let number2= parseInt(prompt("Ingrese el segundo número"))

console.log("La suma de los números ingresados: " 
    + (number1 / number2));
*/

/*
if es un ciclo que depende de una condicional, y la sintaxis es:
if(condicional) {escribo el código}
si es True se imprime, y si es false no se imprime el ciclo.*/

/*
let age=parseInt(prompt("¿Qué edad tenes?"));
if(age>=18){
    alert("Acceso Permitido");
}
else{
    alert("Acceso denegado")
}
*/



/*SIGUIENTE EJERCICIO:
Genero 2 variables con prompt. Una valido el usuario
y la otra con password
*/



/*

let user=prompt("Ingrese su Usuario")
let password= prompt("Ingrese su Password")

if(user!=="" && password!==""){
    alert("Bienvenido a su Perfil")
}
else{
    alert("Complete sus datos")
}

let saber= prompt("Usted sabe de Javascript? Si/No")

if(saber==="Si"){
    alert("Felicitaciones! Puede ingresar al Curso")
}
else if(saber==="No"){
    alert("Haga el Curso de Ingreso")
    }
else{
    alert("Ingrese la palabra correcta")
}
*/




/*ABAJO VIENE EL EJEMPLO PAR PRACTICAR CICLO FOR
let numero= prompt("Qué tabla de multiplicar querés ver?")

for(let i=0; i<=10; i++){

    alert(numero+"x"+i+"="+(numero*i))
}


let contador=0;

for(let i=0;i<=100;i++){
    if(i % 2 ===0)
    {contador++;}
}

console.log("La cantidad de pares que hay entre 0 y 100 es: " + 
    contador);
*/


/* OTRO EJEMPLO
let mensaje= "Bienvenido al sitio web construido por mis alumnos.";
document.getElementById("parrafo").innerText=mensaje;

let fondo= " #ffdddd";
document.body.style.backgroundColor= fondo;

let colorFont= " #f72e03";
document.getElementById("parrafo").style.color=colorFont

let nombre= "Eva";
document.getElementById("saludo").innerText= "Hola " + nombre + " bienvenido a tu perfil";
*/

document.getElementById("parrafo").innerText="Este es un mensaje de bienvenida al curso de Diseño Web";

document.getElementById("parrafo").style.color="black";
document.getElementById("parrafo").style.backgroundColor="white";
document.getElementById("parrafo").style.fontWeight="bold";
document.getElementById("parrafo").style.fontSize="22px";

function precioFinal (){
    let precio=document.getElementById("precioInput").value;
    /*value: captura el valor que va en el input*/
    
    precio=parseFloat(precio);
    
    if(!isNaN(precio) && precio>0){
        let iva= precio * 0.1735;
        let total= precio + iva;

        document.getElementById("resultado").innerText="Su producto con Iva es de: $" + total;
    }
    else{
        document.getElementById("resultado").innerText="Ingrese un número válido";
    }
}






const cambiarFondo=document.getElementById("cambiarFondo");
const body=document.body;

body.classList.add("tema-claro");

cambiarFondo.addEventListener("click", function(){
   const icono=cambiarFondo.querySelector("i");
   if(body.classList.contains("tema-claro")){
    body.classList.remove("tema-claro");
    body.classList.add("tema-oscuro")
    icono.className="bi bi-brightness-high";
    cambiarFondo.innerHTML= '<i class="bi bi-brightness-high"></i>' ;

   }

   else{
    body.classList.remove("tema-oscuro");
    body.classList.add("tema-claro");
    icono.className="bi bi-moon-stars";
    cambiarFondo.innerHTML='<i class="bi bi-moon-stars"></i>'
   }
});


let boton=document.getElementById("boton-menu");
let menu=document.getElementById("menu");
let menuItem=document.getElementById("menu-item");
let submenu=document.getElementById("submenu");


boton.addEventListener("click",function(){
menu.classList.toggle("menu");
menu.classList.toggle ("quitar");

});

menuItem.addEventListener("mouseenter",function(){
    submenu.classList.toggle("menu");
});

menuItem.addEventListener("mouseleave",function(){
    submenu.classList.add("menu");

});

boton.addEventListener("mouseover" , function (){
    boton.classList.add("hover");
})

const formulario=document.getElementById("mi-formulario");
const nombre=document.getElementById("nombre");
const error=document.getElementById("error");

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();

    if(nombre.value===""){
        error.innerText="Por favor ingrese un Nombre";
    }

    else{
        error.innerText="Sus datos fueron enviados"
    }

})
