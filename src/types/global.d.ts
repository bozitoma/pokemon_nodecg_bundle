import type { CreateNodecgInstance } from 'ts-nodecg/browser';
import type { ReplicantMap } from './replicant';

declare global {
  const nodecg: CreateNodecgInstance<'pokemon', undefined, ReplicantMap, { [x: string]: string }>;
}
