# Cash Cleaner Simulator Website

This is a responsive landing page for the Cash Cleaner Simulator, built with AMP (Accelerated Mobile Pages) for optimal performance and SEO.

## Features

- Fully responsive design works across desktop, tablet, and mobile devices
- Built with AMP for fast loading and optimal performance
- SEO optimized with proper meta tags and structured content
- Embedded YouTube video demonstration
- Interactive sections including features, testimonials, and FAQ

## Technologies Used

- AMP HTML
- CSS3 with custom properties (variables)
- AMP components:
  - amp-youtube (for video embedding)
  - amp-accordion (for FAQ section)
  - amp-form (for potential form interactions)

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the site

For local development with AMP validation, it's recommended to use the AMP validator:
```
npm install -g amphtml-validator
amphtml-validator index.html
```

## Project Structure

```
cash-cleaner-simulator/
├── index.html        # Main AMP HTML file
├── styles.css        # External stylesheet (for reference only, actual styles in index.html)
├── script.js         # External JavaScript (for reference only, not used in AMP)
└── README.md         # Project documentation
```

## AMP Limitations and Solutions

AMP has certain restrictions to ensure fast performance:
- Custom JavaScript is not allowed (using AMP components instead)
- Stylesheets must be inlined and under 75KB
- Images must include dimensions and use `amp-img` instead of standard `img` tags

This project adheres to all AMP requirements while maintaining a modern, interactive design.

## SEO Optimization

This landing page includes:
- Proper meta tags for description and keywords
- Semantic HTML structure with appropriate heading levels
- Optimized content with proper keyword density
- Fast loading times (via AMP) which positively impacts SEO

## License

MIT 