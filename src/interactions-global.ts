<
  script // Universal button Animations // Standard
>document.addEventListener('DOMContentLoaded', () => {
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
