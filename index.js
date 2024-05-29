precio = 500000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


function sumarPrecio() {

                cantidad = document.querySelector('.cantidad')                
                cuenta = Number(cantidad.innerHTML)
                cuenta += 1        
                precio = 500000
                aPagar = precio * cuenta
                cantidad.innerHTML = cuenta                
                valorTotal = document.querySelector('.valor-total')                
                valorTotal.innerHTML = aPagar

}

function restarPrecio() {

    cantidad = document.querySelector('.cantidad')                
    cuenta = Number(cantidad.innerHTML)
    
    cuenta -= 1  
    if (cuenta <= 0) {
        // alert("Actualmente no tienes productos agregados")
        cuenta = 0
    }
    else if (cuenta > 0)     
    precio = 500000
    aPagar = precio * cuenta
    cantidad.innerHTML = cuenta                
    valorTotal = document.querySelector('.valor-total')                
    valorTotal.innerHTML = aPagar

}



