import { useState } from 'react';
import { Title, Input, Selector, Paragraph } from './components';
import { Leaf } from './icons/Leaf';

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
  const [size, setSize] = useState<number>();
  console.log(concentration, size);
  return (
    <main className="flex flex-col pt-10 lg:p-0 lg:justify-center items-center h-screen w-screen bg-white dark:bg-slate-800">
      <Title>Tea Site</Title>
      <form className="flex flex-col justify-center mt-5 lg:mt-10 w-5/6 max-w-screen-md">
        <Paragraph className="mb-5 lg:mb-10">
          Note that the real amount of tea and the infusion time can vary
          depending on the type of tea and the quality of the same. Please
          experiment yourself.
        </Paragraph>
        <div className="w-full lg:w-6/12 lg:mb-10 lg:mt-10 flex flex-col justify-center self-center lg:items-center">
          <Selector
            labelChildren="Select a concentration:"
            options={CONCENTRATIONS}
            value={concentration}
            onChange={(e) => e.target.value && setConcentration(Number(e.target.value))}
            className='w-full'
          />
          <Input
            labelChildren="Size of vessel in ml"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            type="number"
            className='w-full'
          />
        </div>
        {!concentration && <Paragraph>Please select a concentration</Paragraph>}
        {!size && <Paragraph>Please select a size</Paragraph>}
        {concentration && size && (
          <>
            <Paragraph>
              <Leaf height={24} width={24} className="text-green-700 inline-block align-middle" /> {' '}
              <span className="font-bold">{Math.ceil(size / concentration)} g</span>
            </Paragraph>
            <Paragraph>
              Expected amount of steeps:{' '}
              <span className="font-bold">
                {BASE_INFUSION_TIME[
                  `1/${concentration}` as keyof typeof BASE_INFUSION_TIME
                ].length}
              </span>
            </Paragraph>
            <Paragraph>
              Expected infusion time:{' '}
              <span className="font-bold">
                {BASE_INFUSION_TIME[
                  `1/${concentration}` as keyof typeof BASE_INFUSION_TIME
                ].join(', ')}{' '}
                seconds
              </span>
            </Paragraph>
          </>)
        }
      </form>
    </main>
  );
}

export default App;
