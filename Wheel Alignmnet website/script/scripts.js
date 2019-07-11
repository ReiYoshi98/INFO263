var dataObj = "";  // The variable for the JSON objects retrieved from the database
var optionSelected = false;
var selectedObject; // Stores the selected invoice ID
var targetData; // The variable which holds the target values

/*
 * Receiving the json object from the php function, which uses a query to get the object.
 */
$.get('request/request.php', function( data ) {
    dataObj = jQuery.parseJSON(data);
    targetData = dataObj[2]; // Obtaining the target value from the JSON object array.
})

/*
 * Drop down function which displays the contents of the options box
 */
function dropdownFunction() {
    document.getElementById("invoices").classList.toggle("show");
    option = ("#invoices").value;
}

/*
 * Search function for the combo box which filters results with matching characters
 */
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    div = document.getElementById("invoices");
    a = div.getElementsByTagName("option");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/*
 * Click function for the selected option of the combo box / search.
 * May change the click to reference an id which counts for all options
 * rather than having an id for each option.
 */
$(document).ready(function() {
    $("#Option1").click(function () {
        var option = $("#Option1").val();
        displayOption(option);
    });
});

/*
 * Click function for the second option.
 */
$(document).ready(function() {
    $("#Option2").click(function () {
        var option = $("#Option2").val();
        displayOption(option);
    })
});

/*
 * Function for displaying the selected option in the combo / search box.
 */
function displayOption(obj) {
    $("#button-text").text(obj);
}

/*
 * Function for setting the selected invoice number to the appropriate object
 * Loops through the available arrays to find the matching invoice ID to the
 * selected option
 */
function setObject(option) {
    var i;
    console.log(option);        // Checking if the option passed through is correct
    for (i = 0; i < dataObj.length; i++) {
        if (option == (dataObj[i]["invoice_id"])) {
            optionSelected = true;          // Sets true if the option has not been selected
            selectedObject = dataObj[i];
            break;    // Breaks out of the for loop
        }
    }
}

/*
 * Click function for the display / submit button.
 * Also checks if the option has been selected before displaying the information.
 */
