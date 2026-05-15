import { createFileRoute } from "@tanstack/react-router";
import anmolPhoto from "@/assets/anmol.jpg";
import { link } from "fs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anmol chhetri" },
      
      { name: "description", content: "An evening edition portfolio of Anmol Chhetri — BCA student at Butwal Kalika Campus and Student Ambassador for the National Innovation Center." },
      { property: "og:title", content: "The Anmol Times — Portfolio" },
      { property: "og:description", content: "Reporting from Butwal: a student, a campus, and a small foundry of code." },
      { property: "og:image", content: anmolPhoto },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: anmolPhoto },
    ],
  }),
});

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Rule({ variant = "single" }: { variant?: "single" | "double" | "triple" }) {
  if (variant === "double") return <div className="double-rule h-0 w-full my-3" />;
  if (variant === "triple") return <div className="triple-rule h-0 w-full my-3" />;
  return <div className="border-t border-ink w-full my-3" />;
}

function Index() {
  return (
    <main className="min-h-screen paper-grain text-ink">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-8">
        {/* MASTHEAD */}
        <div className="flex items-end justify-between gap-4 text-[11px] uppercase tracking-[0.18em] font-mono">
          <span>Vol. I &nbsp;·&nbsp; No. 1</span>
          <span className="hidden sm:inline">Evening Edition</span>
          <span>Price: Free</span>
        </div>
        <Rule />
        <h1 className="font-blackletter text-center text-[14vw] md:text-[7.2rem] leading-[0.9]">
           Anmol Chhetri 
        </h1>
        <Rule variant="double" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-[0.2em] font-mono py-2">
          <span>Butwal, Lumbini · Nepal</span>
          <span className="italic normal-case tracking-normal font-display">"All the code that's fit to ship"</span>
          <span>{TODAY}</span>
        </div>
        <Rule variant="triple" />

        {/* HEADLINE */}
        <section className="pt-6 pb-2 text-center">
          <p className="smallcaps text-xs">— Lead Story —</p>
          <h2 className="font-display font-black tracking-[-0.02em] leading-[0.95] text-5xl md:text-7xl mt-2">
            Local Student Files Portfolio,
            <br />
            <span className="italic font-medium">Promises Nothing but Effort.</span>
          </h2>
          <p className="mt-4 font-display italic text-lg md:text-xl text-muted-foreground">
            BCA undergraduate Anmol Chhetri opens his pages to the public; readers advised to scroll.
          </p>
        </section>

        <Rule />

        {/* MAIN GRID */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 pt-4">
          <figure className="md:col-span-5">
            <div className="border border-ink p-1.5">
              <img
                src={anmolPhoto}
                alt="Anmol Chhetri, photographed in Butwal"
                className="block w-full aspect-[4/5] object-cover grayscale contrast-[0.99] sepia-[0.]"
              />
            </div>
            <figcaption className="mt-2 text-xs italic text-center text-muted-foreground">
              Fig. 1 — Mr. Chhetri, photographed earlier this term, declined further comment.
            </figcaption>
          </figure>

          <article className="md:col-span-7">
            <p className="smallcaps text-xs">From our Campus desk</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl leading-[1.05] tracking-[-0.01em] mt-1">
              A BCA Student, an Innovation Centre, and a Quiet Insistence on Building Things.
            </h3>
            <Rule />
            <div className="columns-1 sm:columns-2 gap-6 col-rule text-[15px] leading-[1.55] text-justify hyphens-auto">
              <p className="dropcap">
                <span className="smallcaps">BUTWAL —</span> Anmol Chhetri, a Bachelor of
                Computer Applications candidate at <em>Butwal Kalika Campus</em>, has,
                without ceremony, assembled the present portfolio. He currently serves as
                Student Ambassador for the National Innovation Center, where he organises
                programmes and presses, gently, for a culture in which students build
                rather than merely consume.
              </p>
              <p className="mt-3">
                Mr. Chhetri's interests run the usual undergraduate gauntlet —
                programming, databases, the small daily romance of getting a web page to
                render correctly. He insists, when asked, that he learns "fastest by
                shipping useful little things," a sentiment this paper finds difficult to
                argue with.
              </p>
              <p className="mt-3">
                Born and raised in Butwal, he has thus far resisted the temptation to
                relocate. Sources close to the matter confirm a steady diet of side
                projects and the occasional short course distributed to peers.
              </p>
            </div>
          </article>
        </section>

        <Rule variant="double" />

        {/* EDUCATION + SIDEBAR */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 pt-6">
          <div className="md:col-span-8 md:pr-8 md:border-r border-ink">
            <p className="smallcaps text-xs">Education Desk</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.01em]">
              The Curriculum Vitae, in Reverse Chronological Order.
            </h3>
            <Rule />
            <ol className="space-y-5">
              {[
                { title: "Bachelor of Computer Applications (BCA)", place: "Butwal Kalika Campus", status: "In progress", body: "A foundation in programming, database management, and web development. Currently mid-degree and reportedly enjoying it." },
                { title: "+2 Science", place: "Kalika Manavgyan Secondary School", status: "Completed", body: "Higher secondary studies completed with a focus on the science stream." },
                { title: "School Education (SEE / SLC)", place: "Prabhat English Boarding Secondary School", status: "10th grade passed", body: "Schooling concluded in Butwal; the obligatory rite of passage observed in full." },
              ].map((e) => (
                <li key={e.title}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-display font-bold text-lg leading-tight">{e.title}</h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] whitespace-nowrap">{e.status}</span>
                  </div>
                  <p className="text-xs italic text-muted-foreground mt-0.5">{e.place}</p>
                  <p className="text-[14px] leading-[1.55] mt-1.5">{e.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-4 md:pl-6 mt-8 md:mt-0">
            <p className="smallcaps text-xs text-center">In Brief</p>
            <Rule variant="double" />
            <dl className="text-[13px] divide-y divide-ink">
              {[
                ["Filed from", "Butwal, Nepal"],
                ["Reading", "BCA, year in progress"],
                ["Posting", "NIC Student Ambassador"],
                ["Beat", "Web · Databases · UI"],
                ["Mood", "Cautiously optimistic"],
                ["Coffee", "Frequent, milky"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between py-1.5">
                  <dt className="smallcaps text-muted-foreground">{k}</dt>
                  <dd className="font-display italic">{v}</dd>
                </div>
              ))}
            </dl>

            <Rule variant="triple" />
            <p className="smallcaps text-xs text-center">Weather</p>
            <p className="text-center font-display italic text-sm mt-1">
              Mild · partly cloudy · 24°C — perfect for staying indoors and refactoring.
            </p>
          </aside>
        </section>

        <Rule variant="triple" />

        {/* EDITORIAL + CLASSIFIEDS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-8 pt-6">
          <div className="md:col-span-7">
            <p className="smallcaps text-xs">Editorial</p>
            <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-[-0.01em]">
              In Defence of the Small, Useful Thing.
            </h3>
            <Rule />
            <div className="columns-1 sm:columns-2 gap-6 col-rule text-[15px] leading-[1.55] text-justify hyphens-auto">
              <p className="dropcap">
                There is, in every campus, a quiet preference for the grand gesture — the
                hackathon won, the start-up announced, the keynote delivered. This paper
                wishes to register a modest, stubborn dissent. The small useful thing —
                the script that automates a tedium, the form that finally validates — is
                the substance of any honest practice.
              </p>
              <p className="mt-3">
                Mr. Chhetri's portfolio is, deliberately, of this kind. It contains no
                unicorns. It promises no disruption. It offers, instead, the steady
                evidence of a student who keeps showing up to the keyboard.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 md:pl-6 mt-8 md:mt-0">
            <div className="border-2 border-ink p-4">
              <p className="smallcaps text-xs text-center">Classifieds</p>
              <Rule variant="double" />
              <h4 className="font-display font-bold text-2xl text-center leading-tight">
                Wanted: Interesting Conversations.
              </h4>
              <p className="text-center text-sm italic mt-1 text-muted-foreground">
                Apply by post or wire to any of the addresses below.
              </p>
              <ul className="mt-4 space-y-2 text-[14px]">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/anmolchhetri", value: "/in/anmolchhetri" },
                  { label: "Telegraph", href: "https://anmolchhetri.com.np", value: "anmolchhetri.com.np" },
                  { label: "Résumé", href: "https://anmolchhetri.com.np/anmol.resume.pdf", value: "anmol.resume.pdf" },
                  { label: "Course desk", href: "https://anmolchhetri.com.np/course.html", value: "/course.html" },
                ].map((l) => (
                  <li key={l.label} className="flex items-baseline justify-between gap-3 border-b border-dashed border-ink pb-1.5">
                    <span className="smallcaps text-muted-foreground">{l.label}</span>
                    <a href={l.href} target="_blank" rel="noreferrer"
                       className="font-display italic underline underline-offset-4 hover:text-accent">
                      {l.value} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <Rule variant="triple" />

        <footer className="pt-4 pb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>Printed &amp; bound on the world wide web · Set in Fraunces &amp; UnifrakturMaguntia</p>
          <p className="mt-1">© Anmol Chhetri · Butwal · MMXXVI · All rumours unconfirmed</p>
        </footer>
      </div>
    </main>
  );
}
