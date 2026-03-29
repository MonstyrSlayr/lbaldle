class Symbol
{
    constructor (name, rarity, coin, symbolCount, symbolApp, itemApp, image, achieveName = "", achieveDesc = "No unlockable achievement for this symbol.", altNames = [])
    {
        this.name = name;
        this.rarity = rarity;
        this.coin = coin;
        this.symbolCount = symbolCount;
        this.symbolApp = symbolApp;
        this.itemApp = itemApp;
        this.image = "https://monstyrslayr.github.io/lbaldle/img/" + image;
        this.achieveName = achieveName;
        this.achieveDesc = achieveDesc;
        this.achievePerc = -1;
        this.altNames = altNames;
    }
}

const RARITY =
{
    COMMON: 0,
    UNCOMMON: 1,
    RARE: 2,
    VERYRARE: 3,
    SPECIAL: 4
}

const symbols =
[
    new Symbol("Amethyst", RARITY.RARE, 1, 0, 4, 1, "amethyst.png", "NEW_ACHIEVEMENT_4_12", "Increase an Amethyst's value 20 or more times before rent payment #12 is due."),
    new Symbol("Anchor", RARITY.COMMON, 1, 0, 2, 0, "anchor.png", "NEW_ACHIEVEMENT_2_1", "Have a Diver and Pirate share an Anchor."),
    new Symbol("Apple", RARITY.RARE, 3, 0, 6, 2, "apple.png", "NEW_ACHIEVEMENT_2_16", "Have 2 Seeds grow into 2 Apples during a spin."),
    new Symbol("Banana", RARITY.COMMON, 1, 1, 6, 3, "banana.png", "NEW_ACHIEVEMENT_2_4", "Have a Banana add a Banana Peel that destroys a Thief during a spin."),
    new Symbol("Banana Peel", RARITY.COMMON, 1, 1, 2, 1, "banana_peel.png", "NEW_ACHIEVEMENT_2_5", "Have a Banana Peel destroy 2 or more Thieves during a spin."),
    new Symbol("Bar of Soap", RARITY.UNCOMMON, 1, 1, 0, 0, "bar_of_soap.png", "NEW_ACHIEVEMENT_6_1", "Have a Bar of Soap add 4 or more Bubbles before being destroyed."),
    new Symbol("Bartender", RARITY.RARE, 3, 4, 2, 5, "bartender.png", "NEW_ACHIEVEMENT_6_9", "Have a Bartender add a Martini."),
    new Symbol("Bear", RARITY.UNCOMMON, 2, 2, 1, 6, "bear.png", "NEW_ACHIEVEMENT_2_2", "Have 3 or more Bears destroy the same Honey."),
    new Symbol("Beastmaster", RARITY.RARE, 2, 27, 2, 3, "beastmaster.png", "NEW_ACHIEVEMENT_2_9", "Have a Beastmaster increase the value of 5 or more symbols during a spin."),
    new Symbol("Bee", RARITY.COMMON, 1, 6, 1, 2, "bee.png", "NEW_ACHIEVEMENT_2_10", "Have a Bee give 6 or more coins."),
    new Symbol("Beehive", RARITY.RARE, 3, 1, 2, 1, "beehive.png", "NEW_ACHIEVEMENT_7_5", "Have a Beehive add a Honey that is destroyed by a Bear during the same spin."),
    new Symbol("Beer", RARITY.COMMON, 1, 0, 4, 3, "beer.png", "NEW_ACHIEVEMENT_2_30", "Have a Dwarf and a Pirate share a Beer."),
    new Symbol("Big Ore", RARITY.UNCOMMON, 2, 8, 3, 4, "big_ore.png", "NEW_ACHIEVEMENT_2_13", "Have a Big Ore add 2 Rare symbols (without the help of X-ray Machine)."),
    new Symbol("Big Urn", RARITY.UNCOMMON, 2, 1, 2, 2, "big_urn.png", "NEW_ACHIEVEMENT_2_14", "Destroy 2 or more Big Urns during a spin."),
    new Symbol("Billionaire", RARITY.UNCOMMON, 0, 2, 3, 5, "billionaire.png", "NEW_ACHIEVEMENT_3_27", "Guillotine 500 Billionaires across all games."),
    new Symbol("Bounty Hunter", RARITY.COMMON, 1, 2, 2, 5, "bounty_hunter.png", "NEW_ACHIEVEMENT_2_8", "Have a Bounty Hunter destroy 2 or more Thieves during a spin."),
    new Symbol("Bronze Arrow", RARITY.UNCOMMON, 0, 1, 1, 1, "bronze_arrow.png", "NEW_ACHIEVEMENT_2_18", "Have 3 or more Bronze Arrows point to 0 symbols during a spin.", ["bronze"]),
    new Symbol("Bubble", RARITY.COMMON, 2, 0, 5, 0, "bubble.png", "NEW_ACHIEVEMENT_2_19", "Have 3 or more Bubbles be destroyed during a spin."),
    new Symbol("Buffing Capsule", RARITY.UNCOMMON, 0, 0, 0, 1, "buffing_powder.png", "NEW_ACHIEVEMENT_5_13", "Have a Buffing Capsule adjacent to 2 or more Amethysts or Pears during a spin."),
    new Symbol("Candy", RARITY.COMMON, 1, 0, 4, 2, "candy.png", "NEW_ACHIEVEMENT_4_18", "Have 8 or more Candy."),
    new Symbol("Card Shark", RARITY.RARE, 3, 5, 2, 3, "card_shark.png", "NEW_ACHIEVEMENT_2_22", "Have a Card Shark make 5 or more symbols Wildcards during a spin."),
    new Symbol("Cat", RARITY.COMMON, 1, 2, 2, 15, "cat.png", "NEW_ACHIEVEMENT_4_26", "Have a Cat give 999,999,999 coins or more."),
    new Symbol("Cheese", RARITY.COMMON, 1, 0, 7, 2, "cheese.png", "NEW_ACHIEVEMENT_2_24", "Have a Cheese adjacent to Milk, Omelette, and Egg during a spin."),
    new Symbol("Chef", RARITY.RARE, 2, 21, 2, 3, "chef.png", "NEW_ACHIEVEMENT_7_6", "Have a Chef increase the value of 5 or more symbols during a spin."),
    new Symbol("Chemical Seven", RARITY.UNCOMMON, 0, 0, 2, 4, "chemical_seven.png", "NEW_ACHIEVEMENT_2_26", "Destroy 3 or more Chemical Sevens during a spin.", ["chemical 7"]),
    new Symbol("Cherry", RARITY.COMMON, 1, 0, 4, 2, "cherry.png", "NEW_ACHIEVEMENT_3_0", "Have 3 or more Cherries adjacent to each other."),
    new Symbol("Chick", RARITY.UNCOMMON, 1, 1, 3, 4, "chick.png", "NEW_ACHIEVEMENT_2_28", "Have a Chick not grow into a Chicken for 12 or more spins."),
    new Symbol("Chicken", RARITY.RARE, 2, 2, 3, 6, "chicken.png", "NEW_ACHIEVEMENT_2_29", "Have a Chicken add an Egg and Golden Egg during a spin."),
    new Symbol("Clubs", RARITY.UNCOMMON, 1, 6, 8, 4, "clubs.png", "NEW_ACHIEVEMENT_2_6", "Have 5 or more Clubs."),
    new Symbol("Coal", RARITY.COMMON, 0, 1, 0, 1, "coal.png", "NEW_ACHIEVEMENT_2_31", "Have 2 Coal transform into a Diamond before rent payment #4 is due (without the help of Time Machine Essence)."),
    new Symbol("Coconut", RARITY.UNCOMMON, 1, 1, 4, 1, "coconut.png", "NEW_ACHIEVEMENT_2_27", "Have a Monkey destroy a Coconut and destroy 2 Coconut Halves during a spin."),
    new Symbol("Coconut Half", RARITY.UNCOMMON, 2, 0, 4, 2, "coconut_half.png", "NEW_ACHIEVEMENT_5_15", "Have Mrs. Fruit and a Monkey share a Coconut Half."),
    new Symbol("Coin", RARITY.COMMON, 1, 0, 3, 2, "coin.png", "NEW_ACHIEVEMENT_3_2", "Have a Coin give 20 or more coins."),
    new Symbol("Comedian", RARITY.RARE, 3, 6, 2, 5, "comedian.png", "NEW_ACHIEVEMENT_3_3", "Have a Comedian be destroyed by General Zaroff."),
    new Symbol("Cow", RARITY.RARE, 3, 1, 2, 3, "cow.png", "NEW_ACHIEVEMENT_3_4", "Have a Cow add a Milk that is destroyed by a Cat during the same spin."),
    new Symbol("Crab", RARITY.COMMON, 1, 1, 3, 2, "crab.png", "NEW_ACHIEVEMENT_4_8", "Have 5 Crabs in a row."),
    new Symbol("Crow", RARITY.COMMON, 2, 0, 2, 3, "crow.png", "NEW_ACHIEVEMENT_3_7", "Remove a Crow 1 spin before it would give -3 coins."),
    new Symbol("Cultist", RARITY.COMMON, 0, 2, 7, 4, "cultist.png", "NEW_ACHIEVEMENT_3_8", "Have 6 or more Cultists."),
    new Symbol("Dame", RARITY.RARE, 2, 10, 2, 3, "dame.png", "NEW_ACHIEVEMENT_3_11", "Have a Dame destroy a Martini while adjacent to a Diamond."),
    new Symbol("Diamond", RARITY.VERYRARE, 5, 1, 6, 1, "diamond.png", "NEW_ACHIEVEMENT_3_12", "Have 5 or more Diamonds."),
    new Symbol("Diamonds", RARITY.UNCOMMON, 1, 6, 8, 4, "diamonds.png", "NEW_ACHIEVEMENT_3_13", "Have 5 or more Diamonds (not the gem)."),
    new Symbol("Diver", RARITY.RARE, 2, 10, 2, 3, "diver.png", "NEW_ACHIEVEMENT_4_1", "Have a Diver remove 20 or more symbols before rent payment #12 is due."),
    new Symbol("Dog", RARITY.COMMON, 1, 25, 2, 3, "dog.png", "NEW_ACHIEVEMENT_3_15", "Pet the Dog for 1 minute or more."),
    new Symbol("Dove", RARITY.RARE, 2, 0, 1, 3, "dove.png", "NEW_ACHIEVEMENT_3_16", "Have a Dove prevent 20 or more destructions before rent payment #12 is due."),
    new Symbol("Dud", RARITY.SPECIAL, 0, 0, 0, 0, "dud.png"),
    new Symbol("Dwarf", RARITY.COMMON, 1, 2, 2, 5, "dwarf.png", "NEW_ACHIEVEMENT_3_17", "Have a Dwarf destroy a symbol that has its value increased afterwards."),
    new Symbol("Egg", RARITY.COMMON, 1, 1, 11, 8, "egg.png", "NEW_ACHIEVEMENT_6_21", "Have an Egg transform into a Chick, grow into a Chicken, and lay an Egg during a spin."),
    new Symbol("Eldritch Creature", RARITY.VERYRARE, 4, 18, 3, 2, "eldritch_beast.png", "NEW_ACHIEVEMENT_3_19", "Add a symbol then immediately remove it to increase the value of an Eldritch Creature.", ["eldritch"]),
    new Symbol("Emerald", RARITY.RARE, 3, 1, 5, 1, "emerald.png", "NEW_ACHIEVEMENT_3_20", "Add 2 or more Emeralds during a spin."),
    new Symbol("Empty", RARITY.SPECIAL, 0, 0, 6, 8, "empty_border.png"),
    new Symbol("Essence Capsule", RARITY.UNCOMMON, -12, 0, 0, 1, "essence_capsule.png", "NEW_ACHIEVEMENT_3_21", "Lose the game during a spin where an Essence Capsule is destroyed."),
    new Symbol("Farmer", RARITY.RARE, 2, 20, 2, 3, "farmer.png", "NEW_ACHIEVEMENT_3_23", "Have a Farmer adjacent to a Seed that grows into a Rare symbol."),
    new Symbol("Five-Sided Die", RARITY.UNCOMMON, 0, 0, 1, 3, "d5.png", "NEW_ACHIEVEMENT_3_10", "Have a Five-Sided Die destroy 2 or more Gamblers during a spin.", ["5 sided die", "d5"]),
    new Symbol("Flower", RARITY.COMMON, 1, 0, 6, 0, "flower.png", "NEW_ACHIEVEMENT_3_24", "Have a Flower give 19,073,486,328,125 or more coins."),
    new Symbol("Frozen Fossil", RARITY.RARE, 0, 10, 0, 1, "frozen_fossil.png", "NEW_ACHIEVEMENT_3_25", "Remove a symbol to make a Frozen Fossil be destroyed faster.", ["fossil"]),
    new Symbol("Gambler", RARITY.COMMON, 1, 2, 2, 5, "gambler.png", "NEW_ACHIEVEMENT_3_26", "Have a Gambler give 200 or more coins when destroyed before rent payment #12 is due."),
    new Symbol("General Zaroff", RARITY.RARE, 1, 26, 2, 3, "general_zaroff.png", "NEW_ACHIEVEMENT_2_15", "Have General Zaroff destroy 1924 humans across all games.", ["zaroff"]),
    new Symbol("Geologist", RARITY.RARE, 2, 5, 2, 3, "archaeologist.png", "NEW_ACHIEVEMENT_5_29", "Have a Geologist destroy 20 or more symbols before rent payment #12 is due.", ["archaeologist"]),
    new Symbol("Golden Arrow", RARITY.VERYRARE, 0, 1, 1, 1, "golden_arrow.png", "NEW_ACHIEVEMENT_3_28", "Have 3 or more Golden Arrows point to 0 symbols during a spin.", ["gold", "golden"]),
    new Symbol("Golden Egg", RARITY.RARE, 4, 0, 5, 3, "golden_egg.png", "NEW_ACHIEVEMENT_3_29", "Have a Golden Egg adjacent to an Egg.", ["gold egg"]),
    new Symbol("Goldfish", RARITY.COMMON, 1, 2, 2, 4, "goldfish.png", "NEW_ACHIEVEMENT_3_30", "Have a Goldfish and Toddler share a Bubble."),
    new Symbol("Golem", RARITY.UNCOMMON, 0, 1, 0, 2, "golem.png", "NEW_ACHIEVEMENT_3_31", "Have a Golem add a Spirit."),
    new Symbol("Goose", RARITY.COMMON, 1, 1, 1, 4, "goose.png", "NEW_ACHIEVEMENT_4_0", "Have a Goose lay a Golden Egg before rent payment #1 is due."),
    new Symbol("Hearts", RARITY.UNCOMMON, 1, 6, 8, 4, "hearts.png", "NEW_ACHIEVEMENT_4_2", "Have 5 or more Hearts."),
    new Symbol("Hex of Destruction", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_destruction.png", "NEW_ACHIEVEMENT_4_14", "Have a Hex of Destruction trigger 3 spins in a row.", ["destruction"]),
    new Symbol("Hex of Draining", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_draining.png", "NEW_ACHIEVEMENT_2_23", "Have a Hex of Draining increase the value of a symbol.", ["draining"]),
    new Symbol("Hex of Emptiness", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_emptiness.png", "NEW_ACHIEVEMENT_4_5", "Have a Hex of Emptiness trigger 3 spins in a row.", ["emptiness"]),
    new Symbol("Hex of Hoarding", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_hoarding.png", "NEW_ACHIEVEMENT_5_8", "Have a Hex of Hoarding trigger 3 spins in a row.", ["hoarding"]),
    new Symbol("Hex of Midas", RARITY.UNCOMMON, 3, 1, 4, 3, "hex_of_midas.png", "NEW_ACHIEVEMENT_4_7", "Have a Hex of Midas trigger 3 spins in a row.", ["midas"]),
    new Symbol("Hex of Tedium", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_tedium.png", "NEW_ACHIEVEMENT_3_5", "Add a Hex of Tedium from the choice after destroying a Tedium Capsule.", ["tedium"]),
    new Symbol("Hex of Thievery", RARITY.UNCOMMON, 3, 0, 4, 2, "hex_of_thievery.png", "NEW_ACHIEVEMENT_4_9", "Have a Hex of Thievery trigger 3 spins in a row.", ["thievery"]),
    new Symbol("Highlander", RARITY.VERYRARE, 6, 1, 1, 0, "highlander.png", "NEW_ACHIEVEMENT_7_13", "Add 10 tooltips from the same Highlander."),
    new Symbol("Honey", RARITY.RARE, 3, 0, 6, 1, "honey.png", "NEW_ACHIEVEMENT_4_11", "Have a Honey give 20 or more coins."),
    new Symbol("Hooligan", RARITY.UNCOMMON, 2, 6, 2, 3, "hooligan.png", "NEW_ACHIEVEMENT_2_0", "Have a Hooligan destroy 3 or more symbols during a spin."), //HOOLIGAN SWEEP!!!
    new Symbol("Hustling Capsule", RARITY.UNCOMMON, -7, 0, 0, 1, "hustler.png", "NEW_ACHIEVEMENT_4_13", "Lose the game during a spin where a Hustling Capsule is destroyed."),
    new Symbol("Item Capsule", RARITY.UNCOMMON, 0, 0, 0, 1, "item_capsule.png", "NEW_ACHIEVEMENT_4_3", "Have an Item Capsule add a Pool Ball."),
    new Symbol("Jellyfish", RARITY.UNCOMMON, 2, 0, 2, 2, "jellyfish.png", "NEW_ACHIEVEMENT_4_15", "Remove a Jellyfish with a Removal Token."),
    new Symbol("Joker", RARITY.RARE, 3, 4, 3, 3, "joker.png", "NEW_ACHIEVEMENT_3_6", "Have a Joker increase the value of 5 or more symbols during a spin."),
    new Symbol("Key", RARITY.COMMON, 1, 4, 6, 1, "key.png", "NEW_ACHIEVEMENT_4_17", "Have a Key destroy 2 or more symbols during a spin."),
    new Symbol("King Midas", RARITY.RARE, 1, 2, 2, 3, "king_midas.png", "NEW_ACHIEVEMENT_3_14", "Have King Midas adjacent to a Golden Egg."),
    new Symbol("Light Bulb", RARITY.COMMON, 1, 8, 0, 0, "light_bulb.png", "NEW_ACHIEVEMENT_7_2", "Have a Light Bulb increase the value of 5 or more symbols during a spin."),
    new Symbol("Lockbox", RARITY.COMMON, 1, 0, 3, 3, "lockbox.png", "NEW_ACHIEVEMENT_4_21", "Destroy 5 Lockboxes before rent payment #12 is due."),
    new Symbol("Lucky Capsule", RARITY.UNCOMMON, 0, 0, 0, 1, "rarity_capsule.png", "NEW_ACHIEVEMENT_5_20", "Add a Common symbol from the choice after destroying a Lucky Capsule."),
    new Symbol("Magic Key", RARITY.RARE, 2, 4, 0, 0, "magic_key.png", "NEW_ACHIEVEMENT_4_23", "Have a Magic Key increase the value of a symbol that is destroyed by a Key."),
    new Symbol("Magpie", RARITY.COMMON, -1, 0, 1, 4, "magpie.png", "NEW_ACHIEVEMENT_4_4", "Be 1 coin short of affording rent during a spin where a Magpie gives less than 0 coins."),
    new Symbol("Martini", RARITY.RARE, 3, 0, 4, 2, "martini.png", "NEW_ACHIEVEMENT_4_25", "Have a Martini be destroyed while adjacent to a Dwarf."),
    new Symbol("Matryoshka Doll", RARITY.UNCOMMON, 0, 1, 0, 1, "matryoshka_doll_1.png", "NEW_ACHIEVEMENT_4_24", "Destroy a Matryoshka Doll before it destroys itself.", ["matryoshka doll 1"]),
    new Symbol("Matryoshka Doll", RARITY.SPECIAL, 1, 1, 1, 1, "matryoshka_doll_2.png", undefined, undefined, ["matryoshka doll 2"]),
    new Symbol("Matryoshka Doll", RARITY.SPECIAL, 2, 1, 1, 1, "matryoshka_doll_3.png", undefined, undefined, ["matryoshka doll 3"]),
    new Symbol("Matryoshka Doll", RARITY.SPECIAL, 3, 1, 1, 1, "matryoshka_doll_4.png", undefined, undefined, ["matryoshka doll 4"]),
    new Symbol("Matryoshka Doll", RARITY.SPECIAL, 4, 0, 1, 0, "matryoshka_doll_5.png", undefined, undefined, ["matryoshka doll 5"]),
    new Symbol("Mega Chest", RARITY.VERYRARE, 3, 0, 3, 3, "mega_chest.png", "NEW_ACHIEVEMENT_4_27", "Destroy 2 Mega Chests before rent payment #12 is due."),
    new Symbol("Midas Bomb", RARITY.VERYRARE, 0, 0, 0, 0, "midas_bomb.png", "NEW_ACHIEVEMENT_4_28", "Have a Midas Bomb destroy more than 18 symbols during a spin."),
    new Symbol("Milk", RARITY.COMMON, 1, 0, 6, 2, "milk.png", "NEW_ACHIEVEMENT_4_29", "Have 2 or more Cats share a Milk."),
    new Symbol("Mine", RARITY.RARE, 4, 1, 0, 0, "mine.png", "NEW_ACHIEVEMENT_4_30", "Have 2 or more Mining Picks before rent payment #12 is due."),
    new Symbol("Miner", RARITY.COMMON, 1, 4, 2, 3, "miner.png", "NEW_ACHIEVEMENT_4_31", "Have a Beer be destroyed while adjacent to a Miner."),
    new Symbol("Monkey", RARITY.COMMON, 1, 3, 2, 3, "monkey.png", "NEW_ACHIEVEMENT_5_0", "Have a Monkey destroy a symbol that has its value increased afterwards."),
    new Symbol("Moon", RARITY.RARE, 3, 4, 0, 1, "moon.png", "NEW_ACHIEVEMENT_5_1", "Destroy a Moon."),
    new Symbol("Mouse", RARITY.COMMON, 1, 2, 1, 3, "mouse.png", "NEW_ACHIEVEMENT_6_10", "Have a Mouse destroy a Cheese while adjacent to a Ninja."),
    new Symbol("Mrs. Fruit", RARITY.RARE, 2, 6, 2, 3, "mrs_fruit.png", "NEW_ACHIEVEMENT_5_3", "Have Mrs. Fruit destroy 20 or more symbols before rent payment #12 is due.", ["ms fruit"]),
    new Symbol("Ninja", RARITY.UNCOMMON, 2, 1, 3, 6, "ninja.png", "NEW_ACHIEVEMENT_5_4", "Have a Ninja in your inventory but not appear for 3 spins in a row."),
    new Symbol("Omelette", RARITY.RARE, 3, 5, 2, 3, "omelette.png", "NEW_ACHIEVEMENT_7_7", "Have an Omelette give 20 or more coins."),
    new Symbol("Orange", RARITY.UNCOMMON, 2, 0, 5, 2, "orange.png", "NEW_ACHIEVEMENT_5_6", ),
    new Symbol("Ore", RARITY.COMMON, 1, 8, 5, 4, "ore.png", "NEW_ACHIEVEMENT_5_7", "Have an Ore add a Diamond (without the help of X-ray Machine Essence)."),
    new Symbol("Owl", RARITY.COMMON, 1, 0, 3, 4, "owl.png", "NEW_ACHIEVEMENT_4_6", "Have an Owl give 12 or more coins."),
    new Symbol("Oyster", RARITY.COMMON, 1, 2, 2, 3, "oyster.png", "NEW_ACHIEVEMENT_5_9", "Have an Oyster add 2 Pearls during a spin."),
    new Symbol("Peach", RARITY.UNCOMMON, 2, 1, 4, 2, "peach.png", "NEW_ACHIEVEMENT_5_10", "Have Mrs. Fruit destroy a Peach that adds a Seed that grows into a Peach."),
    new Symbol("Pear", RARITY.RARE, 1, 0, 3, 2, "pear.png", "NEW_ACHIEVEMENT_5_11", "Increase a Pear's value 20 or more times before rent payment #12 is due."),
    new Symbol("Pearl", RARITY.COMMON, 1, 0, 8, 1, "pearl.png", "NEW_ACHIEVEMENT_5_12", "Have a Diver and a Geologist share a Pearl."),
    new Symbol("Pirate", RARITY.VERYRARE, 2, 8, 2, 3, "pirate.png", "NEW_ACHIEVEMENT_5_14", "Have a Pirate destroy 20 or more symbols before rent payment #12 is due."),
    new Symbol("Piñata", RARITY.UNCOMMON, 1, 1, 2, 0, "pinata.png", "NEW_ACHIEVEMENT_5_5", "Destroy a Piñata before rent payment #2 is due."),
    new Symbol("Present", RARITY.COMMON, 0, 0, 2, 3, "present.png", "NEW_ACHIEVEMENT_3_1", "Have a Present be destroyed 1 spin before the holidays."),
    new Symbol("Pufferfish", RARITY.UNCOMMON, 2, 0, 2, 2, "pufferfish.png", "NEW_ACHIEVEMENT_5_16", "Have a Pufferfish adjacent to a Bubble that is destroyed during a spin."),
    new Symbol("Rabbit", RARITY.UNCOMMON, 1, 0, 2, 9, "rabbit.png", "NEW_ACHIEVEMENT_6_18", "Have Rabbits do 1,000 binkies across all games."),
    new Symbol("Rabbit Fluff", RARITY.UNCOMMON, 2, 0, 0, 6, "rabbit_fluff.png", "NEW_ACHIEVEMENT_7_20", "Shed 3 pounds (1.37kg) of Rabbit Fluff across all games."),
    new Symbol("Rain", RARITY.UNCOMMON, 2, 2, 0, 1, "rain.png", "NEW_ACHIEVEMENT_5_19", "Have a Rain adjacent to a Seed that grows into a Flower."),
    new Symbol("Removal Capsule", RARITY.UNCOMMON, 0, 0, 0, 1, "removal_capsule.png", "NEW_ACHIEVEMENT_5_21", "Have a Removal Capsule not be destroyed 3 or more spins after adding it."),
    new Symbol("Reroll Capsule", RARITY.UNCOMMON, 0, 0, 0, 1, "reroll_capsule.png", "NEW_ACHIEVEMENT_5_22", "Have a Reroll Capsule not be destroyed 3 or more spins after adding it."),
    new Symbol("Robin Hood", RARITY.RARE, -4, 10, 2, 4, "robin_hood.png", "NEW_ACHIEVEMENT_5_26", "Have Robin Hood destroy an Apple while it's directly above a Toddler."),
    new Symbol("Ruby", RARITY.RARE, 3, 1, 5, 1, "ruby.png", "NEW_ACHIEVEMENT_5_24", "Add 2 or more Rubies during a spin."),
    new Symbol("Safe", RARITY.UNCOMMON, 1, 0, 3, 3, "safe.png", "NEW_ACHIEVEMENT_5_25", "Destroy 4 Safes before rent payment #12 is due."),
    new Symbol("Sand Dollar", RARITY.UNCOMMON, 2, 0, 2, 2, "sand_dollar.png", "NEW_ACHIEVEMENT_5_23", "Have a Sand Dollar give 40 or more coins when removed with a Removal Token."),
    new Symbol("Sapphire", RARITY.UNCOMMON, 2, 0, 5, 1, "sapphire.png", "NEW_ACHIEVEMENT_5_27", "Have a Big Ore add 2 Sapphires during a spin."),
    new Symbol("Seed", RARITY.COMMON, 1, 11, 5, 6, "seed.png", "NEW_ACHIEVEMENT_5_28", "Have a Seed grow into a Watermelon (without the help of Fertilizer Essence)."),
    new Symbol("Shiny Pebble", RARITY.COMMON, 1, 0, 5, 2, "shiny_pebble.png", "NEW_ACHIEVEMENT_2_3", "Have a Big Ore add 2 Shiny Pebbles during a spin."),
    new Symbol("Silver Arrow", RARITY.RARE, 0, 1, 1, 1, "silver_arrow.png", "NEW_ACHIEVEMENT_5_31", "Have 3 or more Silver Arrows point to 0 symbols during a spin.", ["silver"]),
    new Symbol("Sloth", RARITY.UNCOMMON, 0, 0, 1, 3, "sloth.png", "NEW_ACHIEVEMENT_5_30", "Have a Sloth adjacent to a Snail and Turtle."),
    new Symbol("Snail", RARITY.COMMON, 0, 0, 2, 3, "snail.png", "NEW_ACHIEVEMENT_6_0", "Have a Snail give 20 coins or more."),
    new Symbol("Spades", RARITY.UNCOMMON, 1, 6, 8, 4, "spades.png", "NEW_ACHIEVEMENT_2_12", "Have 5 or more Spades."),
    new Symbol("Spirit", RARITY.RARE, 6, 0, 5, 3, "spirit.png", "NEW_ACHIEVEMENT_6_2", "Have 10 or more Spirits."),
    new Symbol("Strawberry", RARITY.RARE, 3, 1, 4, 2, "strawberry.png", "NEW_ACHIEVEMENT_6_3", "Have 2 Seeds grow into 2 Strawberries during a spin."),
    new Symbol("Sun", RARITY.RARE, 3, 2, 0, 1, "sun.png", "NEW_ACHIEVEMENT_6_4", "Have 3 or more Suns adjacent to the same Flower."),
    new Symbol("Target", RARITY.UNCOMMON, 2, 0, 5, 2, "target.png", "NEW_ACHIEVEMENT_6_5", "Have a Target be destroyed by a symbol that isn't adjacent to it."),
    new Symbol("Tedium Capsule", RARITY.UNCOMMON, 0, 0, 0, 3, "tedium_capsule.png", "NEW_ACHIEVEMENT_6_6", "Have a Tedium Capsule and Lucky Capsule be destroyed during a spin."),
    new Symbol("Thief", RARITY.UNCOMMON, -1, 0, 6, 6, "thief.png", "NEW_ACHIEVEMENT_6_7", "Have a Thief give 500 or more coins when destroyed before rent payment #12 is due."),
    new Symbol("Three-Sided Die", RARITY.COMMON, 0, 0, 1, 3, "d3.png", "NEW_ACHIEVEMENT_3_9", "Have a Three-Sided Die destroy 2 or more Gamblers during a spin.", ["3 sided die, d3"]),
    new Symbol("Time Capsule", RARITY.UNCOMMON, 0, 1, 1, 1, "time_capsule.png", "NEW_ACHIEVEMENT_6_8", "Have a Time Capsule add a different capsule."),
    new Symbol("Toddler", RARITY.COMMON, 1, 8, 3, 4, "toddler.png", "NEW_ACHIEVEMENT_2_7", "Have a Toddler destroy 6 or more symbols during a spin."),
    new Symbol("Tomb", RARITY.RARE, 3, 2, 2, 3, "tomb.png", "NEW_ACHIEVEMENT_5_2", "Have a Tomb add 5 or more Spirits during a spin (without the help of Grave Robber Essence)."),
    new Symbol("Treasure Chest", RARITY.RARE, 2, 0, 3, 4, "treasure_chest.png", "NEW_ACHIEVEMENT_5_17", "Destroy 3 Treasure Chests before rent payment #12 is due."),
    new Symbol("Turtle", RARITY.COMMON, 0, 0, 2, 4, "turtle.png", "NEW_ACHIEVEMENT_6_12", "Have a Turtle appear in the leftmost column during a spin, then appear in the rightmost column during the next spin."),
    new Symbol("Urn", RARITY.COMMON, 1, 1, 2, 2, "urn.png", "NEW_ACHIEVEMENT_6_13", "Destroy 2 or more Urns during a spin."),
    new Symbol("Void Creature", RARITY.UNCOMMON, 0, 2, 1, 6, "void_creature.png", "NEW_ACHIEVEMENT_6_14", "Have a Beastmaster adjacent to a Void Creature that adds a Spirit."),
    new Symbol("Void Fruit", RARITY.UNCOMMON, 0, 2, 3, 6, "void_fruit.png", "NEW_ACHIEVEMENT_6_15", "Have a Seed grow into a Void Fruit that isn't destroyed during the same spin."),
    new Symbol("Void Stone", RARITY.UNCOMMON, 0, 2, 4, 6, "void_stone.png", "NEW_ACHIEVEMENT_6_16", "Have a Void Stone give 50 coins or more."),
    new Symbol("Watermelon", RARITY.VERYRARE, 4, 1, 4, 2, "watermelon.png", "NEW_ACHIEVEMENT_6_17", "Have 5 or more Watermelons."),
    new Symbol("Wealthy Capsule", RARITY.UNCOMMON, 0, 0, 0, 3, "lucky_capsule.png", "NEW_ACHIEVEMENT_4_22", "Have a Wealthy Capsule not be destroyed 3 or more spins after adding it."),
    new Symbol("Wildcard", RARITY.VERYRARE, 0, 0, 1, 1, "wildcard.png", "NEW_ACHIEVEMENT_7_19", "Have 3 Wildcards each give 1,000,000 coins or more."),
    new Symbol("Wine", RARITY.UNCOMMON, 2, 0, 4, 3, "wine.png", "NEW_ACHIEVEMENT_6_19", "Have 50 gallons (189.3 litres) of Beer and Wine be consumed."),
    new Symbol("Witch", RARITY.RARE, 2, 13, 5, 4, "witch.png", "NEW_ACHIEVEMENT_6_20", "Have an Eldritch Creature destroy a Witch."),
    new Symbol("Wolf", RARITY.UNCOMMON, 2, 0, 2, 4, "wolf.png", "NEW_ACHIEVEMENT_3_18", "Have 3 or more Wolves adjacent to the same Moon."),
]

class Dictionary
{
    constructor(names = [], symbols = [])
    {
        this.names = names;
        this.symbols = symbols;
    }
}

const dictionaries =
[
    new Dictionary
    (
        ["Hex", "Hexes"],
        [
            findSymbol("Hex of Destruction"),
            findSymbol("Hex of Draining"),
            findSymbol("Hex of Emptiness"),
            findSymbol("Hex of Hoarding"),
            findSymbol("Hex of Midas"),
            findSymbol("Hex of Tedium"),
            findSymbol("Hex of Thievery"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Animal", "Animals"],
        [
            findSymbol("magpie"),
            findSymbol("void creature"),
            findSymbol("turtle"),
            findSymbol("snail"),
            findSymbol("sloth"),
            findSymbol("oyster"),
            findSymbol("owl"),
            findSymbol("mouse"),
            findSymbol("monkey"),
            findSymbol("rabbit"),
            findSymbol("goose"),
            findSymbol("goldfish"),
            findSymbol("dog"),
            findSymbol("crab"),
            findSymbol("chick"),
            findSymbol("cat"),
            findSymbol("bee"),
            findSymbol("sand dollar"),
            findSymbol("wolf"),
            findSymbol("pufferfish"),
            findSymbol("jellyfish"),
            findSymbol("dove"),
            findSymbol("crow"),
            findSymbol("chicken"),
            findSymbol("bear"),
            findSymbol("cow"),
            findSymbol("eldritch creature")
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Arrow", "Arrows"],
        [
            findSymbol("Bronze Arrow"),
            findSymbol("Silver Arrow"),
            findSymbol("Golden Arrow"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Bird", "Birds"],
        [
            findSymbol("magpie"),
            findSymbol("chick"),
            findSymbol("goose"),
            findSymbol("owl"),
            findSymbol("chicken"),
            findSymbol("crow"),
            findSymbol("dove"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Capsule", "Capsules"],
        [
            findSymbol("hustling capsule"),
            findSymbol("buffing capsule"),
            findSymbol("essence capsule"),
            findSymbol("item capsule"),
            findSymbol("wealthy capsule"),
            findSymbol("lucky capsule"),
            findSymbol("removal capsule"),
            findSymbol("reroll capsule"),
            findSymbol("tedium capsule"),
            findSymbol("time capsule"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Suit", "Suits"],
        [
            findSymbol("Clubs"),
            findSymbol("Hearts"),
            findSymbol("Spades"),
            findSymbol("Diamonds"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["Human", "Humans", "Face", "Faces", "Person", "People"],
        [
            findSymbol("robin hood"),
            findSymbol("thief"),
            findSymbol("billionaire"),
            findSymbol("cultist"),
            findSymbol("toddler"),
            findSymbol("bounty hunter"),
            findSymbol("miner"),
            findSymbol("dwarf"),
            findSymbol("king midas"),
            findSymbol("gambler"),
            findSymbol("general zaroff"),
            findSymbol("witch"),
            findSymbol("pirate"),
            findSymbol("ninja"),
            findSymbol("mrs fruit"),
            findSymbol("hooligan"),
            findSymbol("farmer"),
            findSymbol("diver"),
            findSymbol("dame"),
            findSymbol("chef"),
            findSymbol("card shark"),
            findSymbol("beastmaster"),
            findSymbol("geologist"),
            findSymbol("joker"),
            findSymbol("comedian"),
            findSymbol("bartender")
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["organism", "organisms", "living"],
        [
            findSymbol("robin hood"),
            findSymbol("thief"),
            findSymbol("billionaire"),
            findSymbol("cultist"),
            findSymbol("toddler"),
            findSymbol("bounty hunter"),
            findSymbol("miner"),
            findSymbol("dwarf"),
            findSymbol("king midas"),
            findSymbol("gambler"),
            findSymbol("general zaroff"),
            findSymbol("witch"),
            findSymbol("pirate"),
            findSymbol("ninja"),
            findSymbol("mrs fruit"),
            findSymbol("hooligan"),
            findSymbol("farmer"),
            findSymbol("diver"),
            findSymbol("dame"),
            findSymbol("chef"),
            findSymbol("card shark"),
            findSymbol("beastmaster"),
            findSymbol("geologist"),
            findSymbol("joker"),
            findSymbol("comedian"),
            findSymbol("bartender"),
            findSymbol("magpie"),
            findSymbol("void creature"),
            findSymbol("turtle"),
            findSymbol("snail"),
            findSymbol("sloth"),
            findSymbol("oyster"),
            findSymbol("owl"),
            findSymbol("mouse"),
            findSymbol("monkey"),
            findSymbol("rabbit"),
            findSymbol("goose"),
            findSymbol("goldfish"),
            findSymbol("dog"),
            findSymbol("crab"),
            findSymbol("chick"),
            findSymbol("cat"),
            findSymbol("bee"),
            findSymbol("sand dollar"),
            findSymbol("wolf"),
            findSymbol("pufferfish"),
            findSymbol("jellyfish"),
            findSymbol("dove"),
            findSymbol("crow"),
            findSymbol("chicken"),
            findSymbol("bear"),
            findSymbol("cow"),
            findSymbol("eldritch creature")
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["void", "voids"],
        [
            findSymbol("void creature"),
            findSymbol("void fruit"),
            findSymbol("void stone"),
            findSymbol("empty"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["fruit", "fruits"],
        [
            findSymbol("void fruit"),
            findSymbol("banana"),
            findSymbol("cherry"),
            findSymbol("coconut"),
            findSymbol("pear"),
            findSymbol("coconut half"),
            findSymbol("orange"),
            findSymbol("peach"),
            findSymbol("apple"),
            findSymbol("strawberry"),
            findSymbol("watermelon"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["gem", "gems", "stones", "rocks"],
        [
            findSymbol("void stone"),
            findSymbol("amethyst"),
            findSymbol("pearl"),
            findSymbol("shiny pebble"),
            findSymbol("sapphire"),
            findSymbol("emerald"),
            findSymbol("ruby"),
            findSymbol("diamond")
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["hooligans", "hooligan sweep"],
        [
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
            findSymbol("hooligan"),
        ].sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["common", "commons"],
        returnRarity(RARITY.COMMON).sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["uncommon", "uncommons"],
        returnRarity(RARITY.UNCOMMON).sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["rare", "rares"],
        returnRarity(RARITY.RARE).sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["very rare", "very rares"],
        returnRarity(RARITY.VERYRARE).sort((a, b) => a - b)
    ),
    new Dictionary
    (
        ["special", "specials"],
        returnRarity(RARITY.SPECIAL).sort((a, b) => a - b)
    ),
]

//for easily recognizing words the player inputs into the input box
function simplifyString(str)
{
    return str.toLowerCase().replace(".", "").replace("_", " ").replace("-", " ").replace(/\s/g, '').replace("ñ", "n");
}

//since some symbols can have multiple names, we use this to find them
function findSymbol(str, returnNumber = true)
{
    let daStr = simplifyString(str);

    for (let i = 0; i < symbols.length; i++)
    {
        if (daStr == simplifyString(symbols[i].name))
        {
            if (returnNumber) return i; else return symbols[i];
        }

        for (let j = 0; j < symbols[i].altNames.length; j++)
        {
            if (daStr == simplifyString(symbols[i].altNames[j]))
            {
                if (returnNumber) return i; else return symbols[i];
            }
        }
    }
    
    return null;
}

//same for dictionaries
function findDictionary(str, returnNumber = true)
{
    let daStr = simplifyString(str);

    for (let i = 0; i < dictionaries.length; i++)
    {
        for (let j = 0; j < dictionaries[i].names.length; j++)
        {
            if (daStr == simplifyString(dictionaries[i].names[j]))
            {
                if (returnNumber) return i; else return dictionaries[i];
            }
        }
    }
    
    return null;
}

//just for dictionaries
function returnRarity(rarity)
{
    let newArr = []
    for (let i = 0; i < symbols.length; i++)
    {
        if (symbols[i].rarity == rarity)
        {
            newArr.push(i);
        }
    }
    return newArr;
}
