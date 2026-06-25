function calculateGPA(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      sum = sum + 4;
    } else if (arr[i] === "B") {
      sum = sum + 3;
    } else if (arr[i] === "C") {
      sum = sum + 2;
    } else if (arr[i] === "D") {
      sum = sum + 1;
    } else {
      sum = sum + 0;
    }
  }

  var average = sum / arr.length;
  var gpa;

  if (average >= 3.5 && average <= 4) {
    gpa = "A";
  } else if (average >= 2.5 && average < 3.5) {
    gpa = "B";
  } else if (average >= 1.5 && average < 2.5) {
    gpa = "C";
  } else if (average >= 0.5 && average < 1.5) {
    gpa = "D";
  } else {
    gpa = "F";
  }

  return gpa;
}

var studentGrades = ["A", "B", "A", "C"];

document.write("Your GPA is " + calculateGPA(studentGrades));