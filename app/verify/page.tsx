import VerifyBox from "@/components/Verify";
import { Metadata } from "next";
import { VALUES } from "@/lib/variables";

export const metadata: Metadata = {
  title: `Verify | ${VALUES.APP_SHORT_NAME}`,
  description: `This Page can be used to verify Certificates/Offer Letters issued by ${VALUES.APP_FULL_NAME}`,
  authors: VALUES.DEV_SAKSHAM_JOSHI,
  publisher: VALUES.APP_FULL_NAME,
  robots: VALUES.SEO.robots,
  category: VALUES.SEO.category,
  formatDetection: VALUES.SEO.formatDetection,
  referrer: VALUES.SEO.referrer,
  keywords: VALUES.SEO.keywords
};

const VerifyPage = () => {
    return (
        <>
            <VerifyBox />
        </>
    );
};

export default VerifyPage;