const imagesDay = ['chihiro020.jpg', 'karigurashi021.jpg', 'marnie003.jpg', 'marnie006.jpg', 'marnie032.jpg', 'marnie050.jpg'];
const imagesNight = ['chihiro007.jpg', 'chihiro039.jpg', 'marnie012.jpg', 'marnie022.jpg', 'marnie023.jpg', 'nausicaa002.jpg'];

// Utility function to get a random image from a list
const getRandomImage = (imageFolder) => {
  let images = [];
  if (imageFolder === 'day'){
    images = imagesDay;
  }
  else {
    images = imagesNight;
  }
  const randomIndex = Math.floor(Math.random() * images.length);
  return `/images/${imageFolder}/${images[randomIndex]}`;
};

// Function to get the background image URL
export const getBackgroundImage = (sunrise, sunset, currentTime) => {
    const isDay = currentTime >= sunrise && currentTime < sunset;
    const imageFolder = isDay ? 'day' : 'night';
    return getRandomImage(imageFolder);
    };
