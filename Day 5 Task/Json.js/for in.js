let person = {
    Name: "Shobi",
    Age: 21,
    Hobbies: "Reading books,Listening music",
    FavoriteBook: "It Ends With Us",
    PetName: "Zizu"
};

//for in loop
for (let entries in person) {
    console.log(Object.entries(person));
}