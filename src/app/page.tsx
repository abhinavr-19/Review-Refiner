import AnimatedShapes from '@/components/AnimatedShapes';
import ReviewPolisher from '@/components/ReviewPolisher';

export default function Home() {
  return (
    <main className="relative flex flex-grow min-h-full flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-hidden">
      <AnimatedShapes />
      <ReviewPolisher />
    </main>
  );
}
