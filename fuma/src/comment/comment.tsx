"use client"
import { Comments as CommentsInternal, CommentsProps } from '@fuma-comment/react'
import { createUploadThingStorage } from "@fuma-comment/react/uploadthing";
import { authClient } from '@/lib/auth-client'

const signIn = () => {
  void authClient.signIn.social({
    provider: 'google',
  });
};
const comment = createUploadThingStorage();

type CommentProps = Omit<CommentsProps, 'storage' | 'auth'>

export function Comments({...props}: CommentProps) {
  return (
    <CommentsInternal
      storage={comment}
      mention={{
        enabled: true,
      }}
      auth={{
        type: "api",
        signIn: signIn,
      }}
      {...props}
  />
);
}