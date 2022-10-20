const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const addShift = (object, key, value) => {
//     object[key] = value;
//     console.log(object);
//   };
//   addShift(lesson2, 'turno', 'noite');

//   const listKeys = (object) => {
//     console.log(Object.keys(object));
//   };
//   listKeys(lesson1);

//   const objectLength = (object) => {
//     console.log(Object.keys(object).length);
//   };
//   objectLength(lesson3);

//   const listValues = (object) => {
//     console.log((Object.values(object)));
//   };
//   listValues(lesson2);

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

//   const totalStudents = (object) => {
//     const lessons = Object.keys(object);
//     let total = 0;
//     for (index in lessons) {
//         total += object[lessons[index]].numeroEstudantes;
//         }
//         console.log(total);
//     }
//     totalStudents(allLessons);

    // const getValueByNumber = (object, position) => {
    //     const value = Object.values(object)[position];
    //     console.log(value);
    // };
    // getValueByNumber(lesson1, 0);

const verifyPair = (object, key, value) => {
    const array = Object.entries(object);
    let isEqual = false;
    for (let index in array) {
        if (array[index][0] === key && array[index][1] ===value) {
            isEqual = true;
        }
    }
    console.log(isEqual);
};
verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');