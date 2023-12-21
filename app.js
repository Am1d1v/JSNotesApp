

const addButton = document.querySelector('.add');


addButton.addEventListener('click', addNewNote('Hi'));

// Add New Note
function addNewNote(text = ""){
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    // Edit Button
    const editButton = note.querySelector('.edit');
    // Delete Button
    const deleteButton = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // Set text in textarea
    textArea.value = text;
    main.innerHTML = marked.parse(text);

    // Delete Note
    deleteButton.addEventListener('click', () => {
        note.remove();
    })

    // Edit Note
    editButton.addEventListener('click', () => {

        // Toggle between edit mode
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    // Input text in textarea
    textArea.addEventListener('input', (event) => {
        const {value} = event.target;

        // Add new text in textarea
        main.innerHTML = marked.parse(value)
    });

    document.body.appendChild(note);
}