// stats
const createOdometer = (el, value) => {
    const odometer = new Odometer({
        el: el,
        value: 0,
    });

    odometer.update(value);
};

let started = false;

function startStats() {
    if (started) return;
    started = true;

    createOdometer(document.querySelector(".resources-odometer"), 50);
    createOdometer(document.querySelector(".trusted-odometer"), 45);
    createOdometer(document.querySelector(".communities-odometer"), 10);
}

window.addEventListener("scroll", () => {
    const stats = document.querySelector(".stats-container");
    const rect = stats.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
        startStats();
    }
});

// spotlight



//resources
const zipInput = document.getElementById("zipInput");
const zipSubmit = document.getElementById("zipSubmit");

zipSubmit.addEventListener("click", () => {
    const zip = zipInput.value.trim(); 

    if (zip.length === 0) return;

    window.open(`directory.html?zip=${zip}`, "_blank");
});


