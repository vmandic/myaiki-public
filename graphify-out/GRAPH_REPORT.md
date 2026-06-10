# Graph Report - myaiki-public  (2026-06-10)

## Corpus Check
- 9 files · ~8,382 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 71 nodes · 81 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b670d3fb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `Terms of use` - 13 edges
2. `Privacy policy` - 12 edges
3. `Agent notes — myaiki-public` - 8 edges
4. `openPopup()` - 6 edges
5. `boot()` - 5 edges
6. `track()` - 5 edges
7. `track()` - 4 edges
8. `linkLabel()` - 4 edges
9. `initNavTracking()` - 4 edges
10. `initHomeCtaTracking()` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (13): 10. Changes, 11. Contact, 1. Summary, 3. Legal bases (EEA / UK reference), 4.1 System browser, 4.2 App stores, 4. Third-party services and links, 5. Children (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (13): 10. Suspension and termination, 11. Governing law and disputes, 12. Contact, 1. Agreement, 2. What the App is, 3. License to use the App, 4. Intellectual property, 5. Third-party links (+5 more)

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (8): Agent notes — myaiki-public, App Store Connect, GitHub Pages, Legal content workflow, Licensing, URLs (update if owner or repo name changes), Voice, What this is

### Community 3 - "Community 3"
Cohesion: 0.44
Nodes (7): canUseNativeDialog(), ensureContactDialog(), ensureContactOverlay(), openPopup(), pagePath(), setMailtoLink(), track()

### Community 4 - "Community 4"
Cohesion: 0.61
Nodes (7): boot(), initHomeCtaTracking(), initLegalScrollEnd(), initNavTracking(), initOutboundTracking(), linkLabel(), track()

### Community 6 - "Community 6"
Cohesion: 0.50
Nodes (4): 2.1 You provide indirectly by using the App, 2.2 Automatically processed on the device, 2.3 We do not intentionally collect in MVP, 2. Information we process

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (3): About Myaiki, Copyright, myaiki-public

## Knowledge Gaps
- **35 isolated node(s):** `What this is`, `Voice`, `GitHub Pages`, `Legal content workflow`, `URLs (update if owner or repo name changes)` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Privacy policy` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Why does `2. Information we process` connect `Community 6` to `Community 0`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `What this is`, `Voice`, `GitHub Pages` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._