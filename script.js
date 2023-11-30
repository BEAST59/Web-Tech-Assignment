function validationForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const staffNo = document.getElementById('staffNo').value;
    const kulliyyah = document.getElementById('kulliyyah').value;
    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const Amount = document.getElementById('Amount').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    if (
        name.trim() === '' ||
        staffNo.trim() === '' ||
        kulliyyah.trim() === '' ||
        contactNo.trim() === '' ||
        email.trim() === '' ||
        Amount.trim() === '' ||
        start.trim() === '' ||
        end.trim() === ''
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

    const today = new Date().toString().slice(0, 7);
    if (start < today || end < today || start > end) {
        alert('Please enter valid start and end dates');
        return false;
    }

    // Replace the alert with a custom pop-up message
    window.alert('Form successfully submitted!');
}
const donationForm = document.getElementById('donationForm');
donationForm.addEventListener('submit', validationForm);