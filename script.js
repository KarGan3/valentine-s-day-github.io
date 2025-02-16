const quotes = [
    "✨ Not every meeting is an accident. {name1} and {name2} were always meant to find each other, like waves finding the shore. 🌊",
    "🎵 Like a perfect melody, {name1} and {name2}'s hearts beat in perfect harmony, creating a symphony of love. 💝",
    "🌍 In a world of billions, {name1} and {name2} found each other - proof that soulmates exist. ✨",
    "⭐ Some call it destiny, others call it fate. {name1} and {name2} call it their beautiful love story. 💫",
    "🎨 {name1} and {name2}'s love is like a masterpiece painted by the universe itself. 🖼️",
    "⏰ Time stands still when {name1} and {name2} are together, for love knows no boundaries. ∞",
    "☀️ Like the sun and moon, {name1} and {name2} complete each other in perfect balance. 🌙",
    "📖 In the book of life, {name1} and {name2}'s love story is written in golden letters. ✨",
    "💖 Two hearts, one soul - {name1} and {name2}'s love story is nothing short of magical. ✨",
    "🧩 Like puzzle pieces meant to fit, {name1} and {name2} complete each other perfectly. 💫",
    "🌸 In the garden of love, {name1} and {name2}'s bond blooms like an eternal flower. 🌺",
    "⚡ {name1} and {name2} - where chemistry meets destiny, creating pure magic. ✨",
    "🌟 Like stars in the night sky, {name1} and {name2} shine brighter together. 💫",
    "🌌 Some stories are written in the stars - {name1} and {name2}'s love is one such tale. 🌠",
    "💫 When {name1} met {name2}, the universe whispered 'this is the one'. 🌟",
    "🎭 Every great love story has its charm, but {name1} and {name2}'s is simply extraordinary. 💝",
    "🌈 {name1} and {name2}'s love paints rainbows in each other's grey skies. ☔",
    "🔮 In the crystal ball of destiny, {name1} and {name2}'s paths were meant to cross. ⚡",
    "🎪 Life is a magical circus, and {name1} and {name2} are the greatest show of love. 💫",
    "🌅 Like sunrise brings hope, {name1} and {name2} bring light to each other's lives. 🌄"
];

// Initialize empty sets for names
const maleNames = new Set([
    // Add male names as needed
]);

const femaleNames = new Set([
    // Add female names as needed
]);

function getGender(name) {
    name = name.toLowerCase();
    if (maleNames.has(name)) return 'male';
    if (femaleNames.has(name)) return 'female';
    return 'unknown';
}

function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function validateNames() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const createBtn = document.querySelector('.create-btn');

    if (!name1 || !name2) return true; // Allow empty fields

    const gender1 = getGender(name1);
    const gender2 = getGender(name2);

    // If both genders are known and same, move the button
    if (gender1 !== 'unknown' && gender2 !== 'unknown' && gender1 === gender2) {
        moveButton(createBtn);
        return false;
    }

    // Reset button position if names are valid
    createBtn.style.position = 'static';
    return true;
}

// Add input event listeners
document.getElementById('name1').addEventListener('input', validateNames);
document.getElementById('name2').addEventListener('input', validateNames);

function createStory() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (!name1 || !name2) {
        alert('Please enter both names');
        return;
    }

    const gender1 = getGender(name1);
    const gender2 = getGender(name2);

    if (gender1 === gender2 && gender1 !== 'unknown') {
        return; // Don't create story if same gender
    }

    const storyCard = document.getElementById('storyCard');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        .replace('{name1}', name1)
        .replace('{name2}', name2);
    
    const compatibility = Math.floor(Math.random() * (100 - 75) + 75);

    document.querySelector('.names').innerHTML = `${name1} ❤️ ${name2}`;
    document.querySelector('.quote').innerHTML = randomQuote;
    document.getElementById('compatibilityScore').innerHTML = compatibility;
    
    storyCard.style.display = 'block';
}

// Dark mode toggle
document.getElementById('darkMode').addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});

// Share functionality
document.querySelector('.share-btn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Love Story',
            text: document.querySelector('.quote').innerHTML
        }).catch(console.error);
    } else {
        alert('Story copied to clipboard!');
    }
}); 