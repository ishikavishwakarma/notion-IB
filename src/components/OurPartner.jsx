import React from "react";
import { Helmet } from "react-helmet-async";


const OurPartner = () => {
  const partners = [
    {
      name: "Future Generali",
      logo: "assets/images/company/Future generali.webp",
    },
    { name: "HDFC ERGO", logo: "assets/images/company/HDFC ERGo.webp" },
    { name: "HDFC Life", logo: "assets/images/company/HDFC life.avif" },
    {
      name: "ICICI Prudential",
      logo: "assets/images/company/ICICI Prudential.webp",
    },
    { name: "ICICI Lombard", logo: "assets/images/company/icicibank.webp" },
    { name: "IFCO TOKIO", logo: "assets/images/company/IFCO TOKIO.webp" },
    { name: "Liberty", logo: "assets/images/company/liberty.webp" },
    { name: "Max Life", logo: "assets/images/company/Max Life.webp" },
    {
      name: "National Insurance",
      logo: "assets/images/company/National insurance.webp",
    },
    { name: "Niva", logo: "assets/images/company/Niva Bupa Health in.webp" },
    { name: "Oriental", logo: "assets/images/company/oriental.webp" },
    { name: "Raheja QBE", logo: "assets/images/company/raheja.avif" },
    { name: "SBI General", logo: "assets/images/company/SBI General.avif" },
    { name: "Shriram", logo: "assets/images/company/shriram.avif" },
    { name: "Star", logo: "assets/images/company/Star personal & caring.avif" },
    { name: "TATA AIA", logo: "assets/images/company/TATA AIA.avif" },
    {
      name: "The New India",
      logo: "assets/images/company/The new india assurance co.ltd.avif",
    },
    { name: "United India", logo: "assets/images/company/United India.avif" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
    // { name: "Company 4", logo: "assets/images/company/Future generali.webp" },
  ];

  return (
    <section className="bg-white py-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Partners - NIB</title>
        <meta
          name="description"
          content="Discover the trusted partners of Notion Insurance Broker Pvt. Ltd. We collaborate with leading insurance providers to offer comprehensive risk management and insurance solutions."
        />
        <meta
          name="keywords"
          content="NIB partners, Notion Insurance Broker partners, insurance partnerships, insurance providers, risk management partners, insurance collaborations, trusted insurance providers, NIB collaborations"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/our-partner" />
        
      </Helmet>

      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center">
          {partners.map((partner, index) => (
            <div key={index} className="m-4 ">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 object-contain"
              />
              <p className="mt-1 text-wrap">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
