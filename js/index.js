const noteCach =[];
document.getElementById('note-form').onsubmit = function(e){
    e.preventDefault();

    const noteText = document.getElementById('note-input').value;
    const notePriority = document.getElementById('note-priority').value;

    // calling a function to create a note 
    creatNote(noteText,notePriority);
}

//function thata creates a new note and appends that note into the container
function creatNote(tex,priority) {
   const notesContainer = document.getElementById('notes-container');
   const newP = document.createElement('p');
   newP.className = `note ${priority}`;
   newP.innerText = tex;

   const deletBtn = document.createElement('button');
   deletBtn.className = 'remove-btn';
   deletBtn.innerText = 'X'; 
   deletBtn.onclick = removeNote;
   newP.appendChild(deletBtn);


   notesContainer.appendChild(newP);
}

//remove function-- function that removes element
function removeNote() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.removeChild(this.parentElement);

    // push the romoved items into nenw array
    noteCach.push({
        text: this.parentElement.innerText.replace('X',''),
        priority: this.parentElement.className.split(' ')[1],
    })
    
}
// remove button-- the default ones 
const removeBtns = document.getElementsByClassName('remove-btn');
for (let i = 0; i <removeBtns.length; i ++){
    removeBtns[i].onclick = removeNote;
}

// clear All 
document.getElementById('clear-all').onclick = function(){
    const notes = document.getElementsByClassName('note');
    for (let i = 0; i <notes.length; i++){
        noteCach.push({
            text: notes[i].innerText.replace('X',''),
            priority: notes[i].className.split(' ')[1],

        })
    }
    document.getElementById('notes-container').innerHTML ='';
}

document.getElementById('restore').onclick = function(){
    for(let i = 0; i < noteCach.length; i ++){
        creatNote(noteCach[i].text,noteCach[i].priority);
    }
    noteCach.length=0;
}


