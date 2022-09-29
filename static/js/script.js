
$(document).ready(function () {
  
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = Math.max($(document).height(), $(window).height())
    var contactusHeight = $('#contactus').height()
    var footerheight = $('#footer').height()
    var maxH = height - (contactusHeight + footerheight)
    // console.log(maxH);
    
    if (scroll > 50) {
      $("#top-bar").css("background-color", "white");
    } else {
      $("#top-bar").css("background-color", "transparent");
    }

    if (scroll > 200 && scroll < maxH) {
      $("#whatsapp").css("display", "block");
      $("#whatsapp").addClass("transition-opacity");
      $("#whatsapp").addClass("duration-500");
    } else {
      $("#whatsapp").css("display", "none");
    }

    if (scroll > maxH) {
      $("#scrollToTop").css("display", "block");
    } else {
      $("#scrollToTop").css("display", "none");
    }
  });
});

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 130) {
      current = section.getAttribute("id");
    }
  // let platformvid = true
  //   if (current == 'platform' && platformvid == true) {
  //     platformvid = false
  //     document.getElementById('platformvid').play();
  //   }
  //   if (current == 'product') {
  //     document.getElementById('productvid').play();
  //   }
  });

  navLi.forEach((li) => {
    li.classList.remove("actived");
    if (li.classList.contains(current)) {
      li.classList.add("actived");
    }
  });
};

var activeDropdown = 'finance-button'

var finance = document.getElementById("finance-button");

