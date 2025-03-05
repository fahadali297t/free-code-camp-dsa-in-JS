function getAverage(scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score >= 0 && score < 60) {
    return "F";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 90 && score < 100) {
    return "A";
  } else if (score === 100) {
    return "A++";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

/*
last part
*/
