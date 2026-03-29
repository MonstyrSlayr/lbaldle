import {emailUpdates} from "./data/updates.js";
import {getCookie, setCookie, getLocalDateDay} from "./utils.js";

//VARIABLES--------------------------------------------------------
const r = document.querySelector(':root');
let cursor = {x: 0, y: 0}

//variables holding the solution
let solution = null;
let solutionNum = null;

//variables relating to user input
const symbolInput = document.getElementById("guess");
const symbolSubmit = document.getElementById("guess_submit");

//the user's guesses
const totalGuesses = 8;
let guesses = 0;
const guessNumArr = [];
let daGuessedSymbol = null;
let daGuessedSymbolNum = null;
const guessesDiv = document.getElementById("guesses");

const hintsDiv = document.getElementById("hinttitles"); //i wanted to add hints lol

//the variables when the game is done
const winDiv = document.getElementById("won");
const lostDiv = document.getElementById("lost");
const daSymbolDiv = document.getElementById("secretSymbol");
const resultsDiv = document.getElementById("results");
let gameOver = false;
let finishEmojis = "";
const finishEmojisDiv = document.getElementById("finishEmojisDiv");
const playAgainButton = document.getElementById("playAgainButton");

//variables related to the emails on the left side of the screen
const emailToggle = document.getElementById("emailToggle");
const emailToggleLabel = document.getElementById("emailToggleLabel");
const emailToggleDiv = document.getElementById("emailToggleDiv");
const emailsDiv = document.getElementById("emails");
const mainGame = document.getElementById("mainGame");
const emailCheck = document.getElementById("emailCheck");
let showEmails = false;
let emailToDelete = null;
const noEmailsDiv = document.getElementById("noEmails");

function getLastFolder(url, num)
{
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const parts = pathname.split('/').filter(part => part !== '').filter(part => part !== 'index.html'); // Split and remove empty elements and index.html
    return parts[parts.length - num];
}

//variables for the daily
const daily = getLastFolder(window.location.href, 1) == "daily";
let dailyDone = false;
let dailyStreak = 0;
let streakNum = document.getElementById("streakNum");

//when you detect a duplicate symbol (clubs/spades, diamonds/hearts, ruby/emerald)
let dupDetected = document.getElementById("dupDetected");

let achievementsLoaded = false;

//fot the infobox you get when hovering over a symbol
let symbolInfoDiv = document.getElementById("symbolInfo");
let guessPreview = document.getElementById("guessPreview");
let hasHovered = false;

let win = false;

//the headers for each column
let symbolRow = document.getElementById("symbolRow");
let rarityRow = document.getElementById("rarityRow");
let coinRow = document.getElementById("coinRow");
let countRow = document.getElementById("countRow");
let appRow = document.getElementById("appRow");
let itemAppRow = document.getElementById("itemAppRow");
let percRow = document.getElementById("percRow");

//the button labels
let buttonLabels = document.getElementsByClassName("buttonLabel");
let isDarkMode = false;
let darkModeToggle = document.getElementById("darkModeToggle");
let showInfo = 0;
let infoCheck = document.getElementById("infoCheck");
let showGroups = true;
let groupCheck = document.getElementById("groupCheck");
let hasSearchedGroup = false;

//ENUMS-------------------------------------------------------------------------------

const EMOJ =
{
    CHECK: "https://monstyrslayr.github.io/lbaldle/img/confirm.png",
    DUD: "https://monstyrslayr.github.io/lbaldle/img/dud.png",
    UP: "https://monstyrslayr.github.io/lbaldle/img/golden_arrow2.png",
    DOWN: "https://monstyrslayr.github.io/lbaldle/img/bronze_arrow7.png",
    MISSING: "https://monstyrslayr.github.io/lbaldle/img/missing.png"
}

//CLASSES-------------------------------------------------------------------------

