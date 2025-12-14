import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import {
  TransmuteToGoldShort,
  TransmuteFromGoldShort,
  FissionShort,
  FusionShort,
} from "../constant";

const MobileBottomNav = () => {
  const router = useRouter();

  const navItems = [
    {
      label: FissionShort,
      href: "/app/fission",
      symbol: "⚛️",
    },
    {
      label: FusionShort,
      href: "/app/fusion",
      symbol: "🔗",
    },
    {
      label: TransmuteToGoldShort,
      href: "/app/transmuteToGold",
      symbol: "β⁻",
    },
    {
      label: TransmuteFromGoldShort,
      href: "/app/transmuteFromGold",
      symbol: "β⁺",
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-purplemist border-t border-gluongold/20 z-50 pb-safe">
      <div className="grid grid-cols-4 gap-0">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "flex flex-col items-center justify-center py-2.5 px-1 transition-colors duration-200",
                isActive
                  ? "bg-gluongold/20 text-gluongold"
                  : "text-gray-300 hover:bg-gluongold/10 hover:text-gluongold"
              )}
            >
              <span className="text-lg mb-0.5">{item.symbol}</span>
              <span className="text-[10px] font-medium leading-tight text-center whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
