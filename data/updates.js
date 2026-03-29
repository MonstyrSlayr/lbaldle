import {getCookie, setCookie} from "../utils.js";

class Update
{
    constructor (updateName, desc)
    {
        this.updateName = updateName;
        this.desc = desc;
    }
}

let updates =
[
    new Update("Game Release", ["The game has been released!"]),
    new Update("Duplicate Symbol Log", ["Added a duplicate symbol log. Some symbols have exactly the same stats, hopefully the log will clarify that. A notification will show up when you submit a duplicate symbol.", "Also added update emails. These emails should disappear when you reload, but if they keep popping up, be sure to message me!"]),
    new Update("Saving Game Progress", ["In preparation for the Daily, your game will save when you reload the page now :) be sure to report any bugs"]),
    new Update("The Daily (2)", ["Symbol Info: Hover over or tap on a symbol to see its info!", "Symbol Preview: The symbol will show up under the input box as you type it. Use this to match the symbol's info to your other guesses.", "And as always, be sure to report any bugs."]),
    new Update("The Daily (1)", ["The Daily is here, along with a myriad of quality of life changes.", "Only 8 guesses now: Since the game has gotten much easier, I've decided to reduce the amount of guesses from 10 to 8. Let me know your feedback.", "Achievement Percentage: A new column to reduce duplicate symbols. Gets the achievements from a local file."]),
    new Update("QOL + Source Code", ["Quality of Life changes: You can hover over the column headers and see what they signify.", "Source Code: At the bottom of the page, you can see the source code of the site!"]),
    new Update("Symbol Groups", ["Symbol Groups: With the option enabled, you can search for specific groups of symbols.", "New Options: There are now options to toggle symbol information and searching symbol groups, if you want more of a challenge."]),
]

export let emailUpdates = [];

for (let i = 0; i < updates.length; i++)
{
    let daUpdate = updates[i];
    let isUpdate = getCookie("update" + daUpdate.updateName.toLowerCase().replace(/\s/g, ''), false);

    if (isUpdate == "")
    {
        emailUpdates.push(daUpdate);
        setCookie("update" + daUpdate.updateName.toLowerCase().replace(/\s/g, ''), "true", 365, false);
    }
}

if (getCookie("darkMode", false) == "")
{
    setCookie("darkMode", "light", 365, false);
}