
export const createHeader = (() => {
    const content = document.getElementById('content')
    const text = document.createElement('h2');
    text.innerHTML = 'Battleships'
    text.classList.add = 'main-title'
    content.appendChild(text)
})();
