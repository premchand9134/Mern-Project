import axios from "axios";
let noteListRootElement = document.querySelector('.notesList')
let noteBtn = document.querySelector('#createNoteButton')
let notes = []
let updatingId = null;

noteBtn.addEventListener('click',async ()=>{
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;
    const available = document.querySelector('input[name="available"]:checked')?
    document.querySelector('input[name="available"]:checked').value : " ";

    if(!first_name || !last_name || !email || !phone || !role || !available){
        document.getElementById('warning-msg').innerHTML = 'All Field are required'
    }

    let body = {first_name,last_name,email,phone,role,available}

    if(updatingId){
        let result = await axios.put(`http://localhost:4000/api/v1/players/update-player/${updatingId}`,body)
        updatingId = null;
        noteBtn.innerText = "Submit" 
    }else{
        let res =  await axios.post('http://localhost:4000/api/v1/players/add-players',body)
        document.getElementById('warning-msg').innerHTML = ''
    }    
    renderElementToScreen()

    

})


async function renderElementToScreen(){


    noteListRootElement.innerHTML = ''
    let players  = await axios.get('http://localhost:4000/api/v1/players/get-players')
    notes = players.data.data
    if(Array.isArray(notes)){
        notes.forEach(note =>{
            renderNoteToList(note, note._id)
        })
    }
    
    
}

// document.querySelector('#DeleteNotes').addEventListener('click', ()=>{
//     console.log("Hi");
//     document.querySelectorAll('.note').forEach(note=>{
//         note.remove()
//     })
    
// })


function renderNoteToList(note,uniqueID){         
    
        let noteDiv = document.createElement('div')
        noteDiv.classList.add('note',`note${uniqueID}`)
        noteDiv.id = "mainDiv"
        let noteTitle = document.createElement('h4')
        
        let noteContent = document.createElement('p')
        let playerMobile = document.createElement('p')
        let playeravailablity = document.createElement('p')
        let playerRole = document.createElement('p')
       
        let noteDeleteButton = document.createElement('button')
        noteDeleteButton.className = 'delete'
        let updateButton = document.createElement('button')
        updateButton.className = 'update'

        
        updateButton.addEventListener('click',()=>{
           updatePlayer(uniqueID,note)
        })

        noteTitle.innerText = `Name : ${note.first_name} ${note.last_name}`;
        noteContent.innerText = `Email: ${note.email}`
        playerMobile.innerHTML = `Phone: ${note.phone}`
        playeravailablity.innerText = `available: ${note.available ? "Yes" : "No"}`
        playerRole.innerText = `Role: ${note.role}`
        noteDeleteButton.innerText = 'Delete'
        updateButton.innerText = 'Update'


        noteDeleteButton.addEventListener('click',()=>{
            
            removeElementFromNotesList(uniqueID)
            
        })

        noteDiv.appendChild(noteTitle)
        noteDiv.appendChild(noteContent)
        noteDiv.appendChild(playerRole)
        noteDiv.appendChild(playeravailablity)
        noteDiv.appendChild(playerMobile)
        noteDiv.appendChild(noteDeleteButton)
        noteDiv.appendChild(updateButton)

        noteListRootElement.appendChild(noteDiv)

        document.getElementById('first_name').value = ''
        document.getElementById('last_name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('role').value = ''

                
}   


async function removeElementFromNotesList(id){
    console.log(id);
    let res = await axios.delete(`http://localhost:4000/api/v1/players/delete-player/${id}`)
    console.log(res.data);    
    document.querySelector(`.note${id}`).remove() 
    renderElementToScreen()

    

    
}

// function addNoteToLocalStorage(note,uniqueID){
//     note = {...note,uniqueID}

//     notes.push(note)

//     localStorage.setItem('notes', JSON.stringify(notes))
// }

async function updatePlayer(uniqueID,note) {
    
    document.getElementById('first_name').value = note.first_name;
    document.getElementById('last_name').value = note.last_name;
    document.getElementById('email').value = note.email;
    document.getElementById('phone').value = note.phone;
    document.getElementById('role').value = note.role;
    note.available ? document.getElementById('role_yes').checked = true:
    document.getElementById('role_no').checked = true;

    updatingId = uniqueID
    noteBtn.innerHTML = 'Update'
}

renderElementToScreen()
