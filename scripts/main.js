var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var sections = document.querySelectorAll(".container");

for (i=1;i<=sections.length;i++){
  for each (var i in sections){
  i.classList.add("1")
}}

window.addEvent('scroll',function(e) {

});
