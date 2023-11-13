import { useState } from 'react';
import { Title, Input, Selector, Paragraph, Timer } from './components';
import { Leaf } from './icons/Leaf';
import { Cup } from './icons/Cup';

const BASE_INFUSION_TIME = {
  '1/10': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/15': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/30': [20, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/50': [120, 180, 300, 480],
  '1/100': [300, 480],
};

const CONCENTRATIONS = [
  { id: 10, label: '1/10' },
  { id: 15, label: '1/15' },
  { id: 30, label: '1/30' },
  { id: 50, label: '1/50' },
  { id: 100, label: '1/100' },
];

function App() {
  const [concentration, setConcentration] = useState<number>();
  const [size, setSize] = useState<number | string>('Size of vessel in ml');
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
            labelChildren="Select a concentration:"
            options={CONCENTRATIONS}
            value={concentration}
            onChange={(e) =>
              e.target.value && setConcentration(Number(e.target.value))
            }
            className="w-full"
            defaultValue="default"
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
        {concentration && size && (
          <>
            <Paragraph>
              <span className="dark:text-pink">
                <Leaf
                  height={24}
                  width={24}
                  className="inline-block align-middle"
                />{' '}
              </span>
              {Math.ceil(size / concentration)} g
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
                BASE_INFUSION_TIME[
                  `1/${concentration}` as keyof typeof BASE_INFUSION_TIME
                ].length
              }{' '}
              steeps:{' '}
              {BASE_INFUSION_TIME[
                `1/${concentration}` as keyof typeof BASE_INFUSION_TIME
              ].join(', ')}{' '}
              seconds
            </Paragraph>
            <Timer
              infusionTime={
                BASE_INFUSION_TIME[
                  `1/${concentration}` as keyof typeof BASE_INFUSION_TIME
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
