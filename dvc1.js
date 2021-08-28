console.log("hello");
function countChar(str1, str2){
    let combinedString = str1 + "loves" + str2;
    const histogram = {};
{
    {
        for(let i = 0; i < combinedString.length; i++){
            const ch = combinedString[i];
            if(!histogram[ch]){
                histogram[ch] = 0;
            }
            histogram[ch]++;
        
        }
        console.log(histogram);
        
        
    }
}
        
    
    
}    
function shortenNumber(histogram) {
    const shortenString = {};
    if (histogram.length >= 2) { 
        let int1 = parseInt(String.valueOf(histogram.split[0]));
        let int2 = parseInt(String.valueOf(histogram.split[histogram.length - 1]));
        shortenString = String.valueOf(int1 + int2) + shortenNumber(histogram.substring(1, histogram.length - 1));}
    else {
       console.log(shortenString);
}

console.log(shortenString);

}
   

countChar("soli", "sefako");

function calculate(str1, str2) {
    var shortString = countChars(str1, str2);
    var output = shortString;
    do {
        output = output + "\n";
        shortString = shortenNumber(shortString)
        if (shortString.length() == 2) {
            output = output + "\n"

        }
        output = output + shortString;
    } while (shortString.length() > 2);
    output = output + "%";

    return output;
}


