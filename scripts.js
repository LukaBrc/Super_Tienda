function validarDatos(){
       document.getElementById('inputNombre').addEventListener("input", validarNombre)
       document.getElementById("inputApellido").addEventListener("input", validarApellido)
       document.getElementById("inputMail").addEventListener("input", validarMail)

       validarNombre();
       validarApellido();
       validarMail();
}
function validarNombre(){
       if(inputNombre.value == ""){
              inputNombre.setCustomValidity("Por favor, ingresa tu nombre.");
       }else{
              inputNombre.setCustomValidity("");
       }
}
function validarApellido(){
       if(inputApellido.value == ""){
              inputApellido.setCustomValidity("Por favor, ingresa tu apellido.");
       }else{
              inputApellido.setCustomValidity("");
       }
}
function validarMail(){
       if(inputMail.value == ""){
              inputMail.setCustomValidity("Por favor, ingresa tu correo electrónico.");
       }else{
              inputMail.setCustomValidity("");
       }
}
window.addEventListener("load", validarDatos);

$(document).ready(function(){
       $("#welcomeTxt").animate({right: '50%'});
});
$(document).ready(function(){
       $("#vidintro").hide();
       $("#vidPlayer").hide();
});
$(document).ready(function(){
       var customStatus = "showing";
       var customStatus2 = "hidden";
       $("#videoCont").click(function(){
              if (customStatus2 == "hidden"){ 
                     $("#welcomeTxt").animate({right: '98.5%'});
                     $("#welcomeTxt").css("color", "white");
                     $("#miniClose").css("color", "black");
                     $("#miniClose").html("►");
                     $("#miniClose").hover(function(){
                            $(this).css("background-color", "black");
                            }, function(){
                            $(this).css("background-color", "white");
                     });
                     $("#miniClose").hover(function(){
                            $(this).css("color", "white");
                            }, function(){
                            $(this).css("color", "black");
                     });
                     $("#arrowHead").html("►")
                     $("#videoCont").animate({
                            width: "60%",
                            left: "40%"
                     });
                     $("#vidintro").show();
                     $("#vidPlayer").show();
                     customStatus = "hidden";
                     customStatus2 = "showing";
              }else{
                    $("#arrowHead").html("◄")
                    $("#videoCont").animate({
                            width: "2%",
                            left: "98%"
                     });
                     $("#vidintro").hide();
                     $("#vidPlayer").hide();
                     customStatus2 = "hidden";
              }
       });
       $("#miniClose").click(function(){
              if (customStatus == "showing"){
                     $("#welcomeTxt").animate({right: '98.5%'});
                     $("#welcomeTxt").css("color", "white");
                     $("#miniClose").css("color", "black");
                     $("#miniClose").html("►");
                     $("#miniClose").hover(function(){
                            $(this).css("background-color", "black");
                            }, function(){
                            $(this).css("background-color", "white");
                     });
                     $("#miniClose").hover(function(){
                            $(this).css("color", "white");
                            }, function(){
                            $(this).css("color", "black");
                     });
                     customStatus = "hidden";
              }else{
                     $("#welcomeTxt").animate({right: '50%'});
                     $("#welcomeTxt").css("color", "black");
                     $("#miniClose").html("&times;");
                     $("#arrowHead").html("◄")
                     $("#videoCont").animate({
                             width: "2%",
                             left: "98%"
                      });
                     $("#vidintro").hide();
                     $("#vidPlayer").hide();
                     customStatus2 = "hidden";
                     customStatus = "showing";
              }
       });
});
$(document).ready(function(){
       $("#navBtn").hover(function(){
              $("#navBtn").hide();
              $(".sideMenu").slideDown();
       });
});
$(document).ready(function(){
       $(".closeBtn").click(function(){
              $("#navBtn").fadeIn();
              $(".sideMenu").fadeOut();
       });
});
$(document).ready(function(){
       $(".sideInic").click(function(){
              $("#secIni").show();
              $("#navBtn").fadeIn();
              $("#secProdu").hide();
              $("#secContact").hide();
              $(".sideMenu").fadeOut();
              $("#topTitle").html("Súper Inicio");
       });
});
$(document).ready(function(){
       $(".sideProduc").click(function(){
              $("#secProdu").show();
              $("#navBtn").fadeIn();
              $("#secIni").hide();
              $("#secContact").hide();
              $(".sideMenu").fadeOut();
              $("#topTitle").html("Súper Productos")
       });
});
$(document).ready(function(){
       $(".sideContac").click(function(){
              $("#dataCol").css("bottom", "-75vh");
              $("#secContact").show();
              $("#navBtn").fadeIn();
              $("#secIni").hide();
              $("#secProdu").hide();
              $(".sideMenu").fadeOut();
              $("#topTitle").html("Contacto Súper")
              $("#dataCol").animate({bottom: '0'});
       });
});

