var map = L.map("map-container", {
    crs: L.CRS.Simple,
    minZoom: -1
});

var bounds = [[0,0], [2500, 2500]];
var image = L.imageOverlay("../gambar/map.jpg", bounds).addTo(map);
map.fitBounds(bounds);

var lokasi = [
    {
        nama: "Kantor Desa Kiarapedes",
        koordinat: [880, 1090],
        foto: "../gambar/kantor_desa.jpg",
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
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di bidang teknologi informasi dan komunikasi."
    },
    {
        nama: "Sate Maranggi Pareang",
        koordinat: [1132, 485],
        foto: "../gambar/smk.jpg",
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di bidang teknologi informasi dan komunikasi."
    },
    {
        nama: "Kantor Kecamatan Kiarapedes",
        koordinat: [212, 505],
        foto: "../gambar/kantor_kecamatan.jpg",
        deskripsi: "Kantor Kecamatan Kiarapedes adalah pusat administrasi dan pelayanan masyarakat di tingkat kecamatan."
    },
    {
        nama: "KUA Kecamatan Kiarapedes",
        koordinat: [1006, 820],
        foto: "../gambar/smk.jpg",
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di bidang teknologi informasi dan komunikasi."
    },
    {
        nama: "Masjid Jami Al Baroqah",
        koordinat: [691, 807],
        foto: "../gambar/smk.jpg",
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di bidang teknologi informasi dan komunikasi."
    },
    {
        nama: "SDN 1 Kiarapedes",
        koordinat: [964, 1127],
        foto: "../gambar/smk.jpg",
        deskripsi: "SMK Negeri 1 Kiarapedes adalah sekolah menengah kejuruan yang menyelenggarakan pendidikan dan pelatihan di bidang teknologi informasi dan komunikasi."
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