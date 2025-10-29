import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    { image: '/portfolio/carrossel 01.png', size: 'large' },
    { image: '/portfolio/carrossel 02.png', size: 'large' },
    { image: '/portfolio/02-01.png', size: 'medium' },
    { image: '/portfolio/02.11.png', size: 'medium' },
    { image: '/portfolio/07.10.png', size: 'medium' },
    { image: '/portfolio/09-01.png', size: 'tall' },
    { image: '/portfolio/1080x1350.png', size: 'medium' },
    { image: '/portfolio/11.10.png', size: 'medium' },
    { image: '/portfolio/22.11.png', size: 'medium' },
    { image: '/portfolio/Aguasclaras-Feed-11.png', size: 'medium' },
    { image: '/portfolio/Criativo-Marc-Feed-4.png', size: 'medium' },
    { image: '/portfolio/Criativo02.png', size: 'tall' },
    { image: '/portfolio/feed01.jpg', size: 'medium' },
    { image: '/portfolio/feed04.jpg', size: 'medium' },
    { image: '/portfolio/FEED_PROMO DO DIA (1).jpg', size: 'large' },
    { image: '/portfolio/feed_semana de aniver.jpg', size: 'medium' },
    { image: '/portfolio/ferias-feed.jpg', size: 'medium' },
    { image: '/portfolio/fornalhakids-feed.jpg', size: 'medium' },
    { image: '/portfolio/outubro01.jpg', size: 'medium' },
    { image: '/portfolio/pizzaria12-fd.png', size: 'large' },
    { image: '/portfolio/FEED.jpg', size: 'medium' }
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      default:
        return '';
    }
  };

  return (
    <section
      id="portfólio"
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#002B60] via-[#004EA8] to-[#002B60] relative overflow-hidden"
    >
      {/* camadas animadas de fundo */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-3xl backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-60 h-60 bg-white/5 rounded-full backdrop-blur-sm"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* mural */}
        <div className="grid md:grid-cols-3 auto-rows-[220px] gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-3xl shadow-lg ${getSizeClass(project.size)}`}
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
