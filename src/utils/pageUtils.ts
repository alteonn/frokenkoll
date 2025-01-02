export const getPageType = () => {
  const path = window.location.pathname;
  
  switch (path) {
    case '/':
      return 'home';
    case '/ratsit-borttagning':
      return 'ratsit';
    case '/mrkoll-borttagning':
      return 'mrkoll';
    case '/hitta-borttagning':
      return 'hitta';
    case '/eniro-borttagning':
      return 'eniro';
    case '/birthday-borttagning':
      return 'birthday';
    case '/upplysning-borttagning':
      return 'upplysning';
    case '/merinfo-borttagning':
      return 'merinfo';
    case '/google-borttagning':
      return 'google';
    case '/sparra-adressandring':
      return 'addressBlock';
    case '/adresslaset':
      return 'addressLock';
    default:
      return 'home';
  }
};