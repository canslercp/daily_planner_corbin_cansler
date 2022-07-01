var nineAm = $('#button');
var workEvent = $('#eventInput');

renderLastEvent();

//function to save event to local storage and send it to the input placeholder
function saveEvent(event) {
    event.preventDefault();

    //saves input event to local storage
    localStorage.setItem('event',workEvent.val());
    renderLastEvent();
}

function renderLastEvent(){
        //gets the event from local storage and sends it to the input placeholder
        var savedEvent = localStorage.getItem('event');
        
        //resets the placeholder if local storage is emptied
        if (!savedEvent) {
            return;
          }
        
        $(".custForm").attr("placeholder", savedEvent + ' (click to edit)');
}

//Save event on calendar
nineAm.on('click',saveEvent);

