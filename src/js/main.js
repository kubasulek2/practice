$(function(){
  $('.anim').on('click',function(){
    let anim = $(this).attr('data-anim');
    console.log(anim);
    $('#cube').removeClass().addClass(anim);
  });
});