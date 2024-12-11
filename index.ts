// Global Functions
function calculateAge(birthDateStr: string): {
  years: string;
  months: string;
  days: string;
} {
  var birthDate: Date = new Date(birthDateStr);
  var today: Date = new Date();

  var yearsDiff: number = today.getFullYear() - birthDate.getFullYear();
  var monthsDiff: number = today.getMonth() - birthDate.getMonth();
  var daysDiff: number = today.getDate() - birthDate.getDate();

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
var calculateButton = document.querySelector(
  ".calculate-btn"
) as HTMLButtonElement;
var dateInput = document.querySelector(".date-input") as HTMLInputElement;
var resultElement = document.querySelector(".result") as HTMLParagraphElement;

// Events 
calculateButton.addEventListener("click", function (): void {
  var dateValue: string = dateInput.value.trim();
 
  if (dateValue === "") {
    resultElement.innerHTML = "Please enter a date.";
    return;
  }

  var birthDate: Date = new Date(dateValue);

  if (birthDate.getTime() > new Date().getTime()) {
    resultElement.innerHTML =
      "Invalid date entered. Please enter a valid date.";
    return;
  }

  const age: { years: string; months: string; days: string } =
    calculateAge(dateValue);

  resultElement.innerHTML =
    "Your age is " +
    age.years +
    " years, " +
    age.months +
    " months and " +
    age.days +
    " days";
});
 