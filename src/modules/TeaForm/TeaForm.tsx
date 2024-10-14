import { useIntl } from 'react-intl';
import { Form } from './components';
import { useInfusionStore } from '@/stores';
import { Paragraph } from '@/components';

export function TeaForm() {
  const intl = useIntl();
  const { grams, infusionsTime, hideForm } = useInfusionStore();

  return (
    <form className="mt-2 md:mt-5 flex w-5/6 max-w-screen-md flex-col justify-center lg:mt-10">
      {!hideForm ? <Form /> : null}
      {!grams || !infusionsTime ? (
        <Paragraph>{intl.formatMessage({ id: 'pleaseFill' })}</Paragraph>
      ) : null}
    </form>
  );
}
