"use client"
import { Comments as CommentsInternal, CommentsProps } from '@fuma-comment/react'
import { createUploadThingStorage } from "@fuma-comment/react/uploadthing";
import { authClient } from '@/lib/auth-client'
import { usePathname } from 'next/navigation';

const signIn = (callbackPath: string) => {
  void authClient.signIn.social({
    provider: 'google',
    callbackURL: `${window.location.origin}${callbackPath}`,
  });
};
const comment = createUploadThingStorage();

type CommentProps = Omit<CommentsProps, 'storage' | 'auth'>

export function Comments({...props}: CommentProps) {
  const path = usePathname()
  return (
    <CommentsInternal
      storage={comment}
      mention={{
        enabled: true,
      }}
      auth={{
        type: "api",
        signIn: () => signIn(path),
      }}
      {...props}
  />
);
}