import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        id="my-script1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-V4PRTSBJ9L"
      />
      <Script id="my-script2">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4PRTSBJ9L');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
