class Student {
  constructor(firstName, lastName, year = 1) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  }
}

const student1 = new Student('Miso', 'Kim', 4);
console.log(student1.fullName());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.markLate());
console.log(student1.addScore(80));
console.log(student1.addScore(76));
console.log(student1.addScore(17));
console.log(student1.calculateAverage());
