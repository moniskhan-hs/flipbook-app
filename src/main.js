




import "./style.css"; // Ensure './style.css' exists

// Render the initial HTML structure in the #app element
document.querySelector("#app").innerHTML = `
  <div>

  <div id="input-container">
  



  <div class="file-input-container">
  <label for="uploadPDF" class="custom-file-upload">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="upload-icon">
      <path d="M4 10V16H16V10H18V16C18 17.1 17.1 18 16 18H4C2.9 18 2 17.1 2 16V10H4ZM13 9L10 6L7 9H9V13H11V9H13ZM16 4V6H4V4H16Z" />
    </svg>
    Upload PDF
  </label>
  <input type="file" id="uploadPDF" accept="application/pdf" class="hidden-input">
  <button id="startButton" disabled class="styled-button">Start</button>
</div>
  </div>

     <div id="errorMessage" style="color: red; margin-top: 10px; display: none;"></div>
    <div id="book" style="display: none;"> <!-- Initially hide the book -->
     
    <div id="cover-page" class="my-page" data-density="hard" style="text-align: center; font-size: 20px; font-weight: bold; background: #f8f8f8; padding: 20px;">
        
      </div>

    </div>
  </div>
`;

import { PageFlip } from "page-flip";

// Initialize the PageFlip instance
const pageFlip = new PageFlip(document.getElementById("book"), {
  width: 400, // Base page width
  height: 600, // Base page height
  showCover: true,

});

// Load existing pages from the HTML
pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

let selectedFile = null;

// Enable the button after PDF upload
document.getElementById("uploadPDF").addEventListener("change", (event) => {

  const errorMessage = document.getElementById("errorMessage");
  errorMessage.style.display = "none"; // Hide any previous error messages
  selectedFile = event.target.files[0];
  if (selectedFile) {
    console.log('selectedFile:', selectedFile)
    document.getElementById("startButton").disabled = false;
  } else {
    document.getElementById("startButton").disabled = true;
  }
});

// Handle button click to start the operation
document.getElementById("startButton").addEventListener("click", async () => {
  try {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = async function () {
        const typedarray = new Uint8Array(this.result);

        // Load the PDF
        const pdf = await pdfjsLib.getDocument(typedarray).promise;

        // Hide the book while processing
        const bookElement = document.getElementById("book");
        bookElement.style.display = "none";

        // Clear previous pages
        pageFlip.clear();

        console.log('pdf.numPages:', pdf.numPages)
        // bookElement.innerHTML = "";

        let totalPagesOFPDF = pdf.numPages

        console.log('totalPagesOFPDF:', totalPagesOFPDF)
        // Iterate through each page
        for (let pageNum = 1; pageNum <= totalPagesOFPDF; pageNum++) {
          const page = await pdf.getPage(pageNum);

          // Set scale and dimensions
          const scale = 2; // Higher scale for better quality
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d", { willReadFrequently: true });
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Render page to canvas
          await page.render({ canvasContext: context, viewport }).promise;

          // Convert canvas to image
          const img = document.createElement("img");
          img.src = canvas.toDataURL("image/jpeg");
          img.alt = `Page ${pageNum}`;
          img.style.display = "block";

          // Create a new `.my-page` element for the flipbook
          const newPage = document.createElement("div");
          newPage.classList.add("my-page");
          newPage.appendChild(img);




          // Append the new page to the book
          document.getElementById("book").appendChild(newPage);
        }


        if (totalPagesOFPDF % 2 !== 0) {
          // Create and append a blank page
          const blankPage = createPageElement(null, {
            text: "",
            background: "#f0f0f0"
          });
          document.getElementById("book").appendChild(blankPage);
        }


        // Add the last cover page
        const lastCoverPage = document.createElement("div");
        lastCoverPage.classList.add("my-page");
        lastCoverPage.id = "last-cover-page";
        lastCoverPage.style.textAlign = "center";
        lastCoverPage.style.fontSize = "20px";
        lastCoverPage.style.fontWeight = "bold";
        lastCoverPage.style.background = "#cf2121";
        lastCoverPage.style.padding = "20px";
        lastCoverPage.innerHTML = "<h1>Thank You for Reading!</h1>";

        // Append the last cover page to the book
        document.getElementById("book").appendChild(lastCoverPage);

        // Reload pages in the PageFlip instance
        pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));


        // Show the book after processing
        bookElement.style.display = "block";

        document.getElementById("uploadPDF").value = "";
        // Disable the button after processing
        document.getElementById("startButton").disabled = true;
      };
      fileReader.readAsArrayBuffer(selectedFile);


    } else {
      errorMessage.textContent = "Please select a valid PDF file.";
      errorMessage.style.display = "block";
      return;
    }
  } catch (error) {
    errorMessage.textContent = `Unexpected error: ${error.message}`;
    errorMessage.style.display = "block";
    console.log('error:', error)

  }

});





// Function to create a page element for the flipbook
function createPageElement(img = null, options = {}) {
  const { text = "", background = "#ffffff" } = options;

  const page = document.createElement("div");
  page.classList.add("my-page");

  // Add image if provided
  if (img) {
    page.appendChild(img);
  } else {
    // Add text and background for blank or special pages
    page.style.display = "flex";
    page.style.justifyContent = "center";
    page.style.alignItems = "center";
    page.style.background = background;
    page.style.height = "600px"; // Match the flipbook's height
    page.style.width = "400px"; // Match the flipbook's width
    page.style.fontSize = "20px";
    page.style.fontWeight = "bold";
    page.style.color = "#000000"; // Adjust text color as needed
    page.textContent = text;
  }

  return page;
}

