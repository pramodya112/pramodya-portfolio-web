// Project Pages Shared JavaScript

function openImg(img) {
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = img.src;
    document.body.style.overflow = 'hidden';
}

function closeImg() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.id === 'lightbox') {
        closeImg();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImg();
    }
});