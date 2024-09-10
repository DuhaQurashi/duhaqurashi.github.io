document.addEventListener('DOMContentLoaded', () => {
    const OpenPopupLinkBlanche = document.getElementById('OpenPopupLinkBlanche');
    const OpenPopupLinkKatt = document.getElementById('OpenPopupLinkKatt');
    const OpenPopupLinkBlathers = document.getElementById('OpenPopupLinkBlathers');
    const OpenPopupLinkTom = document.getElementById('OpenPopupLinkTom');
    
    OpenPopupLinkBlanche.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        openPopup('https://nookipedia.com/wiki/Blanche');
    });
    OpenPopupLinkKatt.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        openPopup('https://nookipedia.com/wiki/katt');
    });
    OpenPopupLinkBlathers.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        openPopup('https://nookipedia.com/wiki/Blathers');
    });
    OpenPopupLinkTom.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior
        openPopup('https://nookipedia.com/wiki/Tom_Nook');
    });
  
    function openPopup(url) {
        const width = 600;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const features = `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`;
  
        window.open(url, 'popupWindow', features);
    }
  });
  