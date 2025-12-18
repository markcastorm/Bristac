import React from 'react';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#342C27] flex items-center justify-center">
      <ContactForm />
    </main>
  );
};

export default App;