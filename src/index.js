console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');

        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);

        });
      })
      .catch(error => console.error('Error fetching dog images:', error));

      const breedUrl = "https://dog.ceo/api/breeds/list/all";

      fetch(breedUrl)
      .then(response => response.json())
      .then(data =>{
        const theList = document.getElementById('dog-breeds')

        
    const breeds = Object.keys(data.message);
    breeds.forEach(breed => {
    const li = document.createElement('li')
    li.textContent = breed; 
    theList.appendChild(li)

    li.addEventListener('click', () =>{
        li.style.color = blue
    })

        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));

      const dropDown = document.getElementById('breed-dropdown')
      dropDown.addEventListener('change', (event) =>{
      const selectedLetter = event.target.value;
      const listItems = document.querySelectorAll('#dog-breeds li')
          listItems.forEach(li =>{
              if (li.textContent.startsWith(selectedLetter)){
                  li.style.display = 'list-item'
              } else {
                  li.style.display = 'none'
              }
          })
  })
});