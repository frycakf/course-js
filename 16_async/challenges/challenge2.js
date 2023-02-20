'use strict';

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const myImage = document.createElement('img');
    myImage.src = imgPath;

    myImage.addEventListener('load', function () {
      document.body.appendChild(myImage);
      resolve(myImage)
    })

    myImage.addEventListener('error', function() {
      reject(new Error('Image not found'))
    })
  })
}

let currentImg;

createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg')
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));