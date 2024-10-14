import { Title } from './components';
import { useIntl } from 'react-intl';
import { StartInfusionSection, TeaForm } from './modules';
import { useInfusionStore } from './stores';

function App() {
  const intl = useIntl();
  const { grams, infusionsTime, totalInfusions } = useInfusionStore();
  const shouldShowInfusionSection = grams && infusionsTime && totalInfusions;

  return (
    <main
      className={`flex h-screen w-screen flex-col items-center bg-white 
      pt-5 dark:bg-green md:pt-20 lg:justify-center lg:p-0`}
    >
      <Title>{intl.formatMessage({ id: 'title' })}</Title>
      <TeaForm />
      {shouldShowInfusionSection ? <StartInfusionSection /> : null}
    </main>
  );
}

export default App;
