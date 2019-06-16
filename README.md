# versatile-chart-builder
This library allows you to pass arrays through functions and get maps, charts, and other data visualizations.

## How to get the data ready
The data can come from a Google Sheet. Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

The data arrays are stored in main.js.

## How the code works
The main.js file includes the arrays, and passes them as arguments into functions that will render the graphics in divs. The functions themselves are declared in the library.js file.

Those functions take a handful of arguments, including the name of the div you want to append these charts, the data array to use, etc.