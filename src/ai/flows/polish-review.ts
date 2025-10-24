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
  prompt: `You are an expert writing assistant. Your task is to correct grammar, fix spelling, and improve the clarity of the following user-submitted text. Preserve the original sentiment and meaning exactly. Do not add any new information or facts. The output should be only the polished text, without any introductory phrases. Original Text: '{{{text}}}' Polished Text:`,
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
