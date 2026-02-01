// Quiz Questions Database
const quizQuestions = [
    {
        question: "Which club has won the most UEFA Champions League titles?",
        answers: ["Barcelona", "Real Madrid", "AC Milan", "Bayern Munich"],
        correct: 1
    },
    {
        question: "Who is the all-time top scorer in Champions League history?",
        answers: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema"],
        correct: 2
    },
    {
        question: "In which year was the European Cup rebranded as the Champions League?",
        answers: ["1990", "1992", "1995", "1988"],
        correct: 1
    },
    {
        question: "Which goalkeeper has the most clean sheets in Champions League history?",
        answers: ["Iker Casillas", "Manuel Neuer", "Gianluigi Buffon", "Edwin van der Sar"],
        correct: 0
    },
    {
        question: "What is the fastest goal scored in a Champions League final?",
        answers: ["25 seconds", "1 minute", "52 seconds", "2 minutes"],
        correct: 0
    },
    {
        question: "Which player has won the most Champions League titles?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Paco Gento", "Toni Kroos"],
        correct: 2
    },
    {
        question: "Which stadium hosted the 2005 'Miracle of Istanbul' final?",
        answers: ["Wembley Stadium", "Camp Nou", "Atatürk Olympic Stadium", "San Siro"],
        correct: 2
    },
    {
        question: "Who scored the winning goal in the 2014 Champions League final?",
        answers: ["Gareth Bale", "Sergio Ramos", "Cristiano Ronaldo", "Ángel Di María"],
        correct: 0
    },
    {
        question: "Which club completed a treble including the Champions League in 1999?",
        answers: ["Barcelona", "Bayern Munich", "Manchester United", "Inter Milan"],
        correct: 2
    },
    {
        question: "How many times has AC Milan won the Champions League/European Cup?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Who was the first player to score in three different Champions League finals?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Samuel Eto'o"],
        correct: 0
    },
    {
        question: "Which team won the first-ever European Cup in 1956?",
        answers: ["Benfica", "AC Milan", "Real Madrid", "Manchester United"],
        correct: 2
    },
    {
        question: "What is the record for most goals scored by a team in a single Champions League season?",
        answers: ["45", "48", "42", "50"],
        correct: 0
    },
    {
        question: "Which English club was the first to win the European Cup?",
        answers: ["Liverpool", "Manchester United", "Chelsea", "Nottingham Forest"],
        correct: 1
    },
    {
        question: "How many goals did Cristiano Ronaldo score in the 2013-14 Champions League season?",
        answers: ["15", "17", "19", "21"],
        correct: 1
    },
    {
        question: "Which manager has won the most Champions League titles?",
        answers: ["Alex Ferguson", "Carlo Ancelotti", "Pep Guardiola", "Zinedine Zidane"],
        correct: 1
    },
    {
        question: "In what year did Liverpool win their first European Cup?",
        answers: ["1975", "1977", "1979", "1981"],
        correct: 1
    },
    {
        question: "Which player scored a famous bicycle kick in the 2018 Champions League final?",
        answers: ["Cristiano Ronaldo", "Gareth Bale", "Karim Benzema", "Luka Modrić"],
        correct: 1
    },
    {
        question: "How many consecutive Champions League titles did Real Madrid win from 2016-2018?",
        answers: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        question: "Which club knocked out defending champions Real Madrid in 2019?",
        answers: ["Manchester City", "Liverpool", "Ajax", "Juventus"],
        correct: 2
    },
    {
        question: "Who scored the winning penalty for Chelsea in the 2012 final?",
        answers: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Ashley Cole"],
        correct: 1
    },
    {
        question: "Which team completed an unbeaten Champions League campaign in 2003-04?",
        answers: ["Barcelona", "AC Milan", "Porto", "Chelsea"],
        correct: 2
    },
    {
        question: "What is the nickname of the Champions League anthem?",
        answers: ["March of Champions", "Ode to Champions", "Zadok the Priest", "European Glory"],
        correct: 2
    },
    {
        question: "Which player has the most assists in Champions League history?",
        answers: ["Lionel Messi", "Cristiano Ronaldo", "Ángel Di María", "Xavi Hernández"],
        correct: 1
    },
    {
        question: "How many teams compete in the group stage of the Champions League?",
        answers: ["24", "28", "32", "36"],
        correct: 3
    },
    {
        question: "Which club won the Champions League in 2020?",
        answers: ["Liverpool", "Bayern Munich", "Paris Saint-Germain", "Real Madrid"],
        correct: 1
    },
    {
        question: "Who was the youngest player to score in a Champions League final?",
        answers: ["Kylian Mbappé", "Patrick Kluivert", "Lionel Messi", "Obafemi Martins"],
        correct: 1
    },
    {
        question: "Which team scored the most goals in a single Champions League match?",
        answers: ["Barcelona", "Bayern Munich", "Real Madrid", "Paris Saint-Germain"],
        correct: 1
    },
    {
        question: "In which city was the 2019 Champions League final held?",
        answers: ["London", "Madrid", "Kyiv", "Istanbul"],
        correct: 1
    },
    {
        question: "Which player has appeared in the most Champions League finals?",
        answers: ["Cristiano Ronaldo", "Paolo Maldini", "Xavi Hernández", "Iker Casillas"],
        correct: 1
    },
    {
        question: "What year did Manchester City win their first Champions League?",
        answers: ["2020", "2021", "2022", "2023"],
        correct: 3
    },
    {
        question: "Which team knocked Barcelona out of the 2019 Champions League semi-finals?",
        answers: ["Liverpool", "Ajax", "Tottenham", "Bayern Munich"],
        correct: 0
    },
    {
        question: "Who scored the fastest hat-trick in Champions League history?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Bafétimbi Gomis", "Robert Lewandowski"],
        correct: 2
    },
    {
        question: "Which club has lost the most Champions League finals?",
        answers: ["Bayern Munich", "Juventus", "Benfica", "Atlético Madrid"],
        correct: 1
    },
    {
        question: "What is the maximum number of substitutions allowed in a Champions League match?",
        answers: ["3", "5", "6", "7"],
        correct: 1
    },
    {
        question: "Who won the Champions League in 2004?",
        answers: ["AC Milan", "Monaco", "Porto", "Deportivo La Coruña"],
        correct: 2
    },
    {
        question: "Which player scored twice in the 2014 Champions League final?",
        answers: ["Cristiano Ronaldo", "Gareth Bale", "Ángel Di María", "Marcelo"],
        correct: 1
    },
    {
        question: "How many English clubs reached the 2019 Champions League semi-finals?",
        answers: ["1", "2", "3", "4"],
        correct: 3
    },
    {
        question: "Which goalkeeper saved three penalties in a Champions League final shootout?",
        answers: ["Jerzy Dudek", "Oliver Kahn", "Iker Casillas", "Petr Čech"],
        correct: 0
    },
    {
        question: "What was unique about the 2020 Champions League final?",
        answers: ["Played in winter", "No fans present", "First all-English final", "Decided on penalties"],
        correct: 1
    },
    {
        question: "Which club won three consecutive European Cups from 1971-1973?",
        answers: ["Liverpool", "Bayern Munich", "Ajax", "Real Madrid"],
        correct: 2
    },
    {
        question: "Who scored the 'ghost goal' for Chelsea against Liverpool in 2005?",
        answers: ["Frank Lampard", "Luis García", "Didier Drogba", "Steven Gerrard"],
        correct: 1
    },
    {
        question: "Which team did Leicester City defeat in their Champions League quarter-final in 2017?",
        answers: ["Barcelona", "Real Madrid", "Sevilla", "Atlético Madrid"],
        correct: 2
    },
    {
        question: "Who was the manager when Inter Milan won the treble in 2010?",
        answers: ["Roberto Mancini", "José Mourinho", "Claudio Ranieri", "Marcello Lippi"],
        correct: 1
    },
    {
        question: "Which player scored a hat-trick in just 11 minutes against Bayern Munich?",
        answers: ["Serge Gnabry", "Sadio Mané", "Erling Haaland", "Robert Lewandowski"],
        correct: 0
    },
    {
        question: "What is the record attendance for a Champions League match?",
        answers: ["90,000", "98,000", "100,000", "93,000"],
        correct: 0
    },
    {
        question: "Which team won the Champions League on home soil in 1984?",
        answers: ["Roma", "Liverpool", "Juventus", "AC Milan"],
        correct: 1
    },
    {
        question: "Who is the oldest player to score in a Champions League final?",
        answers: ["Paolo Maldini", "Ryan Giggs", "Francesco Totti", "Teddy Sheringham"],
        correct: 0
    },
    {
        question: "Which club has appeared in the most consecutive Champions League finals?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Juventus"],
        correct: 0
    },
    {
        question: "In what year did English clubs return to European competition after the Heysel ban?",
        answers: ["1988", "1989", "1990", "1991"],
        correct: 2
    },
    {
        question: "Who scored for both teams in a Champions League final?",
        answers: ["Mario Mandžukić", "Neymar", "Luis Suárez", "Sergio Ramos"],
        correct: 0
    },
    {
        question: "Which team defeated Arsenal 10-2 on aggregate in 2017?",
        answers: ["Barcelona", "Real Madrid", "Bayern Munich", "Paris Saint-Germain"],
        correct: 2
    },
    {
        question: "Who was sent off in the 2006 Champions League final?",
        answers: ["Zinedine Zidane", "Jens Lehmann", "Samuel Eto'o", "Thierry Henry"],
        correct: 1
    },
    {
        question: "Which Portuguese club has won the Champions League twice?",
        answers: ["Sporting CP", "Braga", "Porto", "Benfica"],
        correct: 2
    },
    {
        question: "What is Bayern Munich's record victory in the Champions League?",
        answers: ["7-0", "8-0", "8-2", "9-2"],
        correct: 2
    },
    {
        question: "Who scored the winning goal in the 1999 Champions League final?",
        answers: ["Teddy Sheringham", "Ole Gunnar Solskjær", "Dwight Yorke", "David Beckham"],
        correct: 1
    },
    {
        question: "Which club was the first to retain the Champions League?",
        answers: ["Real Madrid", "AC Milan", "Barcelona", "Bayern Munich"],
        correct: 0
    },
    {
        question: "How many times has a team won the Champions League after losing the first leg of the final?",
        answers: ["Never", "Once", "Twice", "Three times"],
        correct: 0
    },
    {
        question: "Who is the youngest manager to win the Champions League?",
        answers: ["Pep Guardiola", "José Mourinho", "Carlo Ancelotti", "Julian Nagelsmann"],
        correct: 1
    },
    {
        question: "Which team scored 12 goals in their 2019-20 group stage opener?",
        answers: ["Barcelona", "Real Madrid", "Bayern Munich", "Paris Saint-Germain"],
        correct: 2
    },
    {
        question: "What was the score of the 'Miracle of Istanbul' final at halftime?",
        answers: ["2-0", "3-0", "4-0", "3-1"],
        correct: 1
    },
    {
        question: "Which player has scored in the most consecutive Champions League matches?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Ruud van Nistelrooy", "Karim Benzema"],
        correct: 0
    },
    {
        question: "Who was the last player to score a hat-trick in a Champions League final?",
        answers: ["Lionel Messi", "Cristiano Ronaldo", "Filippo Inzaghi", "Ferenc Puskás"],
        correct: 3
    },
    {
        question: "Which team became the first to win all six group stage matches?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Paris Saint-Germain"],
        correct: 0
    },
    {
        question: "In which stadium was the 2022 Champions League final held?",
        answers: ["Wembley", "Stade de France", "Atatürk Stadium", "San Siro"],
        correct: 1
    },
    {
        question: "Who scored four goals in a Champions League semi-final for Borussia Dortmund?",
        answers: ["Marco Reus", "Pierre-Emerick Aubameyang", "Robert Lewandowski", "Erling Haaland"],
        correct: 2
    },
    {
        question: "Which club has won the Champions League under the most different managers?",
        answers: ["Real Madrid", "AC Milan", "Barcelona", "Bayern Munich"],
        correct: 0
    },
    {
        question: "What is the largest winning margin in a Champions League final?",
        answers: ["3 goals", "4 goals", "5 goals", "6 goals"],
        correct: 1
    },
    {
        question: "Who was the captain of Liverpool during their 2005 Champions League triumph?",
        answers: ["Jamie Carragher", "Steven Gerrard", "Sami Hyypiä", "Xabi Alonso"],
        correct: 1
    },
    {
        question: "Which team knocked Manchester United out in 2011 with a 5-2 aggregate?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Inter Milan"],
        correct: 1
    },
    {
        question: "Who scored the fastest goal in Champions League knockout history?",
        answers: ["Roy Makaay", "Jonas", "Clarence Seedorf", "Marco Simone"],
        correct: 0
    },
    {
        question: "Which goalkeeper has the most appearances in Champions League history?",
        answers: ["Gianluigi Buffon", "Iker Casillas", "Manuel Neuer", "Petr Čech"],
        correct: 1
    },
    {
        question: "What year did Ajax last win the Champions League?",
        answers: ["1995", "1996", "1994", "1997"],
        correct: 0
    },
    {
        question: "Who scored the winning goal for Inter Milan in the 2010 final?",
        answers: ["Samuel Eto'o", "Wesley Sneijder", "Diego Milito", "Javier Zanetti"],
        correct: 2
    },
    {
        question: "Which team has won the Champions League and been relegated in the same season?",
        answers: ["Nottingham Forest", "Aston Villa", "Manchester United", "None"],
        correct: 3
    },
    {
        question: "Who is the only player to score in two Champions League finals for two different clubs?",
        answers: ["Samuel Eto'o", "Zlatan Ibrahimović", "Cristiano Ronaldo", "Neymar"],
        correct: 0
    },
    {
        question: "What is the prize money for winning the Champions League (approximately)?",
        answers: ["€50 million", "€80 million", "€100 million", "€120 million"],
        correct: 3
    },
    {
        question: "Which team won the first Champions League under the new format in 1992-93?",
        answers: ["AC Milan", "Barcelona", "Marseille", "Ajax"],
        correct: 2
    },
    {
        question: "Who scored in three different Champions League finals and lost all of them?",
        answers: ["Filippo Inzaghi", "Clarence Seedorf", "Mario Mandžukić", "Hernán Crespo"],
        correct: 2
    },
    {
        question: "Which English club reached the semi-finals in their debut Champions League season?",
        answers: ["Manchester City", "Tottenham", "Leicester City", "Newcastle United"],
        correct: 2
    },
    {
        question: "How many different clubs has Cristiano Ronaldo scored for in the Champions League?",
        answers: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        question: "Which team has the longest unbeaten run in Champions League history?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Manchester United"],
        correct: 2
    },
    {
        question: "Who was the top scorer in the 2019-20 Champions League season?",
        answers: ["Cristiano Ronaldo", "Robert Lewandowski", "Lionel Messi", "Erling Haaland"],
        correct: 1
    },
    {
        question: "Which club knocked out Real Madrid in the 2020 Round of 16?",
        answers: ["Manchester City", "Paris Saint-Germain", "Chelsea", "Liverpool"],
        correct: 0
    },
    {
        question: "What is the record for consecutive Champions League wins by a team?",
        answers: ["10", "12", "14", "15"],
        correct: 2
    },
    {
        question: "Who scored the golden goal in the 2002 Champions League final?",
        answers: ["Raúl", "Zinedine Zidane", "Roberto Carlos", "Luís Figo"],
        correct: 1
    },
    {
        question: "Which defender has scored the most goals in Champions League history?",
        answers: ["Sergio Ramos", "Gerard Piqué", "Roberto Carlos", "John Terry"],
        correct: 0
    },
    {
        question: "What is the record for most Champions League titles won by a player?",
        answers: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "Which team was the first to win the Champions League without winning their domestic league?",
        answers: ["Liverpool", "Chelsea", "Real Madrid", "Manchester United"],
        correct: 1
    },
    {
        question: "Who scored the penalty that sealed Chelsea's 2021 Champions League victory?",
        answers: ["Jorginho", "Kai Havertz", "Mason Mount", "Christian Pulisic"],
        correct: 1
    },
    {
        question: "Which club has the record for most goals scored in a Champions League season?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Paris Saint-Germain"],
        correct: 1
    },
    {
        question: "What year did Tottenham reach their first Champions League final?",
        answers: ["2017", "2018", "2019", "2020"],
        correct: 2
    },
    {
        question: "Who is the only manager to win the Champions League with three different clubs?",
        answers: ["José Mourinho", "Carlo Ancelotti", "Pep Guardiola", "No one"],
        correct: 3
    },
    {
        question: "Which team completed a comeback from 4-0 down in the 2019 semi-finals?",
        answers: ["Liverpool", "Barcelona", "Ajax", "Tottenham"],
        correct: 0
    },
    {
        question: "Who was the top scorer in the first-ever Champions League season (1992-93)?",
        answers: ["Romário", "Jean-Pierre Papin", "Marco van Basten", "Dennis Bergkamp"],
        correct: 0
    },
    {
        question: "Which club has appeared in three consecutive Champions League finals (2016-2018)?",
        answers: ["Barcelona", "Bayern Munich", "Real Madrid", "Juventus"],
        correct: 2
    },
    {
        question: "Who scored the winning penalty for Manchester United in the 2008 final?",
        answers: ["Cristiano Ronaldo", "Ryan Giggs", "Wayne Rooney", "Edwin van der Sar saved it"],
        correct: 3
    },
    {
        question: "Which team knocked Manchester United out of the Champions League in 2013?",
        answers: ["Bayern Munich", "Real Madrid", "Barcelona", "Borussia Dortmund"],
        correct: 1
    },
    {
        question: "What is the nickname of Borussia Dortmund's stadium?",
        answers: ["Yellow Wall", "Signal Iduna Park", "Westfalenstadion", "The Temple"],
        correct: 0
    },
    {
        question: "Who scored the last-minute winner for Chelsea against Barcelona in 2012?",
        answers: ["Didier Drogba", "Fernando Torres", "Ramires", "Frank Lampard"],
        correct: 1
    }
];

