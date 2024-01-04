//firstname
const grabFirstNameInput = document.getElementById("firstNameInput");
console.log(grabFirstNameInput);
//lastName
const grabLastNameInput = document.getElementById("lastNameInput");
console.log(grabLastNameInput);
//birthDate
const grabemailInput= document.getElementById("emailInput");
console.log(grabemailInput);
//message
const grabmessageInput = document.getElementById("messageInput");
console.log(grabmessageInput);
//SubmitLIKE
const grabSubmitBtn = document.querySelector(".buttonForm");
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this is the Send Message button")
    console.log(grabFirstNameInput.value);
    console.log(grabLastNameInput.value);
    console.log(grabemailInput.value);
    console.log(grabmessageInput.value);
    //paragraph element
    const paragraphElement = document.querySelector(".paragraphResponse")
    paragraphElement.textContent = `Thank you for your message ${grabFirstNameInput.value} ${grabLastNameInput.value}. I'll be in touch soon!`
    //when LIKE is clicked the paragraph will display
    //It's a pleasure to meet you firstName LastName. I'll be in touch soon!
    
    console.log(`Thank you for your message ${grabFirstNameInput.value} ${grabLastNameInput.value}. I'll be in touch soon!`)

    //clear values
    grabFirstNameInput.value = "";
    grabLastNameInput.value = "";
    grabemailInput.value = "";
    grabmessageInput.value = "";
})




