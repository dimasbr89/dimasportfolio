import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/home.png"
          alt="Property Appraisal"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "Property Appraisal",
    paragraph:
      "Berpengalaman dalam bidang penilaian properti (Property Appraisal) dan terdaftar di asosiasi penilai indonesia (MAPPI) serta teregister  di KEMENKEU (RMK/Register Menteri Keuangan).",
  },
  {
    id: 2,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/web.png"
          alt="web development"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "Web Development",
    paragraph:
      "Berpengalaman dalam bidang pengembangan website (Web Development) menggunakan teknologi terbaru dan modern, terutama dalam Front-end development.",
  },
  {
    id: 3,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/data_analist.png"
          alt="data analysis"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "Data Analysis",
    paragraph:
      "Berpengalaman dalam bidang analisis data (Data Analysis), terutama dalam pengolahan data menggunakan bahasa pemrograman, Microsoft Excel, ataupun Google Workspace.",
  },
  {
    id: 4,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/itsupport.png"
          alt="IT support"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "IT Support",
    paragraph:
      "Berpengalaman dalam bidang IT Support, terutama dalam pengelolaan server, networking, dan perangkat keras (hardware) maupun perangkat lunak (software).",
  },
  {
    id: 5,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/scraping.png"
          alt="Web Scraping"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "Web Scraping",
    paragraph:
      "Berpengalaman dalam bidang Web Scraping, yaitu teknik ekstraksi data secara otomatis dari website. Data yang diambil bisa berupa teks, gambar, tabel atau format lainnya. Menggunakan bahasa pemrograman Python ataupun scraping software.",
  },
  {
    id: 6,
    icon: (
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/skills/design.png"
          alt="Logo Design"
          width={40}
          height={40}
        />
      </motion.div>
    ),
    title: "Logo Design",
    paragraph:
      "Berpengalaman dalam bidang desain logo. Filosofi desain logo yang dibuat adalah simple, modern, memorable, timeless, versatile, dan appropriate.",
  },
];
export default featuresData;
