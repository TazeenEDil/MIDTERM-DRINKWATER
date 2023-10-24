
const tinycup = document.querySelectorAll(".cup-small");
const litres = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

function Largecup() {
    const Full = document.querySelectorAll(".cup-small.full").length;
    const Ttlcups = tinycup.length;

    if (Full === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } 
    else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(Full / Ttlcups) * 100}%`;
        percentage.innerText = `${(Full / Ttlcups) * 100}%`;
       litres.innerText = `${2 - Full * 0.25}L`;
}

    if (Full === Ttlcups)
{
        remained.style.visibility = "hidden";
} 
    else 
    {
        remained.style.visibility = "visible";
    }
}

tinycup.forEach((cup, idx) => {
    cup.addEventListener("click", () =>
{
        if (cup.classList.contains("full") && (!cup.nextElementSibling || !cup.nextElementSibling.classList.contains("full"))) 
        {
            idx--;
        } else {
            idx++;
        }

        tinycup.forEach((cup, idx2) => {
            if (idx2 <= idx) {
                cup.classList.add("full");
            } else {
                cup.classList.remove("full");
            }
        });

        Largecup();
    });
});


