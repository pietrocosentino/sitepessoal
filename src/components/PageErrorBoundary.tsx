import { Component, type ReactNode } from "react";
export class PageErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <section className="editorial-container portfolio-page" role="alert">
          <h1>Não foi possível carregar esta página</h1>
          <p className="section-copy">Confira sua conexão e tente novamente.</p>
          <button
            className="primary-link"
            type="button"
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </button>
        </section>
      );
    return this.props.children;
  }
}