//email format
class Email
{
    constructor (body = ["What's up?", "This is a test email.", "Sincerely,", "-The Gamemaster"], emailAddress = "Gamey_McGamer@bouncy.mail", title = "New Email") //i wanted to add a story mode but ultimately decided against it
    {
        this.div = document.createElement("div");
        this.div.classList = ["email"];

        this.body = body;
        this.emailAddress = emailAddress;

        let headerDiv = document.createElement("div");
        headerDiv.classList = ["emailHeader"];
        this.div.append(headerDiv);

        let headerText = document.createElement("h3");
        headerText.innerHTML = "Solution due in <span class='guessCount'>" + (totalGuesses - guesses) + "</span> guess" + (totalGuesses - guesses == 1 ? "" : "es");
        headerDiv.append(headerText);

        let notifDiv = document.createElement("div");
        notifDiv.classList = ["emailNotif"];
        this.div.append(notifDiv);

        let daNotif = document.createElement("h3");
        daNotif.innerHTML = title;
        notifDiv.append(daNotif);

        let bodyDiv = document.createElement("div");
        bodyDiv.classList = ["emailBody"];
        this.div.append(bodyDiv);

        for (let i = 0; i < this.body.length; i++)
        {
            let daPar = document.createElement("p");
            daPar.innerHTML = this.body[i];
            bodyDiv.append(daPar);
        }

        let daAddress = document.createElement("p");
        daAddress.innerHTML = this.emailAddress;
        daAddress.classList = ["emailAddress"];
        bodyDiv.append(daAddress);

        this.myCheckbox = document.createElement("button");
        this.myCheckbox.innerHTML = "<img class='emailCheck' src='https://monstyrslayr.github.io/lbaldle/img/confirm.png'>";
        this.myCheckbox.classList = ["emailToggle"];
        this.myCheckbox.closeDiv = this.div;
        bodyDiv.append(this.myCheckbox);

        noEmailsDiv.style.display = "none"; //assume you append the email immediately
        if (!showEmails)
        {
            emailToggleLabel.style.display = "block";
        }

        this.myCheckbox.onclick = function()
        {
            if (emailToDelete == null)
            {
            this.closeDiv.style.marginLeft = "-100%";
            this.closeDiv.style.marginRight = "100%";
            emailToDelete = this.closeDiv;
            setTimeout(function()
                        {
                            emailToDelete.remove();
                            emailToDelete = null;

                            if (emailsDiv.childNodes.length <= 3)
                            {
                                noEmailsDiv.style.display = "block";
                            }
                        }, 500);
            }
        }
    }
}

//each symbol is a symbolelement
class SymbolElement extends Image
{
    constructor (image)
    {
        super();

        this.src = image;
        this.classList = ["symbol"];
    }
}

//a row (not a div yet)
class LbaldleRow
{
    constructor (symbol, rarity, coin, symbolCount, symbolApp, itemApp, perc)
    {
        this.symbol = symbol;
        this.rarity = rarity;
        this.coin = coin;
        this.symbolCount = symbolCount;
        this.symbolApp = symbolApp;
        this.itemApp = itemApp;
        this.perc = perc;
    }
}

//FUNCTIONS----------------------------------------------------------

function newGame()
{
    win = false;
    gameOver = false;
    guessesDiv.innerHTML = "";
    symbolInput.disabled = false;
    guesses = 0;
    winDiv.style.display = "none";
    lostDiv.style.display = "none";
    resultsDiv.style.display = "none";
    finishEmojis = "";
    dupDetected.style.display = "none";
    symbolInput.value = "";
    guessNumArr = [];

    if (daily)
    {
        setCookie("date", getLocalDateDay(), 365, true);
        setCookie("complete", "false", 365, true);

        //the daily is generated based on the date (hopefully it should be the same with all browsers)
        Math.seedrandom(getLocalDateDay());
        solutionNum = Math.floor(symbols.length * Math.random());
        solution = symbols[solutionNum];
    }
    else
    {
        solutionNum = Math.floor(symbols.length * Math.random());
        solution = symbols[solutionNum];
    }

    setCookie("solutionNum", solutionNum.toString(), 365, daily);
    setCookie("guessNumArr", "", 365, daily)

    let daEmail;

    if (daily)
    {
        daEmail = new Email(["Welcome to LBaLdle Daily! Guess the correct symbol based on the clues. You have <span class='guessCount'>8 guesses</span> to get the correct symbol. You only have one game per day, so guess wisely and don't lose your streak!"] , "");
    }
    else
    {
        daEmail = new Email(["Welcome to LBaLdle! Guess the correct symbol based on the clues. You have <span class='guessCount'>8 guesses</span> to get the correct symbol."] , "");
    }

    emailsDiv.prepend(daEmail.div);
}

