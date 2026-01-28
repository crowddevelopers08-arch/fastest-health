import Navbars from "@/component/navbar-tk-pp";
import ThankYouPage from "@/component/thank-you-lp";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <>
      {/* Conversion Event Script */}
      <Script id="conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-17415937758/QRqeCJ082-0bEN69yPBA'});
        `}
      </Script>
      
      <div>
        <Navbars />
        <ThankYouPage />
      </div>
    </>
  );
};

export default page;