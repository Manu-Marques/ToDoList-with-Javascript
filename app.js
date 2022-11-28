window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Entrez une tâche');
            return;
}

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.value = task;
        task_input_el.type = 'text';
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Modifier';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Supprimer';

        const task_done_el = document.createElement('button');
        task_done_el.classList.add('checkbox');
        task_done_el.innerHTML = 'Fait';

        task_actions_el.appendChild(task_done_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        task_el.appendChild(task_actions_el);
        
        list_el.appendChild(task_el);

        input.value = '';

        task_done_el.checked = task.completed;

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLocaleLowerCase() === 'modifier') {
                task_input_el.focus();
                task_input_el.removeAttribute('readonly');
                task_edit_el.innerText = 'Sauvegarder';
            } else {
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Modifier';
            }

        });

        task_delete_el.addEventListener('click', () => {
            task_el.remove();
        });

        task_done_el.addEventListener('click', () => {
            task_content_el.completed = ! task_content_el.completed
            finishedTask();
        });
        
        function finishedTask() {
            if ( task_content_el.completed == true) {
                task_content_el.classList.add('done')
            }
            else {
                task_content_el.classList.remove('done')
            }
          }

    })
})