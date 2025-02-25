"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Vina Rahma",
    designation: "Owner 'Warung Teh Vina'",
    content:
      "Mas Dimas sangat membantu dalam menyelesaikan proyek desain logo untuk usaha saya. Saya sangat merekomendasikan jasa beliau.",
    image: "/images/testimonials/vina.png",
    star: 5,
  },
  {
    id: 2,
    name: "Uka A.",
    designation: "Panin Bank",
    content:
      "Selain cepat dalam mengerjakan Appraisal Reports, Pak Dimas mampu bekerja secara tim ataupun individu, dan mampu menganalisa aset property dengan baik.",
    image: "/images/testimonials/uka.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Yudhistira Tri",
    designation: "Programmer @Swara Merah Putih",
    content:
      "Penilai properti yang berdedikasi tinggi, selalu memberikan hasil yang akurat dan tepat waktu. Sangat merekomendasikan jasa beliau.",
    image: "/images/testimonials/yudis.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "Aisa Ayu",
    designation: "Mahasiswa",
    content:
      "Kak Dimas sangat membantu dalam mengerjakan project tugas web design saya. Terima kasih banyak kak!",
    image: "/images/testimonials/aisa.jpg",
    star: 5,
  },
  {
    id: 5,
    name: "Ir. Taufik",
    designation: "Leader of KJPP TBR",
    content:
      "Mas Dimas sangat ahli dalam membuat Website Company Profile. hasilnya sesuai dengan keinginan kami.",
    image: "/images/testimonials/ty.png",
    star: 5,
  },
  {
    id: 6,
    name: "Christiono",
    designation: "Owner Chris MotoShop",
    content:
      "Mas Dimas adalah pribadi yang kreatif dan inovatif dalam membuat website untuk usaha UKM saya. Saya sangat puas dengan hasilnya.",
    image: "/images/testimonials/theo.jpg",
    star: 5,
  },
  {
    id: 7,
    name: "Dodi S",
    designation: "Tim Appraisal BTN",
    content:
      "Pak Dimas sangat membantu dalam mengerjakan Appraisal Reports, hasil nilainya sangat sesuai dan tepat waktu dalam pengerjaan.",
    image: "/images/testimonials/dodi.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Testimonials"
          paragraph="Testimonial dari beberapa klien yang sudah memakai jasa saya"
          center
        />

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
