window.onscroll=function () {
    let top = document.getElementById("b2t");

    
    if (window.pageYOffset > 784) {
        top.style.display = "block";
      
    }
    else {
        top.style.display = "none";
    }
}

// window.onload=function(){
//     // console.log(document.getElementsByClassName('fades'))
//         document.getElementsByClassName('fades').slick({
//             dots: true,
//             infinite: true,
//             speed: 500,
//             fade: true,
//             cssEase: 'linear'
//           })
    
// }