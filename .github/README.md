<div align=center>
  <img src="../src/assets/img/read-me-crescent.svg" width=50% style="max-height: 300px;">
</div>

<div align="center">

  # [CzarEc Portfolio]($$PREVIEW_URL$$)

</div>

<div align="center" style="display: flex; flex-direction: row;justify-content: space-evenly;">
  <div>

  [![Build Status]($$BUILD_STATUS_URL$$)]($$BUILD_STATUS_URL$$)

  </div>

  <div>

  [![codecov](https://codecov.io/gh/Czar-Ec/Czar-Ec.github.io/branch/develop/graph/badge.svg)](https://codecov.io/gh/Czar-Ec/Czar-Ec.github.io)

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

- Node.js (LTS 18.x — tested with 18.20.8)
- npm (bundled with Node) or Yarn (classic v1 — this project uses Yarn v1 in CI; example: 1.22.22)
- Angular CLI (global) — compatible with @angular/cli@16 (project uses ^16.2.8)
- Git (to clone the repository)
- Google Chrome (recommended for running Cypress end-to-end tests)

Quick setup (macOS / Linux / Windows WSL with bash):

```bash
# Install Node (use your preferred manager; example with nvm):
nvm install 18
nvm use 18

# Or on Windows download installer from https://nodejs.org

# Install Angular CLI globally (optional but convenient):
npm install -g @angular/cli@16

# Install dependencies (use either npm or yarn):
npm install
# or
yarn install

# Start dev server (opens at http://localhost:8080):
npm run start
# or
yarn start
```

Notes:

- The project was developed and tested with Angular 16 and TypeScript ~4.9.3 (see `package.json`).
- If you plan to run the CI/E2E flows, having Chrome installed and a global Angular CLI matching the project's major version (v16) helps avoid tooling mismatches.
- If you prefer Yarn in CI locally, Yarn Classic (v1.x) is the version referenced in CI configurations.