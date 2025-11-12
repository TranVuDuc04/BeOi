const marqueeItems = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  label: 'ORDER NOW',
}))

const OrderMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <div className="marquee py-6">
        <div className="marquee__inner whitespace-nowrap uppercase tracking-[0.5em] text-brand-yellow text-3xl md:text-4xl font-semibold">
          {marqueeItems.map((item) => (
            <span key={item.id} className="mr-12">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderMarquee


