//global array for Event for loops
var timeRow = [
  { 'textarea': $('#eventInputNine'), 'button': $('#saveBtnNine'), 'eventKey': 'event9' },
  { 'textarea': $('#eventInputTen'), 'button': $('#saveBtnTen'), 'eventKey': 'event10' },
  { 'textarea': $('#eventInputEleven'), 'button': $('#saveBtnEleven'), 'eventKey': 'event11' },
  { 'textarea': $('#eventInputTwelve'), 'button': $('#saveBtnTwelve'), 'eventKey': 'event12' },
  { 'textarea': $('#eventInputOne'), 'button': $('#saveBtnOne'), 'eventKey': 'event1' },
  { 'textarea': $('#eventInputTwo'), 'button': $('#saveBtnTwo'), 'eventKey': 'event2' },
  { 'textarea': $('#eventInputThree'), 'button': $('#saveBtnThree'), 'eventKey': 'event3' },
  { 'textarea': $('#eventInputFour'), 'button': $('#saveBtnFour'), 'eventKey': 'event4' },
  { 'textarea': $('#eventInputFive'), 'button': $('#saveBtnFive'), 'eventKey': 'event5' }
]

renderLastEvent();

for (i = 0; timeRow.length > i; i++) {

  //function to save event to local storage 
  timeRow[i].button.on('click', function () {
    for (i = 0; timeRow.length > i; i++) {


      //saves input event to local storage
      localStorage.setItem(timeRow[i].eventKey, timeRow[i].textarea.val());
    }
  });
}


function renderLastEvent() {
  for (i = 0; timeRow.length > i; i++) {
    //gets the event from local storage and sends it to the input placeholder
    var savedEvent = localStorage.getItem(timeRow[i].eventKey);

    //resets the placeholder if local storage is emptied
    if (localStorage.getItem(timeRow[i].eventKey) === null) {
      return;
    }

    timeRow[i].textarea.attr('placeholder', savedEvent + ' (click to edit)');
  }
}

//Below id the function for changing the color of the time block------>
var today = moment();
//this displays today's date in the header bar
$("#currentDay").text(today.format('dddd, MMMM Do'));

var hourNum = today.format("HH");
console.log(hourNum);
//this array holds the id and the time value for each time-block
var timeBlock = [
  { 'id': $('#eventInputNine'), 'time': '09' },
  { 'id': $('#eventInputTen'), 'time': '10' },
  { 'id': $('#eventInputEleven'), 'time': '11' },
  { 'id': $('#eventInputTwelve'), 'time': '12' },
  { 'id': $('#eventInputOne'), 'time': '13' },
  { 'id': $('#eventInputTwo'), 'time': '14' },
  { 'id': $('#eventInputThree'), 'time': '15' },
  { 'id': $('#eventInputFour'), 'time': '16' },
  { 'id': $('#eventInputFive'), 'time': '17' }
]

function changeColor() {
  // for loop for the timeBlock array 
  for (i = 0; timeBlock.length > i; i++) {

    if (hourNum == timeBlock[i].time) {
      timeBlock[i].id.addClass("present");

    } else if (hourNum > timeBlock[i].time) {
      timeBlock[i].id.addClass("past");

    } else if (hourNum < timeBlock[i].time) {
      timeBlock[i].id.addClass("future");
      console.log('heyo!');
    }
  }
}
changeColor();