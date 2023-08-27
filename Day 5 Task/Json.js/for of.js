let person = {
    Name: "Shobi",
    Age: 21,
    Hobbies: "Reading books,Listening music",
    FavoriteBook: "It Ends With Us",
    PetName: "Zizu"
};

// for of loop
for (let key of Object.keys(person)) {
    console.log(key);
}