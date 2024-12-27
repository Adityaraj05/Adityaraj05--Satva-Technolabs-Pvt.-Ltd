$(document).ready(function () {
  // Your JQuery Code

  console.log("I am in new file now.");
  console.log("We are using Jquery.");
  // jQuery Syntax looks like this
  // $('selector').action()

  $("p").click(); // click on p
  $("p").click(function () {
    console.log("you have clicked on p", this);
    // $("p").hide(); // it will hide the content after clicking on it.
    // $(this).hide(); // in this we can hide the specific paragraph or content on clicking.
    //  $('#id').hide();
    //  $('.class').hide();
  }); // do when we click on p

  // $('p').dblclick(function () {
  //     console.log('you double clicked on p', this);
  //     //  $('#id').hide();
  //     //  $('.class').hide();
  // });

  // $('p').hover(function () {
  //     console.log('you hoverd on: ', this);
  // //     //  $('#id').hide();
  // //     //  $('.class').hide();
  // }),

  // $('p').mouseenter(function () {
  //     console.log('you entered: ', this);
  // //     //  $('#id').hide();
  // //     //  $('.class').hide();
  // }),

  // function (){

  //     console.log('Thanks for coming')
  // });

  // there are three main types of selectors in jQuery
  // 1. element selector
  // 2. id selector
  // 3. class selector

  // 1. Element selector -  This is an example of element selector which clicks on all p
  // $('p').click();

  // 2. Id selector - this is an example of id selector
  // $('#second').click();

  // 3. Class selector - this is an example of id selector
  //   $('.odd').click();

  // other selectors
  // $('*').click() // clicks on all the elements
  // $('p.odd').click() // clicks on all the elements
  // $('p:first').click() // clicks on all the elements

  // Events in jQuery
  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  // demoing the on method
  $("p").on({
    click: function () {
      console.log("Thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("mouseleave");
    },
  });

  // $('#wiki').hide(1000, function () {
  //     console.log("hidden");
  // })
  // $('#wiki').show(1000, function () {
  //     console.log("show");
  // })

  // $("#but").click(function () {
  //   $("#wiki").fadeOut(5000);  // we can also use 'toggle' for animation
  // });

  //     fadeIn()
  // fadeOut()
  // fadeToggle()
  // fadeTo()

  // Slide methods - speed and callback parameters are optional

  // $('#wiki').slideUp(1000, function(){
  //     console.log('done');
  // })

  // $('#wiki').slideDown(1000)
  // $('#wiki').slideToggle(1000)

  // Animate function in jQuery
  // $('#wiki').animate({
  //     opacity:0.3,
  //     height: '150px',
  //     width:'350px'

  // }, "slow")

  // It will excequte like a queue in an order.
  $("#wiki").animate({ opacity: 0.3 }, 4000);
  $("#wiki").animate({ opacity: 0.9 }, 1000);
  $("#wiki").animate({ width: "350px" }, 12000);

  // $('#ta').val('Hi Aditya how's you');
  // $('#ta').html('Hi Aditya how's you');
  // $('#ta').html('Hi Aditya how's you3');
  // $('#inp').html('Hi Aditya how's you3');
  // $('#inp').val('Hi Aditya how's you3');
  // $('#inp').empty()
  // $('#wiki').empty()
  // $('#wiki').text('you are good')
  // $('#wiki').remove()



  // $('#wiki').addClass('myclass')
  // $('#wiki').addClass('myclass2')
  // $('#wiki').removeClass('myclass2')
  // $('#wiki').css('background-color', 'red')
  // $('#wiki').css('background-color')




  // AJAX Using jQuery -> Art of exchanging data with the server without reloading the page.
  // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

  // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

  // $.post('https://code.jquery.com/jquery-3.3.1.js',56
  //     { name: 'aditya', channel: 'miss you aditya' },
  //     function (data, status) { alert(status) });
});
