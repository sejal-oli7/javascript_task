let student = "Sejal";
let marks = 85;

console.log(typeof student);
console.log(typeof marks);

if (marks < 0 || marks > 100) {
    console.log(student + ": Invalid marks");
}
else if (marks >= 90) {
    console.log(student + ": Grade A+ Excellent");
}
else if (marks >= 80) {
    console.log(student + ": Grade A very good");
}
else if (marks >= 70) {
    console.log(student + ": Grade B good");
}
else if (marks >= 60) {
    console.log(student + ": Grade C nice");
}
else if (marks >= 40) {
    console.log(student + ": Pass more effort");
}
else {
    console.log(student + ": Fail so sorry yrr");
}