var rightPos = {
       width: "200px",
       left: "70%",
       top: "2%",
       margin: "20px"
};
var leftPos = {
       width: "200px",
       left: "5%",
       top: "2%",
       margin: "20px"
}
var mainPos = {
       width: "300px",
       margin: "10px",
       left: "33.5%",
}
var hiddenPos = {
       width: "150px",
       margin: "10px",
       left: "41%"
}

const selecPos = ["mainPos", "rightPos","hiddenPos", "leftPos"];
const selecHero = ["#flash", "#lexluthor","#superman", "#batman"];
var i = 0;

$(document).ready(function(){
       $("#superman").fadeOut();
       $("#rightBtn").click(function(){
              if (i==3){
                     i = 0;
                     $("#superman").fadeOut("fast");
                     $("#superman").animate(hiddenPos);
                     $("#lexluthor").animate(rightPos);
                     $("#flash").animate(mainPos);
                     $("#batman").animate(leftPos);
                     $("#batman").fadeIn("fast");
              }else if (i==2){
                     i++;
                     $("#batman").fadeOut("fast");
                     $("#batman").animate(hiddenPos);
                     $("#superman").animate(rightPos);
                     $("#lexluthor").animate(mainPos);
                     $("#flash").animate(leftPos);
                     $("#flash").fadeIn("fast");
              }else if (i==1){
                     i++;
                     $("#flash").fadeOut("fast");
                     $("#flash").animate(hiddenPos);
                     $("#lexluthor").animate(leftPos);
                     $("#lexluthor").fadeIn("fast");
                     $("#superman").animate(mainPos);
                     $("#batman").animate(rightPos);
              }else{
                     i++;
                     $("#lexluthor").fadeOut("fast");
                     $("#flash").animate(rightPos);
                     $("#lexluthor").animate(hiddenPos);
                     $("#superman").animate(leftPos);
                     $("#superman").fadeIn("fast");
                     $("#batman").animate(mainPos);
              }
      });
      $("#leftBtn").click(function(){
              if (i==3) {
                     i--;
                     $("#flash").fadeOut("fast");
                     $("#flash").animate(hiddenPos);
                     $("#lexluthor").animate(leftPos);
                     $("#superman").animate(mainPos);
                     $("#batman").animate(rightPos);
                     $("#batman").fadeIn("fast");
              }else if (i==2){
                     i--;
                     $("#lexluthor").fadeOut("fast");
                     $("#lexluthor").animate(hiddenPos);
                     $("#superman").animate(leftPos);
                     $("#batman").animate(mainPos);
                     $("#flash").animate(rightPos);
                     $("#flash").fadeIn("fast");
              }else if (i==1){
                     i--;
                     $("#superman").fadeOut("fast");
                     $("#superman").animate(hiddenPos);
                     $("#batman").animate(leftPos);
                     $("#flash").animate(mainPos);
                     $("#lexluthor").animate(rightPos);
                     $("#lexluthor").fadeIn("fast");
              }else{
                     i=3;
                     $("#batman").fadeOut("fast");
                     $("#batman").animate(hiddenPos);
                     $("#flash").animate(leftPos);
                     $("#lexluthor").animate(mainPos);
                     $("#superman").animate(rightPos);
                     $("#superman").fadeIn("fast");
              }
       });
});

