const navigation = document.querySelector('.top-navigation');
const mobileMenu = document.querySelector('.nav-ul-mobile');
const menuButton = document.querySelectorAll('.btn-tertiary');
const menuItem = document.querySelectorAll('.menu-item');

const openMenu = () => {
  navigation.classList.toggle('top-navigation');
  mobileMenu.classList.toggle('menu-item-new');
};

menuItem.forEach((item) => {
  item.addEventListener('click', openMenu);
});
menuButton.forEach((item) => {
  item.addEventListener('click', openMenu);
});

// modal windows

const workSection = document.querySelector('.grid-container');

const projects = [
  {
    name: "Notes Manager",
    description: "The Notes Manager is a software application that facilitates the storage and categorization of one's ideas in an easily accessible and usable manner. It also includes several additional features, such as the ability to edit, search, and filter the stored notes.",
    image: "./Images/seenotes.png",
    technologies: ["React js", "Node js", "MongoDB", "CSS"],
    sourcelink: "https://github.com/cdmoad/notes_frontend",
    livelink: "https://main--dazzling-alpaca-8d10bc.netlify.app/",
  },
  {
    name: "Travel Companion WebSite",
    description: "This web application serves as a valuable tool for tourists visiting Morocco, assisting them in creating a memorable and enjoyable travel experience by providing a comprehensive guide to the country's most beautiful and desirable destinations, tailored to the individual preferences of each traveler.",
    image: "./Images/wheretravel.png",
    technologies: ["PHP", "HTML", "CSS","JavaScript"],
    sourcelink: "https://github.com/cdmoad/WhereTravel",
    livelink: "",
  },
 
  {
    name: "Mbrouka Presentation WebSite",
    description: "This application, utilizing HTML, CSS, PHP, and JavaScript, has been created to effectively showcase the cooperative of Mbrouka.",
    image: "./Images/mbrouka-web.png",
    technologies: ["Ruby on Rails", "Ruby", "PostgreSQL", "Rspec"],
    sourcelink: "https://github.com/cdmoad/Mbrouka",
    livelink: "",
  },
  {
    name: "Machines Supervision System",
    description: "The machine supervision system includes a timeline, dashboard, and other pages. The dashboard provides real-time data on machine productivity and key performance indicators, allowing for quick analysis and decision-making. It complements the timeline, offering a holistic view of machine performance for proactive productivity management.",
    image: "./Images/timeLine.png",
    technologies: ["HTML", "CSS", "JavaScript", "React js","Redux","TailwindCss"],
    sourcelink: "https://github.com/cdmoad/https://siti-dashboard.netlify.app/-employees-manager",
    livelink: "https://siti-dashboard.netlify.app/",
  },
   /*
  {
    name: "Company Profile",
    description: "This web application retrieves real live data from the Financial modeling prep API. It provides financial information about companies listed on Nasdaq 100 and Dow Jones Market indexes. All these companies are listed on the Home page. Users can filter these companies by searching for a specific company or by choosing one from the dropdown. ",
    image: "./Images/CompanyProfile.png",
    technologies: ["React", "Redux", "Webpack", "CSS3"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/company-profile",
    livelink: "https://sahar-abdelsamad.github.io/company-profile/",
  },
  {
    name: "Delicious Recipes",
    description: "Delicious Recipes is a Webpack project, it retrieves information from two different APIs: Meals DB and Involvement API. The homepage lists some recipes that we can LIKE. The comment button opens a popup window, shows us more information about the recipe, and allows us to leave a comment.",
    image: "./Images/delicious-recipes.png",
    technologies: ["JavaScript", "CSS", "WebPack", "jest"],
    sourcelink: "https://github.com/Sahar-AbdelSamad/delicious-recipes",
    livelink: "https://sahar-abdelsamad.github.io/delicious-recipes/",
  },
  */
];

for (let i = 0; i < projects.length; i += 1) {
  let techno="";
  for(let j=0;j<projects[i].technologies.length;j++){
    techno+=`<h6>${projects[i].technologies[j]}</h6>`        
  }
  workSection.innerHTML+=
  `<div class="item">
   <img src=${projects[i].image}   class="project-image" width="100%"  height="320px"/>
  <div class="flex-container">
    <h4>${projects[i].name}</h4>
    <div class="tags"> 
    ${techno}  
    </div>
    <a class="button popupBtn">See Project</a>
  </div>
  </div>`;
};

const popupSection = document.createElement('section');
popupSection.className = ('popup-section');
document.body.appendChild(popupSection);

const newCloseImg = document.createElement('img');
newCloseImg.className = ('new-close-img');
newCloseImg.src = ('Images/popup-close.svg');
newCloseImg.alt = ('Close icon');
popupSection.appendChild(newCloseImg);

const newProjectImg = document.createElement('img');
newProjectImg.className = ('new-project-img');
newProjectImg.alt = ('project image');
popupSection.appendChild(newProjectImg);

const newTitle = document.createElement('h3');
newTitle.className = ('new-title');
popupSection.appendChild(newTitle);

const newBtns = document.createElement('div');
newBtns.className = ('new-btns');
popupSection.appendChild(newBtns);
const firstBtn = document.createElement('a');
firstBtn.className = ('button');
firstBtn.textContent = ('See Live');
newBtns.appendChild(firstBtn);
const secondBtn = document.createElement('a');
secondBtn.className = ('button');
secondBtn.textContent = ('See Source');
newBtns.appendChild(secondBtn);

const newTechno = document.createElement('div');
newTechno.classList.add('new-techno', 'tags');
popupSection.appendChild(newTechno);

const newDescription = document.createElement('p');
newDescription.className = ('new-description');
popupSection.appendChild(newDescription);

const openPopup = (item) => {
  popupSection.classList.toggle('popup');
  popupSection.classList.toggle('popup-section');
  for (let i = 0; i < projects.length; i += 1) {
    if (item.target === popupBtn[i]) {
      newTitle.textContent = `${projects[i].name}`;
      newProjectImg.src = `${projects[i].image}`;
      newDescription.textContent = projects[i].description;
      newTechno.innerHTML = null;
      for (let j = 0; j < projects[i].technologies.length; j += 1) {
        const newTechnoItem = document.createElement('h6');
        newTechnoItem.textContent = projects[i].technologies[j];
        newTechno.appendChild(newTechnoItem);
      } 
     
      firstBtn.href = projects[i].livelink;
      secondBtn.href = projects[i].sourcelink;
    }
  }
};

const popupBtn = document.querySelectorAll('.popupBtn');

const closeBtn = document.querySelectorAll('.new-close-img');
closeBtn.forEach((item) => { item.addEventListener('click', openPopup); });

popupBtn.forEach((item) => {
  item.addEventListener('click', openPopup);
});
