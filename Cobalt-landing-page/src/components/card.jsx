import { Analysis } from "../svg/analysis";
import { Icon } from "../svg/icons";
import { Keyboard } from "../svg/keyboard";
import { List } from "../svg/list";
import { Phone } from "../svg/phone";
export function Cards() {
  return (
    <>
      <div className="relative flex justify-center">
        <div className="w-full">
          <div className="flex flex-col gap-4 bg-black px-20 pt-4 md:px-10">
            <div className="flex-1 md:hidden xl:flex">
              <div className="flex flex-col gap-8 md:flex-row">
                {/* this is one first card */}
                <div className="flex-1 rounded-3xl bg-neutral-800/35">
                  <Analysis />
                  <div className="z-30 px-5 pt-4">
                    <h1 className="text-[18px]">Insights at your fingertips</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      All your data and finances in one place to provide quick
                      answers and make decisions instantly.
                    </p>
                  </div>
                </div>
                {/* this is one Second card */}
                <div className="flex flex-1 flex-col rounded-3xl bg-neutral-800/35 md:w-[24rem]">
                  <Phone />
                  <div className="px-5 pt-4">
                    <h1 className="text-[18px]">Manage in real time</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Have full control of your business finances on the go
                      using our iOS/Android mobile apps. Because, you know, it’s
                      2025.
                    </p>
                  </div>
                </div>
                {/* this is one third card */}
                <div className="flex-1 rounded-3xl bg-neutral-800/35 md:w-[24rem]">
                  <div className="px-5 pt-8">
                    <List />
                    <h1 className="text-[18px]">Important business alerts</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Choose the alerts you need and receive them via email,
                      mobile or Slack. Review and take action in one click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 md:hidden xl:flex">
              <div className="flex flex-col gap-8 md:flex-row">
                {/* this one card */}
                <div className="relative h-[30rem] flex-1 rounded-3xl bg-neutral-800/35">
                  <div class="[mask:radial-gradient(60%_60%_at_50%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                    <Icon />
                  </div>
                  <div className="z-30 mt-20 px-5">
                    <h1 className="text-[18px]">Connect all your apps</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Bring your data with our built-in integrations for
                      accounting, revenue tools and banking.
                    </p>
                  </div>
                </div>
                {/* this second card */}
                <div className="h-[30rem] flex-1 overflow-hidden rounded-3xl bg-neutral-800/35">
                  <div className="px-5 pt-8">
                    <Keyboard />
                    <div className="z-30 mt-20 px-5">
                      <h1 className="text-[18px]">You’re in control</h1>
                      <p className="py-4 text-[14px] text-neutral-500">
                        Lightning fast. Shortcuts for everything. Command+K on
                        Mac, Ctrl+K on Windows. Dark mode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* this new card */}
            <div className="hidden flex-1 md:flex xl:hidden">
              <div className="flex flex-1 gap-8">
                {/* this is one first card */}
                <div className="flex-1 rounded-3xl bg-neutral-800/35 lg:w-96 lg:flex-none">
                  <Analysis />
                  <div className="z-30 px-5 pt-4">
                    <h1 className="text-[18px]">Insights at your fingertips</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      All your data and finances in one place to provide quick
                      answers and make decisions instantly.
                    </p>
                  </div>
                </div>
                {/* this is one Second card */}
                <div className="h-[30rem] flex-1 overflow-hidden rounded-3xl bg-neutral-800/35">
                  <Phone />
                  <div className="px-5 pt-4">
                    <h1 className="text-[18px]">Manage in real time</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Have full control of your business finances on the go
                      using our iOS/Android mobile apps. Because, you know, it’s
                      2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-1 md:flex xl:hidden">
              <div className="flex flex-1 gap-8">
                {/* this first card */}
                <div className="h-[30rem] flex-1 overflow-hidden rounded-3xl bg-neutral-800/35">
                  <div className="px-5 pt-8">
                    <Keyboard />
                    <div className="z-30 mt-20 px-5">
                      <h1 className="text-[18px]">You’re in control</h1>
                      <p className="py-4 text-[14px] text-neutral-500">
                        Lightning fast. Shortcuts for everything. Command+K on
                        Mac, Ctrl+K on Windows. Dark mode.
                      </p>
                    </div>
                  </div>
                </div>
                {/* this is second card */}
                <div className="flex-1 rounded-3xl bg-neutral-800/35 lg:w-96 lg:flex-none">
                  <div className="px-5 pt-8">
                    <List />
                    <h1 className="text-[18px]">Important business alerts</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Choose the alerts you need and receive them via email,
                      mobile or Slack. Review and take action in one click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-1 md:flex xl:hidden">
              <div className="flex flex-1 gap-8">
                {/* this one card */}
                <div className="relative h-[30rem] flex-1 rounded-3xl bg-neutral-800/35">
                  <div class="[mask:radial-gradient(60%_60%_at_50%,rgba(0,0,0,0.9)_35%,rgba(0,0,0,0)_100%)]">
                    <Icon />
                  </div>
                  <div className="z-30 mt-20 px-5">
                    <h1 className="text-[18px]">Connect all your apps</h1>
                    <p className="py-4 text-[14px] text-neutral-500">
                      Bring your data with our built-in integrations for
                      accounting, revenue tools and banking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
