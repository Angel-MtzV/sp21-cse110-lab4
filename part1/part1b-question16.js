function forIn (object){
    for(let property in object){
        if((object[property] % 2 == 1) || (property.charAt(0) == 'r')){
            console.log(object[property]);
        }
    }
};

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

forIn(statistics);