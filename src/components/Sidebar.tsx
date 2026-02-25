import { Link, useLocation } from "react-router-dom";
import { BarChart2, MousePointerClick, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: BarChart2, label: "Overview" },
        { to: "/pages", icon: MousePointerClick, label: "Pages & Referrers" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-primary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <div style={{ color: "var(--color-accent-primary)" }}><BarChart2 size={24} /></div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.5px" }}>Pixel Analytics</strong>
        </div>

        <div style={{ padding: "0 var(--space-4) var(--space-4)" }}>
            <select style={{ width: "100%", padding: "8px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-card)", color: "var(--color-text-primary)", fontSize: "13px", fontWeight: 600 }}>
                <option>openclaw.dev</option>
                <option>minions.sh</option>
            </select>
        </div>

        <nav style={{ padding: "0 var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
