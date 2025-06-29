# Learning Playwright 🚀

---

## Overview

This project is designed to help you learn Playwright from the ground up—covering setup, test writing, debugging, and CI integration. Each code sample demonstrates a specific Playwright feature or scenario.

---

## Requirements

Make sure you have the following installed:

- Node.js (v14 or newer)
- npm (comes with Node.js)
- Git (if cloning the repo)

---

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/amanpreetcs/Learning-playwright.git
cd Learning-playwright
npm install
npx playwright install
```

---

### Kafka Integration

You can run Kafka locally using Docker.

🔌 Start Kafka Locally with Docker

```bash
docker-compose -f kafka/docker-compose.yml up -d
```

## Usage

1. Start Kafka with Docker Compose.
2. Run `node kafka/consumer.js` to start the consumer.
3. Run `node kafka/producer.js` to send messages.

## Ensure Docker is running on your system before executing the above command.

## Running Tests

### 🧪 Run all tests (headless)

```bash
npx playwright test
```

### 🧭 Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

---

## Writing Tests

Create `.spec.ts` files under `tests/`. Here's an example:

```ts
import { test, expect } from "@playwright/test";

test("visits example.com and checks title", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});
```

---

## Debugging & Reporting

- **Playwright Inspector** for step-through debugging.
- Screenshots/videos can be configured in `playwright.config.ts`.
- Generate HTML test reports:

```bash
npx playwright show-report
```

---

## Contributing

Contributions welcome! Feel free to:

- Add more test examples
- Improve documentation
- Open issues or pull requests

---

## License

This project is licensed under the [MIT License](LICENSE).
