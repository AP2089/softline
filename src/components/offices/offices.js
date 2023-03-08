export default class Offices {

  constructor(elementId) {
    if (!elementId) throw new Error('Id element required');

    this.element = document.getElementById(elementId);
    this.head = this.element.querySelector('.js-offices-head');
    this.scroll = this.element.querySelectorAll('.js-offices-scroll');
    this.buttonToggle = this.element.querySelector('.js-offices-dropdown-btn');    
    this.backdrop = document.createElement('div');
    this.buttonChoose = this.element.querySelectorAll('.js-offices-button-choose');
    this.init();
  }

  init() {
    this.addBackdrop();
    this.buttonToggle.addEventListener('click', this.toggleHandler.bind(this));
    this.backdrop.addEventListener('click', this.toggleHandler.bind(this));

    this.buttonChoose.forEach((element) => {
      element.addEventListener('click', this.chooseHandler.bind(this));
    });
  }

  addBackdrop() {
    this.backdrop.className = 'offices__dropdown-backdrop';
    document.body.appendChild(this.backdrop);
  }

  toggleHandler() {
    this.head.classList.toggle('active');
    this.backdrop.classList.toggle('active');
  }

  chooseHandler(event) {
    const element = event.target;
    const category = element.dataset.category;

    if (!element.classList.contains('active')) {
      this.buttonChoose.forEach(currentElement => {
        if (currentElement.dataset.category !== category) {
          currentElement.classList.remove('active');
        } else {
          currentElement.classList.add('active');
        }

        if (category === 'all' && currentElement.dataset.title) {
          currentElement.classList.add('active');
        }
      });
    }

    if (this.head.classList.contains('active')) {
      this.toggleHandler();
    }

    if (window.innerWidth <= 992) {
      this.scrollTo();
    }
  }

  scrollTo() {
    this.scroll.forEach(scroll => {
      const buttonChoose = scroll.querySelector('.js-offices-button-choose.active');
      let scrollLeft = 0;

      if (buttonChoose && buttonChoose.dataset.title) {
        scrollLeft = Math.ceil(buttonChoose.getBBox().x) - 200;
      } else if (buttonChoose) {
        scrollLeft = Math.ceil(buttonChoose.offsetLeft) - 20;
      }

      scroll.scrollLeft = scrollLeft;
    });
  }
  
}