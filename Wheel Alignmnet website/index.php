<!-- This is your main page -->
<?php
//require_once("request/request.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Tyre Town</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#">Tyre Town</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
<!-- Page content -->
<div class="container">
    <h1 class="mt-5 text-center">Invoices for Tyre Town</h1>
    <hr>
    <hr>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous">
    </script>
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous">
    </script>
    <script src="script/scripts.js"></script>

    <!-- Dropdown Invoice Menu -->
    <div class="dropdown">
        <b>Select Invoice:</b>
        <button id="button-text" onclick="dropdownFunction()" class="invoice-button">Invoices</button>
        <div id="invoices" class="invoice-menu">
            <input type="text" placeholder="Search" id="search-input" onkeyup="searchFunction()">
            <option id="Option1" href="#" class="Option1">D884721</option>
            <option id="Option2" href="#" class="Option2">R005374</option>
        </div>
    </div>

    <!-- Submission button -->
    <div>
        <button id="display">Submit</button>
    </div>

    <!-- Text fields -->
    <div class="branch-info">
        <div class="col-xs-6">
            <label for="branch-name"><b>Branch Name:</b></label>
            <label id="branch-ID" type="text" name="branchName"></label><br>
            <label for="branch-gst"><b>GST Reg No.:</b></label>
            <label id="GSTRegNo" type="text" name="branchGST"></label><br>
            <label for="branch-tel"><b>Tel:</b></label>
            <label id="branch-tel" type="text" name="branchTel"></label><br>
            <label for="branch-fax"><b>Fax:</b></label>
            <label id="branch-fax" type="text" name="branchFax"></label><br>
            <label for="branch-email"><b>Email:</b></label>
            <label id="branch-email" type="text" name="branchEmail"></label><br>
            <label for="branch-address"><b>Address:</b></label>
            <label id="branch-address" type="text" name="branchAddress"></label><br>
        </div>
    </div>

    <div class="invoice-info">
        <label for="taxNo"><b>Tax Invoice No.</b></label> <!-- double check this bad boy -->
        <label id="taxNo" type="text" name="taxNo"></label><br>
        <label for="invoice-date"><b>Date:</b></label>
        <label id="invoice-date" type="text" name="invoiceDate"></label><br>
        <label for="invoice-due"><b>Due Date:</b></label>
        <label id="invoice-due" type="text" name="invoiceDue"></label><br>
        <label for="salesperson"><b>Salesperson:</b></label>
        <label id="salesperson" type="text" name="salesperson"></label><br> <!-- no salesperson in array. Technician? -->
    </div>

    <div class="bill-to">
        <label for="billTo"><b><u>Bill To:</u></b></label><br>
        <label id="billTo" type="text" name="clientName"></label>
    </div>

    <div class="bill-for">
        <label for="billFor"><b><u>For:</u></b></label><br>
        <label for="car-model"><b>Model:</b></label>
        <label id="car-model" type="text" name="carModel"></label><br>
        <label for="reg-no"><b>Reg No.:</b></label>
        <label id="reg-no" type="text" name="regNo"></label><br>
        <label for="chassis"><b>Chassis:</b></label>
        <label id="chassis" type="text" name="chassis"></label><br>
        <label for="vin"><b>VIN:</b></label>
        <label id="vin" type="text" name="vin"></label><br>
        <label for="car-body"><b>Body Type:</b></label>
        <label id="car-body" type="text" name="carBody"></label><br>
        <label for="car-year"><b>Year:</b></label>
        <label id="car-year" type="text" name="carYear"></label>
    </div>

    <!-- Invoice table -->
    <div class="row">
        <h2 class="panel-title">Invoice</h2>
        <table class="invoice-table">
            <thead>
            <tr>
                <th scope="col" width="600px">Description</th>
                <th scope="col" width="50px">Qty.</th>
                <th scope="col" width="100px">Unit Price</th>
                <th scope="col" width="100px">Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td id="description" type="text" name="desc">desc.</td>
                <td id="quantity" type="text" name="qty">qty.</td>
                <td id="price" type="text" name="price">price</td>
                <td id="amount" type="text" name="amount">amount</td>
            </tr>
            <tr>
                <th rowspan="5"></th>
                <th colspan="2">Subtotal</th>
                <th id="subtotal" type="text" name="subtotal">-</th>
            </tr>
            <tr>
                <th colspan="2">GST</th>
                <th id="GST" type="text" name="GST">-</th>
            </tr>
            <tr>
                <th colspan="2">Total</th>
                <th id="total" type="text" name="Total">-</th>
            </tr>
            <tr>
                <th colspan="2">Paid</th>
                <th id="paid" type="text" name="paid">-</th>
            </tr>
            <tr>
                <th colspan="2">Balance Due</th>
                <th id="balance-due" type="text" name="BalanceDue">-</th>
            </tr>
            </tbody>
        </table>
    </div>

    <!-- Alignment table -->
    <div class="row">
        <div class="alignment">
            <div class="alignment-body">
                <h2 class="alignment-title">Alignment Check</h2>
                <table class="alignment-table">
                    <tr>
                        <th colspan="4"></th><th>Before</th>
                        <th>Target Data</th>
                        <th>Actual</th>
                    </tr>
                    <tr>
                        <th rowspan="7">Rear Axle</th>
                        <th rowspan="3" colspan="2">Camber</th>
                        <th>Left</th>
                        <td id="RACLB" type="text" name="RACLB">-</td> <!--Rear Axle, Camber, Left, Before; etc -->
                        <td id="RACLT" type="text" name="RACLT">-</td>
                        <td id="RACLA" type="text" name="RACLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="RACRB" type="text" name="RACRB">-</td>
                        <td id="RACRT" type="text" name="RACRT">-</td> <!--Read Axle, Camber, Right, Target Data; etc -->
                        <td id="RACRA" type="text" name="RACRA">-</td>
                    </tr>
                    <tr>
                        <th>Cross</th>
                        <td id="RACCB" type="text" name="RACCB">-</td>
                        <td id="RACCT" type="text" name="RACCT">-</td>
                        <td id="RACCA" type="text" name="RACCA">-</td> <!--Rear Axle, Camber, Cross, Actual; etc -->
                    </tr>
                    <tr>
                        <th rowspan="3" colspan="2">Toe</th>
                        <th>Left</th>
                        <td id="RATLB" type="text" name="RATLB">-</td> <!--Rear Axle, Toe, Left, Before; etc -->
                        <td id="RATLT" type="text" name="RATLT">-</td>
                        <td id="RATLA" type="text" name="RATLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="RATRB" type="text" name="RATRB">-</td>
                        <td id="RATRT" type="text" name="RATRT">-</td> <!--Rear Axle, Toe, Right, Target Data; etc -->
                        <td id="RATRA" type="text" name="RATRA">-</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td id="RATTB" type="text" name="RATTB">-</td>
                        <td id="RATTT" type="text" name="RATTT">-</td>
                        <td id="RATTA" type="text" name="RATTA">-</td> <!--Rear Axle, Toe, Total, Actual; etc -->
                    </tr>
                    <tr>
                        <th colspan="3">Geometrical Driving Axis</th>
                        <td id="RAGB" type="text" name="RAGB">-</td> <!--Rear Axle, Geometrical Driving Axis, Before; etc -->
                        <td id="RAGT" type="text" name="RAGT">-</td>
                        <td id="RAGA" type="text" name="RAGA">-</td>
                    </tr>
                    <tr>
                        <th rowspan="19">Front Axle</th>
                        <th rowspan="3" colspan="2">Camber</th>
                        <th>Left</th>
                        <td id="FACLB" type="text" name="FACLB">-</td> <!--Front Axle, Camber, Left, Before; etc -->
                        <td id="FACLT" type="text" name="FACLT">-</td>
                        <td id="FACLA" type="text" name="FACLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FACRB" type="text" name="FACRB">-</td>
                        <td id="FACRT" type="text" name="FACRT">-</td> <!--Front Axle, Camber, Right, Target Data; -->
                        <td id="FACRA" type="text" name="FACRA">-</td>
                    </tr>
                    <tr>
                        <th>Cross</th>
                        <td id="FACCrB" type="text" name="FACCrB">-</td>
                        <td id="FACCrT" type="text" name="FACCrT">-</td>
                        <td id="FACCrA" type="text" name="FACCrA">-</td> <!--Front Axle, Camber, Cross, Actual; etc -->
                    </tr>
                    <tr>
                        <th rowspan="3" colspan="2">Caster</th>
                        <th>Left</th>
                        <td id="FACaLB" type="text" name="FACaLB">-</td> <!--Front Axle, Caster, Left, Before; etc -->
                        <td id="FACaLT" type="text" name="FACaLT">-</td>
                        <td id="FACaLA" type="text" name="FACaLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FACaRB" type="text" name="FACaRB">-</td>
                        <td id="FACaRT" type="text" name="FACaRT">-</td> <!--Front Axle, Caster, Right, Target Data; etc -->
                        <td id="FACaRA" type="text" name="FACaRA">-</td>
                    </tr>
                    <tr>
                        <th>Cross</th>
                        <td id="FACaCrB" type="text" name="FACaCrB">-</td>
                        <td id="FACaCrT" type="text" name="FACaCrT">-</td>
                        <td id="FACaCrA" type="text" name="FACaCrA">-</td> <!--Front Axle, Caster, Cross, Actual; etc -->
                    </tr>
                    <tr>
                        <th rowspan="3" colspan="2">SAI</th>
                        <th>Left</th>
                        <td id="FASLB" type="text" name="FASLB">-</td> <!--Front Axle, SAI, Left, Before; etc -->
                        <td id="FASLT" type="text" name="FASLT">-</td>
                        <td id="FASLA" type="text" name="FASLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FASRB" type="text" name="FASRB">-</td>
                        <td id="FASRT" type="text" name="FASRT">-</td> <!--Front Axle, SAI, Right, Target Data; etc -->
                        <td id="FASRA" type="text" name="FASRA">-</td>
                    </tr>
                    <tr>
                        <th>Cross</th>
                        <td id="FASCrB" type="text" name="FASCrB">-</td>
                        <td id="FASCrT" type="text" name="FASCrT">-</td>
                        <td id="FASCrA" type="text" name="FASCrA">-</td> <!--Front Axle, SAI, Cross, Actual; etc -->
                    </tr>
                    <tr>
                        <th rowspan="2" colspan="2">Track Differential Angle</th>
                        <th>Left</th>
                        <td id="FATdaLB" type="text" name="FATdaLB">-</td> <!--Front Axle, Track Differential Angle, Left, Before; etc -->
                        <td id="FATdaLT" type="text" name="FATdaLT">-</td>
                        <td id="FATdaLA" type="text" name="FATdaLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FATdaRB" type="text" name="FATdaRB">-</td>
                        <td id="FATdaRT" type="text" name="FATdaRT">-</td> <!--Front Axle, Track Differential Angle, Right, Target Data; etc -->
                        <td id="FATdaRA" type="text" name="FATdaRA">-</td>
                    </tr>
                    <tr>
                        <th rowspan="3" colspan="2">Toe</th>
                        <th>Left</th>
                        <td id="FATLB" type="text" name="FATLB">-</td> <!--Front Axle, Toe, Left, Before; etc -->
                        <td id="FATLT" type="text" name="FATLT">-</td>
                        <td id="FATLA" type="text" name="FATLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FATRB" type="text" name="FATRB">-</td>
                        <td id="FATRT" type="text" name="FATRT">-</td> <!--Front Axle, Toe, Right, Target Data; etc -->
                        <td id="FATRA" type="text" name="FATRA">-</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td id="FATTB" type="text" name="FATTB">-</td>
                        <td id="FATTT" type="text" name="FATTT">-</td>
                        <td id="FATTA" type="text" name="FATTA">-</td> <!--Front Axle, Toe, Total, Actual; etc -->
                    </tr>
                    <tr>
                        <th colspan="3">Setback</th>
                        <td id="FASbB" type="text" name="FASbB">-</td> <!--Front Axle, Setback, Before; etc-->
                        <td id="FASbT" type="text" name="FASbT">-</td>
                        <td id="FASbA" type="text" name="FASbA">-</td>
                    </tr>
                    <tr>
                        <th rowspan="4">Max Steering Lock</th>
                        <th rowspan="2">Left Steer</th>
                        <th>Left</th>
                        <td id="FAMLsLB" type="text" name="FAMLsLB">-</td> <!--Front Axle, Max Steering Lock, Left Steer, Left, Before; etc -->
                        <td id="FAMLsLT" type="text" name="FAMLsLT">-</td>
                        <td id="FAMLsLA" type="text" name="FAMLsLA">-</td>
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FAMLsRB" type="text" name="FAMLsRB">-</td>
                        <td id="FAMLsRT" type="text" name="FAMLsRT">-</td> <!--Front Axle, Max Steering Lock, Left Steer, Right, Target Data; etc -->
                        <td id="FAMLsRA" type="text" name="FAMLsRA">-</td>
                    </tr>
                    <tr>
                        <th rowspan="2">Right Steer</th>
                        <th>Left</th>
                        <td id="FAMRsLB" type="text" name="FAMRsLB">-</td>
                        <td id="FAMRsLT" type="text" name="FAMRsLT">-</td>
                        <td id="FAMRsLA" type="text" name="FAMRsLA">-</td> <!--Front Axle, Max Steering Lock, Right Steer, Left, Actual; etc -->
                    </tr>
                    <tr>
                        <th>Right</th>
                        <td id="FAMRsRB" type="text" name="FAMRsRB">-</td> <!--Front Axle, Max Steering Lock, Right Steer, Right, Before; etc -->
                        <td id="FAMRsRT" type="text" name="FAMRsRT">-</td>
                        <td id="FAMRsRA" type="text" name="FAMRsRA">-</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
</div>

</body>