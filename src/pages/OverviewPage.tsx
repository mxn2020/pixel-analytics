import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Eye, Clock, ArrowUpRight } from "lucide-react";
const data = [
    { time: "00:00", visitors: 120, views: 180 }, { time: "04:00", visitors: 80, views: 120 },
    { time: "08:00", visitors: 450, views: 600 }, { time: "12:00", visitors: 820, views: 1200 },
    { time: "16:00", visitors: 650, views: 950 }, { time: "20:00", visitors: 400, views: 580 },
    { time: "23:59", visitors: 200, views: 280 }
];
export default function OverviewPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Dashboard</h1>
            <select style={{ padding: 8, borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", background: "var(--color-bg-card)", color: "var(--color-text-primary)", fontSize: "13px" }}><option>Today</option><option>Last 7 days</option><option>Last 30 days</option></select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            {[
                { title: "Unique Visitors", val: "2,720", change: "+12.5%", icon: Users },
                { title: "Total Pageviews", val: "3,910", change: "+8.2%", icon: Eye },
                { title: "Bounce Rate", val: "42.3%", change: "-2.1%", icon: ArrowUpRight, inverse: true },
                { title: "Avg Visit Duration", val: "1m 24s", change: "+5s", icon: Clock }
            ].map(s => (
                <div key={s.title} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-text-secondary)", fontSize: "13px", marginBottom: "var(--space-3)" }}><s.icon size={16} />{s.title}</div>
                    <div style={{ fontSize: "32px", fontWeight: 700 }}>{s.val}</div>
                    <div style={{ fontSize: "13px", color: s.inverse ? "var(--color-success)" : "var(--color-success)", marginTop: "var(--space-2)", fontWeight: 500 }}>{s.change} vs prior</div>
                </div>
            ))}
        </div>

        <div className="card" style={{ padding: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "var(--space-5)" }}>Traffic Overview</h2>
            <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-accent-primary)" stopOpacity={0.3} /><stop offset="95%" stopColor="var(--color-accent-primary)" stopOpacity={0} /></linearGradient>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-text-tertiary)" stopOpacity={0.2} /><stop offset="95%" stopColor="var(--color-text-tertiary)" stopOpacity={0} /></linearGradient>
                    </defs>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }} dx={-10} />
                    <Tooltip contentStyle={{ background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: 12, boxShadow: "var(--card-shadow)" }} itemStyle={{ color: "var(--color-text-primary)", fontWeight: 600 }} />
                    <Area type="monotone" dataKey="views" stroke="var(--color-text-tertiary)" fillOpacity={1} fill="url(#colorViews)" />
                    <Area type="monotone" dataKey="visitors" stroke="var(--color-accent-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorVis)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>);
}
