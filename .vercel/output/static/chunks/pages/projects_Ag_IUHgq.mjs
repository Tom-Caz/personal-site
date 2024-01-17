/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_mIQtAQPs.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_q9Glm0gr.mjs';
import { $ as $$HorizontalCard } from './__mm9DMJap.mjs';

const $$Astro = createAstro("https://thomascazort.dev");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Projects</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "AI Generated Art Classifier", "img": "/midjourney.jpeg", "desc": "Convolutional Neural Network that determines if art was AI generated with a 91% testing accuracy. Compares AI-generated art from Midjourney and human-created art from the Wiki-Art database.", "url": "https://github.com/Tom-Caz/AIGeneratedArtClassifier", "tags": ["Python", "Tensorflow", "Keras"] })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Spotify Sub-Playlist Generator", "img": "/spotify.jpeg", "desc": "Web app that creates genre-based sub-playlists from a user\u2019s playlists or liked songs using the Spotify API. Built using Django on the backend and hosted on an AWS EC2 instance.", "url": "https://github.com/Tom-Caz/", "tags": ["Python", "Django", "REST APIs"] })} ` })}`;
}, "/Users/tomcaz/p/personal-site/src/pages/projects.astro", void 0);

const $$file = "/Users/tomcaz/p/personal-site/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