$(document).ready(function() {
    $("#display").click(function () {
        var selectedOption = $("#button-text").text();
        setObject(selectedOption);          // Sets / Checks the option box
        if (optionSelected) {               // Checking if the option has been set via the option box.
            displayData(selectedObject);
            displayTargetData(targetData);

            if (rangeCheck(selectedObject["rear_axle_camber_left_before"], targetData["rear_axle_camber_left_right_target"])) {
                $("#RACLB").css('color', 'green');
            } else {
                $("#RACLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_left_actual"], targetData["rear_axle_camber_left_right_target"])) {
                $("#RACLA").css('color', 'green');
            } else {
                $("#RACLA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_left_before"], targetData["rear_axle_camber_left_right_target"])) {
                $("#RACRB").css('color', 'green');
            } else {
                $("#RACRB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_right_actual"], targetData["rear_axle_camber_left_right_target"])) {
                $("#RACRA").css('color', 'green');
            } else {
                $("#RACRA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_cross_before"], targetData["rear_axle_camber_cross_target"])) {
                $("#RACCB").css('color', 'green');
            } else {
                $("#RACCB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_cross_actual"], targetData["rear_axle_camber_cross_target"])) {
                $("#RACCA").css('color', 'green');
            } else {
                $("#RACCA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_left_before"], targetData["rear_axle_toe_left_right_target"])) {
                $("#RATLB").css('color', 'green');
            } else {
                $("#RATLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_left_actual"], targetData["rear_axle_toe_left_right_target"])) {
                $("#RATLA").css('color', 'green');
            } else {
                $("#RATLA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_right_before"], targetData["rear_axle_toe_left_right_target"])) {
                $("#RATRB").css('color', 'green');
            } else {
                $("#RATRB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_right_actual"], targetData["rear_axle_toe_left_right_target"])) {
                $("#RATRA").css('color', 'green');
            } else {
                $("#RATRA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_total_before"], targetData["rear_axle_toe_total_target"])) {
                $("#RATTB").css('color', 'green');
            } else {
                $("#RATTB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_toe_total_actual"], targetData["rear_axle_toe_total_target"])) {
                $("#RATTA").css('color', 'green');
            } else {
                $("#RATTA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_geometrical_driving_axis_before"], targetData["rear_axle_geometrical_driving_axis_target"])) {
                $("#RAGB").css('color', 'green');
            } else {
                $("#RAGB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_geometrical_driving_axis_actual"], targetData["rear_axle_geometrical_driving_axis_target"])) {
                $("#RAGA").css('color', 'green');
            } else {
                $("#RAGA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_left_before"], targetData["front_axle_camber_left_right_target"])) {
                $("#FACLB").css('color', 'green');
            } else {
                $("#FACLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_left_actual"], targetData["front_axle_camber_left_right_target"])) {
                $("#FACLA").css('color', 'green');
            } else {
                $("#FACLA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_right_before"], targetData["front_axle_camber_left_right_target"])) {
                $("#FACRB").css('color', 'green');
            } else {
                $("#FACRB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_right_actual"], targetData["front_axle_camber_left_right_target"])) {
                $("#FACRA").css('color', 'green');
            } else {
                $("#FACRA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_cross_before"], targetData["front_axle_camber_cross_target"])) {
                $("#FACCrB").css('color', 'green');
            } else {
                $("#FACCrB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_camber_cross_actual"], targetData["front_axle_camber_cross_target"])) {
                $("#FACCrA").css('color', 'green');
            } else {
                $("#FACCrA").css('color', 'red');
            }


            if (rangeCheck(selectedObject["front_axle_caster_left_before"], targetData["front_axle_caster_left_right_target"])) {
                $("#FACaLB").css('color', 'green');
            } else {
                $("#FACaLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_left_actual"], targetData["rear_axle_camber_left_right_target"])) {
                $("#FACaLA").css('color', 'green');
            } else {
                $("#FACaLA").css('color', 'red');
            }


            if (rangeCheck(selectedObject["front_axle_caster_right_before"], targetData["front_axle_caster_left_right_target"])) {
                $("#FACaRA").css('color', 'green');
            } else {
                $("#FACaRA").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_right_actual"], targetData["rear_axle_camber_left_right_target"])) {
                $("#FACaRB").css('color', 'green');
            } else {
                $("#FACaRB").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_caster_cross_before"], targetData["front_axle_caster_cross_target"])) {
                $("#FACaCrB").css('color', 'green');
            } else {
                $("#FACaCrB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["rear_axle_camber_cross_actual"], targetData["rear_axle_camber_cross_target"])) {
                $("#FACaCrA").css('color', 'green');
            } else {
                $("#FACaCrA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_SAI_left_before"], targetData["front_axle_sai_left_right_target"])) {
                $("#FASLB").css('color', 'green');
            } else {
                $("#FASLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_SAI_left_actual"], targetData["front_axle_sai_left_right_target"])) {
                $("#FASLA").css('color', 'green');
            } else {
                $("#FASLA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_SAI_right_before"], targetData["front_axle_sai_left_right_target"])) {
                $("#FASRB").css('color', 'green');
            } else {
                $("#FASRB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_SAI_right_actual"], targetData["front_axle_sai_left_right_target"])) {
                $("#FASRA").css('color', 'green');
            } else {
                $("#FASRA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_SAI_cross_before"], targetData["front_axle_sai_cross_target"])) {
                $("#FASCrB").css('color', 'green');
            } else {
                $("#FASCrB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_SAI_cross_actual"], targetData["front_axle_sai_cross_target"])) {
                $("#FASCrA").css('color', 'green');
            } else {
                $("#FASCrA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_toe_left_before"], targetData["front_axle_toe_left_right_target"])) {
                $("#FATLB").css('color', 'green');
            } else {
                $("#FATLB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_toe_left_actual"], targetData["front_axle_toe_left_right_target"])) {
                $("#FATLA").css('color', 'green');
            } else {
                $("#FATLA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_toe_right_before"], targetData["front_axle_toe_left_right_target"])) {
                $("#FATRB").css('color', 'green');
            } else {
                $("#FATRB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_toe_right_actual"], targetData["front_axle_toe_left_right_target"])) {
                $("#FATRA").css('color', 'green');
            } else {
                $("#FATRA").css('color', 'red');
            }

            if (rangeCheck(selectedObject["front_axle_toe_total_before"], targetData["front_axle_toe_total_target"])) {
                $("#FATTB").css('color', 'green');
            } else {
                $("#FATTB").css('color', 'red');
            }
            if (rangeCheck(selectedObject["front_axle_toe_total_actual"], targetData["front_axle_toe_total_target"])) {
                $("#FATTA").css('color', 'green');
            } else {
                $("#FATTA").css('color', 'red');
            }
        }
        optionSelected = false; // Sets the option selected bach to false for choosing another invoice.
    });
});

