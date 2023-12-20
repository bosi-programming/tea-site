import { Title, Paragraph } from './components';
import { useIntl } from 'react-intl';
import { StartInfusionSection, TeaForm } from './modules';
import { useInfusionStore } from './stores';

function App() {
  const intl = useIntl();
  const { grams, infusionsTime } = useInfusionStore();

  return (
    <main
      className={`flex h-screen w-screen flex-col items-center bg-white 
      pt-10 dark:bg-green sm:pt-20 lg:justify-center lg:p-0`}
    >
      <Title>{intl.formatMessage({ id: 'title' })}</Title>
      <form className="mt-5 flex w-5/6 max-w-screen-md flex-col justify-center lg:mt-10">
        <Paragraph className="mb-5 text-sm lg:mb-10">{intl.formatMessage({ id: 'topDescription' })}</Paragraph>
        <TeaForm />
        {!grams || !infusionsTime ? <Paragraph>{intl.formatMessage({ id: 'pleaseFill' })}</Paragraph> : null}
        <StartInfusionSection />
      </form>
    </main>
  );
}

export default App;
