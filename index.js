import init from "./display.js";
//should be controller but for some reason noerror happens

//ok so how the other guy did is that he hardcoded the display objects and then had a whole file where he searched them by id, then updated everything and then exported such a function. 
//he also used index.js solely as entry point + calling appController's init() function (its only function), and appcontroller also handles buttons, form submit event, and unit change (good idea). instead of his hardcoded method, we could use an init() that adds those programatically 

async function run() {
    await init();
}

run();