//resetting the info box
function setInfoDiv(number, paragraph = "")
{
    if (showInfo > 0)
    {
        symbolInfoDiv.innerHTML = "";
        symbolInfoDiv.style.display = "block";

        if (paragraph == "")
        {
            hasHovered = true;

            let daInfoName = document.createElement("h3");
            daInfoName.innerHTML = symbols[number].name;
            symbolInfoDiv.append(daInfoName);

            let daInfoRarity = document.createElement("h3");
            daInfoRarity.innerHTML = symbols[number].rarity;
            switch (symbols[number].rarity)
            {
                case RARITY.COMMON:
                    daInfoRarity.innerHTML = "COMMON";
                    daInfoRarity.style.color = "#ffffff";
                    break;
                case RARITY.UNCOMMON:
                    daInfoRarity.innerHTML = "UNCOMMON";
                    daInfoRarity.style.color = "#61d3e3";
                    break;
                case RARITY.RARE:
                    daInfoRarity.innerHTML = "RARE";
                    daInfoRarity.style.color = "#fbf236";
                    break;
                case RARITY.VERYRARE:
                    daInfoRarity.innerHTML = "VERY RARE";
                    daInfoRarity.style.color = "#7234bf";
                    break;
                case RARITY.SPECIAL:
                    daInfoRarity.innerHTML = "SPECIAL";
                    daInfoRarity.style.color = "#e14a68";
                    break;
            }
            symbolInfoDiv.append(daInfoRarity);

            let daInfoPara = document.createElement("p");
            
            daInfoPara.innerHTML += "Base Coin Payout: " + symbols[number].coin;

            if (showInfo == 2)
            {
                daInfoPara.innerHTML += "<br>Symbols In Description: " + symbols[number].symbolCount;
                daInfoPara.innerHTML += "<br>Appearances in Symbol Descriptions: " + symbols[number].symbolApp;
                daInfoPara.innerHTML += "<br>Appearances in Item Descriptions: " + symbols[number].itemApp;
                daInfoPara.innerHTML += "<br>Steam Achievement Completion Percentage: " + ((symbols[number].achievePerc == -1) ? "unknown" : (symbols[number].achievePerc + "%"));
            }
        
            daInfoPara.innerHTML += "<br>Achievement: " + symbols[number].achieveDesc;
        }
        else
        {
            let daInfoPara = document.createElement("p");
            daInfoPara.innerHTML = paragraph;
        }

        symbolInfoDiv.append(daInfoPara);
    }
}

//creates the row using a lbaldle row
function makeRowDiv(row)
{
    let daDiv = document.createElement("div");

    let daSymbol = new SymbolElement(row.symbol.image);
    daSymbol.daImg = row.symbol.image;
    daSymbol.daNumber = daGuessedSymbolNum;
    daDiv.append(daSymbol);

    daSymbol.onmouseenter = function(e)
    {
        moveInfoDiv(e);
        setInfoDiv(daSymbol.daNumber);
    }

    daSymbol.onmouseleave = function()
    {
        symbolInfoDiv.style.display = "none";
    }

    let daRarity = new SymbolElement(row.rarity);
    daRarity.daImg = row.rarity;
    daDiv.append(daRarity);

    let daCount = new SymbolElement(row.coin);
    daCount.daImg = row.coin;
    daDiv.append(daCount);

    let daSymbols = new SymbolElement(row.symbolCount);
    daSymbols.daImg = row.symbolCount;
    daDiv.append(daSymbols);

    let daApps = new SymbolElement(row.symbolApp);
    daApps.daImg = row.symbolApp;
    daDiv.append(daApps);

    let daItemApps = new SymbolElement(row.itemApp);
    daItemApps.daImg = row.itemApp;
    daDiv.append(daItemApps);

    let daPercs = new SymbolElement(row.perc);
    daPercs.daImg = row.perc;
    daDiv.append(daPercs);

    return daDiv;
}

