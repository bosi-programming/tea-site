import { useState } from 'react';
import { Title, Input, Selector, Paragraph, Timer } from './components';
import { Leaf } from './icons/Leaf';
import { Cup } from './icons/Cup';

type TStrength = 'weak' | 'weakest' | 'normal' | 'strong' | 'strongest';
type TConcentration = '1/10' | '1/15' | '1/30' | '1/50' | '1/100';

const BASE_INFUSION_TIME: Record<TStrength, Record<TConcentration, number[]>> = {
  weakest: {
    '1/10': [0, 0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/15': [0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/30': [5, 10, 20, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/50': [30, 60, 120, 180, 300, 480, 960],
    '1/100': [120, 180, 300, 480, 960],
  },
  weak: {
    '1/10': [0, 5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/15': [5, 10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/30': [10, 20, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/50': [60, 120, 180, 300, 480, 960],
    '1/100': [180, 300, 480, 960],
  },
  normal: {
    '1/10': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/15': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/30': [20, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/50': [120, 180, 300, 480, 960],
    '1/100': [300, 480, 960],
  },
  strong: {
    '1/10': [10, 15, 20, 30, 45, 60, 120, 180, 300, 480, 960],
    '1/15': [30, 45, 60, 120, 180, 300, 480, 960],
    '1/30': [60, 120, 180, 300, 480, 960],
    '1/50': [300, 480, 960],
    '1/100': [480, 960],
  },
  strongest: {
    '1/10': [30, 45, 60, 120, 180, 300, 480, 960],
    '1/15': [60, 120, 180, 300, 480, 960],
    '1/30': [120, 180, 300, 480, 960],
    '1/50': [480, 960],
    '1/100': [960],
  },
};

const STRENGHTS = Object.keys(BASE_INFUSION_TIME).map((key) => ({
  id: key,
  label: key.charAt(0).toUpperCase() + key.slice(1),
}));

const CONCENTRATIONS = [
  { id: '1/10', label: '1/10' },
  { id: '1/15', label: '1/15' },
  { id: '1/30', label: '1/30' },
  { id: '1/50', label: '1/50' },
  { id: '1/100', label: '1/100' },
];

function App() {
  const [strength, setStrength] = useState<TStrength>();
  const [concentration, setConcentration] = useState<TConcentration>();
  const [size, setSize] = useState<number | string>('');
  return (
    <main
      className={`flex h-screen w-screen flex-col items-center bg-white 
      pt-10 dark:bg-green sm:pt-20 lg:justify-center lg:p-0`}
    >
      <Title>Tea Site</Title>
      <form className="mt-5 flex w-5/6 max-w-screen-md flex-col justify-center lg:mt-10">
        <Paragraph className="mb-5 text-sm lg:mb-10">
          Note that the real amount of tea and the infusion time can vary
          depending on the type of tea and the quality of the same. Please
          experiment yourself.
        </Paragraph>
        <div className="flex w-full flex-col justify-center self-center lg:my-10 lg:w-6/12 lg:items-center">
          <Selector
            labelChildren="Select a strength:"
            options={STRENGHTS}
            value={strength ?? 'default'}
            onChange={(e) =>
              e.target.value && setStrength(e.target.value as keyof typeof BASE_INFUSION_TIME)
            }
            className="w-full"
          />
          <Selector
            labelChildren="Select a concentration:"
            options={CONCENTRATIONS}
            value={concentration ?? 'default'}
            onChange={(e) =>
              e.target.value && setConcentration(e.target.value as TConcentration)
            }
            className="w-full"
          />
          <Input
            labelChildren="Size of vessel in ml"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            type="number"
            className="w-full"
          />
        </div>
        {!concentration && <Paragraph>Please select a concentration</Paragraph>}
        {!size && <Paragraph>Please select a size</Paragraph>}
        {/* TODO remove from form and add timer */}
        {strength && concentration && size && (
          <>
            <Paragraph>
              <span className="dark:text-pink">
                <Leaf
                  height={24}
                  width={24}
                  className="inline-block align-middle"
                />{' '}
              </span>
              {Math.ceil(Number(size) / Number(concentration.replace('1/', '')))} g
            </Paragraph>
            <Paragraph>
              <span className="dark:text-pink">
                <Cup
                  height={24}
                  width={24}
                  className="inline-block align-middle"
                />{' '}
              </span>
              {
                BASE_INFUSION_TIME[strength][
                  concentration
                ].length
              }{' '}
              steeps:{' '}
              {BASE_INFUSION_TIME[strength][
                concentration
              ].join(', ')}{' '}
              seconds
            </Paragraph>
            <Timer
              infusionTime={
                BASE_INFUSION_TIME[strength][
                concentration
                ]
              }
            />
          </>
        )}
      </form>
    </main>
  );
}

export default App;
