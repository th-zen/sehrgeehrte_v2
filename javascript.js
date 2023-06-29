const chapter_container = document.getElementById('chapter_container');
const hr = document.getElementById('centerline');
const hrRect = hr.getBoundingClientRect();
const hr_middle = hrRect.top+((hrRect.bottom-hrRect.top)/2);
const default_media = document.getElementById('default_media');
var checkvar = 0;

//DEFAULT
const default_chapter = document.getElementById('default_chapter');
const default_bg = document.getElementById('default_bg');
const default_chapter_media = document.getElementById('default_chapter_media');

chapter_container.addEventListener('scroll', function() {
  const default_Rect = default_chapter.getBoundingClientRect();
  if (hr_middle >= default_Rect.top && hr_middle <= default_Rect.bottom) {
    hr.style.width = '100px';
    hr.style.height = '100px';
    default_chapter_media.style.opacity = '1';
  } 
  else {
    default_chapter_media.style.opacity = '0';
  }
});


//ELEMENT 1 WE ARE TEXT
const title1 = document.getElementById('title1');
const title1_media = document.getElementById('title1_media');
const title1_media_front = document.getElementById('title1_media_front');

chapter_container.addEventListener('scroll', function() {
  const title1Rect = title1.getBoundingClientRect();
  if (hr_middle >= title1Rect.top && hr_middle <= title1Rect.bottom) {
    title1.style.opacity = '1';
    //title1.style.color = '#ffffff';
    title1_media.style.opacity = '1';
    title1_media_front.style.opacity = '1';
    hr.style.width = (title1Rect.width + 50) +  "px";
    hr.style.height = (title1Rect.height + 50) + "px";
  } else {
    title1.style.color = '#000000';
    title1.style.opacity = '0.2';
    title1_media.style.opacity = '0';
    title1_media_front.style.opacity = '0';
  }
});


//ELEMENT 2
const title2 = document.getElementById('title2');
const title2_media = document.getElementById('title2_media');
const title2_video1 = document.getElementById("title2_video1");

chapter_container.addEventListener('scroll', function() {
  const title2Rect = title2.getBoundingClientRect();
  if (hr_middle >= title2Rect.top && hr_middle <= title2Rect.bottom) {
    title2_video1.play();
    title2.style.opacity = '1';
    //title2.style.color = '#ffffff';
    title2_media.style.opacity = '1';
    hr.style.width = (title2Rect.width +  50) +  "px";
    hr.style.height = (title2Rect.height + 50) + "px";
  } else {
    title2_video1.pause();
    title2.style.color = '#000000';
    title2.style.opacity = '0.2';
    title2_media.style.opacity = '0';
  }
});


//ELEMENT 3
const title3 = document.getElementById('title3');
const title3_media = document.getElementById('title3_media');
const title3_video1 = document.getElementById("title3_video1");
const title3_video2 = document.getElementById("title3_video2");
const title3_video3 = document.getElementById("title3_video3");
const title3_video4 = document.getElementById("title3_video4");
const title3_video5 = document.getElementById("title3_video5");

chapter_container.addEventListener('scroll', function() {
  const title3Rect = title3.getBoundingClientRect();
  if (hr_middle >= title3Rect.top && hr_middle <= title3Rect.bottom) {
    title3_video1.play();
    title3_video2.play();
    title3_video3.play();
    title3_video4.play();
    title3_video5.play();
    title3.style.opacity = '1';
    //title3.style.color = '#ffffff';
    title3_media.style.opacity = '1';
    hr.style.width = (title3Rect.width + 50) +  "px";
    hr.style.height = (title3Rect.height + 50) + "px";
  } else {
    title3_video1.pause();
    title3_video2.pause();
    title3_video3.pause();
    title3_video4.pause();
    title3_video5.pause();
    title3.style.color = '#000000';
    title3.style.opacity = '0.2';
    title3_media.style.opacity = '0';
  }
});

//ELEMENT 4
const title4 = document.getElementById('title4');
const title4_media = document.getElementById('title4_media');
const title4_video1 = document.getElementById("title4_video1");
const title4_video2 = document.getElementById("title4_video2");

chapter_container.addEventListener('scroll', function() {
  const title4Rect = title4.getBoundingClientRect();
  if (hr_middle >= title4Rect.top && hr_middle <= title4Rect.bottom) {
    title4_video1.play();
    title4_video2.play();
    title4.style.opacity = '1';
    //title4.style.color = '#ffffff';
    title4_media.style.opacity = '1';
    hr.style.width = (title4Rect.width + 50) +  "px";
    hr.style.height = (title4Rect.height + 50) + "px";
  } else {
    title4_video1.pause();
    title4_video2.pause();
    title4.style.color = '#000000';
    title4.style.opacity = '0.2';
    title4_media.style.opacity = '0';
  }
});

//ELEMENT 5
const title5 = document.getElementById('title5');
const title5_media = document.getElementById('title5_media');

chapter_container.addEventListener('scroll', function() {
  const title5Rect = title5.getBoundingClientRect();
  if (hr_middle >= title5Rect.top && hr_middle <= title5Rect.bottom) {
    title5.style.opacity = '1';
    title5_media.style.pointerEvents = 'auto';
    //title5.style.color = '#ffffff';
    title5_media.style.opacity = '1';
    hr.style.width = (title5Rect.width + 50) +  "px";
    hr.style.height = (title5Rect.height + 50) + "px";
  } else {
    title5.style.color = '#000000';
    title5.style.opacity = '0.2';
    title5_media.style.opacity = '0';
    title5_media.style.pointerEvents = 'none';
  }
});

// window.addEventListener('resize', function() {
//   // Recalculate the position of the target paragraph on window resize
//   // to handle changes in viewport dimensions
//   var targetParagraph = document.getElementById('targetParagraph');
//   targetPosition = targetParagraph.getBoundingClientRect();
// });



//PARALLAXE
 const gallery = document.getElementById("title1_media");

 window.onmousemove = e => {
   const mouseX = e.clientX,
         mouseY = e.clientY;
  
   const xDecimal = mouseX / window.innerWidth,
         yDecimal = mouseY / window.innerHeight;
  
   const maxX = gallery.offsetWidth - window.innerWidth,
         maxY = gallery.offsetHeight - window.innerHeight;
  
   const //panX = maxX * xDecimal,
         panX = 0,
         panY = maxY * yDecimal;
  
   gallery.animate({
     transform: `translate(${panX}px, ${panY}px)`
   }, {
     duration: 4000,
     fill: "forwards",
     easing: "ease"
   })
 }
