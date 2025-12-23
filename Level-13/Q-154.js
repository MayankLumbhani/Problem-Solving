function onlyDig(str) {

    let vowStr = "0123456789";

    if(str == ""){
        console.log(false);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (vowStr.includes(str[i])) {
            continue;
        }
        else {
            console.log(false);
            return;
        }
    }
    console.log(true);



}

onlyDig("12345");
onlyDig("123a5");
onlyDig("");

