document.querySelector('span').addEventListener('click', () => {
    if (document.querySelector('span').innerHTML === "LET'S BUILD") {
        document.querySelector('span').innerHTML = "LET'S DESTROY";
        document.querySelector('div:nth-of-type(1)').classList.add('home');
        document.querySelector('div:nth-of-type(2)').classList.add('roof');
        document.querySelector('div:nth-of-type(3)').classList.add('door');
        document.querySelector('div:nth-of-type(4)').classList.add('windowleft');
        document.querySelector('div:nth-of-type(5)').classList.add('windowright');
        document.querySelector('div:nth-of-type(6)').classList.add('chimney');
    } else {
        document.querySelector('span').innerHTML = "LET'S BUILD";
        document.querySelector('div:nth-of-type(1)').classList.remove('home');
        document.querySelector('div:nth-of-type(2)').classList.remove('roof');
        document.querySelector('div:nth-of-type(3)').classList.remove('door');
        document.querySelector('div:nth-of-type(4)').classList.remove('windowleft');
        document.querySelector('div:nth-of-type(5)').classList.remove('windowright');
        document.querySelector('div:nth-of-type(6)').classList.remove('chimney');
    }
});