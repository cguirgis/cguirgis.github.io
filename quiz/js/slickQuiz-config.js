// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>Think you've studied enough to become a Master of the Missions? Click below to find out!  </p>",
        "results": "<h5>Learn More</h5><a href="index2.html">
                <img id="compass" src="assets/compass.png" <button class="compass"></a>
            <a href="index2.html">
                <button class="navigation">Back to Map</button></a>,
        "level1":  "Congratulations!  You are a Master of the Missions!",
        "level2":  "Great Job!  You are so close to becomming a Master of the Missions!",
        "level3":  "Nice Job!  Return to the Map to study some more, and then you're on your way to becoming a Master of the Missions!",
        "level4":  "Good Try. Return to the Map to study some more, and then you're on your way to becoming a Master of the Missions!",
        "level5":  "Return to the Map to study some more, and then you're on your way to becoming a Master of the Missions!" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What year was Mission San Juan Capistrano founded?",
            "a": [
                {"option": "1776",      "correct": true},
                {"option": "1850",     "correct": false},
                {"option": "1658",      "correct": false},
                {"option": "2012",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> Mission San Juan Capistrano was founded in 1776 by Father Junipero Serra. Click next to continue!</p>",
            "incorrect": "<p><span>Incorrect.</span> Mission San Juan Capistrano was actually founded in 1776 by Father Junipero Serra.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is a mission?",
            "a": [
                {"option": "A place where people learn what their mission is in life",               "correct": false},
                {"option": "A religious school for young children",   "correct": false},
                {"option": "A religious settlement where people come to worship",               "correct": true},
                {"option": "A place where people learn how to go undercover on a mission.", "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> A mission is a religious settlement where people come to worship.</p>",
            "incorrect": "<p><span>Incorrect.</span> A mission is actually a religious settlement where people come to worship.</p>" // no comma here
        }, 
        
        
        { // Question 3 - Multiple Choice, Multiple True Answers, Select any
            "q": "What are missionaries?",
            "a": [
                {"option": "People who are hired to go undercover on a mission",           "correct": false},
                {"option": "People who teach religion to others",  "correct": true},
                {"option": "People who have walked from Mexico to California", "correct": false},
                {"option": "Priests, nuns, and brothers",  "correct": false} 
            ],
            "correct": "<p><span>Correct!</span> Missionaries are people who teach religion to others.</p>",
            "incorrect": "<p><span>Incorrect.</span> Missionaries are actually people who teach religion to others.</p>" 
        },
        { // Question 4
            "q": "What is the southernmost mission?",
            "a": [
                {"option": "Mission San Luis Rey de Francia",    "correct": false},
                {"option": "Mission San Diego de Alcala",     "correct": true},
                {"option": "Mission San Juan Capistrano",      "correct": false},
                {"option": "Mission San Gabriel Arcangel",   "correct": false}
            ],
            "correct": "<p><span>Correct!</span> Mission San Diego de Alcala is the southermost mission.</p>",
            "incorrect": "<p><span>Incorrect.</span> The southernmost mission is actually Mission San Diego de Alcala.</p>" 
        },
        { // Question 5
            "q": "Which mission was founded last?",
            "a": [
                {"option": "Mission San Luis Obispo de Tolosa",    "correct": false},
                {"option": "San Juan Bautista",     "correct": false},
                {"option": "Santa Clara de Asis",     "correct": false},
                {"option": "San Francisco Solano",     "correct": true} 
            ],
            "correct": "<p><span>Correct!</span> Mission San Francisco Solano was founded last.</p>",
            "incorrect": "<p><span>Incorrect.</span> Mission San Francisco Solano was actually founded last.</p>" 
        } 
    ]
};
