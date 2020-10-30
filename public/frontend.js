$("#createExercise").on("click", function(event) {
    event.preventDefault();
    var newExercise = {
        exerciseName: $("#exerciseName").val(),
        exerciseSets: $("#exerciseSets").val(),
        exerciseReps: $("#exerciseReps").val(),
        exerciseType: $("#exerciseType").val(),
        exerciseWeight: $("#exerciseWeight").val(),
        exerciseDuration: $("#exerciseDuration").val(),
    }
})