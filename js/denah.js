var map = L.map("map-container", {
    crs: L.CRS.Simple,
    minZoom: -1
});

var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay("../gambar/denah_source_placeholder.png", bounds).addTo(map);
map.fitBounds(bounds);

var lokasi = [
    {
        nama: "Kantor Desa Kiarapedes",
        koordinat: [200, 300],
        foto: "../gambar/kantor_desa.jpg",
        deskripsi: "Kantor Desa Kiarapedes adalah pusat administrasi dan pelayanan masyarakat desa."
    },
    {
        nama: "Lapangan Panca Waluya",
        koordinat: [500, 600],
        foto: "../gambar/lapangan.jpeg",
        deskripsi: "Lapangan Panca Waluya adalah tempat untuk berbagai kegiatan aktivitas masyarakat."
    },
    {
        nama: "SMK Negeri 1 Kiarapedes",
        koordinat: [700, 800],
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