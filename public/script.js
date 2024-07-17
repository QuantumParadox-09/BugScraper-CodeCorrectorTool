document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const codeFile = document.getElementById('code').files[0];
    const testCasesFile = document.getElementById('testCases').files[0];

  // Check if both files are selected
if (!codeFile || !testCasesFile) {
    alert('Please select both files: code file and test cases file.');
    return;
}

const formData = new FormData();
formData.append('code', codeFile);
formData.append('testCases', testCasesFile);

try {
    const response = await fetch('/analyze-code', {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'corrected_code.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert('Code analysis and correction completed. Download started.');
    } else {
        alert('Error analyzing code');
    }
} catch (error) {
    console.error('Error uploading files:', error);
    alert('Error uploading files');
}
});
