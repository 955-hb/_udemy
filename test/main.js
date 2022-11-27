'strict';

const min_age = 18;
let age = 17;

if (age === min_age) {
    console.log('du bist gerade alt genug!');
} else if (age < min_age) {
    console.log('du bist NICHT alt genug!');
} else if (age > min_age) {
    console.log('trink nicht zu viel!');
}