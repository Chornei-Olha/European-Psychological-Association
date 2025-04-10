export default function TwoColumnSection() {
  return (
    <section className="container mx-auto py-16 px-4 text-black text-center">
      <h2 className="text-[30px] text-black mb-8 font-dm font-semibold">
        Професійний світ, в якому ніхто не буде відчувати нестачу психологічних
        знань{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-[20px] font-inter text-left">
          Європейська психологічна асоціація просуває європейські стандарти
          психологічної освіти, науці та практики в Україні, пропонуючи фахівцям
          інновації та взаємодію.
        </p>

        <p className="text-[20px] font-inter text-left">
          Розуміючи значний вплив, який психологічні знання справляють на
          людське співтовариство, вони розглядають психологічну освіту, науку та
          практику як рушійну силу у особистісному, професійному, культурному та
          управлінському зростанні.
        </p>
      </div>
    </section>
  );
}
