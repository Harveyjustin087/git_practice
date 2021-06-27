/* ---------------------- onchange functions ---------------------------------------*/
    /* This function shows the horroscope selection the user makes.  */
function revealHorro(sign,pick){
    let selection = pick.options[pick.selectedIndex].value;
    let final = "";
    switch(selection){
        case 'leo':
            final = "Aw yes a Leo I see now";
        break;
        case 'virgo':
            final = "Aw yes a Virgo I see now";
        break;
        case 'capricorn':
            final = "Aw yes a Capricorn I see now";
        break;
        case 'cancer':
            final = "Aw yes a Cancer I see now";
        break;
        case 'sagittarius':
            final = "Aw yes a Sagittarius I see now";
        break;
        case 'taurus':
            final = "Aw yes a Taurus I see now";
        break;
        case 'pisces':
            final = "Aw yes a Pisces I see now";
        break;
        case 'gemini':
            final = "Aw yes a Gemini I see now";
        break;
        case 'aquarius':
            final = "Aw yes an Aquarius I see now";
        break;
        case 'libra':
            final = "Aw yes a Libra I see now";
        break;
        case 'aries':
            final = "Aw yes an Aries I see now";
        break;
        case 'scorpius':
            final = "Aw yes a Scorpius I see now";
        break;
        default:
            final = "Hmm not sure about that one"
        break;
    }
    let newText = document.createTextNode(final);
    sign.appendChild(newText);
}
function getRandom(num){
    return Math.floor(Math.random() * num)
}

function giveFortune(fortune){
    let possibilities = [" That probably won't work out. ", " Yes, yes that will come to pass. ", " I am unsure the fates are clouding my vision. ", " hmm thats a poor question ask again and make it better! ", 
    " You are a fool to ask that! ", " hmm ask that another time. ", " Zzzzzz wait.. I'm sorry what was that? "]
    let choice = getRandom(possibilities.length);
    let fate = possibilities[choice];
    newText = document.createTextNode(fate);
    fortune.appendChild(newText);
}
