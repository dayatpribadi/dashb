// CHART PRESENSI
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      height: 393,
    },
    labels: ['Presensi Hadir', 'Presensi DL', 'Presensi KL', 'Presensi TAP', 'Presensi Sakit', 'Presensi Izin',
      'Presensi TK'
    ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        },
      }
    }, ],
    title: {
      text: 'Dinas Komunikasi Informatika Statistik dan Persandian',
      align: 'left'
    },
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex]; // Menggunakan nilai asli data
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chartPresensiSemestaDb"), options);
  chart.render();



//   JAM TANGGAL DAN TAHUN
var tw = new Date();
if (tw.getTimezoneOffset() == 0)(a = tw.getTime() + (7 * 60 * 60 * 1000))
else(a = tw.getTime());
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
    "Oktober", "Nopember", "Desember");
document.getElementById("waktuAja").innerHTML = " Pukul : " + ((tw.getHours() < 10) ? "0" : "") + tw.getHours() +
    ":" +
    ((tw.getMinutes() <
        10) ? "0" :
    "") + tw.getMinutes() + (" WIB");


var tw = new Date();
if (tw.getTimezoneOffset() == 0)(a = tw.getTime() + (7 * 60 * 60 * 1000))
else(a = tw.getTime());
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
    "Oktober", "Nopember", "Desember");
document.getElementById("tanggalwaktu").innerHTML = hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] +
    " " + tahun;

// SELECT MODAL
$(document).ready(function () {
    // Inisialisasi Datepicker
    $('.fc-datepicker').datepicker({
      dateFormat: "mm/dd/yy"
    });

    // Inisialisasi Select2
    $('.select2-show-search').select2({
      width: '100%'
    });

    // Ketika filter diubah, perbarui daftar surat
    $('#modalSurat').on('change', 'input.fc-datepicker, .select2-show-search', function () {
      const startDate = $('.fc-datepicker').eq(0).val(); // Ambil tanggal awal
      const endDate = $('.fc-datepicker').eq(1).val(); // Ambil tanggal akhir
      const category = $('.select2-show-search').val(); // Ambil kategori surat

      // Buat permintaan AJAX untuk mendapatkan data surat sesuai filter
      $.ajax({
        url: 'url_endpoint_anda', // Ganti dengan URL API atau server untuk mengambil data surat
        method: 'GET',
        data: {
          startDate,
          endDate,
          category
        },
        success: function (response) {
          // Perbarui konten modal berdasarkan respons
          $('#modalSurat .modal-body').html(
            response); // Ini contoh, sesuaikan berdasarkan struktur respons Anda
        },
        error: function () {
          alert('Gagal memuat data surat.');
        }
      });
    });
  });