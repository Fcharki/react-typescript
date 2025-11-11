# 📚 Library Management App

A simple and efficient **Library Management App** built using **React** and **TypeScript**. The application provides full **CRUD operations** for managing books and implements **pagination** using `react-paginate`. State management is handled with **useReducer**, and **Tailwind CSS** is used for a visually appealing and smooth user experience.

## ⚡ Features

- ➕ **Add, Update, Delete, and View Books**
- 🔢 **Pagination** with `react-paginate` for optimized performance & user experience
- 🔄 **State management** using `useReducer` for predictable state updates
- 🎨 **Tailwind CSS** for modern UI styling
- 📱 **Responsive Design** for mobile and desktop

## 🛠️ Tech Stack

- **React** (TypeScript)
- **useReducer** (State Management)
- **react-paginate** (Pagination)
- **Tailwind CSS** (Styling)

## 📥 Installation & Setup

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/Fcharki/react-typescript.git
   cd react-typescript
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Compile assets & Run the App:**
   ```sh
   npm run dev
   ```

## Project Structure
```
/react-typescript
│── src
│   ├── components  # Reusable UI components
│   ├── lib/types   # TypeScript types
│   ├── reducer     # Reducer for state management
│   ├── styles      # Tailwind configurations
│   ├── App.tsx     # Main App component
│   ├── main.tsx    # Entry point
│── public
│── package.json
│── tailwind.config.js
│── README.md
│── vite.config.ts
```

## Dependencies
```json
{
  "dependencies": {
   "@tailwindcss/vite": "^4.0.14",
    "bootstrap": "^5.3.3",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-dom": "^19.0.0",
    "react-icons": "^4.7.1",
    "react-paginate": "^8.3.0",
    "tailwindcss": "^4.0.14"
  }
}
```

## 📷 App Screens 

To provide a better understanding of the app, here are key screenshots and demo videos.

### 🏠 Main App Views

Below are some images showcasing different sections of the App:

#### 📌 Main app View
![Main Screenshot](/src/assets/demo/app-main.png)

#### 📌 Books Listing 
![Books Listing Screenshot](/src/assets/demo/listing.png)

#### 📌 Book edit modal
![Book Details Screenshot](/src/assets/demo/edit-book-data.png)

## 🚀 Live Demo

🔗 **Try the App Here:** [Live Demo](https://fbooks-lib.netlify.app/)

---
Developed with ❤️ using React + TypeScript 🚀


