import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <main className="text-gray-800 bg-white font-sans min-h-screen">
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Miles Consulting & Properties</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Strategic consulting, growth acceleration, and smart living solutions.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Book a Free Consultation
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default App;
