function checkPalindrome(N, str) {
    let palindrome="";
    for (let i=N-1;i>=0;i--){
        palindrome=palindrome+str[i];
    }
    if(palindrome==str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
  
}