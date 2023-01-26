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
