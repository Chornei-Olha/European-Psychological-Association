// import Image from "next/image";

export default function Links() {
  return (
    <div className="bg-[#D5E5FF] relative w-full mx-auto flex flex-col justify-center py-10 text-center text-white cursor-pointer">
      <a
        href="https://drive.google.com/file/d/16evjhVk2PtTx44STLHz75ZaHuw9rI4c1/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Положення про членство та членські внески Європейської психологічної
        асоціації
      </a>
      <a
        href="https://drive.google.com/file/d/16lSYOJuyWmTAxkT8HsyBYg0HSoyGRC4s/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Порядок виключення з членів Європейської психологічної асоціації
      </a>
      <a
        href="https://drive.google.com/file/d/1HAI8FylLeMwcG70C-hfRt_6GNo_RtECT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Реєстр
      </a>
    </div>
  );
}
