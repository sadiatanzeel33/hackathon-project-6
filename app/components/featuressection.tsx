const FeaturesSection = () => {
    return (
      <div className="flex justify-around py-12 bg-gray-50">
        {[
          { label: 'High Quality', description: 'crafted from top materials' },
          { label: 'Warranty Protection', description: 'Over 2 years' },
          { label: 'Free Shipping', description: 'Order over 150 $' },
          { label: '24 / 7 Support', description: 'Dedicated support' },
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <h3 className="font-semibold">{feature.label}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeaturesSection;
  