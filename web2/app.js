 window.sr = ScrollReveal();


 ScrollReveal().reveal('.navegacion1', { delay: 3000, });
 sr.reveal('.caja1', {
     duration: 4000,
     origin: 'bottom',
     distance: '200px'
 });

 (function() {
     setInterval(function() {
         var canbio = document.getElementById("verde_v"),
             colores = ["green", "red"];

         canbio.style.color = colores[Math.floor(Math.random() * colores.length)];
     }, 1000);

 }())

 (function() {
     setInterval(function() {
         var segunda = document.getElementById("pregunte"),
             primera = ["teal", "#cc6097"];

         segunda.style.color = primera[Math.floor(Math.random() * primera.length)];
     }, 2000);

 }());