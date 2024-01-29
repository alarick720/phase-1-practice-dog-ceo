
document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imagesContainer = document.getElementById('images-container'); // Assuming you have a container with this ID in your HTML

      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        imagesContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching images:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imagesContainer = document.querySelector('#dog-image-container');
      data.message.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        imagesContainer.appendChild(img);
      });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedsList = document.querySelector('#dog-breeds');
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedsList.appendChild(li);
        });
      });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const breedDropdown = document.querySelector('#breed-dropdown');
    const breedsList = document.querySelector('#dog-breeds');
  
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      breedsList.querySelectorAll('li').forEach(li => {
        if (li.textContent.startsWith(selectedLetter)) {
          li.style.display = 'list-item';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });