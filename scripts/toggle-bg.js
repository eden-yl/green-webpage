const btn = document.getElementById('toggle-bg');
let natureMode = false;

// Free nature image from Unsplash
const natureImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

btn.addEventListener('click', () => {
    natureMode = !natureMode;
    if (natureMode) {
        document.body.classList.add('nature-bg');
    } else {
        document.body.classList.remove('nature-bg');
    }
});