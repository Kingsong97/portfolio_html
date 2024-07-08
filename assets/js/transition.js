document.addEventListener("DOMContentLoaded", function () {
    const mosaic = document.createElement('div');
    mosaic.id = 'mosaic';
    document.body.appendChild(mosaic);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const horizontal_pieces = 16;
    const vertical_pieces = 12;
    const total_pieces = horizontal_pieces * vertical_pieces;
    const box_width = width / horizontal_pieces;
    const box_height = height / vertical_pieces;
    let elements = [];
    let count = 0;

    for (let i = 0; i < total_pieces; i++) {
        const piece = document.createElement('div');
        piece.className = 'piece';
        const horizontal_position = (i % horizontal_pieces) * box_width;
        const vertical_position = Math.floor(i / horizontal_pieces) * box_height;
        piece.style.width = `${box_width}px`;
        piece.style.height = `${box_height}px`;
        piece.style.backgroundPosition = `-${horizontal_position}px -${vertical_position}px`;
        mosaic.appendChild(piece);
        elements.push(piece);
    }

    elements = shuffleArray(elements);

    function toggleDisplay() {
        if (count < elements.length) {
            elements[count].style.opacity = 1;
            count++;
            setTimeout(toggleDisplay, 5); // Adjust the delay as needed
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    setTimeout(toggleDisplay, 100); // Start the effect

    // Optional: Hide the mosaic after the animation
    setTimeout(() => {
        mosaic.style.display = 'none';
    }, total_pieces * 4 + 1000); // Adjust timing based on the number of pieces and delay
});