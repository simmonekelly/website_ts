# Personal Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio site into a hybrid single-page/multi-page resume site with editorial layout, warm terracotta color scheme, sticky nav, and dedicated pages for Projects, Experience, and About.

**Architecture:** Evolve the existing React + TypeScript + styled-components codebase. Add React Router (already installed) for dedicated pages. Refactor the current sidebar layout into a sticky top nav with single-column editorial content. Clean up dead files and consolidate styling.

**Tech Stack:** React 18, TypeScript, styled-components, React Router DOM 6, react-icons

---

## File Structure

### Files to Create
- `src/styles/theme.ts` — new theme object with all color tokens and typography constants
- `src/components/Nav/Nav.tsx` — sticky top navigation bar
- `src/components/Tag.tsx` — reusable pill tag for tech/skills
- `src/components/SectionHeader.tsx` — H2 + optional "See all →" link
- `src/components/Footer.tsx` — site footer with copyright + social links
- `src/pages/LandingPage.tsx` — landing page composing all sections
- `src/pages/ProjectsPage.tsx` — dedicated projects page
- `src/pages/ExperiencePage.tsx` — dedicated experience page
- `src/pages/AboutPage.tsx` — dedicated about page
- `src/components/Sections/SkillsOverview.tsx` — categorized skills columns
- `src/data/projectsData.json` — consolidated projects data
- `src/data/experienceData.json` — consolidated experience data
- `src/data/skillsData.json` — consolidated skills data

### Files to Modify
- `src/styles/styles.ts` — replace `Colors` with new theme, update typography components
- `src/App.tsx` — replace Layout with Router + Nav + Footer structure
- `src/components/Button.tsx` — restyle with new theme tokens
- `src/components/Layout/SectionLayout.tsx` — add `variant` prop for alternating backgrounds
- `src/components/Sections/Hero.tsx` — editorial split layout
- `src/components/Sections/ContactMe.tsx` — centered contact section
- `src/components/Sections/projects/ProjectCard.tsx` — restyle with new theme
- `src/components/Sections/experience/ExperienceCard.tsx` — restyle with new theme
- `src/components/Sections/experience/Tool.tsx` — replace with Tag component
- `src/components/Sections/projects/Projects.tsx` — preview mode (2-3 cards)
- `src/components/Sections/experience/Experience.tsx` — preview mode (1-2 cards)
- `src/styles/global.css` — update font imports (add Manrope weights)
- `src/index.tsx` — wrap App in BrowserRouter

### Files to Delete
- `src/components/Header/Header.tsx` — replaced by Nav
- `src/components/Layout/Layout.tsx` — replaced by new App structure
- `src/components/Layout/ColorPallete.tsx` — unused
- `src/pages/about/Page.tsx` — replaced by AboutPage
- `src/pages/experience/Page.tsx` — replaced by ExperiencePage
- `src/pages/experience/ExperienceCard.tsx` — duplicate
- `src/pages/experience/Tool.tsx` — duplicate
- `src/pages/experience/experienceData.json` — consolidated to src/data/
- `src/pages/projects/Page.tsx` — replaced by ProjectsPage
- `src/pages/projects/projectsData.json` — consolidated to src/data/
- `src/pages/index.ts` — no longer needed
- `src/components/index.ts` — no longer needed (direct imports)
- `src/components/SkillCard/SkillCard.tsx` — replaced by SkillsOverview
- `src/components/SkillCard/SkillCard.scss` — no longer needed
- `src/components/SkillCard/Skill.tsx` — replaced by SkillsOverview
- `src/components/SkillCard/useSkillIcon.tsx` — no longer needed (skills are text-only in new design)
- `src/components/ProjectCard/ProjectCard.tsx` — duplicate, using Sections version
- `src/styles/_global.scss` — consolidated into global.css
- `src/App.scss` — consolidated into global.css

---

### Task 1: Theme & Design Tokens

**Files:**
- Create: `src/styles/theme.ts`
- Modify: `src/styles/global.css`
- Modify: `src/styles/styles.ts`

