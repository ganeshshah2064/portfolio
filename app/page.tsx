"use client";

import { motion } from "motion/react";
import Script from 'next/script';
import { generatePersonSchema, generateWebsiteSchema } from "@/lib/seo";

// Generate structured data
const personSchema = generatePersonSchema();
const websiteSchema = generateWebsiteSchema();
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Heart,
  PenBoxIcon,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";
import insta1 from "@/assets/9.png";
import insta2 from "@/assets/8.png";
import insta3 from "@/assets/2.png";
import Image from "next/image";
import statuscode from "../assets/statuscode.jpeg";
import { Card } from "@/components/card";
import anish from "@/assets/ganesh.jpeg";
import { ContributionGraph } from "@/components/contribution-graph";
import ThemeTogglebutton from "@/components/ThemeBtn";
import TextRotate from "@/components/fancy/text-rotate";
import { Button } from "@/components/ui/button";
import MenuFab from "@/components/MenuFab";
import Link from "next/link";

// Import gallery images
import img1 from "@/assets/img/1.png";
import img2 from "@/assets/img/2.png";
import img3 from "@/assets/img/3.png";

export default function Page() {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      <main className="min-h-screen" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content="Ganesh Shah" />
        <meta itemProp="jobTitle" content="Software Developer" />
        <meta itemProp="worksFor" content="Freelance" />
        <meta itemProp="alumniOf" content="Sushma Godawari College" />
        <meta itemProp="homeLocation" content="Ithari, Nepal" />
        <meta itemProp="description" content="Passionate developer from Ithari, Nepal with experience in building web applications." />
      <header className="mx-auto w-full px-4 md:px-16 py-10 md:pt-20">
        <h1 className="sr-only">Ganesh Shah - Software Developer from Ithari, Nepal</h1>
      </header>
      
      <div className="mx-auto w-full px-4 md:px-16 pb-10 grid grid-cols-1 md:grid-cols-7 gap-8" itemScope itemType="http://schema.org/ItemList">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:sticky w-full flex flex-col justify-between h-fit md:top-20 px-4 py-2 md:p-4 col-span-3"
        >
          <div className="relative size-48 overflow-hidden rounded-full">
            <Image
              src={anish}
              placeholder="blur"
              alt="Ganesh Shah"
              className="object-cover hover:scale-105 transition-all duration-500"
              fill
              priority
            />
          </div>
          <h1 className="mt-6 pl-2 text-4xl md:text-5xl tracking-tighter font-bold bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/50 text-transparent bg-clip-text text-glow cursor-crosshair">
            Ganesh Shah
          </h1>
          <div className="mt-4 flex pl-2 text-base md:text-xl text-muted-foreground">
            <span>Im a</span>
            <TextRotate
              texts={[
                "Developer 🖥️",
                "Designer 🎨",
                "Music Producer 🎧",
                "sleepyhead 😴",
                "meme lover 🤣",
                "LEGEND 🕶️",
              ]}
              mainClassName="px-2 text-foreground"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 50, stiffness: 400 }}
              rotationInterval={2300}
            />
          </div>
          <div className="my-auto items-center flex gap-6 md:fixed ml-auto z-50 md:bottom-12">
            <ThemeTogglebutton />
            <p className="text-muted-foreground opacity-60 hidden md:block">
              Made with ❤️ by Ganesh Shah
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="lg:grid flex flex-col flex-wrap col-span-4 pb-10 gap-4 lg:grid-cols-2"
        >
          {/* Portfolio section removed as requested */}

          {/* GitHub Card */}
          <Card href="https://github.com/ganeshshah2064" className="col-span-1">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl dark:bg-blue-500/10 bg-slate-900/10">
                  <Github className="size-6" />
                </div>
                <div>
                  <h2 className="font-medium">Ganesh</h2>
                  <p className="text-sm hover:underline text-muted-foreground">
                    ganeshshah2064
                  </p>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <div className="px-4 pb-4 mt-10">
              <div className="relative h-52">
                <div className="flex gap-4 items-start">
                  <Image
                    src={anish}
                    alt="Ganesh Shah"
                    width={80}
                    height={80}
                    className="object-cover rounded-xl size-20"
                  />
                  <div className="py-1 space-y-2">
                    <h2 className="text-lg text">@ganeshshah2064</h2>
                    <p className="line-clamp-2 text-xs text-muted-foreground break-words ellipsis">
                      Passionate developer learning, growing and building.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mt-12">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl opacity-80 md:text-3xl xl:text-4xl font-mono tracking-tight font-semibold">
                      157+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Stars
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl opacity-80 md:text-3xl xl:text-4xl font-mono tracking-tight font-semibold">
                      40+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Repositories
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl opacity-80 md:text-3xl xl:text-4xl font-mono tracking-tight font-semibold">
                      14+
                    </p>
                    <p className="text-sm font-light text-muted-foreground">
                      Followers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* LinkedIn Card */
          }
          <Card
            href="https://www.linkedin.com/in/ganesh-shah2064"
            className="col-span-1 bg-linear-to-br from-blue-500/5"
          >
            <div className="flex items-center gap-4 p-4">
              <Linkedin
                className="size-10 rounded-xl py-1 px-2 bg-blue-600"
                color="white"
                fill="white"
                strokeWidth={1}
                stroke="none"
              />
              <div>
                <h2 className="font-medium">Ganesh Shah</h2>
                <p className="text-sm text-muted-foreground">ganesh-shah2064</p>
              </div>
              <div className="relative ml-auto size-16 overflow-hidden rounded-lg">
                <Image
                  src={anish}
                  placeholder="blur"
                  alt="Ganesh Shah Linkedin"
                  className="rounded-xl size-20 object-cover"
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="rounded-lg bg-muted/20 border px-1">
                <p className="p-2 text-muted-foreground text-sm">
                  <a
                    href="https://www.linkedin.com/posts/ganesh-shah2064_gamejam-unrealengine5-wiperspace-activity-7378632969189724160-KauY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsfRXEBthKtIC7h4SNqgfeS-NafMTyq2jU"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    We are so happy to share that our team Wiperspace won the Game Jam at Daydream Biratnagar 🎉
                  </a>
                </p>
                <div className="h-44 overflow-hidden rounded-lg relative">
                  <Image
                    fill
                    fetchPriority="low"
                    placeholder="blur"
                    src={statuscode}
                    alt="StatusCode Winners Aliens -Linkedin Post"
                    className="object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex tracking-tighter justify-between">
                  <p className="p-2 px-4 text-muted-foreground text-sm inline-flex items-center gap-2">
                    <Heart className="size-4 rounded-full bg-rose-700 fill-rose-300 stroke-rose-300 p-0.5 inline-block" />{" "}
                    7k Likes
                  </p>

                  <p className="p-2 px-4 text-muted-foreground text-sm">
                    2k comments
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Blog section removed as requested */}

          {/* Contribution Graph */}
          <Card className="col-span-full">
            <div className="p-4">
              <ContributionGraph />
            </div>
          </Card>

          {/* Social Media Cards */}
          <Card
            href="https://www.instagram.com/ganesh_sha1"
            className="group col-span-1"
          >
            <div className="flex items-center gap-3 p-4">
              <Instagram className="size-6 text-rose-500" />
              <div>
                <p className="font-medium">ganesh_sha1</p>
                <p className="text-sm text-muted-foreground">450 followers</p>
              </div>
              <Button className="ml-auto bg-linear-to-br from-rose-600 text-white to-purple-600">
                Follow
              </Button>
            </div>
            <div className="grid grid-cols-3 h-40 border rounded-xl overflow-hidden">
              <Image
                src={insta1}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
              <Image
                src={insta2}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
              <Image
                src={insta3}
                alt="Instagram Post"
                className="object-cover size-full transition-all duration-300 hover:scale-105"
              />
            </div>
          </Card>
          <div className="grid grid-cols-1 gap-2">
            <Card href="https://facebook.com/ganesh.ffx1" className="col-span-1">
              <div className="flex items-center gap-3 p-4">
                <svg className="size-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">Ganesh Shah</p>
                  <p className="text-sm text-muted-foreground">
                    120+ followers
                  </p>
                </div>
                <Button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Follow
                </Button>
              </div>
            </Card>

            {/* Spotify Card */}
            <Card
              href="https://open.spotify.com/track/5XLXut2VSILvfeUElPNx3p"
              className="h-full bg-linear-to-r from-green-600/10 dark:to-green-900/10"
            >
              <div className="flex items-start gap-2 p-4">
                <div className="size-12 pt-4">
                  <svg
                    viewBox="0 0 256 256"
                    width="256"
                    className="size-10"
                    height="256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
                      fill="#1ED760"
                    />
                  </svg>
                </div>
                <div className="pt-4">
                  <h2 className="font-medium">Certain Things</h2>
                  <p className="text-sm text-muted-foreground">Xeven</p>
                </div>
                <div className="relative ml-auto size-24 overflow-hidden rounded-lg">
                  <Image
                    src="https://i.scdn.co/image/ab6761670000ecd4cd1b44b074cbf57946694e8b"
                    alt="Album Cover"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Gallery Preview Section */}
          <Card className="col-span-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-12 rounded-xl bg-primary/10 border">
                    <ImageIcon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Image Gallery</h2>
                    <p className="text-muted-foreground">A preview of my creative works</p>
                  </div>
                </div>
                <Link href="/images">
                  <Button className="flex items-center gap-2">
                    See More
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={img1}
                    alt="Gallery Image 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={img2}
                    alt="Gallery Image 2"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={img3}
                    alt="Gallery Image 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
      <MenuFab />
      </main>
    </>
  );
}
