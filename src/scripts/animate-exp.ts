const ids = ['HackSC', 'Youdle', 'REU', 'IP', 'USC', 'UofM', 'AIGAC', 'SSPG'];
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade");
        }
        // else {
        //     entry.target.classList.remove("animate-fade");
        // }
    });
});
ids.forEach((id) => {
    observer.observe(document.getElementById(id)!);
});