
var schedContainer = $('.container');

const d = new Date();
var dateStr = String(d);
var dateArr = dateStr.split(' ');
console.log(dateArr);  //  [ 'Mon', 'Oct', '17', '2022','02:06:54', 'GMT-0400','(Eastern', 'Daylight', 'Time)' ]
var dailyDate = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
var dateHdr = document.getElementById('date-curr');
dateHdr.textContent = dailyDate;

function addToLocal(event) {
    var schedTxt = $(this).siblings('.theSched').val();
    var timeTxt = $(this).siblings('.theTime').attr('id');
    window.localStorage.setItem(timeTxt,schedTxt);
    // console.log('vals i need time and text: ',timeTxt,schedTxt);
  }

schedContainer.on('click', '.hr-add', addToLocal);

// loop localStorage keys/values 
for (let [k,v] of Object.entries(localStorage)){
    $(`.${k} .theSched`).val(v); // BOOOM - needed the '.' before the ${k}!!!!
    // console.log(k,v);
}

function updateSched() {
    // get current number of hours
    var dateNew = new Date();
    var dateNewStr = String(dateNew);
    var newHr = dateNewStr.split(' ')[4];
    var timeArr = newHr.split(':');
    var currHr = Number(timeArr[0]);
    // console.log(currHr);

    // loop over time blocks
    $('.hr-block').each(function() {
      var hourSched = Number(parseInt($(this).attr('class').split('-')[2]));
    //   console.log(hourSched);  // -- boom!!

    //   // check if we've moved past this time
      if (hourSched < currHr) {
        var theTimeVal = $(this).children('.theTime');
        var theSchedVal = $(this).children('.theSched');
        console.log(theSchedVal.val());
      }
 
    })}

  updateSched();
