window.onload = function () {
    const targets = gsap.utils.toArray(".split");

    targets.forEach(target => {
        let SplitClient = new SplitType(target, { type: "lines, words, chars" });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const url = link.getAttribute("href");

            setTimeout(() => {
                window.location.href = url;
            }, 5000);
        });
    });

    const container = document.querySelector(".container-animation");

    gsap.to(".container-animation span", { stagger: { amount: 0.8, from: "random" }, backgroundColor: "transparent", duration: 3 })
}
