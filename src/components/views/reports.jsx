import ReportsBanner from "../layouts/reportsBanner/reportsBanner";
import ReportsProducts from "../layouts/reportsProducts/reportsProducts";
import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import FreeTrialLarge from "../freeTrial/freeTrialLarge";

function Reports() {
  return (
    <MainLayout>
      <SectionLayout>
        <ReportsBanner />
      </SectionLayout>
      <SectionLayout>
        <ReportsProducts />
      </SectionLayout>
      <SectionLayout>
        <FreeTrialLarge />
      </SectionLayout>
    </MainLayout>
  );
}

export default Reports;
