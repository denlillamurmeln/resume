document.addEventListener("DOMContentLoaded", function () {
    const descBtn = document.getElementById("descBtn");
    const description = document.getElementById("description");
  
    descBtn.addEventListener("click", function () {
      if (description.style.display === "block") {
        description.style.display = "none";
      } else {
        description.style.display = "block";
      }
    });
  });