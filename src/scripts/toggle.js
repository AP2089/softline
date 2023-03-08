export default class Toggle {

  constructor(elementId) {
    if (!elementId) throw new Error('Id element required');

    this.element = document.getElementById(elementId);
    this.buttons = this.element.querySelectorAll('.js-toggle-btn');
    this.init();
  }

  init() {
    this.buttons.forEach((element) => {
      element.addEventListener('click', this.toggleHandler.bind(this));
    });
  }

  toggleHandler(event) {
    const element = event.target;
    const wrap = element.closest('.js-toggle-wrap');
    const content = wrap.querySelector('.js-toggle-content');

    content.classList.toggle('active');
  }
  
}