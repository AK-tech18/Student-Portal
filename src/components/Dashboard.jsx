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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <Sidebar
        goStudy={goStudy}
        goPlanner={goPlanner}
        goAI={goAI}
        goSettings={goSettings}
        onLogout={handleLogout}
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
