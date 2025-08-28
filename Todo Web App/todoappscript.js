
const form = document.getElementById('taskform')

const pending = document.getElementById('pending');

const completed = document.getElementById('completed');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

form.addEventListener('submit', e => {

  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const desc = document.getElementById('desc').value.trim();
  if (!title || !desc) {
    return}

  const t = {
    id: Date.now(),
    title,
    desc,
    done: false,
    added: new Date().toLocaleString(),
    finished: null


  }
  tasks.push(t)
  save()
  render()
  form.reset()


})

function render() {

  pending.innerHTML = '';
  completed.innerHTML = '';
  tasks.forEach(t => {

    const el = document.createElement('div')
    el.className = 'task';
    const info = document.createElement('div')
    info.className = 'info';

    info.innerHTML = `
      <h4 class="${t.done ? 'completed' : ''}">${t.title}</h4>
      <p>${t.desc}</p>
      <div class="date">Added: ${t.added}${t.done ? '<br>Completed: ' + t.finished : ''}</div>
    `

    const actions = document.createElement('div')
    actions.className = 'actions'

    const edit = document.createElement('button')
    edit.textContent = '✏️ Edit'
    edit.onclick = () => editTask(t.id)


    const del = document.createElement('button')
    del.textContent = '🗑️ Delete'
    del.style.background = '#e74c3c'
    del.onclick = () => removeTask(t.id)

    actions.appendChild(edit)

    actions.appendChild(del)

    if (!t.done) {

      const done = document.createElement('button')
      done.textContent = '✔️ Complete'
      done.style.background = '#2980b9'
      done.onclick = () => completeTask(t.id)
      actions.appendChild(done)


    }

    el.appendChild(info)
    el.appendChild(actions)
    if (t.done) {

      completed.appendChild(el)
    } else {
      pending.appendChild(el)
    }
  

})


}

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(id) {
  tasks = tasks.filter(x => x.id !== id);
  save();;
  render()
}

function completeTask(id) {
  tasks = tasks.map(x => x.id === id ? { ...x, done: true, finished: new Date().toLocaleString() } : x)
  save();
  render();


}

function editTask(id) {
    
  const t = tasks.find(x => x.id === id)
  const newTitle = prompt("Edit Title:", t.title)
  const newDesc = prompt("Edit Description:", t.desc)
  if (newTitle && newDesc) {
    t.title = newTitle
    t.desc = newDesc
    save()
    render()

  }


}

render()
