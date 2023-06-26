const chapter_container = document.getElementById('chapter_container');
const hr = document.getElementById('centerline');

var checkvar = 0;

//DEFAULT
const default_chapter = document.getElementById('default_chapter');

chapter_container.addEventListener('scroll', function() {
  const hrRect = hr.getBoundingClientRect();
  const default_Rect = default_chapter.getBoundingClientRect();
  if (hrRect.bottom >= default_Rect.top && hrRect.top <= default_Rect.bottom) {
    hr.style.width = '100px';
    hr.style.height = '100px';
  } else {
  }
}, { passive: true });



const title = [...document.querySelectorAll('.chapter__title')];
const title_media = document.querySelectorAll('.chapter__media');
const titleRect = [];


//ELEMENTS
chapter_container.addEventListener('scroll', function() {
  const hrRect = hr.getBoundingClientRect();
  title.map((currentTitle, i) => {
    const titleRect = currentTitle.getBoundingClientRect();

    if (hrRect.bottom >= titleRect.top && hrRect.top <= titleRect.bottom) {
      currentTitle.style.opacity = '1';
      title_media[i].style.opacity = '1';
      hr.style.width = titleRect.width +  "px";
      hr.style.height = titleRect.height + "px";
    } else {
      currentTitle.style.opacity = '0.2';
      title_media[i].style.opacity = '0';
    }

  });
}, { passive: true });

//  window.addEventListener('resize', function() {
//    // Recalculate the position of the target paragraph on window resize
//    // to handle changes in viewport dimensions
//    var targetParagraph = document.getElementById('targetParagraph');
//    targetPosition = targetParagraph.getBoundingClientRect();
//  });


const newArray = [ ...[1,2,3], ...[4,5,6]]