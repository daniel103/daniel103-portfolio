/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*================================= typed js ===================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*================================= translations ===================================*/

let langs = document.querySelector("select"),
     menuHome = document.getElementById("menu-home"),
     menuAbout = document.getElementById("menu-about"),
     menuServices = document.getElementById("menu-services"),
     menuPortfolio = document.getElementById("menu-portfolio"),
     menuContact = document.getElementById("menu-contact"),
     headerTitle = document.getElementById("header-title"),
     headerName = document.getElementById("header-name"),
     headerH3 = document.getElementById("header-h3"),
     myJob = document.getElementById("my-job"),
     headerP = document.getElementById("header-p"),
     headerDownload = document.getElementById("header-download"),
     aboutH2 = document.getElementById("about-h2"),
     aboutH3 = document.getElementById("about-h3"),
     aboutP = document.getElementById("about-p"),
     aboutBtn = document.getElementById("about-btn"),
     servicesH2 = document.getElementById("services-h2"),
     servicesSpan = document.getElementById("services-span"),
     servicesH31 = document.getElementById("services-h3-1"),
     servicesH32 = document.getElementById("services-h3-2"),
     servicesH33 = document.getElementById("services-h3-3"),
     servicesP1 = document.getElementById("services-p-1"),
     servicesP2 = document.getElementById("services-p-2"),
     servicesP3 = document.getElementById("services-p-3"),
     servicesBtn1 = document.getElementById("services-btn-1"),
     servicesBtn2 = document.getElementById("services-btn-2"),
     servicesBtn3 = document.getElementById("services-btn-3"),
     portfolioH2 = document.getElementById("portfolio-h2"),
     portfolioSpan = document.getElementById("portfolio-span"),
     portfolioH41 = document.getElementById("portfolio-h4-1"),
     portfolioH42 = document.getElementById("portfolio-h4-2"),
     portfolioH43 = document.getElementById("portfolio-h4-3"),
     portfolioP1 = document.getElementById("portfolio-p-1"),
     portfolioP2 = document.getElementById("portfolio-p-2"),
     portfolioP3 = document.getElementById("portfolio-p-3"),
     contactH2 = document.getElementById("contact-h2"),
     contactBtn = document.getElementById("contact-btn");

