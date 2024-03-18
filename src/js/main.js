(function () {
    const getCaptcha = $("#captcha_question");
    if($("#captcha_question").length > 0) {
        const getCaptchaText = getCaptcha.text();
        const regexPattern = /(\d+)\s*([-+*/])\s*(\d+)/;
        const isMatch = getCaptchaText.match(regexPattern);

        if(isMatch) {
            const firstNumber = parseInt(isMatch[1]);
            const secondNumber = parseInt(isMatch[3]);

            // in the future, maybe not just using +
            const operator = isMatch[2];
            
            let mathResult;
            switch(operator) {
                case '+':
                    mathResult = (firstNumber + secondNumber);
                    break;
                case '-':
                    mathResult = (firstNumber - secondNumber);
                    break;
                case '*': // case 'x':
                    mathResult = (firstNumber * secondNumber);
                    break;
                case '/':
                    mathResult = (firstNumber / secondNumber);
                    break;
                default:
                    console.log(
                        {
                            "app": "MyBEST: Captcha Solver",
                            "error": "INVALID OPERATOR"
                        }
                    );
                    return;
            }
            $("#captcha_answer").val(mathResult);
        }
    }
})();