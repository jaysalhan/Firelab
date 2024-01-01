import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import ContactBanner from "../layouts/contactBanner/contactBanner";
import FreeTrialLarge from "../freeTrial/freeTrialLarge";
import ContactFormSection from "../layouts/contactFormSection/contactFormSection";

function Contact() {
  return (
    <MainLayout>
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
