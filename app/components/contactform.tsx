const ContactForm = () => {
    return (
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@domain.com"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message..."
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default ContactForm;
  