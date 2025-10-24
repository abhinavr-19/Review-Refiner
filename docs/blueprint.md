# **App Name**: ReviewRefiner

## Core Features:

- Text Input: A textarea component allowing users to enter their review text.
- Review Polishing via Gemini Pro: Send the raw user-provided text to Google's Gemini Pro model, prompting the model to serve as an expert writing assistant. The LLM tool will correct grammar, fix spelling, and improve clarity, while preserving the original sentiment. The response includes the polished text, removing any conversational filler from the LLM.
- API Endpoint: A secure `/api/polishReview` endpoint to receive review text and return polished text.
- Display Polished Review: Display the AI-polished review in a styled text output area.
- Copy to Clipboard: A button allowing users to copy the polished review text to their clipboard.
- Loading State: Visual feedback (loading spinner) while the review is being processed by the AI.

## Style Guidelines:

- Background color: Dark grayish-blue (#282A3A) for a modern, subdued feel.
- Primary color: Vibrant violet (#BE64FF) to stand out against the dark background and convey technological sophistication.
- Accent color: Soft purple (#D0A8F7) for interactive elements and highlights.
- Body and headline font: 'Inter', a sans-serif font, will be used for both body text and headlines for a clean, modern look.
- Use simple, minimalist icons for actions like 'Copy to Clipboard'.
- The layout should be clean and centered, with clear sections for input and output.
- Use a subtle loading animation to indicate processing.