var Account = function(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
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
  var newAccount = new Account();

  $("#retCust").click(function() {
    $("#depWith").show();
    $("#getAccount").hide();
    $("#initialDeposit").hide();
    newAccount.balance = 0;
  });

  $("#getAccount").submit(function() {
    event.preventDefault();
    inputtedFirstName = $("#firstName").val();
    inputtedLastName = $("#lastName").val();
    $("#deposit").fadeIn();
    newAccount.balance = 0;
  });

  $("#initialDeposit").submit(function(event) {
    event.preventDefault();
    initialDeposit = parseFloat($("#initialAmount").val());
    newAccount.firstName = inputtedFirstName;
    newAccount.lastName = inputtedLastName;
    newAccount.balance += initialDeposit;

    $("#depWith").fadeIn();
    $(".balance").fadeIn();
    $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your balance is $" + newAccount.balance);
  });

  $("#depositForm").submit(function(event) {
    event.preventDefault();
    depositFloat = parseFloat($("#makeDeposit").val());
    depositAmount = parseFloat(depositFloat.toFixed(2));
    newAccount.balance = newAccount.deposit(depositAmount);
    $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your new balance is $" + newAccount.balance);
    $(".balance").fadeIn();
  });

  $("#withdrawalForm").submit(function(event) {
    event.preventDefault();
    withdrawalFloat = parseFloat($("#makeWithdrawal").val());
    withdrawalAmount = parseFloat(withdrawalFloat.toFixed(2));
    newAccount.balance = newAccount.withdrawal(withdrawalAmount);
    console.log(newAccount.balance);
    $("#outputtedBalance").text(newAccount.balance);
    $("#outputtedBalance").html("Hello, " + newAccount.firstName + "! Your new balance is $" + newAccount.balance);
    $(".balance").fadeIn();
  });

})
