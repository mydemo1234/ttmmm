const reelsContainer = document.getElementById('reels-container');
const messagesContainer = document.getElementById('messages-container');
const surpriseButton = document.getElementById('surprise-button');

// Sample reel data - replace with your own content
const reelsData = [
    {
        videoUrl: 'lado kendi Video 2024-08-11 at 20.14.19_5f2d25ff.mp4',
        title: 'Lado Kendi With Gang',
        description: 'Remember our crazy Dance Which Jumped Out Randomly That Day?'
    },
    {
        videoUrl: 'finding dora 2024-08-11 at 20.10.40_0bd28f1e.mp4',
        title: 'Finding Dora',
        description: 'Neech Insaan Bata ke Gayab Hua kar!'
    },
    {
        videoUrl: 'dustbin  2024-08-11 at 20.03.42_8b94982f.mp4',
        title: 'Kuda Daan',
        description: 'Tu Aur Tera Kachre Ka Laal Dabba !'
    },
    {
        videoUrl: 'WhatsApp Video 2024-08-11 at 20.14.41_609c5ae8 (1).mp4',
        title: 'At The Last, You ✨🤌🏻',
        description: 'Keep spreading happiness wherever you go!'
    },
    // Add more reel objects here
];

const messages = [
    // Add more messages here
];

function createReelElement(reel) {
    const reelElement = document.createElement('div');
    reelElement.classList.add('reel', 'floating');
    
    reelElement.innerHTML = `
        <video src="${reel.videoUrl}" loop muted></video>
        <div class="reel-content">
            <h2>${reel.title}</h2>
            <p>${reel.description}</p>
        </div>
    `;

    reelElement.addEventListener('click', () => showFullscreenReel(reel));

    return reelElement;
}

function showFullscreenReel(reel) {
    const fullscreenReel = document.getElementById('fullscreen-reel');
    const fullscreenVideo = document.getElementById('fullscreen-video');
    const fullscreenTitle = document.getElementById('fullscreen-title');
    const fullscreenDescription = document.getElementById('fullscreen-description');

    fullscreenVideo.src = reel.videoUrl;
    fullscreenTitle.textContent = reel.title;
    fullscreenDescription.textContent = reel.description;

    fullscreenReel.classList.remove('hidden');
    fullscreenVideo.play();
}

function closeFullscreenReel() {
    const fullscreenReel = document.getElementById('fullscreen-reel');
    const fullscreenVideo = document.getElementById('fullscreen-video');

    fullscreenReel.classList.add('hidden');
    fullscreenVideo.pause();
}

function loadReels() {
    reelsData.forEach(reel => {
        const reelElement = createReelElement(reel);
        reelsContainer.appendChild(reelElement);
    });
}

function setupScrollTrigger() {
    gsap.utils.toArray('.reel').forEach((reel, i) => {
        ScrollTrigger.create({
            trigger: reel,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => reel.querySelector('video').play(),
            onEnterBack: () => reel.querySelector('video').play(),
            onLeave: () => reel.querySelector('video').pause(),
            onLeaveBack: () => reel.querySelector('video').pause(),
        });
    });
}

function loadMessages() {
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <p>${message.message}</p>
            <p class="author">- ${message.author}</p>
        `;
        messagesContainer.appendChild(messageElement);
    });
}

function setupSurpriseButton() {
    surpriseButton.addEventListener('click', () => {
        surpriseButton.classList.add('popping');
        setTimeout(() => {
            surpriseButton.classList.remove('popping');
            showSurprise();
        }, 500);
    });
}

function showSurprise() {
    // Replace this with your actual surprise content
    alert("🎉 Jaake Kaam Kar Abb Kaamwali Bai!! 🎉");
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function init() {
    loadReels();
    setupScrollTrigger();
    loadMessages();
    setupSurpriseButton();
    setupSmoothScrolling();
    setInterval(createConfetti, 300);

    // Add event listener for closing fullscreen reel
    document.getElementById('close-reel').addEventListener('click', closeFullscreenReel);
}

// Start the application
init();