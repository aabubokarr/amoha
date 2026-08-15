# Amoha - Landing Page

![Amoha](amoha.png)

Welcome to the **Amoha** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/amoha)
- [Website](https://aabubokarr.github.io/amoha/)

## About

**Amoha** is an AI-powered eye screening platform designed to analyze retinal images and help detect common eye conditions, including Diabetic Retinopathy, Macular Edema, Age-Related Macular Degeneration (AMD), Glaucoma, and Cataract. Amoha aims to make early eye disease detection faster and easier.

## Features

- Modern UI/UX
- Responsive Design
- Interactive Animation
- Contact Form

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/amoha.git
   ```
2. Navigate to the project's frontend directory:
   ```bash
   cd amoha
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```  
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ``` 

## Structure

```
amoha/
├── .github/
│   └── workflows/                 # GitHub Actions workflows
├── node_modules/                  # Installed npm dependencies
├── public/                        # Static public assets
├── src/                           # Main React application source
│   ├── components/                # Application components and pages
│   │   ├── Ai/                    # AI-related components
│   │   ├── BookPage/              # Book page components
│   │   ├── Contact/               # Contact page/components
│   │   ├── Diseases/              # Disease-related components
│   │   ├── Feedback/              # Feedback components
│   │   ├── Footer/                # Footer components
│   │   ├── Home/                  # Home page components
│   │   ├── Input/                 # Input/form components
│   │   ├── Login/                 # Login/authentication components
│   │   ├── Pages/                 # General application pages
│   │   └── Train/                 # Training-related components
│   ├── fonts/                     # Custom font files
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # Global CSS and Tailwind styles
│   └── main.jsx                   # React application entry point
├── .gitignore                     # Files excluded from Git
├── index.html                     # Main HTML entry point
├── LICENSE                        # Project license
├── package-lock.json              # Locked dependency versions
├── package.json                   # Project metadata and dependencies
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── tailwind.config.js             # Tailwind CSS configuration
└── vite.config.js                 # Vite build configuration
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/amoha/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/amoha" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
