import React, { FC } from 'react';
import { useMemo } from 'react';
import { ImageAmimotoLogo } from '..';
import { ImageDigitalcubeLogo } from '../Images/Logos/Digitalcube';
import { ImageShifterLogo } from '../Images/Logos/Shifter';
import { ImageShifterLogoFull } from '../Images/Logos/Shifter-full';

export type BrandName = 'shifter' | 'digitalcube' | 'amimoto' | 'shifter-full';
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
			case 'shifter-full':
					return 99 / 32;
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
	if (name === 'shifter-full') {
    return <ImageShifterLogoFull width={width} height={height} />;
  }
  return <ImageShifterLogo width={width} height={height} />;
};
