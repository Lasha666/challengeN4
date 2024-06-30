function submitForm() {
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('last name').value;
    var email = document.getElementById('email').value;
    var queryType = document.querySelector('input[name="queryType"]:checked').id; 
    var message = document.getElementById('message').value;
    var consent = document.getElementById('consent').checked;

    if (!firstName || !lastName || !email || !queryType || !message || !consent) {
        alert('Please fill in all fields and consent to being contacted.');
        return;
    }

    var formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        queryType: queryType,
        message: message,
        consent: consent
    };

    console.log(formData);

    document.getElementById('contactForm').reset();

    alert('Form submitted successfully!');
}