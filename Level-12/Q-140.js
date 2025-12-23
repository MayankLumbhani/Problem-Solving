function automorphic(n) {
    let length = String(n).length;

    square = n * n;
    if (square % 10 ** length == n) {
        console.log(true);
    }

    else {
        console.log(false)
    }
}

automorphic(5);
automorphic(6);
automorphic(7);
automorphic(25);
