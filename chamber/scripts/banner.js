const now = new Date();
const day = now.getDay();
// if monday or Tuesdays
if (day === 1 || day === 2) {
document.getElementsByClassName("banner-hide").style.display = "block";
}

