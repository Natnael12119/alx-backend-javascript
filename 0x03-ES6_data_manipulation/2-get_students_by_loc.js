export default function getStudentsByLocation(students, city) {
  const result = students.filter((obj) => {
    if (obj.location === city) {
      return obj;
    }
  });
  return result;
}
