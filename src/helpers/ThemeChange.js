import ResetTheme from './ResetTheme';

const changeTheme = themeLink => {
  const linkHref = themeLink.getAttribute('href');
  const theme = themeLink.dataset.themeChange;
  const bodyTag = document.getElementsByTagName('body')[0];

  bodyTag.classList.remove('loaded');
  

  if (theme) {
    setTimeout(() => {
      ResetTheme(bodyTag);
      bodyTag.classList.add(theme);
    }, 750);
  }

  setTimeout(() => {
    window.location.href = linkHref;
  }, 1500);
};

const ThemeChange = () => {
  const TransitionLinks = document.querySelectorAll('[data-theme-change]');

  for (let loopCount = 0; loopCount < TransitionLinks.length; loopCount += 1) {
    const themeLink = TransitionLinks[loopCount];
    themeLink.addEventListener('click', e => {
      e.preventDefault();
      changeTheme(themeLink);
    });
  }
};

export default ThemeChange;
