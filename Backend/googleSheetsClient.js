const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

async function connectToGoogleSheets() {
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    const creds = require('./falconplus-413021-b01a455cd01f.json'); // Ensure the path is correct
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    console.log(`Loaded doc: ${doc.title}`);
    return doc;
  } catch (error) {
    console.error('Error loading the Google Sheets document:', error);
    throw error;
  }
}

module.exports = connectToGoogleSheets;
