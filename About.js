const siteContent = {
"topNav": {"Top-Nav-Item-1": "about", "Top-Nav-Item-2": "download", "Top-Nav-Item-2": "help", "Top-Nav-Item-3": "login", "Top-Nav-Item-4": "sign up"},
 "Main-Content": {"H1": "About Us", "Paragraph-1": "With a Spotify suggestor, during Covid-19 you will more easily be able to find new and awesome music"},
// "Bottom-Content": {""},
// "Footer": {""},
};

const header = document.querySelector('header');
/* Top Nav */

// get top nav elements
const topNavBar = document.querySelector('nav');
const topNavAttr = topNavBar.setAttribute('class', 'top-nav')
const topNavItems = document.getElementsByClassName('top-nav-items');


// top nav styles
const topNavBarColor = topNavBar.style.background = 'rgba(0,0,0, 0.4)';
const topNavFlexContainer = topNavBar.style.display = 'flex';
// const topNavBarOpacity = topNavBar.style.opacity = '0.4';
const topNavBarPosition = topNavBar.style.position = 'fixed';
const topNavTop = header.style.top = '0';
const topNavHeight = header.style.height = '70px';
const topNavWidth = topNavBar.style.width = '100%';


// turn the nav items into array elements, add content and style them
const topNavToArray = Array.from(topNavItems);
const mapNavItems = topNavToArray.map((item, index) => {
    item.style.textDecoration = 'none';
    item.style.color = 'white';
    item.style.fontSize = '1.6rem';
    item.style.padding = '2%';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    item.style.flexDirection = 'row';
    return item.textContent = siteContent.topNav[`Top-Nav-Item-${index+1}`];
});

/******************* Main Content ************************/
const mainContentSection = document.querySelector('main');
const mainHeadingContent = document.querySelector('h1');
const mainContent = document.querySelector('p');

const mainContentToArray = Array.from(mainContent);
const mapParagraphTags = mainContentToArray.map((item, index) => {

});

/******************* h1 text content ********************/
mainHeadingContent.textContent = siteContent["Main-Content"].H1;

/******************* main content styles ***************/

// section margin
const mainContentSectionMargin = mainContentSection.style.margin = '4rem';

//h1 font size
const headingFontSize = mainHeadingContent.style.fontSize = '3rem';


