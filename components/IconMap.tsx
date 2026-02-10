import {
  FileSpreadsheet,
  Truck,
  PackageX,
  CircleDollarSign,
  TrendingDown,
  UsersRound,
  ShoppingCart,
  BarChart3,
  ShoppingBag,
  Package,
  Users,
  ShieldCheck,
  Shirt,
  Smartphone,
  Store,
  Building2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileSpreadsheet,
  Truck,
  PackageX,
  CircleDollarSign,
  TrendingDown,
  UsersRound,
  ShoppingCart,
  BarChart3,
  ShoppingBag,
  Package,
  Users,
  ShieldCheck,
  Shirt,
  Smartphone,
  Store,
  Building2,
};

export default function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
}
