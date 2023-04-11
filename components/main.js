export const createMain = (() => {
    const content = document.getElementById('content')
    const gameboards = document.createElement('div')
    const playerGame = document.createElement('div');
    const computerGame = document.createElement('div')
    gameboards.appendChild(playerGame);
    gameboards.appendChild(computerGame);
    content.appendChild(gameboards)
})();