function addGuess()
{
    guesses++;

    //check rarity
    let elRarity = EMOJ.CHECK;
    if (daGuessedSymbol.rarity != solution.rarity)
    {
        elRarity = EMOJ.DUD;
    }

    //check coin count
    let elCount = EMOJ.CHECK;
    if (daGuessedSymbol.coin > solution.coin)
    {
        elCount = EMOJ.DOWN;
    }
    else if (daGuessedSymbol.coin < solution.coin)
    {
        elCount = EMOJ.UP;
    }

    //check symbol count
    let elSymbol = EMOJ.CHECK;
    if (daGuessedSymbol.symbolCount > solution.symbolCount)
    {
        elSymbol = EMOJ.DOWN;
    }
    else if (daGuessedSymbol.symbolCount < solution.symbolCount)
    {
        elSymbol = EMOJ.UP;
    }

    //check symbapp count
    let elApp = EMOJ.CHECK;
    if (daGuessedSymbol.symbolApp > solution.symbolApp)
    {
        elApp = EMOJ.DOWN;
    }
    else if (daGuessedSymbol.symbolApp < solution.symbolApp)
    {
        elApp = EMOJ.UP;
    }

    //check itemapp count
    let elItemApp = EMOJ.CHECK;
    if (daGuessedSymbol.itemApp > solution.itemApp)
    {
        elItemApp = EMOJ.DOWN;
    }
    else if (daGuessedSymbol.itemApp < solution.itemApp)
    {
        elItemApp = EMOJ.UP;
    }

    //check achievement percentage
    let elPerc = EMOJ.CHECK;
    if (daGuessedSymbol.achievePerc == -1)
    {
        elPerc = EMOJ.MISSING;
    }
    else if (daGuessedSymbol.achievePerc > solution.achievePerc)
    {
        elPerc = EMOJ.DOWN;
    }
    else if (daGuessedSymbol.achievePerc < solution.achievePerc)
    {
        elPerc = EMOJ.UP;
    }

    let daNewRow = makeRowDiv(new LbaldleRow(daGuessedSymbol, elRarity, elCount, elSymbol, elApp, elItemApp, elPerc));
    daNewRow.classList = ["row"];
    guessesDiv.append(daNewRow);

    if (elRarity == EMOJ.CHECK && elCount == EMOJ.CHECK && elSymbol == EMOJ.CHECK && elApp == EMOJ.CHECK && elItemApp == EMOJ.CHECK && (elPerc == EMOJ.CHECK || elPerc == EMOJ.MISSING) && daGuessedSymbol != solution)
    {
        dupDetected.style.display = "block";
    }

    daGuessedSymbol = null;

    if (guesses >= totalGuesses && !gameOver && !win)
    {
        gameOverFunc();
        lostDiv.style.display = "block";
        resultsDiv.style.display = "block";
    }
}

//saves guess (so when you reload it's still there)
function saveGuess(guessNumber)
{
    guessNumArr.push(guessNumber);
    let daCookieString = "";
    for (let i = 0; i < guessNumArr.length; i++)
    {
        daCookieString += guessNumArr[i] + ",";
    }
    //console.log(daCookieString);
    setCookie("guessNumArr", daCookieString, 365, daily);
}

