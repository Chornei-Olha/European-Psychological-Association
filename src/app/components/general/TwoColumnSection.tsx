export default function TwoColumnSection() {
  return (
    <section className="container mx-auto px-4 sm:px-0 py-16 text-black text-left md:text-center ">
      <h2 className="text-[24px] sm:text-[30px] text-black mb-8 font-dm font-semibold">
        Професійний світ, в якому ніхто не буде відчувати нестачу психологічних
        знань
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[16px] sm:text-[20px] font-inter">
        <p className="text-left sm:text-[20px]">
          Європейська психологічна асоціація просуває європейські стандарти
          психологічної освіти, науки та практики в Україні, пропонуючи фахівцям
          інновації та взаємодію.
        </p>

        <p className="text-left sm:text-[20px]">
          Розуміючи значний вплив, який психологічні знання справляють на
          людське співтовариство, вони Є-П-А розглядають психологічну освіту,
          науку та практику як рушійну силу в особистісному, професійному,
          культурному та управлінському зростанні.
        </p>
      </div>
    </section>
  );
}
