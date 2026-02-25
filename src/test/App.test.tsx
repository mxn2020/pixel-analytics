import { describe, it, expect, vi } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import OverviewPage from "../pages/OverviewPage"; import PagesAndReferrersPage from "../pages/PagesAndReferrersPage"; import SettingsPage from "../pages/SettingsPage";

// mock recharts 
vi.mock("recharts", () => {
    const Original = vi.importActual("recharts");
    return { ...Original, ResponsiveContainer: ({ children }: any) => <div style={{ width: 800, height: 300 }}>{children}</div>, AreaChart: () => <div data-testid="area-chart" />, Area: () => null, XAxis: () => null, YAxis: () => null, Tooltip: () => null };
});

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Pixel Analytics")).toBeInTheDocument(); });
    it("OverviewPage renders", () => { wrap(<OverviewPage />); expect(screen.getByText("Dashboard")).toBeInTheDocument(); });
    it("PagesAndReferrersPage renders", () => { wrap(<PagesAndReferrersPage />); expect(screen.getByText("Content & Acquisition")).toBeInTheDocument(); });
    it("SettingsPage renders", () => { wrap(<SettingsPage />); expect(screen.getByText("Site Settings")).toBeInTheDocument(); });
});