//win or lose, this is what runs when the game ends
function gameOverFunc()
{
    if (daily)
    {
        if (!dailyDone)
        {
            if (winDiv.style.display != "block") //then you lost
            {
                dailyStreak = 0;
                setCookie("streak", "0", 365, false, true);
            }
            else //you won
            {
                dailyStreak += 1;
                setCookie("streak", dailyStreak.toString(), 365, false, true);
            }
        }

        dailyDone = true;
        setCookie("complete", "true", 365, true);

        streakNum.innerHTML = dailyStreak.toString();
    }

    gameOver = true;
    symbolInput.disabled = true;
    daSymbolDiv.innerHTML = solution.name;
    resultsDiv.style.display = "block";

    //generate a wordle finishing thing whatever it's called ugggg
    //🟩🟨🔽🔼⬛🟥❓❔

    for (let i = 0; i < guessesDiv.childNodes.length; i++)
    {
        let daRow = guessesDiv.childNodes[i];

        for (let j = 1; j < daRow.childNodes.length; j++)
        {
            let daEmoj = daRow.childNodes[j];

            switch (daEmoj.daImg)
            {
                case EMOJ.DUD:
                    finishEmojis += "🟥";
                    break;
                case EMOJ.CHECK:
                    finishEmojis += "🟩";
                    break;
                case EMOJ.UP:
                    finishEmojis += "🔼";
                    break;
                case EMOJ.DOWN:
                    finishEmojis += "🔽";
                    break;
                case EMOJ.MISSING:
                    finishEmojis += "❔";
                    break;
                default:
                    finishEmojis += "⬛";
                    break;
            }
        }

        finishEmojis += "<br>";
    }

    //console.log(finishEmojis);
    finishEmojisDiv.innerHTML = finishEmojis;
}

function changeDarkMode()
{
    if (isDarkMode)
    {
        if (!daily)
        {
            r.style.setProperty('--light-bg-color', '#122950');
            r.style.setProperty('--light-bg-select', '#36376a');
        }
        else
        {
            r.style.setProperty('--light-bg-color', '#111111');
            r.style.setProperty('--light-bg-select', '#333333');
        }

        darkModeToggle.src = "https://monstyrslayr.github.io/lbaldle/img/moon.png";
    }
    else
    {
        if (!daily)
        {
            r.style.setProperty('--light-bg-color', '#ff8300');
            r.style.setProperty('--light-bg-select', '#ffa320');
        }
        else
        {
            r.style.setProperty('--light-bg-color', '#777777');
            r.style.setProperty('--light-bg-select', '#999999');
        }

        darkModeToggle.src = "https://monstyrslayr.github.io/lbaldle/img/sun.png";
    }
}

function changeShowInfo()
{
    if (showInfo == 2)
    {
        infoCheck.src = "https://monstyrslayr.github.io/lbaldle/img/coconut.png";
    }
    else if (showInfo == 1)
    {
        infoCheck.src = "https://monstyrslayr.github.io/lbaldle/img/coconut_half.png";
    }
    else
    {
        infoCheck.src = "https://monstyrslayr.github.io/lbaldle/img/dud.png";
    }
}

function changeShowGroups()
{
    if (showGroups)
    {
        groupCheck.src = "https://monstyrslayr.github.io/lbaldle/img/confirm.png";
    }
    else
    {
        groupCheck.src = "https://monstyrslayr.github.io/lbaldle/img/dud.png";
    }
}

