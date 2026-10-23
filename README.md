# Variant Matrix Forge
Live page: https://aamirtechs.github.io/variant-matrix-forge/

Enter sizes, colours and materials once and download every variant combination as a ready-to-import Shopify or WooCommerce CSV with SKUs and prices. It solves the hand-work of doing this job row by row in a spreadsheet, entirely in the browser.

## Features
- Up to 3 option axes with value lists (size, colour, material and more)
- Exclusion rules for impossible combinations
- SKU pattern builder using prefix plus option codes
- Base price plus per-option price deltas and inventory defaults
- Export ready-to-import Shopify and WooCommerce variant CSV files

## How it works
Provide the input in the tool card, run it, review the preview, then download the result. All processing happens locally in your browser using the logic in src/logic.js. No server is involved at any step.

## Privacy
Runs 100% in your browser. Your files never leave this device, nothing is uploaded,
and there is no tracking.

## Development
Core logic lives in `src/logic.js` and is shared by the page and the tests.
Run the tests with `npm test`.

## License
MIT, Copyright 2026 Amir Hussain.
