"use strict";
var students = [
  { id: 1000, nom: "jhon", prenom: "Doe", note: [14, 5] },
  { id: 2000, nom: "Bob", prenom: "Carlton", note: [7, 1] },
  { id: 3000, name: "Rayane", prenom: "Smith", note: [13, 3] },
]; //tableau d'objets vu dans le slide 40

function A() {
  //fonction , vue dans le slide 45
  for (students of students) {
    //boucle, vue dans le slide 44
    let moyenne = (students.note[0] + students.note[1]) / 2 + 5;

    if (B(moyenne)) {
      //condition vue dans le slide 42
      console.log(students.id + " admis");
    } else {
      console.log(students.id + " ajourné");
    }
  }
}
function B(moyenne) {
  return moyenne >= 10; //operation rationnelle vue dans le slide 41
}
