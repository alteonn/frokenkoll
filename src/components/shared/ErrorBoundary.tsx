import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-lg text-center">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-serif text-gray-900 mb-4">Något gick fel</h1>
            <p className="text-gray-600 mb-6">
              Ett oväntat fel har inträffat. Försök att ladda om sidan eller kontakta oss om problemet kvarstår.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
            >
              Ladda om sidan
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}