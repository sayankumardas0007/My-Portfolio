function openTab(evt, tabName) {
    // Hide all content
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
      contents[i].classList.remove("active");
    }
  
    // Remove active class from all tabs
    const tabs = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
  
    // Show the clicked tab content and add active class
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  // Show "Education" tab by default on page load
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("education").style.display = "block";
  });
  