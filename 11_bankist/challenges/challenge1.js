// Data
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3,];
const dogsKate2 = [10, 5, 6, 1, 4];

const filterDogs = function (arr) {
  let filteredArr = arr;
  filteredArr.shift();
  filteredArr.pop();
  filteredArr.pop();
  return filteredArr;
}

const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorr = filterDogs(dogsJulia);
  const allDogs = [...dogsJuliaCorr, ...dogsKate]
  
  console.log(allDogs);
  for (const [index, age] of allDogs.entries()) {
    const base = `Dog number ${index + 1} is `;
    const appendix = `${age >= 3 ? `an adult, and is ${age} years old` : `still a puppy`}`
    console.log(base + appendix);
  }
};

checkDogs(dogsJulia1, dogsKate1);

