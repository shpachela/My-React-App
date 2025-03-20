import Header from "./components/Header/Header";
import TeacingSection from "./components/TeachingSection";
import ButtonSection from "./components/ButtonSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabSection";
import FeedBackSecrion from "./components/FeedBackSection";
import React, { useState } from 'react';
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState('effect')
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === 'main' && (
          <>
            <TeacingSection />
            <ButtonSection />
          </>
        )}

        {tab === 'feedback' && <FeedBackSecrion />}
        {tab === 'effect' && <EffectSection />}

      </main>
    </>
  );
}
