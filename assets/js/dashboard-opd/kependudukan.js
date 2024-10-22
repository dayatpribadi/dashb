var ctb40 = document.getElementById('chartBar40').getContext('2d');
new Chart(ctb40, {
  type: 'horizontalBar',
  data: {
    labels: ['Indralaya', 'Indralaya Utara', 'Indralaya Selatan', 'Tanjung Batu', 'Payaraman', 'Tanjung Raja'],
    datasets: [{
      label: '# of Votes',
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: [
        '#29B0D0',
        '#2A516E',
        '#F07124',
        '#CBE0E3',
        '#979193'
      ]
    }]
  },
  options: {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 10
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 11,
          max: 80
        }
      }]
    }
  }
  
});




// PIE //
var ctx70 = document.getElementById('chartDonuts');
var myPieChart70 = new Chart(ctx70, {
  type: 'doughnut',
  data: {
    labels: ['Laki-laki', 'Perempuan'],
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


// Radar //
var ctx80 = document.getElementById('kepadatanPenduduk');
var myPieChart80 = new Chart(ctx80, {
  type: 'radar',
  data: {
    labels: ["Indralaya", "Indralaya Mulya", "Indralaya Utara", "Pemulutan", "Tanjung Raja", "Tanjung Batu"],
    datasets: [{
        label: "Student A",
        backgroundColor: "#E4B500",
        data: [65, 75, 70, 80, 60, 80]
      }, {
        label: "Student B",
        backgroundColor: "#536FC5",
        data: [54, 65, 60, 70, 70, 75]
      }]
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    plugins: {
        title: {
            display: true,
            text: 'Chart Radar Js'
        }
    }
  },
});


// Bar //
var ctx90 = document.getElementById('lajuPenduduk');
var myPieChart90 = new Chart(ctx90, {
    type: 'bar',
    data: {
        labels: ["Indralaya", "Indralaya Mulya", "Indralaya Utara", "Pemulutan", "Tanjung Raja", "Tanjung Batu"],
      datasets: [{
        label: 'data-1',
        data: [2202, 2029, 3045, 1789, 2850, 2014, 2007],
        backgroundColor: "#536FC5"
      }]
    },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    plugins: {
        title: {
            display: true,
            text: 'Chart Radar Js'
        }
    }
  },
});


// Bar //
var ctx100 = document.getElementById('kelompokUmur');
var myPieChart100 = new Chart(ctx100, {
    type: 'bar',
    data: {
        labels: [
            "Umur 0-5", 
            "Umur 5-9", 
            "Umur 10-14", 
            "Umur 15-19", 
            "Umur 20-24", 
            "Umur 25-29",
            "Umur 20-34",
            "Umur 35-39",
            "Umur 40-44",
            "Umur 45-49",
            "Umur 50-54",
            "Umur 55-59",
            "Umur 60-64",
            "Umur 65-69",
            "Umur 70-74",
            "Umur 75+",
        ],
      datasets: [{
        label: 'data-1',
        data: [2202, 2029, 3045, 1789, 2850, 2014, 2007,2202, 2029, 3045, 1789, 2850, 2014, 2007,  2850, 2014, 2007,2202, 2029, 3045, 1789, 2850],
        backgroundColor: "#536FC5"
      }]
    },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    plugins: {
        title: {
            display: true,
            text: 'Chart Radar Js'
        }
    }
  },
});

// Bar //
var ctx101 = document.getElementById('kelompokPekerjaan');
var myPieChart101 = new Chart(ctx101, {
    type: 'bar',
    data: {
        labels: [
            "Tidak Bekerja", 
            "Petani", 
            "Pedagang", 
            "Pekebun", 
            "Guru", 
            "Karyawan BUMN",
            "Karyawan Swasta",
            "Dosen",
            "TNI/Polri",
            "Wartawan",
            "Dokter",
            "Aggota DPR/D",
            "Buruh",
            "Pensiun",
            "Mekanik",
            "Tukang Jahit",
        ],
      datasets: [{
        label: 'data-1',
        data: [2202, 2029, 3045, 1789, 2850, 2014, 2007,2202, 2029, 3045, 1789, 2850, 2014, 2007,  2850, 2014, 2007,2202, 2029, 3045, 1789, 2850],
        backgroundColor: "#536FC5"
      }]
    },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    plugins: {
        title: {
            display: true,
            text: 'Chart Radar Js'
        }
    }
  },
});