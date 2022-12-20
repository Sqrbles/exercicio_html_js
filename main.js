const form = document.getElementById('num');


function validaForm(x,y){
    return y>x
}


form.addEventListener('submit'), function(e){
e.preventDefault();
const a = document.getElementById('campo-a');
const b = document.getElementById('campo-b');
const mensagemSucesso = 'Formulario Valido';
const mensagemErro = 'Formulario Invalido';


if(!validaForm(a.valueAsNumber,b.valueAsNumber)){
    alert(mensagemErro)
} else{
    alert(mensagemSucesso)
}
}