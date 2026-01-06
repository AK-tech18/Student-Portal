import "../styles/dashboard.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightPanel from "./RightPanel";

export default function Dashboard({
  goStudy,
  goPlanner,
  goAI,
  goSettings,
}) {
  return (
    <div className="wrapper">
      <Sidebar
        goStudy={goStudy}
        goPlanner={goPlanner}
        goAI={goAI}
        goSettings={goSettings}
      />
      <MainContent
        goStudy={goStudy}
        goPlanner={goPlanner}
        goAI={goAI}
      />
      <RightPanel />
    </div>
  );
}