//loading the game after reloading or leaving and exiting
function loadDaGame()
{
    if (getCookie("guessNumArr", false) == "" && !daily)
    {
        newGame();
    }
    else
    {
        if (daily)
        {
            if (getCookie("streak", true) == "")
            {
                setCookie("streak", "0", 365, false, true);
                dailyStreak = 0;
            }
            else
            {
                dailyStreak = parseInt(getCookie("streak", true));
            }

            streakNum.innerHTML = dailyStreak.toString();
        }

        if (getCookie("solutionNum", daily) == "")
        {
            newGame();
        }
        else
        {
            let loadGame = !daily;

            if (daily)
            {
                if (getLocalDateDay() == getCookie("date", true))
                {
                    loadGame = true;
                }
                else
                {
                    newGame();
                }
            }

            if (loadGame)
            {
                if (daily)
                {
                    dailyDone = getCookie("complete", true) == "true";
                }

                //yo we loading the save!!!
                solutionNum = parseInt(getCookie("solutionNum", daily))
                solution = symbols[solutionNum];

                let daGuessNumArr = getCookie("guessNumArr", daily).split(",");

                for (let i = 0; i < daGuessNumArr.length - 1; i++)
                {
                    let daNum = parseInt(daGuessNumArr[i]);

                    symbolInput.value = symbols[daNum].name;
                    symbolSubmit.onclick();
                }
            }
        }
    }

    for (let i = 0; i < emailUpdates.length; i++)
    {
        let daEmail = new Email(emailUpdates[i].desc, "Monstyr_McMonstyrSlayr@bouncy.mail", emailUpdates[i].updateName);
        emailsDiv.prepend(daEmail.div);
    }
}

//moving the info div with the mouse
function moveInfoDiv(e)
{
    clearInterval(symbolInfoDiv.moveMe);
    clearTimeout(symbolInfoDiv.stopMe);
    symbolInfoDiv.moveMe = window.setInterval(function()
                                            {
                                                symbolInfoDiv.style.left = cursor.x + 4 + 'px';
                                                symbolInfoDiv.style.top = cursor.y + window.scrollY + 4 + 'px';
                                            }, 20);  
    symbolInfoDiv.stopMe = window.setTimeout(function()
                                            {
                                                clearInterval(symbolInfoDiv.moveMe);
                                            }, 2000)                                
}

function stopInfoDiv()
{
    clearInterval(symbolInfoDiv.moveMe);
    clearTimeout(symbolInfoDiv.stopMe);
    symbolInfoDiv.style.display = "none";
}

//GAME----------------------------------------------

window.onmousemove = function(e)
{
    cursor.x = e.clientX;
    cursor.y = e.clientY;
}

//automatically closes the emails tab if you click it and there are no emails
emailsDiv.onclick = function()
{
    if (showEmails)
    {
        if (emailsDiv.childElementCount <= 1)
        {
            emailToggle.onclick();
        }
    }
}

//opens and closes the emails tab
emailToggle.onclick = function()
{
    showEmails = !showEmails;

    if (showEmails)
    {
        if (window.screen.width > 900)
        {
            emailToggleDiv.style.marginLeft = "33%";
            mainGame.style.width = "66%";
            emailsDiv.style.width = "";
        }
        else
        {
            emailsDiv.style.marginLeft = "";
            emailToggleDiv.style.marginLeft = "86%";
        }
        emailsDiv.style.opacity = "1";
        emailCheck.src = EMOJ.CHECK;

        emailToggleLabel.style.display = "none";
    }
    else
    {
        emailToggleDiv.style.marginLeft = "";
        if (window.screen.width > 900)
        {
            mainGame.style.width = "100%";
            emailsDiv.style.width = "0px";
        }
        else
        {
            emailsDiv.style.marginLeft = "-90%";
        }
        emailsDiv.style.opacity = "0";
        emailCheck.src = EMOJ.DUD;
    }
}