/*
 * Function which checks if the alignments are in the target range or not
 */
function rangeCheck(current, target) {
    var range = false;
    if (target.length > 7) {
        var target_top = parseFloat(target.substring(0, 4));           // Sub float of the target value
        var target_range = Math.abs((parseFloat((target.substring(5, 15)).replace(/(?!^-)[^\d\.]*/g,''))));  // Converting to positive number
    } else {
        var target_top = Math.abs(parseFloat(target.substring(0, 4)));
        var target_range = 0;
    }
    var current = parseFloat(current.replace(/(?!^-)[^\d\.]*/g, '')); // The value we are checking
    if (current <= target_top + target_range && current >= target_top - target_range) {
        range = true;
    }
    return range;
}

/*
Function with displays taget data
*/
function displayTargetData(data) {
    $("#RACLT").text(data["rear_axle_camber_left_right_target"]);
    $("#RACRT").text(data["rear_axle_camber_left_right_target"]);
    $("#RACCT").text(data["rear_axle_camber_cross_target"]);
    $("#RATLT").text(data["rear_axle_toe_left_right_target"]);
    $("#RATRT").text(data["rear_axle_toe_left_right_target"]);
    $("#RATTT").text(data["rear_axle_toe_total_target"]);
    $("#RAGT").text(data["rear_axle_geometrical_driving_axis_target"]);
    $("#FACLT").text(data["front_axle_camber_left_right_target"]);
    $("#FACRT").text(data["front_axle_camber_left_right_target"]);
    $("#FACCrT").text(data["front_axle_camber_cross_target"]);
    $("#FACaLT").text(data["front_axle_caster_left_right_target"]);
    $("#FACaRT").text(data["front_axle_caster_left_right_target"]);
    $("#FACaCrT").text(data["front_axle_caster_cross_target"]);
    $("#FASLT").text(data["front_axle_sai_left_right_target"]);
    $("#FASRT").text(data["front_axle_sai_left_right_target"]);
    $("#FASCrT").text(data["front_axle_sai_cross_target"]);
    $("#FATdaLT").text(data["front_axle_track_differential_angle_left_right_target"]);
    $("#FATdaRT").text(data["front_axle_track_differential_angle_left_right_target"]);
    $("#FATLT").text(data["front_axle_toe_left_right_target"]);
    $("#FATRT").text(data["front_axle_toe_left_right_target"]);
    $("#FATTT").text(data["front_axle_toe_total_target"]);
    $("#FASbT").text(data["front_axle_setback_target"]);
    $("#FAMLsLT").text(data["front_axle_max_steering_lock_left_steer_left_target"]);
    $("#FAMLsRT").text(data["front_axle_max_steering_lock_left_steer_right_target"]);
    $("#FAMRsLT").text(data["front_axle_max_steering_lock_right_steer_left_target"]);
    $("#FAMRsRT").text(data["front_axle_max_steering_lock_right_steer_right_target"]);
}

/*
 * Function for displaying all of the data values for the specific invoice ID
 */
