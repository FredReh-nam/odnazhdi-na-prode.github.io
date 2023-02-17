$('i').on('click', function(){
  
  if($(this).text() == 'check'){
    return false;
  }
  
  $(this).addClass('animating');
  
  var activeStep = $('.step.active');
  activeStep.addClass('sliding-out');
  var nextStep = activeStep.next('.step');
  nextStep.addClass('sliding-in');
  nextStep.on('animationend', function(){
    $(this).off('animationend');
    activeStep.removeClass('active sliding-out').addClass('previous');
    $(this).removeClass('next sliding-in').addClass('active');
    $('i').removeClass('animating');
    
    if(!$(this).next('.step').length){
      $('i').html('check');
    }
    else {
      $(this).next('.step').addClass('next');
    }

  })
  
})// JavaScript Document