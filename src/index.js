import { loadAbout } from "./loadAbout";
import { loadHome } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadPage } from "./loadPage";

document.addEventListener("DOMContentLoaded", () => {
  loadPage();

  const buttons = document.querySelectorAll(".btns");
  console.log(buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "Home":
          loadHome();
          break;
        case "Menu":
          loadMenu();
          break;
        case "About":
          loadAbout();
          break;
        default:
          console.warn("unknown btn");
      }
    });
  });
});
