<div align=center>
  <img src="../src/assets/img/read-me-crescent.svg" width=50% style="max-height: 300px;">
</div>

<div align="center">

  # [CzarEc Portfolio](https://czar-ec.github.io/)

</div>

<div align="center" style="display: flex; flex-direction: row;justify-content: space-evenly;">
  <div>

  [![Deploy to LIVE](https://github.com/Czar-Ec/Czar-Ec.github.io/actions/workflows/deploy-to-live.yml/badge.svg)](https://github.com/Czar-Ec/Czar-Ec.github.io/actions/workflows/deploy-to-live.yml)

  </div>

  <div>

  [![Coverage](https://raw.githubusercontent.com/Czar-Ec/Czar-Ec.github.io/main/badges/coverage.svg)

  </div>

  <div>
  
  [![MIT License](https://img.shields.io/github/license/czar-ec/czar-ec.github.io)](https://img.shields.io/github/license/czar-ec/czar-ec.github.io)

  </div>
</div>

<div align="center" style="padding: 30px 0">

##### Welcome to the source files of my portfolio website.

The website was initially created as a way for possible employers to judge whether or not I am a perfect fit for the company, however it now functions as a feature testing environment i.e. for DevOps, End to End Testing tools and various Engineering Quality Assurance practices (and/or even more tools).

There are a lot of planned future additions to this website, listed underneath the [projects](https://github.com/users/Czar-Ec/projects/1) tab.

If you have any ideas of features I could add or to report any bugs (because _can confirm am big noob_), then feel free to raise an issue

</div>


<a align="center" style="
cursor: pointer;
border: none;
background-color: #660000;
color: #fff;
display: flex;
justify-content: center;
align-self: center;
font-size: 16px;
padding: 10px 30px;
box-sizing: border-box;
width: 100%;
border-radius: 10px" href="https://czar-ec.github.io">
  <span>Open the portfolio</span>
</a>

# Running the website locally

## Prerequisites
- Node.js (LTS 18.x — tested with 22.12.0)
- npm (bundled with Node) or Yarn (classic v1 — this project uses Yarn v1 in CI; example: 1.22.22)
- Angular CLI (global) — compatible with @angular/cli@16 (project uses ^20.3.0)
- Git (to clone the repository)

### Recommended
- NVM [Node Version Manager](https://github.com/coreybutler/nvm-windows) - easier to switch between Node versions

Quick setup:

```bash
# Install Node (use your preferred manager; example with nvm):
nvm install 22.12.0
nvm use 22.12.0

# Or on Windows download installer from https://nodejs.org

# Install Angular CLI globally
npm install -g @angular/cli@20

# Install dependencies (use either npm or yarn):
npm install
# or (to use yarn: `npm install -g yarn`)
yarn install

# Start dev server (opens at http://localhost:8080):
npm run start
# or
yarn start
```

Notes:

- The project was developed and tested with Angular 20 and TypeScript ~5.9.2 (see `package.json`).

## Notes on how this website is built
- This repository is where the main website is held
- The develop branch is built and is then committed to [cd-portfolio](https://github.com/Czar-Ec/cd-portfolio)
  - The cd-portfolio shows the currently developed website i.e. Work In Progress
  - This can be viewed in https://czar-ec.github.io/cd-portfolio/