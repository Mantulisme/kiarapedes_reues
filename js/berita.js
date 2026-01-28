let displayedCount = 0;
const increment = 3;
const container = document.getElementById('news-container');

async function loadNewsFromJson() {
    try {
        // Ambil data dari file JSON hasil scraper
        const response = await fetch('../js/data_berita.json');
        const newsData = await response.json();

        // Fungsi tampilkan data (3 per 3)
        function renderNextBatch() {
            const nextBatch = newsData.slice(displayedCount, displayedCount + increment);
            
            nextBatch.forEach(news => {
                const card = `
                    <div class="news-card">
                        <div class="news-content">
                            <img style="max-width:400px; border-radius: 10px" src="${news.image}" alt="News"> 
                            <h3>${news.title}</h3>
                            <small>${news.date}</small>
                            <br>
                            <a href="${news.link}" target="_blank" class="btn">Baca Selengkapnya</a>
                            <br><br><br><br>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
            displayedCount += increment;
        }

        // Deteksi Scroll
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                renderNextBatch();
            }
        };

        renderNextBatch(); // Load pertama kali

    } catch (error) {
        console.error("Gagal memuat JSON:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadNewsFromJson);