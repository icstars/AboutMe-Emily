//firstname
const grabFirstNameInput = document.getElementById("firstNameInput");
//console.log(grabFirstNameInput);
//lastName
const grabLastNameInput = document.getElementById("lastNameInput");
//console.log(grabLastNameInput);
//birthDate
const grabemailInput= document.getElementById("emailInput");
//console.log(grabemailInput);
//message
const grabmessageInput = document.getElementById("messageInput");
//console.log(grabmessageInput);
//SubmitLIKE
const grabSubmitBtn = document.querySelector(".buttonForm");
//console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log("this is the Send Message button")
    //console.log(grabFirstNameInput.value);
    //console.log(grabLastNameInput.value);
    //console.log(grabemailInput.value);
    //console.log(grabmessageInput.value);
    //paragraph element
    const paragraphElement = document.querySelector(".paragraphResponse")
    const imageElement = document.getElementById("imageResponse")
    
     //when Send Message is clicked the paragraph will display
    paragraphElement.textContent = `Thank you for your message ${grabFirstNameInput.value} ${grabLastNameInput.value}. I'll be in touch soon!`
   
   
    //console.log(`Thank you for your message ${grabFirstNameInput.value} ${grabLastNameInput.value}. I'll be in touch soon!`)

    //clear values
    grabFirstNameInput.value = "";
    grabLastNameInput.value = "";
    grabemailInput.value = "";
    grabmessageInput.value = "";

    //Displays the image after values are cleared
    imageElement.src= "thanks.gif" //sets the source
    imageElement.style.display = "block"; //makes the image visible
})

//constructor function
function Person(firstName, lastName, eMail, message){
    this.firstName = firstName;
    this.lastName = lastName;
    this.eMail = eMail;
    this.message = message;
}


const grabForm = document.querySelector("form");
console.log(grabForm);

const peopleArrayOfObjects = [];

grabForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(grabForm);
    console.log(formData)

    const firstName = formData.get("firstName");
    console.log(firstName);

    const lastName = formData.get("lastName");
    console.log(lastName);

    const eMail = formData.get("eMail");
    console.log(eMail);

    const message = formData.get("message");
    console.log(message);

    const newPerson = new Person(firstName, lastName, eMail, message,);
    console.log(newPerson)
});


