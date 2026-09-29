# Meme Generator

A React-based meme generator that allows users to browse popular meme templates, add text to a selected meme, and download the generated meme as a PNG image.

## Features

* Browse meme templates fetched from the Imgflip API
* Display meme templates using reusable React components
* Select a meme template for editing
* Add text overlays to memes
* Generate the edited meme as a PNG image
* Download the generated meme
* Responsive layout for browsing meme templates

## Tech Stack

* **Frontend:** React, JavaScript
* **Build Tool:** Vite
* **Routing:** React Router
* **UI:** React Bootstrap
* **API:** Imgflip Meme API
* **Image Generation:** html-to-image
* **Styling:** CSS / Bootstrap

## Application Flow

1. The application fetches available meme templates from the Imgflip API.
2. Templates are displayed as reusable meme cards on the home page.
3. The user selects a meme template.
4. The selected meme opens in the editor.
5. The user can add text overlays to the meme.
6. The edited meme is converted to a PNG image.
7. The generated meme can be downloaded locally.

## Project Structure

```text
src/
├── api/
│   └── meme.js
├── Components/
│   ├── Card.jsx
│   └── Text.jsx
├── Pages/
│   ├── Home.jsx
│   └── Edit.jsx
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Meme-Generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, typically:

```text
http://localhost:5173
```

## API

This project uses the Imgflip API to retrieve meme templates:

```text
https://api.imgflip.com/get_memes
```

No API key is required for the current implementation.

## Learning Focus

This project demonstrates practical React concepts including:

* `useState`
* `useEffect`
* `useRef`
* Reusable components
* React Router
* Fetching data from an external API
* Rendering dynamic lists
* Client-side image generation
* Browser-based file downloads

## License

This project is intended as a personal portfolio and learning project.

```

Replace the current README with that.

**Don't initialize Git yet.** Once you've saved the README, tell me **"done"**, and we'll do a quick check of the project before putting it on GitHub.
```
