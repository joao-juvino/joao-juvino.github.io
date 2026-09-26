import Icon from "./Icon";
/** Technical diagrams, not fabricated screenshots. */
export default function ProjectVisual({
  kind,
}: {
  kind: "blog" | "companages" | "obrasync-compact";
}) {
  if (kind === "blog")
    return (
      <div
        className="blog-diagram"
        aria-label="Representação técnica do BlogNodejs"
      >
        <div className="blog-browser">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span />
            <small>blog.node</small>
          </div>
          <div className="blog-preview">
            <span className="blog-kicker">CONTEÚDO &amp; TECNOLOGIA</span>
            <strong>Blog do Node</strong>
            <p>Postagens recentes organizadas por categoria.</p>
            <div className="post-preview">
              <span>ARTIGO</span>
              <b>Uma publicação por vez.</b>
              <i>Leia mais</i>
            </div>
          </div>
        </div>
        <div className="blog-architecture">
          <div className="diagram-heading">
            <span>Publicação ponta a ponta.</span>
            <small>FLUXO DA APLICAÇÃO</small>
          </div>
          <div className="blog-stack-node">
            <Icon name="globe" />
            <div><strong>Express + Handlebars</strong><small>Rotas e páginas renderizadas</small></div>
          </div>
          <span className="flow-line" />
          <div className="blog-stack-node emphasis">
            <Icon name="server" />
            <div><strong>Posts e categorias</strong><small>Cadastro · login · administração</small></div>
          </div>
          <span className="flow-line" />
          <div className="blog-stack-node">
            <Icon name="database" />
            <div><strong>MongoDB</strong><small>Persistência com Mongoose</small></div>
          </div>
          <small className="diagram-caption">
            Representação técnica · não é uma captura de tela
          </small>
        </div>
      </div>
    );
  if (kind === "companages")
    return (
      <div
        className="company-diagram"
        aria-label="Modelo de domínio simplificado do Companages"
      >
        <div className="diagram-brand">
          <Icon name="architecture" /> Companages
        </div>
        <strong>
          Empresas e equipes
          <br /> em um único workspace.
        </strong>
        <div className="company-domain">
          <div className="flow-node blue-node">
            <Icon name="building" /> <span>Organizações</span>
          </div>
          <div className="company-domain-row">
            <div className="flow-node">Membros</div>
            <div className="flow-node">Cargos</div>
          </div>
          <div className="flow-node assignment-node">
            <Icon name="architecture" /> <span>Associações</span>
          </div>
        </div>
        <div className="company-stack">
          <span>Angular</span><i />
          <span>Spring Boot</span><i />
          <span>PostgreSQL</span>
        </div>
        <small>Modelo de domínio simplificado</small>
      </div>
    );
  return (
    <div
      className="obra-compact-diagram"
      aria-label="Fluxo técnico simplificado do ObraSync"
    >
      <div className="diagram-brand">
        <Icon name="building" /> ObraSync
      </div>
      <strong>
        Da vistoria
        <br /> ao laudo técnico.
      </strong>
      <div className="obra-compact-flow">
        <div className="flow-node blue-node">
          <Icon name="building" /> <span>Obras</span>
        </div>
        <span className="flow-line" />
        <div className="flow-node">
          <Icon name="architecture" /> <span>Vistorias e evidências</span>
        </div>
        <span className="flow-line" />
        <div className="flow-node result-node">
          <Icon name="code" /> <span>Relatórios PDF</span>
        </div>
      </div>
      <small>Fluxo técnico simplificado</small>
    </div>
  );
}
