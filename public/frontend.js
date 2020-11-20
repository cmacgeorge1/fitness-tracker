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
    console.log(newExercise)

    $.ajax("/api/saveWorkout", {
        method: "POST",
        data: newExercise
    }).then (function(results) {
        console.log(results, "Hello")
        var id = results._id
        $.ajax("/api/saveWorkout/" + id, {
            method: "PUT",
            data: newExercise
        }).then (function(results) {
            console.log(results);
            location.reload()
        })
    })
})

$.get("/exerciseData").then (function(results) {
    console.log(results);
    if (results.length > 0) {

    
    $("#updateExercise").attr("data-id", results[results.length - 1]._id)
    var exerciseList = results[results.length - 1].exercises
    var htmlString = `<table>
    <thead>
    <th>Name</th>
    <th>Sets</th>
    <th>REPs</th>
    <th>Type</th>
    <th>Weight</th>
    <th>Duration</th>
    </thead>
    <tbody>`
    for (let i = 0; i < exerciseList.length; i++) {
        htmlString += `
        <tr>
        <td>${exerciseList[i].exerciseName}</td>
        <td>${exerciseList[i].exerciseSets}</td>
        <td>${exerciseList[i].exerciseReps}</td>
        <td>${exerciseList[i].exerciseType}<td>
        <td>${exerciseList[i].exerciseWeight}<td>
        <td>${exerciseList[i].exerciseDuration}<td>
        `
    }
    htmlString += '</tbody></table>'
    $("#prevWorkout").append(`
    <div id="${results[results.length - 1]._id}">${htmlString}</div>`)
    }
    else {
        $("#updateExercise").hide()
    }
})

$("#updateExercise").on("click", function(event) {
    event.preventDefault();
    var newExercise = {
        exerciseName: $("#exerciseName").val(),
        exerciseSets: $("#exerciseSets").val(),
        exerciseReps: $("#exerciseReps").val(),
        exerciseType: $("#exerciseType").val(),
        exerciseWeight: $("#exerciseWeight").val(),
        exerciseDuration: $("#exerciseDuration").val(),
    }
    console.log(newExercise)
    var id = $("#updateExercise").attr("data-id")

    $.ajax("/api/saveWorkout/" + id, {
        method: "PUT",
        data: newExercise
    }).then (function(results) {
        console.log(results);
        location.reload()
    })
})