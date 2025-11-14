type student = { id: number; name: string; DoB?: string };
const addToStudentCourse = <T extends student>(studentInfo: T) => {
  return {
    course: "Web Dev",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Boka",
  hasBook: true,
};

const student2 = {
  id: 4523,
  name: "Soka",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 45,
  name: "Poka",
  hasWatch: true,
  DoB: "9-02-1998",
};

const result = addToStudentCourse(student3);
console.log(result);
