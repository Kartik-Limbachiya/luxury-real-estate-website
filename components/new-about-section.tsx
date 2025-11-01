// "use client";

// import { TimelineContent } from "@/components/ui/timeline-animation";
// import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
// import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import { useRef } from "react";
// import Image from "next/image";

// export default function NewAboutSection() {
//   const heroRef = useRef<HTMLDivElement>(null);

//   const revealVariants = {
//     visible: (i: number) => ({
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.4,
//         duration: 0.5,
//       },
//     }),
//     hidden: {
//       filter: "blur(10px)",
//       y: -20,
//       opacity: 0,
//     },
//   };

//   const scaleVariants = {
//     visible: (i: number) => ({
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.4,
//         duration: 0.5,
//       },
//     }),
//     hidden: {
//       filter: "blur(10px)",
//       opacity: 0,
//     },
//   };

//   return (
//     <section className="py-8 px-4 bg-[#f9f9f9]" ref={heroRef}>
//       <div className="max-w-6xl mx-auto">
//         <div className="relative">
//           {/* Header with social icons */}
//           <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
//             <div className="flex items-center gap-2 text-xl">
//               <span className="text-orange-500 animate-spin">✱</span>
//               <TimelineContent
//                 as="span"
//                 animationNum={0}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="text-sm font-medium text-gray-600"
//               >
//                 WHO WE ARE
//               </TimelineContent>
//             </div>
//             <div className="flex gap-4">
//               <TimelineContent
//                 as="a"
//                 animationNum={0}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 href="https://www.facebook.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-blue-600 hover:border-blue-600 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
//               >
//                 <Facebook className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
//               </TimelineContent>
//               <TimelineContent
//                 as="a"
//                 animationNum={1}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 href="https://www.instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
//               >
//                 <Instagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
//               </TimelineContent>
//               <TimelineContent
//                 as="a"
//                 animationNum={2}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-blue-700 hover:border-blue-700 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
//               >
//                 <Linkedin className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
//               </TimelineContent>
//               <TimelineContent
//                 as="a"
//                 animationNum={3}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 href="https://www.youtube.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-red-600 hover:border-red-600 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
//               >
//                 <Youtube className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
//               </TimelineContent>
//             </div>
//           </div>

//           {/* Hero Image with Custom Clip Path */}
//           <TimelineContent
//             as="figure"
//             animationNum={4}
//             timelineRef={heroRef}
//             customVariants={scaleVariants}
//             className="relative group"
//           >
//             <svg
//               className="w-full"
//               width="100%"
//               height="100%"
//               viewBox="0 0 100 40"
//             >
//               <defs>
//                 <clipPath
//                   id="clip-inverted-building"
//                   clipPathUnits="objectBoundingBox"
//                 >
//                   <path
//                     d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
//                     fill="#D9D9D9"
//                   />
//                 </clipPath>
//               </defs>
//               <image
//                 clipPath="url(#clip-inverted-building)"
//                 preserveAspectRatio="xMidYMid slice"
//                 width="100%"
//                 height="100%"
//                 xlinkHref="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop"
//               />
//             </svg>
//           </TimelineContent>

//           {/* Stats */}
//           <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
//             <TimelineContent
//               as="div"
//               animationNum={5}
//               timelineRef={heroRef}
//               customVariants={revealVariants}
//               className="flex gap-4"
//             >
//               <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
//                 <span className="text-orange-500 font-bold">6+</span>
//                 <span className="text-gray-600">years of excellence</span>
//                 <span className="text-gray-300">|</span>
//               </div>
//               <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
//                 <span className="text-orange-500 font-bold">60,000+</span>
//                 <span className="text-gray-600">families served</span>
//               </div>
//             </TimelineContent>
//             <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
//               <TimelineContent
//                 as="div"
//                 animationNum={6}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
//               >
//                 <span className="text-orange-500 font-semibold">800</span>
//                 <span className="text-gray-600 uppercase">cities</span>
//               </TimelineContent>
//               <TimelineContent
//                 as="div"
//                 animationNum={7}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="flex items-center gap-2 mb-2 sm:text-base text-xs"
//               >
//                 <span className="text-orange-500 font-bold">29 States</span>
//                 <span className="text-gray-600">+ 7 Union Territories</span>
//                 <span className="text-gray-300 lg:hidden block">|</span>
//               </TimelineContent>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-900 mb-8">
//               <VerticalCutReveal
//                 splitBy="words"
//                 staggerDuration={0.1}
//                 staggerFrom="first"
//                 reverse={true}
//                 transition={{
//                   type: "spring",
//                   stiffness: 250,
//                   damping: 30,
//                   delay: 3,
//                 }}
//               >
//                 Building Dreams, Creating Homes for Jain Communities Across India.
//               </VerticalCutReveal>
//             </h1>

