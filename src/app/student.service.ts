import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: any[] = [];

  constructor() {
    // Load students from localStorage on service initialization
    const savedStudents = localStorage.getItem('students');
    this.students = savedStudents ? JSON.parse(savedStudents) : [];
  }

 

  // Get the list of students
  getStudents() {
    return this.students;
  }

  getBoys() {
    return this.students.filter((student) => student.gender === 'Boy');
  }

  // Get girls only
  getGirls() {
    return this.students.filter((student) => student.gender === 'Girl');
  }

  getFailedStudents() {
    return this.students.filter(
      (student) =>
        student.scores.math < 40 ||
        student.scores.english < 40 ||
        student.scores.science < 40
    );
  }
  
   
  getHighestScoreStudent(){
    if (this.students.length === 0) return [];
  
    // Sort students by total score in descending order
    const sortedStudents = [...this.students].sort((a, b) => {
      const totalScoreA = this.calculateTotalScore(a.scores);
      const totalScoreB = this.calculateTotalScore(b.scores);
      return totalScoreB - totalScoreA; // Sort in descending order
    });
  
    // Return the top 2 students
    return sortedStudents.slice(0, 2);
  }
  
  private calculateTotalScore(scores: any) {
    return scores.math + scores.english + scores.science;
  }

  // Add a new student and save to localStorage
  addStudent(student: any) {
    const newId = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 : 1;
    const studentWithId = { ...student, id: newId };
    this.students.push(studentWithId);
    this.saveStudents();
  }

  refreshStudents() {
    const savedStudents = localStorage.getItem('students');
    this.students = savedStudents ? JSON.parse(savedStudents) : [];
    return this.students; // Return the updated array
  }

  deleteStudentById(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
    this.saveStudents();
  }

  // Save the students array to localStorage
  private saveStudents() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
}
