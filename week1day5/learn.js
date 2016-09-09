var learningObjectives = ["Java", "Javscript", "Ruby"];

function printLearningObjective(arr) {
  learningObjectives.forEach(function (objective){
    console.log("I need to learn " + objective + ".");
  });
}

module.exports = {
  learningObjectives: learningObjectives,
  whatToDo: printLearningObjective
};
