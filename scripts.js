"scripts": {
  "dev": "vite",
  "build": "vite build",
  "start": "vite preview"
}
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const loginPopup = document.getElementById('login-popup');
    const closePopup = document.getElementById('close-login-popup');
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');


    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginPopup.style.display = 'flex';
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            loginPopup.style.display = 'none';
        });
    }

    if (loginPopup) {
        loginPopup.addEventListener('click', (e) => {
            if (e.target === loginPopup) {
                loginPopup.style.display = 'none';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;

            if (password === 'codingschool24') {
                alert('Connexion réussie !');
                loginPopup.style.display = 'none';
                window.location.href = 'index2.html';
            } else {
                errorMessage.textContent = 'Mot de passe incorrect. Veuillez réessayer.';
            }
        });
    }

    // Bouton "Log Out"
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert('Déconnecté !');
            window.location.href = 'index.html';
        });
    }
});

// Machine à écrire (Typewriter effect)
const typewriterText = [
    "Bienvenue sur mon Portfolio !",
    "Développeur Web & Mobile",
    "Créons ensemble des projets innovants !"
];

let index = 0;
let charIndex = 0;

function typeText() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    if (charIndex < typewriterText[index].length) {
        element.textContent += typewriterText[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            element.textContent = "";
            charIndex = 0;
            index = (index + 1) % typewriterText.length;
            typeText();
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    typeText();

    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, textarea');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Validation dynamique des champs
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.type === 'email') {
                this.classList.toggle('valid', validateEmail(this.value));
                this.classList.toggle('invalid', !validateEmail(this.value));
            } else {
                this.classList.toggle('valid', this.value.trim() !== '');
                this.classList.toggle('invalid', this.value.trim() === '');
            }
        });
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('invalid');
                isValid = false;
            } else if (input.value.trim() === '') {
                input.classList.add('invalid');
                isValid = false;
            }
        });

        if (isValid) {
            alert('Formulaire valide ! Envoyé !');
            contactForm.reset();
            inputs.forEach(input => input.classList.remove('valid', 'invalid'));
        } else {
            alert('Veuillez remplir correctement tous les champs.');
        }
    });
});
