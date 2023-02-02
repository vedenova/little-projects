const twitterButton = document.querySelector('#js-tweet');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    /*async meaning that you can use the await keyword in the function to pause the function while waiting for an operation to complete*/

    try {
        /*try..catch that allows us to “catch” errors so the script can*/
        const response = await fetch(endpoint)
        if (!response.ok) {
            /*checks if the response is 200 OK*/
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayQuote(json.message);
        setTweetButton(json.message);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
};

function displayQuote(quote) {
    /*for displaying quotes*/
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
};

function setTweetButton(quote){
    twitterButton.setAttribute('href',`https://twitter.com/share?text=${quote} - Donald Trump`);
};
getQuote();

