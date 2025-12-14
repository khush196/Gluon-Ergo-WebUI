import React from "react";
import GoldLogoIcon from "@/public/icons/gold-logo.svg";
import ConnectWallet from "@/components/wallet/ConnectWallet";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import NetworkPicker from "../wallet/NetworkPicker";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { grayButtonsBg, whiteTextsButtons } from "./genericClassNames";
import { Dialog, DialogPanel } from "@headlessui/react";
import { applicationConfig } from "../SocialIcons";
import { Discord, Twitter, Telegram, GitHub } from "../SocialIcons";

interface IProps {
  currentHref: string;
  socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
}

const Header = (props: IProps) => {
  const router = useRouter();
  const { currentHref, socket } = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  const renderMobileView = () => {
    return (
      <div className="flex justify-end md:hidden space-x-4">
        <ConnectWallet socket={socket} />
        <button
          type="button"
          className={classNames(
            "inline-flex items-center justify-center rounded-lg p-2 h-9 w-9",
            grayButtonsBg,
            whiteTextsButtons
          )}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    );
  };

  const renderDialog = () => {
    return (
      <Dialog
        className="lg:hidden"
        open={isMobileMenuOpen}
        onClose={setIsMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-black/70">
          <div className="bg-purplemist px-6 py-6">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className={classNames(
                  "-m-2.5 rounded-md p-2.5",
                  whiteTextsButtons
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                {/* Network and Wallet Controls */}
                <div className="flex flex-row items-center justify-between mb-6 pb-6 border-b border-gluongold/20">
                  <NetworkPicker />
                  <ConnectWallet socket={socket} />
                </div>
                
                {/* Links Section */}
                <div className="space-y-4 pb-6">
                  <h3 className="text-gluongold text-sm font-semibold uppercase tracking-wider mb-3">Resources</h3>
                  <a
                    href={applicationConfig.social.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-gluongold transition-colors py-2"
                  >
                    <span className="text-base">Documentation</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@DjedStablecoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-gluongold transition-colors py-2"
                  >
                    <span className="text-base">YouTube</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="w-full bg-neutraldark h-0.5 mb-5" />
                <div className="pb-4">
                  <h3 className="text-gluongold text-sm font-semibold uppercase tracking-wider mb-4">Community</h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href={applicationConfig.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gluongold transition-colors"
                    >
                      <Telegram />
                    </a>
                    <a
                      href={applicationConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gluongold transition-colors"
                    >
                      <Twitter />
                    </a>
                    <a
                      href={applicationConfig.social.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gluongold transition-colors"
                    >
                      <Discord />
                    </a>
                    <a
                      href={applicationConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gluongold transition-colors"
                    >
                      <GitHub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    );
  };

  return (
    <header className="grid grid-cols-7 items-center mx-3 py-4">
      {/* Mobile: Logo on left, Menu on right */}
      <div className="col-span-3 md:col-span-3 items-center space-x-4 content-center text-lg flex">
        <Link className="ml-3 mr-2" href={"/"}>
          <Image src={GoldLogoIcon} alt="logo" width="120" height="32" />
        </Link>
        {/* Desktop: Show Reactor and Docs links */}
        <div className="hidden md:flex flex-row space-x-5 pl-2">
          <Link
            href="/app/fission"
            className={classNames(
              router.pathname.includes("/app")
                ? "text-gluongold font-medium"
                : "font-thin text-gray-900",
              "text-sm"
            )}
          >
            Reactor
          </Link>
          <Link
            href="https://docs.stability.nexus/gluon-protocols/gluon-overview/"
            className={classNames(
              router.pathname === "/docs"
                ? "text-gluongold font-medium"
                : "font-thin text-gray-400",
              "text-sm"
            )}
          >
            Docs
          </Link>
        </div>
      </div>
      
      {/* Desktop: Network Picker and Wallet */}
      <div className="hidden md:flex items-center col-span-4 flex-row space-x-4 justify-end">
        <NetworkPicker />
        <ConnectWallet socket={socket} />
      </div>
      
      {/* Mobile: Menu button on right */}
      <div className="md:hidden col-span-4">
        {renderMobileView()}
        {renderDialog()}
      </div>
    </header>
  );
};

export default Header;
