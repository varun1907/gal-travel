const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function generateSitemap() {
    const ENDPOINT = 'http://localhost:3000'
    // const ENDPOINT = 'https://galtravel.netlify.app'
  try {
    // const response = await axios.get(`${ENDPOINT}/api/sitemap`); // Replace with your actual API URL if deployed
    // const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    // console.log('./........../../../',response.data)
    // fs.writeFileSync(sitemapPath, response.data);
    // console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
