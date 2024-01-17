/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, l as renderSlot, j as renderComponent } from '../astro_mIQtAQPs.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_q9Glm0gr.mjs';

const $$Astro$2 = createAstro("https://thomascazort.dev");
const $$TimeLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TimeLine;
  const { title, subtitle, description, start, end } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> ${subtitle && renderTemplate`<h5 class="font-semibold mb-1">${subtitle}</h5>`} <span class="font-light text-sm"><b>${start}</b> to <b>${end}</b></span> <p class="font-light text-sm">${description}</p> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/tomcaz/p/personal-site/src/components/cv/TimeLine.astro", void 0);

const $$Astro$1 = createAstro("https://thomascazort.dev");
const $$TimeLineBullet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeLineBullet;
  const { title, subtitle, bullets, start, end } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="education__time"> <span class="w-4 h-4 bg-primary block rounded-full mt-1"></span> <span class="education__line bg-primary block h-full w-[2px] translate-x-[7px]"></span> </div> <div class="experience__data bd-grid px-5"> <h3 class="font-semibold mb-1">${title}</h3> ${subtitle && renderTemplate`<h5 class="font-semibold mb-1">${subtitle}</h5>`} <span class="font-light text-sm"><b>${start}</b> to <b>${end}</b></span> <ul class="list-disc px-8 pt-2"> ${bullets && bullets.map((bullet) => renderTemplate`<li>${bullet}</li>`)} </ul> <p class="my-2 text-justify"> ${renderSlot($$result, $$slots["default"])} </p> </div> </div>`;
}, "/Users/tomcaz/p/personal-site/src/components/cv/TimeLineBullet.astro", void 0);

const $$Astro = createAstro("https://thomascazort.dev");
const $$Cv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "CV", "sideBarActiveItemID": "cv" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-5"> <div class="text-5xl w-full font-bold">Thomas Cazort</div> </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Education</div> </div> <div class="time-line-container grid gap-4 mb-10"> ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "The University of Southern California", "subtitle": "M.S in Computer Science", "start": "August 2023", "end": "Present", "description": "Viterbi School of Engineering, Los Angeles CA" })} ${renderComponent($$result2, "TimeLineElement", $$TimeLine, { "title": "The University of Memphis", "subtitle": "B.S. in Computer Science", "start": "August 2020", "end": "May 2023", "description": "College of Arts and Sciences, Memphis TN" })} </div> <div class="mb-5"> <div class="text-3xl w-full font-bold">Experience</div> </div> <div class="time-line-container mb-10"> ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "Youdle", "subtitle": "Full-Stack Software Engineer", "start": "May 2023", "end": "Present", "bullets": [
    "Created and published a Shopify sales channel app, enabling synchronization between multiple stores\u2019 inventory and Youdle's Supabase database.",
    "Optimized search algorithm to decrease search time by 500%, significantly improving user experience",
    "Developed GraphQL queries in Typescript to connect and retrieve information from Shopify.",
    "Contributed to the transition from Django to Next.js by converting key REST API functions."
  ] })} ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "HackSC", "subtitle": "Software Engineer", "start": "September 2023", "end": "Present", "bullets": [
    "Created a custom Discord bot using Express.js to streamline event management used by 200+ hackathon participants and sponsors.",
    "Revamped the frontend of our team page utilizing React and Next.js while adhering to the established Figma design."
  ] })} ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "The University of Memphis", "subtitle": "Undergraduate Researcher", "start": "January 2023", "end": "August 2023", "bullets": [
    "Research Experience for Undergraduates (REU) under Dr. Deepak Venugopal focusing on fairness in machine-learning model feature selection.",
    "Utilized PyTorch, Tensorflow, Keras, and Pandas to train models and analyze fairness."
  ] })} ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "International Paper", "subtitle": "Connectivity Solutions Engineering Intern", "start": "May 2022", "end": "August 2022", "bullets": [
    "Implemented a code automation and deployment tool that saves ~1000 hours per year.",
    "Designed a user interface that allows developers to efficiently create, update, and delete change requests stored in a SQL database.",
    "Led a team of 3 interns to win the \u2018Most Innovative Solution\u2019 award in the intern hackathon."
  ] })} ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "The University of Memphis", "subtitle": "Undergraduate Teaching Assistant", "start": "September 2021", "end": "December 2021", "bullets": [
    "Supported a professor in teaching the Intro to Python and Discrete Mathematics course.",
    "Provided a solid understanding of Python programming fundamentals, algorithmic complexity, data structures, etc."
  ] })} ${renderComponent($$result2, "TimeLineBullet", $$TimeLineBullet, { "title": "Germantown Municipal School District", "subtitle": "Technology Intern", "start": "November 2020", "end": "July 2021", "bullets": [
    "Implemented multiple new instructional websites using Google Sites.",
    "Designed the Student Technology Resource website used by every new student.",
    "Created instructional videos and documents to implement new software."
  ] })} </div> ` })}`;
}, "/Users/tomcaz/p/personal-site/src/pages/cv.astro", void 0);

const $$file = "/Users/tomcaz/p/personal-site/src/pages/cv.astro";
const $$url = "/cv";

export { $$Cv as default, $$file as file, $$url as url };
