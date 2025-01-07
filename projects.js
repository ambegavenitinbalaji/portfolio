const projectData = {
    vitthalKSK: {
        title: "Vitthal Krushi Seva Kendra",
        name: "Vitthal Krushi Seva Kendra",
        description: "Description: Vitthal Krushi Seva Kendra is a website for a local agriculture business. The website is built using HTML, CSS, and JavaScript.",
        image: "assets/img/P-1.png",
        techStack: "Tech Stack: HTML, CSS, JavaScript",
        link: "https://vitthalksk.netlify.app/"
    },
    portfolio: {
        name: "Portfolio",
        description: "Description: Portfolio is a website to showcase my projects and skills. The website is built using HTML, CSS, and JavaScript.",
        image: "assets/img/P-2.png",
        techStack: "Tech Stack: HTML, TailwindCSS, JavaScript, Figma",
        link: "https://nitinambegave.netlify.app/"
    },
    shortify: {
        name: "Shortify",
        description: "Description: Shortify is a lightweight and user-friendly Chrome extension designed to simplify the process of shortening URLs. Users can instantly convert long, cumbersome web addresses into concise and shareable links directly from their browser. This extension seamlessly integrates with the browser to enhance user productivity, providing a hassle-free and efficient URL shortening experience.",
        image: "assets/img/P-5.png",
        techStack: "Tech Stack: HTML, TailwindCSS, Node.js, MongoDB, Express.js",
        link: "https://shortify-nitin.herokuapp.com/"
    },
    adBlocker: {
        name: "Ad Blocker",
        description: "Description: Ad Blocker is a chrome extension that blocks ads from appearing on websites. The extension is built using HTML, CSS, and JavaScript.",
        image: "assets/img/P-6.png",
        techStack: "Tech Stack: HTML, TailwindCSS, JavaScript",
        link: ""
    },
    flashChat: {
        name: "Flash Chat",
        description: "Description: Flash Chat is a real-time chatting app. The app is built using Flutter and Dart.",
        image: "img/P-3.png",
        techStack: "Tech Stack: Flutter, Dart, Firebase, FirebaseAuth, Cloud Firestore",
        link: ""
    },
    bmiCalaulator: {
        name: "BMI Calculator",
        description: "BMI Calculator is a simple app to calculate BMI. The app is built using Flutter and Dart.",
        image: "./img/P-4.png",
        techStack: "Flutter, Dart, Figma",
        link: ""
    },
};

// Get project ID from URL's
console.log(new URLSearchParams(window.location.search).get("project"));

const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

// Get project details
const project = projectData[projectId];
console.log("Project Data: ", project);

// Update the page content
if(project){
    document.getElementById("project-name").textContent = project.name;
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-stack").textContent = project.techStack;
    document.getElementById("project-link").href = project.link;
} else {
    document.getElementById("project-details").innerHTML =     "<p class='text-center text-xl'>Project not found. Please return to the <a href='index.html' class='text-blue-500'>portfolio page</a>.</p>";
}