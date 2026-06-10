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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The present tense is used to talk about actions happening now, habitual actions, general truths, and facts. Unlike English, Spanish often uses the present tense where English would use the present progressive ("I am speaking"). For example, <span lang="es">hablo español</span> can mean both "I speak Spanish" and "I am speaking Spanish" depending on context.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Most regular verbs are formed by removing the infinitive ending (<span lang="es">-ar</span>, <span lang="es">-er</span>, <span lang="es">-ir</span>) and adding the appropriate present-tense endings. Because the present tense appears constantly in everyday conversation, mastering it should be one of your highest priorities.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The preterite is the main past tense used for completed actions. It describes events that happened at a specific time and are viewed as finished: <span lang="es">Ayer hablé con mi profesor</span> ("Yesterday I spoke with my teacher").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The preterite often contrasts with the imperfect. Think of the preterite as the tense that moves a story forward by describing what happened. Common signal words include <span lang="es">ayer</span> (yesterday), <span lang="es">anoche</span> (last night), <span lang="es">la semana pasada</span> (last week), and <span lang="es">el año pasado</span> (last year).
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The imperfect describes ongoing, repeated, or habitual actions in the past. It is often translated as "used to" or "was/were ___-ing." For example, <span lang="es">hablaba con mis amigos todos los días</span> means "I used to talk with my friends every day."
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            While the preterite focuses on completed events, the imperfect provides background information, descriptions, and habits. A useful rule is that the imperfect paints the scene, while the preterite tells what happened within it.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The simple future expresses actions that will happen in the future, predictions, promises, and assumptions. It is formed by adding future endings directly to the infinitive: <span lang="es">hablaré</span> ("I will speak").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            In everyday conversation, many Spanish speakers prefer <span lang="es">ir a + infinitivo</span> (<span lang="es">voy a hablar</span>) for near-future plans. The simple future often sounds slightly more formal or certain and is especially common for predictions and statements about the future.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The conditional expresses what someone would do under certain circumstances. It is commonly translated with "would," as in <span lang="es">hablaría</span> ("I would speak").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Beyond hypothetical situations, the conditional is frequently used for polite requests (<span lang="es">¿Podría ayudarme?</span>) and speculation about the past or present. It shares many irregular stems with the future tense, making the two tenses useful to learn together.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The present perfect describes actions that have happened recently or actions from the past that still have relevance to the present. It is formed with the present tense of <span lang="es">haber</span> plus a past participle: <span lang="es">he hablado</span> ("I have spoken").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Usage varies by region. In Spain, this tense is commonly used for events that happened earlier today or in a time period that is not yet finished. In much of Latin America, speakers often use the preterite instead.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The pluperfect describes an action that had already happened before another past action. It creates a "past before the past" relationship: <span lang="es">Ya había hablado cuando llegó mi amigo</span> ("I had already spoken when my friend arrived").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            It is formed with the imperfect tense of <span lang="es">haber</span> plus a past participle. Whenever you need to establish the order of two events in the past, the pluperfect is often the best choice.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The future perfect expresses actions that will have been completed before a specific point in the future. For example, <span lang="es">Para mañana habré terminado</span> means "By tomorrow I will have finished."
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            It is formed with the future tense of <span lang="es">haber</span> plus a past participle. In addition to true future meaning, it can also express probability or speculation about something that has already happened.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The conditional perfect expresses what someone would have done under different circumstances. It is often translated as "would have done": <span lang="es">Habría hablado si hubiera tenido tiempo</span> ("I would have spoken if I had had time").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            This tense is especially important for discussing missed opportunities, regrets, and hypothetical situations in the past. It is formed with the conditional of <span lang="es">haber</span> plus a past participle.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The subjunctive is a mood rather than a tense. It is used to express doubt, desire, emotion, uncertainty, recommendations, and hypothetical situations. You will often see it after trigger phrases such as <span lang="es">quiero que</span> (I want that), <span lang="es">espero que</span> (I hope that), and <span lang="es">es importante que</span> (it's important that).
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            For most verbs, the present subjunctive is formed from the present-tense yo form and uses the opposite vowel endings. Learning common trigger expressions is often more important than memorizing abstract rules.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The imperfect subjunctive is the past form of the subjunctive mood. It appears when the main verb is in a past tense and still requires a subjunctive clause: <span lang="es">Quería que hablaras</span> ("I wanted you to speak").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            It is usually formed from the third-person plural preterite stem. You may encounter both <span lang="es">-ra</span> and <span lang="es">-se</span> endings; both are correct, although the <span lang="es">-ra</span> forms are much more common in modern speech.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            This tense combines the meaning of the present perfect with the uncertainty or subjectivity of the subjunctive. It is used when a subjunctive trigger refers to an action that has already been completed: <span lang="es">Espero que hayas hablado con ella</span> ("I hope that you have spoken with her").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            It is formed with the present subjunctive of <span lang="es">haber</span> plus a past participle. The action is completed, but the speaker's attitude still requires the subjunctive.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The past perfect subjunctive describes an action that had already happened within a hypothetical, doubtful, or unreal past situation. It is most famous for appearing in <span lang="es">si</span> clauses: <span lang="es">Si hubiera hablado antes…</span> ("If I had spoken earlier…").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            It is formed with the imperfect subjunctive of <span lang="es">haber</span> plus a past participle. Together with the conditional perfect, it allows speakers to discuss alternative versions of the past and express complex hypothetical ideas.
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
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The imperative is used to give commands, instructions, requests, and advice. Spanish distinguishes between positive commands (<span lang="es">Habla más despacio</span> — "Speak more slowly") and negative commands (<span lang="es">No hables tan rápido</span> — "Don't speak so fast").
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Different command forms exist for <span lang="es">tú</span>, <span lang="es">usted</span>, <span lang="es">vosotros</span>, and <span lang="es">ustedes</span>. One important pattern to remember is that negative commands use the present subjunctive forms, which makes knowledge of the subjunctive especially valuable.
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
