// Adicionar tarefa
$('#task-form').submit(function(e) {
    e.preventDefault();
    var taskInput = $('#task-input');
    var taskTime = $('#task-time');
    var taskList = $('#task-list');
    var taskItem = $('<li>').appendTo(taskList);
    var taskCheckbox = $('<input>').attr('type', 'checkbox').appendTo(taskItem);
    taskCheckbox.change(function() {
        if (this.checked) {
        taskItem.addClass('completed');
    } else {
        taskItem.removeClass('completed');
    }
    });
    var taskText = $('<span>').text(taskInput.val()).appendTo(taskItem);
    var taskTimeText = $('<span>').text(taskTime.val()).appendTo(taskItem);
    taskInput.val('');
    taskTime.val('');
});