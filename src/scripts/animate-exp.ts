const ids = ['HackSC', 'Youdle', 'REU', 'IP', 'USC', 'UofM', 'AIGAC', 'SSPG'];
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade");
            console.log("in view");
        }
        // else {
        //     entry.target.classList.remove("animate-fade");
        //     console.log("out of view");
        // }
    });
});
ids.forEach((id) => {
    observer.observe(document.getElementById(id)!);
});