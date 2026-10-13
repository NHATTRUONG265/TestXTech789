export default function SectionTitle({ children }) {
  return (
    <div className="flex justify-center my-10 px-4">
      <h2 className="bg-brand text-white font-bold text-lg sm:text-xl py-2 rounded-xl flex items-center transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        <span className="w-4 sm:w-8 h-[2px] bg-white shrink-0" />
        <span className="px-3 sm:px-4 text-center">{children}</span>
        <span className="w-4 sm:w-8 h-[2px] bg-white shrink-0" />
      </h2>
    </div>
  );
}