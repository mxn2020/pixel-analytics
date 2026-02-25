import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    sites: defineTable({ name: v.string(), domain: v.string(), timezone: v.string() }).index("by_domain", ["domain"]),
    pageviews: defineTable({ siteId: v.id("sites"), path: v.string(), referrer: v.string(), browser: v.string(), os: v.string(), device: v.string(), ts: v.string() }).index("by_site_ts", ["siteId", "ts"]),
    events: defineTable({ siteId: v.id("sites"), name: v.string(), data: v.any(), ts: v.string() }).index("by_site_name", ["siteId", "name"])
});
