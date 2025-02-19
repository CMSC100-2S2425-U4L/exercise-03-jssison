/*
    Name: Janelle Cassandra S. Sison
    Section: U4L
    Exercise 03 : JavaScript Basics Part 1
*/

//check if 2 pw match
    /*
        Reqs:
        - Pws match
        - Pw has at least 8 chars
        - Pw has at least 1 num, 1 uppercase char, 1 lowercase char
    */
    //return bool val

//Global Var
const alpha = "abcdefghijklmnopqrstuvwxyz"

//Checks if pw contains a num; immediately stops if a num is found
function checkNum(pw){
    const num = "0123456789"

    for(let a = 0; a < pw.length; a++){
        for(let b = 0; b < num.length; b++){
            if(pw.charAt(a) == num.charAt(b)){
                return true
            }
        }
    }
    return false
}

//Checks if pw contains a lowercase char; immediately stops if a lowercase char is found
function checkLower(pw){
    for(let a = 0; a < pw.length; a++){
        for(let b = 0; b < alpha.length; b++){
            if(pw.charAt(a) == alpha.charAt(b)){
                return true
            }
        }
    }
    return false
}

//Checks if pw contains a uppercase char; immediately stops if a uppercase char is found
function checkUpper(pw){
    const upper = alpha.toUpperCase()

    for(let a = 0; a < pw.length; a++){
        for(let b = 0; b < upper.length; b++){
            if(pw.charAt(a) == upper.charAt(b)){
                return true
            }
        }
    }
    return false
}

function matchingPw(pw1, pw2){
    if(pw1.length >= 8){
        //First condition satisfied; at least 8 char
        if(pw1 == pw2){
            //Second condition satisfied; must be matching

            //No need to check the other pw since the pw are the same
            if(checkNum(pw1) && checkUpper(pw1) && checkLower(pw1)){
                //Third condition satisfied; must have at least 1 num, 1 uppercase, 1 lowercase
                return reverse(pw1)
            }else{
                return pw1
            }
        }else{
            return pw1
        }
    }else{
        return pw1
    }
}

//reverse pw
    //reversed pw string

function reverse(pw){
    let newpw = ''

    for(let a = pw.length - 1; a >= 0; a--){
        newpw = newpw + pw.charAt(a) //concatenates char (starting at the end of the pw) to newpw
    }

    return newpw
}

//store pw in an object
    /*
        Param: Name, 2 pw
        Keys: name, newpassword
        - Must return an object
        - if pw is valid, set newpassword as reversed string of pw
            - else, newpassword = first given pw 
    */

function storePw(name, pw1, pw2){
    //Object
    let obj = {
        name: name,
        newpassword: matchingPw(pw1,pw2)
    }

    return obj
}

/*
    Test Cases: Uncomment for testing
*/

// //PWs match and satisfy all the conditions
// const t1_pw1 = "CorrectPW123"
// const t1_pw2 = "CorrectPW123"

// console.log("Test 1:")
// console.log(storePw("Test1", t1_pw1, t1_pw2))

// //PWs do not match but satisfy all the conditions
// const t2_pw1 = "NotMatchingPw1234567"
// const t2_pw2 = "NotMatchingPW123"

// console.log("Test 2:")
// console.log(storePw("Test2", t2_pw1, t2_pw2))

// //Passwords match but does not satisfy some condition/s
// const t3_pw1 = "pwoo"
// const t3_pw2 = "pwoo"

// console.log("Test 3:")
// console.log(storePw("Test3", t3_pw1, t3_pw2))