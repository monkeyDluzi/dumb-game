let cookies = 0;

const cookie = document.getElementById("cookie");
const score = document.getElementById("score");

cookie.addEventListener("click", function () {

    cookies++;

    score.textContent = "Cookies: " + cookies;

});
