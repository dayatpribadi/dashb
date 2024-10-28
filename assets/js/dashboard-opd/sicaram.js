// PIE //
var ctx70 = document.getElementById('realisasiKegiatan');
var myPieChart70 = new Chart(ctx70, {
  type: 'doughnut',
  data: {
    labels: ['Teralisasi', 'Belum Teralisasi'],
    datasets: [{
      label: '# of Votes',
      data: [12, 38],
      backgroundColor: [
        '#E4B500',
        '#536FC5',
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
});

// PIE //
var ctx80 = document.getElementById('realisasiBelanja');
var myPieChart80 = new Chart(ctx80, {
  type: 'doughnut',
  data: {
    labels: ['Teralisasi', 'Belum Teralisasi'],
    datasets: [{
      label: '# of Votes',
      data: [12, 38],
      backgroundColor: [
        '#E4B500',
        '#536FC5',
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
});

// PIE //
var ctx60 = document.getElementById('realisasiProgram');
var myPieChart60 = new Chart(ctx60, {
  type: 'doughnut',
  data: {
    labels: ['Teralisasi', 'Belum Teralisasi'],
    datasets: [{
      label: '# of Votes',
      data: [12, 38],
      backgroundColor: [
        '#E4B500',
        '#536FC5',
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
});

// PIE //
var ctx50 = document.getElementById('realisasiPendapatan');
var myPieChart50 = new Chart(ctx50, {
  type: 'doughnut',
  data: {
    labels: ['Teralisasi', 'Belum Teralisasi'],
    datasets: [{
      label: '# of Votes',
      data: [12, 38],
      backgroundColor: [
        '#E4B500',
        '#536FC5',
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
});

// PIE //
var ctx50 = document.getElementById('kondisiPegawai');
var myPieChart50 = new Chart(ctx50, {
  type: 'doughnut',
  data: {
    labels: ['Hadir', 'Izin', 'Tanpa Keterangan'],
    datasets: [{
      label: '# of Votes',
      data: [12, 38, 2],
      backgroundColor: [
        '#536FC5',
        '#E4B500',
        '#FC3B5E',
      ]
    }]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
});



// sicaram
var options = {
  series: [44, 55, ],
  chart: {
    type: 'donut',
    height: 350,
  },
  colors: ['#3388E1', '#FBC105'],
  labels: ['Sudah Terealisasi', 'Belum Terealisasi'],
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
    text: 'Realisasi Kinerja',
    align: 'left'
  },
};

var chart = new ApexCharts(document.querySelector("#dashboardRealKinerja"), options);
chart.render();

var options = {
  series: [44, 55, ],
  chart: {
    type: 'donut',
    height: 350,
  },
  colors: ['#6B26FF', '#19BED1'],
  labels: ['Sudah Terealisasi', 'Belum Terealisasi'],
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
    text: 'Realisasi Keuangan',
    align: 'left'
  },
};

var chart = new ApexCharts(document.querySelector("#dashboardRealKeuangan"), options);
chart.render();





