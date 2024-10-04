import React from 'react'

const OurPartner = () => {
    const partners = [
        { name: 'Future Generali', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'HDFC ERGO', logo: 'assets/images/company/HDFC ERGo.png' },
        { name: 'HDFC Life', logo: 'assets/images/company/HDFC life.jpg' },
        { name: 'ICICI Prudential', logo: 'assets/images/company/ICICI Prudential.jpg' },
        { name: 'ICICI Lombard', logo: 'assets/images/company/icicibank.jpg' },
        { name: 'IFCO TOKIO', logo: 'assets/images/company/IFCO TOKIO.jpg' },
        { name: 'Liberty', logo: 'assets/images/company/liberty.png' },
        { name: 'Max Life', logo: 'assets/images/company/Max Life.jpg' },
        { name: 'National Insurance', logo: 'assets/images/company/National insurance.jpg' },
        { name: 'Niva', logo: 'assets/images/company/Niva Bupa Health in.jpg' },
        { name: 'Oriental', logo: 'assets/images/company/oriental.png' },
        { name: 'Raheja QBE', logo: 'assets/images/company/raheja.png' },
        { name: 'SBI General', logo: 'assets/images/company/SBI General.jpg' },
        { name: 'Shriram', logo: 'assets/images/company/shriram.png' },
        { name: 'Star', logo: 'assets/images/company/Star personal & caring.jpg' },
        { name: 'TATA AIA', logo: 'assets/images/company/TATA AIA.png' },
        { name: 'The New India', logo: 'assets/images/company/The new india assurance co.ltd.jpg' },
        { name: 'United India', logo: 'assets/images/company/United India.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
        { name: 'Company 4', logo: 'assets/images/company/Future generali.jpg' },
      ];
    

  return (
    <section className="bg-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center items-center">
        {partners.map((partner, index) => (
          <div key={index} className="m-4 ">
            <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" />
            <p className="mt-1 text-wrap">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurPartner