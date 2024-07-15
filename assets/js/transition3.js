window.onload = function () {
    // span 요소를 추가하는 함수
    function addSpans() {
        const container = document.querySelector(".container-animation");
        for (let i = 0; i < 100; i++) {
            const span = document.createElement("span");
            container.appendChild(span);
        }
        console.log('Spans added:', container.children.length); // 콘솔 로그 추가
    }
    addSpans();

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

            console.log('Link clicked:', url); // 콘솔 로그 추가

            gsap.to(".container-animation span", {
                stagger: { amount: 0.8, from: "random" },
                backgroundColor: "#ffacac",
                duration: 3
            });

            setTimeout(() => {
                window.location.href = url;
            }, 3000);
        });
    });

    const container = document.querySelector(".container-animation");

    gsap.to(".container-animation span", {
        stagger: { amount: 0.8, from: "random" },
        backgroundColor: "transparent",
        duration: 3
    });
}
