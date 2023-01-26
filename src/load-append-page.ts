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
