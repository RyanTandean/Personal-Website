import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4 text-white px-6 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#06d4b3]/70">
            Something went wrong
          </p>
          <h1 className="text-3xl font-bold">Failed to load page</h1>
          <p className="text-white/40 max-w-sm">
            This might be a network issue. Try refreshing.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-5 py-2 rounded-full border border-white/20 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-200"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
