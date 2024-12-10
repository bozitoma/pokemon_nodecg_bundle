import { memo } from 'react';
import { BoxWrapper } from './BoxWrapper';
import { Heading } from './Heading';

export const Wrapper = memo(({ title, children }: { title?: string, children?: React.ReactNode }) => {
  return (
    <BoxWrapper>
      <Heading>{title}</Heading>
      {children}
    </BoxWrapper>
  );
});
