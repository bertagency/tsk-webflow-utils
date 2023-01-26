// *******
// Interactions - Global - Menu
// *******

// Using GSAP Main Menu Desktop animation

// Load in Footer

const ideasTrigger = document.querySelector('#ideas-trigger');
const ideasTriggerLink = document.querySelector('#ideas-link');
const ideasList = document.querySelector('#ideas-list');
const projectsTrigger = document.querySelector('#projects-trigger');
const projectsLink = document.querySelector('#projects-link');
const projectsList = document.querySelector('#projects-list');
const sectorsTrigger = document.querySelector('#sectors-trigger');
const sectorsLink = document.querySelector('#sectors-link');
const sectorsList = document.querySelector('#sectors-list');
const servicesTrigger = document.querySelector('#services-trigger');
const servicesLink = document.querySelector('#services-link');
const servicesList = document.querySelector('#services-list');
const columnMiddle = document.querySelector('#menu-column-two');
const columnsAll = document.querySelectorAll('.mainmenu-column');
const linkmenuBottom = document.querySelectorAll('.link-menu-bottom');
const containerBottomLinks = document.querySelector('.container-bottom-menu-links');
const crossMenu = document.querySelector('#closeMenu');

// Opening Middle Column
function OpenColumn() {
  const tl = gsap.timeline();
  tl.to(columnMiddle, {
    duration: 0.4,
    width: '33.33vw',
    ease: 'cubic-bezier(.19, 1, .22, 1)',
  }).to(
    containerBottomLinks,
    { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' },
    0
  );
}

// Opening Ideas Sub Menu
function openIdeas() {
  const tl = gsap.timeline();
  tl.to(
    ideasTriggerLink,
    { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' },
    0
  )
    .to(servicesLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(sectorsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(projectsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(
      columnsAll,
      {
        duration: 0.4,
        backgroundColor: '#38c48c',
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      },
      0
    )
    .fromTo(
      ideasList,
      { opacity: 0 },
      {
        duration: 0.25,
        opacity: 1,
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      }
    );

  return tl;
}

// Opening Projects Sub Menu
function openProjects() {
  const tl = gsap.timeline();
  tl.to(
    ideasTriggerLink,
    { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' },
    0
  )
    .to(servicesLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(sectorsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(projectsLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(
      columnsAll,
      {
        duration: 0.4,
        backgroundColor: '#FFBB64',
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      },
      0
    )
    .fromTo(
      projectsList,
      { opacity: 0 },
      {
        duration: 0.25,
        opacity: 1,
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      }
    );

  return tl;
}

// Opening Sectors Sub Menu
function openSectors() {
  const tl = gsap.timeline();
  tl.to(
    ideasTriggerLink,
    { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' },
    0
  )
    .to(servicesLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(sectorsLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(projectsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(
      columnsAll,
      {
        duration: 0.4,
        backgroundColor: '#FF8F94',
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      },
      0
    )
    .fromTo(
      sectorsList,
      { opacity: 0 },
      {
        duration: 0.25,
        opacity: 1,
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      }
    );

  return tl;
}

// Opening Services Sub Menu
function openServices() {
  const tl = gsap.timeline();
  tl.to(
    ideasTriggerLink,
    { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' },
    0
  )
    .to(servicesLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(sectorsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(projectsLink, { duration: 0.4, color: 'white', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(
      columnsAll,
      {
        duration: 0.4,
        backgroundColor: '#CCA680',
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      },
      0
    )
    .fromTo(
      servicesList,
      { opacity: 0 },
      {
        duration: 0.25,
        opacity: 1,
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      }
    );

  return tl;
}

// Closing Middle Column and Default states
function closeColumn() {
  const tl = gsap.timeline();
  tl.to(
    columnMiddle,
    {
      duration: 0.4,
      width: '0vw',
      ease: 'cubic-bezier(.19, 1, .22, 1)',
    },
    0.1
  )
    .to(
      columnsAll,
      {
        duration: 0.4,
        backgroundColor: '#e9e8e4',
        ease: 'cubic-bezier(.19, 1, .22, 1)',
      },
      0
    )
    .to(
      containerBottomLinks,
      { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' },
      0
    )
    .to(servicesLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(projectsLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(sectorsLink, { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' }, 0)
    .to(
      ideasTriggerLink,
      { duration: 0.4, color: 'black', ease: 'cubic-bezier(.19, 1, .22, 1)' },
      0
    );
  return tl;
}
// Ideas Trigger
ideasTrigger.addEventListener('mouseenter', function () {
  if (columnMiddle.offsetWidth === 0) {
    openIdeas();
  } else {
    OpenColumn();
    openIdeas();
  }
});
// Project Trigger
projectsTrigger.addEventListener('mouseenter', function () {
  if (columnMiddle.offsetWidth === 0) {
    openProjects();
  } else {
    OpenColumn();
    openProjects();
  }
});
// Sectors Trigger
sectorsTrigger.addEventListener('mouseenter', function () {
  if (columnMiddle.offsetWidth === 0) {
    openSectors();
  } else {
    OpenColumn();
    openSectors();
  }
});
// Services Trigger
servicesTrigger.addEventListener('mouseenter', function () {
  if (columnMiddle.offsetWidth === 0) {
    openServices();
  } else {
    OpenColumn();
    openServices();
  }
});
// Closing column if hovered on other sub menu links
for (let i = 0; i < linkmenuBottom.length; i++) {
  linkmenuBottom[i].addEventListener('mouseenter', function () {
    if (columnMiddle.offsetWidth > 50) {
      closeColumn();
    }
  });
}

// Closing the menu and resetting it.

crossMenu.addEventListener('click', function () {
  closeColumn();
});

// Adding removing classes for differnt sub menu lists
document.querySelectorAll('#ideas-trigger').forEach((trigger) => {
  trigger.addEventListener('mouseover', function () {
    document.querySelectorAll('#ideas-list').forEach((target) => target.classList.add('show'));
    document
      .querySelectorAll('#projects-list')
      .forEach((target) => target.classList.remove('show'));
    document.querySelectorAll('#sectors-list').forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#services-list')
      .forEach((target) => target.classList.remove('show'));
  });
});
document.querySelectorAll('#projects-trigger').forEach((trigger) => {
  trigger.addEventListener('mouseover', function () {
    document.querySelectorAll('#projects-list').forEach((target) => target.classList.add('show'));
    document.querySelectorAll('#ideas-list').forEach((target) => target.classList.remove('show'));
    document.querySelectorAll('#sectors-list').forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#services-list')
      .forEach((target) => target.classList.remove('show'));
  });
});
document.querySelectorAll('#sectors-trigger').forEach((trigger) => {
  trigger.addEventListener('mouseover', function () {
    document.querySelectorAll('#sectors-list').forEach((target) => target.classList.add('show'));
    document.querySelectorAll('#ideas-list').forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#projects-list')
      .forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#services-list')
      .forEach((target) => target.classList.remove('show'));
  });
});
document.querySelectorAll('#services-trigger').forEach((trigger) => {
  trigger.addEventListener('mouseover', function () {
    document.querySelectorAll('#services-list').forEach((target) => target.classList.add('show'));
    document.querySelectorAll('#ideas-list').forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#projects-list')
      .forEach((target) => target.classList.remove('show'));
    document.querySelectorAll('#sectors-list').forEach((target) => target.classList.remove('show'));
  });
});
document.querySelectorAll('.link-menu-bottom').forEach((trigger) => {
  trigger.addEventListener('mouseover', function () {
    document
      .querySelectorAll('#services-list')
      .forEach((target) => target.classList.remove('show'));
    document.querySelectorAll('#ideas-list').forEach((target) => target.classList.remove('show'));
    document
      .querySelectorAll('#projects-list')
      .forEach((target) => target.classList.remove('show'));
    document.querySelectorAll('#sectors-list').forEach((target) => target.classList.remove('show'));
  });
});

// *******
// Interactions - Global
// *******

// Universal button Animations // Standard
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.buttonwrapper').forEach((trigger) => {
    trigger.addEventListener('mouseover', function () {
      this.querySelectorAll('.arrow_embed').forEach((target) => target.classList.add('move-right'));
    });
  });

  document.querySelectorAll('.buttonwrapper').forEach((trigger) => {
    trigger.addEventListener('mouseout', function () {
      document
        .querySelectorAll('.arrow_embed')
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove('move-right'))
        );
    });
  });
});

// Universal button Animations

// Down
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.buttonwrapper-90').forEach((trigger) => {
    trigger.addEventListener('mouseover', function () {
      this.querySelectorAll('.down-90').forEach((target) => target.classList.add('move-down'));
    });
  });

  document.querySelectorAll('.buttonwrapper-90').forEach((trigger) => {
    trigger.addEventListener('mouseout', function () {
      document
        .querySelectorAll('.down-90')
        .forEach((target) =>
          [...target.parentElement.children]
            .filter((c) => c === target)
            .forEach((sibling) => sibling.classList.remove('move-down'))
        );
    });
  });
});

// Back Arrow Animation
document.addEventListener('DOMContentLoaded', () => {
  // Hover in on .green-border-careers
  document.querySelectorAll('.green-border-careers').forEach((trigger) => {
    trigger.addEventListener('mouseover', function () {
      this.querySelectorAll('.arrow_embed').forEach((target) => target.classList.add('back-left'));
    });
  });

  // Hover out on
  document.querySelectorAll('.green-border-careers').forEach((trigger) => {
    trigger.addEventListener('mouseout', function () {
      this.querySelectorAll('.arrow_embed').forEach((target) =>
        target.classList.remove('back-left')
      );
    });
  });
});

//Select animation for Ideas Page
const projectSettings = gsap.utils.toArray('#g-button');
projectSettings.forEach((projectSettings) => {
  const topiclist = projectSettings.querySelector('#g-content');
  const arrowNarrow = projectSettings.querySelector('#arrow');
  const navMenu = document.querySelector('#nav-menu');
  const topicSection = document.querySelector('#topics-section');
  //assign as variable topics-section
  const tl = gsap.timeline({ paused: true });

  tl.to(topiclist, { duration: 0.5, autoAlpha: 1, height: 'auto', ease: 'ease.out' }, 0).to(
    arrowNarrow,
    { duration: 0.5, rotate: 270, ease: 'ease.out' },
    0
  );

  //start timeline resting in reversed state
  tl.reverse();

  projectSettings.addEventListener('click', () => {
    //toggle reversed property of my timeline
    tl.reversed(!tl.reversed());
  });

  navMenu.addEventListener('mouseover', () => {
    if (topiclist.offsetHeight === 0) {
    } else {
      tl.reverse();
    }
  });

  topicSection.addEventListener('mouseover', () => {
    if (topiclist.offsetHeight === 0) {
    } else {
      tl.reverse();
    }
  });
});

// Big images scale animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-listing-item-wrapper').forEach((trigger) => {
    trigger.addEventListener('mouseover', function () {
      this.querySelectorAll('.project_listing-image').forEach((target) =>
        target.classList.add('scale')
      );
    });
  });

  document.querySelectorAll('.project-listing-item-wrapper').forEach((trigger) => {
    trigger.addEventListener('mouseout', function () {
      this.querySelectorAll('.project_listing-image').forEach((target) =>
        target.classList.remove('scale')
      );
    });
  });
});

// *******
// Interactions - Load Append and Animate Page Content
// *******

//Load, Append and Animate in to view New Page Content
let nextPageLink;
const currentPageUrl = window.location.href;

$('.section_projects').addClass('first');

// Add class current-menu-link to the Parent of the current menu item (Needed for Collection Lists)
// *** NB Need to check if this is cross browser compliant ***

$('.filternavigation-link:has(.w--current)').addClass('current-menu-link');

// Only complete test for previous siblings if there is a current page in the Projects Nav
if ($('.current-menu-link').length) {
} else {
  $('.filternavigation-link:first-of-type').addClass('current-menu-link');
}

// On link click
$('.filternavigation-link > a:not(.w--current)').on('click', function (e) {
  e.preventDefault();
  //window.scrollTo(0, 0);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  nextPageLink = $(this).attr('href');

  const previousSiblings = (elem) => {
    // create an empty array
    const siblings = [];
    // loop through previous siblings until `null`
    while ((elem = elem.previousElementSibling)) {
      // push sibling to array
      siblings.push(elem);
    }
    return siblings;
  };

  const currentItem = document.querySelector('.filternavigation-wrapper .current-menu-link');
  // get all previous siblings

  const siblings = previousSiblings(currentItem);

  // Get index of current link clicked.
  let clickedPos = $('.filternavigation-wrapper a').index(this);

  clickedPos = clickedPos + 1;
  const prevSibs = siblings.length;

  //console.log ("clickedPos" + clickedPos);
  //console.log ("prevSibs" + prevSibs);

  // Adjust Clicked Position if a secondary meny exists
  if ($('.project-archive-navigation-heading').length) {
    clickedPos = clickedPos - 4;
  }
  /*
   console.log ("clickedPos" + clickedPos);
    console.log ("prevSibs" + prevSibs);
    */

  // Slide either left or right

  if (clickedPos <= prevSibs) {
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        const element = $(response).find('.section_projects').addClass('second');
        $('.section_projects-wrapper').append(element);
      },
      complete: function () {
        pageTransition('fromLeft');
      },
    });
  } else {
    $.ajax({
      url: nextPageLink,
      success: function (response) {
        const element = $(response).find('.section_projects').addClass('second');
        $('.section_projects-wrapper').append(element);
      },
      complete: function () {
        pageTransition('fromRight');
      },
    });
  }
});

function pageTransition(slideDirection) {
  console.log(slideDirection);
  /* Slide from right */
  let x1 = '110vw';
  let x2 = '-110vw';

  if (slideDirection == 'fromLeft') {
    /* Slide from left */
    x1 = '-110vw';
    x2 = '110vw';
  }

  $('html').addClass('animating');
  const tl = gsap.timeline({
    paused: false,
    onComplete: updatePage,
  });
  tl.from('.section_projects.second', {
    x: x1,
    delay: 0.2,
    duration: 0.8,
    ease: 'power2.out',
  });

  tl.to(
    '.section_projects.first',
    {
      x: x2,
      delay: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    },
    0
  );
}

function updatePage() {
  window.location = nextPageLink;
}

// *******
// Interactions - Global - Menu
// *******

// Get URL for Form Element
(function getURL() {
  const input = document.getElementById('url');
  const url = window.location.href;
  input.value = url;
})();
