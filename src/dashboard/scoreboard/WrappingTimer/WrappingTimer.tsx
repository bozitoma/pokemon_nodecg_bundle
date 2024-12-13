import { memo } from 'react';
import { Wrapper } from '../../../components/Wrapper';
import { Timer } from '../../../components/Timer';

export const WrappingTimer = memo(() => {
  return (
    <>
      <Wrapper title={'Timer'}>
        <Timer />
      </Wrapper>
    </>
  );
});
