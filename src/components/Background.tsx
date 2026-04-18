import bg from "@/assets/bg-salon.jpg";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background/95" />
      {/* Animated soft blobs */}
      <div className="absolute left-[5%] top-[10%] h-96 w-96 rounded-full bg-rose/15 blur-3xl animate-float" />
      <div className="absolute right-[5%] top-[40%] h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[10%] left-[30%] h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float" style={{ animationDelay: "5s" }} />
    </div>
  );
}
