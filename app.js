// This is a code of the dark and light theme // 
const themeToggle = document.querySelector(".theme-toggle");
const toggleTheme = () => {
 const isDarkTheme =  document.body.classList.toggle("dark-theme");
  themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"
}
themeToggle.addEventListener("click" , toggleTheme ) ;