import React from 'react';
import {HTMLAttributes} from 'react';
type Props = HTMLAttributes<SVGElement>;

const NetworkIcon = ({title = 'NetworkIcon', ...rest}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      aria-hidden="true"
      data-icon="networkIcon"
      viewBox="0 0 24 24"
      {...rest}
    >
      <title>{title}</title>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3a2.99 2.99 0 00-3.9-2.86 4.93 4.93 0 010 5.72c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5a3 3 0 100 6zm6.62 2.16A3.7 3.7 0 0121 16v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z" />
    </svg>
  );
};

export default NetworkIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
