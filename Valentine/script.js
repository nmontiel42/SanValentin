var yesButton = document.querySelector('#YesB');
var noButton = document.querySelector('#NoB');
var popUp = document.querySelector('#popUp');
var resetBtn = document.querySelector('#resetBtn');
var messages = [
    'really? :(', 'You are so mean', 'Are you sure?', 'Please reconsider...', 'Don\'t do this! 😢',
    'Think again...', 'Why would you do that?', 'No way! 😨', 'Come on, be nice!', 'This is heartbreaking 💔',
    'I thought you loved me...', 'You can still change your mind!', 'I\'m begging you 😭', 'Just say yes!',
    'Have a heart! ❤️', 'You will regret this...', 'But why?', 'Give it another thought!', 'You are being cruel 😢',
    'Not cool! 😡', 'I can\'t believe this!', 'Don\'t make me cry...', 'Are you really that cold-hearted?',
    'Please! Just one yes!', 'Even a little yes?', 'Come on, say yes!', 'What did I ever do to you? 😢',
    'Just press yes, I promise it won’t hurt!', 'Have some mercy! 🙏', 'I\'m losing hope...',
    'My happiness depends on you!', 'You are breaking my heart...', 'How could you?', 'Think about the consequences!',
    'Imagine how I feel!', 'This is the saddest day of my life...', 'I will remember this forever...',
    'There’s still time to fix this!', 'You must have a good reason... right?', 'Just one click won’t hurt!',
    'Come on, let’s be friends again!', 'You don’t have to do this!', 'Is this really what you want?',
    'Last chance to change your mind...', 'You are being evil! 👿', 'Even villains wouldn’t do this!',
    'What if I say please?', 'I promise I’ll be nice!', 'This is not the way!', 'You know you want to press yes...',
    'This is your final warning!', 'If you press no again, I will cry! 😭', 'How could you be so heartless?',
    'I’m running out of things to say...', 'Just click YES already!', 'Fine... I see how it is 😢'
];
var messageIndex = 0;
noButton.addEventListener('click', function () {
    var currentWidth = yesButton.style.width ? parseInt(yesButton.style.width) : 100;
    var currentHeight = yesButton.style.height ? parseInt(yesButton.style.height) : 50;
    var currentFontSize = yesButton.style.fontSize ? parseInt(yesButton.style.fontSize) : 16;
    yesButton.style.width = "".concat(currentWidth + 50, "px");
    yesButton.style.height = "".concat(currentHeight + 50, "px");
    yesButton.style.fontSize = "".concat(currentFontSize + 25, "px");
    noButton.innerHTML = messages[messageIndex];
    // Avanzar en el array y reiniciar si llega al final
    messageIndex = (messageIndex + 1) % messages.length;
});
yesButton.addEventListener('click', function () {
    popUp.style.display = 'flex';
});
resetBtn.addEventListener('click', function () {
    yesButton.style.padding = '12px 24px';
    yesButton.style.border = 'none';
    yesButton.style.borderRadius = '10px';
    yesButton.style.backgroundColor = '#e4a7c7';
    yesButton.style.color = 'white';
    yesButton.style.fontSize = '18px';
    yesButton.style.cursor = 'pointer';
    yesButton.style.transition = 'all 0.2s ease';
    yesButton.style.width = 'auto'; // Ajuste automático al contenido
    yesButton.style.height = 'auto'; // Ajuste automático al contenido
    noButton.innerHTML = 'No';
    popUp.style.display = 'none';
});
//Particles
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            bubble: {
                distance: 100,
                size: 10,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
function particlesJS(elementId, config) {
    // Assuming particles.js library is included in the project
    if (window.particlesJS) {
        window.particlesJS(elementId, config);
    }
    else {
        console.error("particlesJS library is not loaded.");
    }
}
