let notesAll = [];
showNote ();

document.querySelector ('#save-btn').addEventListener ('click', addNote);

//function for Adding Note

function addNote () {
  let noteText = document.querySelector ('#add-note-text').value;
  notesAll.push (noteText);
  document.querySelector ('#add-note-text').value = null;
  showNote ();
}

//function for displayiing Note

function showNote () {
  let note = document.querySelector ('#content');
  let html = '';
  if (notesAll.length > 0) {
    for (let i = 0; i < notesAll.length; i++) {
      html += `<div class="note" >
           <h2 class="note-heading">Note ${i + 1}</h2>
           <hr>
           <p class="note-text">${notesAll[i]}</p>
           <button class="delete-note" id="${i}" onclick = "deleteNote(this.id)">Delete</button>
       </div>`;
      note.innerHTML = html;
    }
  } else {
    note.innerHTML = `❗ No Notes To Show <br> Add Some Note `;
    note.classList.add ('no-note');
  }
}

//function for deleting Note

function deleteNote (index) {
  // console.log(" i am deleteing ", index);
  if (notesAll.length > 0) {
    notesAll.splice (index, 1);
    showNote ();
  } else {
    note.innerHTML = `❗<br> No Notes To Show <br> Add Some Note `;
  }
}


// function to search


function searchNote(){
  let inputTxt = document.getElementById("search-input").value.toUpperCase();

  console.log(inputTxt);
  
//   let noteElm = document.getElementsByClassName('note');
//   console.log(noteElm);

let noteTxt = document.getElementsByClassName('note-text');

  for(i = 0; i<noteTxt.length; i++){
    
    console.log(noteTxt[i].innerHTML);
    
    var noteDiv = noteTxt[i].parentElement;

    if(noteTxt[i].innerHTML.toUpperCase().includes(inputTxt)){
        noteDiv.style.display = "block";
    }
    else{
        noteDiv.style.display = "none";
    }
    
  }
 
}