langs.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "he") {
        document.body.setAttribute('dir', 'rtl');
        document.getElementById("menu").style.textAlign = "end";
        menuHome.innerHTML = data.hebrew.menuHome;
        menuAbout.innerHTML = data.hebrew.menuAbout;
        menuServices.innerHTML = data.hebrew.menuServices;
        menuPortfolio.innerHTML = data.hebrew.menuPortfolio;
        menuContact.innerHTML = data.hebrew.menuContact;
        headerTitle.innerHTML = data.hebrew.headerTitle;
        headerName.innerHTML = data.hebrew.headerName;
        headerH3.innerHTML = data.hebrew.headerH3;
        headerP.innerHTML = data.hebrew.headerP;
        headerDownload.innerHTML = data.hebrew.headerDownload;
        aboutH2.innerHTML = data.hebrew.aboutH2;
        aboutH3.innerHTML = data.hebrew.aboutH3;
        aboutP.innerHTML = data.hebrew.aboutP;
        aboutBtn.innerHTML = data.hebrew.aboutBtn;
        servicesH2.innerHTML = data.hebrew.servicesH2;
        servicesSpan.innerHTML = data.hebrew.servicesSpan;
        servicesH31.innerHTML = data.hebrew.servicesH31;
        servicesP1.innerHTML = data.hebrew.servicesP1;
        servicesBtn1.innerHTML = data.hebrew.servicesBtn1;
        servicesH32.innerHTML = data.hebrew.servicesH32;
        servicesP2.innerHTML = data.hebrew.servicesP2;
        servicesBtn2.innerHTML = data.hebrew.servicesBtn2;
        servicesH33.innerHTML = data.hebrew.servicesH33;
        servicesP3.innerHTML = data.hebrew.servicesP3;
        servicesBtn3.innerHTML = data.hebrew.servicesBtn3;
        portfolioH2.innerHTML = data.hebrew.portfolioH2;
        portfolioSpan.innerHTML = data.hebrew.portfolioSpan;
        portfolioH41.innerHTML = data.hebrew.portfolioH41;
        portfolioP1.innerHTML = data.hebrew.portfolioP1;
        portfolioH42.innerHTML = data.hebrew.portfolioH42;
        portfolioP2.innerHTML = data.hebrew.portfolioP2;
        portfolioH43.innerHTML = data.hebrew.portfolioH43;
        portfolioP3.innerHTML = data.hebrew.portfolioP3;
        contactH2.innerHTML = data.hebrew.contactH2;
        contactBtn.innerHTML = data.hebrew.contactBtn;
    }else if (language == "en") {
        document.body.setAttribute('dir', 'ltr');
        document.getElementById("menu").style.textAlign = "start";
        menuHome.innerHTML = data.english.menuHome;
        menuAbout.innerHTML = data.english.menuAbout;
        menuServices.innerHTML = data.english.menuServices;
        menuPortfolio.innerHTML = data.english.menuPortfolio;
        menuContact.innerHTML = data.english.menuContact;
        headerTitle.innerHTML = data.english.headerTitle;
        headerName.innerHTML = data.english.headerName;
        headerH3.innerHTML = data.english.headerH3;
        headerP.innerHTML = data.english.headerP;
        headerDownload.innerHTML = data.english.headerDownload;
        aboutH2.innerHTML = data.english.aboutH2;
        aboutH3.innerHTML = data.english.aboutH3;
        aboutP.innerHTML = data.english.aboutP;
        aboutBtn.innerHTML = data.english.aboutBtn;
        servicesH2.innerHTML = data.english.servicesH2;
        servicesSpan.innerHTML = data.english.servicesSpan;
        servicesH31.innerHTML = data.english.servicesH31;
        servicesP1.innerHTML = data.english.servicesP1;
        servicesBtn1.innerHTML = data.english.servicesBtn1;
        servicesH32.innerHTML = data.english.servicesH32;
        servicesP2.innerHTML = data.english.servicesP2;
        servicesBtn2.innerHTML = data.english.servicesBtn2;
        servicesH33.innerHTML = data.english.servicesH33;
        servicesP3.innerHTML = data.english.servicesP3;
        servicesBtn3.innerHTML = data.english.servicesBtn3;
        portfolioH2.innerHTML = data.english.portfolioH2;
        portfolioSpan.innerHTML = data.english.portfolioSpan;
        portfolioH41.innerHTML = data.english.portfolioH41;
        portfolioP1.innerHTML = data.english.portfolioP1;
        portfolioH42.innerHTML = data.english.portfolioH42;
        portfolioP2.innerHTML = data.english.portfolioP2;
        portfolioH43.innerHTML = data.english.portfolioH43;
        portfolioP3.innerHTML = data.english.portfolioP3;
        contactH2.innerHTML = data.english.contactH2;
        contactBtn.innerHTML = data.english.contactBtn;
    }
}


/*================================= data translations ===================================*/


