# Privacy policy

**Effective date:** 2026-04-16  
**App:** myaiki (“the App”)  
**Operator:** Vedran Mandić (“we” or “us”)  
**Contact:** Vedran Mandić is the operator and, for this app, the **Data Protection Officer (DPO)**. For product questions, GDPR requests (including erasure), and privacy inquiries, use the **Contact** section at the **bottom of this screen** in the app (after you finish reading this document).

This policy describes how we handle information in connection with the **myaiki** mobile application for **Android** and **iOS**. If you do not agree with this policy, please do not use the App.

## 1. Summary

- **MVP (current product direction):** The App is **offline-first**. Educational content is **bundled** in the App. We **do not** operate a user login for the App in MVP. We **do not** use **third-party advertising** or **behavioral analytics** in MVP.
- **No “tracking” for profiling:** We **do not** ask to **track** you across other companies’ apps or websites for advertising or analytics. We **do not** use technology whose purpose is to **profile** you or link your activity across third-party services. On **iOS**, we do **not** use **App Tracking Transparency (ATT)** for cross-app tracking because we do not engage in that processing.
- **No PII collected for tracking:** The App **does not** collect **personally identifiable information (PII)** such as your name, email address, or phone number **for tracking purposes**. There is **no** account inside the App in MVP, so we do **not** receive those identifiers from the App for analytics or marketing.
- **Device storage:** We use **local storage** on your device (for example preferences and simple app state).
- **Photos:** We only request **photo library** access when **you choose** to **save** a generated quote image to your library, consistent with the system permission prompt. That image stays on your device; we do not use it to **track** you.
- **Links:** Tapping certain links may open your **system browser** to third-party sites; those sites have their own policies.
- **Crash reporting:** **Production** builds distributed through the stores are compiled with **Sentry** so we can receive **crashes and stability diagnostics** (see **Section 7**). That processing is **not** for advertising or cross-app tracking. **Local developer builds** may omit Sentry; then this channel does not run.

## 2. Information we process

### 2.1 You provide indirectly by using the App

- **App preferences and flags** stored with the platform’s local storage APIs (for example whether onboarding was completed, display-related preferences). This stays **on your device** unless a future feature syncs it (not in MVP). This is **operational** data, not used to **track** you across apps or sites.
- **Quote image save:** If you use the feature to save a quote image, the App writes an image to your **photo library** when you confirm. We do not upload that image to our servers in MVP (we do not operate app backend services for core functionality in MVP).

### 2.2 Automatically processed on the device

- **Diagnostic logs** in development builds may be available to developers through normal platform tools. **Production** builds may also send **crash and stability telemetry** to **Sentry** as described in **Section 7**.

### 2.3 We do not intentionally collect in MVP

- **No account** registration inside the App in MVP.
- **No** sale of personal data.
- **No** third-party **ads** in MVP.
- **No** third-party **product analytics** or **advertising** SDKs for measuring behavior across sites or profiling users. **Stability** tooling (**Sentry**, **Section 7**) is used only for diagnostics and is **not** used for cross-app tracking or behavioral profiling.
- **No PII for tracking:** We do **not** deliberately collect identifiers such as name, email, or phone number **through the App** for tracking, analytics, or advertising.

If we add any of the above later, we will update this policy and, where required, seek consent or offer controls.

## 3. Legal bases (EEA / UK reference)

Where **GDPR** or the **UK GDPR** applies, we rely on:

- **Contract / steps at your request:** providing the App you asked to install.
- **Legitimate interests:** for example maintaining and securing the App, and **non-PII crash and stability diagnostics** (see **Section 7**), balanced against your rights.
- **Consent:** where required for optional processing (for example certain analytics or marketing, if ever added).

Local law may provide additional rights; see **Section 9**.

## 4. Third-party services and links

### 4.1 System browser

When you open external links (for example the **project repository**), you leave the App. Those websites have their own privacy practices. We are not responsible for their content or policies.

### 4.2 App stores

Your download and payment (if any) are handled by **Google Play** and/or **Apple App Store**. Their privacy policies apply to store operations.

## 5. Children

In the **Apple App Store**, the App is designated **9+** (ages **9 and older**). We describe the App here as intended for that **general audience** and **not directed at children under 9**. Age labels can differ by storefront or region; follow the age guidance shown where you install the App.

We do **not** knowingly collect personal information from anyone in a way that violates applicable child-privacy or consent rules (including, where they apply, **COPPA**-style protections and **EU / UK** rules, including in **Croatia**). If you believe we have collected a child’s personal information improperly, contact the **DPO** via the **Contact** section at the **bottom of this screen** in the app and we will take appropriate steps.

