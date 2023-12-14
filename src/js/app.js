var swiper = new Swiper('.mySwiper', {
    // Diğer ayarlar buraya eklenecek
    spaceBetween: 10,
    autoplay: {
        delay: 3000, // Her slaytın görüntülenme süresi (ms cinsinden)
        disableOnInteraction: false, // Kullanıcı etkileşimi sonrasında otomatik oynatmayı durdurma
    },
});

function openPopup() {
    document.getElementById('videoModal').style.display = 'flex';
    document.body.classList.add('modal-open');
  }
  
  function closePopup() {
    document.getElementById('videoModal').style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  