const tasks = [
    { title: "Do laundry", completed: true, priority: "medium" },
    { title: "Study JavaScript", completed: false, priority: "high" },
    { title: "Buy groceries", completed: false, priority: "low" },
    { title: "Go to the gym", completed: false, priority: "medium" },
];

const priorityCount = tasks.reduce(function(acc, task) {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});
  
  console.log(priorityCount);
  