- [ ] **Step 1: Create the theme file**

Create `src/styles/theme.ts`:

```typescript
export const theme = {
  colors: {
    background: "#faf6f1",
    backgroundAlt: "#f5ede4",
    surface: "#ffffff",
    primary: "#c05621",
    primaryHover: "#9c4221",
    focusRing: "#d4833b",
    secondary: "#c4a882",
    primaryText: "#2d2d2d",
    mutedText: "#6b5b4e",
    border: "#e8ddd3",
    tagBg: "#efe4d8",
  },
  breakpoints: {
    tablet: 768,
    desktop: 1280,
  },
  fonts: {
    display: '"Luckiest Guy", cursive',
    body: '"Manrope", sans-serif',
  },
} as const;

export type Theme = typeof theme;
```

- [ ] **Step 2: Update global.css with Manrope font import**

Replace the contents of `src/styles/global.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #faf6f1;
  color: #2d2d2d;
}
```

- [ ] **Step 3: Update styles.ts with new theme-based typography**

Replace the contents of `src/styles/styles.ts`:

```typescript
import styled from "styled-components";
import { theme } from "./theme";

export { theme };

export const Breakpoint = theme.breakpoints;

export const H1 = styled.h1`
  font-family: ${theme.fonts.display};
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  line-height: 1.1;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 48px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 56px;
  }
`;

export const H2 = styled.h2`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  line-height: 1.3;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 28px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 32px;
  }
`;

export const H3 = styled.h3`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  line-height: 1.3;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 18px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 10px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${theme.colors.primary};

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 11px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  color: ${theme.colors.primaryText};

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 15px;
  }

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 16px;
  }
`;

export const MutedText = styled.p`
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  line-height: 1.6;
  color: ${theme.colors.mutedText};

  @media (min-width: ${Breakpoint.desktop}px) {
    font-size: 13px;
  }
`;
```

- [ ] **Step 4: Verify the app compiles**

Run: `cd /Users/simmone.kelly/dev/website_ts && npm start`
Expected: The app will have compile errors because other components still import `clayColors` and `Colors`. That's expected — we'll fix those in subsequent tasks. Just confirm that `theme.ts` and `styles.ts` themselves have no syntax errors by checking the compiler output for errors specifically in those files.

- [ ] **Step 5: Commit**

```bash
git add src/styles/theme.ts src/styles/styles.ts src/styles/global.css
git commit -m "feat: add new theme tokens and update typography system"
```

---

### Task 2: Button & Tag Primitives

**Files:**
- Modify: `src/components/Button.tsx`
- Create: `src/components/Tag.tsx`

- [ ] **Step 1: Rewrite Button component**

Replace the contents of `src/components/Button.tsx`:

```tsx
import styled from "styled-components";
import { theme, Breakpoint } from "../styles/styles";

export const Button = styled.a<{ primary?: boolean }>`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 6px;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  background: ${({ primary }) =>
    primary ? theme.colors.primary : "transparent"};
  color: ${({ primary }) =>
    primary ? theme.colors.surface : theme.colors.primary};
  border: 2px solid ${theme.colors.primary};

  &:hover {
    background: ${({ primary }) =>
      primary ? theme.colors.primaryHover : theme.colors.primary};
    color: ${theme.colors.surface};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 14px;
  }
`;
```

- [ ] **Step 2: Create Tag component**

Create `src/components/Tag.tsx`:

```tsx
import styled from "styled-components";
import { theme } from "../styles/styles";

export const Tag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: ${theme.colors.tagBg};
  color: ${theme.colors.mutedText};
  border-radius: 4px;
  font-family: ${theme.fonts.body};
  font-size: 12px;
  font-weight: 400;
`;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Button.tsx src/components/Tag.tsx
git commit -m "feat: restyle Button with new theme, add Tag primitive"
```

---

### Task 3: SectionLayout & SectionHeader

**Files:**
- Modify: `src/components/Layout/SectionLayout.tsx`
- Create: `src/components/SectionHeader.tsx`

- [ ] **Step 1: Rewrite SectionLayout with variant prop**

Replace the contents of `src/components/Layout/SectionLayout.tsx`:

```tsx
import React from "react";
import styled from "styled-components";
import { theme, Breakpoint } from "../../styles/styles";

