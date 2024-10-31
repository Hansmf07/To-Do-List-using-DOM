document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Masukkan tugas yang ingin ditambahkan!');
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.addEventListener('click', function() {
        listItem.classList.add('removing');
        
        setTimeout(function() {
            taskList.removeChild(listItem);
        }, 400); 
    });

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});
