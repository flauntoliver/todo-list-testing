// Represents an individual task
export class Task {
  constructor(name, isComplete=false) {
    this.name = name
    this.isComplete = isComplete
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete
  }
}

// Represents a list of tasks
export class TodoList {
  constructor() {
    this.tasks = []
  }

  addTask(taskToAdd) {
    if (taskToAdd.name) {
      this.tasks.push(taskToAdd)
    }
  }

  deleteTask(taskToRemove) {
    const indexToRemove = this.tasks.indexOf(taskToRemove);
    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }
  }
  
  countTotalTasks() {
    return this.tasks.length
  }

  countIncompleteTasks() {
    // creates new array with only the incompleted tasks and gets the length of it
    return this.tasks.filter(task => !task.isComplete).length;
  }

  countCompleteTasks() {
    // creates new array with only the completed tasks and gets the length of it
    return this.tasks.filter(task => task.isComplete).length;
  }

  checkIsEntireListComplete() {
    // if there are no tasks the list is not completed
    if (this.tasks.length === 0) {
      return false;
    }
  
    // if there are incomplete tasks the list is not completed
    if (this.tasks.filter(task => !task.isComplete).length > 0) {
      return false;
    }
  
    return true;
  }  
}