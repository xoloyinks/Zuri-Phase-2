'use client'
import Image from "next/image"
import spinner from "../images/Eclipse-0.3s-250px.svg"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <>
        <div className="flex items-center justify-center w-screen h-screen">
          <Image src={spinner} width={200} height={200} alt="Loading..." />
        </div>
      </>
    )
  }