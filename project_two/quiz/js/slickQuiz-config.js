// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>Think you've studied enough to become a Master of the Missions? Click below to find out! </p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
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
            "select_any": true,
            "correct": "<p><span>Correct!</span> A mission is a religious settlement where people come to worship.</p>",
            "incorrect": "<p><span>Incorrect.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
