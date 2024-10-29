// Jumlah Pegawai //
var options = {
    series: [44, 122,],
    chart: {
    type: 'donut',
    height: 350,
  },
  labels: [
    'Laki-laki',
    'Perempuan',
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
  },],
  legend: {
    position: 'bottom'
  },
  };

  var chart = new ApexCharts(document.querySelector("#kondisiNonAsn"), options);
  chart.render();



// Jumlah Pegawai Non ASN  di tiap Perangkat Daerah //
var options = {
    series: [24, 22, 37, 14, 21, 20, 18, 14, 11],
    chart: {
    type: 'donut',
    height: 350,
  },
  labels: [
    'Diskominfo',
    'Bapenda',
    'Dishub',
    'Satpol-PP',
    'BPBD',
    'BPKAD',
    'BKPSDM',
    'DISDUKCAPIL',
    'DPMPTSP'
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
  },],
  legend: {
    position: 'bottom'
  },
  };

  var chart = new ApexCharts(document.querySelector("#kondisiNonAsnPerPd"), options);
  chart.render();



// Jumlah Pegawai Non ASN berdasarkan jenjang pendidikan //
var options = {
    series: [24, 22, 37, 14, 21, 20, 18, 14, 11],
    chart: {
    type: 'donut',
    height: 350,
  },
  labels: [
    'SMP',
    'SMA',
    'DI',
    'DII',
    'DIII',
    'DIV',
    'S1',
    'S2',
    'S3',
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
  },],
  legend: {
    position: 'bottom'
  },
  title: {
    text: 'Kondisi Non ASN Berdasarkan Tingkat Pendidikan',
    align: 'left'
  },
  };

  var chart = new ApexCharts(document.querySelector("#kondisiNonAsnPendidikan"), options);
  chart.render();



  const data = {
    nodes: [
      {id: 'NonASN', title: 'NonASN'},
      {id: 'Paruh Waktu', title: 'Paruh Waktu'},
      {id: 'DIV', title: 'DIV'},
      {id: 'SMP', title: 'SMP'},
      {id: 'SMA', title: 'SMA'},
      {id: 'DI', title: 'DI'},
      {id: 'DII', title: 'DII'},
      {id: 'DIII', title: 'DIII'},
      {id: 'S1', title: 'S1'},
      {id: 'S2', title: 'S2'},
    ],
    edges: [
      {source: 'NonASN', target: 'SMP', value: 13},
      {source: 'NonASN', target: 'SMA', value: 19},
      {source: 'NonASN', target: 'DI', value: 20},
      {source: 'NonASN', target: 'DII', value: 11},
      {source: 'NonASN', target: 'DIII', value: 8},
      {source: 'NonASN', target: 'DIV', value: 38},
      {source: 'NonASN', target: 'S1', value: 28},
      {source: 'NonASN', target: 'S2', value: 18},
    ],
  };
  const graphOptions = {
    nodeWidth: 20,
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 600,
    edgeOpacity: 0.2,
  };
  const s = new ApexSankey(document.getElementById('svg-sankey'), graphOptions);
  s.render(data);



