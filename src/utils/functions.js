export default function heading(path) {
  var pathList = {
    '/': 'home',
    '/events': 'events',
    '/team': 'team',
    '/aboutus': 'aboutus',
    '/contactus': 'contactus',
    '/blog': 'blog',
    '/joinus': 'joinus',
  };

  var d = document.querySelector('.header__funcIcon__active');
  if (d) {
    d.classList.remove('header__funcIcon__active');
  }

  document
    .getElementById(pathList[path])
    .classList.add('header__funcIcon__active');
}
