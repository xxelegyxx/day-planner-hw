var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]


function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}


function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}


function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}


function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();
}


getHeaderDate();


myDay.forEach(function(thisHour) {
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

   
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})

init();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})


//PERSONAL NOTES
    //enter data into textblocks
//click button that saves into local storage
//color code blocks
//get data from LS and pop timeblocks
// button is func inside event handler

//button
    //get reference to all save buttons $('.saveBtn') (createesVAriable)
    //01 and 02 jQuery elements
    //loop over array and add new event ?????????

    //.on 
    //add click handler to each saveBtn using .on
    // need val of input next to button(textblocks)
    // ***DOM TRAVERSAL to get text values and link to button
    // .sibling() 07 DOM TRAV
    // set items in LS
    //UNIT04

//handle color coding 
    //use moment lib to get current time 
    //get current hour using moment and moment.js/docs/get-set/hour
    //get ref to all timeblocks unit03
    //loop thru timeblox
    // moment gives number back from 0 to 23. 

    //give unique ID 
    //add a data-hour attribute to timeblock
    //get data-hour v

    //timeblocks[i].data('hour')
    //if else statement comp current hour with timeblock
    //if time < current hour, then past
    // === present
    ///else future
    //add or remove or both classes from timeblock
    //add past class if its in past, remove past present if its future ETC 
    //UNIT 3 

    //get item from LS
    //getItem
    //reference to text area using ID
    //use .val() (JQ) to update from LS

    //create $('textarea'); loop thru -> reference to the ID -..val=localStorage.getItem('')