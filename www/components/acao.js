  
// This is a JavaScript file
    $(document).on("click","#salvar",function(){
      var parametros = {
        "nome" : $("#nome").val(),
        "senha" : $("#password").val(),
        "email" : $("#email").val()
      };

      $.ajax({
        type: "post",
        url:"https://devcadastro.000webhostapp.com/cadastra.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          $("#nome").val("");
          $("#password").val("");
          $("#email").val("");
        },
        error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
        }
      });
    });

    function listar(){
      $.ajax({
        type: "post",
        url:"https://devcadastro.000webhostapp.com/listar.php",
        dataType:"json",
        success: function(data){
          var itemlista = "";
          $.each(data.pessoas,function(i,dados){
            itemlista = "<option values='"+dados.codigo+"'>"+dados.nome+"</option>";
          });
          $("#lista").html(itemlista);
        },
        error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
        }
      });
    }
