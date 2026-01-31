import Navbars from "@/component/navbar-tk-pp";
import ThankYouPage from "@/component/thank-you-lp";
import Script from "next/script";
import React from "react";

const Page = () => {
  return (
    <>
      <div>
        <Navbars />
        <ThankYouPage />
      </div>
      
      {/* Event snippet for Test Book LP conversion page */}
      <Script id="conversion-event" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-17415937758/QRqeCJO82-0bEN69yPBA'});
        `}
      </Script>

      {/* Google tag (gtag.js) event for in-app purchase */}
      <Script id="in-app-purchase-event" strategy="afterInteractive">
        {`
          gtag('event', 'in_app_purchase', {
            // <event_parameters>
          });
        `}
      </Script>
    </>
  );
};

export default Page;