Project Title:
# Playwright UI Automation Framework (TypeScript)

Description :
This is a scalable UI automation framework built using Playwright, TypeScript, and Docker.
It supports Page Object Model, API testing, CI/CD integration, and Allure reporting.

Tech Stack:
- Playwright
- TypeScript
- Node.js
- Docker
- GitHub Actions
- Allure Reports

Project Structure:
  tests/
  pages/
  fixtures/
  utils/
  Dockerfile
  playwright.config.ts

How to Install:
 npm install


Run Tests:
   npx playwright test

Run by Tag:
   npx playwright test --grep "@smoke"

Run in Docker:
   docker build -t playwright-tests .
   docker run playwright-tests

CI/CD
 GitHub Actions is used to run tests automatically on push/pull request.

 Author:
  Created by: Sandeep Kumar


Future Improvements
- Kubernetes execution
- Parallel execution tuning
- API + UI full hybrid framework
- AI-based test generation
