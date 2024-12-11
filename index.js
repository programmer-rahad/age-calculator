// Global Functions
function calculateAge(birthDateStr) {
    var birthDate = new Date(birthDateStr);
    var today = new Date();
    var yearsDiff = today.getFullYear() - birthDate.getFullYear();
    var monthsDiff = today.getMonth() - birthDate.getMonth();
    var daysDiff = today.getDate() - birthDate.getDate();
    if (daysDiff < 0) {
        monthsDiff--;
        daysDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
    }
    return {
        years: String(yearsDiff),
        months: String(monthsDiff),
        days: String(daysDiff),
    };
}
// Global Variables
var calculateButton = document.querySelector(".calculate-btn");
var dateInput = document.querySelector(".date-input");
var resultElement = document.querySelector(".result");
// Events 
calculateButton.addEventListener("click", function () {
    var dateValue = dateInput.value.trim();
    if (dateValue === "") {
        resultElement.innerHTML = "Please enter a date.";
        return;
    }
    var birthDate = new Date(dateValue);
    if (birthDate.getTime() > new Date().getTime()) {
        resultElement.innerHTML =
            "Invalid date entered. Please enter a valid date.";
        return;
    }
    var age = calculateAge(dateValue);
    resultElement.innerHTML =
        "Your age is " +
            age.years +
            " years, " +
            age.months +
            " months and " +
            age.days +
            " days";
});
