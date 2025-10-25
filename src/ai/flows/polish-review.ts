// src/ai/flows/polish-review.ts
'use server';
/**
 * @fileOverview A review polishing AI agent.
 *
 * - polishReview - A function that handles the review polishing process.
 * - PolishReviewInput - The input type for the polishReview function.
 * - PolishReviewOutput - The return type for the polishReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PolishReviewInputSchema = z.object({
  text: z.string().describe('The raw review text to be polished.'),
});
export type PolishReviewInput = z.infer<typeof PolishReviewInputSchema>;

const PolishReviewOutputSchema = z.object({
  polishedText: z.string().describe('The polished review text.'),
});
export type PolishReviewOutput = z.infer<typeof PolishReviewOutputSchema>;

export async function polishReview(input: PolishReviewInput): Promise<PolishReviewOutput> {
  return polishReviewFlow(input);
}

const polishReviewPrompt = ai.definePrompt({
  name: 'polishReviewPrompt',
  input: {schema: PolishReviewInputSchema},
  output: {schema: PolishReviewOutputSchema},
  prompt: `You are an expert writing assistant specializing in making user reviews sound more complete and natural.
Your task is to take the user's raw text, which may be brief or contain grammatical errors, and transform it into a well-written, eloquent review.

- Correct all grammar and spelling mistakes.
- Improve the clarity and flow of the text.
- Expand on the user's points to make them sound more descriptive and natural, like a real, detailed review. For example, 'price okay' could become 'The prices were reasonable for the quality.'
- Preserve the original sentiment and core meaning. If the user is unhappy, the polished review should reflect that. If they are happy, the review should be positive.
- Do not add any new information or facts that cannot be inferred from the original text.
- The output must be only the polished review text, without any introductory phrases like "Here's the polished review:".

Original Text: '{{{text}}}'
Polished Text:`,
});

const polishReviewFlow = ai.defineFlow(
  {
    name: 'polishReviewFlow',
    inputSchema: PolishReviewInputSchema,
    outputSchema: PolishReviewOutputSchema,
  },
  async input => {
    const {output} = await polishReviewPrompt(input);
    return output!;
  }
);
