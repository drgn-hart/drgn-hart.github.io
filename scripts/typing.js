function onBodyLoad()
{
    let introDiv = document.getElementById("introduction");
    let employDiv = document.getElementById("employment-details");
    let projectsDiv = document.getElementById("projects");

    let introText = introductionText();
    let employText = "My employment details will be here";
    let projectsText = "My projects details will be here";

    typeEffect(introText, 100, introDiv);
    typeEffect(employText, 100, employDiv);
    typeEffect(projectsText, 100, projectsDiv);
}

function typeEffect(word, speed, element)
{
    for(let i = 0; i < word.length; ++i)
    {
        setTimeout(timerHandler, i*100, element, word.charAt(i));
    }
}

function timerHandler(element, character)
{
    element.innerHTML += character;
}

function introductionText()
{
    let text = "Hey, I am Pavan. I like to code in my free time.";
    return text;
}