// let currentDay;

// const today = Date.parse(new Date());
// currentDay = today;
// console.log(today);

const todaysDate = new Date();
//console.log(todaysDate.getMonth()+" "+todaysDate.getDate()+ " "+todaysDate.getFullYear())
console.log(todaysDate.toLocaleString('default', {month:'long'})+" "+todaysDate.getDate()+","+todaysDate.getUTCFullYear())
// console.log(todaysDate.toLocaleString('default', {month:'long'}))

$('#currentDay').text(todaysDate.toLocaleString('default', {month:'long'})+" "+todaysDate.getDate()+", "+todaysDate.getUTCFullYear());
$('#currentTime').text(todaysDate.toLocaleString('en-US', {hour: 'numeric',minute:'numeric', hour12: true}))



/*
<section class="row">
    <div class="col-md-4">
    5:00am
    </div>
    <div class="col-md-5">
        <input type="text" class="input" id="5am">
        </div>
    <div class="col-md-3">
        <button class="save-btn" date-time='5am' id="save">Save</button>
        </div>
</section>
*/

let container = $('.container');
let time;
// Make repeatable   

let times = ['5:00am', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm','3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'];
// let time;
let index = 0;
while (index < times.length) {

    let time = times[index];
    let newRow = $('<section>').addClass('row');
    let hourCell = $('<div>').addClass('col-md-4');
    hourCell.text(time);
    newRow.append(hourCell);

    let inputCell = $('<div>').addClass('col-md-5');
    let input = $('<input type = "text">');
    input.addClass('input');
    input.attr('id', time);
    inputCell.append(input);
    newRow.append(inputCell);
    let saveBtnCell = $('<div>').addClass('col-md-3');
    let saveBtn = $('<button>').addClass('save-btn');
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveBtnCell.append(saveBtn);
    newRow.append(saveBtnCell);
    container.append(newRow);
    index++;
}

$('.col-md-4').css('background-color: #ffffff', 'color: #000000', 'border-top: 1px dashed #000000');




// let newRow = $('<section>').addClass('row');
// let hourCell = $('<div>').addClass('col-md-4');
// hourCell.text(time);
// newRow.append(hourCell);

// let inputCell = $('<div>').addClass('col-md-5');
// let input = $('<input type = "text">');
// input.addClass('input');
// input.attr('id', time);
// inputCell.append(input);
// newRow.append(inputCell);

// let saveBtnCell = $('<div>').addClass('col-md-3');
// let saveBtn = $('<button>').addClass('save-btn');
// saveBtn.attr('date-time', time);
// saveBtn.text('save');
// saveBtnCell.append(saveBtn);
// newRow.append(saveBtnCell);
// container.append(newRow);




