interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div
      className="px-3 md:px-6 py-2 border-[1px] border-[#444d55] rounded-lg
      bg-[linear-gradient(-45deg,#24333c_0%,#192024_100%)] bg-transparent z-50"
    >
      <p className="text-center">
        {text}
      </p>
    </div>
  )
}

export default Badge