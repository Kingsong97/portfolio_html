document.addEventListener("DOMContentLoaded", function () {
    const mosaic = document.createElement('div');
    mosaic.className = 'transition-container from-top';
    document.body.appendChild(mosaic);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const horizontal_pieces = 16;
    const vertical_pieces = 12;
    const total_pieces = horizontal_pieces * vertical_pieces;
    const box_width = Math.ceil(width / horizontal_pieces);
    const box_height = Math.ceil(height / vertical_pieces);
    let elements = [];

    for (let i = 0; i < total_pieces; i++) {
        const piece = document.createElement('span');
        piece.className = 'tile';
        const horizontal_position = (i % horizontal_pieces) * box_width;
        const vertical_position = Math.floor(i / horizontal_pieces) * box_height;
        piece.style.width = `${box_width}px`;
        piece.style.height = `${box_height}px`;
        piece.style.left = `${horizontal_position}px`;
        piece.style.top = `${vertical_position}px`;
        mosaic.appendChild(piece);
        elements.push(piece);
    }

    elements = shuffleArray(elements);

    function addLinkEventListeners() {
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const url = this.href;

                elements.forEach((el, index) => {
                    gsap.to(el, {
                        duration: 0.5,
                        opacity: 1,
                        delay: index * 0.02,
                        onComplete: () => {
                            if (index === elements.length - 1) {
                                setTimeout(() => {
                                    window.location.href = url; // 페이지 이동
                                }, 500); // 모자이크가 화면을 채우는 애니메이션의 지속 시간
                            }
                        }
                    });
                });
            });
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    window.addEventListener('popstate', function () {
        location.reload();
    });

    addLinkEventListeners();
});


document.addEventListener("DOMContentLoaded", function () {
    const mosaic = document.querySelector('.transition-container');
    const elements = Array.from(mosaic.querySelectorAll('.tile'));

    function applyPageLoadAnimation() {
        mosaic.style.display = 'block'; // 모자이크를 화면에 표시
        mosaic.classList.add('hide-mosaic'); // 모자이크를 숨기는 클래스 추가
    }

    applyPageLoadAnimation();
});
