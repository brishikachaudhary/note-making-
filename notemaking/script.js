// const notesContainer= document.querySelector(".container");
// const createbtn= document.querySelector(".btn");
// let notes= document.querySelectorAll(".input-box");

// /* function showNotes(){
//     notesContainer.innerHTML=localStorage.getItem("notes");
// }
// showNotes(); */


// /* ashu's */

// function showNotes() {
//     const storedNotes = localStorage.getItem("notes");

//     if (storedNotes) {
//         console.log("hello");
//         notesContainer.innerHTML = storedNotes;
//     }
// }

// showNotes();




// function updateStorage(){
//     localStorage.setItem("notes",notesContainer.innerHTML);
// }

// createbtn.addEventListener("click",()=>{
//     let inputBox=document.createElement("p");
//     let img=document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="trash.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })



// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="IMG"){
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//      else if(e.target.tagName==="p"){
//          notes=document.querySelectorAll(".input-box");
//         notes.forEach(nt => {
//              nt.onKeyup =function() {
//                 updateStorage();
//             }
//          })
//      }
// })

// document.addEventListener("keydown",event=>{
//     if(event.key==="Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })


document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");

    function showNotes() {
        const storedNotes = localStorage.getItem("notes");

        if (storedNotes) {
            notesContainer.innerHTML = storedNotes;
        }
    }

    function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
    }

    createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "trash.png";
        inputBox.appendChild(img);  // Append the image to the paragraph, not the container
        notesContainer.appendChild(inputBox);

        // Update notes after creating a new one
        notes = document.querySelectorAll(".input-box");
    });

    notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            updateStorage();
        } else if (e.target.tagName === "P") {
            e.target.onkeyup = function () {
                updateStorage();
            };
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    });

    showNotes();
});





