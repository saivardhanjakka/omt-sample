
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadButtons from '@/components/DownloadButtons';



export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
   <main className="flex flex-col items-center py-18 md:py-6  lg:py-20 flex-grow">
    

        <DownloadButtons />
      </main>
      <div className='md:mb-4'>
      <Footer />
      </div>
    </div>
  );
}
