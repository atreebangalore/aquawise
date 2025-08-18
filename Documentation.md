# AquaWISE Documentation

## Overview

AquaWISE is a client-side web application and decision support tool for selecting and planning greywater treatment interventions in schools, especially in water-scarce regions. It focuses on recommending nature-based solutions (NbS) with minimal energy and resource requirements.

---

## User Guide

### 1. User Interface

- **Homepage (`index.html`):** Introduces AquaWISE, its importance, and the problem of greywater management in schools.
- **Tool Page (`tools.html`):** Main interface for entering school/site details and preferences.
- **Team Page (`team.html`):** Lists contributors and partners.
- **Resources Page (`resources.html`):** Provides demo videos, gallery, and documentation links.

### 2. Main Workflow

1. **Start:** Go to [index.html](index.html) and click "Explore the tool".
2. **Input Details:**
   - Region (Urban/Peri-Urban/Rural)
   - Primary water source (Public, Groundwater, Tanker)
   - School demographics (students, teachers)
   - Available area for intervention
   - Intended end-use of treated water (reuse or drain)
3. **Review Recommendations:**
   - The tool generates and ranks nature-based solutions by area requirement.
   - Each option lists estimated CAPEX and key design parameters.
   - Supporting documentation links are provided.
4. **Download/Explore Results:** Download a summary or follow links for technical overviews.

### 3. Multilingual Support

- English and Kannada toggling is available via the navigation bar and handled in `js/lang.js`.

---

## Developer Guide

### Directory Structure

```
.
├── index.html              # Landing page
├── tools.html              # Main decision tool
├── resources.html          # Resources and links
├── team.html               # Contributors/team
├── js/
│   ├── tools.js            # Calculation & logic
│   ├── lang.js             # Language support
│   ├── headerand footerManager.js # Custom navbar/footer
│   └── scripts.js          # Bootstrap theme and navbar UI
├── css/
│   ├── styles.css          # Main styles
│   ├── forms_.css          # Form styles
│   ├── fs.css              # Additional styles
│   └── res.css             # Resource page styles
└── assets/
    └── img/                # Logos, icons, and images
```

### Main JS Modules

- **`js/tools.js`:** Contains the core calculation logic for treatment area, CAPEX, and solution ranking. Handles arrays for each treatment type and links to further resources.
- **`js/lang.js`:** Handles dynamic UI text translation between English and Kannada.
- **`js/headerand footerManager.js`:** Defines custom elements for consistent header and footer across pages.

### Adding More Treatment Types

1. Extend the arrays and calculation logic in `js/tools.js`.
2. Update the UI in `tools.html` as needed.

### Adding More Languages

1. Extend the translation mappings in `js/lang.js`.
2. Add new language toggles to the navbar.

### Customization Notes

- All dependencies are loaded via CDN; no build step is required.
- The app can be hosted on any static server or GitHub Pages.

---

## Calculation and Solution Generation

- **Inputs:** School size, water source/use, available area, end-use of treated water.
- **Outputs:** Ranked list of treatment solutions (e.g., Wetlands, Filters), each with required area, holding tank size, collection tank size, and estimated CAPEX.
- **Criteria:** Recommendations ensure compliance with effluent standards (e.g., BOD < 10mg/l for reuse, < 30mg/l for discharge).
- **Links:** Each option provides a “Know More” button linking to further documentation or case studies.

---

## Resources & Support

- **Demo Video:** [English & Kannada](https://drive.google.com/drive/folders/1d7Nbs-aGOkab30B02lC9iKsV_y-VdU5x?usp=drive_link)
- **Gallery:** [WaterLab ATREE](https://linktr.ee/waterlab_atree)
- **Effluent Standards:** [KSPCB PDF](https://environmentclearance.nic.in/writereaddata/Form-2/General1/04122018MAIPL126CTO.pdf)
- **Privacy Policy:** [Google Drive](https://drive.google.com/file/d/12AuWwxwIe735CR-lleTBvRyS5w3gooAC/view?usp=drive_link)
- **Contact:** [Form](https://forms.gle/qVcKPmHJYuVAZX9H9)

---

## Credits

- **Developed by:** Sreekuttan V N and Shiva Subramanya
- **Supported by:** ATREE Water and Soil Lab, CDRI

For bug reports, feature requests, or contributions, please open an issue or contact the team.

---

*Last updated: August 2025*
