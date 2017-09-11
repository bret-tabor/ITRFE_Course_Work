function submitForm() {

    //Create new array.
    var messages = [];

    //If Your Name is empty. Add it to the array
    var Name = getValue('Name');
    if (Name.length === 0) {
        messages.push(' Your name is required');
    }
    //If Email is empty. Add it to the array
    var Email = getValue('Email');
    if (Email.includes('@') === false || Email.includes('.com') === false) {
        messages.push(' A valid email address is required');
    }
    // If Password is empty. Add it to the array
    var Password = getValue('Password');
    if (Password.length === 0) {
        messages.push(' A password is required');
    }
    // If Time Zone is not selected. Add it to the array
    var TimeZoneSelect = getValue('TimeZoneSelect');
    if (TimeZoneSelect.length === 0) {
        messages.push(' You must select a Time Zone');
    }
    //Loop through array and add messages to the innerHTML of the error-list id
    for (i = 0; i < messages.length; i++) {
        getElm('error-list').innerHTML = messages;
    }

    //Check to see if everything is valid
    if (messages.length === 0) {
        var submittedDate = new Date();
        alert("Submitted Successfully on " + submittedDate.toDateString());
        getElm('error-list').innerHTML = "";
        document.forms["myForm"].reset();
    }

}




// clicking submit creates an alert dialog
getElm('Submit').addEventListener('click', submitForm);

// clicking reset empties inputs
getElm('Reset').addEventListener('click', function () {

    document.forms["myForm"].reset();

});

// getElementById
function getElm(id) {
    return document.getElementById(id);
}

// get value of the element
function getValue(id) {
    return getElm(id).value;
}