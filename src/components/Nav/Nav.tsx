import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme, Breakpoint } from "../../styles/styles";

export const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    if (isLanding) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavBar>
      <NavContent>
        <Logo to="/">SK</Logo>
        <HamburgerButton
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <HamburgerLine $open={menuOpen} />
          <HamburgerLine $open={menuOpen} />
          <HamburgerLine $open={menuOpen} />
        </HamburgerButton>
        <NavLinks $open={menuOpen}>
          {isLanding ? (
            <>
              <NavAnchor href="#skills" onClick={() => handleNavClick("skills")}>
                Skills
              </NavAnchor>
              <NavAnchor href="#projects" onClick={() => handleNavClick("projects")}>
                Projects
              </NavAnchor>
              <NavAnchor href="#experience" onClick={() => handleNavClick("experience")}>
                Experience
              </NavAnchor>
            </>
          ) : (
            <>
              <NavRouterLink to="/">Skills</NavRouterLink>
              <NavRouterLink to="/">Projects</NavRouterLink>
              <NavRouterLink to="/">Experience</NavRouterLink>
            </>
          )}
          <NavRouterLink to="/about">About</NavRouterLink>
          <ResumeButton href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </ResumeButton>
        </NavLinks>
      </NavContent>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
`;

const NavContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 12px 32px;
  }
`;

const Logo = styled(RouterLink)`
  font-family: ${theme.fonts.display};
  font-size: 24px;
  color: ${theme.colors.primaryText};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (min-width: ${Breakpoint.tablet}px) {
    display: none;
  }
`;

const HamburgerLine = styled.span<{ $open: boolean }>`
  width: 24px;
  height: 2px;
  background: ${theme.colors.primaryText};
  transition: all 200ms ease-in-out;
`;

const NavLinks = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.border};
  padding: 12px 20px;
  gap: 12px;
  animation: slideDown 200ms ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    display: flex;
    flex-direction: row;
    position: static;
    border-bottom: none;
    padding: 0;
    gap: 24px;
    align-items: center;
    animation: none;
  }
`;

const navLinkStyles = `
  font-family: ${theme.fonts.body};
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.mutedText};
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const NavAnchor = styled.a`
  ${navLinkStyles}
`;

const NavRouterLink = styled(RouterLink)`
  ${navLinkStyles}
`;

const ResumeButton = styled.a`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  background: ${theme.colors.primary};
  color: ${theme.colors.surface};
  border-radius: 6px;
  text-decoration: none;
  transition: background 200ms ease-in-out;

  &:hover {
    background: ${theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 14px;
  }
`;
