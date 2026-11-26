/* Unwaste - tandai menu bawah (mobile) yang sedang aktif */
(function(){var p=location.pathname.split("/").pop()||"index.html";document.querySelectorAll("[data-bn]").forEach(function(a){if(a.getAttribute("href")===p){a.classList.remove("text-text-muted");a.classList.add("text-primary","font-bold")}})})()
