import React, { FC } from 'react';
import { useMemo } from 'react';
import { ImageAmimotoLogo } from '..';
import { ImageDigitalcubeLogo } from '../Images/Logos/Digitalcube';
import { ImageShifterLogo } from '../Images/Logos/Shifter';

export type BrandName = 'shifter' | 'digitalcube' | 'amimoto';
export type LogoProps = {
  name: BrandName;
  width: number;
};
export const Logo: FC<LogoProps> = ({ name, width = 24 }) => {
  const aspectRatio = useMemo(() => {
    let _tmp: never;
    switch (name) {
      case 'digitalcube':
        return 15 / 77;
      case 'shifter':
        return 32 / 24;
      case 'amimoto':
        return 32 / 32;
      default:
        _tmp = name;
        return _tmp;
    }
  }, [name]);
  const height = width * aspectRatio;
  if (name === 'digitalcube') {
    return <ImageDigitalcubeLogo width={width} height={height} />;
  }
  if (name === 'amimoto') {
    return <ImageAmimotoLogo width={width} height={height} />;
  }
  return <ImageShifterLogo width={width} height={height} />;
};
