import type { Metadata } from "next";
import Link from "next/link";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Regular Spanish Verbs | Teach Yourself Spanish",
  description:
    "Learn how regular Spanish verbs work across -AR, -ER, and -IR groups. Master the conjugation patterns and you can apply them to hundreds of verbs immediately.",
};

const SIDEBAR_LINKS = [
  { label: "What is a regular verb?", href: "#what-is-regular" },
  { label: "How conjugation works", href: "#how-it-works" },
  { label: "Regular -AR verbs", href: "#ar-verbs" },
  { label: "Regular -ER verbs", href: "#er-verbs" },
  { label: "Regular -IR verbs", href: "#ir-verbs" },
  { label: "Across different tenses", href: "#across-tenses" },
  { label: "Most predictable tenses", href: "#predictable-tenses" },
  { label: "Essential verbs to know", href: "#essential-verbs" },
  { label: "Why they matter", href: "#why-they-matter" },
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

function ComparisonTable({
  rows,
  verbs,
}: {
  rows: { pronoun: string; forms: [string, string] }[];
  verbs: [string, string];
}) {
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent-light">
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest w-40">
              Pronoun
            </th>
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              <span lang="es">{verbs[0]}</span>
            </th>
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              <span lang="es">{verbs[1]}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ pronoun, forms }, i) => (
            <tr key={pronoun} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
              <td className="px-4 py-3 font-ui text-muted" lang="es">{pronoun}</td>
              <td className="px-4 py-3 font-body font-medium text-text" lang="es">{forms[0]}</td>
              <td className="px-4 py-3 font-body text-text" lang="es">{forms[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MultiTenseTable({
  rows,
  headers,
}: {
  rows: { verb: string; forms: string[] }[];
  headers: string[];
}) {
  return (
    <div className="overflow-x-auto mb-8 rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent-light">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ verb, forms }, i) => (
            <tr key={verb} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
              <td className="px-4 py-3 font-body font-medium text-text" lang="es">{verb}</td>
              {forms.map((form, j) => (
                <td key={j} className="px-4 py-3 font-body text-text" lang="es">{form}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RegularVerbsPage() {
  return (
    <>
      <SectionHero
        badge="Verbs"
        title="Regular Verbs"
        subtitle="Regular verbs follow predictable patterns. Learn the endings for each verb group and you can immediately conjugate hundreds of verbs across multiple tenses."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── What is a regular verb? ────────────────────────────── */}
        <section id="what-is-regular" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What is a regular verb?
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            A regular verb follows the standard conjugation pattern for its verb group. The verb stem stays the same, and only the endings change.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Spanish verbs belong to three groups:
          </p>
          <PairTable
            headers={["Group", "Examples"]}
            rows={[
              { left: "-AR verbs", right: "hablar, estudiar, comprar" },
              { left: "-ER verbs", right: "comer, aprender, deber" },
              { left: "-IR verbs", right: "vivir, escribir, abrir" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Once you learn the endings for a tense, you can apply them to hundreds of verbs. For example, if you know how to conjugate <span lang="es">hablar</span>, you can also conjugate <span lang="es">comprar</span>, <span lang="es">estudiar</span>, <span lang="es">cantar</span>, <span lang="es">entrar</span>, and many others that follow the same pattern.
          </p>
          <p className="font-body text-lg text-text leading-relaxed">
            This is why learning regular verbs is one of the fastest ways to build confidence in Spanish.
          </p>
        </section>

        {/* ── How conjugation works ─────────────────────────────── */}
        <section id="how-it-works" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            How regular conjugation works
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Every regular verb follows the same basic process.
          </p>
          <h3 className="font-heading text-lg text-text font-semibold mb-3">
            Step 1 — Remove the infinitive ending
          </h3>
          <PairTable
            headers={["Verb", "Stem"]}
            rows={[
              { left: "hablar", right: "habl-" },
              { left: "comer", right: "com-" },
              { left: "vivir", right: "viv-" },
            ]}
          />
          <h3 className="font-heading text-lg text-text font-semibold mb-3">
            Step 2 — Add the correct ending
          </h3>
          <p className="font-body text-lg text-text leading-relaxed">
            The ending changes depending on the tense, the subject, and the verb group (<span lang="es">-AR</span>, <span lang="es">-ER</span>, or <span lang="es">-IR</span>). Once you know the endings, conjugation becomes largely mechanical.
          </p>
        </section>

        {/* ── Regular -AR verbs ─────────────────────────────────── */}
        <section id="ar-verbs" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular <span lang="es">-AR</span> verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Using <span lang="es">hablar</span> (to speak) as the model verb:
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
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The same endings apply to <span lang="es">estudiar</span>, <span lang="es">comprar</span>, <span lang="es">cantar</span>, <span lang="es">entrar</span>, <span lang="es">llamar</span>, <span lang="es">mirar</span>, and <span lang="es">tomar</span>. Notice how the endings are identical across all of them:
          </p>
          <ComparisonTable
            verbs={["hablar", "comprar"]}
            rows={[
              { pronoun: "yo", forms: ["hablo", "compro"] },
              { pronoun: "tú", forms: ["hablas", "compras"] },
              { pronoun: "él / ella / usted", forms: ["habla", "compra"] },
              { pronoun: "nosotros", forms: ["hablamos", "compramos"] },
              { pronoun: "vosotros", forms: ["habláis", "compráis"] },
              { pronoun: "ellos / ellas / ustedes", forms: ["hablan", "compran"] },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write out the six <span lang="es">-AR</span> present-tense endings (-o, -as, -a, -amos, -áis, -an) and conjugate three new verbs from memory.
          </CalloutBox>
        </section>

        {/* ── Regular -ER verbs ─────────────────────────────────── */}
        <section id="er-verbs" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular <span lang="es">-ER</span> verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Using <span lang="es">comer</span> (to eat) as the model verb:
          </p>
          <VerbTable
            verb="comer — present tense"
            rows={[
              { pronoun: "yo", form: "como" },
              { pronoun: "tú", form: "comes" },
              { pronoun: "él / ella / usted", form: "come" },
              { pronoun: "nosotros", form: "comemos" },
              { pronoun: "vosotros", form: "coméis" },
              { pronoun: "ellos / ellas / ustedes", form: "comen" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            The same pattern works for <span lang="es">aprender</span>, <span lang="es">deber</span>, <span lang="es">creer</span>, and <span lang="es">comprender</span>. Note that <span lang="es">conocer</span> becomes irregular in the <span lang="es">yo</span> form, but otherwise follows regular patterns in many tenses.
          </p>
        </section>

        {/* ── Regular -IR verbs ─────────────────────────────────── */}
        <section id="ir-verbs" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular <span lang="es">-IR</span> verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Using <span lang="es">vivir</span> (to live) as the model verb:
          </p>
          <VerbTable
            verb="vivir — present tense"
            rows={[
              { pronoun: "yo", form: "vivo" },
              { pronoun: "tú", form: "vives" },
              { pronoun: "él / ella / usted", form: "vive" },
              { pronoun: "nosotros", form: "vivimos" },
              { pronoun: "vosotros", form: "vivís" },
              { pronoun: "ellos / ellas / ustedes", form: "viven" },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            The same pattern works for <span lang="es">escribir</span>, <span lang="es">abrir</span>, <span lang="es">decidir</span>, and <span lang="es">existir</span>. Some verbs develop spelling changes in certain forms, but the underlying pattern remains largely regular.
          </p>
        </section>

        {/* ── Across different tenses ───────────────────────────── */}
        <section id="across-tenses" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Regular verbs across different tenses
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            One of the biggest advantages of regular verbs is that they stay predictable across multiple tenses. Notice how the patterns repeat:
          </p>
          <MultiTenseTable
            headers={["Verb", "Present", "Imperfect", "Future", "Conditional"]}
            rows={[
              { verb: "hablar", forms: ["hablo", "hablaba", "hablaré", "hablaría"] },
              { verb: "comer",  forms: ["como",  "comía",   "comeré",  "comería"]  },
              { verb: "vivir",  forms: ["vivo",  "vivía",   "viviré",  "viviría"]  },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed">
            Once you know the endings, new verbs become much easier to learn because the same logic applies every time.
          </p>
        </section>

        {/* ── Most predictable tenses ───────────────────────────── */}
        <section id="predictable-tenses" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The most predictable tenses
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            Some tenses are almost entirely regular, which means they reward the time you invest in them.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-3">Imperfect</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Nearly every verb follows the standard pattern: <span lang="es">hablaba</span>, <span lang="es">estudiaba</span>, <span lang="es">comía</span>, <span lang="es">vivía</span>. Only three common verbs are irregular — <span lang="es">ser</span>, <span lang="es">ir</span>, and <span lang="es">ver</span>.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-3">Future</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Most verbs simply add endings to the infinitive: <span lang="es">hablaré</span>, <span lang="es">estudiaré</span>, <span lang="es">compraré</span>, <span lang="es">aprenderé</span>, <span lang="es">viviré</span>. Only a small group of high-frequency verbs use irregular stems.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-3">Conditional</h3>
          <p className="font-body text-lg text-text leading-relaxed">
            The conditional works almost exactly like the future: <span lang="es">hablaría</span>, <span lang="es">comería</span>, <span lang="es">viviría</span>, <span lang="es">escribiría</span>. Again, only a small number of verbs are irregular — and they share the same irregular stems as the future.
          </p>
        </section>

        {/* ── Essential verbs to know ───────────────────────────── */}
        <section id="essential-verbs" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Essential regular verbs to know
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            Many of the most useful Spanish verbs are regular. These are worth learning early.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Common regular <span lang="es">-AR</span> verbs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {["acabar", "cantar", "comprar", "entrar", "estudiar", "hablar", "llamar", "llevar", "mirar", "tomar"].map((v) => (
              <span key={v} className="px-3 py-2 bg-surface rounded-lg font-body text-text text-sm" lang="es">{v}</span>
            ))}
          </div>

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Common regular <span lang="es">-ER</span> verbs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
            {["aprender", "comer", "deber"].map((v) => (
              <span key={v} className="px-3 py-2 bg-surface rounded-lg font-body text-text text-sm" lang="es">{v}</span>
            ))}
          </div>

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Common regular <span lang="es">-IR</span> verbs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {["escribir", "vivir"].map((v) => (
              <span key={v} className="px-3 py-2 bg-surface rounded-lg font-body text-text text-sm" lang="es">{v}</span>
            ))}
          </div>

          <p className="font-body text-lg text-text leading-relaxed">
            Some verbs are regular in most tenses but become irregular in specific ones. You&rsquo;ll learn about those patterns on the{" "}
            <Link href="/verbs/irregular" className="text-accent hover:underline">Irregular Verbs</Link>{" "}
            page.
          </p>
        </section>

        {/* ── Why they matter ───────────────────────────────────── */}
        <section id="why-they-matter" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Why regular verbs matter
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Regular verbs form the foundation of Spanish conjugation. When you learn the patterns:
          </p>
          <ul className="font-body text-lg text-text leading-relaxed space-y-3 mb-8 list-disc pl-6">
            <li>You can conjugate hundreds of verbs immediately.</li>
            <li>You spend less time memorising and more time communicating.</li>
            <li>New vocabulary becomes easier to use in conversation.</li>
            <li>Irregular verbs become easier to understand because you already know the regular pattern they are breaking.</li>
          </ul>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            Think of regular verbs as the framework of Spanish grammar. Once the framework is in place, the irregular verbs become much easier to learn.
          </p>
          <CalloutBox variant="why-this-matters">
            You do not need to memorise every verb individually. Learn the regular patterns for <span lang="es">-AR</span>, <span lang="es">-ER</span>, and <span lang="es">-IR</span> verbs, and you&rsquo;ll already know how to conjugate the majority of Spanish verbs across multiple tenses.
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
