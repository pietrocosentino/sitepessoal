import { Component, type ReactNode } from "react";
import type { Labels } from "../i18n/types";
export class PageErrorBoundary extends Component<
  { children: ReactNode; labels: Labels },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    const t = this.props.labels;
    if (this.state.failed)
      return (
        <section className="editorial-container portfolio-page" role="alert">
          <h1>{t.errorTitle}</h1>
          <p className="section-copy">{t.errorCopy}</p>
          <button
            className="primary-link"
            type="button"
            onClick={() => window.location.reload()}
          >
            {t.retry}
          </button>
        </section>
      );
    return this.props.children;
  }
}