// Game State
let currentPoints = 10;
let currentQuestionIndex = 0;
let selectedQuestions = [];
let selectedAnswer = null;
let questionsAnswered = 0;
let isAnswerSubmitted = false;
let username = "";

// DOM Elements
const pointsDisplay = document.getElementById('points');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const submitButton = document.getElementById('submitBtn');
const progressCircles = document.getElementById('progressCircles');
const gameOverModal = document.getElementById('gameOverModal');
const victoryModal = document.getElementById('victoryModal');
const usernameModal = document.getElementById('usernameModal');
const usernameInput = document.getElementById('usernameInput');
const startQuizBtn = document.getElementById('startQuizBtn');
const playQuizBtn = document.getElementById('playQuizBtn');
const welcomeStage = document.getElementById('welcomeStage');
const nameEntryStage = document.getElementById('nameEntryStage');
const retryBtn = document.getElementById('retryBtn');
const victoryRetryBtn = document.getElementById('victoryRetryBtn');

// Initial setup - Fetch leaderboard for welcome screen
document.addEventListener('DOMContentLoaded', () => {
    fetchLeaderboard('initialLeaderboardList');
});

// Play Quiz button (from Welcome to Name Entry)
playQuizBtn.addEventListener('click', () => {
    welcomeStage.style.display = 'none';
    nameEntryStage.style.display = 'block';
});

