var global_events = [
    { 
        id: 1, 
        title: "Annual Science Fair", 
        date: "Nov 28, 2025", 
        time: "9:00 AM - 4:00 PM",
        category: 'academics', 
        location: "Gymnasium", 
        type: "register",
        img: "https://ik.imagekit.io/khfk7iqko/scinece.png",
        description: "Join us for a day of discovery! Students from all grades will be presenting their projects. From robotics to biology, come see the future of science."
    },
    { 
        id: 2, 
        title: 'Varsity Basketball Finals', 
        date: "Tonight", 
        time: "7:00 PM",
        category: "sports", 
        location: "Main Arena", 
        type: "live",
        img: "https://ik.imagekit.io/khfk7iqko/basketball.png?updatedAt=1763528308634",
        description: "The big game is here! Watch the Lions take on the Wildcats for the regional championship."
    },
    { 
        id: 3, 
        title: "Spring Musical: Grease", 
        date: "Dec 15, 2025", 
        time: "6:30 PM",
        category: "arts", 
        location: "Auditorium", 
        type: "register",
        img: "https://ik.imagekit.io/khfk7iqko/sing.png?updatedAt=1763528308382",
        description: "The drama club presents the classic musical Grease. Tickets are limited!"
    },
    { 
        id: 4, 
        title: "Debate Championship", 
        date: "Dec 05, 2025", 
        time: "3:00 PM",
        category: "academics", 
        location: "Library Hall", 
        type: "register",
        img: "https://ik.imagekit.io/khfk7iqko/debate.png?updatedAt=1763528308506",
        description: "Our top debaters argue pressing global issues. Open to all students and faculty."
    },
    { 
        id: 5, 
        title: "Holiday Charity Run", 
        date: "Dec 20, 2025", 
        time: "8:00 AM",
        category: "sports", 
        location: "Track Field", 
        type: "register",
        img: "https://ik.imagekit.io/khfk7iqko/chirtsrun.png?updatedAt=1763528308631",
        description: "A 5k run to support local charities. Hot cocoa served at the finish line."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const mobileBtn = document.getElementById('mobilemenubtn');
    let mobileMenu = document.getElementById('mobilemenu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

window.addEventListener('load', () => {
    var preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}