function goToPage2() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'flex';
    } else {
        alert('Please enter your name!');
    }
}

function becomeFriend() {
    alert("Yay! Let's be friends!");
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'flex';
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const randomOffset = Math.floor(Math.random() * 200) - 100; // Random offset between -100 and 100px
    noButton.style.transform = `translateY(${randomOffset}px)`;
}

function submitAnswer() {
    const favorite = document.getElementById('favoriteInput').value;
    if (favorite) {
        // Replacing content with a Thank You message
        const page3Content = document.querySelector('#page3 .content');
        page3Content.innerHTML = `<h1>Thank You!</h1><p>We appreciate your response.</p>`;
    } else {
        alert('Please enter something!');
    }
}

