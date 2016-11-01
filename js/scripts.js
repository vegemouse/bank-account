var Account = function(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

Account.prototype.deposit = function(depositAmount){
  return this.balance + depositAmount;
}

$(function() {
var inputtedFirstName;
var inputtedLastName;
var initialDeposit;
var depositAmount;

  $("#getAccount").submit(function() {
    event.preventDefault();
    inputtedFirstName = $("#firstName").val();
    inputtedLastName = $("#lastName").val();
    $("#deposit").fadeIn();
  });

  $("#initialDeposit").submit(function(event) {
    event.preventDefault();
    initialDeposit = $("#initialAmount").val();
    var newAccount = new Account(inputtedFirstName, inputtedLastName, initialDeposit);
    console.log(newAccount);
  });
  $("#retCust").click(function() {
    
    $("#depWith").show();
    $("#getAccount").hide();
  });
  $("#depositForm").submit(function(event) {
    event.preventDefault();
    depositAmount = $("#makeDeposit").val();

    console.log(newAccount.deposit(depositAmount));

  });

})
