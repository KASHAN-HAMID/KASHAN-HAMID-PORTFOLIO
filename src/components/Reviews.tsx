'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'The Vision Consultants',
    position: '',
    image: '/IMG-20250703-WA0022.jpg',
    rating: 5,
    review:
      "We've been impressed by the creativity and professionalism of his design work. They truly understand our brand's vision and have helped us convey it effectively to our audience.",
  },
  {
    name: 'Study Time Consultants',
    position: '',
    image: 'IMG-20250703-WA0023.jpg',
    rating: 5,
    review:
      'Working with Kashan was an absolute pleasure. They delivered a stunning e-commerce platform that perfectly represents our brand. The UI/UX design is intuitive and our customers love it.',
  },
  {
    name: 'V Study Abroad Consultants',
    position: '',
    image: 'IMG-20250703-WA0024.jpg',
    rating: 5,
    review:
      'The graphic design work Kashan created for our marketing campaigns was outstanding. They truly understand how to create visuals that resonate with our target audience and drive engagement.',
  },
  {
    name: '',
    position: '',
    image: 'IMG-20250703-WA0025.jpg',
    rating: 5,
    review:
      "Kashan's technical expertise is impressive. They built a complex web application for us with seamless functionality. Their communication throughout the project was excellent.",
  },
  {
    name: 'Cenphix',
    position: '',
    image: 'IMG-20250703-WA0026.jpg',
    rating: 5,
    review:
      'The team at Kashan created a beautiful online store that perfectly captures the essence of our brand. The design is elegant and the shopping experience is smooth and enjoyable.',
  },
  {
    name: 'HBAF',
    position: '',
    image: 'IMG-20250703-WA0027.jpg',
    rating: 5,
    review:
      'Kashan delivered exceptional UI/UX design for our mobile app. Their user-centered approach resulted in a 40% increase in user engagement. Highly recommended!',
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
   <section id="reviews" className="py-20 relative bg-transparent">

      {/* Background blur circles */}
      

      <div className="container relative z-10 px-6 mx-auto text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text mb-4"
        >
          Client Reviews
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg mb-10"
        >
          Hear what our amazing clients say about working with us.
        </motion.p>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mx-auto shadow-lg bg-card/90 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <img
                  src={reviews[index].image}
                  alt={reviews[index].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary"
                />
              </div>
              <h4 className="text-xl font-semibold">{reviews[index].name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{reviews[index].position}</p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: reviews[index].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-base text-muted-foreground italic max-w-xl mx-auto">
                "{reviews[index].review}"
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prev}
            className="px-4 py-2 text-sm border rounded-xl hover:bg-muted transition-colors"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="px-4 py-2 text-sm border rounded-xl hover:bg-muted transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
