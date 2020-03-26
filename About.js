const siteContent = {
"topNav": {"Top-Nav-Item-1": "about", "Top-Nav-Item-2": "download", "Top-Nav-Item-2": "help", "Top-Nav-Item-3": "login", "Top-Nav-Item-4": "sign up"},
 "Main-Content": {"H1": "About Us", "Paragraph-1": "With a Spotify suggestor, during Covid-19 you will more easily be able to find new and awesome music", "Paragraph-2": "We know it's hard being stuck at home all day, and we got your back. We are Here to provide you the best music and playlist recommendations your ears have ever heard"},
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
const mainContent = document.querySelector('main');
const mainContentSection = document.querySelector('section');
const mainHeadingContent = document.querySelector('h1');
const mainContentParagraph1 = document.querySelector('p:nth-child(2)');
const mainContentParagraph2 = document.querySelector('p:nth-child(3)');
const mainContentParagraph3 = document.querySelector('p:nth-child(4)');

/******************* Main Content text content ********************/
mainHeadingContent.textContent = siteContent["Main-Content"].H1;
mainContentParagraph1.textContent = siteContent["Main-Content"]["Paragraph-1"];
mainContentParagraph2.textContent = siteContent["Main-Content"]["Paragraph-2"];

/******************* main content styles ***************/

// section margin
const mainContentSectionMargin = mainContent.style.margin = '4rem';

//h1 font size
const headingFontSize = mainHeadingContent.style.fontSize = '3rem';

// paragraph styles
const paragraph1Margin = mainContentParagraph1.style.margin = '1.5rem 1.5rem 1.5rem 0';
const paragraph2Margin = mainContentParagraph2.style.margin = '1.5rem 1.5rem 1.5rem 0';
const paragraph1FontSize = mainContentParagraph1.style.fontSize = '1.2rem';
const paragraph2FontSize = mainContentParagraph2.style.fontSize = '1.2rem';

// main content display
const mainContentSectionFlex = mainContentSection.style.display = 'flex';
const mainContentSectionFlexDirection = mainContentSection.style.flexDirection = 'column';
