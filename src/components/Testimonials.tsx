import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Nalu PetShop',
      company: '',
      image: '/feedback/logo nalu.png',
      text: 'Depois que a EG otimizou o nosso Google, começamos a receber muito mais mensagens e ligações de clientes novos. Foi surreal ver o movimento crescendo tão rápido. Super recomendo!'
    },
    {
      name: 'Uebel Moda Infantil',
      company: '',
      image: '/feedback/Logo UEBEL.png',
      text: 'Eles realmente entendem como funciona o nosso negócio. As estratégias são super criativas, certeiras e fizeram toda a diferença no nosso crescimento.'
    },
    {
      name: 'Pati Doces',
      company: '',
      image: '/feedback/LOGO PATI 2024.png',
      text: 'A nossa nova identidade trouxe leveza e alinhou nossa marca ao carinho e à qualidade dos nossos doces. Cada detalhe foi pensado com amor, e agora tudo transmite a nossa verdadeira essência.'
    },
    {
      name: 'Capivari Ecoresort',
      company: '',
      image: '/feedback/capivari.png',
      text: 'A parceria com a EG transformou completamente a nossa presença digital. Com estratégias bem planejadas, conseguimos aumentar o alcance e atrair muito mais visitantes interessados nos nossos pacotes. Além disso, o trabalho de captação de conteúdo elevou a forma como mostramos o resort... cada imagem e vídeo transmite exatamente a experiência que queremos passar. Hoje, nossos resultados online refletem o que vivemos aqui no Capivari: conexão real e crescimento constante.'
    },
    {
      name: 'Espaço Harmoni',
      company: '',
      image: '/feedback/LOGO NOVA HARMONI.png',
      text: 'O trabalho da EG foi um divisor de águas para o nós! O rebranding deixou a nossa marca mais moderna, leve e totalmente alinhada com a nossa essência. Além disso, as captações de conteúdo trouxeram vida e autenticidade para a nossa comunicação. Nossa presença digital hoje está mais forte, profissional e conectada com o nosso público.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setCurrentIndex(prev => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002B60] mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Histórias reais de confiança, parceria e resultados
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#E6E6E6] rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <QuoteIcon className="text-[#0094FF] mb-6" size={48} />
              <p className="text-xl md:text-2xl text-[#1A1A1A] mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover border-4 border-[#0094FF]" />
                <div>
                  <h4 className="text-lg font-bold text-[#002B60]">
                    {testimonials[currentIndex].name}
                  </h4>
                  {testimonials[currentIndex].company && <p className="text-[#1A1A1A]/70">{testimonials[currentIndex].company}</p>}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevTestimonial} className="p-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronLeftIcon size={24} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextTestimonial} className="p-3 bg-gradient-to-r from-[#004EA8] to-[#0094FF] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronRightIcon size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#0094FF] w-8' : 'bg-[#E6E6E6]'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
