// set the html template with header>nav>3btns and an empty div#content

export function loadPage() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const buttons = ["Home", "Menu", "About"];

  buttons.forEach((buttonName) => {
    const button = document.createElement("button");
    button.id = buttonName;
    button.classList.add('btns');
    button.textContent = buttonName;
    nav.appendChild(button);
  });

  header.appendChild(nav);

  document.body.appendChild(header);

  const contentDiv = document.createElement("div");
  contentDiv.id = "content";

  document.body.appendChild(contentDiv);
}
