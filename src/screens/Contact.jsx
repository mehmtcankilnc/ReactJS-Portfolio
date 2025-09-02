import { IoMail } from "react-icons/io5";

export default function Contact({ id }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="flex flex-col items-center gap-6">
        <hr className="w-full" style={{ color: "gray" }} />
        <button
          onClick={() =>
            (window.location.href = "mailto:mehmtcankilinc@gmail.com")
          }
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <IoMail size={28} className="text-[#d3191c]" />
          <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700">
            mehmtcankilinc@gmail.com
          </span>
        </button>
      </div>
    </section>
  );
}
