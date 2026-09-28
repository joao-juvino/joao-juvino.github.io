import styles from "./Publications.module.css";

const BLOG_URL = "https://juvino-blog.onrender.com";

const publications = [
  {
    type: "clean-code",
    date: "28 set 2026",
    title: "Clean Code na prática: princípios para código mais legível",
    description:
      "Princípios essenciais de Clean Code aplicados a exemplos práticos para escrever software mais simples, legível e fácil de manter.",
    href: `${BLOG_URL}/artigos/clean-code-na-pratica`,
  },
  {
    type: "solid",
    date: "28 set 2026",
    title: "SOLID na prática: os 5 princípios com exemplos em Java",
    description:
      "Uma introdução prática aos cinco princípios SOLID e como eles ajudam a criar código mais flexível, testável e sustentável.",
    href: `${BLOG_URL}/artigos/solid-na-pratica-principios-java`,
  },
  {
    type: "ddd",
    date: "28 set 2026",
    title: "Domain-Driven Design: entendendo DDD sem complicação",
    description:
      "Os principais conceitos de DDD explicados de forma objetiva, conectando domínio, entidades, value objects e bounded contexts.",
    href: `${BLOG_URL}/artigos/domain-driven-design-entendendo-ddd`,
  },
] as const;

function Cover({ type }: { type: (typeof publications)[number]["type"] }) {
  if (type === "clean-code") {
    return (
      <div className={styles.cover} aria-hidden="true">
        <div className={styles.cleanCode}>
          <span className={styles.codePanel} />
          <div className={styles.coverTitle}>
            <strong>CLEAN</strong>
            <strong>CODE</strong>
          </div>
          <span className={styles.codePanel} />
        </div>
      </div>
    );
  }

  if (type === "solid") {
    return (
      <div className={styles.cover} aria-hidden="true">
        <div className={styles.solidWord}>
          {"SOLID".split("").map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <div className={styles.solidBars}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cover} aria-hidden="true">
      <div className={styles.dddMap}>
        <span className={styles.dddCore}>DDD</span>
        <span className={styles.dddNode}>Entidade</span>
        <span className={styles.dddNode}>Value Object</span>
        <span className={styles.dddNode}>Aggregate</span>
        <span className={styles.dddNode}>Bounded Context</span>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publicacoes" className={styles.section} aria-labelledby="publications-title">
      <div className="container-shell">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.kicker}>Conteúdos & aprendizados</span>
            <h2 id="publications-title">Escrevendo sobre tecnologia e engenharia de software.</h2>
            <p>
              Compartilho conceitos, decisões técnicas e aprendizados práticos no Juvino Tech,
              meu blog sobre desenvolvimento e arquitetura de software.
            </p>
            <a className={styles.blogButton} href={BLOG_URL} target="_blank" rel="noreferrer">
              Ver todos os artigos <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.cards}>
            {publications.map((publication) => (
              <a
                className={styles.card}
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                key={publication.href}
              >
                <Cover type={publication.type} />
                <div className={styles.content}>
                  <time className={styles.date}>{publication.date}</time>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                  <span className={styles.readMore}>Ler artigo <span aria-hidden="true">→</span></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