let data = {
    hebrew: {
        menuHome: "בית",
        menuAbout: "אודות",
        menuServices: "שירותים",
        menuPortfolio: "תיק עבודות",
        menuContact: "צור קשר",
        headerTitle: "ברוך הבא! אני",
        headerName: "דניאל אליאס",
        headerH3: " ואני מפתח Full Stack",
        headerP: "ברוכים הבאים לאתר הפורטפוליו שלי!  אני מפתח Full Stack בעל מוטיבציה עצמית עם יכולות חזקות לפתרון בעיות ורקורד מוכח של הצלחה.אני מאוד מאורגן, פרודוקטיבי ותמיד מחפש הזדמנויות חדשות ללמוד ולצמוח. אנא חקור את אתר הפורטפוליו שלי כדי ללמוד עוד על הניסיון והפרויקטים שלי. תודה לך על התעניינותך",
        headerDownload: "קורות חיים להורדה",
        aboutH2:"קצת עלי",
        aboutH3: "Frontend Developer",
        aboutP: "אני Full Stack Developer עם דגש על Frontend Developer עם ניסיון של שנתיים כפרילנסר, אני עוזר לבעלי עסקים להתקדם דיגיטלית על מנת לספק מידע ולתת שירות ולהשיג עוד לקוחות חדשים.התפקיד שלי הוא לבנות את האתר שלכם ברמה המקצועית ביותר כך שיהיה פונקציונלי וידידותי למשתמש אך יחד עם זאת מתקדם ואטרקטיבי. יתר על כן, אני מוסיף טאץ' אישי למוצר שלך ודואג שהוא מושך את העין וקל לשימוש. המטרה שלי היא להעביר את המסר והזהות שלכם בצורה היצירתית ביותר",
        aboutBtn: "קרא עוד",
        servicesH2: "השירותים שלי",
        servicesSpan: "שירותים",
        servicesH31: "פיתוח מקצה לקצה",
        servicesP1: "בניית מערכת באמצעותה ניתן לרכוש מוצרים או לקבל שירותים בצורה דיגיטלית, בדומה לחנות פיזית",
        servicesBtn1: "ספר לי עוד",
        servicesH32: "אתר תדמית",
        servicesP2: "אתר אינטרנט שמטרתו להציג ולהדגיש את הערך המוסף של עסק מבלי להתמקד במכירות ישירות", 
        servicesBtn2: "ספר לי עוד",
        servicesH33: "דף נחיתה",
        servicesP3: "דף אינטרנט שנועד למשוך משתמשים לפעולה ספציפית, כגון רכישת מוצר, מילוי טופס וכו",
        servicesBtn3: "ספר לי עוד",
        portfolioH2: "הפרויקטים האחרונים",
        portfolioSpan: "הפרויקטים",
        portfolioH41: "עמוד עסקי",
        portfolioP1: "אתר דף אחד עבור אנסטסיה גנייבה",
        portfolioH42: "שרון כושר",
        portfolioP2: "מערכת לתיאום אימונים לשרון פיטנס",
        portfolioH43: "דף הנצחה",
        portfolioP3: "עמוד להנצחת משפחות החיילים ולתרומות",
        contactH2: "צור איתי קשר!",
        contactBtn: "שלח לי",
    },
    english: {
         menuHome: "Home",
         menuAbout: "About",
         menuServices: "Services",
         menuPortfolio: "Portfolio",
         menuContact: "Contact",
         headerTitle: "Welcome! I'M",
         headerName: "Daniel Elias",
         headerH3: "And I'm a Full Stack Developer",
         headerP: "Welcome to my portfolio website! I am a self-motivated Full Stack Developer with strong problem-solving abilities and a proven track record of success. I am highly organized, productive, and always looking for new opportunities to learn and grow. Please explore my portfolio website to learn more about my experience and projects. Thank you for your interest!",
         headerDownload: "Download CV",
         aboutH2: "About Me",
         aboutSpan: "Me",
         aboutH3: "Frontend Developer",
         aboutP: "I'm a Full Stack Developer with an emphasis on Frontend Developer with two years of experience as a freelancer, I help business owners advance digitally in order to provide information and provide service and gain more new customers. My job is to build your website at the most professional level so that it is functional and user-friendly but at the same time advanced and attractive. Furthermore, I add a personal touch to your product and make sure it is eye-catching and easy to use. My goal is to convey your message and identity in the most creative way.",
         aboutBtn: "Read More",
         servicesH2: "My Services",
         servicesSpan: "Services",
         servicesH31: "End-to-end Development",
         servicesP1: "Building a system through which you can purchase products or receive services digitally, similar to a physical store.",
         servicesBtn1: "Tell me more",
         servicesH32: "Corporate Website",
         servicesP2: "A website that aims to present and emphasize the added value of a business without focusing on direct sales.",
         servicesBtn2: "Tell me more",
         servicesH33: "Landing Page",
         servicesP3: "A web page designed to attract users to a specific action, such as purchasing a product, filling out a form, etc.",
         servicesBtn3: "Tell me more",
         portfolioH2: "Latest Projects",
         portfolioSpan: "Projects",
         portfolioH41: "Business page",
         portfolioP1: "One-Page website for Anastasiya Ganeeva",
         portfolioH42: "Sharon Fitness",
         portfolioP2: "A system for scheduling workouts for Sharon Fitness",
         portfolioH43: "Commemorative page",
         portfolioP3: "A page for commemorating the soldiers' families and for donations",
         contactH2: "Contact Me!",
        contactBtn: "Send Message",
    }
}