const summeryTopic = document.querySelector(".summery-topic");

const averageScore = document.getElementById("average-score");
const complimentHeader = document.getElementById("compliment-header");
const complimentMsg = document.getElementById("compliment-msg");

// How to get data from a JSON file: https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ 
// It only works when the json file is stored in a server (local or remote) not when it is stored locally
// That is why I fetch the JSON file from my gh-pages even when working local. I have to use the raw
// file, not the normal gh file.
// I don't really understand why I don't need to use parse() to get the json content.
fetch('https://raw.githubusercontent.com/suzannepach/results-summary-component/main/data.json')
    .then((response) => response.json())
    .then((json) => { 
        let listItems = "";
        let totalScore = 0;
        for (let i = 0; i < 4; i++) {
            listItems += `
            <li id="${json[i].id}" class="summary-topic bg-accent${i+1}">
                <div class="flex">
                    <picture aria-hidden="true">
                        <source srcset=${json[i].icon} type="image/svg">
                        <img src=${json[i].icon} alt="icon ${json[i].id}">
                    </picture>
                    <h3 class="fs-500 text-accent${i+1}">${json[i].category}</h3>
                </div>
                <p class="fs-500 text-extra-dark-transparent"><span class="text-dark">${json[i].score}</span> / 100</p>
            </li>`
            totalScore += json[i].score;
        }
        summary.innerHTML = listItems;
        let average = Math.floor(totalScore / 4);
        averageScore.textContent = average;

        if (average > 75) {
            complimentHeader.textContent = "Great"
            complimentMsg.textContent = "You scored higher than 65% of the people who have taken these tests."
        } else if (average > 50) {
            complimentHeader.textContent = "Not bad"
            complimentMsg.textContent = "Can you try again to score even higher?"
        } else {
            complimentHeader.textContent = "Well tried"
            complimentMsg.textContent = "Keep practicing to improve your score!"
        }

    });