type SectionLayoutProps = React.PropsWithChildren<{
  id: string;
  variant?: "default" | "alt";
}>;

export const SectionLayout: React.FC<SectionLayoutProps> = ({
  id,
  variant = "default",
  children,
}) => {
  return (
    <Section id={id} $variant={variant}>
      <ContentWrapper>{children}</ContentWrapper>
    </Section>
  );
};

const Section = styled.section<{ $variant: "default" | "alt" }>`
  background-color: ${({ $variant }) =>
    $variant === "alt" ? theme.colors.backgroundAlt : theme.colors.background};
  padding: 48px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 64px 32px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export default SectionLayout;
```

- [ ] **Step 2: Create SectionHeader component**

Create `src/components/SectionHeader.tsx`:

```tsx
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { theme, H2 } from "../styles/styles";

type SectionHeaderProps = {
  title: string;
  linkText?: string;
  linkTo?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  linkTo,
}) => {
  return (
    <Container>
      <H2>{title}</H2>
      {linkText && linkTo && (
        <StyledLink to={linkTo}>
          {linkText} &rarr;
        </StyledLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`;

const StyledLink = styled(RouterLink)`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: ${theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Layout/SectionLayout.tsx src/components/SectionHeader.tsx
git commit -m "feat: add variant prop to SectionLayout, create SectionHeader"
```

---

### Task 4: Nav Component

**Files:**
- Create: `src/components/Nav/Nav.tsx`

- [ ] **Step 1: Create Nav component**

Create `src/components/Nav/Nav.tsx`:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav/Nav.tsx
git commit -m "feat: create sticky Nav component with mobile hamburger menu"
```

---

### Task 5: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:

```tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styled from "styled-components";
import { theme, Breakpoint } from "../styles/styles";

export const Footer: React.FC = () => {
  return (
    <FooterBar>
      <FooterContent>
        <Copyright>&copy; {new Date().getFullYear()} Simmone Kelly</Copyright>
        <SocialLinks>
          <SocialLink href="mailto:simmone.kelly@gmail.com" aria-label="Email">
            <MdOutlineMail size={18} />
          </SocialLink>
          <SocialLink
            href="https://github.com/simmonekelly"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/simmonekelly/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterBar>
  );
};

const FooterBar = styled.footer`
  background: ${theme.colors.surface};
  border-top: 1px solid ${theme.colors.border};
  padding: 24px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 24px 32px;
  }
`;

const FooterContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 12px;
  color: ${theme.colors.mutedText};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: ${theme.colors.mutedText};
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: create Footer component with social links"
```

---

### Task 6: Consolidate Data Files

**Files:**
- Create: `src/data/projectsData.json`
- Create: `src/data/experienceData.json`
- Create: `src/data/skillsData.json`

- [ ] **Step 1: Create src/data directory and consolidate data files**

Create `src/data/projectsData.json`:

```json
[
  {
    "name": "Last Set Best Set",
    "description": "Brainstation Capstone Project where I built a web app that lets you log and track your workouts using React, Node, and Express.",
    "github": "https://github.com/simmonekelly/simmone-kelly-capstone-lastsetbestset",
    "link": "",
    "tech": ["React", "Express", "Sass"]
  },
  {
    "name": "Q & A",
    "description": "Q & A is a web-based application focused on an FAQ that helps employees feel connected, reduces anxiety about waiting for HR answers, and saves company dollars.",
    "github": "https://github.com/simmonekelly/brainstation-industry-project",
    "link": "",
    "tech": ["React", "Express", "Sass", "Hackathon"]
  },
  {
    "name": "BrainFlix",
    "description": "Video streaming platform using React for front-end and Express for back-end development.",
    "github": "https://github.com/simmonekelly/simmone-kelly-brainflix",
    "link": "",
    "tech": ["React", "Sass", "Express"]
  },
  {
    "name": "Band Site",
    "description": "Band Site project for Web Development Bootcamp that is a dynamic website with API integration, using Vanilla JS, SASS, and HTML.",
    "github": "https://github.com/simmonekelly/simmone-kelly-bandsite",
    "link": "https://simmonekelly.github.io/simmone-kelly-bandsite/",
    "tech": ["Vanilla JS", "Axios", "Sass", "HTML"]
  }
]
```

Note: `tech` is now an array of strings instead of a pipe-separated string. This makes it easy to render as `Tag` components.

Create `src/data/experienceData.json`:

```json
[
  {
    "year": "2022 - Present",
    "title": "Full Stack Software Engineer",
    "company": "Peloton",
    "description": "Develop UIs, APIs, and workflows for our shop and subscription platform that include product catalog management, checkout, cart, payment processing, promotion management, etc.",
    "tools": ["Typescript", "React", "Contentful", "Storybook", "Python", "GraphQL", "REST", "React Testing Library", "Design Systems"]
  }
]
```

Create `src/data/skillsData.json`:

```json
[
  {
    "category": "Languages",
    "skills": ["HTML5", "CSS", "TypeScript", "JavaScript", "Python"]
  },
  {
    "category": "Frameworks",
    "skills": ["Express", "React", "Node.js", "styled-components"]
  },
  {
    "category": "Tools",
    "skills": ["GraphQL", "Git", "AWS", "GitHub Actions", "Docker"]
  }
]
```

Note: Skills data simplified to just name strings (no icon mapping needed — the new design uses text-only skill lists).

- [ ] **Step 2: Commit**

```bash
git add src/data/
git commit -m "feat: consolidate data files into src/data with updated schema"
```

---

### Task 7: Hero Section

**Files:**
- Modify: `src/components/Sections/Hero.tsx`

- [ ] **Step 1: Rewrite Hero with editorial split layout**

Replace the contents of `src/components/Sections/Hero.tsx`:

```tsx
import React from "react";
import me from "../../images/me.jpg";
import styled from "styled-components";
import { theme, Breakpoint, H1, Paragraph } from "../../styles/styles";
import { Button } from "../Button";

export const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <TextSide>
          <H1>
            Simmone
            <br />
            Kelly
          </H1>
          <Subtitle>
            Full-Stack Web Developer building things that matter. Based in NYC.
          </Subtitle>
          <ButtonGroup>
            <Button href="/resume.pdf" target="_blank" rel="noreferrer" primary>
              Download Resume
            </Button>
            <Button href="#contact">Contact Me</Button>
          </ButtonGroup>
        </TextSide>
        <PhotoSide>
          <HeroImage src={me} alt="Simmone Kelly" />
        </PhotoSide>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: ${theme.colors.background};
  padding: 48px 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    padding: 64px 32px;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${Breakpoint.tablet}px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`;

const TextSide = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: ${Breakpoint.tablet}px) {
    text-align: left;
  }
`;

const Subtitle = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  margin-top: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (min-width: ${Breakpoint.tablet}px) {
    justify-content: flex-start;
  }
`;

const PhotoSide = styled.div`
  flex-shrink: 0;
`;

const HeroImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  object-fit: cover;

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 160px;
    height: 160px;
  }
`;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Sections/Hero.tsx
git commit -m "feat: redesign Hero with editorial split layout"
```

---

### Task 8: SkillsOverview Section

**Files:**
- Create: `src/components/Sections/SkillsOverview.tsx`

- [ ] **Step 1: Create SkillsOverview component**

Create `src/components/Sections/SkillsOverview.tsx`:

```tsx
import React from "react";
import styled from "styled-components";
import { theme, Breakpoint, H2, H4, Paragraph } from "../../styles/styles";
import { SectionLayout } from "../Layout/SectionLayout";
import skillsData from "../../data/skillsData.json";

type SkillCategory = {
  category: string;
  skills: string[];
};

