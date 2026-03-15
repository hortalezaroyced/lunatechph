import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all fields.");
      return;
    }

    setLoading(true);

    try {

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (error) {

      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");

    }

    setLoading(false);

  };


  const handleChange = (e:any) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  return (

    <section
      id="contact"
      className="relative py-32 bg-white overflow-hidden"
    >

      {/* Background glow */}

      <motion.div
        animate={{ y:[0,-40,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute w-[700px] h-[700px] bg-blue-200 blur-[180px] opacity-20 left-[-200px] bottom-[-200px]"
      />

      <div className="max-w-5xl mx-auto px-6 relative">


        {/* Heading */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight mb-8">
            Start a Project
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mb-20">
            Tell us about your project and how LunaTech can help bring your
            digital ideas to life.
          </p>

        </motion.div>


        {/* Success Message */}

        {success && (

          <motion.div
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0 }}
            className="mb-12 p-6 rounded-xl bg-green-50 border border-green-200 text-green-700"
          >

            ✓ Message sent successfully!  
            Our team will contact you shortly.

          </motion.div>

        )}


        {/* Contact Form */}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-12 mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          variants={{
            hidden:{opacity:0},
            show:{
              opacity:1,
              transition:{staggerChildren:0.15}
            }
          }}
        >

          {/* Name */}

          <motion.div
            variants={{
              hidden:{opacity:0,y:30},
              show:{opacity:1,y:0}
            }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-black transition"
            />

          </motion.div>


          {/* Email */}

          <motion.div
            variants={{
              hidden:{opacity:0,y:30},
              show:{opacity:1,y:0}
            }}
          >

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-4 text-lg focus:outline-none focus:border-black transition"
            />

          </motion.div>


          {/* Message */}

          <motion.div
            variants={{
              hidden:{opacity:0,y:30},
              show:{opacity:1,y:0}
            }}
          >

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-4 text-lg resize-none focus:outline-none focus:border-black transition"
            />

          </motion.div>


          {/* Submit Button */}

          <motion.button
            type="submit"
            whileHover={{ x:6 }}
            whileTap={{ scale:0.96 }}
            disabled={loading}
            className="flex items-center gap-2 text-lg font-semibold"
          >

            {loading ? (

              <span className="animate-pulse">
                Sending...
              </span>

            ) : (

              <>
                Send Message
                <Send size={18}/>
              </>

            )}

          </motion.button>

        </motion.form>


        {/* Contact Information */}

        <div className="grid md:grid-cols-3 gap-12 text-gray-600">

          {[

            {
              icon: Mail,
              title: "Email",
              value: "info@lunatechph.com",
            },

            {
              icon: Phone,
              title: "Phone",
              value: "+63 912 345 6789",
            },

            {
              icon: MapPin,
              title: "Location",
              value: "Makati City, Philippines",
            },

          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index * 0.15 }}
                viewport={{ once:true }}
                whileHover={{ y:-6 }}
                className="group"
              >

                <Icon className="mb-4 text-gray-900 group-hover:text-blue-600 transition"/>

                <p className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </p>

                <p>{item.value}</p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}