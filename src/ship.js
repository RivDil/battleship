
function ship(length, coordinates){
    const ship = {
        length: length,
        coordinates: coordinates,
        hits: 0,
        hit: function(){
            this.hits++
        },
        isSunk: function(){
            return this.length <= this.hits
        }
    };
    return ship
}

module.exports = ship;