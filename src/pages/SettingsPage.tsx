import { Copy, Check, Settings as SettingsIcon, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button, Card, Input } from "@geenius-ui/react-css";

export default function SettingsPage() {
    const [copied, setCopied] = useState(false);
    const snippet = `<script defer data-domain="openclaw.dev" src="https://pixel.openclaw.dev/script.js"></script>`;

    const copy = () => {
        navigator.clipboard.writeText(snippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (<div style={{ padding: "var(--space-6)", maxWidth: 900 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)", margin: 0 }}><SettingsIcon style={{ color: "var(--color-text-secondary)" }} /> Site Settings</h1>
            <Button variant="primary">Save Changes</Button>
        </div>

        <Card padding="xl" style={{ marginBottom: "var(--space-6)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "var(--space-4)" }}>Tracking Snippet</h2>
            <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-4)", fontSize: "14px" }}>Paste this snippet in the <code className="mono">{'<head>'}</code> of your website to start tracking. It's lightweight (&lt;1KB) and completely cookie-free.</p>

            <div style={{ position: "relative", background: "var(--color-bg-secondary)", padding: "var(--space-4)", borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)" }}>
                <pre className="mono" style={{ color: "var(--color-text-primary)", whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0, fontSize: "13px" }}>{snippet}</pre>
                <Button variant="ghost" size="sm" onClick={copy} style={{ position: "absolute", top: 8, right: 8, background: "var(--color-bg-card)", boxShadow: "var(--card-shadow)" }}>
                    {copied ? <><Check size={14} style={{ color: "var(--color-success)" }} /> Copied</> : <><Copy size={14} /> Copy</>}
                </Button>
            </div>
        </Card>

        <Card padding="xl">
            <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><ShieldCheck size={20} style={{ color: "var(--color-success)" }} /> Data Privacy</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", fontSize: "14px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", cursor: "pointer" }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--color-accent-primary)" }} />
                    <div>
                        <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>Anonymize IP Addresses</div>
                        <div style={{ color: "var(--color-text-secondary)", marginTop: 2 }}>Drop the last octet of IP ranges before processing to ensure strict GDPR compliance.</div>
                    </div>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", cursor: "pointer" }}>
                    <input type="checkbox" defaultChecked style={{ width: 16, height: 16, accentColor: "var(--color-accent-primary)" }} />
                    <div>
                        <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>Respect "Do Not Track" (DNT)</div>
                        <div style={{ color: "var(--color-text-secondary)", marginTop: 2 }}>Ignore pageviews from browsers explicitly sending the DNT header.</div>
                    </div>
                </label>
            </div>
        </Card>
    </div>);
}
