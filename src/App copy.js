import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, Server, Wifi } from 'lucide-react';

const AnimatedText = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const HTTPAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-4 top-4 w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center"
      animate={{
        x: [0, 200, 0],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Globe className="text-white" size={40} />
    </motion.div>
    <motion.div
      className="absolute right-4 top-4 w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center"
      animate={{
        x: [0, -200, 0],
        rotate: [0, -360, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Server className="text-white" size={40} />
    </motion.div>
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold"
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      HTTP
    </motion.div>
  </motion.div>
);

const HTTPSAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-purple-100 to-yellow-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-4 top-4 w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center"
      animate={{
        x: [0, 200, 0],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Globe className="text-white" size={40} />
    </motion.div>
    <motion.div
      className="absolute right-4 top-4 w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center"
      animate={{
        x: [0, -200, 0],
        rotate: [0, -360, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Server className="text-white" size={40} />
    </motion.div>
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Lock className="text-green-600" size={60} />
    </motion.div>
    <motion.div
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-3xl font-bold"
      animate={{
        opacity: [0, 1, 0],
        y: [20, 0, 20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      HTTPS
    </motion.div>
  </motion.div>
);

const TCPIPAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-red-100 to-blue-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-4 top-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center"
      animate={{
        x: [0, 280, 0],
        y: [0, 100, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="text-white font-bold">TCP</div>
    </motion.div>
    <motion.div
      className="absolute right-4 bottom-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
      animate={{
        x: [0, -280, 0],
        y: [0, -100, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="text-white font-bold">IP</div>
    </motion.div>
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 bg-yellow-400 rounded-full"
        initial={{ x: -10, y: Math.random() * 240 }}
        animate={{
          x: [0, 400],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear",
        }}
      />
    ))}
  </motion.div>
);

const DNSAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-4 top-4 w-40 text-center p-2 bg-green-500 rounded-lg"
      animate={{
        x: [0, 200, 0],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-white font-bold">www.example.com</div>
    </motion.div>
    <motion.div
      className="absolute right-4 bottom-4 w-40 text-center p-2 bg-blue-500 rounded-lg"
      animate={{
        x: [0, -200, 0],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="text-white font-bold">192.168.1.1</div>
    </motion.div>
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Globe className="text-gray-600" size={80} />
    </motion.div>
    <motion.div
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-2xl font-bold"
      animate={{
        opacity: [0, 1, 0],
        y: [20, 0, 20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      DNS
    </motion.div>
  </motion.div>
);

const CDNAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Server className="text-white" size={40} />
    </motion.div>
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <motion.div
        key={i}
        className="absolute left-1/2 top-1/2 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center"
        style={{
          transformOrigin: "0 0",
          rotate: `${angle}deg`,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut",
        }}
      >
        <Wifi className="text-white" size={24} />
      </motion.div>
    ))}
    <motion.div
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-2xl font-bold"
      animate={{
        opacity: [0, 1, 0],
        y: [20, 0, 20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      CDN
    </motion.div>
  </motion.div>
);

const LatencyBandwidthAnimation = () => (
  <motion.div className="relative h-60 bg-gradient-to-r from-yellow-100 to-green-100 rounded-lg overflow-hidden">
    <motion.div
      className="absolute left-4 top-4 w-12 h-12 bg-yellow-500 rounded-full"
      animate={{
        x: [0, 300, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute left-4 bottom-20 w-[340px] h-8 bg-green-200 rounded-full overflow-hidden"
    >
      <motion.div
        className="h-full bg-green-500"
        animate={{
          width: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
    <motion.div
      className="absolute left-4 bottom-4 text-xl font-bold"
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Latency
    </motion.div>
    <motion.div
      className="absolute right-4 bottom-4 text-xl font-bold"
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      Bandwidth
    </motion.div>
  </motion.div>
);

const NetworkProtocolsAnimations = () => {
  return (
    <div className="space-y-8 p-4 bg-gray-100 rounded-xl">
      <AnimatedText>
        <h2 className="text-3xl font-bold mb-6 text-center">
          أساسيات الشبكات وبروتوكولات الإنترنت
        </h2>
      </AnimatedText>

      <AnimatedText>
        <h3 className="text-2xl font-semibold mb-4">HTTP/HTTPS</h3>
        <p className="mb-4">
          HTTP (Hypertext Transfer Protocol): بروتوكول يستخدم لنقل النص التشعبي
          عبر الإنترنت. HTTP غير مشفر ويعتمد على طلب-استجابة بين العميل والخادم.
        </p>
        <HTTPAnimation />
      </AnimatedText>

      <AnimatedText>
        <p className="mb-4">
          HTTPS (HTTP Secure): نسخة آمنة من HTTP تستخدم تشفير SSL/TLS لتأمين
          البيانات المنقولة، مما يضمن الخصوصية والأمان.
        </p>
        <HTTPSAnimation />
      </AnimatedText>

      <AnimatedText>
        <h3 className="text-2xl font-semibold mb-4">TCP/IP</h3>
        <p className="mb-2">
          TCP (Transmission Control Protocol): يضمن نقل البيانات بشكل صحيح بين
          الأجهزة عبر الإنترنت. يضمن التحقق من فقدان البيانات وإعادة إرسالها.
        </p>
        <p className="mb-4">
          IP (Internet Protocol): يحدد كيفية توجيه الحزم من المصدر إلى الوجهة
          باستخدام عناوين IP.
        </p>
        <TCPIPAnimation />
      </AnimatedText>

      <AnimatedText>
        <h3 className="text-2xl font-semibold mb-4">
          DNS (Domain Name System)
        </h3>
        <p className="mb-4">
          يترجم أسماء النطاقات (مثل www.example.com) إلى عناوين IP (مثل
          192.168.1.1)، مما يسهل الوصول إلى المواقع عبر الإنترنت.
        </p>
        <DNSAnimation />
      </AnimatedText>
      <AnimatedText>
        <h3 className="text-2xl font-semibold mb-4">
          CDNs (Content Delivery Networks)
        </h3>
        <p className="mb-4">
          شبكة من الخوادم الموزعة جغرافياً تخزن نسخًا من المحتوى الثابت (مثل
          الصور والفيديوهات) لتقليل زمن التحميل عبر تقليل المسافة بين المستخدم
          والمحتوى.
        </p>
        <CDNAnimation />
      </AnimatedText>

      <AnimatedText>
        <h3 className="text-2xl font-semibold mb-4">Latency وBandwidth</h3>
        <p className="mb-2">
          Latency: الوقت المستغرق لنقل البيانات من المصدر إلى الوجهة.
        </p>
        <p className="mb-4">
          Bandwidth: كمية البيانات التي يمكن نقلها عبر الشبكة في فترة زمنية
          معينة.
        </p>
        <LatencyBandwidthAnimation />
      </AnimatedText>
    </div>
  );
};

export default NetworkProtocolsAnimations;

