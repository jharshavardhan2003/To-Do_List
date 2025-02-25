const myarr = [];
function rendertoList(task, date ,time) {
    $('.output tbody').append(`
        <tr>
            <td>${task}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td><button class="delete-btn">DELETE</button></td>
        </tr>
    `);
}
function dos() {
    var userInput = $('.task-name').val(); 
    var dateInput = $('#dateing').val(); 
    var timeinput =$('#timing').val();
    if (userInput.trim() !== "" && dateInput !== "" &&  timeinput !== "") { 
        myarr.push({ task: userInput, date: dateInput, time: timeinput });  
        rendertoList(userInput, dateInput,timeinput); 
        $('.task-name').val(""); 
        $('#dateing').val("");
        $('#timing') .val("");
    }
}
$(document).ready(function () {
    $('.add-button').click(dos);

    $('.output').on('click', '.delete-btn', function(){
        $(this).closest('tr').remove();
    });
});
