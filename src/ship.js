

function ship(length){
    const ship = {
        length: length,
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