export const SkillsOverview: React.FC = () => {
  return (
    <SectionLayout id="skills" variant="alt">
      <H2 style={{ marginBottom: "20px" }}>What's In My Tool Kit</H2>
      <ColumnsContainer>
        {(skillsData as SkillCategory[]).map((cat) => (
          <Column key={cat.category}>
            <H4>{cat.category}</H4>
            <SkillList>
              {cat.skills.map((skill) => (
                <SkillName key={skill}>{skill}</SkillName>
              ))}
            </SkillList>
          </Column>
        ))}
      </ColumnsContainer>
    </SectionLayout>
  );
};

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${Breakpoint.tablet}px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const SkillList = styled.div`
  margin-top: 8px;
`;

const SkillName = styled(Paragraph)`
  line-height: 2;
`;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Sections/SkillsOverview.tsx
git commit -m "feat: create SkillsOverview with categorized columns"
```

---

### Task 9: ProjectCard & Projects Preview

**Files:**
- Modify: `src/components/Sections/projects/ProjectCard.tsx`
- Modify: `src/components/Sections/projects/Projects.tsx`

- [ ] **Step 1: Rewrite ProjectCard with new theme**

Replace the contents of `src/components/Sections/projects/ProjectCard.tsx`:

```tsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import { theme, Breakpoint, H3, Paragraph } from "../../../styles/styles";
import { Tag } from "../../Tag";

export type Project = {
  name: string;
  description: string;
  github: string;
  link: string;
  tech: string[];
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Thumbnail />
      <CardBody>
        <HeaderRow>
          <H3>{project.name}</H3>
          <IconLinks>
            <IconLink href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={16} />
            </IconLink>
            {project.link && (
              <IconLink href={project.link} target="_blank" rel="noreferrer" aria-label="Live site">
                <FaExternalLinkAlt size={14} />
              </IconLink>
            )}
          </IconLinks>
        </HeaderRow>
        <Description>{project.description}</Description>
        <TagRow>
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagRow>
      </CardBody>
    </Card>
  );
};

const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  height: 120px;
  background: ${theme.colors.border};

  @media (min-width: ${Breakpoint.tablet}px) {
    height: 140px;
  }
`;

const CardBody = styled.div`
  padding: 16px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const IconLink = styled.a`
  color: ${theme.colors.mutedText};
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

const Description = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  font-size: 13px;
  margin-bottom: 12px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export default ProjectCard;
```

- [ ] **Step 2: Rewrite Projects as a preview section**

Replace the contents of `src/components/Sections/projects/Projects.tsx`:

```tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import data from "../../../data/projectsData.json";
import { SectionLayout } from "../../Layout/SectionLayout";
import { SectionHeader } from "../../SectionHeader";
import styled from "styled-components";
import { Breakpoint } from "../../../styles/styles";

type ProjectsProps = {
  showAll?: boolean;
};

export const Projects: React.FC<ProjectsProps> = ({ showAll = false }) => {
  const projects = showAll ? data : data.slice(0, 3);

  return (
    <SectionLayout id="projects">
      <SectionHeader
        title="Projects"
        linkText={showAll ? undefined : "See all projects"}
        linkTo={showAll ? undefined : "/projects"}
      />
      <ProjectsGrid>
        {(projects as Project[]).map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsGrid>
    </SectionLayout>
  );
};

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${Breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
  }
`;
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Sections/projects/ProjectCard.tsx src/components/Sections/projects/Projects.tsx
git commit -m "feat: restyle ProjectCard and Projects with preview mode"
```

---

### Task 10: ExperienceCard & Experience Preview

**Files:**
- Modify: `src/components/Sections/experience/ExperienceCard.tsx`
- Modify: `src/components/Sections/experience/Experience.tsx`
- Modify: `src/components/Sections/experience/Tool.tsx`

- [ ] **Step 1: Rewrite ExperienceCard with new theme**

Replace the contents of `src/components/Sections/experience/ExperienceCard.tsx`:

```tsx
import React from "react";
import styled from "styled-components";
import { theme, H3, Paragraph, MutedText } from "../../../styles/styles";
import { Tag } from "../../Tag";

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
  tools: string[];
};

