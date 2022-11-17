sil.style.display = "block"

function test() {
   bar.style.display = "none"
   sil.style.display = "block"
   nav.style.width = "200px"
   bas.style.width = "1290px"
   document.querySelectorAll("button")[0].style.display = "block"
   document.querySelectorAll("button")[1].style.display = "block"
   document.querySelectorAll("button")[2].style.display = "block"
   document.querySelectorAll("button")[3].style.display = "block"
   document.querySelectorAll("button")[4].style.display = "block"
}
function test1() {
   bar.style.display = "block"
   sil.style.display = "none"
   document.querySelectorAll("button")[0].style.display = "none"
   document.querySelectorAll("button")[1].style.display = "none"
   document.querySelectorAll("button")[2].style.display = "none"
   document.querySelectorAll("button")[3].style.display = "none"
   document.querySelectorAll("button")[4].style.display = "none"
   nav.style.width = "40px"
   nav.style.transition = "1s"
   bas.style.width = "1450px"
}