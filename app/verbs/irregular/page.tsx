import type { Metadata } from "next";
import SectionHero from "@/components/SectionHero";
import Sidebar from "@/components/Sidebar";
import CalloutBox from "@/components/CalloutBox";

export const metadata: Metadata = {
  title: "Irregular Spanish Verbs | Teach Yourself Spanish",
  description:
    "A complete guide to irregular Spanish verbs by tense — stem-changing verbs, irregular yo forms, preterite stems, future stems, and irregular past participles.",
};

const SIDEBAR_LINKS = [
  { label: "What makes a verb irregular?", href: "#what-is-irregular" },
  { label: "Present tense", href: "#present" },
  { label: "Preterite", href: "#preterite" },
  { label: "Imperfect", href: "#imperfect" },
  { label: "Future", href: "#future" },
  { label: "Conditional", href: "#conditional" },
  { label: "Past participles", href: "#past-participles" },
  { label: "Learn these first", href: "#learn-first" },
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

export default function IrregularVerbsPage() {
  return (
    <>
      <SectionHero
        badge="Verbs"
        title="Irregular Verbs"
        subtitle="Spanish irregular verbs are not random. Most irregularities fall into a small number of predictable patterns — and once you learn those patterns, dozens of common verbs become much easier to conjugate."
      />

      <Sidebar links={SIDEBAR_LINKS}>

        {/* ── What makes a verb irregular? ──────────────────────── */}
        <section id="what-is-irregular" className="pt-4 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            What makes a verb irregular?
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            An irregular verb does not follow the standard conjugation pattern for a particular tense. But that doesn&rsquo;t mean the verb is always irregular.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            Many verbs are irregular in one tense and completely regular in another. For example, <span lang="es">perder</span> (to lose) is irregular in the present tense — the stem changes from <span lang="es">e → ie</span> — but entirely regular in the preterite.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            This is why it&rsquo;s more useful to think about <strong>irregular tenses</strong> than <strong>irregular verbs</strong>. Here is a quick overview:
          </p>
          <div className="overflow-x-auto mb-6 rounded-xl border border-border">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent-light">
                  <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">Tense</th>
                  <th className="text-left px-4 py-3 font-ui font-medium text-accent text-xs uppercase tracking-widest">Common irregulars</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tense: "Present",        note: "Many — stem changes, irregular yo forms, unique verbs" },
                  { tense: "Preterite",      note: "Many — irregular stems and spelling changes" },
                  { tense: "Imperfect",      note: "3 verbs only" },
                  { tense: "Future",         note: "9 major stems" },
                  { tense: "Conditional",    note: "Same 9 stems as the future" },
                  { tense: "Perfect Tenses", note: "8 major irregular past participles" },
                ].map(({ tense, note }, i) => (
                  <tr key={tense} className={i % 2 === 0 ? "bg-base" : "bg-surface"}>
                    <td className="px-4 py-3 font-body font-medium text-text">{tense}</td>
                    <td className="px-4 py-3 font-body text-text">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CalloutBox variant="why-this-matters">
            The good news is that Spanish irregularities follow patterns. Once you learn those patterns, many verbs become much easier to remember.
          </CalloutBox>
        </section>

        {/* ── Present tense irregular verbs ─────────────────────── */}
        <section id="present" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Present tense irregular verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            The present tense contains the largest number of irregular verbs. Most irregularities fall into three major groups.
          </p>

          {/* Stem-changing */}
          <h3 className="font-heading text-xl text-text font-semibold mb-4">Stem-changing verbs</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            These verbs change a vowel in the stem but keep the normal endings.
          </p>

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3">
            <span lang="es">e → ie</span>
          </h4>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "pensar",   right: "pienso"   },
              { left: "comenzar", right: "comienzo" },
              { left: "querer",   right: "quiero"   },
              { left: "sentir",   right: "siento"   },
              { left: "perder",   right: "pierdo"   },
            ]}
          />

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3">
            <span lang="es">o → ue</span>
          </h4>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "poder",  right: "puedo"  },
              { left: "volver", right: "vuelvo" },
              { left: "dormir", right: "duermo" },
            ]}
          />

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3">
            <span lang="es">e → i</span>
          </h4>
          <PairTable
            headers={["Infinitive", "yo form"]}
            rows={[
              { left: "pedir",  right: "pido"  },
              { left: "servir", right: "sirvo" },
            ]}
          />

          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Notice that the stem change does not affect the <span lang="es">nosotros</span> or <span lang="es">vosotros</span> forms:
          </p>
          <VerbTable
            verb="perder — present tense"
            rows={[
              { pronoun: "yo",                    form: "pierdo"   },
              { pronoun: "tú",                    form: "pierdes"  },
              { pronoun: "él / ella / usted",     form: "pierde"   },
              { pronoun: "nosotros",              form: "perdemos" },
              { pronoun: "vosotros",              form: "perdéis"  },
              { pronoun: "ellos / ellas / ustedes", form: "pierden" },
            ]}
          />

          {/* Irregular yo */}
          <h3 className="font-heading text-xl text-text font-semibold mb-4">Irregular yo forms</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Some verbs are regular except for the first-person singular form. These are worth learning early because they often carry through to the present subjunctive.
          </p>
          <PairTable
            headers={["Verb", "yo form"]}
            rows={[
              { left: "hacer",    right: "hago"     },
              { left: "poner",    right: "pongo"    },
              { left: "salir",    right: "salgo"    },
              { left: "tener",    right: "tengo"    },
              { left: "venir",    right: "vengo"    },
              { left: "conocer",  right: "conozco"  },
              { left: "conducir", right: "conduzco" },
            ]}
          />

          {/* Completely irregular */}
          <h3 className="font-heading text-xl text-text font-semibold mb-4">Completely irregular verbs</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Some of the most common verbs simply have unique present-tense forms that must be learned individually.
          </p>

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3" lang="es">Ser</h4>
          <VerbTable
            verb="ser — present tense"
            rows={[
              { pronoun: "yo",                    form: "soy"   },
              { pronoun: "tú",                    form: "eres"  },
              { pronoun: "él / ella / usted",     form: "es"    },
              { pronoun: "nosotros",              form: "somos" },
              { pronoun: "vosotros",              form: "sois"  },
              { pronoun: "ellos / ellas / ustedes", form: "son"  },
            ]}
          />

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3" lang="es">Ir</h4>
          <VerbTable
            verb="ir — present tense"
            rows={[
              { pronoun: "yo",                    form: "voy"   },
              { pronoun: "tú",                    form: "vas"   },
              { pronoun: "él / ella / usted",     form: "va"    },
              { pronoun: "nosotros",              form: "vamos" },
              { pronoun: "vosotros",              form: "vais"  },
              { pronoun: "ellos / ellas / ustedes", form: "van"  },
            ]}
          />

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3" lang="es">Haber</h4>
          <VerbTable
            verb="haber — present tense"
            rows={[
              { pronoun: "yo",                    form: "he"     },
              { pronoun: "tú",                    form: "has"    },
              { pronoun: "él / ella / usted",     form: "ha"     },
              { pronoun: "nosotros",              form: "hemos"  },
              { pronoun: "vosotros",              form: "habéis" },
              { pronoun: "ellos / ellas / ustedes", form: "han"   },
            ]}
          />
        </section>

        {/* ── Preterite irregular verbs ─────────────────────────── */}
        <section id="preterite" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Preterite irregular verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            The preterite introduces a completely different set of irregular patterns.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Irregular stems</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Many common verbs use special stems and special endings. Learning these stems unlocks dozens of common irregular verbs.
          </p>
          <PairTable
            headers={["Verb", "Preterite stem"]}
            rows={[
              { left: "tener",  right: "tuv-"   },
              { left: "estar",  right: "estuv-" },
              { left: "poder",  right: "pud-"   },
              { left: "poner",  right: "pus-"   },
              { left: "saber",  right: "sup-"   },
              { left: "querer", right: "quis-"  },
              { left: "venir",  right: "vin-"   },
              { left: "hacer",  right: "hic-"   },
              { left: "decir",  right: "dij-"   },
              { left: "traer",  right: "traj-"  },
            ]}
          />
          <VerbTable
            verb="tener — preterite"
            rows={[
              { pronoun: "yo",                    form: "tuve"      },
              { pronoun: "tú",                    form: "tuviste"   },
              { pronoun: "él / ella / usted",     form: "tuvo"      },
              { pronoun: "nosotros",              form: "tuvimos"   },
              { pronoun: "vosotros",              form: "tuvisteis" },
              { pronoun: "ellos / ellas / ustedes", form: "tuvieron" },
            ]}
          />

          <h3 className="font-heading text-xl text-text font-semibold mb-4">Stem-changing <span lang="es">-IR</span> verbs</h3>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            A small group of <span lang="es">-IR</span> verbs changes stem in the third-person forms only. Notice how these behave differently from their present-tense patterns.
          </p>

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3" lang="es">Dormir</h4>
          <VerbTable
            verb="dormir — preterite"
            rows={[
              { pronoun: "yo",                    form: "dormí"      },
              { pronoun: "tú",                    form: "dormiste"   },
              { pronoun: "él / ella / usted",     form: "durmió"     },
              { pronoun: "nosotros",              form: "dormimos"   },
              { pronoun: "vosotros",              form: "dormisteis" },
              { pronoun: "ellos / ellas / ustedes", form: "durmieron" },
            ]}
          />

          <h4 className="font-heading text-base text-muted font-semibold uppercase tracking-wide mb-3" lang="es">Sentir</h4>
          <VerbTable
            verb="sentir — preterite"
            rows={[
              { pronoun: "yo",                    form: "sentí"      },
              { pronoun: "tú",                    form: "sentiste"   },
              { pronoun: "él / ella / usted",     form: "sintió"     },
              { pronoun: "nosotros",              form: "sentimos"   },
              { pronoun: "vosotros",              form: "sentisteis" },
              { pronoun: "ellos / ellas / ustedes", form: "sintieron" },
            ]}
          />
        </section>

        {/* ── Imperfect irregular verbs ─────────────────────────── */}
        <section id="imperfect" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Imperfect irregular verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-8">
            The imperfect is one of the easiest tenses in Spanish. Only three common verbs are irregular — every other verb follows the regular pattern.
          </p>

          <h3 className="font-heading text-xl text-text font-semibold mb-4" lang="es">Ser</h3>
          <VerbTable
            verb="ser — imperfect"
            rows={[
              { pronoun: "yo",                    form: "era"    },
              { pronoun: "tú",                    form: "eras"   },
              { pronoun: "él / ella / usted",     form: "era"    },
              { pronoun: "nosotros",              form: "éramos" },
              { pronoun: "vosotros",              form: "erais"  },
              { pronoun: "ellos / ellas / ustedes", form: "eran"  },
            ]}
          />

          <h3 className="font-heading text-xl text-text font-semibold mb-4" lang="es">Ir</h3>
          <VerbTable
            verb="ir — imperfect"
            rows={[
              { pronoun: "yo",                    form: "iba"    },
              { pronoun: "tú",                    form: "ibas"   },
              { pronoun: "él / ella / usted",     form: "iba"    },
              { pronoun: "nosotros",              form: "íbamos" },
              { pronoun: "vosotros",              form: "ibais"  },
              { pronoun: "ellos / ellas / ustedes", form: "iban"  },
            ]}
          />

          <h3 className="font-heading text-xl text-text font-semibold mb-4" lang="es">Ver</h3>
          <VerbTable
            verb="ver — imperfect"
            rows={[
              { pronoun: "yo",                    form: "veía"    },
              { pronoun: "tú",                    form: "veías"   },
              { pronoun: "él / ella / usted",     form: "veía"    },
              { pronoun: "nosotros",              form: "veíamos" },
              { pronoun: "vosotros",              form: "veíais"  },
              { pronoun: "ellos / ellas / ustedes", form: "veían"  },
            ]}
          />
        </section>

        {/* ── Future irregular verbs ────────────────────────────── */}
        <section id="future" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Future irregular verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The future tense is surprisingly simple. Most verbs remain completely regular — they just add endings to the infinitive. Only a small group uses irregular stems.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            Once you learn the stem, the endings are the same as for any regular verb:
          </p>
          <PairTable
            headers={["Verb", "Future stem"]}
            rows={[
              { left: "tener",  right: "tendr-" },
              { left: "venir",  right: "vendr-" },
              { left: "poner",  right: "pondr-" },
              { left: "salir",  right: "saldr-" },
              { left: "hacer",  right: "har-"   },
              { left: "decir",  right: "dir-"   },
              { left: "poder",  right: "podr-"  },
              { left: "querer", right: "querr-" },
              { left: "saber",  right: "sabr-"  },
            ]}
          />
          <VerbTable
            verb="tener — future"
            rows={[
              { pronoun: "yo",                    form: "tendré"    },
              { pronoun: "tú",                    form: "tendrás"   },
              { pronoun: "él / ella / usted",     form: "tendrá"    },
              { pronoun: "nosotros",              form: "tendremos" },
              { pronoun: "vosotros",              form: "tendréis"  },
              { pronoun: "ellos / ellas / ustedes", form: "tendrán"  },
            ]}
          />
        </section>

        {/* ── Conditional irregular verbs ───────────────────────── */}
        <section id="conditional" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Conditional irregular verbs
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            The conditional uses exactly the same irregular stems as the future tense. If you&rsquo;ve learned future irregulars, you&rsquo;ve already learned conditional irregulars.
          </p>
          <PairTable
            headers={["Verb", "Conditional stem"]}
            rows={[
              { left: "tener",  right: "tendr-" },
              { left: "venir",  right: "vendr-" },
              { left: "salir",  right: "saldr-" },
              { left: "poner",  right: "pondr-" },
              { left: "hacer",  right: "har-"   },
              { left: "decir",  right: "dir-"   },
              { left: "poder",  right: "podr-"  },
              { left: "querer", right: "querr-" },
              { left: "saber",  right: "sabr-"  },
            ]}
          />
          <VerbTable
            verb="poder — conditional"
            rows={[
              { pronoun: "yo",                    form: "podría"    },
              { pronoun: "tú",                    form: "podrías"   },
              { pronoun: "él / ella / usted",     form: "podría"    },
              { pronoun: "nosotros",              form: "podríamos" },
              { pronoun: "vosotros",              form: "podríais"  },
              { pronoun: "ellos / ellas / ustedes", form: "podrían"  },
            ]}
          />
        </section>

        {/* ── Irregular past participles ────────────────────────── */}
        <section id="past-participles" className="pt-10 pb-14 border-b border-border">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            Irregular past participles
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-4">
            The perfect tenses use a past participle. Most participles are regular — <span lang="es">hablar → hablado</span>, <span lang="es">comer → comido</span>, <span lang="es">vivir → vivido</span> — but some very common verbs have irregular forms.
          </p>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            These irregular participles appear throughout all the perfect tenses, so they are worth learning early:
          </p>
          <PairTable
            headers={["Verb", "Past participle"]}
            rows={[
              { left: "hacer",    right: "hecho"   },
              { left: "decir",    right: "dicho"   },
              { left: "escribir", right: "escrito" },
              { left: "ver",      right: "visto"   },
              { left: "poner",    right: "puesto"  },
              { left: "volver",   right: "vuelto"  },
              { left: "abrir",    right: "abierto" },
              { left: "morir",    right: "muerto"  },
            ]}
          />
          <p className="font-body text-lg text-text leading-relaxed mb-2">Examples in the present perfect:</p>
          <ul className="font-body text-lg text-text leading-relaxed space-y-1 list-none pl-0 mb-0">
            <li lang="es">he hecho</li>
            <li lang="es">has dicho</li>
            <li lang="es">hemos escrito</li>
            <li lang="es">han visto</li>
          </ul>
        </section>

        {/* ── The most important irregular verbs to learn first ─── */}
        <section id="learn-first" className="pt-10 pb-14">
          <h2 className="font-heading text-2xl lg:text-3xl text-text font-semibold mb-6">
            The most important irregular verbs to learn first
          </h2>
          <p className="font-body text-lg text-text leading-relaxed mb-6">
            If you&rsquo;re just starting out, focus on these high-frequency verbs. They appear constantly in everyday Spanish and account for a large percentage of the irregular forms you&rsquo;ll encounter.
          </p>
          <ol className="font-body text-lg text-text leading-relaxed space-y-1 list-decimal pl-6 mb-10" lang="es">
            <li>ser</li>
            <li>estar</li>
            <li>ir</li>
            <li>haber</li>
            <li>tener</li>
            <li>hacer</li>
            <li>decir</li>
            <li>poder</li>
            <li>querer</li>
            <li>venir</li>
            <li>poner</li>
            <li>salir</li>
            <li>saber</li>
            <li>ver</li>
            <li>dar</li>
            <li>traer</li>
            <li>dormir</li>
            <li>sentir</li>
            <li>pensar</li>
            <li>perder</li>
          </ol>
          <CalloutBox variant="why-this-matters">
            Spanish irregular verbs are not random. Most irregularities fall into a small number of predictable patterns — stem-changing verbs, irregular <span lang="es">yo</span> forms, irregular preterite stems, future and conditional stems, and irregular past participles. Learn the patterns instead of memorising every form individually, and you&rsquo;ll discover that irregular verbs are far more manageable than they first appear.
          </CalloutBox>
        </section>

      </Sidebar>
    </>
  );
}
