console.log("✅ CV script loaded");

// Show date
const updated = document.getElementById("updated");
if (updated) updated.textContent = new Date().toLocaleDateString();

// Print CV
const printBtn = document.getElementById("printBtn");
if (printBtn) printBtn.addEventListener("click", () => window.print());

// Download CV as DOCX with improved mobile compatibility
const downloadBtn = document.getElementById("downloadDocx");
if (downloadBtn) {
  downloadBtn.addEventListener("click", async () => {
    // Check if docx library is loaded
    if (typeof docx === 'undefined') {
      alert("⚠️ The DOCX library failed to load. Please refresh and try again.");
      return;
    }

    // Show loading state
    downloadBtn.disabled = true;
    const originalText = downloadBtn.textContent;
    downloadBtn.textContent = "Generating...";

    try {
      const { Document, Packer, Paragraph, TextRun } = docx;

      // Create document with better structure
      const doc = new Document({
        sections: [
          {
            children: [
              // Name and Title
              new Paragraph({
                children: [
                  new TextRun({
                    text: "UGOCHUKWU DIVINE FAVOUR",
                    bold: true,
                    size: 28
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Front-end Web Developer (Student)",
                    italics: true,
                    size: 20
                  })
                ]
              }),
              
              // Contact Information
              new Paragraph({
                children: [
                  new TextRun({
                    text: "📞 07040725073 | 09053445793",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "✉️ ugochukwudivinefavour8@gmail.com",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "📍 Lagos, Nigeria",
                    size: 18
                  })
                ]
              }),
              
              // Empty line
              new Paragraph({ text: "" }),

              // Professional Summary
              new Paragraph({
                children: [
                  new TextRun({
                    text: "PROFESSIONAL SUMMARY",
                    bold: true,
                    size: 22
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Motivated and detail-oriented web development student with practical experience building responsive and accessible front-end interfaces. Skilled in HTML, CSS, JavaScript, and React. Eager to contribute to real-world projects, learn from experienced teams, and grow as a front-end developer.",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({ text: "" }),

              // Projects & Experience
              new Paragraph({
                children: [
                  new TextRun({
                    text: "PROJECTS & EXPERIENCE",
                    bold: true,
                    size: 22
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Personal Portfolio & Practice Projects",
                    bold: true,
                    size: 20
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Created multiple small web apps and UI clones to practice layout and interactivity — including a portfolio site, Rock-Paper-Scissors game, and a CODM UI mockup. Implemented responsive layouts, animations, and state handling with vanilla JS and React components.",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Training — NIIT (Ongoing)",
                    bold: true,
                    size: 20
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Learning web development fundamentals, front-end tooling, and project workflows while building practical assignments and coursework projects.",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({ text: "" }),

              // Education
              new Paragraph({
                children: [
                  new TextRun({
                    text: "EDUCATION",
                    bold: true,
                    size: 22
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "NIIT — Web Development Student",
                    bold: true,
                    size: 20
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Lagos, Nigeria — Ongoing",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({ text: "" }),

              // Skills
              new Paragraph({
                children: [
                  new TextRun({
                    text: "SKILLS",
                    bold: true,
                    size: 22
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "HTML, CSS, JavaScript, React, Responsive Design, Problem Solving",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({ text: "" }),

              // Interests
              new Paragraph({
                children: [
                  new TextRun({
                    text: "INTERESTS",
                    bold: true,
                    size: 22
                  })
                ]
              }),
              
              new Paragraph({
                children: [
                  new TextRun({
                    text: "UI/UX Design, Web Animation, Reading Tech Articles, Creative Writing",
                    size: 18
                  })
                ]
              }),
              
              new Paragraph({ text: "" }),

              // Footer
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Generated on ${new Date().toLocaleDateString()} — Ugochukwu Divine Favour`,
                    italics: true,
                    size: 16
                  })
                ]
              }),
            ],
          },
        ],
      });

      // Generate and download with better mobile support
      const blob = await Packer.toBlob(doc);
      
      // Create download with improved mobile compatibility
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Ugochukwu_Divine_Favour_CV.docx";
      
      // Better mobile support
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);

      console.log("✅ DOCX generated successfully");

    } catch (err) {
      console.error("DOCX generation error:", err);
      alert("⚠️ Failed to generate DOCX. Error: " + err.message + "\n\nTry using the Print/PDF option instead.");
    } finally {
      // Reset button
      downloadBtn.disabled = false;
      downloadBtn.textContent = originalText;
    }
  });
}

// Fade-in after load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Additional debugging for library loading
window.addEventListener("load", () => {
  setTimeout(() => {
    if (typeof docx !== 'undefined') {
      console.log("✅ DOCX library loaded successfully");
    } else {
      console.error("❌ DOCX library failed to load");
    }
  }, 1000);
});

// Prevent zoom issues on mobile
document.addEventListener('DOMContentLoaded', function() {
  // Prevent double-tap zoom on buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.target.click();
    });
  });
});