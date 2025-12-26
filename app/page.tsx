export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 cyber-gradient">
            Prackova
          </h1>
          <p className="text-2xl md:text-3xl text-[var(--cyber-green)] glow-text">
            AI & Security Specialist
          </p>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            <p>Building the future with artificial intelligence and fortifying it with security.</p>
          </div>
        </div>
      </section>

      {/* AI Agent Terminal Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[var(--cyber-blue)]">
            &gt;_ AI Agent Terminal
          </h2>
          <div className="glow-border bg-[var(--darker-bg)] rounded-lg p-8 min-h-[400px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-[var(--cyber-green)]">$ initialize_ai_agent</p>
              <p className="text-gray-500">Loading AI capabilities...</p>
              <p className="text-gray-500">Neural networks: <span className="text-[var(--cyber-green)]">ONLINE</span></p>
              <p className="text-gray-500">Security protocols: <span className="text-[var(--cyber-green)]">ACTIVE</span></p>
              <p className="text-[var(--cyber-green)]">$ _</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-[var(--dark-bg)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[var(--cyber-purple)]">
            &lt;Projects /&gt;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-[var(--darker-bg)] border border-gray-800 rounded-lg p-6 hover:border-[var(--cyber-green)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--cyber-green)]/20">
              <h3 className="text-xl font-bold mb-3 text-[var(--cyber-green)]">AI Neural Network</h3>
              <p className="text-gray-400 mb-4">Deep learning model for pattern recognition and prediction.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-[var(--cyber-green)]/10 text-[var(--cyber-green)] px-2 py-1 rounded">Python</span>
                <span className="text-xs bg-[var(--cyber-green)]/10 text-[var(--cyber-green)] px-2 py-1 rounded">TensorFlow</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[var(--darker-bg)] border border-gray-800 rounded-lg p-6 hover:border-[var(--cyber-blue)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--cyber-blue)]/20">
              <h3 className="text-xl font-bold mb-3 text-[var(--cyber-blue)]">Security Scanner</h3>
              <p className="text-gray-400 mb-4">Automated vulnerability assessment and penetration testing tool.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)] px-2 py-1 rounded">Go</span>
                <span className="text-xs bg-[var(--cyber-blue)]/10 text-[var(--cyber-blue)] px-2 py-1 rounded">Security</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[var(--darker-bg)] border border-gray-800 rounded-lg p-6 hover:border-[var(--cyber-purple)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--cyber-purple)]/20">
              <h3 className="text-xl font-bold mb-3 text-[var(--cyber-purple)]">AI Chatbot</h3>
              <p className="text-gray-400 mb-4">Natural language processing chatbot with context awareness.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-[var(--cyber-purple)]/10 text-[var(--cyber-purple)] px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-[var(--cyber-purple)]/10 text-[var(--cyber-purple)] px-2 py-1 rounded">NLP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="cyber-gradient">Technical Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Skills */}
            <div className="bg-[var(--dark-bg)] border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[var(--cyber-green)] flex items-center gap-2">
                <span className="text-3xl">🤖</span> AI & Machine Learning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>Deep Learning & Neural Networks</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>Computer Vision</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>Reinforcement Learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>Model Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-green)] rounded-full"></span>
                  <span>AI Ethics & Governance</span>
                </li>
              </ul>
            </div>

            {/* Security Skills */}
            <div className="bg-[var(--dark-bg)] border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-[var(--cyber-blue)] flex items-center gap-2">
                <span className="text-3xl">🛡️</span> Security & Cybersecurity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Penetration Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Vulnerability Assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Network Security</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Cryptography</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Threat Intelligence</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></span>
                  <span>Incident Response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; 2025 Prackova. All rights reserved.</p>
        <p className="text-sm mt-2">Built with Next.js, TypeScript & Tailwind CSS</p>
      </footer>
    </main>
  );
}
