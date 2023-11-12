import type { CreateNodecgInstance } from 'ts-nodecg/browser';
import type { ReplicantMap } from './replicant';

declare global {
  const nodecg: CreateNodecgInstance<
    'bundle-name',
    undefined,
    ReplicantMap,
    { [x: string]: string }
  >;
}
