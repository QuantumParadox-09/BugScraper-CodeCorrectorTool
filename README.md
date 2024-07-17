# BugScraper - Code Corrector Tool
--Powered by CodeLlama-70-hb


BugScraper is a powerful tool designed to help developers eliminate errors in their code and recover the correct version. Whether you're dealing with syntax issues, logical bugs, or missing test cases, BugScraper has your back.

## Features

- **Error Detection**: BugScraper scans your code files and identifies common errors, such as syntax mistakes, undefined variables, and missing imports.
  
- **Code Correction**: Once errors are detected, BugScraper suggests precise corrections, ensuring your code adheres to best practices.
  
- **Test Case Recovery**: Lost your test cases? No worries! BugScraper extracts test cases from your error file and integrates them back into your corrected code.

- **Powered by: the latest, versatile and reliable LLM : CodeLlama-70-hb
  
- **Jira Integration**: New feature! Connect BugScraper to your Jira project:
  - When BugScraper detects an error, it automatically creates a Jira issue.
  - The issue includes details about the error, suggested corrections, and affected code files.
  - Developers can track progress, assign tasks, and link back to the corrected code directly from Jira.
    

## Getting Started

1. Install BugScraper globally:
   ```bash
   npm install -g bugscraper
   ```

2. Analyze your code:
   ```bash
   bugscraper analyze path/to/your/code
   ```

3. Review the suggested corrections and apply them to your code.

## Example

```python
# Before BugScraper:
def calculate_sum(a, b):
    return a + b

# After BugScraper:
def calculate_sum(a: int, b: int) -> int:
    return a + b
```

## Contributing

Found a bug? Want to add a feature? Contributions are welcome! Fork this repository, make your changes, and submit a pull request.

## License

BugScraper is released under the [MIT License](LICENSE).

---
