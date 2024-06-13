let size = Number(prompt("nhap so sv"))
let students = [];
for (let index = 0; index < size; index++) {
    let student = new Object()
    student.id = prompt(`Nhập ID sinh viên ${index + 1}`);
    student.name = prompt(`Nhập tên sinh viên ${index + 1}`);
    students.push(student)
}
console.log(students);