function displayData(data) {
    var makeModel = data["vehicle_make"] + " " + (data["vehicle_model"]);
    var amount = data["quantity"] * (data["unit_price"]);
    var GSTRate = 0.15;
    var GST = amount * GSTRate;
    var total = amount + GST;
    var paid = 0;
    var BalanceDue = total - paid;

    $("#branch-ID").text(data["branch_name"]);
    $("#GSTRegNo").text(data["branch_gst_registration"]);
    $("#branch-tel").text(data["branch_phone"]);
    $("#branch-fax").text(data["branch_fax"]);
    $("#branch-email").text(data["branch_email"]);
    $("#branch-address").text(data["branch_address"]);
    $("#taxNo").text(data["invoice_id"]);
    $("#invoice-date").text(data["date"]);
    $("#invoice-due").text(data["due_date"]);
    $("#billTo").text(data["owner_fname"]);
    $("#car-model").text(makeModel);
    $("#reg-no").text(data["vehicle_registration"]);
    $("#chassis").text(data["vehicle_chassis"]);
    $("#vin").text(data["vehicle_id"]);
    $("#car-body").text(data["vehicle_body_type"]);
    $("#car-year").text(data["vehicle_year"]);
    $("#description").text(data["description"]);
    $("#quantity").text(data["quantity"]);
    $("#price").text(data["unit_price"]);
    $("#amount").text(amount.toFixed(2));
    $("#subtotal").text(amount.toFixed(2));
    $("#GST").text(GST.toFixed(2));
    $("#total").text(total.toFixed(2));
    $("#paid").text(paid.toFixed(2));
    $("#balance-due").text(BalanceDue.toFixed(2));
    $("#RACLB").text(data["rear_axle_camber_left_before"]);
    $("#RACLA").text(data["rear_axle_camber_left_actual"]);
    $("#RACRA").text(data["rear_axle_camber_right_actual"]);
    $("#RACCB").text(data["rear_axle_camber_cross_before"]);
    $("#RACCA").text(data["rear_axle_camber_cross_actual"]);
    $("#RATLB").text(data["rear_axle_toe_left_before"]);
    $("#RATLA").text(data["rear_axle_toe_left_actual"]);
    $("#RATRB").text(data["rear_axle_toe_right_before"]);
    $("#RATRA").text(data["rear_axle_toe_right_actual"]);
    $("#RATTB").text(data["rear_axle_toe_total_before"]);
    $("#RATTA").text(data["rear_axle_toe_total_actual"]);
    $("#RAGB").text(data["rear_axle_geometrical_driving_axis_before"]);
    $("#RAGA").text(data["rear_axle_geometrical_driving_axis_actual"]);
    $("#FACLB").text(data["front_axle_camber_left_before"]);
    $("#FACLA").text(data["front_axle_camber_left_actual"]);
    $("#FACRB").text(data["front_axle_camber_right_before"]);
    $("#FACRA").text(data["front_axle_SAI_right_actual"]);
    $("#FACCrB").text(data["front_axle_camber_cross_before"]);
    $("#FACCrA").text(data["front_axle_camber_cross_actual"]);


    $("#FACaLB").text(data["front_axle_caster_left_before"]);
    $("#FACaLA").text(data["front_axle_caster_left_actual"]);
    $("#FACaRB").text(data["front_axle_caster_right_before"]);
    $("#FACaRA").text(data["front_axle_caster_right_actual"]);
    $("#FACaCrB").text(data["front_axle_caster_cross_before"]);
    $("#FACaCrA").text(data["front_axle_caster_cross_actual"]);

    $("#FASLB").text(data["front_axle_SAI_left_before"]);
    $("#FASLA").text(data["front_axle_SAI_left_actual"]);
    $("#FASRB").text(data["front_axle_SAI_right_before"]);
    $("#FASRA").text(data["front_axle_SAI_right_actual"]);
    $("#FASCrB").text(data["front_axle_SAI_cross_before"]);
    $("#FASCrA").text(data["front_axle_SAI_cross_actual"]);

    $("#FATdaLB").text(data["front_axle_track_differential_left_before"]);
    $("#FATdaLA").text(data["front_axle_track_differential_left_actual"]);
    $("#FATdaRB").text(data["front_axle_track_differential_left_actual"]);
    $("#FATdaRA").text(data["front_axle_track_differential_right_actual"]);

    $("#FATLB").text(data["front_axle_toe_left_before"]);
    $("#FATLA").text(data["front_axle_toe_left_actual"]);
    $("#FATRB").text(data["front_axle_toe_right_before"]);
    $("#FATRA").text(data["front_axle_toe_right_actual"]);
    $("#FATTB").text(data["front_axle_toe_total_before"]);
    $("#FATTA").text(data["front_axle_toe_total_actual"]);

    $("#FASbB").text(data["front_axle_setback_before"]);
    $("#FASbA").text(data["front_axle_setback_actual"]);
    $("#FAMLsLB").text(data["front_axle_max_steering_lock_left_steer_left_before"]);
    $("#FAMLsLA").text(data["front_axle_max_steering_lock_left_steer_left_actual"]);
    $("#FAMLsRB").text(data["front_axle_max_steering_lock_left_steer_right_before"]);
    $("#FAMLsRA").text(data["front_axle_max_steering_lock_left_steer_right_actual"]);
    $("#FAMRsLB").text(data["front_axle_max_steering_lock_right_steer_left_before"]);
    $("#FAMRsLA").text(data["front_axle_max_steering_lock_right_steer_left_actual"]);
    $("#FAMRsRB").text(data["front_axle_max_steering_lock_right_steer_right_before"]);
    $("#FAMRsRA").text(data["front_axle_max_steering_lock_right_steer_right_actual"]);
}