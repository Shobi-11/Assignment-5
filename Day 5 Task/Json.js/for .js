
let person1 = [{
    Name: 'Pravin',
    Age: 21,
    Hobbies: 'Reading books,Listening music',
    FavoriteBook: 'It Ends With Us',
    PetName: 'Zizu'
}];
//for loop
for (let i = 0; i < person1.length; i++) {
    let obj = person1[i];

    console.log(obj.Name);
    console.log(obj.Hobbies);
} 