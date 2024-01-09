import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import TryUsBanner from "../layouts/tryUsBanner/tryUsBanner";
import TryUsFormSection from "../layouts/tryUsFormSection/tryUsFormSection";
import {Helmet} from "react-helmet";

function TryUsPage() {
  return (
    <MainLayout>
    <Helmet>
      <link rel="canonical" href="https://www.firelabinc.com/try-us" />
    </Helmet>
      <SectionLayout>
        <TryUsBanner />
      </SectionLayout>
      <SectionLayout>
        <TryUsFormSection />
      </SectionLayout>
    </MainLayout>
  );
}

export default TryUsPage;
