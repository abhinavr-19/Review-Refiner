"use client";

import { useState } from "react";
import { polishReview } from "@/ai/flows/polish-review";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ReviewPolisher() {
  const [rawText, setRawText] = useState("");
  const [polishedText, setPolishedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handlePolish = async () => {
    if (!rawText.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to polish.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setPolishedText("");
    try {
      const result = await polishReview({ text: rawText });
      setPolishedText(result.polishedText);
    } catch (error) {
      console.error("Error polishing review:", error);
      toast({
        title: "An error occurred",
        description: "Failed to polish the review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!polishedText) return;
    navigator.clipboard.writeText(polishedText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <Card className="w-full max-w-2xl shadow-2xl shadow-primary/10">
      <CardHeader className="text-center px-4 sm:px-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Review Refiner
        </CardTitle>
        <CardDescription className="pt-2 text-sm sm:text-base">
          Let AI perfect your review. Correct grammar, fix spelling, and improve
          clarity in one click.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-4 sm:px-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="raw-review">Your Review</Label>
          <Textarea
            id="raw-review"
            placeholder="Enter your review here..."
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            rows={5}
            className="resize-none text-sm"
            disabled={isLoading}
          />
        </div>
        <div className="grid w-full gap-2 relative">
          <Label htmlFor="polished-review">Polished Review</Label>
          <Textarea
            id="polished-review"
            readOnly
            value={polishedText}
            placeholder="Your polished review will appear here..."
            rows={5}
            className="resize-none bg-muted/50 text-sm"
          />
          {polishedText && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 mt-1 mr-1 h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:bg-transparent hover:text-foreground"
              onClick={handleCopy}
              aria-label="Copy to clipboard"
            >
              {isCopied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-4 sm:px-6">
        <Button
          onClick={handlePolish}
          disabled={isLoading || !rawText.trim()}
          className="w-full font-semibold text-base sm:text-lg py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Polishing...
            </>
          ) : (
            "Polish My Review"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