## 6. International users

We may process information in countries where we or our processors operate. Where required, we use appropriate safeguards (for example Standard Contractual Clauses) for transfers from the EEA, UK, or Switzerland.

## 7. Crash and error reporting (Sentry)

**Store and release-style builds** of the App are built with **Sentry** so crash and error data can be sent to **Functional Software Inc. (Sentry)**. If a build is produced **without** configuring Sentry (typical for some local development), that transmission does not occur.

**Not tracking, not PII:** We use Sentry for **technical telemetry** to fix bugs and instability. We configure it **not** to collect **PII** (for example we do not intentionally send your name, email, phone number, or free-text you typed into the App as personal identifiers for tracking). Typical payloads are **device/app context** (model, OS, app version, locale) and **diagnostics** (stack traces, error messages). A **pseudonymous** installation or device identifier may be used by the vendor **only** to group crash events; we do **not** use it to identify you as a person, to advertise to you, or to track you across other apps or websites.

**Session replay** in Sentry is **disabled** (we do **not** enable replay or other modes that record screen contents). **Performance tracing** samples only a **fraction** of in-app operations (by default about **10%**, unless we change the build configuration); we use it only to measure latency and failures, **not** for advertising or cross-app profiling.

**Purpose:** diagnose crashes and errors, improve stability and compatibility.

**Typical categories** (depends on SDK configuration):

- **Device and app context:** device model, OS version, app version, locale, memory/disk class (if reported by the SDK). We also attach **coarse tags** on events (for example **app display name**, **platform**, **locale**) to group issues.
- **Technical diagnostics:** stack traces, error messages, breadcrumbs around the failure.
- **In-app navigation context:** to reproduce routing issues, we may send the **matched route path**, optional **route name**, **path parameter values** (for example stable **content IDs** in the URL), and a **yes/no** flag that the URL had **query parameters**—**not** the query string itself. **Navigation** breadcrumbs may include similar route metadata. This is **diagnostic**, not used for advertising or profiling.
- **Performance samples:** coarse timing for sampled navigation or work units when tracing is on (diagnostics only).
- **Identifiers:** the SDK may assign a **pseudonymous** installation or device identifier; as above, **not** used for PII-based tracking or profiling in our product.

**Processors:** data is processed by **Functional Software Inc. (Sentry)** under their terms and privacy policy (**https://sentry.io/privacy/**). They may process data in the **United States and other regions** described in their documentation.

**Retention:** we typically configure retention for **up to 90 days**, or as set in the vendor dashboard; we will update this policy if that changes materially.

**Your choices:** there is **no user account** in MVP; uninstalling the App removes locally stored app data. For any **remote** diagnostic data we or the processor may hold, you may ask the **DPO** (see below) to assist with **erasure** where applicable. We may add an in-app opt-out for crash reporting where the platform allows it.

We keep **Google Play Data safety** and **Apple App Privacy** declarations aligned with what the shipped binaries and Sentry configuration actually collect. When that changes materially, we update this policy’s **effective date** and the store forms.

## 8. Security

We use reasonable measures appropriate to the nature of the App. **No method of transmission or storage is 100% secure.**

## 9. Your rights

Depending on where you live, you may have rights to **access**, **correct**, **delete**, **port**, or **restrict** processing of your personal data, and to **object** or **withdraw consent** where processing is consent-based.

**Local data:** Much of what the App stores is **only on your device**. You can clear it via system settings or by **uninstalling** the App. That removes **local** traces on the device; it does not by itself delete any **minimal technical** records a crash vendor may already hold (see **Section 7**).

**Erasure and other GDPR requests:** To ask for **deletion** or **removal of traces** we or our processors hold in connection with the App (including assistance with crash-reporting data where technically possible), contact the **Data Protection Officer** using the **Contact** section at the **bottom of this screen** in the app.

We may need to verify your request. You may also lodge a complaint with your local supervisory authority (in Croatia: **AZOP**, the Croatian Personal Data Protection Agency).

**General questions** (not specifically data-protection requests): use the same **Contact** section at the **bottom of this screen**.

## 10. Changes

We will post an updated policy in the App (or link from the App) and change the **effective date**. If changes are material, we will provide notice as required by law (for example a short in-app notice on next launch).

## 11. Contact

**Operator:** Vedran Mandić  
**Location:** Zagreb, Croatia (European Union)  
**Data Protection Officer (DPO):** Vedran Mandić  

To reach the operator or the DPO, use the **Contact** section at the **bottom of this screen** in the app.
