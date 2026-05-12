# Keigan Cullen — Personal Portfolio

Personal portfolio site for Keigan Cullen: computational physicist, robotics engineer, energy healer, and entrepreneur.

**Live site:** https://kcullen3.github.io/personal-website

---

## Tech Stack

- React 17 (Create React App)
- React Router v6
- React Bootstrap + Bootstrap 5
- EmailJS (contact form)
- react-pdf (PDF viewer)
- react-tsparticles (particle background)
- Deployed via gh-pages

---

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/kcullen3/personal-website.git
cd personal-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials in .env

# 4. Start the dev server
npm start
# Opens at http://localhost:3000
```

---

## Deployment to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes the `/build` folder to the `gh-pages` branch via the `gh-pages` package. The live site updates automatically.

> **Note:** Your `.env` file must be present locally when running `npm run deploy` — the EmailJS environment variables get baked into the build at that time.

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

| Variable | Description |
|----------|-------------|
| `REACT_APP_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

---

*This is a personal portfolio site. Original template by [Soumyajit Behera](https://github.com/soumyajit4419/Portfolio), heavily customized.*
