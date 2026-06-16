import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Regular vs Irregular Spanish Verbs | Teach Yourself Spanish",
  description:
    "Understand the difference between regular and irregular Spanish verbs, learn the main irregularity patterns by tense, and discover which irregularities matter most.",
};

const SIDEBAR_LINKS = [
  { label: "What is regular?", href: "#what-is-regular" },
  { label: "What is irregular?", href: "#what-is-irregular" },
  { label: "Regular in some tenses, irregular in others", href: "#tense-by-tense" },
  { label: "Irregularity by tense", href: "#by-tense" },
  { label: "Present tense", href: "#present" },
  { label: "Preterite", href: "#preterite" },
  { label: "Future and conditional", href: "#future-conditional" },
  { label: "The imperfect", href: "#imperfect" },
  { label: "Focus on patterns", href: "#patterns" },
];

type VerbRow = { pronoun: string; form: string };

function VerbTable({ rows, verb }: { rows: VerbRow[]; verb: string }) {
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent-light">
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest w-40">
              Pronoun
            </th>
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              <span lang="es">{verb}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ pronoun, form }, i) => (
            <tr key={pronoun} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
              <td className="px-4 py-3 font-ui text-muted" lang="es">{pronoun}</td>
              <td className="px-4 py-3 font-body font-medium text-text" lang="es">{form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type PairRow = { left: string; right: string };

function PairTable({ rows, headers }: { rows: PairRow[]; headers: [string, string] }) {
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent-light">
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              {headers[0]}
            </th>
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ left, right }, i) => (
            <tr key={left} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
              <td className="px-4 py-3 font-body font-medium text-text" lang="es">{left}</td>
              <td className="px-4 py-3 font-body text-text" lang="es">{right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RegularVsIrregularPage() {
  return (
    <>
      <SectionHero
        badge="Grammar"
        title="Regular vs Irregular Verbs"
        subtitle="Most Spanish verbs follow predictable patterns. Once you know the rules, you can conjugate hundreds of verbs. But a small set of very common verbs break those rules — and the most useful thing to know is which tenses have irregularities and which don't."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── What is regular? ───────────────────────────────────── */}
        <section id="what-is-regular" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What does &ldquo;regular&rdquo; mean?
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            A regular verb follows the standard conjugation pattern for its verb group (<span lang="es">-AR</span>, <span lang="es">-ER</span>, or <span lang="es">-IR</span>). Once you learn the endings for a tense, you can apply them to hundreds of verbs.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            For example, <span lang="es">hablar</span> (to speak) is regular in the present tense:
          </p>
          <VerbTable
            verb="hablar — present tense"
            rows={[
              { pronoun: "yo", form: "hablo" },
              { pronoun: "tú", form: "hablas" },
              { pronoun: "él / ella / usted", form: "habla" },
              { pronoun: "nosotros", form: "hablamos" },
              { pronoun: "vosotros", form: "habláis" },
              { pronoun: "ellos / ellas / ustedes", form: "hablan" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            The same pattern works for many other <span lang="es">-AR</span> verbs such as <span lang="es">estudiar</span>, <span lang="es">comprar</span>, <span lang="es">cantar</span>, and <span lang="es">llamar</span>. Because regular verbs follow predictable rules, they are usually the easiest verbs to learn and conjugate.
          </p>
        </section>

        {/* ── What is irregular? ─────────────────────────────────── */}
        <section id="what-is-irregular" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What does &ldquo;irregular&rdquo; mean?
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            An irregular verb breaks the normal pattern in some way. The stem may change, the endings may be different, or the entire conjugation may be unique.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            For example, <span lang="es">tener</span> (to have) is irregular in the present tense:
          </p>
          <VerbTable
            verb="tener — present tense"
            rows={[
              { pronoun: "yo", form: "tengo" },
              { pronoun: "tú", form: "tienes" },
              { pronoun: "él / ella / usted", form: "tiene" },
              { pronoun: "nosotros", form: "tenemos" },
              { pronoun: "vosotros", form: "tenéis" },
              { pronoun: "ellos / ellas / ustedes", form: "tienen" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The forms don&rsquo;t follow the standard pattern, so they must be learned separately.
          </p>
          <p className="font-body text-lg text-text leading-relaxed">
            However, irregular does not mean completely unpredictable. Most irregular verbs belong to common groups and patterns that repeat throughout the language.
          </p>
        </section>

        {/* ── Regular in some tenses, irregular in others ─────────── */}
        <section id="tense-by-tense" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The most important thing to understand
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Many learners assume a verb is either regular or irregular. Spanish doesn&rsquo;t really work that way. A verb can be irregular in one tense and completely regular in another.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Take <span lang="es">perder</span> (to lose):
          </p>
          <h3 className="font-heading text-lg text-text font-semibold mb-3">
            Present — irregular
          </h3>
          <VerbTable
            verb="perder — present tense"
            rows={[
              { pronoun: "yo", form: "pierdo" },
              { pronoun: "tú", form: "pierdes" },
              { pronoun: "él / ella / usted", form: "pierde" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The stem changes from <span lang="es">e → ie</span>, making the verb irregular.
          </p>
          <h3 className="font-heading text-lg text-text font-semibold mb-3">
            Preterite — regular
          </h3>
          <VerbTable
            verb="perder — preterite"
            rows={[
              { pronoun: "yo", form: "perdí" },
              { pronoun: "tú", form: "perdiste" },
              { pronoun: "él / ella / usted", form: "perdió" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Now the verb follows the normal pattern and behaves like a regular verb.
          </p>
          <CalloutBox variant="why-this-matters">
            When learning Spanish, it is often more useful to ask &ldquo;Is this verb irregular in this tense?&rdquo; rather than &ldquo;Is this verb irregular?&rdquo;
          </CalloutBox>
        </section>

        {/* ── Irregularity by tense ──────────────────────────────── */}
        <section id="by-tense" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Which tenses have the most irregular verbs?
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Not all tenses are equally difficult. Some tenses contain many irregular patterns, while others are almost entirely regular.
          </p>
          <div className="overflow-x-auto mb-8 rounded-xl border border-border">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent-light">
                  <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">Tense</th>
                  <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">Irregularity</th>
                  <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">What to expect</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tense: "Present", level: "High", note: "Stem changes, irregular yo forms, highly irregular verbs" },
                  { tense: "Preterite", level: "High", note: "Irregular stems and spelling changes" },
                  { tense: "Present Subjunctive", level: "Moderate", note: "Often based on present-tense irregularities" },
                  { tense: "Imperfect", level: "Very low", note: "Only three common irregular verbs" },
                  { tense: "Future", level: "Low", note: "Mostly regular with a handful of irregular stems" },
                  { tense: "Conditional", level: "Low", note: "Uses the same irregular stems as the future" },
                  { tense: "Perfect tenses", level: "Low", note: "Mainly irregular past participles" },
                ].map(({ tense, level, note }, i) => (
                  <tr key={tense} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
                    <td className="px-4 py-3 font-body font-medium text-text">{tense}</td>
                    <td className="px-4 py-3 font-ui text-muted text-xs">{level}</td>
                    <td className="px-4 py-3 font-body text-text">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-lg text-text leading-relaxed">
            You don&rsquo;t need to memorise irregular forms in every tense. Most tenses follow a small number of patterns.
          </p>
        </section>

        {/* ── Present tense irregularities ──────────────────────── */}
        <section id="present" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Present tense irregularities
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            The present tense contains the largest number of irregular verbs. Common patterns include the following.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Stem-changing verbs</h3>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "pensar", right: "pienso" },
              { left: "poder", right: "puedo" },
              { left: "perder", right: "pierdo" },
              { left: "volver", right: "vuelvo" },
              { left: "sentir", right: "siento" },
            ]}
          />

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Irregular yo forms</h3>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "hacer", right: "hago" },
              { left: "poner", right: "pongo" },
              { left: "salir", right: "salgo" },
              { left: "tener", right: "tengo" },
              { left: "venir", right: "vengo" },
              { left: "conocer", right: "conozco" },
            ]}
          />

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Completely irregular verbs</h3>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "ser", right: "soy" },
              { left: "ir", right: "voy" },
              { left: "haber", right: "he" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            Because these verbs are used constantly in everyday conversation, they are worth learning early.
          </p>
        </section>

        {/* ── Preterite irregularities ──────────────────────────── */}
        <section id="preterite" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Preterite irregularities
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The preterite introduces a different set of irregular patterns. Many common verbs use special stems:
          </p>
          <PairTable
            headers={["Verb", "Irregular stem"]}
            rows={[
              { left: "tener", right: "tuv-" },
              { left: "estar", right: "estuv-" },
              { left: "poder", right: "pud-" },
              { left: "poner", right: "pus-" },
              { left: "saber", right: "sup-" },
              { left: "querer", right: "quis-" },
              { left: "venir", right: "vin-" },
              { left: "hacer", right: "hic-" },
              { left: "decir", right: "dij-" },
              { left: "traer", right: "traj-" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            Although these forms look different, they follow predictable groups. Learning the stems gets you most of the way there.
          </p>
        </section>

        {/* ── Future and conditional ────────────────────────────── */}
        <section id="future-conditional" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Future and conditional are easier than you think
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Many students worry about the future and conditional tenses, but these are actually among the most regular tenses in Spanish. Most verbs simply add endings directly to the infinitive: <span lang="es">hablaré</span>, <span lang="es">comeré</span>, <span lang="es">viviré</span>.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Only a small group of verbs uses an irregular stem:
          </p>
          <PairTable
            headers={["Verb", "Irregular stem"]}
            rows={[
              { left: "tener", right: "tendr-" },
              { left: "venir", right: "vendr-" },
              { left: "salir", right: "saldr-" },
              { left: "poner", right: "pondr-" },
              { left: "hacer", right: "har-" },
              { left: "decir", right: "dir-" },
              { left: "poder", right: "podr-" },
              { left: "querer", right: "querr-" },
              { left: "saber", right: "sabr-" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            The conditional uses these exact same stems: <span lang="es">tendría</span>, <span lang="es">vendría</span>, <span lang="es">saldría</span>, <span lang="es">pondría</span>. Learn the stems once and you will use them in both tenses.
          </p>
        </section>

        {/* ── The imperfect ─────────────────────────────────────── */}
        <section id="imperfect" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The easiest irregular tense
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The imperfect tense contains only three commonly irregular verbs:
          </p>
          <PairTable
            headers={["Verb", "yo form (imperfect)"]}
            rows={[
              { left: "ser", right: "era" },
              { left: "ir", right: "iba" },
              { left: "ver", right: "veía" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            Every other verb follows the regular pattern. This makes the imperfect one of the easiest tenses to master.
          </p>
        </section>

        {/* ── Focus on patterns ─────────────────────────────────── */}
        <section id="patterns" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Focus on patterns, not exceptions
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Spanish may seem full of irregular verbs at first, but most irregularities follow familiar patterns. Instead of memorising every form individually:
          </p>
          <ul className="font-body text-lg text-text leading-relaxed space-y-3 mb-8 list-disc pl-6">
            <li>Learn the common stem-change patterns.</li>
            <li>Learn the major irregular stems.</li>
            <li>Learn the most frequent irregular verbs first.</li>
            <li>Notice which tenses contain irregularities and which are mostly regular.</li>
          </ul>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            The more verbs you learn, the more patterns you&rsquo;ll recognise. Eventually you&rsquo;ll discover that Spanish conjugation is far more predictable than it first appears.
          </p>
          <CalloutBox variant="why-this-matters">
            A verb is not regular or irregular forever. Many verbs are regular in some tenses and irregular in others. Learn the patterns for each tense, and you&rsquo;ll be able to conjugate thousands of verbs with confidence.
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
