import { motion } from "framer-motion";

export default function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="relative bg-white border-t overflow-hidden">

      {/* subtle background glow */}

      <motion.div
        animate={{ y:[0,-20,0] }}
        transition={{ duration:16, repeat:Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-200 blur-[160px] opacity-20 right-[-150px] bottom-[-200px]"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative">

        {/* Company */}

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          viewport={{ once:true }}
        >

          <h3 className="text-xl font-semibold mb-4">
            LunaTech Solutions PH
          </h3>

          <p className="text-gray-500 max-w-xl mb-12">
            LunaTech builds scalable digital platforms and cloud
            infrastructure for modern businesses.
          </p>

        </motion.div>


        {/* Navigation */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          variants={{
            hidden:{opacity:0},
            show:{
              opacity:1,
              transition:{staggerChildren:0.1}
            }
          }}
          className="flex gap-8 text-sm text-gray-600 mb-12"
        >

          {[
            {label:"Home", link:"#home"},
            {label:"Solutions", link:"#services"},
            {label:"Company", link:"#about"},
            {label:"Contact", link:"#contact"}
          ].map((item,i)=>(
            
            <motion.a
              key={i}
              href={item.link}
              variants={{
                hidden:{opacity:0,y:10},
                show:{opacity:1,y:0}
              }}
              whileHover={{ y:-2 }}
              className="relative group"
            >

              {item.label}

              {/* hover underline */}

              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300"/>

            </motion.a>

          ))}

        </motion.div>


        {/* Bottom */}

        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.3 }}
          viewport={{ once:true }}
          className="border-t pt-6 text-sm text-gray-500"
        >

          © {year} LunaTech Solutions PH

        </motion.div>

      </div>

    </footer>

  );
}