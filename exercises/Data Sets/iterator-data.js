let test = 'Testing this new iterator';

for (let entry of test) {
    console.log(entry);
}

// same as 
// for (let i = 0; i < test.length; i++) {
//     let entry = test[i];
//     console.log(entry);
// }