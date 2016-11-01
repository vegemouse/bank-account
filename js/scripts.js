var Account = function(firstName, lastName, balance, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
  this.address = address;
};

var Address = function(city, state, street, zip){
  this.city = city;
  this.state = state;
  this.street = street;
  this.zip = zip;
}

Account.prototype.deposit = function(depositAmount){
  this.balance += depositAmount;
  return this.balance;
}
Account.prototype.withdrawal = function(withdrawalAmount){
  this.balance -= withdrawalAmount;
  return this.balance;
}

$(function() {
  var inputtedFirstName;
  var inputtedLastName;
  var initialDeposit;
  var depositAmount;
  var depositFloat;
  var withdrawalAmount;
  var withdrawalFloat;
  var inputtedStreet;
  var inputtedCity;
  var inputtedState;
  var inputtedZip;
  var newAccount = new Account();
  var newAddress = new Address();

  $("#retCust").click(function() {
    $("#depWith").show();
    $("#getAccount").hide();
    $("#initialDeposit").hide();
    newAccount.balance = 0;
  });

  $("#newCust").click(function() {
    location.reload();
  });

  $("#getAccount").submit(function() {
    event.preventDefault();
    inputtedFirstName = $("#firstName").val();
    inputtedLastName = $("#lastName").val();
    inputtedStreet = $("#street").val();
    inputtedCity = $("#city").val();
    inputtedState = $("#state").val();
    inputtedZip = $("#zip").val();

    if (inputtedFirstName !== "" || inputtedLastName !== "" || inputtedStreet !=="" || inputtedCity !== "" || inputtedState !== "" || inputtedZip !== "") {
      newAccount.firstName = inputtedFirstName;
      newAccount.lastName = inputtedLastName;
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;
      newAddress.zip = inputtedZip;
      newAccount.address = newAddress;

      $("#getAccount").removeClass("col-sm-12");
      $("#getAccount").addClass("col-sm-6");
      $("#deposit").fadeIn();
      console.log(newAccount.address);
      $(".address").html(newAccount.firstName + " " +newAccount.lastName + "<br>" + newAccount.address.street +"<br>"+ newAccount.address.city +", "+ newAccount.address.state +" "+ newAccount.address.zip );
      $(".address").show();
      newAccount.balance = 0;
    } else {
      alert("Please enter your name!");
    }
  });

  $("#initialDeposit").submit(function(event) {
    event.preventDefault();
    initialDeposit = parseFloat($("#initialAmount").val());
    if(isNaN(initialDeposit) === false){
      newAccount.balance += initialDeposit;

      $("#depWith").fadeIn();
      $(".balance").fadeIn();
      $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your balance is $" + newAccount.balance);
    } else {
      alert("Please enter a valid amount.");
      initialDeposit = 0;
    }
  });

  $("#depositForm").submit(function(event) {
    event.preventDefault();
    depositFloat = parseFloat($("#makeDeposit").val());
    depositAmount = parseFloat(depositFloat.toFixed(2));

    if(isNaN(depositAmount) === false){
      newAccount.balance = newAccount.deposit(depositAmount);
      $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your new balance is $" + newAccount.balance);
      $(".balance").fadeIn();
    } else {
      alert("Please enter a valid amount.");
      depositAmount = 0;
    }
  });

  $("#withdrawalForm").submit(function(event) {
    event.preventDefault();
    withdrawalFloat = parseFloat($("#makeWithdrawal").val());
    withdrawalAmount = parseFloat(withdrawalFloat.toFixed(2));
    if(isNaN(withdrawalAmount) === false){
      newAccount.balance = newAccount.withdrawal(withdrawalAmount);
      $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your new balance is $" + newAccount.balance);
      $(".balance").fadeIn();
    } else {
      alert("Please enter a valid amount.");
      withdrawalAmount = 0;
    }
  });

})