type ExperienceCardProps = {
  job: Experience;
  detailed?: boolean;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, detailed = false }) => {
  const { year, title, company, description, tools } = job;

  return (
    <Card>
      <TopRow>
        <H3>{title}</H3>
        <MutedText>{year}</MutedText>
      </TopRow>
      <Company>{company}</Company>
      <Description>{description}</Description>
      {detailed && (
        <TagRow>
          {tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </TagRow>
      )}
    </Card>
  );
};

const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  padding: 20px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Company = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.primary};
  display: block;
  margin-top: 2px;
  margin-bottom: 8px;
`;

const Description = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  font-size: 14px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
`;

export default ExperienceCard;
```

- [ ] **Step 2: Rewrite Experience as a preview section**

Replace the contents of `src/components/Sections/experience/Experience.tsx`:

```tsx
import React from "react";
import data from "../../../data/experienceData.json";
import { SectionLayout } from "../../Layout/SectionLayout";
import { SectionHeader } from "../../SectionHeader";
import ExperienceCard from "./ExperienceCard";
import type { Experience as ExperienceType } from "./ExperienceCard";
import styled from "styled-components";

type ExperienceProps = {
  showAll?: boolean;
};

export const Experience: React.FC<ExperienceProps> = ({ showAll = false }) => {
  const jobs = showAll ? data : data.slice(0, 2);

  return (
    <SectionLayout id="experience" variant="alt">
      <SectionHeader
        title="Experience"
        linkText={showAll ? undefined : "Full history"}
        linkTo={showAll ? undefined : "/experience"}
      />
      <JobList>
        {(jobs as ExperienceType[]).map((job, i) => (
          <ExperienceCard job={job} key={i} detailed={showAll} />
        ))}
      </JobList>
    </SectionLayout>
  );
};

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
```

- [ ] **Step 3: Delete the old Tool.tsx** (replaced by Tag component)

Delete `src/components/Sections/experience/Tool.tsx`.

- [ ] **Step 4: Commit**

```bash
git add src/components/Sections/experience/ExperienceCard.tsx src/components/Sections/experience/Experience.tsx
git rm src/components/Sections/experience/Tool.tsx
git commit -m "feat: restyle ExperienceCard and Experience with preview mode"
```

---

### Task 11: Contact Section

**Files:**
- Modify: `src/components/Sections/ContactMe.tsx`

- [ ] **Step 1: Rewrite ContactMe with new theme**

Replace the contents of `src/components/Sections/ContactMe.tsx`:

```tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import styled from "styled-components";
import { theme, Breakpoint, H2, Paragraph } from "../../styles/styles";
import { SectionLayout } from "../Layout/SectionLayout";

const ContactMe: React.FC = () => {
  return (
    <SectionLayout id="contact">
      <CenteredContent>
        <H2>Let's Connect</H2>
        <Subtitle>Open to opportunities and collaboration.</Subtitle>
        <LinksRow>
          <ContactLink href="mailto:simmone.kelly@gmail.com">
            <MdOutlineMail size={18} />
            Email
          </ContactLink>
          <ContactLink
            href="https://github.com/simmonekelly"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} />
            GitHub
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/simmonekelly/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </ContactLink>
        </LinksRow>
      </CenteredContent>
    </SectionLayout>
  );
};

const CenteredContent = styled.div`
  text-align: center;
`;

const Subtitle = styled(Paragraph)`
  color: ${theme.colors.mutedText};
  margin-top: 8px;
  margin-bottom: 24px;
`;

const LinksRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.primaryText};
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }

  @media (min-width: ${Breakpoint.tablet}px) {
    font-size: 14px;
  }
`;

export default ContactMe;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Sections/ContactMe.tsx
git commit -m "feat: restyle ContactMe with centered card layout"
```

---

### Task 12: Landing Page

