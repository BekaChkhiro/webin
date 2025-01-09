export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[100px] h-[100px] top-[20%] left-[10%] rounded-full bg-[#64ffda]/10 animate-float blur-sm"></div>
      <div className="absolute w-[150px] h-[150px] top-[60%] right-[15%] rounded-full bg-[#64ffda]/10 animate-float-delay blur-sm"></div>
      <div className="absolute w-[80px] h-[80px] bottom-[20%] left-[20%] rounded-full bg-[#64ffda]/10 animate-float-delay-2 blur-sm"></div>
    </div>
  );
}
