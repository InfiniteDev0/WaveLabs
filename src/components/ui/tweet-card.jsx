import { Suspense } from "react";
import { enrichTweet } from "react-tweet";
import { getTweet } from "react-tweet/api";

import { cn } from "@/lib/utils";

/**
 * From @magicui/tweet-card. Two fixes over the registry output: the two inline
 * SVGs came through with a broken `viewBox` and mangled path data, and every
 * themed class arrived as an unusable literal (`border-oklch(0.922 0 0)`).
 * Colours now come from the page's own tokens.
 */

const Twitter = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-4.2-5.5L6.2 21H2.9l7.7-8.8L2.5 3h6.8l3.8 5 4.1-5Zm-1.2 16h1.8L8.1 4.9H6.2L16 19Z" />
  </svg>
);

const Verified = ({ className, ...props }) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path
      d="m8 12.4 2.6 2.6L16 9.6"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const truncate = (str, length) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({ className, ...props }) => {
  return <div className={cn("rounded-md bg-muted", className)} {...props} />;
};

export const TweetSkeleton = ({ className, ...props }) => (
  <div
    className={cn(
      "flex size-full max-h-max min-w-72 flex-col gap-2 rounded-xl border border-border p-4",
      className,
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = ({ className, ...props }) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-2 rounded-xl border border-border p-4 text-muted-foreground",
      className,
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
);

export const TweetHeader = ({ tweet }) => (
  <div className="flex flex-row items-start justify-between tracking-normal">
    <div className="flex items-center space-x-3">
      <a
        href={tweet.user.url}
        target="_blank"
        rel="noreferrer"
        className="shrink-0"
      >
        <img
          title={`Profile picture of ${tweet.user.name}`}
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          src={tweet.user.profile_image_url_https}
          className="overflow-hidden rounded-full border border-border"
        />
      </a>
      <div className="flex flex-col gap-0.5">
        <a
          href={tweet.user.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center font-medium whitespace-nowrap text-foreground transition-opacity hover:opacity-80"
        >
          {truncate(tweet.user.name, 20)}
          {(tweet.user.verified || tweet.user.is_blue_verified) && (
            <Verified className="ml-1 inline size-4 text-blue-500" />
          )}
        </a>
        <div className="flex items-center space-x-1">
          <a
            href={tweet.user.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="size-5 items-start text-muted-foreground transition-all ease-in-out hover:scale-105 hover:text-foreground" />
    </a>
  </div>
);

export const TweetBody = ({ tweet }) => (
  <div className="text-[15px] leading-relaxed tracking-normal wrap-break-word">
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case "url":
        case "symbol":
        case "hashtag":
        case "mention":
          return (
            <a
              key={idx}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-normal text-grape transition-colors hover:underline"
            >
              <span>{entity.text}</span>
            </a>
          );
        case "text":
          return (
            <span
              key={idx}
              className="text-[15px] font-normal text-foreground"
              dangerouslySetInnerHTML={{ __html: entity.text }}
            />
          );
        default:
          return null;
      }
    })}
  </div>
);

export const TweetMedia = ({ tweet }) => {
  if (!tweet.video && !tweet.photos) return null;
  return (
    <div className="flex flex-1 items-center justify-center">
      {tweet.video && (
        <video
          poster={tweet.video.poster}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl border border-border shadow-sm"
        >
          <source src={tweet.video.variants[0].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {tweet.photos && (
        <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
          <div className="shrink-0 snap-center sm:w-2" />
          {tweet.photos.map((photo) => (
            <img
              key={photo.url}
              src={photo.url}
              width={photo.width}
              height={photo.height}
              title={"Photo by " + tweet.user.name}
              alt={tweet.text}
              className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border border-border object-cover shadow-sm"
            />
          ))}
          <div className="shrink-0 snap-center sm:w-2" />
        </div>
      )}
    </div>
  );
};

const withSafeEntities = (tweet) => ({
  ...tweet,
  entities: {
    ...tweet.entities,
    hashtags: tweet.entities?.hashtags ?? [],
    urls: tweet.entities?.urls ?? [],
    symbols: tweet.entities?.symbols ?? [],
    user_mentions: tweet.entities?.user_mentions ?? [],
  },
});

export const MagicTweet = ({ tweet, className, ...props }) => {
  const safeTweet = {
    ...withSafeEntities(tweet),
    quoted_tweet: tweet.quoted_tweet
      ? withSafeEntities(tweet.quoted_tweet)
      : undefined,
  };
  const enrichedTweet = enrichTweet(safeTweet);
  return (
    <div
      className={cn(
        "relative flex h-fit w-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5",
        className,
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  );
};

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound ?? TweetNotFound;
    return <NotFound {...props} />;
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  );
};
