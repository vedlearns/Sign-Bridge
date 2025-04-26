# Sign Bridge

**Sign Bridge** is a real-time Sign Language Translation web application.  
It uses **MediaPipe**, **TensorFlow.js**, **Handpose**, and **Fingerpose** to detect and translate hand gestures into text, helping bridge communication between signers and non-signers.

---

## 🚀 Features

- Real-time hand sign detection via webcam
- Translates American Sign Language (ASL) alphabet (A–Z) to text
- High-accuracy gesture recognition
- Clean and intuitive frontend built with **React** (Vite)
- Lightweight and fast performance (TensorFlow.js)
- Easy deployment (Firebase / Netlify compatible)

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite)
- **Hand Tracking:** @tensorflow-models/handpose
- **Gesture Recognition:** Fingerpose
- **Webcam Input:** react-webcam
- **Deployment:** Netlify 

---

## 📷 Link 

[> _Sign Bridge!_  ]((https://signbridgebyved.netlify.app/))

---

## ⚙️ Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vedlearns/Sign-Bridge.git
   cd sign-bridge
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📚 How It Works

- **Handpose** detects 21 hand landmarks from webcam input.
- **Fingerpose** classifies these landmarks into known hand signs (A–Z).
- Recognized signs are displayed as live text on the screen.
- The app constantly updates in real-time based on hand movement.

---

## ✨ Future Enhancements

- Support for words and sentence formation
- Add support for dynamic gestures (not just static alphabet signs)
- Multilingual sign language support
- Voice output (Text-to-Speech integration)

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an Issue or submit a Pull Request.

---

## 💬 Contact

For queries, suggestions, or collaborations:  
📧 vedankxb@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/vedank-singh)
