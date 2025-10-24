import AnimatedShapes from '@/components/AnimatedShapes';
import ReviewPolisher from '@/components/ReviewPolisher';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className="relative flex flex-grow flex-col items-center justify-center p-4 sm:p-8 md:p-12 w-full">
        <AnimatedShapes />
        <ReviewPolisher />
      </main>
      <Footer />
    </>
  );
}
