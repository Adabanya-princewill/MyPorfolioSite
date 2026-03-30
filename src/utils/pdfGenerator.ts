const RESUME_PATH = "/resume?print=1";

export const generateCV = () => {
  const resumeWindow = window.open(RESUME_PATH, "_blank", "noopener,noreferrer");

  if (!resumeWindow) {
    window.location.assign(RESUME_PATH);
  }
};