// Handle Username Selection
startQuizBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        usernameModal.classList.remove('active');
        initGame();
    } else {
        alert("Please enter a username!");
    }
});

// Initialize Game
function initGame() {
    currentPoints = 10;
    currentQuestionIndex = 0;
    questionsAnswered = 0;
    selectedAnswer = null;
    isAnswerSubmitted = false;

    // Select 10 random questions
    selectedQuestions = getRandomQuestions(10);

    // Update UI
    pointsDisplay.textContent = currentPoints;
    createProgressCircles();
    loadQuestion();

    // Hide modals
    gameOverModal.classList.remove('active');
    victoryModal.classList.remove('active');
}

// Get Random Questions
function getRandomQuestions(count) {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Create Progress Circles
function createProgressCircles() {
    progressCircles.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.className = 'progress-circle';
        circle.textContent = i + 1;
        circle.id = `circle-${i}`;
        progressCircles.appendChild(circle);
    }
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showVictory();
        return;
    }

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Load answers
    answerButtons.forEach((btn, index) => {
        btn.textContent = currentQuestion.answers[index];
        btn.className = 'answer-btn';
        btn.disabled = false;
    });

    selectedAnswer = null;
    isAnswerSubmitted = false;
    submitButton.disabled = true;
}

// Handle Answer Selection - FIXED: Allow deselection and reselection
answerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Prevent selection after answer is submitted
        if (isAnswerSubmitted) return;

        // If clicking the same answer, deselect it
        if (selectedAnswer === index) {
            selectedAnswer = null;
            btn.classList.remove('selected');
            submitButton.disabled = true;
        } else {
            // Select new answer
            selectedAnswer = index;

            // Update UI - remove all selections first
            answerButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            submitButton.disabled = false;
        }
    });
});

