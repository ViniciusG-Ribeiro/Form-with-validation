const inputs = document.querySelectorAll(".entrada");

const divInputs = document.querySelectorAll(".div-inputs");

const errorText = document.getElementsByClassName(".error-text");

function toSend(){

    var cont = 0;

    divInputs.forEach(function (item) {
        
        if(divInputs[cont].children.item(0).value == ""){
            divInputs[cont].children.item(0).classList.add("input-null");
            divInputs[cont].children.item(1).classList.add("error-text-ativo");
            divInputs[cont].children.item(0).classList.remove("input-notnull");
            
        }else{
            divInputs[cont].children.item(0).classList.add("input-notnull");
            divInputs[cont].children.item(0).classList.remove("input-null");
            divInputs[cont].children.item(1).classList.remove("error-text-ativo");

        }
        cont++;
    });
}