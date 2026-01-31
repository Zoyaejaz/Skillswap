import React from 'react';

export default function InfoBanner({ icon: Icon, title, description, variant = 'default' }) {
  const variants = {
    default: {
      bg: 'from-[#FDE789] to-[#FDE789]/70',
      border: 'border-[#119DA4]',
      iconColor: 'text-[#119DA4]',
      titleColor: 'text-[#4B0C37]',
      textColor: 'text-[#4B0C37]'
    },
    purple: {
      bg: 'from-[#FDE789] to-[#FDE789]/70',
      border: 'border-[#4B0C37]/30',
      iconColor: 'text-[#4B0C37]',
      titleColor: 'text-[#4B0C37]',
      textColor: 'text-[#4B0C37]'
    }
  };

  const style = variants[variant];

  return (
    <div className={`bg-gradient-to-r ${style.bg} border-2 ${style.border} rounded-xl p-6 shadow-md`}>
      <div className="flex items-start gap-4">
        <Icon className={`w-8 h-8 ${style.iconColor} flex-shrink-0 mt-1`} />
        <div>
          <h3 className={`text-xl font-bold ${style.titleColor} mb-2`}>{title}</h3>
          <p className={`${style.textColor} text-lg leading-relaxed`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Usage Example:
// <InfoBanner 
//   icon={Heart}
//   title="How Time-Banking Works"
//   description="Teach a skill for 1 hour = earn 1 credit..."
//   variant="default"
// />