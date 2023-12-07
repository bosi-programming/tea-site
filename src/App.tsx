import { useState } from 'react';
import { Title, Input, Selector, Paragraph } from './components';
import { useIntl } from 'react-intl';
import { TConcentration, TStrength } from './App.types';
import { INFUSION_TIME, CONCENTRATIONS } from './App.constants';
import { StartInfusionSection } from './modules';

function App() {
  const intl = useIntl();
  const [strength, setStrength] = useState<TStrength>();
  const [concentration, setConcentration] = useState<TConcentration>();
  const [size, setSize] = useState<number | string>('');


  const STRENGHTS = Object.keys(INFUSION_TIME).map((key) => ({
    id: key,
    label: intl.formatMessage({ id: key }),
  }));

  return (
    <main
      className={`flex h-screen w-screen flex-col items-center bg-white 
      pt-10 dark:bg-green sm:pt-20 lg:justify-center lg:p-0`}
    >
      <Title>{intl.formatMessage({ id: 'title' })}</Title>
      <form className="mt-5 flex w-5/6 max-w-screen-md flex-col justify-center lg:mt-10">
        <Paragraph className="mb-5 text-sm lg:mb-10">{intl.formatMessage({ id: 'topDescription' })}</Paragraph>
        <div className="flex w-full flex-col justify-center self-center lg:my-10 lg:w-6/12 lg:items-center">
          <Selector
            labelChildren={intl.formatMessage({ id: 'strengthLabel' })}
            options={STRENGHTS}
            value={strength ?? 'default'}
            onChange={(e) =>
              e.target.value && setStrength(e.target.value as keyof typeof INFUSION_TIME)
            }
            className="w-full"
          />
          <Selector
            labelChildren={intl.formatMessage({ id: 'concentrationLabel' })}
            options={CONCENTRATIONS}
            value={concentration ?? 'default'}
            onChange={(e) =>
              e.target.value && setConcentration(e.target.value as TConcentration)
            }
            className="w-full"
          />
          <Input
            labelChildren={intl.formatMessage({ id: 'sizeLabel' })}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            type="number"
            className="w-full"
          />
        </div>
        {!strength && <Paragraph>{intl.formatMessage({ id: 'pleaseStrength' })}</Paragraph>}
        {!concentration && <Paragraph>{intl.formatMessage({ id: 'pleaseConcentration' })}</Paragraph>}
        {!size && <Paragraph>{intl.formatMessage({ id: 'pleaseSize' })}</Paragraph>}
        {strength && concentration && size && (
          <StartInfusionSection strength={strength} concentration={concentration} size={size} />
        )}
      </form>
    </main>
  );
}

export default App;
