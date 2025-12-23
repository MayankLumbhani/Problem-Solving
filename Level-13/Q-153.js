function vowelIncludes(str) {

    let vowStr = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowStr.includes(str[i])) {
            console.log(true);
            return;
        }
        else {
            continue;
        }
    }
    console.log(false);



}

vowelIncludes("hello");
vowelIncludes("sky");
vowelIncludes("JAVASCRIPT");

