require('dotenv').config(); // Ensure this is at the top to load the environment variables
const express = require('express');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();

app.use(express.json());

// Helper function to authenticate and get document
async function authenticateGoogleSheet() {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    // Use the newer async/await pattern for authentication
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo(); // loads document properties and worksheets
    return doc;
  } catch (error) {
    console.error('Failed to authenticate Google Sheets:', error);
    throw error; // Rethrow to handle it in the calling function
  }
}

// Endpoint to fetch data from Google Sheets
app.get('/', async (req, res) => {
  try {
    const doc = await authenticateGoogleSheet();
    const sheet = doc.sheetsByIndex[0]; // Access the first sheet within the document
    const rows = await sheet.getRows(); // Get rows in the sheet

    // Respond with the rows converted to JSON
    res.json(rows.map(row => ({
      id: row.id,
      name: row.name,
      value: row.value,
      // Add other fields based on your Google Sheets columns
    })));
  } catch (error) {
    console.error('Failed to fetch data from Google Sheets:', error);
    res.status(500).send('Failed to fetch data from Google Sheets');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
