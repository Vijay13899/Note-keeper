# Note Keeper

## Description

**Note Keeper** is a sleek and intuitive note-taking application built with React, TypeScript, and Vite. The app provides a clean and organized interface to manage your notes efficiently. It is designed for users who want a straightforward way to create, categorize, and persist notes while exploring markdown support for rich-text formatting.

---

## Features

- **Create Notes:** Quickly create notes with a title and body.
- **Markdown Support:** Write and format your notes using markdown syntax.
- **Tag Management:**
  - Categorize notes using tags.
  - Add, edit, and remove tags dynamically.
- **Search and Filter:** Easily find notes by filtering them based on tags.
- **Local Storage Persistence:**
  - All notes and tags are saved locally.
  - Retain your data even after refreshing or closing the app.
- **Bootstrap-Styled UI:** A modern and responsive UI designed with Bootstrap for consistent styling.

---

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Vijay13899/Note-keeper.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Note-keeper
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Technologies Used

- **React:** Front-end library for building the user interface.
- **TypeScript:** Ensures type safety and better development experience.
- **Vite:** Fast build tool for React applications.
- **Bootstrap:** Provides responsive and consistent styling for the UI.
- **React-Markdown:** For rendering markdown in the notes.
- **UUID:** For generating unique identifiers for tags.

---

## Project Structure

├── src
│   ├── App.tsx          # Main application, handling routes
│   ├── NoteForm.tsx     # Form for creating and editing notes
│   ├── NoteList.tsx     # Displays list of notes
│   ├── Note.tsx         # Handles tag management
│   ├── NewNote.tsx      # Handles tag management
│   ├── NoteLayout.tsx   # Handles tag management
│   ├── EditNote.tsx   # Handles tag management
│   └── useLocalStorage.ts # Custom hook for persisting data in local storage
```

---

## How to Use

1. **Create a Note:**
   - Click on the "Add Note" button.
   - Fill in the title and body of the note using the markdown editor.
   - Assign tags to categorize the note.

2. **Manage Tags:**
   - Use the "Edit Tags" button to view, edit, or delete tags.

3. **Search and Filter Notes:**
   - Use the search bar or filter notes by selecting specific tags.

---

## Screenshots

### Home Page
![Home Page](#)

### Create Note
![Create Note](#)

### Tag Management
![Tag Management](#)

---

## Future Enhancements

- Implement dark mode for improved user experience.
- Add functionality to export notes as downloadable PDF files.
- Enable cloud sync for cross-device accessibility.
- Enhance search functionality with fuzzy matching.

---

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React-Bootstrap](https://react-bootstrap.github.io/) for seamless integration of Bootstrap with React.
- [React-Markdown](https://github.com/remarkjs/react-markdown) for effortless markdown rendering.
- [UUID](https://github.com/uuidjs/uuid) for unique identifier generation.

---

Thank you for checking out the Note Keeper project! 🚀
