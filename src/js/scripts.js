class Menu {
  constructor() {
    this.isOpen = false;
  }
  open() {
    this.isOpen = true;
    this.sidebar.classList.add("open");
    this.burger.classList.add("open");
  }
  close() {
    this.isOpen = false;
    this.sidebar.classList.remove("open");
    this.burger.classList.remove("open");
  }
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  init() {
    this.sidebar = document.querySelector(".sidebar");
    this.burger = document.querySelector(".burger");
    this.cross = document.querySelector(".menu-close");
    this.burger.addEventListener("click", () => {
      this.toggle();
    });
    this.cross.addEventListener("click", () => {
      this.close();
    });
  }
}
const menu = new Menu();
const init = () => {
  menu.init();
};
document.addEventListener("DOMContentLoaded", () => {
  init();
});
