# Sanzo Color

A toolbox designed to return colors and color combinations inspired by the work of Sanzo Wada, specifically from "A Dictionary of Color Combinations vol. 2," published by Seigensha.

## Features

- Access to 72 seasonal color combinations (3-7 colors each)
- 161 examples of color combinations reflecting early Showa Era design aesthetics
- Color conversion utilities (CMYK to RGB)
- Seasonal color palette access
- Detailed color information including names and CMYK values

## Installation

```bash
npm install sanzo-color
```

## Usage

### Basic Usage

```javascript
const sanzoColor = require('sanzo-color');

// Get a specific color combination
const combination = sanzoColor.getCombination(1);

// Get seasonal colors
const januaryColors = sanzoColor.january();
const februaryColors = sanzoColor.february();
// ... and so on for each month

// Convert CMYK to RGB
const rgb = sanzoColor.CMYK2RGB([0, 13, 8, 0]);
```

### Available Methods

- `getCombination(index)`: Get a specific color combination by index
- `CMYK2RGB(CMYK)`: Convert CMYK values to RGB
- Monthly color palettes: `january()`, `february()`, etc.
- Color combination creation utilities

## Color Information

The module includes detailed color information with:
- Color names
- CMYK values
- RGB conversions
- Combination indices

## License

MIT

## Acknowledgments

This module is based on the work of Sanzo Wada and "A Dictionary of Color Combinations vol. 2," published by Seigensha. The author of this module asserts no authorship or ownership of the color combinations or names contained within.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find any issues, please report them on the [GitHub repository](https://github.com/wassilyevich/sanzo-color/issues).