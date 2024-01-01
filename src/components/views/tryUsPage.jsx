import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import TryUsBanner from "../layouts/tryUsBanner/tryUsBanner";
import TryUsFormSection from "../layouts/tryUsFormSection/tryUsFormSection";

function TryUsPage() {
  return (
    <MainLayout>
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
