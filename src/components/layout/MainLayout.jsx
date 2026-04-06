import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Background grain noise effect */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')", backgroundSize: '100px 100px' }}
      ></div>
      
      {/* Background gradients */}
      <div className="fixed -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] -right-[10%] w-[40%] h-[50%] rounded-full bg-fuchsia-500/10 blur-[120px] pointer-events-none z-0"></div>

      {/* Floating Navbar */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Sticky Left Sidebar */}
        <aside className="w-full lg:w-[320px] xl:w-[350px] lg:sticky lg:top-24 shrink-0">
          <Sidebar />
        </aside>

        {/* Right Content Area */}
        <main className="w-full lg:flex-1 flex flex-col gap-16 md:gap-24 overflow-hidden">
          {children}
          
          {/* Simple Footer built-in */}
          <footer className="text-center py-8 text-muted/60 text-sm mt-12 border-t border-white/5">
            <p>Designed & Built by Abdul Hadhi </p>
            <p className="mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
