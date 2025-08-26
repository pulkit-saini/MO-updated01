import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string, targetPath: string = '/home') => {
    // If we're already on the target page, just scroll to the section
    if (window.location.pathname === targetPath) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to the target page and then scroll to the section
      navigate(targetPath);
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return { scrollToSection };
};

// Utility function for handling anchor links programmatically
export const handleAnchorNavigation = (hash: string, targetPath: string = '/home') => {
  const sectionId = hash.replace('#', '');
  
  if (window.location.pathname === targetPath) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    window.location.href = `${targetPath}/#${sectionId}`;
  }
};