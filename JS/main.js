const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern, highly animated portfolio showcasing skills and projects using glassmorphism and smooth scrolling.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
    tech: ["HTML5", "CSS3", "JS"],
    github: "",
    live: "#"
  },
  {
    title: "E-Commerce Experience",
    description: "Responsive e-commerce frontend architecture with dark mode and smooth 3D card tilt interactions.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/khaledmazen437-lgtm/MHD-E-COMMERCE.git",
    live: "https://khaledmazen437-lgtm.github.io/MHD-E-COMMERCE/"
  },
  {
    title: "Task Manager Dashboard",
    description: "A sleek dashboard interface to manage tasks featuring drag-and-drop UI and deep space aesthetics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    tech: ["Html", "css", "js"],
    github: "https://github.com/khaledmazen437-lgtm/taskmanagment-.git",
    live: "https://khaledmazen437-lgtm.github.io/taskmanagment-/"
  },
  {
    title: "OMAR SAT STORE",
    description: "Responsive e-commerce fULLstack architecture with dark mode and smooth 3D card tilt interactions.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop",
    tech: ["html", "css", "Framer Motion" ,"js","php","mysql"

    ],
    github: "&",
    live: "https://omarsat.store/store/"
  }
];

const skillsData = [
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Figma", icon: "devicon-figma-plain" }
];

// Load Projects
const projectsGrid = document.querySelector('.projects-grid');
projectsData.forEach(project => {
  const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  
  const cardHTML = `
    <div class="project-card fade-in">
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          ${techTags}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="${project.live}" target="_blank" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="glare"></div>
    </div>
  `;
  projectsGrid.innerHTML += cardHTML;
});

// Load Skills
const skillsGrid = document.querySelector('.skills-grid');
skillsData.forEach(skill => {
  const skillHTML = `
    <div class="skill-card fade-in">
      <i class="${skill.icon} skill-icon"></i>
      <h4>${skill.name}</h4>
    </div>
  `;
  skillsGrid.innerHTML += skillHTML;
});

// Adding scroll animation trigger 
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

fadeElements.forEach(el => {
  appearOnScroll.observe(el);
});

// Advanced 3D Hover Effect for Cards 
const cards = document.querySelectorAll('.skill-card, .project-card, .timeline-content, .floating-code-card'); // Included timeline and floating card

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Compute Glare offset
    const glare = card.querySelector('.glare');
    if (glare) {
      let percentX = (x / rect.width) * 100;
      let percentY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
    const glare = card.querySelector('.glare');
    if (glare) {
      glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
    }
  });
});

