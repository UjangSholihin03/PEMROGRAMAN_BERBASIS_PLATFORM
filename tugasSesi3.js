
const restaurant = {
    name: "Restoran sunda",
    city: "sukabumi",
    favoriteDrink: "ice mangga",
    favoriteFood: "ikan gurame bakar",
    isVegan: true
  };
  
  if (
    typeof restaurant.name === "string" && restaurant.name.length > 0 &&
    typeof restaurant.city === "string" && restaurant.city.length > 0 &&
    typeof restaurant.favoriteDrink === "string" && restaurant.favoriteDrink.length > 0 &&
    typeof restaurant.favoriteFood === "string" && restaurant.favoriteFood.length > 0 &&
    typeof restaurant.isVegan === "boolean"
  ) {
    console.log("Objek restaurant memenuhi ketentuan.");
  } else {
    console.log("Objek restaurant tidak memenuhi ketentuan.");
  }
  
  const restaurants = [
    {
      name: "usho food",
      city: "sukabumi",
      favoriteDrink: "ice manggo",
      favoriteFood: "iga bakar kecap",
      isVegan: false
    },
    {
      name: "sholihin food",
      city: "sukabumi",
      favoriteDrink: "teh tarik",
      favoriteFood: "seblak",
      isVegan: true
    },
    {
      name: "kabumi",
      city: "sukabumi",
      favoriteDrink: "mie tektek",
      favoriteFood: "capuchino",
      isVegan: false
    }
  ];
  
 
  const allRestaurantsValid = restaurants.every(restaurant => (
    typeof restaurant.name === "string" && restaurant.name.length > 0 &&
    typeof restaurant.city === "string" && restaurant.city.length > 0 &&
    typeof restaurant.favoriteDrink === "string" && restaurant.favoriteDrink.length > 0 &&
    typeof restaurant.favoriteFood === "string" && restaurant.favoriteFood.length > 0 &&
    typeof restaurant.isVegan === "boolean"
  ));
  
  if (allRestaurantsValid) {
    console.log("Semua objek dalam array restaurants memenuhi ketentuan.");
  } else {
    console.log("Tidak semua objek dalam array restaurants memenuhi ketentuan.");
  }