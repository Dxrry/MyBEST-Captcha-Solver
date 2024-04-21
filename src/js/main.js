// ==UserScript==
// @name         MyBEST: Captcha Solver
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Save time by using this extension to solve captchas for you on elearning.bsi.ac.id/login.
// @author       Dxrry
// @match        *://elearning.bsi.ac.id/login
// @grant        none
// ==/UserScript==

// You can paste this on Tampermonkey

(function () {
    const getCaptcha = document.getElementById("captcha_question");

    if (!getCaptcha) return;

    const match = getCaptcha.textContent.match(/(\d+)\s*([-+*/])\s*(\d+)/);

    if (!match) return;

    const [_, firstNumber, operator, secondNumber] = match.map(
        (value, key) => (key === 1 || key === 3) ? parseInt(value, 10) : value
    );
    
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b
    }; // Just prepare for the future

    const mathResult = operators[operator](firstNumber, secondNumber);
    const captchaAnswer = document.getElementById("captcha_answer");

    if (captchaAnswer) captchaAnswer.value = mathResult;
})();
