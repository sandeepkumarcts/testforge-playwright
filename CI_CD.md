1. Title
    CI/CD Pipeline for Playwright Framework

2,Overview
    This project uses GitHub Actions for Continuous Integration (CI).
    Every push or pull request triggers automated Playwright test execution.

3. CI TOOL USED
    CI/CD Tool: GitHub Actions


4. WHEN PIPELINE RUNS
    Pipeline triggers on:
    - Push to main branch
    - Pull requests to main branch


5. PIPELINE STEPS
    CI Pipeline executes the following steps:
    1. Checkout code from repository
    2. Setup Node.js environment
    3. Install dependencies (npm install)
    4. Install Playwright browsers
    5. Run automated tests
    6. Generate test reports (Allure / HTML)

6. GITHUB ACTIONS WORKFLOW FILE   
    Workflow file location:
      .github/workflows/playwright.yml


7. SAMPLE WORKFLOW EXPLANATION
    Example workflow steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - run: npm install
    - run: npx playwright install --with-deps
    - run: npx playwright test



8.REPORTING
    After execution:
    - Test results are generated
    - HTML or Allure reports are created
    - Artifacts can be downloaded from GitHub Actions

9. OPTIONAL DOCKER INTEGRATION
    Benefits of CI/CD integration:
    - Automated test execution
    - Early bug detection
    - Faster feedback loop
    - No manual execution required

10. BENEFITS
 Benefits of CI/CD integration:
- Automated test execution
- Early bug detection
- Faster feedback loop
- No manual execution required

AUTHOR
Created by: Sandeep Kumar
