function generateOTP(inp) {
    var inp = prompt("Enter 4 or 6 for an OTP:");
    var digits = '0123456789';
    // while (inp.value != 4) {
    //     alert("please enter 4 or 6");
    //     location.reload();
    //     break;
    // }
    let OTP = '';
    console.log(inp);
    if (inp == 4 || inp == 6) {
        // debugger;
        console.log(inp);
        for (let i = 0; i < inp; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        console.log(inp);
        return OTP;
    } else {
        // debugger;
        alert("Please enter 4 or 6 only!");
    }
}

document.write("OTP of 4 digits: ")
document.write(generateOTP());