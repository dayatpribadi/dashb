
$(function () {
  'use strict'

  $('#datepicker').datepicker();

  $(document).ready(function () {
    $('.select2-show-search').select2({
      placeholder: function () {
        $(this).data('placeholder');
      },
      allowClear: true
    });
  });
  
  $('#modalSuratMasuk, #modalSuratKeluar').on('shown.bs.modal', function () {
    $('.select2-show-search').select2({
      dropdownParent: $(this), // Menempatkan dropdown di dalam modal
      width: '100%' // Mengatur lebar dropdown agar sesuai kolom
    });
  });
});

var optionsSuratMasuk = {
  series: [{
    name: 'Jumlah Surat Masuk',
    data: [44, 55, 57, 56]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ['#1E90FF', '#00CED1', '#FFD700', '#DC143C'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#333']
    },
    offsetY: 100,
    position: 'top'
  },
  xaxis: {
    categories: ['Total Surat Masuk', 'Belum Didisposisikan', 'Sudah Didisposisikan', 'Selesai'],
    labels: {
      rotate: -90,
      style: {
        fontSize: '10px'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Jumlah Surat Masuk'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " ";
      }
    }
  }
};

var optionsSuratKeluar = {
  series: [{
    name: 'Jumlah Surat Keluar',
    data: [44, 55, 57, 56]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  colors: ['#FF4500', '#32CD32', '#8A2BE2', '#FFA07A'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#333']
    },
    offsetY: 100,
    position: 'top'
  },
  xaxis: {
    categories: ['Total Surat Keluar', 'Proses Verifikasi', 'Menunggu Tanda Tangan', 'Sudah Ditandatangani'],
    labels: {
      rotate: -90,
      style: {
        fontSize: '10px'
      }
    }
  },
  yaxis: {
    title: {
      text: 'Jumlah Surat Keluar'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " ";
      }
    }
  }
};

// Ambil elemen dropdown dan daftar surat
document.getElementById("suratSelect").addEventListener("change", function (event) {
  var selectedValue = event.target.value;

  // Tampilkan daftar surat sesuai dengan pilihan
  if (selectedValue === "SM") {
    document.getElementById("ListSuratMasuk").style.display = "flex";
    document.getElementById("ListSuratKeluar").style.display = "none";
  } else if (selectedValue === "SK") {
    document.getElementById("ListSuratMasuk").style.display = "none";
    document.getElementById("ListSuratKeluar").style.display = "flex";
  } else {
    // Sembunyikan keduanya jika tidak ada yang dipilih
    document.getElementById("ListSuratMasuk").style.display = "flex";
    document.getElementById("ListSuratKeluar").style.display = "none";
  }
});


document.getElementById('search-button').addEventListener('click', function () {
  var query = document.getElementById('search-box').value;
  if (query) {
    window.location.href = 'https://www.bing.com/search?q=' + encodeURIComponent(query);
  }
});

const backgrounds = [{
    url: 'https://fisip.unsri.ac.id/labap/wp-content/uploads/2022/04/K1.jpg',
    desc: 'Kampung Warna Warni - Desa Burai'
  },
  {
    url: 'https://oganilir.disway.id/upload/3bd60d53a2b98402ec911c53ec6c0c9b.jpg',
    desc: 'Masjid An-Nur - Pemkab Ogan Ilir'
  },
  {
    url: 'https://media.suara.com/pictures/970x544/2025/01/26/58339-taman-pancasila-di-ogan-ilir-sumatera-selatan.jpg',
    desc: 'Taman Pancasila - Ogan Ilir'
  }
];
let currentBgIndex = Math.floor(Math.random() * backgrounds.length);

function updateBackground() {
  document.body.style.backgroundImage = `url(${backgrounds[currentBgIndex].url})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundPosition = 'center center';

  const descLink = document.getElementById('background-desc');
  descLink.textContent = backgrounds[currentBgIndex].desc;
}

function prevImage() {
  currentBgIndex = (currentBgIndex - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
}

function nextImage() {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  updateBackground();
}

document.getElementById('next-bg').addEventListener('click', nextImage);
document.getElementById('prev-bg').addEventListener('click', prevImage);
document.getElementById('prev-bg-icon').addEventListener('click', prevImage);
document.getElementById('next-bg-icon').addEventListener('click', nextImage);

updateBackground();

const newsList = document.getElementById('news-list');
setTimeout(() => {
  newsList.innerHTML = `
      <li><a href='#'>Berita 1: Kejadian Terbaru</a></li>
      <li><a href='#'>Berita 2: Teknologi Terkini</a></li>
      <li><a href='#'>Berita 3: Ekonomi Global</a></li>
  `;
}, 2000);
