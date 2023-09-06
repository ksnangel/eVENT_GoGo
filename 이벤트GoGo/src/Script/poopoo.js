
$(document).ready(() => { //가장 먼저 실행

  $("input:radio[name='gender']:radio[value='girl']").prop('checked', true); // 선택하기   (남/여 )
  $("input:radio[name='gender']:radio[value='boy']").prop('checked', false); // 해제하기

  $("input:checkbox[name='checkAgree']:checkbox[value='personInfoConsent1']").prop('checked', true); 
  $("input:checkbox[name='checkAgree']:checkbox[value='personInfoConsent2']").prop('checked', true); 

  $("input:radio[name='cushion']:radio[value='pinkCushion']").prop('checked', true); // 선택하기   (남/여 )
  $("input:radio[name='cushion']:radio[value='blueCushion']").prop('checked', false);
 

})//close 
