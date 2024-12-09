const ContactInfo = () => {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-600">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-600">
            Mobile: (+84) 546-6789 <br />
            Hotline: (+84) 456-6789
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Working Time</h3>
          <p className="text-gray-600">
            Monday-Friday: 9:00 - 22:00 <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  