**Files:**
- Create: `src/pages/LandingPage.tsx`

- [ ] **Step 1: Create LandingPage component**

Create `src/pages/LandingPage.tsx`:

```tsx
import React from "react";
import { Hero } from "../components/Sections/Hero";
import { SkillsOverview } from "../components/Sections/SkillsOverview";
import { Projects } from "../components/Sections/projects/Projects";
import { Experience } from "../components/Sections/experience/Experience";
import ContactMe from "../components/Sections/ContactMe";

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <SkillsOverview />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  );
};

export default LandingPage;
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/LandingPage.tsx
git commit -m "feat: create LandingPage composing all sections"
```

---

### Task 13: Dedicated Pages

**Files:**
- Create: `src/pages/ProjectsPage.tsx`
- Create: `src/pages/ExperiencePage.tsx`
- Create: `src/pages/AboutPage.tsx`

- [ ] **Step 1: Create ProjectsPage**

Create `src/pages/ProjectsPage.tsx`:

```tsx
import React from "react";
import { Projects } from "../components/Sections/projects/Projects";

const ProjectsPage: React.FC = () => {
  return <Projects showAll />;
};

export default ProjectsPage;
```

- [ ] **Step 2: Create ExperiencePage**

Create `src/pages/ExperiencePage.tsx`:

```tsx
import React from "react";
import { Experience } from "../components/Sections/experience/Experience";

const ExperiencePage: React.FC = () => {
  return <Experience showAll />;
};

export default ExperiencePage;
```

- [ ] **Step 3: Create AboutPage**

Create `src/pages/AboutPage.tsx`:

```tsx
import React from "react";
import styled from "styled-components";
import { theme, Breakpoint, H2, Paragraph } from "../styles/styles";
import { SectionLayout } from "../components/Layout/SectionLayout";

const AboutPage: React.FC = () => {
  return (
    <SectionLayout id="about">
      <H2 style={{ marginBottom: "20px" }}>About Me</H2>
      <Content>
        <Paragraph>
          Email marketer turned software engineer, currently frolicking around
          NYC. When I'm not coding, you'll find me lifting heavy things and
          setting them back down in the gym, hitting up a local brewery, or
          blessing my friends with the sweet sound of emo throwbacks at karaoke.
        </Paragraph>
        <Paragraph style={{ marginTop: "16px" }}>
          I was first introduced to programming back when I was just trying to
          have a sweet custom Myspace page. I loved it — but at the time, I
          didn't realize it could be a career. I went on to earn a degree in
          marketing and management, and spent 8 years working in email and
          digital marketing.
        </Paragraph>
        <Paragraph style={{ marginTop: "16px" }}>
          During the pandemic I revisited programming and quickly rediscovered
          how much I enjoyed it. I completed a part time web development
          bootcamp at{" "}
          <StyledLink href="https://brainstation.io/">BrainStation</StyledLink>{" "}
          where I fell in love with all things web development. After
          graduating, I transitioned internally at{" "}
          <StyledLink href="https://www.onepeloton.com/">Peloton</StyledLink>{" "}
          into a Software Engineering role on our Ecommerce team and have never
          looked back.
        </Paragraph>
      </Content>
    </SectionLayout>
  );
};

const Content = styled.div`
  max-width: 600px;
`;

const StyledLink = styled.a`
  color: ${theme.colors.primary};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.focusRing};
    outline-offset: 2px;
  }
`;

export default AboutPage;
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/ProjectsPage.tsx src/pages/ExperiencePage.tsx src/pages/AboutPage.tsx
git commit -m "feat: create dedicated Projects, Experience, and About pages"
```

---

### Task 14: Router Setup & App Rewrite

**Files:**
- Modify: `src/index.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Add BrowserRouter to index.tsx**

Replace the contents of `src/index.tsx`:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- [ ] **Step 2: Rewrite App.tsx with routes**

Replace the contents of `src/App.tsx`:

```tsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutPage from "./pages/AboutPage";