finance.onclick = function () {
  if (activeDropdown == 'finance-button') {
  $("#finance-button").removeClass('text-secondary')
  $("#finance-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#finance-content").css("display", "none")
  $("#financedropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
  $("#financeser-content").css("display", "none")
  $("#finance-content").css("display", "block")
  $("#sekuritas-content").css("display", "none")
  $("#property-content").css("display", "none")
  $("#asset-content").css("display", "none")
  $("#finance-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
  $("#financeser-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#sekuritas-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#property-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#asset-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#finance-button").addClass('text-secondary')
  $("#financeser-button").removeClass('text-secondary')
  $("#sekuritas-button").removeClass('text-secondary')
  $("#property-button").removeClass('text-secondary')
  $("#asset-button").removeClass('text-secondary')
  $("#financedropArrow").addClass('dropIconActive')
  $("#financeserdropArrow").removeClass('dropIconActive')
  $("#sekuritasdropArrow").removeClass('dropIconActive')
  $("#propertydropArrow").removeClass('dropIconActive')
  $("#assetdropArrow").removeClass('dropIconActive')
  activeDropdown = 'finance-button'
      // document.getElementById('platformvid').play();

  }
};

var financeser = document.getElementById("financeser-button");

financeser.onclick = function () {
  if (activeDropdown == 'financeser-button') {
  $("#financeser-button").removeClass('text-secondary')
  $("#financeser-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#financeser-content").css("display", "none")
  $("#financeserdropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
  $("#financeser-content").css("display", "block")
  $("#sekuritas-content").css("display", "none")
  $("#property-content").css("display", "none")
  $("#finance-content").css("display", "none")
  $("#asset-content").css("display", "none")
  $("#financeser-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
  $("#finance-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#sekuritas-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#property-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#asset-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#financeser-button").addClass('text-secondary')
  $("#finance-button").removeClass('text-secondary')
  $("#sekuritas-button").removeClass('text-secondary')
  $("#property-button").removeClass('text-secondary')
  $("#asset-button").removeClass('text-secondary')
  $("#financeserdropArrow").addClass('dropIconActive')
  $("#financedropArrow").removeClass('dropIconActive')
  $("#sekuritasdropArrow").removeClass('dropIconActive')
  $("#propertydropArrow").removeClass('dropIconActive')
  $("#assetdropArrow").removeClass('dropIconActive')
  activeDropdown = 'financeser-button'
      // document.getElementById('platformvid').play();

  }
};


var sekuritas = document.getElementById("sekuritas-button");

sekuritas.onclick = function () {
  if (activeDropdown == 'sekuritas-button') {
    $("#sekuritas-button").removeClass('text-secondary')
    $("#sekuritas-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#sekuritas-content").css("display", "none")
  $("#sekuritasdropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
    $("#financeser-content").css("display", "none")
    $("#sekuritas-content").css("display", "block")
    $("#finance-content").css("display", "none")
    $("#property-content").css("display", "none")
    $("#asset-content").css("display", "none")
    $("#sekuritas-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
    $("#financeser-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#finance-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#property-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#asset-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#sekuritas-button").addClass('text-secondary')
    $("#financeser-button").removeClass('text-secondary')
    $("#finance-button").removeClass('text-secondary')
    $("#property-button").removeClass('text-secondary')
    $("#asset-button").removeClass('text-secondary')
    $("#sekuritasdropArrow").addClass('dropIconActive')
    $("#financeserdropArrow").removeClass('dropIconActive')
    $("#financedropArrow").removeClass('dropIconActive')
    $("#propertydropArrow").removeClass('dropIconActive')
    $("#assetdropArrow").removeClass('dropIconActive')
  activeDropdown = 'sekuritas-button'
  }
};

var property = document.getElementById("property-button");

property.onclick = function () {
  if (activeDropdown == 'property-button') {
    $("#property-button").removeClass('text-secondary')
    $("#property-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#property-content").css("display", "none")
  $("#propertydropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
    $("#financeser-content").css("display", "none")
    $("#property-content").css("display", "block")
    $("#finance-content").css("display", "none")
    $("#sekuritas-content").css("display", "none")
    $("#asset-content").css("display", "none")
    $("#property-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
    $("#financeser-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#finance-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#sekuritas-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#asset-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#property-button").addClass('text-secondary')
    $("#financeser-button").removeClass('text-secondary')
    $("#finance-button").removeClass('text-secondary')
    $("#sekuritas-button").removeClass('text-secondary')
    $("#asset-button").removeClass('text-secondary')
    $("#propertydropArrow").addClass('dropIconActive')
    $("#financeserdropArrow").removeClass('dropIconActive')
    $("#financedropArrow").removeClass('dropIconActive')
    $("#sekuritasdropArrow").removeClass('dropIconActive')
    $("#assetdropArrow").removeClass('dropIconActive')

  activeDropdown = 'property-button'
  }
};


var asset = document.getElementById("asset-button");

asset.onclick = function () {
  if (activeDropdown == 'asset-button') {
    $("#asset-button").removeClass('text-secondary')
    $("#asset-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#asset-content").css("display", "none")
  $("#assetdropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
    $("#financeser-content").css("display", "none")
    $("#property-content").css("display", "none")
    $("#finance-content").css("display", "none")
    $("#sekuritas-content").css("display", "none")
    $("#asset-content").css("display", "block")
    $("#asset-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
    $("#financeser-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#sekuritas-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#property-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#finance-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#asset-button").addClass('text-secondary')
    $("#financeser-button").removeClass('text-secondary')
    $("#sekuritas-button").removeClass('text-secondary')
    $("#property-button").removeClass('text-secondary')
    $("#finance-button").removeClass('text-secondary')
    $("#assetdropArrow").addClass('dropIconActive')
    $("#financeserdropArrow").removeClass('dropIconActive')
    $("#sekuritasdropArrow").removeClass('dropIconActive')
    $("#propertydropArrow").removeClass('dropIconActive')
    $("#financedropArrow").removeClass('dropIconActive')

  activeDropdown = 'asset-button'
  }
};


var property = document.getElementById("propertyBtn");
var vc = document.getElementById("vcBtn");
var funds = document.getElementById("fundsBtn");
var propertyFoot = document.getElementById("propertyBtnFoot");
var vcFoot = document.getElementById("vcBtnFoot");
var fundsFoot = document.getElementById("fundsBtnFoot");

property.onclick = function () {
  openProperty()
}

vc.onclick = function () {
  vcOpen()
};

funds.onclick = function () {
 
  fundsOpen()
};

propertyFoot.onclick = function () {
  openProperty()
}

vcFoot.onclick = function () {
  vcOpen()
};

fundsFoot.onclick = function () {
  fundsOpen()
};


function openProperty() {
  $("#propertyContent").css("display", "flex")
  $("#vcContent").css("display", "none")
  $("#fundsContent").css("display", "none")
  $("#propertyBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#vcBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#fundsBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('propertyvid').play();
};

function vcOpen() {
  $("#propertyContent").css("display", "none")
  $("#vcContent").css("display", "flex")
  $("#fundsContent").css("display", "none")
  $("#vcBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#propertyBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#fundsBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('vcvid').play();
  
}

function fundsOpen() {
  $("#propertyContent").css("display", "none")
  $("#vcContent").css("display", "none")
  $("#fundsContent").css("display", "flex")
  $("#fundsBtn").addClass("bg-blue-bg font-semibold").removeClass('border')
  $("#vcBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  $("#propertyBtn").addClass("border").removeClass('bg-blue-bg font-semibold')
  document.getElementById('fundsvid').play();
}

function smallMenu(params) {
  if ( params == 'open' ) {
     $("#smallMenu").removeClass('hidden') 
     $("#openBtn").addClass('hidden')
     $("#closeBtn").removeClass('hidden')
     $("#top-bar").css("background-color", "white");
  } else{
     $("#smallMenu").addClass('hidden')
     $("#closeBtn").addClass('hidden')
     $("#openBtn").removeClass('hidden')
     $("#top-bar").css("background-color", "transparent");
  }
  
}
var advantage = document.getElementById("scrollContent");
advantage.onscroll = function() {scrollAdv()};

function scrollAdv() {  
let y = advantage.scrollLeft;
let x = advantage.scr;
var limit = advantage.scrollWidth - advantage.clientWidth
let persen = y * 100 / (limit *2)
persen = parseInt(persen)
document.getElementById("scrollIndicator").style.left = persen + "%";
}

