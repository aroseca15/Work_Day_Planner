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


const container = $('.container');
// Making each row repeatable   

let times = ['5:00am', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm','3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'];
let time;
let index = 0;
while (index < times.length) {

    let time = times[index];
    let newRow = $('<section>').addClass('row');
    let hourCell = $('<div>').addClass('col-2');
    hourCell.text(time);
    newRow.append(hourCell);

    let textAreaCell = $('<div>').addClass('col-8').addClass('textarea');
    let textArea = $('<textarea>');
    textArea.attr('cols', '85')
    textArea.addClass('time-block');
    textArea.attr('id', time);
    textAreaCell.append(textArea);
    newRow.append(textAreaCell);
    
    let saveBtnCell = $('<div>').addClass('col-2');
    let saveBtn = $('<button>').addClass('save-btn');
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveBtnCell.append(saveBtn);
    newRow.append(saveBtnCell);
    container.append(newRow);
    index++;
}

// I am super close. But not quite there!!
$('.save-btn').on('click', function(){
    let value = $(this).siblings('.textarea').val();
    let time = $(this).parent().attr('date-time');
    localStorage.setItem(time, value);
    localStorage.getItem(time, value);
})


// // For below see if there is a way to set your past, cuurent, future as:
// moment().isBefore(Moment|String|Number|Date|Array); //false or true   moment().isBefore() for comparing to #currentTime. If true then space is grey.
// moment().isSame(Moment|String|Number|Date|Array); //false or true     moment().isSame() for comparing to #currentTime. If true then space is red.
// moment().isAfter(Moment|String|Number|Date|Array); //false or true    moment().isAfter() for comparing to #currentTime. If true then space is green. 
// //Maybe something like this:
// if (moment('time').isSame('#currentTime')) {
//     display red
// } else if (moment('time').isBefore('#currentTime')) {
//     disply grey
// }else if (moment('time').isAfter('#currentTime')) {
//     display green
// };








// $('.col-md-4').css('background-color: #ffffff', 'color: #000000', 'border-top: 1px dashed #000000');





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




