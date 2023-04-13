function mostraDadosDoUsuario(){

    var searchParams = new URLSearchParams(window.location.search);

    searchParams.get('email');

    var emailDoUsuario = searchParams.get('email');;

    var usuarioEncontrado = listaDeFuncionarios.find(function(usuario, indiceNoArray){
        return usuario.email == emailDoUsuario;
    })

    if(usuarioEncontrado){
        $("#nome").html(usuarioEncontrado.name);
        $("#email").html(usuarioEncontrado.email);
        $("#telefone").html(usuarioEncontrado.phone_number);
        $("#cargo").html(usuarioEncontrado.role);
        $("#endereco").html(usuarioEncontrado.endereço);
        $("#data-nascimento").html(usuarioEncontrado.data_nascimento);

    } else {
        document.location = listaDeUsuarios.html;
    }

    console.log(usuarioEncontrado)
}

$(document).ready(function(){

mostraDadosDoUsuario()

})