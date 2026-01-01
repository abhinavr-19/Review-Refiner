# ✍️ Review Refiner

A web-based tool that uses AI to polish user reviews, correcting grammar, fixing spelling, and improving overall clarity in a single click.

### ✨ [Live Demo Link](https://studio--studio-4339710488-511c4.us-central1.hosted.app/)

### Screenshot
<img width="1890" height="900" alt="Screenshot 2025-10-26 122129" src="https://github.com/user-attachments/assets/6a3c61ef-bb53-401f-bb64-5d5d153b2435" />

## 🚀 Features

* **AI-Powered Polishing:** Leverages AI to automatically correct grammar, fix spelling, and enhance the clarity of your text.
* **One-Click Simplicity:** A minimal interface where you paste your review, click one button, and get a polished result.
* **Rating Integration:** (Optional) Allows users to add a star rating to accompany their review text.
* **Instant Feedback:** Get the refined review generated in real-time in the "Polished Review" box.
* **Responsive Design:** A clean and functional UI that works beautifully on both desktop and mobile devices.

## 🛠️ Tech Stack

This project was built using:

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **StylING:** [Tailwind CSS](https://tailwindcss.com/)
* **AI Service:** Google Gemini API
* **Hosting:** Firebase Hosting

## ⚙️ How to Run Locally

To run this project on your local machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/abhinavr-19/Review-Refiner.git](https://github.com/abhinavr-19/Review-Refiner.git)
    ```

2.  Navigate into the project directory:
    ```bash
    cd Review-Refiner
    ```

3.  Install the required dependencies:
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Important:** You must get your own Google Gemini API key. Create a file named `.env.local` in the root of the project and add your key to it:
    ```
    NEXT_PUBLIC_GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

5.  Run the development server:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```

6.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 👤 Author

* **Abhinav R**
    * Portfolio: <https://abhinavr.work>
    * GitHub: [@abhinavr-19](https://github.com/abhinavr-19)
