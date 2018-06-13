import banners from '../content/main-banner';
const mainBanner = document.querySelector('.main-banner');
let output = '';

const displayBanners = () => {
  banners.mainBanner.forEach(banner => {
    output += `
      <div class="main-banner__wrapper">
        <img class="main-banner__img" src="${banner.img}">
        <h1 class="main-banner__title">${banner.title}</h1>
        ${banner.subTitle ? `<h2 class="main-banner__sub-title">${banner.subTitle}</h2>` : ''}
        <p>${banner.text}</p>
      </div>
    `;
  });

  return mainBanner.innerHTML = output;
}
displayBanners();
