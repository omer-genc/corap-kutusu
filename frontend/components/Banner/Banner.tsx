import Link from 'next/link';

function Banner() {
  return (
    <div className="bg-purple h-12 w-full text-white font-sans">
      <div className="container flex flex-row justify-between mx-auto items-center h-full">
        <div className="flex flex-row h-full gap-4">
          <div className="flex flex-row justify-center gap-1 items-center">
            <i className="bi bi-envelope"></i>
            <Link href="mail:omergnc1@gmail.com">omergnc1@gmail.com</Link>
          </div>
          <div className="flex flex-row justify-center gap-1 items-center">
            <i className="bi bi-telephone"></i>
            <Link href="tel:+905452734847">5452734847</Link>
          </div>
        </div>

        <div className="flex flex-row h-full gap-4">
          <div className="flex flex-row justify-center gap-1 items-center">
            Login
            <i className="bi bi-person"></i>
          </div>
          <div className="flex flex-row justify-center gap-1 items-center">
            <i className="bi bi-cart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
