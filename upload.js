document.getElementById('plus').addEventListener('click', function () {
    document.getElementById('upload').style.display = 'block';
});

document.getElementById('myFile').addEventListener('change', function () {
    document.getElementById('titleModal').style.display = 'block';
});


document.getElementById('submitTitleBtn').addEventListener('click', function () {
    const mediaTitle = document.getElementById('mediaTitle').value;
    if (mediaTitle) {
        const fileInput = document.getElementById('myFile');
        fileInput.setAttribute('data-title', mediaTitle);
        document.getElementById('titleModal').style.display = 'none';
        
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                let container;
                let mediaElement;

                if (file.type === 'video/mp4') {
                    container = document.querySelector('.videos');
                    mediaElement = document.createElement('video');
                    mediaElement.controls = true;
                } else {
                    container = document.querySelector('.gallery');
                    mediaElement = document.createElement('img');
                }

                mediaElement.src = e.target.result;

                const link = document.createElement('a');
                link.href = e.target.result;
                link.setAttribute('data-lightbox', 'models');
                link.setAttribute('data-title', mediaTitle);
                link.classList.add('gallery-item');
                
                link.appendChild(mediaElement);
                container.appendChild(link);
            };
            reader.readAsDataURL(file);

            // Reset the file input
            fileInput.value = '';
            fileInput.removeAttribute('data-title');
            document.getElementById('mediaTitle').value = '';
            document.getElementById('upload').style.display = 'none';
        }
    } else {
        alert('Please enter a title for the media.');
    }
});




// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function () {
    document.getElementById('titleModal').style.display = 'none';
};


window.onclick = function (event) {
    const modal = document.getElementById('titleModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};