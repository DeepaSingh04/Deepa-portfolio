// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};


// *=============================== resume opening in a new tab ==================================


// *=============================== resume downloading directly ==================================

let resume1 = document.getElementById("resume-button-1").addEventListener("click", DownloadResume);
let resume2 = document.getElementById("resume-button-2").addEventListener("click", DownloadResume);

function DownloadResume(event) {
    event.preventDefault(); // Prevent default anchor action (if any)
    const resumeUrl = "https://drive.google.com/uc?export=download&id=10pdUpAltSPCjEADvnd4HupEFcMFFvOqc"; // Use the direct download URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Deepa.pdf"; // Set the default name for the downloaded file
    document.body.appendChild(link); // Append the link to the DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after triggering download
}


// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };

    });
    // *=============================== sticky navbar ==================================

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

};

// *=============================== scroll reveal ==================================

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// *===============================  typed js==================================

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Web Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
})
