# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Introduction:
Welcome to the Interactive Whiteboard application! This web-based tool allows users to draw and collaborate on a virtual canvas using a variety of drawing tools, including a pen and an eraser. The application is built using React and React Konva.

## Getting Started:
To run the Interactive Whiteboard application locally, follow these steps:

1. Clone the repository to your local machine, place the url accordingly:
```
git clone <repository-url>
```
2. Navigate to the project directory:
```
cd interactive-whiteboard
```
3. Install the required dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
The application should now be accessible at http://localhost:5173 in your web browser.

## Usage:
1. The main entry point of the application is App.jsx. Open this file to understand the overall structure of the application.

2. The drawing canvas is implemented in Whiteboard.jsx, where users can switch between the pen and eraser tools. The eraser tool allows users to adjust the thickness of the eraser.

3. The canvas rendering is managed by the Canvas.jsx component, which utilizes the React Konva library for efficient rendering of shapes.

## Components

### App.jsx
The root component of the application. Imports the Whiteboard component.

### Whiteboard.jsx
Manages the user interface for the interactive whiteboard. Allows users to switch between the pen and eraser tools and adjust the eraser thickness.

### Canvas.jsx
Implements the drawing canvas using the React Konva library. Handles user interactions such as mouse down, mouse move, and mouse up events to create a responsive drawing experience.

## Features
Switch between pen and eraser tools.
Adjust eraser thickness for precise erasing.
Responsive drawing canvas.

## Technologies Used
React
React Konva
CSS
