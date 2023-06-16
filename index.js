const averageScore = document.getElementById("average-score");
const complimentHeader = document.getElementById("compliment-header");
const complimentMsg = document.getElementById("compliment-msg");

const reactionCat = document.getElementById("reaction-cat");
const reactionScore = document.getElementById("reaction-score");
const reactionImg = document.getElementById("image-reaction");

const memoryCat = document.getElementById("memory-cat");
const memoryScore = document.getElementById("memory-score");
const memoryImg = document.getElementById("image-memory");

const verbalCat = document.getElementById("verbal-cat");
const verbalScore = document.getElementById("verbal-score");
const verbalImg = document.getElementById("image-verbal");

const visualCat = document.getElementById("visual-cat");
const visualScore = document.getElementById("visual-score");
const visualImg = document.getElementById("image-visual");

// reactionCat.textContent = "Reaction";
// reactionScore.textContent = "80";
// reactionImg.innerHTML = 
//     `<source srcset="assets/images/icon-reaction.svg" type="image/svg">
//     <img src="assets/images/icon-reaction.svg" alt="icon reaction">`

// How to get data from a JSON file: https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/ 
// It only works when the json file is stored in a server (local or remote) not when it is stored locally
// That is why I fetch the JSON file from my gh-pages even when working local. I have to use the raw
// file, not the normal gh file.
// I don't really understand why I don't need to use parse() to get the json content.
fetch('https://raw.githubusercontent.com/suzannepach/results-summary-component/main/data.json')
    .then((response) => response.json())
    .then((json) => { 
        reactionCat.textContent = json[0].category;
        reactionScore.textContent = json[0].score;
        reactionImg.innerHTML = 
        `<source srcset=${json[0].icon} type="image/svg">
        <img src=${json[0].icon} alt="icon reaction">`

        memoryCat.textContent = json[1].category;
        memoryScore.textContent = json[1].score;
        memoryImg.innerHTML = 
        `<source srcset=${json[1].icon} type="image/svg">
        <img src=${json[1].icon} alt="icon reaction">`

        verbalCat.textContent = json[2].category;
        verbalScore.textContent = json[2].score;
        verbalImg.innerHTML = 
        `<source srcset=${json[2].icon} type="image/svg">
        <img src=${json[2].icon} alt="icon reaction">`

        visualCat.textContent = json[3].category;
        visualScore.textContent = json[3].score;
        visualImg.innerHTML = 
        `<source srcset=${json[3].icon} type="image/svg">
        <img src=${json[3].icon} alt="icon reaction">`

        let totalScore = json[0].score + json[1].score + json[2].score + json[3].score;
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


