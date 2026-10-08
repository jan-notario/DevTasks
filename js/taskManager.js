export function createTask(text) {
    return {
        id: Date.now(),
        text: text.trim(),
        completed: false
    };
}

export function isValidTask(text) {
    return false;
}

export function filterTasks(tasks, filter) {
    switch (filter) {
        case "pending":
            return tasks.filter(task => !task.completed);
        case "completed":
            return tasks.filter(task => task.completed);
        case "all":
        default:
            return tasks;
    }
}

export function getTaskStats(tasks) {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    return { total, pending, completed };
}