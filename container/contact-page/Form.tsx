"use client";
import { useState } from "react";
import { RoundButton } from "@/components";

export default function ShirtOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    quantity: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const { name, size, quantity } = formData;
    const message = `Halo! Saya ingin memesan baju:\n\nNama: ${name}\nUkuran: ${size}\nJumlah: ${quantity}\n`;
    return `https://wa.me/6285190327577?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="w-full padding-x padding-y">
      <div className="w-full flex flex-col gap-[15px]">
        {/* Nama */}
        <div className="flex gap-[10px] w-full sm:flex-col">
          <h2 className="sub-heading font-NeueMontreal text-secondry xl:min-w-max">
            Nama Lengkap
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Masukkan nama lengkap"
            value={formData.name}
            onChange={handleChange}
            className="paragraph w-full font-NeueMontreal bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left outline-none mt-[20px] transition duration-200"
          />
        </div>

        {/* Ukuran */}
        <div className="flex gap-[10px] w-full sm:flex-col">
          <h2 className="sub-heading font-NeueMontreal text-secondry xl:min-w-max">
            Ukuran
          </h2>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="paragraph w-full font-NeueMontreal bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left outline-none mt-[20px] transition duration-200"
          >
            <option value="" disabled>
              Pilih ukuran
            </option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* Jumlah */}
        <div className="flex gap-[10px] w-full sm:flex-col">
          <h2 className="sub-heading font-NeueMontreal text-secondry xl:min-w-max">
            Jumlah
          </h2>
          <input
            type="number"
            name="quantity"
            min={1}
            placeholder="Jumlah baju"
            value={formData.quantity}
            onChange={handleChange}
            className="paragraph w-full font-NeueMontreal bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left outline-none mt-[20px] transition duration-200"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end sm:justify-start pt-[50px]">
        <div className="w-fit flex items-center justify-between bg-secondry rounded-full cursor-pointer group">
          <RoundButton
            href={generateWhatsAppLink()}
            bgcolor="#212121"
            title="Pesan via WhatsApp"
            className="bg-white text-black"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </section>
  );
}
