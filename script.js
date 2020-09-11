let currentDay;

const today = Date.parse(new Date());
currentDay = today;
console.log(today);





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

let container = $('.container')
let time;
time = '5:00am' 
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