// Submit Answer
submitButton.addEventListener('click', () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;

    isAnswerSubmitted = true;
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;

    // Show correct/incorrect
    answerButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Update points
    if (isCorrect) {
        currentPoints += 1;
    } else {
        currentPoints -= 2;
    }

    updatePoints();

    // Mark progress circle as completed - FIXED: Always mark current question
    const circle = document.getElementById(`circle-${currentQuestionIndex}`);
    if (circle) {
        circle.classList.add('completed');
    }

    questionsAnswered++;

    // Check if game over
    if (currentPoints < 0) {
        setTimeout(showGameOver, 1500);
    } else {
        // Move to next question
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1500);
    }
});

// Update Points Display
function updatePoints() {
    pointsDisplay.textContent = currentPoints;
    const tracker = document.querySelector('.points-tracker');
    tracker.classList.add('updated');
    setTimeout(() => tracker.classList.remove('updated'), 300);
}

// Show Game Over
function showGameOver() {
    document.getElementById('questionsAnswered').textContent = questionsAnswered;
    document.getElementById('finalScore').textContent = currentPoints;
    gameOverModal.classList.add('active');
    postScore();
}

// Show Victory
function showVictory() {
    document.getElementById('victoryQuestionsAnswered').textContent = questionsAnswered;
    document.getElementById('victoryScore').textContent = currentPoints;
    victoryModal.classList.add('active');
    postScore();
}

