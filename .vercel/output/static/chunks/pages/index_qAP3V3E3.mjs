/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, j as renderComponent } from '../astro_mIQtAQPs.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image, a as $$BaseLayout } from './404_q9Glm0gr.mjs';
import { $ as $$HorizontalCard } from './__mm9DMJap.mjs';

const $$Astro$5 = createAstro("https://thomascazort.dev");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<section id="Home"> <div class="pb-12 mt-5"> <div class="text-5xl font-bold">Thomas Cazort</div> <div class="text-3xl py-3 font-bold">Full-Stack Software Engineer</div> <div class="py-2"> <text class="text-lg">
Hello! I'm Thomas Cazort. I am currently a <b>Software Engineer</b> at <b>Youdle</b>. I am also a grad student at <b>The University of Southern California</b> pursuing my <b>Master's in Computer Science</b>.
</text> </div> <div class="py-2"> <text class="text-lg">
In my free time, I'm usually rock climbing, biking, exploring the city,
        or working on my latest project.
</text> </div> <div class="mt-8"> <a class="btn" href="https://linkedin.com/in/thomascazort337/" target="_blank">
Let's connect!</a> <a href="./Resume.pdf" class="btn btn-outline ml-5"> View my Resume</a> </div> </div> </section>`;
}, "/Users/tomcaz/p/personal-site/src/components/mainComponents/Title.astro", void 0);

const $$Astro$4 = createAstro("https://thomascazort.dev");
const $$HorizontalExperience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HorizontalExperience;
  const {
    title,
    subtitle,
    img,
    desc,
    url,
    duration,
    tags,
    target = "_blank"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]"> <a${addAttribute(url, "href")}${addAttribute(target, "target")}> <div class="hero-content flex-col md:flex-row"> ${img && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": img, "aspectRatio": "16:9", "width": 750, "height": 1, "format": "webp", "alt": title, "class": "max-w-full md:max-w-[13rem] rounded-lg", "background": "white" })}`} <div class="grow w-full"> <div class="flow-root"> <h1 class="text-xl font-bold float-left"> ${title} </h1> <span class="float-right">${duration}</span> </div> <div> <span class="text-xl mr-1"> ${subtitle}</span> </div> <p class="py-1 text-1xl">${desc}</p> <div class="card-actions justify-end"> ${tags && tags.map((tag) => renderTemplate`<div class="badge bg-secondary badge-primary badge-outline"> ${tag} </div>`)} </div> </div> </div> </a> </div>`;
}, "/Users/tomcaz/p/personal-site/src/components/HorizontalExperience.astro", void 0);

const $$Astro$3 = createAstro("https://thomascazort.dev");
const $$WorkXP = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WorkXP;
  return renderTemplate`${maybeRenderHead()}<section id="Work-Experience"> <div> <div class="text-3xl w-full font-bold mb-2">Work Experience</div> </div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "Youdle", "subtitle": "Full-Stack Software Engineer", "img": "/youdle.png", "desc": "Fullstack Software Engineer focused on integrating small businesses into Youdle's product search via Shopify.", "url": "https://www.youdleit.com/", "duration": "Jan 2023 - Jan 2024", "tags": ["Typescript", "NextJS", "React", "Supabase"] })} <div class="divider my-0"></div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "HackSC", "subtitle": "Software Engineer", "img": "/hackSC.png", "desc": "Software Engineer for USC's flagship hackathon developing tools to ensure smooth event operations and quality user experiences.", "url": "https://www.youdleit.com/", "duration": "Sept 2023 - Present", "tags": ["Typescript", "NextJS", "React", "ExpressJS"] })} <div class="divider my-0"></div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "The University of Memphis", "subtitle": "Undergraduate Researcher", "duration": "Jan 2023 - Aug 2023", "img": "/UofM.jpg", "desc": "Research Experience for Undergraduates (REU) under Dr. Deepak Venugopal focusing on fairness in machine-learning model feature selection.", "url": "https://www.memphis.edu/cs/", "tags": ["Python", "Pandas", "Tensorflow", "PyTorch"] })} <div class="divider my-0"></div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "International Paper", "subtitle": "Connectivity Software Engineer - Intern", "img": "/IP.png", "desc": "Implemented a code automation and deployment tool that saves ~1000 hours per year.", "url": "https://www.internationalpaper.com/", "duration": "May 2022 - Aug 2022", "tags": ["Javascript", "HTML", "CSS"] })} </section>`;
}, "/Users/tomcaz/p/personal-site/src/components/mainComponents/WorkXP.astro", void 0);

const $$Astro$2 = createAstro("https://thomascazort.dev");
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${maybeRenderHead()}<section id="Education"> <div> <div class="text-3xl w-full font-bold mb-2">Education</div> </div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "University of Southern California", "subtitle": "M.S. in Computer Science", "img": "/viterbi.jpeg", "desc": "Viterbi School of Engineering", "url": "https://www.cs.usc.edu/", "duration": "Expected Graduation, May 2025" })} <div class="divider my-0"></div> ${renderComponent($$result, "HorizontalExperience", $$HorizontalExperience, { "title": "University of Memphis", "subtitle": "B.S. in Computer Science", "img": "/UofM.jpg", "desc": "College of Arts and Sciences", "url": "https://www.memphis.edu/cs/", "duration": "August 2020 - May 2023" })} </section>`;
}, "/Users/tomcaz/p/personal-site/src/components/mainComponents/Education.astro", void 0);

const $$Astro$1 = createAstro("https://thomascazort.dev");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section id="Projects"> <div> <div class="text-3xl w-full font-bold mb-5">Projects</div> </div> ${renderComponent($$result, "HorizontalCard", $$HorizontalCard, { "title": "AI Generated Art Classifier", "img": "/midjourney.jpeg", "desc": "Convolutional Neural Network that determines if art was AI generated with a 91% testing accuracy. Compares AI-generated art from Midjourney and human-created art from the Wiki-Art database.", "url": "https://github.com/Tom-Caz/AIGeneratedArtClassifier", "tags": ["Python", "Tensorflow", "Keras"] })} <div class="divider my-0"></div> ${renderComponent($$result, "HorizontalCard", $$HorizontalCard, { "title": "Spotify Sub-Playlist Generator", "img": "/spotify.jpeg", "desc": "Web app that creates genre-based sub-playlists from a user\u2019s playlists or liked songs using the Spotify API. Built using Django on the backend and hosted on an AWS EC2 instance.", "url": "https://github.com/Tom-Caz/", "tags": ["Python", "Django", "REST APIs"] })} </section>`;
}, "/Users/tomcaz/p/personal-site/src/components/mainComponents/Projects.astro", void 0);

const $$Astro = createAstro("https://thomascazort.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "ref": "Title" })} ${renderComponent($$result2, "WorkXP", $$WorkXP, { "ref": "WorkXP" })} ${maybeRenderHead()}<div class="divider p-5"></div> ${renderComponent($$result2, "Education", $$Education, { "ref": "Education" })} <div class="divider p-5"></div> ${renderComponent($$result2, "Projects", $$Projects, { "ref": "Projects" })} ` })}`;
}, "/Users/tomcaz/p/personal-site/src/pages/index.astro", void 0);

const $$file = "/Users/tomcaz/p/personal-site/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
