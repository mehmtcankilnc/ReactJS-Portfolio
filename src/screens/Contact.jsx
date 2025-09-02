import { IoMail } from "react-icons/io5";

export default function Contact({ id }) {
  return (
    <section id={id} className="scroll-mt-24 mx-auto footer">
      <div className="flex flex-1 flex-col gap-5">
        <hr style={{ width: "full", color: "gray" }} />
        <button
          onClick={() =>
            (window.location.href = "mailto:mehmtcankilinc@gmail.com")
          }
          className="flex items-center gap-2 hover:cursor-pointer"
        >
          <IoMail size={30} />
          <span>mehmtcankilinc@gmail.com</span>
        </button>
      </div>
    </section>
  );
}