// WhatsApp Contact Form Integration
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // Format the message for WhatsApp
    const whatsappNumber = "201226935593"; 
    const text = `Hello Mazen,\nI'm ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp in a new tab
    window.open(url, '_blank');
  });
}

// Custom Cursor Magic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Adding a slight delay to the outline for a smooth trailing effect
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });

  // Add Fluid Trail Elements dynamically
  const trail = document.createElement('div');
  trail.className = 'mouse-trail';
  trail.style.left = `${posX}px`;
  trail.style.top = `${posY}px`;
  document.body.appendChild(trail);
  
  // Cleanup trail after animation
  setTimeout(() => {
    trail.remove();
  }, 800);
});

// Re-observe newly added elements
const newFadeElements = document.querySelectorAll('.fade-in');
newFadeElements.forEach(el => appearOnScroll.observe(el));

// Preloader Logic
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1200);
  }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  }
});

// Magnetic Buttons Physics
const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach(elem => {
  elem.addEventListener('mousemove', (e) => {
    const rect = elem.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Max pull is limited
    const xPull = x * 0.4;
    const yPull = y * 0.4;
    elem.style.transform = `translate(${xPull}px, ${yPull}px)`;
  });
  
  elem.addEventListener('mouseleave', () => {
    elem.style.transform = `translate(0px, 0px)`;
    // Apply a springy transition back
    elem.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    setTimeout(() => {
       elem.style.transition = 'transform 0.1s linear';
    }, 500);
  });
});

// Spotlight tracking
window.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// Live Availability Local Time
function updateTime() {
  const timeEl = document.getElementById('local-time');
  if(timeEl) {
    const options = { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeEl.innerText = new Date().toLocaleTimeString('en-US', options) + ' (Cairo)';
  }
}
setInterval(updateTime, 1000);
updateTime();

// Hacker Text Scramble Effect
const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=';
const nameEl = document.getElementById('scramble-name');
if(nameEl) {
  const spanEl = nameEl.querySelector('.highlight');
  const actualText = spanEl ? spanEl.innerText : "Mazen Khaled";
  
  nameEl.addEventListener('mouseenter', () => scrambleText(spanEl || nameEl, actualText));
  setTimeout(() => scrambleText(spanEl || nameEl, actualText), 1500);
}

function scrambleText(element, text) {
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerText = text.split('').map((letter, index) => {
      if(index < iterations) return text[index];
      return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    }).join('');
    
    if(iterations >= text.length) clearInterval(interval);
    iterations += 1/3;
  }, 30);
}

// Custom Context Menu
const contextMenu = document.getElementById('custom-context-menu');
if(contextMenu) {
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.classList.add('visible');
  });
  window.addEventListener('click', () => {
    contextMenu.classList.remove('visible');
  });
}

// ====== Matrix Rain Logic ====== //
const matrixCanvas = document.getElementById('matrix-canvas');
const mCtx = matrixCanvas ? matrixCanvas.getContext('2d') : null;
let mDrops = [];
let matrixWidth, matrixHeight, columns;

if (matrixCanvas && mCtx) {
  const setupMatrix = () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    matrixWidth = matrixCanvas.width;
    matrixHeight = matrixCanvas.height;
    columns = Math.floor(matrixWidth / 20);
    mDrops = [];
    for(let i=0; i<columns; i++) {
       mDrops[i] = Math.random() * -100;
    }
  };
  setupMatrix();
  window.addEventListener('resize', setupMatrix);
  
  const mChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*".split('');
  
  const drawMatrix = () => {
    if (!document.body.classList.contains('matrix-theme')) return;
    
    mCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
    mCtx.fillRect(0, 0, matrixWidth, matrixHeight);
    
    mCtx.fillStyle = "#0F0"; 
    mCtx.font = "15px monospace";
    
    for(let i=0; i<mDrops.length; i++) {
      const text = mChars[Math.floor(Math.random() * mChars.length)];
      mCtx.fillText(text, i * 20, mDrops[i] * 20);
      
      if(mDrops[i] * 20 > matrixHeight && Math.random() > 0.975) {
        mDrops[i] = 0;
      }
      mDrops[i]++;
    }
  };
  setInterval(drawMatrix, 35);
}

// 3. AI Chatbot Logic
const botTrigger = document.getElementById('ai-bot-trigger');
const botWindow = document.getElementById('ai-bot-window');
const closeBot = document.getElementById('close-bot');
const botChatArea = document.getElementById('bot-chat-area');
const botInput = document.getElementById('bot-input-field');
const sendBotBtn = document.getElementById('send-bot-msg');

if(botTrigger && botWindow) {
  botTrigger.addEventListener('click', () => botWindow.classList.toggle('hidden'));
  closeBot.addEventListener('click', () => botWindow.classList.add('hidden'));

  const respond = (msg) => {
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-msg';
    
    const lowerMsg = msg.toLowerCase();
    if(lowerMsg.includes('skill') || lowerMsg.includes('know')) {
      botMsg.innerText = "Mazen is an expert in modern frontend tech and is studying AI & ML at Tanta Uni!";
    } else if(lowerMsg.includes('project')) {
      botMsg.innerText = "Mazen has built real-world apps with full UI/UX execution. Scroll to the projects section!";
    } else if(lowerMsg.includes('contact') || lowerMsg.includes('hire')) {
      botMsg.innerText = "Scroll to the contact section or email him!";
    } else {
      botMsg.innerText = "I am a simple AI. Ask me about Mazen's skills, experience, or projects!";
    }
    
    botChatArea.appendChild(botMsg);
    botChatArea.scrollTop = botChatArea.scrollHeight;
  };

  const processUserMsg = () => {
    const text = botInput.value.trim();
    if(!text) return;
    const userMsg = document.createElement('div');
    userMsg.className = 'user-msg';
    userMsg.innerText = text;
    botChatArea.appendChild(userMsg);
    botInput.value = '';
    botChatArea.scrollTop = botChatArea.scrollHeight;
    setTimeout(() => respond(text), 600);
  };
  
  sendBotBtn.addEventListener('click', processUserMsg);
  botInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') processUserMsg(); });
}

// 4. PWA Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// 5. Theme Switcher Logic
const themeBtns = document.querySelectorAll('.theme-btn');
themeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const theme = e.target.dataset.theme;
    document.body.className = ''; 
    if(theme !== 'default') {
      document.body.classList.add(`${theme}-theme`);
    }
  });
});

// 6. Gravity Fall Easter Egg (Secret code: mazen)
let secretCode = ['m', 'a', 'z', 'e', 'n'];
let keyIndex = 0;
window.addEventListener('keydown', (e) => {
  if(e.key.toLowerCase() === secretCode[keyIndex]) {
    keyIndex++;
    if(keyIndex === secretCode.length) {
      document.body.classList.add('gravity-collapse');
      keyIndex = 0; 
    }
  } else {
    keyIndex = 0;
  }
});

// ====== SENIOR DEV UPGRADES ====== //

// 1. Recruiter DevTools Easter Egg & Tab Visibility
console.log(
  "%c🕵️‍♂️ I see you looking under the hood! \n%cIf you are inspecting my code, we should probably talk. \nContact me to build something amazing together.", 
  "color: #0f0; font-size: 20px; font-weight: bold; background: #000; padding: 10px; border-radius: 5px;", 
  "color: #fff; font-size: 14px; background: #222; padding: 5px; border-radius: 5px; margin-top: 5px;"
);

let docTitle = document.title;
window.addEventListener("blur", () => { document.title = "Come back! 😭 | " + docTitle; });
window.addEventListener("focus", () => { document.title = docTitle; });

// 2. Developer Terminal Logic
const terminalTrigger = document.getElementById('terminal-trigger');
const terminalWindow = document.getElementById('dev-terminal-window');
const closeTerminal = document.getElementById('close-terminal');
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input-field');

if(terminalTrigger && terminalWindow) {
  terminalTrigger.addEventListener('click', () => {
    terminalWindow.classList.toggle('hidden');
    if(!terminalWindow.classList.contains('hidden')) terminalInput.focus();
  });
  closeTerminal.addEventListener('click', () => terminalWindow.classList.add('hidden'));
  
  const printToTerminal = (text, isCommand=false) => {
    const div = document.createElement('div');
    if(isCommand) {
       div.innerHTML = `<span style="color:#fff;">guest@mazen:~$</span> ${text}`;
    } else {
       div.innerHTML = text;
    }
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  };
  
  terminalInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
      const cmd = terminalInput.value.trim().toLowerCase();
      if(!cmd) return;
      printToTerminal(cmd, true);
      terminalInput.value = '';
      
      switch(cmd) {
        case 'help':
          printToTerminal('Available commands: help, whoami, clear, projects, download cv, matrix');
          break;
        case 'whoami':
          printToTerminal('Mazen Khaled - AI/ML Engineering & Frontend Expert.');
          break;
        case 'clear':
          terminalOutput.innerHTML = '';
          break;
        case 'projects':
          document.getElementById('projects').scrollIntoView();
          printToTerminal('Navigating to Projects...');
          break;
        case 'download cv':
          window.open('MAZEN_KHALED_FlowCV_Resume_2026-04-14.pdf');
          printToTerminal('Downloading Resume...');
          break;
        case 'matrix':
          document.body.className = '';
          document.body.classList.add('matrix-theme');
          printToTerminal('Initiating Matrix Protocol... System hacked.');
          break;
        default:
          printToTerminal(`Command not found: ${cmd}. Type 'help' to see list.`);
      }
    }
  });
}

// 3. Cinematic Cypher Preloader & Mouse Explosions
document.addEventListener("DOMContentLoaded", () => {
    // A. Cypher text decode on load
    const titleElement = document.querySelector('.logo-loader');
    // A. Theatre Split Preloader (0-100% Counter)
    const preloaderWrapper = document.getElementById('preloader-wrapper');
    const percentText = document.getElementById('loader-percent');

    if(preloaderWrapper && percentText) {
        let count = 0;
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 5) + 1;
            if(count > 100) count = 100;
            percentText.innerText = count + '%';
            
            if(count === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    preloaderWrapper.classList.add('loaded');
                    setTimeout(() => { preloaderWrapper.style.display = 'none'; }, 1000);
                }, 400); // slight delay at 100%
            }
        }, 20); // very fast counter
    }

    // B. Spotlight Toggle and Mouse Tracking
    const spotlightToggle = document.getElementById('spotlight-toggle');
    const spotlightOverlay = document.getElementById('spotlight-overlay');

    if(spotlightToggle && spotlightOverlay) {
        spotlightToggle.addEventListener('click', () => {
            document.body.classList.toggle('spotlight-on');
        });
        
        window.addEventListener('mousemove', (e) => {
            if(document.body.classList.contains('spotlight-on')) {
                spotlightOverlay.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 30px, rgba(0,0,0,0.98) 180px)`;
            }
        });
    }

    // C. Magnetic Repelling Letters
    const magLetters = document.querySelectorAll('.mag-letter');
    magLetters.forEach(letter => {
        letter.addEventListener('mousemove', (e) => {
            const rect = letter.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // push away from mouse
            const xPush = (x * -0.8);
            const yPush = (y * -1.5) - 10;
            const rotate = x * 1.5;
            
            letter.style.transform = `translate(${xPush}px, ${yPush}px) rotate(${rotate}deg) scale(1.5)`;
            letter.style.color = '#fff';
            letter.style.zIndex = '100';
        });
        
        letter.addEventListener('mouseout', () => {
            letter.style.transform = `translate(0px, 0px) rotate(0deg) scale(1)`;
            letter.style.color = '';
            setTimeout(() => letter.style.zIndex = '1', 400);
        });
    });
});

window.addEventListener('click', (e) => {
    const explosion = document.createElement('div');
    explosion.className = 'click-explosion';
    explosion.style.left = `${e.clientX}px`;
    explosion.style.top = `${e.clientY}px`;
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 600);
});
