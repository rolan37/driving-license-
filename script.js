const submitBtn = document.getElementById("submit-btn");

const dataName = document.getElementById("name");
const dataDate = document.getElementById("dob");

const alertP = document.getElementById("alert-p-el")

submitBtn.addEventListener("click", () => {
    if(!dataName.value) return errorFieldMessage("Missing Field.")
    if(!(dataName.textContent.length < 2)) return errorFieldMessage("The name should be longer than 2 characters.")

    if(isNaN(new Date(dataDate.value).getTime())) return errorFieldMessage("Invalid Date.")

    if(!userOver18()) return errorFieldMessage("Under 18, must be over 18 to apply.")
})

function userOver18() {
    const age = Math.abs(
		new Date(Date.now() - new Date(dataDate.value).getTime()).getUTCFullYear() - 1970
	);

    return age > 18;
}

function errorFieldMessage(message) {
    alertP.textContent = "";
    alertP.textContent = message;
}