//             <TimelineContent
//               as="div"
//               animationNum={9}
//               timelineRef={heroRef}
//               customVariants={revealVariants}
//               className="grid md:grid-cols-2 gap-8 text-gray-600"
//             >
//               <TimelineContent
//                 as="div"
//                 animationNum={10}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="sm:text-base text-xs"
//               >
//                 <p className="leading-relaxed text-justify">
//                   Founded with a vision to serve Jain communities across India, SEWAS Nagri
//                   has grown from a small initiative to a pan-India infrastructure development
//                   company serving 60,000+ families across 800 cities.
//                 </p>
//               </TimelineContent>
//               <TimelineContent
//                 as="div"
//                 animationNum={11}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="sm:text-base text-xs"
//               >
//                 <p className="leading-relaxed text-justify">
//                   Every community deserves a home that reflects their values. We specialize
//                   in creating sustainable, quality housing solutions with 0% down payment
//                   and 100% bank loan facilities, making homeownership accessible to all.
//                 </p>
//               </TimelineContent>
//             </TimelineContent>

//             {/* Philosophy Quote */}
//             <TimelineContent
//               as="div"
//               animationNum={12}
//               timelineRef={heroRef}
//               customVariants={revealVariants}
//               className="mt-8 p-4 bg-amber-50 border-l-4 border-orange-500 rounded-r-lg"
//             >
//               <p className="text-gray-700 italic mb-1 sm:text-base text-xs">
//                 "कोई भी जैन बिना घर और रोजगार नहीं रहना चाहिए"
//               </p>
//               <p className="text-gray-600 text-sm">
//                 "No Jain should live without home and livelihood" - Ashwin Shah
//               </p>
//             </TimelineContent>
//           </div>

//           <div className="md:col-span-1">
//             <div className="text-right">
//               <TimelineContent
//                 as="div"
//                 animationNum={13}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="text-orange-500 text-2xl font-bold mb-2"
//               >
//                 SEWAS NAGRI
//               </TimelineContent>
//               <TimelineContent
//                 as="div"
//                 animationNum={14}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="text-gray-600 text-sm mb-8"
//               >
//                 A Project by SEWAS Universal Federation
//               </TimelineContent>

//               <TimelineContent
//                 as="div"
//                 animationNum={15}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="mb-6"
//               >
//                 <p className="text-gray-900 font-medium mb-4 sm:text-base text-sm">
//                   Ready to find your dream home in a vibrant Jain community?
//                 </p>
//               </TimelineContent>

//               {/* Core Values */}
//               <TimelineContent
//                 as="div"
//                 animationNum={16}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="mb-6 text-left"
//               >
//                 <h3 className="text-gray-900 font-semibold mb-3 text-sm">Our Core Values:</h3>
//                 <ul className="space-y-2 text-gray-600 text-xs">
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500 mt-1">›</span>
//                     <span>Sustainable Development</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500 mt-1">›</span>
//                     <span>Community First Approach</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500 mt-1">›</span>
//                     <span>Quality & Trust</span>
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500 mt-1">›</span>
//                     <span>Innovation & Excellence</span>
//                   </li>
//                 </ul>
//               </TimelineContent>

//               <TimelineContent
//                 as="button"
//                 animationNum={17}
//                 timelineRef={heroRef}
//                 customVariants={revealVariants}
//                 className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white sm:px-5 px-3 sm:py-3 py-2 rounded-lg cursor-pointer font-semibold sm:text-base text-xs"
//               >
//                 EXPLORE PROJECTS <ArrowRight className="sm:w-5 w-4 sm:h-5 h-4" />
//               </TimelineContent>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Export all sections
// export { NewAboutSection as default, OurStorySection }

// // Alias for backwards compatibility
// export { NewAboutSection as AboutUsSection }
//   return (
//     <section className="py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Our Story */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
//                 <p className="text-gray-600">6+ Years of Excellence</p>
//               </div>
//             </div>
            
//             <p className="text-gray-700 leading-relaxed">
//               Founded with a vision to serve Jain communities across India, SEWAS Nagri
//               has grown from a small initiative to a pan-India infrastructure development
//               company serving 60,000+ families across 800 cities.
//             </p>

//             <div className="p-4 bg-amber-50 border-l-4 border-orange-500 rounded-r-lg">
//               <p className="text-gray-700 italic mb-1">
//                 "कोई भी जैन बिना घर और रोजगार नहीं रहना चाहिए"
//               </p>
//               <p className="text-gray-600 text-sm">
//                 "No Jain should live without home and livelihood" - Ashwin Shah
//               </p>
//             </div>
//           </div>

//           {/* Our Values */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
//                 <p className="text-gray-600">Core Principles</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                 <span className="text-orange-500 text-xl">›</span>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Sustainable Development</h3>
//                   <p className="text-sm text-gray-600">Building for the future with eco-friendly practices</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                 <span className="text-orange-500 text-xl">›</span>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Community First Approach</h3>
//                   <p className="text-sm text-gray-600">Putting Jain community needs at the center</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                 <span className="text-orange-500 text-xl">›</span>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Quality & Trust</h3>
//                   <p className="text-sm text-gray-600">Delivering excellence in every project</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                 <span className="text-orange-500 text-xl">›</span>
//                 <div>
//                   <h3 className="font-semibold text-gray-900 mb-1">Innovation & Excellence</h3>
//                   <p className="text-sm text-gray-600">Pioneering new solutions in housing</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }