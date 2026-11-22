YOUR PORTFOLIO WEBSITE — QUICK EDIT GUIDE
=========================================

WHAT'S INCLUDED
- index.html      Main page structure
- styles.css      Colours, fonts, spacing, responsive layout and visual styling
- content.js      Your name, email, social links and all 5 case study content
- script.js       Makes the project cards and case-study popups work

HOW TO OPEN THE WEBSITE
1. Download and unzip the portfolio folder.
2. Open the folder.
3. Double-click index.html. It should open in Chrome, Edge, Firefox or Safari.
4. Internet is needed for the Google Fonts to load. The site itself runs locally.

WHERE TO EDIT (MOST IMPORTANT)
Open content.js in a text editor such as VS Code, Notepad or TextEdit.

A) YOUR NAME
Find:
  name: "Your Name",
Replace with your actual name. The top-left logo initials update automatically.

B) EMAIL
Find:
  email: "hello@example.com",
Replace with the email address you want people to contact.

C) SOCIAL LINKS
Replace the linkedin and instagram URLs with your profile URLs.
If you do not want one of these, you can remove its link in index.html.

D) CASE STUDIES
Inside projects: [ ... ] each project has:
- title: Name of the project
- category: Type of work
- visualTitle: Big text shown on the colourful project cover (use <br> for a line break)
- label: Small text on the cover
- corner: Small decorative symbol
- summary: Short intro shown when the case study opens
- challenge: The problem / brief
- approach: Your thinking and process
- deliverables: What you contributed
- outcome: The final takeaway

Replace the sample copy with your actual project details. There are exactly five sample case studies:
1. Think School
2. Meesho Growth
3. After Hours
4. Roam
5. Brief Roulette

IMPORTANT: The current case study descriptions are starter copy, not verified project facts.
Rewrite them to accurately reflect your role, the brief, your process and real outcomes.
If you have metrics, add only numbers you can substantiate.

HOW TO CHANGE THE LOOK
Open styles.css:
- Main background: --paper
- Main text: --ink
- Acid green: --acid
- Coral: --coral
- Blue: --blue
- Lavender: --lav
Change the hex colour values near the top of the file.
For more substantial layout changes, edit the CSS sections named .hero, .project-grid, .about, .manifesto and .contact.

HOW TO ADD PROJECT IMAGES
The current project covers are made from editable typography and CSS shapes, so no images are required.
To use your own images later, add image files inside assets/ and edit the project card markup in script.js. For a quick first launch, just replace the copy and contact details.

BEFORE YOU PUBLISH
- Replace Your Name, email and social URLs.
- Rewrite every case study with accurate details.
- Add your real role, collaborators, timeline and outcomes where relevant.
- Check every link.
- Test on mobile and desktop.

HOW TO PUBLISH FOR FREE
Option 1 — Netlify:
1. Go to https://www.netlify.com/
2. Create an account.
3. Choose Add new site / Deploy manually.
4. Drag the unzipped portfolio folder (the folder containing index.html) into the upload area.
5. Netlify gives you a public website URL.

Option 2 — GitHub Pages:
1. Create a GitHub repository.
2. Upload all files from this folder to the repository root.
3. In repository Settings → Pages, deploy from the main branch and root folder.
4. GitHub Pages will provide your public URL.

TIP
Keep the four website files together in the same folder. Do not move content.js or styles.css away from index.html.