//when the player types in the input box, look for the symbol they could be referring to
//and show the image prematurely
symbolInput.oninput = function()
{
    let found = false;
    guessPreview.innerHTML = "";

    if (showGroups)
    {
        for (let i = 0; i < symbols.length; i++)
        {
            let daDict = dictionaries[i]
            if (findDictionary(symbolInput.value) == i)
            {
                hasSearchedGroup = true;
                found = true;
                let newPreview = [];
                for (let j = 0; j < daDict.symbols.length; j++)
                {
                    let daSymbolNum = daDict.symbols[j];
                    let daSymbol = symbols[daSymbolNum];

                    newPreview[j] = new SymbolElement(daSymbol.image);
                    newPreview[j].symbolNum = daSymbolNum;
                    guessPreview.append(newPreview[j])

                    //^^the image in question
                    newPreview[j].onmouseenter = function(e)
                    {
                        moveInfoDiv(e);
                        setInfoDiv(this.symbolNum);
                    }

                    newPreview[j].onmouseleave = function()
                    {
                        stopInfoDiv();
                    }
                }

                break;
            }
        }
    }

    if (!found)
    {
        for (let i = 0; i < symbols.length; i++)
        {
            let daSymbol = symbols[i];
            if (findSymbol(symbolInput.value) == i)
            {
                let newPreview = document.createElement("img");
                newPreview.classList = ["symbol"];
                newPreview.src = daSymbol.image;
                newPreview.symbolNum = i;
                guessPreview.append(newPreview)

                //^^the image in question
                newPreview.onmouseenter = function(e)
                {
                    moveInfoDiv(e);
                    setInfoDiv(newPreview.symbolNum);
                }

                newPreview.onmouseleave = function()
                {
                    stopInfoDiv();
                }
                break;
            }
        }
    }
}

//so when the mouse enters the info div, the div stays anyway
symbolInfoDiv.onmouseenter = function(e)
{
    symbolInfoDiv.style.display = "block";
}

symbolInfoDiv.onmouseleave = function()
{
    stopInfoDiv();
}

//add info boxes for each header
rarityRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The rarity of a symbol.<br>Orange has an <span style='color:#61d3e3'>Uncommon</span> rarity.");
}

rarityRow.onmouseleave = function()
{
    stopInfoDiv()
}

coinRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The default amount of coins a symbol gives.<br>Coin payouts with a \"?\" are 0.<br>Shiny Pebble gives 1 coin.<br>Sloth gives 0 coins.");
}

coinRow.onmouseleave = function()
{
    stopInfoDiv()
}

countRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The total amount of symbols in the description of the item.<br>Miner has 4 symbols in its description (Ore, Big Ore, Ore, Big Ore).");
}

countRow.onmouseleave = function()
{
    stopInfoDiv()
}

appRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The amount of times the symbol appears in any symbol's description.<br>Milk appears 6 times in symbol descriptions (Cat, Cat, Chef, Cow, Farmer, Omelette).");
}

appRow.onmouseleave = function()
{
    stopInfoDiv()
}

itemAppRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The amount of times the symbol appears in any item's description.<br>Spirit appears 3 times in item descriptions (Dark Humor, Shrine, Undertaker).");
}

itemAppRow.onmouseleave = function()
{
    stopInfoDiv()
}

percRow.onmouseenter = function(e)
{
    moveInfoDiv(e);
    setInfoDiv(0, "The percentage of people on Steam who have completed a symbol's achievement.<br>Symbols without achievements have an achievement percentage of 0.");
}

percRow.onmouseleave = function()
{
    stopInfoDiv()
}

//when the player submits a guess
symbolSubmit.onclick = function()
{
    guessPreview.src = "";
    if (!gameOver)
    {
        //you win------------------------------------------------
        if (findSymbol(symbolInput.value) == solutionNum)
        {
            symbolInput.value = solution.name;
            daGuessedSymbol = solution;
            daGuessedSymbolNum = solutionNum;
            winDiv.style.display = "block";
            dupDetected.style.display = "none";
            win = true;
            saveGuess(solutionNum);
            addGuess();
            gameOverFunc();

            let daEmail;

            if (daily)
            {
                daEmail = new Email(["You win! You got the Daily symbol in <span class='guessCount'>" + guesses + " guesses</span>."], "");
            }
            else
            {
                daEmail = new Email(["You win! You got the symbol in <span class='guessCount'>" + guesses + " guesses</span>."], "");
            }

            emailsDiv.prepend(daEmail.div);
        }
        else
        {
            
            daGuessedSymbol = findSymbol(symbolInput.value, false)
            daGuessedSymbolNum = findSymbol(symbolInput.value)

            //your guess could not be found------------------------------------
            if (daGuessedSymbol == null)
            {
                let daEmail;

                daEmail = new Email(["This symbol was not found. Try checking your spelling."], "");

                emailsDiv.prepend(daEmail.div);
            }
            //you had the wrong guess------------------------------------------
            else
            {
                symbolInput.value = "";
                saveGuess(daGuessedSymbolNum);
                addGuess();

                let daEmail;

                if (totalGuesses - guesses != 1) daEmail = new Email([(totalGuesses - guesses) + " guesses remaining." + ((!hasHovered && showInfo > 0 && guesses == 3) ? "<br>By the way, did you know that you can hover over symbols to see their data?" : "")  + ((!hasSearchedGroup && showGroups && guesses == 2) ? "<br>Did you know that you can search for specific symbol groups?<br>Try typing \"fruit\", \"human\", or even \"rare\"!" : "")], "");
                else daEmail = new Email(["1 guess remaining."], "");

                emailsDiv.prepend(daEmail.div);
            }
        }
    }
}

