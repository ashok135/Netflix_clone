function Hero() {
  return (
    
   <div className="relative h-[70vh] bg-[url('/hero-background.jpg')] bg-cover bg-center flex items-center justify-center">
  <div className="absolute inset-0 bg-black/80 "></div>

  <h2 className="relative z-10 text-white text-[40px] md:text-[70px] leading-[1.2] font-bold  grid place-items-center text-center" >
    Unlimited movies,<br></br> shows, and more <br></br>
    <span className="text-[20px] mt-2.5" >Starts at ₹149. Cancel at any time.</span>
    <button className="netflix mt-4">Restart your Membership</button>

</h2>
</div>

  )
}

export default Hero