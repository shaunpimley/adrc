//alert('hello'); /*use single speech marks for jquery*/


//aim - smooth croll our page when arrow is clicked 

//step 1: add event listener to .arrow 

$('.hero-arrow').on('click',function() { /*.hero-arrow - your referencing a class*/


//step 2: store the href of the clicked element 

var href = $(this).attr('href');
console.log(href); 

//step 3: find the element with id of the href 

var $target = $(href);

//step 4: find out how many pixel the target element is from the top of the page 

var offsetTop = $target.offset().top;

// step 5: animate our page to that pixel offset 

$('body, html').animate( {scrollTop: offsetTop}, 1000); /**/

//step 6: display defulat browser behaviour 

return false;










}); /*add this to the bottom */
