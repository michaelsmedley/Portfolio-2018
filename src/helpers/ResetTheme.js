const ResetTheme = (element, keep = '') => {
  const classes = element.classList;

  for (let loop = 0; loop <= classes.length; loop += 1) {
    const currentClass = classes.item(loop);
    if (currentClass !== keep) {
      classes.remove(currentClass);
    }
  }
};

export default ResetTheme;