darkModeToggle.onclick = function()
{
    isDarkMode = !isDarkMode;

    setCookie("darkMode", (isDarkMode ? "dark" : "light"), 365, false);

    changeDarkMode();
}

infoCheck.onclick = function()
{
    showInfo = showInfo + 1;
    if (showInfo > 2) showInfo = 0;

    setCookie("showInfo", (showInfo == 2 ? "true" : (showInfo == 1 ? "limited" : 0)), 365, daily);

    changeShowInfo();
}

groupCheck.onclick = function()
{
    showGroups = !showGroups;

    setCookie("showGroups", (showGroups ? "true" : "false"), 365, daily);

    changeShowGroups();
}

playAgainButton.onclick = function ()
{
    newGame();
}

document.body.onscroll = function()
{
    if (window.screen.width < 450)
    {
        if (window.scrollY > 30 && !showEmails)
        {
            emailToggleDiv.style.display = "none";
        }
        else
        {
            emailToggleDiv.style.display = "";
        }
    }
}

//ON SITE LOAD--------------------------------------------------------

//reveal the emails
showEmails = false;
emailToggle.onclick();

isDarkMode = (getCookie("darkMode", false) == "dark" ? true : false);
changeDarkMode();

showInfo = (getCookie("showInfo", daily) == "true" ? 2 : getCookie("showInfo", daily) == "limited" ? 1 : 0);
changeShowInfo();

showGroups = (getCookie("showGroups", daily) == "true" ? true : false);
changeShowGroups();

//originally, the game would get the achievements straight from steam
//but due to complications on steam's side i scrapped it
//now it gets it straight from a local file
$.ajax
(
    {
        //url: "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=1404850&format=json",
        url: "https://monstyrslayr.github.io/lbaldle/data/steamAchievements.json",
        type: "GET",
    }
).done(function(response) 
    {
        achievementsLoaded = true;
        //console.log(response);
        let daList = response.achievementpercentages.achievements;

        for (let i = 0; i < symbols.length; i++)
        {
            let found = false;

            for (let j = 0; j < daList.length; j++)
            {
                if (symbols[i].achieveName == daList[j].name)
                {
                    symbols[i].achievePerc = Math.round(daList[j].percent * 100)/100;
                    found = true;
                    break;
                }
            }

            if (!found)
            {
                symbols[i].achievePerc = 0; //symbols without achievements have an achievement percentage of zero
            }
        }

        loadDaGame();
    }
).fail(function()
    {
        for (let i = 0; i < symbols.length; i++)
        {
            symbols[i].achieveDesc = "We were unable to get the Steam achievement percentages. Try reloading the page, or if the issue persists, contact MonstyrSlayr.";
        }

        let daEmail = new Email(["We were unable to get the Steam achievement percentages. Try reloading the page, or if the issue persists, contact MonstyrSlayr."], "Monstyr_McMonstyrSlayr@bouncy.mail", "Achievement Column Load Error");
        emailsDiv.prepend(daEmail.div);

        loadDaGame();
    }
);