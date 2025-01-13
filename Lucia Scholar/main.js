//change navbar on scroll

window.addEventListener('scroll', () => (
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
))



//hide/show faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"

        }
    })
})



//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const CloseBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    CloseBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    CloseBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

CloseBtn.addEventListener('click', closeNav)







//Get registration form element
const registrationForm = document.getElementById('registration-form');

//Add an event listener to form submission
registrationForm.addEventListener('submit', (e) =>
{
    e.preventDefault();

    //Get form data
    const formData = new FormData(registrationForm);

    //Send form data to sserver or API
    fetch('api/register', {
        method: 'POST',
        body: formData,
    })
    .then((response) =>
    response.json())
    .then((data) =>
    console.log(data))
    .catch((error) =>
    console.error(error));
});