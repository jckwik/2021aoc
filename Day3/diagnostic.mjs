import { readFileSync } from 'fs';
var file = readFileSync('input.txt', 'utf8');
var diagnosticInput = file.split('\r\n');

const findMostCommon = (array, index) => {
    var count = 0;
    array.forEach((value) => {
        count += parseInt(value[index]);
    });
    return count/array.length >= 0.5 ? '1' : '0';
};

var rateTracking = [];
diagnosticInput.forEach((reportValue) => {
    for(var i = 0; i < reportValue.length; i++) {
        if(rateTracking[i] === undefined) {
            rateTracking[i] = 0;
        }
        rateTracking[i] += parseInt(reportValue[i]);
    }
});

var gammaString = '';
var epsilonString = '';
rateTracking.forEach((rate) => {
    gammaString += rate/diagnosticInput.length > 0.5 ? '1' : '0';
    epsilonString += rate/diagnosticInput.length < 0.5 ? '1' : '0';
});


console.log(`The diagnostic gamma code is ${gammaString} : ${parseInt(gammaString, 2)}`);
console.log(`The diagnostic epsilon code is ${epsilonString} : ${parseInt(epsilonString, 2)}`);
console.log(`Multiplying the codes together gives ${parseInt(gammaString, 2) * parseInt(epsilonString, 2)}`);

var oxygenRating = [...diagnosticInput];
for(var i = 0; i < gammaString.length; i++) {
    var match = findMostCommon(oxygenRating, i);
    oxygenRating = oxygenRating.filter((value) => {
        return value[i] === match;
    });
    if (oxygenRating.length === 1) {
        break;
    }
}

var co2Rating = [...diagnosticInput];
for(var i = 0; i < epsilonString.length; i++) {
    var match = parseInt(findMostCommon(co2Rating, i),2) === 1 ? '0' : '1';
    co2Rating = co2Rating.filter((value) => {
        return value[i] === match;
    });
    if (co2Rating.length === 1) {
        break;
    }
}

console.log(`The diagnostic oxygen code is ${oxygenRating[0]} : ${parseInt(oxygenRating[0], 2)}`);

console.log(`The diagnostic co2 code is ${co2Rating[0]} : ${parseInt(co2Rating[0], 2)}`);
console.log(`Multiplying the codes together gives ${parseInt(oxygenRating[0], 2) * parseInt(co2Rating[0], 2)}`);