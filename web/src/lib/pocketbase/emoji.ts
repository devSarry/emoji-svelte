import type { EmojisRecord } from '.';
import { pb } from './client';

export const emojiCollection = pb.collection<EmojisRecord>('emojis');