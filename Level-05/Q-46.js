// Method - 1

function upperCase(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    console.log(count);
}

upperCase("HeLLo");
upperCase("javascript");
upperCase("JS 101");


// Method - 2

function upperCase2(str) {

    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            count++;
        }
    }
    console.log(count);

}

upperCase2("HeLLo");
upperCase2("javascript");
upperCase2("JS 101");


