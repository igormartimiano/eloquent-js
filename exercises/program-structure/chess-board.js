let size  = 6,
    board = '';

for (let i = 1; i <= size; i++) {
    for (let e = 1; e <= size; e++) {
        if ((e + i) % 2 === 0) {
            board += ' ';
        } else {
            board += '♚';
        }
    }

    board += "\n";
}

console.log(board);
