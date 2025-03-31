function downloadCV() {
    window.location.href = "cv.pdf";
}

function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting = "Hello, I'm";
    if (hours < 12) {
        greeting = "Good Morning, I'm";
    } else if (hours < 18) {
        greeting = "Good Afternoon, I'm";
    } else {
        greeting = "Good Evening, I'm";
    }
    greetingElement.innerText = greeting;
}

document.addEventListener("DOMContentLoaded", setGreeting);

document.querySelectorAll('.project-images a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.border = '2px solid #E8489E';
    });
    link.addEventListener('mouseleave', () => {
        link.style.border = 'none';
    });
});

function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    submitForm(event);
});

document.querySelector(".font-page").addEventListener("click", function() {
    this.classList.add("slide-up");
    document.querySelector(".main-portfolio").classList.add("slide-up");
});

const titles = ["Web Developer", "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer"];
let titleIndex = 0;
let highlightElement = document.querySelector(".highlight");

function removeAndRewriteText() {
    let text = highlightElement.textContent;
    let length = text.length;
    let i = 0;

    function removeText() {
        if (i < length) {
            highlightElement.textContent = text.substring(0, length - i - 1);
            i++;
            setTimeout(removeText, 100);
        } else {
            i = 0;
            rewriteText();
        }
    }

    function rewriteText() {
        let newText = titles[titleIndex];
        if (i < newText.length) {
            highlightElement.textContent += newText[i];
            i++;
            setTimeout(rewriteText, 100);
        } else {
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(removeAndRewriteText, 2000);
        }
    }

    removeText();
}

removeAndRewriteText();

function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

document.querySelector(".nav-link ul li a[href='#home']").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".font-page").classList.add("slide-up");
    document.querySelector(".main-portfolio").classList.add("slide-up");

    setTimeout(() => {
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
    }, 1000);
});
