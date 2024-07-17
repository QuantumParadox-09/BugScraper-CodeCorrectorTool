const express = require('express');
const router = express.Router();
const { analyzeCodeWithReplicate } = require('../services/codeLlamaService');
const { createZip } = require('../utils/fileUtils');

// Add logging to verify route setup
console.log('Setting up analyze route');

router.post('/', async (req, res) => {
    console.log('Analyze route handler executed');
    try {
        // Check if files are present in the request
        if (!req.files || !req.files['code'] || !req.files['testCases']) {
            throw new Error('Files are missing in the request');
        }

        const codeFile = req.files['code'][0];
        const testCasesFile = req.files['testCases'][0];

        console.log('Code File:', codeFile); // Log the code file object
        console.log('Test Cases File:', testCasesFile); // Log the test cases file object

        const code = codeFile.buffer.toString('utf-8');
        const testCases = testCasesFile.buffer.toString('utf-8');

        console.log('Code:', code); // Log the code content
        console.log('Test Cases:', testCases); // Log the test cases content

        // Get suggestions from Code Llama
        const suggestions = await analyzeCodeWithReplicate(code, testCases);

        console.log('Suggestions:', suggestions); // Log the suggestions from Code Llama

        // Extract the corrected code from the suggestions
        const correctedCode = suggestions.split('\n').slice(1).join('\n'); // Assuming the corrected code starts after the first line

        console.log('Corrected Code:', correctedCode); // Log the extracted corrected code

        // Create the ZIP file with the corrected code
        const zipBuffer = await createZip(correctedCode);

        res.set('Content-Type', 'application/zip');
        res.set('Content-Disposition', 'attachment; filename="corrected_code.zip"');
        res.send(zipBuffer);
    } catch (error) {
        console.error('Error analyzing code:', error.message);
        res.status(500).send(`Error analyzing code: ${error.message}`);
    }
});

module.exports = router;