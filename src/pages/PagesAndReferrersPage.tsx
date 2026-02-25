import { ArrowRight, Globe, MousePointerClick } from "lucide-react";

export default function PagesAndReferrersPage() {
    const topPages = [
        { path: "/", views: 12450, visitors: 8900 },
        { path: "/pricing", views: 4200, visitors: 3100 },
        { path: "/blog/what-is-openclaw", views: 3150, visitors: 2800 },
        { path: "/about", views: 1800, visitors: 1450 },
        { path: "/contact", views: 950, visitors: 820 },
    ];

    const topReferrers = [
        { source: "Direct / None", views: 6540 },
        { source: "Google", views: 5120 },
        { source: "Twitter / X", views: 4300 },
        { source: "GitHub", views: 2800 },
        { source: "news.ycombinator.com", views: 1850 },
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Content & Acquisition</h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
            <div className="card">
                <div style={{ padding: "var(--space-4) var(--space-5)", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <MousePointerClick size={18} style={{ color: "var(--color-accent-primary)" }} /> <h2 style={{ fontSize: "16px", fontWeight: 600 }}>Top Pages</h2>
                </div>
                <table className="table">
                    <thead><tr><th>Path</th><th style={{ textAlign: "right" }}>Views</th><th style={{ textAlign: "right" }}>Visitors</th></tr></thead>
                    <tbody>
                        {topPages.map(p => (
                            <tr key={p.path}>
                                <td style={{ fontWeight: 500, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: 8 }}>{p.path} <a href="#" style={{ color: "var(--color-text-tertiary)" }}><ArrowRight size={14} /></a></td>
                                <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{p.views.toLocaleString()}</td>
                                <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{p.visitors.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card">
                <div style={{ padding: "var(--space-4) var(--space-5)", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                    <Globe size={18} style={{ color: "var(--color-accent-primary)" }} /> <h2 style={{ fontSize: "16px", fontWeight: 600 }}>Top Referrers</h2>
                </div>
                <table className="table">
                    <thead><tr><th>Source</th><th style={{ textAlign: "right" }}>Views</th></tr></thead>
                    <tbody>
                        {topReferrers.map(r => (
                            <tr key={r.source}>
                                <td style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{r.source}</td>
                                <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{r.views.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}
