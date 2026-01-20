var map = L.map("map-container", {
    crs: L.CRS.Simple,
    minZoom: -2.8,
    maxZoom: 2,
    zoomControl: true
});

var bounds = [[0,0], [2500, 2500]];
var image = L.imageOverlay("../gambar/map.jpg", bounds).addTo(map);
map.fitBounds(bounds);

var lokasi = [
    {
        nama: "Kantor Desa Kiarapedes",
        koordinat: [880, 1090],
        foto: "../gambar/kantor_desa.jpeg",
        deskripsi: "Kantor Desa Kiarapedes adalah pusat administrasi dan pelayanan masyarakat desa."
    },
    {
        nama: "Lapangan Panca Waluya",
        koordinat: [980, 270],
        foto: "../gambar/lapangan.jpeg",
        deskripsi: "Lapangan Panca Waluya adalah tempat untuk berbagai kegiatan aktivitas masyarakat."
    },
    {
        nama: "SMK Negeri 1 Kiarapedes",
        koordinat: [1066, 666],
        foto: "../gambar/smk.jpg",
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di berbagai bidang seperti teknologi informasi dan komunikasi."
    },
    {
        nama: "Sate Maranggi Pareang",
        koordinat: [1132, 485],
        foto: "../gambar/sate_maranggi_pareang.jpeg",
        deskripsi: "Restoran Sate Maranggi Pareang terkenal dengan hidangan sate maranggi khas Kiarapedes yang lezat dan autentik."
    },
    {
        nama: "Kantor Kecamatan Kiarapedes",
        koordinat: [212, 505],
        foto: "../gambar/kantor_kecamatan.jpg",
        deskripsi: "Kantor Kecamatan Kiarapedes adalah pusat administrasi dan pelayanan masyarakat di tingkat kecamatan. Terdapat Puskesmas, Polsek, dan Sekretariat Kecamatan di sekitarnya."
    },
    {
        nama: "KUA Kecamatan Kiarapedes",
        koordinat: [1006, 820],
        foto: "../gambar/kua.jpeg",
        deskripsi: "KUA Kecamatan Kiarapedes adalah tempat untuk kegiatan keagamaan di tingkat kecamatan."
    },
    {
        nama: "Masjid Jami Al Baroqah",
        koordinat: [691, 807],
        foto: "../gambar/masjid_jami.jpeg",
        deskripsi: "Masjid Jami Al Baroqah adalah tempat ibadah umat Muslim yang menjadi pusat kegiatan keagamaan di Kiarapedes."
    },
    {
        nama: "SDN 1 Kiarapedes",
        koordinat: [964, 1127],
        foto: "../gambar/sdn1_kiarapedes.jpg",
        deskripsi: "SDN 1 Kiarapedes adalah sekolah dasar yang menyelenggarakan pendidikan dasar di wilayah Kiarapedes."
    },
    {
        nama: "SDN 2 Kiarapedes",
        koordinat: [1340, 1105],
        foto: "../gambar/SDN2.jpeg",
        deskripsi: "SDN 2 Kiarapedes adalah sekolah dasar asri yang menyelenggarakan pendidikan dasar di wilayah Kiarapedes."
    },
    {
        nama: "Pengajian Miftahul Huda",
        koordinat: [1450, 1074],
        foto: "../gambar/miftahul_huda.jpeg",
        deskripsi: "Pengajian Miftahul Huda adalah tempat untuk kegiatan pengajian dan kegiatan keagamaan di Kiarapedes."
    }
]

var panel = document.getElementById('side-panel');
var content = document.getElementById('panel-content');

lokasi.forEach(function(place) {
    var marker = L.marker(place.koordinat).addTo(map);
    marker.on('click', function() {
        content.innerHTML = `
            <h2>${place.nama}</h2>
            <img src="${place.foto}" alt="${place.nama}" style="width:100%; height:auto; margin-bottom:10px;">
            <p>${place.deskripsi}</p>
        `;
        panel.classList.add('active');
        setTimeout(()=> map.invalidateSize(), 500);
    });
});

document.getElementById('close-btn').onclick = function() {
    panel.classList.remove('active');
    setTimeout(() => map.invalidateSize(), 500);
};