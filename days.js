const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];


const games=["GTA","Hill Climb","Temple Run"];



    export function dayName(number) {
    return names[number];
    }
    
   export function dayNumber(name) {
    return names.indexOf(name);
    }

    export function gameName(name){
        return games[name];
    }