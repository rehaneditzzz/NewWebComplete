const MapComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-purple-50 to-blue-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 pt-2">📍 Our College Location</h1>
        <div className="w-full max-w-5xl h-96 shadow-xl rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.605337303114!2d79.1079970759715!3d21.128294984351054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c754a4cc67d5%3A0xbf9f159dbced1f65!2sShree%20Binzani%20City%20College!5e0!3m2!1sen!2sin!4v1736225029654!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="College Location"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default MapComponent;
  