function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
}
function generateSlideFromPrompt(prompt = "top f1 teams") {
    const API_KEY = "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";
    const MODEL_TYPE = "gpt-4"; //chatGPT model
    let TitleShort = getTitlePrompt(prompt)
    const presentation = SlidesApp.create(TitleShort); // Use the prompt for the filename, limited to 100 characters to avoid errors
    const slide = presentation.getSlides()[0]; // Get the first slide that's automatically created with the presentation
    
    // Set the title of the first slide to the prompt
    const titleShape = slide.getShapes()[0]; // Assuming the first shape is the title box
    titleShape.getText().setText(getTitlePrompt(TitleShort));

    const temperature = 0;
    const maxTokens = 2060;

    const requestBody = {
        model: MODEL_TYPE,
        messages: [{role: "user", content: "Generate 5 points on " + prompt}],
        temperature,
        max_tokens: maxTokens,
    };

    const requestOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
        payload: JSON.stringify(requestBody),
        muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];

    // Split the generated text into paragraphs
    const paragraphs = generatedText.split('\n').filter(paragraph => paragraph.trim() !== '');

    // Create a new slide for each paragraph
    paragraphs.forEach(paragraph => {
        const newSlide = presentation.appendSlide();
        const imageurl = getImageUrl(getimagePrompt(paragraph))
        
        newSlide.insertTextBox(paragraph, 10, 10, 600, 400); // Adjust the position and size as needed
        newSlide.insertImage(imageurl, 10, 40, 400, 400)
    });

    // Return the URL of the presentation for further use
    return presentation.getUrl();
}

function getimagePrompt(paragraph = "1. Mercedes-AMG Petronas Formula One Team: This team has been a dominant force in Formula One racing for several years. They have won multiple Constructors' Championships, largely due to the success …") {
    const API_KEY = "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";
    const MODEL_TYPE = "gpt-4"; //chatGPT model

    
    const temperature = 0;
    const maxTokens = 2060;

    const requestBody = {
        model: MODEL_TYPE,
        messages: [{role: "user", content: "Generate a short 1-2 word google search to find images related to " + paragraph}],
        temperature,
        max_tokens: maxTokens,
    };

    const requestOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
        payload: JSON.stringify(requestBody),
        muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];
    console.log(generatedText)

    return generatedText



}

function getTitlePrompt(paragraph = "1. Mercedes-AMG Petronas Formula One Team: This team has been a dominant force in Formula One racing for several years. They have won multiple Constructors' Championships, largely due to the success …") {
    const API_KEY = "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";
    const MODEL_TYPE = "gpt-4"; //chatGPT model

    
    const temperature = 0;
    const maxTokens = 2060;

    const requestBody = {
        model: MODEL_TYPE,
        messages: [{role: "user", content: "Generate a short 1-2 word google title related to " + paragraph + " and just say the title nothing else other than the title"}],
        temperature,
        max_tokens: maxTokens,
    };

    const requestOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
        payload: JSON.stringify(requestBody),
        muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];
    console.log(generatedText)

    return generatedText



}

function getImageUrl(prompt = "Mercedes-AMG F1") {
    var apiKey = 'AIzaSyBi0C1K4t_K45v-4rU3LgWqEA4qIQXK5v8';
    var searchEngineId = '43bd2b5998b754bf7';
    var query = prompt; // This could be a static query or based on the prompt/content
    var url = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + searchEngineId + "&searchType=image&q=" + encodeURIComponent(query);
    
    var response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    console.log(response)
    var results = JSON.parse(response.getContentText());
    
    if (results.items && results.items.length > 0) {
        console.log(results.items[0].link)
        return results.items[0].link; // Return the first image's URL
    } else {
        console.log("logo")
        return "https://cdn.discordapp.com/attachments/1208274732227764264/1208595162914103376/logo-no-background.png?ex=65e3daf5&is=65d165f5&hm=4d088d6dd1e4fb2cb3e9d75785f38efe79888a31a8d523724e00af838ff36143&"; // Return null if no images found
    }
}

function generateFlashcardsfromPrompt(prompt) {
    const API_KEY = "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";
    const MODEL_TYPE = "gpt-4"; // ChatGPT model
    const temperature = 1;
    const maxTokens = 150;

    const requestBody = {
        model: MODEL_TYPE,
        messages: [{ role: "user", content: "Generate flashcards about the following prompt, formatting them in the format question: answerand separating each flashcard with a * character" + prompt }],
        temperature,
        max_tokens: maxTokens,
    };

    const requestOptions = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
        },
        payload: JSON.stringify(requestBody),
        muteHttpExceptions: true,
    };

    const response = UrlFetchApp.fetch("https://api.openai.com/v1/chat/completions", requestOptions);
    const responseText = response.getContentText();
    const json = JSON.parse(responseText);
    const generatedText = json['choices'][0]['message']['content'];

    const flashcardData = parseFlashcardData(generatedText);

    // Return the generated flashcards
    return flashcardData;
}

function parseFlashcardData(generatedText) {
    const flashcards = generatedText.split('*').map(card => {
        // Split each card into question and answer, trimming whitespace
        const parts = card.split('?\n').map(text => text.trim());
        if (parts.length < 2) return null; // Ensure there are two parts
        const [question, answer] = parts;
        return { front: question, back: answer };
    }).filter(card => {
        // Filter out any cards where the question or answer is empty or only spaces
        return card !== null && card.front.length > 0 && card.back.length > 0;
    });
    return flashcards;
}
