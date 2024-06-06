document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const scoreDiv = document.getElementById('score');
    let userAnswers = new Array(questions.length).fill(null);
    let wrongAnswers = [];

    // Shuffle questions on initial load
    let shuffledQuestions = shuffleArray(questions);

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        calculateScore();
        displayResults();
    });

    renderQuestions();

    function renderQuestions() {
        form.innerHTML = ''; // Clear any existing content

        shuffledQuestions.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${item.question}`;
            questionDiv.appendChild(questionText);

            const labels = ['a', 'b', 'c', 'd'];
            const shuffledOptions = labels.map((label, i) => ({
                label,
                option: item.options[i]
            }));

            shuffledOptions.forEach((optionObj) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="q${index + 1}" value="${optionObj.label}"> ${optionObj.label}. ${optionObj.option.split('. ')[1]}`;
                questionDiv.appendChild(label);
                questionDiv.appendChild(document.createElement('br'));
            });

            form.appendChild(questionDiv);
        });
    }

    function calculateScore() {
        let score = 0;
        wrongAnswers = [];

        shuffledQuestions.forEach((item, index) => {
            const selectedOption = form.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                userAnswers[index] = selectedOption.value;
                const correctAnswer = item.answer;
                const selectedAnswer = selectedOption.value;

                if (selectedAnswer === correctAnswer) {
                    score++;
                } else {
                    wrongAnswers.push({
                        question: item.question,
                        userAnswer: `${selectedAnswer}. ${item.options[labels.indexOf(selectedAnswer)].split('. ')[1]}`,
                        correctAnswer: `${correctAnswer}. ${item.options[labels.indexOf(correctAnswer)].split('. ')[1]}`,
                        explanation: item.explanation
                    });
                }
            } else {
                wrongAnswers.push({
                    question: item.question,
                    userAnswer: "No answer provided",
                    correctAnswer: `${item.answer}. ${item.options[item.answer.charCodeAt(0) - 97].split('. ')[1]}`,
                    explanation: item.explanation
                });
            }
        });

        scoreDiv.innerHTML = `Total Score: ${score}/${shuffledQuestions.length}`;
    }

    function displayResults() {
        form.innerHTML = ''; // Clear any existing content
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('results');

        const totalScore = userAnswers.reduce((total, answer, index) => {
            return total + (answer === shuffledQuestions[index].answer ? 1 : 0);
        }, 0);

        const scoreText = document.createElement('p');
        scoreText.textContent = `Total Score: ${totalScore}/${shuffledQuestions.length}`;
        resultDiv.appendChild(scoreText);

        const wrongAnswersText = document.createElement('h3');
        wrongAnswersText.textContent = 'Wrong Answers';
        resultDiv.appendChild(wrongAnswersText);

        wrongAnswers.forEach(item => {
            const wrongAnswerDiv = document.createElement('div');
            wrongAnswerDiv.classList.add('wrong-answer');

            const questionText = document.createElement('p');
            questionText.textContent = `Question: ${item.question}`;
            wrongAnswerDiv.appendChild(questionText);

            const userAnswerText = document.createElement('p');
            userAnswerText.textContent = `Your Answer: ${item.userAnswer}`;
            wrongAnswerDiv.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.textContent = `Correct Answer: ${item.correctAnswer}`;
            wrongAnswerDiv.appendChild(correctAnswerText);

            const explanationText = document.createElement('p');
            explanationText.textContent = `Explanation: ${item.explanation}`;
            explanationText.style.color = 'green';
            wrongAnswerDiv.appendChild(explanationText);

            resultDiv.appendChild(wrongAnswerDiv);
        });

        form.appendChild(resultDiv);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
