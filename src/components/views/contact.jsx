import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import ContactBanner from "../layouts/contactBanner/contactBanner";
import FreeTrialLarge from "../freeTrial/freeTrialLarge";
import ContactFormSection from "../layouts/contactFormSection/contactFormSection";
import {Helmet} from "react-helmet";

function Contact() {
  return (
    <MainLayout>
    <Helmet>
      <link rel="canonical" href="https://www.firelabinc.com/contact-us" />
    </Helmet>     
      <SectionLayout>
        <ContactBanner />
      </SectionLayout>
      <SectionLayout>
        <ContactFormSection />
      </SectionLayout>
      <SectionLayout>
        <FreeTrialLarge />
      </SectionLayout>
    </MainLayout>
  );
}

export default Contact;
