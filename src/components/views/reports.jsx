import ReportsBanner from "../layouts/reportsBanner/reportsBanner";
import ReportsProducts from "../layouts/reportsProducts/reportsProducts";
import MainLayout from "../layouts/mainLayout";
import SectionLayout from "../layouts/sectionLayout";
import FreeTrialLarge from "../freeTrial/freeTrialLarge";
import {Helmet} from "react-helmet";

function Reports() {
  return (
    <MainLayout>
    <Helmet>
      <link rel="canonical" href="https://www.firelabinc.com/reports" />
    </Helmet>
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
