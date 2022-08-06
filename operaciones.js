const botoncuadrado = document.getElementById("btncuadrado");
botoncuadrado.addEventListener("click", area);

function area(){
    const lado= Number (document.getElementById("num").value);
    const divcuadrado = document.getElementById("result_cuadrado");

    resultado = lado * lado;

    divcuadrado.innerText=resultado;
    
}




const botonrec = document.getElementById("btnrec");
botonrec.addEventListener("click", rectangulo);

function rectangulo(){
    const base= Number (document.getElementById("base").value);
    const altura= Number (document.getElementById("altura").value);

    const divrec = document.getElementById("result_rec");

    resultado = base * altura;

    divrec.innerText=resultado;
    
}



const botonprecio = document.getElementById("btnprice");
botonprecio.addEventListener("click", descuento);

function descuento(){
    const dinero= Number (document.getElementById("money").value);
    const divres = document.getElementById("result_desc");
    
    if(dinero >1000){
        resultado = dinero - (dinero * .30);
        divres.innerText=resultado;
    }
    else{
        resultado= dinero - (dinero *.10);
        divres.innerText=resultado;
    }   
}



const botonparimpar = document.getElementById("btnparimpar");
botonparimpar.addEventListener("click", parimpar);

function parimpar(){
    const Numero = Number (document.getElementById("numero").value);
    const divres = document.getElementById("result");

    if(Numero % 2 == 0){
        divres.innerText= "El numero es par";
    }
    else{
        divres.innerText= "El numero es impar";
    }
}



const botondescendentes = document.getElementById("btnlistado");
botondescendentes.addEventListener("click", descendente);

function descendente(){
    const asendientes= document.getElementById("result");
    
    result.innerHTML= "";

    for (let x=100;x>=1;x--){
        
        const list = document.createElement("li");
        list.setAttribute("class", "list-group-item");
        list.innerText= x ;
        asendientes.appendChild(list);
    }
}

