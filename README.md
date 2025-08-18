# AquaWISE

AquaWISE is a web-based decision support tool designed to assist users in selecting site-specific greywater treatment technologies for non-residential schools, particularly in arid and semi-arid regions. Developed by the ATREE Water and Soil Lab with support from CDRI, AquaWISE leverages nature-based solutions (NbS) to recommend effective and low-cost greywater management interventions.
https://aquawise.atree.org/

![AquaWISE Logo](assets/img/logos/aquawise_logof.png)

## Table of Contents

- [What is AquaWISE?](#what-is-aquawise)
- [Features](#features)
- [How Does It Work?](#how-does-it-work)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Technology Stack & Dependencies](#technology-stack--dependencies)
- [Documentation](#documentation)
- [Resources](#resources)
- [Team](#team)
- [License](#license)
- [Contact](#contact)

---

## What is AquaWISE?

AquaWISE is a decision support tool that provides recommendations for school-specific integrated wastewater management solutions. It helps practitioners, NGOs, government agencies, and communities across the global South to:

- Identify and manage greywater separately from blackwater.
- Generate a menu of site-adapted, nature-based treatment options.
- Estimate associated capital expenditure (CAPEX) for interventions.
- Promote sustainable, low-energy, and easy-to-maintain solutions.

## Features

- **User-Friendly Web Interface:** Simple forms to input site data (location, water source, number of students/teachers, available area, and intended use of treated water).
- **Automated Solution Generation:** Based on user input, AquaWISE suggests ranked treatment options with area and cost estimates.
- **Nature-Based Solutions:** All recommended interventions are NbS, designed to mimic natural processes using locally available materials and minimal external energy.
- **Multilingual Support:** Includes English and Kannada localization.
- **Downloadable Results:** Users can download solution reports and access overviews of each suggested treatment technology.

## How Does It Work?

1. **Input Data:** Users provide basic information about the school's water supply, population, location, and available area.
2. **Select Preferences:** Choose the intended end-use of treated water (e.g., irrigation, flushing, drain discharge).
3. **View Recommendations:** The tool generates and ranks NbS treatment options, displaying required area, estimated CAPEX, and other key metrics.
4. **Download Reports:** Users can download results and detailed overviews for implementation.

*Example Flow:*
- Input school data → Select water use preference → Get ranked NbS recommendations → Download report

## Installation & Setup

This project is a static web app. To run locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/atreebangalore/aquawise.git
   ```
2. **Install dependencies (if modifying code):**
   Most dependencies are loaded via CDN. For advanced JS/CSS work, use any local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

3. **Start a local server:**
   - Use VSCode Live Server, or
   - Python 3: `python -m http.server 8000`
   - Node.js: `npx serve .`

4. **Open your browser:** Go to `http://localhost:8000/index.html`

## Usage

- Open `index.html` to view the homepage.
- Click "Explore the tool" or go to `tools.html` to start using AquaWISE.
- Fill in the required fields regarding your site.
- Review the generated treatment options and download the results as needed.

## Technology Stack & Dependencies

- **HTML5/CSS3/JavaScript:** Main codebase for UI and logic.
- **Bootstrap:** Responsive design and UI components (CDN).
- **Font Awesome:** Icons.
- **Google Fonts:** Montserrat and Roboto Slab.
- **Custom JS Modules:** Core logic in `js/tools.js`, language handling in `js/lang.js`, header/footer in `js/headerand footerManager.js`.
- **No backend required:** All logic is client-side.

## Documentation 

### Major Modules

- **index.html:** Landing page, background, and project overview.
- **tools.html:** Main interface for the decision support tool and user input forms.
- **js/tools.js:** Core logic for calculating and ranking treatment options, area, and cost.
- **js/lang.js:** Language support (English/Kannada toggle).
- **css/styles.css:** Styling and layout.
- **resources.html:** Downloadable resources, demo videos, and gallery.
- **team.html:** Project contributors and contact information.

### Calculation Logic

- Calculates area requirements and costs for various NbS (Constructed Wetlands, Filters).
- Generates links to additional resources for each solution.
- Ensures that recommended solutions meet local effluent standards (e.g., BOD < 10mg/l for reuse).

### Customization

- To add more languages, extend `js/lang.js`.
- To add more treatment options, modify the arrays and logic in `js/tools.js`.

## Resources

- [Demo Video (English & Kannada)](https://drive.google.com/drive/folders/1d7Nbs-aGOkab30B02lC9iKsV_y-VdU5x?usp=drive_link)
- [Gallery](https://linktr.ee/waterlab_atree)
- [Treated Effluent Standards](https://environmentclearance.nic.in/writereaddata/Form-2/General1/04122018MAIPL126CTO.pdf)
- [ScienceDirect Article on Greywater](https://www.sciencedirect.com/science/article/pii/S0048969719347229)
- [Privacy Policy](https://drive.google.com/file/d/12AuWwxwIe735CR-lleTBvRyS5w3gooAC/view?usp=drive_link)

## Team

- Designed & developed by Sreekuttan V. N. [<img width="18" height="18" alt="image" src="https://github.com/user-attachments/assets/6aec12b5-0e00-45ab-a877-528c27324958" />
)](https://www.linkedin.com/in/sreekuttanvn/) [https://www.atree.org/profile/sree-kuttan/]
- The tool logic was curated by Shiva Subramanya [<img width="18" height="18" alt="image" src="https://github.com/user-attachments/assets/6aec12b5-0e00-45ab-a877-528c27324958" />
)]([https://www.linkedin.com/in/sreekuttanvn/](https://www.linkedin.com/in/shiva-subramanya-08ba6736/)) [https://www.atree.org/profile/shiva-subramanya-s/]
- Supported by [ATREE Water and Soil Lab](https://www.atree.org/water-and-soil-lab/) and [CDRI](https://www.cdri.world/).

## License

- Bootstrap Agency theme used under MIT license.
- All original content © 2024 AquaWISE.

## Contact

For queries or support, mail to waterlab@atree.org.
**ATREE – Ashoka Trust for Research in Ecology and the Environment**  
Website: [https://www.atree.org](https://www.atree.org)  
For feedback or contributions, please open an issue or PR on the GitHub repository.

---------------------------------------------------------------------------------------------------------------------------






## AquaWISE Documentation <img width="15" height="15" alt="image" src="https://github.com/user-attachments/assets/93b16b95-fad6-44b5-8742-1dfb27914ef4" />


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
