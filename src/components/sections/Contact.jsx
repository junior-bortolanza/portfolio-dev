import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully! 🚀");
        setFormData({
          from_name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error sending. Please try again.");
      });
  };

  return (
    <section
      id="contacts"
      className="min-h-screen py-28
                 bg-gradient-to-br from-[#050b16] via-[#06152a] to-[#020617]"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-4 text-center
                         bg-gradient-to-r from-blue-500 to-cyan-400
                         bg-clip-text text-transparent">
            &lt; Contact /&gt;
          </h2>

          <p className="text-gray-400 text-center mb-14">
            Shall we turn your idea into reality?
          </p>

          <div className="bg-white/5 rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* NOME */}
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={formData.from_name}
                  placeholder="Your full name"
                  className="w-full mt-2 px-4 py-3 rounded-lg
                             bg-white/10 text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, from_name: e.target.value })
                  }
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="your@email.com"
                  className="w-full mt-2 px-4 py-3 rounded-lg
                             bg-white/10 text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* MENSAGEM */}
              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  placeholder="Tell me about your project..."
                  className="w-full mt-2 px-4 py-3 rounded-lg
                             bg-white/10 text-white resize-none"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r
                           from-blue-500 to-cyan-400
                           text-white py-3 rounded-lg
                           hover:opacity-90 transition"
              >
                ✈️ Send Message
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
