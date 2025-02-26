function convertToRoman(num) {
    try {
        if (num < 1 || num > 3999) {
            throw new Error("Number out of range (1-3999)");
        }

        const romanNumerals = {
            M: 1000, CM: 900, D: 500, CD: 400,
            C: 100, XC: 90, L: 50, XL: 40,
            X: 10, IX: 9, V: 5, IV: 4, I: 1
        };

        let result = "";
        for (let key in romanNumerals) {
            while (num >= romanNumerals[key]) {
                result += key;
                num -= romanNumerals[key];
            }
        }
        return result;
    } catch (error) {
        return { error: error.message }; 
    }
}

module.exports = convertToRoman;
