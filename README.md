## ✨ Inspiration
Driven by the goal of more accessible and transformative education, our group set out to find a viable solution. As 1st year students, we found a switch to more lecture-based learning harder to understand and conceptualize in our minds. Moreover, we wanted to be accessible to many learner profiles and create software that helps express and learn ideas more effectively than current models. With these objectives, EduGlow seeks to educate and help students "glow" with ideas.

## 🚀 What it does
EduGlow works on two key features. The slide maker helps guide students to express their ideas more effectively or learn about concepts more visually via Google Slides once given an initial prompt. Secondly, using the learning through the slides, students can be redirected to our flashcards page where they can test themselves on the key concepts mentioned helping them learn through active recall methods.

## 🔧 How we built it
The prompt is initially run through OpenAI GPT-4 API which using our own text-breaking algorithm excellently transforms text into bite-size chunks onto each slide using point forms. Using the Image Search API, the summary of each slide is fed in to give the most relevant picture which is also placed below the text on the slides. The flashcards were styled with CSS and took in information from the slides, and GPT 4 crafts questions and answers to it.

## 🤯 Challenges we ran into
We originally started making a NextJS app making our website stylized in TailWindCSS. However, we found it very hard to integrate Google products such as slides which require a user to sign in and ethical problems of connecting to a user's drive through VSCode. As such, we had to move to AppScript, Google's IDE which none of the group members of familiar with which proved to be hard.

## 🏆 Accomplishments that we're proud of
Connecting a prompt to a well-crafted slide portfolio learning googlescript in a time crunch. connecting all of our API's successfully making a website that we believe has serious positive implications for this world

## 🧠 What we learned
- google script
- OpenAI integration
- GoogleSearch API
- Google Slides API

## 🚀 What's next for EduGlow
Creating an additional section before generative AI to add or delete slides and add or delete more information.
Creating more stylized options for slide presentations (ex. transitions/animations)
Making the flashcards, more like a quizlet where a user can click the right answer and can save scores with Firebase integration.
Connecting to WhisperAI to provide voice input, as another method to be accessible on the website

# Built With
- appscript
- css
- custom-search-json-api
- googlescript
- gpt4
- html
- openai
slidesapi
