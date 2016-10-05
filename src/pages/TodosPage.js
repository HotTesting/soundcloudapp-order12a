'use strict';

var TodosPage = function () {
    var newTodoField = $('#new-todo');
    var tasks = $$('#todo-list>li');

    this.open = function () {
        browser.get('https://todomvc4tasj.herokuapp.com/');
    };

    this.createTask = function (taskName) {
        newTodoField.sendKeys(taskName, protractor.Key.ENTER);
    };

    this.createTasks = function (taskNames) {
        for (var i = 0; i < taskNames.length; i++){
            this.createTask(taskNames[i]);
        }
    };

    this.isTaskPresent = function (taskName) {
        return tasks.element(by.cssContainingText('label', taskName)).isDisplayed();
    };
};