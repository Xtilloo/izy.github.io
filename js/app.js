const form = document.getElementById('newsletter-form');
const submitEmail = document.getElementById('user-email-button');
const userEmail = document.getElementById('user-email').value;

submitEmail.addEventListener("click", function() {
    form.submit();
    alert(`email received: ${userEmail}`)
});