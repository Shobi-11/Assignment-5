let person1 = [{
    Name: 'Shobi',
    Age: 21,
    Hobbies: 'Reading books,Listening music',
    FavoriteBook: 'It Ends With Us',
    PetName: 'Zizu'
}];


person1.forEach(function (obj) {
    console.log(obj.Age);
    console.log(obj.PetName);
});
