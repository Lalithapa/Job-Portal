
$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              autoplay: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              autoplay: true,
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              autoplay: true,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
       event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//blogs
let blogs=[
{
   id:1,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
{
   id:2,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
{
   id:3,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
{
   id:4,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
{
   id:5,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
{
   id:6,
   image:"",
   date: 1,
   author:"",
   title:"",
   desc:"",
},
]

// for(let i=0;i<blogs.length;i++){
//   let box=document.getElementById("blog_cards").innerHTML=
//  `<div class="card" style="width: 18rem;">
//  <img src={} class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">Card title</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
// </div>`
//   return 
// }

blogs.map((value)=>{
  let box=document.getElementById("blog_cards").innerHTML=
 `<div class="card" style="width: 18rem;">
 <img src= class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div>`
})






 