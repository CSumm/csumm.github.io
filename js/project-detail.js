// Get the data from local storage
let storedImage = localStorage.getItem('image');
let storedTitle = localStorage.getItem('title');
let storedInvolvement = localStorage.getItem('involvement');
let storedRole = localStorage.getItem('role');
let storedFactors = localStorage.getItem('factors');
let storedLink = localStorage.getItem('link');

// Set the data to the elements
if (storedImage) {
   document.querySelector('.portfolio-image').src = storedImage;
}
if (storedTitle) {
    document.querySelector('.js-portfolio-title').innerHTML = storedTitle;
}
if (storedInvolvement) {
    document.querySelector('.js-portfolio-involvement').innerHTML = storedInvolvement;
}
if (storedRole) {
    document.querySelector('.js-portfolio-role').innerHTML = storedRole;
}
if (storedFactors) {
    document.querySelector('.js-portfolio-factors').innerHTML = storedFactors;
}
if (storedLink) {
    document.querySelector('.js-portfolio-link').href = storedLink;
}