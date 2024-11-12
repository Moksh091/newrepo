"use client"


type Inputboxprops = {
  placeholder: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Inputbox = ({ placeholder, className, onChange, value }: Inputboxprops) => {

  return <div>
    <input type="text" className={`${className} my-2 bg-white border border-black text-sm rounded-lg  p-2.5`}
      placeholder={placeholder} onChange={onChange} value={value}
    />
  </div>
}

