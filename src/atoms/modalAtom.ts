import { DocumentData } from 'firebase/firestore';
import { atom } from 'recoil';
import { Movie } from '../../types';

export const modalTrailerState = atom({
  key: 'modalTrailerState',
  default: false,
});

export const modalCardState = atom({
  key: 'modalCardState',
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
});

export const emailLogin = atom({
  key: 'emailLogin',
  default: '',
});
