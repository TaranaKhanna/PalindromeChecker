window.onload = function(){
    const inputField = document.getElementById("num");

    inputField.value = 0;
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter'){
            isPalindrome();
        }
    });
};

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter'){
        isPalindrome();
    }
})

function isPalindrome(){
    let x = document.getElementById('num').value;

    if(x === ''){
        alert('Please Enter a number.')
        return;
    }

    let num = parseInt(x);
    let original_num = num;
    let reversed_num = 0;

    while(num > 0){
        let remainder = num % 10;
        reversed_num = reversed_num * 10 + remainder;
        num = parseInt(num/10);
    }
    if(reversed_num === original_num){
        alert(`${original_num} is palindrome.`)
    } else {
        alert(`${original_num} is not palindrome.`)
    }
    document.getElementById("num").value = 0;
}