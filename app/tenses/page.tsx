import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "All 14 Spanish Tenses Explained | Teach Yourself Spanish",
  description:
    "A complete guide to all 14 Spanish tenses — from the everyday present and preterite to the subjunctive and imperative — with conjugation tables and clear explanations.",
};

const SIDEBAR_LINKS = [
  { label: "1. Present", href: "#present" },
  { label: "2. Preterite", href: "#preterite" },
  { label: "3. Imperfect", href: "#imperfect" },
  { label: "4. Future", href: "#future" },
  { label: "5. Conditional", href: "#conditional" },
  { label: "6. Present Perfect", href: "#present-perfect" },
  { label: "7. Pluperfect", href: "#pluperfect" },
  { label: "8. Future Perfect", href: "#future-perfect" },
  { label: "9. Conditional Perfect", href: "#conditional-perfect" },
  { label: "10. Present Subjunctive", href: "#present-subjunctive" },
  { label: "11. Imperfect Subjunctive", href: "#imperfect-subjunctive" },
  { label: "12. Pres. Perfect Subjunctive", href: "#present-perfect-subjunctive" },
  { label: "13. Past Perfect Subjunctive", href: "#past-perfect-subjunctive" },
  { label: "14. Imperative", href: "#imperative" },
];

type Row = { pronoun: string; form: string };

