const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

/**
 * Save a file to the specified directory.
 * @param {Buffer} fileBuffer - The buffer containing the file data.
 * @param {string} filename - The name of the file.
 * @param {string} directory - The directory where the file should be saved.
 * @returns {Promise<string>} - The path to the saved file.
 */
function saveFile(fileBuffer, filename, directory) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(directory, filename);
        fs.writeFile(filePath, fileBuffer, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(filePath);
        });
    });
}

/**
 * Delete a file from the specified path.
 * @param {string} filePath - The path to the file to be deleted.
 * @returns {Promise<void>}
 */
function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

/**
 * Create a ZIP file with the corrected code.
 * @param {string} correctedCode - The corrected code as a string.
 * @returns {Promise<Buffer>} - The generated ZIP file as a buffer.
 */
async function createZip(correctedCode) {
    const zip = new JSZip();
    zip.file('corrected_code.txt', correctedCode);
    return await zip.generateAsync({ type: 'nodebuffer' });
}

module.exports = {
    saveFile,
    deleteFile,
    createZip
};
