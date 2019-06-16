const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 
// write Header items 
const container = document.querySelector('.container');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navitem1 = document.createElement('a');
navitem1.textContent = siteContent.nav['nav-item-1'];
nav.appendChild(navitem1);
const navitem2 = document.createElement('a');
navitem2.textContent = siteContent.nav['nav-item-2'];
nav.appendChild(navitem2);
const navitem3 = document.createElement('a');
navitem3.textContent =siteContent.nav['nav-item-3'];
nav.appendChild(navitem3);
const navitem4 = document.createElement('a');
navitem4.textContent = siteContent.nav['nav-item-4'];
nav.appendChild(navitem4);
const navitem5 = document.createElement('a');
navitem5.textContent = siteContent.nav['nav-item-5'];
nav.appendChild(navitem5);
const navitem6 = document.createElement('a');
navitem6.textContent = siteContent.nav['nav-item-6'];
nav.appendChild(navitem6);
header.appendChild(nav);
const img = document.querySelector('img');
img.src= siteContent.nav['img-src'];
header.appendChild(img);
container.appendChild(header);
// write cta class Section  
const ctaClass = document.querySelector('.cta');
const ctaText = document.querySelector('.cta-text');
// h1 inside cta class
const heading1= document.querySelector('.cta .cta-text >h1');
heading1.textContent = siteContent.cta['h1'];
ctaText.appendChild(heading1);
// button inside cta class
const button1= document.querySelector('.cta .cta-text >button');
button1.textContent = siteContent.cta['button'];
ctaText.appendChild(button1);
ctaClass.appendChild(ctaText);
const img1 = document.querySelector('#cta-img');
img1.src= siteContent.cta['img-src'];
ctaClass.appendChild(img1);
container.appendChild(ctaClass);
// write main-content Section
const mainContentClass = document.querySelector('.main-content');
const TopContent = document.querySelector('.top-content');
const BottomContent = document.querySelector('.bottom-content');
const textContentclass = document.querySelector('.text-content');
// Features 
// h4 inside text-content class
const featuresheading= document.querySelector('.top-content h4');
featuresheading.textContent = siteContent['main-content']['features-h4'];
textContentclass.appendChild(featuresheading);

// p inside text-content class
const featurescontent= document.querySelector('.top-content p');
featurescontent.textContent = siteContent['main-content']['features-content'];
textContentclass.appendChild(featurescontent);

container.appendChild(mainContentClass);
// About 
// h4 inside text-content class
const aboutheading= document.querySelector('.top-content h4');
aboutheading.textContent = siteContent['main-content']['about-h4'];
textContentclass.appendChild(aboutheading);

// p inside text-content class
const aboutcontent= document.querySelector('.top-content p');
aboutcontent.textContent = siteContent['main-content']['about-content'];
textContentclass.appendChild(aboutcontent);

container.appendChild(mainContentClass);
// Middle Image 
const img2 = document.querySelector('#middle-img');
img2.src= siteContent['main-content']['middle-img-src'];
TopContent.appendChild(img2); 
mainContentClass.appendChild(TopContent);
container.appendChild(mainContentClass);
// Services 
// h4 inside text-content class
const Servicesheading= document.querySelector('.bottom-content h4');
Servicesheading.textContent = siteContent['main-content']['services-h4'];
textContentclass.appendChild(Servicesheading);
// p inside text-content class
const Servicescontent= document.querySelector('.bottom-content p');
Servicescontent.textContent = siteContent['main-content']['services-content'];
textContentclass.appendChild(Servicescontent);
BottomContent.appendChild(textContentclass);
mainContentClass.appendChild(BottomContent);
container.appendChild(mainContentClass);
// Product 
// h4 inside text-content class
const Productheading= document.querySelector('.bottom-content h4');
Productheading.textContent = siteContent['main-content']['product-h4'];
textContentclass.appendChild(Productheading);
// p inside text-content class
const Productcontent= document.querySelector('.bottom-content p');
Productcontent.textContent = siteContent['main-content']['product-content'];
textContentclass.appendChild(Productcontent);
BottomContent.appendChild(textContentclass);
mainContentClass.appendChild(BottomContent);
container.appendChild(mainContentClass);
// Vision 
// h4 inside text-content class
const visionheading= document.querySelector('.bottom-content h4');
visionheading.textContent = siteContent['main-content']['vision-h4'];
textContentclass.appendChild(visionheading);
// p inside text-content class
const visioncontent= document.querySelector('.bottom-content p');
visioncontent.textContent = siteContent['main-content']['vision-content'];
textContentclass.appendChild(visioncontent);
BottomContent.appendChild(textContentclass);
mainContentClass.appendChild(BottomContent);
container.appendChild(mainContentClass);

// start Contact section
const contactClass = document.querySelector('.contact');
const contactheading= document.querySelector('h4');
contactheading.textContent = siteContent['contact']['contact-h4'];
contactClass.appendChild(contactheading);

const contactfirstParagraph= document.querySelector('.contact p');
contactfirstParagraph.textContent = siteContent['contact']['address'];
contactClass.appendChild(contactfirstParagraph);

const contactsecondParagraph= document.querySelector('.contact p');
contactsecondParagraph.textContent = siteContent['contact']['phone'];
contactClass.appendChild(contactsecondParagraph);

const contactthirdParagraph= document.querySelector('.contact p');
contactthirdParagraph.textContent = siteContent['contact']['email'];
contactClass.appendChild(contactthirdParagraph);

container.appendChild(contactClass);

// Start footer section 
const footer = document.querySelector('footer');
const footerParagraph= document.querySelector('footer >p');
footerParagraph.textContent = siteContent['footer']['copyright'];
footer.appendChild(footerParagraph);
container.appendChild(footer);