function TenseTable({ rows, label }: { rows: Row[]; label: string }) {
  return (
    <div className="overflow-x-auto mb-10 rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-accent-light">
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest w-40">
              Pronoun
            </th>
            <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">
              <span lang="es">hablar</span> ({label})
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ pronoun, form }, i) => (
            <tr key={pronoun} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
              <td className="px-4 py-3 font-ui text-muted" lang="es">
                {pronoun}
              </td>
              <td className="px-4 py-3 font-body font-medium text-text" lang="es">
                {form}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TenseSection({
  id,
  number,
  englishName,
  spanishName,
  children,
}: {
  id: string;
  number: number;
  englishName: string;
  spanishName: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-4 pb-14 border-b border-border last:border-b-0">
      <p className="font-ui text-xs text-accent uppercase tracking-widest mb-2">
        Tense {number}
      </p>
      <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-1">
        {englishName}
      </h2>
      <p className="font-ui text-muted text-sm mb-8" lang="es">
        {spanishName}
      </p>
      {children}
    </section>
  );
}

export default function TensesPage() {
  return (
    <>
      <SectionHero
        badge="Grammar"
        title="All 14 Spanish Tenses Explained"
        subtitle="Every tense you'll encounter in Spanish — from the everyday present to the nuanced subjunctive — explained clearly with conjugation examples."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── 1. Present ─────────────────────────────────────────── */}
        <TenseSection id="present" number={1} englishName="Present" spanishName="Presente de Indicativo">
          {/* OWNER: write your explanation of the Present tense here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain when to use the present tense, how it differs from English, and any tips for forming it.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablo" },
              { pronoun: "tú", form: "hablas" },
              { pronoun: "él / ella / usted", form: "habla" },
              { pronoun: "nosotros", form: "hablamos" },
              { pronoun: "vosotros", form: "habláis" },
              { pronoun: "ellos / ellas / ustedes", form: "hablan" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write out the present-tense endings (-o, -as, -a, -amos, -áis, -an) five times in your notebook, then conjugate three verbs of your choice from memory.
          </CalloutBox>
        </TenseSection>

        {/* ── 2. Preterite ────────────────────────────────────────── */}
        <TenseSection id="preterite" number={2} englishName="Preterite" spanishName="Pretérito Indefinido">
          {/* OWNER: write your explanation of the Preterite tense here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain the preterite as the "completed action" past tense, how it contrasts with the imperfect, and common signal words like <span lang="es">ayer</span> and <span lang="es">el año pasado</span>.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablé" },
              { pronoun: "tú", form: "hablaste" },
              { pronoun: "él / ella / usted", form: "habló" },
              { pronoun: "nosotros", form: "hablamos" },
              { pronoun: "vosotros", form: "hablasteis" },
              { pronoun: "ellos / ellas / ustedes", form: "hablaron" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write three sentences about what you did yesterday using the preterite. Keep them simple: subject + verb + object.
          </CalloutBox>
        </TenseSection>

        {/* ── 3. Imperfect ────────────────────────────────────────── */}
        <TenseSection id="imperfect" number={3} englishName="Imperfect" spanishName="Pretérito Imperfecto">
          {/* OWNER: write your explanation of the Imperfect tense here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain ongoing/habitual past actions, how to choose between imperfect and preterite, and the "used to / was ___-ing" translation patterns.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablaba" },
              { pronoun: "tú", form: "hablabas" },
              { pronoun: "él / ella / usted", form: "hablaba" },
              { pronoun: "nosotros", form: "hablábamos" },
              { pronoun: "vosotros", form: "hablabais" },
              { pronoun: "ellos / ellas / ustedes", form: "hablaban" },
            ]}
          />
          <CalloutBox variant="why-this-matters">
            The preterite vs. imperfect distinction is one of the hardest things for English speakers to master. Spending time here pays dividends across the whole language.
          </CalloutBox>
        </TenseSection>

        {/* ── 4. Future ───────────────────────────────────────────── */}
        <TenseSection id="future" number={4} englishName="Future" spanishName="Futuro Simple">
          {/* OWNER: write your explanation of the Future tense here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain the simple future, how it is formed (infinitive + endings), and when Spanish speakers use it vs. the "ir a + infinitive" construction.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablaré" },
              { pronoun: "tú", form: "hablarás" },
              { pronoun: "él / ella / usted", form: "hablará" },
              { pronoun: "nosotros", form: "hablaremos" },
              { pronoun: "vosotros", form: "hablaréis" },
              { pronoun: "ellos / ellas / ustedes", form: "hablarán" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write three predictions about next year using the future tense. Then rewrite them with <span lang="es">ir a + infinitivo</span> and notice the difference in tone.
          </CalloutBox>
        </TenseSection>

        {/* ── 5. Conditional ──────────────────────────────────────── */}
        <TenseSection id="conditional" number={5} englishName="Conditional" spanishName="Condicional Simple">
          {/* OWNER: write your explanation of the Conditional tense here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "would do" meanings, how the conditional is formed (same stems as future + imperfect endings), and its use in polite requests and hypotheticals.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablaría" },
              { pronoun: "tú", form: "hablarías" },
              { pronoun: "él / ella / usted", form: "hablaría" },
              { pronoun: "nosotros", form: "hablaríamos" },
              { pronoun: "vosotros", form: "hablaríais" },
              { pronoun: "ellos / ellas / ustedes", form: "hablarían" },
            ]}
          />
        </TenseSection>

        {/* ── 6. Present Perfect ──────────────────────────────────── */}
        <TenseSection id="present-perfect" number={6} englishName="Present Perfect" spanishName="Pretérito Perfecto Compuesto">
          {/* OWNER: write your explanation of the Present Perfect here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "have done" meanings, how it is formed with <span lang="es">haber</span> + past participle, and the key regional difference (Spain uses it far more than Latin America).]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "he hablado" },
              { pronoun: "tú", form: "has hablado" },
              { pronoun: "él / ella / usted", form: "ha hablado" },
              { pronoun: "nosotros", form: "hemos hablado" },
              { pronoun: "vosotros", form: "habéis hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "han hablado" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write the present-tense conjugation of <span lang="es">haber</span> on a flashcard — you will use it in four different compound tenses.
          </CalloutBox>
        </TenseSection>

        {/* ── 7. Pluperfect ───────────────────────────────────────── */}
        <TenseSection id="pluperfect" number={7} englishName="Past Perfect (Pluperfect)" spanishName="Pretérito Pluscuamperfecto">
          {/* OWNER: write your explanation of the Pluperfect here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "had done" meanings, how it is formed with the imperfect of <span lang="es">haber</span> + past participle, and when you use it to establish a past-before-the-past.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "había hablado" },
              { pronoun: "tú", form: "habías hablado" },
              { pronoun: "él / ella / usted", form: "había hablado" },
              { pronoun: "nosotros", form: "habíamos hablado" },
              { pronoun: "vosotros", form: "habíais hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "habían hablado" },
            ]}
          />
        </TenseSection>

        {/* ── 8. Future Perfect ───────────────────────────────────── */}
        <TenseSection id="future-perfect" number={8} englishName="Future Perfect" spanishName="Futuro Compuesto">
          {/* OWNER: write your explanation of the Future Perfect here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "will have done" meanings, its rare but useful appearance in formal writing and speculation, and how it is formed with the future of <span lang="es">haber</span> + past participle.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "habré hablado" },
              { pronoun: "tú", form: "habrás hablado" },
              { pronoun: "él / ella / usted", form: "habrá hablado" },
              { pronoun: "nosotros", form: "habremos hablado" },
              { pronoun: "vosotros", form: "habréis hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "habrán hablado" },
            ]}
          />
        </TenseSection>

        {/* ── 9. Conditional Perfect ──────────────────────────────── */}
        <TenseSection id="conditional-perfect" number={9} englishName="Conditional Perfect" spanishName="Condicional Compuesto">
          {/* OWNER: write your explanation of the Conditional Perfect here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "would have done" meanings, its primary role in hypothetical (if-then) sentences, and how it is formed with the conditional of <span lang="es">haber</span> + past participle.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "habría hablado" },
              { pronoun: "tú", form: "habrías hablado" },
              { pronoun: "él / ella / usted", form: "habría hablado" },
              { pronoun: "nosotros", form: "habríamos hablado" },
              { pronoun: "vosotros", form: "habríais hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "habrían hablado" },
            ]}
          />
          <CalloutBox variant="why-this-matters">
            The conditional perfect pairs with the past perfect subjunctive to form "si" clauses — the most nuanced hypothetical structure in Spanish. Get comfortable with this compound before tackling it.
          </CalloutBox>
        </TenseSection>

        {/* ── 10. Present Subjunctive ─────────────────────────────── */}
        <TenseSection id="present-subjunctive" number={10} englishName="Present Subjunctive" spanishName="Subjuntivo Presente">
          {/* OWNER: write your explanation of the Present Subjunctive here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain what the subjunctive mood is (doubt, desire, emotion, hypothetical), the triggers that require it (e.g. <span lang="es">quiero que</span>, <span lang="es">espero que</span>), and how it is formed (present-tense yo stem + "opposite" vowel endings).]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hable" },
              { pronoun: "tú", form: "hables" },
              { pronoun: "él / ella / usted", form: "hable" },
              { pronoun: "nosotros", form: "hablemos" },
              { pronoun: "vosotros", form: "habléis" },
              { pronoun: "ellos / ellas / ustedes", form: "hablen" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Write a list of five trigger phrases (like <span lang="es">quiero que…</span>) in your notebook, then complete each sentence using the present subjunctive of a different verb.
          </CalloutBox>
        </TenseSection>

        {/* ── 11. Imperfect Subjunctive ───────────────────────────── */}
        <TenseSection id="imperfect-subjunctive" number={11} englishName="Imperfect Subjunctive" spanishName="Subjuntivo Imperfecto">
          {/* OWNER: write your explanation of the Imperfect Subjunctive here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain the past-tense subjunctive, how it is formed from the ellos preterite stem, the -ra vs. -se variant endings, and when the sequence-of-tenses rule sends you here instead of the present subjunctive.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hablara" },
              { pronoun: "tú", form: "hablaras" },
              { pronoun: "él / ella / usted", form: "hablara" },
              { pronoun: "nosotros", form: "habláramos" },
              { pronoun: "vosotros", form: "hablarais" },
              { pronoun: "ellos / ellas / ustedes", form: "hablaran" },
            ]}
          />
        </TenseSection>

        {/* ── 12. Present Perfect Subjunctive ─────────────────────── */}
        <TenseSection id="present-perfect-subjunctive" number={12} englishName="Present Perfect Subjunctive" spanishName="Subjuntivo Pretérito Perfecto">
          {/* OWNER: write your explanation of the Present Perfect Subjunctive here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain how this tense combines subjunctive triggers with a "have done" meaning, how it is formed with the present subjunctive of <span lang="es">haber</span> + past participle, and example sentences.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "haya hablado" },
              { pronoun: "tú", form: "hayas hablado" },
              { pronoun: "él / ella / usted", form: "haya hablado" },
              { pronoun: "nosotros", form: "hayamos hablado" },
              { pronoun: "vosotros", form: "hayáis hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "hayan hablado" },
            ]}
          />
        </TenseSection>

        {/* ── 13. Past Perfect Subjunctive ────────────────────────── */}
        <TenseSection id="past-perfect-subjunctive" number={13} englishName="Past Perfect Subjunctive" spanishName="Subjuntivo Pluscuamperfecto">
          {/* OWNER: write your explanation of the Past Perfect Subjunctive here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain "had done" in a subjunctive context, its essential role in hypothetical <span lang="es">si</span> clauses (<span lang="es">Si hubiera hablado…</span>), and how it is formed with the imperfect subjunctive of <span lang="es">haber</span> + past participle.]
          </p>
          <TenseTable
            label="to speak"
            rows={[
              { pronoun: "yo", form: "hubiera hablado" },
              { pronoun: "tú", form: "hubieras hablado" },
              { pronoun: "él / ella / usted", form: "hubiera hablado" },
              { pronoun: "nosotros", form: "hubiéramos hablado" },
              { pronoun: "vosotros", form: "hubierais hablado" },
              { pronoun: "ellos / ellas / ustedes", form: "hubieran hablado" },
            ]}
          />
          <CalloutBox variant="why-this-matters">
            This is the tense you need to say "If I had spoken…" — one of the most expressive structures in the language. Once you know it, a huge range of nuanced sentences opens up.
          </CalloutBox>
        </TenseSection>

        {/* ── 14. Imperative ──────────────────────────────────────── */}
        <TenseSection id="imperative" number={14} englishName="Imperative" spanishName="Imperativo">
          {/* OWNER: write your explanation of the Imperative mood here */}
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            [Owner will write this section — explain positive vs. negative commands, how the forms differ between <span lang="es">tú</span>/<span lang="es">vosotros</span> and <span lang="es">usted</span>/<span lang="es">ustedes</span>, and how negative commands use the present subjunctive forms.]
          </p>
          <TenseTable
            label="to speak (commands)"
            rows={[
              { pronoun: "tú (pos.)", form: "habla" },
              { pronoun: "tú (neg.)", form: "no hables" },
              { pronoun: "usted", form: "hable" },
              { pronoun: "nosotros", form: "hablemos" },
              { pronoun: "vosotros (pos.)", form: "hablad" },
              { pronoun: "vosotros (neg.)", form: "no habléis" },
              { pronoun: "ustedes", form: "hablen" },
            ]}
          />
          <CalloutBox variant="notebook-tip">
            Practice giving five instructions to a friend (positive) and five warnings (negative) using the imperative. Real examples like "Open the door" or "Don't forget your keys" stick better than drills.
          </CalloutBox>
        </TenseSection>

      </Sidebar>
    </>
  );
}