async function postScore() {
    try {
        await fetch('http://localhost:5000/api/leaderboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                points: currentPoints
            })
        });
        fetchLeaderboard();
    } catch (error) {
        console.error("Error posting score:", error);
    }
}

async function fetchLeaderboard(elementId = 'leaderboardList') {
    try {
        const response = await fetch('http://localhost:5000/api/leaderboard');
        const leaderboard = await response.json();
        const list = document.getElementById(elementId);
        if (list) {
            if (leaderboard.length === 0) {
                list.innerHTML = '<div class="no-data">No scores yet. Be the first!</div>';
                return;
            }

            let html = `
                <div class="leaderboard-header">
                    <span>Rank</span>
                    <span>Player</span>
                    <span>Points</span>
                </div>
            `;

            html += leaderboard.slice(0, 5).map((entry, index) => `
                <div class="leaderboard-row ${index === 0 ? 'top-player' : ''}">
                    <span class="rank">#${index + 1}</span>
                    <span class="user">${entry.username}</span>
                    <span class="pts">${entry.points} pts</span>
                </div>
            `).join('');

            list.innerHTML = html;
        }
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
}

// Retry Button
retryBtn.addEventListener('click', () => {
    resetModalStages();
    usernameModal.classList.add('active');
    gameOverModal.classList.remove('active');
});

victoryRetryBtn.addEventListener('click', () => {
    resetModalStages();
    usernameModal.classList.add('active');
    victoryModal.classList.remove('active');
});

function resetModalStages() {
    welcomeStage.style.display = 'block';
    nameEntryStage.style.display = 'none';
    fetchLeaderboard('initialLeaderboardList');
}

// REMOVED initGame call from here as it now starts after username entry