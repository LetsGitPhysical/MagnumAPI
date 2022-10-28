
$(document).ready(function() {
var schedContainer = $('.container');
function addToLocal() {
    var schedTxt = $(this).siblings('.theSched').val();
    var timeTxt = $(this).siblings('.theTime').attr('id');
    // if(schedTxt){
    localStorage.setItem(timeTxt,schedTxt);
    $(this).siblings('.theSched').attr('confirm-sched',"added");
    setTimeout(function() {
      $(this).siblings('.theSched').attr('confirm-sched',"");
    }, 2500);
  // }
};
schedContainer.on('click', '.hr-add', addToLocal);


function clearStoredEvents() {
  localStorage.clear();
  updateSched();
}
$('#reset-sched').click(clearStoredEvents);

function updateSched() {
    const dateNew = new Date();
    var dateStr = String(dateNew);
    var dateArr = dateStr.split(' ');
    console.log(dateArr);  //  [ 'Mon', 'Oct', '17', '2022','02:06:54', 'GMT-0400','(Eastern', 'Daylight', 'Time)' ]
    var dailyDate = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
    $('#date-curr').text(dailyDate);
    var newHr = dateArr[4].split(':');
    var currHr = Number(newHr[0]);
    // console.log('the curr hour: ',currHr); // the current time 
    $('.hr-block').each(function() {
      var elemHr = Number(parseInt($(this).attr('class').split('-')[2]));
      var elemID = $(this).children().attr('id');
      var hourEvent = '';
      if(localStorage.getItem(elemID)){
        hourEvent = localStorage.getItem(elemID);
      }
      // console.log('elemHr: ',elemHr, elemID, hourEvent);  // -- boom!!
      $(this).children('.theSched').val(localStorage.getItem(elemID));
      if(currHr > elemHr){
        $(this).attr('timecolor','past');
      }else if(currHr === elemHr){
        $(this).attr('timecolor','present');
      }else{
        $(this).attr('timecolor','future');
      }
    });
  }// close of udpate function
  updateSched();
  // var runTimer = setInterval(updateSched, 30000); // every 30 seconds updates
});


