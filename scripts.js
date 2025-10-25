// Add your API endpoint here
var API_ENDPOINT = "<add your API endpoint>";

// AJAX POST request to save employee data
document.getElementById("saveemployee").onclick = function(){
    var inputData = {
        "employeeID": $('#employeeID').val(),
        "name": $('#name').val(),
        "department": $('#department').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("employeeSaved").innerHTML = "employee Data Saved!";
        },
        error: function () {
            alert("Error saving employee data.");
        }
    });
}

// AJAX GET request to retrieve all employees
document.getElementById("getemployees").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#employeeTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#employeeTable").append("<tr> \
                    <td>" + data['employeeID'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['department'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving employee data.");
        }
    });
}