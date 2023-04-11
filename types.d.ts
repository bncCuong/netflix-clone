import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  content?: string;
  small?: boolean;
  medium?: boolean;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textColor?: string;
  type?: DetailedHTMLProps;
  textSize?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

export type Tippy = {
  children: ReactNode;
  width: string;
  borderTop?: boolean;
  attrs: any;
  arrowCenter?: boolean;
};

export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type Element = {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser';
};
