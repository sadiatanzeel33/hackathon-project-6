import HeroSection from '../../components/herosection';
import ContactInfo from '../../components/contactinfo';
import ContactForm from '../../components/contactform';
import FeaturesSection from '../../components/featuressection';


const ContactPage = () => {
  return (
    <div className="bg-white">npm my-project
      <HeroSection />

      <div className="container mx-auto px-4 py-12 md:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-500 mb-8">
          For more information about our product & services, feel free to drop
          us an email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <FeaturesSection />
    </div>
  );
};

export default ContactPage;


