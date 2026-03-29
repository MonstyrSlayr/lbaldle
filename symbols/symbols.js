import {emailUpdates} from "../updates.js";
import {getCookie, setCookie} from "../utils.js";

const r = document.querySelector(':root');
const symbolsDiv = document.getElementById("allSymbols");
let demSymbols = symbols.slice(0);
const cols = document.getElementsByClassName("column");
let isDarkMode = false;
const darkModeToggle = document.getElementById("darkModeToggle");

if (getCookie("darkMode", false) == "")
{
    setCookie("darkMode", "light", 365, false);
}

function createDivs()
{
    for (let i = 0; i < demSymbols.length; i++) {
        let daSymbol = demSymbols[i];

        let daRow = document.createElement("div");
        daRow.classList = ["row"];
        symbolsDiv.append(daRow);

        let daFirst = document.createElement("div");
        daFirst.classList = ["column"];
        let symbolImage = document.createElement("img");
        symbolImage.src = daSymbol.image;
        symbolImage.style.imageRendering = "pixelated";
        daFirst.append(symbolImage);
        let symbolText = document.createElement("p");
        symbolText.innerHTML = daSymbol.name;
        symbolText.classList = ["symbolText"];
        daFirst.append(symbolText);
        daRow.append(daFirst);

        let daRarity = document.createElement("p");
        daRarity.classList = ["column"];
        switch (daSymbol.rarity) {
            case RARITY.COMMON:
                daRarity.innerHTML = "COMMON";
                daRarity.style.color = "#ffffff"
                break;
            case RARITY.UNCOMMON:
                daRarity.innerHTML = "UNCOMMON";
                daRarity.style.color = "#61d3e3"
                break;
            case RARITY.RARE:
                daRarity.innerHTML = "RARE";
                daRarity.style.color = "#fbf236"
                break;
            case RARITY.VERYRARE:
                daRarity.innerHTML = "VERY RARE";
                daRarity.style.color = "#7234bf"
                break;
            case RARITY.SPECIAL:
                daRarity.innerHTML = "SPECIAL";
                daRarity.style.color = "#e14a68"
                break;
        }
        daRow.append(daRarity);

        let daCoins = document.createElement("p");
        daCoins.classList = ["column"];
        daCoins.innerHTML = daSymbol.coin;
        daRow.append(daCoins);

        let daCount = document.createElement("p");
        daCount.classList = ["column"];
        daCount.innerHTML = daSymbol.symbolCount;
        daRow.append(daCount);

        let daApp = document.createElement("p");
        daApp.classList = ["column"];
        daApp.innerHTML = daSymbol.symbolApp;
        daRow.append(daApp);

        let daItemApp = document.createElement("p");
        daItemApp.classList = ["column"];
        daItemApp.innerHTML = daSymbol.itemApp;
        daRow.append(daItemApp);

        let daPerc = document.createElement("p");
        daPerc.classList = ["column"];
        daPerc.innerHTML = daSymbol.achievePerc + "%";
        daRow.append(daPerc);
    }
}

//createDivs();

let repeatCase = 0;

for (let i = 0; i < cols.length; i++)
{
    let daCol = cols[i];
    daCol.id = i;

    switch (i)
    {
        case 0:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                if (repeatCase == this.id)
                {
                    demSymbols.sort((b, a) => {
                        let textA = a.name.toUpperCase();
                        let textB = b.name.toUpperCase();
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
                }
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 1:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.rarity - a.rarity;
                                                }
                                                else return a.rarity - b.rarity;
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 2: default:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.coin - a.coin;
                                                }
                                                else return a.coin - b.coin;
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 3:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.symbolCount - a.symbolCount;
                                                }
                                                else return a.symbolCount - b.symbolCount;
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 4:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.symbolApp - a.symbolApp;
                                                }
                                                else return a.symbolApp - b.symbolApp;
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 5:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.itemApp - a.itemApp;
                                                }
                                                else
                                                {
                                                    return a.itemApp - b.itemApp;
                                                }
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;

        case 6:
            daCol.onclick = function ()
            {
                demSymbols = symbols.slice(0);
                demSymbols.sort((a, b) =>   {
                                                if (repeatCase == this.id)
                                                {
                                                    return b.achievePerc - a.achievePerc;
                                                }
                                                else
                                                {
                                                    return a.achievePerc - b.achievePerc;
                                                }
                                            }
                                        );
                symbolsDiv.innerHTML = "";
                repeatCase = (repeatCase == this.id) ? -1 : this.id;
                createDivs();
            }
        break;
    }
}

darkModeToggle.onclick = function()
{
    isDarkMode = !isDarkMode;

    setCookie("darkMode", (isDarkMode ? "dark" : "light"), 365, false);

    changeDarkMode();
}

isDarkMode = (getCookie("darkMode", false) == "dark" ? true : false);
changeDarkMode();

function changeDarkMode()
{
    if (isDarkMode)
    {
        r.style.setProperty('--light-bg-color', '#122950');
        r.style.setProperty('--light-bg-select', '#36376a');

        darkModeToggle.src = "https://monstyrslayr.github.io/lbaldle/img/moon.png";
    }
    else
    {
        r.style.setProperty('--light-bg-color', '#ff8300');
        r.style.setProperty('--light-bg-select', '#ffa320');

        darkModeToggle.src = "https://monstyrslayr.github.io/lbaldle/img/sun.png";
    }
}

$.ajax
(
    {
        //url: "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=1404850&format=json",
        url: "https://monstyrslayr.github.io/lbaldle/data/steamAchievements.json",
        type: "GET",
    }
).done(function(response) 
    {
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

        createDivs();
    }
).fail(function()
    {
        for (let i = 0; i < symbols.length; i++)
        {
            symbols[i].achieveDesc = "We were unable to get the Steam achievement percentages. Try reloading the page, or if the issue persists, contact MonstyrSlayr.";
        }

        createDivs();
    }
);