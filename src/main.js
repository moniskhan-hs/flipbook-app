import "./style.css"; // Ensure './style.css' exists

// Render the HTML structure in the #app element
document.querySelector("#app").innerHTML = `
  <div>
    <div id="book">
      <div  id="cover-page" class="my-page" data-density="hard" style="text-align: center; font-size: 20px; font-weight: bold; background: #f8f8f8; padding: 20px;">
        <h1 > Welcome to My Flipbook</h1> 
      </div>

           
      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #f4f4f9;">
        <h1>Taj Mahal - Introduction</h1>
    <img src="/tajmahel.jpg" alt="Taj Mahal">
    <p>
      The Taj Mahal is one of the most famous monuments in the world, located in Agra, India. It was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This magnificent mausoleum is renowned for its stunning white marble architecture, intricate carvings, and its romantic history. A symbol of eternal love, the Taj Mahal attracts millions of tourists from across the globe each year.
    </p>
      </div>


      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #e9f5f9;">
        <h1>Taj Mahal - Architecture and Significance</h1>
    <p>
      The Taj Mahal is a UNESCO World Heritage Site and is considered one of the Seven Wonders of the World. The structure combines elements of Islamic, Persian, and Indian architectural styles. The central dome, minarets, and the reflective pool in front of the monument create a mesmerizing view. The intricate marble inlay work and calligraphy further add to its grandeur. The Taj Mahal stands as a symbol of India's rich history and cultural heritage.
    </p>
      </div>



      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #f9f4f4;">
         <h1>Qutub Minar - Introduction</h1>
    <img src="/qutubminaar.jpg" alt="Qutub Minar">
    <p>
      The Qutub Minar, located in Delhi, is another architectural marvel of India. Built by Qutub-ud-din Aibak in the 12th century, it is the tallest brick minaret in the world. This impressive tower is a UNESCO World Heritage Site and is known for its intricate carvings and inscriptions. The Qutub Minar represents the beginning of Muslim rule in India and showcases the fusion of Indo-Islamic architectural styles.
    </p>
      </div>




      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #eef9e4;">
       <h1>Qutub Minar - Architecture and Legacy</h1>
    <p>
      The Qutub Minar stands at a height of 72.5 meters and is made of red sandstone and marble. It has five distinct storeys, each adorned with intricate carvings and Quranic inscriptions. Surrounding the minaret is the Qutub Complex, which includes the Iron Pillar, Quwwat-ul-Islam Mosque, and several other historic structures. The Qutub Minar is a testament to India's diverse cultural history and architectural ingenuity.
    </p>
      </div>


      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #eef9e4;">
  <h1>Red Fort - Introduction</h1>
    <img src="/redfort.jpg" alt="Red Fort">
    <p>
      The Red Fort, located in the heart of Delhi, is a symbol of India's rich history and its struggle for independence. Built by Emperor Shah Jahan in 1638, this massive red sandstone fortress served as the main residence of the Mughal emperors. It is a UNESCO World Heritage Site and is known for its stunning architecture and cultural significance.
    </p>
      </div>


      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #eef9e4;">
     <h1>Red Fort - Architecture and Legacy</h1>
    <p>
      The Red Fort features a blend of Persian, Timurid, and Indian architectural styles. Its massive walls, which stretch over 2 kilometers, enclose a number of significant structures, including the Diwan-i-Aam (Hall of Public Audience) and the Diwan-i-Khas (Hall of Private Audience). Today, the Red Fort is a symbol of India's independence and is where the Prime Minister delivers the Independence Day speech annually.
    </p>
      </div>


      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #eef9e4;">
  <h1>Gateway of India - Introduction</h1>
    <img src="/gateway.jpg" alt="Gateway of India">
    <p>
      The Gateway of India is an iconic landmark located in Mumbai. Built in 1924, it was constructed to commemorate the visit of King George V and Queen Mary to India. This majestic structure, made of yellow basalt and reinforced concrete, is a fine example of Indo-Saracenic architecture. It serves as a symbol of Mumbai and India's colonial history.
    </p>
      </div>

      
      <div class="my-page" style="padding: 20px; font-family: Arial, sans-serif; background: #eef9e4;">
   <h1>Gateway of India - Architecture and Significance</h1>
    <p>
      Standing at a height of 26 meters, the Gateway of India overlooks the Arabian Sea. Its intricate designs and carvings reflect a blend of Hindu and Muslim architectural styles. Today, it is a major tourist attraction and a historical monument that reminds us of the era of British rule in India. It also serves as a popular gathering spot for locals and visitors alike.
    </p>
      </div>
   
      <div id="last-cover-page" class="my-page" data-density="hard" style="text-align: center; font-size: 20px; font-weight: bold; background: #f8f8f8; padding: 20px;">
      <h1>
        Thank You for Reading!
        
        </h1>
      </div>
    </div>
  </div>
`;

// Ensure `PageFlip` is properly imported or available globally
// If it's a library like 'stpageflip', import it
import { PageFlip } from "page-flip"; // Update this if you're using a different library

// Initialize the PageFlip instance
const pageFlip = new PageFlip(document.getElementById("book"), {
  width: 400, // Base page width
  height: 600, // Base page height
  showCover: true,
});

// Load pages from the HTML
pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

