// based on document.title
switch (document.title) {
  case "Pahul Panesar":
    document.getElementById('skills').href = "/../skills.html";
    document.getElementById('projects').href = "/../projects.html";
    document.getElementById('contact').href = "/../contact.html";
    break;
  case "Skills":
    document.getElementById('home').href = "/../skills.html";
    document.getElementById('back').href = "/../index.html";
    break;
  case "Projects":
    document.getElementById('home').href = "/../projects.html";
    document.getElementById('back').href = "/../index.html";
    document.getElementById('ai').href = "https://github.com/TinySamosas/EndlessBlock";
    document.getElementById('ds').href = "/../index.html";
    document.getElementById('py').href = "/../index.html";
    document.getElementById('ang').href = "https://github.com/pahulpanesar/millenial-messenger";
    document.getElementById('vr').href = "/../index.html";
    document.getElementById('mtg').href = "/../index.html";

    break;
  case "Contact":
    document.getElementById('home').href = "/../contact.html";
    document.getElementById('back').href = "/../index.html";
    document.getElementById('github').href = "http://www.github.com/pahulpanesar";
    document.getElementById('instagram').href = "https://www.instagram.com/picturesbypahul/";
    document.getElementById('linkedin').href = "https://www.linkedin.com/in/pahul-panesar-830781123/";
    document.getElementById('email').href = "mailto:pahulpn@gmail.com";
    document.getElementById('resume').href = "/../resume.pdf";
    break;
  default:
  console.error("links.js : error");
}