function App() {
  useEffect(() => {
    document.title = "Simmone Kelly";
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

- [ ] **Step 3: Commit**

```bash
git add src/index.tsx src/App.tsx
git commit -m "feat: wire up React Router with Nav and Footer"
```

---

### Task 15: Clean Up Dead Files

**Files to delete:**
- `src/components/Header/Header.tsx`
- `src/components/Layout/Layout.tsx`
- `src/components/Layout/ColorPallete.tsx`
- `src/components/index.ts`
- `src/components/ProjectCard/ProjectCard.tsx`
- `src/components/SkillCard/SkillCard.tsx`
- `src/components/SkillCard/SkillCard.scss`
- `src/components/SkillCard/Skill.tsx`
- `src/components/SkillCard/useSkillIcon.tsx`
- `src/pages/about/Page.tsx`
- `src/pages/experience/Page.tsx`
- `src/pages/experience/ExperienceCard.tsx`
- `src/pages/experience/Tool.tsx`
- `src/pages/experience/experienceData.json`
- `src/pages/projects/Page.tsx`
- `src/pages/projects/projectsData.json`
- `src/pages/index.ts`
- `src/pages/skills/Page.tsx`
- `src/pages/skills/skillsData.json`
- `src/components/Sections/About.tsx`
- `src/components/Sections/experience/experienceData.json`
- `src/components/Sections/projects/projectsData.json`
- `src/styles/_global.scss`
- `src/App.scss`

- [ ] **Step 1: Delete all dead files**

```bash
git rm src/components/Header/Header.tsx
git rm src/components/Layout/Layout.tsx
git rm src/components/Layout/ColorPallete.tsx
git rm src/components/index.ts
git rm src/components/ProjectCard/ProjectCard.tsx
git rm src/components/SkillCard/SkillCard.tsx
git rm src/components/SkillCard/SkillCard.scss
git rm src/components/SkillCard/Skill.tsx
git rm src/components/SkillCard/useSkillIcon.tsx
git rm src/pages/about/Page.tsx
git rm src/pages/experience/Page.tsx
git rm src/pages/experience/ExperienceCard.tsx
git rm src/pages/experience/Tool.tsx
git rm src/pages/experience/experienceData.json
git rm src/pages/projects/Page.tsx
git rm src/pages/projects/projectsData.json
git rm src/pages/index.ts
git rm src/pages/skills/Page.tsx
git rm src/pages/skills/skillsData.json
git rm src/components/Sections/About.tsx
git rm src/components/Sections/experience/experienceData.json
git rm src/components/Sections/projects/projectsData.json
git rm src/styles/_global.scss
git rm src/App.scss
```

- [ ] **Step 2: Commit**

```bash
git commit -m "chore: remove dead files replaced by new architecture"
```

---

### Task 16: Verify & Fix

- [ ] **Step 1: Run the development server**

Run: `cd /Users/simmone.kelly/dev/website_ts && npm start`

Expected: The app should compile successfully and show the new landing page with:
- Sticky nav bar at top with "SK" logo, nav links, and Resume button
- Hero section with editorial split (name left, photo right)
- Skills section with categorized columns on alt background
- Projects preview with 3 cards in a grid
- Experience preview with card on alt background
- Contact section with social link buttons
- Footer at bottom

- [ ] **Step 2: Verify routing**

Click "See all projects →" — should navigate to `/projects` showing all 4 project cards.
Click "Full history →" — should navigate to `/experience` showing detailed experience cards with tool tags.
Click "About" in nav — should navigate to `/about` with full bio.
Click "SK" logo — should return to landing page.

- [ ] **Step 3: Verify mobile responsive**

Open browser devtools, toggle to mobile viewport (375px width):
- Nav should show hamburger icon
- Hamburger click should reveal slide-down menu
- Hero should stack vertically (text above, photo below)
- Skills columns should stack vertically
- Project cards should stack in single column

- [ ] **Step 4: Fix any issues found**

Address any compile errors, layout issues, or broken links discovered in steps 1-3.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "fix: resolve any remaining issues from redesign"
```
