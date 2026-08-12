# Amoha - Eye Disease Recognition

Welcome to the amoha project! This README provides an overview of the project, setup instructions, and other relevant details.

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
- [Website](https://amoha.netlify.app/)

## About

**Amoha** is an AI website to scan eyes that can detect Diabetic Retinopathy, Macular Edema, Age-Related Macular Degeneration, Glaucoma and Cataract.

## Features

- Eye Scan
- Disease
- Train
- Contact

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
   npm install
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
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   │   └── img/                     # Image files
│   ├── src/
│   │   ├── components/
│   │   │   ├── icons/               # Icon components
│   │   │   ├── pages/               # Page components
│   │   │   │   ├── Home.jsx         # Landing page
│   │   │   │   ├── LoginPage.jsx    # Login page
│   │   │   │   ├── RegisterPage.jsx # Registration page
│   │   │   │   └── DashboardPage.jsx # User dashboard
│   │   │   ├── sections/            # Section components
│   │   │   │   ├── Hero.jsx         # Hero section
│   │   │   │   ├── About.jsx        # About section
│   │   │   │   ├── Disease.jsx      # Disease information
│   │   │   │   ├── Train.jsx       # Training process
│   │   │   │   ├── Feedback.jsx     # Testimonials
│   │   │   │   ├── Contact.jsx     # Contact form
│   │   │   │   └── Footer.jsx      # Footer
│   │   │   └── ui/                  # UI components
│   │   │       ├── button.jsx
│   │   │       └── card.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx      # Authentication context
│   │   ├── lib/
│   │   │   └── utils.js             # Utility functions
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Global styles
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Contributors

<p align="center">
  <a href="https://github.com/woabu0/amoha/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=woabu0/amoha" alt="Contributors" />
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
