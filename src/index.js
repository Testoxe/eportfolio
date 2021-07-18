import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resume from "./assets/resume.pdf";
import article from "./assets/exploroc_article.pdf"

import "./style/main.scss";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".resume");
  resumeButton.setAttribute("href", pdf);
}

initSr();
initTilt();

// uncomment this if you want to attach your resume
addResume(resume);

function addArticle(pdf) {
  if (!pdf) return;

  const articleLink = document.querySelector(".link--article");
  articleLink.setAttribute("href", pdf);
}

addArticle(article);

// ---------------- Modals ----------------------------------------------

// Get the modal
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content")

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".modal-trigger");
for (const img of imgs) {
  img.onclick = function(){
    var imgSource = img.src;
    console.log(img)
    modalContent.src = imgSource;
    modal.style.display = "block";
    $('body').css('overflow','hidden');
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  var goBack = function() {
    modal.style.display = "none";
    $('body').css('overflow','auto')
  }
  span.onclick = goBack

  // Returning by click Esc
  document.body.onkeydown = function(e) {
    if (e.key == "Escape")
        goBack();
};
}
