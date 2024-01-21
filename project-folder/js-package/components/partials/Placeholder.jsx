import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';

function Placeholder() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center py-10">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
            Something Wonderful is on the Way!
          </h2>
          <p className="text-gray-600 font-sans font-thin mb-6">
            Hello Lovely Guests!
            <br />
            <br />
            We're thrilled to have you visit our wedding website. This page is
            like our love story – a beautiful work in progress. We're busy
            adding more details and can't wait to share them with you soon.
            <br />
            <br />
            Stay tuned for updates and feel free to reach out to us if you have
            any questions or just want to say hi!
          </p>
          <p className="text-gray-800 font-serif font-medium">
            With love,
            <br />
            Charlotte and Chris
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Placeholder;
