// Remplacez YOUR_API_KEY par votre clé API Google
const API_KEY = '';

// Remplacez YOUR_SPREADSHEET_ID par l'ID de votre feuille de calcul Google
const SPREADSHEET_ID = '';

// Fonction pour récupérer les données de la feuille de calcul
async function fetchRankingData() {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A2:M36?key=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
  // Fonction pour afficher les données dans le tableau HTML
  async function displayRanking() {
    const data = await fetchRankingData();
    const rows = data.values;
  
    const table = document.getElementById('rankingTable');
    for (const row of rows) {
      const rank = row[0];
      const name = row[1];
      const countryCode = row[2];
      const manche1 = row[3];
      const manche2 = row[4];
      const manche3 = row[5];
      const manche4 = row[6];
      const manche5 = row[7];
      const manche6 = row[8];
      const manche7 = row[9];
      const manche8 = row[10];
      const manche9 = row[11];
      const total = row[12];
  
      // Générer l'URL de l'image du drapeau en fonction du code alpha du pays
      //const flagUrl = `https://www.countryflags.io/${countryCode}/flat/64.png`;
      const flagUrl = `${countryCode}`;
  
      // Créer la ligne de tableau HTML avec les données
      const tableRow = `<tr>
        <td>${rank}</td>
        <td>${name}</td>
        <td><img src="https://flagsapi.com/${flagUrl}/shiny/64.png" alt="Drapeau ${countryCode}" /></td>
        <td>${manche1}</td>
        <td>${manche2}</td>
        <td>${manche3}</td>
        <td>${manche4}</td>
        <td>${manche5}</td>
        <td>${manche6}</td>
        <td>${manche7}</td>
        <td>${manche8}</td>
        <td>${manche9}</td>
        <td>${total}</td>
      </tr>`;
      table.innerHTML += tableRow;
    }
  }
document.querySelectorAll("tr:nth-child(-n+3) td:first-child").forEach((cell, index) => {
   cell.style.color = index === 0 ? "gold" : index === 1 ? "silver" : "#cd7f32";
 });

  // Appeler la fonction d'affichage au chargement de la page
  displayRanking();
