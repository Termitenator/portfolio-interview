type Props = {
  label: string;
};

export default function ProjectBadge({ label }: Props) {
  return (
    <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
      {label}
    </span>
  );
}
