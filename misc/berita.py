import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import time

def scrape_kiarapedes_news():
    url = "https://news.google.com/rss/search?q=Kiarapedes&hl=id&gl=ID&ceid=ID:id"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, "xml") 
    
    items = soup.find_all("item")
    news_list = []

    for item in items:
        title = item.title.text
        link = item.link.text
        pub_date = item.pubDate.text
        
        date_obj = datetime.strptime(pub_date, '%a, %d %b %Y %H:%M:%S %Z')
        formatted_date = date_obj.strftime('%d %b %Y')

        # Google News RSS tidak memberikan image langsung. 
        # Kita gunakan placeholder atau layanan favicon sebagai fallback jika image tidak ada.
        # Atau Anda bisa melakukan scraping kedua ke link sumber (opsional & berat).
        image_url = f"https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url={link}&size=128"

        news_list.append({
            "title": title,
            "date": formatted_date,
            "link": link,
            "image": image_url # Menggunakan logo sumber berita sebagai gambar utama
        })

    # Simpan ke file JSON
    with open('data_berita.json', 'w', encoding='utf-8') as f:
        json.dump(news_list, f, indent=4, ensure_ascii=False)
    
    print(f"Berhasil mengambil {len(news_list)} berita Kiarapedes.")

if __name__ == "__main__":
    scrape_kiarapedes_news()