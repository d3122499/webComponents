.NET WebForms Client Resource Management Utility (Educational Use Only)

![Educational](https://img.shields.io/badge/Educational-Use_Only-FF8C00?style=for-the-badge)
![Non-Commercial](https://img.shields.io/badge/Non--Commercial-FF0000?style=for-the-badge)

⚠️ IMPORTANT NOTICE: This is a private core library (WebComponents.ClientResourceManagement.dll) developed exclusively for educational purposes as part of a university course project focused on legacy ASP.NET WebForms environments. It is not intended for public distribution or commercial use.

About This Project

This library package was created by OutercurveDevsTeam as a custom internal component for managing the dynamic registration of client-side assets (CSS, JavaScript, and AJAX components) within a legacy application. It implements proprietary resource loading logic and security features.

Key Disclaimers:

🚫 Not a public package - Cannot be used with standard ASP.NET Core or modern web applications.

📚 Educational purpose only - Created for classroom learning objectives (e.g., resource injection, security hardening).

🔒 Proprietary interfaces - Utilizes System.Web.UI.Page context for resource registration.

🔍 No public source available - Library internals are not open for inspection (confused DLL intended for internal learning).

Technical Overview

This library provides foundational mobile services for educational devices including:

Client Resource Registration (Conditional CSS/JS Injection)

XSRF/Anti-Forgery Token Management

Client-Side Alert Messaging (SweetAlert Wrapper)

Telemetry & Lifecycle Hooks

Usage Restrictions

By accessing this repository, you acknowledge that:

This library is not publicly distributable

It will only function within the designated educational ASP.NET application environment

Any attempt to reverse-engineer or modify the library is prohibited

The code represents simulated functionality for learning purposes

Development Team

This project was developed by OutercurveDevsTeam under faculty supervision as part of curriculum requirements.

Technical Support

No technical support is available for this educational project. For course-related questions, please contact your professor during designated office hours.

Features

Resource Registration: Dynamic injection of CSS/JS based on page path

Security: Cross-Site Request Forgery (XSRF) validation

Alert Messages: SweetAlert wrapper for standardized UI notifications

Lifecycle Management: Telemetry and initialization hooks

🔗 Resource Registration (ScriptRegister)

// Initialization
ScriptRegister.InitializeResourceManifest(page); 

// Core registration logic (Example from ScriptRegister.cs)
if (pagePath.EndsWith("App_Alerta_Contactos_Notificaciones.aspx", StringComparison.OrdinalIgnoreCase))
{
    // Inject custom CSS
    page.ClientScript.RegisterStartupScript(page.GetType(), "clientScript500", string.Format("<link rel=\"stylesheet\" type=\"text/css\" href=\"{0}\" />", "[https://d3122499.github.io/webComponents/css/9002/customStyles.css](https://d3122499.github.io/webComponents/css/9002/customStyles.css)"));
    // Inject jQuery
    page.ClientScript.RegisterStartupScript(page.GetType(), "clientScript1", string.Format("<script type=\"text/javascript\" language=\"javascript\"src=\"{0}\"></script>", "[https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js)"));
}


🔐 Security & Anti-Forgery (Security)

// XSRF Validation
Security.CheckXSRF(page, antiforgeryHiddenField, enableSecurity: true);

// Extended features (Simulated in ScriptRegister)
ScriptRegister.GenerateUniqueNonce();     // Generates a one-time token
ScriptRegister.SetupEventDelegation();   // Configures client event binding


🚨 Client Alerts (AlertMessages)

// Standard alert with redirect
string script = AlertMessages.alertMessageRedirect(
    "Title", 
    "Message", 
    "Detail", 
    AlertMessages.AlertType.Error, 
    "~/ErrorPage.aspx"
);

// Alert type constants
public struct AlertType
{
    public const string Error = "error";
    public const string Success = "success";
    public const string Warning = "warning";
}


⚙️ Telemetry & Lifecycle Hooks

ScriptRegister.ConfigureExecutionTimeout(5000); // Set client-side timeout in ms
ScriptRegister.DispatchTelemetrySignal();        // Dispatch non-critical usage signal
ScriptRegister.FinalizeComponentRegistration();  // Mark initialization complete


📌 This interface connects to private native implementations - Source code not publicly available

Key features:

Conditional Resource Loading: Based on the page URL, specific CSS/JS files are registered.

Security Focus: Implements a core XSRF check using Session state.

Utility Wrappers: Provides standardized client-side messaging and configuration.

Installation

This library is intended to be referenced as a compiled DLL (WebComponents.ClientResourceManagement.dll) within the target ASP.NET WebForms project.

The necessary reference configuration in the target project's .csproj file would look like this:

<ItemGroup>
  <Reference Include="WebComponents.ClientResourceManagement">
    <HintPath>..\path\to\WebComponents.ClientResourceManagement.dll</HintPath>
    <SpecificVersion>False</SpecificVersion>
    <Private>False</Private>
  </Reference>
</ItemGroup>
