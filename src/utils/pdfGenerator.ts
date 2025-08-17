import jsPDF from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF();

  // Set document properties
  doc.setProperties({
    title: "Chidiebele Princewill Adabanya - CV",
    subject: "Frontend Developer Resume",
    author: "Chidiebele Princewill Adabanya",
    creator: "Portfolio Website",
  });

  // Header
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("CHIDIEBELE PRINCEWILL ADABANYA", 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Frontend Developer", 20, 30);

  // Contact Information
  doc.setFontSize(10);
  doc.text("Lekki, Lagos State, Nigeria", 20, 40);
  doc.text("+234 810 851 4620", 20, 45);
  doc.text("adabanyaprince@gmail.com", 20, 50);
  doc.text("DOB: January 6, 1999", 20, 55);

  // Objective
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("OBJECTIVE", 20, 70);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const objective =
    "I am a dedicated frontend developer committed to creating user-friendly, responsive web applications. With a strong focus on delivering seamless and intuitive user experiences, I combine innovative design with efficient coding practices.";
  const splitObjective = doc.splitTextToSize(objective, 170);
  doc.text(splitObjective, 20, 80);

  // Skills
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TECHNICAL SKILLS", 20, 105);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  let yPos = 115;
  const skillsData = [
    "Frontend: HTML5, CSS3, SASS, Tailwind CSS, Bootstrap, Material UI, React (Styled Components)",
    "JavaScript: React.js, Vue.js, TypeScript, Next.js, Redux, Zustand",
    "Tools: Git (GitLab, Bitbucket), Jest, React Testing Library, Lighthouse, Web Vitals",
    "APIs: REST, GraphQL",
    "Soft Skills: Problem-solving, team collaboration, time management",
  ];

  skillsData.forEach((skill) => {
    const splitSkill = doc.splitTextToSize(skill, 170);
    doc.text(splitSkill, 25, yPos);
    yPos += splitSkill.length * 5 + 3;
  });

  // Work Experience
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("WORK EXPERIENCE", 20, yPos + 10);
  yPos += 20;

  const experiences = [
    {
      title: "Application Developer",
      company: "Nova Bank",
      period: "February 2025 – Present",
      achievements: [
        "Built the frontend for the NRBVN Account Opening platform",
        "Contributed to Referral Management Portal and E-Visitor Management Application",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "CyberFleet Integrated Limited",
      period: "December 2023 – January 2025",
      achievements: [
        "Led end-to-end development of Yellowdot platform",
        "Built real-time chat and course recommendation systems",
        "Collaborated on Japaanow project optimization",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Lopworks Limited",
      period: "January 2023 – September 2023",
      achievements: [
        "Gained experience with Vue.js, Elixir, PostgreSQL, and Tailwind CSS",
        "Created responsive interfaces for various applications",
        "Documented projects for team collaboration",
      ],
    },
  ];

  experiences.forEach((exp) => {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(exp.title, 20, yPos);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${exp.company} (${exp.period})`, 20, yPos + 5);

    yPos += 12;
    exp.achievements.forEach((achievement) => {
      const splitAchievement = doc.splitTextToSize(`• ${achievement}`, 170);
      doc.text(splitAchievement, 25, yPos);
      yPos += splitAchievement.length * 4 + 2;
    });
    yPos += 5;
  });

  // Education
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, yPos + 5);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(
    "Bachelor of Engineering (B.Eng.) in Mechanical Engineering",
    20,
    yPos + 15
  );
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Chukwuemeka Odumegwu Ojukwu University (COOU)", 20, yPos + 22);
  doc.text("Uli, Anambra State, Nigeria (2017-2022)", 20, yPos + 27);
  doc.text("Second Class Upper", 20, yPos + 32);

  // Save the PDF
  doc.save("Chidiebele_Princewill_Adabanya_CV.pdf");
};
