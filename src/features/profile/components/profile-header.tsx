import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";
import { VerifiedIcon } from "./verified-icon";
import HireMeButton from "@/components/ui/hire-me-button";

export function ProfileHeader() {

  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <SimpleTooltip content="I'm from India">
          {/* Flag of India  */}
          <img
            className="absolute top-0 -left-px h-8 sm:h-9"
            src="/india_map.webp"
          > 
          </img>
        </SimpleTooltip>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
        </div>

<div className="border-t border-edge">
  <h1 className="flex items-center flex-wrap gap-1 pl-4 text-3xl font-semibold">
    {USER.displayName}
    <SimpleTooltip content="Verified">
      <VerifiedIcon className="size-[0.6em] translate-y-px text-info select-none" />
    </SimpleTooltip>
  </h1>

  <div
    className="
      flex flex-wrap items-center justify-between
      gap-2 border-t border-edge py-1 pl-4 pr-4
      sm:h-auto sm:flex-nowrap
    "
  >
    <FlipSentences sentences={USER.flipSentences} />
    <HireMeButton />
  </div>
</div>

      </div>
    </div>
  );
}
