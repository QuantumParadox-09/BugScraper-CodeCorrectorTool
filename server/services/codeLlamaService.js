const axios = require('axios');

/**
 * Sends a request to the Replicate API to analyze and correct the code.
 * @param {string} code - The code to be analyzed and corrected.
 * @param {string} testCases - The test cases to verify the correctness of the code.
 * @returns {Promise<string>} - The corrected code.
 */
async function analyzeCodeWithReplicate(code, testCases) {
    try {
        const response = await axios.post('https://api.replicate.com/v1/predictions', {
            version: 'a279116fe47a0f65701a8817188601e2fe8f4b9e04a518789655ea7b995851bf',
            input: {
                prompt: `You are an experienced coder. Please analyze and correct the following code, ensuring it adheres to best practices and passes the provided test cases. If there are logical errors, fix them and provide the corrected version. Include comments explaining your changes:\n\n${code}\n\nTest Cases:\n\n${testCases}`,
                max_tokens: 2000,
                temperature: 0.8
            }
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.REPLICATE_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data && response.data.choices && response.data.choices[0].text) {
            return response.data.choices[0].text;
        } else {
            throw new Error('No correction received from Code Llama.');
        }
    } catch (error) {
        console.error('Error analyzing code with Replicate:', error);
        throw error;
    }
}

/**
 * Corrects the code using the suggestions provided by the Code Llama API.
 * @param {string} code - The code to be corrected.
 * @param {string} testCases - The test cases to verify the correctness of the code.
 * @returns {Promise<string>} - The corrected code.
 */
async function analyzeCodeWithReplicate(code, testCases) {
    try {
        console.log('Request to Replicate API:', {
            version: 'a279116fe47a0f65701a8817188601e2fe8f4b9e04a518789655ea7b995851bf',
            input: {
                prompt: `You are an experienced coder. Please analyze and correct the following code, ensuring it adheres to best practices and passes the provided test cases. If there are logical errors, fix them and provide the corrected version. Include comments explaining your changes:\n\n${code}\n\nTest Cases:\n\n${testCases}`,
                max_tokens: 2000,
                temperature: 0.8
            }
        });

        const response = await axios.post('https://api.replicate.com/v1/predictions', {
            version: 'a279116fe47a0f65701a8817188601e2fe8f4b9e04a518789655ea7b995851bf',
            input: {
                prompt: `You are an experienced coder. Please analyze and correct the following code, ensuring it adheres to best practices and passes the provided test cases. If there are logical errors, fix them and provide the corrected version. Include comments explaining your changes:\n\n${code}\n\nTest Cases:\n\n${testCases}`,
                max_tokens: 2000,
                temperature: 0.8
            }
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.REPLICATE_API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response from Replicate API:', response.data);

        if (response.data && response.data.choices && response.data.choices[0].text) {
            return response.data.choices[0].text;
        } else {
            throw new Error('No correction received from Code Llama.');
        }
    } catch (error) {
        console.error('Error analyzing code with Replicate:', error);
        throw error;
    }
}
