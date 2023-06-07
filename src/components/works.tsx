import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <WorkLink href="https://www.google.com">Pink Panda</WorkLink>
                &apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/pinkpanda.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              ></Image>
            </WorkRight>
          </WorkContainer>
        )}
      />

      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <WorkLink href="https://www.google.com">Steakwallet</WorkLink>
                &nbsp;faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/steakwallet.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Steakwallet"
              ></Image>
            </WorkRight>
          </WorkContainer>
        )}
      />
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We helped</div>
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <WorkLink href="https://www.google.com">Showtime</WorkLink> ship
                faster.
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/showtime.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
              ></Image>
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
  </TileWrapper>
);

export default Works;
