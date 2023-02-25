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
      reject(new Error('Image not found...'))
    })
  })
}

const loadNPause = async function() {
  try {
    let currentImg = await createImage('./img/img-1.jpg')
    console.log('Image 1 loaded');

    await wait(2)
    console.log('Two seconds passed, hiding the image');
    currentImg.style.display = 'none';

    currentImg = await createImage('./img/img-2.jpg')
    console.log('Image 2 loaded');

    await wait(2)
    console.log('Two seconds passed, hiding the image');
    currentImg.style.display = 'none';
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log('Neplecha ukončena :)');
  }
};

// loadNPause();

const images = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function(imgArr) {
  try {
    const imgs = imgArr.map(async image => await createImage(image))
    const result = await Promise.allSettled(imgs)
    result.map(img => img.value.classList.add('parallel'))
  } catch(err) {
    console.error(err.message);
  }
}

loadAll(images);