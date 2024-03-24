import { ProductType } from "@/types/types";
import Image from "next/image"

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store"
    })
    if (!res.ok) {
      throw new Error("Failed!");
    }
    return res.json()
  }

const Featured = async () => {
    const featuredProducts:ProductType[] = await getData()

    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            <div className="w-max flex">
                {featuredProducts.map(item => (
                    <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] lg:w-[33vw] xl:h-[90vh]">
                        {item.img && <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300">
                            <Image src={item.img} alt="featured item" fill className="object-contain" />
                        </div>}
                        <div className="flex-1 flex flex-col items-center text-center justify-around gap-4 hover:bg-fuchsia-50 transition-all duration-300">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                            <p className="p-4 2xl:p-8">{item.desc}</p>
                            <span className="text-xl font-bold">{item.price}</span>
                            <button className="bg-red-500 text-white p-2 rounded-md">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Featured