var questionsData = [
    { question: "1 + 2 = ", answer: 3 },
    { question: "2 + 5 = ", answer: 7 },
    { question: "4 + 5 = ", answer: 9 },
    // Thêm các đối tượng câu hỏi và câu trả lời tương tự nếu cần
];

function createQuestions() {
    var questionsContainer = document.getElementById("questions");
    questionsData.forEach(function (data, index) {
        var questionElement = document.createElement("p");
        questionElement.textContent = data.question + " ";
        var inputElement = document.createElement("input");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("id", "answer" + index);
        questionsContainer.appendChild(questionElement);
        questionElement.appendChild(inputElement);
    });
}
createQuestions();

function calculateScore() {
    var score = 0;
    questionsData.forEach(function (data, index) {
        var answer = parseInt(document.getElementById("answer" + index).value);
        if (answer === data.answer) {
            score += 0.2;
        }
    });
    var roundedScore = score.toFixed(1);
    document.getElementById("result").textContent = roundedScore;
}