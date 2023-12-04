function validationForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const staffNo = document.getElementById('staffNo').value;
    const kulliyyah = document.getElementById('kulliyyah').value;
    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const Amount = document.getElementById('Amount').value;
    const start = new Date(document.getElementById('start').value);
    const end = new Date(document.getElementById('end').value);
    const options = document.getElementById('options').value;
    const today = new Date();

    if (
        name.trim() === '' ||
        staffNo.trim() === '' ||
        kulliyyah.trim() === '' ||
        contactNo.trim() === '' ||
        email.trim() === '' ||
        Amount.trim() === '' ||
        !document.getElementById('start').value ||
        !document.getElementById('end').value ||
        options.trim() === ''
    ) {
        alert('Please fill in this form');
        return false;
    }

    const emailFormat = /^\S+@\S+\.\S+$/;
    if (!email.match(emailFormat)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (isNaN(Amount)) {
        alert('Please enter a valid deduction amount');
        return false;
    }

    if (start >= today || start > today || end < today) {
        alert('Please enter valid start and end dates');
        return false;
    }

    window.alert('Form successfully submitted!');
}

const donationForm = document.getElementById('donationForm');
donationForm.addEventListener('submit', validationForm);
