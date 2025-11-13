const createArrayWithString = (value: string) => {
  return [value];
};

const createArrayWithNumber = (value: number) => {
  return [value];
};

const createArrayWithUserObject = (value: { id: string; name: string }) => {
  return [value];
};

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Earth");
const arrNumber = createArrayWithGeneric(524);
const arrObj = createArrayWithGeneric({ id: "BoKa", ig: 21 });

// ***********************Tuple*****************************
// this is commom and general and its lengthy and time wasting
const createArrayWithTuple = (param1: string, param2: string) => {
  return [param1, param2];
};
// generics
const createArrayWithTupleGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const result1 = createArrayWithTupleGeneric("Boka", true);
const result2 = createArrayWithTupleGeneric(3524, { name: "Boka" });

const addStudentToCourse = <T>(studentInfo: T) => {
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
  id: 453,
  name: "Soka",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);
console.log(result);
